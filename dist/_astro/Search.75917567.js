import{r as u}from"./index.45a47ed6.js";var o={},p={get exports(){return o},set exports(r){o=r}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=u,_=Symbol.for("react.element"),d=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,x=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function i(r,e,n){var t,s={},a=null,c=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(c=e.ref);for(t in e)m.call(e,t)&&!h.hasOwnProperty(t)&&(s[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)s[t]===void 0&&(s[t]=e[t]);return{$$typeof:_,type:r,key:a,ref:c,props:s,_owner:x.current}}l.Fragment=d;l.jsx=i;l.jsxs=i;(function(r){r.exports=l})(p);function y(){const[r,e]=u.useState(""),n=s=>e(s.target.value),t="/results/";return o.jsx("div",{children:o.jsxs("center",{children:[o.jsx("h1",{class:"mt-5",children:"Search Movie"}),o.jsx("form",{action:t+r,method:"POST",children:o.jsx("input",{type:"search",class:"form-control p-3",value:r,onChange:n,placeholder:"Digita la pelicula que desea buscar"})})]})})}export{y as default};
