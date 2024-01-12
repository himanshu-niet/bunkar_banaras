(()=>{var e={};e.id=7258,e.ids=[7258],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},11825:()=>{},10951:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>u,routeModule:()=>m,tree:()=>l});var a=t(67096),s=t(16132),n=t(37284),o=t.n(n),i=t(32564),d={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);t.d(r,d);let l=["",{children:["(user)",{children:["admin-login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,2425)),"/workspaces/bunkar_banaras/app/(user)/admin-login/page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,40894)),"/workspaces/bunkar_banaras/app/(user)/layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,69454)),"/workspaces/bunkar_banaras/app/layout.js"],error:[()=>Promise.resolve().then(t.t.bind(t,60979,23)),"/workspaces/bunkar_banaras/app/error.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/workspaces/bunkar_banaras/app/(user)/admin-login/page.js"],c="/(user)/admin-login/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/(user)/admin-login/page",pathname:"/admin-login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},52415:(e,r,t)=>{Promise.resolve().then(t.bind(t,21362))},21362:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var a=t(53854),s=t(41499),n=t(83847),o=t(34218);let i=()=>{(0,o.useEffect)(()=>{(0,s.getCookie)("admin")&&(location.href="/admin/products")},[]);let[e,r]=(0,o.useState)(""),[t,i]=(0,o.useState)("");return a.jsx("section",{className:"bg-gray-50 dark:bg-gray-900",children:a.jsx("div",{className:"flex flex-col items-center justify-center px-6 py-5 mx-auto md:h-screen lg:py-0",children:a.jsx("div",{className:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700",children:(0,a.jsxs)("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[a.jsx("h1",{className:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"Sign in to Dashboard (Admin Login)"}),(0,a.jsxs)("div",{className:"space-y-4 md:space-y-6",method:"post",children:[(0,a.jsxs)("div",{children:[a.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Your email"}),a.jsx("input",{type:"email",name:"email",id:"email",value:e,onChange:e=>r(e.target.value),className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""})]}),(0,a.jsxs)("div",{children:[a.jsx("label",{htmlFor:"password",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Password"}),a.jsx("input",{type:"password",name:"password",id:"password",value:t,onChange:e=>i(e.target.value),className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""})]}),a.jsx("button",{onClick:()=>{n.Z.post("api/admin/signin",{email:e,password:t}).then(e=>{e.data.success?((0,s.setCookie)("admin",JSON.stringify(e.data.data)),location.href="/admin/products"):alert("Email Password Not Match")}).catch(e=>{alert("Email Not Found")})},className:"w-full text-white  btn-m-lm  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ",children:"Sign in"})]})]})})})})}},41499:e=>{"use strict";e.exports={setCookie:function(e,r){let t=new Date;t.setTime(t.getTime()+864e5);let a=`${encodeURIComponent(e)}=${encodeURIComponent(r)};expires=${t.toUTCString()};path=/`;document.cookie=a},getCookie:function(e){let r=`${encodeURIComponent(e)}=`,t=document.cookie.split(";");for(let e=0;e<t.length;e++){let a=t[e].trim();if(0===a.indexOf(r))return decodeURIComponent(a.substring(r.length,a.length))}return null},deleteCookie:function(e){let r=new Date(0),t=`${encodeURIComponent(e)}=;expires=${r.toUTCString()};path=/`;document.cookie=t}}},2425:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>o,__esModule:()=>n,default:()=>d});var a=t(95153);let s=(0,a.createProxy)(String.raw`/workspaces/bunkar_banaras/app/(user)/admin-login/page.js`),{__esModule:n,$$typeof:o}=s,i=s.default,d=i}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[3271,4850,1323,6952,3847,3007,5641],()=>t(10951));module.exports=a})();