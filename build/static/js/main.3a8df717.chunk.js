(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,a){e.exports=a(38)},20:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),l=a.n(o),c=a(4),m=a(2),i=function(e){var t=e.text,a=e.look,n=e.func,o=void 0===n?null:n;return r.a.createElement("button",{onClick:o,className:a},t)},u=function(e){var t=e.formName,a=e.formNumber,n=e.handleNameStateChange,o=e.handleNumberStateChange,l=e.addNewName;return r.a.createElement("section",{className:"py-8"},r.a.createElement("form",{onSubmit:l,className:"p-4 font-display bg-red-700 rounded text-red-100 font-semibold font-sm grid grid-cols-2 gap-4"},r.a.createElement("label",{htmlFor:"name",className:"flex flex-col"},r.a.createElement("span",null,"Name"),r.a.createElement("input",{id:"name",type:"text",max:"30",className:"form-input text-gray-900",value:t,onChange:n})),r.a.createElement("label",{htmlFor:"number",className:"flex flex-col"},r.a.createElement("span",null,"Number"),r.a.createElement("input",{id:"number",type:"text",max:"13",className:"form-input text-gray-900",value:a,onChange:o})),r.a.createElement("div",{className:"text-right col-span-2"},r.a.createElement(i,{text:"Add Number",look:"py-2 px-8 bg-gray-900 text-gray-100 text-sm font-semibold font-display rounded hover:bg-gray-800"}))))},s=(a(20),function(e){var t=e.title;return r.a.createElement("header",{className:"w-full border-l-8 border-red-700"},r.a.createElement("h2",{className:"ml-2 text-2xl font-bold font-display text-gray-900"},t))}),d=function(e){var t=e.siteInfo;return r.a.createElement("footer",{className:"w-full border-l-8 border-red-700 text-gray-900"},r.a.createElement("div",{className:"pl-4"},r.a.createElement("h4",{className:" text-lg font-bold font-display"},t.title),r.a.createElement("h5",{className:""},"Created by ",t.author),r.a.createElement("ul",{className:"leading-tight"},r.a.createElement("li",null,r.a.createElement("i",{className:"mr-2 fas fa-phone text-gray-900"}),r.a.createElement("span",null,t.phone)),r.a.createElement("li",null,r.a.createElement("i",{className:"mr-2 fab fa-github text-gray-900"}),r.a.createElement("span",null,t.git)))))},f=function(e){var t=e.person;return r.a.createElement("div",{className:"mr-4 flex flex-row justify-between items-center w-full"},r.a.createElement("h4",{className:"font-semibold text-lg"},t.name),r.a.createElement("h6",{className:"font-semibold text-sm"},t.number))},p=function(e){var t=e.persons,a=e.deleteContact,n=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4"},r.a.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),r.a.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}));return r.a.createElement("section",{className:"py-8"},r.a.createElement("h4",{className:"font-display text-gray-900 text-lg font-bold"},"My Contacts"),r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id,className:"mb-2 py-2 px-6 bg-gray-100 rounded text-gray-900 flex flex-row justify-between items-center hover:bg-red-100"},r.a.createElement(f,{person:e}),r.a.createElement(i,{text:n,look:"p-1 bg-red-700 hover:bg-red-900 text-red-100 rounded",func:function(){return a(e.id)}}))}))))},b=function(e){var t=e.filterInput,a=e.filterContacts;return r.a.createElement("div",{className:"mt-8 font-display text-gray-900 font-semibold font-sm grid grid-cols-2 gap-4"},r.a.createElement("label",{htmlFor:"filter",className:"flex flex-col"},r.a.createElement("span",null,"Search by Name:"),r.a.createElement("input",{type:"text",id:"filter",className:"form-input",value:t,onChange:a})))},g=a(3),h=a.n(g),x="/api/persons",y=function(){return h.a.get(x).then((function(e){return e.data}))},E=function(e){return h.a.post(x,e).then((function(e){return e.data}))},N=function(e){return h.a.delete("".concat(x,"/").concat(e)).then((function(e){return e.data}))},v=function(e,t){return h.a.put("".concat(x,"/").concat(e),t).then((function(e){return e.data}))},w=function(e){var t=e.text,a=e.look;return r.a.createElement("div",{className:"green"===a?"py-2 px-6 text-gray-100 bg-green-600 rounded":"yellow"===a?"py-2 px-6 text-gray-100 bg-yellow-400 rounded":"red"===a?"py-2 px-6 text-gray-100 bg-red-500 rounded":"py-2 px-6 text-gray-100 bg-gray-900 rounded"},r.a.createElement("span",null,t))},k=function(e){var t=e.siteInfo,a=Object(n.useState)([]),o=Object(m.a)(a,2),l=o[0],i=o[1],f=Object(n.useState)(""),g=Object(m.a)(f,2),h=g[0],x=g[1],k=Object(n.useState)(""),C=Object(m.a)(k,2),j=C[0],O=C[1],S=Object(n.useState)(""),I=Object(m.a)(S,2),L=I[0],D=I[1],A=Object(n.useState)(null),F=Object(m.a)(A,2),T=F[0],B=F[1],J=function(){y().then((function(e){return i(e)})).catch((function(e){return alert(e.message)}))};Object(n.useEffect)(J,[]);var M=function(e){B(e),setTimeout((function(){B(null)}),2e3)},W=L?l.filter((function(e){return e.name.toLowerCase().includes(L.toLowerCase())})):l;return r.a.createElement("main",{className:"pt-8 flex flex-col items-center relative min-h-screen"},r.a.createElement("div",{className:"p-8 max-w-screen-md bg-gray-100 bg-opacity-75 rounded"},r.a.createElement(s,{title:t.title}),r.a.createElement(b,{filterInput:L,filterContacts:function(e){D(e.target.value)}}),r.a.createElement(u,{formName:h,formNumber:j,handleNameStateChange:function(e){x(e.target.value)},handleNumberStateChange:function(e){O(e.target.value)},addNewName:function(e){e.preventDefault();for(var t=0;t<l.length;t++)if(l[t].name.toLowerCase()===h.toLowerCase())return window.confirm("".concat(l[t].name," already exists! Would you like to update their number instead?"))?(a=l[t],n=j,void v(a.id,Object(c.a)(Object(c.a)({},a),{},{number:n})).then((function(e){i(l.map((function(t){return t.id!==e.id?t:e}))),M({text:"Updated ".concat(e.name,"'s number in the phonebook"),look:"green"}),x(""),O("")})).catch((function(e){M({text:"".concat(e.message," - Contact has been deleted"),look:"red"}),J()}))):void 0;var a,n,r={name:h,number:j,id:(new Date).getTime()};E(r).then((function(e){i([e].concat(l)),M({text:"Added ".concat(r.name," to the phonebook"),look:"green"})})).catch((function(e){M({text:e.message,look:"red"}),J()})),x(""),O("")}}),null!==T&&r.a.createElement(w,{text:T.text,look:T.look}),r.a.createElement(p,{persons:W,deleteContact:function(e){var t=l.find((function(t){return t.id===e}));window.confirm("Do you really want to delete ".concat(t.name," from your phonebook?"))&&N(e).then((function(){i(l.filter((function(t){return t.id!==e}))),M({text:"Deleted ".concat(t.name," from the phonebook"),look:"red"})})).catch((function(e){M({text:"".concat(t.name," has already been deleted"),look:"red"}),J()}))}}),r.a.createElement(d,{siteInfo:t})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,{siteInfo:{title:"The Phonebook",author:"Astrid Lyre",phone:"+1(812)671-8192",git:"astridlyre",copyright:"2020"}})),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3a8df717.chunk.js.map