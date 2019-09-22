(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-forms-forms-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"sp-page-title\">\r\n  <div class=\"row\">\r\n    <div id=\"sp-title\" class=\"col-sm-12 col-md-12\">\r\n      <div class=\"sp-column \">\r\n        <div class=\"sp-page-title\">\r\n          <div class=\"container\">\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 pull-left\" style=\"padding: 40px 0px;\">\r\n              <h2>Forms</h2>\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 pull-right text-right\" style=\"padding: 40px 0px;\">\r\n              <ol class=\"breadcrumb float-right\">\r\n                <span>You are here: &nbsp;</span>\r\n                <li class=\"breadcrumb-item\"><a href=\"/home\">Home</a></li>\r\n                <li class=\"breadcrumb-item\"><a href=\"/forms\">Forms</a></li>\r\n              </ol>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<div class=\"container mt30 mb30\">\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">#</th>\r\n        <th scope=\"col\">Form Name</th>\r\n        <th scope=\"col\">Link to download Form</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <th scope=\"row\">1</th>\r\n        <td>New Patient</td>\r\n        <td>Download link</td>\r\n      </tr>\r\n      <tr>\r\n        <th scope=\"row\">2</th>\r\n        <td>Return Patient</td>\r\n        <td>Download link</td>\r\n      </tr>\r\n      <tr>\r\n        <th scope=\"row\">3</th>\r\n        <td>Medical</td>\r\n        <td>Download link</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<div class=\"container text-center mt30\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"contactNav()\">Contact us</button>\r\n</div>");

/***/ }),

/***/ "./src/app/forms/forms.component.css":
/*!*******************************************!*\
  !*** ./src/app/forms/forms.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2Zvcm1zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/forms/forms.component.ts":
/*!******************************************!*\
  !*** ./src/app/forms/forms.component.ts ***!
  \******************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let FormsComponent = class FormsComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    contactNav() {
        this.router.navigate(['/' + 'contact-us']);
        window.scroll(0, 0);
    }
};
FormsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forms',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forms.component.css */ "./src/app/forms/forms.component.css")).default]
    })
], FormsComponent);



/***/ }),

/***/ "./src/app/forms/forms.module.ts":
/*!***************************************!*\
  !*** ./src/app/forms/forms.module.ts ***!
  \***************************************/
/*! exports provided: FormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _forms_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.routing */ "./src/app/forms/forms.routing.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms.component */ "./src/app/forms/forms.component.ts");





let FormsModule = class FormsModule {
};
FormsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _forms_routing__WEBPACK_IMPORTED_MODULE_1__["FormsRoutes"]
        ],
        declarations: [_forms_component__WEBPACK_IMPORTED_MODULE_4__["FormsComponent"]]
    })
], FormsModule);



/***/ }),

/***/ "./src/app/forms/forms.routing.ts":
/*!****************************************!*\
  !*** ./src/app/forms/forms.routing.ts ***!
  \****************************************/
/*! exports provided: FormsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutes", function() { return FormsRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: '', component: _forms_component__WEBPACK_IMPORTED_MODULE_1__["FormsComponent"] },
];
const FormsRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=src-app-forms-forms-module-es2015.js.map