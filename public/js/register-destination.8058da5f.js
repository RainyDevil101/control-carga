"use strict";(self["webpackChunkbackend"]=self["webpackChunkbackend"]||[]).push([[73],{2820:function(e,t,n){var s=n(4870),a=n(3396),i=n(7139);const o=e=>{const t=(0,i.oR)(),n=(0,s.iH)(""),o=(0,s.iH)(!1),r=(e="")=>{const s=(0,a.Fl)((()=>t.getters["destinations/getDestinationsByTerm"](e)));n.value=s.value,n.value.length>0&&(o.value=!0)};r(e);const d=(0,s.iH)(""),l=(0,s.iH)(!1),u=(e="")=>{const n=(0,a.Fl)((()=>t.getters["users/getUserByTerm"](e)));d.value=n.value,d.value.length>0&&(l.value=!0)};u(e);const c=(0,s.iH)(""),p=(0,s.iH)(!1),v=(e="")=>{const n=(0,a.Fl)((()=>t.getters["divisions/getDivisionsByTerm"](e)));c.value=n.value,c.value.length>0&&(p.value=!0)};return v(e),{destinations:n,showDestinations:o,destinationTerm:r,getStatusDestination:(0,a.Fl)((()=>t.getters["destinations/getStatus"])),destinationUpdate:(0,a.Fl)((()=>t.getters["destinations/getUpdateDestination"])),destinationById:(0,a.Fl)((()=>t.getters["destinations/changeDestinationId"])),destinationIdStatus:(0,a.Fl)((()=>t.getters["destinations/getDestinationIdStatus"])),users:d,showUsers:l,userTerm:u,getStatusLocation:(0,a.Fl)((()=>t.getters["users/getStatus"])),userUpdate:(0,a.Fl)((()=>t.getters["users/getUpdateUser"])),userById:(0,a.Fl)((()=>t.getters["users/changeUserId"])),userIdStatus:(0,a.Fl)((()=>t.getters["users/getUserIdStatus"])),divisions:c,showDivisions:p,divisionTerm:v,getStatusDivision:(0,a.Fl)((()=>t.getters["divisions/getStatus"])),divisionUpdate:(0,a.Fl)((()=>t.getters["divisions/getUpdateDivision"])),divisionById:(0,a.Fl)((()=>t.getters["divisions/changeDivisionId"])),divisionIdStatus:(0,a.Fl)((()=>t.getters["divisions/getDivisionIdStatus"]))}};t["Z"]=o},6267:function(e,t,n){n.d(t,{Z:function(){return p}});var s=n(3396);const a=e=>((0,s.dD)("data-v-3b6b4a29"),e=e(),(0,s.Cn)(),e),i={class:"loader-rev"},o=a((()=>(0,s._)("div",null,null,-1))),r=[o];function d(e,t,n,a,o,d){return(0,s.wg)(),(0,s.iD)("div",i,r)}var l={},u=n(89);const c=(0,u.Z)(l,[["render",d],["__scopeId","data-v-3b6b4a29"]]);var p=c},3329:function(e,t,n){n.r(t),n.d(t,{default:function(){return X}});var s=n(3396),a=n(9242);const i=e=>((0,s.dD)("data-v-5c9d35ba"),e=e(),(0,s.Cn)(),e),o={key:0,class:"update-destination"},r={key:2,class:"wrapper"},d={class:"destinations"},l=i((()=>(0,s._)("div",{class:"header"},[(0,s._)("h1",null,"Destinos")],-1))),u={class:"create"},c={class:"form"},p=i((()=>(0,s._)("button",{type:"submit",class:"button-forum"},"CREAR",-1))),v={class:"search"},m={key:0,class:"body"},g={key:1,class:"not-register"},D=i((()=>(0,s._)("h1",null,"NO HAY REGISTROS",-1))),h=[D],b={class:"button-wrapper"};function w(e,t,n,i,D,w){const f=(0,s.up)("update-destination"),_=(0,s.up)("loader"),y=(0,s.up)("destinations");return(0,s.wg)(),(0,s.iD)(s.HY,null,[!0===i.destinationUpdate?((0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)(f,{"onOn:close":i.onShowUpdateDestination},null,8,["onOn:close"])])):(0,s.kq)("",!0),"CARGANDO"===i.getStatusDestination?((0,s.wg)(),(0,s.j4)(_,{key:1,class:"loader-wrapper"})):((0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",d,[l,(0,s._)("div",u,[(0,s._)("form",{onSubmit:t[1]||(t[1]=(0,a.iM)(((...e)=>i.onSubmit&&i.onSubmit(...e)),["prevent"]))},[(0,s._)("div",c,[(0,s.wy)((0,s._)("input",{type:"text",placeholder:"Nombre","onUpdate:modelValue":t[0]||(t[0]=e=>i.destinationForm.name=e),maxlength:"25"},null,512),[[a.nr,i.destinationForm.name]]),p])],32)]),(0,s._)("div",v,[(0,s.wy)((0,s._)("input",{type:"text",placeholder:"Buscar destino","onUpdate:modelValue":t[2]||(t[2]=e=>i.term=e)},null,512),[[a.nr,i.term]])]),!0===i.showDestinations?((0,s.wg)(),(0,s.iD)("div",m,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.destinations,(e=>((0,s.wg)(),(0,s.j4)(y,{key:e.id,destination:e,"onOn:open":i.onShowUpdateDestination},null,8,["destination","onOn:open"])))),128))])):((0,s.wg)(),(0,s.iD)("div",g,h)),(0,s._)("div",b,[(0,s._)("button",{type:"button",onClick:t[3]||(t[3]=t=>e.$router.push({name:"select-register"})),class:"buttons-styles"}," Volver ")])])]))],64)}var f=n(7139),_=n(4870),y=n(2492),U=n.n(y),S=n(6267),I=n(2268);const k={class:"destination"},H={class:"destination"};function C(e,t,n,a,i,o){return(0,s.wg)(),(0,s.iD)("div",{onClick:t[0]||(t[0]=t=>e.$emit("on:open",{id:a.id})),class:"destination-container"},[(0,s._)("span",k,(0,I.zw)(a.destination.id),1),(0,s._)("span",H,(0,I.zw)(a.destination.nombre),1)])}var F={emits:["on:open"],props:{destination:{type:Object,required:!0}},setup(e){const t=(0,_.iH)(e.destination),n=e.destination.id;return{destination:t,id:n}}},P=n(89);const T=(0,P.Z)(F,[["render",C],["__scopeId","data-v-9a21a3e4"]]);var Z=T,x=n(6322);const B=()=>{const e=(0,_.iH)(!0),t=(0,_.iH)(),n=(0,_.iH)(!1),s=(0,_.iH)(!0),a=(0,_.iH)(!1),i=(0,_.iH)(),o=(0,_.iH)(!0),r=(0,_.iH)(!1),d=async s=>{if(""===s.name||!s.name)return e.value="Debe llenar los campos",t.value="",{errorsPost:e,location:location,nicePost:n};{const{name:i}=s,o=i;try{const s=await x.Z.post("/api/destination",{nombre:o},{headers:{"x-token":localStorage.getItem("token")}});return t.value=s.data.destination,n.value=!0,e.value=!1,{errorsPost:e,nicePost:n,destination:t}}catch(a){if(a.response.data.msg)return e.value=a.response.data.msg,t.value=null,n.value=!1,{errorsPost:e,nicePost:n,destination:t};if(a.response.data.errors){const s=[],i=a.response.data.errors;for(const e of i)s.push(" "+e.msg);return e.value=s,t.value=null,n.value=!1,{errorsPost:e,nicePost:n,destination:t}}return t.value=resp.data.code,e.value=!1,n.value=!0,{errorsPost:e,nicePost:n,destination:t}}}},l=async(e,t)=>{if(!e||""===e.nombre)return a.value=!1,s.value="No se pudo actualizar",{niceUpdate:a,errorsUpdate:s};try{await x.Z.put(`/api/destination/${t}`,{updateForum:e},{headers:{"x-token":localStorage.getItem("token")}});return a.value=!0,s.value=!1,{niceUpdate:a,errorsUpdate:s}}catch(n){if(n.response.data.msg)return s.value=n.response.data.msg,{niceUpdate:a,errorsUpdate:s};if(n.response.data.errors){const e=[],t=n.response.data.errors;for(const n of t)e.push(" "+n.msg);return s.value=e,{niceUpdate:a,errorsUpdate:s}}return{niceUpdate:a,errorsUpdate:s}}},u=async(e="")=>{if(""===e||!e)return o.value="No existe",{errorsDelete:o,niceDelete:r};try{const t=await x.Z["delete"](`/api/destination/${e}`,{headers:{"x-token":localStorage.getItem("token")}});return i.value=t.data,r.value=!0,o.value=!1,{errorsDelete:o,niceDelete:r,idDelete:i}}catch(t){if(t.response.data.msg)return o.value=t.response.data.msg,{niceDelete:r,errorsDelete:o};if(t.response.data.errors){const e=[],n=t.response.data.errors;for(const t of n)e.push(" "+t.msg);return o.value=e,{niceDelete:r,errorsDelete:o}}return{niceDelete:r,errorsDelete:o}}};return{postDestination:d,errorsPost:e,destination:t,nicePost:n,updateDestination:l,errorsUpdate:s,niceUpdate:a,deleteDestination:u,errorsDelete:o,idDelete:i,niceDelete:r}};var E=B,N=n(2820);const O=e=>((0,s.dD)("data-v-ba0ff8ba"),e=e(),(0,s.Cn)(),e),R={class:"modal-container"},z={class:"update-wrapper"},$={class:"name margin-item"},L=O((()=>(0,s._)("span",null,"Nombre:",-1))),A={class:"name margin-item"},G=O((()=>(0,s._)("span",null,"id:",-1))),V={class:"input-change-name margin-item"},Y={class:"update-button"},j=O((()=>(0,s._)("button",{class:"btn btn-warning",type:"submit"}," Cambiar Nombre ",-1)));function M(e,t,n,i,o,r){return(0,s.wg)(),(0,s.iD)("div",{class:"modal-background fade-in",onClick:t[3]||(t[3]=(0,a.iM)((t=>e.$emit("on:close")),["self"]))},[(0,s._)("div",R,[(0,s._)("div",z,[(0,s._)("form",{onSubmit:t[2]||(t[2]=(0,a.iM)(((...e)=>i.onSubmit&&i.onSubmit(...e)),["prevent"]))},[(0,s._)("div",$,[L,(0,s._)("p",null,[(0,s._)("b",null,(0,I.zw)(i.destination.nombre),1)])]),(0,s._)("div",A,[G,(0,s._)("p",null,[(0,s._)("b",null,(0,I.zw)(i.destinationId),1)])]),(0,s._)("div",V,[(0,s.wy)((0,s._)("input",{type:"text",placeholder:"","onUpdate:modelValue":t[0]||(t[0]=e=>i.destinationName=e)},null,512),[[a.nr,i.destinationName]])]),(0,s._)("div",Y,[j,(0,s._)("button",{type:"button",class:"btn btn-danger",onClick:t[1]||(t[1]=(...e)=>i.onDelete&&i.onDelete(...e))},"Eliminar")])],32)])])])}var q={components:{Loader:S.Z},emits:["on:close"],setup(){const e=(0,f.oR)(),{destinationById:t}=(0,N.Z)(),n=(0,_.iH)(""),s=(0,_.iH)(""),a=(0,_.iH)(""),{deleteDestination:i,updateDestination:o}=E(),r=(0,_.iH)({nombre:""});return n.value=t.value.destinationToChange,s.value=t.value.destinationIdToChange,a.value=t.value.destinationToChange.nombre,{destinationById:t,destinationUpdate:r,destinationId:s,destination:n,destinationName:a,onSubmit:async()=>{new(U())({title:"Espere por favor",allowOutsideClick:!1}),U().showLoading();const{errorsUpdate:t,niceUpdate:n}=await o(a.value,s.value);!1!==n.value?(await e.dispatch("destinations/loadDestinations"),U().fire("Guardado","Destino actualizado con éxito","success").then((function(e){location.reload()}))):U().fire("Error",`${t.value}.`,"error")},onDelete:async()=>{const{isConfirmed:t}=await U().fire({title:"¿Estás seguro?",text:"No se podrá recuperar una vez borrado",showDenyButton:!0,confirmButtonText:"Estoy seguro"});if(t){new(U())({title:"Espere por favor",allowOutsideClick:!1}),U().showLoading();const{idDelete:t,errorsDelete:n,niceDelete:a}=await i(s.value);!0===a.value&&(await e.dispatch("destinations/loadDestinations"),U().fire("Eliminado","","success").then((function(e){location.reload()})))}}}}};const K=(0,P.Z)(q,[["render",M],["__scopeId","data-v-ba0ff8ba"]]);var W=K,J={components:{destinations:Z,Loader:S.Z,UpdateDestination:W},setup(){const e=(0,f.oR)(),t=(0,_.iH)(""),{destinationTerm:n,getStatusDestination:a,destinations:i,destinationUpdate:o,destinationIdStatus:r,showDestinations:d}=(0,N.Z)(t.value),l=(0,_.iH)({name:""});(0,s.YP)((()=>t.value),(()=>n(t.value)));const{postDestination:u}=E();return{destinationForm:l,postDestination:u,term:t,destinationTerm:n,getStatusDestination:a,destinations:i,destinationUpdate:o,destinationIdStatus:r,showDestinations:d,onSubmit:async()=>{new(U())({title:"Espere por favor",allowOutsideClick:!1}),U().showLoading();const{errorsPost:t,destination:n,nicePost:s}=await u(l.value);!1!==s.value?(await e.dispatch("destinations/loadDestinations"),U().fire("Guardado","Destino registrada con éxito","success").then((function(e){location.reload()}))):U().fire("Error",`${t.value}.`,"error")},onShowUpdateDestination:t=>!1===o.value?(e.dispatch("destinations/changeDestinationId",t),void e.dispatch("destinations/changeDestinationUpdate",!0)):void e.dispatch("destinations/changeDestinationUpdate",!1)}}};const Q=(0,P.Z)(J,[["render",w],["__scopeId","data-v-5c9d35ba"]]);var X=Q}}]);
//# sourceMappingURL=register-destination.8058da5f.js.map