(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"47f5":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("q-toolbar",{staticClass:"bg-grey-10 text-white"},[a("q-toolbar-title",[t._v("Finca Raiz")]),a("q-input",{attrs:{dark:"",dense:"",rounded:"",outlined:"",label:"Buscar"},model:{value:t.busqueda,callback:function(e){t.busqueda=e},expression:"busqueda"}})],1),""==t.Fincaraizes?a("esqueleto"):t._e(),a("div",{staticClass:"flex"},t._l(t.Fincaraizes,(function(e,i){return a("div",{key:i,staticClass:"flex"},[a("q-card",{staticClass:"q-ma-sm",staticStyle:{"max-width":"300px"}},[a("q-item",[a("q-item-section",[a("q-item-label",[t._v("Se:"+t._s(e.estado))]),a("q-item-label",{attrs:{caption:""}},[t._v("Costo"+t._s(e.costo))])],1)],1),a("img",{attrs:{src:e.link}}),a("q-item",[t._v("Descripcion:"+t._s(e.description))]),a("q-list",[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"primary",name:"room"}})],1),a("q-item-section",[a("q-item-label",[t._v("Dirección")]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.ciudad)+"-"+t._s(e.direccion))])],1)],1),a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"red",name:"phone"}})],1),a("q-item-section",[a("q-item-label",[t._v("Telefono:")]),1==e.wt?a("q-item-label",{attrs:{caption:""}},[t._v("Whatsapp")]):t._e(),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.telefono))])],1)],1)],1)],1)],1)})),0)],1)},s=[],n=a("ded3"),c=a.n(n),o=a("2f62"),r=a("bf6a"),l={meta:{title:"Finca Raiz",titleTemplate:t=>`${t} - La ruana`,meta:{description:{name:"description",content:"Page 1"},keywords:{name:"keywords",content:"chiquinquira saboya caldas productos"},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}}},components:{esqueleto:r["a"]},methods:c()({},Object(o["d"])("fincaraiz",["setQuery"])),computed:c()(c()(c()({},Object(o["c"])("fincaraiz",["Fincaraizes"])),Object(o["e"])("fincaraiz",["filter"])),{},{busqueda:{get(){return this.filter},set(t){this.setQuery(t)}}})},m=l,u=a("2877"),q=a("9989"),d=a("65c6"),p=a("6ac5"),b=a("27f9"),f=a("f09f"),_=a("66e5"),v=a("4074"),Q=a("0170"),h=a("1c1c"),x=a("0016"),y=a("eebe"),k=a.n(y),w=Object(u["a"])(m,i,s,!1,null,null,null);e["default"]=w.exports;k()(w,"components",{QPage:q["a"],QToolbar:d["a"],QToolbarTitle:p["a"],QInput:b["a"],QCard:f["a"],QItem:_["a"],QItemSection:v["a"],QItemLabel:Q["a"],QList:h["a"],QIcon:x["a"]})},bf6a:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-center"},t._l(10,(function(t,e){return a("div",{key:e},[a("q-card",{staticClass:"q-ma-sm",staticStyle:{"max-width":"300px"}},[a("q-item",[a("q-item-section",[a("q-item-label",[a("q-skeleton",{attrs:{type:"text"}})],1),a("q-item-label",{attrs:{caption:""}},[a("q-skeleton",{attrs:{type:"text"}})],1)],1)],1),a("q-skeleton",{attrs:{height:"200px",square:""}}),a("q-card-actions",{staticClass:"q-gutter-md",attrs:{align:"right"}},[a("q-skeleton",{attrs:{type:"QBtn"}}),a("q-skeleton",{attrs:{type:"QBtn"}})],1)],1)],1)})),0)},s=[],n={data(){return{datos:"f"}}},c=n,o=a("2877"),r=a("f09f"),l=a("66e5"),m=a("4074"),u=a("0170"),q=a("293e"),d=a("4b7e"),p=a("eebe"),b=a.n(p),f=Object(o["a"])(c,i,s,!1,null,null,null);e["a"]=f.exports;b()(f,"components",{QCard:r["a"],QItem:l["a"],QItemSection:m["a"],QItemLabel:u["a"],QSkeleton:q["a"],QCardActions:d["a"]})}}]);