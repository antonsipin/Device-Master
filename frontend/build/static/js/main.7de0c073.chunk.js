(this["webpackJsonpdevice-master"]=this["webpackJsonpdevice-master"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),i=n(17),s=n.n(i),o=(n(34),n(35),n(12)),u=n(11),d=n(27),l=n(20),j="ADD_DEVICE",p="ADD_DEVICESLIST",b="ADD_ERROR",f="CHANGE_ERROR",h={devices:[],error:!1},v=n(28),x=Object(d.composeWithDevTools)(Object(u.applyMiddleware)(v.a)),O=Object(u.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return{devices:[].concat(Object(l.a)(e.devices),[t.payload]),error:!1};case p:return{devices:t.payload,error:!1};case b:return{devices:Object(l.a)(e.devices),error:!0};case f:return{devices:Object(l.a)(e.devices),error:!1};default:return e}}),x),y=n(19),m=n(5),g=n.n(m),k=n(10),T=function(e){return{type:j,payload:{device:e}}},w=function(e){return{type:p,payload:e}},C=function(e,t){return function(){var n=Object(k.a)(g.a.mark((function n(r){var c,a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=14;break}return n.prev=1,n.next=4,fetch("/isBeingEdited",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,isBeingEdited:t})});case 4:return c=n.sent,n.next=7,c.json();case 7:a=n.sent,r(w(a)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}()},S=function(e,t){return function(){var n=Object(k.a)(g.a.mark((function n(r){var c,a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=14;break}return n.prev=1,n.next=4,fetch("/setDeviceWarning",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,warning:t})});case 4:return c=n.sent,n.next=7,c.json();case 7:a=n.sent,r(w(a)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}()},D=n(15),E=n(9),_=n(16),B=n(25),N=n(8);var P=function(){var e=Object(c.useState)(!1),t=Object(y.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),s=Object(y.a)(i,2),u=s[0],d=s[1],l=Object(c.useState)(""),j=Object(y.a)(l,2),p=j[0],h=j[1],v=Object(o.b)(),x=Object(o.c)((function(e){return e.devices})),O=Object(o.c)((function(e){return e.error}));function m(){var e;v((e=u,function(){var t=Object(k.a)(g.a.mark((function t(n){var r,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=15;break}return t.prev=1,t.next=4,fetch("/addDevice",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({device:e})});case 4:return r=t.sent,t.next=7,r.json();case 7:c=t.sent,n(T(c)),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0),n({type:b});case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}())),a(!1),d("")}function P(e,t,n){v(function(e,t){return function(){var n=Object(k.a)(g.a.mark((function n(r){var c,a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e||!t){n.next=14;break}return n.prev=1,n.next=4,fetch("/updateDevice",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,name:t})});case 4:return c=n.sent,n.next=7,c.json();case 7:a=n.sent,r(w(a)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}()}(e,t)),v(C(e,n)),h("")}function I(e,t,n){v(function(e,t){return function(){var n=Object(k.a)(g.a.mark((function n(r){var c,a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=14;break}return n.prev=1,n.next=4,fetch("/changeStatus",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,status:t})});case 4:return c=n.sent,n.next=7,c.json();case 7:a=n.sent,r(w(a)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}()}(e,t)),!0===n&&v(S(e,n))}function R(e){v(function(e){return function(){var t=Object(k.a)(g.a.mark((function t(n){var r,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=14;break}return t.prev=1,t.next=4,fetch("/deleteDevice",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})});case 4:return r=t.sent,t.next=7,r.json();case 7:c=t.sent,n(w(c)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()}(e))}function F(){a(!0),v({type:f})}return Object(c.useEffect)((function(){v(function(){var e=Object(k.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).length>0&&t(w(r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(r.jsxs)(D.a,{style:J,children:[Object(r.jsx)("h2",{children:"Device Master"}),Object(r.jsx)(E.a,{onClick:function(){return F()},variant:"primary",type:"submit",children:"Add Device"}),Object(r.jsxs)(D.a,{style:J,children:[" ",Object(r.jsx)("br",{}),!0===n?Object(r.jsxs)(_.a,{className:"mb-3",children:[Object(r.jsx)(B.a,{onChange:function(e){return d(e.target.value)},placeholder:"Enter new device name","aria-describedby":"basic-addon2"}),Object(r.jsx)(_.a.Append,{children:Object(r.jsx)(E.a,{onClick:function(){return m()},variant:"primary",children:"Save new device"})})]}):"",!0===O?Object(r.jsx)("h4",{style:A,children:"This device already exists"}):"",Object(r.jsx)("br",{})]}),x.length>0&&x.map((function(e,t){return!0===e.status?Object(r.jsxs)(D.a,{style:J,children:[Object(r.jsx)(N.a,{style:{backgroundColor:"red",width:"18.5rem"},children:Object(r.jsxs)(N.a.Body,{children:[Object(r.jsxs)(N.a.Title,{children:["This is ",e.name]}),!0===e.warning?Object(r.jsxs)(N.a.Text,{children:["Please turn off the ",e.name," before update"]}):Object(r.jsx)(N.a.Text,{}),Object(r.jsx)(E.a,{onClick:function(){return I(e._id,e.status,e.warning)},variant:"primary",children:"Turn Off"})," ",Object(r.jsx)(E.a,{onClick:function(){return R(e._id)},variant:"primary",children:"Delete"})," ",Object(r.jsx)(E.a,{onClick:function(){return t=e._id,n=e.warning,void v(S(t,n));var t,n},variant:"primary",children:"Update"})]})},t)," ",Object(r.jsx)("br",{})]},t):Object(r.jsxs)(D.a,{style:J,children:[Object(r.jsx)(N.a,{style:{backgroundColor:"grey",width:"18.5rem"},children:Object(r.jsxs)(N.a.Body,{children:[Object(r.jsxs)(N.a.Title,{children:["This is ",e.name]}),Object(r.jsx)(N.a.Text,{}),Object(r.jsx)(E.a,{onClick:function(){return I(e._id,e.status,e.warning)},variant:"primary",children:"Turn On"})," ",Object(r.jsx)(E.a,{onClick:function(){return R(e._id)},variant:"primary",children:"Delete"})," ",Object(r.jsx)(E.a,{onClick:function(){return t=e._id,n=e.isBeingEdited,void v(C(t,n));var t,n},variant:"primary",children:"Update"})]})},t)," ",Object(r.jsx)("br",{}),!0===e.isBeingEdited?Object(r.jsxs)(_.a,{className:"mb-3",children:[Object(r.jsx)(B.a,{onChange:function(e){return h(e.target.value)},placeholder:"Enter new device name","aria-describedby":"basic-addon2"}),Object(r.jsx)(_.a.Append,{children:Object(r.jsx)(E.a,{onClick:function(){return P(e._id,p,e.isBeingEdited)},variant:"primary",children:"Save changes"})})]}):""]},t)}))]})},J={WebkitTransition:"all",msTransition:"all",display:"flex",alignItems:"center",flexDirection:"column"},A={color:"red"};var I=function(){return Object(r.jsx)(o.a,{store:O,children:Object(r.jsx)(P,{})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(I,{})}),document.getElementById("root")),R()}},[[45,1,2]]]);
//# sourceMappingURL=main.7de0c073.chunk.js.map