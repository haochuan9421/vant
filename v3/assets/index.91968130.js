import{c as k,h as p,C as w}from"./use-translate.3147781c.js";import{c as h,n as E,w as y}from"./with-install.6d6d29d8.js";import{u as _}from"./use-touch.66e4202e.js";import{L as $}from"./index.25dd8ae6.js";import{z as A,C,D as L,x as N,e as l,q as B}from"./vue-libs.4d090e76.js";import{u as I}from"./index.cbbbdc40.js";const[M,r,R]=k("pull-refresh"),D=50,U=["pulling","loosing","success"];var Y=A({name:M,props:{disabled:Boolean,modelValue:Boolean,headHeight:h(D),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:E,successDuration:h(500),animationDuration:h(300)},emits:["refresh","update:modelValue"],setup(a,{emit:f,slots:n}){let i;const m=C(),S=I(m),t=L({status:"normal",distance:0,duration:0}),u=_(),v=()=>{if(a.headHeight!==D)return{height:`${a.headHeight}px`}},d=()=>t.status!=="loading"&&t.status!=="success"&&!a.disabled,H=e=>{const s=+(a.pullDistance||a.headHeight);return e>s&&(e<s*2?e=s+(e-s)/2:e=s*1.5+(e-s*2)/4),Math.round(e)},o=(e,s)=>{const c=+(a.pullDistance||a.headHeight);t.distance=e,s?t.status="loading":e===0?t.status="normal":e<c?t.status="pulling":t.status="loosing"},g=()=>{const{status:e}=t;return e==="normal"?"":a[`${e}Text`]||R(e)},b=()=>{const{status:e,distance:s}=t;if(n[e])return n[e]({distance:s});const c=[];return U.includes(e)&&c.push(l("div",{class:r("text")},[g()])),e==="loading"&&c.push(l($,{class:r("loading")},{default:g})),c},P=()=>{t.status="success",setTimeout(()=>{o(0)},+a.successDuration)},T=e=>{i=w(S.value)===0,i&&(t.duration=0,u.start(e))},j=e=>{d()&&T(e)},V=e=>{if(d()){i||T(e);const{deltaY:s}=u;u.move(e),i&&s.value>=0&&u.isVertical()&&(p(e),o(H(s.value)))}},x=()=>{i&&u.deltaY.value&&d()&&(t.duration=+a.animationDuration,t.status==="loosing"?(o(+a.headHeight,!0),f("update:modelValue",!0),B(()=>f("refresh"))):o(0))};return N(()=>a.modelValue,e=>{t.duration=+a.animationDuration,e?o(+a.headHeight,!0):n.success||a.successText?P():o(0,!1)}),()=>{var s;const e={transitionDuration:`${t.duration}ms`,transform:t.distance?`translate3d(0,${t.distance}px, 0)`:""};return l("div",{ref:m,class:r()},[l("div",{class:r("track"),style:e,onTouchstart:j,onTouchmove:V,onTouchend:x,onTouchcancel:x},[l("div",{class:r("head"),style:v()},[b()]),(s=n.default)==null?void 0:s.call(n)])])}}});const K=y(Y);export{K as P};
