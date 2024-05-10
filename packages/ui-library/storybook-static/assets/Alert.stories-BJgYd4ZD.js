import"./index-B-T0PRdw.js";import{d as w,b as k,p as S,o as n,e as l,f as b,g as I,j as M,w as T,u as t,n as p,k as y,t as Y,l as h,m}from"./vue.esm-bundler-De-vA-Pj.js";import{A as C,a as G}from"./keys-DRR8M6Qm.js";function J(a){var e,s,r="";if(typeof a=="string"||typeof a=="number")r+=a;else if(typeof a=="object")if(Array.isArray(a)){var o=a.length;for(e=0;e<o;e++)a[e]&&(s=J(a[e]))&&(r&&(r+=" "),r+=s)}else for(s in a)a[s]&&(r&&(r+=" "),r+=s);return r}function d(){for(var a,e,s=0,r="",o=arguments.length;s<o;s++)(a=arguments[s])&&(e=J(a))&&(r&&(r+=" "),r+=e);return r}const Q={key:1},u=w({__name:"AlertBase",props:{variant:{default:"success"},canHideAlert:{type:Boolean,default:!0},data:{default:()=>({title:"",description:""})}},emits:["close:alert"],setup(a,{emit:e}){const s=a,r=e,o={success:"bg-success-100 border-l-[4px] border-l-[#A0C6CE]",warning:"bg-warning-100 border-l-[4px] border-l-[#D5BD8D]",error:"bg-danger-100 border-l-[4px] border-l-[#FD9E93]",info:"bg-info-100 border-l-[4px] border-l-[#87b3bc]"},i=k(()=>o[s.variant]);return S(C,s.variant),S(G,{canHideAlert:s.canHideAlert,updateCanHideAlert:()=>r("close:alert")}),(c,H)=>(n(),l("div",{role:"alert",class:p(t(d)(i.value,"py-[10px] px-[15px] rounded-[3px]"))},[c.$slots.default?b(c.$slots,"default",{key:0}):(n(),l("div",Q,[I(t(A),{class:"mb-3"},M({_:2},[c.data.title?{name:"alertTitle",fn:T(()=>[y("p",null,Y(c.data.title),1)]),key:"0"}:void 0]),1024),I(t(f),null,{default:T(()=>[y("p",null,Y(c.data.description),1)]),_:1})]))],2))}});u.__docgenInfo={exportName:"default",displayName:"AlertBase",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"AlertVariant"},defaultValue:{func:!1,value:'"success"'}},{name:"canHideAlert",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"data",required:!1,type:{name:`{
  title?: string;
  description: string;
}`},defaultValue:{func:!1,value:`() => ({
  title: "",
  description: "",
})`}}],events:[{name:"close:alert"}],slots:[{name:"default"}],sourceFiles:["/Users/timothyokooboh/Desktop/avc/packages/ui-library/src/components/alert/AlertBase.vue"]};const X={class:"flex items-center justify-between"},Z={class:"flex items-center"},ee={key:0},te={key:1},re={key:2},ae={key:3},A=w({__name:"AlertHeader",setup(a){const e=h(C),{canHideAlert:s,updateCanHideAlert:r}=h(G),o={success:"text-success-500",warning:"text-warning-500",error:"text-grayScale-500",info:"text-info-500"},i=k(()=>o[e]);return(c,H)=>(n(),l("div",X,[y("div",Z,[b(c.$slots,"alertIcon",{},()=>[t(e)==="success"?(n(),l("span",{key:0,class:p(t(d)(i.value,"material-symbols-sharp font-medium mr-[7px]"))},"check_circle",2)):m("",!0),t(e)==="error"?(n(),l("span",{key:1,class:p(t(d)(i.value,"material-symbols-sharp font-medium mr-[7px]"))},"chat_error",2)):m("",!0),t(e)==="warning"?(n(),l("span",{key:2,class:p(t(d)(i.value,"material-symbols-sharp font-medium mr-[7px]"))},"warning",2)):m("",!0),t(e)==="info"?(n(),l("span",{key:3,class:p(t(d)(i.value,"material-symbols-sharp font-medium mr-[7px]"))},"info",2)):m("",!0)]),y("div",{"data-testid":"alert-title",class:p(t(d)(i.value,"font-bold text-[18px]"))},[b(c.$slots,"alertTitle",{},()=>[t(e)==="success"?(n(),l("p",ee,"Success")):t(e)==="error"?(n(),l("p",te,"Error")):t(e)==="warning"?(n(),l("p",re,"Warning")):t(e)==="info"?(n(),l("p",ae,"Info")):m("",!0)])],2)]),t(s)?(n(),l("button",{key:0,onClick:H[0]||(H[0]=(...K)=>t(r)&&t(r)(...K))},[b(c.$slots,"alertCloseIcon",{},()=>[y("span",{class:p(t(d)(i.value,"material-symbols-sharp font-medium"))},"close",2)])])):m("",!0)]))}});A.__docgenInfo={exportName:"default",displayName:"AlertHeader",description:"",tags:{},slots:[{name:"alertIcon"},{name:"alertTitle"},{name:"alertCloseIcon"}],sourceFiles:["/Users/timothyokooboh/Desktop/avc/packages/ui-library/src/components/alert/AlertHeader.vue"]};const f=w({__name:"AlertDescription",setup(a){const e=h(C),s={success:"text-success-500",warning:"text-warning-500",error:"text-grayScale-500",info:"text-info-500"},r=k(()=>s[e]);return(o,i)=>(n(),l("div",{class:p(t(d)(r.value,"text-sm"))},[b(o.$slots,"default")],2))}});f.__docgenInfo={exportName:"default",displayName:"AlertDescription",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/timothyokooboh/Desktop/avc/packages/ui-library/src/components/alert/AlertDescription.vue"]};const oe={title:"Alert",component:u,tags:["autodocs"]},v={render:()=>({components:{Alert:u},template:`<Alert class="w-[400px]" :data="{ description: 'this is awesome' }" />`})},g={render:()=>({components:{Alert:u,AlertHeader:A,AlertDescription:f},template:`<Alert class="w-[400px]">
    <AlertHeader class="mb-3">
      <template #alertTitle>
        <p>Data uploaded successfully</p>
      </template>
    </AlertHeader>

    <AlertDescription>
      <p>You have subscribed successfully</p>
    </AlertDescription>
  </Alert>`})},D={render:()=>({components:{Alert:u,AlertHeader:A,AlertDescription:f},template:`<Alert variant="error" class="w-[400px]">
    <AlertHeader class="mb-3">
      <template #alertTitle>
        <p>Unable to upload file</p>
      </template>
    </AlertHeader>

    <AlertDescription>
      <p>Your browser is not supported</p>
    </AlertDescription>
  </Alert>`})},_={render:()=>({components:{Alert:u,AlertHeader:A,AlertDescription:f},template:`<Alert variant="warning" class="w-[400px]">
    <AlertHeader class="mb-3">
      <template #alertTitle>
        <p>Your API key is public</p>
      </template>
    </AlertHeader>

    <AlertDescription>
      <p>You have almost exhausted your data</p>
    </AlertDescription>
  </Alert>`})},x={render:()=>({components:{Alert:u,AlertHeader:A,AlertDescription:f},template:`<Alert variant="info" class="w-[400px]">
    <AlertHeader class="mb-3">
      <template #alertTitle>
        <p>Your free trial ends in two days</p>
      </template>
    </AlertHeader>

    <AlertDescription>
      <p>You are eligible for a new loan</p>
    </AlertDescription>
  </Alert>`})};var N,B,E;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Alert
    },
    template: \`<Alert class="w-[400px]" :data="{ description: 'this is awesome' }" />\`
  })
}`,...(E=(B=v.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var $,V,U;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Alert,
      AlertHeader,
      AlertDescription
    },
    template: \`<Alert class="w-[400px]">
    <AlertHeader class="mb-3">
      <template #alertTitle>
        <p>Data uploaded successfully</p>
      </template>
    </AlertHeader>

    <AlertDescription>
      <p>You have subscribed successfully</p>
    </AlertDescription>
  </Alert>\`
  })
}`,...(U=(V=g.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var j,F,q;D.parameters={...D.parameters,docs:{...(j=D.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Alert,
      AlertHeader,
      AlertDescription
    },
    template: \`<Alert variant="error" class="w-[400px]">
    <AlertHeader class="mb-3">
      <template #alertTitle>
        <p>Unable to upload file</p>
      </template>
    </AlertHeader>

    <AlertDescription>
      <p>Your browser is not supported</p>
    </AlertDescription>
  </Alert>\`
  })
}`,...(q=(F=D.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var R,W,L;_.parameters={..._.parameters,docs:{...(R=_.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Alert,
      AlertHeader,
      AlertDescription
    },
    template: \`<Alert variant="warning" class="w-[400px]">
    <AlertHeader class="mb-3">
      <template #alertTitle>
        <p>Your API key is public</p>
      </template>
    </AlertHeader>

    <AlertDescription>
      <p>You have almost exhausted your data</p>
    </AlertDescription>
  </Alert>\`
  })
}`,...(L=(W=_.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var P,z,O;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Alert,
      AlertHeader,
      AlertDescription
    },
    template: \`<Alert variant="info" class="w-[400px]">
    <AlertHeader class="mb-3">
      <template #alertTitle>
        <p>Your free trial ends in two days</p>
      </template>
    </AlertHeader>

    <AlertDescription>
      <p>You are eligible for a new loan</p>
    </AlertDescription>
  </Alert>\`
  })
}`,...(O=(z=x.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};const ie=["Basic","Success","Error","Warning","Info"];export{v as Basic,D as Error,x as Info,g as Success,_ as Warning,ie as __namedExportsOrder,oe as default};
