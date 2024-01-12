"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/admin/product/route";
exports.ids = ["app/api/admin/product/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "lodash/assign":
/*!********************************!*\
  !*** external "lodash/assign" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/assign");

/***/ }),

/***/ "lodash/at":
/*!****************************!*\
  !*** external "lodash/at" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("lodash/at");

/***/ }),

/***/ "lodash/clone":
/*!*******************************!*\
  !*** external "lodash/clone" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("lodash/clone");

/***/ }),

/***/ "lodash/cloneDeep":
/*!***********************************!*\
  !*** external "lodash/cloneDeep" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ "lodash/compact":
/*!*********************************!*\
  !*** external "lodash/compact" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash/compact");

/***/ }),

/***/ "lodash/difference":
/*!************************************!*\
  !*** external "lodash/difference" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("lodash/difference");

/***/ }),

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/extend");

/***/ }),

/***/ "lodash/filter":
/*!********************************!*\
  !*** external "lodash/filter" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/filter");

/***/ }),

/***/ "lodash/first":
/*!*******************************!*\
  !*** external "lodash/first" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("lodash/first");

/***/ }),

/***/ "lodash/functions":
/*!***********************************!*\
  !*** external "lodash/functions" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("lodash/functions");

/***/ }),

/***/ "lodash/identity":
/*!**********************************!*\
  !*** external "lodash/identity" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/identity");

/***/ }),

/***/ "lodash/includes":
/*!**********************************!*\
  !*** external "lodash/includes" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/includes");

/***/ }),

/***/ "lodash/isArray":
/*!*********************************!*\
  !*** external "lodash/isArray" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash/isArray");

/***/ }),

/***/ "lodash/isElement":
/*!***********************************!*\
  !*** external "lodash/isElement" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("lodash/isElement");

/***/ }),

/***/ "lodash/isEmpty":
/*!*********************************!*\
  !*** external "lodash/isEmpty" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ "lodash/isFunction":
/*!************************************!*\
  !*** external "lodash/isFunction" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("lodash/isFunction");

/***/ }),

/***/ "lodash/isNumber":
/*!**********************************!*\
  !*** external "lodash/isNumber" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/isNumber");

/***/ }),

/***/ "lodash/isObject":
/*!**********************************!*\
  !*** external "lodash/isObject" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/isObject");

/***/ }),

/***/ "lodash/isPlainObject":
/*!***************************************!*\
  !*** external "lodash/isPlainObject" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("lodash/isPlainObject");

/***/ }),

/***/ "lodash/isString":
/*!**********************************!*\
  !*** external "lodash/isString" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/isString");

/***/ }),

/***/ "lodash/isUndefined":
/*!*************************************!*\
  !*** external "lodash/isUndefined" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("lodash/isUndefined");

/***/ }),

/***/ "lodash/last":
/*!******************************!*\
  !*** external "lodash/last" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("lodash/last");

/***/ }),

/***/ "lodash/map":
/*!*****************************!*\
  !*** external "lodash/map" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("lodash/map");

/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("lodash/merge");

/***/ }),

/***/ "lodash/take":
/*!******************************!*\
  !*** external "lodash/take" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("lodash/take");

/***/ }),

/***/ "lodash/trim":
/*!******************************!*\
  !*** external "lodash/trim" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("lodash/trim");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fproduct%2Froute&page=%2Fapi%2Fadmin%2Fproduct%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fproduct%2Froute.js&appDir=%2Fworkspaces%2Fbunkar_banaras%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fbunkar_banaras&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fproduct%2Froute&page=%2Fapi%2Fadmin%2Fproduct%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fproduct%2Froute.js&appDir=%2Fworkspaces%2Fbunkar_banaras%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fbunkar_banaras&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _workspaces_bunkar_banaras_app_api_admin_product_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/product/route.js */ \"(rsc)/./app/api/admin/product/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/product/route\",\n        pathname: \"/api/admin/product\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/product/route\"\n    },\n    resolvedPagePath: \"/workspaces/bunkar_banaras/app/api/admin/product/route.js\",\n    nextConfigOutput,\n    userland: _workspaces_bunkar_banaras_app_api_admin_product_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/admin/product/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRnByb2R1Y3QlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmFkbWluJTJGcHJvZHVjdCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmFkbWluJTJGcHJvZHVjdCUyRnJvdXRlLmpzJmFwcERpcj0lMkZ3b3Jrc3BhY2VzJTJGYnVua2FyX2JhbmFyYXMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRndvcmtzcGFjZXMlMkZidW5rYXJfYmFuYXJhcyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNTO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hyZWUtbmV4dC8/Y2VlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvd29ya3NwYWNlcy9idW5rYXJfYmFuYXJhcy9hcHAvYXBpL2FkbWluL3Byb2R1Y3Qvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2FkbWluL3Byb2R1Y3Qvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hZG1pbi9wcm9kdWN0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hZG1pbi9wcm9kdWN0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL3dvcmtzcGFjZXMvYnVua2FyX2JhbmFyYXMvYXBwL2FwaS9hZG1pbi9wcm9kdWN0L3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2FkbWluL3Byb2R1Y3Qvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fproduct%2Froute&page=%2Fapi%2Fadmin%2Fproduct%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fproduct%2Froute.js&appDir=%2Fworkspaces%2Fbunkar_banaras%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fbunkar_banaras&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/admin/product/route.js":
/*!****************************************!*\
  !*** ./app/api/admin/product/route.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\n\nconst cloudinary = __webpack_require__(/*! cloudinary */ \"(rsc)/./node_modules/cloudinary/cloudinary.js\");\nconst dynamic = \"force-dynamic\";\ncloudinary.config({\n    cloud_name: process.env.CLOUDINARY_NAME,\n    api_key: process.env.CLOUDINARY_API_KEY,\n    api_secret: process.env.CLOUDINARY_API_SECRET\n});\nasync function POST(request) {\n    try {\n        const { title, desc, price, discount, category, subCategory, color, stock, images } = await request.json();\n        if (!title, !desc, !price, !discount, !category, !subCategory, !color, !stock, !images) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n                success: false,\n                error: \"Bad Request\"\n            }, {\n                status: 400\n            });\n        }\n        let imagesArr = [];\n        let imagesLinks = [];\n        if (typeof images === \"string\") {\n            imagesArr.push(images);\n        } else {\n            imagesArr = images;\n        }\n        if (imagesArr !== undefined) {\n            for(let i = 0; i < imagesArr.length; i++){\n                const result = await cloudinary.v2.uploader.upload(imagesArr[i], {\n                    folder: \"products-test\"\n                });\n                imagesLinks.push(result.secure_url);\n            }\n        }\n        const product = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].product.create({\n            data: {\n                title,\n                desc,\n                price: String(price),\n                discount: String(discount),\n                category,\n                subCategory,\n                color,\n                stock: String(stock),\n                images: {\n                    create: imagesLinks.map((url)=>({\n                            url\n                        }))\n                }\n            },\n            include: {\n                images: true\n            }\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            success: true,\n            data: product\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.log(error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            success: false,\n            error: error.message\n        }, {\n            status: 501\n        });\n    }\n}\nasync function GET(request) {\n    try {\n        const products = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].product.findMany({\n            include: {\n                images: {\n                    select: {\n                        url: true\n                    }\n                }\n            }\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            success: true,\n            data: products\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            success: false,\n            error: error.message\n        }, {\n            status: 501\n        });\n    }\n}\nasync function DELETE(request) {\n    try {\n        const url = new URL(request.nextUrl.href);\n        const id = url.searchParams.get(\"id\");\n        const products = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].product.delete({\n            where: {\n                id\n            }\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            success: true,\n            data: products\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            success: false,\n            error: error.message\n        }, {\n            status: 501\n        });\n    }\n}\nasync function PUT(request) {\n    try {\n        const { title, desc, price, discount, category, subCategory, color, stock, images } = await request.json();\n        const url = new URL(request.nextUrl.href);\n        const id = url.searchParams.get(\"id\");\n        if (!title, !desc, !price, !discount, !category, !subCategory, !color, !stock, !id) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n                success: false,\n                error: \"Bad Request\"\n            }, {\n                status: 400\n            });\n        }\n        let imagesArr = [];\n        let imagesLinks = [];\n        if (typeof images === \"string\") {\n            imagesArr.push(images);\n        } else {\n            imagesArr = images;\n        }\n        if (imagesArr !== undefined) {\n            for(let i = 0; i < imagesArr.length; i++){\n                const result = await cloudinary.v2.uploader.upload(imagesArr[i], {\n                    folder: \"products-test\"\n                });\n                imagesLinks.push(result.secure_url);\n            }\n        }\n        const updateProduct = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].product.update({\n            where: {\n                id\n            },\n            data: {\n                title,\n                desc,\n                price: String(price),\n                discount: String(discount),\n                category,\n                subCategory,\n                color,\n                stock: String(stock),\n                ...imagesLinks.length > 0 ? {\n                    images: {\n                        deleteMany: {},\n                        create: imagesLinks.map((url)=>({\n                                url\n                            }))\n                    }\n                } : {}\n            }\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            success: true,\n            data: updateProduct\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.log(error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            success: false,\n            error: error.message\n        }, {\n            status: 501\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUIsTUFBTXNCO1FBQ1YsR0FBRztZQUNDckMsUUFBUTtRQUNaO0lBR0osRUFBRSxPQUFPRCxPQUFPO1FBQ1pxQixRQUFRQyxHQUFHLENBQUN0QjtRQUNoQixPQUFPMUIsa0ZBQVlBLENBQUN3QixJQUFJLENBQUM7WUFDckJDLFNBQVM7WUFDVEMsT0FBT0EsTUFBTXVCLE9BQU87UUFDeEIsR0FBRztZQUNDdEIsUUFBUTtRQUNaO0lBQUc7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NocmVlLW5leHQvLi9hcHAvYXBpL2FkbWluL3Byb2R1Y3Qvcm91dGUuanM/MTJmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuY29uc3QgY2xvdWRpbmFyeSA9IHJlcXVpcmUoXCJjbG91ZGluYXJ5XCIpO1xuZXhwb3J0IGNvbnN0IGR5bmFtaWM9J2ZvcmNlLWR5bmFtaWMnXG5cbmNsb3VkaW5hcnkuY29uZmlnKHsgXG4gICAgY2xvdWRfbmFtZTogcHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9OQU1FLCBcbiAgICBhcGlfa2V5OiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX0FQSV9LRVksXG4gICAgYXBpX3NlY3JldDogcHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9BUElfU0VDUkVUXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdCl7XG50cnkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjLFxuICAgICAgICBwcmljZSxcbiAgICAgICAgZGlzY291bnQsXG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBzdWJDYXRlZ29yeSxcbiAgICAgICAgY29sb3IsXG4gICAgICAgIHN0b2NrLFxuICAgICAgICBpbWFnZXNcbiAgICB9PWF3YWl0IHJlcXVlc3QuanNvbigpO1xuXG4gICAgaWYgKCF0aXRsZSxcbiAgICAgICAgIWRlc2MsXG4gICAgICAgICFwcmljZSxcbiAgICAgICAgIWRpc2NvdW50LFxuICAgICAgICAhY2F0ZWdvcnksXG4gICAgICAgICFzdWJDYXRlZ29yeSxcbiAgICAgICAgIWNvbG9yLFxuICAgICAgICAhc3RvY2ssXG4gICAgICAgICFpbWFnZXMpIHtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3I6XCJCYWQgUmVxdWVzdFwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGxldCBpbWFnZXNBcnIgPSBbXTtcbiAgICBsZXQgaW1hZ2VzTGlua3M9W107XG4gICAgaWYgKHR5cGVvZiBpbWFnZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaW1hZ2VzQXJyLnB1c2goaW1hZ2VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWFnZXNBcnIgPSBpbWFnZXM7XG4gICAgfVxuICAgIGlmIChpbWFnZXNBcnIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlc0Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsb3VkaW5hcnkudjIudXBsb2FkZXIudXBsb2FkKGltYWdlc0FycltpXSwge1xuICAgICAgICAgICAgZm9sZGVyOiBcInByb2R1Y3RzLXRlc3RcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpbWFnZXNMaW5rcy5wdXNoKHJlc3VsdC5zZWN1cmVfdXJsKTtcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuXG4gICAgY29uc3QgcHJvZHVjdD0gYXdhaXQgcHJpc21hLnByb2R1Y3QuY3JlYXRlKHtcbiAgICAgICAgZGF0YTp7XG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGRlc2MsXG4gICAgICAgICAgICBwcmljZTpTdHJpbmcocHJpY2UpLFxuICAgICAgICAgICAgZGlzY291bnQ6U3RyaW5nKGRpc2NvdW50KSxcbiAgICAgICAgICAgIGNhdGVnb3J5LFxuICAgICAgICAgICAgc3ViQ2F0ZWdvcnksXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIHN0b2NrOlN0cmluZyhzdG9jayksXG4gICAgICAgICAgICBpbWFnZXM6IHtcbiAgICAgICAgICAgICAgICBjcmVhdGU6IGltYWdlc0xpbmtzLm1hcCgodXJsKSA9PiAoeyB1cmwgfSkpLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBpbWFnZXM6IHRydWUsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIH0pXG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICBkYXRhOiBwcm9kdWN0XG4gICAgfSwge1xuICAgICAgICBzdGF0dXM6IDIwMSxcbiAgICB9KTtcblxuICAgXG59IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxucmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxufSwge1xuICAgIHN0YXR1czogNTAxLFxufSk7fX1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Qpe1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzPWF3YWl0IHByaXNtYS5wcm9kdWN0LmZpbmRNYW55KHtcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBpbWFnZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiB7IHVybDogdHJ1ZSB9LCAvLyBJbmNsdWRlIG9ubHkgdGl0bGVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgICAgICAgc3VjY2Vzczp0cnVlLFxuICAgICAgICAgICAgZGF0YTpwcm9kdWN0c1xuICAgICAgICB9LHtcbiAgICAgICAgICAgIHN0YXR1czoyMDBcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc3RhdHVzOiA1MDEsXG4gICAgICAgIH0pO1xuICAgICAgICAgIFxuICAgIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gREVMRVRFKHJlcXVlc3Qpe1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC5uZXh0VXJsLmhyZWYpO1xuICAgICAgICBjb25zdCBpZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdpZCcpO1xuXG4gICAgXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzPWF3YWl0IHByaXNtYS5wcm9kdWN0LmRlbGV0ZSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICAgICAgICBzdWNjZXNzOnRydWUsXG4gICAgICAgICAgICBkYXRhOnByb2R1Y3RzXG4gICAgICAgIH0se1xuICAgICAgICAgICAgc3RhdHVzOjIwMFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzdGF0dXM6IDUwMSxcbiAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQocmVxdWVzdCl7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZGVzYyxcbiAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgZGlzY291bnQsXG4gICAgICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgICAgIHN1YkNhdGVnb3J5LFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBzdG9jayxcbiAgICAgICAgICAgIGltYWdlc1xuICAgICAgICB9PWF3YWl0IHJlcXVlc3QuanNvbigpO1xuXG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC5uZXh0VXJsLmhyZWYpO1xuICAgICAgICBjb25zdCBpZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdpZCcpO1xuXG4gICAgXG4gICAgICAgIGlmICghdGl0bGUsXG4gICAgICAgICAgICAhZGVzYyxcbiAgICAgICAgICAgICFwcmljZSxcbiAgICAgICAgICAgICFkaXNjb3VudCxcbiAgICAgICAgICAgICFjYXRlZ29yeSxcbiAgICAgICAgICAgICFzdWJDYXRlZ29yeSxcbiAgICAgICAgICAgICFjb2xvcixcbiAgICAgICAgICAgICFzdG9jayxcbiAgICAgICAgICAgICFpZCkge1xuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcjpcIkJhZCBSZXF1ZXN0XCJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IDQwMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgXG4gICAgXG4gICAgICAgIGxldCBpbWFnZXNBcnIgPSBbXTtcbiAgICAgICAgbGV0IGltYWdlc0xpbmtzPVtdO1xuICAgICAgICBpZiAodHlwZW9mIGltYWdlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgaW1hZ2VzQXJyLnB1c2goaW1hZ2VzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGltYWdlc0FyciA9IGltYWdlcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW1hZ2VzQXJyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsb3VkaW5hcnkudjIudXBsb2FkZXIudXBsb2FkKGltYWdlc0FycltpXSwge1xuICAgICAgICAgICAgICAgIGZvbGRlcjogXCJwcm9kdWN0cy10ZXN0XCIsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpbWFnZXNMaW5rcy5wdXNoKHJlc3VsdC5zZWN1cmVfdXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgdXBkYXRlUHJvZHVjdCA9IGF3YWl0IHByaXNtYS5wcm9kdWN0LnVwZGF0ZSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICAgICBkZXNjLFxuICAgICAgICAgICAgICAgIHByaWNlOlN0cmluZyhwcmljZSksXG4gICAgICAgICAgICAgICAgZGlzY291bnQ6U3RyaW5nKGRpc2NvdW50KSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgICAgICAgICBzdWJDYXRlZ29yeSxcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBzdG9jazpTdHJpbmcoc3RvY2spLFxuICAgICAgICAgICAgICAgIC4uLihpbWFnZXNMaW5rcy5sZW5ndGg+MD8geyBpbWFnZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlTWFueToge30sXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZTogaW1hZ2VzTGlua3MubWFwKCh1cmwpID0+ICh7IHVybCB9KSksXG4gICAgICAgICAgICAgICAgICB9fToge30pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgZGF0YTogdXBkYXRlUHJvZHVjdFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzdGF0dXM6IDIwMSxcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXG4gICAgfSwge1xuICAgICAgICBzdGF0dXM6IDUwMSxcbiAgICB9KTt9fVxuXG5cbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJOZXh0UmVzcG9uc2UiLCJjbG91ZGluYXJ5IiwicmVxdWlyZSIsImR5bmFtaWMiLCJjb25maWciLCJjbG91ZF9uYW1lIiwicHJvY2VzcyIsImVudiIsIkNMT1VESU5BUllfTkFNRSIsImFwaV9rZXkiLCJDTE9VRElOQVJZX0FQSV9LRVkiLCJhcGlfc2VjcmV0IiwiQ0xPVURJTkFSWV9BUElfU0VDUkVUIiwiUE9TVCIsInJlcXVlc3QiLCJ0aXRsZSIsImRlc2MiLCJwcmljZSIsImRpc2NvdW50IiwiY2F0ZWdvcnkiLCJzdWJDYXRlZ29yeSIsImNvbG9yIiwic3RvY2siLCJpbWFnZXMiLCJqc29uIiwic3VjY2VzcyIsImVycm9yIiwic3RhdHVzIiwiaW1hZ2VzQXJyIiwiaW1hZ2VzTGlua3MiLCJwdXNoIiwidW5kZWZpbmVkIiwiaSIsImxlbmd0aCIsInJlc3VsdCIsInYyIiwidXBsb2FkZXIiLCJ1cGxvYWQiLCJmb2xkZXIiLCJzZWN1cmVfdXJsIiwicHJvZHVjdCIsImNyZWF0ZSIsImRhdGEiLCJTdHJpbmciLCJtYXAiLCJ1cmwiLCJpbmNsdWRlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJHRVQiLCJwcm9kdWN0cyIsImZpbmRNYW55Iiwic2VsZWN0IiwiREVMRVRFIiwiVVJMIiwibmV4dFVybCIsImhyZWYiLCJpZCIsInNlYXJjaFBhcmFtcyIsImdldCIsImRlbGV0ZSIsIndoZXJlIiwiUFVUIiwidXBkYXRlUHJvZHVjdCIsInVwZGF0ZSIsImRlbGV0ZU1hbnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/product/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n//\n// Learn more:\n// https://pris.ly/d/help/next-js-best-practices\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5Qyw0RUFBNEU7QUFDNUUsNkNBQTZDO0FBQzdDLEVBQUU7QUFDRixjQUFjO0FBQ2QsZ0RBQWdEO0FBRWhELElBQUlDO0FBRUosSUFBSUMsS0FBcUMsRUFBRSxFQUUxQyxNQUFNO0lBQ0gsSUFBSSxDQUFDQyxPQUFPRixNQUFNLEVBQUU7UUFDaEJFLE9BQU9GLE1BQU0sR0FBRyxJQUFJRCx3REFBWUE7SUFDcEM7SUFDQUMsU0FBU0UsT0FBT0YsTUFBTTtBQUMxQjtBQUNBLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hyZWUtbmV4dC8uL2xpYi9wcmlzbWEuanM/NzUxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuLy8gUHJpc21hQ2xpZW50IGlzIGF0dGFjaGVkIHRvIHRoZSBgZ2xvYmFsYCBvYmplY3QgaW4gZGV2ZWxvcG1lbnQgdG8gcHJldmVudFxuLy8gZXhoYXVzdGluZyB5b3VyIGRhdGFiYXNlIGNvbm5lY3Rpb24gbGltaXQuXG4vL1xuLy8gTGVhcm4gbW9yZTpcbi8vIGh0dHBzOi8vcHJpcy5seS9kL2hlbHAvbmV4dC1qcy1iZXN0LXByYWN0aWNlc1xuXG5sZXQgcHJpc21hO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICAgICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgICB9XG4gICAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcbn1cbmV4cG9ydCBkZWZhdWx0IHByaXNtYTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicHJvY2VzcyIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/core-js","vendor-chunks/cloudinary","vendor-chunks/q","vendor-chunks/cloudinary-core"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fproduct%2Froute&page=%2Fapi%2Fadmin%2Fproduct%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fproduct%2Froute.js&appDir=%2Fworkspaces%2Fbunkar_banaras%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fbunkar_banaras&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();