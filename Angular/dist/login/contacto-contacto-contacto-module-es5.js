function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacto-contacto-contacto-module"], {
  /***/
  "./src/app/contacto/contacto/contacto-routing-module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/contacto/contacto/contacto-routing-module.ts ***!
    \**************************************************************/

  /*! exports provided: ContactoRoutingModule */

  /***/
  function srcAppContactoContactoContactoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactoRoutingModule", function () {
      return ContactoRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _contacto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./contacto.component */
    "./src/app/contacto/contacto/contacto.component.ts");

    var routes = [{
      path: '',
      component: _contacto_component__WEBPACK_IMPORTED_MODULE_2__["ContactoComponent"]
    }];

    var ContactoRoutingModule = function ContactoRoutingModule() {
      _classCallCheck(this, ContactoRoutingModule);
    };

    ContactoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ContactoRoutingModule
    });
    ContactoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ContactoRoutingModule_Factory(t) {
        return new (t || ContactoRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactoRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contacto/contacto/contacto.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/contacto/contacto/contacto.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContactoComponent */

  /***/
  function srcAppContactoContactoContactoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactoComponent", function () {
      return ContactoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/data-api.service */
    "./src/app/services/data-api.service.ts");
    /* harmony import */


    var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/message.service */
    "./src/app/services/message.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-qrcode2 */
    "./node_modules/ngx-qrcode2/__ivy_ngcc__/fesm2015/ngx-qrcode2.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ContactoComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ContactoComponent = /*#__PURE__*/function () {
      function ContactoComponent(dataApi, _MessageService) {
        var _this = this;

        _classCallCheck(this, ContactoComponent);

        this.dataApi = dataApi;
        this._MessageService = _MessageService;
        this.books = [];
        this.book = [];
        this.title = 'app';
        this.elementType = 'url';
        this.value = '';
        this.bandera = true;
        setTimeout(function () {
          _this.bandera = false;
        }, 200); //this.bandera=false;
      }

      _createClass(ContactoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataApi.getAllBooks().subscribe(function (books) {
            console.log(books[1].facebook);
          });
        }
      }, {
        key: "contactForm",
        value: function contactForm(form) {
          this._MessageService.sendMessage(form).subscribe(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Formulario de contacto", "Mensaje enviado correctamente", 'success');
          });
        }
      }, {
        key: "entregarQRCode",
        value: function entregarQRCode(index) {
          var _this2 = this;

          switch (index) {
            case 1:
              {
                this.dataApi.getAllBooks().subscribe(function (books) {
                  _this2.value = books[0].twitter;
                });
                break;
              }

            case 2:
              {
                this.dataApi.getAllBooks().subscribe(function (books) {
                  _this2.value = books[0].youtube;
                });
                break;
              }

            case 3:
              {
                this.dataApi.getAllBooks().subscribe(function (books) {
                  _this2.value = books[0].facebook;
                });
                break;
              }

            case 4:
              this.dataApi.getAllBooks().subscribe(function (books) {
                _this2.value = books[1].twitter;
              });
              break;

            case 5:
              this.dataApi.getAllBooks().subscribe(function (books) {
                _this2.value = books[1].facebook;
              });
              break;

            case 6:
              this.dataApi.getAllBooks().subscribe(function (books) {
                _this2.value = books[1].youtube;
              });
              break;

            case 7:
              this.dataApi.getAllBooks().subscribe(function (books) {
                _this2.value = books[2].twitter;
              });
              break;

            case 8:
              this.dataApi.getAllBooks().subscribe(function (books) {
                _this2.value = books[2].youtube;
              });
              break;

            case 9:
              this.dataApi.getAllBooks().subscribe(function (books) {
                _this2.value = books[2].facebook;
              });
              break;
          }
          /*if(index === 1){
            this.value='https://www.youtube.com/watch?v=8E74q6HzReQ';
          }
          if(index === 2){
            this.value='https://mail.google.com/mail/u/0/#inbox/FMfcgxwJWXStMbBqCHkfptGBbcvZttFB';
          }
          if(index === 3){
            this.value='https://www.facebook.com/arnold';
          }*/

        }
      }]);

      return ContactoComponent;
    }();

    ContactoComponent.ɵfac = function ContactoComponent_Factory(t) {
      return new (t || ContactoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]));
    };

    ContactoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactoComponent,
      selectors: [["app-contacto"]],
      decls: 80,
      vars: 3,
      consts: [["class", "spinner-border", "role", "status", 4, "ngIf"], [1, "mt-4"], [1, "card-columns"], [1, "card", "border-secondary", "mb-3", "mt-4", 2, "max-width", "20rem"], ["src", "../../assets/rock2.jpg", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-primary", 3, "click"], ["src", "../../../assets/adonis.png", "alt", "Card image cap", 1, "card-img-top"], ["src", "../../assets/rich2.jpg", "alt", "Card image cap", 1, "card-img-top"], ["cssClass", "aclass", "errorCorrectionLevel", "L", 3, "elementType", "value"], [1, "container", "mt-5"], [3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["type", "text", "name", "nombre", "ngModel", "", 1, "form-control"], ["type", "text", "name", "asunto", "ngModel", "", 1, "form-control"], ["type", "email", "name", "email", "ngModel", "", 1, "form-control"], ["cols", "30", "rows", "6", "name", "mensaje", "ngModel", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], ["role", "status", 1, "spinner-border"], [1, "sr-only"]],
      template: function ContactoComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactoComponent_div_1_Template, 3, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Entrenadores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "The Rock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Clases de Pesas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_span_click_13_listener() {
            return ctx.entregarQRCode(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_span_click_16_listener() {
            return ctx.entregarQRCode(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "YouTube");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_span_click_19_listener() {
            return ctx.entregarQRCode(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "FaceBook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Adonis Creed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Clases de Boxeo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_span_click_29_listener() {
            return ctx.entregarQRCode(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_span_click_32_listener() {
            return ctx.entregarQRCode(5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "YouTube");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_span_click_35_listener() {
            return ctx.entregarQRCode(6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "FaceBook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Rich Froning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Clases de Crossfit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_span_click_45_listener() {
            return ctx.entregarQRCode(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_span_click_48_listener() {
            return ctx.entregarQRCode(5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "YouTube");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_span_click_51_listener() {
            return ctx.entregarQRCode(6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "FaceBook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Escanea el codigo QR para ir a la p\xE1gina ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "ngx-qrcode", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Formulario de contacto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "form", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactoComponent_Template_form_ngSubmit_60_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](61);

            return ctx.contactForm(_r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Asunto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Mensaje");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "textarea", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Enviar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bandera);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("elementType", ctx.elementType)("value", ctx.value);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ngx_qrcode2__WEBPACK_IMPORTED_MODULE_5__["QrcodeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RvL2NvbnRhY3RvL2NvbnRhY3RvLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contacto',
          templateUrl: './contacto.component.html',
          styleUrls: ['./contacto.component.scss']
        }]
      }], function () {
        return [{
          type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"]
        }, {
          type: _services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contacto/contacto/contacto.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/contacto/contacto/contacto.module.ts ***!
    \******************************************************/

  /*! exports provided: ContactoModule */

  /***/
  function srcAppContactoContactoContactoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactoModule", function () {
      return ContactoModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _contacto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./contacto.component */
    "./src/app/contacto/contacto/contacto.component.ts");
    /* harmony import */


    var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-qrcode2 */
    "./node_modules/ngx-qrcode2/__ivy_ngcc__/fesm2015/ngx-qrcode2.js");
    /* harmony import */


    var _contacto_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contacto-routing-module */
    "./src/app/contacto/contacto/contacto-routing-module.ts");
    /* harmony import */


    var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/message.service */
    "./src/app/services/message.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ContactoModule = /*#__PURE__*/function () {
      function ContactoModule() {
        _classCallCheck(this, ContactoModule);

        this.title = 'app';
        this.elementType = 'url';
        this.value = '';
        this.seleccion = 0;
      }

      _createClass(ContactoModule, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.seleccion);
          throw new Error("Method not implemented.");
        }
      }, {
        key: "entregarQRCode",
        value: function entregarQRCode(index) {
          console.log(index);
          /*switch(seleccion){
            
            case 1:{
              this.value='https://twitter.com/Schwarzenegger';
              break;
            }
              
            case 2:{
              this.value='https://www.youtube.com/user/arnoldclassicbra?app=desktop';
              break;
            }
               
            case 3:{
              this.value='https://www.facebook.com/arnold';
              break;
            }
               
            case 4:
              this.value='https://twitter.com/IvanDrago2020';
              break;
            
                  case 5:
              this.value='https://www.facebook.com/public/Ivan-Drago';
              break;
            
                  case 6:
              this.value='https://www.bing.com/videos/search?q=ivan+drago+youtube&ru=%2fsearch%3fq%3divan%2bdrago%2byoutube%26qs%3dn%26form%3dQBRE%26sp%3d-1%26pq%3divan%2bdrago%2byo%26sc%3d0-13%26sk%3d%26cvid%3dF363477832044772B5BA8D59ADCDEFB8&mmscn=vwrc&view=detail&mid=370771AD67E94EAC3DAB370771AD67E94EAC3DAB&rvsmid=01C9CE474E28ACF00CC501C9CE474E28ACF00CC5&FORM=VDQVAP';
              break;
            
                  case 7:
              this.value='https://www.youtube.com/user/arnoldclassicbra?app=desktop';
              break;
            
                  case 8:
              this.value='https://www.youtube.com/user/arnoldclassicbra?app=desktop';
              break;
            
                  case 9:
              this.value='https://www.youtube.com/user/arnoldclassicbra?app=desktop';
              break;
            
                  
          }*/

          /*if(index === 1){
            this.value='https://www.youtube.com/watch?v=8E74q6HzReQ';
          }
          if(index === 2){
            this.value='https://mail.google.com/mail/u/0/#inbox/FMfcgxwJWXStMbBqCHkfptGBbcvZttFB';
          }
          if(index === 3){
            this.value='https://www.facebook.com/arnold';
          }*/
        }
      }]);

      return ContactoModule;
    }();

    ContactoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ContactoModule
    });
    ContactoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ContactoModule_Factory(t) {
        return new (t || ContactoModule)();
      },
      providers: [src_app_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_qrcode2__WEBPACK_IMPORTED_MODULE_3__["NgxQRCodeModule"], _contacto_routing_module__WEBPACK_IMPORTED_MODULE_4__["ContactoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactoModule, {
        declarations: [_contacto_component__WEBPACK_IMPORTED_MODULE_2__["ContactoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_qrcode2__WEBPACK_IMPORTED_MODULE_3__["NgxQRCodeModule"], _contacto_routing_module__WEBPACK_IMPORTED_MODULE_4__["ContactoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_contacto_component__WEBPACK_IMPORTED_MODULE_2__["ContactoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_qrcode2__WEBPACK_IMPORTED_MODULE_3__["NgxQRCodeModule"], _contacto_routing_module__WEBPACK_IMPORTED_MODULE_4__["ContactoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
          providers: [src_app_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/data-api.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/data-api.service.ts ***!
    \**********************************************/

  /*! exports provided: DataApiService */

  /***/
  function srcAppServicesDataApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataApiService", function () {
      return DataApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var DataApiService = /*#__PURE__*/function () {
      function DataApiService(afs) {
        _classCallCheck(this, DataApiService);

        this.afs = afs;
        this.booksCollection = afs.collection('contact_teacher');
        this.books = this.booksCollection.valueChanges();
      }

      _createClass(DataApiService, [{
        key: "getAllBooks",
        value: function getAllBooks() {
          return this.books;
        }
      }]);

      return DataApiService;
    }();

    DataApiService.ɵfac = function DataApiService_Factory(t) {
      return new (t || DataApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]));
    };

    DataApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataApiService,
      factory: DataApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=contacto-contacto-contacto-module-es5.js.map