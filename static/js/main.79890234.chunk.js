(this.webpackJsonpcart1=this.webpackJsonpcart1||[]).push([[0],{34:function(e,t,r){},35:function(e,t,r){},56:function(e,t,r){"use strict";r.r(t);var c=r(3),a=r(0),n=r(9),s=r.n(n),o=(r(34),r.p,r(35),r(8)),i=r(14),l=r.n(i),u=r(24),b=r(15),j=r.n(b),d="GET_API_DATA",p="SUBMIT_DATA",m="GET_USER_INPUT_DATA",O=r(1);function h(){var e=Object(c.c)((function(e){return e.reducer.getData})),t=Object(a.useState)(e),r=Object(o.a)(t,2),n=r[0],s=(r[1],Object(c.b)()),i=Object(a.useState)(""),b=Object(o.a)(i,2),p=b[0],m=b[1];Object(a.useEffect)((function(){s(function(){var e=Object(u.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],e.next=3,j.a.get("https://iapps.akij.net/asll/public/api/v1/psd/getProgramType").then((function(e){(r=e.data.data).sort(),r.reverse(),console.log("data",r),t({type:d,payload:r})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[n]);return console.log("data",n),Object(O.jsxs)("div",{children:[Object(O.jsx)("form",{children:Object(O.jsx)("div",{class:"form-group mt-5  hover",children:Object(O.jsx)("input",{type:"email",class:"form-control w-25 float-right mr-5",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"search by name",onChange:function(e){return function(e){m(e)}(e.target.value)}})})}),Object(O.jsxs)("table",{class:"table table-striped p-5 m-5 table-hover  table-bordered ml-5 mr-5 mb-5 mt-5  table-responsive-md",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{scope:"col",children:"Id"}),Object(O.jsx)("th",{scope:"col",children:"Name"}),Object(O.jsx)("th",{scope:"col",children:"Active Or Not"})]})}),Object(O.jsx)("tbody",{children:e.filter((function(e){return p.length>0?e.strProgramTypeName.toLowerCase().includes(p.toLowerCase()):e})).map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.intProgramTypeId}),Object(O.jsx)("td",{children:e.strProgramTypeName}),Object(O.jsx)("td",{children:e.ysnActive})]})}))})]})]})}var f=r(5);function v(){var e=Object(c.b)(),t=(Object(c.c)((function(e){return e.reducer.getData})),Object(c.c)((function(e){return e.reducer.userInputData}))),r=(Object(c.c)((function(e){return e.reducer.submitData})),Object(a.useState)({apiData:t})),n=Object(o.a)(r,2),s=n[0],i=(n[1],Object(a.useState)({strProgramTypeName:"",ysnActive:""})),l=Object(o.a)(i,2),u=l[0],b=l[1],d=function(e,t){var r=Object(f.a)({},u);r[t]=e,b(r)},m=function(t){var r;t.preventDefault(),e((r=u,function(e){if(console.log("submitUserData",r.ysnActive),0==r.ysnActive.length)return alert("please inser data "),!1;j.a.post("https://iapps.akij.net/asll/public/api/v1/psd/programTypeStore",r).then((function(t){console.log("inside then block"),e({type:p,payload:t.data.data}),console.log("res => ",t)})).catch((function(e){console.log("error => ",e)}))}))};return Object(a.useEffect)((function(){}),[]),Object(O.jsxs)("div",{className:"mt-5 ml-5",children:[" ",Object(O.jsxs)("form",{onSubmit:function(e){return m(e)},children:[Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"exampleInputEmail1",children:"Name"}),Object(O.jsx)("input",{value:s.strProgramTypeName,type:"text",class:"form-control","aria-describedby":"emailHelp",placeholder:"Enter email",onChange:function(e){return d(e.target.value,"strProgramTypeName")},name:"strProgramTypeName",required:!0})]}),Object(O.jsx)("div",{class:"form-check"}),Object(O.jsxs)("select",{class:"form-select form-select mb-3","aria-label":".form-select-lg example",onChange:function(e){return d(e.target.value,"ysnActive")},name:"ysnActive",value:s.ysnActive,required:!0,children:[Object(O.jsx)("option",{selected:!0,children:"Select Active or Not"}),Object(O.jsx)("option",{children:"1"}),Object(O.jsx)("option",{children:"0"})]}),Object(O.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})]})]})}var g=function(){return Object(c.b)(),Object(a.useEffect)((function(){}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)(v,{}),Object(O.jsx)(h,{})]})},y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,59)).then((function(t){var r=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,s=t.getTTFB;r(e),c(e),a(e),n(e),s(e)}))},x=r(12),T=r(6),A=r(25),D={getData:[],userInputData:{strProgramTypeName:" ",ysnActive:" "},submitData:[]};var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return console.log("action.payload",t.payload),Object(f.a)(Object(f.a)({},e),{},{getData:t.payload});case m:return Object(f.a)(Object(f.a)({},e),{},{userInputData:t.payload});case p:return alert("data inserted"),Object(f.a)({},e)}return e},P=Object(T.combineReducers)({reducer:N}),I=[x.a],S=[T.applyMiddleware.apply(void 0,I)],E=A.composeWithDevTools.apply(void 0,S);var w,C=Object(T.createStore)(P,w,E);s.a.render(Object(O.jsx)(c.a,{store:C,children:Object(O.jsx)(g,{})}),document.getElementById("root")),y()}},[[56,1,2]]]);
//# sourceMappingURL=main.79890234.chunk.js.map