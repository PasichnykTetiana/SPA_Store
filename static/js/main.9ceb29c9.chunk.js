(this["webpackJsonpspa-store"]=this["webpackJsonpspa-store"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),n=c(21),s=c.n(n),i=c(7),o=c(2),l=c(11),d=c(8);function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"asc";return fetch("https://fakestoreapi.com/products?sort=".concat(e)).then((function(e){return e.json()}))}var u=c(0);function p(e){var t=e.item,c=e.rerenderParent,a=e.value,r=e.children;return Object(u.jsx)("span",{onClick:function(){var e=JSON.parse(localStorage.getItem("cart"));if(e){var r=e.findIndex((function(e){return e.id==t.id}));switch(a){case"add":if(e){r>=0?e[r].productAmount+=1:e.push({id:t.id,image:t.image,price:t.price,title:t.title,productAmount:1});var n=0;e.forEach((function(e){n+=1*e.productAmount})),localStorage.setItem("cart",JSON.stringify(e)),localStorage.setItem("productsCount",n)}else localStorage.setItem("cart",JSON.stringify([{id:t.id,image:t.image,price:t.price,title:t.title,productAmount:1}])),localStorage.setItem("productsCount",1);c();break;case"delete":if(e){r>=0&&e[r].productAmount>1?e[r].productAmount-=1:e.splice(r,r+1);var s=0;e.forEach((function(e){s+=1*e.productAmount})),localStorage.setItem("cart",JSON.stringify(e)),localStorage.setItem("productsCount",s)}c()}}else localStorage.setItem("cart",JSON.stringify([{productId:t.id,productAmount:1}])),localStorage.setItem("productsCount",1)},children:r})}function h(e){var t=e.item,c=e.rerenderParent;return Object(u.jsx)("div",{className:"col h-70",style:{marginTop:10},children:Object(u.jsxs)("div",{className:"card h-100 card-grid",children:[Object(u.jsx)("div",{style:{marginTop:"auto"},children:Object(u.jsx)(i.b,{to:"/product/".concat(t.id),children:Object(u.jsx)("img",{className:"card-img-top h-auto w-25",src:t.image})})}),Object(u.jsxs)("div",{className:"card-body",style:{marginTop:"auto"},children:[Object(u.jsx)("h5",{className:"card-title",children:Object(u.jsx)(i.b,{to:"/product/".concat(t.id),children:t.title})}),Object(u.jsxs)("p",{children:["Category: ",t.category]}),Object(u.jsxs)("p",{children:["Price: ",t.price]}),Object(u.jsx)(p,{item:t,rerenderParent:c,value:"add",children:Object(u.jsx)("button",{className:"btn btn-primary mybtn",children:"Add to cart"})})]})]})})}var m=function(e){var t=e.count,c=void 0===t?0:t;return Object(u.jsxs)("div",{style:{position:"relative"},children:[Object(u.jsx)("i",{className:"bi bi-cart3"}),Object(u.jsx)("span",{style:{position:"absolute",top:"-10px",right:"-10px",backgroundColor:"red",fontSize:"20px",width:"30px",height:"30px",textAlign:"center",borderRadius:"50%",color:"#fff",lineHeight:"28px"},children:c})]})},b=function(e){var t=e.type,c=void 0===t?"text-primary":t;return Object(u.jsx)("div",{className:"d-flex justify-content-center",children:Object(u.jsx)("div",{className:"spinner-border ".concat(c),role:"status",children:Object(u.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},g=function(e){var t=e.categories,c=e.categoryLocation,a=t.map((function(e){return Object(u.jsx)(i.b,{className:"nav-link ".concat(e===c&&"disabled"),style:{margin:20},to:"/category/".concat(e),children:e},e)}));return 0===t.length?Object(u.jsx)(b,{}):Object(u.jsx)("nav",{className:"nav nav-pills nav-fill ",children:a})},O=function(e){var t=e.pageName,c=e.children,r=Object(a.useState)([]),n=Object(d.a)(r,2),s=n[0],o=n[1],l=parseInt(localStorage.getItem("productsCount"))||0;return Object(a.useEffect)((function(){fetch("https://fakestoreapi.com/products/categories/").then((function(e){return e.json()})).then((function(e){o(e)}))}),[]),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(g,{categories:s,categoryLocation:t}),Object(u.jsx)("h1",{className:"text-center",style:{marginTop:30},children:t}),Object(u.jsx)("div",{className:"d-flex justify-content-end h1",children:Object(u.jsx)(i.b,{to:"/cart",children:Object(u.jsx)(m,{count:l})})}),c]})};var x=function(){var e=Object(o.f)("/category/:categoryName"),t=Object(a.useReducer)((function(e){return e+1}),0),c=Object(d.a)(t,2),r=(c[0],c[1]),n=Object(a.useState)({product:[],pageName:"",loaded:!1}),s=Object(d.a)(n,2),i=s[0],j=s[1];function p(){r()}Object(a.useEffect)((function(){var t;j(Object(l.a)(Object(l.a)({},i),{},{pageName:e.params.categoryName,loaded:!1})),e.params.categoryName===i.pageName&&(t=e.params.categoryName,fetch("https://fakestoreapi.com/products/category/".concat(t)).then((function(e){return e.json()}))).then((function(e){return j(Object(l.a)(Object(l.a)({},i),{},{product:e,loaded:!0}))}))}),[e.params.categoryName,i.pageName]);var m=i.product.map((function(e){return Object(u.jsx)(h,{item:e,rerenderParent:p},e.id)}));return Object(u.jsx)("div",{children:Object(u.jsx)(O,{pageName:e.params.categoryName,children:i.loaded?Object(u.jsx)("div",{className:"wrapper",children:m}):Object(u.jsx)(b,{})})})},f=c.p+"static/media/empty_cart.997bb803.png",v=function(){var e=JSON.parse(localStorage.getItem("cart"))||0,t=Object(a.useReducer)((function(e){return e+1}),0),c=Object(d.a)(t,2),r=(c[0],c[1]);function n(){r()}var s=e.map((function(e){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"card mt-2 mb-2",children:Object(u.jsxs)("div",{className:"row g-0",children:[Object(u.jsx)("div",{className:"col-md-4 d-flex justify-content-center align-items-center",children:Object(u.jsx)("img",{className:"",src:e.image,style:{width:150}})}),Object(u.jsx)("div",{className:"col-md-8",children:Object(u.jsxs)("div",{className:"card-body ",children:[Object(u.jsx)("h5",{className:"card-title",children:e.title}),Object(u.jsxs)("p",{className:"card-text",children:[Object(u.jsx)(p,{item:e,rerenderParent:n,value:"delete",children:Object(u.jsx)("button",{className:"btn btn-outline-secondary",children:"-"})}),Object(u.jsxs)("span",{children:[" ",e.productAmount," "]}),Object(u.jsx)(p,{item:e,rerenderParent:n,value:"add",children:Object(u.jsx)("button",{className:"btn btn-outline-secondary",children:"+"})})]}),Object(u.jsx)("p",{className:"card-text",children:Object(u.jsxs)("small",{className:"text-muted",children:["Total price: ",(e.price*e.productAmount).toFixed(2)]})})]})})]})})},e.id)})),i=0;return e.forEach((function(e){i+=e.productAmount*e.price})),Object(u.jsx)("div",{className:"position-relative ",children:s.length<1?Object(u.jsx)("img",{src:f,alt:"Empty cart",className:"position-absolute top-0 start-50 translate-middle-x cart-img"}):Object(u.jsx)("div",{className:"position-absolute top-0 start-50 translate-middle-x",style:{width:540,marginTop:20},children:Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:s}),Object(u.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(u.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){e&&(e.splice(0,e.length),localStorage.setItem("cart",JSON.stringify(e)),localStorage.setItem("productsCount",0)),n()},children:"Clear cart"}),Object(u.jsxs)("div",{children:["Total: ",i]})]})]})})})},N=c(12),P=c(13),y=c(15),S=c(14),C=0,k=function(e){Object(y.a)(c,e);var t=Object(S.a)(c);function c(e){var a;return Object(N.a)(this,c),(a=t.call(this,e)).rerender=function(){a.setState({})},a.onPaginationClick=function(e,t){console.log(e,a.state.currentPage),console.log(a.state.itemsPerPage),a.setState({productsLoaded:!1,currentPage:e}),j(t).then((function(t){return a.setState({products:t.slice(e*a.state.itemsPerPage,e*a.state.itemsPerPage+a.state.itemsPerPage),productsLoaded:!0})}))},a.handleChange=function(e){a.setState({sort:e.target.value}),a.onPaginationClick(0,e.target.value)},a.changeItemsPerPage=function(e){a.setState({itemsPerPage:+e.target.value,productsLoaded:!1}),j(a.state.sort).then((function(t){return a.setState({products:t.slice(0,+e.target.value),productsLoaded:!0,currentPage:0})}))},a.state={products:[],productsLoaded:!1,itemsPerPage:3,currentPage:0,sort:"",test:"",paginationPrevious:"disabled",paginationNext:""},a}return Object(P.a)(c,[{key:"componentDidMount",value:function(){var e=this;j(this.state.sort).then((function(t){C=t.length,e.setState({products:t.slice(e.state.currentPage*e.state.itemsPerPage,e.state.currentPage*e.state.itemsPerPage+e.state.itemsPerPage),productsLoaded:!0})}))}},{key:"render",value:function(){for(var e=this,t=this.state.products.map((function(t){return Object(u.jsx)(h,{item:t,rerenderParent:e.rerender},t.id)})),c=[],a=Math.ceil(C/this.state.itemsPerPage),r=function(t){c[t]=Object(u.jsx)("li",{className:"page-item ".concat(e.state.currentPage===t&&"active"),onClick:function(){return e.onPaginationClick(t)},children:Object(u.jsx)("a",{className:"page-link",href:"#",children:t+1})},t)},n=0;n<a;n++)r(n);return Object(u.jsxs)(O,{pageName:"SPA Store",children:[Object(u.jsxs)("select",{value:this.state.itemsPerPage,onChange:this.changeItemsPerPage,children:[Object(u.jsx)("option",{value:"3",children:"3 products per page"}),Object(u.jsx)("option",{value:"6",children:"6 products per page"})]}),Object(u.jsxs)("select",{onChange:this.handleChange,children:[Object(u.jsx)("option",{value:"asc",children:"Asc"}),Object(u.jsx)("option",{value:"desc",children:"Desc"})]}),this.state.productsLoaded?Object(u.jsx)("div",{className:"wrapper ",children:t}):Object(u.jsx)(b,{}),Object(u.jsx)("nav",{"aria-label":"Page navigation example",className:"mt-3",children:Object(u.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(u.jsx)("li",{className:"page-item ".concat(0===this.state.currentPage&&"disabled"),children:Object(u.jsxs)("a",{className:"page-link",href:"#","aria-label":"Previous",onClick:function(){return e.onPaginationClick(e.state.currentPage-1)},children:[Object(u.jsx)("span",{"aria-hidden":"true",children:"\xab"}),Object(u.jsx)("span",{className:"sr-only",children:"Previous"})]})}),c,Object(u.jsx)("li",{className:"page-item ".concat(this.state.currentPage===a-1&&"disabled"),children:Object(u.jsxs)("a",{className:"page-link",href:"#","aria-label":"Next",onClick:function(){return e.onPaginationClick(e.state.currentPage+1)},children:[Object(u.jsx)("span",{className:"sr-only",children:"Next"}),Object(u.jsx)("span",{"aria-hidden":"true",children:"\xbb"})]})})]})})]})}}]),c}(r.a.Component);function I(e){var t=e.item,c=e.rerenderParent;return Object(u.jsxs)("div",{className:"row ",children:[Object(u.jsx)("div",{className:"col-3 single-photo",children:Object(u.jsx)("img",{className:"card-img-top h-auto w-75",src:t.image})}),Object(u.jsxs)("div",{className:"col-9 ",children:[Object(u.jsx)("h5",{className:"card-title",children:t.title}),Object(u.jsxs)("p",{children:["Category: ",t.category]}),Object(u.jsxs)("p",{children:["Price: ",t.price]}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=parseInt(localStorage.getItem("productsCount"));e?localStorage.setItem("productsCount",e+1):localStorage.setItem("productsCount",1),c()},children:"Add to cart"}),Object(u.jsx)("h5",{children:"Description:"}),Object(u.jsx)("p",{children:t.description})]})]})}var A=function(e){Object(y.a)(c,e);var t=Object(S.a)(c);function c(e){var a;return Object(N.a)(this,c),(a=t.call(this,e)).rerender=function(){a.forceUpdate()},a.state={product:null},a}return Object(P.a)(c,[{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.match.params.productId,fetch("https://fakestoreapi.com/products/".concat(e)).then((function(e){return e.json()}))).then((function(e){return t.setState({product:e})}))}},{key:"render",value:function(){return Object(u.jsx)(O,{pageName:"Product Details",children:null===this.state.product?Object(u.jsx)(b,{}):Object(u.jsx)(I,{rerenderParent:this.rerender,item:this.state.product})})}}]),c}(r.a.Component),w=Object(o.g)(A);c(33);var L=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/product/:productId",children:Object(u.jsx)(w,{})}),Object(u.jsx)(o.a,{path:"/category/:categoryName",children:Object(u.jsx)(x,{})}),Object(u.jsx)(o.a,{path:"/cart",children:Object(u.jsx)(v,{})}),Object(u.jsx)(o.a,{path:"/",children:Object(u.jsx)(k,{})})]})})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(L,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.9ceb29c9.chunk.js.map