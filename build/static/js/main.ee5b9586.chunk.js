(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(17),o=t.n(c),r=t(8),a=t(3),i=t(2),u=t(0),s=function(e){var n=e.filterSearch,t=e.handleFilterSearch;return Object(u.jsxs)("div",{children:["filter shown with ",Object(u.jsx)("input",{value:n,onChange:t})]})},d=function(e){var n=e.newName,t=e.newNumber,c=e.handleNameChange,o=e.handleNumberChange,r=e.addPerson;return Object(u.jsxs)("form",{onSubmit:r,children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:n,onChange:c})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{value:t,onChange:o})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},l=function(e){var n=e.person,t=e.deletePerson;return Object(u.jsxs)("div",{children:[n.name," ",n.number,"\xa0",Object(u.jsx)("button",{onClick:function(){return t(n)},children:" delete"})]})},f=function(e){var n=e.persons,t=e.deletePerson,c=n.map((function(e,n){return Object(u.jsx)(l,{person:e,deletePerson:t},e.id)}));return Object(u.jsx)("div",{children:c})},b=t(4),j=t.n(b),h="https://thawing-woodland-42106.herokuapp.com/api/persons",m={getAll:function(){return j.a.get(h).then((function(e){return e.data}))},create:function(e){return j.a.post(h,e).then((function(e){return e.data}))},deleteId:function(e){return j.a.delete(h+"/".concat(e)).then((function(e){return console.log(e)}))},update:function(e,n){return j.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))}},O=(t(41),function(e){var n=e.notifications;return null===n?null:Object(u.jsx)("div",{className:n.includes("Information")?"notificationsError":"notifications",children:n})}),p=function(){var e=Object(i.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],o=Object(i.useState)(""),l=Object(a.a)(o,2),b=l[0],j=l[1],h=Object(i.useState)(""),p=Object(a.a)(h,2),v=p[0],x=p[1],g=Object(i.useState)(t),w=Object(a.a)(g,2),C=w[0],S=w[1],N=Object(i.useState)(""),k=Object(a.a)(N,2),P=k[0],E=k[1],I=Object(i.useState)(null),y=Object(a.a)(I,2),A=y[0],D=y[1];Object(i.useEffect)((function(){m.getAll().then((function(e){return c(e)}))}),[]),Object(i.useEffect)((function(){S(t)}),[t]),Object(i.useEffect)((function(){S(t.filter((function(e){return e.name.toLowerCase().includes(P.toLowerCase())})))}),[t,P]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(O,{notifications:A}),Object(u.jsx)(s,{filterSearch:P,handleFilterSearch:function(e){E(e.target.value)}}),Object(u.jsx)("h2",{children:"Add a new"}),Object(u.jsx)(d,{newName:b,newNumber:v,handleNameChange:function(e){j(e.target.value)},handleNumberChange:function(e){x(e.target.value)},addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name===b}));if(n){if(window.confirm("".concat(b," is already added to phonebook, replace the old number with a new one"))){var o=Object(r.a)(Object(r.a)({},n),{},{number:v});m.update(o.id,o).then((function(e){c(t.map((function(t){return t.id===n.id?e:t}))),D("Changed ".concat(e.name,"'s number to ").concat(e.number)),setTimeout((function(){D(null)}),5e3)})).catch((function(e){D("Information of ".concat(o.name," has already been removed from server")),c(t.filter((function(e){return e.id!==o.id}))),setTimeout((function(){D(null)}),5e3)}))}}else{var a={name:b,number:v};m.create(a).then((function(e){c(t.concat(e)),D("Added ".concat(e.name)),setTimeout((function(){D(null)}),5e3)}))}j(""),x("")}}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)(f,{persons:C,deletePerson:function(e){console.log("deletePerson"),window.confirm("Delete ".concat(e.name," with id ").concat(e.id,"?"))&&m.deleteId(e.id).then((function(){c(t.filter((function(n){return n.id!==e.id}))),console.log("Delete successful")})).catch((function(e){return console.log("error:",e)}))}})]})};o.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.ee5b9586.chunk.js.map