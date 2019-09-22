(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-med-services-med-services-module"],{

/***/ "./src/app/med-services/med-service.routing.ts":
/*!*****************************************************!*\
  !*** ./src/app/med-services/med-service.routing.ts ***!
  \*****************************************************/
/*! exports provided: MedServiceRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedServiceRoutes", function() { return MedServiceRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _med_services_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./med-services.component */ "./src/app/med-services/med-services.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: '', component: _med_services_component__WEBPACK_IMPORTED_MODULE_1__["MedServicesComponent"] },
];
const MedServiceRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/med-services/med-services.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/med-services/med-services.module.ts ***!
  \*****************************************************/
/*! exports provided: MedServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedServicesModule", function() { return MedServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _med_service_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./med-service.routing */ "./src/app/med-services/med-service.routing.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _med_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./med-services.component */ "./src/app/med-services/med-services.component.ts");





let MedServicesModule = class MedServicesModule {
};
MedServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _med_service_routing__WEBPACK_IMPORTED_MODULE_1__["MedServiceRoutes"]
        ],
        declarations: [_med_services_component__WEBPACK_IMPORTED_MODULE_4__["MedServicesComponent"]]
    })
], MedServicesModule);



/***/ })

}]);
//# sourceMappingURL=src-app-med-services-med-services-module-es2015.js.map