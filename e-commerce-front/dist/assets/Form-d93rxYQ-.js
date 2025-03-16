import{r as t,j as r,c as d,u as i}from"./index-BQzuh-gl.js";import{P as y}from"./warning-DLf8qE4y.js";import{C as J}from"./Spinner-jn7EIcrl.js";function K(e,o){return t.Children.toArray(e).some(a=>t.isValidElement(a)&&a.type===o)}const Q={type:y.string,tooltip:y.bool,as:y.elementType},N=t.forwardRef(({as:e="div",className:o,type:a="valid",tooltip:s=!1,...l},n)=>r.jsx(e,{...l,ref:n,className:d(o,`${a}-${s?"tooltip":"feedback"}`)}));N.displayName="Feedback";N.propTypes=Q;const u=t.createContext({}),$=t.forwardRef(({id:e,bsPrefix:o,className:a,type:s="checkbox",isValid:l=!1,isInvalid:n=!1,as:m="input",...p},f)=>{const{controlId:c}=t.useContext(u);return o=i(o,"form-check-input"),r.jsx(m,{...p,ref:f,type:s,id:e||c,className:d(a,o,l&&"is-valid",n&&"is-invalid")})});$.displayName="FormCheckInput";const h=t.forwardRef(({bsPrefix:e,className:o,htmlFor:a,...s},l)=>{const{controlId:n}=t.useContext(u);return e=i(e,"form-check-label"),r.jsx("label",{...s,ref:l,htmlFor:a||n,className:d(o,e)})});h.displayName="FormCheckLabel";const O=t.forwardRef(({id:e,bsPrefix:o,bsSwitchPrefix:a,inline:s=!1,reverse:l=!1,disabled:n=!1,isValid:m=!1,isInvalid:p=!1,feedbackTooltip:f=!1,feedback:c,feedbackType:F,className:C,style:w,title:v="",type:g="checkbox",label:x,children:R,as:b="input",...q},z)=>{o=i(o,"form-check"),a=i(a,"form-switch");const{controlId:L}=t.useContext(u),D=t.useMemo(()=>({controlId:e||L}),[L,e]),T=!R&&x!=null&&x!==!1||K(R,h),H=r.jsx($,{...q,type:g==="switch"?"checkbox":g,ref:z,isValid:m,isInvalid:p,disabled:n,as:b});return r.jsx(u.Provider,{value:D,children:r.jsx("div",{style:w,className:d(C,T&&o,s&&`${o}-inline`,l&&`${o}-reverse`,g==="switch"&&a),children:R||r.jsxs(r.Fragment,{children:[H,T&&r.jsx(h,{title:v,children:x}),c&&r.jsx(N,{type:F,tooltip:f,children:c})]})})})});O.displayName="FormCheck";const j=Object.assign(O,{Input:$,Label:h}),S=t.forwardRef(({bsPrefix:e,type:o,size:a,htmlSize:s,id:l,className:n,isValid:m=!1,isInvalid:p=!1,plaintext:f,readOnly:c,as:F="input",...C},w)=>{const{controlId:v}=t.useContext(u);return e=i(e,"form-control"),r.jsx(F,{...C,type:o,size:s,ref:w,readOnly:c,id:l||v,className:d(n,f?`${e}-plaintext`:e,a&&`${e}-${a}`,o==="color"&&`${e}-color`,m&&"is-valid",p&&"is-invalid")})});S.displayName="FormControl";const U=Object.assign(S,{Feedback:N}),E=t.forwardRef(({className:e,bsPrefix:o,as:a="div",...s},l)=>(o=i(o,"form-floating"),r.jsx(a,{ref:l,className:d(e,o),...s})));E.displayName="FormFloating";const k=t.forwardRef(({controlId:e,as:o="div",...a},s)=>{const l=t.useMemo(()=>({controlId:e}),[e]);return r.jsx(u.Provider,{value:l,children:r.jsx(o,{...a,ref:s})})});k.displayName="FormGroup";const G=t.forwardRef(({as:e="label",bsPrefix:o,column:a=!1,visuallyHidden:s=!1,className:l,htmlFor:n,...m},p)=>{const{controlId:f}=t.useContext(u);o=i(o,"form-label");let c="col-form-label";typeof a=="string"&&(c=`${c} ${c}-${a}`);const F=d(l,o,s&&"visually-hidden",a&&c);return n=n||f,a?r.jsx(J,{ref:p,as:"label",className:F,htmlFor:n,...m}):r.jsx(e,{ref:p,className:F,htmlFor:n,...m})});G.displayName="FormLabel";const M=t.forwardRef(({bsPrefix:e,className:o,id:a,...s},l)=>{const{controlId:n}=t.useContext(u);return e=i(e,"form-range"),r.jsx("input",{...s,type:"range",ref:l,className:d(o,e),id:a||n})});M.displayName="FormRange";const V=t.forwardRef(({bsPrefix:e,size:o,htmlSize:a,className:s,isValid:l=!1,isInvalid:n=!1,id:m,...p},f)=>{const{controlId:c}=t.useContext(u);return e=i(e,"form-select"),r.jsx("select",{...p,size:a,ref:f,className:d(s,e,o&&`${e}-${o}`,l&&"is-valid",n&&"is-invalid"),id:m||c})});V.displayName="FormSelect";const A=t.forwardRef(({bsPrefix:e,className:o,as:a="small",muted:s,...l},n)=>(e=i(e,"form-text"),r.jsx(a,{...l,ref:n,className:d(o,e,s&&"text-muted")})));A.displayName="FormText";const B=t.forwardRef((e,o)=>r.jsx(j,{...e,ref:o,type:"switch"}));B.displayName="Switch";const W=Object.assign(B,{Input:j.Input,Label:j.Label}),_=t.forwardRef(({bsPrefix:e,className:o,children:a,controlId:s,label:l,...n},m)=>(e=i(e,"form-floating"),r.jsxs(k,{ref:m,className:d(o,e),controlId:s,...n,children:[a,r.jsx("label",{htmlFor:s,children:l})]})));_.displayName="FloatingLabel";const X={_ref:y.any,validated:y.bool,as:y.elementType},I=t.forwardRef(({className:e,validated:o,as:a="form",...s},l)=>r.jsx(a,{...s,ref:l,className:d(e,o&&"was-validated")}));I.displayName="Form";I.propTypes=X;const ee=Object.assign(I,{Group:k,Control:U,Floating:E,Check:j,Switch:W,Label:G,Text:A,Range:M,Select:V,FloatingLabel:_});export{ee as F};
