(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[303],{3014:function(e,a,r){Promise.resolve().then(r.bind(r,1822))},1822:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return d}});var s=r(7437),l=r(2265),t=r(2537),n=r(2173);function o(e){let{data:a}=e,r={"Georgette Sarees":["Silver Zari","Water Zari","Meenakari Work","Antique Zari","Gold Zari","Chikankari","Bandhani"],"Katan Silk Sarees":["Jaal Work","Kadua Motifs","Kadua Jangla"],"Tussar Silk Sarees":["Tussar Silk Sarees"],"Kora Silk Sarees":["Kora Silk Sarees"],"Organza Sarees":["Organza Sarees"],"Chiffon Sarees":["Chiffon Sarees"],"Dupion Silk Saree":["Dupion Silk Saree"],"Tissue Sarees":["Tissue Sarees"]},[o,d]=(0,l.useState)(a.category),[i,c]=(0,l.useState)(a.subCategory),[u,m]=(0,l.useState)(a.color),[g,x]=(0,l.useState)([]),b=(0,t.TA)({initialValues:{title:a.title,price:a.price,discount:a.discount,stock:a.stock,desc:a.desc,category:a.category,subCategory:a.subCategory,color:a.color},onSubmit:e=>{e.category=o,e.subCategory=i,e.color=u,e.images=g;let r=new FormData;g.forEach(e=>{r.append("images",e)}),n.Z.put("/api/admin/product?id=".concat(a.id),e).then(function(e){console.log(e),alert("Product Updated Succesfully"),location.href="/admin/products"}).catch(function(e){console.log(e),alert("Product Not Updated"),console.log(e)})}});return(0,s.jsxs)("section",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-5",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold text-center mb-8",children:"Update Product"}),(0,s.jsx)("div",{className:"container max-w-5xl mx-auto",children:(0,s.jsxs)("form",{className:"border-1 p-5",onSubmit:b.handleSubmit,encType:"multipart/form-data",method:"POST",children:[(0,s.jsxs)("div",{className:"grid sm:grid-cols-12 gap-2 sm:gap-6",children:[(0,s.jsx)("div",{className:"sm:col-span-3",children:(0,s.jsx)("label",{className:"inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200",children:"Product photo"})}),(0,s.jsx)("div",{className:"sm:col-span-9",children:(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)("div",{className:"flex gap-x-2",children:(0,s.jsx)("div",{children:(0,s.jsx)("input",{className:"py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border border-gray-300 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600",accept:"image/*",name:"avatar",onChange:e=>{let a=Array.from(e.target.files);x([]),a.forEach(e=>{let a=new FileReader;a.onload=()=>{2===a.readyState&&x(e=>[...e,a.result])},a.readAsDataURL(e)})},type:"file",multiple:"true"})})})})}),(0,s.jsx)("div",{className:"sm:col-span-3",children:(0,s.jsx)("label",{htmlFor:"af-account-email",className:"inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200",children:"Title (Unique)"})}),(0,s.jsx)("div",{className:"sm:col-span-9",children:(0,s.jsx)("input",{id:"af-account-email",type:"text",className:"py-2 px-3 pe-11 block w-full border border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600",placeholder:"",name:"title",onChange:b.handleChange,value:b.values.title,required:!0})}),(0,s.jsx)("div",{className:"sm:col-span-3",children:(0,s.jsx)("label",{htmlFor:"af-account-email",className:"inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200",children:"Price"})}),(0,s.jsx)("div",{className:"sm:col-span-9",children:(0,s.jsx)("input",{id:"af-account-email",type:"number",className:"py-2 px-3 pe-11 block w-full border border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600",name:"price",required:!0,onChange:b.handleChange,value:b.values.price})}),(0,s.jsx)("div",{className:"sm:col-span-3",children:(0,s.jsx)("label",{htmlFor:"af-account-email",className:"inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200",children:"Discount in %"})}),(0,s.jsx)("div",{className:"sm:col-span-9",children:(0,s.jsx)("input",{id:"af-account-email",type:"number",className:"py-2 px-3 pe-11 block w-full border border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600",required:!0,name:"discount",onChange:b.handleChange,value:b.values.discount})}),(0,s.jsx)("div",{className:"sm:col-span-3",children:(0,s.jsx)("label",{htmlFor:"af-account-email",className:"inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200",children:"Stock"})}),(0,s.jsx)("div",{className:"sm:col-span-9",children:(0,s.jsx)("input",{id:"af-account-email",type:"number",className:"py-2 px-3 pe-11 block w-full border border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600",required:!0,name:"stock",onChange:b.handleChange,value:b.values.stock})}),(0,s.jsx)("div",{className:"sm:col-span-3",children:(0,s.jsx)("div",{className:"inline-block",children:(0,s.jsx)("label",{htmlFor:"af-account-phone",className:"inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200",children:"Color"})})}),(0,s.jsx)("div",{className:"sm:col-span-9",children:(0,s.jsx)("div",{className:"sm:flex",children:(0,s.jsxs)("select",{value:a.color,onChange:e=>m(e.target.value),className:"py-2 px-3 pe-11 block w-full border border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600",children:[(0,s.jsx)("option",{children:"Uncategorized"}),(0,s.jsx)("option",{children:"Black"}),(0,s.jsx)("option",{children:"Blue"}),(0,s.jsx)("option",{children:"Pink"}),(0,s.jsx)("option",{children:"Green"}),(0,s.jsx)("option",{children:"Red"})]})})}),(0,s.jsx)("div",{className:"sm:col-span-3",children:(0,s.jsx)("div",{className:"inline-block",children:(0,s.jsx)("label",{htmlFor:"af-account-phone",className:"inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200",children:"Category"})})}),(0,s.jsx)("div",{className:"sm:col-span-9",children:(0,s.jsx)("div",{className:"sm:flex",children:(0,s.jsx)("select",{className:"py-2 px-3 pe-11 block w-full border border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600",defaultValue:o,onChange:e=>d(e.target.value),children:Object.keys(r).map(e=>(0,s.jsx)("option",{value:e,children:e},e))})})}),(0,s.jsx)("div",{className:"sm:col-span-3",children:(0,s.jsx)("div",{className:"inline-block",children:(0,s.jsx)("label",{htmlFor:"af-account-phone",className:"inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200",children:"Sub Category"})})}),(0,s.jsx)("div",{className:"sm:col-span-9",children:(0,s.jsx)("div",{className:"sm:flex",children:(0,s.jsx)("select",{className:"py-2 px-3 pe-11 block w-full border border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600",defaultValue:i,onChange:e=>c(e.target.value),children:r[o].map(e=>(0,s.jsx)("option",{value:e,children:e},e))})})}),(0,s.jsx)("div",{className:"sm:col-span-3",children:(0,s.jsx)("label",{htmlFor:"af-account-bio",className:"inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200",children:"Description"})}),(0,s.jsx)("div",{className:"sm:col-span-9",children:(0,s.jsx)("textarea",{id:"af-account-bio",className:"py-2 px-3 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600",rows:6,required:!0,name:"desc",onChange:b.handleChange,value:b.values.desc})})]}),(0,s.jsx)("div",{className:"mt-5 flex justify-center gap-x-2",children:(0,s.jsx)("button",{type:"submit",className:"py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600",children:"Update Product"})})]})})]})}var d=e=>{let{params:a}=e;(0,l.useEffect)(()=>{d()},[]);let[r,t]=(0,l.useState)({}),d=async()=>{n.Z.get("/api/product?id=".concat(a.id)).then(e=>{console.log(e.data.data),t(e.data.data)})};return(0,s.jsx)(s.Fragment,{children:0===Object.keys(r).length?"Loading...":(0,s.jsx)(o,{data:r})})}}},function(e){e.O(0,[580,537,971,472,744],function(){return e(e.s=3014)}),_N_E=e.O()}]);