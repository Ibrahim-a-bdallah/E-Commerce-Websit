import{r as m,j as x,c as d,u as N,I as B,J as h}from"./index-BQzuh-gl.js";function j({as:t,bsPrefix:s,className:p,...e}){s=N(s,"col");const f=B(),l=h(),a=[],i=[];return f.forEach(n=>{const u=e[n];delete e[n];let o,r,c;typeof u=="object"&&u!=null?{span:o,offset:r,order:c}=u:o=u;const $=n!==l?`-${n}`:"";o&&a.push(o===!0?`${s}${$}`:`${s}${$}-${o}`),c!=null&&i.push(`order${$}-${c}`),r!=null&&i.push(`offset${$}-${r}`)}),[{...e,className:d(p,...a,...i)},{as:t,bsPrefix:s,spans:a}]}const R=m.forwardRef((t,s)=>{const[{className:p,...e},{as:f="div",bsPrefix:l,spans:a}]=j(t);return x.jsx(f,{...e,ref:s,className:d(p,!a.length&&l)})});R.displayName="Col";const w=m.forwardRef(({bsPrefix:t,className:s,as:p="div",...e},f)=>{const l=N(t,"row"),a=B(),i=h(),n=`${l}-cols`,u=[];return a.forEach(o=>{const r=e[o];delete e[o];let c;r!=null&&typeof r=="object"?{cols:c}=r:c=r;const $=o!==i?`-${o}`:"";c!=null&&u.push(`${n}${$}-${c}`)}),x.jsx(p,{ref:f,...e,className:d(s,l,...u)})});w.displayName="Row";const y=m.forwardRef(({bsPrefix:t,variant:s,animation:p="border",size:e,as:f="div",className:l,...a},i)=>{t=N(t,"spinner");const n=`${t}-${p}`;return x.jsx(f,{ref:i,...a,className:d(l,n,e&&`${n}-${e}`,s&&`text-${s}`)})});y.displayName="Spinner";export{R as C,w as R,y as S};
