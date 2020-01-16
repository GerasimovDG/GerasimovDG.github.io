var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <router-outlet></router-outlet>\n<!--  <app-students></app-students>-->\n<!--  <app-students [updateFlag]=\"dataHandler.toggleForUpdate\"></app-students>-->\n<!--  <app-add-form *ngIf=\"dataHandler.isCallFormService\"></app-add-form>-->\n<!--  <app-edit-form *ngIf=\"dataHandler.isCallEditFormService\"></app-edit-form>-->\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/error-pages/error500-page/error500-page.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error-pages/error500-page/error500-page.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div class=\"container\">\n    <div class=\"error\">\n      <div class=\"error__header\">\n        <img class=\"error__img\" src=\"assets/img/404.svg\" alt=\"500\" width=\"100\">\n        <div class=\"error__code\"> {{status}}</div>\n      </div>\n\n      <div class=\"error__text\">Ошибка сервера</div>\n      <div class=\"error__info\">\n        На сервере произошла непредвиденная ошибка. Пожалуйста, подождите. Она вскоре будет исправлена.\n        <br>\n        <div class=\"error__link\">\n          Попробуйте\n          <a [routerLink]=\"['/']\">вернуться на главную</a>.\n        </div>\n      </div>\n    </div>\n    <div class=\"error__details\">\n      <div>HTTP Error {{status}} ({{statusText}})</div>\n      <div>При попытке выполнить запрос на {{url}} произошла непредвиденная ошибка.</div>\n    </div>\n  </div>\n\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/error-pages/page-not-found/page-not-found.component.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error-pages/page-not-found/page-not-found.component.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div class=\"container\">\n    <div class=\"error\">\n      <div class=\"error__header\">\n<!--        <div class=\"svg\"></div>-->\n        <img src=\"assets/img/404.svg\" width=\"100\" alt=\"404\">\n        <div class=\"error__code\">404</div>\n      </div>\n\n      <div class=\"error__text\">Ничего не найдено</div>\n      <div class=\"error__link\">\n        <a [routerLink]=\"['/']\">На главную</a>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/students/stud-forms/add-form/add-form.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view/students/stud-forms/add-form/add-form.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bground\">\n  <div class=\"container\">\n    <form novalidate class=\"form\" [formGroup]=\"form\" (ngSubmit)=\"submitStudent()\">\n<!--      <div (click)=\"this.dataHandler.isCallFormService=false\" class=\"close\">&times;</div>-->\n      <div (click)=\"closeAddForm()\" class=\"close\">&times;</div>\n      <h1>Добавление студента</h1>\n\n      <div class=\"form\" formGroupName=\"fio\">\n        <div class=\"form-control\">\n          <label for=\"lastName\">Фамилия</label>\n          <input id=\"lastName\" type=\"text\" placeholder=\"Иванов\" formControlName=\"lastName\">\n          <div class=\"validation\"\n               *ngIf=\"form.get('fio').get('lastName').invalid && form.get('fio').get('lastName').touched\"\n          >\n            <small *ngIf=\"form.get('fio').get('lastName').errors.required\">Поле не должно быть пустым</small>\n          </div>\n        </div>\n        <div class=\"form-control\">\n          <label for=\"firstName\">Имя</label>\n          <input id=\"firstName\" type=\"text\" placeholder=\"Иван\" formControlName=\"firstName\">\n          <div class=\"validation\"\n               *ngIf=\"form.get('fio').get('firstName').invalid && form.get('fio').get('firstName').touched\"\n          >\n            <small *ngIf=\"form.get('fio').get('firstName').errors.required\">Поле не должно быть пустым</small>\n          </div>\n        </div>\n        <div class=\"form-control\">\n          <label for=\"middleName\">Отчество</label>\n          <input id=\"middleName\" type=\"text\" placeholder=\"Иванович\" formControlName=\"middleName\">\n          <div class=\"validation\"\n               *ngIf=\"form.get('fio').get('middleName').invalid && form.get('fio').get('middleName').touched\"\n          >\n            <small *ngIf=\"form.get('fio').get('middleName').errors.required\">Поле не должно быть пустым</small>\n          </div>\n        </div>\n        <div class=\"validation\">\n          <small *ngIf=\"form.get('fio').errors && form.get('fio').errors.restrictedFio\">Имя не должно совпадать с фамилией или отчеством </small>\n        </div>\n      </div>\n      <div class=\"form-control\">\n        <label for=\"birthday\">Дата рождения</label>\n        <input id=\"birthday\" type=\"date\" formControlName=\"birthday\">\n        <div class=\"validation\">\n          <small *ngIf=\"form.get('birthday').errors && form.get('birthday').errors.restrictedDate\">Человеку должно быть меньше 10 лет</small>\n        </div>\n      </div>\n      <div class=\"form-control\">\n        <label for=\"mark\">Средняя оценка</label>\n        <input id=\"mark\" type=\"text\" placeholder=\"4.4\" formControlName=\"mark\">\n        <div class=\"validation\" *ngIf=\"form.get('mark').invalid && form.get('mark').touched\">\n          <small\n            *ngIf=\"form.get('mark').errors.required\"\n          >Введите оценку от 0 до 5</small>\n          <small\n            *ngIf=\"form.get('mark').errors.min\"\n          >Оценка должна быть больше {{form.get('mark').errors.min.min }} </small>\n          <small\n            *ngIf=\" form.get('mark').errors.max\"\n          >Оценка должна быть меньше {{form.get('mark').errors.max.max}} </small>\n        </div>\n      </div>\n      <button class=\"form-button\" [ngClass]=\"{'form-button_enabled' : form.valid && enableBtn}\" type=\"submit\">Добавить</button>\n    </form>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/students/stud-forms/edit-form/edit-form.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view/students/stud-forms/edit-form/edit-form.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bground\">\n  <div class=\"container\">\n    <form novalidate class=\"form\" [formGroup]=\"form\"  (ngSubmit)=\"submitEditStudent()\">\n<!--      <div (click)=\"this.dataHandler.isCallEditFormService=false\" class=\"close\">&times;</div>-->\n      <div (click)=\"closeEditForm()\" [routerLink]=\"['/']\" class=\"close\">&times;</div>\n      <h1>Редактирование данных</h1>\n      <h2>{{ editStudent.lastName }}\n        {{ editStudent.firstName }}\n        {{ editStudent.middleName }}</h2>\n      <div class=\"form\" formGroupName=\"fio\">\n        <div class=\"form-control\">\n          <label for=\"lastName\">Фамилия</label>\n          <input id=\"lastName\" type=\"text\" placeholder=\"Фамилия\" formControlName=\"lastName\">\n          <div class=\"validation\"\n               *ngIf=\"form.get('fio').get('lastName').invalid && form.get('fio').get('lastName').touched\"\n          >\n            <small *ngIf=\"form.get('fio').get('lastName').errors.required\">Поле не должно быть пустым</small>\n          </div>\n        </div>\n        <div class=\"form-control\">\n          <label for=\"firstName\">Имя</label>\n          <input id=\"firstName\" type=\"text\" placeholder=\"Имя\" formControlName=\"firstName\">\n          <div class=\"validation\"\n               *ngIf=\"form.get('fio').get('firstName').invalid && form.get('fio').get('firstName').touched\"\n          >\n            <small *ngIf=\"form.get('fio').get('firstName').errors.required\">Поле не должно быть пустым</small>\n          </div>\n        </div>\n        <div class=\"form-control\">\n          <label for=\"middleName\">Отчество</label>\n          <input id=\"middleName\" type=\"text\" placeholder=\"Отчество\" formControlName=\"middleName\">\n          <div class=\"validation\"\n               *ngIf=\"form.get('fio').get('middleName').invalid && form.get('fio').get('middleName').touched\"\n          >\n            <small *ngIf=\"form.get('fio').get('middleName').errors.required\">Поле не должно быть пустым</small>\n          </div>\n        </div>\n        <div class=\"validation\">\n          <small *ngIf=\"form.get('fio').errors && form.get('fio').errors.restrictedFio\">Имя не должно совпадать с фамилией или отчеством </small>\n        </div>\n      </div>\n      <div class=\"form-control\">\n        <label for=\"birthday\">Дата рождения</label>\n        <input id=\"birthday\" type=\"date\" formControlName=\"birthday\">\n        <div class=\"validation\">\n          <small *ngIf=\"form.get('birthday').errors && form.get('birthday').errors.restrictedDate\">Человеку должно быть больше 10 лет</small>\n        </div>\n      </div>\n      <div class=\"form-control\">\n        <label for=\"mark\">Средняя оценка</label>\n        <input id=\"mark\" type=\"text\" placeholder=\"4.4\" formControlName=\"mark\">\n        <div class=\"validation\" *ngIf=\"form.get('mark').invalid && form.get('mark').touched\">\n          <small\n            *ngIf=\"form.get('mark').errors.required\"\n          >Введите оценку от 0 до 5</small>\n          <small\n            *ngIf=\"form.get('mark').errors.min\"\n          >Оценка должна быть больше {{form.get('mark').errors.min.min }} </small>\n          <small\n            *ngIf=\" form.get('mark').errors.max\"\n          >Оценка должна быть меньше {{form.get('mark').errors.max.max}} </small>\n        </div>\n      </div>\n      <button class=\"form-button\" [ngClass]=\"{'form-button_enabled' : form.valid && enableBtn}\" type=\"submit\">Сохранить</button>\n    </form>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/students/stud-forms/stud-forms.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view/students/stud-forms/stud-forms.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/students/students.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view/students/students.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"view\">\n  <div class=\"view-header\">\n    <h4 class=\"view-header__title\" [routerLink]=\"'/'\" [queryParams]=\"{debug: true}\" >Список студентов</h4>\n    <label class=\"view-header__checkbox\">\n      <input (click)=\"toggleFeature()\" type=\"checkbox\" checked=\"checked\" />\n      <span class=\"view-header__checkbox__text\">Выделение двоечников</span>\n    </label>\n  </div>\n  <div class=\"view-search\">\n    <label for=\"search\"></label>\n    <input id=\"search\" class=\"view-search__input input\" type=\"text\" placeholder=\"Поиск\" [(ngModel)]=\"search\">\n    <button class=\"view-search__button\"\n            [ngClass]=\"{ 'view-search__button_active' : searchField == this.searchOption.LastName}\"\n            (click)=\"searchField = this.searchOption.LastName\">по фамилии</button>\n    <button class=\"view-search__button\"\n            [ngClass]=\"{ 'view-search__button_active' : searchField == this.searchOption.FirstName}\"\n            (click)=\"searchField = this.searchOption.FirstName\">по имени</button>\n    <button class=\"view-search__button \"\n            [ngClass]=\"{ 'view-search__button_active' : searchField == this.searchOption.All}\"\n            (click)=\"searchField = this.searchOption.All\">по имени и фамилии</button>\n  </div>\n  <div class=\"view-block\">\n    <div class=\"view-filter\">\n      <div class=\"view-filter__name\">Фильтр:</div>\n      <label for=\"lastNameSearch\"></label>\n      <input id=\"lastNameSearch\" class=\"input view-filter__input\" type=\"text\" placeholder=\"По фамилии\" [(ngModel)]=\"lastNameSearch\">\n\n      <label for=\"markSearch\"></label>\n      <input id=\"markSearch\" class=\"input view-filter__input\" type=\"text\" placeholder=\"По среднему баллу\" [(ngModel)]=\"mark\" (ngModelChange)=\"setStudentsByMark()\">\n\n      <label for=\"birthdaySearch\"></label>\n      <input id=\"birthdaySearch\" class=\"input view-filter__input\" type=\"date\" placeholder=\"По дате рождения\" [(ngModel)]=\"birthday\" (ngModelChange)=\"setStudentsByBirthday()\"></div>\n    <div class=\"view-button\">\n      <button class=\"view-button__button\" (click)=\"openAddForm()\" >Добавить студента</button>\n    </div>\n  </div>\n  <div class=\"view-body table-responsive\">\n    <table class=\"table\" *ngIf=\"!loading; else loadingBlock\" >\n      <thead class=\" table-header\">\n      <tr>\n      <th (click)=\"sortTableBy('id'); sortUp = !sortUp\">#</th>\n      <th [ngClass]=\"{'active' : isSort('lastName')}\" (click)=\"sortTableBy('lastName'); sortUp = !sortUp\">Фамилия</th>\n      <th [ngClass]=\"{'active' : isSort('firstName')}\" (click)=\"sortTableBy('firstName'); sortUp = !sortUp\">Имя</th>\n      <th [ngClass]=\"{'active' : isSort('middleName')}\" (click)=\"sortTableBy('middleName'); sortUp = !sortUp\">Отчество</th>\n      <th [ngClass]=\"{'active' : isSort('birthday')}\" (click)=\"sortTableBy('birthday'); sortUp = !sortUp\">Дата рождения</th>\n      <th [ngClass]=\"{'active' : isSort('averageMark')}\" (click)=\"sortTableBy('averageMark'); sortUp = !sortUp\">Средний балл</th>\n      <th></th>\n      <th></th>\n      </tr>\n      </thead>\n        <tbody [appInfo]=\"student.info\"\n               [appHighlight]=\"student.averageMark\"\n               *ngFor=\"let student of students | filter:lastNameSearch; trackBy:trackByStudentID; let i = index\" class=\"table-body\"\n               [ngClass]=\"{\n                  'table-body_red' : student.averageMark < 3 && getFeature(),\n                  'table-body_green' : isSearch(student)\n                }\"\n              >\n        <tr>\n          <td>{{i + 1}}</td>\n          <td class=\"table-body__element\">{{student.lastName}}</td>\n          <td class=\"table-body__element\">{{student.firstName}}</td>\n          <td class=\"table-body__element\">{{student.middleName || \"\"}}</td>\n          <td> {{student.birthday | date:\"dd.MM.yyyy\" | dateYears}}</td>\n          <td>{{student.averageMark }}\n          <span class=\"gift\" [innerHTML] = \"student.averageMark | goodMark\"></span>\n          </td>\n          <td>\n            <div class=\"edit\" (click)=\"setEditStudent(student)\" >\n              <i class=\"fas fa-edit\"></i>\n            </div>\n          </td>\n          <td>\n            <div class=\"delete\" (click)=\"hidden=true; delStudent=student\" >\n              <button class=\"delete__button\"></button>\n            </div>\n          </td>\n        </tr>\n        </tbody>\n    </table>\n    <ng-template #loadingBlock>\n        <div class=\"loading\">\n            <div class=\"loading__text\">Загрузка...</div>\n            <div class=\"lds-ring loading__elem\"><div></div><div></div><div></div><div></div></div>\n        </div>\n    </ng-template>\n  </div>\n</div>\n\n<div class=\"hidden\" [ngClass]=\"{'hidden_active' : hidden}\">\n  <div id=\"confirm\" class=\"confirm\">\n    <h2>Вы уверены, что хотите удалить студента?</h2>\n    <h3>{{delStudent.lastName || \"\"}} {{delStudent.firstName || \"\"}} {{delStudent.middleName || \"\"}}</h3>\n    <div class=\"button-block\">\n    <button class=\"confirm__button button-block__button\" (click)=\"deleteStudent(delStudent)\">Удалить</button>\n    <button class=\"confirm__button confirm__button_cancel button-block__button\" (click)=\"hidden = false\">Отмена</button>\n    </div>\n  </div>\n</div>\n\n<!--<app-add-form (onCloseForm)=\"isAddForm = false\" *ngIf=\"isAddForm\"></app-add-form>-->\n<!--<app-edit-form [editStudent]=\"this.editStudent\"-->\n<!--               *ngIf=\"isEditForm\"-->\n<!--              (onEdit)=\"isEditForm = false\"-->\n<!--&gt;</app-edit-form>-->\n<router-outlet></router-outlet>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _edit_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit.guard */ "./src/app/edit.guard.ts");
            /* harmony import */ var _error_pages_error500_page_error500_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-pages/error500-page/error500-page.component */ "./src/app/error-pages/error500-page/error500-page.component.ts");
            /* harmony import */ var _error_pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error-pages/page-not-found/page-not-found.component */ "./src/app/error-pages/page-not-found/page-not-found.component.ts");
            /* harmony import */ var _view_students_stud_forms_add_form_add_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/students/stud-forms/add-form/add-form.component */ "./src/app/view/students/stud-forms/add-form/add-form.component.ts");
            /* harmony import */ var _view_students_stud_forms_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/students/stud-forms/edit-form/edit-form.component */ "./src/app/view/students/stud-forms/edit-form/edit-form.component.ts");
            /* harmony import */ var _view_students_students_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/students/students.component */ "./src/app/view/students/students.component.ts");
            var routes = [
                { path: "", component: _view_students_students_component__WEBPACK_IMPORTED_MODULE_9__["StudentsComponent"] },
                { path: "form", component: _view_students_students_component__WEBPACK_IMPORTED_MODULE_9__["StudentsComponent"], children: [
                        { path: "add", component: _view_students_stud_forms_add_form_add_form_component__WEBPACK_IMPORTED_MODULE_7__["AddFormComponent"] },
                        { path: "edit", component: _view_students_stud_forms_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_8__["EditFormComponent"], redirectTo: "", pathMatch: "full" },
                        { path: "edit/:id", component: _view_students_stud_forms_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_8__["EditFormComponent"], canActivate: [_edit_guard__WEBPACK_IMPORTED_MODULE_4__["EditGuard"]] },
                    ] },
                { path: "serverError", component: _error_pages_error500_page_error500_page_component__WEBPACK_IMPORTED_MODULE_5__["Error500PageComponent"] },
                { path: "**", component: _error_pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [],
                    imports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.less": 
        /*!************************************!*\
          !*** ./src/app/app.component.less ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 1200px;\n  margin: 0 auto;\n  font-family: 'Roboto', sans-serif;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDovTkNyY2tyL0hXIEFuZ3VsYXIgVFMvc3R1ZC10YWJsZS9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFFQSxpQ0FBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = "stud-table";
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-root",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _error_pages_error500_page_error500_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-pages/error500-page/error500-page.component */ "./src/app/error-pages/error500-page/error500-page.component.ts");
            /* harmony import */ var _error_pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error-pages/page-not-found/page-not-found.component */ "./src/app/error-pages/page-not-found/page-not-found.component.ts");
            /* harmony import */ var _service_data_handler_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/data-handler.service */ "./src/app/service/data-handler.service.ts");
            /* harmony import */ var _service_data_server_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/data-server.service */ "./src/app/service/data-server.service.ts");
            /* harmony import */ var _service_data_factory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/data.factory */ "./src/app/service/data.factory.ts");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/data.service */ "./src/app/service/data.service.ts");
            /* harmony import */ var _view_students_students_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view/students/students.module */ "./src/app/view/students/students.module.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                        _error_pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
                        _error_pages_error500_page_error500_page_component__WEBPACK_IMPORTED_MODULE_7__["Error500PageComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                        _view_students_students_module__WEBPACK_IMPORTED_MODULE_13__["StudentsModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    ],
                    providers: [_service_data_handler_service__WEBPACK_IMPORTED_MODULE_9__["DataHandlerService"], _service_data_server_service__WEBPACK_IMPORTED_MODULE_10__["DataServerService"], {
                            provide: _service_data_service__WEBPACK_IMPORTED_MODULE_12__["Data"],
                            useFactory: _service_data_factory__WEBPACK_IMPORTED_MODULE_11__["serviceFactory"],
                            deps: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]],
                        }],
                    exports: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/data/test-data.ts": 
        /*!***********************************!*\
          !*** ./src/app/data/test-data.ts ***!
          \***********************************/
        /*! exports provided: TestData */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestData", function () { return TestData; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var TestData = /** @class */ (function () {
                function TestData() {
                }
                return TestData;
            }());
            TestData.students = [
                {
                    id: 1,
                    lastName: "Герасимова",
                    firstName: "Татьяна",
                    middleName: "Васильевна",
                    birthday: new Date("1997-09-17"),
                    averageMark: 4.4,
                    info: {
                        address: "987654, г. Нижний Новгород, пр-т Гагарина 23, дом 999, квартира 999",
                        phone: "8 (909) 474-28-37",
                        login: "GerasimovD348"
                    }
                },
                {
                    id: 2,
                    lastName: "Веселкова",
                    firstName: "Дарья",
                    middleName: "Тимофеевна",
                    birthday: new Date("1997-03-12"),
                    averageMark: 3.4,
                    info: {
                        address: "303026, г. Валдай, ул. Спортивная, дом 37, квартира 37",
                        phone: "8 (958) 728-87-19",
                        login: "VeselkovaDarya292"
                    }
                },
                {
                    id: 3,
                    lastName: "Дубровин",
                    firstName: "Сергей",
                    middleName: "Ильич",
                    birthday: new Date("1997-03-12"),
                    averageMark: 4,
                    info: {
                        address: "673461, г. Усть-Омчуг, ул. Алымов Переулок, дом 14, квартира 8",
                        phone: "8 (909) 474-28-37",
                        login: "PavlovSila348"
                    }
                },
                {
                    id: 4,
                    lastName: "Деменкова",
                    firstName: "Ева",
                    middleName: "Чеславовна",
                    birthday: new Date("2001-07-07"),
                    averageMark: 4.5,
                    info: {
                        address: "423648, г. Кинешма, ул. Иверский Переулок, дом 23, квартира 199",
                        phone: "8 (938) 613-62-56",
                        login: "BelovArtemiy87"
                    }
                },
                {
                    id: 5,
                    lastName: "Журавель",
                    firstName: "Инна",
                    middleName: "Максимовна",
                    birthday: new Date("2000-08-12"),
                    averageMark: 4.1,
                    info: {
                        address: "152906, г. Раевский, ул. Вилиса Лациса, дом 73, квартира 44",
                        phone: "8 (971) 540-36-57",
                        login: "JuravelInna342"
                    }
                },
                {
                    id: 6,
                    lastName: "Каратеева",
                    firstName: "Инна",
                    middleName: "Семеновна",
                    birthday: new Date("2001-09-02"),
                    averageMark: 4.1,
                    info: {
                        address: "673461, г. Усть-Омчуг, ул. Алымов Переулок, дом 14, квартира 8",
                        phone: "8 (909) 474-28-37",
                        login: "PavlovSila348"
                    }
                },
                {
                    id: 7,
                    lastName: "Ефимов",
                    firstName: "Рюрик",
                    middleName: "Яковлевич",
                    birthday: new Date("2001-08-29"),
                    averageMark: 2.4,
                    info: {
                        address: "346863, г. Добрянка, ул. Хлебозаводский Проезд, дом 76, квартира 40",
                        phone: "8 (935) 843-89-12",
                        login: "HistoryRurik29"
                    }
                },
                {
                    id: 8,
                    lastName: "Гаврилова",
                    firstName: "Сильва",
                    middleName: "Сергеевна",
                    birthday: new Date("2002-12-12"),
                    averageMark: 4.4,
                    info: {
                        address: "347160, г. Монастырщина, ул. Вавилова, дом 80, квартира 259",
                        phone: "8 (906) 139-85-44",
                        login: "GavrilovaSilva322"
                    }
                },
                {
                    id: 9,
                    lastName: "Самсонова",
                    firstName: "Александра",
                    middleName: "Павловна",
                    birthday: new Date("1998-10-11"),
                    averageMark: 4.2,
                    info: {
                        address: "420999, г. Парфеньево, ул. Бухвостова 3-я, дом 63, квартира 258",
                        phone: "8 (921) 919-50-16",
                        login: "SamsonovaAlexa101"
                    }
                },
                {
                    id: 10,
                    lastName: "Юсупова",
                    firstName: "Нина",
                    middleName: "Федоровна",
                    birthday: new Date("2001-03-17"),
                    averageMark: 2.9,
                    info: {
                        address: "385449, г. Аликово, ул. Новотихвинская, дом 58, квартира 89",
                        phone: "8 (927) 980-72-84",
                        login: "YsupovaNina2001"
                    }
                },
                {
                    id: 11,
                    lastName: "Петренко",
                    firstName: "Николай",
                    middleName: "Алексеевич",
                    birthday: new Date("2001-11-11"),
                    averageMark: 5,
                    info: {
                        address: "359428, г. Котовск, ул. Академика Туполева Набережная, дом 92, квартира 71",
                        phone: "8 (936) 762-29-41",
                        login: "PetrenkoCrazy777"
                    }
                },
            ];
            /***/ 
        }),
        /***/ "./src/app/directives/highlight.directive.ts": 
        /*!***************************************************!*\
          !*** ./src/app/directives/highlight.directive.ts ***!
          \***************************************************/
        /*! exports provided: HighlightDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function () { return HighlightDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HighlightDirective = /** @class */ (function () {
                function HighlightDirective(renderer, el) {
                    this.renderer = renderer;
                    this.el = el;
                    this.flag = false;
                }
                HighlightDirective.prototype.onClick = function () {
                    this.flag = !this.flag;
                    if (this.flag) {
                        if (this.mark >= 4.5) {
                            this.renderer.setStyle(this.el.nativeElement, "backgroundColor", "rgba(0,204,102,0.3)");
                            this.renderer.setStyle(this.el.nativeElement, "border", "2px solid #F56433");
                        }
                        else if (this.mark < 3) {
                            this.renderer.setStyle(this.el.nativeElement, "backgroundColor", "rgba(100, 0, 0, 0.5)");
                            this.renderer.setStyle(this.el.nativeElement, "border", "2px solid #F56433");
                        }
                        else {
                            this.renderer.setStyle(this.el.nativeElement, "backgroundColor", "rgba(0, 0, 0, 0.1)");
                            this.renderer.setStyle(this.el.nativeElement, "border", "2px solid #F56433");
                        }
                    }
                    else {
                        this.renderer.setStyle(this.el.nativeElement, "backgroundColor", null);
                        this.renderer.setStyle(this.el.nativeElement, "border", null);
                    }
                };
                HighlightDirective.prototype.onEnter = function () {
                    this.renderer.setStyle(this.el.nativeElement, "fontWeight", "bold");
                };
                HighlightDirective.prototype.onLeave = function () {
                    this.renderer.setStyle(this.el.nativeElement, "fontWeight", null);
                };
                return HighlightDirective;
            }());
            HighlightDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("appHighlight")
            ], HighlightDirective.prototype, "mark", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("dblclick")
            ], HighlightDirective.prototype, "onClick", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseenter")
            ], HighlightDirective.prototype, "onEnter", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseleave")
            ], HighlightDirective.prototype, "onLeave", null);
            HighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: "[appHighlight]"
                })
            ], HighlightDirective);
            /***/ 
        }),
        /***/ "./src/app/directives/info.directive.ts": 
        /*!**********************************************!*\
          !*** ./src/app/directives/info.directive.ts ***!
          \**********************************************/
        /*! exports provided: InfoDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoDirective", function () { return InfoDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_data_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data-handler.service */ "./src/app/service/data-handler.service.ts");
            var InfoDirective = /** @class */ (function () {
                function InfoDirective(renderer, el, dataHandler) {
                    this.renderer = renderer;
                    this.el = el;
                    this.dataHandler = dataHandler;
                    this.flag = true;
                    this.tr = [];
                    this.td = [];
                    this.tdKey = [];
                }
                InfoDirective.prototype.onClick = function () {
                    this.keys = Object.keys(this.obj);
                    this.values = Object.values(this.obj);
                    if (this.flag) {
                        for (var i = 0; i < this.keys.length; i++) {
                            this.tr[i] = this.renderer.createElement("tr");
                            this.td[i] = this.renderer.createElement("td");
                            this.tdKey[i] = this.renderer.createElement("td");
                            this.tdKey[i].textContent = this.keys[i].toUpperCase() + ":  ";
                            this.td[i].textContent = "" + this.values[i];
                            this.renderer.addClass(this.tr[i], "table-info");
                            this.renderer.setAttribute(this.tdKey[i], "colspan", "2");
                            this.renderer.setAttribute(this.td[i], "colspan", "6");
                            this.renderer.setStyle(this.td[i], "textAlign", "left");
                            this.renderer.appendChild(this.tr[i], this.tdKey[i]);
                            this.renderer.appendChild(this.tr[i], this.td[i]);
                            this.renderer.appendChild(this.el.nativeElement, this.tr[i]);
                        }
                    }
                    else {
                        for (var i = 0; i < this.keys.length; i++) {
                            this.renderer.removeChild(this.el.nativeElement, this.tr[i]);
                        }
                    }
                    this.flag = !this.flag;
                };
                return InfoDirective;
            }());
            InfoDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _service_data_handler_service__WEBPACK_IMPORTED_MODULE_2__["DataHandlerService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("appInfo")
            ], InfoDirective.prototype, "obj", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("dblclick")
            ], InfoDirective.prototype, "onClick", null);
            InfoDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: "[appInfo]"
                })
            ], InfoDirective);
            /***/ 
        }),
        /***/ "./src/app/edit.guard.ts": 
        /*!*******************************!*\
          !*** ./src/app/edit.guard.ts ***!
          \*******************************/
        /*! exports provided: EditGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGuard", function () { return EditGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _service_data_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/data-handler.service */ "./src/app/service/data-handler.service.ts");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/data.service */ "./src/app/service/data.service.ts");
            var EditGuard = /** @class */ (function () {
                function EditGuard(dataHandler, mData, router) {
                    this.dataHandler = dataHandler;
                    this.mData = mData;
                    this.router = router;
                }
                EditGuard.prototype.canActivate = function (route, state) {
                    var _this = this;
                    var tmp;
                    // если перешли на редактирование студента сразу по ссылке в url, а не по кнопке
                    // если перешли сразу по ссылке, то allStuds еще пустой.
                    if (!this.mData.getHardStudents()) {
                        return this.mData.getStudents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (students) {
                            tmp = students.find(function (student) { return student.id.toString() === route.params.id; });
                            if (tmp) {
                                if (tmp.averageMark === 5) {
                                    _this.router.navigate([""], { queryParams: { mark: false } });
                                }
                                return true;
                            }
                            _this.router.navigate([""], { queryParams: { student: false } });
                        }));
                    }
                    // тут уже если перешли по кнопке
                    tmp = this.mData.getHardStudents().find(function (student) { return student.id.toString() === route.params.id; });
                    if (tmp) {
                        if (tmp.averageMark === 5) {
                            this.router.navigate([""], { queryParams: { mark: false } });
                        }
                        return true;
                    }
                    this.router.navigate([""], { queryParams: { student: false } });
                };
                EditGuard.prototype.canActivateChild = function (childRoute, state) {
                    return this.canActivate(childRoute, state);
                };
                return EditGuard;
            }());
            EditGuard.ctorParameters = function () { return [
                { type: _service_data_handler_service__WEBPACK_IMPORTED_MODULE_4__["DataHandlerService"] },
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_5__["Data"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            EditGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
            ], EditGuard);
            /***/ 
        }),
        /***/ "./src/app/error-pages/error500-page/error500-page.component.less": 
        /*!************************************************************************!*\
          !*** ./src/app/error-pages/error500-page/error500-page.component.less ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".error__img {\n  background-repeat: no-repeat;\n  -webkit-filter: grayscale(60%);\n          filter: grayscale(60%);\n}\n.container {\n  position: relative;\n  max-width: 1200px;\n  height: 90vh;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #E1E3E0;\n  border-radius: 15px;\n  font-family: 'Roboto', sans-serif;\n}\n.container .error {\n  width: 50%;\n  height: 50%;\n  min-width: 600px;\n  margin: auto;\n  color: #E1E3E0;\n  text-align: center;\n  font-size: 3rem;\n}\n.container .error__header {\n  display: flex;\n  justify-content: space-evenly;\n  vertical-align: center;\n  text-align: center;\n  font-size: 200%;\n  font-weight: bold;\n  color: rgba(101, 36, 38, 0.76);\n  border: 2px solid rgba(101, 36, 38, 0.76);\n  -webkit-filter: grayscale(40%);\n          filter: grayscale(40%);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  padding: 1.2rem;\n}\n.container .error__text {\n  font-weight: bold;\n  color: #E1E3E0;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background-color: rgba(101, 36, 38, 0.76);\n  -webkit-filter: grayscale(40%);\n          filter: grayscale(40%);\n}\n.container .error__code {\n  margin: 0.5rem 0;\n  border-bottom: 4px solid rgba(101, 36, 38, 0.76);\n}\n.container .error__info {\n  padding: 1.5rem 0;\n  text-align: left;\n  color: #48181a;\n  font-size: 1.1rem;\n}\n.container .error__link {\n  display: block;\n  text-align: left;\n  left: 0;\n  margin: 1rem 0;\n}\n.container .error__link a {\n  color: #d04915;\n}\n.container .error__link a:hover {\n  font-weight: bold;\n}\n.container .error__details {\n  position: absolute;\n  display: block;\n  left: 0;\n  bottom: 0;\n  margin-left: 2%;\n  color: #999;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3ItcGFnZXMvZXJyb3I1MDAtcGFnZS9EOi9OQ3Jja3IvSFcgQW5ndWxhciBUUy9zdHVkLXRhYmxlL3NyYy9hcHAvZXJyb3ItcGFnZXMvZXJyb3I1MDAtcGFnZS9lcnJvcjUwMC1wYWdlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9lcnJvci1wYWdlcy9lcnJvcjUwMC1wYWdlL2Vycm9yNTAwLXBhZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSw0QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNORjtBRFNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQ0FBQTtBQ1RGO0FESkE7RUFnQkksVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7RUFDQSxlQUFBO0FDVko7QURZSTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDVk47QURZSTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNWTjtBRGFJO0VBQ0UsZ0JBQUE7RUFDQSxnREFBQTtBQ1hOO0FEYUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDWE47QURjSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUVBLE9BQUE7RUFDQSxjQUFBO0FDYk47QURjTTtFQUNFLGNBQUE7QUNaUjtBRGFRO0VBQ0UsaUJBQUE7QUNYVjtBRGVJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ2JOIiwiZmlsZSI6InNyYy9hcHAvZXJyb3ItcGFnZXMvZXJyb3I1MDAtcGFnZS9lcnJvcjUwMC1wYWdlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQG9yYW5nZTogI0Y1NjQzMztcbkBsaWdodF9vcmFuZ2U6IHJnYmEoMjQ1LCAxMDAsIDUxLCAwLjU4KTtcbkBiZ3JvdW5kOiAjRTFFM0UwO1xuQHRleHQtZ3JleTogIzdmNzM2NTtcbkBib3JkbzogcmdiYSgxMDEsIDM2LCAzOCwgMC43Nik7XG4vL0Bib3JkbzogcmdiYSgxNTMsIDQwLCA0MiwgMC43Nik7XG5cbi5lcnJvcl9faW1nIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZmlsdGVyOiBncmF5c2NhbGUoNjAlKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIGhlaWdodDogOTB2aDtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IEBiZ3JvdW5kO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcblxuICAuZXJyb3Ige1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgbWluLXdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgY29sb3I6IEBiZ3JvdW5kO1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcblxuICAgICZfX2hlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAyMDAlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogQGJvcmRvO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgQGJvcmRvO1xuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoNDAlKTtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICAgIHBhZGRpbmc6IDEuMnJlbTtcbiAgICB9XG4gICAgJl9fdGV4dCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiBAYmdyb3VuZDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IEBib3JkbztcbiAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDQwJSk7XG5cbiAgICB9XG4gICAgJl9fY29kZSB7XG4gICAgICBtYXJnaW46IDAuNXJlbSAwO1xuICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIEBib3JkbztcbiAgICB9XG4gICAgJl9faW5mbyB7XG4gICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBjb2xvcjogIzQ4MTgxYTtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cblxuICAgICZfX2xpbmsge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICBsZWZ0OiAwO1xuICAgICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgICAmIGEge1xuICAgICAgICBjb2xvcjogcmdiKDIwOCwgNzMsIDIxKTtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJl9fZGV0YWlscyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgICBjb2xvcjogIzk5OTtcbiAgICB9XG4gIH1cbn1cbiIsIi5lcnJvcl9faW1nIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZmlsdGVyOiBncmF5c2NhbGUoNjAlKTtcbn1cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBoZWlnaHQ6IDkwdmg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UxRTNFMDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuLmNvbnRhaW5lciAuZXJyb3Ige1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgbWluLXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogI0UxRTNFMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDNyZW07XG59XG4uY29udGFpbmVyIC5lcnJvcl9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMDAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJnYmEoMTAxLCAzNiwgMzgsIDAuNzYpO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEwMSwgMzYsIDM4LCAwLjc2KTtcbiAgZmlsdGVyOiBncmF5c2NhbGUoNDAlKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDEuMnJlbTtcbn1cbi5jb250YWluZXIgLmVycm9yX190ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRTFFM0UwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDEsIDM2LCAzOCwgMC43Nik7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDQwJSk7XG59XG4uY29udGFpbmVyIC5lcnJvcl9fY29kZSB7XG4gIG1hcmdpbjogMC41cmVtIDA7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCByZ2JhKDEwMSwgMzYsIDM4LCAwLjc2KTtcbn1cbi5jb250YWluZXIgLmVycm9yX19pbmZvIHtcbiAgcGFkZGluZzogMS41cmVtIDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjNDgxODFhO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi5jb250YWluZXIgLmVycm9yX19saW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuLmNvbnRhaW5lciAuZXJyb3JfX2xpbmsgYSB7XG4gIGNvbG9yOiAjZDA0OTE1O1xufVxuLmNvbnRhaW5lciAuZXJyb3JfX2xpbmsgYTpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuZXJyb3JfX2RldGFpbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgY29sb3I6ICM5OTk7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/error-pages/error500-page/error500-page.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/error-pages/error500-page/error500-page.component.ts ***!
          \**********************************************************************/
        /*! exports provided: Error500PageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error500PageComponent", function () { return Error500PageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var Error500PageComponent = /** @class */ (function () {
                function Error500PageComponent(route) {
                    this.route = route;
                }
                Error500PageComponent.prototype.ngOnInit = function () {
                    this.status = this.route.snapshot.queryParams.status;
                    this.statusText = this.route.snapshot.queryParams.statusText;
                    this.url = this.route.snapshot.queryParams.url;
                    console.log(this.status);
                };
                return Error500PageComponent;
            }());
            Error500PageComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            Error500PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-error500-page",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error500-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/error-pages/error500-page/error500-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error500-page.component.less */ "./src/app/error-pages/error500-page/error500-page.component.less")).default]
                })
            ], Error500PageComponent);
            /***/ 
        }),
        /***/ "./src/app/error-pages/page-not-found/page-not-found.component.less": 
        /*!**************************************************************************!*\
          !*** ./src/app/error-pages/page-not-found/page-not-found.component.less ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".svg {\n  margin: 1.1rem 0;\n  background: url('404.svg');\n  background-repeat: no-repeat;\n  width: 130px;\n  height: 150px;\n}\n.container {\n  position: relative;\n  max-width: 1200px;\n  height: 90vh;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #E1E3E0;\n  border-radius: 15px;\n  font-family: 'Roboto', sans-serif;\n}\n.container .error {\n  width: 50%;\n  height: 50%;\n  min-width: 600px;\n  margin: auto;\n  color: #E1E3E0;\n  text-align: center;\n  font-size: 3rem;\n}\n.container .error__header {\n  display: flex;\n  justify-content: space-evenly;\n  vertical-align: center;\n  text-align: center;\n  font-size: 200%;\n  font-weight: bold;\n  color: rgba(153, 40, 42, 0.76);\n  border: 2px solid rgba(153, 40, 42, 0.76);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  padding: 1.2rem;\n}\n.container .error__text {\n  font-weight: bold;\n  color: #E1E3E0;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background-color: rgba(153, 40, 42, 0.76);\n}\n.container .error__code {\n  margin: 0.5rem 0;\n  border-bottom: 4px solid rgba(153, 40, 42, 0.76);\n}\n.container .error__link {\n  display: block;\n  text-align: left;\n  font-size: 1rem;\n  left: 0;\n}\n.container .error__link a {\n  margin-left: 1.2rem;\n  color: rgba(153, 40, 42, 0.76);\n}\n.container .error__link a:hover {\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3ItcGFnZXMvcGFnZS1ub3QtZm91bmQvRDovTkNyY2tyL0hXIEFuZ3VsYXIgVFMvc3R1ZC10YWJsZS9zcmMvYXBwL2Vycm9yLXBhZ2VzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9lcnJvci1wYWdlcy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDTEY7QURTQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBSUEsaUNBQUE7QUNYRjtBREpBO0VBa0JJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSxZQUFBO0VBQ0EsY0FBQTtFQUdBLGtCQUFBO0VBQ0EsZUFBQTtBQ2RKO0FEZ0JJO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ2ROO0FEZ0JJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHlDQUFBO0FDZE47QURpQkk7RUFDRSxnQkFBQTtFQUNBLGdEQUFBO0FDZk47QURrQkk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtBQ2hCTjtBRGlCTTtFQUNFLG1CQUFBO0VBRUEsOEJBQUE7QUNoQlI7QURpQlE7RUFDRSxpQkFBQTtBQ2ZWIiwiZmlsZSI6InNyYy9hcHAvZXJyb3ItcGFnZXMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAb3JhbmdlOiAjRjU2NDMzO1xuQGxpZ2h0X29yYW5nZTogcmdiYSgyNDUsIDEwMCwgNTEsIDAuNTgpO1xuQGJncm91bmQ6ICNFMUUzRTA7XG5AdGV4dC1ncmV5OiAjN2Y3MzY1O1xuQGJvcmRvOiByZ2JhKDE1MywgNDAsIDQyLCAwLjc2KTtcblxuLnN2ZyB7XG4gIG1hcmdpbjogMS4xcmVtIDA7XG4gIGJhY2tncm91bmQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nLzQwNC5zdmcnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuXG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBoZWlnaHQ6IDkwdmg7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmdyb3VuZDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcblxuIC8vIG1hcmdpbjogMCBhdXRvO1xuXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcblxuICAuZXJyb3Ige1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgbWluLXdpZHRoOiA2MDBweDtcbiAgICAvL21pbi1oZWlnaHQ6IDYwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBjb2xvcjogQGJncm91bmQ7XG5cbiAgICAvL2JvcmRlcjogMnB4IHNvbGlkIEBvcmFuZ2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcblxuICAgICZfX2hlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAyMDAlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogQGJvcmRvO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgQGJvcmRvO1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgICAgcGFkZGluZzogMS4ycmVtO1xuICAgIH1cbiAgICAmX190ZXh0IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6IEBiZ3JvdW5kO1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogQGJvcmRvO1xuXG4gICAgfVxuICAgICZfX2NvZGUge1xuICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCBAYm9yZG87XG4gICAgfVxuXG4gICAgJl9fbGluayB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBsZWZ0OiAwO1xuICAgICAgJiBhIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEuMnJlbTtcbiAgICAgICAgLy90ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBAYm9yZG87XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIuc3ZnIHtcbiAgbWFyZ2luOiAxLjFyZW0gMDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nLzQwNC5zdmcnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIGhlaWdodDogOTB2aDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFFM0UwO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG4uY29udGFpbmVyIC5lcnJvciB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xuICBtaW4td2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGNvbG9yOiAjRTFFM0UwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cbi5jb250YWluZXIgLmVycm9yX19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmdiYSgxNTMsIDQwLCA0MiwgMC43Nik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTUzLCA0MCwgNDIsIDAuNzYpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogMS4ycmVtO1xufVxuLmNvbnRhaW5lciAuZXJyb3JfX3RleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNFMUUzRTA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgNDAsIDQyLCAwLjc2KTtcbn1cbi5jb250YWluZXIgLmVycm9yX19jb2RlIHtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHJnYmEoMTUzLCA0MCwgNDIsIDAuNzYpO1xufVxuLmNvbnRhaW5lciAuZXJyb3JfX2xpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsZWZ0OiAwO1xufVxuLmNvbnRhaW5lciAuZXJyb3JfX2xpbmsgYSB7XG4gIG1hcmdpbi1sZWZ0OiAxLjJyZW07XG4gIGNvbG9yOiByZ2JhKDE1MywgNDAsIDQyLCAwLjc2KTtcbn1cbi5jb250YWluZXIgLmVycm9yX19saW5rIGE6aG92ZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/error-pages/page-not-found/page-not-found.component.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/error-pages/page-not-found/page-not-found.component.ts ***!
          \************************************************************************/
        /*! exports provided: PageNotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () { return PageNotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageNotFoundComponent = /** @class */ (function () {
                function PageNotFoundComponent() {
                }
                PageNotFoundComponent.prototype.ngOnInit = function () {
                };
                return PageNotFoundComponent;
            }());
            PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-page-not-found",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/error-pages/page-not-found/page-not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.less */ "./src/app/error-pages/page-not-found/page-not-found.component.less")).default]
                })
            ], PageNotFoundComponent);
            /***/ 
        }),
        /***/ "./src/app/model/students.ts": 
        /*!***********************************!*\
          !*** ./src/app/model/students.ts ***!
          \***********************************/
        /*! exports provided: Student */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function () { return Student; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Student = /** @class */ (function () {
                function Student(id, lastName, firstName, middleName, birthday, averageMark, info) {
                    if (id === void 0) { id = 0; }
                    if (lastName === void 0) { lastName = ""; }
                    if (firstName === void 0) { firstName = ""; }
                    if (middleName === void 0) { middleName = ""; }
                    if (birthday === void 0) { birthday = new Date("0000-00-00"); }
                    if (averageMark === void 0) { averageMark = 0; }
                    if (info === void 0) { info = {
                        address: "NN",
                        phone: "8 888 88888 88",
                        login: "QWerty123"
                    }; }
                    this.id = id;
                    this.lastName = lastName;
                    this.firstName = firstName;
                    this.middleName = middleName;
                    this.birthday = birthday;
                    this.averageMark = averageMark;
                    this.info = info;
                }
                return Student;
            }());
            /***/ 
        }),
        /***/ "./src/app/pipes/date-years.pipe.ts": 
        /*!******************************************!*\
          !*** ./src/app/pipes/date-years.pipe.ts ***!
          \******************************************/
        /*! exports provided: DateYearsPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateYearsPipe", function () { return DateYearsPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DateYearsPipe = /** @class */ (function () {
                function DateYearsPipe() {
                }
                DateYearsPipe.prototype.transform = function (value) {
                    var nowDate = new Date();
                    var date = value.trim().split(".");
                    var valueDate = new Date(parseInt(date[2], 10), parseInt(date[1], 10) - 1, parseInt(date[0], 10));
                    if (nowDate.getMonth() - valueDate.getMonth() < 0) {
                        return value + " (" + (nowDate.getFullYear() - valueDate.getFullYear() - 1).toString() + ")";
                    }
                    if (nowDate.getMonth() - valueDate.getMonth() > 0) {
                        return value + " (" + (nowDate.getFullYear() - valueDate.getFullYear()).toString() + ") ";
                    }
                    if (nowDate.getMonth() - valueDate.getMonth() === 0) {
                        if (nowDate.getDate() - valueDate.getDate() < 0) {
                            return value + " (" + (nowDate.getFullYear() - valueDate.getFullYear() - 1).toString() + ") ";
                        }
                        if (nowDate.getDate() - valueDate.getDate() >= 0) {
                            return value + " (" + (nowDate.getFullYear() - valueDate.getFullYear()).toString() + ")";
                        }
                        return value + " (" + (nowDate.getFullYear() - valueDate.getFullYear()).toString() + ")";
                    }
                };
                return DateYearsPipe;
            }());
            DateYearsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: "dateYears"
                })
            ], DateYearsPipe);
            /***/ 
        }),
        /***/ "./src/app/pipes/filter.pipe.ts": 
        /*!**************************************!*\
          !*** ./src/app/pipes/filter.pipe.ts ***!
          \**************************************/
        /*! exports provided: FilterPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function () { return FilterPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FilterPipe = /** @class */ (function () {
                function FilterPipe() {
                }
                FilterPipe.prototype.transform = function (students, search) {
                    if (search === void 0) { search = ""; }
                    if (typeof search === "string") {
                        if (!search.trim()) {
                            return students;
                        }
                    }
                    return students.filter(function (student) {
                        return student.lastName.toLowerCase().includes(search.toLowerCase());
                    });
                };
                return FilterPipe;
            }());
            FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: "filter"
                })
            ], FilterPipe);
            /***/ 
        }),
        /***/ "./src/app/pipes/format-mark.pipe.ts": 
        /*!*******************************************!*\
          !*** ./src/app/pipes/format-mark.pipe.ts ***!
          \*******************************************/
        /*! exports provided: FormatMarkPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatMarkPipe", function () { return FormatMarkPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FormatMarkPipe = /** @class */ (function () {
                function FormatMarkPipe() {
                }
                FormatMarkPipe.prototype.transform = function (mark, type) {
                    if (type === void 0) { type = "percent"; }
                    switch (type) {
                        case "percent":
                            return mark * (100 / 5) + "%  (" + mark + ")";
                        case "UK":
                            return (mark * (12 / 5)).toFixed(2).toString() + (" (" + mark + ")");
                        case "RU":
                            return mark.toString();
                    }
                    return mark.toString();
                };
                return FormatMarkPipe;
            }());
            FormatMarkPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: "formatMark"
                })
            ], FormatMarkPipe);
            /***/ 
        }),
        /***/ "./src/app/pipes/good-mark.pipe.ts": 
        /*!*****************************************!*\
          !*** ./src/app/pipes/good-mark.pipe.ts ***!
          \*****************************************/
        /*! exports provided: GoodMarkPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodMarkPipe", function () { return GoodMarkPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var GoodMarkPipe = /** @class */ (function () {
                function GoodMarkPipe() {
                }
                GoodMarkPipe.prototype.transform = function (value) {
                    if (value >= 4.5) {
                        return " <i class=\"fas fa-gift\"></i>";
                    }
                };
                return GoodMarkPipe;
            }());
            GoodMarkPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: "goodMark"
                })
            ], GoodMarkPipe);
            /***/ 
        }),
        /***/ "./src/app/service/data-handler.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/service/data-handler.service.ts ***!
          \*************************************************/
        /*! exports provided: DataHandlerService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataHandlerService", function () { return DataHandlerService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _data_test_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/test-data */ "./src/app/data/test-data.ts");
            /* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.service */ "./src/app/service/data.service.ts");
            var DataHandlerService = /** @class */ (function (_super) {
                __extends(DataHandlerService, _super);
                function DataHandlerService() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                DataHandlerService.prototype.getStudents = function () {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_data_test_data__WEBPACK_IMPORTED_MODULE_3__["TestData"].students);
                };
                DataHandlerService.prototype.getHardStudents = function () {
                    return _data_test_data__WEBPACK_IMPORTED_MODULE_3__["TestData"].students;
                };
                Object.defineProperty(DataHandlerService.prototype, "lastId", {
                    get: function () {
                        var maxId = 0;
                        _data_test_data__WEBPACK_IMPORTED_MODULE_3__["TestData"].students.forEach(function (student) {
                            if (student.id > maxId) {
                                maxId = student.id;
                            }
                        });
                        return maxId;
                    },
                    set: function (id) {
                        this.lastID = id;
                    },
                    enumerable: true,
                    configurable: true
                });
                DataHandlerService.prototype.pushOnHard = function (student) {
                    this.lastId = student.id;
                    _data_test_data__WEBPACK_IMPORTED_MODULE_3__["TestData"].students.push(student);
                };
                DataHandlerService.prototype.addStudent = function (student) {
                    // TestData.students.push(student);
                    // this.lastId = student.id;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(student);
                };
                DataHandlerService.prototype.deleteStudent = function (stud) {
                    _data_test_data__WEBPACK_IMPORTED_MODULE_3__["TestData"].students = _data_test_data__WEBPACK_IMPORTED_MODULE_3__["TestData"].students.filter(function (student) { return student !== stud; });
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_data_test_data__WEBPACK_IMPORTED_MODULE_3__["TestData"].students);
                };
                DataHandlerService.prototype.editStudent = function (stud) {
                    var find = _data_test_data__WEBPACK_IMPORTED_MODULE_3__["TestData"].students.find(function (student) {
                        return student.id === stud.id;
                    });
                    find.lastName = stud.lastName;
                    find.firstName = stud.firstName;
                    find.middleName = stud.middleName;
                    find.birthday = stud.birthday;
                    find.averageMark = stud.averageMark;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_data_test_data__WEBPACK_IMPORTED_MODULE_3__["TestData"].students);
                };
                return DataHandlerService;
            }(_data_service__WEBPACK_IMPORTED_MODULE_4__["Data"]));
            DataHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: "root",
                })
            ], DataHandlerService);
            /***/ 
        }),
        /***/ "./src/app/service/data-server.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/service/data-server.service.ts ***!
          \************************************************/
        /*! exports provided: DataServerService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServerService", function () { return DataServerService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.service */ "./src/app/service/data.service.ts");
            var DataServerService = /** @class */ (function (_super) {
                __extends(DataServerService, _super);
                function DataServerService(http) {
                    var _this = _super.call(this) || this;
                    _this.http = http;
                    return _this;
                }
                DataServerService.prototype.pushOnHard = function (student) {
                    this.lastId = student.id;
                    this.allStuds.push(student);
                };
                DataServerService.prototype.addStudent = function (student) {
                    // this.lastId = student.id;
                    // this.allStuds.push(student);
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/items", student);
                };
                DataServerService.prototype.deleteStudent = function (stud) {
                    return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/items/" + stud.id);
                };
                DataServerService.prototype.getStudents = function () {
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/items");
                };
                DataServerService.prototype.getHardStudents = function () {
                    return this.allStuds;
                };
                DataServerService.prototype.editStudent = function (student) {
                    return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/items/" + student.id, student);
                };
                Object.defineProperty(DataServerService.prototype, "lastId", {
                    get: function () {
                        return this.lastID;
                    },
                    set: function (id) {
                        this.lastID = id;
                    },
                    enumerable: true,
                    configurable: true
                });
                return DataServerService;
            }(_data_service__WEBPACK_IMPORTED_MODULE_4__["Data"]));
            DataServerService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
            ]; };
            DataServerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: "root" })
            ], DataServerService);
            /***/ 
        }),
        /***/ "./src/app/service/data.factory.ts": 
        /*!*****************************************!*\
          !*** ./src/app/service/data.factory.ts ***!
          \*****************************************/
        /*! exports provided: serviceFactory */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceFactory", function () { return serviceFactory; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _data_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-handler.service */ "./src/app/service/data-handler.service.ts");
            /* harmony import */ var _data_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-server.service */ "./src/app/service/data-server.service.ts");
            var serviceFactory = function (route, http) {
                var tmp = route.snapshot.queryParams.debug;
                if (!!tmp) {
                    return new _data_handler_service__WEBPACK_IMPORTED_MODULE_1__["DataHandlerService"]();
                }
                return new _data_server_service__WEBPACK_IMPORTED_MODULE_2__["DataServerService"](http);
            };
            /***/ 
        }),
        /***/ "./src/app/service/data.service.ts": 
        /*!*****************************************!*\
          !*** ./src/app/service/data.service.ts ***!
          \*****************************************/
        /*! exports provided: Data */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function () { return Data; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var Data = /** @class */ (function () {
                function Data() {
                    this.onInit = false;
                }
                return Data;
            }());
            Data = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
            ], Data);
            /***/ 
        }),
        /***/ "./src/app/view/my.validators.ts": 
        /*!***************************************!*\
          !*** ./src/app/view/my.validators.ts ***!
          \***************************************/
        /*! exports provided: MyValidators */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyValidators", function () { return MyValidators; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var MyValidators = /** @class */ (function () {
                function MyValidators() {
                }
                MyValidators.restrictedFIO = function (group) {
                    var lastName = group.get("lastName").value;
                    var firstName = group.get("firstName").value;
                    var middleName = group.get("middleName").value;
                    if ((lastName === firstName || firstName === middleName) && firstName) {
                        return { "restrictedFio": true };
                    }
                    return null;
                };
                MyValidators.restrictedDate = function (control) {
                    var birthday = new Date(control.value);
                    var nowDate = new Date();
                    var flag = false;
                    // 315360000000 + 172800000 миллисекунд = 10 лет + 2 дня из двух високосных годов
                    if (nowDate.getTime() - birthday.getTime() < (315360000000 + 172800000)) {
                        flag = true;
                    }
                    if (flag) {
                        return { "restrictedDate": true };
                    }
                    return null;
                };
                return MyValidators;
            }());
            /***/ 
        }),
        /***/ "./src/app/view/students/stud-forms/add-form/add-form.component.less": 
        /*!***************************************************************************!*\
          !*** ./src/app/view/students/stud-forms/add-form/add-form.component.less ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".bground {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-animation: bgroundIn 0.2s;\n          animation: bgroundIn 0.2s;\n}\n@-webkit-keyframes bgroundIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes bgroundIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  max-width: 500px;\n  margin: 0 auto;\n  -webkit-animation: containerIn 0.2s;\n          animation: containerIn 0.2s;\n}\n@-webkit-keyframes containerIn {\n  from {\n    opacity: 0;\n    transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes containerIn {\n  from {\n    opacity: 0;\n    transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form {\n  padding: 1rem;\n  border: 1px dotted #ccc;\n  margin: 0.7rem 0;\n  background-color: #fff;\n  font-family: 'Roboto', sans-serif;\n  color: #5b2816;\n}\n.form .close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 2rem;\n  margin: 0.5rem;\n  color: rgba(126, 50, 25, 0.49);\n  outline: none;\n  cursor: pointer;\n}\n.form-control {\n  display: block;\n  margin-top: 0.3rem;\n  margin-bottom: 0.5rem;\n  margin-left: 0.5rem;\n}\n.form-control label {\n  display: block;\n  font-weight: bold;\n  font-size: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 0.3rem;\n}\n.form-control input {\n  outline: none;\n  border: 0;\n  border-bottom: 1px solid #ccc;\n  padding: 0.5rem 0;\n  color: #5b2816;\n}\n.form-control input.ng-invalid.ng-touched {\n  border-bottom: 1px solid red;\n  background-color: rgba(255, 0, 0, 0.35);\n}\n.form-button {\n  outline: none;\n  border: 1px solid #fff;\n  border-radius: 5px;\n  color: #fff;\n  background-color: rgba(122, 48, 23, 0.5);\n  cursor: no-drop;\n  margin-top: 1.5rem;\n  padding: 0.5rem 1rem;\n  font-weight: bold;\n  transition: 0.2s ease-out;\n}\n.form-button_enabled,\n.form-button_enabled:hover {\n  background-color: #F56433;\n  cursor: pointer;\n}\n.form .validation {\n  color: darkred;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9zdHVkZW50cy9zdHVkLWZvcm1zL2FkZC1mb3JtL0Q6L05DcmNrci9IVyBBbmd1bGFyIFRTL3N0dWQtdGFibGUvc3JjL2FwcC92aWV3L3N0dWRlbnRzL3N0dWQtZm9ybXMvYWRkLWZvcm0vYWRkLWZvcm0uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3ZpZXcvc3R1ZGVudHMvc3R1ZC1mb3Jtcy9hZGQtZm9ybS9hZGQtZm9ybS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBRUEsaUNBQUE7VUFBQSx5QkFBQTtBQ05GO0FEUUU7RUFDRTtJQUNFLFVBQUE7RUNOSjtFRFFFO0lBQ0UsVUFBQTtFQ05KO0FBQ0Y7QURBRTtFQUNFO0lBQ0UsVUFBQTtFQ05KO0VEUUU7SUFDRSxVQUFBO0VDTko7QUFDRjtBRFVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBRUEsbUNBQUE7VUFBQSwyQkFBQTtBQ1RGO0FEV0U7RUFDRTtJQUNFLFVBQUE7SUFDQSw2QkFBQTtFQ1RKO0VEWUU7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUNWSjtBQUNGO0FEQ0U7RUFDRTtJQUNFLFVBQUE7SUFDQSw2QkFBQTtFQ1RKO0VEWUU7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUNWSjtBQUNGO0FEZUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUVBLHNCQUFBO0VBRUEsaUNBQUE7RUFDQSxjQUFBO0FDZkY7QURPQTtFQVdJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUVBLGVBQUE7QUNoQko7QURtQkU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDakJKO0FEYUU7RUFPSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ2pCTjtBRE1FO0VBZUksYUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ2xCTjtBRG9CTTtFQUNFLDRCQUFBO0VBQ0EsdUNBQUE7QUNsQlI7QUR1QkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSx3Q0FBQTtFQUNBLGVBQUE7RUFFQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFFQSx5QkFBQTtBQ3hCSjtBRDBCSTs7RUFFRSx5QkFBQTtFQUNBLGVBQUE7QUN4Qk47QUQ1Q0E7RUEwRUksY0FBQTtBQzNCSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvc3R1ZGVudHMvc3R1ZC1mb3Jtcy9hZGQtZm9ybS9hZGQtZm9ybS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBvcmFuZ2U6ICNGNTY0MzM7XG5AbGlnaHRfb3JhbmdlOiByZ2JhKDI0NSwgMTAwLCA1MSwgMC41OCk7XG5Ab3JhbmdlX3RleHQ6ICM1YjI4MTY7XG5AdGV4dC1ncmV5OiAjN2Y3MzY1O1xuXG5cbi5iZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcblxuICBhbmltYXRpb246IGJncm91bmRJbiAuMnM7XG5cbiAgQGtleWZyYW1lcyBiZ3JvdW5kSW4ge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcblxuICBhbmltYXRpb246IGNvbnRhaW5lckluIC4ycztcblxuICBAa2V5ZnJhbWVzIGNvbnRhaW5lckluIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcblxuICAgIH1cbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgfVxuXG59XG5cbi5mb3JtIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiAxcHggZG90dGVkICNjY2M7XG4gIG1hcmdpbjogLjdyZW0gMDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6IEBvcmFuZ2VfdGV4dDtcblxuICAuY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbjogLjVyZW07XG4gICAgY29sb3I6IHJnYmEoMTI2LCA1MCwgMjUsIDAuNDkpO1xuICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAmLWNvbnRyb2wge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IC4zcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcblxuICAgIGxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogLjNyZW07XG4gICAgfVxuXG4gICAgaW5wdXQge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgcGFkZGluZzogLjVyZW0gMDtcbiAgICAgIGNvbG9yOiBAb3JhbmdlX3RleHQ7XG5cbiAgICAgICYubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMzUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYtYnV0dG9uIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjIsIDQ4LCAyMywgMC41KTtcbiAgICBjdXJzb3I6IG5vLWRyb3A7XG5cbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIHRyYW5zaXRpb246IC4ycyBlYXNlLW91dDtcblxuICAgICZfZW5hYmxlZCxcbiAgICAmX2VuYWJsZWQ6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG9yYW5nZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuXG4gIC52YWxpZGF0aW9uIHtcbiAgICBjb2xvcjogZGFya3JlZDtcbiAgfVxufVxuIiwiLmJncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBhbmltYXRpb246IGJncm91bmRJbiAwLjJzO1xufVxuQGtleWZyYW1lcyBiZ3JvdW5kSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBhbmltYXRpb246IGNvbnRhaW5lckluIDAuMnM7XG59XG5Aa2V5ZnJhbWVzIGNvbnRhaW5lckluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5mb3JtIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiAxcHggZG90dGVkICNjY2M7XG4gIG1hcmdpbjogMC43cmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM1YjI4MTY7XG59XG4uZm9ybSAuY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIGNvbG9yOiByZ2JhKDEyNiwgNTAsIDI1LCAwLjQ5KTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAwLjNyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cbi5mb3JtLWNvbnRyb2wgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xufVxuLmZvcm0tY29udHJvbCBpbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xuICBjb2xvcjogIzViMjgxNjtcbn1cbi5mb3JtLWNvbnRyb2wgaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMzUpO1xufVxuLmZvcm0tYnV0dG9uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjIsIDQ4LCAyMywgMC41KTtcbiAgY3Vyc29yOiBuby1kcm9wO1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcbn1cbi5mb3JtLWJ1dHRvbl9lbmFibGVkLFxuLmZvcm0tYnV0dG9uX2VuYWJsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjU2NDMzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9ybSAudmFsaWRhdGlvbiB7XG4gIGNvbG9yOiBkYXJrcmVkO1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/view/students/stud-forms/add-form/add-form.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/view/students/stud-forms/add-form/add-form.component.ts ***!
          \*************************************************************************/
        /*! exports provided: AddFormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFormComponent", function () { return AddFormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _stud_forms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stud-forms.component */ "./src/app/view/students/stud-forms/stud-forms.component.ts");
            var AddFormComponent = /** @class */ (function (_super) {
                __extends(AddFormComponent, _super);
                function AddFormComponent() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                AddFormComponent.prototype.ngOnInit = function () {
                    _super.prototype.ngOnInit.call(this);
                };
                AddFormComponent.prototype.submitStudent = function () {
                    var _this = this;
                    if (this.form.valid) {
                        _super.prototype.submitStudent.call(this);
                        this.enableBtn = false;
                        this.addStudent$ = this.mData.addStudent(this.newStudent)
                            .subscribe(function () {
                            _this.mData.pushOnHard(_this.newStudent);
                            _this.form.reset();
                            _this.closeAddForm();
                        });
                    }
                };
                AddFormComponent.prototype.closeAddForm = function () {
                    this.router.navigate([""]);
                };
                AddFormComponent.prototype.ngOnDestroy = function () {
                    if (this.addStudent$) {
                        this.addStudent$.unsubscribe();
                        this.addStudent$ = null;
                    }
                };
                return AddFormComponent;
            }(_stud_forms_component__WEBPACK_IMPORTED_MODULE_2__["StudFormsComponent"]));
            AddFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-add-form",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/students/stud-forms/add-form/add-form.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-form.component.less */ "./src/app/view/students/stud-forms/add-form/add-form.component.less")).default]
                })
            ], AddFormComponent);
            /***/ 
        }),
        /***/ "./src/app/view/students/stud-forms/edit-form/edit-form.component.less": 
        /*!*****************************************************************************!*\
          !*** ./src/app/view/students/stud-forms/edit-form/edit-form.component.less ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".bground {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-animation: bgroundIn 0.2s;\n          animation: bgroundIn 0.2s;\n}\n@-webkit-keyframes bgroundIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes bgroundIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  max-width: 500px;\n  margin: 0 auto;\n  -webkit-animation: containerIn 0.2s linear;\n          animation: containerIn 0.2s linear;\n}\n@-webkit-keyframes containerIn {\n  from {\n    opacity: 0;\n    transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes containerIn {\n  from {\n    opacity: 0;\n    transform: translateY(-100px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes containerOut {\n  to {\n    transform: translateY(-100px);\n    opacity: 0;\n  }\n}\n@keyframes containerOut {\n  to {\n    transform: translateY(-100px);\n    opacity: 0;\n  }\n}\n.form {\n  padding: 1rem;\n  border: 1px dotted #ccc;\n  margin: 0.7rem 0;\n  background-color: #fff;\n  font-family: 'Roboto', sans-serif;\n  color: #5b2816;\n}\n.form .close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 2rem;\n  margin: 0.5rem;\n  color: rgba(126, 50, 25, 0.49);\n  cursor: pointer;\n  outline: none;\n}\n.form-control {\n  display: block;\n  margin-top: 0.3rem;\n  margin-bottom: 0.5rem;\n  margin-left: 0.5rem;\n}\n.form-control label {\n  display: block;\n  font-weight: bold;\n  font-size: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 0.3rem;\n}\n.form-control input {\n  outline: none;\n  border: 0;\n  border-bottom: 1px solid #ccc;\n  padding: 0.5rem 0;\n  color: #5b2816;\n}\n.form-control input.ng-invalid.ng-touched {\n  border-bottom: 1px solid red;\n  background-color: rgba(255, 0, 0, 0.35);\n}\n.form-button {\n  outline: none;\n  border: 1px solid #fff;\n  border-radius: 5px;\n  color: #fff;\n  background-color: rgba(122, 48, 23, 0.5);\n  cursor: no-drop;\n  margin-top: 1.5rem;\n  padding: 0.5rem 1rem;\n  font-weight: bold;\n  transition: 0.2s ease-out;\n}\n.form-button_enabled,\n.form-button_enabled:hover {\n  background-color: #F56433;\n  cursor: pointer;\n}\n.form .validation {\n  color: darkred;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9zdHVkZW50cy9zdHVkLWZvcm1zL2VkaXQtZm9ybS9EOi9OQ3Jja3IvSFcgQW5ndWxhciBUUy9zdHVkLXRhYmxlL3NyYy9hcHAvdmlldy9zdHVkZW50cy9zdHVkLWZvcm1zL2VkaXQtZm9ybS9lZGl0LWZvcm0uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3ZpZXcvc3R1ZGVudHMvc3R1ZC1mb3Jtcy9lZGl0LWZvcm0vZWRpdC1mb3JtLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFFQSxpQ0FBQTtVQUFBLHlCQUFBO0FDUEY7QURTRTtFQUNFO0lBQ0UsVUFBQTtFQ1BKO0VEU0U7SUFDRSxVQUFBO0VDUEo7QUFDRjtBRENFO0VBQ0U7SUFDRSxVQUFBO0VDUEo7RURTRTtJQUNFLFVBQUE7RUNQSjtBQUNGO0FEVUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFFQSwwQ0FBQTtVQUFBLGtDQUFBO0FDVEY7QURXRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDZCQUFBO0VDVEo7RURZRTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQ1ZKO0FBQ0Y7QURDRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDZCQUFBO0VDVEo7RURZRTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQ1ZKO0FBQ0Y7QURhRTtFQUNFO0lBQ0UsNkJBQUE7SUFDQSxVQUFBO0VDWEo7QUFDRjtBRE9FO0VBQ0U7SUFDRSw2QkFBQTtJQUNBLFVBQUE7RUNYSjtBQUNGO0FEZ0JBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxzQkFBQTtFQUVBLGlDQUFBO0VBQ0EsY0FBQTtBQ2hCRjtBRFFBO0VBYUksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFFQSxlQUFBO0VBQ0EsYUFBQTtBQ25CSjtBRHNCRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNwQko7QURnQkU7RUFPSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ3BCTjtBRFNFO0VBZUksYUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ3JCTjtBRHVCTTtFQUNFLDRCQUFBO0VBQ0EsdUNBQUE7QUNyQlI7QUR5QkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSx3Q0FBQTtFQUNBLGVBQUE7RUFFQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFFQSx5QkFBQTtBQzFCSjtBRDRCSTs7RUFFRSx5QkFBQTtFQUNBLGVBQUE7QUMxQk47QUQzQ0E7RUEyRUksY0FBQTtBQzdCSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvc3R1ZGVudHMvc3R1ZC1mb3Jtcy9lZGl0LWZvcm0vZWRpdC1mb3JtLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG5Ab3JhbmdlOiAjRjU2NDMzO1xuQGxpZ2h0X29yYW5nZTogcmdiYSgyNDUsIDEwMCwgNTEsIDAuNTgpO1xuQG9yYW5nZV90ZXh0OiAjNWIyODE2O1xuQHRleHQtZ3JleTogIzdmNzM2NTtcblxuXG4uYmdyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XG5cbiAgYW5pbWF0aW9uOiBiZ3JvdW5kSW4gLjJzO1xuXG4gIEBrZXlmcmFtZXMgYmdyb3VuZEluIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG59XG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gIGFuaW1hdGlvbjogY29udGFpbmVySW4gLjJzIGxpbmVhcjtcblxuICBAa2V5ZnJhbWVzIGNvbnRhaW5lckluIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcblxuICAgIH1cbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgY29udGFpbmVyT3V0IHtcbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5cbn1cblxuLmZvcm0ge1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IDFweCBkb3R0ZWQgI2NjYztcbiAgbWFyZ2luOiAuN3JlbSAwO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogQG9yYW5nZV90ZXh0O1xuXG5cblxuICAuY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbjogLjVyZW07XG4gICAgY29sb3I6IHJnYmEoMTI2LCA1MCwgMjUsIDAuNDkpO1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgfVxuICAmLWNvbnRyb2wge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IC4zcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcblxuICAgIGxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogLjNyZW07XG4gICAgfVxuXG4gICAgaW5wdXQge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgcGFkZGluZzogLjVyZW0gMDtcbiAgICAgIGNvbG9yOiBAb3JhbmdlX3RleHQ7XG5cbiAgICAgICYubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMzUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLWJ1dHRvbiB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogI2ZmZjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIyLCA0OCwgMjMsIDAuNSk7XG4gICAgY3Vyc29yOiBuby1kcm9wO1xuXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1vdXQ7XG5cbiAgICAmX2VuYWJsZWQsXG4gICAgJl9lbmFibGVkOmhvdmVye1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG9yYW5nZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuXG4gIC52YWxpZGF0aW9uIHtcbiAgICBjb2xvcjogZGFya3JlZDtcbiAgfVxufVxuIiwiLmJncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBhbmltYXRpb246IGJncm91bmRJbiAwLjJzO1xufVxuQGtleWZyYW1lcyBiZ3JvdW5kSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBhbmltYXRpb246IGNvbnRhaW5lckluIDAuMnMgbGluZWFyO1xufVxuQGtleWZyYW1lcyBjb250YWluZXJJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGNvbnRhaW5lck91dCB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4uZm9ybSB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlcjogMXB4IGRvdHRlZCAjY2NjO1xuICBtYXJnaW46IDAuN3JlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNWIyODE2O1xufVxuLmZvcm0gLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbjogMC41cmVtO1xuICBjb2xvcjogcmdiYSgxMjYsIDUwLCAyNSwgMC40OSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG4uZm9ybS1jb250cm9sIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcbn1cbi5mb3JtLWNvbnRyb2wgaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgY29sb3I6ICM1YjI4MTY7XG59XG4uZm9ybS1jb250cm9sIGlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjM1KTtcbn1cbi5mb3JtLWJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIyLCA0OCwgMjMsIDAuNSk7XG4gIGN1cnNvcjogbm8tZHJvcDtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XG59XG4uZm9ybS1idXR0b25fZW5hYmxlZCxcbi5mb3JtLWJ1dHRvbl9lbmFibGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1NjQzMztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvcm0gLnZhbGlkYXRpb24ge1xuICBjb2xvcjogZGFya3JlZDtcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/view/students/stud-forms/edit-form/edit-form.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/view/students/stud-forms/edit-form/edit-form.component.ts ***!
          \***************************************************************************/
        /*! exports provided: EditFormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFormComponent", function () { return EditFormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../service/data.service */ "./src/app/service/data.service.ts");
            /* harmony import */ var _stud_forms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stud-forms.component */ "./src/app/view/students/stud-forms/stud-forms.component.ts");
            var EditFormComponent = /** @class */ (function (_super) {
                __extends(EditFormComponent, _super);
                function EditFormComponent(mData, route, router) {
                    var _this = _super.call(this, mData, route, router) || this;
                    _this.mData = mData;
                    _this.route = route;
                    _this.router = router;
                    return _this;
                }
                EditFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    _super.prototype.ngOnInit.call(this);
                    var id = this.route.snapshot.params.id;
                    if (!this.mData.getHardStudents()) {
                        this.students$ = this.mData.getStudents().subscribe(function (students) {
                            _this.editStudent = students.find(function (student) { return student.id.toString() === id.toString(); });
                            _this.setEditStudent(_this.editStudent);
                        });
                    }
                    else {
                        this.editStudent = this.mData.getHardStudents().find(function (student) { return student.id.toString() === id.toString(); });
                        this.setEditStudent(this.editStudent);
                    }
                };
                EditFormComponent.prototype.formatDate = function (date) {
                    var year = date.getFullYear();
                    var MM = (date.getMonth() + 1) + "";
                    var dd = "" + date.getDate();
                    if (MM.length < 2) {
                        MM = "0" + MM;
                    }
                    if (dd.length < 2) {
                        dd = "0" + dd;
                    }
                    return [year, MM, dd].join("-");
                };
                EditFormComponent.prototype.setEditStudent = function (student) {
                    this.form.patchValue({ fio: student });
                    this.form.patchValue({ birthday: this.formatDate(new Date(student.birthday)) });
                    this.form.patchValue({ mark: student.averageMark });
                };
                EditFormComponent.prototype.closeEditForm = function () {
                    this.router.navigate([""]);
                };
                EditFormComponent.prototype.submitEditStudent = function () {
                    var _this = this;
                    if (this.form.valid) {
                        _super.prototype.submitStudent.call(this);
                        this.newStudent.id = this.editStudent.id;
                        this.enableBtn = false;
                        this.editStudent$ = this.mData.editStudent(this.newStudent)
                            .subscribe(function () {
                            // const find = this.mData.allStuds.find( student => {
                            var find = _this.mData.getHardStudents().find(function (student) {
                                return student.id === _this.editStudent.id;
                            });
                            find.lastName = _this.newStudent.lastName;
                            find.firstName = _this.newStudent.firstName;
                            find.middleName = _this.newStudent.middleName;
                            find.birthday = _this.newStudent.birthday;
                            find.averageMark = _this.newStudent.averageMark;
                            _this.router.navigate([""]);
                        });
                    }
                };
                EditFormComponent.prototype.ngOnDestroy = function () {
                    if (this.students$) {
                        this.students$.unsubscribe();
                        this.students$ = null;
                    }
                    if (this.editStudent$) {
                        this.editStudent$.unsubscribe();
                        this.editStudent$ = null;
                    }
                };
                return EditFormComponent;
            }(_stud_forms_component__WEBPACK_IMPORTED_MODULE_4__["StudFormsComponent"]));
            EditFormComponent.ctorParameters = function () { return [
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_3__["Data"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            EditFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-edit-form",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/students/stud-forms/edit-form/edit-form.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-form.component.less */ "./src/app/view/students/stud-forms/edit-form/edit-form.component.less")).default]
                })
            ], EditFormComponent);
            /***/ 
        }),
        /***/ "./src/app/view/students/stud-forms/stud-forms.component.less": 
        /*!********************************************************************!*\
          !*** ./src/app/view/students/stud-forms/stud-forms.component.less ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvc3R1ZGVudHMvc3R1ZC1mb3Jtcy9zdHVkLWZvcm1zLmNvbXBvbmVudC5sZXNzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/view/students/stud-forms/stud-forms.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/view/students/stud-forms/stud-forms.component.ts ***!
          \******************************************************************/
        /*! exports provided: StudFormsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudFormsComponent", function () { return StudFormsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _model_students__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/students */ "./src/app/model/students.ts");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/data.service */ "./src/app/service/data.service.ts");
            /* harmony import */ var _my_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../my.validators */ "./src/app/view/my.validators.ts");
            var StudFormsComponent = /** @class */ (function () {
                function StudFormsComponent(mData, route, router) {
                    this.mData = mData;
                    this.route = route;
                    this.router = router;
                    this.enableBtn = true;
                }
                StudFormsComponent.prototype.ngOnInit = function () {
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        fio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                            middleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
                        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _my_validators__WEBPACK_IMPORTED_MODULE_6__["MyValidators"].restrictedFIO]),
                        birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _my_validators__WEBPACK_IMPORTED_MODULE_6__["MyValidators"].restrictedDate]),
                        mark: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]),
                    });
                };
                StudFormsComponent.prototype.submitStudent = function () {
                    if (this.form.valid) {
                        var data = Object.assign({}, this.form.value);
                        var value = data.mark.toString().split("");
                        data.mark = +value.filter(function (el) { return el !== "," && el !== "."; }).join(".");
                        this.newStudent = new _model_students__WEBPACK_IMPORTED_MODULE_4__["Student"](this.mData.lastId + 1, data.fio.lastName, data.fio.firstName, data.fio.middleName, new Date(data.birthday), data.mark);
                    }
                };
                return StudFormsComponent;
            }());
            StudFormsComponent.ctorParameters = function () { return [
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_5__["Data"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            StudFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-stud-forms",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stud-forms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/students/stud-forms/stud-forms.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stud-forms.component.less */ "./src/app/view/students/stud-forms/stud-forms.component.less")).default]
                })
            ], StudFormsComponent);
            /***/ 
        }),
        /***/ "./src/app/view/students/stud-forms/stud-forms.module.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/view/students/stud-forms/stud-forms.module.ts ***!
          \***************************************************************/
        /*! exports provided: StudFormsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudFormsModule", function () { return StudFormsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _add_form_add_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-form/add-form.component */ "./src/app/view/students/stud-forms/add-form/add-form.component.ts");
            /* harmony import */ var _edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-form/edit-form.component */ "./src/app/view/students/stud-forms/edit-form/edit-form.component.ts");
            /* harmony import */ var _stud_forms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stud-forms.component */ "./src/app/view/students/stud-forms/stud-forms.component.ts");
            var StudFormsModule = /** @class */ (function () {
                function StudFormsModule() {
                }
                return StudFormsModule;
            }());
            StudFormsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _add_form_add_form_component__WEBPACK_IMPORTED_MODULE_5__["AddFormComponent"],
                        _edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_6__["EditFormComponent"],
                        _stud_forms_component__WEBPACK_IMPORTED_MODULE_7__["StudFormsComponent"],
                    ],
                    exports: [
                        _add_form_add_form_component__WEBPACK_IMPORTED_MODULE_5__["AddFormComponent"],
                        _edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_6__["EditFormComponent"],
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    ]
                })
            ], StudFormsModule);
            /***/ 
        }),
        /***/ "./src/app/view/students/students.component.less": 
        /*!*******************************************************!*\
          !*** ./src/app/view/students/students.component.less ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".label {\n  display: none;\n  vertical-align: middle;\n  margin: 10px 5px;\n  padding: 5px 0;\n  text-align: center;\n  font-weight: bold;\n  text-transform: uppercase;\n  color: #F56433;\n}\n.view {\n  width: 100%;\n  max-width: 1200px;\n  background: #E1E3E0;\n  border-radius: 0.9rem;\n}\n.view-header {\n  display: block;\n  position: relative;\n  padding: 12px 10px;\n  border-bottom: 2px solid #F56433;\n  color: #F56433;\n}\n.view-header__title {\n  position: relative;\n  margin: 0 auto;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 1.3rem;\n}\n.view-header__checkbox {\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 1.5%;\n}\n.view-header__checkbox input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n  margin: 10px 0 0 20px;\n}\n.view-header__checkbox input:checked + .view-header__checkbox__text:before {\n  background: #9FD468;\n}\n.view-header__checkbox input:checked + .view-header__checkbox__text:after {\n  left: 26px;\n}\n.view-header__checkbox input:focus + .view-header__checkbox__text:before {\n  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2), 0 0 0 3px rgba(255, 255, 0, 0.7);\n}\n.view-header__checkbox__text {\n  position: relative;\n  padding: 0 0 0 60px;\n  color: #7f7365;\n  font-weight: bold;\n  cursor: pointer;\n}\n.view-header__checkbox__text:before {\n  content: '';\n  position: absolute;\n  top: -4px;\n  left: 0;\n  width: 50px;\n  height: 26px;\n  border-radius: 13px;\n  background: #CDD1DA;\n  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2);\n  transition: 0.2s;\n}\n.view-header__checkbox__text:after {\n  content: '';\n  position: absolute;\n  top: -2px;\n  left: 2px;\n  width: 22px;\n  height: 22px;\n  border-radius: 10px;\n  background: #FFF;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n  transition: 0.2s;\n}\n.view .input {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding-left: 5px;\n  border: 2px solid rgba(149, 66, 31, 0.3);\n  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.5);\n  outline: none;\n  transition: 0.2s ease-in-out;\n}\n.view .input:focus,\n.view .input:hover {\n  border-color: #F56433;\n}\n.view-search {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n.view-search__input {\n  width: 25%;\n  box-shadow: none;\n  border: 2px solid rgba(149, 66, 31, 0.3) !important;\n  border-radius: 15px 0 0 15px;\n}\n.view-search__button {\n  margin: 10px 0;\n  padding: 5px;\n  text-decoration: none;\n  outline: none;\n  background-color: #E1E3E0;\n  color: #7f7365;\n  font-weight: bold;\n  border: 2px solid rgba(149, 66, 31, 0.3);\n  border-left: 0;\n  cursor: pointer;\n  transition: 0.2s ease-out;\n  box-shadow: 1px 1px 1px rgba(99, 59, 30, 0.3);\n}\n.view-search__button:last-of-type {\n  border-radius: 0 15px 15px 0;\n}\n.view-search__button:hover {\n  background-color: rgba(245, 100, 51, 0.8);\n  color: #fff;\n}\n.view-search__button_active,\n.view-search__button:focus {\n  background-color: rgba(245, 100, 51, 0.8);\n  border-color: rgba(245, 100, 51, 0.8);\n  color: #ffffff;\n  box-shadow: inset 0 0 2px rgba(99, 59, 30, 0.2);\n}\n.view-block {\n  display: flex;\n}\n.view-filter {\n  flex-basis: 50%;\n  margin-left: 20px;\n  left: 20px;\n}\n.view-filter__name {\n  color: #F56433;\n  font-weight: bold;\n  font-family: sans-serif;\n}\n.view-filter__input {\n  padding: 5px;\n  height: 20px;\n  border-radius: 15px;\n  color: #7f7365;\n  margin-right: 5px;\n}\n.view-button {\n  flex-basis: 50%;\n  align-self: flex-end;\n  position: relative;\n}\n.view-button__button {\n  position: absolute;\n  bottom: 0;\n  right: 10px;\n  outline: none;\n  cursor: pointer;\n  border-radius: 15px;\n  border: 1px solid #fff;\n  background-color: rgba(245, 100, 51, 0.89);\n  color: #fff;\n  margin: 10px;\n  padding: 0.5rem 1.5rem;\n  font-weight: bold;\n  transition: 0.2s ease-out;\n}\n.view-button__button:hover {\n  background-color: #f56433;\n  border: 1px solid #F56433;\n}\n.view .test {\n  position: absolute;\n  width: 1200px !important;\n}\n.view-body .table {\n  position: relative;\n  width: 100%;\n  border-collapse: collapse;\n}\n.view-body .table th {\n  padding: 10px;\n  font-family: sans-serif;\n  font-weight: bold;\n}\n.view-body .table-info {\n  width: 100%;\n  text-align: center;\n  background-color: lightgray !important;\n  color: #7f7365;\n}\n.view-body .table-info td {\n  color: #7f7365;\n}\n.view-body .table-header {\n  border-bottom: 2px solid #F56433;\n  color: #F56433;\n  cursor: pointer;\n}\n.view-body .table-header .active {\n  border-radius: 5px 5px 0 0;\n  background-color: rgba(0, 0, 0, 0.1);\n  -webkit-animation: activeIn 0.3s;\n          animation: activeIn 0.3s;\n}\n@-webkit-keyframes activeIn {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n}\n@keyframes activeIn {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n}\n.view-body .table-body {\n  text-align: center;\n  padding: 5px;\n  margin: 10px;\n}\n.view-body .table-body td {\n  padding: 5px 0;\n  color: #7f7365;\n  font-family: sans-serif;\n}\n.view-body .table-body__element {\n  min-width: 110px;\n}\n.view-body .table-body .gift {\n  color: #1c7f38;\n}\n.view-body .table-body_red tr:first-child {\n  background-color: rgba(153, 40, 42, 0.76);\n}\n.view-body .table-body_red tr:first-child td {\n  color: #E1E3E0 !important;\n}\n.view-body .table-body_red:last-child td:first-child {\n  border-radius: 0 0 0 15px;\n}\n.view-body .table-body_red:last-child td:last-child {\n  border-radius: 0 0 15px 0;\n}\n.view-body .table-body_green tr:first-child {\n  background-color: rgba(48, 153, 44, 0.76);\n}\n.view-body .table-body_green tr:first-child td {\n  color: #E1E3E0 !important;\n}\n.view-body .table-body_green:last-child td:first-child {\n  border-radius: 0 0 0 15px;\n}\n.view-body .table-body_green:last-child td:last-child {\n  border-radius: 0 0 15px 0;\n}\n.view-body .table .delete {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n}\n.view-body .table .delete:focus ~ .hidden {\n  display: block;\n}\n.view-body .table .delete__button {\n  outline: none;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  border: none;\n  font: inherit;\n  color: inherit;\n  width: 1rem;\n  height: 1rem;\n  background-color: #ff5862;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: 0.2s linear;\n}\n.view-body .table .delete__button:after,\n.view-body .table .delete__button:before {\n  content: \"\";\n  position: absolute;\n  width: 0.5rem;\n  height: 0.1rem;\n  background-color: #555;\n  z-index: 1;\n}\n.view-body .table .delete__button:after {\n  transform: rotate(45deg);\n}\n.view-body .table .delete__button:before {\n  transform: rotate(-45deg);\n}\n.view-body .table .delete__button:active ~ .hidden {\n  display: block;\n}\n.view-body .table .delete__button:hover {\n  background-color: #555;\n}\n.view-body .table .delete__button:hover:after {\n  background-color: #ff5862;\n}\n.view-body .table .delete__button:hover:before {\n  background-color: #ff5862;\n}\n.view-body .table .edit {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  outline: none;\n}\n.view-body .table .edit__button {\n  outline: none;\n  width: 1rem;\n  height: 1rem;\n  background-color: #CDD1DA;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.view-body .table .edit i {\n  outline: none;\n  opacity: 0.5;\n  cursor: pointer;\n  transition: 0.2s linear;\n}\n.view-body .table .edit i:hover {\n  opacity: 1;\n}\n.hidden {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  display: none;\n  -webkit-animation: hiddenOut 0.2s;\n          animation: hiddenOut 0.2s;\n}\n@-webkit-keyframes hiddenOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes hiddenOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.hidden_active {\n  display: block;\n  -webkit-animation: hiddenIn 0.2s;\n          animation: hiddenIn 0.2s;\n}\n@-webkit-keyframes hiddenIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes hiddenIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.button-block {\n  display: flex;\n  justify-content: space-evenly;\n  width: 90%;\n  margin: 0 auto;\n}\n.button-block__button {\n  padding: 0.5rem 1.5rem;\n}\n.button-block__button:focus {\n  opacity: 0.2;\n}\n.confirm {\n  display: block;\n  position: absolute;\n  text-align: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 20px;\n  background-color: #fff;\n  color: #F56433;\n  width: 30%;\n  min-width: 30vh;\n  min-height: 10rem;\n  max-height: 20%;\n  margin: auto;\n  font-family: 'Roboto', sans-serif;\n  text-decoration: none;\n  font-size: 0.9rem;\n  transition: 0.3s ease-in;\n}\n.confirm h2 {\n  color: #7f7365;\n  margin: 0;\n}\n.confirm__button {\n  outline: none;\n  border: 1px solid #fff;\n  border-radius: 5px;\n  background-color: #F56433;\n  color: #fff;\n  font-weight: bold;\n  transition: 0.2s ease-out;\n}\n.confirm__button:hover {\n  background-color: rgba(245, 100, 51, 0.89);\n  border: 1px solid #F56433;\n}\n.confirm__button_cancel {\n  background-color: #9a9a9a;\n}\n.confirm__button_cancel:hover {\n  background-color: #adadad;\n  border: 1px solid #9a9a9a;\n}\n.loading {\n  text-align: center;\n}\n.loading__text {\n  color: #F56433;\n  font-weight: bold;\n}\n.lds-ring {\n  display: inline-block;\n  position: relative;\n  text-align: center;\n  width: 80px;\n  height: 80px;\n}\n.lds-ring div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border: 8px solid #F56433;\n  border-radius: 50%;\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #F56433 transparent transparent transparent;\n}\n.lds-ring div:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n.lds-ring div:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n.lds-ring div:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n@-webkit-keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9zdHVkZW50cy9EOi9OQ3Jja3IvSFcgQW5ndWxhciBUUy9zdHVkLXRhYmxlL3NyYy9hcHAvdmlldy9zdHVkZW50cy9zdHVkZW50cy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvdmlldy9zdHVkZW50cy9zdHVkZW50cy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNMRjtBRFFBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBRUEsbUJBQUE7RUFDQSxxQkFBQTtBQ1BGO0FEU0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQ1JKO0FEVUk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFFQSxpQkFBQTtFQUNBLGlCQUFBO0FDVk47QURhSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0FDWE47QURhTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQ1hSO0FEY007RUFDRSxtQkFBQTtBQ1pSO0FEZU07RUFDRSxVQUFBO0FDYlI7QURnQk07RUFDRSxnRkFBQTtBQ2RSO0FEaUJNO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNmUjtBRGlCUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSxnQkFBQTtBQ2ZWO0FEa0JRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0FDaEJWO0FEbEVBO0VBeUZJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7QUNwQko7QURzQkk7O0VBRUUscUJBQUE7QUNwQk47QUR3QkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ3RCSjtBRHdCSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1EQUFBO0VBQ0EsNEJBQUE7QUN0Qk47QUR5Qkk7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsNkNBQUE7QUN2Qk47QUR5Qk07RUFDRSw0QkFBQTtBQ3ZCUjtBRDBCTTtFQUNFLHlDQUFBO0VBRUEsV0FBQTtBQ3pCUjtBRDRCTTs7RUFFRSx5Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLCtDQUFBO0FDMUJSO0FEZ0NFO0VBQ0UsYUFBQTtBQzlCSjtBRGtDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNoQ0o7QURrQ0k7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ2hDTjtBRG1DSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsaUJBQUE7QUNsQ047QURzQ0U7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ3BDSjtBRHNDSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtFQUVBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFFQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUVBLHlCQUFBO0FDeENOO0FEMENNO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQ3hDUjtBRGxLQTtFQWdOSSxrQkFBQTtFQUNBLHdCQUFBO0FDM0NKO0FEOENFO0VBRUksa0JBQUE7RUFRQSxXQUFBO0VBQ0EseUJBQUE7QUNwRE47QUR5Q0U7RUFLTSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQzNDUjtBRGlETTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsY0FBQTtBQy9DUjtBRDJDTTtFQU9JLGNBQUE7QUMvQ1Y7QURtRE07RUFDRSxnQ0FBQTtFQUNBLGNBQUE7RUFFQSxlQUFBO0FDbERSO0FEOENNO0VBT0ksMEJBQUE7RUFDQSxvQ0FBQTtFQUVBLGdDQUFBO1VBQUEsd0JBQUE7QUNuRFY7QURxRFU7RUFDRTtJQUNFLGtDQUFBO0VDbkRaO0VEcURVO0lBQ0Usb0NBQUE7RUNuRFo7QUFDRjtBRDZDVTtFQUNFO0lBQ0Usa0NBQUE7RUNuRFo7RURxRFU7SUFDRSxvQ0FBQTtFQ25EWjtBQUNGO0FEd0RNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ3REUjtBRG1ETTtFQU1JLGNBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUN0RFY7QUR5RFE7RUFDRSxnQkFBQTtBQ3ZEVjtBRDJDTTtFQWdCSSxjQUFBO0FDeERWO0FEbUVRO0VBRUkseUNBQUE7QUNsRVo7QURnRVE7RUFLTSx5QkFBQTtBQ2xFZDtBRHNFVTtFQUNFLHlCQUFBO0FDcEVaO0FEdUVVO0VBQ0UseUJBQUE7QUNyRVo7QUR5RVE7RUFFSSx5Q0FBQTtBQ3hFWjtBRHNFUTtFQUtNLHlCQUFBO0FDeEVkO0FENEVVO0VBQ0UseUJBQUE7QUMxRVo7QUQ2RVU7RUFDRSx5QkFBQTtBQzNFWjtBRC9CRTtFQWlITSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUMvRVI7QURpRlE7RUFDRSxjQUFBO0FDL0VWO0FEa0ZRO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEsZUFBQTtFQUNBLHVCQUFBO0FDbEZWO0FEb0ZVOztFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FDbEZaO0FEcUZVO0VBQ0Usd0JBQUE7QUNuRlo7QURzRlU7RUFDRSx5QkFBQTtBQ3BGWjtBRHVGVTtFQUNFLGNBQUE7QUNyRlo7QUR3RlU7RUFDRSxzQkFBQTtBQ3RGWjtBRHlGVTtFQUNFLHlCQUFBO0FDdkZaO0FEMEZVO0VBQ0UseUJBQUE7QUN4Rlo7QURwRkU7RUFrTE0sYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQzNGUjtBRDZGUTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDM0ZWO0FEbkdFO0VBa01RLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUVBLHVCQUFBO0FDN0ZWO0FEK0ZVO0VBQ0UsVUFBQTtBQzdGWjtBRHFHQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUVBLGlDQUFBO1VBQUEseUJBQUE7QUNwR0Y7QURxR0U7RUFDRTtJQUNFLFVBQUE7RUNuR0o7RURxR0U7SUFDRSxVQUFBO0VDbkdKO0FBQ0Y7QUQ2RkU7RUFDRTtJQUNFLFVBQUE7RUNuR0o7RURxR0U7SUFDRSxVQUFBO0VDbkdKO0FBQ0Y7QURzR0U7RUFDRSxjQUFBO0VBRUEsZ0NBQUE7VUFBQSx3QkFBQTtBQ3JHSjtBRHVHSTtFQUNFO0lBQ0UsVUFBQTtFQ3JHTjtFRHVHSTtJQUNFLFVBQUE7RUNyR047QUFDRjtBRCtGSTtFQUNFO0lBQ0UsVUFBQTtFQ3JHTjtFRHVHSTtJQUNFLFVBQUE7RUNyR047QUFDRjtBRDBHQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUVBLFVBQUE7RUFDQSxjQUFBO0FDekdGO0FENEdFO0VBQ0Usc0JBQUE7QUMxR0o7QUQ0R0k7RUFDRSxZQUFBO0FDMUdOO0FEK0dBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUVBLGlDQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUVBLHdCQUFBO0FDaEhGO0FEMEZBO0VBeUJJLGNBQUE7RUFDQSxTQUFBO0FDaEhKO0FEbUhFO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFJQSxpQkFBQTtFQUVBLHlCQUFBO0FDdEhKO0FEd0hJO0VBQ0UsMENBQUE7RUFFQSx5QkFBQTtBQ3ZITjtBRDBISTtFQUNFLHlCQUFBO0FDeEhOO0FEMEhNO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQ3hIUjtBRDhIQTtFQUNFLGtCQUFBO0FDNUhGO0FEOEhFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDNUhKO0FEZ0lBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUM5SEY7QURpSUE7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzRUFBQTtVQUFBLDhEQUFBO0VBQ0EseURBQUE7QUMvSEY7QURrSUE7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FDaElGO0FEbUlBO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBQ2pJRjtBRG9JQTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUNsSUY7QURxSUE7RUFDRTtJQUNFLHVCQUFBO0VDbklGO0VEcUlBO0lBQ0UseUJBQUE7RUNuSUY7QUFDRjtBRDZIQTtFQUNFO0lBQ0UsdUJBQUE7RUNuSUY7RURxSUE7SUFDRSx5QkFBQTtFQ25JRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlldy9zdHVkZW50cy9zdHVkZW50cy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBvcmFuZ2U6ICNGNTY0MzM7XG5AbGlnaHRfb3JhbmdlOiByZ2JhKDI0NSwgMTAwLCA1MSwgMC41OCk7XG5AYmdyb3VuZDogI0NERDFEQTtcbkB0ZXh0LWdyZXk6ICM3ZjczNjU7XG5cblxuLmxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAxMHB4IDVweDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiBAb3JhbmdlO1xufVxuXG4udmlldyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcblxuICBiYWNrZ3JvdW5kOiAjRTFFM0UwO1xuICBib3JkZXItcmFkaXVzOiAuOXJlbTtcblxuICAmLWhlYWRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgcGFkZGluZzogMTJweCAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBAb3JhbmdlO1xuICAgIGNvbG9yOiBAb3JhbmdlO1xuXG4gICAgJl9fdGl0bGUge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgfVxuXG4gICAgJl9fY2hlY2tib3gge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBtYXJnaW46IDEuNSU7XG5cbiAgICAgICYgaW5wdXQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBtYXJnaW46IDEwcHggMCAwIDIwcHg7XG4gICAgICB9XG5cbiAgICAgICYgaW5wdXQ6Y2hlY2tlZCArICZfX3RleHQ6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzlGRDQ2ODtcbiAgICAgIH1cblxuICAgICAgJiBpbnB1dDpjaGVja2VkICsgJl9fdGV4dDphZnRlciB7XG4gICAgICAgIGxlZnQ6IDI2cHg7XG4gICAgICB9XG5cbiAgICAgICYgaW5wdXQ6Zm9jdXMgKyAmX190ZXh0OmJlZm9yZSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDNweCByZ2JhKDAsIDAsIDAsIC4yKSwgMCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDAsIC43KTtcbiAgICAgIH1cblxuICAgICAgJl9fdGV4dCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogMCAwIDAgNjBweDtcbiAgICAgICAgY29sb3I6IEB0ZXh0LWdyZXk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IC00cHg7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBAYmdyb3VuZDtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDJweCAzcHggcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xuICAgICAgICB9XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgICBsZWZ0OiAycHg7XG4gICAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAuMyk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxNDksIDY2LCAzMSwgMC4zKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbi1vdXQ7XG5cbiAgICAmOmZvY3VzLFxuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiBAb3JhbmdlO1xuICAgIH1cbiAgfVxuXG4gICYtc2VhcmNoIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICZfX2lucHV0IHtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxNDksIDY2LCAzMSwgMC4zKSAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweCAwIDAgMTVweDtcbiAgICB9XG5cbiAgICAmX19idXR0b24ge1xuICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0UxRTNFMDtcbiAgICAgIGNvbG9yOiBAdGV4dC1ncmV5O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE0OSwgNjYsIDMxLCAwLjMpO1xuICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1vdXQ7XG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDk5LCA1OSwgMzAsIDAuMyk7XG5cbiAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxNXB4IDE1cHggMDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAxMDAsIDUxLCAwLjgpO1xuICAgICAgICAvL2JveC1zaGFkb3c6MHB4IC0zMHB4IDAgQGxpZ2h0X29yYW5nZSBpbnNldDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgICZfYWN0aXZlLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAxMDAsIDUxLCAwLjgpO1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjQ1LCAxMDAsIDUxLCAwLjgpO1xuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMnB4IHJnYmEoOTksIDU5LCAzMCwgMC4yKTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gICYtYmxvY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgfVxuXG4gICYtZmlsdGVyIHtcbiAgICBmbGV4LWJhc2lzOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbGVmdDogMjBweDtcblxuICAgICZfX25hbWUge1xuICAgICAgY29sb3I6IEBvcmFuZ2U7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIH1cblxuICAgICZfX2lucHV0IHtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICBjb2xvcjogQHRleHQtZ3JleTtcblxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuICB9XG5cbiAgJi1idXR0b24ge1xuICAgIGZsZXgtYmFzaXM6IDUwJTtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmX19idXR0b24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcmlnaHQ6IDEwcHg7XG5cbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDEwMCwgNTEsIDAuODkpO1xuICAgICAgY29sb3I6ICNmZmY7XG5cbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgIHBhZGRpbmc6IC41cmVtIDEuNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1vdXQ7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMTAwLCA1MSwgMSk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIEBvcmFuZ2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnRlc3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTIwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmLWJvZHkge1xuICAgIC50YWJsZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIHRoIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cbiAgICAgICYtaW5mbyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogQHRleHQtZ3JleTtcblxuICAgICAgICB0ZCB7XG4gICAgICAgICAgY29sb3I6IEB0ZXh0LWdyZXlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLWhlYWRlciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBAb3JhbmdlO1xuICAgICAgICBjb2xvcjogQG9yYW5nZTtcblxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG4gICAgICAgICAgYW5pbWF0aW9uOiBhY3RpdmVJbiAuM3M7XG5cbiAgICAgICAgICBAa2V5ZnJhbWVzIGFjdGl2ZUluIHtcbiAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYtYm9keSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBtYXJnaW46IDEwcHg7XG5cbiAgICAgICAgdGQge1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICAgIGNvbG9yOiAjN2Y3MzY1O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fZWxlbWVudCB7XG4gICAgICAgICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5naWZ0IHtcbiAgICAgICAgICBjb2xvcjogIzFjN2YzODtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vJjpsYXN0LWNoaWxkIHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgLy8gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDE1cHg7XG4gICAgICAgIC8vfVxuICAgICAgICAvLyY6bGFzdC1jaGlsZCB0ciB0ZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgLy8gIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDA7XG4gICAgICAgIC8vfVxuXG5cbiAgICAgICAgJl9yZWQge1xuICAgICAgICAgIHRyOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCA0MCwgNDIsIDAuNzYpO1xuXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjRTFFM0UwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDE1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmX2dyZWVuIHtcbiAgICAgICAgICB0cjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ4LCAxNTMsIDQ0LCAwLjc2KTtcblxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICBjb2xvcjogI0UxRTNFMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bGFzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMCAxNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bGFzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgLmRlbGV0ZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICY6Zm9jdXMgfiAuaGlkZGVuIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgICZfX2J1dHRvbiB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTg2MjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLjJzIGxpbmVhcjtcblxuICAgICAgICAgICY6YWZ0ZXIsXG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAuNXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogLjFyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6YWN0aXZlIH4gLmhpZGRlbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpob3ZlcjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1ODYyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXI6YmVmb3JlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjU4NjI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5lZGl0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAgICAgJl9fYnV0dG9uIHtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmdyb3VuZDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICB0cmFuc2l0aW9uOiAuMnMgbGluZWFyO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uaGlkZGVuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogbm9uZTtcblxuICBhbmltYXRpb246IGhpZGRlbk91dCAuMnM7XG4gIEBrZXlmcmFtZXMgaGlkZGVuT3V0IHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5cbiAgJl9hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgYW5pbWF0aW9uOiBoaWRkZW5JbiAuMnM7XG5cbiAgICBAa2V5ZnJhbWVzIGhpZGRlbkluIHtcbiAgICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYnV0dG9uLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG5cblxuICAmX19idXR0b24ge1xuICAgIHBhZGRpbmc6IC41cmVtIDEuNXJlbTtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3BhY2l0eTogLjI7XG4gICAgfVxuICB9XG59XG5cbi5jb25maXJtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG5cbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6IEBvcmFuZ2U7XG4gIHdpZHRoOiAzMCU7XG4gIG1pbi13aWR0aDogMzB2aDtcbiAgbWluLWhlaWdodDogMTByZW07XG4gIG1heC1oZWlnaHQ6IDIwJTtcbiAgbWFyZ2luOiBhdXRvO1xuXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDAuOXJlbTtcblxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW47XG5cbiAgaDIge1xuICAgIGNvbG9yOiBAdGV4dC1ncmV5O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gICZfX2J1dHRvbiB7XG5cbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBvcmFuZ2U7XG4gICAgY29sb3I6ICNmZmY7XG5cbiAgICAvL21hcmdpbjogMS4xcmVtO1xuICAgIC8vcGFkZGluZzogLjVyZW0gMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2Utb3V0O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMTAwLCA1MSwgMC44OSk7XG4gICAgICAvLyBjb2xvcjogQG9yYW5nZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIEBvcmFuZ2U7XG4gICAgfVxuXG4gICAgJl9jYW5jZWwge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzlhOWE5YTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZGFkYWQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YTlhOWE7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5sb2FkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICZfX3RleHQge1xuICAgIGNvbG9yOiBAb3JhbmdlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5cbi5sZHMtcmluZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5sZHMtcmluZyBkaXYge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDhweDtcbiAgYm9yZGVyOiA4cHggc29saWQgQG9yYW5nZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IGxkcy1yaW5nIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcbiAgYm9yZGVyLWNvbG9yOiBAb3JhbmdlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG4ubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNDVzO1xufVxuXG4ubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG59XG5cbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNXM7XG59XG5cbkBrZXlmcmFtZXMgbGRzLXJpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5cbiIsIi5sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMTBweCA1cHg7XG4gIHBhZGRpbmc6IDVweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI0Y1NjQzMztcbn1cbi52aWV3IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBiYWNrZ3JvdW5kOiAjRTFFM0UwO1xuICBib3JkZXItcmFkaXVzOiAwLjlyZW07XG59XG4udmlldy1oZWFkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMnB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRjU2NDMzO1xuICBjb2xvcjogI0Y1NjQzMztcbn1cbi52aWV3LWhlYWRlcl9fdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuLnZpZXctaGVhZGVyX19jaGVja2JveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgbWFyZ2luOiAxLjUlO1xufVxuLnZpZXctaGVhZGVyX19jaGVja2JveCBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIG9wYWNpdHk6IDA7XG4gIG1hcmdpbjogMTBweCAwIDAgMjBweDtcbn1cbi52aWV3LWhlYWRlcl9fY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIC52aWV3LWhlYWRlcl9fY2hlY2tib3hfX3RleHQ6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzlGRDQ2ODtcbn1cbi52aWV3LWhlYWRlcl9fY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIC52aWV3LWhlYWRlcl9fY2hlY2tib3hfX3RleHQ6YWZ0ZXIge1xuICBsZWZ0OiAyNnB4O1xufVxuLnZpZXctaGVhZGVyX19jaGVja2JveCBpbnB1dDpmb2N1cyArIC52aWV3LWhlYWRlcl9fY2hlY2tib3hfX3RleHQ6YmVmb3JlIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDAsIDAuNyk7XG59XG4udmlldy1oZWFkZXJfX2NoZWNrYm94X190ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDAgMCA2MHB4O1xuICBjb2xvcjogIzdmNzM2NTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi52aWV3LWhlYWRlcl9fY2hlY2tib3hfX3RleHQ6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBiYWNrZ3JvdW5kOiAjQ0REMURBO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLnZpZXctaGVhZGVyX19jaGVja2JveF9fdGV4dDphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTJweDtcbiAgbGVmdDogMnB4O1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLnZpZXcgLmlucHV0IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTQ5LCA2NiwgMzEsIDAuMyk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cbi52aWV3IC5pbnB1dDpmb2N1cyxcbi52aWV3IC5pbnB1dDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI0Y1NjQzMztcbn1cbi52aWV3LXNlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udmlldy1zZWFyY2hfX2lucHV0IHtcbiAgd2lkdGg6IDI1JTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxNDksIDY2LCAzMSwgMC4zKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDAgMCAxNXB4O1xufVxuLnZpZXctc2VhcmNoX19idXR0b24ge1xuICBtYXJnaW46IDEwcHggMDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMUUzRTA7XG4gIGNvbG9yOiAjN2Y3MzY1O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxNDksIDY2LCAzMSwgMC4zKTtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSg5OSwgNTksIDMwLCAwLjMpO1xufVxuLnZpZXctc2VhcmNoX19idXR0b246bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXJhZGl1czogMCAxNXB4IDE1cHggMDtcbn1cbi52aWV3LXNlYXJjaF9fYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDEwMCwgNTEsIDAuOCk7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnZpZXctc2VhcmNoX19idXR0b25fYWN0aXZlLFxuLnZpZXctc2VhcmNoX19idXR0b246Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMTAwLCA1MSwgMC44KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0NSwgMTAwLCA1MSwgMC44KTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAycHggcmdiYSg5OSwgNTksIDMwLCAwLjIpO1xufVxuLnZpZXctYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnZpZXctZmlsdGVyIHtcbiAgZmxleC1iYXNpczogNTAlO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbGVmdDogMjBweDtcbn1cbi52aWV3LWZpbHRlcl9fbmFtZSB7XG4gIGNvbG9yOiAjRjU2NDMzO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG4udmlldy1maWx0ZXJfX2lucHV0IHtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiAjN2Y3MzY1O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi52aWV3LWJ1dHRvbiB7XG4gIGZsZXgtYmFzaXM6IDUwJTtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi52aWV3LWJ1dHRvbl9fYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAxMDAsIDUxLCAwLjg5KTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XG59XG4udmlldy1idXR0b25fX2J1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTY0MzM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGNTY0MzM7XG59XG4udmlldyAudGVzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEyMDBweCAhaW1wb3J0YW50O1xufVxuLnZpZXctYm9keSAudGFibGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuLnZpZXctYm9keSAudGFibGUgdGgge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udmlldy1ib2R5IC50YWJsZS1pbmZvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjN2Y3MzY1O1xufVxuLnZpZXctYm9keSAudGFibGUtaW5mbyB0ZCB7XG4gIGNvbG9yOiAjN2Y3MzY1O1xufVxuLnZpZXctYm9keSAudGFibGUtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGNTY0MzM7XG4gIGNvbG9yOiAjRjU2NDMzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udmlldy1ib2R5IC50YWJsZS1oZWFkZXIgLmFjdGl2ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGFuaW1hdGlvbjogYWN0aXZlSW4gMC4zcztcbn1cbkBrZXlmcmFtZXMgYWN0aXZlSW4ge1xuICBmcm9tIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICB9XG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbn1cbi52aWV3LWJvZHkgLnRhYmxlLWJvZHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLnZpZXctYm9keSAudGFibGUtYm9keSB0ZCB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBjb2xvcjogIzdmNzM2NTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG4udmlldy1ib2R5IC50YWJsZS1ib2R5X19lbGVtZW50IHtcbiAgbWluLXdpZHRoOiAxMTBweDtcbn1cbi52aWV3LWJvZHkgLnRhYmxlLWJvZHkgLmdpZnQge1xuICBjb2xvcjogIzFjN2YzODtcbn1cbi52aWV3LWJvZHkgLnRhYmxlLWJvZHlfcmVkIHRyOmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDQwLCA0MiwgMC43Nik7XG59XG4udmlldy1ib2R5IC50YWJsZS1ib2R5X3JlZCB0cjpmaXJzdC1jaGlsZCB0ZCB7XG4gIGNvbG9yOiAjRTFFM0UwICFpbXBvcnRhbnQ7XG59XG4udmlldy1ib2R5IC50YWJsZS1ib2R5X3JlZDpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgMTVweDtcbn1cbi52aWV3LWJvZHkgLnRhYmxlLWJvZHlfcmVkOmxhc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDA7XG59XG4udmlldy1ib2R5IC50YWJsZS1ib2R5X2dyZWVuIHRyOmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OCwgMTUzLCA0NCwgMC43Nik7XG59XG4udmlldy1ib2R5IC50YWJsZS1ib2R5X2dyZWVuIHRyOmZpcnN0LWNoaWxkIHRkIHtcbiAgY29sb3I6ICNFMUUzRTAgIWltcG9ydGFudDtcbn1cbi52aWV3LWJvZHkgLnRhYmxlLWJvZHlfZ3JlZW46bGFzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDE1cHg7XG59XG4udmlldy1ib2R5IC50YWJsZS1ib2R5X2dyZWVuOmxhc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDA7XG59XG4udmlldy1ib2R5IC50YWJsZSAuZGVsZXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG59XG4udmlldy1ib2R5IC50YWJsZSAuZGVsZXRlOmZvY3VzIH4gLmhpZGRlbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnZpZXctYm9keSAudGFibGUgLmRlbGV0ZV9fYnV0dG9uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTg2MjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xufVxuLnZpZXctYm9keSAudGFibGUgLmRlbGV0ZV9fYnV0dG9uOmFmdGVyLFxuLnZpZXctYm9keSAudGFibGUgLmRlbGV0ZV9fYnV0dG9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDAuNXJlbTtcbiAgaGVpZ2h0OiAwLjFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gIHotaW5kZXg6IDE7XG59XG4udmlldy1ib2R5IC50YWJsZSAuZGVsZXRlX19idXR0b246YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4udmlldy1ib2R5IC50YWJsZSAuZGVsZXRlX19idXR0b246YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbi52aWV3LWJvZHkgLnRhYmxlIC5kZWxldGVfX2J1dHRvbjphY3RpdmUgfiAuaGlkZGVuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udmlldy1ib2R5IC50YWJsZSAuZGVsZXRlX19idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xufVxuLnZpZXctYm9keSAudGFibGUgLmRlbGV0ZV9fYnV0dG9uOmhvdmVyOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTg2Mjtcbn1cbi52aWV3LWJvZHkgLnRhYmxlIC5kZWxldGVfX2J1dHRvbjpob3ZlcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1ODYyO1xufVxuLnZpZXctYm9keSAudGFibGUgLmVkaXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi52aWV3LWJvZHkgLnRhYmxlIC5lZGl0X19idXR0b24ge1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0REMURBO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi52aWV3LWJvZHkgLnRhYmxlIC5lZGl0IGkge1xuICBvdXRsaW5lOiBub25lO1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XG59XG4udmlldy1ib2R5IC50YWJsZSAuZWRpdCBpOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5oaWRkZW4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBub25lO1xuICBhbmltYXRpb246IGhpZGRlbk91dCAwLjJzO1xufVxuQGtleWZyYW1lcyBoaWRkZW5PdXQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4uaGlkZGVuX2FjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhbmltYXRpb246IGhpZGRlbkluIDAuMnM7XG59XG5Aa2V5ZnJhbWVzIGhpZGRlbkluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmJ1dHRvbi1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5idXR0b24tYmxvY2tfX2J1dHRvbiB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG59XG4uYnV0dG9uLWJsb2NrX19idXR0b246Zm9jdXMge1xuICBvcGFjaXR5OiAwLjI7XG59XG4uY29uZmlybSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogI0Y1NjQzMztcbiAgd2lkdGg6IDMwJTtcbiAgbWluLXdpZHRoOiAzMHZoO1xuICBtaW4taGVpZ2h0OiAxMHJlbTtcbiAgbWF4LWhlaWdodDogMjAlO1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluO1xufVxuLmNvbmZpcm0gaDIge1xuICBjb2xvcjogIzdmNzM2NTtcbiAgbWFyZ2luOiAwO1xufVxuLmNvbmZpcm1fX2J1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1NjQzMztcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xufVxuLmNvbmZpcm1fX2J1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAxMDAsIDUxLCAwLjg5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Y1NjQzMztcbn1cbi5jb25maXJtX19idXR0b25fY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlhOWE5YTtcbn1cbi5jb25maXJtX19idXR0b25fY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkYWRhZDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzlhOWE5YTtcbn1cbi5sb2FkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvYWRpbmdfX3RleHQge1xuICBjb2xvcjogI0Y1NjQzMztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubGRzLXJpbmcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLmxkcy1yaW5nIGRpdiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIG1hcmdpbjogOHB4O1xuICBib3JkZXI6IDhweCBzb2xpZCAjRjU2NDMzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogbGRzLXJpbmcgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xuICBib3JkZXItY29sb3I6ICNGNTY0MzMgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG4ubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNDVzO1xufVxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xufVxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE1cztcbn1cbkBrZXlmcmFtZXMgbGRzLXJpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/view/students/students.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/view/students/students.component.ts ***!
          \*****************************************************/
        /*! exports provided: StudentsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsComponent", function () { return StudentsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _model_students__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/students */ "./src/app/model/students.ts");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/data.service */ "./src/app/service/data.service.ts");
            var SearchOption;
            (function (SearchOption) {
                SearchOption[SearchOption["All"] = 0] = "All";
                SearchOption[SearchOption["LastName"] = 1] = "LastName";
                SearchOption[SearchOption["FirstName"] = 2] = "FirstName";
            })(SearchOption || (SearchOption = {}));
            var StudentsComponent = /** @class */ (function () {
                function StudentsComponent(cdr, router, route, mData) {
                    this.cdr = cdr;
                    this.router = router;
                    this.route = route;
                    this.mData = mData;
                    this.students = [];
                    this.feature = true;
                    this.search = "";
                    this.lastNameSearch = "";
                    this.searchOption = SearchOption;
                    this.searchField = this.searchOption.All;
                    this.sortUp = true;
                    this.delStudent = new _model_students__WEBPACK_IMPORTED_MODULE_3__["Student"]();
                    this.hidden = false;
                    this.loading = false; // загружается?
                }
                StudentsComponent.prototype.detect = function () {
                    this.cdr.detectChanges();
                };
                StudentsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this.mData.onInit) {
                        this.loading = true;
                        this.students$ = this.mData.getStudents()
                            .subscribe(function (students) {
                            _this.students = students;
                            _this.loading = false;
                            _this.mData.allStuds = _this.students;
                            _this.mData.lastId = students[students.length - 1].id;
                            _this.mData.onInit = true;
                            _this.detect();
                        }, function (error) {
                            if (error.status >= 500) {
                                _this.router.navigate(["serverError"], {
                                    queryParams: {
                                        status: error.status,
                                        statusText: error.statusText,
                                        url: error.url,
                                    }
                                });
                            }
                        });
                    }
                    this.students = this.mData.getHardStudents();
                };
                StudentsComponent.prototype.toggleFeature = function () {
                    this.feature = !this.feature;
                };
                StudentsComponent.prototype.getFeature = function () {
                    return this.feature;
                };
                StudentsComponent.prototype.trackByStudentID = function (index, student) {
                    return student.id;
                };
                StudentsComponent.prototype.isSearch = function (student) {
                    if (!this.search.trim()) {
                        return false;
                    }
                    switch (this.searchField) {
                        case SearchOption.All:
                            if (student.lastName.toLocaleLowerCase().includes(this.search.toLowerCase()) ||
                                student.firstName.toLocaleLowerCase().includes(this.search.toLowerCase())) {
                                return true;
                            }
                            break;
                        case SearchOption.LastName:
                            if (student.lastName.toLocaleLowerCase().includes(this.search.toLowerCase())) {
                                return true;
                            }
                            break;
                        case SearchOption.FirstName:
                            if (student.firstName.toLocaleLowerCase().includes(this.search.toLowerCase())) {
                                return true;
                            }
                            break;
                    }
                    return false;
                };
                StudentsComponent.prototype.setStudentsByMark = function () {
                    var _this = this;
                    if (!this.mark) {
                        this.students = this.mData.getHardStudents();
                    }
                    else {
                        this.students = this.mData.getHardStudents().filter(function (student) {
                            return student.averageMark.toString() === _this.mark.toString();
                        });
                    }
                };
                StudentsComponent.prototype.setStudentsByBirthday = function () {
                    if (!this.birthday) {
                        this.students = this.mData.getHardStudents();
                    }
                    else {
                        var dateBirthday_1 = new Date(this.birthday);
                        this.students = this.mData.getHardStudents().filter(function (student) {
                            var birthday = Date.parse(student.birthday.toString());
                            return birthday.toString() === dateBirthday_1.getTime().toString();
                        });
                    }
                };
                StudentsComponent.prototype.sortTableBy = function (sortBy) {
                    var _this = this;
                    this.sort = sortBy;
                    if (sortBy === "id") {
                        this.students.sort(function (first, second) {
                            return first.id >= second.id ? 1 : -1;
                        });
                    }
                    else {
                        this.students.sort(function (first, second) {
                            if (_this.sortUp) {
                                return first[sortBy] >= second[sortBy] ? 1 : -1;
                            }
                            return first[sortBy] <= second[sortBy] ? 1 : -1;
                        });
                    }
                };
                // удаление студента
                StudentsComponent.prototype.deleteStudent = function (stud) {
                    var _this = this;
                    if (stud) {
                        this.deleteStudent$ = this.mData.deleteStudent(stud)
                            .subscribe(function () {
                            _this.mData.allStuds = _this.mData.allStuds.filter(function (student) { return student !== stud; });
                            _this.students = _this.mData.getHardStudents();
                            _this.hidden = false;
                            _this.detect();
                        }, function (error) {
                            if (error.status >= 500) {
                                _this.router.navigate(["serverError"], {
                                    queryParams: {
                                        status: error.status,
                                        statusText: error.statusText,
                                        url: error.url,
                                    }
                                });
                            }
                        });
                    }
                };
                StudentsComponent.prototype.isSort = function (name) {
                    return this.sort === name;
                };
                // открытие формы редактирования студента
                StudentsComponent.prototype.setEditStudent = function (student) {
                    this.router.navigate(["/form", "edit", student.id]);
                };
                // открытие формы добавления студента
                StudentsComponent.prototype.openAddForm = function () {
                    this.router.navigate(["/form", "add"]);
                };
                StudentsComponent.prototype.ngOnDestroy = function () {
                    if (this.students$) {
                        this.students$.unsubscribe();
                        this.students$ = null;
                    }
                    if (this.deleteStudent$) {
                        this.deleteStudent$.unsubscribe();
                        this.deleteStudent$ = null;
                    }
                };
                return StudentsComponent;
            }());
            StudentsComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_4__["Data"] }
            ]; };
            StudentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-students",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./students.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/students/students.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./students.component.less */ "./src/app/view/students/students.component.less")).default]
                })
            ], StudentsComponent);
            /***/ 
        }),
        /***/ "./src/app/view/students/students.module.ts": 
        /*!**************************************************!*\
          !*** ./src/app/view/students/students.module.ts ***!
          \**************************************************/
        /*! exports provided: StudentsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsModule", function () { return StudentsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/highlight.directive */ "./src/app/directives/highlight.directive.ts");
            /* harmony import */ var _directives_info_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/info.directive */ "./src/app/directives/info.directive.ts");
            /* harmony import */ var _pipes_date_years_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/date-years.pipe */ "./src/app/pipes/date-years.pipe.ts");
            /* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
            /* harmony import */ var _pipes_format_mark_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/format-mark.pipe */ "./src/app/pipes/format-mark.pipe.ts");
            /* harmony import */ var _pipes_good_mark_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/good-mark.pipe */ "./src/app/pipes/good-mark.pipe.ts");
            /* harmony import */ var _stud_forms_stud_forms_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stud-forms/stud-forms.module */ "./src/app/view/students/stud-forms/stud-forms.module.ts");
            /* harmony import */ var _students_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./students.component */ "./src/app/view/students/students.component.ts");
            var StudentsModule = /** @class */ (function () {
                function StudentsModule() {
                }
                return StudentsModule;
            }());
            StudentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _students_component__WEBPACK_IMPORTED_MODULE_12__["StudentsComponent"],
                        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"],
                        _pipes_format_mark_pipe__WEBPACK_IMPORTED_MODULE_9__["FormatMarkPipe"],
                        _pipes_date_years_pipe__WEBPACK_IMPORTED_MODULE_7__["DateYearsPipe"],
                        _pipes_good_mark_pipe__WEBPACK_IMPORTED_MODULE_10__["GoodMarkPipe"],
                        _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_5__["HighlightDirective"],
                        _directives_info_directive__WEBPACK_IMPORTED_MODULE_6__["InfoDirective"],
                    ],
                    exports: [
                        _students_component__WEBPACK_IMPORTED_MODULE_12__["StudentsComponent"],
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _stud_forms_stud_forms_module__WEBPACK_IMPORTED_MODULE_11__["StudFormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    ],
                    providers: []
                })
            ], StudentsModule);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                apiUrl: "http://localhost:3000"
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            // import ("zone.js/dist/zone");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\NCrckr\HW Angular TS\stud-table\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map