var c=Object.defineProperty,l=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var o=(a,r,e)=>r in a?c(a,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[r]=e,d=(a,r)=>{for(var e in r||(r={}))m.call(r,e)&&o(a,e,r[e]);if(t)for(var e of t(r))f.call(r,e)&&o(a,e,r[e]);return a},s=(a,r)=>l(a,q(r));import{u as i,a as b}from"./use-dark.3db47001.js";import{c as k,b as v,h as g,d as C,n as h}from"./index.3743634b.js";var Q=k({name:"QCard",props:s(d({},i),{tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean}),setup(a,{slots:r}){const e=h(),u=b(a,e.proxy.$q),n=v(()=>"q-card"+(u.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>g(a.tag,{class:n.value},C(r.default))}});export{Q};
