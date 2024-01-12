"use strict";(()=>{var e={};e.id=9482,e.ids=[9482],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},68066:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>h,originalPathname:()=>P,patchFetch:()=>f,requestAsyncStorage:()=>l,routeModule:()=>d,serverHooks:()=>m,staticGenerationAsyncStorage:()=>g,staticGenerationBailout:()=>y});var a={};r.r(a),r.d(a,{GET:()=>p,dynamic:()=>u});var s=r(10884),o=r(16132),c=r(21040),n=r(27342),i=r(95798);let u="force-dynamic";async function p(e){try{let t=new URL(e.nextUrl.href),r=t.searchParams.get("search"),a=t.searchParams.get("category"),s=t.searchParams.get("subCategory"),o=t.searchParams.get("color"),c=(t.searchParams.get("sort"),t.searchParams.get("price")),u={};r&&(u={OR:[{title:{contains:r}},{desc:{contains:r}},{subCategory:{contains:r}},{color:{contains:r}}]}),a&&"all"!=a.toLowerCase()&&(u.category={contains:a}),s&&(u.subCategory={contains:s}),o&&(u.color={contains:o}),c&&(0==c&&(u={price:{lte:0,gte:5e3}}),1==c&&(u={price:{lte:50001,gte:1e4}}),2==c&&(u={price:{lte:10001,gte:15e3}}),3==c&&(u={price:{gte:15e3}}));let p=await n.Z.product.findMany({where:u,orderBy:{createdAt:"desc"},include:{images:{select:{url:!0}}}});return i.Z.json({success:!0,data:p},{status:200})}catch(e){return i.Z.json({success:!1,error:e.message},{status:501})}}let d=new s.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/(user)/products/route",pathname:"/api/products",filename:"route",bundlePath:"app/api/(user)/products/route"},resolvedPagePath:"/workspaces/bunkar_banaras/app/api/(user)/products/route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:l,staticGenerationAsyncStorage:g,serverHooks:m,headerHooks:h,staticGenerationBailout:y}=d,P="/api/(user)/products/route";function f(){return(0,c.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:g})}},27342:(e,t,r)=>{let a;r.d(t,{Z:()=>o});let s=require("@prisma/client");a=new s.PrismaClient;let o=a}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[3271,8107],()=>r(68066));module.exports=a})();