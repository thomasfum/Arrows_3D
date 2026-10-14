//----------------------------------------------------------------------
//
// TODO:
// tablet ombre ( precision: "highp")
//https://texturemap.app/normal-map-generator
//----------------------------------------------------------------------

import * as THREE from 'three'
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

document.body.style.backgroundImage = `url('${import.meta.env.BASE_URL}stars2.jpg')`;


const devCurrentLevelNo = 31; // Set the desired level number for development mode
THREE.Object3D.prototype.rotateAroundWorldAxis = function () {

    // rotate object around axis in world space (the axis passes through point)
    // axis is assumed to be normalized
    // assumes object does not have a rotated parent

    var q = new THREE.Quaternion();

    return function rotateAroundWorldAxis(point, axis, angle) {

        q.setFromAxisAngle(axis, angle);

        this.applyQuaternion(q);

        this.position.sub(point);
        this.position.applyQuaternion(q);
        this.position.add(point);

        return this;

    }

}();


class Level {

    constructor() { }
    Title = "";
    NbHeartTotal = 0;
    NbArrowsPerFace = 10;
    ArrowColor = "0x6BFF77"; //need to be a sting as Json do not support hexanumbers 
    ArrowsPoints = new Array();
    FaceLevels = new Array();
    NoEdges = new Array();
};
let currentLevel = new Level();

class Segment {

    constructor() { }
    arrowNo = 0;
    segmentNo = 0;
    type = Type.Body;
    direction = Direction.Up;
    prev_direction = Direction.Up;
    faceNo = 0;
    mesh = null;
    meshBack = null;
    x = 0;
    y = 0;
    inFace = true;
};


class Arrow {

    constructor() { }
    arrowNo = 0;
    segments = [];
    done = 0;
    movementOutFace = 0;
    clonedArrowSegments = undefined;

};
class FaceLevel {
    constructor(faceNo, points, position, rotation) { 
        this.faceNo = faceNo;
        this.points = points;
        this.position = position;
        this.rotation = rotation;
    }   
};

class Face {
    constructor() { }
    faceNo = 0;
    rotation = new THREE.Vector3(0, 0, 0);
};


let ArrowColor = 0x6BFF77;
const ArrowColorSelected = 0xEEEEEE;
const ArrowColorRed = 0xFF6B77;
const ArrowColorBack = 0x555555;
const arrowSpeed = 40;

let volumeMesh = undefined
let resetMesh = undefined
let cadreMesh = undefined

let currentLevelNo = 1;
const state = {
    width: 0,
    height: 0,
    editionMode: false,
    editionModeCreation: false,
    previousNormalizedX: null,
    previousNormalizedY: null,
    mouseDown: false,
    showFaceId: false,
    mouseDownLevel: -1,
    volume: true,
    editionMode_arrowSelected: -1,
    editionMode_segmentSelected: -1,
    groupModeEdition: false,
    lastbutton: -1,
    collisionAreadyCounted : false
};


let faces = [];
let arrows = [];
let sceneMeshes = [];
let faceMeshes = [];
let hearts = [];
let clickableHUD = [];

const Direction = Object.freeze({
    Up:   Symbol("Up"),
    Down:  Symbol("Down"),
    Left: Symbol("Left"),
    Right: Symbol("Right")
});

const FaceDirection = Object.freeze({
    Front: Symbol("Front"),
    Back: Symbol("Back"),
    Up: Symbol("Up"),
    Down: Symbol("Down"),
    Left: Symbol("Left"),
    Right: Symbol("Right")
});


const Type = Object.freeze({
    Tail:   Symbol("Tail"),
    Head:  Symbol("Head"),
    Angle: Symbol("Angle"),
    Body: Symbol("Body"),
    FromSide: Symbol("FromSide"),
    ToSide: Symbol("ToSide")
});


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
const sceneOrtho = new THREE.Scene();
const raycaster = new THREE.Raycaster()
const raycasterHUD = new THREE.Raycaster()


const progressBar = document.getElementById("progress-bar");
const progressContainer = document.getElementById("progress-container");
const loading = document.getElementById("loading");

const manager = new THREE.LoadingManager();

// Update progress bar
manager.onProgress = function (url, itemsLoaded, itemsTotal) {
    const progress = (itemsLoaded / itemsTotal) * 100;
    progressBar.style.width = progress + "%";
};

// Hide when done
manager.onLoad = function () {

    setTimeout(function (){
        loading.style.display = "none";
        prepareMaterialAndScene();
        tick();
    }, 2000);
};



//geometries
const geometryIcon = new THREE.PlaneGeometry(0.1, 0.1, 64, 64);
let geometrySquare = new THREE.PlaneGeometry(0.1, 0.1, 64, 64);
geometrySquare.computeTangents();

let group = new THREE.Group();// everything rotating

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
const cameraOrtho = new THREE.OrthographicCamera(-sizes.width / 2, sizes.width / 2, sizes.height / 2, -sizes.height / 2, 0.1, 10);

const ambientLight = new THREE.AmbientLight()
const light = new THREE.PointLight(0xffe6cc, 40)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
    precision: "highp" // Force la précision maximale sur tablette
})

const clock = new THREE.Clock()
const materials = [];
const textures = [];
let controls;

// textures
const loader = new THREE.TextureLoader(manager);
textures["textureWhiteHead"] = loader.load('arrow/head.png');
textures["textureWhiteBody"] = loader.load('arrow/body.png');
textures["textureWhiteTail"] = loader.load('arrow/tail.png');
textures["textureWhiteAngle"] = loader.load('arrow/angle.png');
//const textureBodyNormal = await loader.loadAsync('arrow/reflection.png');/
textures["textureHeadNormal"] = loader.load('arrow/head-normal.png');
textures["textureBodyNormal"] = loader.load('arrow/body-normal.png');
textures["textureTailNormal"] = loader.load('arrow/tail-normal.png');
textures["textureAngleNormal"] = loader.load('arrow/angle-normal.png');

//const textureBodyNormal = await loader.loadAsync('arrow/image_f59ba8ea.jpg');
textures["textureHelper1"] = loader.load('arrow/helper1.png');
textures["textureHelper2"] = loader.load('arrow/helper2.png');
textures["textureSquare"] = loader.load('arrow/square.png');
textures["textureWHeart"] = loader.load('heart.png');
textures["textureReset"] = loader.load('refresh-ccw.png');
textures["textureVolumeOn"] = loader.load('volume-2.png');
textures["textureVolumeOff"] = loader.load('volume-x.png');
textures["textureCadre"] = loader.load('cadre.png');
textures["textureBridgeCentral"] = loader.load('bridgeCentral.png');// 'bridgeCentral.png');
textures["textureBridgeSide1"] = loader.load('bridgeSide.png'); //'bridgeSide.png');
textures["textureBridgeSide2"] = loader.load('bridgeSide.png'); //'bridgeSide.png');
textures["textureBridgeBump"] = loader.load('bridgeSpecular.png'); //'bridgeSide.png');
textures["textureBridgeBumpheight"] = loader.load('bridgeHeight.png'); //'bridgeSide.png');


//font
const loaderFont = new FontLoader();
const font =  await loaderFont.loadAsync('optimer_regular.typeface.json');
/*
const loaderFont = new FontLoader(manager);
var font = loaderFont.load('optimer_regular.typeface.json');
*/


const audioClick = new Audio('click.mp3');
const audioLevelSuccess = new Audio('levelSuccess.mp3');
const audioLevelFailure = new Audio('levelFailure.mp3');
const audioFailure = new Audio('failure.mp3');

//materials
function PrepareMaterialBack(mat,color) {
    mat.transparent = true
    mat.depthTest = true
    mat.alphaTest = 0.1
    mat.metalness = 1;
    mat.roughness = 0.1;
    mat.color.setHex(color);
}

function PrepareMaterial(mat,color) {
    mat.transparent = true
    mat.depthTest = true
    mat.alphaTest = 0.1
    mat.roughness = 0.1;
    mat.metalness = 0.2;
    // mat.alphaToCoverage= true;
    //mat.metalnessMap = textureBodyNormal;
    //mat.normalMap = textureBodyNormal;
    if(color !== undefined) {
        mat.color.setHex(color);
    }
   // mat.metalnessMap = textureBodyNormal;
}
function PrepareMaterialHUD(mat, color) { 
    mat.transparent = true
    mat.depthTest = false
    mat.depthWrite = false
    mat.color.setHex(color);
    

}
function updateTexture(texture, repeat = false, forecRGB = true) {
    if (repeat == false) {
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
    }
    else { 
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
    }
   // texture.repeat.set(10, 10)
   // texture.offset.set(0.5, 0.5)
    if (forecRGB) {
        texture.colorSpace = THREE.SRGBColorSpace; 
    }
    texture.generateMipmaps = true;
    texture.needsUpdate = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.maxFilter = THREE.LinearFilter
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
}


function addNormalMap(material, textureNormal) {
    material.normalMap = textureNormal;
    textureNormal.colorSpace = THREE.NoColorSpace; // Très important !
    material.normalScale = new THREE.Vector2(0.05, -0.05);
    //material.roughness = 1;
    //material.metalness = 0;
    //material.normalMapType = THREE.ObjectSpaceNormalMap;
    material.shininess = 100;            // Plus cette valeur est haute, plus le reflet est petit et saturé
   // material.specular = new THREE.Color(0x333333); // Couleur du reflet brillant
    /*
    
    material.displacementMap = textureNormal;
    material.displacementScale = 0.004;
    */
    /*
    material.normalMap = textureNormal;
    material.normalScale = new THREE.Vector2(10, -1);
    material.shininess = 100;
    */
}


function prepareMaterialAndScene() {

        
    textures["textureBridgeSide2"].center.set(0.5, 0.5)
    textures["textureBridgeSide2"].rotation = Math.PI;
        
    materials["materialHead"] = new THREE.MeshStandardMaterial({ map: textures["textureWhiteHead"], side: THREE.FrontSide });
    PrepareMaterial(materials["materialHead"]);
    addNormalMap(materials["materialHead"], textures["textureHeadNormal"]);  


    materials["materialHeadBack"] = new THREE.MeshBasicMaterial({ map: textures["textureWhiteHead"] , side: THREE.BackSide });
    PrepareMaterialBack(materials["materialHeadBack"], ArrowColorBack);

    materials["materialBody"] = new THREE.MeshStandardMaterial({ map: textures["textureWhiteBody"],  side: THREE.FrontSide });
    PrepareMaterial(materials["materialBody"]);
    addNormalMap(materials["materialBody"], textures["textureBodyNormal"]);  

    materials["materialBodyBack"]    = new THREE.MeshBasicMaterial ({ map: textures["textureWhiteBody"], side: THREE.BackSide });
    PrepareMaterialBack(materials["materialBodyBack"], ArrowColorBack);

    materials["materialTail"] = new THREE.MeshStandardMaterial({ map: textures["textureWhiteTail"], side: THREE.FrontSide });
    PrepareMaterial(materials["materialTail"]);
    addNormalMap(materials["materialTail"], textures["textureTailNormal"]);  

    materials["materialTailBack"] = new THREE.MeshBasicMaterial( { map: textures["textureWhiteTail"], side: THREE.BackSide } );
    PrepareMaterialBack(materials["materialTailBack"], ArrowColorBack);

    materials["materialAngle"] = new THREE.MeshStandardMaterial({ map: textures["textureWhiteAngle"], side: THREE.FrontSide });
    PrepareMaterial(materials["materialAngle"]);
    addNormalMap(materials["materialAngle"], textures["textureAngleNormal"]);

    materials["materialAngleBack"] = new THREE.MeshBasicMaterial( { map: textures["textureWhiteAngle"], side: THREE.BackSide } );
    PrepareMaterialBack(materials["materialAngleBack"], ArrowColorBack);

    materials["materialHelper1"] = new THREE.MeshBasicMaterial({ map: textures["textureHelper1"], side: THREE.FrontSide });
    PrepareMaterial(materials["materialHelper1"]);

    materials["materialHelper2"] = new THREE.MeshBasicMaterial({ map: textures["textureHelper2"], side: THREE.FrontSide });
    PrepareMaterial(materials["materialHelper2"]);

    materials["materialHeadSelected"] = new THREE.MeshStandardMaterial({ map: textures["textureWhiteHead"], side: THREE.FrontSide });
    PrepareMaterial(materials["materialHeadSelected"], ArrowColorSelected);
    addNormalMap(materials["materialHeadSelected"], textures["textureHeadNormal"]);

    materials["materialBodySelected"] = new THREE.MeshStandardMaterial({ map: textures["textureWhiteBody"], side: THREE.FrontSide });
    PrepareMaterial(materials["materialBodySelected"], ArrowColorSelected);
    addNormalMap(materials["materialBodySelected"], textures["textureBodyNormal"]);

    materials["materialTailSelected"] = new THREE.MeshStandardMaterial({ map: textures["textureWhiteTail"], side: THREE.FrontSide });
    PrepareMaterial(materials["materialTailSelected"], ArrowColorSelected);
    addNormalMap(materials["materialTailSelected"], textures["textureTailNormal"]);

    materials["materialAngleSelected"] = new THREE.MeshStandardMaterial({ map: textures["textureWhiteAngle"], side: THREE.FrontSide });
    PrepareMaterial(materials["materialAngleSelected"], ArrowColorSelected);
    addNormalMap(materials["materialAngleSelected"], textures["textureAngleNormal"]);

    materials["materialHeadRed"] = new THREE.MeshStandardMaterial({ map: textures["textureWhiteHead"], side: THREE.FrontSide });
    PrepareMaterial(materials["materialHeadRed"], ArrowColorRed);
    addNormalMap(materials["materialHeadRed"], textures["textureHeadNormal"]);

    materials["materialBodyRed"] = new THREE.MeshStandardMaterial({ map: textures["textureWhiteBody"], side: THREE.FrontSide });
    PrepareMaterial(materials["materialBodyRed"], ArrowColorRed);
    addNormalMap(materials["materialBodyRed"], textures["textureBodyNormal"]);

    materials["materialTailRed"] = new THREE.MeshStandardMaterial({ map: textures["textureWhiteTail"], side: THREE.FrontSide });
    PrepareMaterial(materials["materialTailRed"], ArrowColorRed);
    addNormalMap(materials["materialTailRed"], textures["textureTailNormal"]);

    materials["materialAngleRed"] = new THREE.MeshStandardMaterial({ map: textures["textureWhiteAngle"], side: THREE.FrontSide });
    PrepareMaterial(materials["materialAngleRed"], ArrowColorRed);
    addNormalMap(materials["materialAngleRed"], textures["textureAngleNormal"]);

    materials["materialCube"] = new THREE.MeshStandardMaterial({
        map: null,
        color: 0x777777,
        roughness: 0.3,
        metalness: 0.2,
        transparent: true, // Required for opacity to work
        opacity: 0.70,       // 70% see-through
        depthTest: true
    });

    materials["materialHeart"]  = new THREE.MeshBasicMaterial({ map: textures["textureWHeart"], side: THREE.DoubleSide });
    PrepareMaterialHUD(materials["materialHeart"], 0xDD2E44);


    materials["materialHeartGray"] = new THREE.MeshBasicMaterial({ map: textures["textureWHeart"], side: THREE.DoubleSide });
    PrepareMaterialHUD(materials["materialHeartGray"], 0xAAAAAA);


    materials["materialReset"] = new THREE.MeshBasicMaterial({ map: textures["textureReset"], side: THREE.DoubleSide });
    PrepareMaterialHUD(materials["materialReset"], 0x8381FF);

    materials["materialVolume"] = new THREE.MeshBasicMaterial({ map: textures["textureVolumeOn"], side: THREE.DoubleSide });
    PrepareMaterialHUD(materials["materialVolume"], 0x8381FF);


    materials["materialCadre"] = new THREE.MeshBasicMaterial({ map: textures["textureCadre"], side: THREE.DoubleSide });
    PrepareMaterialHUD(materials["materialCadre"], ArrowColorRed);

    materials["materialBridgeCentral"] = new THREE.MeshPhongMaterial({ map: textures["textureBridgeCentral"], normalMap: textures["textureBridgeBump"], side: THREE.DoubleSide, transparent: true, depthTest: true, alphaTest: 0.1, normalScale: new THREE.Vector2(10, -10), shininess: 100, displacementMap: textures["textureBridgeBumpheight"], displacementScale: 0.004});
    materials["materialBridgeSide1"] = new THREE.MeshPhongMaterial({ map: textures["textureBridgeSide1"], normalMap: textures["textureBridgeBump"], side: THREE.DoubleSide, transparent: true, depthTest: true, alphaTest: 0.1, normalScale: new THREE.Vector2(10, -10), shininess: 100, displacementMap: textures["textureBridgeBumpheight"], displacementScale: 0.004 });
    materials["materialBridgeSide2"] = new THREE.MeshPhongMaterial({ map: textures["textureBridgeSide2"], normalMap: textures["textureBridgeBump"], side: THREE.DoubleSide, transparent: true, depthTest: true, alphaTest: 0.1, normalScale: new THREE.Vector2(10, -10), shininess: 100, displacementMap: textures["textureBridgeBumpheight"], displacementScale: 0.004 });



   
    scene.add(group);



    
    // Camera
  
    camera.position.z =window.devicePixelRatio *1.8
    scene.add(camera)

    cameraOrtho.position.z = window.devicePixelRatio * 1.4;



    // Ambient light

    ambientLight.color = new THREE.Color(0xffe6cc)
    ambientLight.intensity = 1//2
    camera.add(ambientLight)

    cameraOrtho.add(ambientLight.clone())
    /*
    // Directional light
    const directionalLight = new THREE.DirectionalLight(0xffe6cc, 2);// 0.8)

    //directionalLight.position.set(10, 25, 100)
    directionalLight.position.set(100 / 60, 100 / 60, 100 / 60)
    camera.add(directionalLight)
    //cameraOrtho.add(directionalLight.clone())
    */

    
    light.position.set(1.5,1.5,1.5)
    camera.add(light)
    cameraOrtho.add(light.clone())

    /*

    const intensity = 180; const width = 10; const height = 10;
    const rectLight = new THREE.RectAreaLight(0xffe6cc, intensity, width, height);
    rectLight.position.set(15, 15, 15);
    rectLight.lookAt(0, 0, 0);
    camera.add(rectLight);
    cameraOrtho.add(rectLight.clone());
    */
    // 1. Renderer

    renderer.setSize(sizes.width, sizes.height)
    renderer.transparent = true
    renderer.alpha = true;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // Render Loop Configuration
    renderer.autoClear = false;

    // 2. Create a WebGLMultisampleRenderTarget
    const size = renderer.getDrawingBufferSize(new THREE.Vector2());
    const target = new THREE.WebGLRenderTarget(size.width, size.height, {
        samples: 4 // Choices are usually 2, 4, or 8. 4 is the sweet spot.
    });

    /*
    // 3. Pass the target to your composer
    //const composer = new EffectComposer(renderer, target);

    //const renderPass = new RenderPass(scene, camera);
    //composer.addPass(renderPass);

    */
    // Camera Controls
    controls = new TrackballControls(camera, renderer.domElement);
    // controls.addEventListener('change', () => console.log("Controls Change"))
    // controls.addEventListener('start', () => console.log("Controls Start Event"))
    // controls.addEventListener('end', () => console.log("Controls End Event"))
    // controls.enabled = false
    controls.rotateSpeed = 8.0 * 0.4 / window.devicePixelRatio;
    //controls.zoomLevel = 1.5; 
     controls.zoomSpeed = 1.2
    // controls.panSpeed = 0.8
    // controls.keys = ['KeyA', 'KeyS', 'KeyD']
     controls.noPan = true //default false
    // controls.noRotate = true //default false
    // controls.noZoom = true //default false
    // controls.staticMoving = true //default false
    // controls.dynamicDampingFactor = 0.1
    controls.maxDistance = 3
    controls.minDistance = 0.5
    //controls.dampingFactor = 0.05; // friction
    //controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.1;

    CreateReset();
    createHudBorder();


    CreateVolume();   



    addEvents();
    console.log("Use E key to enter in Edition mode");
    //****************************************************************

    let SoundFromCookie = getCookie("Sound");
    if (SoundFromCookie != "" && SoundFromCookie != null && SoundFromCookie != undefined) {
        if (SoundFromCookie == "true") {
            state.volume = true;
        } else {
            state.volume = false;
        }
    }
    let LevelFromCookie = getCookie("Level");
    if (LevelFromCookie != "" && LevelFromCookie != null && LevelFromCookie != undefined) {
        currentLevelNo = parseInt(LevelFromCookie);
        console.log("Level from cookie: " + currentLevelNo);
    }

    if (import.meta.env.DEV) {
        // code inside here will only be included when import.meta.env.DEV is true.
        console.log('Dev mode')
        currentLevelNo = devCurrentLevelNo;
        state.volume = false;

    }
    SetVolume(state.volume)
    loadLevel(currentLevelNo);


}
// Animate

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
   // controls.distance = 0.5;
    controls.update()

    // Render
    renderer.clear();
    renderer.render(scene, camera)
    renderer.clearDepth();
    renderer.render(sceneOrtho, cameraOrtho);             // Your HUD overlay
    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

//****************************************************************

//tick();
/*setTimeout(function () {
    tick();
}, 1000);
*/

//-----------------------------------------------------------------
//Heads Up Display (HUD) functions

function showHudBorder(show) {
    if (cadreMesh) {
        cadreMesh.visible = show;
    }
}
function createHudBorder() {
    cadreMesh = new THREE.Mesh(geometryIcon, materials["materialCadre"]);
    cadreMesh.name = "Cadre";
    cadreMesh.renderOrder = 99999;// to be in front of arrow
    cadreMesh.scale.set(10 * sizes.width, 10 * sizes.height, 1);
    cadreMesh.visible = false;
    sceneOrtho.add(cadreMesh);
}
function CreateVolume() {
    volumeMesh = new THREE.Mesh(geometryIcon, materials["materialVolume"]   );
    volumeMesh.name = "Volume";
    volumeMesh.renderOrder = 99999;// to be in front of arrow

    //volumeMesh.position.set(-1.5, -0.65, -1);
    volumeMesh.position.set(sizes.width / 2 - 40,-sizes.height / 2+40, 0);
    volumeMesh.scale.set(250, 250, 1);
    clickableHUD.push(volumeMesh);
    sceneOrtho.add(volumeMesh);
}
function CreateReset() {
    resetMesh = new THREE.Mesh(geometryIcon, materials["materialReset"] );
    resetMesh.name = "Reset";
    resetMesh.renderOrder = 99999;// to be in front of arrow
    resetMesh.position.set(sizes.width/2-40,-sizes.height/2+80, 0);
   //resetMesh.position.set(-1, -0.65, -1);
    resetMesh.scale.set(250, 250, 1);
    clickableHUD.push(resetMesh);
    sceneOrtho.add(resetMesh);



    
}
function CreateHeartNumber( HeartNbTotal) {

    for (let i = 0; i < hearts.length; i++) {
        const object = sceneOrtho.getObjectByName("Heart" + i);
        if (object) {
            //camera.remove(object);
            sceneOrtho.remove(object);
        }
        }
    hearts = [];
    for (let i = 0; i < HeartNbTotal; i++) {
        let heartMesh = new THREE.Mesh(geometryIcon, materials["materialHeart"]);
        heartMesh.name = "Heart" + i;
        heartMesh.renderOrder = 99999;// to be in front of arrow
       hearts.push(heartMesh);
        //heartMesh.position.set((i * 0.12) - (HeartNbTotal / 2) * 0.12 + 0.06, -0.65, -1);
        heartMesh.position.set((i * 40) - (HeartNbTotal / 2) * 40 +20, -sizes.height / 2 + 80, -1);
        //heartMesh.scale.set(0.8, 0.8, 0.8);
        heartMesh.scale.set(300, 300, 1);
        //camera.add(heartMesh);
        sceneOrtho.add(heartMesh);
    }
}
function UpdateHeartNumber(camera, HeartNb, HeartNbTotal) {
    
    for (let i = 0; i < hearts.length; i++) {
        if (i < HeartNb) {
            hearts[i].material = materials["materialHeart"];
        } else {
            hearts[i].material = materials["materialHeartGray"];
        }
    }
    

}
function UpdateLevelText(camera, LevelNo) {
    
    const object = camera.getObjectByName("LevelText");
    if (object) {
       //camera.remove(object);
        camera.remove(object);
    }
    let txt = "Level " + LevelNo.toString();
    if (LevelNo <= 0)
        txt = "Test Level " + Math.abs(LevelNo).toString();
    if (LevelNo == -1001)
        txt = "You have finished all levels";
    if (LevelNo == -1002)
        txt = "Next Level";
    if (LevelNo == -1003)
        txt = "Retry Level";
    const fontGeometryLevel = new TextGeometry(txt, {
        font: font,
        size: 0.07,
        depth: 0.01,
        curveSegments: 12
    });
    fontGeometryLevel.center();
    const fontMaterial = new THREE.MeshNormalMaterial();
    fontMaterial.transparent = true;
    fontMaterial.depthTest = false;
    fontMaterial.depthWrite = false;
    const fontMeshLevel = new THREE.Mesh(fontGeometryLevel, fontMaterial);
    fontMeshLevel.name = "LevelText";
    let y = 0.65;
    if (LevelNo <-1000)
        y = 0.1;
    fontMeshLevel.position.set(0, y, -1);
    fontMeshLevel.renderOrder = 99999;// to be in front of arrow
    camera.add(fontMeshLevel);

}
function UpdateLineText(camera, LineNb) {


    
    const object = camera.getObjectByName("LineText");
    if (object) {
        camera.remove(object);
    }
    let txt = "";
    if (LineNb > 1)
        txt = LineNb.toString() + " Lines";// + "( " + window.devicePixelRatio + " )";
    else if (LineNb == 1)
        txt = LineNb.toString() + " Line";
    else {
        txt = "Done";
    }
    console.log("font", font);
    const fontGeometryLine = new TextGeometry(txt, {
        font: font,
        size: 0.04,
        depth: 0.01,
        curveSegments: 12
    });
    fontGeometryLine.center();
    const fontMaterial = new THREE.MeshNormalMaterial();
    //    console.log(fontMaterial)
    fontMaterial.transparent = true;
    fontMaterial.depthTest = false;
    fontMaterial.depthWrite = false;




    const fontMeshLine = new THREE.Mesh(fontGeometryLine, fontMaterial);
    fontMeshLine.name = "LineText";
    fontMeshLine.renderOrder = 99999;// to be in front of arrow
    fontMeshLine.position.set(0, 0.55, -1);
    //fontMeshLine.scale.set(0.1, 0.1, 0.1);
    //fontMeshLine.rotateY(Math.PI/2);
    camera.add(fontMeshLine);
}
function hideAll() {
    group.visible = false; // Hide the group if the JSON is invalid
    for (const heart of hearts) {
        heart.visible = false; // Hide hearts if the JSON is invalid
    }
    const object = camera.getObjectByName("LineText");
    if (object) {
        object.visible = false; // Hide the LineText object if the JSON is invalid
    }
}
function SetVolume(volume) {
   // console.log("SetVolume " + volume);
    if (volume) {
        setCookie("Sound", "true");
        materials["materialVolume"].map = textures["textureVolumeOn"];
    } else {
        setCookie("Sound", "false");
        materials["materialVolume"].map = textures["textureVolumeOff"];
    }
    materials["materialVolume"].needsUpdate = true;
}

//-----------------------------------------------------------------
//arrow
function createArrow(arrowNo, points, color) {
    const arrow = new Arrow();
    arrow.arrowNo = arrowNo;
    arrow.points = points;    


    arrow.group = 0;
    if(arrow.points[0].group !== undefined && arrow.points[0].group !== null && arrow.points[0].group!=0){
        arrow.group = arrow.points[0].group;
        arrow.groupLook = arrow.points[0].groupLook;
        arrow.groupPos = arrow.points[0].groupPos;
    }

    //console.log("-->createArrowNew " + arrowNo + " group " + arrow.group + " points " + points.length);
    let segmentNo = 0;
    let segDirection = Direction.Left;
    let oldFaceNo = points[0].z;

    let oldSegDirection = Direction.Left;
  
    for (let i = 0; i < points.length-1 ; i++)
    {
        let segType = Type.Body;

        //console.log("FROM 1 " + oldSegDirection.description)
        if (points[i].z != points[i + 1].z)//comming from other face, create a segment on the current face to show the arrow is leaving the face
        {
            arrow.segments.push(createSegment(arrowNo, segmentNo++, points[i].z, oldFaceNo, points[i + 1].z, Type.FromSide, segDirection, oldSegDirection,-1, points[i].x, points[i].y));
        }
        else 
        if (points[i].x == points[i + 1].x)//vericaly
        {
            oldSegDirection = segDirection;
            if (points[i].y > points[i + 1].y) {

                let zChange = false;
                segDirection = Direction.Up;
                for (let y = points[i].y; y > points[i + 1].y; y--) {
                    if (y == points[i].y) {
                        //console.log("-->createArrowNew " + arrowNo + " segment " + oldSegDirection.description + "=>" + segDirection.description + " " + segmentNo + " from " + points[i] + " to " + points[i + 1]);
                        if (oldSegDirection === Direction.Left || oldSegDirection === Direction.Right)
                            segType = Type.Angle;
                    }
                    else
                        segType = Type.Body;
                    if (i > 0 && points[i - 1].z != points[i].z && zChange == false) {
                        segType = Type.ToSide;
                        zChange = true;
                    }
                    if (i == 0 && y == points[i].y)
                        segType = Type.Tail;
                    if (i == points.length - 2 && y==points[i + 1].y)
                        segType = Type.Head;
                    arrow.segments.push(createSegment(arrowNo, segmentNo++, points[i].z, oldFaceNo,-1, segType, segDirection, oldSegDirection,-1, points[i].x, y));
                    oldSegDirection = segDirection;
                   
                }
            }
            else {
                let zChange = false;
                segDirection = Direction.Down;
                for (let y = points[i].y; y < points[i + 1].y; y++) {
                    if (y == points[i].y) {
                        //console.log("-->createArrowNew " + arrowNo + " segment " + oldSegDirection.description + "=>" + segDirection.description + " " + segmentNo + " from " + points[i] + " to " + points[i + 1]);
                        if (oldSegDirection === Direction.Left || oldSegDirection === Direction.Right)
                            segType = Type.Angle;
                    }
                    else
                        segType = Type.Body;
                    if (i > 0 && points[i - 1].z != points[i].z && zChange == false) {
                        segType = Type.ToSide;
                        zChange = true;
                    }
                    if (i == 0 && y == points[i].y)
                        segType = Type.Tail;
                    if (i == points.length - 2 && y==points[i + 1].y)
                        segType = Type.Head;
                    arrow.segments.push(createSegment(arrowNo, segmentNo++, points[i].z, oldFaceNo,-1, segType, segDirection, oldSegDirection,-1, points[i].x, y));
                    oldSegDirection = segDirection;
                }
            }

        }
        else if (points[i].y == points[i + 1].y) {

            oldSegDirection = segDirection;
            if (points[i].x > points[i + 1].x) {
                let zChange = false;
                segDirection = Direction.Left;
                for (let x = points[i].x; x > points[i + 1].x; x--) {
                    if (x == points[i].x) {
                        //console.log("-->createArrowNew " + arrowNo + " segment " + oldSegDirection.description + "=>" + segDirection.description + " " + segmentNo + " from " + points[i] + " to " + points[i + 1]);
                        if (oldSegDirection === Direction.Up || oldSegDirection === Direction.Down)
                            segType = Type.Angle;
                    }
                    else
                        segType = Type.Body;
                    if (i > 0 && points[i - 1].z != points[i].z && zChange == false) {
                        segType = Type.ToSide;
                        zChange = true;
                    }
                    if (i == 0 && x == points[i].x)
                        segType = Type.Tail;
                    if (i == points.length - 2 && x==points[i + 1].x)
                        segType = Type.Head;
                    arrow.segments.push(createSegment(arrowNo, segmentNo++, points[i].z, oldFaceNo,-1, segType, segDirection, oldSegDirection,-1, x, points[i].y));
                    oldSegDirection = segDirection;
                }

            }
            else {
                let zChange = false;
               
                segDirection = Direction.Right;
                for (let x = points[i].x; x < points[i + 1].x; x++) {

                   
                    if (x == points[i].x) {
                        //console.log("-->createArrowNew " + arrowNo + " segment " + oldSegDirection.description + "=>" + segDirection.description + " " + segmentNo + " from " + points[i] + " to " + points[i + 1]);
                        if (oldSegDirection === Direction.Up || oldSegDirection === Direction.Down)
                            segType = Type.Angle;
                    }
                    else
                        segType = Type.Body;
                    if (i > 0 && points[i - 1].z != points[i].z && zChange == false) {
                        segType = Type.ToSide;
                        zChange = true;
                    }
                    if (i == 0 && x == points[i].x)
                        segType = Type.Tail;
                    if (i == points.length - 2 && x==points[i + 1].x)
                        segType = Type.Head;
                    arrow.segments.push(createSegment(arrowNo, segmentNo++, points[i].z, oldFaceNo,-1, segType, segDirection, oldSegDirection,-1, x, points[i].y));
                    oldSegDirection = segDirection;
                    //console.log("going Right" + oldSegDirection.description)
                }

            }

            //console.log("FROM X " + oldSegDirection.description)
            oldSegDirection = segDirection;
            
        }
        
       // else {
       //     console.log("probably changing face");
       //     arrow.segments.push(createSegment(arrowNo, segmentNo++, points[i].z, oldFaceNo,-1, segType, segDirection, segDirection,-1, points[i].x, points[i].y));
      //  }
        
        oldFaceNo = points[i].z;
        //console.log("FROM 2 " + oldSegDirection.description)
    }

    //console.log("-->createArrowNew " + arrowNo + " segment HEAD " + segDirection.description + " " + segmentNo);

    if (points.length > 1 && points[points.length - 2].z != points[points.length - 1].z)//comming from other face, create a segment on the current face to show the arrow is leaving the face
    {
        arrow.segments.push(createSegment(arrowNo, segmentNo++, points[points.length - 1].z, oldFaceNo, -1, Type.FromSide, segDirection, segDirection, -1, points[points.length - 1].x, points[points.length - 1].y));
    }
    else
        arrow.segments.push(createSegment(arrowNo, segmentNo++, points[points.length - 1].z, oldFaceNo, -1, Type.Head, segDirection, segDirection, -1, points[points.length - 1].x, points[points.length - 1].y));


    arrow.points = points;

    //fix issue at face limit for the FromSide segments, we need to set the direction of the segment to the direction of the next segment
    for (let i = 0; i < arrow.segments.length ; i++) {
        let segment = arrow.segments[i];

        let segmentFace = faces.find(face => face.faceNo === segment.faceNo);
        if (segmentFace == undefined || segmentFace == null) {
            console.error("can't find face for segment " + segment.segmentNo);
        }


        let opt = -1;

        let px = undefined;
        let py = undefined
        let pz = undefined
        let nx = undefined;
        let ny = undefined
        let nz = undefined


        let cx = arrow.segments[i].mesh.position.x.toFixed(3) - 0;// -0 => to get 0.00 and not -0.00 for a value like -0.001
        let cy = arrow.segments[i].mesh.position.y.toFixed(3) - 0;
        let cz = arrow.segments[i].mesh.position.z.toFixed(3) - 0;

        if (i > 0) {
            px = arrow.segments[i - 1].mesh.position.x.toFixed(3) - 0;
            py = arrow.segments[i - 1].mesh.position.y.toFixed(3) - 0;
            pz = arrow.segments[i - 1].mesh.position.z.toFixed(3) - 0;
        }



        if (i < arrow.segments.length - 1) {
            nx = arrow.segments[i + 1].mesh.position.x.toFixed(3) - 0;
            ny = arrow.segments[i + 1].mesh.position.y.toFixed(3) - 0;
            nz = arrow.segments[i + 1].mesh.position.z.toFixed(3) - 0;
        }

        if (segment.type == Type.FromSide || segment.type == Type.ToSide) {

            let ax = undefined;
            let ay = undefined;
            let az = undefined;

            let bx = undefined;
            let by = undefined;
            let bz = undefined;

            if (segment.type == Type.FromSide) {
                ax  = nx;
                ay = ny;
                az = nz;

                bx = px;
                by = py;
                bz = pz;
            }

            if (segment.type == Type.ToSide) {

                ax = px;
                ay = py;
                az = pz;

                bx = nx;
                by = ny;
                bz = nz;
            }
            //---- UP
            //Right
            if (segment.faceDirection == FaceDirection.Up && (cx - ax < 0) && cz == bz) opt = 1;
            if (segment.faceDirection == FaceDirection.Up && (cx - ax < 0) && cz > bz) opt = 4;
            if (segment.faceDirection == FaceDirection.Up && (cx - ax < 0) && cz < bz) opt = 3;
            //Left
            if (segment.faceDirection == FaceDirection.Up && (cx - ax > 0) && cz == bz) opt = 1;
            if (segment.faceDirection == FaceDirection.Up && (cx - ax > 0) && cz > bz) opt = 6;
            if (segment.faceDirection == FaceDirection.Up && (cx - ax > 0) && cz < bz) opt = 5;
            //Front
            if (segment.faceDirection == FaceDirection.Up && (cz - az < 0) && cx == bx) opt = 1;
            if (segment.faceDirection == FaceDirection.Up && (cz - az < 0) && cx > bx) opt = 5;
            if (segment.faceDirection == FaceDirection.Up && (cz - az < 0) && cx < bx) opt = 3;
            //back
            if (segment.faceDirection == FaceDirection.Up && (cz - az > 0) && cx == bx) opt = 1;
            if (segment.faceDirection == FaceDirection.Up && (cz - az > 0) && cx > bx) opt = 6;
            if (segment.faceDirection == FaceDirection.Up && (cz - az > 0) && cx < bx) opt = 4;

            //---- DOWN
            //right
            if (segment.faceDirection == FaceDirection.Down && (cx - ax < 0) && cz == bz) opt = 1;
            if (segment.faceDirection == FaceDirection.Down && (cx - ax < 0) && cz > bz) opt = 6;
            if (segment.faceDirection == FaceDirection.Down && (cx - ax < 0) && cz < bz) opt = 5;
            //left
            if (segment.faceDirection == FaceDirection.Down && (cx - ax > 0) && cz == bz) opt = 1;
            if (segment.faceDirection == FaceDirection.Down && (cx - ax > 0) && cz > bz) opt = 4;
            if (segment.faceDirection == FaceDirection.Down && (cx - ax > 0) && cz < bz) opt = 3;
            //front
            if (segment.faceDirection == FaceDirection.Down && (cz - az < 0) && cx == bx) opt = 1;
            if (segment.faceDirection == FaceDirection.Down && (cz - az < 0) && cx > bx) opt = 3;
            if (segment.faceDirection == FaceDirection.Down && (cz - az < 0) && cx < bx) opt = 5;
            //back
            if (segment.faceDirection == FaceDirection.Down && (cz - az > 0) && cx == bx) opt = 1;
            if (segment.faceDirection == FaceDirection.Down && (cz - az > 0) && cx > bx) opt = 4;
            if (segment.faceDirection == FaceDirection.Down && (cz - az > 0) && cx < bx) opt = 6;
            

            //---- FRONT
            //up
            if (segment.faceDirection == FaceDirection.Front && (cy - ay < 0) && cx == bx) opt = 1;
            if (segment.faceDirection == FaceDirection.Front && (cy - ay < 0) && cx > bx) opt = 3;
            if (segment.faceDirection == FaceDirection.Front && (cy - ay < 0) && cx < bx) opt = 5;
            //down
            if (segment.faceDirection == FaceDirection.Front && (cy - ay > 0) && cx == bx) opt = 1;
            if (segment.faceDirection == FaceDirection.Front && (cy - ay > 0) && cx > bx) opt = 4;
            if (segment.faceDirection == FaceDirection.Front && (cy - ay > 0) && cx < bx) opt = 6;
            //right
            if (segment.faceDirection == FaceDirection.Front && (cx - ax < 0) && cy == by) opt = 1;
            if (segment.faceDirection == FaceDirection.Front && (cx - ax < 0) && cy > by) opt = 6;
            if (segment.faceDirection == FaceDirection.Front && (cx - ax < 0) && cy < by) opt = 5;
            //left
            if (segment.faceDirection == FaceDirection.Front && (cx - ax > 0) && cy == by) opt = 1;
            if (segment.faceDirection == FaceDirection.Front && (cx - ax > 0) && cy > by) opt = 4;
            if (segment.faceDirection == FaceDirection.Front && (cx - ax > 0) && cy < by) opt = 3;


            //---- RIGHT
            //up
            if (segment.faceDirection == FaceDirection.Right && (cy - ay < 0) && cz == bz) opt = 1;
            if (segment.faceDirection == FaceDirection.Right && (cy - ay < 0) && cz > bz) opt = 5;
            if (segment.faceDirection == FaceDirection.Right && (cy - ay < 0) && cz < bz) opt = 3;
            //down
            if (segment.faceDirection == FaceDirection.Right && (cy - ay > 0) && cz == bz) opt = 1;
            if (segment.faceDirection == FaceDirection.Right && (cy - ay > 0) && cz > bz) opt = 6;
            if (segment.faceDirection == FaceDirection.Right && (cy - ay > 0) && cz < bz) opt = 4;
            //front
            if (segment.faceDirection == FaceDirection.Right && (cz - az < 0) && cy == by) opt = 1;
            if (segment.faceDirection == FaceDirection.Right && (cz - az < 0) && cy > by) opt = 4;
            if (segment.faceDirection == FaceDirection.Right && (cz - az < 0) && cy < by) opt = 3;
            //back
            if (segment.faceDirection == FaceDirection.Right && (cz - az > 0) && cy == by) opt = 1;
            if (segment.faceDirection == FaceDirection.Right && (cz - az > 0) && cy > by) opt = 6;
            if (segment.faceDirection == FaceDirection.Right && (cz - az > 0) && cy < by) opt = 5;

            //---- BACK
            //up
            if (segment.faceDirection == FaceDirection.Back && (cy - ay < 0) && cx == bx) opt = 1;
            if (segment.faceDirection == FaceDirection.Back && (cy - ay < 0) && cx > bx) opt = 4;
            if (segment.faceDirection == FaceDirection.Back && (cy - ay < 0) && cx < bx) opt = 6;
            //down
            if (segment.faceDirection == FaceDirection.Back && (cy - ay > 0) && cx == bx) opt = 1;
            if (segment.faceDirection == FaceDirection.Back && (cy - ay > 0) && cx > bx) opt = 3;
            if (segment.faceDirection == FaceDirection.Back && (cy - ay > 0) && cx < bx) opt = 5;
            //right
            if (segment.faceDirection == FaceDirection.Back && (cx - ax < 0) && cy == by) opt = 1;
            if (segment.faceDirection == FaceDirection.Back && (cx - ax < 0) && cy > by) opt = 5;
            if (segment.faceDirection == FaceDirection.Back && (cx - ax < 0) && cy < by) opt = 6;
            //left
            if (segment.faceDirection == FaceDirection.Back && (cx - ax > 0) && cy == by) opt = 1;
            if (segment.faceDirection == FaceDirection.Back && (cx - ax > 0) && cy > by) opt = 3;
            if (segment.faceDirection == FaceDirection.Back && (cx - ax > 0) && cy < by) opt = 4;
        

            //--- LEFT
            //up
            if (segment.faceDirection == FaceDirection.Left && (cy - ay < 0) && cz == bz) opt = 1;
            if (segment.faceDirection == FaceDirection.Left && (cy - ay < 0) && cz > bz) opt = 3;
            if (segment.faceDirection == FaceDirection.Left && (cy - ay < 0) && cz < bz) opt = 5;
            //down
            if (segment.faceDirection == FaceDirection.Left && (cy - ay > 0) && cz == bz) opt = 1;
            if (segment.faceDirection == FaceDirection.Left && (cy - ay > 0) && cz > bz) opt = 4;
            if (segment.faceDirection == FaceDirection.Left && (cy - ay > 0) && cz < bz) opt = 6;
            //front
            if (segment.faceDirection == FaceDirection.Left && (cz - az < 0) && cy == by) opt = 1;
            if (segment.faceDirection == FaceDirection.Left && (cz - az < 0) && cy > by) opt = 6;
            if (segment.faceDirection == FaceDirection.Left && (cz - az < 0) && cy < by) opt = 5;
            //back
            if (segment.faceDirection == FaceDirection.Left && (cz - az > 0) && cy == by) opt = 1;
            if (segment.faceDirection == FaceDirection.Left && (cz - az > 0) && cy > by) opt = 4;
            if (segment.faceDirection == FaceDirection.Left && (cz - az > 0) && cy < by) opt = 3;
            
         
        }
       // opt = opt+10
   

        if (segment.type == Type.FromSide) {
            //head
            if (i == arrow.segments.length - 1) {
                if (segment.faceDirection == FaceDirection.Right) {
                    if ((cx - px > 0) && (cy == py) && (cz - pz < 0)) opt = 3;
                    if ((cx - px > 0) && (cy - py > 0) && (cz == pz)) opt = 4;
                    if ((cx - px > 0) && (cy == py) && (cz - pz > 0)) opt = 6;
                    if ((cx - px > 0) && (cy - py < 0) && (cz == pz)) opt = 5;
                }
                if (segment.faceDirection == FaceDirection.Front) {
                    if ((cx - px < 0) && (cy == py) && (cz - pz > 0)) opt = 6;
                    if ((cx - px > 0) && (cy == py) && (cz - pz > 0)) opt = 3;
                    if ((cx == px) && (cy - py > 0) && (cz - pz > 0)) opt = 4;
                    if ((cx == px) && (cy - py < 0) && (cz - pz > 0)) opt = 5;
                }
                if (segment.faceDirection == FaceDirection.Up) {
                    if ((cx == px) && (cy - py > 0) && (cz - pz < 0)) opt = 5;
                    if ((cx - px > 0) && (cy - py > 0) && (cz == pz)) opt = 6;
                    if ((cx - px < 0) && (cy - py > 0) && (cz == pz)) opt = 3;
                    if ((cx == px) && (cy - py > 0) && (cz - pz > 0)) opt = 4;
                }
                if (segment.faceDirection == FaceDirection.Back) {
                    if ((cx == px) && (cy - py > 0) && (cz - pz < 0)) opt = 5;
                    if ((cx - px > 0) && (cy == py) && (cz - pz < 0)) opt = 3;
                    if ((cx - px < 0) && (cy == py) && (cz - pz < 0)) opt = 6;
                    if ((cx == px) && (cy - py < 0) && (cz - pz < 0)) opt = 4;
                }
                if (segment.faceDirection == FaceDirection.Down) {
                    if ((cx - px > 0) && (cy - py < 0) && (cz == pz)) opt = 3;
                    if ((cx - px < 0) && (cy - py < 0) && (cz == pz)) opt = 6;
                    if ((cx == px) && (cy - py < 0) && (cz - pz > 0)) opt = 4;
                    if ((cx == px) && (cy - py < 0) && (cz - pz < 0)) opt = 5;
                }
                if (segment.faceDirection == FaceDirection.Left) {
                    if ((cx - px < 0) && (cy == py) && (cz - pz < 0)) opt = 6;
                    if ((cx - px < 0) && (cy - py > 0) && (cz == pz)) opt = 4;
                    if ((cx - px < 0) && (cy == py) && (cz - pz > 0)) opt = 3;
                    if ((cx - px < 0) && (cy - py < 0) && (cz == pz)) opt = 5;
                }

            }


            //tail
            if (i == 0) {
                if (segment.faceDirection == FaceDirection.Right) {
                    if ((cx - nx > 0) && (cy - ny < 0) && (cz == nz)) opt = 4;
                    if ((cx - nx > 0) && (cy == ny) && (cz - nz < 0)) opt = 6;
                    if ((cx - nx > 0) && (cy == ny) && (cz - nz > 0)) opt = 3;
                    if ((cx - nx > 0) && (cy - ny > 0) && (cz == nz)) opt = 5;
                }
                if (segment.faceDirection == FaceDirection.Front) {
                    if ((cx == nx) && (cy - ny < 0) && (cz - nz > 0)) opt = 4;
                    if ((cx - nx > 0) && (cy == ny) && (cz - nz > 0)) opt = 6;
                    if ((cx - nx < 0) && (cy == ny) && (cz - nz > 0)) opt = 3;
                    if ((cx == nx) && (cy - ny > 0) && (cz - nz > 0)) opt = 5;
                }
                if (segment.faceDirection == FaceDirection.Up) {
                    if ((cx == nx) && (cy - ny > 0) && (cz - nz > 0)) opt = 5;
                    if ((cx - nx > 0) && (cy - ny > 0) && (cz == nz)) opt = 3;
                    if ((cx - nx < 0) && (cy - ny > 0) && (cz == nz)) opt = 6;
                    if ((cx == nx) && (cy - ny > 0) && (cz - nz < 0)) opt = 4;
                    if ((cx - nx < 0) && (cy - ny > 0) && (cz - nz < 0)) opt = 6;
                }
                if (segment.faceDirection == FaceDirection.Back) {
                    if ((cx == nx) && (cy - ny < 0) && (cz - nz < 0)) opt = 5;
                    if ((cx - nx < 0) && (cy == ny) && (cz - nz < 0)) opt = 3;
                    if ((cx - nx > 0) && (cy == ny) && (cz - nz < 0)) opt = 6;
                    if ((cx == nx) && (cy - ny > 0) && (cz - nz < 0)) opt = 4;
                }
                if (segment.faceDirection == FaceDirection.Down) {
                    if ((cx - nx < 0) && (cy - ny < 0) && (cz == nz)) opt = 3;
                    if ((cx == nx) && (cy - ny < 0) && (cz - nz < 0)) opt = 4;
                    if ((cx - nx > 0) && (cy - ny < 0) && (cz == nz)) opt = 6;
                    if ((cx == nx) && (cy - ny < 0) && (cz - nz > 0)) opt = 5;
                }
                if (segment.faceDirection == FaceDirection.Left) {
                    if ((cx - nx < 0) && (cy - ny < 0) && (cz == nz)) opt = 4;
                    if ((cx - nx < 0) && (cy == ny) && (cz - nz > 0)) opt = 6;
                    if ((cx - nx < 0) && (cy == ny) && (cz - nz < 0)) opt = 3;
                    if ((cx - nx < 0) && (cy - ny > 0) && (cz == nz)) opt = 5;
                    if ((cx - nx < 0) && (cy - ny < 0) && (cz - nz > 0)) opt = 4;
                }

            }
        }
        
        if (opt == 1 || opt == 11) {
            segment.mesh.material = materials["materialBody"];
            if (opt == 11) {
                segment.mesh.material = materials["materialBodyRed"];
                console.log("RED!!!!")
            }
            if (segment.meshBack) {
                segment.meshBack.material = materials["materialBodyBack"];
            }
            rotateBodySegmentMesh(segment);
            segment.sideFixed = true;
            segment.sideFixedSubType = Type.Body;
        }

        if (opt == 2 || opt == 12) {
            segment.mesh.material = materials["materialBody"];
            if (opt == 12) {
                segment.mesh.material = materials["materialBodyRed"];
                console.log("RED!!!!")
            }
            if (segment.meshBack) {
                segment.meshBack.material = materials["materialBodyBack"];
            }
            rotateBodySegmentMesh(segment);
            segment.sideFixed = true;
            segment.sideFixedSubType = Type.Body;
        }

        if (opt == 3 || opt == 13) {
            segment.mesh.material = materials["materialAngle"];
            if (opt == 13) {
                segment.mesh.material = materials["materialAngleRed"];
                console.log("RED!!!!")
            }
            segment.angleType = 2;
            segment.meshBack.material = materials["materialAngleBack"];
            segment.mesh.rotation.z = segmentFace.rotation.z + (Math.PI)/2;
            segment.meshBack.rotation.z = segmentFace.rotation.z + (Math.PI) / 2;
            segment.sideFixed = true;
            segment.sideFixedSubType = Type.Angle;
            // console.log("INNNN 3");
            segment.direction = Direction.Right;
            if (segmentFace.direction == FaceDirection.Up || segmentFace.direction == FaceDirection.Back) {
                //here
                segment.direction = Direction.Left;
            }
            if (segmentFace.direction == FaceDirection.Down) {
                segment.direction = Direction.Right;//right ok
            }
        }

        if (opt == 4 || opt == 14) {
            segment.mesh.material = materials["materialAngle"];
            if (opt == 14) {
                segment.mesh.material = materials["materialAngleRed"];
                console.log("RED!!!!")
            }
            segment.angleType = 2;
            segment.meshBack.material = materials["materialAngleBack"];
            segment.mesh.rotation.z = segmentFace.rotation.z - (Math.PI);
            segment.meshBack.rotation.z = segmentFace.rotation.z - (Math.PI);
            segment.sideFixed = true;
            segment.sideFixedSubType = Type.Angle;
            //console.log("INNNN 4");
            segment.direction = Direction.Up;
            if (segmentFace.direction == FaceDirection.Up || segmentFace.direction == FaceDirection.Back) {
                segment.direction = Direction.Down;
            }
            if (segmentFace.direction == FaceDirection.Down) {
                segment.direction = Direction.Up;
            }
        }

        if (opt == 5 || opt == 15) {
            segment.mesh.material = materials["materialAngle"];
            if (opt == 15) {
                segment.mesh.material = materials["materialAngleRed"];
                console.log("RED!!!!")
            }
            segment.angleType = 2;
            segment.meshBack.material = materials["materialAngleBack"];
            segment.mesh.rotation.z = segmentFace.rotation.z;
            segment.meshBack.rotation.z = segmentFace.rotation.z;
            segment.sideFixed = true;
            segment.sideFixedSubType = Type.Angle;
            // console.log("INNNN 5");
            segment.direction = Direction.Down;
            if (segmentFace.direction == FaceDirection.Up || segmentFace.direction == FaceDirection.Back) {
                segment.direction = Direction.Up;
            }
            if (segmentFace.direction == FaceDirection.Down) {
                segment.direction = Direction.Down;
            }
        }
        if (opt == 6 || opt == 16) {
            
            segment.mesh.material = materials["materialAngle"];
            if (opt == 16) {
                segment.mesh.material = materials["materialAngleRed"];
                console.log("RED!!!!")
            }
            segment.angleType = 2;
            segment.meshBack.material = materials["materialAngleBack"];
            segment.mesh.rotation.z = segmentFace.rotation.z - (Math.PI) / 2;
            segment.meshBack.rotation.z = segmentFace.rotation.z - + (Math.PI) / 2;
            segment.sideFixed = true;
            segment.sideFixedSubType = Type.Angle;
            //console.log("INNNN 6");
            segment.direction = Direction.Left;
            if (segmentFace.direction == FaceDirection.Up || segmentFace.direction == FaceDirection.Back) {
                segment.direction = Direction.Right;
            }
            if (segmentFace.direction == FaceDirection.Down) {
                segment.direction = Direction.Left;//left OK
            }
        }

        if (segment.type == Type.FromSide || segment.type == Type.ToSide) {
            if (i == 0) {
                segment.sideFixed = true;
                //console.log("TAIL " + opt + " " + segment.direction.description);
                segment.mesh.material = materials["materialTail"];
                if (opt > 10) {
                    segment.mesh.material = materials["materialTailRed"];
                }
                if (segment.meshBack) {
                    segment.meshBack.material = materials["materialTailBack"];
                }
                segment.sideFixedSubType = Type.Tail;

            }
            if (i == arrow.segments.length - 1) {
                segment.sideFixed = true;
                //console.log("HEAD " + opt + " " + segment.direction.description);
                segment.mesh.material = materials["materialHead"];
                if (opt > 10) {
                    segment.mesh.material = materials["materialHeadRed"];
                }
                if (segment.meshBack) {
                    segment.meshBack.material = materials["materialHeadBack"];
                }
                segment.sideFixedSubType = Type.Head;
            }
            if (opt == -1) {
                console.log("!!!!!!!! MISSED SIDE FIXED IN !!!!!!!!! for arrow " + arrow.arrowNo + ", segment " + segment.segmentNo + " " + segment.type.description);
            }
        }
    }
    for (let i = 0; i < arrow.segments.length; i++) {
        let segment = arrow.segments[i];
        if (segment.type == Type.FromSide || segment.type == Type.ToSide) {
            if (segment.sideFixed == false) {
                console.log("!!!!!!!! MISSED SIDE FIXED !!!!!!!!! for arrow " + arrow.arrowNo + ", segment " + segment.segmentNo + " " + segment.type.description);
            }
            if (segment.sideFixed == undefined) {
                console.log("!!!!!!!! MISSED SIDE FIXED UNDEFINED !!!!!!!!! for arrow " + arrow.arrowNo + ", segment " + segment.segmentNo + " " + segment.type.description);
            }
        }
    }
    showGroup(arrow);
    arrows.push(arrow);
}
function removeArrow(arrowNo, arrow) {
    for (let i = 0; i < arrows.length; i++) {
      const arrow = arrows[i];
        if (arrow.arrowNo == arrowNo) {
            for (let j = 0; j < arrow.segments.length; j++) {

                //find and remove from sceneMeshes
                for (let k = 0; k < sceneMeshes.length; k++) {
                    if (sceneMeshes[k] === arrow.segments[j].mesh) {
                        sceneMeshes.splice(k, 1);
                       // console.log("remove seg" + arrow.segments[j].segmentNo);
                        break;
                    }
                }
                group.remove(arrow.segments[j].mesh);
                group.remove(arrow.segments[j].meshBack);
                arrow.segments[j].mesh = null;
                arrow.segments[j].meshBack = null;
            }
            arrow.segments = [];
            arrows.splice(i, 1);
        }

    }
}
function showGroup(arrow) {
    if (arrow.group > 0) {
        //console.log("GROUP " + arrow.group + " " + arrow.arrowNo + " + segment  " + arrow.groupPos);
        for (let i = 0; i < arrow.segments.length; i++) {
            let segment = arrow.segments[i];
            if (arrow.groupPos == i) {
                //console.log("GROUP " + arrow.group + " " + arrow.arrowNo + " + segment FOUND " + segment.segmentNo);
                segment.mesh.prev_material = segment.mesh.material;
                if (arrow.groupLook == 1)
                    segment.mesh.material = materials["materialBridgeCentral"];
                if (arrow.groupLook == 0)
                    segment.mesh.material = materials["materialBridgeSide1"];
                if (arrow.groupLook == 2)
                    segment.mesh.material = materials["materialBridgeSide2"];
            }
            else {
                if (segment.mesh.prev_material != undefined && segment.mesh.prev_material != null) {
                    segment.mesh.material = segment.mesh.prev_material;
                }
            }
        }
    }
}
function rotateBodySegmentMesh(segment) {
    if (segment.direction === Direction.Right) {
        segment.mesh.rotation.z = Math.PI / 2;
        if (segment.meshBack) {
            segment.meshBack.rotation.z = Math.PI / 2;
        }
    }
    if (segment.direction === Direction.Left) {
        segment.mesh.rotation.z = -Math.PI / 2;
        if (segment.meshBack) {
            segment.meshBack.rotation.z = -Math.PI / 2;
        }
    }
    if (segment.direction === Direction.Up) {
        segment.mesh.rotation.z = Math.PI;
        if (segment.meshBack) {
            segment.meshBack.rotation.z = Math.PI;
        }
    }
}
function setAndRotateAngle(segment, segmentFace, faceCorrection,debug) { 

 

    //if (debug == true)
     //   faceCorrection = -1;

    if (segment.prev_direction === Direction.Right && segment.direction === Direction.Down) {
        segment.mesh.material = materials["materialAngle"];
        segment.angleType = 2;
        segment.meshBack.material = materials["materialAngleBack"];

        segment.mesh.rotation.z = segmentFace.rotation.z - (Math.PI);
        segment.meshBack.rotation.z = segmentFace.rotation.z - (Math.PI);
        if (faceCorrection == -1) { 
            segment.mesh.rotation.z = segmentFace.rotation.z + 0;
            segment.meshBack.rotation.z = segmentFace.rotation.z + 0;
        }
    

    } else if (segment.prev_direction === Direction.Down && segment.direction === Direction.Right) {
        if (debug == true)
            segment.mesh.material = materials["materialAngleRed"];
        else
            segment.mesh.material = materials["materialAngle"];
        segment.angleType = 1;
        segment.meshBack.material = materials["materialAngleBack"];

        segment.mesh.rotation.z = segmentFace.rotation.z + 0;
        segment.meshBack.rotation.z = segmentFace.rotation.z + 0;
        if (faceCorrection == -1) {
            segment.mesh.rotation.z = segmentFace.rotation.z - (Math.PI);
            segment.meshBack.rotation.z = segmentFace.rotation.z - (Math.PI);
        }
    } else if (segment.prev_direction === Direction.Right && segment.direction === Direction.Up) {
        if (debug == true)
            segment.mesh.material = materials["materialAngleRed"];
        else
            segment.mesh.material = materials["materialAngle"];
        segment.angleType = 1;
        segment.meshBack.material = materials["materialAngleBack"];

        segment.mesh.rotation.z = segmentFace.rotation.z + (Math.PI / 2) * faceCorrection;
        segment.meshBack.rotation.z = segmentFace.rotation.z + (Math.PI / 2) * faceCorrection;
    } else if (segment.prev_direction === Direction.Up && segment.direction === Direction.Right) {
        segment.mesh.material = materials["materialAngle"];
        segment.angleType = 1;
        segment.meshBack.material = materials["materialAngleBack"];

        segment.mesh.rotation.z = segmentFace.rotation.z + (3 * Math.PI / 2) * faceCorrection;
        segment.meshBack.rotation.z = segmentFace.rotation.z + (3 * Math.PI / 2) * faceCorrection;

    } else if (segment.prev_direction === Direction.Up && segment.direction === Direction.Left) {
        if (debug == true)
            segment.mesh.material = materials["materialAngleRed"];
        else
            segment.mesh.material = materials["materialAngle"];
        segment.angleType = 1;
        segment.meshBack.material = materials["materialAngleBack"];

        segment.mesh.rotation.z = segmentFace.rotation.z + Math.PI;
        segment.meshBack.rotation.z = segmentFace.rotation.z + Math.PI ;
        if (faceCorrection == -1) {
            segment.mesh.rotation.z = segmentFace.rotation.z + 0;
            segment.meshBack.rotation.z = segmentFace.rotation.z + 0;
        }

    } else if (segment.prev_direction === Direction.Left && segment.direction === Direction.Down) {
        if (debug == true)
            segment.mesh.material = materials["materialAngleRed"];
        else
            segment.mesh.material = materials["materialAngle"];
        segment.angleType = 1;
        segment.meshBack.material = materials["materialAngleBack"];

        segment.mesh.rotation.z = segmentFace.rotation.z + (3 * Math.PI / 2) * faceCorrection;
        segment.meshBack.rotation.z = segmentFace.rotation.z + (3 * Math.PI / 2) * faceCorrection;

    } else if (segment.prev_direction === Direction.Down && segment.direction === Direction.Left) {
        segment.mesh.material = materials["materialAngle"];
        segment.angleType = 1;
        segment.meshBack.material = materials["materialAngleBack"];

        segment.mesh.rotation.z = segmentFace.rotation.z + (Math.PI / 2) * faceCorrection;
        segment.meshBack.rotation.z = segmentFace.rotation.z + (Math.PI / 2) * faceCorrection;
    } else if (segment.prev_direction === Direction.Left && segment.direction === Direction.Up) {
        segment.mesh.material = materials["materialAngle"];
        segment.angleType = 1;
        segment.meshBack.material = materials["materialAngleBack"];

            segment.mesh.rotation.z = segmentFace.rotation.z + 0;
            segment.meshBack.rotation.z = segmentFace.rotation.z + 0;
            if (faceCorrection == -1) {
                segment.mesh.rotation.z = segmentFace.rotation.z + (Math.PI);
                segment.meshBack.rotation.z = segmentFace.rotation.z + (Math.PI);
            }

    }
    else
        console.warn("angle not handled " + segment.segmentNo + " " + segment.prev_direction.description + "=>" + segment.direction.description);

        
    segment.mesh.material = materials["materialAngle"];
    segment.angleType = 1;
    segment.meshBack.material = materials["materialAngleBack"];
    

}
function checkColision(arrowNo, faceNo, x, y) {
    for (const arrow of arrows) {
        for (const segment of arrow.segments) {
            if (segment.faceNo === faceNo && segment.x === x && segment.y === y) {
                if (segment.type == Type.Tail && arrowNo == segment.arrowNo) {//case at level 16
                }
                else {
                    console.log("Collision detected for arrow " + arrowNo + " at face " + faceNo + " position (" + x + "," + y + ")");
                    return true;
                
                }   
            }
        }
    }
    return false;
}
function movearrowdirection(arrow,arrowNo, segmentNo, head, dx, dy) {

    arrow.segments.push(createSegment(arrowNo, head.segmentNo + 1, head.faceNo, head.faceNo, -1, Type.Head, head.direction, head.direction, -1, head.x + dx, head.y + dy, true));


    //remove tail
    //arrow.segments[0].mesh.visible = false;
    group.remove(arrow.segments[0].mesh);
    group.remove(arrow.segments[0].meshBack);
    //find and remove from sceneMeshes
    for (let i = 0; i < sceneMeshes.length; i++) {
        if (sceneMeshes[i] === arrow.segments[0].mesh) {
            sceneMeshes.splice(i, 1);
            break;
        }
    }
    arrow.segments.shift();
    //console.log("MoveArrowSegments " + arrowNo + " Nb segment " + arrow.segments.length)

    //console.log("MoveArrowSegments " + arrowNo + " segment " + segmentNo + " movement " + arrow.movement + "/" + arrow.originalSegmentLenth);

    //change material of previous head
    
    let lastHead = arrow.segments[arrow.segments.length - 2];
    lastHead.type = Type.Body;
    lastHead.mesh.material = materials["materialBody"];
    lastHead.meshBack.material = materials["materialBodyBack"];
    showGroup(arrow);

    // check if all has left the faces
    let allLeft = true;
    for (const segment of arrow.segments) {
        if (segment.inFace == true) {
            allLeft = false;
        }
    }
    if (allLeft == true) {
        if (arrow.done == 0) {
            //console.log("MoveArrowSegments " + arrowNo + " all segments left the faces");
            arrow.done = 1;
            currentLevel.NbArrow--;
            UpdateLineText(camera, currentLevel.NbArrow);
            }
        
        arrow.movementOutFace++;
    }
  
}
function ResetArrow(arrowNo, arrow) {
    //delete current segments
    removeArrow(arrowNo, arrow);
    let points = JSON.parse(arrow.clonedArrowPoints);
    //remove arrow from list
    const index = arrows.indexOf(arrow);
    if (index > -1) {
        arrows.splice(index, 1);
    }
    arrow = null;
    createArrow(arrowNo, points, ArrowColorRed);

   

}

function checkEdgeCondition(arrowNo, head, dx, dy) {

    
    if (currentLevel.NoEdges == undefined || currentLevel.NoEdges.length == 0)
        return;



    // Implement the logic for checking edge conditions here
    let segmentFace = faces.find(face => face.faceNo === head.faceNo);


    let boundingBox = getFaceBoundingBox(segmentFace.points);
    const offsetx = 0.05 * 10 / currentLevel.NbArrowsPerFace; // Adjust this value to control the spacing between segments
    const offsety = 0.05 * 10 / currentLevel.NbArrowsPerFace; // Adjust this value to control the spacing between segments


    let xInSpaceBefore = boundingBox.x + head.x / currentLevel.NbArrowsPerFace + offsetx;
    let yInSpaceBefore = - boundingBox.y - (head.y + 1) / currentLevel.NbArrowsPerFace + offsety;
    let inFaceBefore = segmentInsideFace(xInSpaceBefore, yInSpaceBefore, segmentFace.points.map(p => [p.x, p.y]));


    let xInSpaceAfter = boundingBox.x + (head.x+dx) / currentLevel.NbArrowsPerFace + offsetx;
    let yInSpaceAfter = - boundingBox.y - (head.y +dy+ 1) / currentLevel.NbArrowsPerFace + offsety;
    let inFaceAfter = segmentInsideFace(xInSpaceAfter, yInSpaceAfter, segmentFace.points.map(p => [p.x, p.y]));
    
    if (inFaceBefore == true && inFaceAfter == false) {

        let found = false;
        let othserSide = undefined
        let othserSideX = undefined
        let othserSideY = undefined
        for (const edge of currentLevel.NoEdges) {
            for (const f of edge.Faces) {
                if (f.faceNo === head.faceNo) {

                    if (f.sideX == head.x) {
                        if (f.sideX==0 && dx==-1)
                            found = true;
                        else if (f.sideX!=0 && dx==1)
                            found = true;
                    }
                    if (f.sideY == head.y) { 
                        if (f.sideY==0 && dy==-1)
                            found = true;
                        else if (f.sideY!=0 && dy==1)
                            found = true;
                    }
                    
                        
                }
                else {
                    othserSide = f.faceNo;
                    othserSideX = f.sideX;
                    othserSideY = f.sideY;
                }
            }   
        }
        if (found == true && othserSide != undefined) {
            console.log("checkEdgeCondition head at  position (" + head.x + "," + head.y + ") leaving face " + head.faceNo + " to " + othserSide +" position (" + othserSideX + "," + othserSideY + ")");
            head.faceNo = othserSide;
            if (othserSideX!=-1)
                head.x = othserSideX-dx;
            if (othserSideY != -1)
                head.y = othserSideY-dy;
        }
    }



}
function MoveArrowSegments(arrowNo, segmentNo) {
    for (const arrow of arrows) {
        if (arrow.arrowNo === arrowNo) {
            if (arrow.movementOutFace < 20)
            {
                //move head
                let head = arrow.segments[arrow.segments.length - 1];
                if (head == undefined)
                    console.error("MoveArrowSegments head is undefined for arrow " + arrowNo, arrow);
                //console.log("MoveArrowSegments on face " + head.faceNo + " in direction " + head.direction.description);
                let dx = 0;
                let dy = 0;
                if (head.direction === Direction.Right) { dx = 1; dy = 0; }
                if (head.direction === Direction.Left) { dx = -1; dy = 0; }
                if (head.direction === Direction.Up) { dx = 0; dy = -1; }
                if (head.direction === Direction.Down) { dx = 0; dy = 1; }

                //check no edge conditiion
                checkEdgeCondition(arrowNo,head,dx,dy);

                //check nex position in face
                let collision = checkColision(arrowNo, head.faceNo, head.x + dx, head.y + dy);
                if (collision == false && arrow.stopMove != true) {
                    movearrowdirection(arrow, arrowNo, segmentNo, head, dx, dy);
                    setTimeout(function () {
                        //console.log("MoveArrowSegments 1 ->" + arrowNo + " segment " + segmentNo + " movement " + arrow.movementOutFace + "/" + arrow.originalSegmentLenth);
                        MoveArrowSegments(arrowNo, segmentNo)
                    }, arrowSpeed);
                }
                else {
                    movearrowdirection(arrow, arrowNo, segmentNo, head, dx, dy);
                    //collision detected, stop movement
                    if (arrow.group != 0) {
                        for (const arrow2 of arrows) {
                            if (arrow2.group === arrow.group) {
                                arrow2.stopMove = true;
                            }
                        }
                    }

                    setColorArrow(arrowNo, 2); // Set selected arrow color to red
                    if (collision == true && state.collisionAreadyCounted == false) { 
                        state.collisionAreadyCounted = true;
                        showHudBorder(true);
                        if (state.volume == true)
                            audioFailure.play();
                        currentLevel.NbHeart--;
                        UpdateHeartNumber(camera, currentLevel.NbHeart, currentLevel.NbHeartTotal);
                    }
                    //set to previous position 
                    
                    setTimeout(function () {
                        ResetArrow(arrowNo, arrow);
                        setColorArrow(arrowNo, 2);
                        if (collision == true) { 
                            showHudBorder(false);
                            if (currentLevel.NbHeart <= 0) {
                                console.log("Game Over");
                                if (state.volume == true)
                                    audioLevelFailure.play();
                                setTimeout(function () {
                                    hideAll();
                                    UpdateLevelText(camera, -1003);
                                    setTimeout(function () {
                                        loadLevel(currentLevelNo);
                                    }, 1000);
                                }, 500);
                            }
                        }
                    }, 300);
                   
                    break;
                }
            }
            else {
                //console.log("MoveArrowSegments finished " + arrowNo + " segment " + segmentNo + " movement " + arrow.movementOutFace + "/" + arrow.originalSegmentLenth);
                //remove all segments
                for (const segment of arrow.segments) 
                {
                    group.remove(segment.mesh);
                    group.remove(segment.meshBack);
                }
                arrow.segments = [];
                arrow.done = 2;
                //count nb arrow not done =2
                let cptArrowRemaining = 0;
                for (const arrow of arrows) {
                    if (arrow.done != 2)
                        cptArrowRemaining++;
                }
                if (cptArrowRemaining == 0) {
                    console.log("All arrows have left the faces");
                    hideAll();
                    currentLevelNo++;
                    if (state.volume == true)
                        audioLevelSuccess.play();
                    loadLevel(currentLevelNo,true);
                }
            }
        }
    }
}   
function MoveArrow(arrowNo, segmentNo) {
    setColorArrow(arrowNo, 0);
    for (const arrow of arrows) {
        if (arrow.arrowNo === arrowNo) {
            arrow.clonedArrowPoints = JSON.stringify(arrow.points);//copy arrow
            arrow.originalSegmentLenth = arrow.segments.length;
            arrow.movementOutFace = 0;
            //console.log("MoveArrowSegments 2" + arrowNo + " segment " + segmentNo + " movement " + arrow.movementOutFace + "/" + arrow.originalSegmentLenth);
            setTimeout(function () {
                MoveArrowSegments(arrowNo, segmentNo)
            }, arrowSpeed);
            break;
        }
    }
}
function selectArrow(arrowNo, segmentNo) {
    //console.log("Selected arrow: " + arrowNo+ " segment=" + segmentNo);
    if (state.volume == true)
        audioClick.play();
    let group = 0;
    for (const arrow of arrows) {
        if (arrow.arrowNo === arrowNo) {
            group = arrow.group;
            break;
        }
    }
    if (group == 0) {
        setColorArrow(arrowNo, 1); // Set selected arrow color to white
        setTimeout(function () {
            MoveArrow(arrowNo, segmentNo)
        }, 100);
    } else {
        //console.log("move group " + group);
        for (const arrow of arrows) {
            if (arrow.group === group) {
                setColorArrow(arrow.arrowNo, 1); // Set selected arrow color to white
                setTimeout(function () {
                    MoveArrow(arrow.arrowNo, segmentNo)
                }, 100);
            }
        }
    }
    
    
}
function setColorArrow(arrowNo, color) {
    for (const arrow of arrows)
    {
        if (arrow.arrowNo === arrowNo)
        {
           // console.log("setColorArrow " + arrowNo + " color " + color.toString(16) + " nb seg=" + arrow.segments.length);
            for (const segment of arrow.segments) {

                if (color === 2) {//red
                    if (segment.type === Type.Head) 
                        segment.mesh.material = materials["materialHeadRed"];
                    else if (segment.type === Type.Body) 
                        segment.mesh.material = materials["materialBodyRed"];
                    else if (segment.type === Type.Tail) 
                        segment.mesh.material = materials["materialTailRed"];
                    else if (segment.type === Type.Angle) 
                           segment.mesh.material = materials["materialAngleRed"];
                    else if (segment.type === Type.ToSide || segment.type === Type.FromSide) {
                        if (segment.sideFixedSubType === Type.Body) 
                            segment.mesh.material = materials["materialBodyRed"];
                         else if (segment.sideFixedSubType === Type.Angle) 
                            segment.mesh.material = materials["materialAngleRed"];
                        else if (segment.sideFixedSubType == Type.Head)
                            segment.mesh.material = materials["materialHeadRed"];  
                        else if (segment.sideFixedSubType == Type.Tail)
                            segment.mesh.material = materials["materialTailRed"];  
                    }
                    else
                        console.error("setColorArrow unknown segment type " + segment.type.description);
                } 

                if (color === 1) {
                    if (segment.type === Type.Head) 
                        segment.mesh.material = materials["materialHeadSelected"];
                     else if (segment.type === Type.Body) 
                        segment.mesh.material = materials["materialBodySelected"];
                     else if (segment.type === Type.Tail) 
                        segment.mesh.material = materials["materialTailSelected"];
                     else if (segment.type === Type.Angle) 
                        segment.mesh.material = materials["materialAngleSelected"];
                     else if (segment.type === Type.ToSide || segment.type === Type.FromSide) {
                        if (segment.sideFixedSubType === Type.Body) 
                            segment.mesh.material = materials["materialBodySelected"];
                        else if (segment.sideFixedSubType === Type.Angle) 
                            segment.mesh.material = materials["materialAngleSelected"];
                        else if (segment.sideFixedSubType == Type.Head)
                            segment.mesh.material = materials["materialHeadSelected"];
                        else if (segment.sideFixedSubType == Type.Tail)
                            segment.mesh.material = materials["materialTailSelected"];  
                    }
                    else
                        console.error("setColorArrow unknown segment type " + segment.type.description);
                } 
                if (color === 0) {
                    if (segment.type === Type.Head) {
                        segment.mesh.material = materials["materialHead"];
                        segment.meshBack.material = materials["materialHeadBack"];
                    } else if (segment.type === Type.Body) {
                        segment.mesh.material = materials["materialBody"];
                        segment.meshBack.material = materials["materialBodyBack"];
                    } else if (segment.type === Type.Tail) {
                        segment.mesh.material = materials["materialTail"];
                        segment.meshBack.material = materials["materialTailBack"];
                    } else if (segment.type === Type.Angle) {
                        if (segment.angleType === 1) {
                            segment.mesh.material = materials["materialAngle"];
                            segment.meshBack.material = materials["materialAngleBack"];
                        }
                } else if (segment.type === Type.ToSide || segment.type === Type.FromSide) {
                        if (segment.sideFixedSubType === Type.Body) 
                        segment.mesh.material = materials["materialBody"];
                        else if (segment.sideFixedSubType === Type.Angle) 
                            segment.mesh.material = materials["materialAngle"];
                        else if (segment.sideFixedSubType == Type.Head)
                            segment.mesh.material = materials["materialHead"];
                        else if (segment.sideFixedSubType == Type.Tail)
                            segment.mesh.material = materials["materialTail"];  
                }
                    else
                    console.error("setColorArrow unknown segment type " + segment.type.description);
                }
            }
            showGroup(arrow);
            break;
        }
    }
}
function addPointToArrow(currentArrow, x, y, faceNo) {

    currentArrow.points.push(new THREE.Vector3(x, y, faceNo));
    currentArrow.clonedArrowPoints = JSON.stringify(currentArrow.points);//copy arrow
    ResetArrow(state.editionMode_arrowSelected, currentArrow);
}
//-----------------------------------------------------------------
//segments
function segmentInsideFace(x,y, vs) {
    // ray-casting algorithm based on
    // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html

    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];

        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }

    return inside;
};
function createSegment(arrowNo, segmentNo, faceNo, prev_faceNo, next_faceNo, type, direction, prev_direction, next_direction, x, y, debug) {
    const segment = new Segment();
    segment.arrowNo = arrowNo;
    segment.segmentNo = segmentNo;
    segment.faceNo = faceNo;
    segment.prev_faceNo = prev_faceNo;
    segment.next_faceNo = next_faceNo;
    segment.type = type;
    segment.direction = direction;
    segment.prev_direction = prev_direction;
    segment.next_direction = next_direction;
    segment.x = x;
    segment.y = y;

    let segmentFace = faces.find(face => face.faceNo === faceNo);
    if (segmentFace == undefined || segmentFace == null) {
        console.error("can't find face for segment " + segment.segmentNo);
    }

    let prev_segmentFace = faces.find(face => face.faceNo === prev_faceNo);
    if (prev_segmentFace == undefined || prev_segmentFace == null) {
        console.error("can't find previous face for segment " + segment.segmentNo);
    }

    let next_segmentFace = undefined;
    if (next_faceNo != -1) {
            next_segmentFace = faces.find(face => face.faceNo === next_faceNo);
         if (next_segmentFace == undefined || next_segmentFace == null) {
            console.error("can't find next face for segment " + segment.segmentNo);
        }
    }

    segment.faceDirection = segmentFace.direction;
    segment.prev_faceDirection = prev_segmentFace.direction;
    segment.next_faceDirection = next_segmentFace ? next_segmentFace.direction : undefined;

    //console.log("createSegment no=" + segment.segmentNo + " face " + segment.faceNo + " type " + segment.type.description + " dir " + segment.prev_direction.description +" =>" + segment.direction.description);

    if (type === Type.Head) {
        segment.mesh = new THREE.Mesh(geometrySquare, materials["materialHead"],);
        segment.meshBack = new THREE.Mesh(geometrySquare,materials["materialHeadBack"]);
    } else if (type === Type.Body) {
        segment.mesh = new THREE.Mesh(geometrySquare, materials["materialBody"]);
        segment.meshBack = new THREE.Mesh(geometrySquare, materials["materialBodyBack"]);
    } else if (type === Type.Tail) {    
        segment.mesh = new THREE.Mesh( geometrySquare, materials["materialTail"] ) ;
        segment.meshBack = new THREE.Mesh(geometrySquare, materials["materialTailBack"]);
    } else if (type === Type.Angle) {   
        // segment.mesh = new THREE.Mesh( geometrySquare, materials["materialAngle"] ) ;
    } else if (type == Type.ToSide) {
        //console.log("createSegment TO between faces, seg no=" + segment.segmentNo + " face " + segment.faceNo + " type " + segment.type.description + " direction " + segment.direction.description);
        segment.mesh = new THREE.Mesh(geometrySquare, materials["materialHelper1"]);
        segment.meshBack = new THREE.Mesh(geometrySquare, materials["materialHelper1"]);
    }
    else if (type == Type.FromSide) {
       // console.log("createSegment FROM between faces, seg no=" + segment.segmentNo + " face " + segment.faceNo + " dir: " + segment.prev_direction.description + " => " + segment.direction.description + " =>" + segment.next_direction.description + "; face:" + segment.prev_faceDirection.description + " => " + segment.faceDirection.description+ " =>" + segment.next_faceDirection.description);
        segment.mesh = new THREE.Mesh(geometrySquare, materials["materialHelper2"]);
        segment.meshBack = new THREE.Mesh(geometrySquare, materials["materialHelper2"]);
    }

      
    if (type === Type.Head || type === Type.Tail || type === Type.Body) {
        rotateBodySegmentMesh(segment);
    }
    if (type === Type.Angle) {//in same face

        segment.mesh = new THREE.Mesh(geometrySquare, materials["materialAngle"]);
        segment.meshBack = new THREE.Mesh(geometrySquare, materials["materialAngleBack"]);
        //console.log("angle" + segment.segmentNo + " " + prev_direction.description+"=>"+direction.description);
        let faceCorrection = 1;
        //console.log("face angle " + segmentFace.direction.description);
        if (segmentFace.direction == FaceDirection.Up) {
            //console.log("face up correction angle");
            faceCorrection = -1;
        }
        setAndRotateAngle(segment, segmentFace, faceCorrection,false);
      

        if (segment.mesh === null) {
            console.error("Error creating angle segment " + segment.segmentNo + " " + prev_direction.description + "=>" + direction.description);
        }
    }
   

    let boundingBox = getFaceBoundingBox(segmentFace.points);
    const offsetx = 0.05 * 10 / currentLevel.NbArrowsPerFace; // Adjust this value to control the spacing between segments
    const offsety = 0.05 * 10 / currentLevel.NbArrowsPerFace; // Adjust this value to control the spacing between segments


    //let heightInGrig = Math.round(currentLevel.NbArrowsPerFace * boundingBox.height);
    //let widthInGrig = Math.round(currentLevel.NbArrowsPerFace * boundingBox.width);

    // segment.mesh.position.set(segmentFace.points[0].x + x + 0.025, - segmentFace.points[0].y - y + 0.075, faces[0].position.z );//+ 0.025
    //let xInSpace =  segmentFace.points[0].x + x / currentLevel.NbArrowsPerFace + offsetx;
    //let yInSpace =  - segmentFace.points[0].y - (y + 1) / currentLevel.NbArrowsPerFace + offsety;
    let xInSpace = boundingBox.x + x / currentLevel.NbArrowsPerFace + offsetx;
    let yInSpace = - boundingBox.y - (y + 1) / currentLevel.NbArrowsPerFace + offsety;

    
    let letZ = 0;
    if (segmentFace.position.x != 0)
        letZ = segmentFace.position.x;
    if (segmentFace.position.y != 0)
        letZ = segmentFace.position.y;
    if (segmentFace.position.z != 0)
        letZ = segmentFace.position.z;

    //console.log("segment face", letZ)
    letZ = Math.abs(letZ);
    //------------------------------------------
    segment.mesh.position.set(xInSpace, yInSpace, letZ);//+ 0.025
    if (segment.meshBack) {
        segment.meshBack.position.set(xInSpace, yInSpace, letZ);//+ 0.025
    }

        segment.inFace = segmentInsideFace(xInSpace, yInSpace, segmentFace.points.map(p => [p.x, p.y]));
        //console.log("createSegment " + segment.segmentNo + " face " + segment.faceNo + " type " + segment.type.description + " direction " + segment.direction.description + "in= " + segment.inFace, segmentFace.points );

        segment.mesh.rotateAroundWorldAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 0, 0), segmentFace.rotation.x);
        segment.mesh.rotateAroundWorldAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0), segmentFace.rotation.y);
        segment.mesh.rotateAroundWorldAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 1), segmentFace.rotation.z);

        segment.mesh.userData.name = "arrow " +  segment.arrowNo + ", segment " + segment.segmentNo + ", type " + segment.type.description; 
        //segment.mesh.userData.segment = segment; // Store the segment object in userData for easy access
        segment.mesh.userData.arrowNo = segment.arrowNo;
        segment.mesh.userData.segmentNo = segment.segmentNo;

    if (segment.meshBack) {

        segment.meshBack.rotateAroundWorldAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 0, 0), segmentFace.rotation.x);
        segment.meshBack.rotateAroundWorldAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0), segmentFace.rotation.y);
        segment.meshBack.rotateAroundWorldAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 1), segmentFace.rotation.z);

        segment.meshBack.userData.name = "arrow " +  segment.arrowNo + ", segment " + segment.segmentNo + ", type " + segment.type.description; 
        segment.meshBack.userData.arrowNo = segment.arrowNo;
        segment.meshBack.userData.segmentNo = segment.segmentNo;
        group.add(segment.meshBack);
    }

        group.add( segment.mesh );
        sceneMeshes.push(segment.mesh);
        return segment;
    }
//-----------------------------------------------------------------
// Faces
function createVerticalDashedTexture(length) {
    const canvas = document.createElement('canvas');
    canvas.width = 2;
    canvas.height = 64; // Configuration verticale
    const ctx = canvas.getContext('2d');

    // Moitié supérieure blanche, moitié inférieure transparente
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 10, 2, 54);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set(0, -0.1);// to better align.....
    console.log("createVerticalDashedTexture length", length, "canvas.height", canvas.height);
    // Répétition : 16 fois autour (X),length fois de haut en bas (Y)
    texture.repeat.set(16, length);

    return texture;
}
function createNoEdge (pointX, pointY) {
    // edge from X to Y
    var direction = new THREE.Vector3().subVectors(pointY, pointX);
    var arrow = new THREE.ArrowHelper(direction, pointX);
    console.log("createNoEdge direction", direction, "pointX", pointX, "pointY", pointY);
    var edgeGeometry = new THREE.CylinderGeometry(0.003, 0.003, direction.length(), 16, 4);


    const dashedTexture = createVerticalDashedTexture(direction.length() * currentLevel.NbArrowsPerFace);

    const material = new THREE.MeshStandardMaterial({
        color: 0xEFD807,          // La couleur de votre cylindre
        alphaMap: dashedTexture,  // Utilise la texture pour gérer l'opacité
        transparent: true,        // INDISPENSABLE pour que le transparent fonctionne
        side: THREE.DoubleSide    // Optionnel : permet de voir l'intérieur du cylindre
    });

    var materials = [
        material,
        new THREE.MeshPhongMaterial({ color: 0x0000ff, transparent: true, opacity: 0 }),//remove backface
        new THREE.MeshPhongMaterial({ color: 0xff0000, transparent: true, opacity: 0 })//remove topface
    ];



    var edge = new THREE.Mesh(edgeGeometry,  materials);
    edge.rotation.set(arrow.rotation.x, arrow.rotation.y, arrow.rotation.z);
    let pos=new THREE.Vector3().addVectors(pointX, direction.multiplyScalar(0.5));
    edge.position.set(pos.x, pos.y, pos.z);
    group.add(edge);
    
}
function createFace(faceNo,points, position, rotation)
{

    const faceShape = new THREE.Shape(points);//.closePath();
    const faceGeometry = new THREE.ShapeGeometry(faceShape);
    const faceMesh = new THREE.Mesh(faceGeometry, materials["materialCube"]);
    
    let dir = undefined;
    let dx = 0;
    let dy = 0;
    let dz = 0;
    if (rotation.x == 0 && rotation.y == 0 && rotation.z == 0) {
        dir = FaceDirection.Front;
        dz = 1;
    }
    if (rotation.x == 0 && Math.abs(rotation.y - 3.14) < 0.1 && rotation.z == 0) {
        dir = FaceDirection.Back;
        dz = -1;
    }
    if (rotation.x == 0 && Math.abs(rotation.y + 1.57) < 0.1 && rotation.z == 0) {
        dir = FaceDirection.Left;
        dx = -1;
    }
    if (rotation.x == 0 && Math.abs(rotation.y - 1.57) < 0.1 && rotation.z == 0) {
        dir = FaceDirection.Right;
        dx = 1;
    }
    if (Math.abs(rotation.x - 1.57) < 0.1 && Math.abs(rotation.y - 3.14) < 0.1 && Math.abs(rotation.z - 3.14) < 0.1) {
        dir = FaceDirection.Up;
        dy = 1;
    }
    if (Math.abs(rotation.x - 1.57) < 0.1 && rotation.y == 0 && rotation.z == 0) {
        dir = FaceDirection.Down;
        dy = -1;
    }
   // console.log("createFace " + faceNo + " direction=" + (dir ? dir.description : "undefined") + ", rotation x=" + rotation.x + ", y=" + rotation.y + ", z=" + rotation.z);
    if (dir == undefined)
        console.warn("Face direction is undefined for face " + faceNo+": rx=" + rotation.x + ", ry=" + rotation.y + ", rz=" + rotation.z); 

    faceMesh.rotateAroundWorldAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 0, 0),rotation.x);
    faceMesh.rotateAroundWorldAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0),rotation.y);
    faceMesh.rotateAroundWorldAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 1),rotation.z);
    let backward = -0.0001;
       

    faceMesh.position.set(position.x + dx*backward, position.y + dy*backward, position.z + dz*backward); // to prevet Z fighting with arrows
    //faceMesh.position.set(position.x, position.y, position.z);
    //faceMesh.renderOrder = -999;// to fix concurent transparency issues with arrows

    faceMesh.userData.name = "face " + faceNo;
    faceMesh.userData.faceNo = faceNo;
    faceMeshes.push(faceMesh);

    const faceEdgesGeometry = new THREE.EdgesGeometry(faceGeometry);
    const faceEdges = new THREE.LineSegments(faceEdgesGeometry, new THREE.LineBasicMaterial({ color: 0x777777 }));
    const fontGeometry = new TextGeometry(faceNo.toString(), {
        font: font,
        size: 0.1,
        depth: 0.02,
        curveSegments: 12
    });
    const fontMaterial = new THREE.MeshNormalMaterial();
    fontGeometry.center();
    const fontMesh = new THREE.Mesh(fontGeometry, fontMaterial);
    //const rect = getFaceBoundingBox(points);

    
    const bary=centroid(points);
    fontMesh.position.set(bary[0] * 1.5, bary[1] * 1.5, 0);

   // console.log("bary face " + faceNo + " x=" + bary[0] + " y=" + bary[1] + ")");
    fontMesh.visible = false; // Initially hide the face number

    faceMesh.add(fontMesh); // Attach the font mesh to the face mesh
    group.add(faceMesh);
    faceMesh.add(faceEdges);
    //group.add(fontMesh);

    const face = new Face();
    face.faceNo = faceNo;
    face.fontMesh = fontMesh;
    face.position = position;
    face.rotation = rotation;
    face.points = points;
    face.direction = dir;




    faces.push(face);
}
function showFaceIds(show) {
        for (const face of faces) {
            face.fontMesh.visible = show;
            console.log("showFaceIds " + face.faceNo + " direction=" + face.direction.description);
        }
}
function getFaceBoundingBox(points) {
    if (points.length === 0) return { x: 0, y: 0, width: 0, height: 0 };

    // Initialize mins and maxes with the first point's values
    let minX = points[0].x;
    let maxX = points[0].x;
    let minY = points[0].y;
    let maxY = points[0].y;

    // Loop through points to find the extreme boundaries
    for (let i = 1; i < points.length; i++) {
        const p = points[i];
        if (p.x < minX) minX = p.x;
        if (p.x > maxX) maxX = p.x;
        if (p.y < minY) minY = p.y;
        if (p.y > maxY) maxY = p.y;
    }

    // Return the rectangle properties
    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    };
}
function area(points) {
    var area = 0,
        i,
        j,
        point1,
        point2;

    for (i = 0, j = points.length - 1; i < points.length; j = i, i++) {
        point1 = points[i];
        point2 = points[j];
        area += point1.x * point2.y;
        area -= point1.y * point2.x;
    }
    area /= 2;

    return area;
};
function centroid(points) {
    var c = [0, 0];
    var x = 0,
        y = 0,
        i,
        j,
        f,
        point1,
        point2;

    for (i = 0, j = points.length - 1; i < points.length; j = i, i++) {
        point1 = points[i];
        point2 = points[j];
        f = point1.x * point2.y - point2.x * point1.y;
        x += (point1.x + point2.x) * f;
        y += (point1.y + point2.y) * f;
    }

    f = area(points) * 6;

    c[0] = (x / f);
    c[1] = (y / f);
    return c;
};
//-----------------------------------------------------------------
// Level
function CreateLevel(level) {

    faces= [];
    arrows = [] ;
    sceneMeshes = [];
    faceMeshes = [];
    console.log("level " + currentLevelNo + " '" + level.Title+"' loded");

    // remove previous level
    if (group) {
        scene.remove(group);
    }
    group = new THREE.Group();// everything rotating
    scene.add(group);
    currentLevel = level;

    currentLevel.NbArrow = currentLevel.ArrowsPoints.length;
    currentLevel.NbHeart = currentLevel.NbHeartTotal;
    ArrowColor = Number(currentLevel.ArrowColor);
    
    

    updateTexture(textures["textureWhiteHead"]);
    updateTexture(textures["textureWhiteBody"]);
    //updateTexture(textures["textureBodyNormal"]);
    updateTexture(textures["textureWhiteTail"]);
    updateTexture(textures["textureWhiteAngle"]);
    updateTexture(textures["textureHelper1"]);
    updateTexture(textures["textureHelper2"]);
    updateTexture(textures["textureSquare"], true);
    updateTexture(textures["textureWHeart"]);
    updateTexture(textures["textureReset"]);
    updateTexture(textures["textureVolumeOff"]);
    updateTexture(textures["textureVolumeOn"]);
    updateTexture(textures["textureCadre"]);
    updateTexture(textures["textureBridgeCentral"]);
    updateTexture(textures["textureBridgeSide1"]);
    updateTexture(textures["textureBridgeSide2"]);

    //updateTexture(textures["textureBridgeBump"], false, false);
    updateTexture(textures["textureBridgeBumpheight"], false, false);
 
    materials["materialHead"].color.setHex(ArrowColor);
    materials["materialBody"].color.setHex(ArrowColor);
    materials["materialTail"].color.setHex(ArrowColor);
    materials["materialAngle"].color.setHex(ArrowColor);
    materials["materialHelper1"].color.setHex(ArrowColor);
    materials["materialHelper2"].color.setHex(ArrowColor);
  
    //geometrySquare = new THREE.ShapeGeometry(squareShape);
    geometrySquare = new THREE.PlaneGeometry(0.1, 0.1, 64, 64);
    geometrySquare.scale(10 / currentLevel.NbArrowsPerFace , 10 / currentLevel.NbArrowsPerFace , 1);
    geometrySquare.computeTangents();


    textures["textureSquare"].repeat.set(currentLevel.NbArrowsPerFace, currentLevel.NbArrowsPerFace);
    if (currentLevel.NbArrowsPerFace%2==0)
        textures["textureSquare"].center.set(0.5, 0.5 );
    textures["textureSquare"].needsUpdate = true;
    materials["materialCube"].needsUpdate = true;

    for (const face of currentLevel.FaceLevels) {
        createFace(face.faceNo, face.points, face.position, face.rotation);
    }
    for (let i = 0; i < currentLevel.ArrowsPoints.length; i++) {
        createArrow(i, currentLevel.ArrowsPoints[i], ArrowColor);
    }
    if (currentLevel.NoEdges != undefined)
        for (const edge of currentLevel.NoEdges) {
            createNoEdge( edge.start, edge.end);
        }



    //let prevDistance = controls.distance;
    //let prevZoom = controls.zoomLevel;
    //controls.reset();
    //controls.zoomLevel = prevZoom; 
    //controls.distance = prevDistance;
    group.rotation.y = -Math.PI / 4 -0.08;
    group.rotation.x = Math.PI / 6;
    
    UpdateLineText(camera, currentLevel.NbArrow);
    UpdateLevelText(camera, currentLevelNo);
    CreateHeartNumber(currentLevel.NbHeartTotal);
    //console.log("Heart=" + currentLevel.NbHeart + "/" + currentLevel.NbHeartTotal);
    UpdateHeartNumber(camera, currentLevel.NbHeart, currentLevel.NbHeartTotal);

    setCookie("Level", currentLevelNo, 365);
}
function loadLevel(levelNo, nextLevel = false) {
   
    (async () => {

        let levelPath = 'Levels/Level';
        if (levelNo < 1) {
            levelNo = Math.abs(levelNo);
            levelPath = 'Levels/TestLevel';
            console.log("Loading Test level " + levelNo);
        }
        else
            console.log("Loading level " + levelNo);

        const response = await fetch(levelPath + levelNo + '.json');
        if (response.status === 404) {
            console.error("Level " + levelNo + " not found");
            hideAll();
            UpdateLevelText(camera, -1001);
            return;
        }
        if (!response.ok) {
            console.error("Level " + levelNo + " error");
            hideAll();
            UpdateLevelText(camera, -1001);
            return;
        }
        const txtData = await response.text();

        if (txtData[0] !== '{') { 
            console.error("Invalid JSON format for level " + levelNo);
            hideAll();
            UpdateLevelText(camera, -1001);
            return;
        }



        if (nextLevel) {// show next level message
            // Handle any logic needed for the next level
            //----------
            UpdateLevelText(camera, -1002);
            setTimeout(function () {
                const jsonData = JSON.parse(txtData);
                //console.log(jsonData);
                CreateLevel(jsonData);
            }, 2000);
            //----
        }
        else {//load directly
            const jsonData = JSON.parse(txtData);
            //console.log(jsonData);
            CreateLevel(jsonData);
        }



    })();
}
//-----------------------------------------------------------------
// Events
function addtxt(axis, p, c, n) {
    let txt_p = "";
    let txt_n = "";
    let txt = "";

    if (p != undefined) {
        if (c == p)
            txt_p += "(c" + axis + " == p" + axis + ")";
        if (c > p)
            txt_p += "(c" + axis + " > p" + axis + ")";
        if (c < p)
            txt_p += "(c" + axis + " < p" + axis + ")";

    }
    if (n != undefined) {

        if (c == n)
            txt_n += "(c" + axis + " == n" + axis + ")";
        if (c > n)
            txt_n += "(c" + axis + " > n" + axis + ")";
        if (c < n)
            txt_n += "(c" + axis + " < n" + axis + ")";
       
    }
    if (txt_p != "" && txt_n != "")
        txt = txt_p + " && " + txt_n;
    else
        if (txt_p != "")
            txt = txt_p;
        else
            if (txt_n != "")
                txt = txt_n;
      //  console.log(txt);
    return txt;
}
function addtxtAngle(axis, p, c, n) {
    let txt_p = "";
    let txt_n = "";
    let txt = "";
    
    //    console.log("addtxtAngle " + axis + " p=" + p + " c=" + c + " n=" + n); 
    if (p != undefined) {
        if (c == p)
            txt_p += "(c" + axis + " == p" + axis + ")";
        if (c - p > 0)
            txt_p += "(c" + axis + " - p" + axis + ">0)";
        if (c - p < 0)
            txt_p += "(c" + axis + " - p" + axis + "<0)";

    }
    if (n != undefined) {
        if (c == n)
            txt_n += "(c" + axis + " == n" + axis + ")";
        if (c - n > 0)
            txt_n += "(c" + axis + " - n" + axis + ">0)";
        if (c - n < 0)
            txt_n += "(c" + axis + " - n" + axis + "<0)";
    }
    if (txt_p != "" && txt_n != "")
        txt = txt_p + " && " + txt_n;
    else
        if (txt_p != "")
            txt = txt_p;
        else
            if (txt_n != "")
                txt = txt_n;
    //  console.log(txt);

    let txt_np = "";
    if ((p != undefined) && (n != undefined)) {
        if (p == n)
            txt_np += "(p" + axis + " == n" + axis + ")";
        if (p - n > 0)
            txt_np += "(p" + axis + " - n" + axis + ">0)";
        if ((p - n)<0) 
        txt_np += "(p" + axis + " - n" + axis + "<0)";

    }
    
   // if (txt_np != "")    txt = txt + " && " + txt_np;
    
    return txt;
}
function addEvents() {
    // Handle window resizing
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);

        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
        // Update camera bounds
        cameraOrtho.left = -newWidth / 2;
        cameraOrtho.right = newWidth / 2;
        cameraOrtho.top = newHeight / 2;
        cameraOrtho.bottom = -newHeight / 2;
        cameraOrtho.updateProjectionMatrix();
        resetMesh.position.set(newWidth / 2 - 40, -newHeight / 2 + 80, 0);
        volumeMesh.position.set(newWidth / 2 - 40, -newHeight / 2 + 40, 0);
        cadreMesh.scale.set(10 * newWidth, 10 * newHeight, 1);
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].position.set((i * 40) - (hearts.length / 2) * 40 + 20, -newHeight / 2 + 80, -1);
        }
    });

    /*
    * mouse
    */

    // Event listeners for hover tracking
    renderer.domElement.addEventListener('mouseenter', (event) => {
        const rect = event.target.getBoundingClientRect();
        state.width = rect.width;
        state.height = rect.height;
    });
    document.addEventListener("keydown", (event) => {
        //console.log("key down " + event.code);

        if (event.code === "NumpadAdd") {
            currentLevelNo++;
            loadLevel(currentLevelNo);
        }
        if (event.code === "NumpadSubtract") {
            currentLevelNo--;
            if (state.editionMode==false)//editmode
                if (currentLevelNo < 1)
                    currentLevelNo = 1;
            loadLevel(currentLevelNo);
        }
        if (event.key == "e" || event.key == "E") {
            state.editionMode = !state.editionMode;
            if (state.editionMode) {
                console.log("Edition mode ON");
                console.log("   d: dump level");
                console.log("   f: show/hide face numbers");
                console.log("   e: exit edition mode");
                console.log("   c: create new arrow / close arrow creation");
                console.log("   m: modify selected arrow");
                console.log("   arrows can be selected by clicking on them");
                console.log("   del: delete current arrow");
                console.log("   g: show groups of arrows");
                materialCube.map = textures["textureSquare"];
                materialCube.transparent = false; // Required for opacity to work
                materialCube.opacity = 1;       // 100% see-through
                materialCube.depthTest = true;
                materialCube.alphaTest = 0.01
                materialCube.needsUpdate = true;
                setColorArrow(state.editionMode_arrowSelected, 0);
                state.editionMode_arrowSelected = -1;
                state.editionMode_segmentSelected = -1;
            } else {
                console.log("Edition mode OFF");
                materialCube.map = null;
                materialCube.transparent = true; // Required for opacity to work
                materialCube.opacity = 0.70;       // 70% see-through
                materialCube.depthTest = true;
                materialCube.needsUpdate = true;
                setColorArrow(state.editionMode_arrowSelected, 0);
                state.editionMode_arrowSelected = -1;
                state.editionMode_segmentSelected = -1;
            }
        }

        if (state.editionMode) {

            if (event.key === "f" || event.key == "F") {
                state.showFaceId = !state.showFaceId;
                // console.log("show face : " + state.showFaceId);
                showFaceIds(state.showFaceId);
            }
            if (event.key == "c" || event.key == "c") {
                if (state.editionModeCreation === true) {
                    //end of arrow creation
                    state.editionModeCreation = false;
                    console.log("Edition mode: closed arrow creation " + state.editionMode_arrowSelected);
                    setColorArrow(state.editionMode_arrowSelected, 0);
                    state.editionMode_arrowSelected = -1;
                    state.editionMode_segmentSelected = -1;
                    UpdateLineText(camera, arrows.length);
                }
                else {
                    //new arrow
                    state.editionModeCreation = true;
                    //find highest arrow No
                    let higherArrow = 0
                    for (let i = 0; i < arrows.length; i++) {
                        if (arrows[i].arrowNo > higherArrow) {
                            higherArrow = arrows[i].arrowNo;
                        }
                    }
                    state.editionMode_arrowSelected = higherArrow + 1;
                    state.editionMode_segmentSelected = -1;
                    console.log("Edition mode: new arrow created " + state.editionMode_arrowSelected);

                }
            }

            if (event.key == "r" || event.key == "R") {
                if (state.editionModeCreation === true) {
                    let currentArrow = undefined;
                    for (let i = 0; i < arrows.length; i++) {
                        if (arrows[i].arrowNo == state.editionMode_arrowSelected) {
                            currentArrow = arrows[i];
                        }
                    }
                    if ((currentArrow != undefined) && (currentArrow.points.length > 0)) {
                        console.log("Edition mode: remove last point of arrow " + state.editionMode_arrowSelected);
                        currentArrow.points.pop();
                        currentArrow.clonedArrowPoints = JSON.stringify(currentArrow.points);//copy arrow
                        ResetArrow(state.editionMode_arrowSelected, currentArrow);
                    }


                }
            }
            if (event.key == "m" || event.key == "M") {
                if (state.editionMode_arrowSelected != -1) {
                    console.log("Modify arrow " + state.editionMode_arrowSelected);
                    state.editionModeCreation = true;
                    state.editionMode_segmentSelected = -1;
                }
            }
            if (event.key == "d" || event.key == "D") {
                let newLevel = new Level();
                newLevel.Title = currentLevel.Title;
                newLevel.NbHeartTotal = currentLevel.NbHeartTotal;
                newLevel.ArrowColor = currentLevel.ArrowColor;
                newLevel.NbArrowsPerFace = currentLevel.NbArrowsPerFace;
                newLevel.FaceLevels = currentLevel.FaceLevels;
                newLevel.NoEdges = currentLevel.NoEdges;
                let newArrowsPoints = [];
                for (let i = 0; i < arrows.length; i++) {
                    const arrow = arrows[i];
                    let arrowPoints = [];
                   // console.log("arrow " + arrow.arrowNo + " points=", arrow.points);
                    for (let j = 0; j < arrow.points.length; j++) {
                        arrowPoints.push(arrow.points[j]);
                    }
                    newArrowsPoints.push(arrowPoints);
                }
                newLevel.ArrowsPoints = newArrowsPoints;
                console.log("Level=");
                console.log(JSON.stringify(newLevel));

            }
            if (event.key == "g" || event.key == "G") {
                if (state.groupModeEdition == false) {
                    state.groupModeEdition = true;
                    console.log("Group edition:");
                    console.log("     g: to exit group edition:");
                    console.log("     left click: select left side bridge");
                    console.log("     middle click: select middle bridge");
                    console.log("     right click: select right side bridge");
                    console.log("     0-9: select group");

                    for (let i = 0; i < arrows.length; i++) {
                        if (arrows[i].group > 0) {
                            console.log(`Arrow ${arrows[i].arrowNo} is in group ${arrows[i].group}`);
                        }
                    }
                } else {
                    state.groupModeEdition = false;
                    console.log("Group edition exit");
                }
            }
            if (event.code == "Delete") {
                if (state.editionMode_arrowSelected != -1) {
                    console.log("delete arrow " + state.editionMode_arrowSelected);
                    removeArrow(state.editionMode_arrowSelected, arrows[state.editionMode_arrowSelected]);                
                    state.editionMode_arrowSelected = -1;
                    state.editionMode_segmentSelected = -1;

                }
            }

            const isNumber = /^[0-9]$/.test(event.key);
            if (isNumber) {
                let numKey = parseInt(event.key);
                console.log("key pressed " + event.key + " code=" + event.code+ " => " + numKey);   
                if (state.groupModeEdition == true) {
                    if (state.editionMode_arrowSelected != -1) {
                        if (state.editionMode_segmentSelected != -1) {
                            let segmentIndex = -1;
                            for (let i = 0; i < arrows.length; i++) {
                                if (arrows[i].arrowNo == state.editionMode_arrowSelected) {
                                    console.log(`Set Group ${numKey} to arrow ${state.editionMode_arrowSelected} segment ${state.editionMode_segmentSelected} with look ` + state.lastbutton);
                                    for (let j = 0; j < arrows[i].segments.length; j++) {
                                        if (arrows[i].segments[j].segmentNo == state.editionMode_segmentSelected) {
                                            segmentIndex = j;
                                        }
                                    }

                                    arrows[i].points[0].group = numKey;
                                    arrows[i].points[0].groupLook = state.lastbutton;
                                    arrows[i].points[0].groupPos = segmentIndex;
                                    console.log("arrow", arrows[i]);
                                    
                               
                                    arrows[i].group = numKey;
                                }
                            }
                        }
                        else
                            console.log("No segment selected, please select a segment first to set group number");
                    }
                    else
                        console.log("No arrow selected, please select an arrow first to set group number");
                }
            }
           // else
           //     console.log("key pressed " + event.key + " code=" + event.code);
        }

    });
    renderer.domElement.addEventListener('mousedown', (event) => {
        state.mouseDown = true;
        state.hasMoved = false;
        state.mouseDownLevel = currentLevelNo;
        
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        state.previousNormalizedX = x;
        state.previousNormalizedY = y;



    });

    renderer.domElement.addEventListener('mouseup', (event) => {
        //console.log("mouse", event);


        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        let deltaX = x - state.previousNormalizedX;
        let deltaY = y - state.previousNormalizedY;
        //console.log("Delta=" + deltaX + "," + deltaY);
        if (Math.abs(deltaX) > 0 || Math.abs(deltaY) >0)
            return;

        state.mouseDown = false;
        state.previousNormalizedX = null;
        state.previousNormalizedY = null;
        if (state.mouseDownLevel !== currentLevelNo)
            return;


        state.collisionAreadyCounted = false;

        state.lastbutton = event.button
        //controls.staticMoving = true
        //setTimeout(function () { controls.staticMoving = false; }, 500);
        /*
        controls.noRotate = true;// block rotation for a small time to avoid conflict with arrow selection
        setTimeout(function () { controls.noRotate = false;  }, 500);
        */

        //controls._movePrev.x = controls._moveCurr.x;
        //controls._movePrev.y = controls._moveCurr.y;
        controls._lastAngle = 0;// resetstop dumping rotation after mouse up

        const mouse = new THREE.Vector2()
        mouse.set((event.clientX / renderer.domElement.clientWidth) * 2 - 1, -(event.clientY / renderer.domElement.clientHeight) * 2 + 1)

        raycaster.setFromCamera(mouse, camera)

        const intersects = raycaster.intersectObjects(sceneMeshes, false)

        if (intersects.length > 0) {
            //console.log(sceneMeshes.length + " " + intersects.length)
         
            //console.log(intersects[0].object.userData.name + " dst=" + intersects[0].distance + " ")
            //console.log(intersects[0].object.userData.segment);
            if (intersects[0].object.visible === true)
                if (state.editionMode === false)
                    selectArrow(intersects[0].object.userData.arrowNo, intersects[0].object.userData.segmentNo)
                else {
                    if (state.editionModeCreation === false) {
                        state.editionMode_arrowSelected = intersects[0].object.userData.arrowNo;
                        state.editionMode_segmentSelected = intersects[0].object.userData.segmentNo;
                       // console.log("Edition mode: arrow selected " + state.editionMode_arrowSelected + "segment No" + intersects[0].object.userData.segmentNo);

                        //log segment type and face direction
                        for (let i = 0; i < arrows.length; i++) {
                            if (arrows[i].arrowNo == state.editionMode_arrowSelected) {
                                for (let j = 0; j < arrows[i].segments.length; j++) {
                                    // console.log("   segment " + j + " type=" + arrows[i].segments[j].type.description + " face direction=" + arrows[i].segments[j].faceDirection.description + " segment direction=" + arrows[i].segments[j].direction.description + " prev segment direction=" + arrows[i].segments[j].prev_direction.description);
                                    if (arrows[i].segments[j].segmentNo == intersects[0].object.userData.segmentNo) {
                                       // console.log(arrows[i].segments[j]);
                                        if (event.button == 0)//left click
                                        {
                                            /*
                                            let str_nextDirection = "";
                                            if (arrows[i].segments[j].next_direction != -1)
                                                str_nextDirection = " && segment.next_direction==Direction." + arrows[i].segments[j].next_direction.description;
                                            let str_nextFaceDirection = "";
                                            if (arrows[i].segments[j].next_faceDirection != undefined)
                                                str_nextFaceDirection = "&& segment.next_faceDirection==FaceDirection." + arrows[i].segments[j].next_faceDirection.description;
                                            let str = "if (segment.type==Type." + arrows[i].segments[j].type.description + " && segment.prev_direction==Direction." + arrows[i].segments[j].prev_direction.description + " && segment.direction==Direction." + arrows[i].segments[j].direction.description + str_nextDirection + " && segment.faceDirection==FaceDirection." + arrows[i].segments[j].faceDirection.description + "&& segment.prev_faceDirection==FaceDirection." + arrows[i].segments[j].prev_faceDirection.description + " && segment.faceDirection==FaceDirection." + arrows[i].segments[j].faceDirection.description + str_nextFaceDirection + ")";
                                            console.log(str);
                                            */
                                            console.log("Arrow No " + intersects[0].object.userData.arrowNo + " segment No " + intersects[0].object.userData.segmentNo)
                                        }
                                        if (event.button == 1 ||event.button == 2)// middle or right click
                                        {
                                            var target = new THREE.Vector3();
                                            intersects[0].object.getWorldPosition(target);
                                            // target now contains exitNode world position


                                            let px = undefined;
                                            let py = undefined
                                            let pz = undefined
                                            let nx = undefined;
                                            let ny = undefined
                                            let nz = undefined

                                            if (j > 0) {
                                                px = arrows[i].segments[j-1].mesh.position.x.toFixed(2)-0;// -0 => to get 0.00 and not -0.00 for a value like -0.001
                                                py = arrows[i].segments[j-1].mesh.position.y.toFixed(2)-0;
                                                pz = arrows[i].segments[j-1].mesh.position.z.toFixed(2)-0;
                                            }
                                            let cx = arrows[i].segments[j ].mesh.position.x.toFixed(2)-0;
                                            let cy = arrows[i].segments[j ].mesh.position.y.toFixed(2)-0;
                                            let cz = arrows[i].segments[j].mesh.position.z.toFixed(2)-0;

                                            if (j < arrows[i].segments.length - 1) {
                                                nx = arrows[i].segments[j + 1].mesh.position.x.toFixed(2)-0;
                                                ny = arrows[i].segments[j + 1].mesh.position.y.toFixed(2)-0;
                                                nz = arrows[i].segments[j + 1].mesh.position.z.toFixed(2)-0;
                                            }

                                            
                                            //console.log("Arrow No " + intersects[0].object.userData.arrowNo + " segment No " + intersects[0].object.userData.segmentNo, intersects[0].object.position)
                                            let val = "";
                                            let currentSegment = "c=" + arrows[i].segments[j].mesh.position.x.toFixed(2) + ", " + arrows[i].segments[j].mesh.position.y.toFixed(2) + ", " + arrows[i].segments[j].mesh.position.z.toFixed(2);
                                     
                                            let prevSegment = "";
                                            if (j > 0) {
                                                prevSegment = "p=" + arrows[i].segments[j - 1].mesh.position.x.toFixed(2) + ", " + arrows[i].segments[j - 1].mesh.position.y.toFixed(2) + ", " + arrows[i].segments[j - 1].mesh.position.z.toFixed(2) + " => ";
                                            }
                                            let nextSegment = "";
                                            if (j < arrows[i].segments.length - 1)
                                                nextSegment = " => n=" + arrows[i].segments[j + 1].mesh.position.x.toFixed(2) + ", " + arrows[i].segments[j + 1].mesh.position.y.toFixed(2) + ", " + arrows[i].segments[j + 1].mesh.position.z.toFixed(2);
                                            console.log("Arrow No " + intersects[0].object.userData.arrowNo + " segment No " + intersects[0].object.userData.segmentNo + ": " + prevSegment + currentSegment + " " + nextSegment, intersects[0].object.position)
                                            let fd = "";

                                            
                                            let valx = addtxtAngle("x", px, cx, nx);
                                            let valy = addtxtAngle("y", py, cy, ny);
                                            let valz = addtxtAngle("z", pz, cz, nz);
                                            let opt = "13";
                                            fd = " && (segment.faceDirection == FaceDirection." + arrows[i].segments[j].faceDirection.description + ")"

                                            if (event.button == 1) {
                                                valx = addtxt("x", px, cx, nx);
                                                valy = addtxt("y", py, cy, ny);
                                                valz = addtxt("z", pz, cz, nz);
                                                fd = "";
                                                opt = "11";
                                            }
                                            if (arrows[i].segments[j].type == Type.FromSide) {
                                                console.log("(segment.type == Type.FromSide) " + fd);
                                                console.log("From " + arrows[i].segments[j+1].faceDirection.description );
                                                
                                            }
                                            else if (arrows[i].segments[j].type == Type.ToSide) {
                                                console.log("(segment.type == Type.ToSide)" + fd);
                                                console.log("To " + arrows[i].segments[j - 1].faceDirection.description );  
                                               
                                            }
                                            console.log("if( " + valx + " && " + valy + " && " + valz + ") opt = " + opt + ";");
                                        
                                        }
                                    }
                                }
                            }
                        }
                        setColorArrow(state.editionMode_arrowSelected, 1);
                        setTimeout(function () { setColorArrow(state.editionMode_arrowSelected, 0); }, 100);
                    }
                }
        }
        if (state.editionMode === true) {
            const intersectsFace = raycaster.intersectObjects(faceMeshes, false)
            {
                if (intersectsFace.length > 0) {
                    const hit = intersectsFace[0];
                    const clickedObject = hit.object;
                    let boundingBox = undefined;
                    //ind the face info:
                   // let point0 = new THREE.Vector2();
                    //let currentFace = undefined;
                    for (let i = 0; i < faces.length; i++) {
                        if (faces[i].faceNo == clickedObject.userData.faceNo) {
                            //currentFace = faces[i];
                            boundingBox = getFaceBoundingBox(faces[i].points);
                            //console.log("Face " + faces[i].faceNo + " Bounding Box:", boundingBox);
                            //point0 = faces[i].points[0];
                            //find the minimum point of the face to use as reference for local coordinates
                            /*
                            for (let j = 0; j < faces[i].points.length; j++) {
                                if (faces[i].points[j].x < point0.x || j == 0) {
                                    point0.x = faces[i].points[j].x;
                                }
                                if (faces[i].points[j].y < point0.y || j == 0) {
                                    point0.y = faces[i].points[j].y;
                                }
                            }
                            */
                        }
                    }


                    // Clone the world hit point
                    const localPoint = hit.point.clone();
                    // Convert from World Space to Local Space
                    clickedObject.worldToLocal(localPoint);
                    //currentLevel.NbArrowsPerFace represent 1 unit in local space, so we can convert to grid coordinates
                    //let widthInGrig = Math.round(currentLevel.NbArrowsPerFace * boundingBox.width);
                    let heightInGrig = Math.round(currentLevel.NbArrowsPerFace * boundingBox.height);
                    //console.log("width=" + widthInGrig + " height=" + heightInGrig + " bx=" + boundingBox.y);

                    let x = Math.round((localPoint.x -boundingBox.x - 0.025) * currentLevel.NbArrowsPerFace);

                    //let x = Math.round((localPoint.x + currentFace.position.x - boundingBox.width / 2 - 0.05) * currentLevel.NbArrowsPerFace);
                    //let x = Math.round((localPoint.x + boundingBox.width / 2 - 0.05) * currentLevel.NbArrowsPerFace);
                    //-----let x = Math.round((localPoint.x + 0.5 - 0.05) * currentLevel.NbArrowsPerFace);
                    //let y = heightInGrig - Math.round((localPoint.y + currentFace.position.y + boundingBox.height / 2 - 0.05) * currentLevel.NbArrowsPerFace) - 1;

                    let y = heightInGrig -Math.round((boundingBox.height + boundingBox.y + localPoint.y - 0.025) * currentLevel.NbArrowsPerFace) - 1;
                    //let y = heightInGrig - Math.round(( boundingBox.height - boundingBox.y - 0.05) * currentLevel.NbArrowsPerFace) - 1 ;
                    //let y = heightInGrig - Math.round((localPoint.y + boundingBox.height / 2 - 0.05) * currentLevel.NbArrowsPerFace) - 1;



                    //--let y = currentLevel.NbArrowsPerFace - Math.round((localPoint.y + 0.5 - 0.05) * currentLevel.NbArrowsPerFace) - 1;
                    //console.log(`Local Coordinates on face ${clickedObject.userData.faceNo}: X: ${localPoint.x}, Y: ${localPoint.y} => X: ${x}, Y: ${y}`);
                    /*if(x<0 || y<0)
                        return;
                    if (x >= widthInGrig || y >= heightInGrig)
                        return;
                        */
                    if (state.editionModeCreation == true) {

                        //-------------------------
                        // check if free position
                        if (intersects.length > 0) {
                            if (intersects[0].object.visible === true) {

                                let dist = intersects[0].point.distanceTo(intersectsFace[0].point)
                                console.log("arrow hited !!! =>"+ dist)
                                return;
                            }
                           
                           }


                        //console.log("Edition mode: add point to arrow " + state.editionMode_arrowSelected + " at face " + clickedObject.userData.faceNo + " x=" + x + " y=" + y);
                        let currentArrow = undefined;
                        //add point to current arrow
                        for (let i = 0; i < arrows.length; i++) {
                            if (arrows[i].arrowNo == state.editionMode_arrowSelected) {
                                currentArrow = arrows[i];
                            }
                        }
                        if (currentArrow == undefined) {
                            const arrow_Points = [
                                new THREE.Vector3(x, y, clickedObject.userData.faceNo),
                            ];
                            createArrow(state.editionMode_arrowSelected, arrow_Points, ArrowColor);
                            setColorArrow(state.editionMode_arrowSelected, 1);
                        }
                        else {
                            //add point here
                            if (clickedObject.userData.faceNo == currentArrow.points[currentArrow.points.length - 1].z)//same face
                            {
                                if (x == currentArrow.points[currentArrow.points.length - 1].x || y == currentArrow.points[currentArrow.points.length - 1].y) {
                                    addPointToArrow(currentArrow, x, y, clickedObject.userData.faceNo);
                                    setColorArrow(state.editionMode_arrowSelected, 1);
                                }
                            }
                            else {//different face, no checks
                                addPointToArrow(currentArrow, x, y, clickedObject.userData.faceNo);
                                setColorArrow(state.editionMode_arrowSelected, 1);
                            }
                        }
                     }
                }
            }
        }

        raycasterHUD.setFromCamera(mouse, cameraOrtho)
        const intersectsHUD = raycasterHUD.intersectObjects(clickableHUD, false)
        if (intersectsHUD.length > 0) {
            console.log("HUD clicked: " + intersectsHUD[0].object.name);
            if (intersectsHUD[0].object.name == "Reset") {
                // Handle reset action here
                currentLevelNo = 1;
                loadLevel(currentLevelNo);
            }
            if (intersectsHUD[0].object.name == "Volume") {
                state.volume = !state.volume;
                SetVolume(state.volume);
                
            }
        }

        
    });
  
}
//-----------------------------------------------------------------
//handle cookies
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}