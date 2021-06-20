(this["webpackJsonpreact-redux-cart-ts"]=this["webpackJsonpreact-redux-cart-ts"]||[]).push([[0],{20:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c,a=n(0),r=n(6),i=n.n(r),u=(n(20),n(3)),s=u.c,l=n(11),o=n.n(l),j=n(13);!function(e){e.FETCH_MENU="FETCH_MENU",e.FETCH_MENU_SUCCESS="FETCH_MENU_SUCCESS",e.FETCH_MENU_ERROR="FETCH_MENU_ERROR",e.REMOVE_ITEM="REMOVE_ITEM",e.PLUS_ITEM="PLUS_ITEM",e.MINUS_ITEM="MINUS_ITEM",e.ADD_CART="ADD_CART"}(c||(c={}));var d=n(1),b=function(){var e=s((function(e){return e.menu})),t=e.loading,n=e.error,r=e.menu,i=Object(u.b)();if(Object(a.useEffect)((function(){i(function(){var e=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:c.FETCH_MENU}),e.next=4,fetch("http://localhost:3001/menu",{headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 4:n=e.sent,t({type:c.FETCH_MENU_SUCCESS,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:c.FETCH_MENU_ERROR,payload:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430, \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u0435\u0440\u0432\u0435\u0440!"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[i]),t)return Object(d.jsx)("h1",{children:"Loading...."});if(n)return Object(d.jsx)("h1",{children:n});return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("table",{className:"Table",children:[Object(d.jsx)("thead",{className:"Thead",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"Box-title",children:"Name product"}),Object(d.jsx)("th",{className:"Box-title",children:"Quantity"}),Object(d.jsx)("th",{className:"Box-title",children:"Price"})]})}),Object(d.jsx)("tbody",{children:r.length>0?r.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"Title-td",children:e.title}),Object(d.jsxs)("td",{children:[Object(d.jsx)("span",{className:"Increase",onClick:function(){return t=e,void i({type:c.PLUS_ITEM,payload:t.id});var t},children:"+"}),Object(d.jsx)("span",{children:e.quantity}),Object(d.jsx)("span",{className:"Decrease",onClick:function(){return t=e,void(r.find((function(e){return e.quantity===t.quantity})).quantity>0&&i({type:c.MINUS_ITEM,payload:t.id}));var t},children:"-"})]}),Object(d.jsx)("td",{children:e.price}),Object(d.jsx)("td",{children:Object(d.jsx)("button",{className:"Del",onClick:function(){return t=e,void i({type:c.REMOVE_ITEM,payload:t.id});var t},children:"Del"})})]},t)})):Object(d.jsx)("tr",{className:"Quantity",children:Object(d.jsx)("td",{children:"NO PRODUCT"})})})]})})},O=n(8),p=function(){var e=Object(u.b)(),t=Object(a.useState)(""),n=Object(O.a)(t,2),r=n[0],i=n[1],s=Object(a.useState)(1),l=Object(O.a)(s,2),o=l[0],j=l[1],b=Object(a.useState)(1),p=Object(O.a)(b,2),h=p[0],E=p[1],f=Object(a.useRef)();return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),r&&h&&o&&e({type:c.ADD_CART,payload:{title:r,price:h,quantity:o,id:new Date}}),""===r&&(f.current.focus(),j(o),E(h)),""!==r&&(i(""),j(1),E(1))},children:[Object(d.jsx)("button",{type:"submit",children:"Send to cart"}),Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{ref:f,placeholder:"Name of product",type:"text",value:r,onChange:function(e){i(e.target.value.slice(0,15))}}),"Name product"]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{placeholder:"Quantity of product",type:"number",value:o,onChange:function(e){j(+e.target.value.slice(0,5))}}),"Quantity"]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{placeholder:"Price of product",type:"number",value:h,onChange:function(e){E(+e.target.value.slice(0,5))}}),"Price"]})]})};var h=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(p,{}),Object(d.jsx)(b,{})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},f=n(5),x=n(14),m=n(15),y=n(2),_={menu:[],loading:!1,error:null},C=Object(f.b)({menu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.FETCH_MENU:return{loading:!0,error:null,menu:[]};case c.FETCH_MENU_SUCCESS:return{loading:!1,error:null,menu:t.payload};case c.FETCH_MENU_ERROR:return{loading:!1,error:t.payload,menu:[]};case c.REMOVE_ITEM:return Object(y.a)(Object(y.a)({},e),{},{menu:e.menu.filter((function(e){return e.id!==t.payload}))});case c.PLUS_ITEM:return Object(y.a)(Object(y.a)({},e),{},{menu:e.menu.map((function(e){return e.id===t.payload?Object(y.a)(Object(y.a)({},e),{},{quantity:e.quantity+1}):e}))});case c.MINUS_ITEM:return Object(y.a)(Object(y.a)({},e),{},{menu:e.menu.map((function(e){return e.id===t.payload?Object(y.a)(Object(y.a)({},e),{},{quantity:e.quantity-1}):e}))});case c.ADD_CART:return Object(y.a)(Object(y.a)({},e),{},{menu:[t.payload].concat(Object(m.a)(e.menu))});default:return e}}}),T=Object(f.c)(C,Object(f.a)(x.a));i.a.render(Object(d.jsx)(u.a,{store:T,children:Object(d.jsx)(h,{})}),document.getElementById("root")),E()}},[[29,1,2]]]);
//# sourceMappingURL=main.9c5e954f.chunk.js.map