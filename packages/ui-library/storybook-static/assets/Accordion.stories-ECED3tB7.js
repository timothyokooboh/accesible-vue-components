import"./index-B-T0PRdw.js";import{d as A,e as U,p as C,o as r,f as d,g as y,F as Z,j as z,k as H,l as x,u as e,m as k,n as s,q as _,s as G,t as R,v as i,T as J,x as h}from"./vue.esm-bundler-BMrPn_0p.js";let Q=0;const W=()=>++Q,$=c=>`${c}-${W()}`,N=Symbol(),V=Symbol(),w=Symbol(),X=()=>({handleArrowNavigation:(t,n)=>{const l=document.activeElement,a=Array.from(document.querySelectorAll(`.${n}`)),u=a.length,o=Array.from(a).findIndex(m=>m.id==l.id);u<=1||(t==="down"?o===u-1?a[0].focus():a[o+1].focus():o===0?a[u-1].focus():a[o-1].focus())}}),Y={key:1},I=A({__name:"AccordionBase",props:{items:{},isSingle:{type:Boolean}},setup(c){const t=c,{handleArrowNavigation:n}=X(),l=$("accordion-header"),a=U(""),u=o=>{t.isSingle&&(a.value=o)};return C(V,l),C(w,{currentOpenPanel:a,updateCurrentOpenPanel:u,isSingle:t.isSingle}),(o,m)=>(r(),d("div",{class:"border-x border-b border-grayScale-200 rounded-[5px]",onKeyup:[m[0]||(m[0]=H(p=>e(n)("up",e(l)),["up"])),m[1]||(m[1]=H(p=>e(n)("down",e(l)),["down"]))]},[o.$slots.default?y(o.$slots,"default",{key:0}):(r(),d("div",Y,[(r(!0),d(Z,null,z(o.items,p=>(r(),x(e(g),{item:p,key:p.title},null,8,["item"]))),128))]))],32))}});I.__docgenInfo={exportName:"default",displayName:"AccordionBase",description:"",tags:{},props:[{name:"items",required:!1,type:{name:"Array",elements:[{name:"AccordionItemType"}]}},{name:"isSingle",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/Users/timothyokooboh/Desktop/avc/packages/ui-library/src/components/accordion/AccordionBase.vue"]};const ee={class:"border-t border-grayScale-200"},oe={key:1},g=A({__name:"AccordionItem",props:{item:{default:()=>({title:"",content:""})}},setup(c){const t=$("accordion-header"),n=$("accordion-panel"),{currentOpenPanel:l,updateCurrentOpenPanel:a,isSingle:u}=k(w),o=U(!0);return C(N,{isCollapsed:o,toggleCollapse:()=>{u?l.value===n?a(""):a(n):o.value=!o.value},headerId:t,panelId:n}),(p,ge)=>(r(),d("div",ee,[p.$slots.default?y(p.$slots,"default",{key:0}):(r(),d("div",oe,[s(e(f),{title:p.item.title},null,8,["title"]),s(e(v),{content:p.item.content},null,8,["content"])]))]))}});g.__docgenInfo={exportName:"default",displayName:"AccordionItem",description:"",tags:{},props:[{name:"item",required:!1,type:{name:"AccordionItem"},defaultValue:{func:!1,value:'() => ({ title: "", content: "" })'}}],slots:[{name:"default"}],sourceFiles:["/Users/timothyokooboh/Desktop/avc/packages/ui-library/src/components/accordion/AccordionItem.vue"]};function te(c,t){return r(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"fill-rule":"evenodd",d:"M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z","clip-rule":"evenodd"})])}function ne(c,t){return r(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"fill-rule":"evenodd",d:"M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z","clip-rule":"evenodd"})])}const ae=["id","aria-expanded","aria-controls"],se=["innerHTML"],f=A({__name:"AccordionItemHeader",props:{title:{default:""}},setup(c){const{isCollapsed:t,toggleCollapse:n,panelId:l,headerId:a}=k(N),u=k(V);return(o,m)=>(r(),d("h3",null,[_("button",{"data-testid":"accordion-header",id:e(a),"aria-expanded":!e(t),"aria-controls":e(l),class:G(`w-full text-left flex justify-between items-center py-[13px] px-[28px] ${e(u)}`),onClick:m[0]||(m[0]=(...p)=>e(n)&&e(n)(...p))},[_("div",null,[o.$slots.default?y(o.$slots,"default",{key:0}):(r(),d("p",{key:1,innerHTML:o.title},null,8,se))]),_("div",null,[e(t)?y(o.$slots,"toggleIcon:collapsed",{key:0},()=>[e(t)?(r(),x(e(te),{key:0,class:"h-4"})):R("",!0)]):y(o.$slots,"toggleIcon:unCollapsed",{key:1},()=>[s(e(ne),{class:"h-4"})])])],10,ae)]))}});f.__docgenInfo={exportName:"default",displayName:"AccordionItemHeader",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"},{name:"toggleIcon:collapsed"},{name:"toggleIcon:unCollapsed"}],sourceFiles:["/Users/timothyokooboh/Desktop/avc/packages/ui-library/src/components/accordion/AccordionItemHeader.vue"]};const re=["id","aria-labelledby"],ce=["innerHTML"],j=A({__name:"AccordionItemPanel",props:{content:{}},setup(c){const{isCollapsed:t,panelId:n,headerId:l}=k(N),{currentOpenPanel:a,isSingle:u}=k(w);return(o,m)=>(r(),x(J,{name:"scale"},{default:i(()=>[(e(u)?e(n)===e(a):!e(t))?(r(),d("div",{key:0,"data-testid":"accordion-panel",id:e(n),"aria-labelledby":e(l),class:"text-grayScale-400 py-[13px] px-[28px]"},[o.content?(r(),d("p",{key:0,innerHTML:o.content},null,8,ce)):y(o.$slots,"default",{key:1},void 0,!0)],8,re)):R("",!0)]),_:3}))}}),ie=(c,t)=>{const n=c.__vccOpts||c;for(const[l,a]of t)n[l]=a;return n},v=ie(j,[["__scopeId","data-v-2a84c8e1"]]);j.__docgenInfo={exportName:"default",displayName:"AccordionItemPanel",description:"",tags:{},props:[{name:"content",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/timothyokooboh/Desktop/avc/packages/ui-library/src/components/accordion/AccordionItemPanel.vue"]};const le=A({__name:"AccordionBasic",setup(c){const t=[{title:"Vue.js",content:"cool framework"},{title:"React.js",content:"Nice framework"}];return(n,l)=>(r(),d("div",null,[s(e(I),{items:t,class:"w-[400px]"})]))}});le.__docgenInfo={exportName:"default",displayName:"AccordionBasic",description:"",tags:{},sourceFiles:["/Users/timothyokooboh/Desktop/avc/packages/ui-library/src/components/accordion/story/AccordionBasic.vue"]};const de=_("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum, ratione magnam cumque tempora unde placeat minima harum suscipit accusamus doloremque sit nulla nostrum quis necessitatibus, optio totam! Sapiente, quisquam. ",-1),ue=_("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum, ratione magnam cumque tempora unde placeat minima harum suscipit accusamus doloremque sit nulla nostrum quis necessitatibus, optio totam! Sapiente, quisquam. ",-1),me=A({__name:"AccordionMultiple",setup(c){return(t,n)=>(r(),d("div",null,[s(e(I),{class:"w-[400px]"},{default:i(()=>[s(e(g),null,{default:i(()=>[s(e(f),null,{default:i(()=>[h(" svelte ")]),_:1}),s(e(v),null,{default:i(()=>[de,ue]),_:1})]),_:1}),s(e(g),null,{default:i(()=>[s(e(f),null,{default:i(()=>[h(" Angular ")]),_:1}),s(e(v),null,{default:i(()=>[h("This is Angular")]),_:1})]),_:1})]),_:1})]))}});me.__docgenInfo={exportName:"default",displayName:"AccordionMultiple",description:"",tags:{},sourceFiles:["/Users/timothyokooboh/Desktop/avc/packages/ui-library/src/components/accordion/story/AccordionMultiple.vue"]};const pe=_("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum, ratione magnam cumque tempora unde placeat minima harum suscipit accusamus doloremque sit nulla nostrum quis necessitatibus, optio totam! Sapiente, quisquam. ",-1),_e=_("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum, ratione magnam cumque tempora unde placeat minima harum suscipit accusamus doloremque sit nulla nostrum quis necessitatibus, optio totam! Sapiente, quisquam. ",-1),K=A({__name:"AccordionSingle",setup(c){return(t,n)=>(r(),d("div",null,[s(e(I),{isSingle:"",class:"w-[400px]"},{default:i(()=>[s(e(g),null,{default:i(()=>[s(e(f),null,{default:i(()=>[h(" svelte ")]),_:1}),s(e(v),null,{default:i(()=>[pe,_e]),_:1})]),_:1}),s(e(g),null,{default:i(()=>[s(e(f),null,{default:i(()=>[h(" Angular ")]),_:1}),s(e(v),null,{default:i(()=>[h("This is Angular")]),_:1})]),_:1})]),_:1})]))}});K.__docgenInfo={exportName:"default",displayName:"AccordionSingle",description:"",tags:{},sourceFiles:["/Users/timothyokooboh/Desktop/avc/packages/ui-library/src/components/accordion/story/AccordionSingle.vue"]};const Ie={title:"Accordion",component:I,tags:["autodocs"]},b={render:()=>({components:{Accordion:I},template:`<Accordion 
      :items="[
        {title: 'About us', content: 'A real estate company'},
        {title: 'Contact us', content: 'Send mail to support@estates.ng'},
      ]" 
    />`})},q={render:()=>({components:{Accordion:I,AccordionItem:g,AccordionItemHeader:f,AccordionItemPanel:v},template:`<Accordion>
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
    </Accordion>`})},S={render:()=>({components:{AccordionSingle:K},template:"<AccordionSingle />"})};var P,B,L;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(B=b.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var O,T,D;q.parameters={...q.parameters,docs:{...(O=q.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Accordion,
      AccordionItem,
      AccordionItemHeader,
      AccordionItemPanel
    },
    template: \`<Accordion>
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
}`,...(D=(T=q.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var F,M,E;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AccordionSingle
    },
    template: \`<AccordionSingle />\`
  })
}`,...(E=(M=S.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};const ye=["Basic","Multiple","Single"];export{b as Basic,q as Multiple,S as Single,ye as __namedExportsOrder,Ie as default};
