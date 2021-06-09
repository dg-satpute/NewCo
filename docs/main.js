(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\NewCo\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CG0s":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ErrorComponent {
    constructor() {
        this.errorMessage = "error occured";
    }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 1, vars: 1, template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.errorMessage, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "J7Q4":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class WelcomeComponent {
    constructor(http) {
        this.http = http;
        this.pname = '';
        this.price = "";
        this.pid = "";
        this.pimg = "";
        this.pdesc = "";
        this.pstock = "";
        this.pcat = "";
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
    }
    onUpload() {
        const fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post("http://localhost:4200\src\assets\img", fd)
            .subscribe(res => {
            console.log(res);
        });
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 29, vars: 3, consts: [[1, "container", "bg-light"], ["type", "text", 3, "ngModel", "ngModelChange"], ["aria-label", "Default select example", 1, "form-select"], ["value", "Electronics"], ["value", "Agriculture"], ["value", "Fashion"], ["value", "Furniture"], ["value", "construction"], ["type", "file", ";", "", 3, "change"], [1, "btn-success", 3, "click"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "product ID : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WelcomeComponent_Template_input_ngModelChange_3_listener($event) { return ctx.pid = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WelcomeComponent_Template_input_ngModelChange_6_listener($event) { return ctx.pname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Price: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WelcomeComponent_Template_input_ngModelChange_9_listener($event) { return ctx.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Category: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Electronics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Agriculture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Furniture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Construction Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function WelcomeComponent_Template_input_change_25_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcomeComponent_Template_button_click_27_listener() { return ctx.onUpload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.price);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TGkX":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_hardcode_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/hardcode-authentication.service */ "wL1U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function MenuComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MenuComponent {
    constructor(hardcodedAuthenticationService) {
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
    }
    ngOnInit() {
        //this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_hardcode_authentication_service__WEBPACK_IMPORTED_MODULE_1__["HardcodeAuthenticationService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 15, vars: 3, consts: [[1, "navbar", "navbar-expand", "navbar-dark", "bg-dark"], [1, "navbar-brand", 2, "color", "chartreuse", "height", "50px"], [1, "navbar-nav"], ["routerLink", "/welcome/gan", "class", "nav-link", 4, "ngIf"], ["routerLink", "/product", 1, "nav-link"], [1, "fa", "fa-home"], [1, "navbar-nav", "navbar-collapse", "justify-content-end"], ["routerLink", "/login", "class", "nav-link", 4, "ngIf"], ["routerLink", "/logout", "class", "nav-link", 4, "ngIf"], ["routerLink", "/welcome/gan", 1, "nav-link"], ["routerLink", "/login", 1, "nav-link"], [1, "fa", "fa-user"], ["routerLink", "/logout", 1, "nav-link"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " NEP-OTT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MenuComponent_a_5_Template, 2, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MenuComponent_a_12_Template, 4, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MenuComponent_a_14_Template, 3, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hardcodedAuthenticationService.isUserLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hardcodedAuthenticationService.isUserLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hardcodedAuthenticationService.isUserLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["i[_ngcontent-%COMP%]{\r\n    font-size: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoibWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaXtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "TeKh":
/*!**********************************!*\
  !*** ./src/app/class.service.ts ***!
  \**********************************/
/*! exports provided: ClassService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassService", function() { return ClassService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ClassService {
    constructor() { }
    getname() {
        return 'Hello Ganesh';
    }
}
ClassService.ɵfac = function ClassService_Factory(t) { return new (t || ClassService)(); };
ClassService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClassService, factory: ClassService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Z92i":
/*!****************************************************************!*\
  !*** ./src/app/subject/subject-page/subject-page.component.ts ***!
  \****************************************************************/
/*! exports provided: SubjectPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectPageComponent", function() { return SubjectPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/syllabus"]; };
class SubjectPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
SubjectPageComponent.ɵfac = function SubjectPageComponent_Factory(t) { return new (t || SubjectPageComponent)(); };
SubjectPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubjectPageComponent, selectors: [["app-subject-page"]], decls: 33, vars: 2, consts: [[1, "container"], [1, "item", 3, "routerLink"], ["height", "200px ", "src", "assets\\img\\sciencepart110.jpg"], [1, "item"], ["height", "200px", "src", "assets\\img\\geography.jpg"], ["height", "200px", "src", "assets\\img\\math10.png"], ["height", "200px", "src", "assets\\img\\images.jpg"], ["height", "200px", "src", "assets\\img\\math.png"]], template: function SubjectPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "science");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "geography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "math");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "math");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "math");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["body[_ngcontent-%COMP%] {\r\n    background-color: rgb(36, 26, 7);\r\n  }\r\n  .container[_ngcontent-%COMP%]{\r\n     display: flex;\r\n     flex-wrap: wrap;\r\n      flex-direction: row;\r\n      column-gap: 40px;\r\n      background: rgb(193, 201, 214);\r\n      \r\n    border: 2px solid  darkolivegreen;\r\n    margin-top: 15px\r\n  }\r\n  .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{\r\n      box-shadow: black 20px;\r\n      border: 1px solid rgb(12, 19, 31);\r\n     \r\n\r\n  }\r\n  .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n      box-shadow: rgb(20, 27, 14)  10px;\r\n      \r\n      width:-webkit-fit-content;\r\n      \r\n      width:-moz-fit-content;\r\n      \r\n      width:fit-content;\r\n  }\r\n  .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{\r\n      transform: translateY(30px);\r\n  }\r\n  h3[_ngcontent-%COMP%]{\r\n      color: aliceblue;\r\n      font-size: 30px;\r\n      font-weight: bolder;\r\n      text-align: center;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YmplY3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0VBQ2xDO0VBQ0E7S0FDRyxhQUFhO0tBQ2IsZUFBZTtNQUNkLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsOEJBQThCOztJQUVoQyxpQ0FBaUM7SUFDakM7RUFDRjtFQUNBO01BQ0ksc0JBQXNCO01BQ3RCLGlDQUFpQzs7O0VBR3JDO0VBQ0E7TUFDSSxpQ0FBaUM7O01BRWpDLHlCQUFpQjs7TUFBakIsc0JBQWlCOztNQUFqQixpQkFBaUI7RUFDckI7RUFFQTtNQUNJLDJCQUEyQjtFQUMvQjtFQUNBO01BQ0ksZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsa0JBQWtCO0VBQ3RCIiwiZmlsZSI6InN1YmplY3QtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDI2LCA3KTtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgY29sdW1uLWdhcDogNDBweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiKDE5MywgMjAxLCAyMTQpO1xyXG4gICAgICBcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICBkYXJrb2xpdmVncmVlbjtcclxuICAgIG1hcmdpbi10b3A6IDE1cHhcclxuICB9XHJcbiAgLmNvbnRhaW5lciAuaXRlbXtcclxuICAgICAgYm94LXNoYWRvdzogYmxhY2sgMjBweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyLCAxOSwgMzEpO1xyXG4gICAgIFxyXG5cclxuICB9XHJcbiAgLml0ZW0gaW1ne1xyXG4gICAgICBib3gtc2hhZG93OiByZ2IoMjAsIDI3LCAxNCkgIDEwcHg7XHJcbiAgICAgIFxyXG4gICAgICB3aWR0aDpmaXQtY29udGVudDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciAuaXRlbTpob3ZlcntcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xyXG4gIH1cclxuICBoM3tcclxuICAgICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "J7Q4");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/error.component */ "CG0s");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logout/logout.component */ "n1B2");
/* harmony import */ var _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./productlist/productlist.component */ "aPpE");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _forget_forget_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forget/forget.component */ "h9Mj");
/* harmony import */ var _subject_subject_page_subject_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./subject/subject-page/subject-page.component */ "Z92i");
/* harmony import */ var _syllabus_syllabus_page_syllabus_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./syllabus/syllabus-page/syllabus-page.component */ "m9lx");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _class_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./class.service */ "TeKh");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_class_service__WEBPACK_IMPORTED_MODULE_18__["ClassService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        _error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
        _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"],
        _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_8__["ProductlistComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
        _forget_forget_component__WEBPACK_IMPORTED_MODULE_12__["ForgetComponent"],
        _subject_subject_page_subject_page_component__WEBPACK_IMPORTED_MODULE_13__["SubjectPageComponent"],
        _syllabus_syllabus_page_syllabus_page_component__WEBPACK_IMPORTED_MODULE_14__["SyllabusPageComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"]] }); })();


/***/ }),

/***/ "aPpE":
/*!******************************************************!*\
  !*** ./src/app/productlist/productlist.component.ts ***!
  \******************************************************/
/*! exports provided: ProductlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistComponent", function() { return ProductlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _class_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../class.service */ "TeKh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ProductlistComponent {
    constructor(_ClassService) {
        this._ClassService = _ClassService;
        this.className = ["First class", "second class", "third class", "Fourth class", "First class", "second class", "third class", "Fourth class"];
        this.Value = "";
    }
    ngOnInit() {
        this.Value = this._ClassService.getname();
    }
}
ProductlistComponent.ɵfac = function ProductlistComponent_Factory(t) { return new (t || ProductlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_class_service__WEBPACK_IMPORTED_MODULE_1__["ClassService"])); };
ProductlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductlistComponent, selectors: [["app-productlist"]], decls: 40, vars: 0, consts: [[1, "tm-gallery"], ["id", "tm-gallery", 1, "tm-gallery-page"], ["routerLink", "/subject", 1, "col-lg-3", "col-md-4", "col-sm-6", "col-12", "tm-gallery-item"], [1, "tm-gallery-title"], [1, "col-lg-3", "col-md-4", "col-sm-6", "col-12", "tm-gallery-item"]], template: function ProductlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "article", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "1st Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "article", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "2nd Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " < ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "3rd Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "4th Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "5th standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "6th Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "7th Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "8th Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "9th Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "10th Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "11th Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "12th Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["*[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Courier New', Courier, monospace;\r\n}\r\nul[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], figure[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\na[_ngcontent-%COMP%], button[_ngcontent-%COMP%] { transition: all 0.3s ease; }\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    -ms-overflow-style: scrollbar;\r\n  }\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n    box-sizing: inherit;\r\n  }\r\n.container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 1200px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n.tm-container-inner[_ngcontent-%COMP%], .tm-container-inner-2[_ngcontent-%COMP%] {\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n  }\r\n.row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-left: -15px;\r\n    margin-right: -15px;\r\n  }\r\n.col-lg-3[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-sm-6[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n  }\r\n.col-12[_ngcontent-%COMP%] {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n@media (min-width: 576px) {\r\n    .col-sm-6[_ngcontent-%COMP%] {\r\n      flex: 0 0 50%;\r\n      max-width: 50%;\r\n    }\r\n  }\r\n@media (min-width: 768px) {\r\n    .col-md-4[_ngcontent-%COMP%] {\r\n      flex: 0 0 33.333333%;\r\n      max-width: 33.333333%;\r\n    }\r\n    \r\n    .col-md-6[_ngcontent-%COMP%] {\r\n      flex: 0 0 50%;\r\n      max-width: 50%;\r\n    }\r\n  }\r\n@media (min-width: 992px) {\r\n    .col-lg-3[_ngcontent-%COMP%] {\r\n      flex: 0 0 25%;\r\n      max-width: 25%;\r\n    }\r\n    \r\n    .col-lg-4[_ngcontent-%COMP%] {\r\n      flex: 0 0 33.333333%;\r\n      max-width: 33.333333%;\r\n    }\r\n    \r\n    .col-lg-6[_ngcontent-%COMP%] {\r\n      flex: 0 0 50%;\r\n      max-width: 50%;\r\n    }\r\n  }\r\n\r\n.tm-btn[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-size: 1rem;\r\n    width: auto;\r\n    padding: 10px 30px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    border: 0;\r\n  }\r\n.tm-btn-default[_ngcontent-%COMP%] {\r\n    border: 1px solid #ccc;\r\n    background-color: transparent;\r\n    color: #626364;\r\n  }\r\n.tm-btn-default[_ngcontent-%COMP%]:hover, .tm-btn-default[_ngcontent-%COMP%]:focus {\r\n    color: white;\r\n    background-color: #98999A;\r\n  }\r\n.tm-btn-primary[_ngcontent-%COMP%] {\r\n    background-color: #2D99CC;\r\n    color: white;\r\n  }\r\n.tm-btn-primary[_ngcontent-%COMP%]:hover, .tm-btn-primary[_ngcontent-%COMP%]:focus {\r\n    background-color: #1b6f96;\r\n  }\r\n.tm-btn-success[_ngcontent-%COMP%] {\r\n    background-color: #319966;\r\n    color: white;\r\n  }\r\n.tm-btn-success[_ngcontent-%COMP%]:hover, .tm-btn-success[_ngcontent-%COMP%]:focus {\r\n    background-color: #1d6e46;\r\n  }\r\n.tm-btn-danger[_ngcontent-%COMP%] {\r\n    background-color: #993332;\r\n    color: white;\r\n  }\r\n.tm-btn-danger[_ngcontent-%COMP%]:hover, .tm-btn-danger[_ngcontent-%COMP%]:focus {\r\n    background-color: #752423;\r\n  }\r\n.tm-mb-45[_ngcontent-%COMP%] {\r\n    margin-bottom: 45px;\r\n  }\r\n.tm-mb-p[_ngcontent-%COMP%] {\r\n      margin-bottom: 20px;\r\n  }\r\n.tm-text-success[_ngcontent-%COMP%] {\r\n    color: #319966;\r\n  }\r\n.text-center[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n.hidden[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n  }\r\n.img-fluid[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    height: auto;\r\n  }\r\nbody[_ngcontent-%COMP%] {\r\n    \r\n    font-size: 17px;\r\n    background-color: #ccc;\r\n    overflow-x: hidden;\r\n  }\r\n.container[_ngcontent-%COMP%] {\r\n    \r\n    background-color: rgb(236, 236, 236);\r\n  }\r\np[_ngcontent-%COMP%], address[_ngcontent-%COMP%] {\r\n    color: #626364;\r\n    line-height: 1.8;\r\n  }\r\n\r\n.placeholder[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-height: 460px;\r\n    background-color: #556E5B;\r\n  }\r\n.placeholder-2[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-height: 220px;\r\n    background-color: #CFBEA5;\r\n    position: relative;\r\n    z-index: 998;\r\n  }\r\n.tm-header[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    color: white;\r\n    z-index: 1000;\r\n  }\r\n.tm-header-inner[_ngcontent-%COMP%] {\r\n    padding: 40px 50px;\r\n  }\r\n@media (max-width: 991px) {\r\n    .tm-header-inner[_ngcontent-%COMP%] {\r\n      padding: 30px 15px;\r\n    }\r\n  }\r\n.tm-welcome-section[_ngcontent-%COMP%] {\r\n    margin: 60px auto;\r\n    max-width: 655px;\r\n  }\r\n.tm-section-title[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    font-weight: 400;\r\n    margin-bottom: 30px;\r\n  }\r\n.tm-gallery[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    display: flex;\r\n    align-items: center;\r\n   \r\n    margin-bottom: 80px;\r\n    \r\n  }\r\n.tm-gallery-page[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    max-width: 280px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    \r\n  }\r\n.tm-section[_ngcontent-%COMP%], .tm-container-inner[_ngcontent-%COMP%], .tm-container-inner-2[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n@media (min-width: 576px) {\r\n    .tm-gallery-page[_ngcontent-%COMP%] {\r\n      max-width: 560px;\r\n    }\r\n  }\r\n\r\n@media (min-width: 768px) {\r\n    .tm-gallery-page[_ngcontent-%COMP%], .tm-section[_ngcontent-%COMP%], .tm-container-inner[_ngcontent-%COMP%], .tm-container-inner-2[_ngcontent-%COMP%] {\r\n      max-width: 840px;\r\n    }\r\n  }\r\n\r\n@media (min-width: 992px) {\r\n    .tm-gallery-page[_ngcontent-%COMP%], .tm-section[_ngcontent-%COMP%] {\r\n      max-width: 1120px;\r\n    }\r\n    \r\n    .tm-container-inner[_ngcontent-%COMP%] {\r\n      max-width: 1120px;\r\n    }\r\n    \r\n    .tm-container-inner-2[_ngcontent-%COMP%] {\r\n      max-width: 900px;\r\n    }\r\n  }\r\n.tm-gallery-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    background-color:rgba(123, 194, 190, 0.651);\r\n    margin-bottom: 20px;\r\n    margin-left: 20px;\r\n    max-width: 250px;\r\n    height: 150px;\r\n    align-items: center;\r\n    border :5px  rgb(117, 76, 92);\r\n    border-radius: 20px;\r\n    \r\n  }\r\n.tm-gallery-title[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    text-align: center;\r\n    font-size: 30px;\r\n    font-weight: 600;\r\n    color: #000000f6;\r\n   \r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztDQU1DO0FBQ0Q7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qiw4Q0FBOEM7QUFDaEQ7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0VBQ1o7QUFFQSxZQUFZLHlCQUF5QixFQUFFO0FBRXZDLDJCQUEyQjtBQUUzQjtJQUNFLHNCQUFzQjtJQUN0Qiw2QkFBNkI7RUFDL0I7QUFFQTs7O0lBR0UsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7QUFFQTs7SUFFRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0FBRUE7SUFFRSxhQUFhO0lBRWIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7QUFFQTs7Ozs7OztJQU9FLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjtBQUVBO0lBRUUsY0FBYztJQUNkLGVBQWU7RUFDakI7QUFFQTtJQUNFO01BRUUsYUFBYTtNQUNiLGNBQWM7SUFDaEI7RUFDRjtBQUVBO0lBQ0U7TUFFRSxvQkFBb0I7TUFDcEIscUJBQXFCO0lBQ3ZCOztJQUVBO01BRUUsYUFBYTtNQUNiLGNBQWM7SUFDaEI7RUFDRjtBQUVBO0lBQ0U7TUFFRSxhQUFhO01BQ2IsY0FBYztJQUNoQjs7SUFFQTtNQUVFLG9CQUFvQjtNQUNwQixxQkFBcUI7SUFDdkI7O0lBRUE7TUFFRSxhQUFhO01BQ2IsY0FBYztJQUNoQjtFQUNGO0FBRUE7Ozs7R0FJQztBQUVEO0lBQ0UscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsU0FBUztFQUNYO0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGNBQWM7RUFDaEI7QUFFQTs7SUFFRSxZQUFZO0lBQ1oseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkO0FBRUE7O0lBRUUseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkO0FBRUE7O0lBRUUseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkO0FBRUE7O0lBRUUseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFFQTtNQUNJLG1CQUFtQjtFQUN2QjtBQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSx3QkFBd0I7RUFDMUI7QUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0VBQ2Q7QUFFQTs7SUFFRSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtBQUVBOztJQUVFLG9DQUFvQztFQUN0QztBQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjtBQUVBLCtCQUErQjtBQUMvQjtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkO0FBT0E7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7RUFDZjtBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRTtNQUNFLGtCQUFrQjtJQUNwQjtFQUNGO0FBT0E7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CLG1CQUFtQjs7RUFFckI7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUVsQixhQUFhO0lBRWIsZUFBZTs7RUFFakI7QUFJQTs7O0lBR0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtBQUVBLG1EQUFtRDtBQUNuRDtJQUNFO01BQ0UsZ0JBQWdCO0lBQ2xCO0VBQ0Y7QUFFQSwyQ0FBMkM7QUFDM0M7SUFDRTs7OztNQUlFLGdCQUFnQjtJQUNsQjtFQUNGO0FBRUEsMkNBQTJDO0FBQzNDO0lBQ0U7O01BRUUsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsZ0JBQWdCO0lBQ2xCO0VBQ0Y7QUFFQTtJQUNFLGFBQWE7SUFDYiwyQ0FBMkM7SUFDM0MsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1COztFQUVyQjtBQUdBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7SUFFaEIsNEVBQTRFO0VBQzlFIiwiZmlsZSI6InByb2R1Y3RsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5cclxuU2ltcGxlIEhvdXNlXHJcblxyXG5odHRwczovL3RlbXBsYXRlbW8uY29tL3RtLTUzOS1zaW1wbGUtaG91c2VcclxuXHJcbiovXHJcbip7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG59XHJcblxyXG51bCwgbmF2LCBib2R5LCBoMSwgaDIsIGg0LCBoNiwgcCwgZmlndXJlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGEsIGJ1dHRvbiB7IHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IH1cclxuICBcclxuICAvKiBCb290c3RyYXAgZ3JpZCBzeXN0ZW0gICovXHJcbiAgXHJcbiAgaHRtbCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBzY3JvbGxiYXI7XHJcbiAgfVxyXG4gIFxyXG4gICosXHJcbiAgKjo6YmVmb3JlLFxyXG4gICo6OmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAudG0tY29udGFpbmVyLWlubmVyLFxyXG4gIC50bS1jb250YWluZXItaW5uZXItMiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG4gIH1cclxuICBcclxuICAuY29sLWxnLTMsXHJcbiAgLmNvbC1sZy00LFxyXG4gIC5jb2wtbGctNixcclxuICAuY29sLW1kLTQsXHJcbiAgLmNvbC1tZC02LFxyXG4gIC5jb2wtc20tNiwgXHJcbiAgLmNvbC0xMiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2wtMTIge1xyXG4gICAgLW1zLWZsZXg6IDAgMCAxMDAlO1xyXG4gICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgLmNvbC1zbS02IHtcclxuICAgICAgLW1zLWZsZXg6IDAgMCA1MCU7XHJcbiAgICAgIGZsZXg6IDAgMCA1MCU7XHJcbiAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb2wtbWQtNCB7XHJcbiAgICAgIC1tcy1mbGV4OiAwIDAgMzMuMzMzMzMzJTtcclxuICAgICAgZmxleDogMCAwIDMzLjMzMzMzMyU7XHJcbiAgICAgIG1heC13aWR0aDogMzMuMzMzMzMzJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbC1tZC02IHtcclxuICAgICAgLW1zLWZsZXg6IDAgMCA1MCU7XHJcbiAgICAgIGZsZXg6IDAgMCA1MCU7XHJcbiAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5jb2wtbGctMyB7XHJcbiAgICAgIC1tcy1mbGV4OiAwIDAgMjUlO1xyXG4gICAgICBmbGV4OiAwIDAgMjUlO1xyXG4gICAgICBtYXgtd2lkdGg6IDI1JTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbC1sZy00IHtcclxuICAgICAgLW1zLWZsZXg6IDAgMCAzMy4zMzMzMzMlO1xyXG4gICAgICBmbGV4OiAwIDAgMzMuMzMzMzMzJTtcclxuICAgICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29sLWxnLTYge1xyXG4gICAgICAtbXMtZmxleDogMCAwIDUwJTtcclxuICAgICAgZmxleDogMCAwIDUwJTtcclxuICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qXHJcbiAgICBwcmltYXJ5OiAjMkQ5OUNDXHJcbiAgICBzdWNjZXNzOiAjMzE5OTY2XHJcbiAgICBkYW5nZXI6ICM5OTMzMzJcclxuICAqL1xyXG4gIFxyXG4gIC50bS1idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC50bS1idG4tZGVmYXVsdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzYyNjM2NDtcclxuICB9XHJcbiAgXHJcbiAgLnRtLWJ0bi1kZWZhdWx0OmhvdmVyLFxyXG4gIC50bS1idG4tZGVmYXVsdDpmb2N1cyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTg5OTlBO1xyXG4gIH1cclxuICBcclxuICAudG0tYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJEOTlDQztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnRtLWJ0bi1wcmltYXJ5OmhvdmVyLFxyXG4gIC50bS1idG4tcHJpbWFyeTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI2Zjk2O1xyXG4gIH1cclxuICBcclxuICAudG0tYnRuLXN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxOTk2NjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnRtLWJ0bi1zdWNjZXNzOmhvdmVyLFxyXG4gIC50bS1idG4tc3VjY2Vzczpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ2ZTQ2O1xyXG4gIH1cclxuICBcclxuICAudG0tYnRuLWRhbmdlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkzMzMyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAudG0tYnRuLWRhbmdlcjpob3ZlcixcclxuICAudG0tYnRuLWRhbmdlcjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzUyNDIzO1xyXG4gIH1cclxuICBcclxuICAudG0tbWItNDUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuICB9XHJcbiAgXHJcbiAgLnRtLW1iLXAge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAudG0tdGV4dC1zdWNjZXNzIHtcclxuICAgIGNvbG9yOiAjMzE5OTY2O1xyXG4gIH1cclxuICBcclxuICAudGV4dC1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmltZy1mbHVpZCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xyXG4gIH1cclxuICBcclxuICBwLCBhZGRyZXNzIHtcclxuICAgIGNvbG9yOiAjNjI2MzY0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcclxuICB9XHJcbiAgXHJcbiAgLyogU2V0IHdpZHRoIGFuZCBoZWlnaHQgaW4gSlMgKi9cclxuICAucGxhY2Vob2xkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA0NjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTZFNUI7XHJcbiAgfVxyXG4gIFxyXG4gIC5wbGFjZWhvbGRlci0yIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZCRUE1O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogOTk4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICAudG0taGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC50bS1oZWFkZXItaW5uZXIge1xyXG4gICAgcGFkZGluZzogNDBweCA1MHB4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC50bS1oZWFkZXItaW5uZXIge1xyXG4gICAgICBwYWRkaW5nOiAzMHB4IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC50bS13ZWxjb21lLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOiA2MHB4IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDY1NXB4O1xyXG4gIH1cclxuICBcclxuICAudG0tc2VjdGlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRtLWdhbGxlcnkge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICBcclxuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLnRtLWdhbGxlcnktcGFnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyODBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAudG0tc2VjdGlvbixcclxuICAudG0tY29udGFpbmVyLWlubmVyLFxyXG4gIC50bS1jb250YWluZXItaW5uZXItMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLyogU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKSAqL1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgLnRtLWdhbGxlcnktcGFnZSB7XHJcbiAgICAgIG1heC13aWR0aDogNTYwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAudG0tZ2FsbGVyeS1wYWdlLFxyXG4gICAgLnRtLXNlY3Rpb24sXHJcbiAgICAudG0tY29udGFpbmVyLWlubmVyLFxyXG4gICAgLnRtLWNvbnRhaW5lci1pbm5lci0yIHtcclxuICAgICAgbWF4LXdpZHRoOiA4NDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC50bS1nYWxsZXJ5LXBhZ2UsXHJcbiAgICAudG0tc2VjdGlvbiB7XHJcbiAgICAgIG1heC13aWR0aDogMTEyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudG0tY29udGFpbmVyLWlubmVyIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMTIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50bS1jb250YWluZXItaW5uZXItMiB7XHJcbiAgICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC50bS1nYWxsZXJ5LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxMjMsIDE5NCwgMTkwLCAwLjY1MSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXIgOjVweCAgcmdiKDExNywgNzYsIDkyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnRtLWdhbGxlcnktdGl0bGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDBmNjtcclxuICAgXHJcbiAgICBmb250LWZhbWlseTonR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICBcclxuICAiXX0= */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 14, vars: 0, consts: [[1, "footer"], [1, "fa", "fa-phone"], [1, "fa", "fa-facebook"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "NEP-OTT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " @Copyright");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "contact us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 8805627461 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "visit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%]{\r\n   \r\n    font-size: large;\r\n    background-color: rgb(12, 19, 31);\r\n    height: 200px;\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif\r\n }\r\n .footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n     color: chartreuse;\r\n }\r\n .footer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    color: lavender\r\n }\r\n .footer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n     color: lightgray;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiO0NBQ0g7Q0FDQTtLQUNJLGlCQUFpQjtDQUNyQjtDQUNBO0lBQ0c7Q0FDSDtDQUNBO0tBQ0ksZ0JBQWdCO0NBQ3BCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcclxuICAgXHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCAxOSwgMzEpO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGZvbnQtZmFtaWx5OidHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWZcclxuIH1cclxuIC5mb290ZXIgaDF7XHJcbiAgICAgY29sb3I6IGNoYXJ0cmV1c2U7XHJcbiB9XHJcbiAuZm9vdGVyIGgye1xyXG4gICAgY29sb3I6IGxhdmVuZGVyXHJcbiB9XHJcbiAuZm9vdGVyIGg0e1xyXG4gICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbiB9Il19 */"] });


/***/ }),

/***/ "h9Mj":
/*!********************************************!*\
  !*** ./src/app/forget/forget.component.ts ***!
  \********************************************/
/*! exports provided: ForgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetComponent", function() { return ForgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ForgetComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForgetComponent.ɵfac = function ForgetComponent_Factory(t) { return new (t || ForgetComponent)(); };
ForgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgetComponent, selectors: [["app-forget"]], decls: 1, vars: 0, consts: [["type", "file", "capture", "user", "accept", "image/*"]], template: function ForgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JnZXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "m9lx":
/*!*******************************************************************!*\
  !*** ./src/app/syllabus/syllabus-page/syllabus-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: SyllabusPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyllabusPageComponent", function() { return SyllabusPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SyllabusPageComponent {
    constructor() {
        this.source = 'assets/video/Mere_Mehboob_Qayamat_Hogi__Sanam.mp4';
    }
    ngOnInit() {
    }
    play(song) {
        if (song == 'Gulabi Ankhe') {
            this.source = 'assets/video/Gulabi_Aankhen__Sanam.mp4';
        }
        if (song == 'Mere mehboob') {
            this.source = 'https://d3s2ast1ppti4l.cloudfront.net/Vectors+and+scalars+questions+(practice)+-+Khan+Academy.MKV';
        }
        if (song == 'costa') {
            this.source = 'assets/video/Mere_Mehboob_Qayamat_Hogi__Sanam.mp4';
        }
    }
}
SyllabusPageComponent.ɵfac = function SyllabusPageComponent_Factory(t) { return new (t || SyllabusPageComponent)(); };
SyllabusPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SyllabusPageComponent, selectors: [["app-syllabus-page"]], decls: 58, vars: 1, consts: [["onbeforeunload", "return message()"], [1, "row", "wrapper"], [1, "videoplayer", "col-sm-12", "col-lg-8"], ["id", "video", "autoplay", "", "controls", "", "controlsList", "nodownload", 2, "object-fit", "contain", "height", "100%", "width", "100%", 3, "src"], [1, "playlist", "col-sm-12", "col-lg-4"], [1, "content"], [1, "topic"], [1, "btn", "btn-dark", 3, "click"], [1, "fa", "fa-play-circle"], ["href", "assets\\Notes\\Science-and-Technology-Part-1-10th-Marathi-Medium.pdf", "download", ""], [1, "fa", "fa-play-circle-o"], [1, "description"], ["onclick", "get()", 1, "btn", "btn-dark"]], template: function SyllabusPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "video", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Content of subject ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyllabusPageComponent_Template_button_click_8_listener() { return ctx.play("Gulabi Ankhe"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Gulabi Ankhe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Download Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyllabusPageComponent_Template_button_click_14_listener() { return ctx.play("Mere mehboob"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Mere mehboob ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyllabusPageComponent_Template_button_click_18_listener() { return ctx.play("costa"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " nature video ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyllabusPageComponent_Template_button_click_22_listener() { return ctx.play("Mere mehboob"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Mere mehboob ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyllabusPageComponent_Template_button_click_26_listener() { return ctx.play("Mere mehboob"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Mere mehboob ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyllabusPageComponent_Template_button_click_30_listener() { return ctx.play("Mere mehboob"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Mere mehboob ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyllabusPageComponent_Template_button_click_34_listener() { return ctx.play("Mere mehboob"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Mere mehboob ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyllabusPageComponent_Template_button_click_38_listener() { return ctx.play("Mere mehboob"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Mere mehboob ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyllabusPageComponent_Template_button_click_42_listener() { return ctx.play("Mere mehboob"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Mere mehboob ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyllabusPageComponent_Template_button_click_46_listener() { return ctx.play("Mere mehboob"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Mere mehboob ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyllabusPageComponent_Template_button_click_50_listener() { return ctx.play("Mere mehboob"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Mere mehboob ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Continue learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.source, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n  }\r\n.wrapper[_ngcontent-%COMP%]{\r\n    margin-top: 6px;\r\n    \r\nmargin-left: auto;\r\nmargin-right: auto;\r\n\r\nwidth: 100%;\r\n\r\n\r\n}\r\n.videoplayer[_ngcontent-%COMP%]{\r\n   \r\n   \r\n    height: auto;\r\n    width: 100%;\r\n}\r\n.playlist[_ngcontent-%COMP%]{\r\n  \r\n   \r\n    height: 500px;\r\n   overflow-y: scroll;\r\n    scroll-behavior: smooth;\r\n    \r\n  background-color: #d9e2eb;;\r\n   \r\n    border: gray 1px solid;\r\n  \r\n}\r\n.content[_ngcontent-%COMP%]{\r\n    \r\n    width: 340px;\r\n    font-family:fantasy;\r\n    background-color: rgb(221, 219, 216);\r\n    \r\n    font-size: 30px;\r\n    padding-top: 9px;\r\n    height: 50px;\r\n}\r\n.topic[_ngcontent-%COMP%]{\r\n\r\n    margin-top: 2px;\r\n    width: 340px;\r\n    \r\n    \r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    background-color:rgb(193, 206, 211);\r\n    color: black;\r\n    text-align: left;\r\n    font-size: x-large;\r\n    font-family:'Courier New', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-weight: inherit;\r\n        width: 340px;\r\n    border-radius: 10px;\r\n    \r\n}\r\n.description[_ngcontent-%COMP%]{\r\n    border: 2px gray solid;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 100%;\r\n}\r\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    color: rgb(13, 23, 114);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5bGxhYnVzLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtFQUN4QjtBQUNGO0lBQ0ksZUFBZTs7QUFFbkIsaUJBQWlCO0FBQ2pCLGtCQUFrQjs7QUFFbEIsV0FBVzs7O0FBR1g7QUFDQTs7O0lBR0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUVBOzs7SUFHSSxhQUFhO0dBQ2Qsa0JBQWtCO0lBQ2pCLHVCQUF1Qjs7RUFFekIseUJBQXlCOztJQUV2QixzQkFBc0I7O0FBRTFCO0FBQ0E7O0lBRUksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixvQ0FBb0M7O0lBRXBDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUVBOztJQUVJLGVBQWU7SUFDZixZQUFZOzs7QUFHaEI7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw4RUFBOEU7SUFDOUUsb0JBQW9CO1FBQ2hCLFlBQVk7SUFDaEIsbUJBQW1COztBQUV2QjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0M7SUFDRyxlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InN5bGxhYnVzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbi53cmFwcGVye1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgXHJcbm1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5tYXJnaW4tcmlnaHQ6IGF1dG87XHJcblxyXG53aWR0aDogMTAwJTtcclxuXHJcblxyXG59XHJcbi52aWRlb3BsYXllcntcclxuICAgXHJcbiAgIFxyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wbGF5bGlzdHtcclxuICBcclxuICAgXHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAgIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWUyZWI7O1xyXG4gICBcclxuICAgIGJvcmRlcjogZ3JheSAxcHggc29saWQ7XHJcbiAgXHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgICBcclxuICAgIHdpZHRoOiAzNDBweDtcclxuICAgIGZvbnQtZmFtaWx5OmZhbnRhc3k7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMTksIDIxNik7XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBhZGRpbmctdG9wOiA5cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi50b3BpY3tcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB3aWR0aDogMzQwcHg7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4uYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTkzLCAyMDYsIDIxMSk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgZm9udC1mYW1pbHk6J0NvdXJpZXIgTmV3JywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgd2lkdGg6IDM0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIFxyXG59XHJcblxyXG4uZGVzY3JpcHRpb257XHJcbiAgICBib3JkZXI6IDJweCBncmF5IHNvbGlkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4gLmJ0biBpe1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgY29sb3I6IHJnYigxMywgMjMsIDExNCk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "n1B2":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_hardcode_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/hardcode-authentication.service */ "wL1U");


class LogoutComponent {
    constructor(hardcodedAuthenticationServic) {
        this.hardcodedAuthenticationServic = hardcodedAuthenticationServic;
    }
    ngOnInit() {
        this.hardcodedAuthenticationServic.logout();
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_hardcode_authentication_service__WEBPACK_IMPORTED_MODULE_1__["HardcodeAuthenticationService"])); };
LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-logout"]], decls: 2, vars: 0, template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logout works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




function SignupComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message);
} }
class SignupComponent {
    constructor(http) {
        this.http = http;
        this.message = '';
        this.endpint = 'https://qemis19zxl.execute-api.ap-south-1.amazonaws.com/DEV/studentdata';
    }
    ngOnInit() {
    }
    onSubmit(data) {
        const headers = ({ 'Content-Type': 'application/json' });
        this.http.post(this.endpint, data, { headers })
            .subscribe((result) => {
            this.message = JSON.stringify(result);
            var obj = JSON.parse(this.message);
            this.message = obj["message"];
        });
    }
    success() {
        if (this.message != null)
            return true;
        else
            return false;
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 21, vars: 1, consts: [[1, "container"], ["class", "alert-success ", 4, "ngIf"], [3, "ngSubmit"], ["userPost", "ngForm"], [1, "row"], [1, "col"], ["type", "text", "placeholder", " First Name", "ngModel", "", "name", "First Name"], ["type", "text", "placeholder", " Last Name", "ngModel", "", "name", "Last Name"], ["type", "number", "placeholder", "Enter Mobile No", "ngModel", "", "name", "Mobile Number"], ["type", "text", "placeholder", "Enter State", "ngModel", "", "name", "State"], ["type", "text", "placeholder", "Password", "ngModel", "", "name", "Password"], [1, "row1"], [1, "col1", 2, "margin-left", "60%", "margin-top", "50px"], ["type", "submit", 1, "btn", "btn-primary"], [1, "alert-success"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.onSubmit(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]], styles: [".container[_ngcontent-%COMP%]{\r\n margin-top: 60px;\r\n}\r\n\r\n.row[_ngcontent-%COMP%]{\r\n    margin-left: 30%;\r\n    margin-top: 30px;\r\n    \r\n}\r\n\r\n.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 400px;\r\n    height: 60px;\r\n    border-radius: 9px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n     width: 90px; border-radius: 9px;\r\n }\r\n\r\n.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{\r\n     font-size: x-large;\r\n     font-family: 'Courier New', Courier, monospace;\r\n     padding-left: 20px;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7QUFFcEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFDQztLQUNJLFdBQVcsRUFBRSxrQkFBa0I7Q0FDbkM7O0FBQ0E7S0FDSSxrQkFBa0I7S0FDbEIsOENBQThDO0tBQzlDLGtCQUFrQjtDQUN0QiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcblxyXG4ucm93e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBcclxufVxyXG4ucm93IC5jb2wgaW5wdXR7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbn1cclxuIC5idG57XHJcbiAgICAgd2lkdGg6IDkwcHg7IGJvcmRlci1yYWRpdXM6IDlweDtcclxuIH1cclxuIC5yb3cgLmNvbCBpbnB1dDo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gfSJdfQ== */"] });


/***/ }),

/***/ "vQsd":
/*!*******************************************************!*\
  !*** ./src/app/service/route-guardservice.service.ts ***!
  \*******************************************************/
/*! exports provided: RouteGuardserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardserviceService", function() { return RouteGuardserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _hardcode_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hardcode-authentication.service */ "wL1U");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class RouteGuardserviceService {
    constructor(hardcodedAuthenticationService, router) {
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.hardcodedAuthenticationService.isUserLoggedIn())
            return true;
        return false;
    }
}
RouteGuardserviceService.ɵfac = function RouteGuardserviceService_Factory(t) { return new (t || RouteGuardserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_hardcode_authentication_service__WEBPACK_IMPORTED_MODULE_1__["HardcodeAuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RouteGuardserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RouteGuardserviceService, factory: RouteGuardserviceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error/error.component */ "CG0s");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logout/logout.component */ "n1B2");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productlist/productlist.component */ "aPpE");
/* harmony import */ var _service_route_guardservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/route-guardservice.service */ "vQsd");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _forget_forget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forget/forget.component */ "h9Mj");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcome/welcome.component */ "J7Q4");
/* harmony import */ var _subject_subject_page_subject_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./subject/subject-page/subject-page.component */ "Z92i");
/* harmony import */ var _syllabus_syllabus_page_syllabus_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./syllabus/syllabus-page/syllabus-page.component */ "m9lx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














const routes = [{ path: '', component: _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_5__["ProductlistComponent"] },
    { path: 'product', component: _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_5__["ProductlistComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
    { path: 'forget', component: _forget_forget_component__WEBPACK_IMPORTED_MODULE_8__["ForgetComponent"] },
    { path: 'subject', component: _subject_subject_page_subject_page_component__WEBPACK_IMPORTED_MODULE_10__["SubjectPageComponent"] },
    { path: 'syllabus', component: _syllabus_syllabus_page_syllabus_page_component__WEBPACK_IMPORTED_MODULE_11__["SyllabusPageComponent"] },
    { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], canActivate: [_service_route_guardservice_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardserviceService"]] },
    { path: 'welcome/:usernane', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"], canActivate: [_service_route_guardservice_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardserviceService"]] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"], canActivate: [_service_route_guardservice_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardserviceService"]] },
    { path: '**', component: _error_error_component__WEBPACK_IMPORTED_MODULE_1__["ErrorComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_hardcode_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/hardcode-authentication.service */ "wL1U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function LoginComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
const _c0 = function () { return { standalone: true }; };
class LoginComponent {
    constructor(http, router, hardcodedAuthenticationService) {
        this.http = http;
        this.router = router;
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
        this.password = '';
        this.Mobile_number = '';
        this.errorMessage = 'enter valid user id password';
        this.invalidLogin = false;
        this.message = '';
        this.endpint = 'https://qemis19zxl.execute-api.ap-south-1.amazonaws.com/DEV/getdetails';
    }
    ngOnInit() { }
    onSubmit(data) {
        if (this.hardcodedAuthenticationService.authenticate(this.Mobile_number, this.password)) {
            //Redirect to product page4
            this.router.navigate(['product']);
            this.invalidLogin = false;
        }
        else {
            this.invalidLogin = true;
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_hardcode_authentication_service__WEBPACK_IMPORTED_MODULE_3__["HardcodeAuthenticationService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 16, vars: 7, consts: [[1, "container", "col-sm-12"], ["class", "alert ", 4, "ngIf"], [3, "ngSubmit"], ["userPost", "ngForm"], ["type", "number", "placeholder", "Mobile Number", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "password", "placeholder", "Password", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary"], [1, "Forget"], ["routerLink", "/forget"], ["routerLink", "/signup"], [1, "alert"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.onSubmit(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_4_listener($event) { return ctx.Mobile_number = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_5_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Forget password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Creat Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Mobile_number)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n.alert[_ngcontent-%COMP%]{\r\n    z-index: 1000;\r\n}\r\nbody[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    z-index: 500;\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-column: auto;\r\n    min-height: 100vh;\r\n    margin-top: 70px;\r\n    font-size:x-large;\r\n   \r\n    \r\n}\r\nform[_ngcontent-%COMP%]{\r\n   justify-content: center;\r\n   align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n     margin-top: 30px;\r\n     margin-left: 30%;\r\n     font-size: x-large;\r\n     height: 40px;\r\n     width: 120px;\r\n     background-color: rgb(14, 109, 218);\r\n     border-radius: 10px;\r\n    \r\n \r\n }\r\ninput[_ngcontent-%COMP%]:first-child{\r\n    margin-top: 60px; \r\n    width: 50%;\r\n    height: 60px;\r\n    padding-left: 5%;\r\n border-radius: 15px;\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n    \r\n   margin-top: 20px;\r\n    width: 50%;\r\n    height: 60px;\r\n    padding-left: 5%;\r\n border-radius: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0Qiw4Q0FBOEM7QUFDbEQ7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCOzs7QUFHckI7QUFFQTtHQUNHLHVCQUF1QjtHQUN2QixtQkFBbUI7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUdDO0tBQ0ksZ0JBQWdCO0tBQ2hCLGdCQUFnQjtLQUNoQixrQkFBa0I7S0FDbEIsWUFBWTtLQUNaLFlBQVk7S0FDWixtQ0FBbUM7S0FDbkMsbUJBQW1COzs7Q0FHdkI7QUFLQTtJQUNHLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQixtQkFBbUI7QUFDcEI7QUFFQTs7R0FFRyxnQkFBZ0I7SUFDZixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQixtQkFBbUI7QUFDcEIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbn1cclxuLmFsZXJ0e1xyXG4gICAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuYm9keXtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICB6LWluZGV4OiA1MDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdyaWQtY29sdW1uOiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgZm9udC1zaXplOngtbGFyZ2U7XHJcbiAgIFxyXG4gICAgXHJcbn1cclxuXHJcbmZvcm17XHJcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbiBcclxuIC5idG57XHJcbiAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCwgMTA5LCAyMTgpO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBcclxuIFxyXG4gfVxyXG5cclxuXHJcblxyXG4gIFxyXG4gaW5wdXQ6Zmlyc3QtY2hpbGR7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4OyBcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICBcclxuICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuIFxyXG4iXX0= */"] });


/***/ }),

/***/ "wL1U":
/*!************************************************************!*\
  !*** ./src/app/service/hardcode-authentication.service.ts ***!
  \************************************************************/
/*! exports provided: HardcodeAuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardcodeAuthenticationService", function() { return HardcodeAuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HardcodeAuthenticationService {
    constructor(router) {
        this.router = router;
    }
    authenticate(Mobile_number, password) {
        //console.log('before ' + this.isUserLoggedIn());
        /* const headers = ({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'origin' });
          
    
        let body = JSON.stringify(data);
        this.http.post(this.endpint, data, {headers,})
          .subscribe((result) => {
            console.log(result)
            //this.message = JSON.stringify(result)
            //var obj = JSON.parse(this.message)
            
            //this.passworddb = obj["Password"]
            
          })*/
        if (Mobile_number == "8805627461" && password == "dummy") {
            sessionStorage.setItem('authenticaterUser', password);
            this.setCookie('authenticaterUser', password, 30);
            //document.cookie="user="+password; "expires=Thu,15 Jun 2021 12:00:00 UTC"
            //console.log('after ' + this.isUserLoggedIn());
            return true;
        }
        return false;
    }
    isUserLoggedIn() {
        //let user = sessionStorage.getItem('authenticaterUser')
        //let user= document.cookie;
        let user = this.getCookie('authenticaterUser');
        return !(user === null);
    }
    logout() {
        //document.cookie="user=''; expires= Thu, 01 Jan 1970 00:00:00 UTC"
        sessionStorage.removeItem('authenticaterUser');
        this.deleteCookie();
        this.router.navigate(['login']);
    }
    setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    deleteCookie() {
        document.cookie = "authenticaterUser=''; expires=Sun, 20 Aug 2000 12:00:00 UTC";
    }
}
HardcodeAuthenticationService.ɵfac = function HardcodeAuthenticationService_Factory(t) { return new (t || HardcodeAuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HardcodeAuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HardcodeAuthenticationService, factory: HardcodeAuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map