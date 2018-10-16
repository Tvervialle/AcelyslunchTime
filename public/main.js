(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n  <div class=\"container\" >\n    <router-outlet></router-outlet>\n  </div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var config = {
            apiKey: "AIzaSyCTAnI8AiYmSrPhmF4nGUcHb9gXprUfBhk",
            authDomain: "acelyslunchtime.firebaseapp.com",
            databaseURL: "https://acelyslunchtime.firebaseio.com",
            projectId: "acelyslunchtime",
            storageBucket: "acelyslunchtime.appspot.com",
            messagingSenderId: "837469563532"
        };
        firebase__WEBPACK_IMPORTED_MODULE_1__["initializeApp"](config);
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
/* harmony import */ var _book_list_single_book_single_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-list/single-book/single-book.component */ "./src/app/book-list/single-book/single-book.component.ts");
/* harmony import */ var _book_list_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book-list/book-form/book-form.component */ "./src/app/book-list/book-form/book-form.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _commande_list_commande_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./commande-list/commande-list.component */ "./src/app/commande-list/commande-list.component.ts");
/* harmony import */ var _commande_list_commande_form_commande_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./commande-list/commande-form/commande-form.component */ "./src/app/commande-list/commande-form/commande-form.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: 'auth/signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'auth/signin', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"] },
    { path: 'books', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]], component: _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_5__["BookListComponent"] },
    { path: 'books/new', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]], component: _book_list_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_7__["BookFormComponent"] },
    { path: 'books/view/:id', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]], component: _book_list_single_book_single_book_component__WEBPACK_IMPORTED_MODULE_6__["SingleBookComponent"] },
    { path: 'commandes', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]], component: _commande_list_commande_list_component__WEBPACK_IMPORTED_MODULE_15__["CommandeListComponent"] },
    { path: 'menus', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]], component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_17__["MenuComponent"] },
    { path: 'commandes/new', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]], component: _commande_list_commande_form_commande_form_component__WEBPACK_IMPORTED_MODULE_16__["CommandeFormComponent"] },
    { path: '', redirectTo: 'commandes', pathMatch: 'full' },
    { path: '**', redirectTo: 'commandes' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"],
                _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_5__["BookListComponent"],
                _book_list_single_book_single_book_component__WEBPACK_IMPORTED_MODULE_6__["SingleBookComponent"],
                _book_list_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_7__["BookFormComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _commande_list_commande_list_component__WEBPACK_IMPORTED_MODULE_15__["CommandeListComponent"],
                _commande_list_commande_form_commande_form_component__WEBPACK_IMPORTED_MODULE_16__["CommandeFormComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_17__["MenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
                _services_books_service__WEBPACK_IMPORTED_MODULE_10__["BooksService"],
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <br>  <br>  <br> <br>\n  <div class=\"col-sm-4 col-sm-offset-4\" style=\"background-color: black;color: azure\">\n    <h2>Connectez vous !</h2>\n    <form [formGroup]=\"signinForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input for=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Mot de passe</label>\n          <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\">\n        </div>\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"signinForm.invalid\">Connexion</button>\n    </form>\n    <p class=\"text-danger\">{{ errorMessage }}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = /** @class */ (function () {
    function SigninComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    SigninComponent.prototype.initForm = function () {
        this.signinForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/[0-9a-zA-Z]{6,}/)]]
        });
    };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var email = this.signinForm.get('email').value;
        var password = this.signinForm.get('password').value;
        this.authService.signInUser(email, password).then(function () {
            _this.router.navigate(['/commandes']);
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <br>  <br>  <br> <br>\n  <div class=\"col-sm-4 col-sm-offset-4\"style=\"background-color: black;color: azure\">\n    <h2>Créer un compte</h2>\n    <form [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmit() \">\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input for=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Mot de passe</label>\n          <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\">\n        </div>\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"signUpForm.invalid\">Créer mon compte</button>\n    </form>\n    <p class=\"text-danger\">{{ errorMessage }}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    SignupComponent.prototype.initForm = function () {
        this.signUpForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/[0-9a-zA-Z]{6,}/)]]
        });
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        var email = this.signUpForm.get('email').value;
        var password = this.signUpForm.get('password').value;
        this.authService.createNewUser(email, password).then(function () {
            _this.router.navigate(['/commandes']);
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/book-list/book-form/book-form.component.css":
/*!*************************************************************!*\
  !*** ./src/app/book-list/book-form/book-form.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book-list/book-form/book-form.component.html":
/*!**************************************************************!*\
  !*** ./src/app/book-list/book-form/book-form.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4 col-sm-offset-4\" style=\"background-color: black;color: azure;padding-bottom: 20px\">\n    <h2>Enregistrer un livre</h2>\n    <form [formGroup]=\"bookForm\" (ngSubmit)=\"onSaveBook()\">\n      <div class=\"form-group\">\n        <label for=\"title\">Titre</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\" formControlName=\"title\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"author\">Auteur</label>\n        <input type=\"text\" class=\"form-control\" id=\"author\" formControlName=\"author\">\n      </div>\n      <div class=\"form-group\">\n        <h4>Ajouter une photo</h4>\n        <input type=\"file\" (change)=\"detectFiles($event)\" class=\"form-control\" accept=\"image/*\">\n        <p class=\"text-success\" *ngIf=\"fileUploaded\">Fichier chargé !</p>\n      </div>\n      <button class=\"btn btn-success pull-right\" [disabled]=\"bookForm.invalid || fileIsUploading\" type=\"submit\">Enregistrer</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/book-list/book-form/book-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/book-list/book-form/book-form.component.ts ***!
  \************************************************************/
/*! exports provided: BookFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookFormComponent", function() { return BookFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_Book_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/Book.model */ "./src/app/models/Book.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookFormComponent = /** @class */ (function () {
    function BookFormComponent(formBuilder, booksService, router) {
        this.formBuilder = formBuilder;
        this.booksService = booksService;
        this.router = router;
        this.fileIsUploading = false;
        this.fileUploaded = false;
    }
    BookFormComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    BookFormComponent.prototype.initForm = function () {
        this.bookForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    BookFormComponent.prototype.onSaveBook = function () {
        var title = this.bookForm.get('title').value;
        var author = this.bookForm.get('author').value;
        var newBook = new src_app_models_Book_model__WEBPACK_IMPORTED_MODULE_4__["Book"](title, author);
        console.log('on save' + this.fileUrl);
        if (this.fileUrl && this.fileUrl !== '') {
            console.log('coucou');
            newBook.photo = this.fileUrl;
        }
        this.booksService.createNewBook(newBook);
        this.router.navigate(['/books']);
    };
    BookFormComponent.prototype.onUploadFile = function (file) {
        var _this = this;
        this.fileIsUploading = true;
        this.booksService.uploadFile(file).then(function (url) {
            _this.fileUrl = url;
            _this.fileIsUploading = false;
            _this.fileUploaded = true;
            console.log('on upload', _this.fileUrl);
        });
    };
    BookFormComponent.prototype.detectFiles = function (event) {
        this.onUploadFile(event.target.files[0]);
    };
    BookFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-form',
            template: __webpack_require__(/*! ./book-form.component.html */ "./src/app/book-list/book-form/book-form.component.html"),
            styles: [__webpack_require__(/*! ./book-form.component.css */ "./src/app/book-list/book-form/book-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BookFormComponent);
    return BookFormComponent;
}());



/***/ }),

/***/ "./src/app/book-list/book-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-list/book-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book-list/book-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-list/book-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4 col-sm-offset-4\" style=\"background-color: black;color: azure;padding-bottom: 20px\">\n    <h2>Vos Livres</h2>\n    <div class=\"list-group\">\n      <button class=\"list-group-item\" *ngFor=\"let book of books; let i = index\" (click)=\"onViewBook(i)\">\n        <h3 class=\"list-group-item-heading\">\n          {{book.title}}\n         <!--  <button class=\"btn btn-default pull-right\" (click)=\"onDeleteBook(book)\">\n            <span class=\"glyphicon glyphicon-minus\"></span>\n          </button> -->\n        </h3>\n        <p class=\"list-group-item-text\">{{book.author}}</p>\n      </button>\n\n    </div>\n    <button class=\"btn btn-primary\" (click)=\"onNewBook()\">Nouveau livre</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/book-list/book-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-list/book-list.component.ts ***!
  \**************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookListComponent = /** @class */ (function () {
    function BookListComponent(booksService, router) {
        this.booksService = booksService;
        this.router = router;
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookSubscription = this.booksService.bookSubject.subscribe(function (books) {
            _this.books = books;
        });
        this.booksService.getBooks();
        this.booksService.emitBooks();
    };
    BookListComponent.prototype.onNewBook = function () {
        this.router.navigate(['/books', 'new']);
    };
    BookListComponent.prototype.onDeleteBook = function (book) {
        this.booksService.removeBook(book);
    };
    BookListComponent.prototype.onViewBook = function (id) {
        this.router.navigate(['/books', 'view', id]);
    };
    BookListComponent.prototype.ngOnDestroy = function () {
        this.bookSubscription.unsubscribe();
    };
    BookListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-list',
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/book-list/book-list.component.html"),
            styles: [__webpack_require__(/*! ./book-list.component.css */ "./src/app/book-list/book-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_books_service__WEBPACK_IMPORTED_MODULE_1__["BooksService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/book-list/single-book/single-book.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/book-list/single-book/single-book.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book-list/single-book/single-book.component.html":
/*!******************************************************************!*\
  !*** ./src/app/book-list/single-book/single-book.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4 col-sm-offset-4\" style=\"background-color: black;color: azure;padding: 20px\">\n    <h1>{{book.title}}</h1>\n    <img style=\"max-width:300px;\" *ngIf=\"book.photo\" [src]=\"book.photo\">\n    <h3>{{book.author}}</h3>\n    <button class=\"btn btn-default pull-right\" (click)=\"onBack()\">Retour</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/book-list/single-book/single-book.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/book-list/single-book/single-book.component.ts ***!
  \****************************************************************/
/*! exports provided: SingleBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleBookComponent", function() { return SingleBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_Book_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/Book.model */ "./src/app/models/Book.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/books.service */ "./src/app/services/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingleBookComponent = /** @class */ (function () {
    function SingleBookComponent(route, booksService, router) {
        this.route = route;
        this.booksService = booksService;
        this.router = router;
    }
    SingleBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.book = new src_app_models_Book_model__WEBPACK_IMPORTED_MODULE_1__["Book"]('', '');
        var id = this.route.snapshot.params['id'];
        this.booksService.getSingleBook(+id).then(function (book) {
            _this.book = book;
        });
    };
    SingleBookComponent.prototype.onBack = function () {
        this.router.navigate(['/books']);
    };
    SingleBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-book',
            template: __webpack_require__(/*! ./single-book.component.html */ "./src/app/book-list/single-book/single-book.component.html"),
            styles: [__webpack_require__(/*! ./single-book.component.css */ "./src/app/book-list/single-book/single-book.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SingleBookComponent);
    return SingleBookComponent;
}());



/***/ }),

/***/ "./src/app/commande-list/commande-form/commande-form.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/commande-list/commande-form/commande-form.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/commande-list/commande-form/commande-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/commande-list/commande-form/commande-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4 col-sm-offset-4\" style=\"background-color: black;color: azure;padding-bottom: 20px\">\n    <h2>Enregistrer votre commande</h2>\n    <form [formGroup]=\"commandeForm\" (ngSubmit)=\"onSaveCommande()\">\n      <div class=\"form-group\">\n        <label for=\"name\">Votre nom</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"menu\">Menu</label>\n          <select class=\"form-control\" id=\"menu\" formControlName=\"menu\">\n            <option>Menu Express</option>\n            <option>Menu Ptilou</option>\n            <option>Menu Futé</option>\n            <option>Menu Inimitable </option>\n            <option>Menu Faim de loup</option>\n          </select>\n        </div>\n      <div class=\"form-group\">\n        <label for=\"burger\">Burger</label>\n        <select class=\"form-control\" id=\"burger\" formControlName=\"burger\">\n          <option>le Normand</option>\n          <option>ptilou</option>\n          <option>BBQ</option>\n          <option>Itaoptionan Job</option>\n          <option>Mistral</option>\n          <option>Chamonix</option>\n          <option>Portabello</option>\n          <option>9</option>\n          <option>Andalou</option>\n          <option>Faim de loup</option>\n          <option>Satay</option>\n          <option>22</option>\n          <option>Mediterranéen</option>\n          <option>Samouraï</option>\n          <option>Grain de forme</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"cuisson\">Cuisson</label>\n        <select class=\"form-control\" id=\"cuisson\" formControlName=\"cuisson\">\n          <option>Bleu</option>\n          <option>Saignant</option>\n          <option>A point</option>\n          <option>Bien cuit</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"accompagnement\">Accompagnement</label>\n        <select class=\"form-control\" id=\"accompagnement\" formControlName=\"accompagnement\">\n          <option>Truffoles</option>\n          <option>Frites Maison</option>\n          <option>Petite Salade</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"boisson\">Boisson</label>\n        <select class=\"form-control\" id=\"boisson\" formControlName=\"boisson\">\n          <option>Arizona Pêche</option>\n          <option>Arizona Thé Vert Miel</option>\n          <option>Arizona Multi-fruits</option>\n          <option>Arizona Pastèque</option>\n          <option>Arizona Mangue</option>\n          <option>Arizona Citron</option>\n          <option>Arizona Grenade</option>\n          <option>Arizona Fraise</option>\n          <option>Arizona Citron</option>\n          <option>Eau</option>\n          <option>Coca</option>\n          <option>Coca Zéro</option>\n          <option>Coca Cherry</option>\n          <option>Fanta Citron</option>\n          <option>Orangina</option>\n          <option>Schweppes Agrumes</option>\n          <option>Sprite </option>\n          <option>Oasis Tropical</option>\n          <option>Oasis Pomme </option>\n          <option>Oasis Cassis</option>\n          <option>Oasis Framboise</option>\n          <option>Nestea</option>\n          <option>Perrier</option>\n          <option>Cubanisto</option>\n          <option>Desperado</option>\n          <option>Leffe</option>\n          <option>Bière Blonde Artisanale Occitane</option>\n          <option>Bière Ambrée Artisanale Occitane</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"supplement\">Supplément</label>\n        <select multiple class=\"form-control \" id=\"supplement\" formControlName=\"supplement\">\n          <option>Poivron</option>\n          <option>piquillos</option>\n          <option>Bacon</option>\n          <option>Cheddar</option>\n          <option>Brie</option>\n          <option>Chèvre</option>\n          <option>Gruyère</option>\n          <option>Galette de pomme de terre</option>\n          <option>Portion de Frites Maison</option>\n          <option>Portion de Chips Maison</option>\n          <option>Petite Salade</option>\n          <option>Steak Haché de Bœuf Black Angus 150gr</option>\n        </select>\n      </div>\n      <button class=\"btn btn-success pull-right\" [disabled]=\"commandeForm.invalid\" type=\"submit\">Enregistrer</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/commande-list/commande-form/commande-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/commande-list/commande-form/commande-form.component.ts ***!
  \************************************************************************/
/*! exports provided: CommandeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandeFormComponent", function() { return CommandeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_Commande_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/Commande.model */ "./src/app/models/Commande.model.ts");
/* harmony import */ var src_app_services_commandes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/commandes.service */ "./src/app/services/commandes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommandeFormComponent = /** @class */ (function () {
    function CommandeFormComponent(formBuilder, commandesService, router) {
        this.formBuilder = formBuilder;
        this.commandesService = commandesService;
        this.router = router;
        this.fileIsUploading = false;
        this.fileUploaded = false;
    }
    CommandeFormComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    CommandeFormComponent.prototype.initForm = function () {
        this.commandeForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            menu: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            burger: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cuisson: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            accompagnement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            boisson: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            supplement: ['rien', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    CommandeFormComponent.prototype.onSaveCommande = function () {
        var name = this.commandeForm.get('name').value;
        var menu = this.commandeForm.get('menu').value;
        var burger = this.commandeForm.get('burger').value;
        var cuisson = this.commandeForm.get('cuisson').value;
        var accompagnement = this.commandeForm.get('accompagnement').value;
        var boisson = this.commandeForm.get('boisson').value;
        var supplement = this.commandeForm.get('supplement').value;
        var newCommande = new src_app_models_Commande_model__WEBPACK_IMPORTED_MODULE_3__["Commande"](name, menu, burger, cuisson, accompagnement, boisson, supplement);
        this.commandesService.createNewCommnandes(newCommande);
        this.router.navigate(['/commandes']);
    };
    CommandeFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-commande-form',
            template: __webpack_require__(/*! ./commande-form.component.html */ "./src/app/commande-list/commande-form/commande-form.component.html"),
            styles: [__webpack_require__(/*! ./commande-form.component.css */ "./src/app/commande-list/commande-form/commande-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_commandes_service__WEBPACK_IMPORTED_MODULE_4__["CommandesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CommandeFormComponent);
    return CommandeFormComponent;
}());



/***/ }),

/***/ "./src/app/commande-list/commande-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/commande-list/commande-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/commande-list/commande-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/commande-list/commande-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\" style=\"background-color: black;color: azure;padding-bottom: 20px\">\n    <h2>les commandes</h2>\n    <div class=\"list-group\">\n      <button class=\"list-group-item\" *ngFor=\"let commande of commandes; let i = index\">\n        <h4>\n          <b>Name</b> : {{commande.Name}}\n          <b>  Menu</b> : {{commande.menu}}\n          <b>  Burger</b> : {{commande.Burger}}\n          <b>  Cuisson</b> : {{commande.cuisson}}\n          <b>  Accompagnement</b> : {{commande.accompagnement}}\n          <b>  Boisson</b> : {{commande.boisson}}\n          <b>  Supplement</b> : {{commande.supplement}}\n  <button class=\"btn btn-default pull-right\" (click)=\"onDeletecommande(commande)\">\n            <span class=\"glyphicon glyphicon-minus\"></span>\n          </button> \n        </h4>\n      </button>\n\n    </div>\n    <button class=\"btn btn-primary\" (click)=\"onNewcommande()\">Nouvelle commande</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/commande-list/commande-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/commande-list/commande-list.component.ts ***!
  \**********************************************************/
/*! exports provided: CommandeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandeListComponent", function() { return CommandeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_commandes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/commandes.service */ "./src/app/services/commandes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommandeListComponent = /** @class */ (function () {
    function CommandeListComponent(commandesService, router) {
        this.commandesService = commandesService;
        this.router = router;
    }
    CommandeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commandeSubscription = this.commandesService.commandeSubject.subscribe(function (commandes) {
            _this.commandes = commandes;
        });
        this.commandesService.getCommandes();
        this.commandesService.emitCommandes();
    };
    CommandeListComponent.prototype.onNewcommande = function () {
        this.router.navigate(['/commandes', 'new']);
    };
    CommandeListComponent.prototype.onDeletecommande = function (commande) {
        this.commandesService.removeCommande(commande);
    };
    CommandeListComponent.prototype.ngOnDestroy = function () {
        this.commandeSubscription.unsubscribe();
    };
    CommandeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-commande-list',
            template: __webpack_require__(/*! ./commande-list.component.html */ "./src/app/commande-list/commande-list.component.html"),
            styles: [__webpack_require__(/*! ./commande-list.component.css */ "./src/app/commande-list/commande-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_commandes_service__WEBPACK_IMPORTED_MODULE_2__["CommandesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CommandeListComponent);
    return CommandeListComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" style=\"background-color: black;color: azure;font-size: 20px\">\n\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav\">\n      <li>\n        <a style=\"font-size: 25px;color:white\">Acelys Burger   <i style=\"font-size: 20px\">\t&#9400;Tom</i></a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\" >\n      <li routerLinkActive=\"active\" *ngIf=\"isAuth\">\n        <a style=\"color:chocolate\"[routerLink]=\"['/menus']\">Menus</a>\n      </li>\n      <li routerLinkActive=\"active\" *ngIf=\"isAuth\">\n        <a style=\"color:chocolate\"[routerLink]=\"['/commandes']\">Commandes</a>\n      </li>\n      \n      <li routerLinkActive=\"active\" *ngIf=\"!isAuth\">\n        <a style=\"color:chocolate\"[routerLink]=\"['/auth/signin']\">Connexion</a>\n      </li>\n      <li routerLinkActive=\"active\" *ngIf=\"!isAuth\">\n        <a style=\"color:chocolate\"[routerLink]=\"['/auth/signup']\">Créer un compte</a>\n      </li>\n      <li>\n        <a (click)=\"onSignOut()\" *ngIf=\"isAuth\" style=\"cursor: pointer;color: red\">Déconnexion</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.isAuth = true;
            }
            else {
                _this.isAuth = false;
            }
        });
    };
    HeaderComponent.prototype.onSignOut = function () {
        this.authService.signOutUser();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\nh4{\n  color: chocolate;\n  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\nh3{\n  color:brown;\n  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n</style>\n<div class=\"row\" style=\"padding-top: 20px\">\n  <div class=\"col-sm-3\" style=\"background-color: black;color: azure;border: antiquewhite solid 1px;height: 600px\">\n\n    <h4>Menu Express 10,50 €</h4>\n    <ul>\n      <li>le Normand</li>\n      <li>Burger BBQ </li>\n      <li>22</li>\n      <li>SATAY</li>\n      <li>GRAIN DE FORME</li>\n    </ul>\n\n\n    <h4>Menu Ptilou 7,50 €</h4>\n    <ul>\n      <li>Burger Faim de Loup</li>\n    </ul>\n\n    <h4>Menu Futé 8,50 €</h4>\n    <ul>\n      <li>Burger Ptilou</li>\n    </ul>\n    <h4>Menu Inimitable 13 €</h4>\n    <ul>\n      <li>Andalou</li>\n      <li>Italian Job</li>\n      <li>9</li>\n      <li>Chamonix</li>\n      <li>Portabello</li>\n      <li>Mistral</li>\n      <li>Mediterranéen</li>\n      <li>Samourai</li>\n    </ul>\n\n    <h4>Menu Faim de Loup 15,50 €</h4>\n    <ul>\n      <li>Burger Faim de Loup</li>\n    </ul>\n    <br>\n    <h5>Pour chaque menu un accompagnement et une boisson (hors Arizona et Alcool)</h5>\n  </div>\n  <div class=\"col-sm-5\" style=\"background-color: black;color: azure;max-height: 600px; overflow-y: scroll;border: antiquewhite solid 1px\">\n      <h3>Burger Viande 150gr</h3>\n      <ul>\n        <h4>Le Normand 8,50 €</h4>\n        <li>Pain Burger, moutarde, demi camembert rôti, oignons confits, salade, tomate</li>\n        <h4>PTILOU 6,50 €</h4>\n        <li>Pain Burger Artisanal, Ketchup, Mayonnaise, Steak Haché de Bœuf Black Angus, Salade, Cheddar</li>\n        <h4>Burger BBQ 8,50 €</h4>\n        <li>Pain Burger Artisanal, Sauce BBQ, Salade, Tomate, Oignons Confits, Steak Haché de Bœuf Black Angus, Double\n          Bacon, Cheddar</li>\n        <h4>ITALIAN JOB 9,50 €</h4>\n        <li>Pain Burger Artisanal, Pesto, Steak Haché de Bœuf Black Angus, Mozzarella, Roquette, Tomates Séchées,\n          Jambon Cru, Vinaigre Balsamique</li>\n        <h4>MISTRAL 9,50 €</h4>\n        <li>Pain Burger Artisanal, Sauce Provençale, Steak Haché de Boeuf Black Angus, Roquette, Poivrons Piquillos,\n          Oignons Confits, Chèvre Frais</li>\n        <h4>CHAMONIX 9,50 €</h4>\n        <li>Pain Burger Artisanal, Sauce au Bleu, Steak Haché de Bœuf Black Angus, Chèvre Frais, Gruyère, Oignons\n          Confits, Salade, Tomate</li>\n        <h4>PORTABELLO 9,50 €</h4>\n        <li>Pain Burger Artisanal, Sauce Champignons, Steak Haché de Boeuf Black Angus, Champignons, Bacon, Brie\n          Fondant, Salade, Tomat</li>\n        <h4>9 9,50 €</h4>\n        <li>Pain Burger Artisanal, Sauce Provençale, Steak Haché de Boeuf Black Angus, Salade, Poivron Piquillos,\n          Gruyère, Jambon Serrano, Oeuf au P0lat</li>\n        <h4>ANDALOU 9,50 €</h4>\n        <li>Pain Burger Artisanal, Sauce Andalouse, Steak Haché de Bœuf Black Angus, Chorizo Poivron Piquillos, Fromage\n          de Brebis, Salade</li>\n        <h4>FAIM DE LOUP 12€</h4>\n        <li>Pain Burger Artisanal, sauce BBQ, 2 steaks hachés de Bœuf Black Angus, Salade, oignons Confits, Cheddar,\n          Gruyère, Galette de Pomme de Terre</li>\n      </ul>\n      <h3>Burger Poulet</h3>\n      <ul>\n        <h4>Satay 8,50 €</h4>\n        <li>Pain Burger Artisanal, Sauce Satay (Sauce Thaïlandaise), Aiguilettes de Poulet Croustillant, Bacon, Oignons\n          Confits, Cheddar, Salade, Tomate</li>\n        <h4>22 6,50 €</h4>\n        <li>Pain Burger Artisanal, Sauce Poivre, Aiguilettes de Poulet Croustillant, Galette de Pomme de Terre, Bacon,\n          Cheddar, Salade, Tomate</li>\n      </ul>\n      <h3>Burger Agneau</h3>\n      <ul>\n        <h4>MEDITERRANEEN 9,50 €</h4>\n        <li>Pain Burger Artisanal, Sauce Orientale, Steak Haché d'Agneau, Galette de Pomme de Terre, Poivron Piquillos,\n          Saladee</li>\n      </ul>\n      <h3>Burger Saumon</h3>\n      <ul>\n        <h4>SAMOURAÏ 9,50 €</h4>\n        <li>Pain Burger Artisanal, Sauce Japonaise, Pavé de Saumon Snacké, Salade, Tomate</li>\n      </ul>\n      <h3>Burger Végétarien</h3>\n      <ul>\n        <h4>GRAIN DE FORME 8,50 €</h4>\n        <li>Pain Burger Artisanal, Sauce Andalouse, Steak de Légumes, Oignons Frits, Cheddar, Salade, Poivron Piquillos</li>\n      </ul>\n    </div>\n  <div class=\"col-sm-4\" style=\"background-color: black;color: azure;padding-bottom: 20px;max-height: 600px; overflow-y: scroll;border: antiquewhite solid 1px\">\n    <h4>Accompagnement 2,50 €</h4>\n    <ul>\n      <li>Truffoles</li>\n      <li>Frites Maison</li>\n      <li>Petite Salade</li>\n    </ul>\n    <h4>Boissons</h4>\n    <ul>\n      <h4>Arizona 0,5 l 3</h4>\n      <li>Pêche, Thé Vert Miel, Multi-fruits, Pastèque, Mangue, Citron, Grenade, Fraise Citron</li>\n      <li>Eau 0,5l 1,50 €</li>\n      <h4>Soft 33 cl 2€</h4>\n      <li>Coca, Coca Zéro, Coca Cherry, Fanta Citron, Orangina, Schweppes Agrumes, Sprite, Oasis Tropical, Oasis\n        Pomme Cassis Framboise, Nestea, Perrier</li>\n      <h4>Bière</h4>\n      <li>Cubanisto 3€50</li>\n      <li>Desperado 3€50</li>\n      <li>Leffe 3€50</li>\n      <li>Bière Blonde Artisanale Occitane : Croix du Sud 3€</li>\n      <li>Bière Ambrée Artisanale Occitane : Croix du Sud 3€</li>\n    </ul>\n    <h4>Les suppléments 2,50 €</h4>\n    <ul>\n      <li>Poivron piquillos/ Bacon/ Cheddar/ Brie/ Chèvre/ Gruyère +1,50€</li>\n      <li>Galette de pomme de terre +2€</li>\n      <li>Portion de Frites Maison +2,50€</li>\n      <li>Portion de Chips Maison +2,50€</li>\n      <li>Petite Salade +2,50€</li>\n      <li>Steak Haché de Bœuf Black Angus 150gr +3,50€</li>\n    </ul>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/models/Book.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/Book.model.ts ***!
  \**************************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/models/Commande.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/Commande.model.ts ***!
  \******************************************/
/*! exports provided: Commande */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Commande", function() { return Commande; });
var Commande = /** @class */ (function () {
    function Commande(Name, menu, Burger, cuisson, accompagnement, boisson, supplement) {
        this.Name = Name;
        this.menu = menu;
        this.Burger = Burger;
        this.cuisson = cuisson;
        this.accompagnement = accompagnement;
        this.boisson = boisson;
        this.supplement = supplement;
    }
    return Commande;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    resolve(true);
                }
                else {
                    _this.router.navigate(['/auth', 'signin']);
                    resolve(false);
                }
            });
        });
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.createNewUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().createUserWithEmailAndPassword(email, password).then(function () {
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.signInUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithEmailAndPassword(email, password).then(function () {
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.signOutUser = function () {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signOut();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/books.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/books.service.ts ***!
  \*******************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksService = /** @class */ (function () {
    function BooksService() {
        this.books = [];
        this.bookSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getBooks();
    }
    BooksService.prototype.emitBooks = function () {
        this.bookSubject.next(this.books);
    };
    BooksService.prototype.saveBooks = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/books').set(this.books);
    };
    BooksService.prototype.getBooks = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/books')
            .on('value', function (data) {
            _this.books = data.val() ? data.val() : [];
            _this.emitBooks();
        });
    };
    BooksService.prototype.getSingleBook = function (id) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/books/' + id).once('value').then(function (data) {
                resolve(data.val());
            }, function (error) {
                reject(error);
            });
        });
    };
    BooksService.prototype.createNewBook = function (newBook) {
        this.books.push(newBook);
        this.saveBooks();
        this.emitBooks();
    };
    BooksService.prototype.removeBook = function (book) {
        console.log(book);
        if (book.photo) {
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().refFromURL(book.photo);
            storageRef.delete().then(function () {
                console.log('photo deleted');
            }).catch(function (error) {
                console.log('fichier non trouvé :' + error);
            });
        }
        var bookIndexToRemove = this.books.findIndex(function (bookEl) {
            if (bookEl === book) {
                return true;
            }
        });
        this.books.splice(bookIndexToRemove, 1);
        this.saveBooks();
        this.emitBooks();
    };
    BooksService.prototype.uploadFile = function (file) {
        return new Promise(function (resolve, reject) {
            var almostUniqueFileName = Date.now().toString();
            var upload = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref()
                .child('images/' + almostUniqueFileName + file.name)
                .put(file);
            upload.on(firebase__WEBPACK_IMPORTED_MODULE_2__["storage"].TaskEvent.STATE_CHANGED, function () {
                console.log('chargement...', file);
            }, function (error) {
                console.log('erreur de chargement' + error);
                reject();
            }, function () {
                resolve(upload.snapshot.ref.getDownloadURL());
                console.log('resolve', upload.snapshot.downloadURL, ' file :', file);
            });
        });
    };
    BooksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BooksService);
    return BooksService;
}());



/***/ }),

/***/ "./src/app/services/commandes.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/commandes.service.ts ***!
  \***********************************************/
/*! exports provided: CommandesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandesService", function() { return CommandesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommandesService = /** @class */ (function () {
    function CommandesService() {
        this.commandes = [];
        this.commandeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    CommandesService.prototype.emitCommandes = function () {
        this.commandeSubject.next(this.commandes);
    };
    CommandesService.prototype.saveCommandes = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/commandes').set(this.commandes);
    };
    CommandesService.prototype.getCommandes = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/commandes')
            .on('value', function (data) {
            _this.commandes = data.val() ? data.val() : [];
            _this.emitCommandes();
        });
    };
    CommandesService.prototype.createNewCommnandes = function (newCommande) {
        this.commandes.push(newCommande);
        this.saveCommandes();
        this.emitCommandes();
    };
    CommandesService.prototype.removeCommande = function (commande) {
        var commandeIndexToRemove = this.commandes.findIndex(function (bookEl) {
            if (bookEl === commande) {
                return true;
            }
        });
        this.commandes.splice(commandeIndexToRemove, 1);
        this.saveCommandes();
        this.emitCommandes();
    };
    CommandesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CommandesService);
    return CommandesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Workspaces\AcelysLunchTime\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map