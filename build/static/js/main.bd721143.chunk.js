(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,a){e.exports=a(36)},28:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),s=(a(28),a(5)),l=a(1),u=a.n(l),i=a(4),m=(a(30),a(10)),d=a(2),p=a(8),b=a(14),h=a(15),f=function(e){var t=e.setAuth,a=Object(n.useState)({email:"",password:""}),c=Object(s.a)(a,2),o=c[0],l=c[1],d=o.email,f=o.password,E=function(e){return l(Object(h.a)(Object(h.a)({},o),{},Object(b.a)({},e.target.name,e.target.value)))},g=function(){var e=Object(i.a)(u.a.mark((function e(a){var n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n={email:d,password:f},e.next=5,fetch("http://localhost:3005/user/login",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 5:return r=e.sent,e.next=8,r.json();case 8:(c=e.sent).jwtToken?(localStorage.setItem("jwt_token",c.jwtToken),t(!0),p.a.success("Logged in Successfully")):(t(!1),p.a.error(c)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("nav",{class:"navbar mb-3"},r.a.createElement(m.b,{to:"/"},r.a.createElement("img",{src:"/back-arrow.svg",width:"35",height:"35",style:{marginRight:"10px"},class:"d-inline-block align-top",alt:""}))),r.a.createElement("h1",{className:"mt-5 text-center"},"Login"),r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:g},r.a.createElement("input",{type:"text",name:"email",value:d,placeholder:"email",onChange:function(e){return E(e)},className:"form-control my-3"}),r.a.createElement("input",{type:"password",name:"password",value:f,placeholder:"password",onChange:function(e){return E(e)},className:"form-control my-3"}),r.a.createElement("button",{className:"btn btn-info btn-block"},"Submit"))),r.a.createElement("br",null),r.a.createElement("p",{className:"text-center"},"You haven't joined yet?"),r.a.createElement(m.b,{to:"/register"},r.a.createElement("p",{className:"text-center"},"Register")))},E=function(e){var t=e.setAuth,a=Object(n.useState)({email:"",password:"",name:""}),c=Object(s.a)(a,2),o=c[0],l=c[1],d=o.email,f=o.password,E=o.name,g=function(e){return l(Object(h.a)(Object(h.a)({},o),{},Object(b.a)({},e.target.name,e.target.value)))},v=function(){var e=Object(i.a)(u.a.mark((function e(a){var n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n={email:d,password:f,name:E},e.next=5,fetch("http://localhost:3005/user/register",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 5:return r=e.sent,e.next=8,r.json();case 8:(c=e.sent).jwtToken?(localStorage.setItem("jwt_token",c.jwtToken),t(!0),p.a.success("Register Successfully")):(t(!1),p.a.error(c)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("nav",{class:"navbar mb-3"},r.a.createElement(m.b,{to:"/"},r.a.createElement("img",{src:"/back-arrow.svg",width:"35",height:"35",style:{marginRight:"10px"},class:"d-inline-block align-top",alt:""}))),r.a.createElement("h1",{className:"mt-5 text-center"},"Register"),r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:v},r.a.createElement("input",{type:"text",name:"email",value:d,placeholder:"email",onChange:function(e){return g(e)},className:"form-control my-3"}),r.a.createElement("input",{type:"password",name:"password",value:f,placeholder:"password",onChange:function(e){return g(e)},className:"form-control my-3"}),r.a.createElement("input",{type:"text",name:"name",value:E,placeholder:"name",onChange:function(e){return g(e)},className:"form-control my-3"}),r.a.createElement("button",{className:"btn btn-info btn-block"},"Submit"))),r.a.createElement("br",null),r.a.createElement("p",{className:"text-center"},"Already have an account?"),r.a.createElement(m.b,{to:"/login"},r.a.createElement("p",{className:"text-center"},"Login")))},g=function(e){var t=e.setTodosChange,a=Object(n.useState)(""),c=Object(s.a)(a,2),o=c[0],l=c[1],m=function(){var e=Object(i.a)(u.a.mark((function e(a){var n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n={description:o},(r=new Headers).append("Content-Type","application/json"),r.append("jwt_token",localStorage.jwt_token),e.next=8,fetch("http://localhost:3005/dashboard/todos",{method:"POST",headers:r,body:JSON.stringify(n)});case 8:return c=e.sent,e.t0=p.a,e.next=12,c.json();case 12:e.t1=e.sent,e.t0.error.call(e.t0,e.t1),t(!0),l(""),e.next=21;break;case 18:e.prev=18,e.t2=e.catch(1),console.error(e.t2.message);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"d-flex mt-5",onSubmit:m},r.a.createElement("div",{class:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",value:o,placeholder:"Type your task...",onChange:function(e){return l(e.target.value)}}),r.a.createElement("div",{class:"input-group-append"},r.a.createElement("button",{className:"btn btn-info"},"Add"))))))},v=function(e){var t=e.todo,a=e.setTodosChange,c=Object(n.useState)(t.description),o=Object(s.a)(c,2),l=o[0],m=o[1],d=function(){var e=Object(i.a)(u.a.mark((function e(n){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,r={description:l},(c=new Headers).append("Content-Type","application/json"),c.append("jwt_token",localStorage.jwt_token),e.next=8,fetch("http://localhost:3005/dashboard/todos/".concat(t.id),{method:"PUT",headers:c,body:JSON.stringify(r)});case 8:a(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("button",{type:"button",className:"btn btn-warning btn-sm","data-toggle":"modal","data-target":"#id".concat(t.id)},"Edit"),r.a.createElement("div",{className:"modal",id:"id".concat(t.id),onClick:function(){return m(t.description)}},r.a.createElement("div",{className:"modal-dialog"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h4",{className:"modal-title"},"Edit Todo"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal",onClick:function(){return m(t.description)}},"\xd7")),r.a.createElement("div",{className:"modal-body"},r.a.createElement("input",{type:"text",className:"form-control",value:l,onChange:function(e){return m(e.target.value)}})),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-warning","data-dismiss":"modal",onClick:function(e){return d(e)}},"Edit"),r.a.createElement("button",{type:"button",className:"btn btn-dark","data-dismiss":"modal",onClick:function(){return m(t.description)}},"Close"))))))},j=function(e){var t=e.allTodos,a=e.setTodosChange,c=Object(n.useState)([]),o=Object(s.a)(c,2),l=o[0],m=o[1],d=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3005/dashboard/todos/".concat(t),{method:"DELETE",headers:{jwt_token:localStorage.jwt_token}});case 3:window.location="/dashboard",e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){m(t)}),[t]),r.a.createElement(n.Fragment,null," ",r.a.createElement("table",{className:"table mt-5 text-center"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Todo Task"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,l.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.description),r.a.createElement("td",null,r.a.createElement("div",{class:"btn-group",role:"group","aria-label":"Basic example"},r.a.createElement(v,{todo:e,setTodosChange:a}),r.a.createElement("button",{className:"btn btn-info btn-sm",onClick:function(){return d(e.id)}},"Done"))))})))))},w=function(e){var t=e.setAuth,a=Object(n.useState)(""),c=Object(s.a)(a,2),o=c[0],l=c[1],m=Object(n.useState)(""),d=Object(s.a)(m,2),b=d[0],h=d[1],f=Object(n.useState)([]),E=Object(s.a)(f,2),v=E[0],w=E[1],k=Object(n.useState)(!1),x=Object(s.a)(k,2),y=x[0],O=x[1],N=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3005/dashboard/",{method:"GET",headers:{jwt_token:localStorage.jwt_token}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,l(a.name),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault();try{localStorage.removeItem("jwt_token"),t(!1),p.a.success("Logout successfully")}catch(n){console.error(n.message)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,(a=new Headers).append("Content-Type","application/json"),a.append("jwt_token",localStorage.jwt_token),e.next=7,fetch("http://localhost:3005/dashboard/todos/search?description=".concat(b),{method:"GET",headers:a});case 7:return n=e.sent,e.next=10,n.json();case 10:r=e.sent,w(r),h(""),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.error(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3005/dashboard/todos",{method:"GET",headers:{jwt_token:localStorage.jwt_token}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,w(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){N()}),[]),Object(n.useEffect)((function(){C(),O(!1)}),[y]),r.a.createElement("div",null,r.a.createElement("nav",{class:"navbar navbar-dark bg-info mb-3"},r.a.createElement("a",{class:"navbar-brand",href:"/dashboard"},r.a.createElement("img",{src:"/logo.svg",width:"35",height:"35",style:{marginRight:"10px"},class:"d-inline-block align-top",alt:""}),"Hi, ",o," !"),r.a.createElement("form",{class:"form-inline",onSubmit:T},r.a.createElement("div",{class:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",value:b,placeholder:"Search Todo...",onChange:function(e){return h(e.target.value)}}),r.a.createElement("div",{class:"input-group-append"},r.a.createElement("button",{className:"btn btn-dark"},"Search")))),r.a.createElement("button",{onClick:function(e){return S(e)},class:"btn btn-dark"},"Logout")),r.a.createElement(g,{setTodosChange:O}),r.a.createElement(j,{allTodos:v,setTodosChange:O}))},k=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron mt-5"},r.a.createElement("h1",{class:"display-4"},"Welcome to Igaku Todo test"),r.a.createElement("p",{className:"lead"},"Let's make your todo list!"),r.a.createElement(m.b,{to:"/login",className:"btn btn-info"},"Login"),r.a.createElement(m.b,{to:"/register",className:"btn btn-success ml-3"},"Register")))};p.a.configure();var x=function(){var e=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3005/user/verify",{method:"POST",headers:{jwt_token:localStorage.jwt_token}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,o(!0===a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){e()}),[]);var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],o=a[1],l=function(e){o(e)};return r.a.createElement(n.Fragment,null,r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",render:function(e){return c?r.a.createElement(d.a,{to:"/dashboard"}):r.a.createElement(k,e)}}),r.a.createElement(d.b,{exact:!0,path:"/login",render:function(e){return c?r.a.createElement(d.a,{to:"/dashboard"}):r.a.createElement(f,Object.assign({},e,{setAuth:l}))}}),r.a.createElement(d.b,{exact:!0,path:"/register",render:function(e){return c?r.a.createElement(d.a,{to:"/dashboard"}):r.a.createElement(E,Object.assign({},e,{setAuth:l}))}}),r.a.createElement(d.b,{exact:!0,path:"/dashboard",render:function(e){return c?r.a.createElement(w,Object.assign({},e,{setAuth:l})):r.a.createElement(d.a,{to:"/login"})}})))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.bd721143.chunk.js.map