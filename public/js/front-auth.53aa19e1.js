"use strict";(self["webpackChunkbackend"]=self["webpackChunkbackend"]||[]).push([[853],{3820:function(r,n,e){e.r(n),e.d(n,{default:function(){return y}});var o=e(3396),a=e(9242);const s=r=>((0,o.dD)("data-v-4d923b6d"),r=r(),(0,o.Cn)(),r),t={class:"wrapper"},u={class:"login"},l=s((()=>(0,o._)("div",{class:"selector"},[(0,o._)("h4",null,"INICIAR SESIÓN")],-1))),i={class:"forum-mail","data-validate":"Enter username"},c={class:"forum-password","data-validate":"Enter password"},d={class:"in-forum"},p=s((()=>(0,o._)("button",{class:"login-boton"},"Ingresar",-1))),m=s((()=>(0,o._)("div",{class:"change-forum mt-5"},[(0,o._)("p",null,"Si no tienes cuenta, ponte en contacto con el administrador.")],-1)));function v(r,n,e,s,v,b){return(0,o.wg)(),(0,o.iD)("div",t,[(0,o._)("div",u,[l,(0,o._)("form",{class:"login-forum",onSubmit:n[3]||(n[3]=(0,a.iM)(((...r)=>s.onSubmit&&s.onSubmit(...r)),["prevent"]))},[(0,o._)("div",i,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":n[0]||(n[0]=r=>s.userForm.rut=r),type:"text",class:"input-forum",placeholder:"Rut Ej: 12.345.678-9",required:""},null,512),[[a.nr,s.userForm.rut]])]),(0,o._)("div",c,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":n[1]||(n[1]=r=>s.userForm.passwordT=r),type:"password",class:"input-forum",placeholder:"Contraseña",required:""},null,512),[[a.nr,s.userForm.passwordT]])]),(0,o._)("div",d,[p,(0,o._)("button",{type:"button",onClick:n[2]||(n[2]=(...r)=>s.onBack&&s.onBack(...r)),class:"login-boton"}," Volver ")]),m],32)])])}var b=e(4870),f=e(678),_=e(4207),w=e(2492),k=e.n(w),h={setup(){const r=(0,f.tv)(),{loginUser:n}=(0,_.Z)(),e=(0,b.iH)({rut:"19.268.695-4",passwordT:"HERRERACARRENO"});return{userForm:e,onSubmit:async()=>{const{ok:o,errors:a}=await n(e.value);o?r.push({name:"home-view"}):k().fire("Error",`${a}.`,"error")},onBack:async()=>{r.push({name:"select-login"})}}}},g=e(89);const E=(0,g.Z)(h,[["render",v],["__scopeId","data-v-4d923b6d"]]);var y=E}}]);
//# sourceMappingURL=front-auth.53aa19e1.js.map