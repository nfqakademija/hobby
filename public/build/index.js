(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./assets/js/Routes.js":
/*!*****************************!*\
  !*** ./assets/js/Routes.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage/storage */ "./assets/js/storage/storage.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/authActions */ "./assets/js/actions/authActions.js");
/* harmony import */ var _components_Home_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Home/Home */ "./assets/js/components/Home/Home.js");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/NavBar/NavBar */ "./assets/js/components/NavBar/NavBar.js");
/* harmony import */ var _components_ProjectsList_ProjectsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ProjectsList/ProjectsList */ "./assets/js/components/ProjectsList/ProjectsList.js");
/* harmony import */ var _components_Login_Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Login/Login */ "./assets/js/components/Login/Login.js");
/* harmony import */ var _components_Register_Register__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Register/Register */ "./assets/js/components/Register/Register.js");
/* harmony import */ var _components_ProjectRegistration_ProjectRegistration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ProjectRegistration/ProjectRegistration */ "./assets/js/components/ProjectRegistration/ProjectRegistration.js");
/* harmony import */ var _components_ProjectInfo_ProjectInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ProjectInfo/ProjectInfo */ "./assets/js/components/ProjectInfo/ProjectInfo.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














var Routes =
/*#__PURE__*/
function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, _getPrototypeOf(Routes).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var user = Object(_storage_storage__WEBPACK_IMPORTED_MODULE_3__["getUserFromLS"])();
      user ? this.props.onLoadAuth(user) : null;
    }
  }, {
    key: "render",
    value: function render() {
      var isAuth = this.props.auth.isAuth;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
        basename: Object({"NODE_ENV":"development"}).PUBLIC_URL
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/",
        component: _components_Home_Home__WEBPACK_IMPORTED_MODULE_5__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/projects",
        component: _components_ProjectsList_ProjectsList__WEBPACK_IMPORTED_MODULE_7__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/login",
        component: _components_Login_Login__WEBPACK_IMPORTED_MODULE_8__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/register",
        component: _components_Register_Register__WEBPACK_IMPORTED_MODULE_9__["default"]
      }), isAuth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/project-registration",
        component: _components_ProjectRegistration_ProjectRegistration__WEBPACK_IMPORTED_MODULE_10__["default"]
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: "/login"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/admin"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/project/:id",
        component: _components_ProjectInfo_ProjectInfo__WEBPACK_IMPORTED_MODULE_11__["default"]
      }))));
    }
  }]);

  return Routes;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLoadAuth: function onLoadAuth(user) {
      return dispatch(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_4__["authUser"])(user));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Routes));

/***/ }),

/***/ "./assets/js/actions/authActions.js":
/*!******************************************!*\
  !*** ./assets/js/actions/authActions.js ***!
  \******************************************/
/*! exports provided: authUser, logout, voteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authUser", function() { return authUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voteUser", function() { return voteUser; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./assets/js/actions/types.js");

function authUser(user) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["AUTH_USER"],
    user: user
  };
}
function logout() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOG_OUT"]
  };
}
function voteUser(amount) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["VOTE_USER"],
    amount: amount
  };
}

/***/ }),

/***/ "./assets/js/actions/loginActions.js":
/*!*******************************************!*\
  !*** ./assets/js/actions/loginActions.js ***!
  \*******************************************/
/*! exports provided: onInputChange, onFormLoading, onLoginFormError, onLoginFormSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onInputChange", function() { return onInputChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onFormLoading", function() { return onFormLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLoginFormError", function() { return onLoginFormError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLoginFormSuccess", function() { return onLoginFormSuccess; });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./assets/js/actions/types.js");

function onInputChange(e) {
  return {
    type: _types_js__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FORM_INPUT_CHANGE"],
    name: e.target.name,
    value: e.target.value
  };
}
function onFormLoading() {
  return {
    type: _types_js__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FORM_LOADING"]
  };
}
function onLoginFormError(error) {
  return {
    type: _types_js__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FORM_ERROR"],
    error: error
  };
}
function onLoginFormSuccess(user) {
  return {
    type: _types_js__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FORM_SUCCESS"],
    user: user
  };
}

/***/ }),

/***/ "./assets/js/actions/projectRegisterActions.js":
/*!*****************************************************!*\
  !*** ./assets/js/actions/projectRegisterActions.js ***!
  \*****************************************************/
/*! exports provided: onInputChange, onDateChange, onProjectRegisterFormLoading, onProjectRegisterFormError, onProjectRegisterFormSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onInputChange", function() { return onInputChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDateChange", function() { return onDateChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onProjectRegisterFormLoading", function() { return onProjectRegisterFormLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onProjectRegisterFormError", function() { return onProjectRegisterFormError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onProjectRegisterFormSubmit", function() { return onProjectRegisterFormSubmit; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./assets/js/actions/types.js");

function onInputChange(e) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PROJECT_REGISTER_FORM_INPUT_CHANGE"],
    name: e.target.name,
    value: e.target.value
  };
}
function onDateChange(date) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PROJECT_REGISTER_DATE_CHANGE"],
    date: date
  };
}
function onProjectRegisterFormLoading() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PROJECT_REGISTER_FORM_LOADING"]
  };
}
function onProjectRegisterFormError(error) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PROJECT_REGISTER_FORM_ERROR"],
    error: error
  };
}
function onProjectRegisterFormSubmit(projectInfo) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PROJECT_REGISTER_FORM_SUCCESS"],
    projectInfo: projectInfo
  };
}

/***/ }),

/***/ "./assets/js/actions/projectsAction.js":
/*!*********************************************!*\
  !*** ./assets/js/actions/projectsAction.js ***!
  \*********************************************/
/*! exports provided: getProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjects", function() { return getProjects; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./assets/js/actions/types.js");

function getProjects(projects) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_PROJECTS"],
    projects: projects
  };
}

/***/ }),

/***/ "./assets/js/actions/registerActions.js":
/*!**********************************************!*\
  !*** ./assets/js/actions/registerActions.js ***!
  \**********************************************/
/*! exports provided: onInputChange, onFormLoading, onRegisterFormError, onRegisterFormSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onInputChange", function() { return onInputChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onFormLoading", function() { return onFormLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRegisterFormError", function() { return onRegisterFormError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRegisterFormSuccess", function() { return onRegisterFormSuccess; });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./assets/js/actions/types.js");

function onInputChange(e) {
  return {
    type: _types_js__WEBPACK_IMPORTED_MODULE_0__["REGISTER_FORM_INPUT_CHANGE"],
    name: e.target.name,
    value: e.target.value
  };
}
function onFormLoading() {
  return {
    type: _types_js__WEBPACK_IMPORTED_MODULE_0__["REGISTER_FORM_LOADING"]
  };
}
function onRegisterFormError(error) {
  return {
    type: _types_js__WEBPACK_IMPORTED_MODULE_0__["REGISTER_FORM_ERROR"],
    error: error
  };
}
function onRegisterFormSuccess(user) {
  return {
    type: _types_js__WEBPACK_IMPORTED_MODULE_0__["REGISTER_FORM_SUCCESS"],
    user: user
  };
}

/***/ }),

/***/ "./assets/js/actions/types.js":
/*!************************************!*\
  !*** ./assets/js/actions/types.js ***!
  \************************************/
/*! exports provided: LOGIN_FORM_INPUT_CHANGE, LOGIN_FORM_LOADING, LOGIN_FORM_ERROR, LOGIN_FORM_SUCCESS, REGISTER_FORM_INPUT_CHANGE, REGISTER_FORM_LOADING, REGISTER_FORM_ERROR, REGISTER_FORM_SUCCESS, PROJECT_REGISTER_FORM_INPUT_CHANGE, PROJECT_REGISTER_DATE_CHANGE, PROJECT_REGISTER_FORM_LOADING, PROJECT_REGISTER_FORM_ERROR, PROJECT_REGISTER_FORM_SUCCESS, GET_PROJECTS, AUTH_USER, LOG_OUT, VOTE_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FORM_INPUT_CHANGE", function() { return LOGIN_FORM_INPUT_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FORM_LOADING", function() { return LOGIN_FORM_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FORM_ERROR", function() { return LOGIN_FORM_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FORM_SUCCESS", function() { return LOGIN_FORM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_FORM_INPUT_CHANGE", function() { return REGISTER_FORM_INPUT_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_FORM_LOADING", function() { return REGISTER_FORM_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_FORM_ERROR", function() { return REGISTER_FORM_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_FORM_SUCCESS", function() { return REGISTER_FORM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECT_REGISTER_FORM_INPUT_CHANGE", function() { return PROJECT_REGISTER_FORM_INPUT_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECT_REGISTER_DATE_CHANGE", function() { return PROJECT_REGISTER_DATE_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECT_REGISTER_FORM_LOADING", function() { return PROJECT_REGISTER_FORM_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECT_REGISTER_FORM_ERROR", function() { return PROJECT_REGISTER_FORM_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECT_REGISTER_FORM_SUCCESS", function() { return PROJECT_REGISTER_FORM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROJECTS", function() { return GET_PROJECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_USER", function() { return AUTH_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT", function() { return LOG_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOTE_USER", function() { return VOTE_USER; });
// Login types
var LOGIN_FORM_INPUT_CHANGE = 'LOGIN_FORM_INPUT_CHANGE';
var LOGIN_FORM_LOADING = 'LOGIN_FORM_LOADING';
var LOGIN_FORM_ERROR = 'LOGIN_FORM_ERROR';
var LOGIN_FORM_SUCCESS = 'LOGIN_FORM_SUCCESS'; // Register types

var REGISTER_FORM_INPUT_CHANGE = 'REGISTER_FORM_INPUT_CHANGE';
var REGISTER_FORM_LOADING = 'REGISTER_FORM_LOADING';
var REGISTER_FORM_ERROR = 'REGISTER_FORM_ERROR';
var REGISTER_FORM_SUCCESS = 'REGISTER_FORM_SUCCESS'; // Project Register types

var PROJECT_REGISTER_FORM_INPUT_CHANGE = 'PROJECT_REGISTER_FORM_INPUT_CHANGE';
var PROJECT_REGISTER_DATE_CHANGE = 'PROJECT_REGISTER_DATE_CHANGE';
var PROJECT_REGISTER_FORM_LOADING = 'PROJECT_REGISTER_FORM_LOADING';
var PROJECT_REGISTER_FORM_ERROR = 'PROJECT_REGISTER_FORM_ERROR';
var PROJECT_REGISTER_FORM_SUCCESS = 'PROJECT_REGISTER_FORM_SUCCESS'; // Projects types

var GET_PROJECTS = 'GET_PROJECTS'; // Auth types

var AUTH_USER = 'AUTH_USER';
var LOG_OUT = 'LOG_OUT';
var VOTE_USER = 'VOTE_USER';

/***/ }),

/***/ "./assets/js/components/Home/Home.js":
/*!*******************************************!*\
  !*** ./assets/js/components/Home/Home.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/Link/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Home_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home.scss */ "./assets/js/components/Home/Home.scss");
/* harmony import */ var _Home_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Home_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);







var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["createMuiTheme"])({
  palette: {
    primary: {
      main: '#EA7925'
    },
    secondary: {
      main: '#0044ff'
    }
  }
});

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["MuiThemeProvider"], {
    theme: theme
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Home"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "h3",
    gutterBottom: true,
    align: "Left"
  }, "A New and Better way to engange", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "and retain employs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "subheading",
    gutterBottom: true,
    align: "Left"
  }, "Companies use HobbyCraft to organize their", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "employees hobby budget, its a perfect", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "internal croud funding system for you !"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "contained",
    color: "primary",
    size: "large"
  }, "Large")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./assets/js/components/Home/Home.scss":
/*!*********************************************!*\
  !*** ./assets/js/components/Home/Home.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/components/Loader/Loader.js":
/*!***********************************************!*\
  !*** ./assets/js/components/Loader/Loader.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loader_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.scss */ "./assets/js/components/Loader/loader.scss");
/* harmony import */ var _loader_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loader_scss__WEBPACK_IMPORTED_MODULE_1__);



var Loader = function Loader(_ref) {
  var color = _ref.color,
      _ref$h = _ref.h,
      h = _ref$h === void 0 ? 40 : _ref$h;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: h + 'px',
      height: h + 'px',
      borderRight: "".concat(h / 6, "px solid transparent"),
      borderLeft: "".concat(h / 6, "px solid transparent"),
      borderTop: "".concat(h / 6, "px solid ").concat(color),
      borderBottom: "".concat(h / 6, "px solid ").concat(color)
    },
    className: "Loader ".concat(color)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./assets/js/components/Loader/loader.scss":
/*!*************************************************!*\
  !*** ./assets/js/components/Loader/loader.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/components/Login/Login.js":
/*!*********************************************!*\
  !*** ./assets/js/components/Login/Login.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_loginActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/loginActions */ "./assets/js/actions/loginActions.js");
/* harmony import */ var _thunks_loginThunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../thunks/loginThunk */ "./assets/js/thunks/loginThunk.js");
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loader/Loader */ "./assets/js/components/Loader/Loader.js");
/* harmony import */ var _Login_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Login.scss */ "./assets/js/components/Login/Login.scss");
/* harmony import */ var _Login_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Login_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/Link/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["createMuiTheme"])({
  palette: {
    primary: {
      main: '#EA7925'
    },
    secondary: {
      main: '#0044ff'
    }
  }
});

var styles = function styles(theme) {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    button: {
      margin: theme.spacing.unit,
      justify: theme.center
    }
  };
};

var Login =
/*#__PURE__*/
function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onFormSubmit", function (e) {
      e.preventDefault();

      _this.props.onFormSubmit(_this.props.login, _this.props.history);
    });

    return _this;
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      var _this$props$login = this.props.login,
          email = _this$props$login.email,
          password = _this$props$login.password,
          error = _this$props$login.error,
          loading = _this$props$login.loading;
      var onInputChange = this.props.onInputChange;
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["MuiThemeProvider"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
        elevation: 8,
        className: "Login"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
        variant: "h5",
        gutterBottom: true,
        align: "center"
      }, "Sign In"), error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          color: 'red',
          textAlign: 'center'
        }
      }, error) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.onFormSubmit,
        className: classes.container,
        noValidate: true,
        autoComplete: "off"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "email",
        name: "email",
        value: email,
        onChange: onInputChange,
        fullWidth: true,
        required: true,
        label: "Email",
        margin: "normal",
        variant: "outlined",
        className: classes.textField
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "password",
        name: "password",
        value: password,
        onChange: onInputChange,
        fullWidth: true,
        required: true,
        label: "Password",
        margin: "normal",
        variant: "outlined",
        className: classes.textField
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        type: "submit",
        variant: "contained",
        color: "primary",
        className: classes.button,
        margin: "normal",
        gutterBottom: true,
        fullWidth: true
      }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: '#fff',
        h: 15
      }) : 'Sign In'))), ",", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
        variant: "caption",
        gutterBottom: true,
        align: "center"
      }, "If you don't have an account, please", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        color: 'secondary',
        to: "/Register"
      }, "Sign Up")));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    login: state.login
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onInputChange: function onInputChange(e) {
      return dispatch(_actions_loginActions__WEBPACK_IMPORTED_MODULE_3__["onInputChange"](e));
    },
    onFormSubmit: function onFormSubmit(user, history) {
      return dispatch(Object(_thunks_loginThunk__WEBPACK_IMPORTED_MODULE_4__["onFormSubmit"])(user, history));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["withStyles"])(styles)(Login)));

/***/ }),

/***/ "./assets/js/components/Login/Login.scss":
/*!***********************************************!*\
  !*** ./assets/js/components/Login/Login.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/components/NavBar/NavBar.js":
/*!***********************************************!*\
  !*** ./assets/js/components/NavBar/NavBar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/Tab/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _thunks_logoutThunk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../thunks/logoutThunk */ "./assets/js/thunks/logoutThunk.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["createMuiTheme"])({
  palette: {
    primary: {
      main: '#EA7925'
    },
    secondary: {
      main: '#0044ff'
    }
  }
});
var styles = {
  root: {
    flexGrow: 1
  },
  Tabs: {
    width: '100%'
  }
};

var NavBar =
/*#__PURE__*/
function (_Component) {
  _inherits(NavBar, _Component);

  function NavBar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: 0
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event, value) {
      _this.setState({
        value: value
      });
    });

    return _this;
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          onLogout = _this$props.onLogout;
      var _this$props$auth = this.props.auth,
          email = _this$props$auth.email,
          isAuth = _this$props$auth.isAuth,
          amount = _this$props$auth.amount;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["MuiThemeProvider"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
        container: true,
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
        color: "default",
        elevation: 8
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.Tabs,
        value: this.state.value,
        onChange: this.handleChange,
        componentColor: "primary",
        indicatorColor: "primary",
        textColor: "primary",
        centered: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9___default.a, {
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        exact: true,
        to: "/",
        label: "Home"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9___default.a, {
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        to: "/projects",
        label: "Projects"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9___default.a, {
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        to: "/project-registration",
        label: "Create Project"
      }), isAuth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9___default.a, {
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: "/user",
        label: "".concat(email, " (").concat(amount, "\u20AC)")
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9___default.a, {
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: "/login",
        label: "Sign In"
      }), isAuth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9___default.a, {
        onClick: onLogout,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: "/logout",
        label: "Logout"
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9___default.a, {
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: "/register",
        label: "Sign Up"
      }))))));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

NavBar.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLogout: function onLogout() {
      return dispatch(Object(_thunks_logoutThunk__WEBPACK_IMPORTED_MODULE_10__["onLogOut"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles)(NavBar)));

/***/ }),

/***/ "./assets/js/components/ProjectInfo/ProjectInfo.js":
/*!*********************************************************!*\
  !*** ./assets/js/components/ProjectInfo/ProjectInfo.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _ProjectInfo_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectInfo.scss */ "./assets/js/components/ProjectInfo/ProjectInfo.scss");
/* harmony import */ var _ProjectInfo_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProjectInfo_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);






var ProjectInfo = function ProjectInfo(props) {
  var projectInfo = props.projects.filter(function (project) {
    if (project.id.toString() === props.match.params.id) {
      return project;
    }

    return null;
  }).map(function (project, i) {
    var endDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(project.end_date).format('YYYY-MM-DD');
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Project",
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "Project-span"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "bold"
    }, "Hobby Author:"), " ", project.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "Project-span"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "bold"
    }, "Hobby Description:"), " ", project.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "Project-span"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "bold"
    }, "Hobby Amount:"), " ", project.amount, "\u20AC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "Project-span"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "bold"
    }, "Hobby Contact:"), " ", project.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "Project-span"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "bold"
    }, "Hobby EndDate:"), " ", endDate));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ProjectInfo"
  }, projectInfo, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "Link Back",
    to: "/projects"
  }, "Back to projects"));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    projects: state.projects.projects
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(ProjectInfo));

/***/ }),

/***/ "./assets/js/components/ProjectInfo/ProjectInfo.scss":
/*!***********************************************************!*\
  !*** ./assets/js/components/ProjectInfo/ProjectInfo.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/components/ProjectRegistration/ProjectRegistration.js":
/*!*************************************************************************!*\
  !*** ./assets/js/components/ProjectRegistration/ProjectRegistration.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProjectRegistration_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectRegistration.scss */ "./assets/js/components/ProjectRegistration/ProjectRegistration.scss");
/* harmony import */ var _ProjectRegistration_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ProjectRegistration_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Loader/Loader */ "./assets/js/components/Loader/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_projectRegisterActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/projectRegisterActions */ "./assets/js/actions/projectRegisterActions.js");
/* harmony import */ var _thunks_projectRegisterThunk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../thunks/projectRegisterThunk */ "./assets/js/thunks/projectRegisterThunk.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["createMuiTheme"])({
  palette: {
    primary: {
      main: '#EA7925'
    },
    secondary: {
      main: '#0044ff'
    }
  }
});

var styles = function styles(theme) {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    button: {
      margin: theme.spacing.unit,
      justify: theme.center
    }
  };
};

var ProjectRegistration =
/*#__PURE__*/
function (_Component) {
  _inherits(ProjectRegistration, _Component);

  function ProjectRegistration() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ProjectRegistration);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ProjectRegistration)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onFormSubmit", function (e) {
      e.preventDefault();

      _this.props.onFormSubmit(_this.props.projectRegister, _this.props.history, _this.props.auth.email);
    });

    return _this;
  }

  _createClass(ProjectRegistration, [{
    key: "render",
    value: function render() {
      var _this$props$projectRe = this.props.projectRegister,
          username = _this$props$projectRe.username,
          hobbyName = _this$props$projectRe.hobbyName,
          description = _this$props$projectRe.description,
          amount = _this$props$projectRe.amount,
          loading = _this$props$projectRe.loading,
          error = _this$props$projectRe.error;
      var _this$props = this.props,
          onInputChange = _this$props.onInputChange,
          onDateChange = _this$props.onDateChange;
      var classes = this.props.classes;
      var email = this.props.auth.email;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["MuiThemeProvider"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
        elevation: 8,
        className: "ProjectForm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
        variant: "h5",
        gutterBottom: true,
        align: "center"
      }, "Register Your Hobby"), error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          color: 'red',
          textAlign: 'center'
        }
      }, error) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.onFormSubmit,
        className: classes.container,
        noValidate: true,
        autoComplete: "off"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "text",
        name: "username",
        value: username,
        onChange: onInputChange,
        fullWidth: true,
        required: true,
        label: "Please enter your name",
        margin: "normal",
        variant: "outlined",
        className: classes.textField
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "text",
        name: "hobbyName",
        value: hobbyName,
        onChange: onInputChange,
        fullWidth: true,
        required: true,
        label: "Please enter your hobby name",
        margin: "normal",
        variant: "outlined",
        className: classes.textField
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "email",
        name: "email",
        value: email,
        onChange: onInputChange,
        fullWidth: true,
        required: true,
        label: "Please enter your email",
        margin: "normal",
        variant: "outlined",
        className: classes.textField
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a, {
        name: "description",
        value: description,
        onChange: onInputChange,
        multiline: true,
        fullWidth: true,
        rowsMax: "3",
        className: classes.textField,
        label: "Please describe it",
        margin: "normal",
        variant: "outlined"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "number",
        name: "amount",
        min: 1,
        value: amount,
        onChange: onInputChange,
        fullWidth: true,
        required: true,
        label: "Please enter amount for your needs",
        margin: "normal",
        variant: "outlined",
        className: classes.textField
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        type: "submit",
        variant: "contained",
        color: "primary",
        className: classes.button,
        margin: "normal",
        gutterBottom: true,
        fullWidth: true
      }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        color: '#fff',
        h: 15
      }) : 'Place your hobby'))));
    }
  }]);

  return ProjectRegistration;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    projectRegister: state.projectRegister,
    auth: state.auth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onInputChange: function onInputChange(e) {
      return dispatch(_actions_projectRegisterActions__WEBPACK_IMPORTED_MODULE_5__["onInputChange"](e));
    },
    onDateChange: function onDateChange(date) {
      return dispatch(_actions_projectRegisterActions__WEBPACK_IMPORTED_MODULE_5__["onDateChange"](date));
    },
    onFormSubmit: function onFormSubmit(projectInfo, history, email) {
      return dispatch(Object(_thunks_projectRegisterThunk__WEBPACK_IMPORTED_MODULE_6__["onProjectRegisterFormSubmit"])(projectInfo, history, email));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["withStyles"])(styles)(ProjectRegistration)));

/***/ }),

/***/ "./assets/js/components/ProjectRegistration/ProjectRegistration.scss":
/*!***************************************************************************!*\
  !*** ./assets/js/components/ProjectRegistration/ProjectRegistration.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/components/ProjectsList/ProjectsList.js":
/*!***********************************************************!*\
  !*** ./assets/js/components/ProjectsList/ProjectsList.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _ProjectsList_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectsList.scss */ "./assets/js/components/ProjectsList/ProjectsList.scss");
/* harmony import */ var _ProjectsList_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ProjectsList_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _thunks_getProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../thunks/getProjects */ "./assets/js/thunks/getProjects.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/Link/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _thunks_voteThunk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../thunks/voteThunk */ "./assets/js/thunks/voteThunk.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var ProjectsList =
/*#__PURE__*/
function (_Component) {
  _inherits(ProjectsList, _Component);

  function ProjectsList() {
    _classCallCheck(this, ProjectsList);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProjectsList).apply(this, arguments));
  }

  _createClass(ProjectsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onGetProjectsList();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          projects = _this$props.projects,
          onVoteClick = _this$props.onVoteClick;
      var amount = this.props.auth.amount;
      var projectsList;

      if (projects.length !== 0) {
        projectsList = projects && projects.map(function (project, i) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "Project-item",
            key: i
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "Project-item__span"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "bold"
          }, "Hobby Author:"), " ", project.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "Project-item__span"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "bold"
          }, "Hobby Title:"), " ", project.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "Project-item__span"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "bold"
          }, "Hobby Description:"), " ", project.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "Project-item__span"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "bold"
          }, "Hobby Collected:"), " ", project.budget), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "Project-item__span"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "bold"
          }, "Hobby Goal:"), " ", project.amount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "Project-item__span"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "bold"
          }, "Hobby Contact:"), " ", project.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: function onClick() {
              return onVoteClick(project.id, 5);
            },
            disabled: amount < 5
          }, "Vote 5\u20AC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: function onClick() {
              return onVoteClick(project.id, 15);
            },
            disabled: amount < 15
          }, "Vote 15\u20AC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: function onClick() {
              return onVoteClick(project.id, 30);
            },
            disabled: amount < 30
          }, "Vote 30\u20AC"));
        });
      } else {
        projectsList = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
          variant: "h4",
          gutterBottom: true,
          align: "center"
        }, "Projects will be here soon...");
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ProjectsList"
      }, projectsList, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
        variant: "h6",
        gutterBottom: true,
        align: "center"
      }, "If you have a project, please", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        className: "Link",
        to: "/project-registration"
      }, "Register"), ' ', "your project(hobby)."));
    }
  }]);

  return ProjectsList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    projects: state.projects.projects,
    auth: state.auth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onGetProjectsList: function onGetProjectsList() {
      return dispatch(Object(_thunks_getProjects__WEBPACK_IMPORTED_MODULE_3__["setProjectList"])());
    },
    onVoteClick: function onVoteClick(projectId, amount) {
      return dispatch(Object(_thunks_voteThunk__WEBPACK_IMPORTED_MODULE_7__["onVote"])(projectId, amount));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(ProjectsList));

/***/ }),

/***/ "./assets/js/components/ProjectsList/ProjectsList.scss":
/*!*************************************************************!*\
  !*** ./assets/js/components/ProjectsList/ProjectsList.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/components/Register/Register.js":
/*!***************************************************!*\
  !*** ./assets/js/components/Register/Register.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Loader/Loader */ "./assets/js/components/Loader/Loader.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Register_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Register.scss */ "./assets/js/components/Register/Register.scss");
/* harmony import */ var _Register_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Register_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_registerActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/registerActions */ "./assets/js/actions/registerActions.js");
/* harmony import */ var _thunks_registerThunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../thunks/registerThunk */ "./assets/js/thunks/registerThunk.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/Link/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["createMuiTheme"])({
  palette: {
    primary: {
      main: '#EA7925'
    },
    secondary: {
      main: '#0044ff'
    }
  }
});

var styles = function styles(theme) {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    button: {
      margin: theme.spacing.unit,
      justify: theme.center
    }
  };
};

var Register =
/*#__PURE__*/
function (_Component) {
  _inherits(Register, _Component);

  function Register() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Register);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Register)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onFormSubmit", function (e) {
      e.preventDefault();

      _this.props.onFormSubmit(_this.props.register, _this.props.history);
    });

    return _this;
  }

  _createClass(Register, [{
    key: "render",
    value: function render() {
      var _this$props$register = this.props.register,
          username = _this$props$register.username,
          email = _this$props$register.email,
          password = _this$props$register.password,
          password2 = _this$props$register.password2,
          error = _this$props$register.error,
          loading = _this$props$register.loading;
      var onInputChange = this.props.onInputChange;
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["MuiThemeProvider"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
        elevation: 8,
        className: "Register"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
        variant: "h5",
        gutterBottom: true,
        align: "center"
      }, "Sign Up"), error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          color: 'red',
          textAlign: 'center'
        }
      }, error) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.onFormSubmit,
        className: classes.container,
        noValidate: true,
        autoComplete: "off"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "text",
        name: "username",
        value: username,
        onChange: onInputChange,
        fullWidth: true,
        required: true,
        label: "Please enter your name",
        margin: "normal",
        variant: "outlined",
        className: classes.textField
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "text",
        name: "email",
        value: email,
        onChange: onInputChange,
        fullWidth: true,
        required: true,
        label: "Please enter your email",
        margin: "normal",
        variant: "outlined",
        className: classes.textField
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "password",
        name: "password",
        value: password,
        onChange: onInputChange,
        fullWidth: true,
        required: true,
        label: "Password",
        margin: "normal",
        color: "secondary",
        variant: "outlined",
        className: classes.textField
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "password",
        name: "password2",
        value: password2,
        onChange: onInputChange,
        fullWidth: true,
        required: true,
        label: "Repeat Password",
        margin: "normal",
        variant: "outlined",
        className: classes.textField
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        variant: "contained",
        color: "primary",
        className: classes.button,
        margin: "normal",
        fullWidth: true,
        gutterBottom: true,
        type: "submit"
      }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_1__["default"], {
        color: '#fff',
        h: 15
      }) : 'Sign Up'))), ",", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
        variant: "caption",
        gutterBottom: true,
        align: "center"
      }, "Already have an account?", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
        color: 'secondary',
        to: "/login"
      }, "Sign In")));
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    register: state.register
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onInputChange: function onInputChange(e) {
      return dispatch(_actions_registerActions__WEBPACK_IMPORTED_MODULE_4__["onInputChange"](e));
    },
    onFormSubmit: function onFormSubmit(user, history) {
      return dispatch(Object(_thunks_registerThunk__WEBPACK_IMPORTED_MODULE_5__["onRegisterFormSubmit"])(user, history));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["withStyles"])(styles)(Register)));

/***/ }),

/***/ "./assets/js/components/Register/Register.scss":
/*!*****************************************************!*\
  !*** ./assets/js/components/Register/Register.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/rootReducer */ "./assets/js/reducers/rootReducer.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.scss */ "./assets/js/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Routes */ "./assets/js/Routes.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./serviceWorker */ "./assets/js/serviceWorker.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);










axios__WEBPACK_IMPORTED_MODULE_9___default.a.defaults.headers.post['Content-Type'] = 'application/json';
axios__WEBPACK_IMPORTED_MODULE_9___default.a.interceptors.request.use(function (request) {
  return request;
});
axios__WEBPACK_IMPORTED_MODULE_9___default.a.interceptors.request.use(function (response) {
  return response;
});
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_2__["compose"];
var store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_5__["default"], composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"])));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: store
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Routes__WEBPACK_IMPORTED_MODULE_7__["default"], null)), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_8__["unregister"]();

/***/ }),

/***/ "./assets/js/index.scss":
/*!******************************!*\
  !*** ./assets/js/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/reducers/authReducer.js":
/*!*******************************************!*\
  !*** ./assets/js/reducers/authReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./assets/js/actions/types.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  email: '',
  amount: 0,
  isAuth: false
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["AUTH_USER"]:
      return _objectSpread({}, state, {
        email: action.user.email,
        amount: action.user.budget,
        isAuth: true
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["LOG_OUT"]:
      return _objectSpread({}, state, {
        email: '',
        amount: 0,
        isAuth: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["VOTE_USER"]:
      return _objectSpread({}, state, {
        amount: state.amount - action.amount
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./assets/js/reducers/loginReducer.js":
/*!********************************************!*\
  !*** ./assets/js/reducers/loginReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./assets/js/actions/types.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  email: '',
  password: '',
  error: '',
  loading: false
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FORM_INPUT_CHANGE"]:
      return _objectSpread({}, state, _defineProperty({}, action.name, action.value));

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FORM_LOADING"]:
      return _objectSpread({}, state, {
        loading: true
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FORM_ERROR"]:
      return _objectSpread({}, state, {
        error: action.error,
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FORM_SUCCESS"]:
      return _objectSpread({}, state, {
        email: '',
        password: '',
        loading: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./assets/js/reducers/projectRegisterReducer.js":
/*!******************************************************!*\
  !*** ./assets/js/reducers/projectRegisterReducer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./assets/js/actions/types.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  username: '',
  hobbyName: '',
  email: '',
  description: '',
  amount: '',
  loading: false,
  error: ''
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["PROJECT_REGISTER_FORM_INPUT_CHANGE"]:
      return _objectSpread({}, state, _defineProperty({}, action.name, action.value));

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["PROJECT_REGISTER_DATE_CHANGE"]:
      return _objectSpread({}, state, {
        endDate: action.date
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["PROJECT_REGISTER_FORM_LOADING"]:
      return _objectSpread({}, state, {
        loading: true
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["PROJECT_REGISTER_FORM_ERROR"]:
      return _objectSpread({}, state, {
        error: action.error,
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["PROJECT_REGISTER_FORM_SUCCESS"]:
      return _objectSpread({}, state, {
        username: '',
        hobbyName: '',
        email: '',
        amount: '',
        description: '',
        loading: false,
        error: ''
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./assets/js/reducers/projectsReducer.js":
/*!***********************************************!*\
  !*** ./assets/js/reducers/projectsReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./assets/js/actions/types.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  projects: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_PROJECTS"]:
      return _objectSpread({}, state, {
        projects: action.projects
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./assets/js/reducers/registerReducer.js":
/*!***********************************************!*\
  !*** ./assets/js/reducers/registerReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./assets/js/actions/types.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  username: '',
  email: '',
  password: '',
  password2: '',
  loading: false,
  error: ''
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["REGISTER_FORM_INPUT_CHANGE"]:
      return _objectSpread({}, state, _defineProperty({}, action.name, action.value));

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["REGISTER_FORM_LOADING"]:
      return _objectSpread({}, state, {
        loading: true
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["REGISTER_FORM_ERROR"]:
      return _objectSpread({}, state, {
        error: action.error,
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["REGISTER_FORM_SUCCESS"]:
      return _objectSpread({}, state, {
        username: '',
        email: '',
        password: '',
        password2: '',
        error: '',
        loading: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./assets/js/reducers/rootReducer.js":
/*!*******************************************!*\
  !*** ./assets/js/reducers/rootReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _loginReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginReducer */ "./assets/js/reducers/loginReducer.js");
/* harmony import */ var _registerReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registerReducer */ "./assets/js/reducers/registerReducer.js");
/* harmony import */ var _projectRegisterReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectRegisterReducer */ "./assets/js/reducers/projectRegisterReducer.js");
/* harmony import */ var _projectsReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectsReducer */ "./assets/js/reducers/projectsReducer.js");
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authReducer */ "./assets/js/reducers/authReducer.js");






var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  login: _loginReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  register: _registerReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  projectRegister: _projectRegisterReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  projects: _projectsReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  auth: _authReducer__WEBPACK_IMPORTED_MODULE_5__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./assets/js/serviceWorker.js":
/*!************************************!*\
  !*** ./assets/js/serviceWorker.js ***!
  \************************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  })["catch"](function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  })["catch"](function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./assets/js/storage/storage.js":
/*!**************************************!*\
  !*** ./assets/js/storage/storage.js ***!
  \**************************************/
/*! exports provided: getUserFromLS, setUserToLS, changeUserAmountInLS, removeUserFromLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserFromLS", function() { return getUserFromLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserToLS", function() { return setUserToLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeUserAmountInLS", function() { return changeUserAmountInLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUserFromLS", function() { return removeUserFromLS; });
function getUserFromLS() {
  var user = localStorage.getItem('hobbyCraft-user');
  return JSON.parse(user);
}
function setUserToLS(user) {
  console.log('User set to LS');
  localStorage.setItem('hobbyCraft-user', JSON.stringify(user));
  return;
}
function changeUserAmountInLS(amount) {
  var user = JSON.parse(localStorage.getItem('hobbyCraft-user'));
  user.budget = user.budget - amount;
  localStorage.setItem('hobbyCraft-user', JSON.stringify(user));
  return;
}
function removeUserFromLS() {
  localStorage.removeItem('hobbyCraft-user');
  return;
}

/***/ }),

/***/ "./assets/js/thunks/getProjects.js":
/*!*****************************************!*\
  !*** ./assets/js/thunks/getProjects.js ***!
  \*****************************************/
/*! exports provided: setProjectList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProjectList", function() { return setProjectList; });
/* harmony import */ var _actions_projectsAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/projectsAction */ "./assets/js/actions/projectsAction.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var setProjectList = function setProjectList() {
  return function (dispatch) {
    var projectList = axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/hobbies').then(function (res) {
      return dispatch(Object(_actions_projectsAction__WEBPACK_IMPORTED_MODULE_0__["getProjects"])(res.data));
    })["catch"](function (error) {
      return console.log(error);
    });
    return projectList;
  };
};

/***/ }),

/***/ "./assets/js/thunks/loginThunk.js":
/*!****************************************!*\
  !*** ./assets/js/thunks/loginThunk.js ***!
  \****************************************/
/*! exports provided: onFormSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onFormSubmit", function() { return onFormSubmit; });
/* harmony import */ var _actions_loginActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/loginActions */ "./assets/js/actions/loginActions.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/authActions */ "./assets/js/actions/authActions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/storage */ "./assets/js/storage/storage.js");




var onFormSubmit = function onFormSubmit(user, history) {
  return function (dispatch) {
    dispatch(_actions_loginActions__WEBPACK_IMPORTED_MODULE_0__["onFormLoading"]());

    if (user.email === '' || user.password === '') {
      return dispatch(_actions_loginActions__WEBPACK_IMPORTED_MODULE_0__["onLoginFormError"]('Please fill fields'));
    }

    var loginJson = {
      "security": {
        "credentials": {
          "email": user.email,
          "password": user.password
        }
      }
    };
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/security/login', loginJson).then(function (res) {
      Object(_storage_storage__WEBPACK_IMPORTED_MODULE_3__["setUserToLS"])(res.data);
      dispatch(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_1__["authUser"])(res.data));
      dispatch(_actions_loginActions__WEBPACK_IMPORTED_MODULE_0__["onLoginFormSuccess"](user));
      history.push('/');
    })["catch"](function (err) {
      dispatch(_actions_loginActions__WEBPACK_IMPORTED_MODULE_0__["onLoginFormError"]('Server error. Please try again later.'));
    });
  };
};

/***/ }),

/***/ "./assets/js/thunks/logoutThunk.js":
/*!*****************************************!*\
  !*** ./assets/js/thunks/logoutThunk.js ***!
  \*****************************************/
/*! exports provided: onLogOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLogOut", function() { return onLogOut; });
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/authActions */ "./assets/js/actions/authActions.js");
/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/storage */ "./assets/js/storage/storage.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var onLogOut = function onLogOut() {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/security/logout').then(function (res) {
      Object(_storage_storage__WEBPACK_IMPORTED_MODULE_1__["removeUserFromLS"])();
      dispatch(_actions_authActions__WEBPACK_IMPORTED_MODULE_0__["logout"]());
    })["catch"](function (err) {
      return console.log(err);
    });
    return null;
  };
};

/***/ }),

/***/ "./assets/js/thunks/projectRegisterThunk.js":
/*!**************************************************!*\
  !*** ./assets/js/thunks/projectRegisterThunk.js ***!
  \**************************************************/
/*! exports provided: onProjectRegisterFormSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onProjectRegisterFormSubmit", function() { return onProjectRegisterFormSubmit; });
/* harmony import */ var _actions_projectRegisterActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/projectRegisterActions */ "./assets/js/actions/projectRegisterActions.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);




var onProjectRegisterFormSubmit = function onProjectRegisterFormSubmit(projectInfo, history, email) {
  return function (dispatch) {
    dispatch(_actions_projectRegisterActions__WEBPACK_IMPORTED_MODULE_0__["onProjectRegisterFormLoading"]());

    if (projectInfo.username === '' || projectInfo.hobbyName === '' || projectInfo.description === '' || projectInfo.amount === '') {
      return dispatch(_actions_projectRegisterActions__WEBPACK_IMPORTED_MODULE_0__["onProjectRegisterFormError"]('Please fill all fields'));
    }

    var formattedDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(projectInfo.endDate).format('YYYY-MM-DD');
    var json = JSON.stringify({
      "title": projectInfo.hobbyName,
      "description": projectInfo.description,
      "amount": projectInfo.amount,
      "email": email,
      "username": projectInfo.username
    });
    console.log(json);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/hobby', json).then(function (res) {
      dispatch(_actions_projectRegisterActions__WEBPACK_IMPORTED_MODULE_0__["onProjectRegisterFormSubmit"](res));
      history.push('/projects');
    })["catch"](function (error) {
      dispatch(_actions_projectRegisterActions__WEBPACK_IMPORTED_MODULE_0__["onProjectRegisterFormError"]('Server error. Please try again later.'));
      console.log(error);
    });
  };
};

/***/ }),

/***/ "./assets/js/thunks/registerThunk.js":
/*!*******************************************!*\
  !*** ./assets/js/thunks/registerThunk.js ***!
  \*******************************************/
/*! exports provided: onRegisterFormSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRegisterFormSubmit", function() { return onRegisterFormSubmit; });
/* harmony import */ var _actions_registerActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/registerActions */ "./assets/js/actions/registerActions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var onRegisterFormSubmit = function onRegisterFormSubmit(user, history) {
  return function (dispatch) {
    dispatch(_actions_registerActions__WEBPACK_IMPORTED_MODULE_0__["onFormLoading"]());

    if (user.username === '' || user.email === '' || user.password === '' || user.password2 === '') {
      return dispatch(_actions_registerActions__WEBPACK_IMPORTED_MODULE_0__["onRegisterFormError"]('Please fill fields'));
    }

    if (user.password !== user.password2) {
      return dispatch(_actions_registerActions__WEBPACK_IMPORTED_MODULE_0__["onRegisterFormError"]('Passwords doesn\'t match'));
    }

    var registerJson = {
      email: user.email,
      password: user.password
    };
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/security/register', registerJson).then(function (res) {
      dispatch(_actions_registerActions__WEBPACK_IMPORTED_MODULE_0__["onRegisterFormSuccess"](registerJson));
      history.push('/login');
    })["catch"](function (err) {
      dispatch(_actions_registerActions__WEBPACK_IMPORTED_MODULE_0__["onRegisterFormError"]('Server error. Please try again later.'));
    });
  };
};

/***/ }),

/***/ "./assets/js/thunks/voteThunk.js":
/*!***************************************!*\
  !*** ./assets/js/thunks/voteThunk.js ***!
  \***************************************/
/*! exports provided: onVote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onVote", function() { return onVote; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getProjects */ "./assets/js/thunks/getProjects.js");
/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/storage */ "./assets/js/storage/storage.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/authActions */ "./assets/js/actions/authActions.js");




var onVote = function onVote(projectId, amount) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/vote', {
      hobby: projectId,
      amount: amount
    }).then(function (res) {
      Object(_storage_storage__WEBPACK_IMPORTED_MODULE_2__["changeUserAmountInLS"])(amount);
      dispatch(Object(_getProjects__WEBPACK_IMPORTED_MODULE_1__["setProjectList"])());
      dispatch(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_3__["voteUser"])(amount));
    })["catch"](function (err) {
      return console.log(err);
    });
    return null;
  };
};

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

},[["./assets/js/index.js","runtime","vendors~index"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvUm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL2xvZ2luQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy9wcm9qZWN0UmVnaXN0ZXJBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3Byb2plY3RzQWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3JlZ2lzdGVyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS9Ib21lLnNjc3M/MGQ0MSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2FkZXIvTG9hZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvYWRlci9sb2FkZXIuc2Nzcz85NzcyIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLnNjc3M/ZjgzZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RJbmZvL1Byb2plY3RJbmZvLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RJbmZvL1Byb2plY3RJbmZvLnNjc3M/MDMxNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qcm9qZWN0UmVnaXN0cmF0aW9uL1Byb2plY3RSZWdpc3RyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdFJlZ2lzdHJhdGlvbi9Qcm9qZWN0UmVnaXN0cmF0aW9uLnNjc3M/NGNlOCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qcm9qZWN0c0xpc3QvUHJvamVjdHNMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RzTGlzdC9Qcm9qZWN0c0xpc3Quc2Nzcz80ZDc1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JlZ2lzdGVyL1JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JlZ2lzdGVyL1JlZ2lzdGVyLnNjc3M/YzI2YiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2luZGV4LnNjc3M/OTdjZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL2xvZ2luUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvcHJvamVjdFJlZ2lzdGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvcHJvamVjdHNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy9yZWdpc3RlclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZXJ2aWNlV29ya2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdG9yYWdlL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RodW5rcy9nZXRQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL2xvZ2luVGh1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RodW5rcy9sb2dvdXRUaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL3Byb2plY3RSZWdpc3RlclRodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3MvcmVnaXN0ZXJUaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL3ZvdGVUaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF5cXC5cXC8uKiQiXSwibmFtZXMiOlsiUm91dGVzIiwidXNlciIsImdldFVzZXJGcm9tTFMiLCJwcm9wcyIsIm9uTG9hZEF1dGgiLCJpc0F1dGgiLCJhdXRoIiwicHJvY2VzcyIsIlBVQkxJQ19VUkwiLCJIb21lIiwiUHJvamVjdHNMaXN0IiwiTG9naW4iLCJSZWdpc3RlciIsIlByb2plY3RSZWdpc3RyYXRpb24iLCJQcm9qZWN0SW5mbyIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhdXRoVXNlciIsImNvbm5lY3QiLCJ0eXBlIiwidHlwZXMiLCJsb2dvdXQiLCJMT0dfT1VUIiwidm90ZVVzZXIiLCJhbW91bnQiLCJvbklucHV0Q2hhbmdlIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uRm9ybUxvYWRpbmciLCJMT0dJTl9GT1JNX0xPQURJTkciLCJvbkxvZ2luRm9ybUVycm9yIiwiZXJyb3IiLCJvbkxvZ2luRm9ybVN1Y2Nlc3MiLCJvbkRhdGVDaGFuZ2UiLCJkYXRlIiwib25Qcm9qZWN0UmVnaXN0ZXJGb3JtTG9hZGluZyIsIlBST0pFQ1RfUkVHSVNURVJfRk9STV9MT0FESU5HIiwib25Qcm9qZWN0UmVnaXN0ZXJGb3JtRXJyb3IiLCJvblByb2plY3RSZWdpc3RlckZvcm1TdWJtaXQiLCJwcm9qZWN0SW5mbyIsImdldFByb2plY3RzIiwicHJvamVjdHMiLCJSRUdJU1RFUl9GT1JNX0xPQURJTkciLCJvblJlZ2lzdGVyRm9ybUVycm9yIiwib25SZWdpc3RlckZvcm1TdWNjZXNzIiwiTE9HSU5fRk9STV9JTlBVVF9DSEFOR0UiLCJMT0dJTl9GT1JNX0VSUk9SIiwiTE9HSU5fRk9STV9TVUNDRVNTIiwiUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UiLCJSRUdJU1RFUl9GT1JNX0VSUk9SIiwiUkVHSVNURVJfRk9STV9TVUNDRVNTIiwiUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRSIsIlBST0pFQ1RfUkVHSVNURVJfREFURV9DSEFOR0UiLCJQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fRVJST1IiLCJQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fU1VDQ0VTUyIsIkdFVF9QUk9KRUNUUyIsIkFVVEhfVVNFUiIsIlZPVEVfVVNFUiIsInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJMb2FkZXIiLCJjb2xvciIsImgiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJpZ2h0IiwiYm9yZGVyTGVmdCIsImJvcmRlclRvcCIsImJvcmRlckJvdHRvbSIsInN0eWxlcyIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4V3JhcCIsInRleHRGaWVsZCIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwidW5pdCIsIm1hcmdpblJpZ2h0IiwiYnV0dG9uIiwibWFyZ2luIiwianVzdGlmeSIsImNlbnRlciIsInByZXZlbnREZWZhdWx0Iiwib25Gb3JtU3VibWl0IiwibG9naW4iLCJoaXN0b3J5IiwiZW1haWwiLCJwYXNzd29yZCIsImxvYWRpbmciLCJjbGFzc2VzIiwidGV4dEFsaWduIiwiUm91dGVyTGluayIsImFjdGlvbnMiLCJ3aXRoU3R5bGVzIiwicm9vdCIsImZsZXhHcm93IiwiVGFicyIsIk5hdkJhciIsImV2ZW50Iiwic2V0U3RhdGUiLCJvbkxvZ291dCIsImhhbmRsZUNoYW5nZSIsIlJvdXRlckxpbmtOYXYiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiTG9nb3V0IiwiZmlsdGVyIiwicHJvamVjdCIsImlkIiwidG9TdHJpbmciLCJtYXRjaCIsInBhcmFtcyIsIm1hcCIsImkiLCJlbmREYXRlIiwibW9tZW50IiwiZW5kX2RhdGUiLCJmb3JtYXQiLCJ1c2VybmFtZSIsImRlc2NyaXB0aW9uIiwicHJvamVjdFJlZ2lzdGVyIiwiaG9iYnlOYW1lIiwib25HZXRQcm9qZWN0c0xpc3QiLCJvblZvdGVDbGljayIsInByb2plY3RzTGlzdCIsImxlbmd0aCIsInRpdGxlIiwiYnVkZ2V0Iiwic2V0UHJvamVjdExpc3QiLCJwcm9qZWN0SWQiLCJvblZvdGUiLCJyZWdpc3RlciIsInBhc3N3b3JkMiIsIm9uUmVnaXN0ZXJGb3JtU3VibWl0IiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJwb3N0IiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsInJlc3BvbnNlIiwiY29tcG9zZUVuaGFuY2VycyIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyIsImNvbXBvc2UiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNlcnZpY2VXb3JrZXIiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJjb21iaW5lUmVkdWNlcnMiLCJsb2dpblJlZHVjZXIiLCJyZWdpc3RlclJlZHVjZXIiLCJwcm9qZWN0UmVnaXN0ZXJSZWR1Y2VyIiwicHJvamVjdHNSZWR1Y2VyIiwiYXV0aFJlZHVjZXIiLCJpc0xvY2FsaG9zdCIsIkJvb2xlYW4iLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwiY29uZmlnIiwicmVnaXN0ZXJWYWxpZFNXIiwic3dVcmwiLCJuYXZpZ2F0b3IiLCJ0aGVuIiwicmVnaXN0cmF0aW9uIiwib251cGRhdGVmb3VuZCIsImluc3RhbGxpbmdXb3JrZXIiLCJpbnN0YWxsaW5nIiwib25zdGF0ZWNoYW5nZSIsImNvbnRyb2xsZXIiLCJjb25zb2xlIiwibG9nIiwib25VcGRhdGUiLCJvblN1Y2Nlc3MiLCJjaGVja1ZhbGlkU2VydmljZVdvcmtlciIsImZldGNoIiwiY29udGVudFR5cGUiLCJnZXQiLCJzdGF0dXMiLCJpbmRleE9mIiwicmVhZHkiLCJ1bnJlZ2lzdGVyIiwicmVsb2FkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNldFVzZXJUb0xTIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImNoYW5nZVVzZXJBbW91bnRJbkxTIiwicmVtb3ZlVXNlckZyb21MUyIsInJlbW92ZUl0ZW0iLCJwcm9qZWN0TGlzdCIsInJlcyIsImRhdGEiLCJsb2dpbkpzb24iLCJwdXNoIiwiZXJyIiwib25Mb2dPdXQiLCJmb3JtYXR0ZWREYXRlIiwianNvbiIsInJlZ2lzdGVySnNvbiIsImhvYmJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBR01BLE07Ozs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQ2xCLFVBQU1DLElBQUksR0FBR0Msc0VBQWEsRUFBMUI7QUFDQUQsVUFBSSxHQUFHLEtBQUtFLEtBQUwsQ0FBV0MsVUFBWCxDQUFzQkgsSUFBdEIsQ0FBSCxHQUFpQyxJQUFyQztBQUNEOzs7NkJBRVE7QUFBQSxVQUNBSSxNQURBLEdBQ1MsS0FBS0YsS0FBTCxDQUFXRyxJQURwQixDQUNBRCxNQURBO0FBRVAsYUFDRSwyREFBQyw4REFBRDtBQUFlLGdCQUFRLEVBQUVFLGtDQUFBLENBQVlDO0FBQXJDLFNBQ0UsMkRBQUMsOENB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIEJyb3dzZXJSb3V0ZXIsUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtnZXRVc2VyRnJvbUxTfSBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZSc7XG5pbXBvcnQge2F1dGhVc2VyfSBmcm9tICcuL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZS9Ib21lJztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdkJhci9OYXZCYXInO1xuaW1wb3J0IFByb2plY3RzTGlzdCBmcm9tICAnLi9jb21wb25lbnRzL1Byb2plY3RzTGlzdC9Qcm9qZWN0c0xpc3QnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbic7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi9jb21wb25lbnRzL1JlZ2lzdGVyL1JlZ2lzdGVyJztcbmltcG9ydCBQcm9qZWN0UmVnaXN0cmF0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Qcm9qZWN0UmVnaXN0cmF0aW9uL1Byb2plY3RSZWdpc3RyYXRpb24nO1xuaW1wb3J0IFByb2plY3RJbmZvIGZyb20gJy4vY29tcG9uZW50cy9Qcm9qZWN0SW5mby9Qcm9qZWN0SW5mbyc7XG5cblxuY2xhc3MgUm91dGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgdXNlciA9IGdldFVzZXJGcm9tTFMoKTtcbiAgICB1c2VyID8gdGhpcy5wcm9wcy5vbkxvYWRBdXRoKHVzZXIpIDogbnVsbFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtpc0F1dGh9ID10aGlzLnByb3BzLmF1dGhcbiAgICByZXR1cm4gKFxuICAgICAgPEJyb3dzZXJSb3V0ZXIgYmFzZW5hbWU9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9PlxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPE5hdkJhci8+XG4gICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9e0hvbWV9Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvcHJvamVjdHMnIGNvbXBvbmVudD17UHJvamVjdHNMaXN0fS8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL2xvZ2luJyBjb21wb25lbnQ9e0xvZ2lufS8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL3JlZ2lzdGVyJyBjb21wb25lbnQ9e1JlZ2lzdGVyfS8+XG4gICAgICAgICAgICB7aXNBdXRoID8gPFJvdXRlIHBhdGg9Jy9wcm9qZWN0LXJlZ2lzdHJhdGlvbicgY29tcG9uZW50PXtQcm9qZWN0UmVnaXN0cmF0aW9ufS8+IDogPFJlZGlyZWN0IHRvPScvbG9naW4nLz59XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL2FkbWluJyAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9wcm9qZWN0LzppZCcgY29tcG9uZW50PXtQcm9qZWN0SW5mb30vPlxuICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgPC9Ccm93c2VyUm91dGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYXV0aDogc3RhdGUuYXV0aFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgb25Mb2FkQXV0aDogKHVzZXIpID0+IGRpc3BhdGNoKGF1dGhVc2VyKHVzZXIpKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoUm91dGVzKTtcbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXV0aFVzZXIodXNlcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkFVVEhfVVNFUixcbiAgICAgICAgdXNlclxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5MT0dfT1VUXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdm90ZVVzZXIoYW1vdW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVk9URV9VU0VSLFxuICAgICAgICBhbW91bnRcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbklucHV0Q2hhbmdlKGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5MT0dJTl9GT1JNX0lOUFVUX0NIQU5HRSxcbiAgICBuYW1lOiBlLnRhcmdldC5uYW1lLFxuICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkZvcm1Mb2FkaW5nKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLkxPR0lOX0ZPUk1fTE9BRElOR1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvZ2luRm9ybUVycm9yKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuTE9HSU5fRk9STV9FUlJPUixcbiAgICBlcnJvclxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvZ2luRm9ybVN1Y2Nlc3ModXNlcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6dHlwZXMuTE9HSU5fRk9STV9TVUNDRVNTLFxuICAgIHVzZXJcbiAgfVxufSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gb25JbnB1dENoYW5nZShlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRSxcbiAgICBuYW1lOiBlLnRhcmdldC5uYW1lLFxuICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkRhdGVDaGFuZ2UoZGF0ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfREFURV9DSEFOR0UsXG4gICAgZGF0ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblByb2plY3RSZWdpc3RlckZvcm1Mb2FkaW5nKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9MT0FESU5HXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uUHJvamVjdFJlZ2lzdGVyRm9ybUVycm9yKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0VSUk9SLFxuICAgIGVycm9yXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uUHJvamVjdFJlZ2lzdGVyRm9ybVN1Ym1pdChwcm9qZWN0SW5mbykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9TVUNDRVNTLFxuICAgIHByb2plY3RJbmZvXG4gIH1cbn0iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RzKHByb2plY3RzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuR0VUX1BST0pFQ1RTLFxuICAgIHByb2plY3RzXG4gIH1cbn0iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uSW5wdXRDaGFuZ2UoZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlJFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFLFxuICAgIG5hbWU6IGUudGFyZ2V0Lm5hbWUsXG4gICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRm9ybUxvYWRpbmcoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuUkVHSVNURVJfRk9STV9MT0FESU5HXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uUmVnaXN0ZXJGb3JtRXJyb3IoZXJyb3IpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5SRUdJU1RFUl9GT1JNX0VSUk9SLFxuICAgIGVycm9yXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uUmVnaXN0ZXJGb3JtU3VjY2Vzcyh1c2VyKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTp0eXBlcy5SRUdJU1RFUl9GT1JNX1NVQ0NFU1MsXG4gICAgdXNlclxuICB9XG59IiwiLy8gTG9naW4gdHlwZXNcblxuZXhwb3J0IGNvbnN0IExPR0lOX0ZPUk1fSU5QVVRfQ0hBTkdFID0gJ0xPR0lOX0ZPUk1fSU5QVVRfQ0hBTkdFJztcbmV4cG9ydCBjb25zdCBMT0dJTl9GT1JNX0xPQURJTkcgPSAnTE9HSU5fRk9STV9MT0FESU5HJztcbmV4cG9ydCBjb25zdCBMT0dJTl9GT1JNX0VSUk9SID0gJ0xPR0lOX0ZPUk1fRVJST1InO1xuZXhwb3J0IGNvbnN0IExPR0lOX0ZPUk1fU1VDQ0VTUyA9ICdMT0dJTl9GT1JNX1NVQ0NFU1MnO1xuXG4vLyBSZWdpc3RlciB0eXBlc1xuXG5leHBvcnQgY29uc3QgUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UgPSAnUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UnO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZPUk1fTE9BRElORyA9ICdSRUdJU1RFUl9GT1JNX0xPQURJTkcnO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZPUk1fRVJST1IgPSAnUkVHSVNURVJfRk9STV9FUlJPUic7XG5leHBvcnQgY29uc3QgUkVHSVNURVJfRk9STV9TVUNDRVNTID0gJ1JFR0lTVEVSX0ZPUk1fU1VDQ0VTUyc7XG5cbi8vIFByb2plY3QgUmVnaXN0ZXIgdHlwZXNcblxuZXhwb3J0IGNvbnN0IFBST0pFQ1RfUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UgPSAnUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRSc7XG5leHBvcnQgY29uc3QgUFJPSkVDVF9SRUdJU1RFUl9EQVRFX0NIQU5HRSA9ICdQUk9KRUNUX1JFR0lTVEVSX0RBVEVfQ0hBTkdFJztcbmV4cG9ydCBjb25zdCBQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fTE9BRElORyA9ICdQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fTE9BRElORyc7XG5leHBvcnQgY29uc3QgUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0VSUk9SID0gJ1BST0pFQ1RfUkVHSVNURVJfRk9STV9FUlJPUic7XG5leHBvcnQgY29uc3QgUFJPSkVDVF9SRUdJU1RFUl9GT1JNX1NVQ0NFU1MgPSAnUFJPSkVDVF9SRUdJU1RFUl9GT1JNX1NVQ0NFU1MnO1xuXG4vLyBQcm9qZWN0cyB0eXBlc1xuXG5leHBvcnQgY29uc3QgR0VUX1BST0pFQ1RTID0gJ0dFVF9QUk9KRUNUUyc7XG5cbi8vIEF1dGggdHlwZXNcblxuZXhwb3J0IGNvbnN0IEFVVEhfVVNFUiA9ICdBVVRIX1VTRVInO1xuZXhwb3J0IGNvbnN0IExPR19PVVQgPSAnTE9HX09VVCc7XG5leHBvcnQgY29uc3QgVk9URV9VU0VSID0gJ1ZPVEVfVVNFUic7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgJy4vSG9tZS5zY3NzJztcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IHtjcmVhdGVNdWlUaGVtZSwgTXVpVGhlbWVQcm92aWRlcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gICAgcGFsZXR0ZToge1xuICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgbWFpbjogJyMwMDQ0ZmYnLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxuY29uc3QgSG9tZSA9ICggKSA9PiB7XG4gIHJldHVybiAoXG4gICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZSc+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImgzXCJcbiAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICAgIGFsaWduPVwiTGVmdFwiXG4gICAgICAgICAgICAgICAgPkEgTmV3IGFuZCBCZXR0ZXIgd2F5IHRvIGVuZ2FuZ2U8YnIvPlxuICAgICAgICAgICAgICAgIGFuZCByZXRhaW4gZW1wbG95c1xuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YmhlYWRpbmdcIlxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgIGFsaWduPVwiTGVmdFwiXG4gICAgICAgICAgICA+Q29tcGFuaWVzIHVzZSBIb2JieUNyYWZ0IHRvIG9yZ2FuaXplIHRoZWlyPGJyLz5cbiAgICAgICAgICAgICAgICBlbXBsb3llZXMgaG9iYnkgYnVkZ2V0LCBpdHMgYSBwZXJmZWN0PGJyLz5cbiAgICAgICAgICAgICAgICBpbnRlcm5hbCBjcm91ZCBmdW5kaW5nIHN5c3RlbSBmb3IgeW91ICFcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICA+TGFyZ2U8L0J1dHRvbj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9sb2FkZXIuc2Nzcyc7XG5cbmNvbnN0IExvYWRlciA9ICh7Y29sb3IsaD00MH0pID0+IChcbiAgPGRpdlxuICAgIHN0eWxlPXt7XG4gICAgICB3aWR0aDpoKydweCcsXG4gICAgICBoZWlnaHQ6aCsncHgnLFxuICAgICAgYm9yZGVyUmlnaHQ6YCR7aC82fXB4IHNvbGlkIHRyYW5zcGFyZW50YCxcbiAgICAgIGJvcmRlckxlZnQ6YCR7aC82fXB4IHNvbGlkIHRyYW5zcGFyZW50YCxcbiAgICAgIGJvcmRlclRvcDpgJHtoLzZ9cHggc29saWQgJHtjb2xvcn1gLFxuICAgICAgYm9yZGVyQm90dG9tOmAke2gvNn1weCBzb2xpZCAke2NvbG9yfWAsXG4gICAgfX1cbiAgICBjbGFzc05hbWU9e2BMb2FkZXIgJHtjb2xvcn1gfS8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dpbkFjdGlvbnMnO1xuaW1wb3J0IHsgb25Gb3JtU3VibWl0IH0gZnJvbSAnLi4vLi4vdGh1bmtzL2xvZ2luVGh1bmsnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXIvTG9hZGVyJztcbmltcG9ydCAnLi9Mb2dpbi5zY3NzJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IHtjcmVhdGVNdWlUaGVtZSwgTXVpVGhlbWVQcm92aWRlciwgd2l0aFN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjMDA0NGZmJyxcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICB9LFxuICB0ZXh0RmllbGQ6IHtcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAganVzdGlmeTogdGhlbWUuY2VudGVyLFxuICB9LFxufSk7XG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBvbkZvcm1TdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uRm9ybVN1Ym1pdCh0aGlzLnByb3BzLmxvZ2luLCB0aGlzLnByb3BzLmhpc3RvcnkpXG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGxvYWRpbmcgfSA9IHRoaXMucHJvcHMubG9naW5cbiAgICBjb25zdCB7b25JbnB1dENoYW5nZX0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezh9IGNsYXNzTmFtZT0nTG9naW4nPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCI+U2lnbiBJblxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAge2Vycm9yID8gPHAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgICAgICAgICB9fT57ZXJyb3J9PC9wPiA6IG51bGx9XG4gICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uRm9ybVN1Ym1pdH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfVxuICAgICAgICAgICAgICAgIG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPyA8TG9hZGVyIGNvbG9yPXsnI2ZmZid9IGg9ezE1fSAvPiA6ICdTaWduIEluJ31cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9QYXBlcj4sXG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNhcHRpb25cIlxuICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIiA+XG4gICAgICAgICAgICBJZiB5b3UgZG9uJ3QgaGF2ZSBhbiBhY2NvdW50LCBwbGVhc2V7JyAnfVxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgICAgY29sb3I9eydzZWNvbmRhcnknfVxuICAgICAgICAgICAgICAgIHRvPScvUmVnaXN0ZXInPlxuICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGxvZ2luOiBzdGF0ZS5sb2dpblxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgb25JbnB1dENoYW5nZTogKGUpID0+IGRpc3BhdGNoKGFjdGlvbnMub25JbnB1dENoYW5nZShlKSksXG4gIG9uRm9ybVN1Ym1pdDogKHVzZXIsIGhpc3RvcnkpID0+ZGlzcGF0Y2gob25Gb3JtU3VibWl0KHVzZXIsaGlzdG9yeSkpLFxufSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhTdHlsZXMoc3R5bGVzKShMb2dpbikpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOYXZMaW5rIGFzIFJvdXRlckxpbmtOYXYgLCBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFRhYnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFicyc7XG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYic7XG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyLCBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge29uTG9nT3V0IGFzIExvZ291dH0gZnJvbSAnLi4vLi4vdGh1bmtzL2xvZ291dFRodW5rJztcblxuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgIG1haW46ICcjRUE3OTI1JyxcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnIzAwNDRmZicsXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgcm9vdDoge1xuICAgICAgICBmbGV4R3JvdzogMSxcbiAgICB9LFxuICAgIFRhYnM6e1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfVxuXG59O1xuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9e1xuICAgICAgdmFsdWU6IDAsXG4gIH1cblxuICAgIGhhbmRsZUNoYW5nZSA9IChldmVudCwgdmFsdWUpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pO1xuICAgIH07XG5cbiAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgY2xhc3Nlcywgb25Mb2dvdXQgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7ZW1haWwsIGlzQXV0aCwgYW1vdW50fSA9IHRoaXMucHJvcHMuYXV0aDtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxHcmlkXG4gICAgICAgICAgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxuICAgICAgPlxuICAgICAgICAgICAgPEFwcEJhciAgY29sb3I9XCJkZWZhdWx0XCIgZWxldmF0aW9uPXs4fSA+XG4gICAgICAgICAgICAgICAgPFRvb2xiYXIgPlxuICAgICAgICAgICAgICAgICAgICA8VGFicyAgY2xhc3NOYW1lPXtjbGFzc2VzLlRhYnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudENvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJlZFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgIGNvbXBvbmVudD17Um91dGVyTGlua05hdn0gZXhhY3QgdG89Jy8nIGxhYmVsPVwiSG9tZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgIGNvbXBvbmVudD17Um91dGVyTGlua05hdn0gdG89Jy9wcm9qZWN0cycgICBsYWJlbD1cIlByb2plY3RzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiAgY29tcG9uZW50PXtSb3V0ZXJMaW5rTmF2fSB0bz0nL3Byb2plY3QtcmVnaXN0cmF0aW9uJyBsYWJlbD1cIkNyZWF0ZSBQcm9qZWN0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc0F1dGggPyA8VGFiICBjb21wb25lbnQ9e1JvdXRlckxpbmt9ICB0bz0nL3VzZXInIGxhYmVsPXtgJHtlbWFpbH0gKCR7YW1vdW50feKCrClgfSAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfSAgdG89Jy9sb2dpbicgbGFiZWw9XCJTaWduIEluXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc0F1dGggPyA8VGFiIG9uQ2xpY2s9e29uTG9nb3V0fSAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfSAgdG89Jy9sb2dvdXQnIGxhYmVsPSdMb2dvdXQnIC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiICBjb21wb25lbnQ9e1JvdXRlckxpbmt9ICB0bz0nL3JlZ2lzdGVyJyBsYWJlbD1cIlNpZ24gVXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIDwvVGFicz5cblxuXG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICAgICAgPC9BcHBCYXI+XG4gICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuTmF2QmFyLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGF1dGg6IHN0YXRlLmF1dGhcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgICBvbkxvZ291dDogKCkgPT4gZGlzcGF0Y2goTG9nb3V0KCkpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFN0eWxlcyhzdHlsZXMpKE5hdkJhcikpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCAnLi9Qcm9qZWN0SW5mby5zY3NzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuY29uc3QgUHJvamVjdEluZm8gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgcHJvamVjdEluZm8gPSBwcm9wcy5wcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiB7XG4gICAgaWYocHJvamVjdC5pZC50b1N0cmluZygpID09PSBwcm9wcy5tYXRjaC5wYXJhbXMuaWQpIHtcbiAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSkubWFwKChwcm9qZWN0LCBpKSA9PiB7XG4gICAgY29uc3QgZW5kRGF0ZSA9IG1vbWVudChwcm9qZWN0LmVuZF9kYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J1Byb2plY3QnIGtleT17aX0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nUHJvamVjdC1zcGFuJz48c3BhbiBjbGFzc05hbWU9XCJib2xkXCI+SG9iYnkgQXV0aG9yOjwvc3Bhbj4ge3Byb2plY3QudXNlcm5hbWV9PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J1Byb2plY3Qtc3Bhbic+PHNwYW4gY2xhc3NOYW1lPVwiYm9sZFwiPkhvYmJ5IERlc2NyaXB0aW9uOjwvc3Bhbj4ge3Byb2plY3QuZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J1Byb2plY3Qtc3Bhbic+PHNwYW4gY2xhc3NOYW1lPVwiYm9sZFwiPkhvYmJ5IEFtb3VudDo8L3NwYW4+IHtwcm9qZWN0LmFtb3VudH0mZXVybzs8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nUHJvamVjdC1zcGFuJz48c3BhbiBjbGFzc05hbWU9XCJib2xkXCI+SG9iYnkgQ29udGFjdDo8L3NwYW4+IHtwcm9qZWN0LmVtYWlsfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdQcm9qZWN0LXNwYW4nPjxzcGFuIGNsYXNzTmFtZT1cImJvbGRcIj5Ib2JieSBFbmREYXRlOjwvc3Bhbj4ge2VuZERhdGV9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9KVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdQcm9qZWN0SW5mbyc+XG4gICAgICB7cHJvamVjdEluZm99XG4gICAgICA8TGluayBjbGFzc05hbWU9J0xpbmsgQmFjaycgdG89Jy9wcm9qZWN0cyc+QmFjayB0byBwcm9qZWN0czwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb2plY3RzOiBzdGF0ZS5wcm9qZWN0cy5wcm9qZWN0c1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQcm9qZWN0SW5mbyk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vUHJvamVjdFJlZ2lzdHJhdGlvbi5zY3NzJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyL0xvYWRlcic7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL3Byb2plY3RSZWdpc3RlckFjdGlvbnMnO1xuaW1wb3J0IHtvblByb2plY3RSZWdpc3RlckZvcm1TdWJtaXR9IGZyb20gJy4uLy4uL3RodW5rcy9wcm9qZWN0UmVnaXN0ZXJUaHVuayc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBNdWlUaGVtZVByb3ZpZGVyLCB3aXRoU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjRUE3OTI1JyxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyMwMDQ0ZmYnLFxuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gIH0sXG4gIHRleHRGaWVsZDoge1xuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy51bml0LFxuICB9LFxuICBidXR0b246IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgICBqdXN0aWZ5OiB0aGVtZS5jZW50ZXIsXG4gIH0sXG59KTtcblxuY2xhc3MgUHJvamVjdFJlZ2lzdHJhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9uRm9ybVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25Gb3JtU3VibWl0KHRoaXMucHJvcHMucHJvamVjdFJlZ2lzdGVyLCB0aGlzLnByb3BzLmhpc3RvcnksIHRoaXMucHJvcHMuYXV0aC5lbWFpbClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB1c2VybmFtZSxcbiAgICAgIGhvYmJ5TmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgYW1vdW50LFxuICAgICAgbG9hZGluZyxcbiAgICAgIGVycm9yXG4gICAgfSA9dGhpcy5wcm9wcy5wcm9qZWN0UmVnaXN0ZXI7XG4gICAgY29uc3Qge29uSW5wdXRDaGFuZ2UsIG9uRGF0ZUNoYW5nZX0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGVtYWlsIH0gPXRoaXMucHJvcHMuYXV0aFxuICAgIHJldHVybiAoXG4gICAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17OH0gY2xhc3NOYW1lPSdQcm9qZWN0Rm9ybSc+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIj5SZWdpc3RlciBZb3VyIEhvYmJ5XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICB7ZXJyb3IgPyA8cCBzdHlsZT17e1xuICAgICAgICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICAgIH19PntlcnJvcn08L3A+IDogbnVsbH1cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25Gb3JtU3VibWl0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9XG4gICAgICAgICAgICAgICAgbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cblxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPSd1c2VybmFtZSdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lXCJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT0naG9iYnlOYW1lJ1xuICAgICAgICAgICAgICAgICAgdmFsdWU9e2hvYmJ5TmFtZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQbGVhc2UgZW50ZXIgeW91ciBob2JieSBuYW1lXCJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBlbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIHJvd3NNYXg9XCIzXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBkZXNjcmliZSBpdFwiXG4gICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICBuYW1lPSdhbW91bnQnXG4gICAgICAgICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YW1vdW50fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBlbnRlciBhbW91bnQgZm9yIHlvdXIgbmVlZHNcIlxuICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRlciBjb2xvcj17JyNmZmYnfSBoPXsxNX0gLz4gOiAnUGxhY2UgeW91ciBob2JieSd9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb2plY3RSZWdpc3Rlcjogc3RhdGUucHJvamVjdFJlZ2lzdGVyLFxuICAgIGF1dGg6IHN0YXRlLmF1dGhcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIG9uSW5wdXRDaGFuZ2U6IChlKSA9PiBkaXNwYXRjaChhY3Rpb25zLm9uSW5wdXRDaGFuZ2UoZSkpLFxuICBvbkRhdGVDaGFuZ2U6IChkYXRlKSA9PiBkaXNwYXRjaChhY3Rpb25zLm9uRGF0ZUNoYW5nZShkYXRlKSksXG4gIG9uRm9ybVN1Ym1pdDogKHByb2plY3RJbmZvLCBoaXN0b3J5LCBlbWFpbCk9PmRpc3BhdGNoKG9uUHJvamVjdFJlZ2lzdGVyRm9ybVN1Ym1pdChwcm9qZWN0SW5mbyxoaXN0b3J5LGVtYWlsKSlcbn0pO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKSh3aXRoU3R5bGVzKHN0eWxlcykoUHJvamVjdFJlZ2lzdHJhdGlvbikpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCAnLi9Qcm9qZWN0c0xpc3Quc2Nzcyc7XG5pbXBvcnQge3NldFByb2plY3RMaXN0fSBmcm9tICcuLi8uLi90aHVua3MvZ2V0UHJvamVjdHMnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IExpbmsgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIjtcbmltcG9ydCB7b25Wb3RlfSBmcm9tICcuLi8uLi90aHVua3Mvdm90ZVRodW5rJztcblxuY2xhc3MgUHJvamVjdHNMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLm9uR2V0UHJvamVjdHNMaXN0KCk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7cHJvamVjdHMsb25Wb3RlQ2xpY2t9ID10aGlzLnByb3BzO1xuICAgIGNvbnN0IHthbW91bnR9ID0gdGhpcy5wcm9wcy5hdXRoO1xuICAgIGxldCBwcm9qZWN0c0xpc3Q7XG4gICAgaWYocHJvamVjdHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBwcm9qZWN0c0xpc3QgPSBwcm9qZWN0cyAmJiBwcm9qZWN0cy5tYXAoKHByb2plY3QsIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nUHJvamVjdC1pdGVtJyBrZXk9e2l9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdQcm9qZWN0LWl0ZW1fX3NwYW4nPjxzcGFuIGNsYXNzTmFtZT1cImJvbGRcIj5Ib2JieSBBdXRob3I6PC9zcGFuPiB7cHJvamVjdC51c2VybmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J1Byb2plY3QtaXRlbV9fc3Bhbic+PHNwYW4gY2xhc3NOYW1lPVwiYm9sZFwiPkhvYmJ5IFRpdGxlOjwvc3Bhbj4ge3Byb2plY3QudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdQcm9qZWN0LWl0ZW1fX3NwYW4nPjxzcGFuIGNsYXNzTmFtZT1cImJvbGRcIj5Ib2JieSBEZXNjcmlwdGlvbjo8L3NwYW4+IHtwcm9qZWN0LmRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nUHJvamVjdC1pdGVtX19zcGFuJz48c3BhbiBjbGFzc05hbWU9XCJib2xkXCI+SG9iYnkgQ29sbGVjdGVkOjwvc3Bhbj4ge3Byb2plY3QuYnVkZ2V0fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nUHJvamVjdC1pdGVtX19zcGFuJz48c3BhbiBjbGFzc05hbWU9XCJib2xkXCI+SG9iYnkgR29hbDo8L3NwYW4+IHtwcm9qZWN0LmFtb3VudH08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J1Byb2plY3QtaXRlbV9fc3Bhbic+PHNwYW4gY2xhc3NOYW1lPVwiYm9sZFwiPkhvYmJ5IENvbnRhY3Q6PC9zcGFuPiB7cHJvamVjdC5lbWFpbH08L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uVm90ZUNsaWNrKHByb2plY3QuaWQsIDUpfSBkaXNhYmxlZD17YW1vdW50IDwgNX0+Vm90ZSA14oKsPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uVm90ZUNsaWNrKHByb2plY3QuaWQsIDE1KX0gZGlzYWJsZWQ9e2Ftb3VudCA8IDE1fT5Wb3RlIDE14oKsPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uVm90ZUNsaWNrKHByb2plY3QuaWQsIDMwKX0gZGlzYWJsZWQ9e2Ftb3VudCA8IDMwfT5Wb3RlIDMw4oKsPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RzTGlzdCA9IDxUeXBvZ3JhcGh5XG4gICAgICAgICAgdmFyaWFudD1cImg0XCJcbiAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICA+UHJvamVjdHMgd2lsbCBiZSBoZXJlIHNvb24uLi48L1R5cG9ncmFwaHk+XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nUHJvamVjdHNMaXN0Jz5cbiAgICAgICAge3Byb2plY3RzTGlzdH1cbiAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXG4gICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgPklmIHlvdSBoYXZlIGEgcHJvamVjdCwgcGxlYXNleycgJ31cbiAgICAgICAgICA8TGluayBjb21wb25lbnQ9eyBSb3V0ZXJMaW5rIH0gY2xhc3NOYW1lPSdMaW5rJyB0bz0nL3Byb2plY3QtcmVnaXN0cmF0aW9uJz5SZWdpc3RlcjwvTGluaz5cbiAgICAgICAgICB7JyAnfXlvdXIgcHJvamVjdChob2JieSkuXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvamVjdHM6IHN0YXRlLnByb2plY3RzLnByb2plY3RzLFxuICAgIGF1dGg6IHN0YXRlLmF1dGhcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIG9uR2V0UHJvamVjdHNMaXN0OiAoKSA9PiBkaXNwYXRjaChzZXRQcm9qZWN0TGlzdCgpKSxcbiAgb25Wb3RlQ2xpY2s6IChwcm9qZWN0SWQsIGFtb3VudCkgPT4gZGlzcGF0Y2gob25Wb3RlKHByb2plY3RJZCwgYW1vdW50KSlcblxufSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFByb2plY3RzTGlzdCk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlci9Mb2FkZXInO1xuaW1wb3J0IHtMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0ICcuL1JlZ2lzdGVyLnNjc3MnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi8uLi9hY3Rpb25zL3JlZ2lzdGVyQWN0aW9uc1wiO1xuaW1wb3J0IHtvblJlZ2lzdGVyRm9ybVN1Ym1pdH0gZnJvbSAnLi4vLi4vdGh1bmtzL3JlZ2lzdGVyVGh1bmsnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IHtjcmVhdGVNdWlUaGVtZSwgTXVpVGhlbWVQcm92aWRlciwgd2l0aFN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjRUE3OTI1JyxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyMwMDQ0ZmYnLFxuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gIH0sXG4gIHRleHRGaWVsZDoge1xuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy51bml0LFxuICB9LFxuICBidXR0b246IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgICBqdXN0aWZ5OiB0aGVtZS5jZW50ZXIsXG4gIH0sXG59KTtcblxuXG5jbGFzcyBSZWdpc3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9uRm9ybVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25Gb3JtU3VibWl0KHRoaXMucHJvcHMucmVnaXN0ZXIsIHRoaXMucHJvcHMuaGlzdG9yeSk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7dXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCwgcGFzc3dvcmQyLCBlcnJvciwgbG9hZGluZyx9ID0gdGhpcy5wcm9wcy5yZWdpc3RlcjtcbiAgICBjb25zdCB7b25JbnB1dENoYW5nZX0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0gPlxuICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17OH0gY2xhc3NOYW1lPSdSZWdpc3Rlcic+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiPlNpZ24gVXBcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICB7ZXJyb3IgPyA8cCBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgICAgICAgICAgIH19PntlcnJvcn08L3A+IDogbnVsbH1cbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25Gb3JtU3VibWl0fSAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0gIG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd1c2VybmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBlbnRlciB5b3VyIG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBlbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkMidcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkMn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlcGVhdCBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRlciBjb2xvcj17JyNmZmYnfSBoPXsxNX0gLz4gOiAnU2lnbiBVcCd9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvUGFwZXI+LFxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXG4gICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIiA+XG4gICAgICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P3snICd9XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XG4gICAgICAgICAgICAgICAgICB0bz0nL2xvZ2luJz5cbiAgICAgICAgICAgICAgICBTaWduIEluXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICByZWdpc3Rlcjogc3RhdGUucmVnaXN0ZXJcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIG9uSW5wdXRDaGFuZ2U6IChlKSA9PiBkaXNwYXRjaChhY3Rpb25zLm9uSW5wdXRDaGFuZ2UoZSkpLFxuICBvbkZvcm1TdWJtaXQ6ICh1c2VyLCBoaXN0b3J5KSA9PiBkaXNwYXRjaChvblJlZ2lzdGVyRm9ybVN1Ym1pdCh1c2VyLCBoaXN0b3J5KSlcbn0pO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKSh3aXRoU3R5bGVzKHN0eWxlcykoUmVnaXN0ZXIpKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge2NyZWF0ZVN0b3JlLCBjb21wb3NlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9yb290UmVkdWNlcic7XG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5pbXBvcnQgUm91dGVzIGZyb20gJy4vUm91dGVzJztcbmltcG9ydCAqIGFzIHNlcnZpY2VXb3JrZXIgZnJvbSAnLi9zZXJ2aWNlV29ya2VyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbidcblxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKHJlcXVlc3QgPT4ge1xuICByZXR1cm4gcmVxdWVzdDtcbn0pXG5cbmF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShyZXNwb25zZSA9PiB7XG4gIHJldHVybiByZXNwb25zZTtcbn0pXG5cbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIHx8IGNvbXBvc2U7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGNvbXBvc2VFbmhhbmNlcnMoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSkpO1xuXG5SZWFjdERPTS5yZW5kZXIoPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gIDxSb3V0ZXMvPlxuPC9Qcm92aWRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuXG5cbi8vIElmIHlvdSB3YW50IHlvdXIgYXBwIHRvIHdvcmsgb2ZmbGluZSBhbmQgbG9hZCBmYXN0ZXIsIHlvdSBjYW4gY2hhbmdlXG4vLyB1bnJlZ2lzdGVyKCkgdG8gcmVnaXN0ZXIoKSBiZWxvdy4gTm90ZSB0aGlzIGNvbWVzIHdpdGggc29tZSBwaXRmYWxscy5cbi8vIExlYXJuIG1vcmUgYWJvdXQgc2VydmljZSB3b3JrZXJzOiBodHRwczovL2JpdC5seS9DUkEtUFdBXG5zZXJ2aWNlV29ya2VyLnVucmVnaXN0ZXIoKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgZW1haWw6ICcnLFxuICAgIGFtb3VudDogMCxcbiAgICBpc0F1dGg6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLkFVVEhfVVNFUjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgZW1haWw6IGFjdGlvbi51c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgIGFtb3VudDogYWN0aW9uLnVzZXIuYnVkZ2V0LFxuICAgICAgICAgICAgICAgIGlzQXV0aDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIHR5cGVzLkxPR19PVVQ6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDAsXG4gICAgICAgICAgICAgICAgaXNBdXRoOiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSB0eXBlcy5WT1RFX1VTRVI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGFtb3VudDogc3RhdGUuYW1vdW50LWFjdGlvbi5hbW91bnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBlbWFpbDogJycsXG4gIHBhc3N3b3JkOiAnJyxcbiAgZXJyb3I6ICcnLFxuICBsb2FkaW5nOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5MT0dJTl9GT1JNX0lOUFVUX0NIQU5HRTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIFthY3Rpb24ubmFtZV06IGFjdGlvbi52YWx1ZX07XG4gICAgY2FzZSB0eXBlcy5MT0dJTl9GT1JNX0xPQURJTkc6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlfTtcbiAgICBjYXNlIHR5cGVzLkxPR0lOX0ZPUk1fRVJST1I6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlcnJvcjogYWN0aW9uLmVycm9yLCBsb2FkaW5nOmZhbHNlfTtcbiAgICBjYXNlIHR5cGVzLkxPR0lOX0ZPUk1fU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnLCBsb2FkaW5nOmZhbHNlfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcm5hbWU6ICcnLFxuICBob2JieU5hbWU6ICcnLFxuICBlbWFpbDogJycsXG4gIGRlc2NyaXB0aW9uOiAnJyxcbiAgYW1vdW50OiAnJyxcbiAgbG9hZGluZzogZmFsc2UsXG4gIGVycm9yOiAnJ1xufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIFthY3Rpb24ubmFtZV06IGFjdGlvbi52YWx1ZX07XG4gICAgY2FzZSB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0RBVEVfQ0hBTkdFOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZW5kRGF0ZTogYWN0aW9uLmRhdGV9O1xuICAgIGNhc2UgdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0xPQURJTkc6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlfTtcbiAgICBjYXNlIHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9FUlJPUjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVycm9yOiBhY3Rpb24uZXJyb3IsIGxvYWRpbmc6ZmFsc2V9O1xuICAgIGNhc2UgdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9GT1JNX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCB1c2VybmFtZTogJycsIGhvYmJ5TmFtZTogJycsIGVtYWlsOiAnJywgYW1vdW50OiAnJywgZGVzY3JpcHRpb246ICcnLCBsb2FkaW5nOmZhbHNlLCBlcnJvcjonJ31cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgcHJvamVjdHM6IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5HRVRfUFJPSkVDVFM6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBwcm9qZWN0czogYWN0aW9uLnByb2plY3RzfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VybmFtZTogJycsXG4gIGVtYWlsOiAnJyxcbiAgcGFzc3dvcmQ6ICcnLFxuICBwYXNzd29yZDI6ICcnLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgZXJyb3I6ICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLlJFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgW2FjdGlvbi5uYW1lXTogYWN0aW9uLnZhbHVlfTtcbiAgICBjYXNlIHR5cGVzLlJFR0lTVEVSX0ZPUk1fTE9BRElORzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IHRydWV9O1xuICAgIGNhc2UgdHlwZXMuUkVHSVNURVJfRk9STV9FUlJPUjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVycm9yOiBhY3Rpb24uZXJyb3IsIGxvYWRpbmc6ZmFsc2V9O1xuICAgIGNhc2UgdHlwZXMuUkVHSVNURVJfRk9STV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdXNlcm5hbWU6ICcnLCBlbWFpbDogJycsIHBhc3N3b3JkOiAnJywgcGFzc3dvcmQyOiAnJywgZXJyb3I6ICcnLCBsb2FkaW5nOiBmYWxzZX1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gICdyZWR1eCc7XG5pbXBvcnQgbG9naW5SZWR1Y2VyIGZyb20gJy4vbG9naW5SZWR1Y2VyJztcbmltcG9ydCByZWdpc3RlclJlZHVjZXIgZnJvbSAnLi9yZWdpc3RlclJlZHVjZXInO1xuaW1wb3J0IHByb2plY3RSZWdpc3RlclJlZHVjZXIgZnJvbSAnLi9wcm9qZWN0UmVnaXN0ZXJSZWR1Y2VyJztcbmltcG9ydCBwcm9qZWN0c1JlZHVjZXIgZnJvbSAnLi9wcm9qZWN0c1JlZHVjZXInO1xuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gJy4vYXV0aFJlZHVjZXInO1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGxvZ2luOiBsb2dpblJlZHVjZXIsXG4gIHJlZ2lzdGVyOiByZWdpc3RlclJlZHVjZXIsXG4gIHByb2plY3RSZWdpc3RlcjogcHJvamVjdFJlZ2lzdGVyUmVkdWNlcixcbiAgcHJvamVjdHM6IHByb2plY3RzUmVkdWNlcixcbiAgYXV0aDogYXV0aFJlZHVjZXJcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIiwiLy8gVGhpcyBvcHRpb25hbCBjb2RlIGlzIHVzZWQgdG8gcmVnaXN0ZXIgYSBzZXJ2aWNlIHdvcmtlci5cbi8vIHJlZ2lzdGVyKCkgaXMgbm90IGNhbGxlZCBieSBkZWZhdWx0LlxuXG4vLyBUaGlzIGxldHMgdGhlIGFwcCBsb2FkIGZhc3RlciBvbiBzdWJzZXF1ZW50IHZpc2l0cyBpbiBwcm9kdWN0aW9uLCBhbmQgZ2l2ZXNcbi8vIGl0IG9mZmxpbmUgY2FwYWJpbGl0aWVzLiBIb3dldmVyLCBpdCBhbHNvIG1lYW5zIHRoYXQgZGV2ZWxvcGVycyAoYW5kIHVzZXJzKVxuLy8gd2lsbCBvbmx5IHNlZSBkZXBsb3llZCB1cGRhdGVzIG9uIHN1YnNlcXVlbnQgdmlzaXRzIHRvIGEgcGFnZSwgYWZ0ZXIgYWxsIHRoZVxuLy8gZXhpc3RpbmcgdGFicyBvcGVuIG9uIHRoZSBwYWdlIGhhdmUgYmVlbiBjbG9zZWQsIHNpbmNlIHByZXZpb3VzbHkgY2FjaGVkXG4vLyByZXNvdXJjZXMgYXJlIHVwZGF0ZWQgaW4gdGhlIGJhY2tncm91bmQuXG5cbi8vIFRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIGJlbmVmaXRzIG9mIHRoaXMgbW9kZWwgYW5kIGluc3RydWN0aW9ucyBvbiBob3cgdG9cbi8vIG9wdC1pbiwgcmVhZCBodHRwczovL2JpdC5seS9DUkEtUFdBXG5cbmNvbnN0IGlzTG9jYWxob3N0ID0gQm9vbGVhbihcbiAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnbG9jYWxob3N0JyB8fFxuICAgIC8vIFs6OjFdIGlzIHRoZSBJUHY2IGxvY2FsaG9zdCBhZGRyZXNzLlxuICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ1s6OjFdJyB8fFxuICAgIC8vIDEyNy4wLjAuMS84IGlzIGNvbnNpZGVyZWQgbG9jYWxob3N0IGZvciBJUHY0LlxuICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5tYXRjaChcbiAgICAgIC9eMTI3KD86XFwuKD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KSl7M30kL1xuICAgIClcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlcihjb25maWcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgIC8vIFRoZSBVUkwgY29uc3RydWN0b3IgaXMgYXZhaWxhYmxlIGluIGFsbCBicm93c2VycyB0aGF0IHN1cHBvcnQgU1cuXG4gICAgY29uc3QgcHVibGljVXJsID0gbmV3IFVSTChwcm9jZXNzLmVudi5QVUJMSUNfVVJMLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgaWYgKHB1YmxpY1VybC5vcmlnaW4gIT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgIC8vIE91ciBzZXJ2aWNlIHdvcmtlciB3b24ndCB3b3JrIGlmIFBVQkxJQ19VUkwgaXMgb24gYSBkaWZmZXJlbnQgb3JpZ2luXG4gICAgICAvLyBmcm9tIHdoYXQgb3VyIHBhZ2UgaXMgc2VydmVkIG9uLiBUaGlzIG1pZ2h0IGhhcHBlbiBpZiBhIENETiBpcyB1c2VkIHRvXG4gICAgICAvLyBzZXJ2ZSBhc3NldHM7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svY3JlYXRlLXJlYWN0LWFwcC9pc3N1ZXMvMjM3NFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc3dVcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9zZXJ2aWNlLXdvcmtlci5qc2A7XG5cbiAgICAgIGlmIChpc0xvY2FsaG9zdCkge1xuICAgICAgICAvLyBUaGlzIGlzIHJ1bm5pbmcgb24gbG9jYWxob3N0LiBMZXQncyBjaGVjayBpZiBhIHNlcnZpY2Ugd29ya2VyIHN0aWxsIGV4aXN0cyBvciBub3QuXG4gICAgICAgIGNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyKHN3VXJsLCBjb25maWcpO1xuXG4gICAgICAgIC8vIEFkZCBzb21lIGFkZGl0aW9uYWwgbG9nZ2luZyB0byBsb2NhbGhvc3QsIHBvaW50aW5nIGRldmVsb3BlcnMgdG8gdGhlXG4gICAgICAgIC8vIHNlcnZpY2Ugd29ya2VyL1BXQSBkb2N1bWVudGF0aW9uLlxuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICdUaGlzIHdlYiBhcHAgaXMgYmVpbmcgc2VydmVkIGNhY2hlLWZpcnN0IGJ5IGEgc2VydmljZSAnICtcbiAgICAgICAgICAgICAgJ3dvcmtlci4gVG8gbGVhcm4gbW9yZSwgdmlzaXQgaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQSdcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElzIG5vdCBsb2NhbGhvc3QuIEp1c3QgcmVnaXN0ZXIgc2VydmljZSB3b3JrZXJcbiAgICAgICAgcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCwgY29uZmlnKSB7XG4gIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgLnJlZ2lzdGVyKHN3VXJsKVxuICAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICByZWdpc3RyYXRpb24ub251cGRhdGVmb3VuZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5zdGFsbGluZ1dvcmtlciA9IHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nO1xuICAgICAgICBpZiAoaW5zdGFsbGluZ1dvcmtlciA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbGxpbmdXb3JrZXIub25zdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoaW5zdGFsbGluZ1dvcmtlci5zdGF0ZSA9PT0gJ2luc3RhbGxlZCcpIHtcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIHRoZSB1cGRhdGVkIHByZWNhY2hlZCBjb250ZW50IGhhcyBiZWVuIGZldGNoZWQsXG4gICAgICAgICAgICAgIC8vIGJ1dCB0aGUgcHJldmlvdXMgc2VydmljZSB3b3JrZXIgd2lsbCBzdGlsbCBzZXJ2ZSB0aGUgb2xkZXJcbiAgICAgICAgICAgICAgLy8gY29udGVudCB1bnRpbCBhbGwgY2xpZW50IHRhYnMgYXJlIGNsb3NlZC5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgJ05ldyBjb250ZW50IGlzIGF2YWlsYWJsZSBhbmQgd2lsbCBiZSB1c2VkIHdoZW4gYWxsICcgK1xuICAgICAgICAgICAgICAgICAgJ3RhYnMgZm9yIHRoaXMgcGFnZSBhcmUgY2xvc2VkLiBTZWUgaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQS4nXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBjYWxsYmFja1xuICAgICAgICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5vblVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5vblVwZGF0ZShyZWdpc3RyYXRpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50LCBldmVyeXRoaW5nIGhhcyBiZWVuIHByZWNhY2hlZC5cbiAgICAgICAgICAgICAgLy8gSXQncyB0aGUgcGVyZmVjdCB0aW1lIHRvIGRpc3BsYXkgYVxuICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQgaXMgY2FjaGVkIGZvciBvZmZsaW5lIHVzZS5cIiBtZXNzYWdlLlxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29udGVudCBpcyBjYWNoZWQgZm9yIG9mZmxpbmUgdXNlLicpO1xuXG4gICAgICAgICAgICAgIC8vIEV4ZWN1dGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcub25TdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLm9uU3VjY2VzcyhyZWdpc3RyYXRpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uOicsIGVycm9yKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIoc3dVcmwsIGNvbmZpZykge1xuICAvLyBDaGVjayBpZiB0aGUgc2VydmljZSB3b3JrZXIgY2FuIGJlIGZvdW5kLiBJZiBpdCBjYW4ndCByZWxvYWQgdGhlIHBhZ2UuXG4gIGZldGNoKHN3VXJsKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIC8vIEVuc3VyZSBzZXJ2aWNlIHdvcmtlciBleGlzdHMsIGFuZCB0aGF0IHdlIHJlYWxseSBhcmUgZ2V0dGluZyBhIEpTIGZpbGUuXG4gICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKTtcbiAgICAgIGlmIChcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzID09PSA0MDQgfHxcbiAgICAgICAgKGNvbnRlbnRUeXBlICE9IG51bGwgJiYgY29udGVudFR5cGUuaW5kZXhPZignamF2YXNjcmlwdCcpID09PSAtMSlcbiAgICAgICkge1xuICAgICAgICAvLyBObyBzZXJ2aWNlIHdvcmtlciBmb3VuZC4gUHJvYmFibHkgYSBkaWZmZXJlbnQgYXBwLiBSZWxvYWQgdGhlIHBhZ2UuXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgICAgICByZWdpc3RyYXRpb24udW5yZWdpc3RlcigpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNlcnZpY2Ugd29ya2VyIGZvdW5kLiBQcm9jZWVkIGFzIG5vcm1hbC5cbiAgICAgICAgcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnTm8gaW50ZXJuZXQgY29ubmVjdGlvbiBmb3VuZC4gQXBwIGlzIHJ1bm5pbmcgaW4gb2ZmbGluZSBtb2RlLidcbiAgICAgICk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyKCkge1xuICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyRnJvbUxTKCkge1xuICBjb25zdCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hvYmJ5Q3JhZnQtdXNlcicpXG4gIHJldHVybiBKU09OLnBhcnNlKHVzZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlclRvTFModXNlcikge1xuICBjb25zb2xlLmxvZygnVXNlciBzZXQgdG8gTFMnKVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaG9iYnlDcmFmdC11c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpXG4gIHJldHVybjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVVzZXJBbW91bnRJbkxTKGFtb3VudCkge1xuICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaG9iYnlDcmFmdC11c2VyJykpXG4gIHVzZXIuYnVkZ2V0ID0gdXNlci5idWRnZXQgLSBhbW91bnQ7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdob2JieUNyYWZ0LXVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcbiAgcmV0dXJuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVXNlckZyb21MUygpIHtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2hvYmJ5Q3JhZnQtdXNlcicpXG4gIHJldHVybjtcbn0iLCJpbXBvcnQge2dldFByb2plY3RzfSBmcm9tICcuLi9hY3Rpb25zL3Byb2plY3RzQWN0aW9uJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGNvbnN0IHNldFByb2plY3RMaXN0ID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gYXhpb3NcbiAgICAgIC5nZXQoJy9hcGkvaG9iYmllcycpXG4gICAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goZ2V0UHJvamVjdHMocmVzLmRhdGEpKSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIHJldHVybiBwcm9qZWN0TGlzdDtcbn0iLCJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvbG9naW5BY3Rpb25zJztcbmltcG9ydCB7YXV0aFVzZXJ9IGZyb20gJy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7c2V0VXNlclRvTFN9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZSc7XG5cbmV4cG9ydCBjb25zdCBvbkZvcm1TdWJtaXQgPSAodXNlciwgaGlzdG9yeSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKGFjdGlvbnMub25Gb3JtTG9hZGluZygpKTtcbiAgaWYodXNlci5lbWFpbCA9PT0gJycgfHwgdXNlci5wYXNzd29yZCA9PT0gJycgKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbnMub25Mb2dpbkZvcm1FcnJvcignUGxlYXNlIGZpbGwgZmllbGRzJykpO1xuICB9XG4gIGNvbnN0IGxvZ2luSnNvbiA9IFx0e1xuICAgICAgXCJzZWN1cml0eVwiOiB7XG4gICAgICAgICAgXCJjcmVkZW50aWFsc1wiOiB7XG4gICAgICAgICAgICAgIFwiZW1haWxcIjogdXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgXCJwYXNzd29yZFwiOiB1c2VyLnBhc3N3b3JkXG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIGF4aW9zLnBvc3QoJy9hcGkvc2VjdXJpdHkvbG9naW4nLCBsb2dpbkpzb24pXG4gICAgICAudGhlbihyZXMgPT57XG4gICAgICAgIHNldFVzZXJUb0xTKHJlcy5kYXRhKVxuICAgICAgICBkaXNwYXRjaChhdXRoVXNlcihyZXMuZGF0YSkpXG4gICAgICAgIGRpc3BhdGNoKGFjdGlvbnMub25Mb2dpbkZvcm1TdWNjZXNzKHVzZXIpKVxuICAgICAgICBoaXN0b3J5LnB1c2goJy8nKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBkaXNwYXRjaChhY3Rpb25zLm9uTG9naW5Gb3JtRXJyb3IoJ1NlcnZlciBlcnJvci4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKSlcblxuICAgICAgICAgIH1cbiAgICAgIClcbn0iLCJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuaW1wb3J0IHtyZW1vdmVVc2VyRnJvbUxTfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3Qgb25Mb2dPdXQgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgICBheGlvcy5nZXQoJy9hcGkvc2VjdXJpdHkvbG9nb3V0JylcbiAgICAgICAgLnRoZW4ocmVzPT4ge1xuICAgICAgICAgICAgcmVtb3ZlVXNlckZyb21MUygpXG4gICAgICAgICAgICBkaXNwYXRjaChhY3Rpb25zLmxvZ291dCgpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG4gICAgcmV0dXJuIG51bGw7XG59IiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3Byb2plY3RSZWdpc3RlckFjdGlvbnMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB1dWlkdjQgZnJvbSAndXVpZCdcblxuZXhwb3J0IGNvbnN0IG9uUHJvamVjdFJlZ2lzdGVyRm9ybVN1Ym1pdCA9IChwcm9qZWN0SW5mbywgaGlzdG9yeSwgZW1haWwpID0+IChkaXNwYXRjaCkgPT4ge1xuXG4gIGRpc3BhdGNoKGFjdGlvbnMub25Qcm9qZWN0UmVnaXN0ZXJGb3JtTG9hZGluZygpKTtcbiAgaWYocHJvamVjdEluZm8udXNlcm5hbWUgPT09ICcnIHx8IHByb2plY3RJbmZvLmhvYmJ5TmFtZSA9PT0gJycgfHxcbiAgcHJvamVjdEluZm8uZGVzY3JpcHRpb24gPT09ICcnIHx8IHByb2plY3RJbmZvLmFtb3VudCA9PT0gJycgKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbnMub25Qcm9qZWN0UmVnaXN0ZXJGb3JtRXJyb3IoJ1BsZWFzZSBmaWxsIGFsbCBmaWVsZHMnKSlcbiAgfVxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gbW9tZW50KHByb2plY3RJbmZvLmVuZERhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuXG4gIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgXCJ0aXRsZVwiOiBwcm9qZWN0SW5mby5ob2JieU5hbWUsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBwcm9qZWN0SW5mby5kZXNjcmlwdGlvbixcbiAgICBcImFtb3VudFwiOiBwcm9qZWN0SW5mby5hbW91bnQsXG4gICAgXCJlbWFpbFwiOiBlbWFpbCxcbiAgICBcInVzZXJuYW1lXCI6IHByb2plY3RJbmZvLnVzZXJuYW1lLFxuICB9KTtcbiAgY29uc29sZS5sb2coanNvbik7XG4gIGF4aW9zXG4gICAgICAucG9zdCgnL2FwaS9ob2JieScsanNvbilcbiAgICAudGhlbihyZXM9PntcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMub25Qcm9qZWN0UmVnaXN0ZXJGb3JtU3VibWl0KHJlcykpO1xuICAgICAgaGlzdG9yeS5wdXNoKCcvcHJvamVjdHMnKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBkaXNwYXRjaChhY3Rpb25zLm9uUHJvamVjdFJlZ2lzdGVyRm9ybUVycm9yKCdTZXJ2ZXIgZXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJykpXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9KVxuXG59IiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3JlZ2lzdGVyQWN0aW9ucyc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBvblJlZ2lzdGVyRm9ybVN1Ym1pdCA9ICh1c2VyLCBoaXN0b3J5KSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goYWN0aW9ucy5vbkZvcm1Mb2FkaW5nKCkpO1xuICBpZih1c2VyLnVzZXJuYW1lID09PSAnJyB8fCB1c2VyLmVtYWlsID09PSAnJyB8fCB1c2VyLnBhc3N3b3JkID09PSAnJyB8fCB1c2VyLnBhc3N3b3JkMiA9PT0gJycpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9ucy5vblJlZ2lzdGVyRm9ybUVycm9yKCdQbGVhc2UgZmlsbCBmaWVsZHMnKSk7XG4gIH1cbiAgaWYodXNlci5wYXNzd29yZCAhPT0gdXNlci5wYXNzd29yZDIpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9ucy5vblJlZ2lzdGVyRm9ybUVycm9yKCdQYXNzd29yZHMgZG9lc25cXCd0IG1hdGNoJykpO1xuICB9XG4gIGNvbnN0IHJlZ2lzdGVySnNvbiA9IHtcbiAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZCxcbiAgfTtcblxuICBheGlvcy5wb3N0KCcvYXBpL3NlY3VyaXR5L3JlZ2lzdGVyJywgcmVnaXN0ZXJKc29uKVxuICAgICAgLnRoZW4ocmVzID0+e1xuICAgICAgICBkaXNwYXRjaChhY3Rpb25zLm9uUmVnaXN0ZXJGb3JtU3VjY2VzcyhyZWdpc3Rlckpzb24pKVxuICAgICAgICBoaXN0b3J5LnB1c2goJy9sb2dpbicpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChhY3Rpb25zLm9uUmVnaXN0ZXJGb3JtRXJyb3IoJ1NlcnZlciBlcnJvci4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKSlcblxuICAgICAgICAgIH1cbiAgICAgIClcblxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge3NldFByb2plY3RMaXN0fSBmcm9tICcuL2dldFByb2plY3RzJztcbmltcG9ydCB7Y2hhbmdlVXNlckFtb3VudEluTFN9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZSdcbmltcG9ydCB7dm90ZVVzZXJ9IGZyb20gJy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuXG5leHBvcnQgY29uc3Qgb25Wb3RlID0gKHByb2plY3RJZCwgYW1vdW50KSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgYXhpb3MucG9zdCgnL2FwaS92b3RlJywge1xuICAgIGhvYmJ5OiBwcm9qZWN0SWQsXG4gICAgYW1vdW50OiBhbW91bnRcbiAgfSkudGhlbihyZXM9PntcbiAgICBjaGFuZ2VVc2VyQW1vdW50SW5MUyhhbW91bnQpO1xuICAgIGRpc3BhdGNoKHNldFByb2plY3RMaXN0KCkpO1xuICAgIGRpc3BhdGNoKHZvdGVVc2VyKGFtb3VudCkpO1xuICB9KS5jYXRjaChlcnI9PiBjb25zb2xlLmxvZyhlcnIpKVxuXG4gIHJldHVybiBudWxsO1xufSIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLVNHXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tU0cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiXSwic291cmNlUm9vdCI6IiJ9