import{j as e,n as c,f as i,d as n,r as g,o as m,p,C as d,L as l}from"./index-BQzuh-gl.js";import{H as y,L as u}from"./Loading-C7GyUsR3.js";import"./CartItem-BrsBYg-r.js";import{G as x}from"./GridList-D3fUyodl.js";import"./Spinner-jn7EIcrl.js";import"./Button-fxhDizMt.js";import"./Button-DL7ha1n5.js";import"./Form-d93rxYQ-.js";import"./warning-DLf8qE4y.js";const j="_categoryImg_u6vs3_1",_="_category_u6vs3_1",h="_categoryTitle_u6vs3_43",f={categoryImg:j,category:_,categoryTitle:h},{category:C,categoryImg:v,categoryTitle:L}=f,I=({title:t,img:r,prefix:s})=>e.jsx("div",{className:C,children:e.jsxs(c,{to:`/categories/products/${s}`,children:[e.jsx("div",{className:v,children:e.jsx("img",{src:r,alt:t})}),e.jsx("div",{className:L,children:t})]})}),E=()=>{const t=i(),{records:r,loading:s,error:o}=n(a=>a.categories);return g.useEffect(()=>{const a=t(m());return()=>{a.abort(),t(p())}},[t]),{records:r,loading:s,error:o}},D=()=>{const{records:t,loading:r,error:s}=E();return e.jsxs(d,{children:[e.jsx(y,{title:"Categories"}),e.jsx(u,{loading:r,error:s,type:"category",children:e.jsx(x,{records:t,renderItem:o=>e.jsx(I,{...o}),Empty:e.jsx(l,{type:"empty",message:"Your categories are empty"})})})]})};export{D as default};
