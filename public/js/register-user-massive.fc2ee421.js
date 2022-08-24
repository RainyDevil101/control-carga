"use strict";(self["webpackChunkbackend"]=self["webpackChunkbackend"]||[]).push([[554],{5706:function(a,e,l){l.r(e),l.d(e,{default:function(){return y}});var s=l(3396),t=l(9242);const n=a=>((0,s.dD)("data-v-c429eaa2"),a=a(),(0,s.Cn)(),a),i={class:"wrapper"},o={class:"container-massive"},r=(0,s.uE)('<div class="massive-header" data-v-c429eaa2><h1 data-v-c429eaa2>Carga de usuarios</h1></div><div class="instructions" data-v-c429eaa2><p data-v-c429eaa2> Descargue la plantilla Excel que encontrará abajo e ingrese los datos en el formato que aparece ahí, para que los datos sean cargados correctamente tenga en cuenta lo siguiente: </p><hr data-v-c429eaa2><ul data-v-c429eaa2><li data-v-c429eaa2>Los nombres y apellidos deben ir en sus respectivas celdas.</li><li data-v-c429eaa2>Los usuarios deben tener un email válido.</li><li data-v-c429eaa2> Debe ingresar el rut con alguno de los siguientes formatos: <ul data-v-c429eaa2><li data-v-c429eaa2>12.345.678-9</li><li data-v-c429eaa2>123456789</li><li data-v-c429eaa2>12*345*678*9</li><li data-v-c429eaa2>12345678-9</li></ul></li><li data-v-c429eaa2><p data-v-c429eaa2>Las divisiones deben escribirse de la siguiente manera:</p><ul data-v-c429eaa2><li data-v-c429eaa2>TENIENTE</li><li data-v-c429eaa2>ANDINA</li><li data-v-c429eaa2>VENTANAS</li><li data-v-c429eaa2>SALVADOR</li><li data-v-c429eaa2>CHUQUICAMATA</li><li data-v-c429eaa2>ESPORADICOS ANDINA</li><li data-v-c429eaa2>ESPORADICOS TENIENTE</li><li data-v-c429eaa2>CASA MATRIZ</li></ul></li><li data-v-c429eaa2><p data-v-c429eaa2>El cargo debe ser uno de los siguientes:</p><ul data-v-c429eaa2><li data-v-c429eaa2>PLANIFICADOR</li><li data-v-c429eaa2>OPERADOR LOGISTICO</li></ul></li></ul></div>',2),c={class:"form-massive"},u={class:"input-button"},d={class:"button-align download-plantilla"},v=n((()=>(0,s._)("div",{class:"button-align select-file"},[(0,s._)("label",{class:"buttons-styles",for:"excel-file"},"Seleccionar archivo")],-1))),p=n((()=>(0,s._)("div",{class:"button-align load-file-button"},[(0,s._)("button",{type:"submit",class:"buttons-styles",value:"Store File"}," Cargar ")],-1))),g={class:"button-align back-button"};function b(a,e,l,n,b,m){return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",o,[r,(0,s._)("div",c,[(0,s._)("form",{onSubmit:e[3]||(e[3]=(0,t.iM)(((...a)=>n.onSubmit&&n.onSubmit(...a)),["prevent"]))},[(0,s._)("div",u,[(0,s._)("input",{type:"file",onChange:e[0]||(e[0]=(...a)=>n.onFile&&n.onFile(...a)),id:"excel-file",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"},null,32),(0,s._)("div",d,[(0,s._)("button",{onClick:e[1]||(e[1]=(...a)=>n.onDownload&&n.onDownload(...a)),type:"button",class:"buttons-styles"}," Descargar plantilla ")]),v,p,(0,s._)("div",g,[(0,s._)("button",{type:"button",onClick:e[2]||(e[2]=e=>a.$router.push({name:"select-register"})),class:"buttons-styles"}," Volver ")])])],32)])])])}var m=l(4870),f=l(7139),h=l(6322);const D=()=>{const a=(0,m.iH)(!0),e=(0,m.iH)(null),l=(0,m.iH)(null),s=async s=>{if(!s)return a.value="Debe seleccionar un archivo",e.value=!1,{errors:a,nice:e};try{const t=new FormData;t.append("file",s);const{data:n}=await h.Z.post("/api/userExcel/uploadFile",t,{headers:{"x-token":localStorage.getItem("token")}});return console.log(n),e.value=!0,a.value=!1,l.value=n.msg,{errors:a,nice:e,message:l}}catch(t){if(t.response.data.msg)return a.value=t.response.data.msg,e.value=!1,console.log(a.value),{errors:a,nice:e,message:l};if(t.response.data.errors){const s=[],n=t.response.data.errors;for(const a of n)s.push(" "+a.msg);return a.value=s,e.value=!1,{errors:a,nice:e,message:l}}return a.value=!0,e.value=!1,{errors:a,nice:e,message:l}}};return{errors:a,sendData:s,nice:e,message:l}};var A=D,w=l(2492),_=l.n(w),C={setup(){const a=(0,f.oR)(),e=(0,m.iH)(null),{sendData:l}=A();return{localFile:e,sendData:l,onSubmit:async()=>{new(_())({title:"Espere por favor",allowOutsideClick:!1}),_().showLoading();const{errors:s,nice:t,message:n}=await l(e.value);!1!==t.value?(await a.dispatch("users/loadUsers"),_().fire("Guardado",`${n.value}`,"success").then((function(a){location.reload()}))):_().fire("Error",`${s.value}.`,"error").then((function(a){location.reload()}))},onFile:async a=>{const l=a.target.files[0];l?(e.value=l,console.log(e.value)):e.value=null},onDownload:async()=>{const a="../files/plantilla_carga_usuarios.xlsx";window.location.href=a}}}},E=l(89);const S=(0,E.Z)(C,[["render",b],["__scopeId","data-v-c429eaa2"]]);var y=S}}]);
//# sourceMappingURL=register-user-massive.fc2ee421.js.map