import{r as H}from"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";var k={exports:{}},v={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J=H,Y=Symbol.for("react.element"),G=Symbol.for("react.fragment"),K=Object.prototype.hasOwnProperty,Q=J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,X={key:!0,ref:!0,__self:!0,__source:!0};function A(i,r,s){var t,o={},l=null,c=null;s!==void 0&&(l=""+s),r.key!==void 0&&(l=""+r.key),r.ref!==void 0&&(c=r.ref);for(t in r)K.call(r,t)&&!X.hasOwnProperty(t)&&(o[t]=r[t]);if(i&&i.defaultProps)for(t in r=i.defaultProps,r)o[t]===void 0&&(o[t]=r[t]);return{$$typeof:Y,type:i,key:l,ref:c,props:o,_owner:Q.current}}v.Fragment=G;v.jsx=A;v.jsxs=A;k.exports=v;var T=k.exports;const e=T.jsx,a=T.jsxs;function Z(...i){return i.filter(Boolean).flatMap(r=>typeof r=="string"?r:typeof r=="object"&&r!==null?Object.entries(r).filter(([,s])=>!!s).map(([s])=>s):[]).join(" ").trim()}const ee="_primary_zps4e_4",ne="_secondary_zps4e_47",re="_small_zps4e_91",te="_medium_zps4e_97",ae="_large_zps4e_103",ie="_loading_zps4e_110",se="_spinner_zps4e_114",oe="_spinnerIcon_zps4e_122",le="_spin_zps4e_114",d={primary:ee,secondary:ne,small:re,medium:te,large:ae,loading:ie,spinner:se,spinnerIcon:oe,spin:le};function n({children:i,variant:r="primary",size:s="medium",isLoading:t=!1,leftIcon:o,rightIcon:l,className:c="",disabled:F=!1,...U}){const $=Z(d[r],d[s],t?d.loading:void 0,c);return a("button",{className:$,disabled:F||t,...U,children:[!t&&o&&e("span",{children:o}),e("span",{children:i}),!t&&l&&e("span",{children:l}),t&&e("div",{className:d.spinner,children:a("svg",{className:d.spinnerIcon,fill:"none",viewBox:"0 0 24 24",children:[e("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",className:"opacity-25"}),e("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",className:"opacity-75"})]})})]})}try{n.displayName="Button",n.__docgenInfo={description:"Button component - a flexible button with multiple variants and sizes",displayName:"Button",props:{children:{defaultValue:null,description:"Content to display inside the button",name:"children",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:{value:"primary"},description:"Visual variant of the button",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},size:{defaultValue:{value:"medium"},description:"Size of the button",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},isLoading:{defaultValue:{value:"false"},description:"Whether the button is in a loading state",name:"isLoading",required:!1,type:{name:"boolean"}},leftIcon:{defaultValue:null,description:"Icon to display before the button text",name:"leftIcon",required:!1,type:{name:"ReactNode"}},rightIcon:{defaultValue:null,description:"Icon to display after the button text",name:"rightIcon",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional CSS class",name:"className",required:!1,type:{name:"string"}}}}}catch{}const me={title:"Atoms/Button",component:n,parameters:{layout:"centered",docs:{description:{component:"A flexible button component with multiple variants and sizes. Built with CSS Modules for clean, maintainable styling."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary"],description:"Visual variant of the button"},size:{control:{type:"select"},options:["small","medium","large"],description:"Size of the button"},isLoading:{control:{type:"boolean"},description:"Whether the button is in a loading state"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},children:{control:{type:"text"},description:"Content to display inside the button"}}},m={args:{children:"Button"}},u={args:{variant:"primary",children:"Primary Button"}},p={args:{variant:"secondary",children:"Secondary Button"}},y={render:()=>a("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e(n,{size:"small",children:"Small"}),e(n,{size:"medium",children:"Medium"}),e(n,{size:"large",children:"Large"})]})},g={render:()=>a("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e(n,{isLoading:!0,variant:"primary",children:"Loading..."}),e(n,{isLoading:!0,variant:"secondary",children:"Loading..."})]})},h={render:()=>a("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e(n,{disabled:!0,variant:"primary",children:"Disabled Primary"}),e(n,{disabled:!0,variant:"secondary",children:"Disabled Secondary"})]})},f={render:()=>a("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[a("div",{children:[e("h3",{style:{marginBottom:"1rem",fontSize:"1.125rem",fontWeight:"600"},children:"Primary Buttons"}),a("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e(n,{variant:"primary",size:"small",children:"Small Primary"}),e(n,{variant:"primary",size:"medium",children:"Medium Primary"}),e(n,{variant:"primary",size:"large",children:"Large Primary"})]})]}),a("div",{children:[e("h3",{style:{marginBottom:"1rem",fontSize:"1.125rem",fontWeight:"600"},children:"Secondary Buttons"}),a("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e(n,{variant:"secondary",size:"small",children:"Small Secondary"}),e(n,{variant:"secondary",size:"medium",children:"Medium Secondary"}),e(n,{variant:"secondary",size:"large",children:"Large Secondary"})]})]}),a("div",{children:[e("h3",{style:{marginBottom:"1rem",fontSize:"1.125rem",fontWeight:"600"},children:"States"}),a("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e(n,{children:"Normal"}),e(n,{disabled:!0,children:"Disabled"}),e(n,{isLoading:!0,children:"Loading"})]})]})]})};var B,_,S;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...(S=(_=m.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var b,z,x;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...(x=(z=u.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var I,L,N;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...(N=(L=p.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var P,D,j;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
}`,...(j=(D=y.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var R,W,w;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <Button isLoading variant="primary">
        Loading...
      </Button>
      <Button isLoading variant="secondary">
        Loading...
      </Button>
    </div>
}`,...(w=(W=g.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var C,O,V;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <Button disabled variant="primary">
        Disabled Primary
      </Button>
      <Button disabled variant="secondary">
        Disabled Secondary
      </Button>
    </div>
}`,...(V=(O=h.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var E,M,q;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <div>
        <h3 style={{
        marginBottom: '1rem',
        fontSize: '1.125rem',
        fontWeight: '600'
      }}>
          Primary Buttons
        </h3>
        <div style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
      }}>
          <Button variant="primary" size="small">
            Small Primary
          </Button>
          <Button variant="primary" size="medium">
            Medium Primary
          </Button>
          <Button variant="primary" size="large">
            Large Primary
          </Button>
        </div>
      </div>
      <div>
        <h3 style={{
        marginBottom: '1rem',
        fontSize: '1.125rem',
        fontWeight: '600'
      }}>
          Secondary Buttons
        </h3>
        <div style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
      }}>
          <Button variant="secondary" size="small">
            Small Secondary
          </Button>
          <Button variant="secondary" size="medium">
            Medium Secondary
          </Button>
          <Button variant="secondary" size="large">
            Large Secondary
          </Button>
        </div>
      </div>
      <div>
        <h3 style={{
        marginBottom: '1rem',
        fontSize: '1.125rem',
        fontWeight: '600'
      }}>States</h3>
        <div style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
      }}>
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button isLoading>Loading</Button>
        </div>
      </div>
    </div>
}`,...(q=(M=f.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};const ue=["Default","Primary","Secondary","Sizes","Loading","Disabled","Showcase"];export{m as Default,h as Disabled,g as Loading,u as Primary,p as Secondary,f as Showcase,y as Sizes,ue as __namedExportsOrder,me as default};
