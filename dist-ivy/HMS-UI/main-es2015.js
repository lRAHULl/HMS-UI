(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bulk-create/bulk-create.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bulk-create/bulk-create.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>bulk-create works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create/create.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create/create.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>{{ user | json }}</p> -->\n<div class=\"my-form\" *ngIf=\"role === 'doctor'\">\n    <h1>Create Doctor</h1>\n    <hr>\n    <form [formGroup]=\"userForm\">\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" id=\"username\" formControlName=\"username\" class=\"my-form-input form-control\">\n                <span *ngIf=\"username.invalid && username.touched\" style=\"color: red;\">Username cannot be empty<br></span>\n                <label for=\"password\">Password</label>\n                <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"my-form-input form-control\">\n                <label for=\"firstName\">First Name</label>\n                <input type=\"text\" id=\"firstName\" formControlName=\"firstName\" class=\"my-form-input form-control\">\n                <label for=\"lastName\">Last Name</label>\n                <input type=\"text\" id=\"lastName\" formControlName=\"lastName\" class=\"my-form-input form-control\">\n                <label for=\"age\">Age</label>\n                <input type=\"number\" id=\"age\" formControlName=\"age\" class=\"my-form-input form-control\">\n            </div>\n            <div class=\"col-6\">\n                <label for=\"doctorSpecialisation\">Doctor Specialisation</label>\n                <input type=\"text\" id=\"doctorSpecialisation\" formControlName=\"doctorSpecialisation\" class=\"my-form-input form-control\">\n                <label for=\"experience\">Experience</label>\n                <input type=\"number\" id=\"experience\" formControlName=\"experience\" class=\"my-form-input form-control\">\n            </div>\n        </div>\n        <button class=\"btn btn-success\" type=\"submit\" (click)=\"createDoctor()\" [disabled]=\"userForm.invalid\">Create Doctor</button>\n    </form>\n</div>\n\n<div class=\"my-form\" *ngIf=\"role === 'patient'\">\n    <h1>Create Patient</h1>\n    <hr>\n    <form [formGroup]=\"userForm\">  \n        <!-- {{ username.errors | json }} -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" id=\"username\" (focusout)=\"testBlur()\" formControlName=\"username\" class=\"my-form-input form-control\" [ngClass]=\"{\n                    'error': !!username.errors && username.touched,\n                    'is-valid': !username.errors\n                }\" required>\n                <span *ngIf=\"username.errors?.required && username.touched\" style=\"color: red;\">\n                    Username is Required <br>\n                </span>\n                <span *ngIf=\"username.errors?.minlength && username.touched\" style=\"color: red;\">\n                    Username is too short.. <br>\n                </span>\n                <span *ngIf=\"username.touched && username.errors?.maxlength\" style=\"color: red;\">\n                    Username is too long.. <br>\n                </span>\n                <!-- <span *ngIf=\"!username.errors\" style=\"color: green;\">\n                    Username looks fine!\n                </span> -->\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <!-- {{ password.errors | json }} -->\n                <label for=\"password\">Password</label>\n                <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"my-form-input form-control\"  [ngClass]=\"{\n                    'error': !!password.errors && password.touched,\n                    'is-valid': !password.errors\n                }\">\n                <span *ngIf=\"password.errors?.required && password.touched\" style=\"color: red;\">\n                    Password is Required <br>\n                </span>\n                <span *ngIf=\"password.errors?.minlength && password.touched\" style=\"color: red;\">\n                    Password is too short.. <br>\n                </span>\n                <span *ngIf=\"password.touched && password.errors?.maxlength\" style=\"color: red;\">\n                    Password is too long.. <br>\n                </span>\n                <span *ngIf=\"!password.errors\" style=\"color: green;\">\n                    Password looks fine! <br>\n                </span>\n                <span *ngIf=\"password.errors?.pattern && password.touched\" style=\"color: red;\">\n                    Password must contain an uppercase, lowercase, number <br>\n                </span>\n                <label for=\"firstName\">First Name</label>\n                <input type=\"text\" id=\"firstName\" formControlName=\"firstName\" class=\"my-form-input form-control\"  [ngClass]=\"{\n                    'error': !!firstName.errors && firstName.touched,\n                    'is-valid': !firstName.errors\n                }\">\n                <label for=\"lastName\">Last Name</label>\n                <input type=\"text\" id=\"lastName\" formControlName=\"lastName\" class=\"my-form-input form-control\"  [ngClass]=\"{\n                    'error': !!lastName.errors && lastName.touched,\n                    'is-valid': !lastName.errors\n                }\">\n                <label for=\"age\">Age</label>\n                <input type=\"number\" id=\"age\" formControlName=\"age\" class=\"my-form-input form-control\" [ngClass]=\"{\n                    'error': !!age.errors && age.touched,\n                    'is-valid': !age.errors\n                }\">\n                <label for=\"bloodGroup\">Blood Group</label>\n                <input type=\"text\" id=\"bloodGroup\" formControlName=\"bloodGroup\" class=\"my-form-input form-control\"  [ngClass]=\"{\n                    'error': !!bloodGroup.errors && bloodGroup.touched,\n                    'is-valid': !bloodGroup.errors\n                }\">\n                <span *ngIf=\"bloodGroup.touched && bloodGroup.invalid\" style=\"color: red;\">\n                    Enter the valid Blood Group <br>\n                </span>\n            </div>\n            <div class=\"col-6\">\n                <label for=\"patientHeight\">Patient Height</label>\n                <input type=\"number\" id=\"patientHeight\" formControlName=\"patientHeight\" class=\"my-form-input form-control\" [ngClass]=\"{\n                    'error': !!patientHeight.errors && patientHeight.touched,\n                    'is-valid': !patientHeight.errors\n                }\">\n                <label for=\"patientWeight\">Patient Weight</label>\n                <input type=\"number\" id=\"patientWeight\" formControlName=\"patientWeight\" class=\"my-form-input form-control\" [ngClass]=\"{\n                    'error': !!patientWeight.errors && patientWeight.touched,\n                    'is-valid': !patientWeight.errors\n                }\">\n                <label for=\"street\">Street</label>\n                <input type=\"text\" id=\"street\" formControlName=\"street\" class=\"my-form-input form-control\" [ngClass]=\"{\n                    'error': !!street.errors && street.touched,\n                    'is-valid': !street.errors\n                }\">\n                <label for=\"city\">City</label>\n                <input type=\"text\" id=\"city\" formControlName=\"city\" class=\"my-form-input form-control\" [ngClass]=\"{\n                    'error': !!city.errors && city.touched,\n                    'is-valid': !city.errors\n                }\">\n                <label for=\"doorNo\">Door No</label>\n                <input type=\"text\" id=\"doorNo\" formControlName=\"doorNo\" class=\"my-form-input form-control\" [ngClass]=\"{\n                    'error': !!doorNo.errors && doorNo.touched,\n                    'is-valid': !doorNo.errors\n                }\">\n            </div>\n        </div>\n        <button class=\"btn btn-success\" type=\"submit\" (click)=\"createPatient()\" [disabled]=\"userForm.invalid\">Create Patient</button>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loginService.isLoggedIn()\" style=\"text-align: center;\">\n\n    <div class=\"row\">\n        <div class=\"col-6\">\n            <p [routerLink]=\"['doctors']\" routerLinkActive=\"select\" class=\"my-btn\">doctors</p>\n        </div>\n        <div class=\"col-6\">\n            <p [routerLink]=\"['patients']\" routerLinkActive=\"select\" class=\"my-btn\">patients</p>\n        </div>\n    </div>\n\n    <router-outlet></router-outlet>\n    \n <!--   <div class=\"dashboard fluid-container\">\n        <table class=\"table table-striped table-bordered table-hover mt-3\">\n            <thead *ngIf=\"!!users\">\n                <th>S.No</th>\n                <th>Username</th>\n                <th>FirstName</th>\n                <th>LastName</th>\n                <th *ngIf=\"role === 2\">Specilization</th>\n                <th *ngIf=\"role === 2\">Experience</th>\n                <th *ngIf=\"role === 1\">Height</th>\n                <th *ngIf=\"role === 1\">Weight</th>\n                <th>Actions</th>\n            </thead>\n            <!-- <app-user *ngFor=\"let user of users\" [user]=\"user\"></app-user> -->\n           <!-- <tbody>\n                <tr *ngFor=\"let user of users; let i=index\">\n                    <td>{{ i+1 }}</td>\n                    <td>{{ user.username }} <a routerLink=\"{{ user.pkUserId }}\"> <i class=\"fas fa-eye\"> </i> </a></td>\n                    <td>{{ user.firstName }}</td>\n                    <td>{{ user.lastName }}</td>\n                    <td *ngIf=\"user.fkRoleId === 2\">{{ user.doctorSpecialisation }}</td>\n                    <td *ngIf=\"user.fkRoleId === 2\">{{ user.experience }}</td>\n                    <td *ngIf=\"user.fkRoleId === 1\">{{ user.patientHeight }}</td>\n                    <td *ngIf=\"user.fkRoleId === 1\">{{ user.patientWeight }}</td>\n                    <td>\n                        <button class=\"btn btn-warning text-white\" routerLink=\"{{ user.pkUserId }}/update\"><i class=\"far fa-edit\" ></i></button>\n                        &nbsp;\n                        <button *ngIf=\"user.fkRoleId === 1\" class=\"btn btn-danger text-white\" (click)=\"deletePatient(user.pkUserId)\"><i class=\"far fa-trash-alt\"></i></button>\n                        <button *ngIf=\"user.fkRoleId === 2\" class=\"btn btn-danger text-white\" (click)=\"deleteDoctor(user.pkUserId)\">\n                            <i class=\"far fa-trash-alt\"></i>\n                            <!-- <div class=\"spinner-grow text-light\" role=\"status\">\n                                <span class=\"sr-only\">Loading...</span>\n                            </div> -->\n                   <!--     </button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <button class=\"btn btn-success\" *ngIf=\"role === 2\" (click)=\"createDoctor()\">Add Doctor</button>\n        <button class=\"btn btn-success\" *ngIf=\"role === 1\" (click)=\"createPatient()\">Add Patient</button>\n    </div> -->\n</div> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/display/doctors/doctors.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/display/doctors/doctors.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard fluid-container\">\n    <table class=\"table table-striped table-bordered table-hover mt-3\">\n        <thead *ngIf=\"!!doctors\">\n            <th>S.No</th>\n            <th>Username</th>\n            <th>FirstName</th>\n            <th>LastName</th>\n            <th>Specilization</th>\n            <th>Experience</th>\n            <th>Actions</th>\n        </thead>\n        <!-- <app-user *ngFor=\"let user of users\" [user]=\"user\"></app-user> -->\n        <tbody>\n            <tr *ngFor=\"let user of doctors; let i=index\">\n                <td>{{ i+1 }}</td>\n                <td>{{ user.username }} <a routerLink=\"{{ user.pkUserId }}\"> <i class=\"fas fa-eye\"> </i> </a></td>\n                <td>{{ user.firstName }}</td>\n                <td>{{ user.lastName }}</td>\n                <td>{{ user.doctorSpecialisation }}</td>\n                <td>{{ user.experience }}</td>\n                <td>\n                    <button \n                        class=\"btn btn-warning text-white\" \n                        routerLink=\"/display/doctors/{{ user.pkUserId }}/update\">\n                        <i class=\"far fa-edit\" ></i>\n                    </button>\n                    &nbsp;\n                    <button \n                        class=\"btn btn-danger text-white\" \n                        (click)=\"deleteDoctor(user.pkUserId)\">\n                        <i class=\"far fa-trash-alt\"></i>\n                    </button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    <app-button [text]=\"text\" (click)=\"createDoctor()\"></app-button>\n    <!-- <button \n        class=\"btn btn-success\" \n        (click)=\"createDoctor()\">\n        Add Doctor\n    </button> -->\n</div> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/display/patients/patients.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/display/patients/patients.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div \n    class=\"dashboard fluid-container\">\n    <table \n        class=\"table table-striped table-bordered table-hover mt-3\">\n        <thead \n            *ngIf=\"!!patients\">\n            <th>S.No</th>\n            <th>Username</th>\n            <th>FirstName</th>\n            <th>LastName</th>\n            <th>Height</th>\n            <th>Weight</th>\n            <th>Actions</th>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let user of patients let i=index\">\n                <td>{{ i+1 }}</td>\n                <td>{{ user.username }} <a routerLink=\"{{ user.pkUserId }}\"> <i class=\"fas fa-eye\"> </i> </a></td>\n                <td>{{ user.firstName }}</td>\n                <td>{{ user.lastName }}</td>\n                <td>{{ user.patientHeight }}</td>\n                <td>{{ user.patientWeight }}</td>\n                <td>\n                    <button \n                        class=\"btn btn-warning text-white\" \n                        routerLink=\"/display/patients/{{ user.pkUserId }}/update\">\n                        <i class=\"far fa-edit\"></i>\n                    </button>\n                    &nbsp;\n                    <button \n                        class=\"btn btn-danger text-white\" \n                        (click)=\"deletePatient(user.pkUserId)\">\n                        <i class=\"far fa-trash-alt\"></i>\n                    </button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    <button \n        class=\"btn btn-success\" \n        (click)=\"createPatient()\">\n        Add Patient\n    </button>\n</div> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/display/update/update.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/display/update/update.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("{{ userUpdateForm.value | json}}\n\n<form style=\"text-align: center;\" [formGroup]=\"userUpdateForm\">\n  <br>\n  <div class=\"form-group\">\n    <label>\n      Username <input type=\"text\" formControlName=\"username\" class=\"form-control\" disabled>\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      Password <input type=\"text\" formControlName=\"password\" class=\"form-control\">\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      Age <input type=\"number\" formControlName=\"age\" class=\"form-control\">\n    </label>\n  </div>\n  <div *ngIf=\"role === 'doctors' || role === 'doctor'\">\n    <div class=\"form-group\">\n      <label>\n        Specialisation <input type=\"text\" formControlName=\"doctorSpecialisation\"\n          class=\"form-control\">\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <label>\n        Experience <input type=\"number\" formControlName=\"experience\" class=\"form-control\">\n      </label>\n    </div>\n    <button (click)=\"updateDoctor()\" class=\"btn btn-primary\">Update</button>\n  </div>\n  <div *ngIf=\"role === 'patients' || role === 'patient'\">\n    <div class=\"form-group\">\n      <label>\n        Height <input type=\"number\" formControlName=\"patientHeight\" class=\"form-control\">\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <label>\n        Weight <input type=\"number\" formControlName=\"patientWeight\" class=\"form-control\">\n      </label>\n    </div>\n    <button (click)=\"updatePatient()\" class=\"btn btn-primary\">Update</button>\n  </div>\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/display/user/user.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/display/user/user.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <tbody>\r\n    <td>{{ user.pkUserId }}</td>\r\n    <td>{{ user.username }}</td>\r\n    <td>{{ user.firstName }}</td>\r\n    <td>{{ user.lastName }}</td>\r\n    <td>\r\n        <button class=\"btn btn-warning text-white\" routerLink=\"{{ user.pkUserId }}/update\"><i class=\"far fa-edit\" ></i> Edit</button>\r\n    </td>\r\n</tbody> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- As a heading -->\n<nav class=\"navbar navbar-light bg-light\">\n        <span class=\"navbar-brand mb-0 h1\">HMS</span>\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" *ngIf=\"!login.isLoggedIn()\" routerLink=\"/login\">Login</a>\n                <a class=\"nav-link\" *ngIf=\"login.isLoggedIn()\" routerLink=\"/display\">{{ login.username }}</a>\n            </li>\n        </ul>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div  class=\"d-flex justify-content-center\">\n\n\n    <form>\n        <h1 class=\"d-flex justify-content-center\">Login</h1>\n        <div class=\"form-group\">\n            <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\" required>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n        </div>\n        \n        <button type=\"submit\" (click)=\"login()\" class=\"btn btn-success d-flex justify-content-center\">Login</button>\n    </form>\n</div> -->\n\n\n<h3 class=\"login\">Log In</h3>\n<!-- \n<div class=\"my-form\">\n    <form  (ngSubmit)=\"login()\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" ngModel id=\"username\" name=\"username\" #usernameInput=\"ngModel\" class=\"my-form-input form-control\" placeholder=\"Username\" required>\n        <label for=\"password\">Password</label>\n        <input type=\"password\" ngModel id=\"password\" name=\"password\" #passwordInput=\"ngModel\" class=\"my-form-input form-control\" placeholder=\"Password\" required>\n   \n        <button type=\"submit\" class=\"btn btn-success my-form-button\">Login</button>\n    </form>\n</div> -->\n\n<div class=\"my-form\">\n    <form>\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"my-form-input form-control\" placeholder=\"Username\" required>\n\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"my-form-input form-control\" placeholder=\"Password\" required>\n   \n        <button type=\"submit\" (click)=\"login()\" class=\"btn btn-success my-form-button\">Login</button>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/child/child.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/child/child.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p> <strong>Child: </strong> message from parent: {{ message }}</p>\n<button (click)=\"sendMessage()\">Emit</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/parent/parent.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/parent/parent.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Parent</h1>\n<h2>From Child {{ eventMessage }}</h2>\n<input type=\"text\" [(ngModel)]=\"message\">\n<app-child [message]=\"message\" (emitter)=\"recieve($event)\"></app-child>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sample-form/sample-form.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sample-form/sample-form.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"myForm\">\n    <input type=\"text\" formControlName=\"username\" placeholder=\"name\" required>\n    <input type=\"text\" formControlName=\"password\" placeholder=\"password\" required>\n    <input type=\"text\" formControlName=\"firstName\" placeholder=\"firstName\" required>\n    <input type=\"text\" formControlName=\"lastName\" placeholder=\"lastName\" required>\n    <input type=\"number\" formControlName=\"age\" placeholder=\"age\" required>\n    <input type=\"text\" formControlName=\"doctorSpecialisation\" placeholder=\"doctorSpecialisation\" required>\n    <input type=\"number\" formControlName=\"experience\" placeholder=\"experience\" required>\n    <button type=\"submit\" [disabled]=\"myForm.invalid\" (click)=\"submit()\">Submit</button>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/button/button.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/button/button.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button \n    type=\"text\"\n    class=\"btn btn-success\">\n    {{ text }}\n</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/validators/custom-validator/custom-validator.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/validators/custom-validator/custom-validator.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>custom-validator works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display/display.component */ "./src/app/display/display.component.ts");
/* harmony import */ var _display_update_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./display/update/update.component */ "./src/app/display/update/update.component.ts");
/* harmony import */ var _display_user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./display/user/user.component */ "./src/app/display/user/user.component.ts");
/* harmony import */ var _secure_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./secure.guard */ "./src/app/secure.guard.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _play_parent_parent_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./play/parent/parent.component */ "./src/app/play/parent/parent.component.ts");
/* harmony import */ var _display_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./display/doctors/doctors.component */ "./src/app/display/doctors/doctors.component.ts");
/* harmony import */ var _display_patients_patients_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./display/patients/patients.component */ "./src/app/display/patients/patients.component.ts");












const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    {
        path: 'display',
        component: _display_display_component__WEBPACK_IMPORTED_MODULE_4__["DisplayComponent"],
        canActivate: [_secure_guard__WEBPACK_IMPORTED_MODULE_7__["SecureGuard"]],
        children: [
            { path: 'doctors', component: _display_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_10__["DoctorsComponent"] },
            { path: 'patients', component: _display_patients_patients_component__WEBPACK_IMPORTED_MODULE_11__["PatientsComponent"] }
        ]
    },
    { path: 'play', component: _play_parent_parent_component__WEBPACK_IMPORTED_MODULE_9__["ParentComponent"] },
    { path: 'display/:role/:id/update', component: _display_update_update_component__WEBPACK_IMPORTED_MODULE_5__["UpdateComponent"], canActivate: [_secure_guard__WEBPACK_IMPORTED_MODULE_7__["SecureGuard"]] },
    { path: 'display/:role/:id', component: _display_user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"], canActivate: [_secure_guard__WEBPACK_IMPORTED_MODULE_7__["SecureGuard"]] },
    { path: 'create/:role', component: _create_create_component__WEBPACK_IMPORTED_MODULE_8__["CreateComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'HMS-UI';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./display/display.component */ "./src/app/display/display.component.ts");
/* harmony import */ var _display_user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./display/user/user.component */ "./src/app/display/user/user.component.ts");
/* harmony import */ var _display_update_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./display/update/update.component */ "./src/app/display/update/update.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _sample_form_sample_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sample-form/sample-form.component */ "./src/app/sample-form/sample-form.component.ts");
/* harmony import */ var _bulk_create_bulk_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bulk-create/bulk-create.component */ "./src/app/bulk-create/bulk-create.component.ts");
/* harmony import */ var _validators_custom_validator_custom_validator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./validators/custom-validator/custom-validator.component */ "./src/app/validators/custom-validator/custom-validator.component.ts");
/* harmony import */ var _play_parent_parent_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./play/parent/parent.component */ "./src/app/play/parent/parent.component.ts");
/* harmony import */ var _play_child_child_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./play/child/child.component */ "./src/app/play/child/child.component.ts");
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/token-interceptor.service */ "./src/app/services/token-interceptor.service.ts");
/* harmony import */ var _display_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./display/doctors/doctors.component */ "./src/app/display/doctors/doctors.component.ts");
/* harmony import */ var _display_patients_patients_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./display/patients/patients.component */ "./src/app/display/patients/patients.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _display_display_component__WEBPACK_IMPORTED_MODULE_9__["DisplayComponent"],
            _display_user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"],
            _display_update_update_component__WEBPACK_IMPORTED_MODULE_11__["UpdateComponent"],
            _create_create_component__WEBPACK_IMPORTED_MODULE_12__["CreateComponent"],
            _sample_form_sample_form_component__WEBPACK_IMPORTED_MODULE_13__["SampleFormComponent"],
            _bulk_create_bulk_create_component__WEBPACK_IMPORTED_MODULE_14__["BulkCreateComponent"],
            _validators_custom_validator_custom_validator_component__WEBPACK_IMPORTED_MODULE_15__["CustomValidatorComponent"],
            _play_parent_parent_component__WEBPACK_IMPORTED_MODULE_16__["ParentComponent"],
            _play_child_child_component__WEBPACK_IMPORTED_MODULE_17__["ChildComponent"],
            _display_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_19__["DoctorsComponent"],
            _display_patients_patients_component__WEBPACK_IMPORTED_MODULE_20__["PatientsComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"],
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["TokenInterceptorService"],
                multi: true,
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/bulk-create/bulk-create.component.scss":
/*!********************************************************!*\
  !*** ./src/app/bulk-create/bulk-create.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1bGstY3JlYXRlL2J1bGstY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/bulk-create/bulk-create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bulk-create/bulk-create.component.ts ***!
  \******************************************************/
/*! exports provided: BulkCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkCreateComponent", function() { return BulkCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BulkCreateComponent = class BulkCreateComponent {
    constructor() { }
    ngOnInit() {
    }
};
BulkCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bulk-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bulk-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bulk-create/bulk-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bulk-create.component.scss */ "./src/app/bulk-create/bulk-create.component.scss")).default]
    })
], BulkCreateComponent);



/***/ }),

/***/ "./src/app/create/create.component.scss":
/*!**********************************************!*\
  !*** ./src/app/create/create.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-form {\n  border: 0.5px solid grey;\n  border-radius: 1%;\n  margin-left: 30%;\n  margin-right: 30%;\n  padding: 10px;\n  text-align: center;\n}\n.my-form-input {\n  margin-bottom: 10px;\n}\n.my-form-button {\n  margin-left: 40%;\n  padding-left: 10%;\n  padding-right: 10%;\n  border-radius: 5%;\n}\n.error {\n  color: red;\n}\n.success {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlL0M6XFxVc2Vyc1xcVkNcXERlc2t0b3BcXEhNUy1VSS9zcmNcXGFwcFxcY3JlYXRlXFxjcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFDSSxtQkFBQTtBQ0NSO0FERUk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FSO0FES0E7RUFDSSxVQUFBO0FDRko7QURLQTtFQUNJLFlBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktZm9ybSB7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICYtaW5wdXQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnN1Y2Nlc3Mge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59IiwiLm15LWZvcm0ge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDElO1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICBtYXJnaW4tcmlnaHQ6IDMwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm15LWZvcm0taW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm15LWZvcm0tYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zdWNjZXNzIHtcbiAgY29sb3I6IGdyZWVuO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models_doctor_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/doctor.model */ "./src/app/models/doctor.model.ts");
/* harmony import */ var _models_doctors_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/doctors.model */ "./src/app/models/doctors.model.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _validators_custom_validator_custom_validator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../validators/custom-validator/custom-validator.component */ "./src/app/validators/custom-validator/custom-validator.component.ts");








let CreateComponent = class CreateComponent {
    constructor(router, userService, route, fb) {
        this.router = router;
        this.userService = userService;
        this.route = route;
        this.fb = fb;
    }
    ngOnInit() {
        this.router.params.subscribe(pathParams => this.role = pathParams.role);
        if (this.role === 'doctor') {
            this.doctor = new _models_doctor_model__WEBPACK_IMPORTED_MODULE_3__["Doctor"]();
            this.userForm = this.fb.group({
                username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                doctorSpecialisation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                experience: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            });
        }
        else if (this.role === 'patient') {
            this.patient = new _models_doctors_model__WEBPACK_IMPORTED_MODULE_4__["Patient"]();
            this.userForm = this.fb.group({
                username: ['', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(25),
                    ]],
                password: ['', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]+)$'),
                    ]],
                firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                patientHeight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                patientWeight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                doorNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                bloodGroup: ['', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                        _validators_custom_validator_custom_validator_component__WEBPACK_IMPORTED_MODULE_7__["CustomValidatorComponent"].validateBloodGroup,
                    ]],
            });
        }
    }
    get username() {
        return this.userForm.get('username');
    }
    get password() {
        return this.userForm.get('password');
    }
    get firstName() {
        return this.userForm.get('firstName');
    }
    get lastName() {
        return this.userForm.get('lastName');
    }
    get age() {
        return this.userForm.get('age');
    }
    get doctorSpecialisation() {
        return this.userForm.get('doctorSpecialisation');
    }
    get experience() {
        return this.userForm.get('experience');
    }
    get patientHeight() {
        return this.userForm.get('patientHeight');
    }
    get patientWeight() {
        return this.userForm.get('patientWeight');
    }
    get street() {
        return this.userForm.get('street');
    }
    get city() {
        return this.userForm.get('password');
    }
    get doorNo() {
        return this.userForm.get('doorNo');
    }
    get bloodGroup() {
        return this.userForm.get('bloodGroup');
    }
    testBlur() {
        console.log("Username Blurred!");
    }
    createDoctor() {
        const values = this.userForm.value;
        this.doctor.username = values.username;
        this.doctor.password = values.password;
        this.doctor.firstName = values.firstName;
        this.doctor.lastName = values.lastName;
        this.doctor.age = values.age;
        this.doctor.doctorSpecialisation = values.doctorSpecialisation;
        this.doctor.experience = values.experience;
        console.log(this.doctor);
        this.userService.createDoctor(this.doctor).subscribe(data => {
            this.res = data;
            this.route.navigateByUrl('display/doctors');
        });
        console.log(values);
    }
    createPatient() {
        const values = this.userForm.value;
        this.patient.username = values.username;
        this.patient.password = values.password;
        this.patient.firstName = values.firstName;
        this.patient.lastName = values.lastName;
        this.patient.age = values.age;
        this.patient.patientHeight = values.patientHeight;
        this.patient.patientWeight = values.patientWeight;
        this.patient.street = values.street;
        this.patient.city = values.city;
        this.patient.doorNo = values.doorNo;
        this.patient.bloodGroup = values.bloodGroup, [];
        console.log(this.patient);
        this.userService.createPatient(this.patient).subscribe(data => {
            this.res = data;
            this.route.navigateByUrl('/display/patients');
        });
        console.log(values);
    }
    validateBloodGroup(c) {
        const validBloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
        return validBloodGroups.includes(c.value) ? null : {
            validateBloodGroup: {
                valid: false,
            }
        };
    }
};
CreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create/create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create.component.scss */ "./src/app/create/create.component.scss")).default]
    })
], CreateComponent);



/***/ }),

/***/ "./src/app/display/display.component.scss":
/*!************************************************!*\
  !*** ./src/app/display/display.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".select {\n  background-color: black;\n  color: blanchedalmond;\n}\n\n.my-btn {\n  margin-top: 5%;\n  margin-right: 30%;\n  margin-left: 30%;\n  cursor: pointer;\n  padding: 10px 20px;\n  border: 2px solid black;\n  border-radius: 5%;\n}\n\n.dashboard {\n  margin: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzcGxheS9DOlxcVXNlcnNcXFZDXFxEZXNrdG9wXFxITVMtVUkvc3JjXFxhcHBcXGRpc3BsYXlcXGRpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc3BsYXkvZGlzcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBRUksVUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvZGlzcGxheS9kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcclxufVxyXG5cclxuLm15LWJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQge1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW46IDIlO1xyXG59IiwiLnNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XG59XG5cbi5teS1idG4ge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiAzMCU7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNSU7XG59XG5cbi5kYXNoYm9hcmQge1xuICBtYXJnaW46IDIlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/display/display.component.ts":
/*!**********************************************!*\
  !*** ./src/app/display/display.component.ts ***!
  \**********************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");



let DisplayComponent = class DisplayComponent {
    constructor(loginService) {
        this.loginService = loginService;
        this.username = this.loginService.username;
        this.password = this.loginService.password;
    }
    ngOnInit() {
    }
};
DisplayComponent.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
DisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./display.component.scss */ "./src/app/display/display.component.scss")).default]
    })
], DisplayComponent);



/***/ }),

/***/ "./src/app/display/doctors/doctors.component.scss":
/*!********************************************************!*\
  !*** ./src/app/display/doctors/doctors.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".select {\n  background-color: black;\n  color: blanchedalmond;\n}\n\n.my-btn {\n  margin-top: 5%;\n  margin-right: 30%;\n  margin-left: 30%;\n  cursor: pointer;\n  padding: 10px 20px;\n  border: 2px solid black;\n  border-radius: 5%;\n}\n\n.dashboard {\n  margin: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzcGxheS9kb2N0b3JzL0M6XFxVc2Vyc1xcVkNcXERlc2t0b3BcXEhNUy1VSS9zcmNcXGFwcFxcZGlzcGxheVxcZG9jdG9yc1xcZG9jdG9ycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlzcGxheS9kb2N0b3JzL2RvY3RvcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUVJLFVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2Rpc3BsYXkvZG9jdG9ycy9kb2N0b3JzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcclxufVxyXG5cclxuLm15LWJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQge1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW46IDIlO1xyXG59IiwiLnNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XG59XG5cbi5teS1idG4ge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiAzMCU7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNSU7XG59XG5cbi5kYXNoYm9hcmQge1xuICBtYXJnaW46IDIlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/display/doctors/doctors.component.ts":
/*!******************************************************!*\
  !*** ./src/app/display/doctors/doctors.component.ts ***!
  \******************************************************/
/*! exports provided: DoctorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsComponent", function() { return DoctorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let DoctorsComponent = class DoctorsComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.text = 'Add Doctor';
    }
    ngOnInit() {
        this.getDoctors();
    }
    createDoctor() {
        this.router.navigateByUrl('create/doctor');
    }
    getDoctors() {
        this.userService.getDoctors().subscribe(data => {
            this.doctors = data;
        });
    }
    deleteDoctor(userId) {
        const confirm = prompt(`Are you sure you want to delete doctor with id ${userId} (type: yes (or) no)`);
        if (confirm.toLowerCase() === 'yes') {
            this.userService.deleteDoctor(userId).subscribe(data => {
                console.log(data);
                this.getDoctors();
            });
        }
    }
};
DoctorsComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DoctorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctors',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doctors.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/display/doctors/doctors.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doctors.component.scss */ "./src/app/display/doctors/doctors.component.scss")).default]
    })
], DoctorsComponent);



/***/ }),

/***/ "./src/app/display/patients/patients.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/display/patients/patients.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3BsYXkvcGF0aWVudHMvcGF0aWVudHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/display/patients/patients.component.ts":
/*!********************************************************!*\
  !*** ./src/app/display/patients/patients.component.ts ***!
  \********************************************************/
/*! exports provided: PatientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsComponent", function() { return PatientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");




let PatientsComponent = class PatientsComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        this.getPatients();
    }
    createPatient() {
        this.router.navigate(['create/patient']);
    }
    getPatients() {
        this.userService.getPatients().subscribe(data => {
            this.patients = data;
        });
    }
    deletePatient(userId) {
        const confirm = prompt(`Are you sure you want to delete patient with id ${userId} (type: yes (or) no)`);
        if (confirm.toLowerCase() === 'yes') {
            this.userService.deletePatient(userId).subscribe(data => {
                console.log(data);
                this.getPatients();
            });
        }
    }
};
PatientsComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PatientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patients',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patients.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/display/patients/patients.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patients.component.scss */ "./src/app/display/patients/patients.component.scss")).default]
    })
], PatientsComponent);



/***/ }),

/***/ "./src/app/display/update/update.component.scss":
/*!******************************************************!*\
  !*** ./src/app/display/update/update.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3BsYXkvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/display/update/update.component.ts":
/*!****************************************************!*\
  !*** ./src/app/display/update/update.component.ts ***!
  \****************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_doctor_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/doctor.model */ "./src/app/models/doctor.model.ts");
/* harmony import */ var src_app_models_doctors_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/doctors.model */ "./src/app/models/doctors.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







let UpdateComponent = class UpdateComponent {
    constructor(userService, router, route, fb) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.res = null;
    }
    ngOnInit() {
        this.router.params.subscribe(pathParams => {
            this.userId = pathParams.id;
            this.role = pathParams.role;
            console.log(this.userId);
            console.log(this.role);
            if (this.role.toLowerCase() === 'doctors' || this.role.toLowerCase() === 'doctor') {
                this.userService.getDoctorById(this.userId.toString()).subscribe(data => {
                    console.log(data);
                    this.userUpdateForm = this.fb.group({
                        username: data.username,
                        password: data.password,
                        age: data.age,
                        doctorSpecialisation: data.doctorSpecialisation,
                        experience: data.experience,
                    });
                });
            }
            else if ((this.role.toLowerCase() === 'patients' || this.role.toLowerCase() === 'patient')) {
                this.userService.getPatientById(this.userId.toString()).subscribe(data => {
                    console.log(data);
                    this.userUpdateForm = this.fb.group({
                        username: data.username,
                        password: data.password,
                        age: data.age,
                        patientHeight: data.patientHeight,
                        patientWeight: data.patientWeight,
                    });
                });
            }
        });
        // console.log(this.user);
    }
    updateDoctor() {
        const values = this.userUpdateForm.value;
        this.user = new src_app_models_doctor_model__WEBPACK_IMPORTED_MODULE_4__["Doctor"]();
        this.user.username = values.username;
        this.user.password = values.password;
        this.user.age = values.age;
        this.user.doctorSpecialisation = values.doctorSpecialisation;
        this.user.experience = values.experience;
        this.user.fkRoleId = 2;
        this.user.pkUserId = this.userId;
        console.log(values);
        console.log(this.user);
        this.userService.updateDoctor(this.user).subscribe(data => {
            this.res = data;
            this.route.navigateByUrl('display/doctors');
        });
    }
    updatePatient() {
        const values = this.userUpdateForm.value;
        this.user = new src_app_models_doctors_model__WEBPACK_IMPORTED_MODULE_5__["Patient"]();
        this.user.username = values.username;
        this.user.password = values.password;
        this.user.age = values.age;
        this.user.patientHeight = values.patientHeight;
        this.user.patientWeight = values.patientWeight;
        this.user.fkRoleId = 1;
        this.user.pkUserId = this.userId;
        console.log(values);
        console.log(this.user);
        this.userService.updatePatient(this.user).subscribe(data => {
            this.res = data;
            this.route.navigateByUrl('display/patients');
        });
    }
};
UpdateComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/display/update/update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update.component.scss */ "./src/app/display/update/update.component.scss")).default]
    })
], UpdateComponent);



/***/ }),

/***/ "./src/app/display/user/user.component.scss":
/*!**************************************************!*\
  !*** ./src/app/display/user/user.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3BsYXkvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/display/user/user.component.ts":
/*!************************************************!*\
  !*** ./src/app/display/user/user.component.ts ***!
  \************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UserComponent = class UserComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserComponent.prototype, "user", void 0);
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/display/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.scss */ "./src/app/display/user/user.component.scss")).default]
    })
], UserComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(login) {
        this.login = login;
    }
    ngOnInit() {
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  text-align: center;\n}\n\n.my-form {\n  border: 0.5px solid grey;\n  border-radius: 1%;\n  margin-left: 30%;\n  margin-right: 30%;\n  padding: 10px;\n}\n\n.my-form-input {\n  margin-bottom: 10px;\n}\n\n.my-form-button {\n  margin-left: 40%;\n  padding-left: 10%;\n  padding-right: 10%;\n  border-radius: 5%;\n}\n\n.login {\n  margin-top: 8.5%;\n  margin-left: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxWQ1xcRGVza3RvcFxcSE1TLVVJL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVJO0VBQ0ksbUJBQUE7QUNBUjs7QURHSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRFI7O0FETUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubXktZm9ybSB7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgXHJcbiAgICAmLWlucHV0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLmxvZ2luIHtcclxuICAgIG1hcmdpbi10b3A6IDguNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDUlO1xyXG59XHJcbiIsImJvZHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5teS1mb3JtIHtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmFkaXVzOiAxJTtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgbWFyZ2luLXJpZ2h0OiAzMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubXktZm9ybS1pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubXktZm9ybS1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgcGFkZGluZy1yaWdodDogMTAlO1xuICBib3JkZXItcmFkaXVzOiA1JTtcbn1cblxuLmxvZ2luIHtcbiAgbWFyZ2luLXRvcDogOC41JTtcbiAgbWFyZ2luLWxlZnQ6IDQ1JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        this.loginService.username = this.username;
        this.loginService.password = this.password;
        this.router.navigate(['/display']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/models/doctor.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/doctor.model.ts ***!
  \****************************************/
/*! exports provided: Doctor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doctor", function() { return Doctor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Doctor {
}


/***/ }),

/***/ "./src/app/models/doctors.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/doctors.model.ts ***!
  \*****************************************/
/*! exports provided: Doctors, Doctor, Patient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doctors", function() { return Doctors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doctor", function() { return Doctor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return Patient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// Generated by https://quicktype.io

class Doctors {
}
class Doctor {
}
class Patient {
}


/***/ }),

/***/ "./src/app/play/child/child.component.scss":
/*!*************************************************!*\
  !*** ./src/app/play/child/child.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXkvY2hpbGQvY2hpbGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/play/child/child.component.ts":
/*!***********************************************!*\
  !*** ./src/app/play/child/child.component.ts ***!
  \***********************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let ChildComponent = class ChildComponent {
    constructor() {
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    sendMessage() {
        this.emitter.emit(this.message);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChildComponent.prototype, "message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ChildComponent.prototype, "emitter", void 0);
ChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-child',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./child.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/child/child.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./child.component.scss */ "./src/app/play/child/child.component.scss")).default]
    })
], ChildComponent);



/***/ }),

/***/ "./src/app/play/parent/parent.component.scss":
/*!***************************************************!*\
  !*** ./src/app/play/parent/parent.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXkvcGFyZW50L3BhcmVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/play/parent/parent.component.ts":
/*!*************************************************!*\
  !*** ./src/app/play/parent/parent.component.ts ***!
  \*************************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParentComponent = class ParentComponent {
    constructor() { }
    ngOnInit() {
    }
    recieve($event) {
        this.eventMessage = $event;
        // alert($event);
    }
};
ParentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parent',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./parent.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/parent/parent.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./parent.component.scss */ "./src/app/play/parent/parent.component.scss")).default]
    })
], ParentComponent);



/***/ }),

/***/ "./src/app/sample-form/sample-form.component.scss":
/*!********************************************************!*\
  !*** ./src/app/sample-form/sample-form.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbXBsZS1mb3JtL3NhbXBsZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/sample-form/sample-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sample-form/sample-form.component.ts ***!
  \******************************************************/
/*! exports provided: SampleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleFormComponent", function() { return SampleFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let SampleFormComponent = class SampleFormComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.myForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            doctorSpecialisation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            experience: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    submit() {
        console.log(this.myForm.value);
    }
};
SampleFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
SampleFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sample-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sample-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sample-form/sample-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sample-form.component.scss */ "./src/app/sample-form/sample-form.component.scss")).default]
    })
], SampleFormComponent);



/***/ }),

/***/ "./src/app/secure.guard.ts":
/*!*********************************!*\
  !*** ./src/app/secure.guard.ts ***!
  \*********************************/
/*! exports provided: SecureGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecureGuard", function() { return SecureGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");



let SecureGuard = class SecureGuard {
    constructor(loginService) {
        this.loginService = loginService;
        this.status = this.loginService.isLoggedIn();
    }
    canActivate(next, state) {
        if (this.loginService.username === '' || this.loginService.username === null || this.loginService.username === undefined) {
            alert('Login to use this feature!!');
            return false;
        }
        return true;
    }
};
SecureGuard.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
SecureGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SecureGuard);



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LoginService = class LoginService {
    constructor() { }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    isLoggedIn() {
        if (this.username === '' || this.username === null || this.username === undefined) {
            return false;
        }
        return true;
    }
};
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/services/token-interceptor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/token-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TokenInterceptorService = class TokenInterceptorService {
    constructor() { }
    intercept(req, next) {
        const token = 'xx.yy.zz';
        const tokenizedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            }
        });
        return next.handle(tokenizedReq);
    }
};
TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenInterceptorService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.DOCTORS_URL = 'http://localhost:8080/doctors/';
        this.PATIENTS_URL = 'http://localhost:8080/patients/';
        this._listOfDoctor = [{ name: 'Ashok', data: 'Opthamologist' }, { name: 'Swetha', data: 'Dentist' }];
        this._listOfPatient = [{ name: 'Rahul', data: 'Cold' }, { name: 'Kishore', data: 'Fever' }];
    }
    get listOfPatient() {
        return this._listOfPatient;
    }
    set listOfPatient(value) {
        this._listOfPatient = value;
    }
    get listOfDoctor() {
        return this._listOfDoctor;
    }
    set listOfDoctor(value) {
        this._listOfDoctor = value;
    }
    createDoctor(doctor) {
        return this.http.post(this.DOCTORS_URL, doctor);
    }
    createPatient(patient) {
        return this.http.post(this.PATIENTS_URL, patient);
    }
    getDoctors() {
        return this.http.get(this.DOCTORS_URL);
    }
    getPatients() {
        return this.http.get(this.PATIENTS_URL);
    }
    getDoctorById(id) {
        return this.http.get(this.DOCTORS_URL + id);
    }
    getPatientById(id) {
        return this.http.get(this.PATIENTS_URL + id);
    }
    updateDoctor(doctor) {
        return this.http.put(this.DOCTORS_URL, doctor);
    }
    updatePatient(patient) {
        return this.http.put(this.PATIENTS_URL, patient);
    }
    deleteDoctor(userId) {
        return this.http.delete(this.DOCTORS_URL + userId);
    }
    deletePatient(userId) {
        return this.http.delete(this.PATIENTS_URL + userId);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/shared/button/button.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/button/button.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/button/button.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/button/button.component.ts ***!
  \***************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ButtonComponent = class ButtonComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ButtonComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ButtonComponent.prototype, "color", void 0);
ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-button',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/button/button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./button.component.scss */ "./src/app/shared/button/button.component.scss")).default]
    })
], ButtonComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button/button.component */ "./src/app/shared/button/button.component.ts");




let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: [
            _button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"],
        ],
        exports: [
            _button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"],
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/validators/custom-validator/custom-validator.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/validators/custom-validator/custom-validator.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZhbGlkYXRvcnMvY3VzdG9tLXZhbGlkYXRvci9jdXN0b20tdmFsaWRhdG9yLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/validators/custom-validator/custom-validator.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/validators/custom-validator/custom-validator.component.ts ***!
  \***************************************************************************/
/*! exports provided: CustomValidatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidatorComponent", function() { return CustomValidatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CustomValidatorComponent = class CustomValidatorComponent {
    static validateBloodGroup(c) {
        const validBloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
        return validBloodGroups.includes(c.value) ? null : {
            validateBloodGroup: {
                valid: false,
            }
        };
    }
};
CustomValidatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-custom-validator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-validator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/validators/custom-validator/custom-validator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-validator.component.scss */ "./src/app/validators/custom-validator/custom-validator.component.scss")).default]
    })
], CustomValidatorComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\VC\Desktop\HMS-UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map