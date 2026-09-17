var iu=Object.defineProperty;var su=(i,e,t)=>e in i?iu(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ft=(i,e,t)=>su(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ha="174",Xi={ROTATE:0,DOLLY:1,PAN:2},ru=0,Al=1,ou=2,Yc=1,au=2,Cn=3,gt=0,Rt=1,Gt=2,Nn=0,qi=1,Rl=2,Cl=3,Pl=4,lu=5,di=100,cu=101,hu=102,uu=103,fu=104,du=200,pu=201,mu=202,gu=203,Go=204,Wo=205,_u=206,vu=207,xu=208,Mu=209,Su=210,yu=211,Eu=212,Tu=213,bu=214,Xo=0,qo=1,Yo=2,Ki=3,Zo=4,jo=5,Jo=6,Ko=7,Zc=0,wu=1,Au=2,Kn=0,Ru=1,Cu=2,Pu=3,Lu=4,Du=5,Uu=6,Iu=7,jc=300,$i=301,Qi=302,$o=303,Qo=304,kr=306,Es=1e3,Ln=1001,ea=1002,dn=1003,Nu=1004,Gs=1005,rn=1006,to=1007,mi=1008,Bn=1009,Jc=1010,Kc=1011,Ts=1012,Va=1013,vi=1014,Dn=1015,as=1016,Ga=1017,Wa=1018,es=1020,$c=35902,Qc=1021,eh=1022,fn=1023,th=1024,nh=1025,Yi=1026,ts=1027,ih=1028,Xa=1029,sh=1030,qa=1031,Ya=1033,Tr=33776,br=33777,wr=33778,Ar=33779,ta=35840,na=35841,ia=35842,sa=35843,ra=36196,oa=37492,aa=37496,la=37808,ca=37809,ha=37810,ua=37811,fa=37812,da=37813,pa=37814,ma=37815,ga=37816,_a=37817,va=37818,xa=37819,Ma=37820,Sa=37821,Rr=36492,ya=36494,Ea=36495,rh=36283,Ta=36284,ba=36285,wa=36286,Fu=3200,Ou=3201,Za=0,Bu=1,Jn="",nn="srgb",ns="srgb-linear",Pr="linear",at="srgb",wi=7680,Ll=519,zu=512,ku=513,Hu=514,oh=515,Vu=516,Gu=517,Wu=518,Xu=519,Dl=35044,Ul="300 es",Un=2e3,Lr=2001;class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Il=1234567;const Zi=Math.PI/180,bs=180/Math.PI;function yi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Xe(i,e,t){return Math.max(e,Math.min(t,i))}function ja(i,e){return(i%e+e)%e}function qu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Yu(i,e,t){return i!==e?(t-i)/(e-i):0}function xs(i,e,t){return(1-t)*i+t*e}function Zu(i,e,t,n){return xs(i,e,1-Math.exp(-t*n))}function ju(i,e=1){return e-Math.abs(ja(i,e*2)-e)}function Ju(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ku(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $u(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Qu(i,e){return i+Math.random()*(e-i)}function ef(i){return i*(.5-Math.random())}function tf(i){i!==void 0&&(Il=i);let e=Il+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nf(i){return i*Zi}function sf(i){return i*bs}function rf(i){return(i&i-1)===0&&i!==0}function of(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function af(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function lf(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),u=o(t/2),c=r((e+n)/2),v=o((e+n)/2),l=r((e-n)/2),h=o((e-n)/2),m=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*v,u*l,u*h,a*c);break;case"YZY":i.set(u*h,a*v,u*l,a*c);break;case"ZXZ":i.set(u*l,u*h,a*v,a*c);break;case"XZX":i.set(a*v,u*x,u*m,a*c);break;case"YXY":i.set(u*m,a*v,u*x,a*c);break;case"ZYZ":i.set(u*x,u*m,a*v,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Nl={DEG2RAD:Zi,RAD2DEG:bs,generateUUID:yi,clamp:Xe,euclideanModulo:ja,mapLinear:qu,inverseLerp:Yu,lerp:xs,damp:Zu,pingpong:ju,smoothstep:Ju,smootherstep:Ku,randInt:$u,randFloat:Qu,randFloatSpread:ef,seededRandom:tf,degToRad:nf,radToDeg:sf,isPowerOfTwo:rf,ceilPowerOfTwo:of,floorPowerOfTwo:af,setQuaternionFromProperEuler:lf,normalize:Ot,denormalize:Hi};class Q{constructor(e=0,t=0){Q.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,n,s,r,o,a,u,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,u,c)}set(e,t,n,s,r,o,a,u,c){const v=this.elements;return v[0]=e,v[1]=s,v[2]=a,v[3]=t,v[4]=r,v[5]=u,v[6]=n,v[7]=o,v[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],u=n[6],c=n[1],v=n[4],l=n[7],h=n[2],m=n[5],x=n[8],M=s[0],_=s[3],f=s[6],g=s[1],p=s[4],d=s[7],L=s[2],A=s[5],C=s[8];return r[0]=o*M+a*g+u*L,r[3]=o*_+a*p+u*A,r[6]=o*f+a*d+u*C,r[1]=c*M+v*g+l*L,r[4]=c*_+v*p+l*A,r[7]=c*f+v*d+l*C,r[2]=h*M+m*g+x*L,r[5]=h*_+m*p+x*A,r[8]=h*f+m*d+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],u=e[6],c=e[7],v=e[8];return t*o*v-t*a*c-n*r*v+n*a*u+s*r*c-s*o*u}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],u=e[6],c=e[7],v=e[8],l=v*o-a*c,h=a*u-v*r,m=c*r-o*u,x=t*l+n*h+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=l*M,e[1]=(s*c-v*n)*M,e[2]=(a*n-s*o)*M,e[3]=h*M,e[4]=(v*t-s*u)*M,e[5]=(s*r-a*t)*M,e[6]=m*M,e[7]=(n*u-c*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const u=Math.cos(r),c=Math.sin(r);return this.set(n*u,n*c,-n*(u*o+c*a)+o+e,-s*c,s*u,-s*(-c*o+u*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(no.makeScale(e,t)),this}rotate(e){return this.premultiply(no.makeRotation(-e)),this}translate(e,t){return this.premultiply(no.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const no=new Ve;function ah(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cf(){const i=ws("canvas");return i.style.display="block",i}const Fl={};function hi(i){i in Fl||(Fl[i]=!0,console.warn(i))}function hf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function uf(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ff(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ol=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bl=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function df(){const i={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===at&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?Pr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ns]:{primaries:e,whitePoint:n,transfer:Pr,toXYZ:Ol,fromXYZ:Bl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:n,transfer:at,toXYZ:Ol,fromXYZ:Bl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),i}const Qe=df();function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ai;class pf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=ws("canvas")),Ai.width=e.width,Ai.height=e.height;const n=Ai.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ai}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fn(t[n]/255)*255):t[n]=Fn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mf=0;class Ja{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(io(s[o].image)):r.push(io(s[o]))}else r=io(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function io(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gf=0;class Ht extends Si{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=Ln,s=Ln,r=rn,o=mi,a=fn,u=Bn,c=Ht.DEFAULT_ANISOTROPY,v=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=yi(),this.name="",this.source=new Ja(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=u,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Es:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Es:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=jc;Ht.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const u=e.elements,c=u[0],v=u[4],l=u[8],h=u[1],m=u[5],x=u[9],M=u[2],_=u[6],f=u[10];if(Math.abs(v-h)<.01&&Math.abs(l-M)<.01&&Math.abs(x-_)<.01){if(Math.abs(v+h)<.1&&Math.abs(l+M)<.1&&Math.abs(x+_)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(c+1)/2,d=(m+1)/2,L=(f+1)/2,A=(v+h)/4,C=(l+M)/4,D=(x+_)/4;return p>d&&p>L?p<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(p),s=A/n,r=C/n):d>L?d<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(d),n=A/s,r=D/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=C/r,s=D/r),this.set(n,s,r,t),this}let g=Math.sqrt((_-x)*(_-x)+(l-M)*(l-M)+(h-v)*(h-v));return Math.abs(g)<.001&&(g=1),this.x=(_-x)/g,this.y=(l-M)/g,this.z=(h-v)/g,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _f extends Si{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ht(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ja(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends _f{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lh extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vf extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let u=n[s+0],c=n[s+1],v=n[s+2],l=n[s+3];const h=r[o+0],m=r[o+1],x=r[o+2],M=r[o+3];if(a===0){e[t+0]=u,e[t+1]=c,e[t+2]=v,e[t+3]=l;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=x,e[t+3]=M;return}if(l!==M||u!==h||c!==m||v!==x){let _=1-a;const f=u*h+c*m+v*x+l*M,g=f>=0?1:-1,p=1-f*f;if(p>Number.EPSILON){const L=Math.sqrt(p),A=Math.atan2(L,f*g);_=Math.sin(_*A)/L,a=Math.sin(a*A)/L}const d=a*g;if(u=u*_+h*d,c=c*_+m*d,v=v*_+x*d,l=l*_+M*d,_===1-a){const L=1/Math.sqrt(u*u+c*c+v*v+l*l);u*=L,c*=L,v*=L,l*=L}}e[t]=u,e[t+1]=c,e[t+2]=v,e[t+3]=l}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],u=n[s+1],c=n[s+2],v=n[s+3],l=r[o],h=r[o+1],m=r[o+2],x=r[o+3];return e[t]=a*x+v*l+u*m-c*h,e[t+1]=u*x+v*h+c*l-a*m,e[t+2]=c*x+v*m+a*h-u*l,e[t+3]=v*x-a*l-u*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,u=Math.sin,c=a(n/2),v=a(s/2),l=a(r/2),h=u(n/2),m=u(s/2),x=u(r/2);switch(o){case"XYZ":this._x=h*v*l+c*m*x,this._y=c*m*l-h*v*x,this._z=c*v*x+h*m*l,this._w=c*v*l-h*m*x;break;case"YXZ":this._x=h*v*l+c*m*x,this._y=c*m*l-h*v*x,this._z=c*v*x-h*m*l,this._w=c*v*l+h*m*x;break;case"ZXY":this._x=h*v*l-c*m*x,this._y=c*m*l+h*v*x,this._z=c*v*x+h*m*l,this._w=c*v*l-h*m*x;break;case"ZYX":this._x=h*v*l-c*m*x,this._y=c*m*l+h*v*x,this._z=c*v*x-h*m*l,this._w=c*v*l+h*m*x;break;case"YZX":this._x=h*v*l+c*m*x,this._y=c*m*l+h*v*x,this._z=c*v*x-h*m*l,this._w=c*v*l-h*m*x;break;case"XZY":this._x=h*v*l-c*m*x,this._y=c*m*l-h*v*x,this._z=c*v*x+h*m*l,this._w=c*v*l+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],u=t[9],c=t[2],v=t[6],l=t[10],h=n+a+l;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(v-u)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>l){const m=2*Math.sqrt(1+n-a-l);this._w=(v-u)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>l){const m=2*Math.sqrt(1+a-n-l);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(u+v)/m}else{const m=2*Math.sqrt(1+l-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(u+v)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,u=t._y,c=t._z,v=t._w;return this._x=n*v+o*a+s*c-r*u,this._y=s*v+o*u+r*a-n*c,this._z=r*v+o*c+n*u-s*a,this._w=o*v-n*a-s*u-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const u=1-a*a;if(u<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(u),v=Math.atan2(c,a),l=Math.sin((1-t)*v)/c,h=Math.sin(t*v)/c;return this._w=o*l+this._w*h,this._x=n*l+this._x*h,this._y=s*l+this._y*h,this._z=r*l+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,u=e.w,c=2*(o*s-a*n),v=2*(a*t-r*s),l=2*(r*n-o*t);return this.x=t+u*c+o*l-a*v,this.y=n+u*v+a*c-r*l,this.z=s+u*l+r*v-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,u=t.z;return this.x=s*u-r*a,this.y=r*o-n*u,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return so.copy(this).projectOnVector(e),this.sub(so)}reflect(e){return this.sub(so.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const so=new R,zl=new Ei;class Ls{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ws.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox)),Ws.applyMatrix4(e.matrixWorld),this.union(Ws)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(us),Xs.subVectors(this.max,us),Ri.subVectors(e.a,us),Ci.subVectors(e.b,us),Pi.subVectors(e.c,us),kn.subVectors(Ci,Ri),Hn.subVectors(Pi,Ci),ii.subVectors(Ri,Pi);let t=[0,-kn.z,kn.y,0,-Hn.z,Hn.y,0,-ii.z,ii.y,kn.z,0,-kn.x,Hn.z,0,-Hn.x,ii.z,0,-ii.x,-kn.y,kn.x,0,-Hn.y,Hn.x,0,-ii.y,ii.x,0];return!ro(t,Ri,Ci,Pi,Xs)||(t=[1,0,0,0,1,0,0,0,1],!ro(t,Ri,Ci,Pi,Xs))?!1:(qs.crossVectors(kn,Hn),t=[qs.x,qs.y,qs.z],ro(t,Ri,Ci,Pi,Xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const En=[new R,new R,new R,new R,new R,new R,new R,new R],cn=new R,Ws=new Ls,Ri=new R,Ci=new R,Pi=new R,kn=new R,Hn=new R,ii=new R,us=new R,Xs=new R,qs=new R,si=new R;function ro(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){si.fromArray(i,r);const a=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),u=e.dot(si),c=t.dot(si),v=n.dot(si);if(Math.max(-Math.max(u,c,v),Math.min(u,c,v))>a)return!1}return!0}const xf=new Ls,fs=new R,oo=new R;class Hr{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fs.subVectors(e,this.center);const t=fs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fs.copy(e.center).add(oo)),this.expandByPoint(fs.copy(e.center).sub(oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new R,ao=new R,Ys=new R,Vn=new R,lo=new R,Zs=new R,co=new R;class Ka{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ao.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(ao);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ys),a=Vn.dot(this.direction),u=-Vn.dot(Ys),c=Vn.lengthSq(),v=Math.abs(1-o*o);let l,h,m,x;if(v>0)if(l=o*u-a,h=o*a-u,x=r*v,l>=0)if(h>=-x)if(h<=x){const M=1/v;l*=M,h*=M,m=l*(l+o*h+2*a)+h*(o*l+h+2*u)+c}else h=r,l=Math.max(0,-(o*h+a)),m=-l*l+h*(h+2*u)+c;else h=-r,l=Math.max(0,-(o*h+a)),m=-l*l+h*(h+2*u)+c;else h<=-x?(l=Math.max(0,-(-o*r+a)),h=l>0?-r:Math.min(Math.max(-r,-u),r),m=-l*l+h*(h+2*u)+c):h<=x?(l=0,h=Math.min(Math.max(-r,-u),r),m=h*(h+2*u)+c):(l=Math.max(0,-(o*r+a)),h=l>0?r:Math.min(Math.max(-r,-u),r),m=-l*l+h*(h+2*u)+c);else h=o>0?-r:r,l=Math.max(0,-(o*h+a)),m=-l*l+h*(h+2*u)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(ao).addScaledVector(Ys,h),m}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const n=Tn.dot(this.direction),s=Tn.dot(Tn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,u=n+o;return u<0?null:a<0?this.at(u,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,u;const c=1/this.direction.x,v=1/this.direction.y,l=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),v>=0?(r=(e.min.y-h.y)*v,o=(e.max.y-h.y)*v):(r=(e.max.y-h.y)*v,o=(e.min.y-h.y)*v),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),l>=0?(a=(e.min.z-h.z)*l,u=(e.max.z-h.z)*l):(a=(e.max.z-h.z)*l,u=(e.min.z-h.z)*l),n>u||a>s)||((a>n||n!==n)&&(n=a),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,s,r){lo.subVectors(t,e),Zs.subVectors(n,e),co.crossVectors(lo,Zs);let o=this.direction.dot(co),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,e);const u=a*this.direction.dot(Zs.crossVectors(Vn,Zs));if(u<0)return null;const c=a*this.direction.dot(lo.cross(Vn));if(c<0||u+c>o)return null;const v=-a*Vn.dot(co);return v<0?null:this.at(v/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,s,r,o,a,u,c,v,l,h,m,x,M,_){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,u,c,v,l,h,m,x,M,_)}set(e,t,n,s,r,o,a,u,c,v,l,h,m,x,M,_){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=u,f[2]=c,f[6]=v,f[10]=l,f[14]=h,f[3]=m,f[7]=x,f[11]=M,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Li.setFromMatrixColumn(e,0).length(),r=1/Li.setFromMatrixColumn(e,1).length(),o=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),u=Math.cos(s),c=Math.sin(s),v=Math.cos(r),l=Math.sin(r);if(e.order==="XYZ"){const h=o*v,m=o*l,x=a*v,M=a*l;t[0]=u*v,t[4]=-u*l,t[8]=c,t[1]=m+x*c,t[5]=h-M*c,t[9]=-a*u,t[2]=M-h*c,t[6]=x+m*c,t[10]=o*u}else if(e.order==="YXZ"){const h=u*v,m=u*l,x=c*v,M=c*l;t[0]=h+M*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*l,t[5]=o*v,t[9]=-a,t[2]=m*a-x,t[6]=M+h*a,t[10]=o*u}else if(e.order==="ZXY"){const h=u*v,m=u*l,x=c*v,M=c*l;t[0]=h-M*a,t[4]=-o*l,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*v,t[9]=M-h*a,t[2]=-o*c,t[6]=a,t[10]=o*u}else if(e.order==="ZYX"){const h=o*v,m=o*l,x=a*v,M=a*l;t[0]=u*v,t[4]=x*c-m,t[8]=h*c+M,t[1]=u*l,t[5]=M*c+h,t[9]=m*c-x,t[2]=-c,t[6]=a*u,t[10]=o*u}else if(e.order==="YZX"){const h=o*u,m=o*c,x=a*u,M=a*c;t[0]=u*v,t[4]=M-h*l,t[8]=x*l+m,t[1]=l,t[5]=o*v,t[9]=-a*v,t[2]=-c*v,t[6]=m*l+x,t[10]=h-M*l}else if(e.order==="XZY"){const h=o*u,m=o*c,x=a*u,M=a*c;t[0]=u*v,t[4]=-l,t[8]=c*v,t[1]=h*l+M,t[5]=o*v,t[9]=m*l-x,t[2]=x*l-m,t[6]=a*v,t[10]=M*l+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mf,e,Sf)}lookAt(e,t,n){const s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Gn.crossVectors(n,Yt),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Gn.crossVectors(n,Yt)),Gn.normalize(),js.crossVectors(Yt,Gn),s[0]=Gn.x,s[4]=js.x,s[8]=Yt.x,s[1]=Gn.y,s[5]=js.y,s[9]=Yt.y,s[2]=Gn.z,s[6]=js.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],u=n[8],c=n[12],v=n[1],l=n[5],h=n[9],m=n[13],x=n[2],M=n[6],_=n[10],f=n[14],g=n[3],p=n[7],d=n[11],L=n[15],A=s[0],C=s[4],D=s[8],T=s[12],E=s[1],P=s[5],Y=s[9],z=s[13],G=s[2],J=s[6],V=s[10],ie=s[14],k=s[3],le=s[7],ge=s[11],Te=s[15];return r[0]=o*A+a*E+u*G+c*k,r[4]=o*C+a*P+u*J+c*le,r[8]=o*D+a*Y+u*V+c*ge,r[12]=o*T+a*z+u*ie+c*Te,r[1]=v*A+l*E+h*G+m*k,r[5]=v*C+l*P+h*J+m*le,r[9]=v*D+l*Y+h*V+m*ge,r[13]=v*T+l*z+h*ie+m*Te,r[2]=x*A+M*E+_*G+f*k,r[6]=x*C+M*P+_*J+f*le,r[10]=x*D+M*Y+_*V+f*ge,r[14]=x*T+M*z+_*ie+f*Te,r[3]=g*A+p*E+d*G+L*k,r[7]=g*C+p*P+d*J+L*le,r[11]=g*D+p*Y+d*V+L*ge,r[15]=g*T+p*z+d*ie+L*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],u=e[9],c=e[13],v=e[2],l=e[6],h=e[10],m=e[14],x=e[3],M=e[7],_=e[11],f=e[15];return x*(+r*u*l-s*c*l-r*a*h+n*c*h+s*a*m-n*u*m)+M*(+t*u*m-t*c*h+r*o*h-s*o*m+s*c*v-r*u*v)+_*(+t*c*l-t*a*m-r*o*l+n*o*m+r*a*v-n*c*v)+f*(-s*a*v-t*u*l+t*a*h+s*o*l-n*o*h+n*u*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],u=e[6],c=e[7],v=e[8],l=e[9],h=e[10],m=e[11],x=e[12],M=e[13],_=e[14],f=e[15],g=l*_*c-M*h*c+M*u*m-a*_*m-l*u*f+a*h*f,p=x*h*c-v*_*c-x*u*m+o*_*m+v*u*f-o*h*f,d=v*M*c-x*l*c+x*a*m-o*M*m-v*a*f+o*l*f,L=x*l*u-v*M*u-x*a*h+o*M*h+v*a*_-o*l*_,A=t*g+n*p+s*d+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=g*C,e[1]=(M*h*r-l*_*r-M*s*m+n*_*m+l*s*f-n*h*f)*C,e[2]=(a*_*r-M*u*r+M*s*c-n*_*c-a*s*f+n*u*f)*C,e[3]=(l*u*r-a*h*r-l*s*c+n*h*c+a*s*m-n*u*m)*C,e[4]=p*C,e[5]=(v*_*r-x*h*r+x*s*m-t*_*m-v*s*f+t*h*f)*C,e[6]=(x*u*r-o*_*r-x*s*c+t*_*c+o*s*f-t*u*f)*C,e[7]=(o*h*r-v*u*r+v*s*c-t*h*c-o*s*m+t*u*m)*C,e[8]=d*C,e[9]=(x*l*r-v*M*r-x*n*m+t*M*m+v*n*f-t*l*f)*C,e[10]=(o*M*r-x*a*r+x*n*c-t*M*c-o*n*f+t*a*f)*C,e[11]=(v*a*r-o*l*r-v*n*c+t*l*c+o*n*m-t*a*m)*C,e[12]=L*C,e[13]=(v*M*s-x*l*s+x*n*h-t*M*h-v*n*_+t*l*_)*C,e[14]=(x*a*s-o*M*s-x*n*u+t*M*u+o*n*_-t*a*_)*C,e[15]=(o*l*s-v*a*s+v*n*u-t*l*u-o*n*h+t*a*h)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,u=e.z,c=r*o,v=r*a;return this.set(c*o+n,c*a-s*u,c*u+s*a,0,c*a+s*u,v*a+n,v*u-s*o,0,c*u-s*a,v*u+s*o,r*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,u=t._w,c=r+r,v=o+o,l=a+a,h=r*c,m=r*v,x=r*l,M=o*v,_=o*l,f=a*l,g=u*c,p=u*v,d=u*l,L=n.x,A=n.y,C=n.z;return s[0]=(1-(M+f))*L,s[1]=(m+d)*L,s[2]=(x-p)*L,s[3]=0,s[4]=(m-d)*A,s[5]=(1-(h+f))*A,s[6]=(_+g)*A,s[7]=0,s[8]=(x+p)*C,s[9]=(_-g)*C,s[10]=(1-(h+M))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Li.set(s[0],s[1],s[2]).length();const o=Li.set(s[4],s[5],s[6]).length(),a=Li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],hn.copy(this);const c=1/r,v=1/o,l=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=v,hn.elements[5]*=v,hn.elements[6]*=v,hn.elements[8]*=l,hn.elements[9]*=l,hn.elements[10]*=l,t.setFromRotationMatrix(hn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Un){const u=this.elements,c=2*r/(t-e),v=2*r/(n-s),l=(t+e)/(t-e),h=(n+s)/(n-s);let m,x;if(a===Un)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Lr)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=l,u[12]=0,u[1]=0,u[5]=v,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Un){const u=this.elements,c=1/(t-e),v=1/(n-s),l=1/(o-r),h=(t+e)*c,m=(n+s)*v;let x,M;if(a===Un)x=(o+r)*l,M=-2*l;else if(a===Lr)x=r*l,M=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=2*c,u[4]=0,u[8]=0,u[12]=-h,u[1]=0,u[5]=2*v,u[9]=0,u[13]=-m,u[2]=0,u[6]=0,u[10]=M,u[14]=-x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Li=new R,hn=new ht,Mf=new R(0,0,0),Sf=new R(1,1,1),Gn=new R,js=new R,Yt=new R,kl=new ht,Hl=new Ei;class xn{constructor(e=0,t=0,n=0,s=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],u=s[1],c=s[5],v=s[9],l=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-v,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-l,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-v,c),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-v,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hl.setFromEuler(this),this.setFromQuaternion(Hl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class $a{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yf=0;const Vl=new R,Di=new Ei,bn=new ht,Js=new R,ds=new R,Ef=new R,Tf=new Ei,Gl=new R(1,0,0),Wl=new R(0,1,0),Xl=new R(0,0,1),ql={type:"added"},bf={type:"removed"},Ui={type:"childadded",child:null},ho={type:"childremoved",child:null};class Ct extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new R,t=new xn,n=new Ei,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ve}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(Gl,e)}rotateY(e){return this.rotateOnAxis(Wl,e)}rotateZ(e){return this.rotateOnAxis(Xl,e)}translateOnAxis(e,t){return Vl.copy(e).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gl,e)}translateY(e){return this.translateOnAxis(Wl,e)}translateZ(e){return this.translateOnAxis(Xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Js.copy(e):Js.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ds,Js,this.up):bn.lookAt(Js,ds,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(bn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ql),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bf),ho.child=e,this.dispatchEvent(ho),ho.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ql),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,Ef),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,Tf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let c=0,v=u.length;c<v;c++){const l=u[c];r(e.shapes,l)}else r(e.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,c=this.material.length;u<c;u++)a.push(r(e.materials,this.material[u]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];s.animations.push(r(e.animations,u))}}if(t){const a=o(e.geometries),u=o(e.materials),c=o(e.textures),v=o(e.images),l=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),c.length>0&&(n.textures=c),v.length>0&&(n.images=v),l.length>0&&(n.shapes=l),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){const u=[];for(const c in a){const v=a[c];delete v.metadata,u.push(v)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ct.DEFAULT_UP=new R(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new R,wn=new R,uo=new R,An=new R,Ii=new R,Ni=new R,Yl=new R,fo=new R,po=new R,mo=new R,go=new lt,_o=new lt,vo=new lt;class sn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),un.subVectors(e,t),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){un.subVectors(s,t),wn.subVectors(n,t),uo.subVectors(e,t);const o=un.dot(un),a=un.dot(wn),u=un.dot(uo),c=wn.dot(wn),v=wn.dot(uo),l=o*c-a*a;if(l===0)return r.set(0,0,0),null;const h=1/l,m=(c*u-a*v)*h,x=(o*v-a*u)*h;return r.set(1-m-x,x,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,t,n,s,r,o,a,u){return this.getBarycoord(e,t,n,s,An)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,An.x),u.addScaledVector(o,An.y),u.addScaledVector(a,An.z),u)}static getInterpolatedAttribute(e,t,n,s,r,o){return go.setScalar(0),_o.setScalar(0),vo.setScalar(0),go.fromBufferAttribute(e,t),_o.fromBufferAttribute(e,n),vo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(go,r.x),o.addScaledVector(_o,r.y),o.addScaledVector(vo,r.z),o}static isFrontFacing(e,t,n,s){return un.subVectors(n,t),wn.subVectors(e,t),un.cross(wn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),un.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ii.subVectors(s,n),Ni.subVectors(r,n),fo.subVectors(e,n);const u=Ii.dot(fo),c=Ni.dot(fo);if(u<=0&&c<=0)return t.copy(n);po.subVectors(e,s);const v=Ii.dot(po),l=Ni.dot(po);if(v>=0&&l<=v)return t.copy(s);const h=u*l-v*c;if(h<=0&&u>=0&&v<=0)return o=u/(u-v),t.copy(n).addScaledVector(Ii,o);mo.subVectors(e,r);const m=Ii.dot(mo),x=Ni.dot(mo);if(x>=0&&m<=x)return t.copy(r);const M=m*c-u*x;if(M<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(Ni,a);const _=v*x-m*l;if(_<=0&&l-v>=0&&m-x>=0)return Yl.subVectors(r,s),a=(l-v)/(l-v+(m-x)),t.copy(s).addScaledVector(Yl,a);const f=1/(_+M+h);return o=M*f,a=h*f,t.copy(n).addScaledVector(Ii,o).addScaledVector(Ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function xo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=ja(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=xo(o,r,e+1/3),this.g=xo(o,r,e),this.b=xo(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=nn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const n=ch[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return Qe.fromWorkingColorSpace(It.copy(this),e),Math.round(Xe(It.r*255,0,255))*65536+Math.round(Xe(It.g*255,0,255))*256+Math.round(Xe(It.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(It.copy(this),t);const n=It.r,s=It.g,r=It.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let u,c;const v=(a+o)/2;if(a===o)u=0,c=0;else{const l=o-a;switch(c=v<=.5?l/(o+a):l/(2-o-a),o){case n:u=(s-r)/l+(s<r?6:0);break;case s:u=(r-n)/l+2;break;case r:u=(n-s)/l+4;break}u/=6}return e.h=u,e.s=c,e.l=v,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=nn){Qe.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,s=It.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(Ks);const n=xs(Wn.h,Ks.h,t),s=xs(Wn.s,Ks.s,t),r=xs(Wn.l,Ks.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Ze;Ze.NAMES=ch;let wf=0;class Ti extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=qi,this.side=gt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Wo,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==gt&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Go&&(n.blendSrc=this.blendSrc),this.blendDst!==Wo&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const u=r[a];delete u.metadata,o.push(u)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vt extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new R,$s=new Q;let Af=0;class gn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Af++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dl,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$s.fromBufferAttribute(this,t),$s.applyMatrix3(e),this.setXY(t,$s.x,$s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),s=Ot(s,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dl&&(e.usage=this.usage),e}}class hh extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class uh extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lt extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rf=0;const en=new ht,Mo=new Ct,Fi=new R,Zt=new Ls,ps=new Ls,bt=new R;class on extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ah(e)?uh:hh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return Mo.lookAt(e),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Lt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ps.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(Zt.min,ps.min),Zt.expandByPoint(bt),bt.addVectors(Zt.max,ps.max),Zt.expandByPoint(bt)):(Zt.expandByPoint(ps.min),Zt.expandByPoint(ps.max))}Zt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)bt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],u=this.morphTargetsRelative;for(let c=0,v=a.count;c<v;c++)bt.fromBufferAttribute(a,c),u&&(Fi.fromBufferAttribute(e,c),bt.add(Fi)),s=Math.max(s,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],u=[];for(let D=0;D<n.count;D++)a[D]=new R,u[D]=new R;const c=new R,v=new R,l=new R,h=new Q,m=new Q,x=new Q,M=new R,_=new R;function f(D,T,E){c.fromBufferAttribute(n,D),v.fromBufferAttribute(n,T),l.fromBufferAttribute(n,E),h.fromBufferAttribute(r,D),m.fromBufferAttribute(r,T),x.fromBufferAttribute(r,E),v.sub(c),l.sub(c),m.sub(h),x.sub(h);const P=1/(m.x*x.y-x.x*m.y);isFinite(P)&&(M.copy(v).multiplyScalar(x.y).addScaledVector(l,-m.y).multiplyScalar(P),_.copy(l).multiplyScalar(m.x).addScaledVector(v,-x.x).multiplyScalar(P),a[D].add(M),a[T].add(M),a[E].add(M),u[D].add(_),u[T].add(_),u[E].add(_))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let D=0,T=g.length;D<T;++D){const E=g[D],P=E.start,Y=E.count;for(let z=P,G=P+Y;z<G;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const p=new R,d=new R,L=new R,A=new R;function C(D){L.fromBufferAttribute(s,D),A.copy(L);const T=a[D];p.copy(T),p.sub(L.multiplyScalar(L.dot(T))).normalize(),d.crossVectors(A,T);const P=d.dot(u[D])<0?-1:1;o.setXYZW(D,p.x,p.y,p.z,P)}for(let D=0,T=g.length;D<T;++D){const E=g[D],P=E.start,Y=E.count;for(let z=P,G=P+Y;z<G;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const s=new R,r=new R,o=new R,a=new R,u=new R,c=new R,v=new R,l=new R;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),M=e.getX(h+1),_=e.getX(h+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,_),v.subVectors(o,r),l.subVectors(s,r),v.cross(l),a.fromBufferAttribute(n,x),u.fromBufferAttribute(n,M),c.fromBufferAttribute(n,_),a.add(v),u.add(v),c.add(v),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(M,u.x,u.y,u.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),v.subVectors(o,r),l.subVectors(s,r),v.cross(l),n.setXYZ(h+0,v.x,v.y,v.z),n.setXYZ(h+1,v.x,v.y,v.z),n.setXYZ(h+2,v.x,v.y,v.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,u){const c=a.array,v=a.itemSize,l=a.normalized,h=new c.constructor(u.length*v);let m=0,x=0;for(let M=0,_=u.length;M<_;M++){a.isInterleavedBufferAttribute?m=u[M]*a.data.stride+a.offset:m=u[M]*v;for(let f=0;f<v;f++)h[x++]=c[m++]}return new gn(h,v,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,n=this.index.array,s=this.attributes;for(const a in s){const u=s[a],c=e(u,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const u=[],c=r[a];for(let v=0,l=c.length;v<l;v++){const h=c[v],m=e(h,n);u.push(m)}t.morphAttributes[a]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,u=o.length;a<u;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const c=n[u];e.data.attributes[u]=c.toJSON(e.data)}const s={};let r=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],v=[];for(let l=0,h=c.length;l<h;l++){const m=c[l];v.push(m.toJSON(e.data))}v.length>0&&(s[u]=v,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const v=s[c];this.setAttribute(c,v.clone(t))}const r=e.morphAttributes;for(const c in r){const v=[],l=r[c];for(let h=0,m=l.length;h<m;h++)v.push(l[h].clone(t));this.morphAttributes[c]=v}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,v=o.length;c<v;c++){const l=o[c];this.addGroup(l.start,l.count,l.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zl=new ht,ri=new Ka,Qs=new Hr,jl=new R,er=new R,tr=new R,nr=new R,So=new R,ir=new R,Jl=new R,sr=new R;class rt extends Ct{constructor(e=new on,t=new vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ir.set(0,0,0);for(let u=0,c=r.length;u<c;u++){const v=a[u],l=r[u];v!==0&&(So.fromBufferAttribute(l,e),o?ir.addScaledVector(So,v):ir.addScaledVector(So.sub(t),v))}t.add(ir)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),ri.copy(e.ray).recast(e.near),!(Qs.containsPoint(ri.origin)===!1&&(ri.intersectSphere(Qs,jl)===null||ri.origin.distanceToSquared(jl)>(e.far-e.near)**2))&&(Zl.copy(r).invert(),ri.copy(e.ray).applyMatrix4(Zl),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,u=r.attributes.position,c=r.attributes.uv,v=r.attributes.uv1,l=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,M=h.length;x<M;x++){const _=h[x],f=o[_.materialIndex],g=Math.max(_.start,m.start),p=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let d=g,L=p;d<L;d+=3){const A=a.getX(d),C=a.getX(d+1),D=a.getX(d+2);s=rr(this,f,e,n,c,v,l,A,C,D),s&&(s.faceIndex=Math.floor(d/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const x=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let _=x,f=M;_<f;_+=3){const g=a.getX(_),p=a.getX(_+1),d=a.getX(_+2);s=rr(this,o,e,n,c,v,l,g,p,d),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(u!==void 0)if(Array.isArray(o))for(let x=0,M=h.length;x<M;x++){const _=h[x],f=o[_.materialIndex],g=Math.max(_.start,m.start),p=Math.min(u.count,Math.min(_.start+_.count,m.start+m.count));for(let d=g,L=p;d<L;d+=3){const A=d,C=d+1,D=d+2;s=rr(this,f,e,n,c,v,l,A,C,D),s&&(s.faceIndex=Math.floor(d/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const x=Math.max(0,m.start),M=Math.min(u.count,m.start+m.count);for(let _=x,f=M;_<f;_+=3){const g=_,p=_+1,d=_+2;s=rr(this,o,e,n,c,v,l,g,p,d),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function Cf(i,e,t,n,s,r,o,a){let u;if(e.side===Rt?u=n.intersectTriangle(o,r,s,!0,a):u=n.intersectTriangle(s,r,o,e.side===gt,a),u===null)return null;sr.copy(a),sr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(sr);return c<t.near||c>t.far?null:{distance:c,point:sr.clone(),object:i}}function rr(i,e,t,n,s,r,o,a,u,c){i.getVertexPosition(a,er),i.getVertexPosition(u,tr),i.getVertexPosition(c,nr);const v=Cf(i,e,t,n,er,tr,nr,Jl);if(v){const l=new R;sn.getBarycoord(Jl,er,tr,nr,l),s&&(v.uv=sn.getInterpolatedAttribute(s,a,u,c,l,new Q)),r&&(v.uv1=sn.getInterpolatedAttribute(r,a,u,c,l,new Q)),o&&(v.normal=sn.getInterpolatedAttribute(o,a,u,c,l,new R),v.normal.dot(n.direction)>0&&v.normal.multiplyScalar(-1));const h={a,b:u,c,normal:new R,materialIndex:0};sn.getNormal(er,tr,nr,h.normal),v.face=h,v.barycoord=l}return v}class Ds extends on{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const u=[],c=[],v=[],l=[];let h=0,m=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(u),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(v,3)),this.setAttribute("uv",new Lt(l,2));function x(M,_,f,g,p,d,L,A,C,D,T){const E=d/C,P=L/D,Y=d/2,z=L/2,G=A/2,J=C+1,V=D+1;let ie=0,k=0;const le=new R;for(let ge=0;ge<V;ge++){const Te=ge*P-z;for(let ke=0;ke<J;ke++){const nt=ke*E-Y;le[M]=nt*g,le[_]=Te*p,le[f]=G,c.push(le.x,le.y,le.z),le[M]=0,le[_]=0,le[f]=A>0?1:-1,v.push(le.x,le.y,le.z),l.push(ke/C),l.push(1-ge/D),ie+=1}}for(let ge=0;ge<D;ge++)for(let Te=0;Te<C;Te++){const ke=h+Te+J*ge,nt=h+Te+J*(ge+1),q=h+(Te+1)+J*(ge+1),oe=h+(Te+1)+J*ge;u.push(ke,nt,oe),u.push(nt,q,oe),k+=6}a.addGroup(m,k,T),m+=k,h+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Bt(i){const e={};for(let t=0;t<i.length;t++){const n=is(i[t]);for(const s in n)e[s]=n[s]}return e}function Pf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const dh={clone:is,merge:Bt};var Lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lf,this.fragmentShader=Df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=Pf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ph extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new R,Kl=new Q,$l=new Q;class Kt extends ph{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(Zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,Kl,$l),t.subVectors($l,Kl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/u,t-=o.offsetY*n/c,s*=o.width/u,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,Bi=1;class Uf extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kt(Oi,Bi,e,t);s.layers=this.layers,this.add(s);const r=new Kt(Oi,Bi,e,t);r.layers=this.layers,this.add(r);const o=new Kt(Oi,Bi,e,t);o.layers=this.layers,this.add(o);const a=new Kt(Oi,Bi,e,t);a.layers=this.layers,this.add(a);const u=new Kt(Oi,Bi,e,t);u.layers=this.layers,this.add(u);const c=new Kt(Oi,Bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,u]=t;for(const c of t)this.remove(c);if(e===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,u,c,v]=this.children,l=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,u),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,v),e.setRenderTarget(l,h,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class mh extends Ht{constructor(e,t,n,s,r,o,a,u,c,v){e=e!==void 0?e:[],t=t!==void 0?t:$i,super(e,t,n,s,r,o,a,u,c,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class If extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new mh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ds(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:Nn});r.uniforms.tEquirect.value=t;const o=new rt(s,r),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=rn),new Uf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class Vi extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nf={type:"move"};class yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,u=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const _=t.getJointPose(M,n),f=this._getHandJoint(c,M);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}const v=c.joints["index-finger-tip"],l=c.joints["thumb-tip"],h=v.position.distanceTo(l.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nf)))}return a!==null&&(a.visible=s!==null),u!==null&&(u.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class gh extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Eo=new R,Ff=new R,Of=new Ve;class ui{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Eo.subVectors(n,t).cross(Ff.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Eo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Of.getNormalMatrix(e),s=this.coplanarPoint(Eo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new Hr,or=new R;class Qa{constructor(e=new ui,t=new ui,n=new ui,s=new ui,r=new ui,o=new ui){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Un){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],u=s[3],c=s[4],v=s[5],l=s[6],h=s[7],m=s[8],x=s[9],M=s[10],_=s[11],f=s[12],g=s[13],p=s[14],d=s[15];if(n[0].setComponents(u-r,h-c,_-m,d-f).normalize(),n[1].setComponents(u+r,h+c,_+m,d+f).normalize(),n[2].setComponents(u+o,h+v,_+x,d+g).normalize(),n[3].setComponents(u-o,h-v,_-x,d-g).normalize(),n[4].setComponents(u-a,h-l,_-M,d-p).normalize(),t===Un)n[5].setComponents(u+a,h+l,_+M,d+p).normalize();else if(t===Lr)n[5].setComponents(a,l,M,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(or.x=s.normal.x>0?e.max.x:e.min.x,or.y=s.normal.y>0?e.max.y:e.min.y,or.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(or)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _h extends Ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dr=new R,Ur=new R,Ql=new ht,ms=new Ka,ar=new Hr,To=new R,ec=new R;class Bf extends Ct{constructor(e=new on,t=new _h){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Dr.fromBufferAttribute(t,s-1),Ur.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Dr.distanceTo(Ur);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,e.ray.intersectsSphere(ar)===!1)return;Ql.copy(s).invert(),ms.copy(e.ray).applyMatrix4(Ql);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,c=this.isLineSegments?2:1,v=n.index,h=n.attributes.position;if(v!==null){const m=Math.max(0,o.start),x=Math.min(v.count,o.start+o.count);for(let M=m,_=x-1;M<_;M+=c){const f=v.getX(M),g=v.getX(M+1),p=lr(this,e,ms,u,f,g,M);p&&t.push(p)}if(this.isLineLoop){const M=v.getX(x-1),_=v.getX(m),f=lr(this,e,ms,u,M,_,x-1);f&&t.push(f)}}else{const m=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let M=m,_=x-1;M<_;M+=c){const f=lr(this,e,ms,u,M,M+1,M);f&&t.push(f)}if(this.isLineLoop){const M=lr(this,e,ms,u,x-1,m,x-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function lr(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(Dr.fromBufferAttribute(a,s),Ur.fromBufferAttribute(a,r),t.distanceSqToSegment(Dr,Ur,To,ec)>n)return;To.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(To);if(!(c<e.near||c>e.far))return{distance:c,point:ec.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const tc=new R,nc=new R;class zf extends Bf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)tc.fromBufferAttribute(t,s),nc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+tc.distanceTo(nc);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vh extends Ht{constructor(e,t,n,s,r,o,a,u,c,v=Yi){if(v!==Yi&&v!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&v===Yi&&(n=vi),n===void 0&&v===ts&&(n=es),super(null,s,r,o,a,u,v,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:dn,this.minFilter=u!==void 0?u:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ja(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,u=r-1,c;for(;a<=u;)if(s=Math.floor(a+(u-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)u=s-1;else{u=s;break}if(s=u,n[s]===o)return s/(r-1);const v=n[s],h=n[s+1]-v,m=(o-v)/h;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),u=t||(o.isVector2?new Q:new R);return u.copy(a).sub(o).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new R,s=[],r=[],o=[],a=new R,u=new ht;for(let m=0;m<=e;m++){const x=m/e;s[m]=this.getTangentAt(x,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const v=Math.abs(s[0].x),l=Math.abs(s[0].y),h=Math.abs(s[0].z);v<=c&&(c=v,n.set(1,0,0)),l<=c&&(c=l,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(Xe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(u.makeRotationAxis(a,x))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Xe(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let x=1;x<=e;x++)r[x].applyMatrix4(u.makeRotationAxis(s[x],m*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class el extends Sn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=u}getPoint(e,t=new Q){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let u=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const v=Math.cos(this.aRotation),l=Math.sin(this.aRotation),h=u-this.aX,m=c-this.aY;u=h*v-m*l+this.aX,c=h*l+m*v+this.aY}return n.set(u,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class kf extends el{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function tl(){let i=0,e=0,t=0,n=0;function s(r,o,a,u){i=r,e=a,t=-3*r+3*o-2*a-u,n=2*r-2*o+a+u}return{initCatmullRom:function(r,o,a,u,c){s(o,a,c*(a-r),c*(u-o))},initNonuniformCatmullRom:function(r,o,a,u,c,v,l){let h=(o-r)/c-(a-r)/(c+v)+(a-o)/v,m=(a-o)/v-(u-o)/(v+l)+(u-a)/l;h*=v,m*=v,s(o,a,h,m)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const cr=new R,bo=new tl,wo=new tl,Ao=new tl;class Hf extends Sn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),u=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:u===0&&a===r-1&&(a=r-2,u=1);let c,v;this.closed||a>0?c=s[(a-1)%r]:(cr.subVectors(s[0],s[1]).add(s[0]),c=cr);const l=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?v=s[(a+2)%r]:(cr.subVectors(s[r-1],s[r-2]).add(s[r-1]),v=cr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(l),m),M=Math.pow(l.distanceToSquared(h),m),_=Math.pow(h.distanceToSquared(v),m);M<1e-4&&(M=1),x<1e-4&&(x=M),_<1e-4&&(_=M),bo.initNonuniformCatmullRom(c.x,l.x,h.x,v.x,x,M,_),wo.initNonuniformCatmullRom(c.y,l.y,h.y,v.y,x,M,_),Ao.initNonuniformCatmullRom(c.z,l.z,h.z,v.z,x,M,_)}else this.curveType==="catmullrom"&&(bo.initCatmullRom(c.x,l.x,h.x,v.x,this.tension),wo.initCatmullRom(c.y,l.y,h.y,v.y,this.tension),Ao.initCatmullRom(c.z,l.z,h.z,v.z,this.tension));return n.set(bo.calc(u),wo.calc(u),Ao.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ic(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,u=i*a;return(2*t-2*n+r+o)*u+(-3*t+3*n-2*r-o)*a+r*i+t}function Vf(i,e){const t=1-i;return t*t*e}function Gf(i,e){return 2*(1-i)*i*e}function Wf(i,e){return i*i*e}function Ms(i,e,t,n){return Vf(i,e)+Gf(i,t)+Wf(i,n)}function Xf(i,e){const t=1-i;return t*t*t*e}function qf(i,e){const t=1-i;return 3*t*t*i*e}function Yf(i,e){return 3*(1-i)*i*i*e}function Zf(i,e){return i*i*i*e}function Ss(i,e,t,n,s){return Xf(i,e)+qf(i,t)+Yf(i,n)+Zf(i,s)}class xh extends Sn{constructor(e=new Q,t=new Q,n=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Q){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ss(e,s.x,r.x,o.x,a.x),Ss(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jf extends Sn{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ss(e,s.x,r.x,o.x,a.x),Ss(e,s.y,r.y,o.y,a.y),Ss(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mh extends Sn{constructor(e=new Q,t=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jf extends Sn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sh extends Sn{constructor(e=new Q,t=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ms(e,s.x,r.x,o.x),Ms(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kf extends Sn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ms(e,s.x,r.x,o.x),Ms(e,s.y,r.y,o.y),Ms(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yh extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,u=s[o===0?o:o-1],c=s[o],v=s[o>s.length-2?s.length-1:o+1],l=s[o>s.length-3?s.length-1:o+2];return n.set(ic(a,u.x,c.x,v.x,l.x),ic(a,u.y,c.y,v.y,l.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Q().fromArray(s))}return this}}var Aa=Object.freeze({__proto__:null,ArcCurve:kf,CatmullRomCurve3:Hf,CubicBezierCurve:xh,CubicBezierCurve3:jf,EllipseCurve:el,LineCurve:Mh,LineCurve3:Jf,QuadraticBezierCurve:Sh,QuadraticBezierCurve3:Kf,SplineCurve:yh});class $f extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Aa[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],u=a.getLength(),c=u===0?0:1-o/u;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,u=o.getPoints(a);for(let c=0;c<u.length;c++){const v=u[c];n&&n.equals(v)||(t.push(v),n=v)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Aa[s.type]().fromJSON(s))}return this}}class Ra extends $f{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Mh(this.currentPoint.clone(),new Q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Sh(this.currentPoint.clone(),new Q(e,t),new Q(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new xh(this.currentPoint.clone(),new Q(e,t),new Q(n,s),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new yh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+a,t+u,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,u){const c=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(e+c,t+v,n,s,r,o,a,u),this}absellipse(e,t,n,s,r,o,a,u){const c=new el(e,t,n,s,r,o,a,u);if(this.curves.length>0){const l=c.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(c);const v=c.getPoint(1);return this.currentPoint.copy(v),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}const hr=new R,ur=new R,Ro=new R,fr=new sn;class Qf extends on{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Zi*t),o=e.getIndex(),a=e.getAttribute("position"),u=o?o.count:a.count,c=[0,0,0],v=["a","b","c"],l=new Array(3),h={},m=[];for(let x=0;x<u;x+=3){o?(c[0]=o.getX(x),c[1]=o.getX(x+1),c[2]=o.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);const{a:M,b:_,c:f}=fr;if(M.fromBufferAttribute(a,c[0]),_.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),fr.getNormal(Ro),l[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,l[1]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,l[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(l[0]===l[1]||l[1]===l[2]||l[2]===l[0]))for(let g=0;g<3;g++){const p=(g+1)%3,d=l[g],L=l[p],A=fr[v[g]],C=fr[v[p]],D=`${d}_${L}`,T=`${L}_${d}`;T in h&&h[T]?(Ro.dot(h[T].normal)<=r&&(m.push(A.x,A.y,A.z),m.push(C.x,C.y,C.z)),h[T]=null):D in h||(h[D]={index0:c[g],index1:c[p],normal:Ro.clone()})}}for(const x in h)if(h[x]){const{index0:M,index1:_}=h[x];hr.fromBufferAttribute(a,M),ur.fromBufferAttribute(a,_),m.push(hr.x,hr.y,hr.z),m.push(ur.x,ur.y,ur.z)}this.setAttribute("position",new Lt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class $n extends Ra{constructor(e){super(e),this.uuid=yi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Ra().fromJSON(s))}return this}}class ed{static triangulate(e,t,n=2){const s=t&&t.length,r=s?t[0]*n:e.length;let o=Eh(e,0,r,n,!0);const a=[];if(!o||o.next===o.prev)return a;let u,c,v,l,h,m,x;if(s&&(o=rd(e,t,o,n)),e.length>80*n){u=v=e[0],c=l=e[1];for(let M=n;M<r;M+=n)h=e[M],m=e[M+1],h<u&&(u=h),m<c&&(c=m),h>v&&(v=h),m>l&&(l=m);x=Math.max(v-u,l-c),x=x!==0?32767/x:0}return As(o,a,n,u,c,x,0),a}}function Eh(i,e,t,n,s){let r,o;if(s===gd(i,e,t,n)>0)for(r=e;r<t;r+=n)o=sc(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=sc(r,i[r],i[r+1],o);return o&&Vr(o,o.next)&&(Cs(o),o=o.next),o}function xi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Vr(t,t.next)||dt(t.prev,t,t.next)===0)){if(Cs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function As(i,e,t,n,s,r,o){if(!i)return;!o&&r&&hd(i,n,s,r);let a=i,u,c;for(;i.prev!==i.next;){if(u=i.prev,c=i.next,r?nd(i,n,s,r):td(i)){e.push(u.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Cs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=id(xi(i),e,t),As(i,e,t,n,s,r,2)):o===2&&sd(i,e,t,n,s,r):As(xi(i),e,t,n,s,r,1);break}}}function td(i){const e=i.prev,t=i,n=i.next;if(dt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,u=t.y,c=n.y,v=s<r?s<o?s:o:r<o?r:o,l=a<u?a<c?a:c:u<c?u:c,h=s>r?s>o?s:o:r>o?r:o,m=a>u?a>c?a:c:u>c?u:c;let x=n.next;for(;x!==e;){if(x.x>=v&&x.x<=h&&x.y>=l&&x.y<=m&&Gi(s,a,r,u,o,c,x.x,x.y)&&dt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function nd(i,e,t,n){const s=i.prev,r=i,o=i.next;if(dt(s,r,o)>=0)return!1;const a=s.x,u=r.x,c=o.x,v=s.y,l=r.y,h=o.y,m=a<u?a<c?a:c:u<c?u:c,x=v<l?v<h?v:h:l<h?l:h,M=a>u?a>c?a:c:u>c?u:c,_=v>l?v>h?v:h:l>h?l:h,f=Ca(m,x,e,t,n),g=Ca(M,_,e,t,n);let p=i.prevZ,d=i.nextZ;for(;p&&p.z>=f&&d&&d.z<=g;){if(p.x>=m&&p.x<=M&&p.y>=x&&p.y<=_&&p!==s&&p!==o&&Gi(a,v,u,l,c,h,p.x,p.y)&&dt(p.prev,p,p.next)>=0||(p=p.prevZ,d.x>=m&&d.x<=M&&d.y>=x&&d.y<=_&&d!==s&&d!==o&&Gi(a,v,u,l,c,h,d.x,d.y)&&dt(d.prev,d,d.next)>=0))return!1;d=d.nextZ}for(;p&&p.z>=f;){if(p.x>=m&&p.x<=M&&p.y>=x&&p.y<=_&&p!==s&&p!==o&&Gi(a,v,u,l,c,h,p.x,p.y)&&dt(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;d&&d.z<=g;){if(d.x>=m&&d.x<=M&&d.y>=x&&d.y<=_&&d!==s&&d!==o&&Gi(a,v,u,l,c,h,d.x,d.y)&&dt(d.prev,d,d.next)>=0)return!1;d=d.nextZ}return!0}function id(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Vr(s,r)&&Th(s,n,n.next,r)&&Rs(s,r)&&Rs(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Cs(n),Cs(n.next),n=i=r),n=n.next}while(n!==i);return xi(n)}function sd(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&dd(o,a)){let u=bh(o,a);o=xi(o,o.next),u=xi(u,u.next),As(o,e,t,n,s,r,0),As(u,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function rd(i,e,t,n){const s=[];let r,o,a,u,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,u=r<o-1?e[r+1]*n:i.length,c=Eh(i,a,u,n,!1),c===c.next&&(c.steiner=!0),s.push(fd(c));for(s.sort(od),r=0;r<s.length;r++)t=ad(s[r],t);return t}function od(i,e){return i.x-e.x}function ad(i,e){const t=ld(i,e);if(!t)return e;const n=bh(t,i);return xi(n,n.next),xi(t,t.next)}function ld(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=r&&h>n&&(n=h,s=t.x<t.next.x?t:t.next,h===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,u=s.x,c=s.y;let v=1/0,l;t=s;do r>=t.x&&t.x>=u&&r!==t.x&&Gi(o<c?r:n,o,u,c,o<c?n:r,o,t.x,t.y)&&(l=Math.abs(o-t.y)/(r-t.x),Rs(t,i)&&(l<v||l===v&&(t.x>s.x||t.x===s.x&&cd(s,t)))&&(s=t,v=l)),t=t.next;while(t!==a);return s}function cd(i,e){return dt(i.prev,i,e.prev)<0&&dt(e.next,i,i.next)<0}function hd(i,e,t,n){let s=i;do s.z===0&&(s.z=Ca(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ud(s)}function ud(i){let e,t,n,s,r,o,a,u,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(u=c;a>0||u>0&&n;)a!==0&&(u===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,u--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Ca(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function fd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Gi(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function dd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!pd(i,e)&&(Rs(i,e)&&Rs(e,i)&&md(i,e)&&(dt(i.prev,i,e.prev)||dt(i,e.prev,e))||Vr(i,e)&&dt(i.prev,i,i.next)>0&&dt(e.prev,e,e.next)>0)}function dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Vr(i,e){return i.x===e.x&&i.y===e.y}function Th(i,e,t,n){const s=pr(dt(i,e,t)),r=pr(dt(i,e,n)),o=pr(dt(t,n,i)),a=pr(dt(t,n,e));return!!(s!==r&&o!==a||s===0&&dr(i,t,e)||r===0&&dr(i,n,e)||o===0&&dr(t,i,n)||a===0&&dr(t,e,n))}function dr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function pr(i){return i>0?1:i<0?-1:0}function pd(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Th(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Rs(i,e){return dt(i.prev,i,i.next)<0?dt(i,e,i.next)>=0&&dt(i,i.prev,e)>=0:dt(i,e,i.prev)<0||dt(i,i.next,e)<0}function md(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function bh(i,e){const t=new Pa(i.i,i.x,i.y),n=new Pa(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function sc(i,e,t,n){const s=new Pa(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Cs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pa(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gd(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class On{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return On.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];rc(e),oc(n,e);let o=e.length;t.forEach(rc);for(let u=0;u<t.length;u++)s.push(o),o+=t[u].length,oc(n,t[u]);const a=ed.triangulate(n,s);for(let u=0;u<a.length;u+=3)r.push(a.slice(u,u+3));return r}}function rc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function oc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class nl extends on{constructor(e=new $n([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,u=e.length;a<u;a++){const c=e[a];o(c)}this.setAttribute("position",new Lt(s,3)),this.setAttribute("uv",new Lt(r,2)),this.computeVertexNormals();function o(a){const u=[],c=t.curveSegments!==void 0?t.curveSegments:12,v=t.steps!==void 0?t.steps:1,l=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:m-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:_d;let p,d=!1,L,A,C,D;f&&(p=f.getSpacedPoints(v),d=!0,h=!1,L=f.computeFrenetFrames(v,!1),A=new R,C=new R,D=new R),h||(_=0,m=0,x=0,M=0);const T=a.extractPoints(c);let E=T.shape;const P=T.holes;if(!On.isClockWise(E)){E=E.reverse();for(let $=0,K=P.length;$<K;$++){const w=P[$];On.isClockWise(w)&&(P[$]=w.reverse())}}const z=On.triangulateShape(E,P),G=E;for(let $=0,K=P.length;$<K;$++){const w=P[$];E=E.concat(w)}function J($,K,w){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(K,w)}const V=E.length,ie=z.length;function k($,K,w){let Ae,ee,xe;const re=$.x-K.x,Ie=$.y-K.y,de=w.x-$.x,b=w.y-$.y,S=re*re+Ie*Ie,F=re*b-Ie*de;if(Math.abs(F)>Number.EPSILON){const W=Math.sqrt(S),j=Math.sqrt(de*de+b*b),X=K.x-Ie/W,we=K.y+re/W,he=w.x-b/j,ve=w.y+de/j,qe=((he-X)*b-(ve-we)*de)/(re*b-Ie*de);Ae=X+re*qe-$.x,ee=we+Ie*qe-$.y;const ne=Ae*Ae+ee*ee;if(ne<=2)return new Q(Ae,ee);xe=Math.sqrt(ne/2)}else{let W=!1;re>Number.EPSILON?de>Number.EPSILON&&(W=!0):re<-Number.EPSILON?de<-Number.EPSILON&&(W=!0):Math.sign(Ie)===Math.sign(b)&&(W=!0),W?(Ae=-Ie,ee=re,xe=Math.sqrt(S)):(Ae=re,ee=Ie,xe=Math.sqrt(S/2))}return new Q(Ae/xe,ee/xe)}const le=[];for(let $=0,K=G.length,w=K-1,Ae=$+1;$<K;$++,w++,Ae++)w===K&&(w=0),Ae===K&&(Ae=0),le[$]=k(G[$],G[w],G[Ae]);const ge=[];let Te,ke=le.concat();for(let $=0,K=P.length;$<K;$++){const w=P[$];Te=[];for(let Ae=0,ee=w.length,xe=ee-1,re=Ae+1;Ae<ee;Ae++,xe++,re++)xe===ee&&(xe=0),re===ee&&(re=0),Te[Ae]=k(w[Ae],w[xe],w[re]);ge.push(Te),ke=ke.concat(Te)}for(let $=0;$<_;$++){const K=$/_,w=m*Math.cos(K*Math.PI/2),Ae=x*Math.sin(K*Math.PI/2)+M;for(let ee=0,xe=G.length;ee<xe;ee++){const re=J(G[ee],le[ee],Ae);ae(re.x,re.y,-w)}for(let ee=0,xe=P.length;ee<xe;ee++){const re=P[ee];Te=ge[ee];for(let Ie=0,de=re.length;Ie<de;Ie++){const b=J(re[Ie],Te[Ie],Ae);ae(b.x,b.y,-w)}}}const nt=x+M;for(let $=0;$<V;$++){const K=h?J(E[$],ke[$],nt):E[$];d?(C.copy(L.normals[0]).multiplyScalar(K.x),A.copy(L.binormals[0]).multiplyScalar(K.y),D.copy(p[0]).add(C).add(A),ae(D.x,D.y,D.z)):ae(K.x,K.y,0)}for(let $=1;$<=v;$++)for(let K=0;K<V;K++){const w=h?J(E[K],ke[K],nt):E[K];d?(C.copy(L.normals[$]).multiplyScalar(w.x),A.copy(L.binormals[$]).multiplyScalar(w.y),D.copy(p[$]).add(C).add(A),ae(D.x,D.y,D.z)):ae(w.x,w.y,l/v*$)}for(let $=_-1;$>=0;$--){const K=$/_,w=m*Math.cos(K*Math.PI/2),Ae=x*Math.sin(K*Math.PI/2)+M;for(let ee=0,xe=G.length;ee<xe;ee++){const re=J(G[ee],le[ee],Ae);ae(re.x,re.y,l+w)}for(let ee=0,xe=P.length;ee<xe;ee++){const re=P[ee];Te=ge[ee];for(let Ie=0,de=re.length;Ie<de;Ie++){const b=J(re[Ie],Te[Ie],Ae);d?ae(b.x,b.y+p[v-1].y,p[v-1].x+w):ae(b.x,b.y,l+w)}}}q(),oe();function q(){const $=s.length/3;if(h){let K=0,w=V*K;for(let Ae=0;Ae<ie;Ae++){const ee=z[Ae];Ce(ee[2]+w,ee[1]+w,ee[0]+w)}K=v+_*2,w=V*K;for(let Ae=0;Ae<ie;Ae++){const ee=z[Ae];Ce(ee[0]+w,ee[1]+w,ee[2]+w)}}else{for(let K=0;K<ie;K++){const w=z[K];Ce(w[2],w[1],w[0])}for(let K=0;K<ie;K++){const w=z[K];Ce(w[0]+V*v,w[1]+V*v,w[2]+V*v)}}n.addGroup($,s.length/3-$,0)}function oe(){const $=s.length/3;let K=0;be(G,K),K+=G.length;for(let w=0,Ae=P.length;w<Ae;w++){const ee=P[w];be(ee,K),K+=ee.length}n.addGroup($,s.length/3-$,1)}function be($,K){let w=$.length;for(;--w>=0;){const Ae=w;let ee=w-1;ee<0&&(ee=$.length-1);for(let xe=0,re=v+_*2;xe<re;xe++){const Ie=V*xe,de=V*(xe+1),b=K+Ae+Ie,S=K+ee+Ie,F=K+ee+de,W=K+Ae+de;Je(b,S,F,W)}}}function ae($,K,w){u.push($),u.push(K),u.push(w)}function Ce($,K,w){Re($),Re(K),Re(w);const Ae=s.length/3,ee=g.generateTopUV(n,s,Ae-3,Ae-2,Ae-1);et(ee[0]),et(ee[1]),et(ee[2])}function Je($,K,w,Ae){Re($),Re(K),Re(Ae),Re(K),Re(w),Re(Ae);const ee=s.length/3,xe=g.generateSideWallUV(n,s,ee-6,ee-3,ee-2,ee-1);et(xe[0]),et(xe[1]),et(xe[3]),et(xe[1]),et(xe[2]),et(xe[3])}function Re($){s.push(u[$*3+0]),s.push(u[$*3+1]),s.push(u[$*3+2])}function et($){r.push($.x),r.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return vd(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Aa[s.type]().fromJSON(s)),new nl(n,e.options)}}const _d={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],u=e[n*3+1],c=e[s*3],v=e[s*3+1];return[new Q(r,o),new Q(a,u),new Q(c,v)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],u=e[t*3+2],c=e[n*3],v=e[n*3+1],l=e[n*3+2],h=e[s*3],m=e[s*3+1],x=e[s*3+2],M=e[r*3],_=e[r*3+1],f=e[r*3+2];return Math.abs(a-v)<Math.abs(o-c)?[new Q(o,1-u),new Q(c,1-l),new Q(h,1-x),new Q(M,1-f)]:[new Q(a,1-u),new Q(v,1-l),new Q(m,1-x),new Q(_,1-f)]}};function vd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Gr extends on{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),u=Math.floor(s),c=a+1,v=u+1,l=e/a,h=t/u,m=[],x=[],M=[],_=[];for(let f=0;f<v;f++){const g=f*h-o;for(let p=0;p<c;p++){const d=p*l-r;x.push(d,-g,0),M.push(0,0,1),_.push(p/a),_.push(1-f/u)}}for(let f=0;f<u;f++)for(let g=0;g<a;g++){const p=g+c*f,d=g+c*(f+1),L=g+1+c*(f+1),A=g+1+c*f;m.push(p,d,A),m.push(d,L,A)}this.setIndex(m),this.setAttribute("position",new Lt(x,3)),this.setAttribute("normal",new Lt(M,3)),this.setAttribute("uv",new Lt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.width,e.height,e.widthSegments,e.heightSegments)}}class ls extends on{constructor(e=new $n([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,u=0;if(Array.isArray(e)===!1)c(e);else for(let v=0;v<e.length;v++)c(e[v]),this.addGroup(a,u,v),a+=u,u=0;this.setIndex(n),this.setAttribute("position",new Lt(s,3)),this.setAttribute("normal",new Lt(r,3)),this.setAttribute("uv",new Lt(o,2));function c(v){const l=s.length/3,h=v.extractPoints(t);let m=h.shape;const x=h.holes;On.isClockWise(m)===!1&&(m=m.reverse());for(let _=0,f=x.length;_<f;_++){const g=x[_];On.isClockWise(g)===!0&&(x[_]=g.reverse())}const M=On.triangulateShape(m,x);for(let _=0,f=x.length;_<f;_++){const g=x[_];m=m.concat(g)}for(let _=0,f=m.length;_<f;_++){const g=m[_];s.push(g.x,g.y,0),r.push(0,0,1),o.push(g.x,g.y)}for(let _=0,f=M.length;_<f;_++){const g=M[_],p=g[0]+l,d=g[1]+l,L=g[2]+l;n.push(p,d,L),u+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return xd(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new ls(n,e.curveSegments)}}function xd(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Us extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Za,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class il extends Ti{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Za,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Md extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sd extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ir={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class yd{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,u;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(v){a++,r===!1&&s.onStart!==void 0&&s.onStart(v,o,a),r=!0},this.itemEnd=function(v){o++,s.onProgress!==void 0&&s.onProgress(v,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(v){s.onError!==void 0&&s.onError(v)},this.resolveURL=function(v){return u?u(v):v},this.setURLModifier=function(v){return u=v,this},this.addHandler=function(v,l){return c.push(v,l),this},this.removeHandler=function(v){const l=c.indexOf(v);return l!==-1&&c.splice(l,2),this},this.getHandler=function(v){for(let l=0,h=c.length;l<h;l+=2){const m=c[l],x=c[l+1];if(m.global&&(m.lastIndex=0),m.test(v))return x}return null}}}const Ed=new yd;class Is{constructor(e){this.manager=e!==void 0?e:Ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Is.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rn={};class Td extends Error{constructor(e,t){super(e),this.response=t}}class bd extends Is{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ir.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Rn[e]!==void 0){Rn[e].push({onLoad:t,onProgress:n,onError:s});return}Rn[e]=[],Rn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,u=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const v=Rn[e],l=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=h?parseInt(h):0,x=m!==0;let M=0;const _=new ReadableStream({start(f){g();function g(){l.read().then(({done:p,value:d})=>{if(p)f.close();else{M+=d.byteLength;const L=new ProgressEvent("progress",{lengthComputable:x,loaded:M,total:m});for(let A=0,C=v.length;A<C;A++){const D=v[A];D.onProgress&&D.onProgress(L)}f.enqueue(d),g()}},p=>{f.error(p)})}}});return new Response(_)}else throw new Td(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(u){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(v=>new DOMParser().parseFromString(v,a));case"json":return c.json();default:if(a===void 0)return c.text();{const l=/charset="?([^;"\s]*)"?/i.exec(a),h=l&&l[1]?l[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(x=>m.decode(x))}}}).then(c=>{Ir.add(e,c);const v=Rn[e];delete Rn[e];for(let l=0,h=v.length;l<h;l++){const m=v[l];m.onLoad&&m.onLoad(c)}}).catch(c=>{const v=Rn[e];if(v===void 0)throw this.manager.itemError(e),c;delete Rn[e];for(let l=0,h=v.length;l<h;l++){const m=v[l];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class wd extends Is{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ir.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ws("img");function u(){v(),Ir.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(l){v(),s&&s(l),r.manager.itemError(e),r.manager.itemEnd(e)}function v(){a.removeEventListener("load",u,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",u,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Ad extends Is{constructor(e){super(e)}load(e,t,n,s){const r=new Ht,o=new wd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class sl extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Co=new ht,ac=new R,lc=new R;class wh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qa,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ac.setFromMatrixPosition(e.matrixWorld),t.position.copy(ac),lc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lc),t.updateMatrixWorld(),Co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Co),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cc=new ht,gs=new R,Po=new R;class Rd extends wh{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gs.setFromMatrixPosition(e.matrixWorld),n.position.copy(gs),Po.copy(n.position),Po.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Po),n.updateMatrixWorld(),s.makeTranslation(-gs.x,-gs.y,-gs.z),cc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cc)}}class Cd extends sl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Rd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Wr extends ph{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,u=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=v*this.view.offsetY,u=a-v*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Pd extends wh{constructor(){super(new Wr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ld extends sl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Pd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Dd extends sl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ud extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Ah{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=hc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function hc(){return performance.now()}const uc=new ht;class Rh{constructor(e,t,n=0,s=1/0){this.ray=new Ka(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new $a,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return uc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uc),this}intersectObject(e,t=!0,n=[]){return La(e,this,n,t),n.sort(fc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)La(e[s],this,n,t);return n.sort(fc),n}}function fc(i,e){return i.distance-e.distance}function La(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)La(r[o],e,t,!0)}}class Id{constructor(){this.type="ShapePath",this.color=new Ze,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ra,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,o){return this.currentPath.bezierCurveTo(e,t,n,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){const g=[];for(let p=0,d=f.length;p<d;p++){const L=f[p],A=new $n;A.curves=L.curves,g.push(A)}return g}function n(f,g){const p=g.length;let d=!1;for(let L=p-1,A=0;A<p;L=A++){let C=g[L],D=g[A],T=D.x-C.x,E=D.y-C.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(C=g[A],T=-T,D=g[L],E=-E),f.y<C.y||f.y>D.y)continue;if(f.y===C.y){if(f.x===C.x)return!0}else{const P=E*(f.x-C.x)-T*(f.y-C.y);if(P===0)return!0;if(P<0)continue;d=!d}}else{if(f.y!==C.y)continue;if(D.x<=f.x&&f.x<=C.x||C.x<=f.x&&f.x<=D.x)return!0}}return d}const s=On.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,u;const c=[];if(r.length===1)return a=r[0],u=new $n,u.curves=a.curves,c.push(u),c;let v=!s(r[0].getPoints());v=e?!v:v;const l=[],h=[];let m=[],x=0,M;h[x]=void 0,m[x]=[];for(let f=0,g=r.length;f<g;f++)a=r[f],M=a.getPoints(),o=s(M),o=e?!o:o,o?(!v&&h[x]&&x++,h[x]={s:new $n,p:M},h[x].s.curves=a.curves,v&&x++,m[x]=[]):m[x].push({h:a,p:M[0]});if(!h[0])return t(r);if(h.length>1){let f=!1,g=0;for(let p=0,d=h.length;p<d;p++)l[p]=[];for(let p=0,d=h.length;p<d;p++){const L=m[p];for(let A=0;A<L.length;A++){const C=L[A];let D=!0;for(let T=0;T<h.length;T++)n(C.p,h[T].p)&&(p!==T&&g++,D?(D=!1,l[T].push(C)):f=!0);D&&l[p].push(C)}}g>0&&f===!1&&(m=l)}let _;for(let f=0,g=h.length;f<g;f++){u=h[f].s,c.push(u),_=m[f];for(let p=0,d=_.length;p<d;p++)u.holes.push(_[p].h)}return c}}class Nd extends Si{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function dc(i,e,t,n){const s=Fd(n);switch(t){case Qc:return i*e;case th:return i*e;case nh:return i*e*2;case ih:return i*e/s.components*s.byteLength;case Xa:return i*e/s.components*s.byteLength;case sh:return i*e*2/s.components*s.byteLength;case qa:return i*e*2/s.components*s.byteLength;case eh:return i*e*3/s.components*s.byteLength;case fn:return i*e*4/s.components*s.byteLength;case Ya:return i*e*4/s.components*s.byteLength;case Tr:case br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wr:case Ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case na:case sa:return Math.max(i,16)*Math.max(e,8)/4;case ta:case ia:return Math.max(i,8)*Math.max(e,8)/2;case ra:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ca:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ha:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ua:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case da:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case pa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ga:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _a:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case va:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ma:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Rr:case ya:case Ea:return Math.ceil(i/4)*Math.ceil(e/4)*16;case rh:case Ta:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ba:case wa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fd(i){switch(i){case Bn:case Jc:return{byteLength:1,components:1};case Ts:case Kc:case as:return{byteLength:2,components:1};case Ga:case Wa:return{byteLength:2,components:4};case vi:case Va:case Dn:return{byteLength:4,components:1};case $c:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ha}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ha);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ch(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Od(i){const e=new WeakMap;function t(a,u){const c=a.array,v=a.usage,l=c.byteLength,h=i.createBuffer();i.bindBuffer(u,h),i.bufferData(u,c,v),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:l}}function n(a,u,c){const v=u.array,l=u.updateRanges;if(i.bindBuffer(c,a),l.length===0)i.bufferSubData(c,0,v);else{l.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<l.length;m++){const x=l[h],M=l[m];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++h,l[h]=M)}l.length=h+1;for(let m=0,x=l.length;m<x;m++){const M=l[m];i.bufferSubData(c,M.start*v.BYTES_PER_ELEMENT,v,M.start,M.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);u&&(i.deleteBuffer(u.buffer),e.delete(a))}function o(a,u){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const v=e.get(a);(!v||v.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,u));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,u),c.version=a.version}}return{get:s,remove:r,update:o}}var Bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$d=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ap=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Np=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Op=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,om=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ym=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ng=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:Bd,alphahash_pars_fragment:zd,alphamap_fragment:kd,alphamap_pars_fragment:Hd,alphatest_fragment:Vd,alphatest_pars_fragment:Gd,aomap_fragment:Wd,aomap_pars_fragment:Xd,batching_pars_vertex:qd,batching_vertex:Yd,begin_vertex:Zd,beginnormal_vertex:jd,bsdfs:Jd,iridescence_fragment:Kd,bumpmap_pars_fragment:$d,clipping_planes_fragment:Qd,clipping_planes_pars_fragment:ep,clipping_planes_pars_vertex:tp,clipping_planes_vertex:np,color_fragment:ip,color_pars_fragment:sp,color_pars_vertex:rp,color_vertex:op,common:ap,cube_uv_reflection_fragment:lp,defaultnormal_vertex:cp,displacementmap_pars_vertex:hp,displacementmap_vertex:up,emissivemap_fragment:fp,emissivemap_pars_fragment:dp,colorspace_fragment:pp,colorspace_pars_fragment:mp,envmap_fragment:gp,envmap_common_pars_fragment:_p,envmap_pars_fragment:vp,envmap_pars_vertex:xp,envmap_physical_pars_fragment:Pp,envmap_vertex:Mp,fog_vertex:Sp,fog_pars_vertex:yp,fog_fragment:Ep,fog_pars_fragment:Tp,gradientmap_pars_fragment:bp,lightmap_pars_fragment:wp,lights_lambert_fragment:Ap,lights_lambert_pars_fragment:Rp,lights_pars_begin:Cp,lights_toon_fragment:Lp,lights_toon_pars_fragment:Dp,lights_phong_fragment:Up,lights_phong_pars_fragment:Ip,lights_physical_fragment:Np,lights_physical_pars_fragment:Fp,lights_fragment_begin:Op,lights_fragment_maps:Bp,lights_fragment_end:zp,logdepthbuf_fragment:kp,logdepthbuf_pars_fragment:Hp,logdepthbuf_pars_vertex:Vp,logdepthbuf_vertex:Gp,map_fragment:Wp,map_pars_fragment:Xp,map_particle_fragment:qp,map_particle_pars_fragment:Yp,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:jp,morphinstance_vertex:Jp,morphcolor_vertex:Kp,morphnormal_vertex:$p,morphtarget_pars_vertex:Qp,morphtarget_vertex:em,normal_fragment_begin:tm,normal_fragment_maps:nm,normal_pars_fragment:im,normal_pars_vertex:sm,normal_vertex:rm,normalmap_pars_fragment:om,clearcoat_normal_fragment_begin:am,clearcoat_normal_fragment_maps:lm,clearcoat_pars_fragment:cm,iridescence_pars_fragment:hm,opaque_fragment:um,packing:fm,premultiplied_alpha_fragment:dm,project_vertex:pm,dithering_fragment:mm,dithering_pars_fragment:gm,roughnessmap_fragment:_m,roughnessmap_pars_fragment:vm,shadowmap_pars_fragment:xm,shadowmap_pars_vertex:Mm,shadowmap_vertex:Sm,shadowmask_pars_fragment:ym,skinbase_vertex:Em,skinning_pars_vertex:Tm,skinning_vertex:bm,skinnormal_vertex:wm,specularmap_fragment:Am,specularmap_pars_fragment:Rm,tonemapping_fragment:Cm,tonemapping_pars_fragment:Pm,transmission_fragment:Lm,transmission_pars_fragment:Dm,uv_pars_fragment:Um,uv_pars_vertex:Im,uv_vertex:Nm,worldpos_vertex:Fm,background_vert:Om,background_frag:Bm,backgroundCube_vert:zm,backgroundCube_frag:km,cube_vert:Hm,cube_frag:Vm,depth_vert:Gm,depth_frag:Wm,distanceRGBA_vert:Xm,distanceRGBA_frag:qm,equirect_vert:Ym,equirect_frag:Zm,linedashed_vert:jm,linedashed_frag:Jm,meshbasic_vert:Km,meshbasic_frag:$m,meshlambert_vert:Qm,meshlambert_frag:eg,meshmatcap_vert:tg,meshmatcap_frag:ng,meshnormal_vert:ig,meshnormal_frag:sg,meshphong_vert:rg,meshphong_frag:og,meshphysical_vert:ag,meshphysical_frag:lg,meshtoon_vert:cg,meshtoon_frag:hg,points_vert:ug,points_frag:fg,shadow_vert:dg,shadow_frag:pg,sprite_vert:mg,sprite_frag:gg},ce={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},pn={basic:{uniforms:Bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Bt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Bt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Bt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Bt([ce.points,ce.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Bt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Bt([ce.common,ce.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Bt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Bt([ce.sprite,ce.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Bt([ce.common,ce.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Bt([ce.lights,ce.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};pn.physical={uniforms:Bt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const mr={r:0,b:0,g:0},ai=new xn,_g=new ht;function vg(i,e,t,n,s,r,o){const a=new Ze(0);let u=r===!0?0:1,c,v,l=null,h=0,m=null;function x(p){let d=p.isScene===!0?p.background:null;return d&&d.isTexture&&(d=(p.backgroundBlurriness>0?t:e).get(d)),d}function M(p){let d=!1;const L=x(p);L===null?f(a,u):L&&L.isColor&&(f(L,1),d=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||d)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(p,d){const L=x(d);L&&(L.isCubeTexture||L.mapping===kr)?(v===void 0&&(v=new rt(new Ds(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:is(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(A,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(v)),ai.copy(d.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),v.material.uniforms.envMap.value=L,v.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(_g.makeRotationFromEuler(ai)),v.material.toneMapped=Qe.getTransfer(L.colorSpace)!==at,(l!==L||h!==L.version||m!==i.toneMapping)&&(v.material.needsUpdate=!0,l=L,h=L.version,m=i.toneMapping),v.layers.enableAll(),p.unshift(v,v.geometry,v.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new rt(new Gr(2,2),new Mn({name:"BackgroundMaterial",uniforms:is(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:gt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(L.colorSpace)!==at,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(l!==L||h!==L.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,l=L,h=L.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function f(p,d){p.getRGB(mr,fh(i)),n.buffers.color.setClear(mr.r,mr.g,mr.b,d,o)}function g(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),u=d,f(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(p){u=p,f(a,u)},render:M,addToRenderList:_,dispose:g}}function xg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(E,P,Y,z,G){let J=!1;const V=l(z,Y,P);r!==V&&(r=V,c(r.object)),J=m(E,z,Y,G),J&&x(E,z,Y,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,d(E,P,Y,z),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function u(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function v(E){return i.deleteVertexArray(E)}function l(E,P,Y){const z=Y.wireframe===!0;let G=n[E.id];G===void 0&&(G={},n[E.id]=G);let J=G[P.id];J===void 0&&(J={},G[P.id]=J);let V=J[z];return V===void 0&&(V=h(u()),J[z]=V),V}function h(E){const P=[],Y=[],z=[];for(let G=0;G<t;G++)P[G]=0,Y[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:Y,attributeDivisors:z,object:E,attributes:{},index:null}}function m(E,P,Y,z){const G=r.attributes,J=P.attributes;let V=0;const ie=Y.getAttributes();for(const k in ie)if(ie[k].location>=0){const ge=G[k];let Te=J[k];if(Te===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(Te=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(Te=E.instanceColor)),ge===void 0||ge.attribute!==Te||Te&&ge.data!==Te.data)return!0;V++}return r.attributesNum!==V||r.index!==z}function x(E,P,Y,z){const G={},J=P.attributes;let V=0;const ie=Y.getAttributes();for(const k in ie)if(ie[k].location>=0){let ge=J[k];ge===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(ge=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(ge=E.instanceColor));const Te={};Te.attribute=ge,ge&&ge.data&&(Te.data=ge.data),G[k]=Te,V++}r.attributes=G,r.attributesNum=V,r.index=z}function M(){const E=r.newAttributes;for(let P=0,Y=E.length;P<Y;P++)E[P]=0}function _(E){f(E,0)}function f(E,P){const Y=r.newAttributes,z=r.enabledAttributes,G=r.attributeDivisors;Y[E]=1,z[E]===0&&(i.enableVertexAttribArray(E),z[E]=1),G[E]!==P&&(i.vertexAttribDivisor(E,P),G[E]=P)}function g(){const E=r.newAttributes,P=r.enabledAttributes;for(let Y=0,z=P.length;Y<z;Y++)P[Y]!==E[Y]&&(i.disableVertexAttribArray(Y),P[Y]=0)}function p(E,P,Y,z,G,J,V){V===!0?i.vertexAttribIPointer(E,P,Y,G,J):i.vertexAttribPointer(E,P,Y,z,G,J)}function d(E,P,Y,z){M();const G=z.attributes,J=Y.getAttributes(),V=P.defaultAttributeValues;for(const ie in J){const k=J[ie];if(k.location>=0){let le=G[ie];if(le===void 0&&(ie==="instanceMatrix"&&E.instanceMatrix&&(le=E.instanceMatrix),ie==="instanceColor"&&E.instanceColor&&(le=E.instanceColor)),le!==void 0){const ge=le.normalized,Te=le.itemSize,ke=e.get(le);if(ke===void 0)continue;const nt=ke.buffer,q=ke.type,oe=ke.bytesPerElement,be=q===i.INT||q===i.UNSIGNED_INT||le.gpuType===Va;if(le.isInterleavedBufferAttribute){const ae=le.data,Ce=ae.stride,Je=le.offset;if(ae.isInstancedInterleavedBuffer){for(let Re=0;Re<k.locationSize;Re++)f(k.location+Re,ae.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Re=0;Re<k.locationSize;Re++)_(k.location+Re);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let Re=0;Re<k.locationSize;Re++)p(k.location+Re,Te/k.locationSize,q,ge,Ce*oe,(Je+Te/k.locationSize*Re)*oe,be)}else{if(le.isInstancedBufferAttribute){for(let ae=0;ae<k.locationSize;ae++)f(k.location+ae,le.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ae=0;ae<k.locationSize;ae++)_(k.location+ae);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let ae=0;ae<k.locationSize;ae++)p(k.location+ae,Te/k.locationSize,q,ge,Te*oe,Te/k.locationSize*ae*oe,be)}}else if(V!==void 0){const ge=V[ie];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(k.location,ge);break;case 3:i.vertexAttrib3fv(k.location,ge);break;case 4:i.vertexAttrib4fv(k.location,ge);break;default:i.vertexAttrib1fv(k.location,ge)}}}}g()}function L(){D();for(const E in n){const P=n[E];for(const Y in P){const z=P[Y];for(const G in z)v(z[G].object),delete z[G];delete P[Y]}delete n[E]}}function A(E){if(n[E.id]===void 0)return;const P=n[E.id];for(const Y in P){const z=P[Y];for(const G in z)v(z[G].object),delete z[G];delete P[Y]}delete n[E.id]}function C(E){for(const P in n){const Y=n[P];if(Y[E.id]===void 0)continue;const z=Y[E.id];for(const G in z)v(z[G].object),delete z[G];delete Y[E.id]}}function D(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:_,disableUnusedAttributes:g}}function Mg(i,e,t){let n;function s(c){n=c}function r(c,v){i.drawArrays(n,c,v),t.update(v,n,1)}function o(c,v,l){l!==0&&(i.drawArraysInstanced(n,c,v,l),t.update(v,n,l))}function a(c,v,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,v,0,l);let m=0;for(let x=0;x<l;x++)m+=v[x];t.update(m,n,1)}function u(c,v,l,h){if(l===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)o(c[x],v[x],h[x]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,v,0,h,0,l);let x=0;for(let M=0;M<l;M++)x+=v[M]*h[M];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=u}function Sg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==fn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const D=C===as&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Bn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Dn&&!D)}function u(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const v=u(c);v!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",v,"instead."),c=v);const l=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),d=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=x>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:l,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:d,vertexTextures:L,maxSamples:A}}function yg(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ui,a=new Ve,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(l,h){const m=l.length!==0||h||n!==0||s;return s=h,n=l.length,m},this.beginShadows=function(){r=!0,v(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,h){t=v(l,h,0)},this.setState=function(l,h,m){const x=l.clippingPlanes,M=l.clipIntersection,_=l.clipShadows,f=i.get(l);if(!s||x===null||x.length===0||r&&!_)r?v(null):c();else{const g=r?0:n,p=g*4;let d=f.clippingState||null;u.value=d,d=v(x,h,p,m);for(let L=0;L!==p;++L)d[L]=t[L];f.clippingState=d,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=g}};function c(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function v(l,h,m,x){const M=l!==null?l.length:0;let _=null;if(M!==0){if(_=u.value,x!==!0||_===null){const f=m+M*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(_===null||_.length<f)&&(_=new Float32Array(f));for(let p=0,d=m;p!==M;++p,d+=4)o.copy(l[p]).applyMatrix4(g,a),o.normal.toArray(_,d),_[d+3]=o.constant}u.value=_,u.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,_}}function Eg(i){let e=new WeakMap;function t(o,a){return a===$o?o.mapping=$i:a===Qo&&(o.mapping=Qi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$o||a===Qo)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const c=new If(u.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Wi=4,pc=[.125,.215,.35,.446,.526,.582],pi=20,Lo=new Wr,mc=new Ze;let Do=null,Uo=0,Io=0,No=!1;const fi=(1+Math.sqrt(5))/2,zi=1/fi,gc=[new R(-fi,zi,0),new R(fi,zi,0),new R(-zi,0,fi),new R(zi,0,fi),new R(0,fi,-zi),new R(0,fi,zi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Tg=new R;class _c{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=Tg}=r;Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,n,s,u,a),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Do,Uo,Io),this._renderer.xr.enabled=No,e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$i||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:as,format:fn,colorSpace:ns,depthBuffer:!1},s=vc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bg(r)),this._blurMaterial=wg(r,e,t)}return s}_compileMaterial(e){const t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,n,s,r){const u=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,m=l.toneMapping;l.getClearColor(mc),l.toneMapping=Kn,l.autoClear=!1;const x=new vt({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),M=new rt(new Ds,x);let _=!1;const f=e.background;f?f.isColor&&(x.color.copy(f),e.background=null,_=!0):(x.color.copy(mc),_=!0);for(let g=0;g<6;g++){const p=g%3;p===0?(u.up.set(0,c[g],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x+v[g],r.y,r.z)):p===1?(u.up.set(0,0,c[g]),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y+v[g],r.z)):(u.up.set(0,c[g],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y,r.z+v[g]));const d=this._cubeSize;gr(s,p*d,g>2?d:0,d,d),l.setRenderTarget(s),_&&l.render(M,u),l.render(e,u)}M.geometry.dispose(),M.material.dispose(),l.toneMapping=m,l.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===$i||e.mapping===Qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new rt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const u=this._cubeSize;gr(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,Lo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=gc[(s-r-1)%gc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const u=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,l=new rt(this._lodPlanes[s],c),h=c.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*pi-1),M=r/x,_=isFinite(r)?1+Math.floor(v*M):pi;_>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${pi}`);const f=[];let g=0;for(let C=0;C<pi;++C){const D=C/M,T=Math.exp(-D*D/2);f.push(T),C===0?g+=T:C<_&&(g+=2*T)}for(let C=0;C<f.length;C++)f[C]=f[C]/g;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:p}=this;h.dTheta.value=x,h.mipInt.value=p-n;const d=this._sizeLods[s],L=3*d*(s>p-Wi?s-p+Wi:0),A=4*(this._cubeSize-d);gr(t,L,A,3*d,2*d),u.setRenderTarget(t),u.render(l,Lo)}}function bg(i){const e=[],t=[],n=[];let s=i;const r=i-Wi+1+pc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let u=1/a;o>i-Wi?u=pc[o-i+Wi-1]:o===0&&(u=0),n.push(u);const c=1/(a-2),v=-c,l=1+c,h=[v,v,l,v,l,l,v,v,l,l,v,l],m=6,x=6,M=3,_=2,f=1,g=new Float32Array(M*x*m),p=new Float32Array(_*x*m),d=new Float32Array(f*x*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,D=A>2?0:-1,T=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];g.set(T,M*x*A),p.set(h,_*x*A);const E=[A,A,A,A,A,A];d.set(E,f*x*A)}const L=new on;L.setAttribute("position",new gn(g,M)),L.setAttribute("uv",new gn(p,_)),L.setAttribute("faceIndex",new gn(d,f)),e.push(L),s>Wi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vc(i,e,t){const n=new zn(i,e,t);return n.texture.mapping=kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function wg(i,e,t){const n=new Float32Array(pi),s=new R(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function xc(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Mc(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function rl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ag(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const u=a.mapping,c=u===$o||u===Qo,v=u===$i||u===Qi;if(c||v){let l=e.get(a);const h=l!==void 0?l.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new _c(i)),l=c?t.fromEquirectangular(a,l):t.fromCubemap(a,l),l.texture.pmremVersion=a.pmremVersion,e.set(a,l),l.texture;if(l!==void 0)return l.texture;{const m=a.image;return c&&m&&m.height>0||v&&m&&s(m)?(t===null&&(t=new _c(i)),l=c?t.fromEquirectangular(a):t.fromCubemap(a),l.texture.pmremVersion=a.pmremVersion,e.set(a,l),a.addEventListener("dispose",r),l.texture):null}}}return a}function s(a){let u=0;const c=6;for(let v=0;v<c;v++)a[v]!==void 0&&u++;return u===c}function r(a){const u=a.target;u.removeEventListener("dispose",r);const c=e.get(u);c!==void 0&&(e.delete(u),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Rg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&hi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Cg(i,e,t,n){const s={},r=new WeakMap;function o(l){const h=l.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete s[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(l,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function u(l){const h=l.attributes;for(const m in h)e.update(h[m],i.ARRAY_BUFFER)}function c(l){const h=[],m=l.index,x=l.attributes.position;let M=0;if(m!==null){const g=m.array;M=m.version;for(let p=0,d=g.length;p<d;p+=3){const L=g[p+0],A=g[p+1],C=g[p+2];h.push(L,A,A,C,C,L)}}else if(x!==void 0){const g=x.array;M=x.version;for(let p=0,d=g.length/3-1;p<d;p+=3){const L=p+0,A=p+1,C=p+2;h.push(L,A,A,C,C,L)}}else return;const _=new(ah(h)?uh:hh)(h,1);_.version=M;const f=r.get(l);f&&e.remove(f),r.set(l,_)}function v(l){const h=r.get(l);if(h){const m=l.index;m!==null&&h.version<m.version&&c(l)}else c(l);return r.get(l)}return{get:a,update:u,getWireframeAttribute:v}}function Pg(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function u(h,m){i.drawElements(n,m,r,h*o),t.update(m,n,1)}function c(h,m,x){x!==0&&(i.drawElementsInstanced(n,m,r,h*o,x),t.update(m,n,x))}function v(h,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,h,0,x);let _=0;for(let f=0;f<x;f++)_+=m[f];t.update(_,n,1)}function l(h,m,x,M){if(x===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let f=0;f<h.length;f++)c(h[f]/o,m[f],M[f]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,r,h,0,M,0,x);let f=0;for(let g=0;g<x;g++)f+=m[g]*M[g];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=u,this.renderInstances=c,this.renderMultiDraw=v,this.renderMultiDrawInstances=l}function Lg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Dg(i,e,t){const n=new WeakMap,s=new lt;function r(o,a,u){const c=o.morphTargetInfluences,v=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,l=v!==void 0?v.length:0;let h=n.get(a);if(h===void 0||h.count!==l){let T=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let p=0;m===!0&&(p=1),x===!0&&(p=2),M===!0&&(p=3);let d=a.attributes.position.count*p,L=1;d>e.maxTextureSize&&(L=Math.ceil(d/e.maxTextureSize),d=e.maxTextureSize);const A=new Float32Array(d*L*4*l),C=new lh(A,d,L,l);C.type=Dn,C.needsUpdate=!0;const D=p*4;for(let E=0;E<l;E++){const P=_[E],Y=f[E],z=g[E],G=d*L*4*E;for(let J=0;J<P.count;J++){const V=J*D;m===!0&&(s.fromBufferAttribute(P,J),A[G+V+0]=s.x,A[G+V+1]=s.y,A[G+V+2]=s.z,A[G+V+3]=0),x===!0&&(s.fromBufferAttribute(Y,J),A[G+V+4]=s.x,A[G+V+5]=s.y,A[G+V+6]=s.z,A[G+V+7]=0),M===!0&&(s.fromBufferAttribute(z,J),A[G+V+8]=s.x,A[G+V+9]=s.y,A[G+V+10]=s.z,A[G+V+11]=z.itemSize===4?s.w:1)}}h={count:l,texture:C,size:new Q(d,L)},n.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];const x=a.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",c)}u.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Ug(i,e,t,n){let s=new WeakMap;function r(u){const c=n.render.frame,v=u.geometry,l=e.get(u,v);if(s.get(l)!==c&&(e.update(l),s.set(l,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),s.get(u)!==c&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const h=u.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return l}function o(){s=new WeakMap}function a(u){const c=u.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Ph=new Ht,Sc=new vh(1,1),Lh=new lh,Dh=new vf,Uh=new mh,yc=[],Ec=[],Tc=new Float32Array(16),bc=new Float32Array(9),wc=new Float32Array(4);function cs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=yc[s];if(r===void 0&&(r=new Float32Array(s),yc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xr(i,e){let t=Ec[e];t===void 0&&(t=new Int32Array(e),Ec[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ig(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ng(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function Fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function Og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function Bg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;wc.set(n),i.uniformMatrix2fv(this.addr,!1,wc),Tt(t,n)}}function zg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;bc.set(n),i.uniformMatrix3fv(this.addr,!1,bc),Tt(t,n)}}function kg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Tc.set(n),i.uniformMatrix4fv(this.addr,!1,Tc),Tt(t,n)}}function Hg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function Gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function Wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function Xg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function Yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function Zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function jg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sc.compareFunction=oh,r=Sc):r=Ph,t.setTexture2D(e||r,s)}function Jg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Dh,s)}function Kg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Uh,s)}function $g(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Lh,s)}function Qg(i){switch(i){case 5126:return Ig;case 35664:return Ng;case 35665:return Fg;case 35666:return Og;case 35674:return Bg;case 35675:return zg;case 35676:return kg;case 5124:case 35670:return Hg;case 35667:case 35671:return Vg;case 35668:case 35672:return Gg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return qg;case 36295:return Yg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return $g}}function e_(i,e){i.uniform1fv(this.addr,e)}function t_(i,e){const t=cs(e,this.size,2);i.uniform2fv(this.addr,t)}function n_(i,e){const t=cs(e,this.size,3);i.uniform3fv(this.addr,t)}function i_(i,e){const t=cs(e,this.size,4);i.uniform4fv(this.addr,t)}function s_(i,e){const t=cs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function r_(i,e){const t=cs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function o_(i,e){const t=cs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function a_(i,e){i.uniform1iv(this.addr,e)}function l_(i,e){i.uniform2iv(this.addr,e)}function c_(i,e){i.uniform3iv(this.addr,e)}function h_(i,e){i.uniform4iv(this.addr,e)}function u_(i,e){i.uniform1uiv(this.addr,e)}function f_(i,e){i.uniform2uiv(this.addr,e)}function d_(i,e){i.uniform3uiv(this.addr,e)}function p_(i,e){i.uniform4uiv(this.addr,e)}function m_(i,e,t){const n=this.cache,s=e.length,r=Xr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ph,r[o])}function g_(i,e,t){const n=this.cache,s=e.length,r=Xr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Dh,r[o])}function __(i,e,t){const n=this.cache,s=e.length,r=Xr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Uh,r[o])}function v_(i,e,t){const n=this.cache,s=e.length,r=Xr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Lh,r[o])}function x_(i){switch(i){case 5126:return e_;case 35664:return t_;case 35665:return n_;case 35666:return i_;case 35674:return s_;case 35675:return r_;case 35676:return o_;case 5124:case 35670:return a_;case 35667:case 35671:return l_;case 35668:case 35672:return c_;case 35669:case 35673:return h_;case 5125:return u_;case 36294:return f_;case 36295:return d_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return g_;case 35680:case 36300:case 36308:case 36293:return __;case 36289:case 36303:case 36311:case 36292:return v_}}class M_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qg(t.type)}}class S_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=x_(t.type)}}class y_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Fo=/(\w+)(\])?(\[|\.)?/g;function Ac(i,e){i.seq.push(e),i.map[e.id]=e}function E_(i,e,t){const n=i.name,s=n.length;for(Fo.lastIndex=0;;){const r=Fo.exec(n),o=Fo.lastIndex;let a=r[1];const u=r[2]==="]",c=r[3];if(u&&(a=a|0),c===void 0||c==="["&&o+2===s){Ac(t,c===void 0?new M_(a,i,e):new S_(a,i,e));break}else{let l=t.map[a];l===void 0&&(l=new y_(a),Ac(t,l)),t=l}}}class Cr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);E_(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],u=n[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Rc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const T_=37297;let b_=0;function w_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Cc=new Ve;function A_(i){Qe._getMatrix(Cc,Qe.workingColorSpace,i);const e=`mat3( ${Cc.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Pr:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Pc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+w_(i.getShaderSource(e),o)}else return s}function R_(i,e){const t=A_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function C_(i,e){let t;switch(e){case Ru:t="Linear";break;case Cu:t="Reinhard";break;case Pu:t="Cineon";break;case Lu:t="ACESFilmic";break;case Uu:t="AgX";break;case Iu:t="Neutral";break;case Du:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _r=new R;function P_(){Qe.getLuminanceCoefficients(_r);const i=_r.x.toFixed(4),e=_r.y.toFixed(4),t=_r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function D_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function U_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function _s(i){return i!==""}function Lc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(i){return i.replace(I_,F_)}const N_=new Map;function F_(i,e){let t=We[e];if(t===void 0){const n=N_.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Da(t)}const O_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uc(i){return i.replace(O_,B_)}function B_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ic(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function z_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===au?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function k_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $i:case Qi:e="ENVMAP_TYPE_CUBE";break;case kr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function H_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qi:e="ENVMAP_MODE_REFRACTION";break}return e}function V_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zc:e="ENVMAP_BLENDING_MULTIPLY";break;case wu:e="ENVMAP_BLENDING_MIX";break;case Au:e="ENVMAP_BLENDING_ADD";break}return e}function G_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function W_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const u=z_(t),c=k_(t),v=H_(t),l=V_(t),h=G_(t),m=L_(t),x=D_(r),M=s.createProgram();let _,f,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(_s).join(`
`),_.length>0&&(_+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(_s).join(`
`),f.length>0&&(f+=`
`)):(_=[Ic(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),f=[Ic(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+v:"",t.envMap?"#define "+l:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?We.tonemapping_pars_fragment:"",t.toneMapping!==Kn?C_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,R_("linearToOutputTexel",t.outputColorSpace),P_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_s).join(`
`)),o=Da(o),o=Lc(o,t),o=Dc(o,t),a=Da(a),a=Lc(a,t),a=Dc(a,t),o=Uc(o),a=Uc(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",t.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const p=g+_+o,d=g+f+a,L=Rc(s,s.VERTEX_SHADER,p),A=Rc(s,s.FRAGMENT_SHADER,d);s.attachShader(M,L),s.attachShader(M,A),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function C(P){if(i.debug.checkShaderErrors){const Y=s.getProgramInfoLog(M).trim(),z=s.getShaderInfoLog(L).trim(),G=s.getShaderInfoLog(A).trim();let J=!0,V=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,L,A);else{const ie=Pc(s,L,"vertex"),k=Pc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Y+`
`+ie+`
`+k)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(z===""||G==="")&&(V=!1);V&&(P.diagnostics={runnable:J,programLog:Y,vertexShader:{log:z,prefix:_},fragmentShader:{log:G,prefix:f}})}s.deleteShader(L),s.deleteShader(A),D=new Cr(s,M),T=U_(s,M)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(M,T_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=b_++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=A,this}let X_=0;class q_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Y_(e),t.set(e,n)),n}}class Y_{constructor(e){this.id=X_++,this.code=e,this.usedTimes=0}}function Z_(i,e,t,n,s,r,o){const a=new $a,u=new q_,c=new Set,v=[],l=s.logarithmicDepthBuffer,h=s.vertexTextures;let m=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return c.add(T),T===0?"uv":`uv${T}`}function _(T,E,P,Y,z){const G=Y.fog,J=z.geometry,V=T.isMeshStandardMaterial?Y.environment:null,ie=(T.isMeshStandardMaterial?t:e).get(T.envMap||V),k=ie&&ie.mapping===kr?ie.image.height:null,le=x[T.type];T.precision!==null&&(m=s.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const ge=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Te=ge!==void 0?ge.length:0;let ke=0;J.morphAttributes.position!==void 0&&(ke=1),J.morphAttributes.normal!==void 0&&(ke=2),J.morphAttributes.color!==void 0&&(ke=3);let nt,q,oe,be;if(le){const ot=pn[le];nt=ot.vertexShader,q=ot.fragmentShader}else nt=T.vertexShader,q=T.fragmentShader,u.update(T),oe=u.getVertexShaderID(T),be=u.getFragmentShaderID(T);const ae=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),Je=z.isInstancedMesh===!0,Re=z.isBatchedMesh===!0,et=!!T.map,$=!!T.matcap,K=!!ie,w=!!T.aoMap,Ae=!!T.lightMap,ee=!!T.bumpMap,xe=!!T.normalMap,re=!!T.displacementMap,Ie=!!T.emissiveMap,de=!!T.metalnessMap,b=!!T.roughnessMap,S=T.anisotropy>0,F=T.clearcoat>0,W=T.dispersion>0,j=T.iridescence>0,X=T.sheen>0,we=T.transmission>0,he=S&&!!T.anisotropyMap,ve=F&&!!T.clearcoatMap,qe=F&&!!T.clearcoatNormalMap,ne=F&&!!T.clearcoatRoughnessMap,Se=j&&!!T.iridescenceMap,Ne=j&&!!T.iridescenceThicknessMap,Fe=X&&!!T.sheenColorMap,ye=X&&!!T.sheenRoughnessMap,je=!!T.specularMap,Ge=!!T.specularColorMap,ct=!!T.specularIntensityMap,U=we&&!!T.transmissionMap,ue=we&&!!T.thicknessMap,H=!!T.gradientMap,Z=!!T.alphaMap,me=T.alphaTest>0,pe=!!T.alphaHash,He=!!T.extensions;let pt=Kn;T.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(pt=i.toneMapping);const Dt={shaderID:le,shaderType:T.type,shaderName:T.name,vertexShader:nt,fragmentShader:q,defines:T.defines,customVertexShaderID:oe,customFragmentShaderID:be,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Re,batchingColor:Re&&z._colorsTexture!==null,instancing:Je,instancingColor:Je&&z.instanceColor!==null,instancingMorph:Je&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ns,alphaToCoverage:!!T.alphaToCoverage,map:et,matcap:$,envMap:K,envMapMode:K&&ie.mapping,envMapCubeUVHeight:k,aoMap:w,lightMap:Ae,bumpMap:ee,normalMap:xe,displacementMap:h&&re,emissiveMap:Ie,normalMapObjectSpace:xe&&T.normalMapType===Bu,normalMapTangentSpace:xe&&T.normalMapType===Za,metalnessMap:de,roughnessMap:b,anisotropy:S,anisotropyMap:he,clearcoat:F,clearcoatMap:ve,clearcoatNormalMap:qe,clearcoatRoughnessMap:ne,dispersion:W,iridescence:j,iridescenceMap:Se,iridescenceThicknessMap:Ne,sheen:X,sheenColorMap:Fe,sheenRoughnessMap:ye,specularMap:je,specularColorMap:Ge,specularIntensityMap:ct,transmission:we,transmissionMap:U,thicknessMap:ue,gradientMap:H,opaque:T.transparent===!1&&T.blending===qi&&T.alphaToCoverage===!1,alphaMap:Z,alphaTest:me,alphaHash:pe,combine:T.combine,mapUv:et&&M(T.map.channel),aoMapUv:w&&M(T.aoMap.channel),lightMapUv:Ae&&M(T.lightMap.channel),bumpMapUv:ee&&M(T.bumpMap.channel),normalMapUv:xe&&M(T.normalMap.channel),displacementMapUv:re&&M(T.displacementMap.channel),emissiveMapUv:Ie&&M(T.emissiveMap.channel),metalnessMapUv:de&&M(T.metalnessMap.channel),roughnessMapUv:b&&M(T.roughnessMap.channel),anisotropyMapUv:he&&M(T.anisotropyMap.channel),clearcoatMapUv:ve&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:qe&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:ye&&M(T.sheenRoughnessMap.channel),specularMapUv:je&&M(T.specularMap.channel),specularColorMapUv:Ge&&M(T.specularColorMap.channel),specularIntensityMapUv:ct&&M(T.specularIntensityMap.channel),transmissionMapUv:U&&M(T.transmissionMap.channel),thicknessMapUv:ue&&M(T.thicknessMap.channel),alphaMapUv:Z&&M(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(xe||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!J.attributes.uv&&(et||Z),fog:!!G,useFog:T.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:l,reverseDepthBuffer:Ce,skinning:z.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:ke,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:pt,decodeVideoTexture:et&&T.map.isVideoTexture===!0&&Qe.getTransfer(T.map.colorSpace)===at,decodeVideoTextureEmissive:Ie&&T.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(T.emissiveMap.colorSpace)===at,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Gt,flipSided:T.side===Rt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:He&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&T.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function f(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)E.push(P),E.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(g(E,T),p(E,T),E.push(i.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function g(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function p(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function d(T){const E=x[T.type];let P;if(E){const Y=pn[E];P=dh.clone(Y.uniforms)}else P=T.uniforms;return P}function L(T,E){let P;for(let Y=0,z=v.length;Y<z;Y++){const G=v[Y];if(G.cacheKey===E){P=G,++P.usedTimes;break}}return P===void 0&&(P=new W_(i,E,T,r),v.push(P)),P}function A(T){if(--T.usedTimes===0){const E=v.indexOf(T);v[E]=v[v.length-1],v.pop(),T.destroy()}}function C(T){u.remove(T)}function D(){u.dispose()}return{getParameters:_,getProgramCacheKey:f,getUniforms:d,acquireProgram:L,releaseProgram:A,releaseShaderCache:C,programs:v,dispose:D}}function j_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,u){i.get(o)[a]=u}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function J_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Nc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(l,h,m,x,M,_){let f=i[e];return f===void 0?(f={id:l.id,object:l,geometry:h,material:m,groupOrder:x,renderOrder:l.renderOrder,z:M,group:_},i[e]=f):(f.id=l.id,f.object=l,f.geometry=h,f.material=m,f.groupOrder=x,f.renderOrder=l.renderOrder,f.z=M,f.group=_),e++,f}function a(l,h,m,x,M,_){const f=o(l,h,m,x,M,_);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function u(l,h,m,x,M,_){const f=o(l,h,m,x,M,_);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(l,h){t.length>1&&t.sort(l||J_),n.length>1&&n.sort(h||Nc),s.length>1&&s.sort(h||Nc)}function v(){for(let l=e,h=i.length;l<h;l++){const m=i[l];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:u,finish:v,sort:c}}function K_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Fc,i.set(n,[o])):s>=r.length?(o=new Fc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function $_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ze};break;case"SpotLight":t={position:new R,direction:new R,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Q_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let e0=0;function t0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function n0(i){const e=new $_,t=Q_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const s=new R,r=new ht,o=new ht;function a(c){let v=0,l=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let m=0,x=0,M=0,_=0,f=0,g=0,p=0,d=0,L=0,A=0,C=0;c.sort(t0);for(let T=0,E=c.length;T<E;T++){const P=c[T],Y=P.color,z=P.intensity,G=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)v+=Y.r*z,l+=Y.g*z,h+=Y.b*z;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],z);C++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ie=P.shadow,k=t.get(P);k.shadowIntensity=ie.intensity,k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=P.shadow.matrix,g++}n.directional[m]=V,m++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(Y).multiplyScalar(z),V.distance=G,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[M]=V;const ie=P.shadow;if(P.map&&(n.spotLightMap[L]=P.map,L++,ie.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[M]=ie.matrix,P.castShadow){const k=t.get(P);k.shadowIntensity=ie.intensity,k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,n.spotShadow[M]=k,n.spotShadowMap[M]=J,d++}M++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(Y).multiplyScalar(z),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[_]=V,_++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const ie=P.shadow,k=t.get(P);k.shadowIntensity=ie.intensity,k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,k.shadowCameraNear=ie.camera.near,k.shadowCameraFar=ie.camera.far,n.pointShadow[x]=k,n.pointShadowMap[x]=J,n.pointShadowMatrix[x]=P.shadow.matrix,p++}n.point[x]=V,x++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(z),V.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[f]=V,f++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=v,n.ambient[1]=l,n.ambient[2]=h;const D=n.hash;(D.directionalLength!==m||D.pointLength!==x||D.spotLength!==M||D.rectAreaLength!==_||D.hemiLength!==f||D.numDirectionalShadows!==g||D.numPointShadows!==p||D.numSpotShadows!==d||D.numSpotMaps!==L||D.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=_,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=p,n.pointShadowMap.length=p,n.spotShadow.length=d,n.spotShadowMap.length=d,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=p,n.spotLightMatrix.length=d+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,D.directionalLength=m,D.pointLength=x,D.spotLength=M,D.rectAreaLength=_,D.hemiLength=f,D.numDirectionalShadows=g,D.numPointShadows=p,D.numSpotShadows=d,D.numSpotMaps=L,D.numLightProbes=C,n.version=e0++)}function u(c,v){let l=0,h=0,m=0,x=0,M=0;const _=v.matrixWorldInverse;for(let f=0,g=c.length;f<g;f++){const p=c[f];if(p.isDirectionalLight){const d=n.directional[l];d.direction.setFromMatrixPosition(p.matrixWorld),s.setFromMatrixPosition(p.target.matrixWorld),d.direction.sub(s),d.direction.transformDirection(_),l++}else if(p.isSpotLight){const d=n.spot[m];d.position.setFromMatrixPosition(p.matrixWorld),d.position.applyMatrix4(_),d.direction.setFromMatrixPosition(p.matrixWorld),s.setFromMatrixPosition(p.target.matrixWorld),d.direction.sub(s),d.direction.transformDirection(_),m++}else if(p.isRectAreaLight){const d=n.rectArea[x];d.position.setFromMatrixPosition(p.matrixWorld),d.position.applyMatrix4(_),o.identity(),r.copy(p.matrixWorld),r.premultiply(_),o.extractRotation(r),d.halfWidth.set(p.width*.5,0,0),d.halfHeight.set(0,p.height*.5,0),d.halfWidth.applyMatrix4(o),d.halfHeight.applyMatrix4(o),x++}else if(p.isPointLight){const d=n.point[h];d.position.setFromMatrixPosition(p.matrixWorld),d.position.applyMatrix4(_),h++}else if(p.isHemisphereLight){const d=n.hemi[M];d.direction.setFromMatrixPosition(p.matrixWorld),d.direction.transformDirection(_),M++}}}return{setup:a,setupView:u,state:n}}function Oc(i){const e=new n0(i),t=[],n=[];function s(v){c.camera=v,t.length=0,n.length=0}function r(v){t.push(v)}function o(v){n.push(v)}function a(){e.setup(t)}function u(v){e.setupView(t,v)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:u,pushLight:r,pushShadow:o}}function i0(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Oc(i),e.set(s,[a])):r>=o.length?(a=new Oc(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const s0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function o0(i,e,t){let n=new Qa;const s=new Q,r=new Q,o=new lt,a=new Md({depthPacking:Ou}),u=new Sd,c={},v=t.maxTextureSize,l={[gt]:Rt,[Rt]:gt,[Gt]:Gt},h=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:s0,fragmentShader:r0}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new on;x.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new rt(x,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let f=this.type;this.render=function(A,C,D){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;const T=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Nn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const z=f!==Cn&&this.type===Cn,G=f===Cn&&this.type!==Cn;for(let J=0,V=A.length;J<V;J++){const ie=A[J],k=ie.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const le=k.getFrameExtents();if(s.multiply(le),r.copy(k.mapSize),(s.x>v||s.y>v)&&(s.x>v&&(r.x=Math.floor(v/le.x),s.x=r.x*le.x,k.mapSize.x=r.x),s.y>v&&(r.y=Math.floor(v/le.y),s.y=r.y*le.y,k.mapSize.y=r.y)),k.map===null||z===!0||G===!0){const Te=this.type!==Cn?{minFilter:dn,magFilter:dn}:{};k.map!==null&&k.map.dispose(),k.map=new zn(s.x,s.y,Te),k.map.texture.name=ie.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const ge=k.getViewportCount();for(let Te=0;Te<ge;Te++){const ke=k.getViewport(Te);o.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),Y.viewport(o),k.updateMatrices(ie,Te),n=k.getFrustum(),d(C,D,k.camera,ie,this.type)}k.isPointLightShadow!==!0&&this.type===Cn&&g(k,D),k.needsUpdate=!1}f=this.type,_.needsUpdate=!1,i.setRenderTarget(T,E,P)};function g(A,C){const D=e.update(M);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zn(s.x,s.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,D,h,M,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,D,m,M,null)}function p(A,C,D,T){let E=null;const P=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)E=P;else if(E=D.isPointLight===!0?u:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const Y=E.uuid,z=C.uuid;let G=c[Y];G===void 0&&(G={},c[Y]=G);let J=G[z];J===void 0&&(J=E.clone(),G[z]=J,C.addEventListener("dispose",L)),E=J}if(E.visible=C.visible,E.wireframe=C.wireframe,T===Cn?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:l[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Y=i.properties.get(E);Y.light=D}return E}function d(A,C,D,T,E){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Cn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const z=e.update(A),G=A.material;if(Array.isArray(G)){const J=z.groups;for(let V=0,ie=J.length;V<ie;V++){const k=J[V],le=G[k.materialIndex];if(le&&le.visible){const ge=p(A,le,T,E);A.onBeforeShadow(i,A,C,D,z,ge,k),i.renderBufferDirect(D,null,z,ge,A,k),A.onAfterShadow(i,A,C,D,z,ge,k)}}}else if(G.visible){const J=p(A,G,T,E);A.onBeforeShadow(i,A,C,D,z,J,null),i.renderBufferDirect(D,null,z,J,A,null),A.onAfterShadow(i,A,C,D,z,J,null)}}const Y=A.children;for(let z=0,G=Y.length;z<G;z++)d(Y[z],C,D,T,E)}function L(A){A.target.removeEventListener("dispose",L);for(const D in c){const T=c[D],E=A.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const a0={[Xo]:qo,[Yo]:Jo,[Zo]:Ko,[Ki]:jo,[qo]:Xo,[Jo]:Yo,[Ko]:Zo,[jo]:Ki};function l0(i,e){function t(){let U=!1;const ue=new lt;let H=null;const Z=new lt(0,0,0,0);return{setMask:function(me){H!==me&&!U&&(i.colorMask(me,me,me,me),H=me)},setLocked:function(me){U=me},setClear:function(me,pe,He,pt,Dt){Dt===!0&&(me*=pt,pe*=pt,He*=pt),ue.set(me,pe,He,pt),Z.equals(ue)===!1&&(i.clearColor(me,pe,He,pt),Z.copy(ue))},reset:function(){U=!1,H=null,Z.set(-1,0,0,0)}}}function n(){let U=!1,ue=!1,H=null,Z=null,me=null;return{setReversed:function(pe){if(ue!==pe){const He=e.get("EXT_clip_control");ue?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const pt=me;me=null,this.setClear(pt)}ue=pe},getReversed:function(){return ue},setTest:function(pe){pe?ae(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(pe){H!==pe&&!U&&(i.depthMask(pe),H=pe)},setFunc:function(pe){if(ue&&(pe=a0[pe]),Z!==pe){switch(pe){case Xo:i.depthFunc(i.NEVER);break;case qo:i.depthFunc(i.ALWAYS);break;case Yo:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case Zo:i.depthFunc(i.EQUAL);break;case jo:i.depthFunc(i.GEQUAL);break;case Jo:i.depthFunc(i.GREATER);break;case Ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=pe}},setLocked:function(pe){U=pe},setClear:function(pe){me!==pe&&(ue&&(pe=1-pe),i.clearDepth(pe),me=pe)},reset:function(){U=!1,H=null,Z=null,me=null,ue=!1}}}function s(){let U=!1,ue=null,H=null,Z=null,me=null,pe=null,He=null,pt=null,Dt=null;return{setTest:function(ot){U||(ot?ae(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(ot){ue!==ot&&!U&&(i.stencilMask(ot),ue=ot)},setFunc:function(ot,an,yn){(H!==ot||Z!==an||me!==yn)&&(i.stencilFunc(ot,an,yn),H=ot,Z=an,me=yn)},setOp:function(ot,an,yn){(pe!==ot||He!==an||pt!==yn)&&(i.stencilOp(ot,an,yn),pe=ot,He=an,pt=yn)},setLocked:function(ot){U=ot},setClear:function(ot){Dt!==ot&&(i.clearStencil(ot),Dt=ot)},reset:function(){U=!1,ue=null,H=null,Z=null,me=null,pe=null,He=null,pt=null,Dt=null}}}const r=new t,o=new n,a=new s,u=new WeakMap,c=new WeakMap;let v={},l={},h=new WeakMap,m=[],x=null,M=!1,_=null,f=null,g=null,p=null,d=null,L=null,A=null,C=new Ze(0,0,0),D=0,T=!1,E=null,P=null,Y=null,z=null,G=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ie=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=ie>=1):k.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=ie>=2);let le=null,ge={};const Te=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),nt=new lt().fromArray(Te),q=new lt().fromArray(ke);function oe(U,ue,H,Z){const me=new Uint8Array(4),pe=i.createTexture();i.bindTexture(U,pe),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<H;He++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(ue+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return pe}const be={};be[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(i.DEPTH_TEST),o.setFunc(Ki),ee(!1),xe(Al),ae(i.CULL_FACE),w(Nn);function ae(U){v[U]!==!0&&(i.enable(U),v[U]=!0)}function Ce(U){v[U]!==!1&&(i.disable(U),v[U]=!1)}function Je(U,ue){return l[U]!==ue?(i.bindFramebuffer(U,ue),l[U]=ue,U===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=ue),U===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function Re(U,ue){let H=m,Z=!1;if(U){H=h.get(ue),H===void 0&&(H=[],h.set(ue,H));const me=U.textures;if(H.length!==me.length||H[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,He=me.length;pe<He;pe++)H[pe]=i.COLOR_ATTACHMENT0+pe;H.length=me.length,Z=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,Z=!0);Z&&i.drawBuffers(H)}function et(U){return x!==U?(i.useProgram(U),x=U,!0):!1}const $={[di]:i.FUNC_ADD,[cu]:i.FUNC_SUBTRACT,[hu]:i.FUNC_REVERSE_SUBTRACT};$[uu]=i.MIN,$[fu]=i.MAX;const K={[du]:i.ZERO,[pu]:i.ONE,[mu]:i.SRC_COLOR,[Go]:i.SRC_ALPHA,[Su]:i.SRC_ALPHA_SATURATE,[xu]:i.DST_COLOR,[_u]:i.DST_ALPHA,[gu]:i.ONE_MINUS_SRC_COLOR,[Wo]:i.ONE_MINUS_SRC_ALPHA,[Mu]:i.ONE_MINUS_DST_COLOR,[vu]:i.ONE_MINUS_DST_ALPHA,[yu]:i.CONSTANT_COLOR,[Eu]:i.ONE_MINUS_CONSTANT_COLOR,[Tu]:i.CONSTANT_ALPHA,[bu]:i.ONE_MINUS_CONSTANT_ALPHA};function w(U,ue,H,Z,me,pe,He,pt,Dt,ot){if(U===Nn){M===!0&&(Ce(i.BLEND),M=!1);return}if(M===!1&&(ae(i.BLEND),M=!0),U!==lu){if(U!==_||ot!==T){if((f!==di||d!==di)&&(i.blendEquation(i.FUNC_ADD),f=di,d=di),ot)switch(U){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rl:i.blendFunc(i.ONE,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}g=null,p=null,L=null,A=null,C.set(0,0,0),D=0,_=U,T=ot}return}me=me||ue,pe=pe||H,He=He||Z,(ue!==f||me!==d)&&(i.blendEquationSeparate($[ue],$[me]),f=ue,d=me),(H!==g||Z!==p||pe!==L||He!==A)&&(i.blendFuncSeparate(K[H],K[Z],K[pe],K[He]),g=H,p=Z,L=pe,A=He),(pt.equals(C)===!1||Dt!==D)&&(i.blendColor(pt.r,pt.g,pt.b,Dt),C.copy(pt),D=Dt),_=U,T=!1}function Ae(U,ue){U.side===Gt?Ce(i.CULL_FACE):ae(i.CULL_FACE);let H=U.side===Rt;ue&&(H=!H),ee(H),U.blending===qi&&U.transparent===!1?w(Nn):w(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const Z=U.stencilWrite;a.setTest(Z),Z&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ie(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(U){E!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),E=U)}function xe(U){U!==ru?(ae(i.CULL_FACE),U!==P&&(U===Al?i.cullFace(i.BACK):U===ou?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),P=U}function re(U){U!==Y&&(V&&i.lineWidth(U),Y=U)}function Ie(U,ue,H){U?(ae(i.POLYGON_OFFSET_FILL),(z!==ue||G!==H)&&(i.polygonOffset(ue,H),z=ue,G=H)):Ce(i.POLYGON_OFFSET_FILL)}function de(U){U?ae(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function b(U){U===void 0&&(U=i.TEXTURE0+J-1),le!==U&&(i.activeTexture(U),le=U)}function S(U,ue,H){H===void 0&&(le===null?H=i.TEXTURE0+J-1:H=le);let Z=ge[H];Z===void 0&&(Z={type:void 0,texture:void 0},ge[H]=Z),(Z.type!==U||Z.texture!==ue)&&(le!==H&&(i.activeTexture(H),le=H),i.bindTexture(U,ue||be[U]),Z.type=U,Z.texture=ue)}function F(){const U=ge[le];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function W(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qe(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(U){nt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),nt.copy(U))}function ye(U){q.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),q.copy(U))}function je(U,ue){let H=c.get(ue);H===void 0&&(H=new WeakMap,c.set(ue,H));let Z=H.get(U);Z===void 0&&(Z=i.getUniformBlockIndex(ue,U.name),H.set(U,Z))}function Ge(U,ue){const Z=c.get(ue).get(U);u.get(ue)!==Z&&(i.uniformBlockBinding(ue,Z,U.__bindingPointIndex),u.set(ue,Z))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),v={},le=null,ge={},l={},h=new WeakMap,m=[],x=null,M=!1,_=null,f=null,g=null,p=null,d=null,L=null,A=null,C=new Ze(0,0,0),D=0,T=!1,E=null,P=null,Y=null,z=null,G=null,nt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:Ce,bindFramebuffer:Je,drawBuffers:Re,useProgram:et,setBlending:w,setMaterial:Ae,setFlipSided:ee,setCullFace:xe,setLineWidth:re,setPolygonOffset:Ie,setScissorTest:de,activeTexture:b,bindTexture:S,unbindTexture:F,compressedTexImage2D:W,compressedTexImage3D:j,texImage2D:Se,texImage3D:Ne,updateUBOMapping:je,uniformBlockBinding:Ge,texStorage2D:qe,texStorage3D:ne,texSubImage2D:X,texSubImage3D:we,compressedTexSubImage2D:he,compressedTexSubImage3D:ve,scissor:Fe,viewport:ye,reset:ct}}function c0(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,v=new WeakMap;let l;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(b,S){return m?new OffscreenCanvas(b,S):ws("canvas")}function M(b,S,F){let W=1;const j=de(b);if((j.width>F||j.height>F)&&(W=F/Math.max(j.width,j.height)),W<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const X=Math.floor(W*j.width),we=Math.floor(W*j.height);l===void 0&&(l=x(X,we));const he=S?x(X,we):l;return he.width=X,he.height=we,he.getContext("2d").drawImage(b,0,0,X,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+we+")."),he}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function _(b){return b.generateMipmaps}function f(b){i.generateMipmap(b)}function g(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function p(b,S,F,W,j=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=S;if(S===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8)),S===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),S===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8)),S===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),S===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),S===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),S===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),S===i.RGBA){const we=j?Pr:Qe.getTransfer(W);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=we===at?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function d(b,S){let F;return b?S===null||S===vi||S===es?F=i.DEPTH24_STENCIL8:S===Dn?F=i.DEPTH32F_STENCIL8:S===Ts&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===vi||S===es?F=i.DEPTH_COMPONENT24:S===Dn?F=i.DEPTH_COMPONENT32F:S===Ts&&(F=i.DEPTH_COMPONENT16),F}function L(b,S){return _(b)===!0||b.isFramebufferTexture&&b.minFilter!==dn&&b.minFilter!==rn?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function A(b){const S=b.target;S.removeEventListener("dispose",A),D(S),S.isVideoTexture&&v.delete(S)}function C(b){const S=b.target;S.removeEventListener("dispose",C),E(S)}function D(b){const S=n.get(b);if(S.__webglInit===void 0)return;const F=b.source,W=h.get(F);if(W){const j=W[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&T(b),Object.keys(W).length===0&&h.delete(F)}n.remove(b)}function T(b){const S=n.get(b);i.deleteTexture(S.__webglTexture);const F=b.source,W=h.get(F);delete W[S.__cacheKey],o.memory.textures--}function E(b){const S=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(S.__webglFramebuffer[W]))for(let j=0;j<S.__webglFramebuffer[W].length;j++)i.deleteFramebuffer(S.__webglFramebuffer[W][j]);else i.deleteFramebuffer(S.__webglFramebuffer[W]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[W])}else{if(Array.isArray(S.__webglFramebuffer))for(let W=0;W<S.__webglFramebuffer.length;W++)i.deleteFramebuffer(S.__webglFramebuffer[W]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let W=0;W<S.__webglColorRenderbuffer.length;W++)S.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[W]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const F=b.textures;for(let W=0,j=F.length;W<j;W++){const X=n.get(F[W]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(F[W])}n.remove(b)}let P=0;function Y(){P=0}function z(){const b=P;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),P+=1,b}function G(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function J(b,S){const F=n.get(b);if(b.isVideoTexture&&re(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const W=b.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,b,S);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+S)}function V(b,S){const F=n.get(b);if(b.version>0&&F.__version!==b.version){q(F,b,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+S)}function ie(b,S){const F=n.get(b);if(b.version>0&&F.__version!==b.version){q(F,b,S);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+S)}function k(b,S){const F=n.get(b);if(b.version>0&&F.__version!==b.version){oe(F,b,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+S)}const le={[Es]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[ea]:i.MIRRORED_REPEAT},ge={[dn]:i.NEAREST,[Nu]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[to]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},Te={[zu]:i.NEVER,[Xu]:i.ALWAYS,[ku]:i.LESS,[oh]:i.LEQUAL,[Hu]:i.EQUAL,[Wu]:i.GEQUAL,[Vu]:i.GREATER,[Gu]:i.NOTEQUAL};function ke(b,S){if(S.type===Dn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===rn||S.magFilter===to||S.magFilter===Gs||S.magFilter===mi||S.minFilter===rn||S.minFilter===to||S.minFilter===Gs||S.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,le[S.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,le[S.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,le[S.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ge[S.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ge[S.minFilter]),S.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Te[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===dn||S.minFilter!==Gs&&S.minFilter!==mi||S.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function nt(b,S){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",A));const W=S.source;let j=h.get(W);j===void 0&&(j={},h.set(W,j));const X=G(S);if(X!==b.__cacheKey){j[X]===void 0&&(j[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),j[X].usedTimes++;const we=j[b.__cacheKey];we!==void 0&&(j[b.__cacheKey].usedTimes--,we.usedTimes===0&&T(S)),b.__cacheKey=X,b.__webglTexture=j[X].texture}return F}function q(b,S,F){let W=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(W=i.TEXTURE_3D);const j=nt(b,S),X=S.source;t.bindTexture(W,b.__webglTexture,i.TEXTURE0+F);const we=n.get(X);if(X.version!==we.__version||j===!0){t.activeTexture(i.TEXTURE0+F);const he=Qe.getPrimaries(Qe.workingColorSpace),ve=S.colorSpace===Jn?null:Qe.getPrimaries(S.colorSpace),qe=S.colorSpace===Jn||he===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ne=M(S.image,!1,s.maxTextureSize);ne=Ie(S,ne);const Se=r.convert(S.format,S.colorSpace),Ne=r.convert(S.type);let Fe=p(S.internalFormat,Se,Ne,S.colorSpace,S.isVideoTexture);ke(W,S);let ye;const je=S.mipmaps,Ge=S.isVideoTexture!==!0,ct=we.__version===void 0||j===!0,U=X.dataReady,ue=L(S,ne);if(S.isDepthTexture)Fe=d(S.format===ts,S.type),ct&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,Fe,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Fe,ne.width,ne.height,0,Se,Ne,null));else if(S.isDataTexture)if(je.length>0){Ge&&ct&&t.texStorage2D(i.TEXTURE_2D,ue,Fe,je[0].width,je[0].height);for(let H=0,Z=je.length;H<Z;H++)ye=je[H],Ge?U&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,ye.width,ye.height,Se,Ne,ye.data):t.texImage2D(i.TEXTURE_2D,H,Fe,ye.width,ye.height,0,Se,Ne,ye.data);S.generateMipmaps=!1}else Ge?(ct&&t.texStorage2D(i.TEXTURE_2D,ue,Fe,ne.width,ne.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,Se,Ne,ne.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,ne.width,ne.height,0,Se,Ne,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ge&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Fe,je[0].width,je[0].height,ne.depth);for(let H=0,Z=je.length;H<Z;H++)if(ye=je[H],S.format!==fn)if(Se!==null)if(Ge){if(U)if(S.layerUpdates.size>0){const me=dc(ye.width,ye.height,S.format,S.type);for(const pe of S.layerUpdates){const He=ye.data.subarray(pe*me/ye.data.BYTES_PER_ELEMENT,(pe+1)*me/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,pe,ye.width,ye.height,1,Se,He)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,ye.width,ye.height,ne.depth,Se,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,Fe,ye.width,ye.height,ne.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,ye.width,ye.height,ne.depth,Se,Ne,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,H,Fe,ye.width,ye.height,ne.depth,0,Se,Ne,ye.data)}else{Ge&&ct&&t.texStorage2D(i.TEXTURE_2D,ue,Fe,je[0].width,je[0].height);for(let H=0,Z=je.length;H<Z;H++)ye=je[H],S.format!==fn?Se!==null?Ge?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,ye.width,ye.height,Se,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,H,Fe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?U&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,ye.width,ye.height,Se,Ne,ye.data):t.texImage2D(i.TEXTURE_2D,H,Fe,ye.width,ye.height,0,Se,Ne,ye.data)}else if(S.isDataArrayTexture)if(Ge){if(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Fe,ne.width,ne.height,ne.depth),U)if(S.layerUpdates.size>0){const H=dc(ne.width,ne.height,S.format,S.type);for(const Z of S.layerUpdates){const me=ne.data.subarray(Z*H/ne.data.BYTES_PER_ELEMENT,(Z+1)*H/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,Se,Ne,me)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Se,Ne,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,ne.width,ne.height,ne.depth,0,Se,Ne,ne.data);else if(S.isData3DTexture)Ge?(ct&&t.texStorage3D(i.TEXTURE_3D,ue,Fe,ne.width,ne.height,ne.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Se,Ne,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,ne.width,ne.height,ne.depth,0,Se,Ne,ne.data);else if(S.isFramebufferTexture){if(ct)if(Ge)t.texStorage2D(i.TEXTURE_2D,ue,Fe,ne.width,ne.height);else{let H=ne.width,Z=ne.height;for(let me=0;me<ue;me++)t.texImage2D(i.TEXTURE_2D,me,Fe,H,Z,0,Se,Ne,null),H>>=1,Z>>=1}}else if(je.length>0){if(Ge&&ct){const H=de(je[0]);t.texStorage2D(i.TEXTURE_2D,ue,Fe,H.width,H.height)}for(let H=0,Z=je.length;H<Z;H++)ye=je[H],Ge?U&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,Se,Ne,ye):t.texImage2D(i.TEXTURE_2D,H,Fe,Se,Ne,ye);S.generateMipmaps=!1}else if(Ge){if(ct){const H=de(ne);t.texStorage2D(i.TEXTURE_2D,ue,Fe,H.width,H.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,Ne,ne)}else t.texImage2D(i.TEXTURE_2D,0,Fe,Se,Ne,ne);_(S)&&f(W),we.__version=X.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function oe(b,S,F){if(S.image.length!==6)return;const W=nt(b,S),j=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+F);const X=n.get(j);if(j.version!==X.__version||W===!0){t.activeTexture(i.TEXTURE0+F);const we=Qe.getPrimaries(Qe.workingColorSpace),he=S.colorSpace===Jn?null:Qe.getPrimaries(S.colorSpace),ve=S.colorSpace===Jn||we===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const qe=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,Se=[];for(let Z=0;Z<6;Z++)!qe&&!ne?Se[Z]=M(S.image[Z],!0,s.maxCubemapSize):Se[Z]=ne?S.image[Z].image:S.image[Z],Se[Z]=Ie(S,Se[Z]);const Ne=Se[0],Fe=r.convert(S.format,S.colorSpace),ye=r.convert(S.type),je=p(S.internalFormat,Fe,ye,S.colorSpace),Ge=S.isVideoTexture!==!0,ct=X.__version===void 0||W===!0,U=j.dataReady;let ue=L(S,Ne);ke(i.TEXTURE_CUBE_MAP,S);let H;if(qe){Ge&&ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,je,Ne.width,Ne.height);for(let Z=0;Z<6;Z++){H=Se[Z].mipmaps;for(let me=0;me<H.length;me++){const pe=H[me];S.format!==fn?Fe!==null?Ge?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,pe.width,pe.height,Fe,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,je,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,pe.width,pe.height,Fe,ye,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,je,pe.width,pe.height,0,Fe,ye,pe.data)}}}else{if(H=S.mipmaps,Ge&&ct){H.length>0&&ue++;const Z=de(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,je,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){Ge?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Se[Z].width,Se[Z].height,Fe,ye,Se[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,je,Se[Z].width,Se[Z].height,0,Fe,ye,Se[Z].data);for(let me=0;me<H.length;me++){const He=H[me].image[Z].image;Ge?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,He.width,He.height,Fe,ye,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,je,He.width,He.height,0,Fe,ye,He.data)}}else{Ge?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Fe,ye,Se[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,je,Fe,ye,Se[Z]);for(let me=0;me<H.length;me++){const pe=H[me];Ge?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,Fe,ye,pe.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,je,Fe,ye,pe.image[Z])}}}_(S)&&f(i.TEXTURE_CUBE_MAP),X.__version=j.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function be(b,S,F,W,j,X){const we=r.convert(F.format,F.colorSpace),he=r.convert(F.type),ve=p(F.internalFormat,we,he,F.colorSpace),qe=n.get(S),ne=n.get(F);if(ne.__renderTarget=S,!qe.__hasExternalTextures){const Se=Math.max(1,S.width>>X),Ne=Math.max(1,S.height>>X);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,X,ve,Se,Ne,S.depth,0,we,he,null):t.texImage2D(j,X,ve,Se,Ne,0,we,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),xe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,j,ne.__webglTexture,0,ee(S)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,j,ne.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(b,S,F){if(i.bindRenderbuffer(i.RENDERBUFFER,b),S.depthBuffer){const W=S.depthTexture,j=W&&W.isDepthTexture?W.type:null,X=d(S.stencilBuffer,j),we=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=ee(S);xe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,X,S.width,S.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,X,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,X,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,b)}else{const W=S.textures;for(let j=0;j<W.length;j++){const X=W[j],we=r.convert(X.format,X.colorSpace),he=r.convert(X.type),ve=p(X.internalFormat,we,he,X.colorSpace),qe=ee(S);F&&xe(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,ve,S.width,S.height):xe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe,ve,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ve,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=n.get(S.depthTexture);W.__renderTarget=S,(!W.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J(S.depthTexture,0);const j=W.__webglTexture,X=ee(S);if(S.depthTexture.format===Yi)xe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(S.depthTexture.format===ts)xe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Je(b){const S=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){const W=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),W){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,W.removeEventListener("dispose",j)};W.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=W}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ce(S.__webglFramebuffer,b)}else if(F){S.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[W]),S.__webglDepthbuffer[W]===void 0)S.__webglDepthbuffer[W]=i.createRenderbuffer(),ae(S.__webglDepthbuffer[W],b,!1);else{const j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,X)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ae(S.__webglDepthbuffer,b,!1);else{const W=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,j)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(b,S,F){const W=n.get(b);S!==void 0&&be(W.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Je(b)}function et(b){const S=b.texture,F=n.get(b),W=n.get(S);b.addEventListener("dispose",C);const j=b.textures,X=b.isWebGLCubeRenderTarget===!0,we=j.length>1;if(we||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=S.version,o.memory.textures++),X){F.__webglFramebuffer=[];for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[he]=[];for(let ve=0;ve<S.mipmaps.length;ve++)F.__webglFramebuffer[he][ve]=i.createFramebuffer()}else F.__webglFramebuffer[he]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)F.__webglFramebuffer[he]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(we)for(let he=0,ve=j.length;he<ve;he++){const qe=n.get(j[he]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&xe(b)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let he=0;he<j.length;he++){const ve=j[he];F.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[he]);const qe=r.convert(ve.format,ve.colorSpace),ne=r.convert(ve.type),Se=p(ve.internalFormat,qe,ne,ve.colorSpace,b.isXRRenderTarget===!0),Ne=ee(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Se,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,F.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),ke(i.TEXTURE_CUBE_MAP,S);for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)be(F.__webglFramebuffer[he][ve],b,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,ve);else be(F.__webglFramebuffer[he],b,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);_(S)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let he=0,ve=j.length;he<ve;he++){const qe=j[he],ne=n.get(qe);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),ke(i.TEXTURE_2D,qe),be(F.__webglFramebuffer,b,qe,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),_(qe)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(he=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,W.__webglTexture),ke(he,S),S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)be(F.__webglFramebuffer[ve],b,S,i.COLOR_ATTACHMENT0,he,ve);else be(F.__webglFramebuffer,b,S,i.COLOR_ATTACHMENT0,he,0);_(S)&&f(he),t.unbindTexture()}b.depthBuffer&&Je(b)}function $(b){const S=b.textures;for(let F=0,W=S.length;F<W;F++){const j=S[F];if(_(j)){const X=g(b),we=n.get(j).__webglTexture;t.bindTexture(X,we),f(X),t.unbindTexture()}}}const K=[],w=[];function Ae(b){if(b.samples>0){if(xe(b)===!1){const S=b.textures,F=b.width,W=b.height;let j=i.COLOR_BUFFER_BIT;const X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(b),he=S.length>1;if(he)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);const qe=n.get(S[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,F,W,0,0,F,W,j,i.NEAREST),u===!0&&(K.length=0,w.length=0,K.push(i.COLOR_ATTACHMENT0+ve),b.depthBuffer&&b.resolveDepthBuffer===!1&&(K.push(X),w.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);const qe=n.get(S[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&u){const S=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ee(b){return Math.min(s.maxSamples,b.samples)}function xe(b){const S=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function re(b){const S=o.render.frame;v.get(b)!==S&&(v.set(b,S),b.update())}function Ie(b,S){const F=b.colorSpace,W=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==ns&&F!==Jn&&(Qe.getTransfer(F)===at?(W!==fn||j!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function de(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=Y,this.setTexture2D=J,this.setTexture2DArray=V,this.setTexture3D=ie,this.setTextureCube=k,this.rebindTextures=Re,this.setupRenderTarget=et,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=be,this.useMultisampledRTT=xe}function h0(i,e){function t(n,s=Jn){let r;const o=Qe.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===Ga)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jc)return i.BYTE;if(n===Kc)return i.SHORT;if(n===Ts)return i.UNSIGNED_SHORT;if(n===Va)return i.INT;if(n===vi)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===as)return i.HALF_FLOAT;if(n===Qc)return i.ALPHA;if(n===eh)return i.RGB;if(n===fn)return i.RGBA;if(n===th)return i.LUMINANCE;if(n===nh)return i.LUMINANCE_ALPHA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===ih)return i.RED;if(n===Xa)return i.RED_INTEGER;if(n===sh)return i.RG;if(n===qa)return i.RG_INTEGER;if(n===Ya)return i.RGBA_INTEGER;if(n===Tr||n===br||n===wr||n===Ar)if(o===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ta||n===na||n===ia||n===sa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ra||n===oa||n===aa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ra||n===oa)return o===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===aa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===la||n===ca||n===ha||n===ua||n===fa||n===da||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===Ma||n===Sa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===la)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ca)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ha)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ua)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===da)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ma)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ga)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_a)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===va)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ma)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rr||n===ya||n===Ea)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Rr)return o===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ea)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rh||n===Ta||n===ba||n===wa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const u0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class d0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Ht,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mn({vertexShader:u0,fragmentShader:f0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new Gr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p0 extends Si{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",u=1,c=null,v=null,l=null,h=null,m=null,x=null;const M=new d0,_=t.getContextAttributes();let f=null,g=null;const p=[],d=[],L=new Q;let A=null;const C=new Kt;C.viewport=new lt;const D=new Kt;D.viewport=new lt;const T=[C,D],E=new Ud;let P=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let oe=p[q];return oe===void 0&&(oe=new yo,p[q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(q){let oe=p[q];return oe===void 0&&(oe=new yo,p[q]=oe),oe.getGripSpace()},this.getHand=function(q){let oe=p[q];return oe===void 0&&(oe=new yo,p[q]=oe),oe.getHandSpace()};function z(q){const oe=d.indexOf(q.inputSource);if(oe===-1)return;const be=p[oe];be!==void 0&&(be.update(q.inputSource,q.frame,c||o),be.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",J);for(let q=0;q<p.length;q++){const oe=d[q];oe!==null&&(d[q]=null,p[q].disconnect(oe))}P=null,Y=null,M.reset(),e.setRenderTarget(f),m=null,h=null,l=null,s=null,g=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return l},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,ae=null,Ce=null;_.depth&&(Ce=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=_.stencil?ts:Yi,ae=_.stencil?es:vi);const Je={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};l=new XRWebGLBinding(s,t),h=l.createProjectionLayer(Je),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new zn(h.textureWidth,h.textureHeight,{format:fn,type:Bn,depthTexture:new vh(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const be={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new zn(m.framebufferWidth,m.framebufferHeight,{format:fn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(u),c=null,o=await s.requestReferenceSpace(a),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function J(q){for(let oe=0;oe<q.removed.length;oe++){const be=q.removed[oe],ae=d.indexOf(be);ae>=0&&(d[ae]=null,p[ae].disconnect(be))}for(let oe=0;oe<q.added.length;oe++){const be=q.added[oe];let ae=d.indexOf(be);if(ae===-1){for(let Je=0;Je<p.length;Je++)if(Je>=d.length){d.push(be),ae=Je;break}else if(d[Je]===null){d[Je]=be,ae=Je;break}if(ae===-1)break}const Ce=p[ae];Ce&&Ce.connect(be)}}const V=new R,ie=new R;function k(q,oe,be){V.setFromMatrixPosition(oe.matrixWorld),ie.setFromMatrixPosition(be.matrixWorld);const ae=V.distanceTo(ie),Ce=oe.projectionMatrix.elements,Je=be.projectionMatrix.elements,Re=Ce[14]/(Ce[10]-1),et=Ce[14]/(Ce[10]+1),$=(Ce[9]+1)/Ce[5],K=(Ce[9]-1)/Ce[5],w=(Ce[8]-1)/Ce[0],Ae=(Je[8]+1)/Je[0],ee=Re*w,xe=Re*Ae,re=ae/(-w+Ae),Ie=re*-w;if(oe.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ie),q.translateZ(re),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ce[10]===-1)q.projectionMatrix.copy(oe.projectionMatrix),q.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const de=Re+re,b=et+re,S=ee-Ie,F=xe+(ae-Ie),W=$*et/b*de,j=K*et/b*de;q.projectionMatrix.makePerspective(S,F,W,j,de,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function le(q,oe){oe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(oe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let oe=q.near,be=q.far;M.texture!==null&&(M.depthNear>0&&(oe=M.depthNear),M.depthFar>0&&(be=M.depthFar)),E.near=D.near=C.near=oe,E.far=D.far=C.far=be,(P!==E.near||Y!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,Y=E.far),C.layers.mask=q.layers.mask|2,D.layers.mask=q.layers.mask|4,E.layers.mask=C.layers.mask|D.layers.mask;const ae=q.parent,Ce=E.cameras;le(E,ae);for(let Je=0;Je<Ce.length;Je++)le(Ce[Je],ae);Ce.length===2?k(E,C,D):E.projectionMatrix.copy(C.projectionMatrix),ge(q,E,ae)};function ge(q,oe,be){be===null?q.matrix.copy(oe.matrixWorld):(q.matrix.copy(be.matrixWorld),q.matrix.invert(),q.matrix.multiply(oe.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(oe.projectionMatrix),q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=bs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&m===null))return u},this.setFoveation=function(q){u=q,h!==null&&(h.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(E)};let Te=null;function ke(q,oe){if(v=oe.getViewerPose(c||o),x=oe,v!==null){const be=v.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let ae=!1;be.length!==E.cameras.length&&(E.cameras.length=0,ae=!0);for(let Re=0;Re<be.length;Re++){const et=be[Re];let $=null;if(m!==null)$=m.getViewport(et);else{const w=l.getViewSubImage(h,et);$=w.viewport,Re===0&&(e.setRenderTargetTextures(g,w.colorTexture,h.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(g))}let K=T[Re];K===void 0&&(K=new Kt,K.layers.enable(Re),K.viewport=new lt,T[Re]=K),K.matrix.fromArray(et.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(et.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set($.x,$.y,$.width,$.height),Re===0&&(E.matrix.copy(K.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ae===!0&&E.cameras.push(K)}const Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&l){const Re=l.getDepthInformation(be[0]);Re&&Re.isValid&&Re.texture&&M.init(e,Re,s.renderState)}}for(let be=0;be<p.length;be++){const ae=d[be],Ce=p[be];ae!==null&&Ce!==void 0&&Ce.update(ae,oe,c||o)}Te&&Te(q,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),x=null}const nt=new Ch;nt.setAnimationLoop(ke),this.setAnimationLoop=function(q){Te=q},this.dispose=function(){}}}const li=new xn,m0=new ht;function g0(i,e){function t(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function n(_,f){f.color.getRGB(_.fogColor.value,fh(i)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function s(_,f,g,p,d){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(_,f):f.isMeshToonMaterial?(r(_,f),l(_,f)):f.isMeshPhongMaterial?(r(_,f),v(_,f)):f.isMeshStandardMaterial?(r(_,f),h(_,f),f.isMeshPhysicalMaterial&&m(_,f,d)):f.isMeshMatcapMaterial?(r(_,f),x(_,f)):f.isMeshDepthMaterial?r(_,f):f.isMeshDistanceMaterial?(r(_,f),M(_,f)):f.isMeshNormalMaterial?r(_,f):f.isLineBasicMaterial?(o(_,f),f.isLineDashedMaterial&&a(_,f)):f.isPointsMaterial?u(_,f,g,p):f.isSpriteMaterial?c(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,t(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,t(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===Rt&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,t(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===Rt&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,t(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,t(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);const g=e.get(f),p=g.envMap,d=g.envMapRotation;p&&(_.envMap.value=p,li.copy(d),li.x*=-1,li.y*=-1,li.z*=-1,p.isCubeTexture&&p.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),_.envMapRotation.value.setFromMatrix4(m0.makeRotationFromEuler(li)),_.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap&&(_.lightMap.value=f.lightMap,_.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,_.lightMapTransform)),f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,_.aoMapTransform))}function o(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,t(f.map,_.mapTransform))}function a(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function u(_,f,g,p){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*g,_.scale.value=p*.5,f.map&&(_.map.value=f.map,t(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function c(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,t(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function v(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function l(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function h(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,_.roughnessMapTransform)),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function m(_,f,g){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Rt&&_.clearcoatNormalScale.value.negate())),f.dispersion>0&&(_.dispersion.value=f.dispersion),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=g.texture,_.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(_.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(_.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,f){f.matcap&&(_.matcap.value=f.matcap)}function M(_,f){const g=e.get(f).light;_.referencePosition.value.setFromMatrixPosition(g.matrixWorld),_.nearDistance.value=g.shadow.camera.near,_.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _0(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(g,p){const d=p.program;n.uniformBlockBinding(g,d)}function c(g,p){let d=s[g.id];d===void 0&&(x(g),d=v(g),s[g.id]=d,g.addEventListener("dispose",_));const L=p.program;n.updateUBOMapping(g,L);const A=e.render.frame;r[g.id]!==A&&(h(g),r[g.id]=A)}function v(g){const p=l();g.__bindingPointIndex=p;const d=i.createBuffer(),L=g.__size,A=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,d),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,p,d),d}function l(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const p=s[g.id],d=g.uniforms,L=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,p);for(let A=0,C=d.length;A<C;A++){const D=Array.isArray(d[A])?d[A]:[d[A]];for(let T=0,E=D.length;T<E;T++){const P=D[T];if(m(P,A,T,L)===!0){const Y=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let J=0;J<z.length;J++){const V=z[J],ie=M(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,Y+G,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,G),G+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(g,p,d,L){const A=g.value,C=p+"_"+d;if(L[C]===void 0)return typeof A=="number"||typeof A=="boolean"?L[C]=A:L[C]=A.clone(),!0;{const D=L[C];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return L[C]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function x(g){const p=g.uniforms;let d=0;const L=16;for(let C=0,D=p.length;C<D;C++){const T=Array.isArray(p[C])?p[C]:[p[C]];for(let E=0,P=T.length;E<P;E++){const Y=T[E],z=Array.isArray(Y.value)?Y.value:[Y.value];for(let G=0,J=z.length;G<J;G++){const V=z[G],ie=M(V),k=d%L,le=k%ie.boundary,ge=k+le;d+=le,ge!==0&&L-ge<ie.storage&&(d+=L-ge),Y.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=d,d+=ie.storage}}}const A=d%L;return A>0&&(d+=L-A),g.__size=d,g.__cache={},this}function M(g){const p={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(p.boundary=4,p.storage=4):g.isVector2?(p.boundary=8,p.storage=8):g.isVector3||g.isColor?(p.boundary=16,p.storage=12):g.isVector4?(p.boundary=16,p.storage=16):g.isMatrix3?(p.boundary=48,p.storage=48):g.isMatrix4?(p.boundary=64,p.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),p}function _(g){const p=g.target;p.removeEventListener("dispose",_);const d=o.indexOf(p.__bindingPointIndex);o.splice(d,1),i.deleteBuffer(s[p.id]),delete s[p.id],delete r[p.id]}function f(){for(const g in s)i.deleteBuffer(s[g]);o=[],s={},r={}}return{bind:u,update:c,dispose:f}}class v0{constructor(e={}){const{canvas:t=cf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:l=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const x=new Uint32Array(4),M=new Int32Array(4);let _=null,f=null;const g=[],p=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=Kn,this.toneMappingExposure=1;const d=this;let L=!1,A=0,C=0,D=null,T=-1,E=null;const P=new lt,Y=new lt;let z=null;const G=new Ze(0);let J=0,V=t.width,ie=t.height,k=1,le=null,ge=null;const Te=new lt(0,0,V,ie),ke=new lt(0,0,V,ie);let nt=!1;const q=new Qa;let oe=!1,be=!1;this.transmissionResolutionScale=1;const ae=new ht,Ce=new ht,Je=new R,Re=new lt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function K(){return D===null?k:1}let w=n;function Ae(y,I){return t.getContext(y,I)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:v,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ha}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",pe,!1),w===null){const I="webgl2";if(w=Ae(I,y),w===null)throw Ae(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ee,xe,re,Ie,de,b,S,F,W,j,X,we,he,ve,qe,ne,Se,Ne,Fe,ye,je,Ge,ct,U;function ue(){ee=new Rg(w),ee.init(),Ge=new h0(w,ee),xe=new Sg(w,ee,e,Ge),re=new l0(w,ee),xe.reverseDepthBuffer&&h&&re.buffers.depth.setReversed(!0),Ie=new Lg(w),de=new j_,b=new c0(w,ee,re,de,xe,Ge,Ie),S=new Eg(d),F=new Ag(d),W=new Od(w),ct=new xg(w,W),j=new Cg(w,W,Ie,ct),X=new Ug(w,j,W,Ie),Fe=new Dg(w,xe,b),ne=new yg(de),we=new Z_(d,S,F,ee,xe,ct,ne),he=new g0(d,de),ve=new K_,qe=new i0(ee),Ne=new vg(d,S,F,re,X,m,u),Se=new o0(d,X,xe),U=new _0(w,Ie,xe,re),ye=new Mg(w,ee,Ie),je=new Pg(w,ee,Ie),Ie.programs=we.programs,d.capabilities=xe,d.extensions=ee,d.properties=de,d.renderLists=ve,d.shadowMap=Se,d.state=re,d.info=Ie}ue();const H=new p0(d,w);this.xr=H,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const y=ee.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ee.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(y){y!==void 0&&(k=y,this.setSize(V,ie,!1))},this.getSize=function(y){return y.set(V,ie)},this.setSize=function(y,I,O=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=y,ie=I,t.width=Math.floor(y*k),t.height=Math.floor(I*k),O===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(V*k,ie*k).floor()},this.setDrawingBufferSize=function(y,I,O){V=y,ie=I,k=O,t.width=Math.floor(y*O),t.height=Math.floor(I*O),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(Te)},this.setViewport=function(y,I,O,B){y.isVector4?Te.set(y.x,y.y,y.z,y.w):Te.set(y,I,O,B),re.viewport(P.copy(Te).multiplyScalar(k).round())},this.getScissor=function(y){return y.copy(ke)},this.setScissor=function(y,I,O,B){y.isVector4?ke.set(y.x,y.y,y.z,y.w):ke.set(y,I,O,B),re.scissor(Y.copy(ke).multiplyScalar(k).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(y){re.setScissorTest(nt=y)},this.setOpaqueSort=function(y){le=y},this.setTransparentSort=function(y){ge=y},this.getClearColor=function(y){return y.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,O=!0){let B=0;if(y){let N=!1;if(D!==null){const te=D.texture.format;N=te===Ya||te===qa||te===Xa}if(N){const te=D.texture.type,fe=te===Bn||te===vi||te===Ts||te===es||te===Ga||te===Wa,Me=Ne.getClearColor(),Ee=Ne.getClearAlpha(),Oe=Me.r,Be=Me.g,Pe=Me.b;fe?(x[0]=Oe,x[1]=Be,x[2]=Pe,x[3]=Ee,w.clearBufferuiv(w.COLOR,0,x)):(M[0]=Oe,M[1]=Be,M[2]=Pe,M[3]=Ee,w.clearBufferiv(w.COLOR,0,M))}else B|=w.COLOR_BUFFER_BIT}I&&(B|=w.DEPTH_BUFFER_BIT),O&&(B|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Ne.dispose(),ve.dispose(),qe.dispose(),de.dispose(),S.dispose(),F.dispose(),X.dispose(),ct.dispose(),U.dispose(),we.dispose(),H.dispose(),H.removeEventListener("sessionstart",Ml),H.removeEventListener("sessionend",Sl),ti.stop()};function Z(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const y=Ie.autoReset,I=Se.enabled,O=Se.autoUpdate,B=Se.needsUpdate,N=Se.type;ue(),Ie.autoReset=y,Se.enabled=I,Se.autoUpdate=O,Se.needsUpdate=B,Se.type=N}function pe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function He(y){const I=y.target;I.removeEventListener("dispose",He),pt(I)}function pt(y){Dt(y),de.remove(y)}function Dt(y){const I=de.get(y).programs;I!==void 0&&(I.forEach(function(O){we.releaseProgram(O)}),y.isShaderMaterial&&we.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,O,B,N,te){I===null&&(I=et);const fe=N.isMesh&&N.matrixWorld.determinant()<0,Me=Kh(y,I,O,B,N);re.setMaterial(B,fe);let Ee=O.index,Oe=1;if(B.wireframe===!0){if(Ee=j.getWireframeAttribute(O),Ee===void 0)return;Oe=2}const Be=O.drawRange,Pe=O.attributes.position;let Ke=Be.start*Oe,it=(Be.start+Be.count)*Oe;te!==null&&(Ke=Math.max(Ke,te.start*Oe),it=Math.min(it,(te.start+te.count)*Oe)),Ee!==null?(Ke=Math.max(Ke,0),it=Math.min(it,Ee.count)):Pe!=null&&(Ke=Math.max(Ke,0),it=Math.min(it,Pe.count));const xt=it-Ke;if(xt<0||xt===1/0)return;ct.setup(N,B,Me,O,Ee);let mt,$e=ye;if(Ee!==null&&(mt=W.get(Ee),$e=je,$e.setIndex(mt)),N.isMesh)B.wireframe===!0?(re.setLineWidth(B.wireframeLinewidth*K()),$e.setMode(w.LINES)):$e.setMode(w.TRIANGLES);else if(N.isLine){let Le=B.linewidth;Le===void 0&&(Le=1),re.setLineWidth(Le*K()),N.isLineSegments?$e.setMode(w.LINES):N.isLineLoop?$e.setMode(w.LINE_LOOP):$e.setMode(w.LINE_STRIP)}else N.isPoints?$e.setMode(w.POINTS):N.isSprite&&$e.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)hi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))$e.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Le=N._multiDrawStarts,Pt=N._multiDrawCounts,st=N._multiDrawCount,ln=Ee?W.get(Ee).bytesPerElement:1,bi=de.get(B).currentProgram.getUniforms();for(let qt=0;qt<st;qt++)bi.setValue(w,"_gl_DrawID",qt),$e.render(Le[qt]/ln,Pt[qt])}else if(N.isInstancedMesh)$e.renderInstances(Ke,xt,N.count);else if(O.isInstancedBufferGeometry){const Le=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Pt=Math.min(O.instanceCount,Le);$e.renderInstances(Ke,xt,Pt)}else $e.render(Ke,xt)};function ot(y,I,O){y.transparent===!0&&y.side===Gt&&y.forceSinglePass===!1?(y.side=Rt,y.needsUpdate=!0,Vs(y,I,O),y.side=gt,y.needsUpdate=!0,Vs(y,I,O),y.side=Gt):Vs(y,I,O)}this.compile=function(y,I,O=null){O===null&&(O=y),f=qe.get(O),f.init(I),p.push(f),O.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),y!==O&&y.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const B=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const te=N.material;if(te)if(Array.isArray(te))for(let fe=0;fe<te.length;fe++){const Me=te[fe];ot(Me,O,N),B.add(Me)}else ot(te,O,N),B.add(te)}),f=p.pop(),B},this.compileAsync=function(y,I,O=null){const B=this.compile(y,I,O);return new Promise(N=>{function te(){if(B.forEach(function(fe){de.get(fe).currentProgram.isReady()&&B.delete(fe)}),B.size===0){N(y);return}setTimeout(te,10)}ee.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let an=null;function yn(y){an&&an(y)}function Ml(){ti.stop()}function Sl(){ti.start()}const ti=new Ch;ti.setAnimationLoop(yn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(y){an=y,H.setAnimationLoop(y),y===null?ti.stop():ti.start()},H.addEventListener("sessionstart",Ml),H.addEventListener("sessionend",Sl),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(I),I=H.getCamera()),y.isScene===!0&&y.onBeforeRender(d,y,I,D),f=qe.get(y,p.length),f.init(I),p.push(f),Ce.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(Ce),be=this.localClippingEnabled,oe=ne.init(this.clippingPlanes,be),_=ve.get(y,g.length),_.init(),g.push(_),H.enabled===!0&&H.isPresenting===!0){const te=d.xr.getDepthSensingMesh();te!==null&&Qr(te,I,-1/0,d.sortObjects)}Qr(y,I,0,d.sortObjects),_.finish(),d.sortObjects===!0&&_.sort(le,ge),$=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,$&&Ne.addToRenderList(_,y),this.info.render.frame++,oe===!0&&ne.beginShadows();const O=f.state.shadowsArray;Se.render(O,y,I),oe===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=_.opaque,N=_.transmissive;if(f.setupLights(),I.isArrayCamera){const te=I.cameras;if(N.length>0)for(let fe=0,Me=te.length;fe<Me;fe++){const Ee=te[fe];El(B,N,y,Ee)}$&&Ne.render(y);for(let fe=0,Me=te.length;fe<Me;fe++){const Ee=te[fe];yl(_,y,Ee,Ee.viewport)}}else N.length>0&&El(B,N,y,I),$&&Ne.render(y),yl(_,y,I);D!==null&&C===0&&(b.updateMultisampleRenderTarget(D),b.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(d,y,I),ct.resetDefaultState(),T=-1,E=null,p.pop(),p.length>0?(f=p[p.length-1],oe===!0&&ne.setGlobalState(d.clippingPlanes,f.state.camera)):f=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function Qr(y,I,O,B){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||q.intersectsSprite(y)){B&&Re.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ce);const fe=X.update(y),Me=y.material;Me.visible&&_.push(y,fe,Me,O,Re.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||q.intersectsObject(y))){const fe=X.update(y),Me=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Re.copy(y.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Re.copy(fe.boundingSphere.center)),Re.applyMatrix4(y.matrixWorld).applyMatrix4(Ce)),Array.isArray(Me)){const Ee=fe.groups;for(let Oe=0,Be=Ee.length;Oe<Be;Oe++){const Pe=Ee[Oe],Ke=Me[Pe.materialIndex];Ke&&Ke.visible&&_.push(y,fe,Ke,O,Re.z,Pe)}}else Me.visible&&_.push(y,fe,Me,O,Re.z,null)}}const te=y.children;for(let fe=0,Me=te.length;fe<Me;fe++)Qr(te[fe],I,O,B)}function yl(y,I,O,B){const N=y.opaque,te=y.transmissive,fe=y.transparent;f.setupLightsView(O),oe===!0&&ne.setGlobalState(d.clippingPlanes,O),B&&re.viewport(P.copy(B)),N.length>0&&Hs(N,I,O),te.length>0&&Hs(te,I,O),fe.length>0&&Hs(fe,I,O),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function El(y,I,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new zn(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?as:Bn,minFilter:mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const te=f.state.transmissionRenderTarget[B.id],fe=B.viewport||P;te.setSize(fe.z*d.transmissionResolutionScale,fe.w*d.transmissionResolutionScale);const Me=d.getRenderTarget();d.setRenderTarget(te),d.getClearColor(G),J=d.getClearAlpha(),J<1&&d.setClearColor(16777215,.5),d.clear(),$&&Ne.render(O);const Ee=d.toneMapping;d.toneMapping=Kn;const Oe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),oe===!0&&ne.setGlobalState(d.clippingPlanes,B),Hs(y,O,B),b.updateMultisampleRenderTarget(te),b.updateRenderTargetMipmap(te),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Pe=0,Ke=I.length;Pe<Ke;Pe++){const it=I[Pe],xt=it.object,mt=it.geometry,$e=it.material,Le=it.group;if($e.side===Gt&&xt.layers.test(B.layers)){const Pt=$e.side;$e.side=Rt,$e.needsUpdate=!0,Tl(xt,O,B,mt,$e,Le),$e.side=Pt,$e.needsUpdate=!0,Be=!0}}Be===!0&&(b.updateMultisampleRenderTarget(te),b.updateRenderTargetMipmap(te))}d.setRenderTarget(Me),d.setClearColor(G,J),Oe!==void 0&&(B.viewport=Oe),d.toneMapping=Ee}function Hs(y,I,O){const B=I.isScene===!0?I.overrideMaterial:null;for(let N=0,te=y.length;N<te;N++){const fe=y[N],Me=fe.object,Ee=fe.geometry,Oe=B===null?fe.material:B,Be=fe.group;Me.layers.test(O.layers)&&Tl(Me,I,O,Ee,Oe,Be)}}function Tl(y,I,O,B,N,te){y.onBeforeRender(d,I,O,B,N,te),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(d,I,O,B,y,te),N.transparent===!0&&N.side===Gt&&N.forceSinglePass===!1?(N.side=Rt,N.needsUpdate=!0,d.renderBufferDirect(O,I,B,N,y,te),N.side=gt,N.needsUpdate=!0,d.renderBufferDirect(O,I,B,N,y,te),N.side=Gt):d.renderBufferDirect(O,I,B,N,y,te),y.onAfterRender(d,I,O,B,N,te)}function Vs(y,I,O){I.isScene!==!0&&(I=et);const B=de.get(y),N=f.state.lights,te=f.state.shadowsArray,fe=N.state.version,Me=we.getParameters(y,N.state,te,I,O),Ee=we.getProgramCacheKey(Me);let Oe=B.programs;B.environment=y.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(y.isMeshStandardMaterial?F:S).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Oe===void 0&&(y.addEventListener("dispose",He),Oe=new Map,B.programs=Oe);let Be=Oe.get(Ee);if(Be!==void 0){if(B.currentProgram===Be&&B.lightsStateVersion===fe)return wl(y,Me),Be}else Me.uniforms=we.getUniforms(y),y.onBeforeCompile(Me,d),Be=we.acquireProgram(Me,Ee),Oe.set(Ee,Be),B.uniforms=Me.uniforms;const Pe=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pe.clippingPlanes=ne.uniform),wl(y,Me),B.needsLights=Qh(y),B.lightsStateVersion=fe,B.needsLights&&(Pe.ambientLightColor.value=N.state.ambient,Pe.lightProbe.value=N.state.probe,Pe.directionalLights.value=N.state.directional,Pe.directionalLightShadows.value=N.state.directionalShadow,Pe.spotLights.value=N.state.spot,Pe.spotLightShadows.value=N.state.spotShadow,Pe.rectAreaLights.value=N.state.rectArea,Pe.ltc_1.value=N.state.rectAreaLTC1,Pe.ltc_2.value=N.state.rectAreaLTC2,Pe.pointLights.value=N.state.point,Pe.pointLightShadows.value=N.state.pointShadow,Pe.hemisphereLights.value=N.state.hemi,Pe.directionalShadowMap.value=N.state.directionalShadowMap,Pe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Pe.spotShadowMap.value=N.state.spotShadowMap,Pe.spotLightMatrix.value=N.state.spotLightMatrix,Pe.spotLightMap.value=N.state.spotLightMap,Pe.pointShadowMap.value=N.state.pointShadowMap,Pe.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Be,B.uniformsList=null,Be}function bl(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=Cr.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function wl(y,I){const O=de.get(y);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function Kh(y,I,O,B,N){I.isScene!==!0&&(I=et),b.resetTextureUnits();const te=I.fog,fe=B.isMeshStandardMaterial?I.environment:null,Me=D===null?d.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ns,Ee=(B.isMeshStandardMaterial?F:S).get(B.envMap||fe),Oe=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Be=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Pe=!!O.morphAttributes.position,Ke=!!O.morphAttributes.normal,it=!!O.morphAttributes.color;let xt=Kn;B.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(xt=d.toneMapping);const mt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,$e=mt!==void 0?mt.length:0,Le=de.get(B),Pt=f.state.lights;if(oe===!0&&(be===!0||y!==E)){const Ft=y===E&&B.id===T;ne.setState(B,y,Ft)}let st=!1;B.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Pt.state.version||Le.outputColorSpace!==Me||N.isBatchedMesh&&Le.batching===!1||!N.isBatchedMesh&&Le.batching===!0||N.isBatchedMesh&&Le.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Le.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Le.instancing===!1||!N.isInstancedMesh&&Le.instancing===!0||N.isSkinnedMesh&&Le.skinning===!1||!N.isSkinnedMesh&&Le.skinning===!0||N.isInstancedMesh&&Le.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Le.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Le.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Le.instancingMorph===!1&&N.morphTexture!==null||Le.envMap!==Ee||B.fog===!0&&Le.fog!==te||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ne.numPlanes||Le.numIntersection!==ne.numIntersection)||Le.vertexAlphas!==Oe||Le.vertexTangents!==Be||Le.morphTargets!==Pe||Le.morphNormals!==Ke||Le.morphColors!==it||Le.toneMapping!==xt||Le.morphTargetsCount!==$e)&&(st=!0):(st=!0,Le.__version=B.version);let ln=Le.currentProgram;st===!0&&(ln=Vs(B,I,N));let bi=!1,qt=!1,hs=!1;const ut=ln.getUniforms(),$t=Le.uniforms;if(re.useProgram(ln.program)&&(bi=!0,qt=!0,hs=!0),B.id!==T&&(T=B.id,qt=!0),bi||E!==y){re.buffers.depth.getReversed()?(ae.copy(y.projectionMatrix),uf(ae),ff(ae),ut.setValue(w,"projectionMatrix",ae)):ut.setValue(w,"projectionMatrix",y.projectionMatrix),ut.setValue(w,"viewMatrix",y.matrixWorldInverse);const Vt=ut.map.cameraPosition;Vt!==void 0&&Vt.setValue(w,Je.setFromMatrixPosition(y.matrixWorld)),xe.logarithmicDepthBuffer&&ut.setValue(w,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ut.setValue(w,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,qt=!0,hs=!0)}if(N.isSkinnedMesh){ut.setOptional(w,N,"bindMatrix"),ut.setOptional(w,N,"bindMatrixInverse");const Ft=N.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),ut.setValue(w,"boneTexture",Ft.boneTexture,b))}N.isBatchedMesh&&(ut.setOptional(w,N,"batchingTexture"),ut.setValue(w,"batchingTexture",N._matricesTexture,b),ut.setOptional(w,N,"batchingIdTexture"),ut.setValue(w,"batchingIdTexture",N._indirectTexture,b),ut.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&ut.setValue(w,"batchingColorTexture",N._colorsTexture,b));const Qt=O.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&Fe.update(N,O,ln),(qt||Le.receiveShadow!==N.receiveShadow)&&(Le.receiveShadow=N.receiveShadow,ut.setValue(w,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&($t.envMap.value=Ee,$t.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&($t.envMapIntensity.value=I.environmentIntensity),qt&&(ut.setValue(w,"toneMappingExposure",d.toneMappingExposure),Le.needsLights&&$h($t,hs),te&&B.fog===!0&&he.refreshFogUniforms($t,te),he.refreshMaterialUniforms($t,B,k,ie,f.state.transmissionRenderTarget[y.id]),Cr.upload(w,bl(Le),$t,b)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Cr.upload(w,bl(Le),$t,b),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ut.setValue(w,"center",N.center),ut.setValue(w,"modelViewMatrix",N.modelViewMatrix),ut.setValue(w,"normalMatrix",N.normalMatrix),ut.setValue(w,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ft=B.uniformsGroups;for(let Vt=0,eo=Ft.length;Vt<eo;Vt++){const ni=Ft[Vt];U.update(ni,ln),U.bind(ni,ln)}}return ln}function $h(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Qh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,I,O){de.get(y.texture).__webglTexture=I,de.get(y.depthTexture).__webglTexture=O;const B=de.get(y);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){const O=de.get(y);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0};const eu=w.createFramebuffer();this.setRenderTarget=function(y,I=0,O=0){D=y,A=I,C=O;let B=!0,N=null,te=!1,fe=!1;if(y){const Ee=de.get(y);if(Ee.__useDefaultFramebuffer!==void 0)re.bindFramebuffer(w.FRAMEBUFFER,null),B=!1;else if(Ee.__webglFramebuffer===void 0)b.setupRenderTarget(y);else if(Ee.__hasExternalTextures)b.rebindTextures(y,de.get(y.texture).__webglTexture,de.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Pe=y.depthTexture;if(Ee.__boundDepthTexture!==Pe){if(Pe!==null&&de.has(Pe)&&(y.width!==Pe.image.width||y.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(y)}}const Oe=y.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(fe=!0);const Be=de.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Be[I])?N=Be[I][O]:N=Be[I],te=!0):y.samples>0&&b.useMultisampledRTT(y)===!1?N=de.get(y).__webglMultisampledFramebuffer:Array.isArray(Be)?N=Be[O]:N=Be,P.copy(y.viewport),Y.copy(y.scissor),z=y.scissorTest}else P.copy(Te).multiplyScalar(k).floor(),Y.copy(ke).multiplyScalar(k).floor(),z=nt;if(O!==0&&(N=eu),re.bindFramebuffer(w.FRAMEBUFFER,N)&&B&&re.drawBuffers(y,N),re.viewport(P),re.scissor(Y),re.setScissorTest(z),te){const Ee=de.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ee.__webglTexture,O)}else if(fe){const Ee=de.get(y.texture),Oe=I;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ee.__webglTexture,O,Oe)}else if(y!==null&&O!==0){const Ee=de.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ee.__webglTexture,O)}T=-1},this.readRenderTargetPixels=function(y,I,O,B,N,te,fe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=de.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me){re.bindFramebuffer(w.FRAMEBUFFER,Me);try{const Ee=y.texture,Oe=Ee.format,Be=Ee.type;if(!xe.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-B&&O>=0&&O<=y.height-N&&w.readPixels(I,O,B,N,Ge.convert(Oe),Ge.convert(Be),te)}finally{const Ee=D!==null?de.get(D).__webglFramebuffer:null;re.bindFramebuffer(w.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(y,I,O,B,N,te,fe){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=de.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me){const Ee=y.texture,Oe=Ee.format,Be=Ee.type;if(!xe.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=y.width-B&&O>=0&&O<=y.height-N){re.bindFramebuffer(w.FRAMEBUFFER,Me);const Pe=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Pe),w.bufferData(w.PIXEL_PACK_BUFFER,te.byteLength,w.STREAM_READ),w.readPixels(I,O,B,N,Ge.convert(Oe),Ge.convert(Be),0);const Ke=D!==null?de.get(D).__webglFramebuffer:null;re.bindFramebuffer(w.FRAMEBUFFER,Ke);const it=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await hf(w,it,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Pe),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,te),w.deleteBuffer(Pe),w.deleteSync(it),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,I=null,O=0){y.isTexture!==!0&&(hi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,y=arguments[1]);const B=Math.pow(2,-O),N=Math.floor(y.image.width*B),te=Math.floor(y.image.height*B),fe=I!==null?I.x:0,Me=I!==null?I.y:0;b.setTexture2D(y,0),w.copyTexSubImage2D(w.TEXTURE_2D,O,0,0,fe,Me,N,te),re.unbindTexture()};const tu=w.createFramebuffer(),nu=w.createFramebuffer();this.copyTextureToTexture=function(y,I,O=null,B=null,N=0,te=null){y.isTexture!==!0&&(hi("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,y=arguments[1],I=arguments[2],te=arguments[3]||0,O=null),te===null&&(N!==0?(hi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=N,N=0):te=0);let fe,Me,Ee,Oe,Be,Pe,Ke,it,xt;const mt=y.isCompressedTexture?y.mipmaps[te]:y.image;if(O!==null)fe=O.max.x-O.min.x,Me=O.max.y-O.min.y,Ee=O.isBox3?O.max.z-O.min.z:1,Oe=O.min.x,Be=O.min.y,Pe=O.isBox3?O.min.z:0;else{const Qt=Math.pow(2,-N);fe=Math.floor(mt.width*Qt),Me=Math.floor(mt.height*Qt),y.isDataArrayTexture?Ee=mt.depth:y.isData3DTexture?Ee=Math.floor(mt.depth*Qt):Ee=1,Oe=0,Be=0,Pe=0}B!==null?(Ke=B.x,it=B.y,xt=B.z):(Ke=0,it=0,xt=0);const $e=Ge.convert(I.format),Le=Ge.convert(I.type);let Pt;I.isData3DTexture?(b.setTexture3D(I,0),Pt=w.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(b.setTexture2DArray(I,0),Pt=w.TEXTURE_2D_ARRAY):(b.setTexture2D(I,0),Pt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);const st=w.getParameter(w.UNPACK_ROW_LENGTH),ln=w.getParameter(w.UNPACK_IMAGE_HEIGHT),bi=w.getParameter(w.UNPACK_SKIP_PIXELS),qt=w.getParameter(w.UNPACK_SKIP_ROWS),hs=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,mt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,mt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Oe),w.pixelStorei(w.UNPACK_SKIP_ROWS,Be),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Pe);const ut=y.isDataArrayTexture||y.isData3DTexture,$t=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){const Qt=de.get(y),Ft=de.get(I),Vt=de.get(Qt.__renderTarget),eo=de.get(Ft.__renderTarget);re.bindFramebuffer(w.READ_FRAMEBUFFER,Vt.__webglFramebuffer),re.bindFramebuffer(w.DRAW_FRAMEBUFFER,eo.__webglFramebuffer);for(let ni=0;ni<Ee;ni++)ut&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,de.get(y).__webglTexture,N,Pe+ni),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,de.get(I).__webglTexture,te,xt+ni)),w.blitFramebuffer(Oe,Be,fe,Me,Ke,it,fe,Me,w.DEPTH_BUFFER_BIT,w.NEAREST);re.bindFramebuffer(w.READ_FRAMEBUFFER,null),re.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(N!==0||y.isRenderTargetTexture||de.has(y)){const Qt=de.get(y),Ft=de.get(I);re.bindFramebuffer(w.READ_FRAMEBUFFER,tu),re.bindFramebuffer(w.DRAW_FRAMEBUFFER,nu);for(let Vt=0;Vt<Ee;Vt++)ut?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Qt.__webglTexture,N,Pe+Vt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Qt.__webglTexture,N),$t?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ft.__webglTexture,te,xt+Vt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ft.__webglTexture,te),N!==0?w.blitFramebuffer(Oe,Be,fe,Me,Ke,it,fe,Me,w.COLOR_BUFFER_BIT,w.NEAREST):$t?w.copyTexSubImage3D(Pt,te,Ke,it,xt+Vt,Oe,Be,fe,Me):w.copyTexSubImage2D(Pt,te,Ke,it,Oe,Be,fe,Me);re.bindFramebuffer(w.READ_FRAMEBUFFER,null),re.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else $t?y.isDataTexture||y.isData3DTexture?w.texSubImage3D(Pt,te,Ke,it,xt,fe,Me,Ee,$e,Le,mt.data):I.isCompressedArrayTexture?w.compressedTexSubImage3D(Pt,te,Ke,it,xt,fe,Me,Ee,$e,mt.data):w.texSubImage3D(Pt,te,Ke,it,xt,fe,Me,Ee,$e,Le,mt):y.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,te,Ke,it,fe,Me,$e,Le,mt.data):y.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,te,Ke,it,mt.width,mt.height,$e,mt.data):w.texSubImage2D(w.TEXTURE_2D,te,Ke,it,fe,Me,$e,Le,mt);w.pixelStorei(w.UNPACK_ROW_LENGTH,st),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ln),w.pixelStorei(w.UNPACK_SKIP_PIXELS,bi),w.pixelStorei(w.UNPACK_SKIP_ROWS,qt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,hs),te===0&&I.generateMipmaps&&w.generateMipmap(Pt),re.unbindTexture()},this.copyTextureToTexture3D=function(y,I,O=null,B=null,N=0){return y.isTexture!==!0&&(hi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,y=arguments[2],I=arguments[3],N=arguments[4]||0),hi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,I,O,B,N)},this.initRenderTarget=function(y){de.get(y).__webglFramebuffer===void 0&&b.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),re.unbindTexture()},this.resetState=function(){A=0,C=0,D=null,re.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const Oo={type:"change"},ol={type:"start"},al={type:"end"},Bc=1e-6,tt={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},vr=new Q,qn=new Q,x0=new R,xr=new R,Bo=new R,ki=new Ei,zc=new R,Mr=new R,zo=new R,Sr=new R;class M0 extends Nd{constructor(e,t=null){super(e,t),this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.state=tt.NONE,this.keyState=tt.NONE,this.target=new R,this._lastPosition=new R,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new R,this._movePrev=new Q,this._moveCurr=new Q,this._lastAxis=new R,this._zoomStart=new Q,this._zoomEnd=new Q,this._panStart=new Q,this._panEnd=new Q,this._pointers=[],this._pointerPositions={},this._onPointerMove=y0.bind(this),this._onPointerDown=S0.bind(this),this._onPointerUp=E0.bind(this),this._onPointerCancel=T0.bind(this),this._onContextMenu=L0.bind(this),this._onMouseWheel=P0.bind(this),this._onKeyDown=w0.bind(this),this._onKeyUp=b0.bind(this),this._onTouchStart=D0.bind(this),this._onTouchMove=U0.bind(this),this._onTouchEnd=I0.bind(this),this._onMouseDown=A0.bind(this),this._onMouseMove=R0.bind(this),this._onMouseUp=C0.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,t!==null&&(this.connect(),this.handleResize()),this.update()}connect(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}handleResize(){const e=this.domElement.getBoundingClientRect(),t=this.domElement.ownerDocument.documentElement;this.screen.left=e.left+window.pageXOffset-t.clientLeft,this.screen.top=e.top+window.pageYOffset-t.clientTop,this.screen.width=e.width,this.screen.height=e.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>Bc&&(this.dispatchEvent(Oo),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera?(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>Bc||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(Oo),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type.")}reset(){this.state=tt.NONE,this.keyState=tt.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(Oo),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(qn.copy(this._panEnd).sub(this._panStart),qn.lengthSq()){if(this.object.isOrthographicCamera){const e=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,t=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;qn.x*=e,qn.y*=t}qn.multiplyScalar(this._eye.length()*this.panSpeed),xr.copy(this._eye).cross(this.object.up).setLength(qn.x),xr.add(x0.copy(this.object.up).setLength(qn.y)),this.object.position.add(xr),this.target.add(xr),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(qn.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){Sr.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let e=Sr.length();e?(this._eye.copy(this.object.position).sub(this.target),zc.copy(this._eye).normalize(),Mr.copy(this.object.up).normalize(),zo.crossVectors(Mr,zc).normalize(),Mr.setLength(this._moveCurr.y-this._movePrev.y),zo.setLength(this._moveCurr.x-this._movePrev.x),Sr.copy(Mr.add(zo)),Bo.crossVectors(Sr,this._eye).normalize(),e*=this.rotateSpeed,ki.setFromAxisAngle(Bo,e),this._eye.applyQuaternion(ki),this.object.up.applyQuaternion(ki),this._lastAxis.copy(Bo),this._lastAngle=e):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),ki.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(ki),this.object.up.applyQuaternion(ki)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let e;this.state===tt.TOUCH_ZOOM_PAN?(e=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera?(this.object.zoom=Nl.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(e=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,e!==1&&e>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera?(this.object.zoom=Nl.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(e,t){return vr.set((e-this.screen.left)/this.screen.width,(t-this.screen.top)/this.screen.height),vr}_getMouseOnCircle(e,t){return vr.set((e-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-t))/this.screen.width),vr}_addPointer(e){this._pointers.push(e)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId==e.pointerId){this._pointers.splice(t,1);return}}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Q,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[t.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}}function S0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i))}function y0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function E0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchEnd(i):this._onMouseUp(),this._removePointer(i),this._pointers.length===0&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp)))}function T0(i){this._removePointer(i)}function b0(){this.enabled!==!1&&(this.keyState=tt.NONE,window.addEventListener("keydown",this._onKeyDown))}function w0(i){this.enabled!==!1&&(window.removeEventListener("keydown",this._onKeyDown),this.keyState===tt.NONE&&(i.code===this.keys[tt.ROTATE]&&!this.noRotate?this.keyState=tt.ROTATE:i.code===this.keys[tt.ZOOM]&&!this.noZoom?this.keyState=tt.ZOOM:i.code===this.keys[tt.PAN]&&!this.noPan&&(this.keyState=tt.PAN)))}function A0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xi.DOLLY:this.state=tt.ZOOM;break;case Xi.ROTATE:this.state=tt.ROTATE;break;case Xi.PAN:this.state=tt.PAN;break;default:this.state=tt.NONE}const t=this.keyState!==tt.NONE?this.keyState:this.state;t===tt.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY)),this._movePrev.copy(this._moveCurr)):t===tt.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(i.pageX,i.pageY)),this._zoomEnd.copy(this._zoomStart)):t===tt.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(i.pageX,i.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent(ol)}function R0(i){const e=this.keyState!==tt.NONE?this.keyState:this.state;e===tt.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY))):e===tt.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(i.pageX,i.pageY)):e===tt.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(i.pageX,i.pageY))}function C0(){this.state=tt.NONE,this.dispatchEvent(al)}function P0(i){if(this.enabled!==!1&&this.noZoom!==!0){switch(i.preventDefault(),i.deltaMode){case 2:this._zoomStart.y-=i.deltaY*.025;break;case 1:this._zoomStart.y-=i.deltaY*.01;break;default:this._zoomStart.y-=i.deltaY*25e-5;break}this.dispatchEvent(ol),this.dispatchEvent(al)}}function L0(i){this.enabled!==!1&&i.preventDefault()}function D0(i){switch(this._trackPointer(i),this._pointers.length){case 1:this.state=tt.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this.state=tt.TOUCH_ZOOM_PAN;const e=this._pointers[0].pageX-this._pointers[1].pageX,t=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(e*e+t*t);const n=(this._pointers[0].pageX+this._pointers[1].pageX)/2,s=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(n,s)),this._panEnd.copy(this._panStart);break}this.dispatchEvent(ol)}function U0(i){switch(this._trackPointer(i),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY));break;default:const e=this._getSecondPointerPosition(i),t=i.pageX-e.x,n=i.pageY-e.y;this._touchZoomDistanceEnd=Math.sqrt(t*t+n*n);const s=(i.pageX+e.x)/2,r=(i.pageY+e.y)/2;this._panEnd.copy(this._getMouseOnScreen(s,r));break}}function I0(i){switch(this._pointers.length){case 0:this.state=tt.NONE;break;case 1:this.state=tt.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=tt.TOUCH_ZOOM_PAN;for(let e=0;e<this._pointers.length;e++)if(this._pointers[e].pointerId!==i.pointerId){const t=this._pointerPositions[this._pointers[e].pointerId];this._moveCurr.copy(this._getMouseOnCircle(t.x,t.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(al)}class N0 extends Is{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new bd(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const u=r.parse(JSON.parse(a));t&&t(u)},n,s)}parse(e){return new F0(e)}}class F0{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],s=O0(e,t,this.data);for(let r=0,o=s.length;r<o;r++)n.push(...s[r].toShapes());return n}}function O0(i,e,t){const n=Array.from(i),s=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[];let a=0,u=0;for(let c=0;c<n.length;c++){const v=n[c];if(v===`
`)a=0,u-=r;else{const l=B0(v,s,a,u,t);a+=l.offsetX,o.push(l.path)}}return o}function B0(i,e,t,n,s){const r=s.glyphs[i]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}const o=new Id;let a,u,c,v,l,h,m,x;if(r.o){const M=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let _=0,f=M.length;_<f;)switch(M[_++]){case"m":a=M[_++]*e+t,u=M[_++]*e+n,o.moveTo(a,u);break;case"l":a=M[_++]*e+t,u=M[_++]*e+n,o.lineTo(a,u);break;case"q":c=M[_++]*e+t,v=M[_++]*e+n,l=M[_++]*e+t,h=M[_++]*e+n,o.quadraticCurveTo(l,h,c,v);break;case"b":c=M[_++]*e+t,v=M[_++]*e+n,l=M[_++]*e+t,h=M[_++]*e+n,m=M[_++]*e+t,x=M[_++]*e+n,o.bezierCurveTo(l,h,m,x,c,v);break}}return{offsetX:r.ha*e,path:o}}class ll extends nl{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const s=n.generateShapes(e,t.size);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}}const z0={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class qr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const k0=new Wr(-1,1,1,-1,0,1);class H0 extends on{constructor(){super(),this.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Lt([0,2,0,0,2,0],2))}}const V0=new H0;class G0{constructor(e){this._mesh=new rt(V0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,k0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class W0 extends qr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Mn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=dh.clone(e.uniforms),this.material=new Mn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new G0(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class kc extends qr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class X0 extends qr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class q0{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Q);this._width=n.width,this._height=n.height,t=new zn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:as}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new W0(z0),this.copyPass.material.blending=Nn,this.clock=new Ah}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),u=this.renderer.state.buffers.stencil;u.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),u.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}kc!==void 0&&(o instanceof kc?n=!0:o instanceof X0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Y0 extends qr{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ze}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}Ct.prototype.rotateAroundWorldAxis=(function(){var i=new Ei;return function(t,n,s){return i.setFromAxisAngle(n,s),this.applyQuaternion(i),this.position.sub(t),this.position.applyQuaternion(i),this.position.add(t),this}})();class Ih{constructor(){ft(this,"NbHeartTotal",0);ft(this,"NbArrowsPerFace",10);ft(this,"ArrowColor","0x6BFF77");ft(this,"ArrowsPoints",new Array);ft(this,"FaceLevels",new Array)}}let Ye=new Ih;class Z0{constructor(){ft(this,"arrowNo",0);ft(this,"segmentNo",0);ft(this,"type",se.Body);ft(this,"direction",Ue.Up);ft(this,"prev_direction",Ue.Up);ft(this,"faceNo",0);ft(this,"mesh",null);ft(this,"meshBack",null);ft(this,"x",0);ft(this,"y",0);ft(this,"inFace",!0)}}class j0{constructor(){ft(this,"arrowNo",0);ft(this,"segments",[]);ft(this,"done",0);ft(this,"movementOutFace",0);ft(this,"clonedArrowSegments")}}class J0{constructor(){ft(this,"faceNo",0);ft(this,"rotation",new R(0,0,0))}}let ci=7077751;const Yr=15658734,Ns=16739191,Zr=5592405,Nh=40;let Yn,Zn,Pn;const _e={width:0,height:0,editionMode:!1,editionModeCreation:!1,previousNormalizedX:null,previousNormalizedY:null,mouseDown:!1,showFaceId:!1,mouseDownLevel:-1,volume:!0,EditionMode_arrowSelected:-1};let _n=[],De=[],In=[],cl=[],vn=[],hl=[];const Ue=Object.freeze({Up:Symbol("Up"),Down:Symbol("Down"),Left:Symbol("Left"),Right:Symbol("Right")}),ze=Object.freeze({Front:Symbol("Front"),Back:Symbol("Back"),Up:Symbol("Up"),Down:Symbol("Down"),Left:Symbol("Left"),Right:Symbol("Right")}),se=Object.freeze({Tail:Symbol("Tail"),Head:Symbol("Head"),Angle:Symbol("Angle"),Body:Symbol("Body"),FromSide:Symbol("FromSide"),ToSide:Symbol("ToSide")}),K0=document.querySelector("canvas.webgl"),Mi=new gh,ko=new Rh,Hc=new Rh,Wt=new Ad,$0=await Wt.loadAsync("stars2.jpg"),Fs=await Wt.loadAsync("arrow/head.png"),Os=await Wt.loadAsync("arrow/body.png"),Bs=await Wt.loadAsync("arrow/tail.png"),zs=await Wt.loadAsync("arrow/angle.png"),Ua=await Wt.loadAsync("arrow/reflection.png"),Fh=await Wt.loadAsync("arrow/helper1.png"),Oh=await Wt.loadAsync("arrow/helper2.png"),vs=await Wt.loadAsync("arrow/square.png"),ul=await Wt.loadAsync("heart.png"),Bh=await Wt.loadAsync("refresh-ccw.png"),fl=await Wt.loadAsync("volume-2.png"),zh=await Wt.loadAsync("volume-x.png"),kh=await Wt.loadAsync("cadre.png"),Q0=new Audio("click.mp3"),ev=new Audio("levelSuccess.mp3"),tv=new Audio("levelFailure.mp3"),nv=new Audio("failure.mp3");function jr(i,e){i.transparent=!0,i.depthTest=!0,i.alphaTest=.01,i.color.setHex(e)}function Xt(i,e){i.transparent=!0,i.depthTest=!0,i.alphaTest=.01,i.roughness=.3,i.metalness=.2,i.metalnessMap=Ua,e!==void 0&&i.color.setHex(e),i.metalnessMap=Ua}function ks(i,e){i.transparent=!0,i.depthTest=!1,i.depthWrite=!1,i.alphaTest=.01,i.color.setHex(e)}function jt(i,e=!1){e==!1?(i.wrapS=Ln,i.wrapT=Ln):(i.wrapS=Es,i.wrapT=Es),i.repeat.set(10,10),i.offset.set(.5,.5),i.generateMipmaps=!0,i.needsUpdate=!0,i.minFilter=rn,i.maxFilter=rn,i.anisotropy=yt.capabilities.getMaxAnisotropy()}const ss=new Us({map:Fs,side:gt});Xt(ss);const Jr=new vt({map:Fs,side:Rt});jr(Jr,Zr);const Qn=new Us({map:Os,side:gt});Xt(Qn);const rs=new vt({map:Os,side:Rt});jr(rs,Zr);const os=new Us({map:Bs,side:gt});Xt(os);const Kr=new vt({map:Bs,side:Rt});jr(Kr,Zr);const At=new Us({map:zs,side:gt});Xt(At);const Nt=new vt({map:zs,side:Rt});jr(Nt,Zr);const Nr=new vt({map:Fh,side:gt});Xt(Nr);const Fr=new vt({map:Oh,side:gt});Xt(Fr);const Ia=new vt({map:Fs,side:gt});Xt(Ia,Yr);const Na=new vt({map:Os,side:gt});Xt(Na,Yr);const Fa=new vt({map:Bs,side:gt});Xt(Fa,Yr);const Oa=new vt({map:zs,side:gt});Xt(Oa,Yr);const Or=new vt({map:Fs,side:gt});Xt(Or,Ns);const Ps=new vt({map:Os,side:gt});Xt(Ps,Ns);const Br=new vt({map:Bs,side:gt});Xt(Br,Ns);const gi=new vt({map:zs,side:gt});Xt(gi,Ns);const Jt=new Us({map:null,color:7829367,roughness:.3,metalness:.2,transparent:!0,opacity:.7,depthTest:!0}),dl=new vt({map:ul,side:Gt});ks(dl,14495300);const Hh=new vt({map:ul,side:Gt});ks(Hh,11184810);const Vh=new vt({map:Bh,side:Gt});ks(Vh,8618495);const ys=new vt({map:fl,side:Gt});ks(ys,8618495);const Gh=new vt({map:kh,side:Gt});ks(Gh,Ns);const iv=new N0,pl=await iv.loadAsync("optimer_regular.typeface.json"),sv=[new Q(-.05,-.05),new Q(-.05,.05),new Q(.05,.05),new Q(.05,-.05)],rv=new $n(sv),ml=new ls(rv),Wh=new $n().moveTo(-.05,-.05).lineTo(-.05,.05).lineTo(.05,.05).lineTo(.05,-.05).closePath();let zt=new ls(Wh),St=new Vi;Mi.background=$0;Mi.add(St);const kt={width:window.innerWidth,height:window.innerHeight},_t=new Kt(75,kt.width/kt.height,.1,100);_t.position.z=window.devicePixelRatio*1.8;Mi.add(_t);const mn=new Wr(-kt.width/2,kt.width/2,kt.height/2,-kt.height/2,.1,10);mn.position.z=window.devicePixelRatio*1.4;const _i=new gh,$r=new Dd;$r.color=new Ze(13421772);$r.intensity=3;_t.add($r);mn.add($r.clone());const ov=new Ld(13421772,.9);ov.position.set(10,25,100);const gl=new Cd(16777215,1e3);gl.position.set(100/3,100/3,100/3);_t.add(gl);mn.add(gl.clone());const yt=new v0({canvas:K0,antialias:!0});yt.setSize(kt.width,kt.height);yt.transparent=!0;yt.alpha=!0;yt.setPixelRatio(Math.min(window.devicePixelRatio,2));yt.autoClear=!1;const Vc=yt.getDrawingBufferSize(new Q),av=new zn(Vc.width,Vc.height,{samples:4}),lv=new q0(yt,av),cv=new Y0(Mi,_t);lv.addPass(cv);const ei=new M0(_t,yt.domElement);ei.rotateSpeed=8*1.25/window.devicePixelRatio;ei.zoomSpeed=1.2;ei.noPan=!0;ei.maxDistance=3;ei.minDistance=.5;ei.dynamicDampingFactor=.1;dv();uv();fv();const hv=new Ah,Xh=()=>{hv.getElapsedTime(),ei.update(),yt.clear(),yt.render(Mi,_t),yt.clearDepth(),yt.render(_i,mn),window.requestAnimationFrame(Xh)};Tv();console.log("Use E key to enter in Edition mode");let wt=1,yr=Jh("Sound");yr!=""&&yr!=null&&yr!=null&&(yr=="true"?_e.volume=!0:_e.volume=!1);let Er=Jh("Level");Er!=""&&Er!=null&&Er!=null&&(wt=parseInt(Er),console.log("Level from cookie: "+wt));Yh(_e.volume);Ji(wt);Xh();function Gc(i){Pn&&(Pn.visible=i)}function uv(){Pn=new rt(zt,Gh),Pn.name="Cadre",Pn.renderOrder=99999,Pn.scale.set(10*kt.width,10*kt.height,1),Pn.visible=!1,_i.add(Pn)}function fv(){Yn=new rt(ml,ys),Yn.name="Volume",Yn.renderOrder=99999,Yn.position.set(kt.width/2-40,-kt.height/2+40,0),Yn.scale.set(250,250,1),hl.push(Yn),_i.add(Yn)}function dv(){Zn=new rt(ml,Vh),Zn.name="Reset",Zn.renderOrder=99999,Zn.position.set(kt.width/2-40,-kt.height/2+80,0),Zn.scale.set(250,250,1),hl.push(Zn),_i.add(Zn)}function pv(i,e){for(let t=0;t<vn.length;t++){const n=_i.getObjectByName("Heart"+t);n&&_i.remove(n)}vn=[];for(let t=0;t<e;t++){let n=new rt(ml,dl);n.name="Heart"+t,n.renderOrder=99999,vn.push(n),n.position.set(t*40-e/2*40+20,-kt.height/2+80,-1),n.scale.set(300,300,1),_i.add(n)}}function qh(i,e,t){for(let n=0;n<vn.length;n++)n<e?vn[n].material=dl:vn[n].material=Hh}function zr(i,e){const t=i.getObjectByName("LevelText");t&&i.remove(t);let n="Level "+e.toString();e==-1&&(n="You have finished all levels"),e==-2&&(n="Next Level"),e==-3&&(n="Retry Level");const s=new ll(n,{font:pl,size:.07,depth:.01,curveSegments:12});s.center();const r=new il;r.transparent=!0,r.depthTest=!1,r.depthWrite=!1;const o=new rt(s,r);o.name="LevelText";let a=.65;e<0&&(a=.1),o.position.set(0,a,-1),o.renderOrder=99999,i.add(o)}function _l(i,e){const t=i.getObjectByName("LineText");t&&i.remove(t);let n="";e>1?n=e.toString()+" Lines":e==1?n=e.toString()+" Line":n="Done";const s=new ll(n,{font:pl,size:.04,depth:.01,curveSegments:12});s.center();const r=new il;r.transparent=!0,r.depthTest=!1,r.depthWrite=!1;const o=new rt(s,r);o.name="LineText",o.renderOrder=99999,o.position.set(0,.55,-1),i.add(o)}function Ba(){St.visible=!1;for(const e of vn)e.visible=!1;const i=_t.getObjectByName("LineText");i&&(i.visible=!1)}function Yh(i){i?(ka("Sound","true"),ys.map=fl):(ka("Sound","false"),ys.map=zh),ys.needsUpdate=!0}function vl(i,e,t){const n=new j0;n.arrowNo=i,n.points=e;let s=0,r=Ue.Left,o=e[0].z,a=Ue.Left;for(let u=0;u<e.length-1;u++){let c=se.Body;if(e[u].z!=e[u+1].z)n.segments.push(jn(i,s++,e[u].z,o,e[u+1].z,se.FromSide,r,a,-1,e[u].x,e[u].y));else if(e[u].x==e[u+1].x)if(a=r,e[u].y>e[u+1].y){let v=!1;r=Ue.Up;for(let l=e[u].y;l>e[u+1].y;l--)l==e[u].y?(a===Ue.Left||a===Ue.Right)&&(c=se.Angle):c=se.Body,u>0&&e[u-1].z!=e[u].z&&v==!1&&(c=se.ToSide,v=!0),u==0&&l==e[u].y&&(c=se.Tail),u==e.length-2&&l==e[u+1].y&&(c=se.Head),n.segments.push(jn(i,s++,e[u].z,o,-1,c,r,a,-1,e[u].x,l)),a=r}else{let v=!1;r=Ue.Down;for(let l=e[u].y;l<e[u+1].y;l++)l==e[u].y?(a===Ue.Left||a===Ue.Right)&&(c=se.Angle):c=se.Body,u>0&&e[u-1].z!=e[u].z&&v==!1&&(c=se.ToSide,v=!0),u==0&&l==e[u].y&&(c=se.Tail),u==e.length-2&&l==e[u+1].y&&(c=se.Head),n.segments.push(jn(i,s++,e[u].z,o,-1,c,r,a,-1,e[u].x,l)),a=r}else if(e[u].y==e[u+1].y){if(a=r,e[u].x>e[u+1].x){let v=!1;r=Ue.Left;for(let l=e[u].x;l>e[u+1].x;l--)l==e[u].x?(a===Ue.Up||a===Ue.Down)&&(c=se.Angle):c=se.Body,u>0&&e[u-1].z!=e[u].z&&v==!1&&(c=se.ToSide,v=!0),u==0&&l==e[u].x&&(c=se.Tail),u==e.length-2&&l==e[u+1].x&&(c=se.Head),n.segments.push(jn(i,s++,e[u].z,o,-1,c,r,a,-1,l,e[u].y)),a=r}else{let v=!1;r=Ue.Right;for(let l=e[u].x;l<e[u+1].x;l++)l==e[u].x?(a===Ue.Up||a===Ue.Down)&&(c=se.Angle):c=se.Body,u>0&&e[u-1].z!=e[u].z&&v==!1&&(c=se.ToSide,v=!0),u==0&&l==e[u].x&&(c=se.Tail),u==e.length-2&&l==e[u+1].x&&(c=se.Head),n.segments.push(jn(i,s++,e[u].z,o,-1,c,r,a,-1,l,e[u].y)),a=r}a=r}o=e[u].z}e.length>1&&e[e.length-2].z!=e[e.length-1].z?n.segments.push(jn(i,s++,e[e.length-1].z,o,-1,se.FromSide,r,r,-1,e[e.length-1].x,e[e.length-1].y)):n.segments.push(jn(i,s++,e[e.length-1].z,o,-1,se.Head,r,r,-1,e[e.length-1].x,e[e.length-1].y)),n.points=e;for(let u=0;u<n.segments.length;u++){let c=n.segments[u],v=_n.find(L=>L.faceNo===c.faceNo);(v==null||v==null)&&console.error("can't find face for segment "+c.segmentNo);let l=-1,h,m,x,M,_,f,g=n.segments[u].mesh.position.x.toFixed(2)-0,p=n.segments[u].mesh.position.y.toFixed(2)-0,d=n.segments[u].mesh.position.z.toFixed(2)-0;u>0&&(h=n.segments[u-1].mesh.position.x.toFixed(2)-0,m=n.segments[u-1].mesh.position.y.toFixed(2)-0,x=n.segments[u-1].mesh.position.z.toFixed(2)-0),u<n.segments.length-1&&(M=n.segments[u+1].mesh.position.x.toFixed(2)-0,_=n.segments[u+1].mesh.position.y.toFixed(2)-0,f=n.segments[u+1].mesh.position.z.toFixed(2)-0),(c.type==se.FromSide||c.type==se.ToSide)&&u==n.segments.length-1&&(M=g,_=p,f=d),c.type==se.FromSide&&(g==h&&g>M&&p>m&&p<_&&d==x&&d==f&&(l=1),g<h&&g>M&&p==m&&p==_&&d==x&&d>f&&(l=1),g==h&&g==M&&p>m&&p<_&&d==x&&d>f&&(l=1),g==h&&g<M&&p==m&&p==_&&d>x&&d<f&&(l=1),g==h&&g>M&&p==m&&p==_&&d>x&&d<f&&(l=1),g>h&&g<M&&p==m&&p>_&&d==x&&d==f&&(l=1),g==h&&g>M&&p<m&&p<_&&d==x&&d==f&&(l=1),g==h&&g==M&&p==m&&p>_&&d>x&&d<f&&(l=1),g==h&&g==M&&p<m&&p>_&&d==x&&d>f&&(l=1),g==h&&g==M&&p==m&&p<_&&d>x&&d<f&&(l=1),g==h&&g>M&&p==m&&p==_&&d<x&&d<f&&(l=1),g>h&&g<M&&p==m&&p==_&&d==x&&d>f&&(l=1),g==h&&g==M&&p==m&&p>_&&d<x&&d<f&&(l=1),g==h&&g>M&&p>m&&p<_&&d==x&&d>f&&(l=1),g==h&&g>M&&p>m&&p<_&&d==x&&d<f&&(l=1),g==h&&g<M&&p==m&&p>_&&d>x&&d<f&&(l=1),g==h&&g<M&&p<m&&p>_&&d==x&&d>f&&(l=1),g<h&&g>M&&p==m&&p<_&&d==x&&d==f&&(l=1),g>h&&g<M&&p==m&&p>_&&d==x&&d>f&&(l=1),g<h&&g>M&&p==m&&p==_&&d==x&&d<f&&(l=1),g<h&&g>M&&p==m&&p>_&&d==x&&d==f&&(l=1),g>h&&g<M&&p==m&&p==_&&d==x&&d<f&&(l=1),g<h&&g>M&&p==m&&p>_&&d==x&&d==f&&(l=1),g==h&&g==M&&p>m&&p<_&&d==x&&d<f&&(l=1),g==h&&g<M&&p==m&&p==_&&d<x&&d>f&&(l=1),g==h&&g==M&&p==m&&p<_&&d<x&&d>f&&(l=1),g>h&&g<M&&p==m&&p<_&&d==x&&d==f&&(l=1),g==h&&g<M&&p<m&&p>_&&d==x&&d==f&&(l=1),g==h&&g>M&&p<m&&p>_&&d==x&&d==f&&(l=1),g==h&&g==M&&p==m&&p>_&&d<x&&d>f&&(l=1),g==h&&g<M&&p>m&&p<_&&d==x&&d==f&&(l=1),g==h&&g>M&&p==m&&p==_&&d<x&&d>f&&(l=1),g==h&&g==M&&p<m&&p>_&&d==x&&d<f&&(l=1),g<h&&g>M&&p==m&&p<_&&d==x&&d>f&&(l=1),g==h&&g==M&&p<m&&p>_&&d<x&&d>f&&(l=1),g==h&&g>M&&p<m&&p>_&&d==x&&d<f&&(l=1),g==h&&g>M&&p==m&&p>_&&d>x&&d<f&&(l=1)),c.type==se.ToSide&&(g>h&&g<M&&p<m&&p==_&&d==x&&d==f&&(l=1),g==h&&g==M&&p>m&&p==_&&d>x&&d<f&&(l=1),g>h&&g==M&&p==m&&p==_&&d>x&&d<f&&(l=1),g>h&&g==M&&p>m&&p<_&&d==x&&d==f&&(l=1),g==h&&g==M&&p<m&&p>_&&d<x&&d==f&&(l=1),g<h&&g>M&&p==m&&p==_&&d<x&&d==f&&(l=1),g>h&&g<M&&p>m&&p==_&&d==x&&d==f&&(l=1),g<h&&g==M&&p==m&&p==_&&d<x&&d>f&&(l=1),g>h&&g<M&&p==m&&p==_&&d>x&&d==f&&(l=1),g<h&&g>M&&p>m&&p==_&&d==x&&d==f&&(l=1),g==h&&g==M&&p>m&&p==_&&d<x&&d>f&&(l=1),g>h&&g==M&&p<m&&p>_&&d==x&&d==f&&(l=1),g<h&&g==M&&p<m&&p>_&&d==x&&d==f&&(l=1),g>h&&g==M&&p<m&&p<_&&d==x&&d==f&&(l=1),g<h&&g>M&&p<m&&p==_&&d==x&&d==f&&(l=1),g==h&&g==M&&p<m&&p>_&&d>x&&d==f&&(l=1),g==h&&g==M&&p<m&&p==_&&d<x&&d>f&&(l=1),g==h&&g==M&&p>m&&p<_&&d>x&&d==f&&(l=1),g<h&&g>M&&p==m&&p==_&&d>x&&d==f&&(l=1),g>h&&g==M&&p==m&&p==_&&d<x&&d>f&&(l=1),g>h&&g==M&&p==m&&p==_&&d<x&&d<f&&(l=1),g<h&&g>M&&p>m&&p==_&&d<x&&d==f&&(l=1),g>h&&g==M&&p<m&&p>_&&d>x&&d==f&&(l=1),g>h&&g<M&&p<m&&p==_&&d<x&&d==f&&(l=1),g<h&&g==M&&p>m&&p<_&&d==x&&d==f&&(l=1),g>h&&g<M&&p==m&&p==_&&d<x&&d==f&&(l=1),g<h&&g<M&&p==m&&p==_&&d>x&&d==f&&(l=1),g==h&&g==M&&p>m&&p<_&&d<x&&d==f&&(l=1),g==h&&g==M&&p<m&&p==_&&d>x&&d<f&&(l=1),g==h&&g==M&&p<m&&p<_&&d>x&&d==f&&(l=1),g<h&&g==M&&p<m&&p==_&&d>x&&d<f&&(l=1),g==h&&g==M&&p>m&&p==_&&d<x&&d<f&&(l=1),g>h&&g==M&&p>m&&p==_&&d<x&&d>f&&(l=1),g<h&&g==M&&p==m&&p==_&&d>x&&d<f&&(l=1),g==h&&g==M&&p>m&&p<_&&d>x&&d<f&&(l=1)),c.type==se.FromSide&&(c.faceDirection==ze.Right&&(g==h&&g-M<0&&p-m<0&&p==_&&d==x&&d-f>0&&(l=5),g-h>0&&g-M>0&&p-m<0&&p==_&&d==x&&d-f>0&&(l=5),g==h&&g-M>0&&p==m&&p-_>0&&d-x<0&&d==f&&(l=4),g==h&&g-M>0&&p==m&&p-_<0&&d-x>0&&d==f&&(l=5),g==h&&g-M>0&&p-m<0&&p==_&&d==x&&d-f>0&&(l=5),g==h&&g-M>0&&p-m<0&&p==_&&d==x&&d-f<0&&(l=3),g-h>0&&g-M>0&&p==m&&p-_>0&&d-x>0&&d==f&&(l=6),g==h&&g-M>0&&p==m&&p-_<0&&d-x<0&&d==f&&(l=3),g==h&&g-M>0&&p-m>0&&p==_&&d==x&&d-f<0&&(l=4),g==h&&g-M<0&&p==m&&p-_>0&&d-x<0&&d==f&&(l=4),g==h&&g-M>0&&p==m&&p-_>0&&d-x>0&&d==f&&(l=6),g==h&&g-M>0&&p-m>0&&p==_&&d==x&&d-f>0&&(l=6),g-h>0&&g-M>0&&p-m>0&&p==_&&d==x&&d-f<0&&(l=4)),c.faceDirection==ze.Front&&(g==h&&g-M<0&&p-m<0&&p==_&&d==x&&d-f>0&&(l=5),g-h<0&&g==M&&p==m&&p-_<0&&d==x&&d-f>0&&(l=5),g-h>0&&g==M&&p==m&&p-_<0&&d-x>0&&d-f>0&&(l=3),g==h&&g-M<0&&p-m>0&&p==_&&d==x&&d-f>0&&(l=6),g-h<0&&g==M&&p==m&&p-_>0&&d==x&&d-f>0&&(l=6),g-h>0&&g==M&&p==m&&p-_<0&&d==x&&d-f>0&&(l=3),g==h&&g-M>0&&p-m<0&&p==_&&d==x&&d-f>0&&(l=3),g==h&&g-M<0&&p-m<0&&p==_&&d-x>0&&d-f>0&&(l=5),g-h>0&&g==M&&p==m&&p-_>0&&d==x&&d-f>0&&(l=4),g-h<0&&g==M&&p==m&&p-_<0&&d-x>0&&d-f>0&&(l=5),g==h&&g-M>0&&p-m>0&&p==_&&d==x&&d-f>0&&(l=4)),c.faceDirection==ze.Up&&(g-h>0&&g==M&&p==m&&p-_<0&&d==x&&d-f<0&&(l=5),g==h&&g-M<0&&p==m&&p-_>0&&d-x>0&&d==f&&(l=4),g==h&&g-M<0&&p==m&&p-_>0&&d-x<0&&d==f&&(l=3),g-h<0&&g==M&&p==m&&p-_>0&&d==x&&d-f<0&&(l=3),g==h&&g-M>0&&p==m&&p-_>0&&d-x>0&&d==f&&(l=6),g==h&&g-M>0&&p==m&&p-_>0&&d-x<0&&d==f&&(l=5),g-h>0&&g==M&&p==m&&p-_>0&&d==x&&d-f<0&&(l=5),g-h>0&&g==M&&p==m&&p-_>0&&d==x&&d-f>0&&(l=6),g==h&&g-M<0&&p-m>0&&p-_>0&&d-x>0&&d==f&&(l=4),g-h>0&&g==M&&p-m>0&&p-_>0&&d==x&&d-f>0&&(l=6),g-h<0&&g==M&&p==m&&p-_>0&&d==x&&d-f>0&&(l=4),g==h&&g-M<0&&p==m&&p-_>0&&d-x<0&&d-f<0&&(l=3)),c.faceDirection==ze.Back&&(g-h>0&&g==M&&p==m&&p-_<0&&d==x&&d-f<0&&(l=4),g-h<0&&g==M&&p==m&&p-_>0&&d==x&&d-f>0&&(l=5),g==h&&g-M<0&&p-m<0&&p==_&&d==x&&d-f>0&&(l=6),g==h&&g-M<0&&p-m>0&&p==_&&d==x&&d-f<0&&(l=5),g==h&&g-M>0&&p-m<0&&p==_&&d==x&&d-f<0&&(l=4),g==h&&g-M>0&&p-m>0&&p==_&&d==x&&d-f<0&&(l=3),g-h>0&&g==M&&p==m&&p-_>0&&d==x&&d-f<0&&(l=3),g==h&&g-M<0&&p-m<0&&p==_&&d==x&&d-f<0&&(l=6),g==h&&g-M>0&&p-m<0&&p==_&&d-x<0&&d-f<0&&(l=4),g-h<0&&g==M&&p==m&&p-_>0&&d==x&&d-f<0&&(l=5)),c.faceDirection==ze.Down&&(g-h<0&&g==M&&p==m&&p-_<0&&d==x&&d-f<0&&(l=5),g-h<0&&g==M&&p==m&&p-_>0&&d==x&&d-f>0&&(l=6),g==h&&g-M<0&&p==m&&p-_>0&&d-x>0&&d==f&&(l=6),g==h&&g-M>0&&p==m&&p-_<0&&d-x<0&&d==f&&(l=3),g-h>0&&g==M&&p==m&&p-_<0&&d==x&&d-f<0&&(l=3),g==h&&g-M<0&&p==m&&p-_<0&&d-x>0&&d==f&&(l=6),g-h>0&&g==M&&p==m&&p-_<0&&d==x&&d-f>0&&(l=4),g==h&&g-M>0&&p==m&&p-_<0&&d-x>0&&d==f&&(l=4),g==h&&g-M<0&&p==m&&p-_>0&&d-x<0&&d==f&&(l=5),g==h&&g-M<0&&p==m&&p-_<0&&d-x<0&&d==f&&(l=5),g==h&&g-M>0&&p-m<0&&p-_<0&&d-x>0&&d==f&&(l=4),g-h<0&&g==M&&p==m&&p-_<0&&d==x&&d-f>0&&(l=6)),c.faceDirection==ze.Left&&(g==h&&g-M<0&&p==m&&p-_>0&&d-x>0&&d==f&&(l=4),g==h&&g-M<0&&p-m<0&&p==_&&d==x&&d-f>0&&(l=3),g==h&&g-M<0&&p==m&&p-_>0&&d-x<0&&d==f&&(l=6),g==h&&g-M>0&&p==m&&p-_>0&&d-x>0&&d==f&&(l=4),g==h&&g-M<0&&p-m<0&&p==_&&d==x&&d-f<0&&(l=5),g==h&&g-M<0&&p-m>0&&p==_&&d==x&&d-f<0&&(l=6),g-h<0&&g-M<0&&p-m>0&&p==_&&d==x&&d-f>0&&(l=4),g==h&&g-M<0&&p-m>0&&p==_&&d==x&&d-f>0&&(l=4),g-h<0&&g-M<0&&p==m&&p-_>0&&d-x<0&&d==f&&(l=6),g==h&&g-M>0&&p==m&&p-_<0&&d-x<0&&d==f&&(l=5),g==h&&g-M<0&&p==m&&p-_<0&&d-x>0&&d==f&&(l=3),g==h&&g-M<0&&p==m&&p-_<0&&d-x<0&&d==f&&(l=5))),c.type==se.ToSide&&(c.faceDirection==ze.Right&&(g-h>0&&g==M&&p-m>0&&p==_&&d==x&&d-f>0&&(l=6),g-h>0&&g==M&&p==m&&p-_<0&&d-x>0&&d==f&&(l=5),g-h>0&&g==M&&p-m<0&&p==_&&d==x&&d-f>0&&(l=5),g-h>0&&g==M&&p-m>0&&p==_&&d==x&&d-f<0&&(l=4),g-h>0&&g==M&&p==m&&p-_>0&&d-x>0&&d==f&&(l=6),g-h>0&&g==M&&p==m&&p-_<0&&d-x<0&&d==f&&(l=3),g-h>0&&g==M&&p==m&&p-_>0&&d-x<0&&d==f&&(l=4),g-h>0&&g==M&&p-m<0&&p==_&&d==x&&d-f<0&&(l=3),g-h<0&&g==M&&p-m>0&&p==_&&d==x&&d-f<0&&(l=4)),c.faceDirection==ze.Front&&(g==h&&g-M>0&&p-m>0&&p==_&&d-x>0&&d==f&&(l=4),g==h&&g-M<0&&p-m<0&&p==_&&d-x<0&&d==f&&(l=5),g==h&&g-M<0&&p-m<0&&p==_&&d-x>0&&d==f&&(l=5),g==h&&g-M<0&&p-m>0&&p==_&&d-x>0&&d==f&&(l=6),g-h>0&&g==M&&p==m&&p-_<0&&d-x>0&&d==f&&(l=3),g==h&&g-M>0&&p-m<0&&p==_&&d-x>0&&d==f&&(l=3),g-h<0&&g==M&&p==m&&p-_>0&&d-x>0&&d==f&&(l=6),g-h>0&&g==M&&p==m&&p-_>0&&d-x>0&&d==f&&(l=4),g-h<0&&g==M&&p==m&&p-_<0&&d-x>0&&d==f&&(l=5),g-h<0&&g-M>0&&p-m<0&&p==_&&d-x>0&&d==f&&(l=3)),c.faceDirection==ze.Up&&(g-h<0&&g==M&&p-m>0&&p==_&&d==x&&d-f<0&&(l=3),g==h&&g-M>0&&p-m>0&&p==_&&d-x>0&&d==f&&(l=6),g-h<0&&g==M&&p-m<0&&p==_&&d==x&&d-f>0&&(l=4),g==h&&g-M<0&&p-m>0&&p==_&&d-x>0&&d==f&&(l=4),g-h<0&&g==M&&p-m>0&&p==_&&d-x<0&&d-f>0&&(l=4),g==h&&g-M<0&&p-m>0&&p==_&&d-x<0&&d==f&&(l=3),g-h>0&&g==M&&p-m>0&&p==_&&d==x&&d-f>0&&(l=6),g==h&&g-M>0&&p-m>0&&p==_&&d-x<0&&d==f&&(l=5),g-h>0&&g==M&&p-m>0&&p==_&&d==x&&d-f<0&&(l=5),g-h<0&&g==M&&p-m>0&&p==_&&d==x&&d-f>0&&(l=4),g-h>0&&g==M&&p-m>0&&p==_&&d-x<0&&d-f<0&&(l=5)),c.faceDirection==ze.Back&&(g-h<0&&g==M&&p==m&&p-_>0&&d-x<0&&d==f&&(l=5),g==h&&g-M>0&&p-m<0&&p==_&&d-x<0&&d==f&&(l=4),g-h>0&&g==M&&p==m&&p-_>0&&d-x<0&&d==f&&(l=3),g==h&&g-M<0&&p-m>0&&p==_&&d-x<0&&d==f&&(l=5),g==h&&g-M>0&&p-m>0&&p==_&&d-x<0&&d==f&&(l=3),g-h>0&&g==M&&p==m&&p-_<0&&d-x<0&&d==f&&(l=4),g==h&&g-M<0&&p-m<0&&p==_&&d-x<0&&d==f&&(l=6),g==h&&g-M<0&&p-m>0&&p==_&&d-x<0&&d==f&&(l=5),g-h<0&&g==M&&p==m&&p-_<0&&d-x<0&&d==f&&(l=6)),c.faceDirection==ze.Down&&(g-h>0&&g==M&&p-m<0&&p==_&&d==x&&d-f>0&&(l=4),g-h<0&&g==M&&p-m<0&&p==_&&d==x&&d-f<0&&(l=5),g==h&&g-M<0&&p-m<0&&p==_&&d-x>0&&d==f&&(l=6),g==h&&g-M>0&&p-m<0&&p==_&&d-x<0&&d==f&&(l=3),g==h&&g-M>0&&p-m<0&&p==_&&d-x>0&&d==f&&(l=4),g==h&&g-M<0&&p-m<0&&p==_&&d-x<0&&d==f&&(l=5),g-h<0&&g==M&&p-m>0&&p==_&&d==x&&d-f<0&&(l=5),g-h<0&&g==M&&p-m>0&&p==_&&d==x&&d-f>0&&(l=6),g-h>0&&g==M&&p-m<0&&p==_&&d==x&&d-f<0&&(l=3),g-h<0&&g==M&&p-m<0&&p==_&&d==x&&d-f>0&&(l=6)),c.faceDirection==ze.Left&&(g-h<0&&g==M&&p-m>0&&p==_&&d==x&&d-f>0&&(l=4),g-h>0&&g==M&&p-m<0&&p==_&&d==x&&d-f>0&&(l=3),g-h<0&&g==M&&p-m<0&&p==_&&d==x&&d-f<0&&(l=5),g-h<0&&g==M&&p==m&&p-_>0&&d-x>0&&d==f&&(l=4),g-h<0&&g==M&&p-m>0&&p==_&&d==x&&d-f<0&&(l=6),g-h<0&&g==M&&p==m&&p-_<0&&d-x>0&&d==f&&(l=3),g-h<0&&g==M&&p-m<0&&p==_&&d==x&&d-f>0&&(l=3),g-h>0&&g-M>0&&p-m<0&&p==_&&d==x&&d-f>0&&(l=3),g-h<0&&g==M&&p==m&&p-_>0&&d-x<0&&d==f&&(l=6))),c.type==se.FromSide&&(u==n.segments.length-1&&(c.faceDirection==ze.Right&&(g-h>0&&p==m&&d-x<0&&(l=3),g-h>0&&p-m>0&&d==x&&(l=4),g-h>0&&p==m&&d-x>0&&(l=6),g-h>0&&p-m<0&&d==x&&(l=5)),c.faceDirection==ze.Front&&(g-h<0&&p==m&&d-x>0&&(l=6),g-h>0&&p==m&&d-x>0&&(l=3),g==h&&p-m>0&&d-x>0&&(l=4),g==h&&p-m<0&&d-x>0&&(l=5)),c.faceDirection==ze.Up&&(g==h&&p-m>0&&d-x<0&&(l=5),g-h>0&&p-m>0&&d==x&&(l=6),g-h<0&&p-m>0&&d==x&&(l=3),g==h&&p-m>0&&d-x>0&&(l=4)),c.faceDirection==ze.Back&&(g==h&&p-m>0&&d-x<0&&(l=5),g-h>0&&p==m&&d-x<0&&(l=3),g-h<0&&p==m&&d-x<0&&(l=6),g==h&&p-m<0&&d-x<0&&(l=4)),c.faceDirection==ze.Down&&(g-h>0&&p-m<0&&d==x&&(l=3),g-h<0&&p-m<0&&d==x&&(l=6),g==h&&p-m<0&&d-x>0&&(l=4),g==h&&p-m<0&&d-x<0&&(l=5)),c.faceDirection==ze.Left&&(g-h<0&&p==m&&d-x<0&&(l=6),g-h<0&&p-m>0&&d==x&&(l=4),g-h<0&&p==m&&d-x>0&&(l=3),g-h<0&&p-m<0&&d==x&&(l=5))),u==0&&(c.faceDirection==ze.Right&&(g-M>0&&p-_<0&&d==f&&(l=4),g-M>0&&p==_&&d-f<0&&(l=6),g-M>0&&p==_&&d-f>0&&(l=3),g-M>0&&p-_>0&&d==f&&(l=5)),c.faceDirection==ze.Front&&(g==M&&p-_<0&&d-f>0&&(l=4),g-M>0&&p==_&&d-f>0&&(l=6),g-M<0&&p==_&&d-f>0&&(l=3),g==M&&p-_>0&&d-f>0&&(l=5)),c.faceDirection==ze.Up&&(g==M&&p-_>0&&d-f>0&&(l=5),g-M>0&&p-_>0&&d==f&&(l=3),g-M<0&&p-_>0&&d==f&&(l=6),g==M&&p-_>0&&d-f<0&&(l=4),g-M<0&&p-_>0&&d-f<0&&(l=6)),c.faceDirection==ze.Back&&(g==M&&p-_<0&&d-f<0&&(l=5),g-M<0&&p==_&&d-f<0&&(l=3),g-M>0&&p==_&&d-f<0&&(l=6),g==M&&p-_>0&&d-f<0&&(l=4)),c.faceDirection==ze.Down&&(g-M<0&&p-_<0&&d==f&&(l=3),g==M&&p-_<0&&d-f<0&&(l=4),g-M>0&&p-_<0&&d==f&&(l=6),g==M&&p-_<0&&d-f>0&&(l=5)),c.faceDirection==ze.Left&&(g-M<0&&p-_<0&&d==f&&(l=4),g-M<0&&p==_&&d-f>0&&(l=6),g-M<0&&p==_&&d-f<0&&(l=3),g-M<0&&p-_>0&&d==f&&(l=5),g-M<0&&p-_<0&&d-f>0&&(l=4)))),(l==1||l==11)&&(c.mesh.material=Qn,l==11&&(c.mesh.material=Ps,console.log("RED!!!!")),c.meshBack&&(c.meshBack.material=rs),za(c),c.sideFixed=!0,c.sideFixedSubType=se.Body),(l==2||l==12)&&(c.mesh.material=Qn,l==12&&(c.mesh.material=Ps,console.log("RED!!!!")),c.meshBack&&(c.meshBack.material=rs),za(c),c.sideFixed=!0,c.sideFixedSubType=se.Body),(l==3||l==13)&&(c.mesh.material=At,l==13&&(c.mesh.material=gi,console.log("RED!!!!")),c.angleType=2,c.meshBack.material=Nt,c.mesh.rotation.z=v.rotation.z+Math.PI/2,c.meshBack.rotation.z=v.rotation.z+Math.PI/2,c.sideFixed=!0,c.sideFixedSubType=se.Angle,c.direction=Ue.Right,(v.direction==ze.Up||v.direction==ze.Back)&&(c.direction=Ue.Left),v.direction==ze.Down&&(c.direction=Ue.Right)),(l==4||l==14)&&(c.mesh.material=At,l==14&&(c.mesh.material=gi,console.log("RED!!!!")),c.angleType=2,c.meshBack.material=Nt,c.mesh.rotation.z=v.rotation.z-Math.PI,c.meshBack.rotation.z=v.rotation.z-Math.PI,c.sideFixed=!0,c.sideFixedSubType=se.Angle,c.direction=Ue.Up,(v.direction==ze.Up||v.direction==ze.Back)&&(c.direction=Ue.Down),v.direction==ze.Down&&(c.direction=Ue.Up)),(l==5||l==15)&&(c.mesh.material=At,l==15&&(c.mesh.material=gi,console.log("RED!!!!")),c.angleType=2,c.meshBack.material=Nt,c.mesh.rotation.z=v.rotation.z,c.meshBack.rotation.z=v.rotation.z,c.sideFixed=!0,c.sideFixedSubType=se.Angle,c.direction=Ue.Down,(v.direction==ze.Up||v.direction==ze.Back)&&(c.direction=Ue.Up),v.direction==ze.Down&&(c.direction=Ue.Down)),(l==6||l==16)&&(c.mesh.material=At,l==16&&(c.mesh.material=gi,console.log("RED!!!!")),c.angleType=2,c.meshBack.material=Nt,c.mesh.rotation.z=v.rotation.z-Math.PI/2,c.meshBack.rotation.z=v.rotation.z-+Math.PI/2,c.sideFixed=!0,c.sideFixedSubType=se.Angle,c.direction=Ue.Left,(v.direction==ze.Up||v.direction==ze.Back)&&(c.direction=Ue.Right),v.direction==ze.Down&&(c.direction=Ue.Left)),(c.type==se.FromSide||c.type==se.ToSide)&&(u==0&&(c.sideFixed=!0,c.mesh.material=os,l>10&&(c.mesh.material=Br),c.meshBack&&(c.meshBack.material=Kr),c.sideFixedSubType=se.Tail),u==n.segments.length-1&&(c.sideFixed=!0,c.mesh.material=ss,l>10&&(c.mesh.material=Or),c.meshBack&&(c.meshBack.material=Jr),c.sideFixedSubType=se.Head),l==-1&&console.log("!!!!!!!! MISSED SIDE FIXED IN !!!!!!!!! for arrow "+n.arrowNo+", segment "+c.segmentNo+" "+c.type.description))}for(let u=0;u<n.segments.length;u++){let c=n.segments[u];(c.type==se.FromSide||c.type==se.ToSide)&&(c.sideFixed==!1&&console.log("!!!!!!!! MISSED SIDE FIXED !!!!!!!!! for arrow "+n.arrowNo+", segment "+c.segmentNo+" "+c.type.description),c.sideFixed==null&&console.log("!!!!!!!! MISSED SIDE FIXED UNDEFINED !!!!!!!!! for arrow "+n.arrowNo+", segment "+c.segmentNo+" "+c.type.description))}De.push(n)}function za(i){i.direction===Ue.Right&&(i.mesh.rotation.z=Math.PI/2,i.meshBack&&(i.meshBack.rotation.z=Math.PI/2)),i.direction===Ue.Left&&(i.mesh.rotation.z=-Math.PI/2,i.meshBack&&(i.meshBack.rotation.z=-Math.PI/2)),i.direction===Ue.Up&&(i.mesh.rotation.z=Math.PI,i.meshBack&&(i.meshBack.rotation.z=Math.PI))}function mv(i,e,t,n){i.prev_direction===Ue.Right&&i.direction===Ue.Down?(i.mesh.material=At,i.angleType=2,i.meshBack.material=Nt,i.mesh.rotation.z=e.rotation.z-Math.PI,i.meshBack.rotation.z=e.rotation.z-Math.PI,t==-1&&(i.mesh.rotation.z=e.rotation.z+0,i.meshBack.rotation.z=e.rotation.z+0)):i.prev_direction===Ue.Down&&i.direction===Ue.Right?(i.mesh.material=At,i.angleType=1,i.meshBack.material=Nt,i.mesh.rotation.z=e.rotation.z+0,i.meshBack.rotation.z=e.rotation.z+0,t==-1&&(i.mesh.rotation.z=e.rotation.z-Math.PI,i.meshBack.rotation.z=e.rotation.z-Math.PI)):i.prev_direction===Ue.Right&&i.direction===Ue.Up?(i.mesh.material=At,i.angleType=1,i.meshBack.material=Nt,i.mesh.rotation.z=e.rotation.z+Math.PI/2*t,i.meshBack.rotation.z=e.rotation.z+Math.PI/2*t):i.prev_direction===Ue.Up&&i.direction===Ue.Right?(i.mesh.material=At,i.angleType=1,i.meshBack.material=Nt,i.mesh.rotation.z=e.rotation.z+3*Math.PI/2*t,i.meshBack.rotation.z=e.rotation.z+3*Math.PI/2*t):i.prev_direction===Ue.Up&&i.direction===Ue.Left?(i.mesh.material=At,i.angleType=1,i.meshBack.material=Nt,i.mesh.rotation.z=e.rotation.z+Math.PI,i.meshBack.rotation.z=e.rotation.z+Math.PI,t==-1&&(i.mesh.rotation.z=e.rotation.z+0,i.meshBack.rotation.z=e.rotation.z+0)):i.prev_direction===Ue.Left&&i.direction===Ue.Down?(i.mesh.material=At,i.angleType=1,i.meshBack.material=Nt,i.mesh.rotation.z=e.rotation.z+3*Math.PI/2*t,i.meshBack.rotation.z=e.rotation.z+3*Math.PI/2*t):i.prev_direction===Ue.Down&&i.direction===Ue.Left?(i.mesh.material=At,i.angleType=1,i.meshBack.material=Nt,i.mesh.rotation.z=e.rotation.z+Math.PI/2*t,i.meshBack.rotation.z=e.rotation.z+Math.PI/2*t):i.prev_direction===Ue.Left&&i.direction===Ue.Up?(i.mesh.material=At,i.angleType=1,i.meshBack.material=Nt,i.mesh.rotation.z=e.rotation.z+0,i.meshBack.rotation.z=e.rotation.z+0,t==-1&&(i.mesh.rotation.z=e.rotation.z+Math.PI,i.meshBack.rotation.z=e.rotation.z+Math.PI)):console.warn("angle not handled "+i.segmentNo+" "+i.prev_direction.description+"=>"+i.direction.description),i.mesh.material=At,i.angleType=1,i.meshBack.material=Nt}function gv(i,e,t,n){for(const s of De)for(const r of s.segments)if(r.faceNo===e&&r.x===t&&r.y===n)return console.log("Collision detected for arrow "+i+" at face "+e+" position ("+t+","+n+")"),!0;return!1}function Wc(i,e,t,n,s,r){i.segments.push(jn(e,n.segmentNo+1,n.faceNo,n.faceNo,-1,se.Head,n.direction,n.direction,-1,n.x+s,n.y+r)),St.remove(i.segments[0].mesh),St.remove(i.segments[0].meshBack);for(let u=0;u<In.length;u++)if(In[u]===i.segments[0].mesh){In.splice(u,1);break}i.segments.shift();let o=i.segments[i.segments.length-2];o.type=se.Body,o.mesh.material=Qn,o.meshBack.material=rs;let a=!0;for(const u of i.segments)u.inFace==!0&&(a=!1);a==!0&&(i.done==0&&(i.done=1,Ye.NbArrow--,_l(_t,Ye.NbArrow)),i.movementOutFace++)}function xl(i,e){for(const s of e.segments)St.remove(s.mesh),St.remove(s.meshBack),s.mesh=null,s.meshBack=null;let t=JSON.parse(e.clonedArrowPoints);const n=De.indexOf(e);n>-1&&De.splice(n,1),e=null,vl(i,t)}function Zh(i,e){for(const t of De)if(t.arrowNo===i)if(t.movementOutFace<20){let n=t.segments[t.segments.length-1];n==null&&console.error("MoveArrowSegments head is undefined for arrow "+i,t);let s=0,r=0;if(n.direction===Ue.Right&&(s=1,r=0),n.direction===Ue.Left&&(s=-1,r=0),n.direction===Ue.Up&&(s=0,r=-1),n.direction===Ue.Down&&(s=0,r=1),gv(i,n.faceNo,n.x+s,n.y+r)==!1)Wc(t,i,e,n,s,r),setTimeout(function(){Zh(i,e)},Nh);else{Wc(t,i,e,n,s,r),tn(i,2),Gc(!0),_e.volume==!0&&nv.play(),Ye.NbHeart--,qh(_t,Ye.NbHeart,Ye.NbHeartTotal),setTimeout(function(){xl(i,t),tn(i,2),Gc(!1),Ye.NbHeart<=0&&(console.log("Game Over"),_e.volume==!0&&tv.play(),setTimeout(function(){Ba(),zr(_t,-3),setTimeout(function(){Ji(wt)},1e3)},500))},300);break}}else{for(const s of t.segments)St.remove(s.mesh),St.remove(s.meshBack);t.segments=[],t.done=2;let n=0;for(const s of De)s.done!=2&&n++;n==0&&(console.log("All arrows have left the faces"),Ba(),wt++,_e.volume==!0&&ev.play(),Ji(wt,!0))}}function _v(i,e){tn(i,0);for(const t of De)if(t.arrowNo===i){t.clonedArrowPoints=JSON.stringify(t.points),t.originalSegmentLenth=t.segments.length,t.movementOutFace=0,setTimeout(function(){Zh(i,e)},Nh);break}}function vv(i,e){_e.volume==!0&&Q0.play(),tn(i,1),setTimeout(function(){_v(i,e)},100)}function tn(i,e){for(const t of De)if(t.arrowNo===i){for(const n of t.segments)e===2&&(n.type===se.Head?n.mesh.material=Or:n.type===se.Body?n.mesh.material=Ps:n.type===se.Tail?n.mesh.material=Br:n.type===se.Angle?n.mesh.material=gi:n.type===se.ToSide||n.type===se.FromSide?n.sideFixedSubType===se.Body?n.mesh.material=Ps:n.sideFixedSubType===se.Angle?n.mesh.material=gi:n.sideFixedSubType==se.Head?n.mesh.material=Or:n.sideFixedSubType==se.Tail&&(n.mesh.material=Br):console.error("setColorArrow unknown segment type "+n.type.description)),e===1&&(n.type===se.Head?n.mesh.material=Ia:n.type===se.Body?n.mesh.material=Na:n.type===se.Tail?n.mesh.material=Fa:n.type===se.Angle?n.mesh.material=Oa:n.type===se.ToSide||n.type===se.FromSide?n.sideFixedSubType===se.Body?n.mesh.material=Na:n.sideFixedSubType===se.Angle?n.mesh.material=Oa:n.sideFixedSubType==se.Head?n.mesh.material=Ia:n.sideFixedSubType==se.Tail&&(n.mesh.material=Fa):console.error("setColorArrow unknown segment type "+n.type.description)),e===0&&(n.type===se.Head?(n.mesh.material=ss,n.meshBack.material=Jr):n.type===se.Body?(n.mesh.material=Qn,n.meshBack.material=rs):n.type===se.Tail?(n.mesh.material=os,n.meshBack.material=Kr):n.type===se.Angle?n.angleType===1&&(n.mesh.material=At,n.meshBack.material=Nt):n.type===se.ToSide||n.type===se.FromSide?n.sideFixedSubType===se.Body?n.mesh.material=Qn:n.sideFixedSubType===se.Angle?n.mesh.material=At:n.sideFixedSubType==se.Head?n.mesh.material=ss:n.sideFixedSubType==se.Tail&&(n.mesh.material=os):console.error("setColorArrow unknown segment type "+n.type.description));break}}function Xc(i,e,t,n){i.points.push(new R(e,t,n)),i.clonedArrowPoints=JSON.stringify(i.points),xl(_e.EditionMode_arrowSelected,i)}function xv(i,e,t){for(var n=!1,s=0,r=t.length-1;s<t.length;r=s++){var o=t[s][0],a=t[s][1],u=t[r][0],c=t[r][1],v=a>e!=c>e&&i<(u-o)*(e-a)/(c-a)+o;v&&(n=!n)}return n}function jn(i,e,t,n,s,r,o,a,u,c,v,l){const h=new Z0;h.arrowNo=i,h.segmentNo=e,h.faceNo=t,h.prev_faceNo=n,h.next_faceNo=s,h.type=r,h.direction=o,h.prev_direction=a,h.next_direction=u,h.x=c,h.y=v;let m=_n.find(A=>A.faceNo===t);(m==null||m==null)&&console.error("can't find face for segment "+h.segmentNo);let x=_n.find(A=>A.faceNo===n);(x==null||x==null)&&console.error("can't find previous face for segment "+h.segmentNo);let M;if(s!=-1&&(M=_n.find(A=>A.faceNo===s),(M==null||M==null)&&console.error("can't find next face for segment "+h.segmentNo)),h.faceDirection=m.direction,h.prev_faceDirection=x.direction,h.next_faceDirection=M?M.direction:void 0,r===se.Head?(h.mesh=new rt(zt,ss),h.meshBack=new rt(zt,Jr)):r===se.Body?(h.mesh=new rt(zt,Qn),h.meshBack=new rt(zt,rs)):r===se.Tail?(h.mesh=new rt(zt,os),h.meshBack=new rt(zt,Kr)):r===se.Angle||(r==se.ToSide?(h.mesh=new rt(zt,Nr),h.meshBack=new rt(zt,Nr)):r==se.FromSide&&(h.mesh=new rt(zt,Fr),h.meshBack=new rt(zt,Fr))),(r===se.Head||r===se.Tail||r===se.Body)&&za(h),r===se.Angle){h.mesh=new rt(zt,At),h.meshBack=new rt(zt,Nt);let A=1;m.direction==ze.Up&&(A=-1),mv(h,m,A),h.mesh===null&&console.error("Error creating angle segment "+h.segmentNo+" "+a.description+"=>"+o.description)}let _=jh(m.points);const f=.05*10/Ye.NbArrowsPerFace,g=.05*10/Ye.NbArrowsPerFace;let p=_.x+c/Ye.NbArrowsPerFace+f,d=-_.y-(v+1)/Ye.NbArrowsPerFace+g,L=0;return m.position.x!=0&&(L=m.position.x),m.position.y!=0&&(L=m.position.y),m.position.z!=0&&(L=m.position.z),L=Math.abs(L),h.mesh.position.set(p,d,L),h.meshBack&&h.meshBack.position.set(p,d,L),h.inFace=xv(p,d,m.points.map(A=>[A.x,A.y])),h.mesh.rotateAroundWorldAxis(new R(0,0,0),new R(1,0,0),m.rotation.x),h.mesh.rotateAroundWorldAxis(new R(0,0,0),new R(0,1,0),m.rotation.y),h.mesh.rotateAroundWorldAxis(new R(0,0,0),new R(0,0,1),m.rotation.z),h.mesh.userData.name="arrow "+h.arrowNo+", segment "+h.segmentNo+", type "+h.type.description,h.mesh.userData.arrowNo=h.arrowNo,h.mesh.userData.segmentNo=h.segmentNo,h.meshBack&&(h.meshBack.rotateAroundWorldAxis(new R(0,0,0),new R(1,0,0),m.rotation.x),h.meshBack.rotateAroundWorldAxis(new R(0,0,0),new R(0,1,0),m.rotation.y),h.meshBack.rotateAroundWorldAxis(new R(0,0,0),new R(0,0,1),m.rotation.z),h.meshBack.userData.name="arrow "+h.arrowNo+", segment "+h.segmentNo+", type "+h.type.description,h.meshBack.userData.arrowNo=h.arrowNo,h.meshBack.userData.segmentNo=h.segmentNo,St.add(h.meshBack)),St.add(h.mesh),In.push(h.mesh),h}function Mv(i,e,t,n){const s=new $n(e),r=new ls(s),o=new rt(r,Jt);let a,u=0,c=0,v=0;n.x==0&&n.y==0&&n.z==0&&(a=ze.Front,v=1),n.x==0&&Math.abs(n.y-3.14)<.1&&n.z==0&&(a=ze.Back,v=-1),n.x==0&&Math.abs(n.y+1.57)<.1&&n.z==0&&(a=ze.Left,u=-1),n.x==0&&Math.abs(n.y-1.57)<.1&&n.z==0&&(a=ze.Right,u=1),Math.abs(n.x-1.57)<.1&&Math.abs(n.y-3.14)<.1&&Math.abs(n.z-3.14)<.1&&(a=ze.Up,c=1),Math.abs(n.x-1.57)<.1&&n.y==0&&n.z==0&&(a=ze.Down,c=-1),a==null&&console.warn("Face direction is undefined for face "+i+": rx="+n.x+", ry="+n.y+", rz="+n.z),o.rotateAroundWorldAxis(new R(0,0,0),new R(1,0,0),n.x),o.rotateAroundWorldAxis(new R(0,0,0),new R(0,1,0),n.y),o.rotateAroundWorldAxis(new R(0,0,0),new R(0,0,1),n.z);let l=-1e-4;o.position.set(t.x+u*l,t.y+c*l,t.z+v*l),o.userData.name="face "+i,o.userData.faceNo=i,cl.push(o);const h=new Qf(r),m=new zf(h,new _h({color:13421772})),x=new ll(i.toString(),{font:pl,size:.1,depth:.02,curveSegments:12}),M=new il;x.center();const _=new rt(x,M),f=Ev(e);_.position.set(f[0]*1.5,f[1]*1.5,0),_.visible=!1,o.add(_),St.add(o),o.add(m);const g=new J0;g.faceNo=i,g.fontMesh=_,g.position=t,g.rotation=n,g.points=e,g.direction=a,_n.push(g)}function Sv(i){for(const e of _n)e.fontMesh.visible=i,console.log("showFaceIds "+e.faceNo+" direction="+e.direction.description)}function jh(i){if(i.length===0)return{x:0,y:0,width:0,height:0};let e=i[0].x,t=i[0].x,n=i[0].y,s=i[0].y;for(let r=1;r<i.length;r++){const o=i[r];o.x<e&&(e=o.x),o.x>t&&(t=o.x),o.y<n&&(n=o.y),o.y>s&&(s=o.y)}return{x:e,y:n,width:t-e,height:s-n}}function yv(i){var e=0,t,n,s,r;for(t=0,n=i.length-1;t<i.length;n=t,t++)s=i[t],r=i[n],e+=s.x*r.y,e-=s.y*r.x;return e/=2,e}function Ev(i){var e=[0,0],t=0,n=0,s,r,o,a,u;for(s=0,r=i.length-1;s<i.length;r=s,s++)a=i[s],u=i[r],o=a.x*u.y-u.x*a.y,t+=(a.x+u.x)*o,n+=(a.y+u.y)*o;return o=yv(i)*6,e[0]=t/o,e[1]=n/o,e}function qc(i){_n=[],De=[],In=[],cl=[],St&&Mi.remove(St),St=new Vi,Mi.add(St),Ye=i,Ye.NbArrow=Ye.ArrowsPoints.length,Ye.NbHeart=Ye.NbHeartTotal,ci=Number(Ye.ArrowColor),jt(Fs),jt(Os),jt(Ua),jt(Bs),jt(zs),jt(Fh),jt(Oh),jt(vs,!0),jt(ul),jt(Bh),jt(zh),jt(fl),jt(kh),ss.color.setHex(ci),Qn.color.setHex(ci),os.color.setHex(ci),At.color.setHex(ci),Nr.color.setHex(ci),Fr.color.setHex(ci),zt=new ls(Wh),zt.scale(10/Ye.NbArrowsPerFace,10/Ye.NbArrowsPerFace,1),vs.repeat.set(Ye.NbArrowsPerFace,Ye.NbArrowsPerFace),Ye.NbArrowsPerFace%2==0&&vs.center.set(.5,.5),vs.needsUpdate=!0,Jt.needsUpdate=!0;for(const e of Ye.FaceLevels)Mv(e.faceNo,e.points,e.position,e.rotation);for(let e=0;e<Ye.ArrowsPoints.length;e++)vl(e,Ye.ArrowsPoints[e]);St.rotation.y=-Math.PI/4-.08,St.rotation.x=Math.PI/6,_l(_t,Ye.NbArrow),zr(_t,wt),pv(_t,Ye.NbHeartTotal),qh(_t,Ye.NbHeart,Ye.NbHeartTotal),ka("Level",wt,365)}function Ji(i,e=!1){console.log("Loading level "+i),(async()=>{const t=await fetch("Levels/Level"+i+".json");if(t.status===404){console.error("Level "+i+" not found");return}if(!t.ok){console.error("Level "+i+" error");return}const n=await t.text();if(n[0]!=="{"){console.error("Invalid JSON format for level "+i),Ba(),zr(_t,-1);return}if(e)zr(_t,-2),setTimeout(function(){const s=JSON.parse(n);qc(s)},2e3);else{const s=JSON.parse(n);qc(s)}})()}function Ho(i,e,t,n){let s="",r="",o="";return e!=null&&(t==e&&(s+="(c"+i+" == p"+i+")"),t>e&&(s+="(c"+i+" > p"+i+")"),t<e&&(s+="(c"+i+" < p"+i+")")),n!=null&&(t==n&&(r+="(c"+i+" == n"+i+")"),t>n&&(r+="(c"+i+" > n"+i+")"),t<n&&(r+="(c"+i+" < n"+i+")")),s!=""&&r!=""?o=s+" && "+r:s!=""?o=s:r!=""&&(o=r),o}function Vo(i,e,t,n){let s="",r="",o="";return e!=null&&(t==e&&(s+="(c"+i+" == p"+i+")"),t-e>0&&(s+="(c"+i+" - p"+i+">0)"),t-e<0&&(s+="(c"+i+" - p"+i+"<0)")),n!=null&&(t==n&&(r+="(c"+i+" == n"+i+")"),t-n>0&&(r+="(c"+i+" - n"+i+">0)"),t-n<0&&(r+="(c"+i+" - n"+i+"<0)")),s!=""&&r!=""?o=s+" && "+r:s!=""?o=s:r!=""&&(o=r),o}function Tv(){window.addEventListener("resize",()=>{_t.aspect=window.innerWidth/window.innerHeight,_t.updateProjectionMatrix(),yt.setSize(window.innerWidth,window.innerHeight);const i=window.innerWidth,e=window.innerHeight;mn.left=-i/2,mn.right=i/2,mn.top=e/2,mn.bottom=-e/2,mn.updateProjectionMatrix(),Zn.position.set(i/2-40,-e/2+80,0),Yn.position.set(i/2-40,-e/2+40,0),Pn.scale.set(10*i,10*e,1);for(let t=0;t<vn.length;t++)vn[t].position.set(t*40-vn.length/2*40+20,-e/2+80,-1)}),yt.domElement.addEventListener("mouseenter",i=>{const e=i.target.getBoundingClientRect();_e.width=e.width,_e.height=e.height}),document.addEventListener("keydown",i=>{if(i.code==="NumpadAdd"&&(wt++,Ji(wt)),i.code==="NumpadSubtract"&&(wt--,wt<1&&(wt=1),Ji(wt)),(i.key=="e"||i.key=="E")&&(_e.editionMode=!_e.editionMode,_e.editionMode?(console.log("Edition mode ON"),console.log("   d: dump level"),console.log("   f: show/hide face numbers"),console.log("   e: exit edition mode"),console.log("   c: create new arrow / close arrow creation"),console.log("   m: modify selected arrow"),console.log("   arrows can be selected by clicking on them"),console.log("   del: delete current arrow"),Jt.map=vs,Jt.transparent=!1,Jt.opacity=1,Jt.depthTest=!0,Jt.alphaTest=.01,Jt.needsUpdate=!0,tn(_e.EditionMode_arrowSelected,0),_e.EditionMode_arrowSelected=-1):(console.log("Edition mode OFF"),Jt.map=null,Jt.transparent=!0,Jt.opacity=.7,Jt.depthTest=!0,Jt.needsUpdate=!0,tn(_e.EditionMode_arrowSelected,0),_e.EditionMode_arrowSelected=-1)),_e.editionMode){if((i.key==="f"||i.key=="F")&&(_e.showFaceId=!_e.showFaceId,Sv(_e.showFaceId)),i.key=="c"||i.key=="c")if(_e.editionModeCreation===!0)_e.editionModeCreation=!1,console.log("Edition mode: closed arrow creation "+_e.EditionMode_arrowSelected),tn(_e.EditionMode_arrowSelected,0),_e.EditionMode_arrowSelected=-1,_l(_t,De.length);else{_e.editionModeCreation=!0;let e=0;for(let t=0;t<De.length;t++)De[t].arrowNo>e&&(e=De[t].arrowNo);_e.EditionMode_arrowSelected=e+1,console.log("Edition mode: new arrow created "+_e.EditionMode_arrowSelected)}if((i.key=="r"||i.key=="R")&&_e.editionModeCreation===!0){let e;for(let t=0;t<De.length;t++)De[t].arrowNo==_e.EditionMode_arrowSelected&&(e=De[t]);e!=null&&e.points.length>0&&(console.log("Edition mode: remove last point of arrow "+_e.EditionMode_arrowSelected),e.points.pop(),e.clonedArrowPoints=JSON.stringify(e.points),xl(_e.EditionMode_arrowSelected,e))}if((i.key=="m"||i.key=="M")&&_e.EditionMode_arrowSelected!=-1&&(console.log("Modify arrow "+_e.EditionMode_arrowSelected),_e.editionModeCreation=!0),i.key=="d"||i.key=="D"){let e=new Ih;e.NbHeartTotal=Ye.NbHeartTotal,e.ArrowColor=Ye.ArrowColor,e.NbArrowsPerFace=Ye.NbArrowsPerFace,e.FaceLevels=Ye.FaceLevels;let t=[];for(let n=0;n<De.length;n++){const s=De[n];let r=[];for(let o=0;o<s.points.length;o++)r.push(s.points[o]);t.push(r)}e.ArrowsPoints=t,console.log("Level="),console.log(JSON.stringify(e))}if(i.code=="Delete"&&_e.EditionMode_arrowSelected!=-1){console.log("delete arrow "+_e.EditionMode_arrowSelected);for(let e=0;e<De.length;e++){const t=De[e];if(t.arrowNo==_e.EditionMode_arrowSelected){for(let n=0;n<t.segments.length;n++){St.remove(t.segments[n].mesh),St.remove(t.segments[n].meshBack);for(let s=0;s<In.length;s++)if(In[s]===t.segments[n].mesh){In.splice(s,1);break}}t.segments=[],De.splice(e,1)}}console.log("!!!!!! EditionMode_arrowSelected =-1"),_e.EditionMode_arrowSelected=-1}}}),yt.domElement.addEventListener("mousedown",i=>{_e.mouseDown=!0,_e.hasMoved=!1,_e.mouseDownLevel=wt;const e=i.target.getBoundingClientRect(),t=i.clientX-e.left,n=i.clientY-e.top;_e.previousNormalizedX=t,_e.previousNormalizedY=n}),yt.domElement.addEventListener("mouseup",i=>{const e=i.target.getBoundingClientRect(),t=i.clientX-e.left,n=i.clientY-e.top;let s=t-_e.previousNormalizedX,r=n-_e.previousNormalizedY;if(Math.abs(s)>0||Math.abs(r)>0||(_e.mouseDown=!1,_e.previousNormalizedX=null,_e.previousNormalizedY=null,_e.mouseDownLevel!==wt))return;ei._lastAngle=0;const o=new Q;o.set(i.clientX/yt.domElement.clientWidth*2-1,-(i.clientY/yt.domElement.clientHeight)*2+1),ko.setFromCamera(o,_t);const a=ko.intersectObjects(In,!1);if(a.length>0&&a[0].object.visible===!0){if(_e.editionMode===!1)vv(a[0].object.userData.arrowNo,a[0].object.userData.segmentNo);else if(_e.editionModeCreation===!1){_e.EditionMode_arrowSelected=a[0].object.userData.arrowNo;for(let v=0;v<De.length;v++)if(De[v].arrowNo==_e.EditionMode_arrowSelected){for(let l=0;l<De[v].segments.length;l++)if(De[v].segments[l].segmentNo==a[0].object.userData.segmentNo&&(i.button==0&&console.log("Arrow No "+a[0].object.userData.arrowNo+" segment No "+a[0].object.userData.segmentNo,u),i.button==1||i.button==2)){var u=new R;a[0].object.getWorldPosition(u);let h,m,x,M,_,f;l>0&&(h=De[v].segments[l-1].mesh.position.x.toFixed(2)-0,m=De[v].segments[l-1].mesh.position.y.toFixed(2)-0,x=De[v].segments[l-1].mesh.position.z.toFixed(2)-0);let g=De[v].segments[l].mesh.position.x.toFixed(2)-0,p=De[v].segments[l].mesh.position.y.toFixed(2)-0,d=De[v].segments[l].mesh.position.z.toFixed(2)-0;l<De[v].segments.length-1&&(M=De[v].segments[l+1].mesh.position.x.toFixed(2)-0,_=De[v].segments[l+1].mesh.position.y.toFixed(2)-0,f=De[v].segments[l+1].mesh.position.z.toFixed(2)-0),""+De[v].segments[l].mesh.position.x.toFixed(2)+De[v].segments[l].mesh.position.y.toFixed(2)+De[v].segments[l].mesh.position.z.toFixed(2),l>0&&""+De[v].segments[l-1].mesh.position.x.toFixed(2)+De[v].segments[l-1].mesh.position.y.toFixed(2)+De[v].segments[l-1].mesh.position.z.toFixed(2),l<De[v].segments.length-1&&""+De[v].segments[l+1].mesh.position.x.toFixed(2)+De[v].segments[l+1].mesh.position.y.toFixed(2)+De[v].segments[l+1].mesh.position.z.toFixed(2);let L="",A=Vo("x",h,g,M),C=Vo("y",m,p,_),D=Vo("z",x,d,f),T="13";L=" && (segment.faceDirection == FaceDirection."+De[v].segments[l].faceDirection.description+")",i.button==1&&(A=Ho("x",h,g,M),C=Ho("y",m,p,_),D=Ho("z",x,d,f),L="",T="11"),De[v].segments[l].type==se.FromSide?console.log("(segment.type == Type.FromSide) "+L):De[v].segments[l].type==se.ToSide&&console.log("(segment.type == Type.ToSide)"+L),console.log("if( "+A+" && "+C+" && "+D+") opt = "+T+";")}}tn(_e.EditionMode_arrowSelected,1),setTimeout(function(){tn(_e.EditionMode_arrowSelected,0)},100)}}if(_e.editionMode===!0){const v=ko.intersectObjects(cl,!1);if(v.length>0){const l=v[0],h=l.object;let m;for(let g=0;g<_n.length;g++)_n[g].faceNo==h.userData.faceNo&&(m=jh(_n[g].points));const x=l.point.clone();h.worldToLocal(x);let M=Math.round(Ye.NbArrowsPerFace*m.height),_=Math.round((x.x-m.x-.025)*Ye.NbArrowsPerFace),f=M-Math.round((m.height+m.y+x.y-.025)*Ye.NbArrowsPerFace)-1;if(_e.editionModeCreation==!0){console.log("Edition mode: add point to arrow "+_e.EditionMode_arrowSelected+" at face "+h.userData.faceNo+" x="+_+" y="+f);let g;for(let p=0;p<De.length;p++)De[p].arrowNo==_e.EditionMode_arrowSelected&&(g=De[p]);if(g==null){const p=[new R(_,f,h.userData.faceNo)];vl(_e.EditionMode_arrowSelected,p),tn(_e.EditionMode_arrowSelected,1)}else h.userData.faceNo==g.points[g.points.length-1].z?(_==g.points[g.points.length-1].x||f==g.points[g.points.length-1].y)&&(Xc(g,_,f,h.userData.faceNo),tn(_e.EditionMode_arrowSelected,1)):(Xc(g,_,f,h.userData.faceNo),tn(_e.EditionMode_arrowSelected,1))}}}Hc.setFromCamera(o,mn);const c=Hc.intersectObjects(hl,!1);c.length>0&&(console.log("HUD clicked: "+c[0].object.name),c[0].object.name=="Reset"&&(wt=1,Ji(wt)),c[0].object.name=="Volume"&&(_e.volume=!_e.volume,Yh(_e.volume)))})}function ka(i,e,t){const n=new Date;n.setTime(n.getTime()+t*24*60*60*1e3);let s="expires="+n.toUTCString();document.cookie=i+"="+e+";"+s+";path=/"}function Jh(i){let e=i+"=",n=decodeURIComponent(document.cookie).split(";");for(let s=0;s<n.length;s++){let r=n[s];for(;r.charAt(0)==" ";)r=r.substring(1);if(r.indexOf(e)==0)return r.substring(e.length,r.length)}return""}
//# sourceMappingURL=index-ReaW4r6m.js.map
