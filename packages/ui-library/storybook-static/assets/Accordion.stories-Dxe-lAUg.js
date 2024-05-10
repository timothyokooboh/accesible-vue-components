import"./index-B-T0PRdw.js";import{d as h,v as U,p as x,o as s,e as d,f as y,F as z,x as K,y as P,z as H,u as e,l as q,g as r,k as A,n as Z,m as R,w as i,T as G,A as v}from"./vue.esm-bundler-De-vA-Pj.js";import{b as $,c as V,d as N}from"./keys-DRR8M6Qm.js";let J=0;const Q=()=>++J,w=c=>`${c}-${Q()}`,W=()=>({handleArrowNavigation:(n,t)=>{const l=document.activeElement,a=Array.from(document.querySelectorAll(`.${t}`)),u=a.length,o=Array.from(a).findIndex(m=>m.id==l.id);u<=1||(n==="down"?o===u-1?a[0].focus():a[o+1].focus():o===0?a[u-1].focus():a[o-1].focus())}}),X={key:1},f=h({__name:"AccordionBase",props:{items:{},single:{type:Boolean}},setup(c){const n=c,{handleArrowNavigation:t}=W(),l=w("accordion-header"),a=U(""),u=o=>{n.single&&(a.value=o)};return x(V,l),x($,{currentOpenPanel:a,updateCurrentOpenPanel:u,single:n.single}),(o,m)=>(s(),d("div",{class:"border-x border-b border-grayScale-200 rounded-[5px]",onKeyup:[m[0]||(m[0]=P(p=>e(t)("up",e(l)),["up"])),m[1]||(m[1]=P(p=>e(t)("down",e(l)),["down"]))]},[o.$slots.default?y(o.$slots,"default",{key:0}):(s(),d("div",X,[(s(!0),d(z,null,K(o.items,p=>(s(),H(e(g),{item:p,key:p.title},null,8,["item"]))),128))]))],32))}});f.__docgenInfo={exportName:"default",displayName:"AccordionBase",description:"",tags:{},props:[{name:"items",required:!1,type:{name:"Array",elements:[{name:"AccordionItemType"}]}},{name:"single",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/Users/timothyokooboh/Desktop/avc/packages/ui-library/src/components/accordion/AccordionBase.vue"]};const Y={class:"border-t border-grayScale-200"},ee={key:1},g=h({__name:"AccordionItem",props:{item:{default:()=>({title:"",content:""})}},setup(c){const n=w("accordion-header"),t=w("accordion-panel"),{currentOpenPanel:l,updateCurrentOpenPanel:a,single:u}=q($),o=U(!0);return x(N,{isCollapsed:o,toggleCollapse:()=>{u?l.value===t?a(""):a(t):o.value=!o.value},headerId:n,panelId:t}),(p,ge)=>(s(),d("div",Y,[p.$slots.default?y(p.$slots,"default",{key:0}):(s(),d("div",ee,[r(e(_),{title:p.item.title},null,8,["title"]),r(e(I),{content:p.item.content},null,8,["content"])]))]))}});g.__docgenInfo={exportName:"default",displayName:"AccordionItem",description:"",tags:{},props:[{name:"item",required:!1,type:{name:"AccordionItem"},defaultValue:{func:!1,value:'() => ({ title: "", content: "" })'}}],slots:[{name:"default"}],sourceFiles:["/Users/timothyokooboh/Desktop/avc/packages/ui-library/src/components/accordion/AccordionItem.vue"]};function oe(c,n){return s(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[A("path",{"fill-rule":"evenodd",d:"M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z","clip-rule":"evenodd"})])}function ne(c,n){return s(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[A("path",{"fill-rule":"evenodd",d:"M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z","clip-rule":"evenodd"})])}const te=["id","aria-expanded","aria-controls"],ae=["innerHTML"],_=h({__name:"AccordionItemHeader",props:{title:{default:""}},setup(c){const{isCollapsed:n,toggleCollapse:t,panelId:l,headerId:a}=q(N),u=q(V);return(o,m)=>(s(),d("h3",null,[A("button",{"data-testid":"accordion-header",id:e(a),"aria-expanded":!e(n),"aria-controls":e(l),class:Z(`w-full text-left flex justify-between items-center py-[13px] px-[28px] ${e(u)}`),onClick:m[0]||(m[0]=(...p)=>e(t)&&e(t)(...p))},[A("div",null,[o.$slots.default?y(o.$slots,"default",{key:0}):(s(),d("p",{key:1,innerHTML:o.title},null,8,ae))]),A("div",null,[e(n)?y(o.$slots,"toggleIcon:collapsed",{key:0},()=>[e(n)?(s(),H(e(oe),{key:0,class:"h-4"})):R("",!0)]):y(o.$slots,"toggleIcon:unCollapsed",{key:1},()=>[r(e(ne),{class:"h-4"})])])],10,te)]))}});_.__docgenInfo={exportName:"default",displayName:"AccordionItemHeader",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"},{name:"toggleIcon:collapsed"},{name:"toggleIcon:unCollapsed"}],sourceFiles:["/Users/timothyokooboh/Desktop/avc/packages/ui-library/src/components/accordion/AccordionItemHeader.vue"]};const re=["id","aria-labelledby"],se=["innerHTML"],j=h({__name:"AccordionItemPanel",props:{content:{}},setup(c){const{isCollapsed:n,panelId:t,headerId:l}=q(N),{currentOpenPanel:a,single:u}=q($);return(o,m)=>(s(),H(G,{name:"scale"},{default:i(()=>[(e(u)?e(t)===e(a):!e(n))?(s(),d("div",{key:0,"data-testid":"accordion-panel",id:e(t),"aria-labelledby":e(l),class:"text-grayScale-400 py-[13px] px-[28px]"},[o.content?(s(),d("p",{key:0,innerHTML:o.content},null,8,se)):y(o.$slots,"default",{key:1},void 0,!0)],8,re)):R("",!0)]),_:3}))}}),ce=(c,n)=>{const t=c.__vccOpts||c;for(const[l,a]of n)t[l]=a;return t},I=ce(j,[["__scopeId","data-v-9b63d73a"]]);j.__docgenInfo={exportName:"default",displayName:"AccordionItemPanel",description:"",tags:{},props:[{name:"content",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/timothyokooboh/Desktop/avc/packages/ui-library/src/components/accordion/AccordionItemPanel.vue"]};const ie=h({__name:"AccordionBasic",setup(c){const n=[{title:"Vue.js",content:"cool framework"},{title:"React.js",content:"Nice framework"}];return(t,l)=>(s(),d("div",null,[r(e(f),{items:n,class:"w-[400px]"})]))}});ie.__docgenInfo={exportName:"default",displayName:"AccordionBasic",description:"",tags:{},sourceFiles:["/Users/timothyokooboh/Desktop/avc/packages/ui-library/src/components/accordion/story/AccordionBasic.vue"]};const le=A("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum, ratione magnam cumque tempora unde placeat minima harum suscipit accusamus doloremque sit nulla nostrum quis necessitatibus, optio totam! Sapiente, quisquam. ",-1),de=A("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum, ratione magnam cumque tempora unde placeat minima harum suscipit accusamus doloremque sit nulla nostrum quis necessitatibus, optio totam! Sapiente, quisquam. ",-1),ue=h({__name:"AccordionMultiple",setup(c){return(n,t)=>(s(),d("div",null,[r(e(f),{class:"w-[400px]"},{default:i(()=>[r(e(g),null,{default:i(()=>[r(e(_),null,{default:i(()=>[v(" svelte ")]),_:1}),r(e(I),null,{default:i(()=>[le,de]),_:1})]),_:1}),r(e(g),null,{default:i(()=>[r(e(_),null,{default:i(()=>[v(" Angular ")]),_:1}),r(e(I),null,{default:i(()=>[v("This is Angular")]),_:1})]),_:1})]),_:1})]))}});ue.__docgenInfo={exportName:"default",displayName:"AccordionMultiple",description:"",tags:{},sourceFiles:["/Users/timothyokooboh/Desktop/avc/packages/ui-library/src/components/accordion/story/AccordionMultiple.vue"]};const me=A("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum, ratione magnam cumque tempora unde placeat minima harum suscipit accusamus doloremque sit nulla nostrum quis necessitatibus, optio totam! Sapiente, quisquam. ",-1),pe=A("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum, ratione magnam cumque tempora unde placeat minima harum suscipit accusamus doloremque sit nulla nostrum quis necessitatibus, optio totam! Sapiente, quisquam. ",-1),Ae=h({__name:"AccordionSingle",setup(c){return(n,t)=>(s(),d("div",null,[r(e(f),{single:"",class:"w-[400px]"},{default:i(()=>[r(e(g),null,{default:i(()=>[r(e(_),null,{default:i(()=>[v(" svelte ")]),_:1}),r(e(I),null,{default:i(()=>[me,pe]),_:1})]),_:1}),r(e(g),null,{default:i(()=>[r(e(_),null,{default:i(()=>[v(" Angular ")]),_:1}),r(e(I),null,{default:i(()=>[v("This is Angular")]),_:1})]),_:1})]),_:1})]))}});Ae.__docgenInfo={exportName:"default",displayName:"AccordionSingle",description:"",tags:{},sourceFiles:["/Users/timothyokooboh/Desktop/avc/packages/ui-library/src/components/accordion/story/AccordionSingle.vue"]};const he={title:"Accordion",component:f,tags:["autodocs"]},k={render:()=>({components:{Accordion:f},template:`<Accordion 
      :items="[
        {title: 'About us', content: 'A real estate company'},
        {title: 'Contact us', content: 'Send mail to support@estates.ng'},
      ]" 
    />`})},b={render:()=>({components:{Accordion:f,AccordionItem:g,AccordionItemHeader:_,AccordionItemPanel:I},template:`<Accordion class="w-[400px]">
      <AccordionItem>
        <AccordionItemHeader> svelte </AccordionItemHeader>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            rerum, ratione magnam cumque tempora unde placeat minima harum
            suscipit accusamus doloremque sit nulla nostrum quis necessitatibus,
            optio totam! Sapiente, quisquam.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeader> Angular </AccordionItemHeader>
        <AccordionItemPanel>This is Angular</AccordionItemPanel>
      </AccordionItem>
    </Accordion>`})},C={render:()=>({components:{Accordion:f,AccordionItem:g,AccordionItemHeader:_,AccordionItemPanel:I},template:`<Accordion single class="w-[400px]">
      <AccordionItem>
        <AccordionItemHeader> svelte </AccordionItemHeader>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            rerum, ratione magnam cumque tempora unde placeat minima harum
            suscipit accusamus doloremque sit nulla nostrum quis necessitatibus,
            optio totam! Sapiente, quisquam.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeader> Angular </AccordionItemHeader>
        <AccordionItemPanel>This is Angular</AccordionItemPanel>
      </AccordionItem>
    </Accordion>`})};var S,L,T;k.parameters={...k.parameters,docs:{...(S=k.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Accordion
    },
    template: \`<Accordion 
      :items="[
        {title: 'About us', content: 'A real estate company'},
        {title: 'Contact us', content: 'Send mail to support@estates.ng'},
      ]" 
    />\`
  })
}`,...(T=(L=k.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var B,O,D;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Accordion,
      AccordionItem,
      AccordionItemHeader,
      AccordionItemPanel
    },
    template: \`<Accordion class="w-[400px]">
      <AccordionItem>
        <AccordionItemHeader> svelte </AccordionItemHeader>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            rerum, ratione magnam cumque tempora unde placeat minima harum
            suscipit accusamus doloremque sit nulla nostrum quis necessitatibus,
            optio totam! Sapiente, quisquam.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeader> Angular </AccordionItemHeader>
        <AccordionItemPanel>This is Angular</AccordionItemPanel>
      </AccordionItem>
    </Accordion>\`
  })
}`,...(D=(O=b.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var F,M,E;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Accordion,
      AccordionItem,
      AccordionItemHeader,
      AccordionItemPanel
    },
    template: \`<Accordion single class="w-[400px]">
      <AccordionItem>
        <AccordionItemHeader> svelte </AccordionItemHeader>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            rerum, ratione magnam cumque tempora unde placeat minima harum
            suscipit accusamus doloremque sit nulla nostrum quis necessitatibus,
            optio totam! Sapiente, quisquam.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeader> Angular </AccordionItemHeader>
        <AccordionItemPanel>This is Angular</AccordionItemPanel>
      </AccordionItem>
    </Accordion>\`
  })
}`,...(E=(M=C.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};const ye=["Basic","Multiple","Single"];export{k as Basic,b as Multiple,C as Single,ye as __namedExportsOrder,he as default};
