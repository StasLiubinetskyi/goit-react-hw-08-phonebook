"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[758],{8758:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(2791),a=n(9434),i=n(4270),s=function(e){return e.contacts.isLoading},o=function(e){return e.contacts.items},c=n(4852),u=n(493),l=n(6259),d=n(890),h=n(3457),m=n(8856),x=n(4294),f=n(184),v=function(e){var t=e.id,n=e.text,r=(0,a.I0)();return(0,f.jsxs)("div",{children:[(0,f.jsx)(d.Z,{variant:"body1",children:n}),(0,f.jsx)(x.Z,{variant:"contained",color:"primary",onClick:function(){return r((0,m.GK)(t))},children:"Delete"})]})},j=(0,h.Z)(c.ZP)((function(e){return{display:"flex",justifyContent:"space-between",alignItems:"center",padding:e.theme.spacing(2),borderBottom:"1px solid lightgray"}})),p=function(){var e=(0,a.v9)(o);return(0,f.jsx)(u.Z,{children:e.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,f.jsxs)(j,{alignItems:"flex-start",children:[(0,f.jsx)(l.Z,{primary:"Name: ".concat(n),secondary:(0,f.jsxs)(d.Z,{variant:"body2",color:"textSecondary",children:["Number: ",r]})}),(0,f.jsx)(v,{id:t})]},t)}))})},b=n(9439),g=n(91),Z=n(1889),y=function(){var e=(0,a.I0)(),t=(0,r.useState)(""),n=(0,b.Z)(t,2),i=n[0],s=n[1],o=(0,r.useState)(""),c=(0,b.Z)(o,2),u=c[0],l=c[1],d=(0,r.useState)(""),h=(0,b.Z)(d,2),v=h[0],j=h[1],p=(0,r.useState)(""),y=(0,b.Z)(p,2),_=y[0],k=y[1];return(0,f.jsx)("form",{onSubmit:function(t){t.preventDefault(),i&&u&&!v&&!_?(e((0,m.uK)({name:i,number:u})),s(""),l("")):alert("Please correct the form errors before submitting.")},children:(0,f.jsxs)(Z.ZP,{container:!0,spacing:2,children:[(0,f.jsx)(Z.ZP,{item:!0,xs:12,children:(0,f.jsx)(g.Z,{fullWidth:!0,label:"Name",variant:"outlined",name:"name",value:i,onChange:function(e){s(e.target.value),e.target.value.length<2?j("Name should be at least 2 characters"):j("")},error:!!v,helperText:v})}),(0,f.jsx)(Z.ZP,{item:!0,xs:12,children:(0,f.jsx)(g.Z,{fullWidth:!0,label:"Phone Number",variant:"outlined",name:"tel",value:u,onChange:function(e){l(e.target.value);/^\+?\d{0,4}?[-.\s]?\(?\d{0,3}?\)?[-.\s]?\d{0,4}[-.\s]?\d{0,4}[-.\s]?\d{0,9}$/.test(e.target.value)?k(""):k("Invalid phone number format")},error:!!_,helperText:_})}),(0,f.jsx)(Z.ZP,{item:!0,xs:12,children:(0,f.jsx)(x.Z,{type:"submit",variant:"contained",color:"primary",children:"Add Contact"})})]})})};function _(){var e=(0,a.I0)(),t=(0,a.v9)(s);return(0,r.useEffect)((function(){e((0,m.yF)())}),[e]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i.q,{children:(0,f.jsx)("title",{children:"Your contact"})}),(0,f.jsx)(y,{}),(0,f.jsx)("div",{children:t&&"Request in progress..."}),(0,f.jsx)(p,{})]})}}}]);
//# sourceMappingURL=758.f1c5e458.chunk.js.map