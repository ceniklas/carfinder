(this["webpackJsonpcar-app"]=this["webpackJsonpcar-app"]||[]).push([[0],{112:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(11),i=t.n(c),l=(t(86),t(9)),s=t(20),o=t(15),d=(t(53),t(159)),u=t(68),b=t.n(u),j=t(67),f=t.n(j),m=t(69),g=t(171),h=t(4),O=function(e){var a=e.data;return Object(h.jsxs)("div",{style:{marginTop:"1rem"},children:[Object(h.jsxs)(m.a,{variant:"h6",align:"left",children:["Total: ",a.total]}),Object(h.jsxs)("div",{style:{height:"2rem",background:"#F0EBD8",display:"flex",padding:"0.15rem"},children:[Object(h.jsx)(g.a,{title:"Skatt: ".concat(a.tax),children:Object(h.jsx)("div",{style:{height:"2rem",width:"".concat(a.tax/a.total*100,"%"),background:"#0D1321"}})}),Object(h.jsx)(g.a,{title:"F\xf6rs\xe4kring: ".concat(a.ensurance),children:Object(h.jsx)("div",{style:{height:"2rem",width:"".concat(a.ensurance/a.total*100,"%"),background:"#1D2D44"}})}),Object(h.jsx)(g.a,{title:"Br\xe4nsle: ".concat(a.fuel),children:Object(h.jsx)("div",{style:{height:"2rem",width:"".concat(a.fuel/a.total*100,"%"),background:"#3E5C76"}})}),Object(h.jsx)(g.a,{title:"V\xe4rdeminskning: ".concat(a.valueReduction),children:Object(h.jsx)("div",{style:{height:"2rem",width:"".concat(a.valueReduction/a.total*100,"%"),background:"#748CAB"}})})]})]})},x=t(157),v=t(158),p=t(160),y=2e3,k=2e4,C="Diesel",P="Auto",w=function(e){var a=e.car,t=e.onEdit,r=e.onDelete,n=e.staticValues,c=function(){return Math.floor(a.cost/a.value*100)-100};return Object(h.jsxs)(x.a,{variant:"outlined",style:{background:"rgb(223 223 223)",margin:"1rem"},children:[Object(h.jsxs)(v.a,{style:{justifyContent:"space-between"},children:[Object(h.jsxs)("div",{style:{fontWeight:"bold"},children:[a.car_id," - ",a.name," (",a.year,")"]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(d.a,{onClick:t,style:{marginLeft:"1rem"},children:Object(h.jsx)(f.a,{})}),Object(h.jsx)(d.a,{onClick:r,style:{marginLeft:"1rem"},children:Object(h.jsx)(b.a,{})})]})]}),Object(h.jsxs)(p.a,{children:[Object(h.jsxs)(m.a,{align:"left",variant:"body1",style:{color:a.fuel===C?"rgb(100 164 87)":"#f07878"},children:["Br\xe4nsle: ",a.fuel]}),Object(h.jsxs)(m.a,{align:"left",variant:"body1",style:{color:a.gearbox.includes(P)?"rgb(100 164 87)":"#f07878"},children:["V\xe4xell\xe5da: ",a.gearbox]}),Object(h.jsxs)(m.a,{align:"left",variant:"body1",style:{color:a.milage<=k?"rgb(100 164 87)":"#f07878"},children:["Distans: ",a.milage," mil"]}),Object(h.jsxs)(m.a,{align:"left",variant:"body1",style:{color:a.tax<=y?"rgb(100 164 87)":"#f07878"},children:[a.tax,"kr/\xe5r"]}),Object(h.jsxs)(m.a,{align:"left",variant:"body1",children:["V\xe4rde: ~",a.value,"kr"]}),Object(h.jsxs)(m.a,{align:"left",variant:"body1",children:["F\xf6rbrukning: ",a.fuel_consumption," liter/100km"]}),Object(h.jsxs)(m.a,{align:"left",variant:"body1",style:{color:c()<=0?"rgb(100 164 87)":"#f07878"},children:["Kostnad: ",a.cost," kr"," ","(".concat(Math.abs(c()),"% ").concat(c()<=0?"billigare":" dyrare","  \xe4n v\xe4rdering)")]}),Object(h.jsx)(O,{data:function(){var e=12*parseInt(a.ensurance[1],10),t=e/n.distancePerYear,r="Bensin"===a.fuel?n.bPrice:n.dPrice,c=r*n.distancePerYear*(a.fuel_consumption/100),i=a.cost*Math.pow(1-n.costReductionPerYear,n.years),l=(a.cost-i)/(n.distancePerYear*n.years),s=l*n.distancePerYear;return{yearly:{fuel:Math.floor(c),ensurance:e,tax:a.tax,valueReduction:s,total:Math.floor(c+e+a.tax+s)},perKm:{fuel:Math.floor(r*a.fuel_consumption/100),ensurance:t,tax:a.tax/n.distancePerYear,valueReduction:l,total:Math.floor(r*a.fuel_consumption/100+t+a.tax/n.distancePerYear+l)}}}().yearly})]})]})},W=t(169),D=t(164),_=t(162),Y=t(163),B=t(161),S=t(167),R=t(165),F=function(e){var a=e.open,t=e.car,n=e.handleClose,c=Object(r.useState)(t),i=Object(o.a)(c,2),s=i[0],d=i[1],u=function(e){switch(e.target.id){case"form-car-id":d(Object(l.a)(Object(l.a)({},s),{},{car_id:e.target.value}));break;case"form-car-name":d(Object(l.a)(Object(l.a)({},s),{},{name:e.target.value}));break;case"form-car-year":d(Object(l.a)(Object(l.a)({},s),{},{year:e.target.value}));break;case"form-car-fuel":d(Object(l.a)(Object(l.a)({},s),{},{fuel:e.target.value}));break;case"form-car-gearbox":d(Object(l.a)(Object(l.a)({},s),{},{gearbox:e.target.value}));break;case"form-car-ensurance-0":d(Object(l.a)(Object(l.a)({},s),{},{ensurance:[e.target.value,s.ensurance[1],s.ensurance[2]]}));break;case"form-car-ensurance-1":d(Object(l.a)(Object(l.a)({},s),{},{ensurance:[s.ensurance[0],e.target.value,s.ensurance[2]]}));break;case"form-car-ensurance-2":d(Object(l.a)(Object(l.a)({},s),{},{ensurance:[s.ensurance[0],s.ensurance[1],e.target.value]}));break;case"form-car-manufacturer":d(Object(l.a)(Object(l.a)({},s),{},{manufacturer:e.target.value}));break;case"form-car-milage":d(Object(l.a)(Object(l.a)({},s),{},{milage:e.target.value}));break;case"form-car-tax":d(Object(l.a)(Object(l.a)({},s),{},{tax:e.target.value}));break;case"form-car-value":d(Object(l.a)(Object(l.a)({},s),{},{value:e.target.value}));break;case"form-car-fuel-consumption":d(Object(l.a)(Object(l.a)({},s),{},{fuel_consumption:e.target.value}));break;case"form-car-cost":d(Object(l.a)(Object(l.a)({},s),{},{cost:e.target.value}))}};return Object(h.jsxs)(W.a,{open:a,onClose:function(){return n()},"aria-labelledby":"form-dialog-title",onEnter:function(){return d(t)},children:[Object(h.jsx)(B.a,{id:"form-dialog-title",children:"Subscribe"}),Object(h.jsxs)(_.a,{children:[Object(h.jsx)(Y.a,{children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),Object(h.jsx)(S.a,{id:"form-car-id",margin:"dense",label:"Registreringsnummer",fullWidth:!0,value:s.car_id,onChange:u}),Object(h.jsx)(S.a,{id:"form-car-name",margin:"dense",label:"Namn",fullWidth:!0,value:s.name,onChange:u}),Object(h.jsx)(S.a,{id:"form-car-year",margin:"dense",label:"\xc5rsmodell",fullWidth:!0,value:s.year,onChange:u}),Object(h.jsx)(S.a,{id:"form-car-fuel",margin:"dense",label:"Br\xe4nsle",fullWidth:!0,value:s.fuel,onChange:u}),Object(h.jsx)(S.a,{id:"form-car-gearbox",margin:"dense",label:"V\xe4xell\xe5da",fullWidth:!0,value:s.gearbox,onChange:u}),Object(h.jsx)(S.a,{id:"form-car-ensurance-0",margin:"dense",label:"Helf\xf6rs\xe4kring",fullWidth:!0,value:s.ensurance[0],onChange:u}),Object(h.jsx)(S.a,{id:"form-car-ensurance-1",margin:"dense",label:"Halvf\xf6rs\xe4kring",fullWidth:!0,value:s.ensurance[1],onChange:u}),Object(h.jsx)(S.a,{id:"form-car-ensurance-2",margin:"dense",label:"Trafikf\xf6rs\xe4kring",fullWidth:!0,value:s.ensurance[2],onChange:u}),Object(h.jsx)(S.a,{id:"form-car-manufacturer",margin:"dense",label:"Tillverkare",fullWidth:!0,value:s.manufacturer,onChange:u}),Object(h.jsx)(S.a,{id:"form-car-milage",margin:"dense",label:"Distans",fullWidth:!0,value:s.milage,onChange:u}),Object(h.jsx)(S.a,{id:"form-car-tax",margin:"dense",label:"Skatt",fullWidth:!0,value:s.tax,onChange:u}),Object(h.jsx)(S.a,{id:"form-car-value",margin:"dense",label:"V\xe4rde",fullWidth:!0,value:s.value,onChange:u}),Object(h.jsx)(S.a,{id:"form-car-fuel-consumption",margin:"dense",label:"F\xf6rbrukning",fullWidth:!0,value:s.fuel_consumption,onChange:u}),Object(h.jsx)(S.a,{id:"form-car-cost",margin:"dense",label:"Kostnad",fullWidth:!0,value:s.cost,onChange:u})]}),Object(h.jsxs)(D.a,{children:[Object(h.jsx)(R.a,{onClick:function(){return n()},color:"default",variant:"outlined",children:"Cancel"}),Object(h.jsx)(R.a,{onClick:function(){return n(s)},color:"primary",variant:"contained",children:"Save"})]})]})},L=t.p+"static/media/sports-car.3f132116.svg",A=t(37),M=t.n(A),V=t(170),E=t(166),T="http://server.ceniklas.se:15432/api",N=function(){var e=Object(r.useState)([]),a=Object(o.a)(e,2),t=a[0],n=a[1],c=Object(r.useState)(!1),i=Object(o.a)(c,2),d=i[0],u=i[1],b=Object(r.useState)({id:0,car_id:"",ensurance:[],fuel:"",gearbox:"",manufacturer:"",milage:0,name:"",tax:0,value:0,year:0,fuel_consumption:0,cost:0}),j=Object(o.a)(b,2),f=j[0],g=j[1],O=Object(r.useState)({dPrice:15.69,bPrice:15.39,distancePerYear:1e4,costReductionPerYear:.1,years:5}),x=Object(o.a)(O,2),v=x[0],p=x[1],y=Object(r.useState)(""),k=Object(o.a)(y,2),C=k[0],P=k[1];return Object(r.useEffect)((function(){M.a.get("".concat(T,"/cars")).then((function(e){var a=e.data;return n(a)})).catch((function(e){console.log(e)}))}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)(E.a,{className:"App-header",cellHeight:"auto",cols:3,children:[Object(h.jsx)(E.a,{cellHeight:"auto",cols:3,children:Object(h.jsxs)("div",{style:{width:"42rem",display:"inline-flex"},children:[Object(h.jsxs)("div",{style:{width:"12rem",margin:"1rem"},children:[Object(h.jsx)(m.a,{id:"discrete-slider",gutterBottom:!0,children:"Livsl\xe4ngd (\xe5r)"}),Object(h.jsx)(V.a,{value:v.years,onChange:function(e,a){p(Object(l.a)(Object(l.a)({},v),{},{years:a}))},"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",min:1,max:15})]}),Object(h.jsxs)("div",{style:{width:"12rem",margin:"1rem"},children:[Object(h.jsx)(m.a,{id:"discrete-slider",gutterBottom:!0,children:"Distans (km)"}),Object(h.jsx)(V.a,{value:v.distancePerYear,onChange:function(e,a){p(Object(l.a)(Object(l.a)({},v),{},{distancePerYear:a}))},"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1e3,min:1,max:1e5})]}),Object(h.jsxs)("div",{style:{width:"12rem",margin:"1rem"},children:[Object(h.jsx)(m.a,{id:"discrete-slider",gutterBottom:!0,children:"V\xe4rdeminskning (%/\xe5r)"}),Object(h.jsx)(V.a,{value:100*v.costReductionPerYear,onChange:function(e,a){p(Object(l.a)(Object(l.a)({},v),{},{costReductionPerYear:a/100}))},"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:.01,min:.001,max:100})]})]})}),Object(h.jsxs)("div",{className:"App-header-title",children:[Object(h.jsx)(m.a,{variant:"h1",children:"Brum"}),Object(h.jsx)("img",{src:L,className:"App-logo",alt:"logo"})]}),Object(h.jsxs)("div",{style:{background:"white",padding:"1rem",borderRadius:"4px",width:"21rem"},children:[Object(h.jsx)(S.a,{id:"form-car-id",margin:"none",label:"Registreringsnummer",value:C,onChange:function(e){return P(e.target.value.toUpperCase())},variant:"outlined"}),Object(h.jsx)(R.a,{onClick:function(){return e={car_id:C},void M.a.post("".concat(T,"/car/create"),e).then((function(e){var a=e.data;n([].concat(Object(s.a)(t),[a]))}));var e},color:"primary",variant:"contained",style:{marginLeft:"1rem"},children:"Add Car"})]})]}),Object(h.jsx)("div",{className:"App-body",children:Object(h.jsx)(E.a,{cellHeight:"auto",cols:3,children:t.map((function(e){return Object(h.jsx)(w,{car:e,onEdit:function(){return function(e){g(e),u(!0)}(e)},onDelete:function(){return function(e){e&&M.a.post("".concat(T,"/car/delete"),e).then((function(e){var a=e.data;n(t.filter((function(e){return e.car_id!==a.car_id})))}))}(e)},staticValues:v},e.id)}))})})]}),Object(h.jsx)(F,{car:f,open:d,handleClose:function(e){e&&(console.log(e),M.a.post("".concat(T,"/car/update"),e).then((function(e){var a=e.data;n(t.map((function(e){return e.id===a.id?a:e})))}))),u(!1)}})]})},H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,172)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,c=a.getLCP,i=a.getTTFB;t(e),r(e),n(e),c(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root")),H()},53:function(e,a,t){},86:function(e,a,t){}},[[112,1,2]]]);
//# sourceMappingURL=main.5f7449f5.chunk.js.map