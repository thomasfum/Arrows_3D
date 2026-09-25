//----------------------------------------------------------------------
//
// TODO:

//----------------------------------------------------------------------

import * as THREE from 'three'
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';


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
const raycaster = new THREE.Raycaster()
const raycasterHUD = new THREE.Raycaster()

// textures
const loader = new THREE.TextureLoader();
const textureBackground = await loader.loadAsync( 'stars2.jpg' );
const textureWhiteHead = await loader.loadAsync('arrow/head.png');
const textureWhiteBody = await loader.loadAsync('arrow/body.png');
const textureWhiteTail = await loader.loadAsync('arrow/tail.png');
const textureWhiteAngle = await loader.loadAsync('arrow/angle.png');
const textureReflection = await loader.loadAsync('arrow/reflection.png');
const textureHelper1 = await loader.loadAsync('arrow/helper1.png');
const textureHelper2 = await loader.loadAsync('arrow/helper2.png');
const textureSquare = await loader.loadAsync('arrow/square.png');
const textureWHeart = await loader.loadAsync('heart.png');
const textureReset = await loader.loadAsync('refresh-ccw.png');
const textureVolumeOn = await loader.loadAsync('volume-2.png');
const textureVolumeOff = await loader.loadAsync('volume-x.png');
const textureCadre = await loader.loadAsync('cadre.png');
const textureBridgeCentral = await loader.loadAsync('bridgeCentral.png');
const textureBridgeSide1 = await loader.loadAsync('bridgeSide.png');
const textureBridgeSide2 = await loader.loadAsync('bridgeSide.png');
textureBridgeSide2.rotation = Math.PI;

const audioClick = new Audio('click.mp3');
const audioLevelSuccess = new Audio('levelSuccess.mp3');
const audioLevelFailure = new Audio('levelFailure.mp3');
const audioFailure = new Audio('failure.mp3');

//materials
function PrepareMaterialBack(mat,color) {
    mat.transparent = true
    mat.depthTest = true
    mat.alphaTest = 0.1
    mat.color.setHex(color);
}

function PrepareMaterial(mat,color) {
    mat.transparent = true
    mat.depthTest = true
    mat.alphaTest = 0.1
    mat.roughness = 0.8;
    mat.metalness = 0.2;
   // mat.alphaToCoverage= true; 
    mat.metalnessMap = textureReflection;
    if(color !== undefined) {
        mat.color.setHex(color);
    }
    mat.metalnessMap = textureReflection;
}
function PrepareMaterialHUD(mat, color) { 
    mat.transparent = true
    mat.depthTest = false
    mat.depthWrite = false
     mat.color.setHex(color);
    

}
function updateTexture(texture, repeat = false) {
    if (repeat == false) {
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
    }
    else { 
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
    }
    texture.repeat.set(10, 10)
    texture.offset.set(0.5, 0.5)
    texture.colorSpace = THREE.SRGBColorSpace; 
    texture.generateMipmaps = true;
    texture.needsUpdate = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.maxFilter = THREE.LinearFilter
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
}

const materialHead = new THREE.MeshStandardMaterial({ map: textureWhiteHead, side: THREE.FrontSide });
PrepareMaterial(materialHead);

const materialHeadBack = new THREE.MeshBasicMaterial({ map: textureWhiteHead, side: THREE.BackSide });
PrepareMaterialBack(materialHeadBack, ArrowColorBack);

const materialBody = new THREE.MeshStandardMaterial({ map: textureWhiteBody, side: THREE.FrontSide });
PrepareMaterial(materialBody);

const materialBodyBack = new THREE.MeshBasicMaterial ({ map: textureWhiteBody, side: THREE.BackSide });
PrepareMaterialBack(materialBodyBack, ArrowColorBack);

const materialTail = new THREE.MeshStandardMaterial( { map: textureWhiteTail, side: THREE.FrontSide } );
PrepareMaterial(materialTail);

const materialTailBack = new THREE.MeshBasicMaterial( { map: textureWhiteTail, side: THREE.BackSide } );
PrepareMaterialBack(materialTailBack, ArrowColorBack);

const materialAngle = new THREE.MeshStandardMaterial( { map: textureWhiteAngle, side: THREE.FrontSide } );
PrepareMaterial(materialAngle);

const materialAngleBack = new THREE.MeshBasicMaterial( { map: textureWhiteAngle, side: THREE.BackSide } );
PrepareMaterialBack(materialAngleBack, ArrowColorBack);

const materialHelper1 = new THREE.MeshBasicMaterial({ map: textureHelper1, side: THREE.FrontSide });
PrepareMaterial(materialHelper1);

const materialHelper2 = new THREE.MeshBasicMaterial({ map: textureHelper2, side: THREE.FrontSide });
PrepareMaterial(materialHelper2);

const materialHeadSelected = new THREE.MeshBasicMaterial({ map: textureWhiteHead, side: THREE.FrontSide });
PrepareMaterial(materialHeadSelected,ArrowColorSelected);

const materialBodySelected = new THREE.MeshBasicMaterial({ map: textureWhiteBody, side: THREE.FrontSide });
PrepareMaterial(materialBodySelected,ArrowColorSelected);

const materialTailSelected = new THREE.MeshBasicMaterial({ map: textureWhiteTail, side: THREE.FrontSide });
PrepareMaterial(materialTailSelected,ArrowColorSelected);

const materialAngleSelected = new THREE.MeshBasicMaterial({ map: textureWhiteAngle, side: THREE.FrontSide });
PrepareMaterial(materialAngleSelected,ArrowColorSelected);

const materialHeadRed = new THREE.MeshBasicMaterial({ map: textureWhiteHead, side: THREE.FrontSide });
PrepareMaterial(materialHeadRed, ArrowColorRed);

const materialBodyRed = new THREE.MeshBasicMaterial({ map: textureWhiteBody, side: THREE.FrontSide });
PrepareMaterial(materialBodyRed, ArrowColorRed);

const materialTailRed = new THREE.MeshBasicMaterial({ map: textureWhiteTail, side: THREE.FrontSide });
PrepareMaterial(materialTailRed, ArrowColorRed);

const materialAngleRed = new THREE.MeshBasicMaterial({ map: textureWhiteAngle, side: THREE.FrontSide });
PrepareMaterial(materialAngleRed, ArrowColorRed);

const materialCube = new THREE.MeshStandardMaterial({
    map: null,
    color: 0x777777,
    roughness: 0.3,
    metalness: 0.2,
    transparent: true, // Required for opacity to work
    opacity: 0.70,       // 70% see-through
    depthTest: true
});

const materialHeart = new THREE.MeshBasicMaterial({ map: textureWHeart, side: THREE.DoubleSide });
PrepareMaterialHUD(materialHeart, 0xDD2E44);


const materialHeartGray = new THREE.MeshBasicMaterial({ map: textureWHeart, side: THREE.DoubleSide });
PrepareMaterialHUD(materialHeartGray, 0xAAAAAA);


const materialReset = new THREE.MeshBasicMaterial({ map: textureReset, side: THREE.DoubleSide });
PrepareMaterialHUD(materialReset, 0x8381FF);

const materialVolume = new THREE.MeshBasicMaterial({ map: textureVolumeOn, side: THREE.DoubleSide });
PrepareMaterialHUD(materialVolume, 0x8381FF);


const materialCadre = new THREE.MeshBasicMaterial({ map: textureCadre, side: THREE.DoubleSide });
PrepareMaterialHUD(materialCadre, ArrowColorRed);

const materialBridgeCentral = new THREE.MeshBasicMaterial({ map: textureBridgeCentral, side: THREE.DoubleSide });
PrepareMaterial(materialBridgeCentral);  

const materialBridgeSide1 = new THREE.MeshBasicMaterial({ map: textureBridgeSide1, side: THREE.DoubleSide });
PrepareMaterial(materialBridgeSide1);  

const materialBridgeSide2 = new THREE.MeshBasicMaterial({ map: textureBridgeSide2, side: THREE.DoubleSide });
PrepareMaterial(materialBridgeSide2);  




//font
const loaderFont = new FontLoader();
const font = await loaderFont.loadAsync('optimer_regular.typeface.json');


//geometries
const HeartPoints = [
    new THREE.Vector2(-0.05, -0.05),
    new THREE.Vector2(-0.05, 0.05),  
    new THREE.Vector2(0.05, 0.05),
    new THREE.Vector2(0.05, -0.05)
];

const heartShape = new THREE.Shape(HeartPoints);
const heartGeometry = new THREE.ShapeGeometry(heartShape);

const squareShape = new THREE.Shape()
    .moveTo(-0.05, -0.05)
    .lineTo(-0.05, 0.05)
    .lineTo(0.05, 0.05)
    .lineTo(0.05, -0.05)
    .closePath();
let geometrySquare = new THREE.ShapeGeometry(squareShape);


let group = new THREE.Group();// everything rotating
scene.background = textureBackground
scene.add(group);


 // Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Camera
 const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z =window.devicePixelRatio *1.8
scene.add(camera)



const cameraOrtho = new THREE.OrthographicCamera(-sizes.width / 2, sizes.width / 2, sizes.height / 2, -sizes.height / 2, 0.1, 10);
cameraOrtho.position.z = window.devicePixelRatio * 1.4;


const sceneOrtho = new THREE.Scene();
// Ambient light
const ambientLight = new THREE.AmbientLight()
ambientLight.color = new THREE.Color(0xffe6cc)
ambientLight.intensity = 2
camera.add(ambientLight)

cameraOrtho.add(ambientLight.clone())

// Directional light
const directionalLight = new THREE.DirectionalLight(0xffe6cc,0.8)

//directionalLight.position.set(10, 25, 100)
directionalLight.position.set(100 / 60, 100 / 60, 100 / 60)
camera.add(directionalLight)
//cameraOrtho.add(directionalLight.clone())

const light = new THREE.PointLight(0xffffff, 200,100)
light.position.set(100 / 20, 100 / 20, 100 / 20)
//-camera.add(light)
//cameraOrtho.add(light.clone())

// 1. Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true 
})
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
const composer = new EffectComposer(renderer, target);

const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);
*/

// Camera Controls
const controls = new TrackballControls(camera, renderer.domElement);
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
// Animate
const clock = new THREE.Clock()
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

addEvents();
console.log("Use E key to enter in Edition mode");
//****************************************************************
let currentLevelNo = 1;
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
//****************************************************************
tick()



//-----------------------------------------------------------------
//Heads Up Display (HUD) functions


function showHudBorder(show) {
    if (cadreMesh) {
        cadreMesh.visible = show;
    }
}

function createHudBorder() {
    cadreMesh = new THREE.Mesh(geometrySquare, materialCadre);
    cadreMesh.name = "Cadre";
    cadreMesh.renderOrder = 99999;// to be in front of arrow
    cadreMesh.scale.set(10 * sizes.width, 10 * sizes.height, 1);
    cadreMesh.visible = false;
    sceneOrtho.add(cadreMesh);
}
function CreateVolume() {
    volumeMesh = new THREE.Mesh(heartGeometry, materialVolume);
    volumeMesh.name = "Volume";
    volumeMesh.renderOrder = 99999;// to be in front of arrow

    //volumeMesh.position.set(-1.5, -0.65, -1);
    volumeMesh.position.set(sizes.width / 2 - 40,-sizes.height / 2+40, 0);
    volumeMesh.scale.set(250, 250, 1);
    clickableHUD.push(volumeMesh);
    sceneOrtho.add(volumeMesh);
}
function CreateReset() {
    resetMesh = new THREE.Mesh(heartGeometry, materialReset);
    resetMesh.name = "Reset";
    resetMesh.renderOrder = 99999;// to be in front of arrow
    resetMesh.position.set(sizes.width/2-40,-sizes.height/2+80, 0);
   //resetMesh.position.set(-1, -0.65, -1);
    resetMesh.scale.set(250, 250, 1);
    clickableHUD.push(resetMesh);
    sceneOrtho.add(resetMesh);



    
}
function CreateHeartNumber(camera, HeartNbTotal) {

    for (let i = 0; i < hearts.length; i++) {
        const object = sceneOrtho.getObjectByName("Heart" + i);
        if (object) {
            //camera.remove(object);
            sceneOrtho.remove(object);
        }
        }
    hearts = [];
    for (let i = 0; i < HeartNbTotal; i++) {
        let heartMesh = new THREE.Mesh(heartGeometry, materialHeart);
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
            hearts[i].material = materialHeart;
        } else {
            hearts[i].material = materialHeartGray;
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
    if (LevelNo == -1)
        txt = "You have finished all levels";
    if (LevelNo == -2)
        txt = "Next Level";
    if (LevelNo == -3)
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
    if (LevelNo <0)
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
        materialVolume.map = textureVolumeOn;
    } else {
        setCookie("Sound", "false");
        materialVolume.map = textureVolumeOff;
    }
    materialVolume.needsUpdate = true;
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
        /*
        else {
            console.log("probably changing face");
            arrow.segments.push(createSegment(arrowNo, segmentNo++, points[i].z, oldFaceNo,-1, segType, segDirection, segDirection,-1, points[i].x, points[i].y));
        }
        */
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
            segment.mesh.material = materialBody;
            if (opt == 11) {
                segment.mesh.material = materialBodyRed;
                console.log("RED!!!!")
            }
            if (segment.meshBack) {
                segment.meshBack.material = materialBodyBack;
            }
            rotateBodySegmentMesh(segment);
            segment.sideFixed = true;
            segment.sideFixedSubType = Type.Body;
        }

        if (opt == 2 || opt == 12) {
            segment.mesh.material = materialBody;
            if (opt == 12) {
                segment.mesh.material = materialBodyRed;
                console.log("RED!!!!")
            }
            if (segment.meshBack) {
                segment.meshBack.material = materialBodyBack;
            }
            rotateBodySegmentMesh(segment);
            segment.sideFixed = true;
            segment.sideFixedSubType = Type.Body;
        }

        if (opt == 3 || opt == 13) {
            segment.mesh.material = materialAngle;
            if (opt == 13) {
                segment.mesh.material = materialAngleRed;
                console.log("RED!!!!")
            }
            segment.angleType = 2;
            segment.meshBack.material = materialAngleBack;
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
            segment.mesh.material = materialAngle;
            if (opt == 14) {
                segment.mesh.material = materialAngleRed;
                console.log("RED!!!!")
            }
            segment.angleType = 2;
            segment.meshBack.material = materialAngleBack;
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
            segment.mesh.material = materialAngle;
            if (opt == 15) {
                segment.mesh.material = materialAngleRed;
                console.log("RED!!!!")
            }
            segment.angleType = 2;
            segment.meshBack.material = materialAngleBack;
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
            
            segment.mesh.material = materialAngle;
            if (opt == 16) {
                segment.mesh.material = materialAngleRed;
                console.log("RED!!!!")
            }
            segment.angleType = 2;
            segment.meshBack.material = materialAngleBack;
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
                segment.mesh.material = materialTail;
                if (opt > 10) {
                    segment.mesh.material = materialTailRed;
                }
                if (segment.meshBack) {
                    segment.meshBack.material = materialTailBack;
                }
                segment.sideFixedSubType = Type.Tail;

            }
            if (i == arrow.segments.length - 1) {
                segment.sideFixed = true;
                //console.log("HEAD " + opt + " " + segment.direction.description);
                segment.mesh.material = materialHead;
                if (opt > 10) {
                    segment.mesh.material = materialHeadRed;
                }
                if (segment.meshBack) {
                    segment.meshBack.material = materialHeadBack;
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
                    segment.mesh.material = materialBridgeCentral;
                if (arrow.groupLook == 0)
                    segment.mesh.material = materialBridgeSide1;
                if (arrow.groupLook == 2)
                    segment.mesh.material = materialBridgeSide2;
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
        segment.mesh.material = materialAngle;
        segment.angleType = 2;
        segment.meshBack.material = materialAngleBack;

        segment.mesh.rotation.z = segmentFace.rotation.z - (Math.PI);
        segment.meshBack.rotation.z = segmentFace.rotation.z - (Math.PI);
        if (faceCorrection == -1) { 
            segment.mesh.rotation.z = segmentFace.rotation.z + 0;
            segment.meshBack.rotation.z = segmentFace.rotation.z + 0;
        }
    

    } else if (segment.prev_direction === Direction.Down && segment.direction === Direction.Right) {
        if (debug == true)
            segment.mesh.material = materialAngleRed;
        else
            segment.mesh.material = materialAngle;
        segment.angleType = 1;
        segment.meshBack.material = materialAngleBack;

        segment.mesh.rotation.z = segmentFace.rotation.z + 0;
        segment.meshBack.rotation.z = segmentFace.rotation.z + 0;
        if (faceCorrection == -1) {
            segment.mesh.rotation.z = segmentFace.rotation.z - (Math.PI);
            segment.meshBack.rotation.z = segmentFace.rotation.z - (Math.PI);
        }
    } else if (segment.prev_direction === Direction.Right && segment.direction === Direction.Up) {
        if (debug == true)
            segment.mesh.material = materialAngleRed;
        else
            segment.mesh.material = materialAngle;
        segment.angleType = 1;
        segment.meshBack.material = materialAngleBack;

        segment.mesh.rotation.z = segmentFace.rotation.z + (Math.PI / 2) * faceCorrection;
        segment.meshBack.rotation.z = segmentFace.rotation.z + (Math.PI / 2) * faceCorrection;
    } else if (segment.prev_direction === Direction.Up && segment.direction === Direction.Right) {
        segment.mesh.material = materialAngle;
        segment.angleType = 1;
        segment.meshBack.material = materialAngleBack;

        segment.mesh.rotation.z = segmentFace.rotation.z + (3 * Math.PI / 2) * faceCorrection;
        segment.meshBack.rotation.z = segmentFace.rotation.z + (3 * Math.PI / 2) * faceCorrection;

    } else if (segment.prev_direction === Direction.Up && segment.direction === Direction.Left) {
        if (debug == true)
            segment.mesh.material = materialAngleRed;
        else
            segment.mesh.material = materialAngle;
        segment.angleType = 1;
        segment.meshBack.material = materialAngleBack;

        segment.mesh.rotation.z = segmentFace.rotation.z + Math.PI;
        segment.meshBack.rotation.z = segmentFace.rotation.z + Math.PI ;
        if (faceCorrection == -1) {
            segment.mesh.rotation.z = segmentFace.rotation.z + 0;
            segment.meshBack.rotation.z = segmentFace.rotation.z + 0;
        }

    } else if (segment.prev_direction === Direction.Left && segment.direction === Direction.Down) {
        if (debug == true)
            segment.mesh.material = materialAngleRed;
        else
            segment.mesh.material = materialAngle;
        segment.angleType = 1;
        segment.meshBack.material = materialAngleBack;

        segment.mesh.rotation.z = segmentFace.rotation.z + (3 * Math.PI / 2) * faceCorrection;
        segment.meshBack.rotation.z = segmentFace.rotation.z + (3 * Math.PI / 2) * faceCorrection;

    } else if (segment.prev_direction === Direction.Down && segment.direction === Direction.Left) {
        segment.mesh.material = materialAngle;
        segment.angleType = 1;
        segment.meshBack.material = materialAngleBack;

        segment.mesh.rotation.z = segmentFace.rotation.z + (Math.PI / 2) * faceCorrection;
        segment.meshBack.rotation.z = segmentFace.rotation.z + (Math.PI / 2) * faceCorrection;
    } else if (segment.prev_direction === Direction.Left && segment.direction === Direction.Up) {
        segment.mesh.material = materialAngle;
        segment.angleType = 1;
        segment.meshBack.material = materialAngleBack;

            segment.mesh.rotation.z = segmentFace.rotation.z + 0;
            segment.meshBack.rotation.z = segmentFace.rotation.z + 0;
            if (faceCorrection == -1) {
                segment.mesh.rotation.z = segmentFace.rotation.z + (Math.PI);
                segment.meshBack.rotation.z = segmentFace.rotation.z + (Math.PI);
            }

    }
    else
        console.warn("angle not handled " + segment.segmentNo + " " + segment.prev_direction.description + "=>" + segment.direction.description);

        
    segment.mesh.material = materialAngle;
    segment.angleType = 1;
    segment.meshBack.material = materialAngleBack;
    

}
function checkColision(arrowNo, faceNo, x, y) {
    for (const arrow of arrows) {
        for (const segment of arrow.segments) {
            if (segment.faceNo === faceNo && segment.x === x && segment.y === y) {
                console.log("Collision detected for arrow " + arrowNo + " at face " + faceNo + " position (" + x + "," + y + ")");
                return true;
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
    lastHead.mesh.material = materialBody;
    lastHead.meshBack.material = materialBodyBack;
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
    /*
    for (const segment of arrow.segments) {
        //console.log("Deleting segment mesh with ID: " + segment.mesh.id);
        group.remove(segment.mesh);
        group.remove(segment.meshBack);
        segment.mesh = null;
        segment.meshBack = null;
    }
    */
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

                //check nex position in face
                let collision=checkColision(arrowNo, head.faceNo, head.x + dx, head.y + dy);
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
                                    UpdateLevelText(camera, -3);
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
                        segment.mesh.material = materialHeadRed;
                    else if (segment.type === Type.Body) 
                        segment.mesh.material = materialBodyRed;
                    else if (segment.type === Type.Tail) 
                        segment.mesh.material = materialTailRed;
                    else if (segment.type === Type.Angle) 
                           segment.mesh.material = materialAngleRed;
                    else if (segment.type === Type.ToSide || segment.type === Type.FromSide) {
                        if (segment.sideFixedSubType === Type.Body) 
                            segment.mesh.material = materialBodyRed;
                         else if (segment.sideFixedSubType === Type.Angle) 
                            segment.mesh.material = materialAngleRed;
                        else if (segment.sideFixedSubType == Type.Head)
                            segment.mesh.material = materialHeadRed;  
                        else if (segment.sideFixedSubType == Type.Tail)
                            segment.mesh.material = materialTailRed;  
                    }
                    else
                        console.error("setColorArrow unknown segment type " + segment.type.description);
                } 

                if (color === 1) {
                    if (segment.type === Type.Head) 
                        segment.mesh.material = materialHeadSelected;
                     else if (segment.type === Type.Body) 
                        segment.mesh.material = materialBodySelected;
                     else if (segment.type === Type.Tail) 
                        segment.mesh.material = materialTailSelected;
                     else if (segment.type === Type.Angle) 
                        segment.mesh.material = materialAngleSelected;
                     else if (segment.type === Type.ToSide || segment.type === Type.FromSide) {
                        if (segment.sideFixedSubType === Type.Body) 
                            segment.mesh.material = materialBodySelected;
                        else if (segment.sideFixedSubType === Type.Angle) 
                            segment.mesh.material = materialAngleSelected;
                        else if (segment.sideFixedSubType == Type.Head)
                            segment.mesh.material = materialHeadSelected;
                        else if (segment.sideFixedSubType == Type.Tail)
                            segment.mesh.material = materialTailSelected;  
                    }
                    else
                        console.error("setColorArrow unknown segment type " + segment.type.description);
                } 
                if (color === 0) {
                    if (segment.type === Type.Head) {
                        segment.mesh.material = materialHead;
                        segment.meshBack.material = materialHeadBack;
                    } else if (segment.type === Type.Body) {
                        segment.mesh.material = materialBody;
                        segment.meshBack.material = materialBodyBack;
                    } else if (segment.type === Type.Tail) {
                        segment.mesh.material = materialTail;
                        segment.meshBack.material = materialTailBack;
                    } else if (segment.type === Type.Angle) {
                        if (segment.angleType === 1) {
                            segment.mesh.material = materialAngle;
                            segment.meshBack.material = materialAngleBack;
                        }
                } else if (segment.type === Type.ToSide || segment.type === Type.FromSide) {
                        if (segment.sideFixedSubType === Type.Body) 
                        segment.mesh.material = materialBody;
                        else if (segment.sideFixedSubType === Type.Angle) 
                            segment.mesh.material = materialAngle;
                        else if (segment.sideFixedSubType == Type.Head)
                            segment.mesh.material = materialHead;
                        else if (segment.sideFixedSubType == Type.Tail)
                            segment.mesh.material = materialTail;  
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
        segment.mesh = new THREE.Mesh(geometrySquare, materialHead,);
        segment.meshBack = new THREE.Mesh(geometrySquare,materialHeadBack);
    } else if (type === Type.Body) {
        segment.mesh = new THREE.Mesh(geometrySquare, materialBody);
        segment.meshBack = new THREE.Mesh(geometrySquare, materialBodyBack);
    } else if (type === Type.Tail) {    
        segment.mesh = new THREE.Mesh( geometrySquare, materialTail ) ;
        segment.meshBack = new THREE.Mesh(geometrySquare, materialTailBack);
    } else if (type === Type.Angle) {   
        // segment.mesh = new THREE.Mesh( geometrySquare, materialAngle ) ;
    } else if (type == Type.ToSide) {
        //console.log("createSegment TO between faces, seg no=" + segment.segmentNo + " face " + segment.faceNo + " type " + segment.type.description + " direction " + segment.direction.description);
        segment.mesh = new THREE.Mesh(geometrySquare, materialHelper1);
        segment.meshBack = new THREE.Mesh(geometrySquare, materialHelper1);
    }
    else if (type == Type.FromSide) {
       // console.log("createSegment FROM between faces, seg no=" + segment.segmentNo + " face " + segment.faceNo + " dir: " + segment.prev_direction.description + " => " + segment.direction.description + " =>" + segment.next_direction.description + "; face:" + segment.prev_faceDirection.description + " => " + segment.faceDirection.description+ " =>" + segment.next_faceDirection.description);
        segment.mesh = new THREE.Mesh(geometrySquare, materialHelper2);
        segment.meshBack = new THREE.Mesh(geometrySquare, materialHelper2);
    }

      
    if (type === Type.Head || type === Type.Tail || type === Type.Body) {
        rotateBodySegmentMesh(segment);
    }
    if (type === Type.Angle) {//in same face

        segment.mesh = new THREE.Mesh(geometrySquare, materialAngle);
        segment.meshBack = new THREE.Mesh(geometrySquare, materialAngleBack);
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

    // segment.mesh.position.set(segmentFace.points[0].x + x + 0.025, - segmentFace.points[0].y - y + 0.075, faces[0].position.z /*+ 0.025*/);
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
    segment.mesh.position.set(xInSpace, yInSpace, letZ/* + 0.025*/);
    if (segment.meshBack) {
        segment.meshBack.position.set(xInSpace, yInSpace, letZ/* + 0.025*/);
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
function createFace(faceNo,points, position, rotation)
{

    const faceShape = new THREE.Shape(points);//.closePath();
    const faceGeometry = new THREE.ShapeGeometry(faceShape);
    const faceMesh = new THREE.Mesh(faceGeometry, materialCube);
    
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
    /*
    if (position.x == 0)
        position.x=0.1

    if (position.y == 0)
        position.y = 0.1

    if (position.z == 0)
        position.z = 0.1;
*/        

    faceMesh.position.set(position.x + dx*backward, position.y + dy*backward, position.z + dz*backward); // to prevet Z fighting with arrows
    //faceMesh.position.set(position.x, position.y, position.z);
    //faceMesh.renderOrder = -999;// to fix concurent transparency issues with arrows

    faceMesh.userData.name = "face " + faceNo;
    faceMesh.userData.faceNo = faceNo;
    faceMeshes.push(faceMesh);

    const faceEdgesGeometry = new THREE.EdgesGeometry(faceGeometry);
    const faceEdges = new THREE.LineSegments(faceEdgesGeometry, new THREE.LineBasicMaterial({ color: 0xcccccc }));
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
    /*
    let dirV = new THREE.Vector3(1, 0, 0);
    if (dir === FaceDirection.Front) dirV.set(0, 0, -1);
    if (dir === FaceDirection.Back) dirV.set(0, 0, 1);
    if (dir === FaceDirection.Left) dirV.set(-1, 0, 0);
    if (dir === FaceDirection.Right) dirV.set(1, 0, 0);
    if (dir === FaceDirection.Up) dirV.set(0, 1, 0);
    if (dir === FaceDirection.Down) dirV.set(0, -1, 0);
    //normalize the direction vector (convert to vector of length 1)
    dirV.normalize();
    const origin = new THREE.Vector3(bary[0] * 1.5, bary[1] * 1.5, 0);
    const length = 1;
    const hex = 0xffff00;

    const arrowHelper = new THREE.ArrowHelper(dirV, origin, length, hex);
    scene.add(arrowHelper);
    */
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
    
    

    updateTexture(textureWhiteHead);
    updateTexture(textureWhiteBody);
    updateTexture(textureReflection);
    updateTexture(textureWhiteTail);
    updateTexture(textureWhiteAngle);
    updateTexture(textureHelper1);
    updateTexture(textureHelper2);
    updateTexture(textureSquare,true);
    updateTexture(textureWHeart);
    updateTexture(textureReset);
    updateTexture(textureVolumeOff);
    updateTexture(textureVolumeOn);
    updateTexture(textureCadre);
    updateTexture(textureBridgeCentral);
    updateTexture(textureBridgeSide1);
    updateTexture(textureBridgeSide2);

    materialHead.color.setHex(ArrowColor);
    materialBody.color.setHex(ArrowColor);
    materialTail.color.setHex(ArrowColor);
    materialAngle.color.setHex(ArrowColor);
    materialHelper1.color.setHex(ArrowColor);
    materialHelper2.color.setHex(ArrowColor);

    geometrySquare = new THREE.ShapeGeometry(squareShape);
    geometrySquare.scale(10 / currentLevel.NbArrowsPerFace , 10 / currentLevel.NbArrowsPerFace , 1);

    textureSquare.repeat.set(currentLevel.NbArrowsPerFace, currentLevel.NbArrowsPerFace);
    if (currentLevel.NbArrowsPerFace%2==0)
        textureSquare.center.set(0.5, 0.5 );
    textureSquare.needsUpdate = true;
    materialCube.needsUpdate = true;

    for (const face of currentLevel.FaceLevels) {
        createFace(face.faceNo, face.points, face.position, face.rotation);
    }
    for (let i = 0; i < currentLevel.ArrowsPoints.length; i++) {
        createArrow(i, currentLevel.ArrowsPoints[i], ArrowColor);
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
    CreateHeartNumber(camera, currentLevel.NbHeartTotal);
    //console.log("Heart=" + currentLevel.NbHeart + "/" + currentLevel.NbHeartTotal);
    UpdateHeartNumber(camera, currentLevel.NbHeart, currentLevel.NbHeartTotal);

    setCookie("Level", currentLevelNo, 365);
}
function loadLevel(levelNo, nextLevel = false) {
    console.log("Loading level " + levelNo);
    (async () => {

        const response = await fetch('Levels/Level' + levelNo + '.json');
        if (response.status === 404) {
            console.error("Level " + levelNo + " not found");
            hideAll();
            UpdateLevelText(camera, -1);
            return;
        }
        if (!response.ok) {
            console.error("Level " + levelNo + " error");
            hideAll();
            UpdateLevelText(camera, -1);
            return;
        }
        const txtData = await response.text();

        if (txtData[0] !== '{') { 
            console.error("Invalid JSON format for level " + levelNo);
            hideAll();
            UpdateLevelText(camera, -1);
            return;
        }



        if (nextLevel) {// show next level message
            // Handle any logic needed for the next level
            //----------
            UpdateLevelText(camera, -2);
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
    /*
    if (txt_np != "")
        txt = txt + " && " + txt_np;
        */
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
                materialCube.map = textureSquare;
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