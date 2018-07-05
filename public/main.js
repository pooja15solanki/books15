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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-book/add-book.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-book/add-book.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-book/add-book.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-book/add-book.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<form #frm=\"ngForm\" novalidate [formGroup]=\"form\" style=\"margin: 5% 30% 10% 30%\" (ngSubmit)=\"addBook(form)\">\n \n    \n     <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\"  id=\"name\" formControlName=\"name\" placeholder=\"Enter name\" required=\"true\">\n      <div *ngIf=\"form.get('name').touched && form.get('name').invalid \">\n            <p style=\"color: red\">*Enter Valid Name</p>\n            </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"author\">Author Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"authorName\" formControlName=\"authorName\"  placeholder=\"Enter author name\" required=\"true\">\n      <div *ngIf=\"form.get('authorName').touched && form.get('authorName').invalid \">\n            <p style=\"color: red\">*Enter Valid Author Name</p>\n            </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"price\">Price</label>\n      <input type=\"number\" class=\"form-control\" id=\"price\"  formControlName=\"price\" placeholder=\"Enter Price\" required=\"true\">\n      <div *ngIf=\"form.get('price').touched && form.get('price').invalid \">\n            <p style=\"color: red\">*Enter Valid Price</p>\n            </div>\n    </div>\n\n     <div class=\"form-group\">\n    <div class=\"input-group mb-3\">\n      <div class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input\" id=\"photo\"  formControlName=\"photo\" ng2FileSelect [uploader]=\"uploader\" placeholder=\"Enter image\" required=\"true\">\n        <label class=\"custom-file-label\" for=\"photo\">Choose file</label>\n      </div>\n      <div *ngIf=\"form.get('photo').touched && form.get('photo').invalid \">\n            <p style=\"color: red\">*Select an image</p>\n            </div>\n    </div>\n  </div>\n\n    <div class=\"form-group\">\n      <label for=\"condition\">Select Condition</label>\n      <select class=\"form-control\" name=\"condition\"  id=\"condition\" required=\"true\">\n        <option value=\"New\">New</option>\n        <option>Almost New</option>\n        <option>Slight Damage</option>\n        <option>Worn</option>\n      </select>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"frm.invalid\" >Submit</button>\n \n</form>\n<br>\n    <div class=\"alert alert-dismissible alert-danger\" id=\"error\" *ngIf='errorStatus' style=\"margin-top: 10%;\">\n  <button  type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n  <strong>Ooops!</strong> Try submitting again.\n</div>\n<div class=\"alert alert-dismissible alert-success\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n  <strong>Well done!</strong> You successfully read <a href=\"#\" class=\"alert-link\">this important alert message</a>.\n</div>\n{{ frm.value | json}}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/add-book/add-book.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-book/add-book.component.ts ***!
  \************************************************/
/*! exports provided: AddBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var URL = 'http://localhost:2000/api/books/upload';
var AddBookComponent = /** @class */ (function () {
    function AddBookComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.path = '';
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: URL, itemAlias: 'photo' });
    }
    AddBookComponent.prototype.addBook = function (form) {
        this.uploader.uploadAll();
        this.book = form.value;
    };
    AddBookComponent.prototype.add = function () {
        var _this = this;
        this.book.image = "uploads\photo-1530799259343..JPG";
        var book = {
            name: this.book.name,
            authorName: this.book.authorName,
            price: this.book.price,
            image: this.path,
            condition: this.book.condition,
            userId: JSON.parse(localStorage.getItem('user')).uId
        };
        console.log(book.userId);
        this.dataService.addBook(book).subscribe(function (book) {
            if (book != null) {
                _this.router.navigate(['/profile']);
            }
            else {
                _this.errorStatus = true;
                _this.router.navigate(['addListing']);
            }
        });
    };
    AddBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]+( [a-zA-Z]+)*')]),
            authorName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]+( [a-zA-Z]+)*')]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, header) {
            console.log('in Uploader');
            _this.path = response;
            console.log(_this.path);
            //this.path=this.path.substring(7,this.path.length);
            _this.add();
        };
    };
    AddBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-book',
            template: __webpack_require__(/*! ./add-book.component.html */ "./src/app/add-book/add-book.component.html"),
            styles: [__webpack_require__(/*! ./add-book.component.css */ "./src/app/add-book/add-book.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddBookComponent);
    return AddBookComponent;
}());



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

module.exports = "<router-outlet></router-outlet>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        // loginStatus=localStorage.getItem('loggedIn') || false; 
        // userName='';
        // refreshApp(){
        // 	this.userName=JSON.parse(localStorage.getItem('user')).name || '';
        // 	this.loginStatus=localStorage.getItem('loggedIn') || false; 
        // 	this.router.navigate(['']);	
        // }
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _log_out_log_out_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./log-out/log-out.component */ "./src/app/log-out/log-out.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-book/add-book.component */ "./src/app/add-book/add-book.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _sent_message_sent_message_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sent-message/sent-message.component */ "./src/app/sent-message/sent-message.component.ts");
/* harmony import */ var _wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./wish-list/wish-list.component */ "./src/app/wish-list/wish-list.component.ts");
/* harmony import */ var _remove_item_remove_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./remove-item/remove-item.component */ "./src/app/remove-item/remove-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var ROUTES = [
    { path: '', component: _body_body_component__WEBPACK_IMPORTED_MODULE_12__["BodyComponent"] },
    { path: 'signUp', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"] },
    { path: 'signIn', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"] },
    { path: 'logOut', component: _log_out_log_out_component__WEBPACK_IMPORTED_MODULE_10__["LogOutComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"] },
    { path: 'addListing', component: _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_14__["AddBookComponent"] },
    { path: 'message', component: _message_message_component__WEBPACK_IMPORTED_MODULE_15__["MessageComponent"] },
    { path: 'listings/:id', component: _book_book_component__WEBPACK_IMPORTED_MODULE_16__["BookComponent"] },
    { path: 'message/:id/:uId', component: _sent_message_sent_message_component__WEBPACK_IMPORTED_MODULE_17__["SentMessageComponent"] },
    { path: 'wishList', component: _wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_18__["WishListComponent"] },
    { path: 'remove/:id', component: _remove_item_remove_item_component__WEBPACK_IMPORTED_MODULE_19__["RemoveItemComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"],
                _log_out_log_out_component__WEBPACK_IMPORTED_MODULE_10__["LogOutComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_11__["NavComponent"],
                _body_body_component__WEBPACK_IMPORTED_MODULE_12__["BodyComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_14__["AddBookComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileSelectDirective"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_15__["MessageComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_16__["BookComponent"],
                _sent_message_sent_message_component__WEBPACK_IMPORTED_MODULE_17__["SentMessageComponent"],
                _wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_18__["WishListComponent"],
                _remove_item_remove_item_component__WEBPACK_IMPORTED_MODULE_19__["RemoveItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(ROUTES),
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/body/body.component.css":
/*!*****************************************!*\
  !*** ./src/app/body/body.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/body.component.html":
/*!******************************************!*\
  !*** ./src/app/body/body.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<!-- <button (click)='filter()'> Filter</button> -->\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\">Filter Books</a>\n  <button type=\"button\" class=\"btn btn-primary\" (click)='filterLowToHigh()'>Low-to-High</button>\n   <button type=\"button\" class=\"btn btn-primary\" style=\"margin-left: 20px\" (click)='filterHighToLow()'>High-to-Low</button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor03\" style=\"margin-left: 20px\">\n    <ul class=\"navbar-nav mr-auto\">\n    <form class=\"form-inline my-2 my-lg-0\" #frm=\"ngForm\" (ngSubmit)=\"filterByCondition(frm)\">\n      <select class=\"form-control\" ngModel name=\"condition\" ngModel id=\"condition\" required>\n      \t<option value=\"\">Select Condition</option>\n        <option>New</option>\n        <option>Almost New</option>\n        <option>Slight Damage</option>\n        <option>Worn</option>\n      </select>\n      <button class=\"btn btn-secondary my-2 my-sm-0\" id=\"selectCondition\" [disabled]=\"frm.invalid\" type=\"submit\" style=\"margin-left: -1px\">Filter By Condition </button>\n    </form>\n    <div style=\"margin-left: 350px\">\n\t    <form class=\"form-inline my-2 my-lg-0\"  #frm2=\"ngForm\" (ngSubmit)=\"SearchByName(frm2)\">\n\t      <input class=\"form-control mr-sm-2\"  type=\"text\" ngModel required  name=\"searchBy\" placeholder=\"Search by Book Name, Author Name\">\n\t      <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\" [disabled]=\"frm2.invalid\">Search </button>\n\t  \n    \t</form>\n    </div>\n     </ul>\n  </div>\n</nav>\n\n<div class=\"container-fluid\" style=\"margin-top: 2%\">\n\t\n\t\t<div class=\"row\">\n\n\t\t<div class=\"col-lg-3 col-md-3 col-sm-6\" *ngFor=\"let book of booksListing; let i = index\">\n\t\t\t<div class=\"card mb-3\">\n\t\t\t\t<h3 class=\"card-header\">{{ book.name }}</h3>\n\t\t\t\t<a routerLink='/listings/{{book.bId}}' ><img  style=\"margin:5px;height: 150px; width: 96%; display: block;\" src=\"{{ book.image }}\">\n\t\t\t\t<ul class=\"list-group list-group-flush\">\n\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t    <tr>\n\t\t\t\t\t\t    \t<td>Author:- </td>\n\t\t\t\t\t\t    \t<td>{{ book.authorName }}</td>\n\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t    <tr>\n\t\t\t\t\t\t    \t<td>Condition:- </td>\n\t\t\t\t\t\t    \t<td>{{ book.condition }} </td>\n\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>Price:- </td>\n\t\t\t\t\t\t    \t<td>{{ book.price }} </td>\n\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<button type=\"button\" (click)=\"addToCart($event)\" id=\"{{book.bId}}\" class=\"btn btn-primary\">Buy Now</button>\n\t\t\t\t</div>\n\t\t\t\t\t\t  \n\t\t\t\t<div class=\"card-footer text-muted\">\n\t\t\t\t\tPosted On:- <span style=\"float: right;\">{{ book.createdAt.substring(0,10) }}</span> \n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"col-lg-12\" style=\"align-content: center;\">\t\n\t\t\t<div class=\"alert alert-dismissible alert-light\" *ngIf=\"numberOfBooks == 0\">\n\t\t\t\t  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n\t\t\t\t  <strong>Currently!</strong> There is no books in the database <a routerLink=\"/signIn\" class=\"alert-link\"> Sign In </a> to add books.\n\t\t\t</div>\n\t\t</div>\n\n\t\t</div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/body/body.component.ts":
/*!****************************************!*\
  !*** ./src/app/body/body.component.ts ***!
  \****************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
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



var BodyComponent = /** @class */ (function () {
    function BodyComponent(router, dataservice) {
        this.router = router;
        this.dataservice = dataservice;
        this.year = new Date().getFullYear().toString();
        this.month = (new Date().getMonth() < 10 ? '0' : '') + new Date().getMonth();
        this.day = (new Date().getDate() < 10 ? '0' : '') + new Date().getDate();
        this.date = this.year + this.month + this.day;
    }
    BodyComponent.prototype.filterLowToHigh = function () {
        var _this = this;
        this.dataservice.getAllFilterByLowToHigh().subscribe(function (books) {
            _this.booksListing = books;
            _this.numberOfBooks = _this.booksListing.length;
            console.log(books);
        });
    };
    BodyComponent.prototype.filterHighToLow = function () {
        var _this = this;
        this.dataservice.getAllFilterByHighToLow().subscribe(function (books) {
            _this.booksListing = books;
            _this.numberOfBooks = _this.booksListing.length;
            console.log(books);
        });
    };
    BodyComponent.prototype.filterByCondition = function (frm) {
        var _this = this;
        this.dataservice.getAllFilterByCondition(frm.value).subscribe(function (books) {
            _this.booksListing = books;
            _this.numberOfBooks = _this.booksListing.length;
        });
    };
    BodyComponent.prototype.SearchByName = function (frm) {
        var _this = this;
        this.dataservice.getAllSearchByName(frm.value).subscribe(function (books) {
            _this.booksListing = books;
            _this.numberOfBooks = _this.booksListing.length;
        });
    };
    BodyComponent.prototype.addToCart = function (event) {
        var _this = this;
        var bookId = event.target.attributes.id.value;
        if (!localStorage.getItem('loggedIn')) {
            this.wishList = JSON.parse(localStorage.getItem("wishList")) || [];
            this.wishList.push(this.booksListing[bookId - 1]);
            localStorage.setItem('wishList', JSON.stringify(this.wishList));
            this.router.navigate(['/wishList']);
        }
        else {
            var wishItem = {
                bookBId: bookId,
                userUId: JSON.parse(localStorage.getItem('user')).uId
            };
            console.log(wishItem);
            this.dataservice.addWishList(wishItem).subscribe(function (cart) {
                _this.router.navigate(['/wishList']);
            });
        }
    };
    BodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataservice.getAllBooks().subscribe(function (books) {
            _this.booksListing = books;
            _this.numberOfBooks = _this.booksListing.length;
        });
    };
    BodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! ./body.component.html */ "./src/app/body/body.component.html"),
            styles: [__webpack_require__(/*! ./body.component.css */ "./src/app/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book/book.component.html":
/*!******************************************!*\
  !*** ./src/app/book/book.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<div class=\"container-fluid\" style=\"margin-top: 2%\">\n\t\n\t\t<div class=\"row\">\n\n\t\t<div class=\"col-lg-3 col-md-3 col-sm-6\" *ngIf=\"book\">\n\t\t\t<div class=\"card mb-3\">\n\t\t\t\t<h3 class=\"card-header\">{{ book.name }}</h3>\n\t\t\t\t<img  style=\"margin:5px;height: 150px; width: 96%; display: block;\" src=\"{{ book.image }}\">\n\t\t\t\t<ul class=\"list-group list-group-flush\">\n\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t    <tr>\n\t\t\t\t\t\t    \t<td>Author:- </td>\n\t\t\t\t\t\t    \t<td>{{ book.authorName }}</td>\n\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t    <tr>\n\t\t\t\t\t\t    \t<td>Condition:- </td>\n\t\t\t\t\t\t    \t<td>{{ book.condition }} </td>\n\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>Price:- </td>\n\t\t\t\t\t\t    \t<td>{{ book.price }} </td>\n\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<button type=\"button\" (click)=\"addToCart($event)\" id=\"{{book.bId}}\" class=\"btn btn-primary\">Buy Now</button>\n\t\t\t\t\t<a routerLink='/message/{{book.bId}}/{{book.userUId}}' class=\"card-link\">Send Message To Seller</a>\n\t\t\t\t</div>\n\t\t\t\t\t\t  \n\t\t\t\t<div class=\"card-footer text-muted\">\n\t\t\t\t\tPosted On:- <span style=\"float: right;\">{{ book.createdAt.substring(0,10) }}</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"col-lg-12\" style=\"align-content: center;\">\t\n\t\t\t<div class=\"alert alert-dismissible alert-light\" *ngIf=\"numberOfBooks == 0\">\n\t\t\t\t  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n\t\t\t\t  <strong>Currently!</strong> There is no books in the database <a routerLink=\"/signIn\" class=\"alert-link\"> Sign In </a> to add books.\n\t\t\t</div>\n\t\t</div>\n\n\t\t</div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
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



var BookComponent = /** @class */ (function () {
    function BookComponent(dataservice, active, router) {
        this.dataservice = dataservice;
        this.active = active;
        this.router = router;
        this.bookId = { Id: "" };
    }
    BookComponent.prototype.addToCart = function (event) {
        var _this = this;
        var bookId = event.target.attributes.id.value;
        if (!localStorage.getItem('loggedIn')) {
            this.wishList = JSON.parse(localStorage.getItem("wishList")) || [];
            this.wishList.push(this.booksListing[bookId - 1]);
            localStorage.setItem('wishList', JSON.stringify(this.wishList));
            this.router.navigate(['/wishList']);
        }
        else {
            var wishItem = {
                bookBId: bookId,
                userUId: JSON.parse(localStorage.getItem('user')).uId
            };
            console.log(wishItem);
            this.dataservice.addWishList(wishItem).subscribe(function (cart) {
                _this.router.navigate(['/wishList']);
            });
        }
    };
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.active.params);
        this.active.paramMap.subscribe(function (params) {
            _this.bookId.Id = (params.get('id'));
        });
        this.dataservice.getBook(this.bookId).subscribe(function (book) {
            _this.book = book;
            console.log(_this.book.name);
        });
    };
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.cartId = { Id: "" };
    }
    DataService.prototype.addUser = function (user) {
        return this.http.post('api/users', user, httpOptions);
    };
    DataService.prototype.signIn = function (user) {
        return this.http.post('api/users/signIn', user, httpOptions);
    };
    DataService.prototype.addBook = function (book) {
        return this.http.post('api/books', book, httpOptions);
    };
    DataService.prototype.getAllBooks = function () {
        return this.http.get('api/books');
    };
    DataService.prototype.getAllFilterByLowToHigh = function () {
        return this.http.get('api/books/filterLowToHigh');
    };
    DataService.prototype.getAllFilterByHighToLow = function () {
        return this.http.get('api/books/filterHighToLow');
    };
    DataService.prototype.getAllFilterByCondition = function (condition) {
        return this.http.post('api/books/filterCondition', condition, httpOptions);
    };
    DataService.prototype.getAllSearchByName = function (name) {
        console.log(name);
        return this.http.post('api/books/searchByName', name, httpOptions);
    };
    DataService.prototype.getBook = function (id) {
        return this.http.post('api/books/book', id, httpOptions);
    };
    DataService.prototype.sentMessage = function (message) {
        console.log(message);
        return this.http.post('api/message', message, httpOptions);
    };
    DataService.prototype.addWishList = function (wishList) {
        return this.http.post('api/carts', wishList, httpOptions);
    };
    DataService.prototype.getUserCart = function (id) {
        return this.http.post('api/carts/getCart', id, httpOptions);
    };
    DataService.prototype.getUserBook = function (id) {
        return this.http.post('api/books/userBooks', id, httpOptions);
    };
    DataService.prototype.deleteCartItem = function (bookId) {
        var url = 'api/carts/' + ("" + bookId);
        return this.http.delete(url);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/log-out/log-out.component.css":
/*!***********************************************!*\
  !*** ./src/app/log-out/log-out.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/log-out/log-out.component.html":
/*!************************************************!*\
  !*** ./src/app/log-out/log-out.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>"

/***/ }),

/***/ "./src/app/log-out/log-out.component.ts":
/*!**********************************************!*\
  !*** ./src/app/log-out/log-out.component.ts ***!
  \**********************************************/
/*! exports provided: LogOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogOutComponent", function() { return LogOutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
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



var LogOutComponent = /** @class */ (function () {
    function LogOutComponent(router, app) {
        this.router = router;
        this.app = app;
    }
    LogOutComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('user');
        localStorage.removeItem('loggedIn');
        this.router.navigate(['']);
    };
    LogOutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log-out',
            template: __webpack_require__(/*! ./log-out.component.html */ "./src/app/log-out/log-out.component.html"),
            styles: [__webpack_require__(/*! ./log-out.component.css */ "./src/app/log-out/log-out.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]])
    ], LogOutComponent);
    return LogOutComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<div align=\"center\">\n\t<h2>\n\t <p class=\"text-warning\"> Messages</p>\n\t</h2>\n</div>\n\n<div class=\"container-fluid\" >\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<table class=\"table table-hover\">\n\t\t\t  <thead>\n\t\t\t    <tr>\n\t\t\t      <th scope=\"col\">S.No</th>\n\t\t\t      <th scope=\"col\">Book Id</th>\n\t\t\t      <th scope=\"col\">Message</th>\n\t\t\t      <th scope=\"col\">Send At</th>\n\t\t\t    </tr>\n\t\t\t  </thead>\n\t\t\t  <tbody>\n\t\t\t    <tr *ngFor=\"let message of messages;let i=index\" class=\"table-light\">\n\t\t\t       <td scope=\"row\">{{ i+1 }}</td>\n\t\t\t      <td>{{ message.bookBId}}</td>\n\t\t\t      <td>{{ message.message}}</td>\n\t\t\t      <td>{{ message.createdAt}}</td>\n\t\t\t    </tr>\n\t\t\t    \n\t\t\t  </tbody>\n\t\t\t</table> \n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageComponent = /** @class */ (function () {
    function MessageComponent(router) {
        this.router = router;
    }
    MessageComponent.prototype.ngOnInit = function () {
        if (!localStorage.getItem('loggedIn')) {
            this.router.navigate(['signIn']);
        }
        else {
            this.messages = JSON.parse(localStorage.getItem('user'))['messages'];
        }
        // this.messages=JSON.parse(localStorage.getItem('user'))['messages'];
        // console.log(this.messages)
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">World Of Books</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink='/'>Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Features</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Pricing</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">About</a>\n      </li>\n    </ul>\n    <div class=\"btn-group\" role=\"group\" id='account' aria-label=\"Button group with nested dropdown\" style=\"margin-left: 10px\" >\n        <a routerLink=\"/wishList\"><button type=\"button\" class=\"btn btn-success\" ><i class=\"fab fa-opencart\"></i><span class=\"badge badge-primary badge-pill\">{{cartCount}}</span></button></a>\n        <button type=\"button\" class=\"btn btn-success\">My Account</button>\n        <div class=\"btn-group\" role=\"group\">\n          <button id=\"btnGroupDrop2\" type=\"button\" class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"></button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop2\" x-placement=\"bottom-start\" style=\"position: absolute; will-change: transform; top: 0px; left: -120px; transform: translate3d(0px, 38px, 0px);\">\n            <a class=\"dropdown-item\" routerLink='/signIn'>Login</a>\n            <a class=\"dropdown-item\" routerLink='/signUp'>Register</a>\n          </div>\n        </div>\n      </div>\n      <div id='loggedIn' class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\" style=\"margin-left: 10px\" >\n        <a routerLink=\"/wishList\"><button type=\"button\" class=\"btn btn-success\"><i class=\"fab fa-opencart\"></i><span class=\"badge badge-primary badge-pill\">{{cartCount}}</span></button></a>\n        <a routerLink=\"/profile\"><button type=\"button\" style=\"margin-left:-10px;\" class=\"btn btn-success\">{{userName}}</button></a>\n        <div class=\"btn-group\" role=\"group\">\n          <button id=\"btnGroupDrop2\" type=\"button\" style=\"margin-left:-10px;\" class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"></button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop2\" x-placement=\"bottom-start\" style=\"position: absolute; will-change: transform; top: 0px; left: -120px; transform: translate3d(0px, 38px, 0px);\">\n            <a class=\"dropdown-item\" routerLink='/logOut'>Logout</a>\n          </div>\n         <a routerLink=\"/message\"> <button style=\"margin-left:-10px;\" type=\"button\" class=\"btn btn-primary\"><i class=\"fas fa-envelope\"></i><span class=\"badge badge-primary badge-pill\">{{messageCount}}</span></button></a>\n        </div>\n      </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
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



var NavComponent = /** @class */ (function () {
    function NavComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.cartCount = 0;
        this.userId = { Id: "" };
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        var loginStatus = localStorage.getItem('loggedIn') || false;
        if (loginStatus == false) {
            document.getElementById('loggedIn').style.display = 'none';
            if (localStorage.getItem('wishList') != null) {
                this.cartCount = JSON.parse(localStorage.getItem('wishList')).length;
            }
        }
        else {
            if (localStorage.getItem('wishList') != null) {
                this.cartCount = JSON.parse(localStorage.getItem('wishList')).length;
                this.cartBook = JSON.parse(localStorage.getItem('wishList'));
                for (var _i = 0, _a = this.cartBook; _i < _a.length; _i++) {
                    var cart = _a[_i];
                    var wishItem = {
                        bookBId: cart.bId,
                        userUId: JSON.parse(localStorage.getItem('user')).uId
                    };
                    this.dataService.addWishList(wishItem).subscribe(function (cart) {
                        _this.userName = JSON.parse(localStorage.getItem('user')).name || '';
                        if (JSON.parse(localStorage.getItem('user'))['messages'] != null)
                            _this.messageCount = JSON.parse(localStorage.getItem('user'))['messages'].length;
                        else {
                            _this.messageCount = 0;
                        }
                        _this.userId.Id = JSON.parse(localStorage.getItem('user')).uId;
                        _this.dataService.getUserCart(_this.userId).subscribe(function (cart) {
                            _this.cartCount = cart['count'];
                        });
                    });
                }
                localStorage.removeItem('wishList');
            }
            else {
                this.userName = JSON.parse(localStorage.getItem('user')).name || '';
                //console.log((localStorage.getItem('user'))['messages'])
                if (JSON.parse(localStorage.getItem('user'))['messages'] != null)
                    this.messageCount = JSON.parse(localStorage.getItem('user'))['messages'].length || 0;
                else {
                    this.messageCount = 0;
                }
                this.userId.Id = JSON.parse(localStorage.getItem('user')).uId;
                this.dataService.getUserCart(this.userId).subscribe(function (cart) {
                    _this.cartCount = cart['count'];
                });
            }
            document.getElementById('account').style.display = 'none';
        }
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btnBook{\r\n\tmargin-left: 10;\r\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"row\">\n<button type=\"button\" routerLink='/addListing' class=\" btn btn-primary btn-lg btn-block\" style=\"width: 40%;margin-top:2%;float: right;\">Click To Add Your Books</button>\n</div>\n<div align=\"center\">\n<h2>\n <p class=\"text-warning\"> Books Listed By You</p>\n</h2>\n</div>\n<div class=\"container-fluid\" style=\"margin-top: 2%\">\n\t\n\t\t<div class=\"row\">\n\n\t\t<div class=\"col-lg-3 col-md-3 col-sm-6\" *ngFor=\"let book of books; let i = index\">\n\t\t\t<div class=\"card mb-3\">\n\t\t\t\t<h3 class=\"card-header\">{{ book.name }}</h3>\n\t\t\t\t<img routerLink='/listings/{{book.bId}}' style=\"margin:5px;height: 150px; width: 96%; display: block;\" src=\"{{ book.image }}\">\n\t\t\t\t<ul class=\"list-group list-group-flush\">\n\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t    \t<td>Book Id:- </td>\n\t\t\t\t\t\t    \t<td>{{ book.bId }}</td>\n\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t    <tr>\n\t\t\t\t\t\t    \t<td>Author:- </td>\n\t\t\t\t\t\t    \t<td>{{ book.authorName }}</td>\n\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t    <tr>\n\t\t\t\t\t\t    \t<td>Condition:- </td>\n\t\t\t\t\t\t    \t<td>{{ book.condition }} </td>\n\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>Price:- </td>\n\t\t\t\t\t\t    \t<td>{{ book.price }} </td>\n\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t\n\t\t\t\t\t\t  \n\t\t\t\t<div class=\"card-footer text-muted\">\n\t\t\t\t\tPosted On:- <span style=\"float: right;\">{{ book.createdAt.substring(0,10) }}</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"col-lg-12\" style=\"align-content: center;\">\t\n\t\t\t<div class=\"alert alert-dismissible alert-light\" *ngIf=\"numberOfBooks == 0\">\n\t\t\t\t  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n\t\t\t\t  <strong>Currently!</strong> There is no books in the database <a routerLink=\"/signIn\" class=\"alert-link\"> Sign In </a> to add books.\n\t\t\t</div>\n\t\t</div>\n\n\t\t</div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
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



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.userId = { Id: "" };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem('loggedIn')) {
            this.router.navigate(['signIn']);
        }
        else {
            this.userId.Id = JSON.parse(localStorage.getItem('user')).uId;
            this.dataService.getUserBook(this.userId).subscribe(function (books) {
                _this.books = books;
            });
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/remove-item/remove-item.component.css":
/*!*******************************************************!*\
  !*** ./src/app/remove-item/remove-item.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/remove-item/remove-item.component.html":
/*!********************************************************!*\
  !*** ./src/app/remove-item/remove-item.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  remove-item works!\n</p>\n"

/***/ }),

/***/ "./src/app/remove-item/remove-item.component.ts":
/*!******************************************************!*\
  !*** ./src/app/remove-item/remove-item.component.ts ***!
  \******************************************************/
/*! exports provided: RemoveItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveItemComponent", function() { return RemoveItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
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



var RemoveItemComponent = /** @class */ (function () {
    function RemoveItemComponent(router, active, dataservice) {
        this.router = router;
        this.active = active;
        this.dataservice = dataservice;
    }
    RemoveItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.active.paramMap.subscribe(function (params) {
            _this.bookId = parseInt(params.get('id'));
        });
        if (!localStorage.getItem('loggedIn')) {
            this.wishList = JSON.parse(localStorage.getItem("wishList")) || [];
            this.wishList.splice(this.bookId, 1);
            localStorage.setItem('wishList', JSON.stringify(this.wishList));
            this.router.navigate(['/wishList']);
        }
        if (localStorage.getItem('loggedIn')) {
            this.dataservice.deleteCartItem(this.bookId).subscribe(function (item) {
                _this.router.navigate(['/wishList']);
            });
        }
    };
    RemoveItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remove-item',
            template: __webpack_require__(/*! ./remove-item.component.html */ "./src/app/remove-item/remove-item.component.html"),
            styles: [__webpack_require__(/*! ./remove-item.component.css */ "./src/app/remove-item/remove-item.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], RemoveItemComponent);
    return RemoveItemComponent;
}());



/***/ }),

/***/ "./src/app/sent-message/sent-message.component.css":
/*!*********************************************************!*\
  !*** ./src/app/sent-message/sent-message.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sent-message/sent-message.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sent-message/sent-message.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<div align=\"center\">\n\t<h2>\n\t <p class=\"text-warning\"> Compose Message</p>\n\t</h2>\n</div>\n\n<form #frm=\"ngForm\" style=\"margin: 5% 30% 10% 30%\" (ngSubmit)=\"sentMessage(frm)\">\n  <fieldset>\n    <div class=\"form-group\">\n      <label for=\"message\">Enter The Message To Send</label>\n      <textarea class=\"form-control\" id=\"message\" ngModel name =\"message\" rows=\"3\" required></textarea>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </fieldset>\n  <div class=\"alert alert-dismissible alert-success\" *ngIf=\"success\" style=\"margin-top: 10px\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" [disabled]=\"frm.invalid\">&times;</button>\n  <strong>Message Sent!</strong>\n</div>\n</form>"

/***/ }),

/***/ "./src/app/sent-message/sent-message.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sent-message/sent-message.component.ts ***!
  \********************************************************/
/*! exports provided: SentMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentMessageComponent", function() { return SentMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
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



var SentMessageComponent = /** @class */ (function () {
    function SentMessageComponent(dataservice, active, router) {
        this.dataservice = dataservice;
        this.active = active;
        this.router = router;
        this.success = false;
    }
    SentMessageComponent.prototype.sentMessage = function (frm) {
        var _this = this;
        var message = {
            message: frm.value.message,
            userUId: this.userId,
            bookBId: this.bookId
        };
        console.log(message);
        this.dataservice.sentMessage(message).subscribe(function (message) {
            console.log(message);
            _this.success = true;
            frm.reset();
        });
    };
    SentMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.active.paramMap.subscribe(function (params) {
            _this.bookId = parseInt(params.get('id'));
            _this.userId = parseInt(params.get('uId'));
            console.log(_this.bookId, " ", _this.userId);
        });
        var loginStatus = localStorage.getItem('loggedIn') || false;
        if (loginStatus == false) {
            this.router.navigate(['signIn']);
        }
    };
    SentMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sent-message',
            template: __webpack_require__(/*! ./sent-message.component.html */ "./src/app/sent-message/sent-message.component.html"),
            styles: [__webpack_require__(/*! ./sent-message.component.css */ "./src/app/sent-message/sent-message.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SentMessageComponent);
    return SentMessageComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<form #frm=\"ngForm\" style=\"margin: 5% 30% 10% 30%\" (ngSubmit)=\"signIn(frm)\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" ngModel name=\"email\" required=\"true\" placeholder=\"Enter email\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\" ngModel name=\"password\" placeholder=\"Password\" required=\"true\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"frm.invalid\">Submit</button>\n \t<br>\n    <div class=\"alert alert-dismissible alert-danger\" id=\"error\" *ngIf='errorStatus' style=\"margin-top: 10%;\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n  <strong>Ooops!</strong> Email or password incorrect and try submitting again.\n</div>\n\n</form>\n\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
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




var SignInComponent = /** @class */ (function () {
    function SignInComponent(dataService, router, app) {
        this.dataService = dataService;
        this.router = router;
        this.app = app;
    }
    SignInComponent.prototype.signIn = function (frm) {
        var _this = this;
        this.errorStatus = false;
        var user = {
            email: frm.value.email,
            password: frm.value.password
        };
        this.dataService.signIn(user).subscribe(function (users) {
            if (users != null) {
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('user', JSON.stringify(users));
                _this.router.navigate(['/profile']);
            }
            else {
                _this.errorStatus = true;
                _this.router.navigate(['signIn']);
            }
        });
    };
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<form novalidate [formGroup]=\"form\" style=\"margin: 5% 30% 10% 30%\" (ngSubmit)=\"addUser(form)\">\n \n    \n     <div class=\"form-group\">\n      <label for=\"name\">Full Name</label>\n      <input type=\"text\" class=\"form-control\"  id=\"name\" formControlName=\"name\" placeholder=\"Enter name\" required=\"true\">\n            <div *ngIf=\"form.get('name').touched && form.get('name').invalid \">\n            <p style=\"color: red\">*Enter Full Name</p>\n            </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\"  formControlName=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" required=\"true\">\n           <div *ngIf=\"form.get('email').touched && form.get('email').invalid \">\n            <p style=\"color: red\">*Email should be valid</p>\n            </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"college\">College</label>\n      <input type=\"text\" class=\"form-control\" id=\"college\"  formControlName=\"college\" placeholder=\"Enter college\" required=\"true\">\n      <div *ngIf=\"form.get('college').touched && form.get('college').invalid \">\n            <p style=\"color: red\">*College Name Does't Conatin only spaces</p>\n            </div>\n\n    </div>\n    <div class=\"form-group\">\n      <label for=\"address\">Address</label>\n      <input type=\"text\" class=\"form-control\" id=\"address\"  formControlName=\"address\" placeholder=\"Enter address\" required=\"true\">\n            <div *ngIf=\"form.get('address').touched && form.get('address').invalid \">\n            <p style=\"color: red\">*Address should not contain only spaces</p>\n            </div>\n    </div>\n\n\t<div class=\"form-group\">\n      <label for=\"mobile\">Phone no.</label>\n      <input type=\"text\" class=\"form-control\" id=\"mobile\"  formControlName=\"mobile\" placeholder=\"Enter phone no.\" required=\"true\">\n       <div *ngIf=\"form.get('mobile').touched && form.get('mobile').invalid \">\n            <p style=\"color: red\">*Mobile should be of 10 digits.</p>\n            </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\"  formControlName=\"password\" placeholder=\"Password\" required=\"true\">\n       <div *ngIf=\"form.get('password').touched && form.get('password').invalid \">\n            <p style=\"color: red\">*Password Does't Contain Spaces</p>\n            </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"form.invalid\">Submit</button>\n \n</form>\n<br>\n    <div class=\"alert alert-dismissible alert-danger\" id=\"error\" *ngIf='errorStatus' style=\"margin-top: 10%;\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n  <strong>Ooops!</strong> Try submitting again.\n</div>\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(dataService, router, app) {
        this.dataService = dataService;
        this.router = router;
        this.app = app;
    }
    SignUpComponent.prototype.addUser = function (form) {
        var _this = this;
        console.log(form.value);
        var loginStatus;
        var userName;
        var user = {
            name: form.value.name,
            email: form.value.email,
            college: form.value.college,
            address: form.value.address,
            mobile: form.value.mobile,
            password: form.value.password
        };
        this.dataService.addUser(user).subscribe(function (user) {
            if (user != null) {
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('user', JSON.stringify(user));
                _this.router.navigate(['/profile']);
            }
            else {
                _this.errorStatus = true;
                _this.router.navigate(['signUp']);
            }
        });
    };
    SignUpComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-z]+( [a-zA-Z]+)*')]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            college: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-z]+( [a-zA-Z]+)*')]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9\\.\/_;,-]+( [a-zA-Z0-9\\.\/_;,-]+)*')]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9@!#$%&*]*')])
        });
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]],
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/wish-list/wish-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/wish-list/wish-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/wish-list/wish-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/wish-list/wish-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<div class=\"container-fluid\">\n\t\t\n\t\t<div class=\"row\" style=\"margin-left: 4%; margin-right:4%; \" *ngIf=\"loggedInStatus\">\n\t\t\t\n\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-12 \" >\n\t\t\t\t\n\t\t\t\t<p style=\"font-size: 18px\">My Order</p><hr>\n\n\t\t\t\t<div class=\"row\" style=\"border: 1px solid black; margin: 2%;padding-top: 2%;\" *ngFor=\"let book of wishListBook;\">\n\t\t\t\t\t<div class=\"col-lg-3 col-md-4 col-sm-6 imgCenter\">\n\t\t\t\t\t\t<img  style=\"margin:5px;height: 150px; width: 96%; display: block;\" src=\"{{ book['book'].image }}\">\n\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-lg-9 col-md-8 col-sm-6 userOrderView\">\n\t\t\t\t\t\t<strong>Book Tittle:- {{ book['book'].name }}</strong><br>\n\t\t\t\t\t\t<span>Book Author:- {{ book['book'].authorName }}</span><br>\n\t\t\t\t\t\t<strong class=\"cartAmount\">&#8377;Price:-  {{ book['book'].price }}</strong>\n\t\t\t\t\t\t<p style=\"display: none;\">{{ book['book'].price}}</p>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-6 col-6 \">\n\t\t\t\t\t\t\t\t<a routerLink=\"/remove/{{book.id}}\" >Remove Item</a>\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t</div>\t\n\t\t\t\t\t<br>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-12\" *ngIf=\"wishListBook!=0\">\n\t\t\t\t\t<div class=\"row \">\n\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-12\" >\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n\t\t\t\t\t\t\t\t\t<p style=\"font-size: 15px; margin-top: 2%;font-weight: 900\"></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-sm-6 col-md-6 col-12\">\n\t\t\t\t\t\t\t\t\t<p style=\"float: right;font-size: 15px; margin-top: 2%;font-weight: 900;\">Wish-List Total &nbsp;&#8377; {{wishListTotalAmount}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n</div>\n\n\n\n\n<div class=\"container-fluid\">\n\t\t\n\t\t<div class=\"row\" style=\"margin-left: 4%; margin-right:4%; \" *ngIf=\"!loggedInStatus\">\n\t\t\t\n\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-12 \" >\n\t\t\t\t\n\t\t\t\t<p style=\"font-size: 18px\">My Order</p><hr>\n\n\t\t\t\t\n\t\t\t\t\t<div class=\"row\" style=\"border: 1px solid black; margin: 2%;padding-top: 2%;\" *ngFor=\"let book of wishListBook;let i= index;\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-4 col-sm-6 imgCenter\">\n\t\t\t\t\t\t\t<img  style=\"margin:5px;height: 150px; width: 96%; display: block;\" src=\"{{ book.image }}\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-lg-9 col-md-8 col-sm-6 userOrderView\">\n\t\t\t\t\t\t\t<strong>Book Tittle:- {{ book.name }}</strong><br>\n\t\t\t\t\t\t\t<span>Book Name:- {{ book.authorName }}</span><br>\n\t\t\t\t\t\t\t<strong class=\"cartAmount\">&#8377;Price:-  {{ book.price }}</strong>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-6 col-6 \">\n\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/remove/{{i}}\" >Remove Item</a>\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t<br>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-12\" *ngIf=\"wishListBook!=0\">\n\t\t\t\t\t\t<div class=\"row \">\n\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-12\" >\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\n\t\t\t\t\t\t\t\t\t\t<p style=\"font-size: 15px; margin-top: 2%;font-weight: 900\"></p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-sm-6 col-md-6 col-12\">\n\t\t\t\t\t\t\t\t\t\t<p style=\"float: right;font-size: 15px; margin-top: 2%;font-weight: 900;\">Wish-List Total &nbsp;&#8377; {{wishListTotalAmount}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n\n<div class=\"container\" *ngIf=\"wishListBook==0\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"alert alert-dismissible alert-primary\">\n\t\t\t\t  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n\t\t\t\t  <h4 class=\"alert-heading\">Empty Cart</h4>\n\t\t\t\t  <p class=\"mb-0\">Go to home and add books <a routerLink=\"\" class=\"alert-link\">Home</a>.</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/wish-list/wish-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/wish-list/wish-list.component.ts ***!
  \**************************************************/
/*! exports provided: WishListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishListComponent", function() { return WishListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WishListComponent = /** @class */ (function () {
    function WishListComponent(dataService) {
        this.dataService = dataService;
        this.userId = { Id: "" };
        this.wishListTotalAmount = 0;
    }
    WishListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedInStatus = JSON.parse(localStorage.getItem('loggedIn')) || false;
        if (this.loggedInStatus) {
            this.userId.Id = JSON.parse(localStorage.getItem('user')).uId;
            this.dataService.getUserCart(this.userId).subscribe(function (cart) {
                _this.wishListBook = cart['rows'];
                for (var _i = 0, _a = _this.wishListBook; _i < _a.length; _i++) {
                    var book = _a[_i];
                    _this.wishListTotalAmount = _this.wishListTotalAmount + book['book'].price;
                }
            });
        }
        else {
            this.wishListBook = JSON.parse(localStorage.getItem('wishList'));
            for (var _i = 0, _a = this.wishListBook; _i < _a.length; _i++) {
                var book = _a[_i];
                this.wishListTotalAmount += book.price;
            }
        }
    };
    WishListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wish-list',
            template: __webpack_require__(/*! ./wish-list.component.html */ "./src/app/wish-list/wish-list.component.html"),
            styles: [__webpack_require__(/*! ./wish-list.component.css */ "./src/app/wish-list/wish-list.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], WishListComponent);
    return WishListComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Hp\Desktop\BootCampAssignment\BooksFront\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map