(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-doctor-team-doctor-team-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/doctor-team/doctor-team.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doctor-team/doctor-team.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"sp-page-title\">\r\n  <div class=\"row\">\r\n    <div id=\"sp-title\" class=\"col-sm-12 col-md-12\">\r\n      <div class=\"sp-column \">\r\n        <div class=\"sp-page-title\">\r\n          <div class=\"container\">\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 pull-left\" style=\"padding: 40px 0px;\">\r\n              <h2>Team</h2>\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 pull-right text-right\" style=\"padding: 40px 0px;\">\r\n              <ol class=\"breadcrumb float-right\">\r\n                <span>You are here: &nbsp;</span>\r\n                <li class=\"breadcrumb-item\"><a href=\"/home\">Home</a></li>\r\n                <li class=\"breadcrumb-item\"><a href=\"/doctor-team\">Our Team</a></li>\r\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">\r\n                  Doctor Team\r\n                </li>\r\n              </ol>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n<div class=\"container\">\r\n  <ng-container *ngFor=\"let department of departments\">\r\n    <h5 class=\"text-center m-4\">{{department.name}}</h5>\r\n    <div class=\"icon2 \"></div>\r\n    <div class=\"text-center m-4\">{{department.description}}</div>\r\n\r\n    <div class=\"row images-container m-5\">\r\n      <div class=\"col-md-4 image-wrapper\">\r\n        <img class=\"img-fluid image\" src=\"../../assets/doc_male1.jpg\">\r\n        <div class=\"description\">\r\n          <a class=\"color-white\" href=\"/dr1-detail\">\r\n            <div class=\"jd_name\">Dr. Johnathon Deo</div>\r\n            <div class=\"jd_specialty\">Medical Specialist</div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 image-wrapper\">\r\n        <img class=\"img-fluid image\" src=\"../../assets/doc_female2.jpg\">\r\n        <div class=\"description\">\r\n          <a class=\"color-white\" href=\"/dr1-detail\">\r\n            <div class=\"jd_name\">Dr. Cheryl R.</div>\r\n            <div class=\"jd_specialty\">Medical Specialist</div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 image-wrapper\">\r\n        <img class=\"img-fluid image\" src=\"../../assets/male2.jpg\">\r\n        <div class=\"description\">\r\n          <a class=\"color-white\" href=\"/dr1-detail\">\r\n            <div class=\"jd_name\">Dr. Juan V.</div>\r\n            <div class=\"jd_specialty\">Medical Specialist</div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n\r\n<div class=\"container text-center mt30\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"contactNav()\">Contact us</button>\r\n</div>");

/***/ }),

/***/ "./src/app/doctor-team/doctor-team.component.css":
/*!*******************************************************!*\
  !*** ./src/app/doctor-team/doctor-team.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon2 {\r\n    display: block;\r\n    width: 32px;\r\n    height: 32px;\r\n    background: url('lifeline-in-a-heart-outline.png');\r\n    padding: 1rem 1rem;\r\n    margin :auto;\r\n}\r\n.images-container {\r\n    border-bottom-color:1px solid rgb(51, 51, 51);;\r\n}\r\n.description {\r\n    bottom: -100%;\r\n    width: 100%;\r\n    color: #fff;\r\n    padding: 15px 0;\r\n    position: absolute;\r\n    text-align: center;\r\n    background: #4593ff;\r\n    transition: bottom 0.35s ease-in-out 0s;\r\n    -webkit-transition: bottom 0.35s ease-in-out 0s;\r\n}\r\n.image-wrapper {\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.image:hover + .description {\r\n    bottom : 0;\r\n}\r\n.description:hover {\r\n    bottom:0;\r\n}\r\n.jd_name {\r\n    font-size: 22px;\r\n}\r\n.jd_specialty {\r\n    font-size: 18px;\r\n    font-style: italic\r\n}\r\n.description a:hover {\r\n    text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdG9yLXRlYW0vZG9jdG9yLXRlYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtEQUErRDtJQUMvRCxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNkNBQTZDO0FBQ2pEO0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLCtDQUErQztBQUNuRDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxRQUFRO0FBQ1o7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZjtBQUNKO0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9kb2N0b3ItdGVhbS9kb2N0b3ItdGVhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24yIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9saWZlbGluZS1pbi1hLWhlYXJ0LW91dGxpbmUucG5nJyk7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW07XHJcbiAgICBtYXJnaW4gOmF1dG87XHJcbn1cclxuLmltYWdlcy1jb250YWluZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjoxcHggc29saWQgcmdiKDUxLCA1MSwgNTEpOztcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICAgIGJvdHRvbTogLTEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzQ1OTNmZjtcclxuICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjM1cyBlYXNlLWluLW91dCAwcztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm90dG9tIDAuMzVzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcbi5pbWFnZS13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pbWFnZTpob3ZlciArIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBib3R0b20gOiAwO1xyXG59XHJcbi5kZXNjcmlwdGlvbjpob3ZlciB7XHJcbiAgICBib3R0b206MDtcclxufVxyXG5cclxuLmpkX25hbWUge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5qZF9zcGVjaWFsdHkge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljXHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/doctor-team/doctor-team.component.ts":
/*!******************************************************!*\
  !*** ./src/app/doctor-team/doctor-team.component.ts ***!
  \******************************************************/
/*! exports provided: DoctorTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorTeamComponent", function() { return DoctorTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let DoctorTeamComponent = class DoctorTeamComponent {
    constructor(router) {
        this.router = router;
        this.departments = [{
                name: 'Primary Health Care',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. '
            },
            {
                name: 'Cardiology specialist',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. '
            },
            {
                name: 'Ophthalmology Clinic',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. '
            }
        ];
    }
    ngOnInit() {
    }
    contactNav() {
        this.router.navigate(['/' + 'contact-us']);
        window.scroll(0, 0);
    }
};
DoctorTeamComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DoctorTeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctor-team',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doctor-team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/doctor-team/doctor-team.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doctor-team.component.css */ "./src/app/doctor-team/doctor-team.component.css")).default]
    })
], DoctorTeamComponent);



/***/ }),

/***/ "./src/app/doctor-team/doctor-team.module.ts":
/*!***************************************************!*\
  !*** ./src/app/doctor-team/doctor-team.module.ts ***!
  \***************************************************/
/*! exports provided: DoctorTeamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorTeamModule", function() { return DoctorTeamModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _doctor_team_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doctor-team.component */ "./src/app/doctor-team/doctor-team.component.ts");
/* harmony import */ var _doctor_team_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./doctor-team.routing */ "./src/app/doctor-team/doctor-team.routing.ts");





let DoctorTeamModule = class DoctorTeamModule {
};
DoctorTeamModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _doctor_team_routing__WEBPACK_IMPORTED_MODULE_4__["DoctorTeamRoutes"]
        ],
        declarations: [_doctor_team_component__WEBPACK_IMPORTED_MODULE_3__["DoctorTeamComponent"]]
    })
], DoctorTeamModule);



/***/ }),

/***/ "./src/app/doctor-team/doctor-team.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/doctor-team/doctor-team.routing.ts ***!
  \****************************************************/
/*! exports provided: DoctorTeamRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorTeamRoutes", function() { return DoctorTeamRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _doctor_team_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doctor-team.component */ "./src/app/doctor-team/doctor-team.component.ts");



const routes = [
    { path: '', component: _doctor_team_component__WEBPACK_IMPORTED_MODULE_2__["DoctorTeamComponent"] },
];
const DoctorTeamRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=src-app-doctor-team-doctor-team-module-es2015.js.map