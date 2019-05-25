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
/* harmony import */ var _components_User_User__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/User/User */ "./assets/js/components/User/User.js");
/* harmony import */ var _components_About_about__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/About/about */ "./assets/js/components/About/about.js");
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
        path: "/about",
        component: _components_About_about__WEBPACK_IMPORTED_MODULE_13__["default"]
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
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/user",
        component: _components_User_User__WEBPACK_IMPORTED_MODULE_12__["default"]
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
/*! exports provided: LOGIN_FORM_INPUT_CHANGE, LOGIN_FORM_LOADING, LOGIN_FORM_ERROR, LOGIN_FORM_SUCCESS, REGISTER_FORM_INPUT_CHANGE, REGISTER_FORM_LOADING, REGISTER_FORM_ERROR, REGISTER_FORM_SUCCESS, PROJECT_REGISTER_FORM_INPUT_CHANGE, PROJECT_REGISTER_DATE_CHANGE, PROJECT_REGISTER_FORM_LOADING, PROJECT_REGISTER_FORM_ERROR, PROJECT_REGISTER_FORM_SUCCESS, GET_PROJECTS, AUTH_USER, LOG_OUT, VOTE_USER, GET_VOTES, REMOVE_VOTE */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_VOTES", function() { return GET_VOTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_VOTE", function() { return REMOVE_VOTE; });
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
var VOTE_USER = 'VOTE_USER'; // Vote types

var GET_VOTES = 'GET_VOTES';
var REMOVE_VOTE = 'REMOVE_VOTE';

/***/ }),

/***/ "./assets/js/actions/votesActions.js":
/*!*******************************************!*\
  !*** ./assets/js/actions/votesActions.js ***!
  \*******************************************/
/*! exports provided: getVotes, removeVote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVotes", function() { return getVotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeVote", function() { return removeVote; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./assets/js/actions/types.js");

function getVotes(votes) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_VOTES"],
    votes: votes
  };
}
function removeVote(voteID) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_VOTE"],
    voteID: voteID
  };
}

/***/ }),

/***/ "./assets/js/components/About/about.js":
/*!*********************************************!*\
  !*** ./assets/js/components/About/about.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.scss */ "./assets/js/components/About/about.scss");
/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_about_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_es_Paper_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/es/Paper/Paper */ "./node_modules/@material-ui/core/es/Paper/Paper.js");




var about = function about() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_es_Paper_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "paper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Heading"
  }, "HobbyCraft Team"));
};

/* harmony default export */ __webpack_exports__["default"] = (about);

/***/ }),

/***/ "./assets/js/components/About/about.scss":
/*!***********************************************!*\
  !*** ./assets/js/components/About/about.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Home_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home.scss */ "./assets/js/components/Home/Home.scss");
/* harmony import */ var _Home_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Home_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);






var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["createMuiTheme"])({
  palette: {
    primary: {
      main: '#EA7925'
    },
    secondary: {
      main: '#ffffff'
    }
  }
});

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["MuiThemeProvider"], {
    theme: theme
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Home"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Home-floatLeft"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h3",
    gutterBottom: true,
    align: "Left"
  }, "A New and Better way to engange", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "and retain employees"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "subheading",
    gutterBottom: true,
    align: "Left"
  }, "Companies use HobbyCraft to organize their", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "employees hobby budget, its a perfect", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "internal croud funding system for you !")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "button",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    variant: "contained",
    color: "primary",
    size: "large",
    to: "/login"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    color: "secondary"
  }, "Get Started"))));
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
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/Snackbar/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Error */ "./node_modules/@material-ui/icons/Error.js");
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/Tooltip/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "./node_modules/@material-ui/icons/LockOutlined.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_20__);
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






















var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["createMuiTheme"])({
  palette: {
    primary: {
      main: '#EA7925'
    },
    secondary: {
      main: '#0044ff'
    },
    error: {
      main: '#ffffff'
    }
  }
});

var styles = function styles(theme) {
  return {
    main: _defineProperty({
      width: 'auto',
      display: 'block',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    }, theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2), {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }),
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: "".concat(theme.spacing.unit * 2, "px ").concat(theme.spacing.unit * 3, "px ").concat(theme.spacing.unit * 3, "px")
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: '#EA7925'
    },
    form: {
      width: '100%',
      marginTop: theme.spacing.unit
    },
    textField: {
      height: 50
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
      height: 50
    },
    root: {
      background: theme.palette.error.dark
    },
    icon: {
      fontSize: 20,
      marginRight: 10
    },
    message: {
      display: 'flex',
      alignItems: 'center'
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

    _defineProperty(_assertThisInitialized(_this), "state", {
      open: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.setState({
        open: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function (event, reason) {
      if (reason === 'clickaway') {
        return;
      }

      _this.setState({
        open: false
      });
    });

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["MuiThemeProvider"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: classes.main
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: classes.paper
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_18___default.a, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_19___default.a, {
        className: classes.avatar
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_20___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
        component: "h1",
        variant: "h5"
      }, "Sign In"), error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_12___default.a, {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        open: this.state.open,
        autoHideDuration: 3000,
        onClose: this.handleClose,
        ContentProps: {
          'aria-describedby': 'message-id',
          classes: {
            root: classes.root
          }
        },
        message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: classes.message
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_16___default.a, {
          className: classes.icon
        }), error),
        action: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_17___default.a, {
          title: "Close"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14___default.a, {
          "aria-label": "Close",
          key: "close",
          color: "inherit",
          className: classes.close,
          onClick: this.handleClose
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15___default.a, null)))]
      }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: classes.form,
        onSubmit: this.onFormSubmit,
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
        variant: "contained",
        color: "primary",
        textColor: "secondary",
        className: classes.submit,
        margin: "normal",
        fullWidth: true,
        gutterBottom: true,
        onClick: this.handleClick,
        type: "submit"
      }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: '#fff',
        h: 15
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
        color: "error"
      }, "Sign In")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "subheading"
      }, "If you don't have an account, please", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        color: 'secondary',
        to: "/Register"
      }, "Sign Up"))));
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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["withStyles"])(styles)(Login)));

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
/* harmony import */ var _thunks_logoutThunk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../thunks/logoutThunk */ "./assets/js/thunks/logoutThunk.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_12__);
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
    }
  }
});
var styles = {
  root: {
    width: '100%'
  },
  menubar: {
    position: "static",
    background: "#181818"
  },
  grow: {
    flexGrow: 1,
    align: 'center'
  },
  title: _defineProperty({
    color: '#ffffff',
    display: 'none'
  }, theme.breakpoints.up('md'), {
    display: 'block'
  }),
  sectionDesktop: _defineProperty({
    display: 'none'
  }, theme.breakpoints.up('md'), {
    display: 'block'
  }),
  button: {
    color: '#A4A4A4',
    '&:hover': {
      color: '#ffffff'
    },
    margin: 'auto',
    paddingLeft: 20,
    paddingRight: 20
  },
  buttonSingUp: {
    color: '#ffffff',
    backgroundColor: "#EA7925",
    borderRadius: 25,
    fontWeight: 600,
    '&:hover': {
      backgroundColor: "#A15421"
    }
  },
  sectionMobile: _defineProperty({
    display: 'flex'
  }, theme.breakpoints.up('md'), {
    display: 'none'
  }),
  titleMobile: {
    color: '#ffffff'
  },
  IconMobile: {
    color: "#ffffff"
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

    _defineProperty(_assertThisInitialized(_this), "onLogOutToggle", function () {
      return _this.props.onLogoutClick(_this.props.history);
    });

    return _this;
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var isAuth = this.props.auth.isAuth;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["MuiThemeProvider"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.menubar
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
        variant: "h6",
        className: classes.title
      }, "HobbyCraft"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.sectionMobile
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.IconMobile
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default.a, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.grow
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.sectionDesktop
      }, isAuth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.button,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        exact: true,
        to: "/projects"
      }, "Discover Projects") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.button,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        exact: true,
        to: "/"
      }, "Discover"), isAuth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.buttonSingUp,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        to: "/project-registration"
      }, "Create a Project") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.buttonSingUp,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        to: "/register"
      }, "Sign Up With Email"), isAuth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.button,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        to: "/user"
      }, this.props.auth.email, " ", this.props.auth.amount, "\u20AC") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.button,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        to: "/about"
      }, "About Us")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.sectionMobile
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
        variant: "h6",
        className: classes.titleMobile
      }, "HobbyCraft")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.grow
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.sectionDesktop
      }, isAuth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.button,
        onClick: this.onLogOutToggle,
        to: "/logout"
      }, "Logout") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.button,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: "/login"
      }, "Sign In")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.sectionMobile
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.IconMobile
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_12___default.a, null)))))));
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
    onLogoutClick: function onLogoutClick(history) {
      return dispatch(Object(_thunks_logoutThunk__WEBPACK_IMPORTED_MODULE_7__["onLogOut"])(history));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles)(NavBar))));

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
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/LinearProgress/index.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_es_Typography_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/es/Typography/Typography */ "./node_modules/@material-ui/core/es/Typography/Typography.js");



 // import LinearProgress from "../ProjectsList/ProjectsList";




 // import LinearProgress from "../ProjectsList/ProjectsList";

var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["createMuiTheme"])({
  palette: {
    primary: {
      main: '#EA7925'
    },
    secondary: {
      main: '#ffffff'
    }
  }
});

var ProjectInfo = function ProjectInfo(props) {
  var projectInfo = props.projects.filter(function (project) {
    if (project.id.toString() === props.match.params.id) {
      return project;
    }

    return null;
  }).map(function (project, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Project",
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Title"
    }, project.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress-bar"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, project.budget), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "LinearProgressMoney"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: 'buffer',
      value: project.budget / project.amount * 100
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, project.amount)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "VoteButtons"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      variant: "outlined"
    }, "5\u20AC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      variant: "outlined"
    }, "15\u20AC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      variant: "outlined"
    }, "30\u20AC")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Description"
    }, project.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Text--left"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "Text"
    }, "Author:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "Text--Bold"
    }, project.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "Text"
    }, "Author Email:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "Text--Bold"
    }, project.email)))));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["MuiThemeProvider"], {
    theme: theme
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ProjectInfo"
  }, projectInfo, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "Button",
    variant: "contained",
    color: "primary",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    to: "/projects"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_es_Typography_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "secondary"
  }, "Back to projects"))));
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
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/Snackbar/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Error */ "./node_modules/@material-ui/icons/Error.js");
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/Tooltip/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_17__);
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
    },
    error: {
      main: '#ffffff'
    }
  }
});

var styles = function styles(theme) {
  return {
    main: _defineProperty({
      width: 'auto',
      display: 'block',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    }, theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2), {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }),
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: "".concat(theme.spacing.unit * 2, "px ").concat(theme.spacing.unit * 3, "px ").concat(theme.spacing.unit * 3, "px")
    },
    form: {
      width: '100%',
      marginTop: theme.spacing.unit
    },
    textField: {
      height: 50
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
      height: 50
    },
    root: {
      background: theme.palette.error.dark
    },
    icon: {
      fontSize: 20,
      marginRight: 10
    },
    message: {
      display: 'flex',
      alignItems: 'center'
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

    _defineProperty(_assertThisInitialized(_this), "state", {
      open: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.setState({
        open: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function (event, reason) {
      if (reason === 'clickaway') {
        return;
      }

      _this.setState({
        open: false
      });
    });

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
      var onInputChange = this.props.onInputChange;
      var classes = this.props.classes;
      var email = this.props.auth.email;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["MuiThemeProvider"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: classes.main
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: classes.paper
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_17___default.a, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
        variant: "h5",
        gutterBottom: true,
        align: "center"
      }, "Register Your Hobby"), error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11___default.a, {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        open: this.state.open,
        autoHideDuration: 6000,
        onClose: this.handleClose,
        ContentProps: {
          'aria-describedby': 'message-id',
          classes: {
            root: classes.root
          }
        },
        message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: classes.message
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_15___default.a, {
          className: classes.icon
        }), error),
        action: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_16___default.a, {
          title: "Close"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default.a, {
          "aria-label": "Close",
          key: "close",
          color: "inherit",
          className: classes.close,
          onClick: this.handleClose
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14___default.a, null)))]
      }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
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
        rowsMax: "1",
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
        variant: "contained",
        color: "primary",
        textColor: "secondary",
        className: classes.submit,
        margin: "normal",
        fullWidth: true,
        gutterBottom: true,
        onClick: this.handleClick,
        type: "submit"
      }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        textColor: "secondary",
        color: '#fff',
        h: 15
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
        color: "error"
      }, "Place your hobby"))))));
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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["withStyles"])(styles)(ProjectRegistration)));

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
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/Link/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _thunks_voteThunk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../thunks/voteThunk */ "./assets/js/thunks/voteThunk.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/LinearProgress/index.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Loader/Loader */ "./assets/js/components/Loader/Loader.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__);
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
















var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["createMuiTheme"])({
  palette: {
    primary: {
      main: '#EA7925'
    },
    secondary: {
      main: '#0044ff'
    }
  }
});

var ProjectsList =
/*#__PURE__*/
function (_Component) {
  _inherits(ProjectsList, _Component);

  function ProjectsList() {
    var _this;

    _classCallCheck(this, ProjectsList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProjectsList).call(this));

    _defineProperty(_assertThisInitialized(_this), "onSearchBarChange", function (e) {
      return _this.setState({
        searchValue: e.target.value
      });
    });

    _this.state = {
      opened: false,
      searchValue: ''
    };
    return _this;
  }

  _createClass(ProjectsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onGetProjectsList();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          projects = _this$props.projects,
          onVoteClick = _this$props.onVoteClick;
      var amount = this.props.auth.amount;
      var projectsList;

      if (projects.length !== 0) {
        projectsList = projects && projects.filter(function (project) {
          if (project.title.toLowerCase().includes(_this2.state.searchValue.toLowerCase())) {
            return project;
          }
        }).map(function (project, i) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["MuiThemeProvider"], {
            theme: theme,
            key: i
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: 'main'
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
            className: 'Card',
            component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
            to: "/project/".concat(project.id)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: 'Card-title'
          }, project.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: 'Card-description'
          }, project.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "Card-progress"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, project.budget, "$"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "Card-progress-bar"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_12___default.a, {
            variant: 'buffer',
            value: project.budget / project.amount * 100
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, project.amount, "$")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: 'VoteButtons'
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
            variant: "outlined",
            style: {
              borderRadius: 50,
              margin: 5
            },
            color: "primary",
            onClick: function onClick() {
              return onVoteClick(project.id, 5);
            },
            disabled: amount < 5
          }, "5\u20AC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
            variant: "outlined",
            style: {
              borderRadius: 50,
              margin: 5
            },
            color: "primary",
            onClick: function onClick() {
              return onVoteClick(project.id, 15);
            },
            disabled: amount < 15
          }, "15\u20AC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
            variant: "outlined",
            style: {
              borderRadius: 50,
              margin: 5
            },
            color: "primary",
            onClick: function onClick() {
              return onVoteClick(project.id, 30);
            },
            disabled: amount < 30
          }, "30\u20AC")))));
        });
      } else {
        projectsList = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Loader-container"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_13__["default"], {
          color: '#EA7925',
          h: 100
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["MuiThemeProvider"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ProjectsList"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "SearchBar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14___default.a, {
        fullWidth: true,
        variant: "outlined",
        placeholder: "Please enter keywords",
        color: "primary",
        value: this.state.searchValue,
        onChange: this.onSearchBarChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'searchValue'
      }, this.state.searchValue), projectsList, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
        variant: "h6",
        gutterBottom: true,
        align: "center"
      }, "If you have a project, please", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        color: 'secondary',
        to: "/project-registration"
      }, "Register"), ' ', "your project(hobby).")));
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
      return dispatch(Object(_thunks_voteThunk__WEBPACK_IMPORTED_MODULE_6__["onVote"])(projectId, amount));
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
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/Snackbar/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Error */ "./node_modules/@material-ui/icons/Error.js");
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/Tooltip/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_20__);
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
    },
    error: {
      main: '#ffffff'
    }
  }
});

var styles = function styles(theme) {
  return {
    main: _defineProperty({
      width: 'auto',
      display: 'block',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    }, theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2), {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }),
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: "".concat(theme.spacing.unit * 2, "px ").concat(theme.spacing.unit * 3, "px ").concat(theme.spacing.unit * 3, "px")
    },
    form: {
      width: '100%',
      marginTop: theme.spacing.unit
    },
    textField: {
      height: 50
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
      height: 50
    },
    root: {
      background: theme.palette.error.dark
    },
    icon: {
      fontSize: 20,
      marginRight: 10
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: '#EA7925'
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

    _defineProperty(_assertThisInitialized(_this), "state", {
      open: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.setState({
        open: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function (event, reason) {
      if (reason === 'clickaway') {
        return;
      }

      _this.setState({
        open: false
      });
    });

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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: classes.main
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: classes.paper
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_18___default.a, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_19___default.a, {
        className: classes.avatar
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_20___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
        variant: "h5",
        gutterBottom: true,
        align: "center"
      }, "Sign Up"), error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_13___default.a, {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        open: this.state.open,
        autoHideDuration: 3000,
        onClose: this.handleClose,
        ContentProps: {
          'aria-describedby': 'message-id',
          classes: {
            root: classes.root
          }
        },
        message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: classes.message
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_16___default.a, {
          className: classes.icon
        }), error),
        action: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_17___default.a, {
          title: "Close"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14___default.a, {
          "aria-label": "Close",
          key: "close",
          color: "inherit",
          className: classes.close,
          onClick: this.handleClose
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15___default.a, null)))]
      }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
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
        textColor: "secondary",
        className: classes.submit,
        margin: "normal",
        fullWidth: true,
        gutterBottom: true,
        onClick: this.handleClick,
        type: "submit"
      }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_1__["default"], {
        color: '#fff',
        h: 15
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
        color: "error"
      }, "Sign up")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "subheading"
      }, "Already have an account?", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
        color: 'secondary',
        to: "/login"
      }, "Sign In"))));
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

/***/ "./assets/js/components/User/User.js":
/*!*******************************************!*\
  !*** ./assets/js/components/User/User.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _User_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.scss */ "./assets/js/components/User/User.scss");
/* harmony import */ var _User_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_User_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _thunks_getVotesThunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../thunks/getVotesThunk */ "./assets/js/thunks/getVotesThunk.js");
/* harmony import */ var _thunks_unVoteThunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../thunks/unVoteThunk */ "./assets/js/thunks/unVoteThunk.js");
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loader/Loader */ "./assets/js/components/Loader/Loader.js");
/* harmony import */ var _material_ui_core_es_Paper_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/es/Paper/Paper */ "./node_modules/@material-ui/core/es/Paper/Paper.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var User =
/*#__PURE__*/
function (_Component) {
  _inherits(User, _Component);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, _getPrototypeOf(User).apply(this, arguments));
  }

  _createClass(User, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onGetVotes();
    }
  }, {
    key: "render",
    value: function render() {
      var votes = this.props.votes.votes;
      var onUnVote = this.props.onUnVote;
      var loader = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Loader-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: '#EA7925',
        h: 100
      }));
      var votesArray = votes.map(function (vote) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_es_Paper_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Vote",
          key: vote.id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Voted Hobby: ", vote.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Voted Amount: ", vote.amount, "\u20AC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: function onClick() {
            return onUnVote(vote.id);
          }
        }, "UnVote")));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "User"
      }, "My Votes", votes.length > 0 ? votesArray : loader);
    }
  }]);

  return User;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    votes: state.votes
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onGetVotes: function onGetVotes() {
      return dispatch(Object(_thunks_getVotesThunk__WEBPACK_IMPORTED_MODULE_3__["votes"])());
    },
    onUnVote: function onUnVote(id) {
      return dispatch(Object(_thunks_unVoteThunk__WEBPACK_IMPORTED_MODULE_4__["unVote"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(User));

/***/ }),

/***/ "./assets/js/components/User/User.scss":
/*!*********************************************!*\
  !*** ./assets/js/components/User/User.scss ***!
  \*********************************************/
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
        error: '',
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
        error: '',
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
/* harmony import */ var _votesReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./votesReducer */ "./assets/js/reducers/votesReducer.js");







var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  login: _loginReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  register: _registerReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  projectRegister: _projectRegisterReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  projects: _projectsReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  auth: _authReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  votes: _votesReducer__WEBPACK_IMPORTED_MODULE_6__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./assets/js/reducers/votesReducer.js":
/*!********************************************!*\
  !*** ./assets/js/reducers/votesReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./assets/js/actions/types.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  votes: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_VOTES"]:
      return _objectSpread({}, state, {
        votes: action.votes
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_VOTE"]:
      var votes = state.votes.filter(function (vote) {
        return vote.id !== action.voteID;
      });
      return _objectSpread({}, state, {
        votes: votes
      });

    default:
      return state;
  }
});

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

/***/ "./assets/js/thunks/getVotesThunk.js":
/*!*******************************************!*\
  !*** ./assets/js/thunks/getVotesThunk.js ***!
  \*******************************************/
/*! exports provided: votes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "votes", function() { return votes; });
/* harmony import */ var _actions_votesActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/votesActions */ "./assets/js/actions/votesActions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var votes = function votes() {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/user/votes').then(function (res) {
      dispatch(Object(_actions_votesActions__WEBPACK_IMPORTED_MODULE_0__["getVotes"])(res.data));
    })["catch"](function (error) {
      return console.log(error);
    });
    return null;
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
      dispatch(_actions_loginActions__WEBPACK_IMPORTED_MODULE_0__["onLoginFormError"](err.response.data.error ? err.response.data.error : 'Server Error. Please try again later'));
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



var onLogOut = function onLogOut(history) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/security/logout').then(function (res) {
      Object(_storage_storage__WEBPACK_IMPORTED_MODULE_1__["removeUserFromLS"])();
      dispatch(_actions_authActions__WEBPACK_IMPORTED_MODULE_0__["logout"]());
      history.push('/');
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
      "email": email
    });
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
/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/storage */ "./assets/js/storage/storage.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/authActions */ "./assets/js/actions/authActions.js");




var onRegisterFormSubmit = function onRegisterFormSubmit(user, history) {
  return function (dispatch) {
    dispatch(_actions_registerActions__WEBPACK_IMPORTED_MODULE_0__["onFormLoading"]());

    if (user.username === '' || user.email === '' || user.password === '' || user.password2 === '') {
      return dispatch(_actions_registerActions__WEBPACK_IMPORTED_MODULE_0__["onRegisterFormError"]('Please fill fields'));
    }

    if (user.password !== user.password2) {
      return dispatch(_actions_registerActions__WEBPACK_IMPORTED_MODULE_0__["onRegisterFormError"]('Passwords doesn\'t match'));
    }

    if (user.password.length < 6) {
      return dispatch(_actions_registerActions__WEBPACK_IMPORTED_MODULE_0__["onRegisterFormError"]('Password length must be at least 6 character'));
    }

    var registerJson = {
      email: user.email,
      password: user.password
    };
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/security/register', registerJson).then(function (res) {
      Object(_storage_storage__WEBPACK_IMPORTED_MODULE_2__["setUserToLS"])(res.data);
      dispatch(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_3__["authUser"])(res.data));
      dispatch(_actions_registerActions__WEBPACK_IMPORTED_MODULE_0__["onRegisterFormSuccess"](registerJson));
      history.push('/');
    })["catch"](function (err) {
      dispatch(_actions_registerActions__WEBPACK_IMPORTED_MODULE_0__["onRegisterFormError"](err.response.data.errors.children.email.errors ? err.response.data.errors.children.email.errors : 'Server error. Please try again later.'));
    });
  };
};

/***/ }),

/***/ "./assets/js/thunks/unVoteThunk.js":
/*!*****************************************!*\
  !*** ./assets/js/thunks/unVoteThunk.js ***!
  \*****************************************/
/*! exports provided: unVote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unVote", function() { return unVote; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_votesActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/votesActions */ "./assets/js/actions/votesActions.js");


var unVote = function unVote(voteId) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/vote/".concat(voteId)).then(function (res) {
      dispatch(Object(_actions_votesActions__WEBPACK_IMPORTED_MODULE_1__["removeVote"])(voteId));
    })["catch"](function (error) {
      return console.log(error);
    });
    return null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvUm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL2xvZ2luQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy9wcm9qZWN0UmVnaXN0ZXJBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3Byb2plY3RzQWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3JlZ2lzdGVyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy92b3Rlc0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWJvdXQvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWJvdXQvYWJvdXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS9Ib21lLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2FkZXIvbG9hZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW4vTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW4vTG9naW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RJbmZvL1Byb2plY3RJbmZvLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RJbmZvL1Byb2plY3RJbmZvLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdFJlZ2lzdHJhdGlvbi9Qcm9qZWN0UmVnaXN0cmF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RSZWdpc3RyYXRpb24vUHJvamVjdFJlZ2lzdHJhdGlvbi5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RzTGlzdC9Qcm9qZWN0c0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdHNMaXN0L1Byb2plY3RzTGlzdC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JlZ2lzdGVyL1JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JlZ2lzdGVyL1JlZ2lzdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVXNlci9Vc2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VzZXIvVXNlci5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL2xvZ2luUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvcHJvamVjdFJlZ2lzdGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvcHJvamVjdHNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy9yZWdpc3RlclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy92b3Rlc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlcnZpY2VXb3JrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N0b3JhZ2Uvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL2dldFByb2plY3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3MvZ2V0Vm90ZXNUaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL2xvZ2luVGh1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RodW5rcy9sb2dvdXRUaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL3Byb2plY3RSZWdpc3RlclRodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3MvcmVnaXN0ZXJUaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL3VuVm90ZVRodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3Mvdm90ZVRodW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCJdLCJuYW1lcyI6WyJSb3V0ZXMiLCJ1c2VyIiwiZ2V0VXNlckZyb21MUyIsInByb3BzIiwib25Mb2FkQXV0aCIsImlzQXV0aCIsImF1dGgiLCJwcm9jZXNzIiwiUFVCTElDX1VSTCIsIkhvbWUiLCJBYm91dCIsIlByb2plY3RzTGlzdCIsIkxvZ2luIiwiUmVnaXN0ZXIiLCJQcm9qZWN0UmVnaXN0cmF0aW9uIiwiUHJvamVjdEluZm8iLCJVc2VyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImF1dGhVc2VyIiwiY29ubmVjdCIsInR5cGUiLCJ0eXBlcyIsImxvZ291dCIsIkxPR19PVVQiLCJ2b3RlVXNlciIsImFtb3VudCIsIm9uSW5wdXRDaGFuZ2UiLCJlIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwib25Gb3JtTG9hZGluZyIsIkxPR0lOX0ZPUk1fTE9BRElORyIsIm9uTG9naW5Gb3JtRXJyb3IiLCJlcnJvciIsIm9uTG9naW5Gb3JtU3VjY2VzcyIsIm9uRGF0ZUNoYW5nZSIsImRhdGUiLCJvblByb2plY3RSZWdpc3RlckZvcm1Mb2FkaW5nIiwiUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0xPQURJTkciLCJvblByb2plY3RSZWdpc3RlckZvcm1FcnJvciIsIm9uUHJvamVjdFJlZ2lzdGVyRm9ybVN1Ym1pdCIsInByb2plY3RJbmZvIiwiZ2V0UHJvamVjdHMiLCJwcm9qZWN0cyIsIlJFR0lTVEVSX0ZPUk1fTE9BRElORyIsIm9uUmVnaXN0ZXJGb3JtRXJyb3IiLCJvblJlZ2lzdGVyRm9ybVN1Y2Nlc3MiLCJMT0dJTl9GT1JNX0lOUFVUX0NIQU5HRSIsIkxPR0lOX0ZPUk1fRVJST1IiLCJMT0dJTl9GT1JNX1NVQ0NFU1MiLCJSRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRSIsIlJFR0lTVEVSX0ZPUk1fRVJST1IiLCJSRUdJU1RFUl9GT1JNX1NVQ0NFU1MiLCJQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFIiwiUFJPSkVDVF9SRUdJU1RFUl9EQVRFX0NIQU5HRSIsIlBST0pFQ1RfUkVHSVNURVJfRk9STV9FUlJPUiIsIlBST0pFQ1RfUkVHSVNURVJfRk9STV9TVUNDRVNTIiwiR0VUX1BST0pFQ1RTIiwiQVVUSF9VU0VSIiwiVk9URV9VU0VSIiwiR0VUX1ZPVEVTIiwiUkVNT1ZFX1ZPVEUiLCJnZXRWb3RlcyIsInZvdGVzIiwicmVtb3ZlVm90ZSIsInZvdGVJRCIsImFib3V0IiwidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsIlJvdXRlckxpbmsiLCJMb2FkZXIiLCJjb2xvciIsImgiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJpZ2h0IiwiYm9yZGVyTGVmdCIsImJvcmRlclRvcCIsImJvcmRlckJvdHRvbSIsInN0eWxlcyIsImRpc3BsYXkiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsInVuaXQiLCJtYXJnaW5SaWdodCIsImJyZWFrcG9pbnRzIiwidXAiLCJwYXBlciIsIm1hcmdpblRvcCIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImF2YXRhciIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsImZvcm0iLCJ0ZXh0RmllbGQiLCJzdWJtaXQiLCJyb290IiwiYmFja2dyb3VuZCIsImRhcmsiLCJpY29uIiwiZm9udFNpemUiLCJtZXNzYWdlIiwib3BlbiIsInNldFN0YXRlIiwiZXZlbnQiLCJyZWFzb24iLCJwcmV2ZW50RGVmYXVsdCIsIm9uRm9ybVN1Ym1pdCIsImxvZ2luIiwiaGlzdG9yeSIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2FkaW5nIiwiY2xhc3NlcyIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsImhhbmRsZUNsb3NlIiwiY2xvc2UiLCJoYW5kbGVDbGljayIsImFjdGlvbnMiLCJ3aXRoU3R5bGVzIiwibWVudWJhciIsInBvc2l0aW9uIiwiZ3JvdyIsImZsZXhHcm93IiwiYWxpZ24iLCJ0aXRsZSIsInNlY3Rpb25EZXNrdG9wIiwiYnV0dG9uIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJidXR0b25TaW5nVXAiLCJib3JkZXJSYWRpdXMiLCJmb250V2VpZ2h0Iiwic2VjdGlvbk1vYmlsZSIsInRpdGxlTW9iaWxlIiwiSWNvbk1vYmlsZSIsIk5hdkJhciIsIm9uTG9nb3V0Q2xpY2siLCJSb3V0ZXJMaW5rTmF2Iiwib25Mb2dPdXRUb2dnbGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiTG9nb3V0Iiwid2l0aFJvdXRlciIsImZpbHRlciIsInByb2plY3QiLCJpZCIsInRvU3RyaW5nIiwibWF0Y2giLCJwYXJhbXMiLCJtYXAiLCJpIiwiYnVkZ2V0IiwiZGVzY3JpcHRpb24iLCJ1c2VybmFtZSIsInByb2plY3RSZWdpc3RlciIsImhvYmJ5TmFtZSIsImNvbnRhaW5lciIsInNlYXJjaFZhbHVlIiwib3BlbmVkIiwib25HZXRQcm9qZWN0c0xpc3QiLCJvblZvdGVDbGljayIsInByb2plY3RzTGlzdCIsImxlbmd0aCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJvblNlYXJjaEJhckNoYW5nZSIsInNldFByb2plY3RMaXN0IiwicHJvamVjdElkIiwib25Wb3RlIiwicmVnaXN0ZXIiLCJwYXNzd29yZDIiLCJvblJlZ2lzdGVyRm9ybVN1Ym1pdCIsIm9uR2V0Vm90ZXMiLCJvblVuVm90ZSIsImxvYWRlciIsInZvdGVzQXJyYXkiLCJ2b3RlIiwidW5Wb3RlIiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJwb3N0IiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsInJlc3BvbnNlIiwiY29tcG9zZUVuaGFuY2VycyIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyIsImNvbXBvc2UiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNlcnZpY2VXb3JrZXIiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJlbmREYXRlIiwiY29tYmluZVJlZHVjZXJzIiwibG9naW5SZWR1Y2VyIiwicmVnaXN0ZXJSZWR1Y2VyIiwicHJvamVjdFJlZ2lzdGVyUmVkdWNlciIsInByb2plY3RzUmVkdWNlciIsImF1dGhSZWR1Y2VyIiwidm90ZXNSZWR1Y2VyIiwiaXNMb2NhbGhvc3QiLCJCb29sZWFuIiwibG9jYXRpb24iLCJob3N0bmFtZSIsImNvbmZpZyIsInJlZ2lzdGVyVmFsaWRTVyIsInN3VXJsIiwibmF2aWdhdG9yIiwidGhlbiIsInJlZ2lzdHJhdGlvbiIsIm9udXBkYXRlZm91bmQiLCJpbnN0YWxsaW5nV29ya2VyIiwiaW5zdGFsbGluZyIsIm9uc3RhdGVjaGFuZ2UiLCJjb250cm9sbGVyIiwiY29uc29sZSIsImxvZyIsIm9uVXBkYXRlIiwib25TdWNjZXNzIiwiY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIiLCJmZXRjaCIsImNvbnRlbnRUeXBlIiwiZ2V0Iiwic3RhdHVzIiwiaW5kZXhPZiIsInJlYWR5IiwidW5yZWdpc3RlciIsInJlbG9hZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzZXRVc2VyVG9MUyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJjaGFuZ2VVc2VyQW1vdW50SW5MUyIsInJlbW92ZVVzZXJGcm9tTFMiLCJyZW1vdmVJdGVtIiwicHJvamVjdExpc3QiLCJyZXMiLCJkYXRhIiwibG9naW5Kc29uIiwicHVzaCIsImVyciIsIm9uTG9nT3V0IiwiZm9ybWF0dGVkRGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsImpzb24iLCJyZWdpc3Rlckpzb24iLCJlcnJvcnMiLCJjaGlsZHJlbiIsInZvdGVJZCIsImhvYmJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBSU1BLE07Ozs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQ2xCLFVBQU1DLElBQUksR0FBR0Msc0VBQWEsRUFBMUI7QUFDQUQsVUFBSSxHQUFHLEtBQUtFLEtBQUwsQ0FBV0MsVUFBWCxDQUFzQkgsSUFBdEIsQ0FBSCxHQUFpQyxJQUFyQztBQUNEOzs7NkJBRVE7QUFBQSxVQUNBSSxNQURBLEdB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgQnJvd3NlclJvdXRlcixSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2dldFVzZXJGcm9tTFN9IGZyb20gJy4vc3RvcmFnZS9zdG9yYWdlJztcbmltcG9ydCB7YXV0aFVzZXJ9IGZyb20gJy4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZS9Ib21lJztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdkJhci9OYXZCYXInO1xuaW1wb3J0IFByb2plY3RzTGlzdCBmcm9tICAnLi9jb21wb25lbnRzL1Byb2plY3RzTGlzdC9Qcm9qZWN0c0xpc3QnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbic7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi9jb21wb25lbnRzL1JlZ2lzdGVyL1JlZ2lzdGVyJztcbmltcG9ydCBQcm9qZWN0UmVnaXN0cmF0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Qcm9qZWN0UmVnaXN0cmF0aW9uL1Byb2plY3RSZWdpc3RyYXRpb24nO1xuaW1wb3J0IFByb2plY3RJbmZvIGZyb20gJy4vY29tcG9uZW50cy9Qcm9qZWN0SW5mby9Qcm9qZWN0SW5mbyc7XG5pbXBvcnQgVXNlciBmcm9tICcuL2NvbXBvbmVudHMvVXNlci9Vc2VyJztcbmltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvQWJvdXQvYWJvdXQnO1xuXG5cblxuY2xhc3MgUm91dGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgdXNlciA9IGdldFVzZXJGcm9tTFMoKTtcbiAgICB1c2VyID8gdGhpcy5wcm9wcy5vbkxvYWRBdXRoKHVzZXIpIDogbnVsbFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtpc0F1dGh9ID10aGlzLnByb3BzLmF1dGhcbiAgICByZXR1cm4gKFxuICAgICAgPEJyb3dzZXJSb3V0ZXIgYmFzZW5hbWU9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9PlxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPE5hdkJhci8+XG4gICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9e0hvbWV9Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvYWJvdXQnIGNvbXBvbmVudD17QWJvdXR9Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvcHJvamVjdHMnIGNvbXBvbmVudD17UHJvamVjdHNMaXN0fS8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL2xvZ2luJyBjb21wb25lbnQ9e0xvZ2lufS8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL3JlZ2lzdGVyJyBjb21wb25lbnQ9e1JlZ2lzdGVyfS8+XG4gICAgICAgICAgICB7aXNBdXRoID8gPFJvdXRlIHBhdGg9Jy9wcm9qZWN0LXJlZ2lzdHJhdGlvbicgY29tcG9uZW50PXtQcm9qZWN0UmVnaXN0cmF0aW9ufS8+IDogPFJlZGlyZWN0IHRvPScvbG9naW4nLz59XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL2FkbWluJyAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9wcm9qZWN0LzppZCcgY29tcG9uZW50PXtQcm9qZWN0SW5mb30vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy91c2VyJyBjb21wb25lbnQ9e1VzZXJ9IC8+XG4gICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvbkxvYWRBdXRoOiAodXNlcikgPT4gZGlzcGF0Y2goYXV0aFVzZXIodXNlcikpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShSb3V0ZXMpO1xuIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRoVXNlcih1c2VyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuQVVUSF9VU0VSLFxuICAgICAgICB1c2VyXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkxPR19PVVRcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2b3RlVXNlcihhbW91bnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5WT1RFX1VTRVIsXG4gICAgICAgIGFtb3VudFxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uSW5wdXRDaGFuZ2UoZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLkxPR0lOX0ZPUk1fSU5QVVRfQ0hBTkdFLFxuICAgIG5hbWU6IGUudGFyZ2V0Lm5hbWUsXG4gICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRm9ybUxvYWRpbmcoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuTE9HSU5fRk9STV9MT0FESU5HXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTG9naW5Gb3JtRXJyb3IoZXJyb3IpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5MT0dJTl9GT1JNX0VSUk9SLFxuICAgIGVycm9yXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTG9naW5Gb3JtU3VjY2Vzcyh1c2VyKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTp0eXBlcy5MT0dJTl9GT1JNX1NVQ0NFU1MsXG4gICAgdXNlclxuICB9XG59IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbklucHV0Q2hhbmdlKGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFLFxuICAgIG5hbWU6IGUudGFyZ2V0Lm5hbWUsXG4gICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRGF0ZUNoYW5nZShkYXRlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9EQVRFX0NIQU5HRSxcbiAgICBkYXRlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uUHJvamVjdFJlZ2lzdGVyRm9ybUxvYWRpbmcoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0xPQURJTkdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Qcm9qZWN0UmVnaXN0ZXJGb3JtRXJyb3IoZXJyb3IpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fRVJST1IsXG4gICAgZXJyb3JcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Qcm9qZWN0UmVnaXN0ZXJGb3JtU3VibWl0KHByb2plY3RJbmZvKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9GT1JNX1NVQ0NFU1MsXG4gICAgcHJvamVjdEluZm9cbiAgfVxufSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdHMocHJvamVjdHMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5HRVRfUFJPSkVDVFMsXG4gICAgcHJvamVjdHNcbiAgfVxufSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gb25JbnB1dENoYW5nZShlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UsXG4gICAgbmFtZTogZS50YXJnZXQubmFtZSxcbiAgICB2YWx1ZTogZS50YXJnZXQudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Gb3JtTG9hZGluZygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5SRUdJU1RFUl9GT1JNX0xPQURJTkdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25SZWdpc3RlckZvcm1FcnJvcihlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlJFR0lTVEVSX0ZPUk1fRVJST1IsXG4gICAgZXJyb3JcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25SZWdpc3RlckZvcm1TdWNjZXNzKHVzZXIpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOnR5cGVzLlJFR0lTVEVSX0ZPUk1fU1VDQ0VTUyxcbiAgICB1c2VyXG4gIH1cbn0iLCIvLyBMb2dpbiB0eXBlc1xuXG5leHBvcnQgY29uc3QgTE9HSU5fRk9STV9JTlBVVF9DSEFOR0UgPSAnTE9HSU5fRk9STV9JTlBVVF9DSEFOR0UnO1xuZXhwb3J0IGNvbnN0IExPR0lOX0ZPUk1fTE9BRElORyA9ICdMT0dJTl9GT1JNX0xPQURJTkcnO1xuZXhwb3J0IGNvbnN0IExPR0lOX0ZPUk1fRVJST1IgPSAnTE9HSU5fRk9STV9FUlJPUic7XG5leHBvcnQgY29uc3QgTE9HSU5fRk9STV9TVUNDRVNTID0gJ0xPR0lOX0ZPUk1fU1VDQ0VTUyc7XG5cbi8vIFJlZ2lzdGVyIHR5cGVzXG5cbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRSA9ICdSRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRSc7XG5leHBvcnQgY29uc3QgUkVHSVNURVJfRk9STV9MT0FESU5HID0gJ1JFR0lTVEVSX0ZPUk1fTE9BRElORyc7XG5leHBvcnQgY29uc3QgUkVHSVNURVJfRk9STV9FUlJPUiA9ICdSRUdJU1RFUl9GT1JNX0VSUk9SJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9GT1JNX1NVQ0NFU1MgPSAnUkVHSVNURVJfRk9STV9TVUNDRVNTJztcblxuLy8gUHJvamVjdCBSZWdpc3RlciB0eXBlc1xuXG5leHBvcnQgY29uc3QgUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRSA9ICdQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFJztcbmV4cG9ydCBjb25zdCBQUk9KRUNUX1JFR0lTVEVSX0RBVEVfQ0hBTkdFID0gJ1BST0pFQ1RfUkVHSVNURVJfREFURV9DSEFOR0UnO1xuZXhwb3J0IGNvbnN0IFBST0pFQ1RfUkVHSVNURVJfRk9STV9MT0FESU5HID0gJ1BST0pFQ1RfUkVHSVNURVJfRk9STV9MT0FESU5HJztcbmV4cG9ydCBjb25zdCBQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fRVJST1IgPSAnUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0VSUk9SJztcbmV4cG9ydCBjb25zdCBQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fU1VDQ0VTUyA9ICdQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fU1VDQ0VTUyc7XG5cbi8vIFByb2plY3RzIHR5cGVzXG5cbmV4cG9ydCBjb25zdCBHRVRfUFJPSkVDVFMgPSAnR0VUX1BST0pFQ1RTJztcblxuLy8gQXV0aCB0eXBlc1xuXG5leHBvcnQgY29uc3QgQVVUSF9VU0VSID0gJ0FVVEhfVVNFUic7XG5leHBvcnQgY29uc3QgTE9HX09VVCA9ICdMT0dfT1VUJztcbmV4cG9ydCBjb25zdCBWT1RFX1VTRVIgPSAnVk9URV9VU0VSJztcblxuLy8gVm90ZSB0eXBlc1xuXG5leHBvcnQgY29uc3QgR0VUX1ZPVEVTID0gJ0dFVF9WT1RFUyc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1ZPVEUgPSAnUkVNT1ZFX1ZPVEUnOyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vm90ZXModm90ZXMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5HRVRfVk9URVMsXG4gICAgdm90ZXNcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVm90ZSh2b3RlSUQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5SRU1PVkVfVk9URSxcbiAgICB2b3RlSURcbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vYWJvdXQuc2Nzcyc7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2VzL1BhcGVyL1BhcGVyXCI7XG5jb25zdCBhYm91dCA9ICggKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT1cInBhcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nSGVhZGluZyc+SG9iYnlDcmFmdCBUZWFtPC9kaXY+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmsgYXMgUm91dGVyTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgJy4vSG9tZS5zY3NzJztcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IHtjcmVhdGVNdWlUaGVtZSwgTXVpVGhlbWVQcm92aWRlcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gICAgcGFsZXR0ZToge1xuICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgbWFpbjogJyNmZmZmZmYnLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxuY29uc3QgSG9tZSA9ICggKSA9PiB7XG4gIHJldHVybiAoXG4gICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZS1mbG9hdExlZnQnPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoM1wiXG4gICAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgICAgICBhbGlnbj1cIkxlZnRcIlxuICAgICAgICAgICAgICAgID5BIE5ldyBhbmQgQmV0dGVyIHdheSB0byBlbmdhbmdlPGJyLz5cbiAgICAgICAgICAgICAgICBhbmQgcmV0YWluIGVtcGxveWVlc1xuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YmhlYWRpbmdcIlxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgIGFsaWduPVwiTGVmdFwiXG4gICAgICAgICAgICA+Q29tcGFuaWVzIHVzZSBIb2JieUNyYWZ0IHRvIG9yZ2FuaXplIHRoZWlyPGJyLz5cbiAgICAgICAgICAgICAgICBlbXBsb3llZXMgaG9iYnkgYnVkZ2V0LCBpdHMgYSBwZXJmZWN0PGJyLz5cbiAgICAgICAgICAgICAgICBpbnRlcm5hbCBjcm91ZCBmdW5kaW5nIHN5c3RlbSBmb3IgeW91ICFcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgdG89Jy9sb2dpbidcbiAgICAgICAgICA+PFR5cG9ncmFwaHkgY29sb3I9XCJzZWNvbmRhcnlcIiA+R2V0IFN0YXJ0ZWQ8L1R5cG9ncmFwaHk+PC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9sb2FkZXIuc2Nzcyc7XG5cbmNvbnN0IExvYWRlciA9ICh7Y29sb3IsaD00MH0pID0+IChcbiAgPGRpdlxuICAgIHN0eWxlPXt7XG4gICAgICB3aWR0aDpoKydweCcsXG4gICAgICBoZWlnaHQ6aCsncHgnLFxuICAgICAgYm9yZGVyUmlnaHQ6YCR7aC82fXB4IHNvbGlkIHRyYW5zcGFyZW50YCxcbiAgICAgIGJvcmRlckxlZnQ6YCR7aC82fXB4IHNvbGlkIHRyYW5zcGFyZW50YCxcbiAgICAgIGJvcmRlclRvcDpgJHtoLzZ9cHggc29saWQgJHtjb2xvcn1gLFxuICAgICAgYm9yZGVyQm90dG9tOmAke2gvNn1weCBzb2xpZCAke2NvbG9yfWAsXG4gICAgfX1cbiAgICBjbGFzc05hbWU9e2BMb2FkZXIgJHtjb2xvcn1gfS8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dpbkFjdGlvbnMnO1xuaW1wb3J0IHsgb25Gb3JtU3VibWl0IH0gZnJvbSAnLi4vLi4vdGh1bmtzL2xvZ2luVGh1bmsnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXIvTG9hZGVyJztcbmltcG9ydCAnLi9Mb2dpbi5zY3NzJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJztcbmltcG9ydCB7Y3JlYXRlTXVpVGhlbWUsIE11aVRoZW1lUHJvdmlkZXIsIHdpdGhTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcbmltcG9ydCBFcnJvckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vycm9yJztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBMb2NrT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NrT3V0bGluZWQnO1xuXG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICAgIHBhbGV0dGU6IHtcbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgbWFpbjogJyNFQTc5MjUnLFxuICAgICAgICB9LFxuICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgIG1haW46ICcjMDA0NGZmJyxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIG1haW46ICcjZmZmZmZmJyxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gICAgbWFpbjoge1xuICAgICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKDQwMCArIHRoZW1lLnNwYWNpbmcudW5pdCAqIDMgKiAyKV06IHtcbiAgICAgICAgICAgIHdpZHRoOiA0MDAsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgcGFwZXI6IHtcbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQgKiA4LFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy51bml0ICogMn1weCAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDN9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4YCxcbiAgICB9LFxuICAgIGF2YXRhcjoge1xuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0VBNzkyNScsXG4gICAgfSxcbiAgICBmb3JtOiB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0LFxuICAgIH0sXG4gICAgdGV4dEZpZWxkOiB7XG4gICAgICAgIGhlaWdodDogNTAsXG4gICAgfSxcbiAgICBzdWJtaXQ6IHtcbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgICAgICBoZWlnaHQ6IDUwLFxuICAgIH0sXG4gICAgcm9vdDoge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmVycm9yLmRhcmssXG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICAgIGZvbnRTaXplOjIwLFxuICAgICAgICBtYXJnaW5SaWdodDogMTAsXG4gICAgfSxcbiAgICBtZXNzYWdlOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgfSxcbn0pO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG9wZW46IGZhbHNlLFxuICAgIH07XG5cbiAgICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZUNsb3NlID0gKGV2ZW50LCByZWFzb24pID0+IHtcbiAgICAgICAgaWYgKHJlYXNvbiA9PT0gJ2NsaWNrYXdheScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gICAgfTtcblxuXG4gICAgb25Gb3JtU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnByb3BzLm9uRm9ybVN1Ym1pdCh0aGlzLnByb3BzLmxvZ2luLCB0aGlzLnByb3BzLmhpc3RvcnkpXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCBlcnJvciwgbG9hZGluZyB9ID0gdGhpcy5wcm9wcy5sb2dpblxuICAgICAgICBjb25zdCB7b25JbnB1dENoYW5nZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2tPdXRsaW5lZEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvciA/IDxTbmFja2JhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezMwMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250ZW50UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiAnbWVzc2FnZS1pZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMucm9vdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgICAgICA8RXJyb3JJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcn1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uRm9ybVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRlciBjb2xvcj17JyNmZmYnfSBoPXsxNX0gLz4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJlcnJvclwiID5TaWduIEluPC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic3ViaGVhZGluZ1wifT5cbiAgICAgICAgICAgICAgICAgICAgICAgIElmIHlvdSBkb24ndCBoYXZlIGFuIGFjY291bnQsIHBsZWFzZXsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy9SZWdpc3Rlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvZ2luOiBzdGF0ZS5sb2dpblxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIG9uSW5wdXRDaGFuZ2U6IChlKSA9PiBkaXNwYXRjaChhY3Rpb25zLm9uSW5wdXRDaGFuZ2UoZSkpLFxuICAgIG9uRm9ybVN1Ym1pdDogKHVzZXIsIGhpc3RvcnkpID0+ZGlzcGF0Y2gob25Gb3JtU3VibWl0KHVzZXIsaGlzdG9yeSkpLFxufSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhTdHlsZXMoc3R5bGVzKShMb2dpbikpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtOYXZMaW5rIGFzIFJvdXRlckxpbmtOYXYsIExpbmsgYXMgUm91dGVyTGluaywgd2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IHt3aXRoU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtNdWlUaGVtZVByb3ZpZGVyLCBjcmVhdGVNdWlUaGVtZX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7b25Mb2dPdXQgYXMgTG9nb3V0fSBmcm9tICcuLi8uLi90aHVua3MvbG9nb3V0VGh1bmsnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9LFxuICBtZW51YmFyOiB7XG4gICAgcG9zaXRpb246IFwic3RhdGljXCIsXG4gICAgYmFja2dyb3VuZDogXCIjMTgxODE4XCIsXG5cbiAgfSxcbiAgZ3Jvdzoge1xuICAgIGZsZXhHcm93OiAxLFxuICAgIGFsaWduOiAnY2VudGVyJyxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIH0sXG4gIH0sXG4gIHNlY3Rpb25EZXNrdG9wOiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgfSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgY29sb3I6ICcjQTRBNEE0JyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICBtYXJnaW46ICdhdXRvJyxcbiAgICBwYWRkaW5nTGVmdDogMjAsXG4gICAgcGFkZGluZ1JpZ2h0OiAyMCxcbiAgfSxcbiAgYnV0dG9uU2luZ1VwOiB7XG4gICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0VBNzkyNVwiLFxuICAgIGJvcmRlclJhZGl1czogMjUsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNBMTU0MjFcIixcbiAgICB9LFxuICB9LFxuICBzZWN0aW9uTW9iaWxlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB9LFxuICB9LFxuICB0aXRsZU1vYmlsZToge1xuICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gIH0sXG4gIEljb25Nb2JpbGU6IHtcbiAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gIH0sXG59O1xuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB2YWx1ZTogMCxcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCwgdmFsdWUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZX0pO1xuICB9O1xuXG4gIG9uTG9nT3V0VG9nZ2xlID0gKCkgPT4gdGhpcy5wcm9wcy5vbkxvZ291dENsaWNrKHRoaXMucHJvcHMuaGlzdG9yeSlcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2NsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge2lzQXV0aH0gPSB0aGlzLnByb3BzLmF1dGg7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgPEFwcEJhciBjbGFzc05hbWU9e2NsYXNzZXMubWVudWJhcn0+XG4gICAgICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgICAgICAgICBIb2JieUNyYWZ0XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbk1vYmlsZX0+XG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuSWNvbk1vYmlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbi8+XG4gICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbkRlc2t0b3B9PlxuICAgICAgICAgICAgICAgICAge2lzQXV0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgPCBCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gY29tcG9uZW50PXtSb3V0ZXJMaW5rTmF2fSBleGFjdCB0bz0nL3Byb2plY3RzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIERpc2NvdmVyIFByb2plY3RzXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgIDwgQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IGNvbXBvbmVudD17Um91dGVyTGlua05hdn0gZXhhY3QgdG89Jy8nPlxuICAgICAgICAgICAgICAgICAgICAgICAgRGlzY292ZXJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj59XG4gICAgICAgICAgICAgICAgICB7aXNBdXRoID9cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25TaW5nVXB9IGNvbXBvbmVudD17Um91dGVyTGlua05hdn0gdG89Jy9wcm9qZWN0LXJlZ2lzdHJhdGlvbic+Q3JlYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBhIFByb2plY3Q8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uU2luZ1VwfSBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9IHRvPScvcmVnaXN0ZXInPlNpZ25cbiAgICAgICAgICAgICAgICAgICAgICAgIFVwIFdpdGggRW1haWw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHtpc0F1dGggP1xuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gY29tcG9uZW50PXtSb3V0ZXJMaW5rTmF2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy91c2VyJz57dGhpcy5wcm9wcy5hdXRoLmVtYWlsfSB7dGhpcy5wcm9wcy5hdXRoLmFtb3VudH3igqw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9IHRvPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBYm91dCBVc1xuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25Nb2JpbGV9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlTW9iaWxlfT5cbiAgICAgICAgICAgICAgICAgICAgSG9iYnlDcmFmdFxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3Jvd30vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25EZXNrdG9wfT5cbiAgICAgICAgICAgICAgICAgIHtpc0F1dGggP1xuICAgICAgICAgICAgICAgICAgICAgIDwgQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9e3RoaXMub25Mb2dPdXRUb2dnbGV9IHRvPScvbG9nb3V0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICA8IEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBjb21wb25lbnQ9e1JvdXRlckxpbmt9IHRvPScvbG9naW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbk1vYmlsZX0+XG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuSWNvbk1vYmlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uLz5cbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuTmF2QmFyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvbkxvZ291dENsaWNrOiAoaGlzdG9yeSkgPT4gZGlzcGF0Y2goTG9nb3V0KGhpc3RvcnkpKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhSb3V0ZXIod2l0aFN0eWxlcyhzdHlsZXMpKE5hdkJhcikpKTsiLCJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge0xpbmsgYXMgUm91dGVyTGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCAnLi9Qcm9qZWN0SW5mby5zY3NzJztcbi8vIGltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tIFwiLi4vUHJvamVjdHNMaXN0L1Byb2plY3RzTGlzdFwiO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB7Y3JlYXRlTXVpVGhlbWUsIE11aVRoZW1lUHJvdmlkZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvZXMvVHlwb2dyYXBoeS9UeXBvZ3JhcGh5XCI7XG4vLyBpbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSBcIi4uL1Byb2plY3RzTGlzdC9Qcm9qZWN0c0xpc3RcIjtcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gICAgcGFsZXR0ZToge1xuICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgbWFpbjogJyNmZmZmZmYnLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxuXG5cbmNvbnN0IFByb2plY3RJbmZvID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHByb2plY3RJbmZvID0gcHJvcHMucHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4ge1xuICAgIGlmKHByb2plY3QuaWQudG9TdHJpbmcoKSA9PT0gcHJvcHMubWF0Y2gucGFyYW1zLmlkKSB7XG4gICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0pLm1hcCgocHJvamVjdCwgaSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nUHJvamVjdCcga2V5PXtpfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RpdGxlJz57cHJvamVjdC50aXRsZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZ3Jlc3MtYmFyJz5cbiAgICAgICAgICAgICAgPGRpdj57cHJvamVjdC5idWRnZXR9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdMaW5lYXJQcm9ncmVzc01vbmV5Jz5cbiAgICAgICAgICAgICAgICAgIDxMaW5lYXJQcm9ncmVzcyB2YXJpYW50PXsnYnVmZmVyJ30gdmFsdWU9eyhwcm9qZWN0LmJ1ZGdldC9wcm9qZWN0LmFtb3VudCkqMTAwfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2Pntwcm9qZWN0LmFtb3VudH08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVm90ZUJ1dHRvbnMnPlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiID414oKsPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgPjE14oKsPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgPjMw4oKsPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdEZXNjcmlwdGlvbic+e3Byb2plY3QuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RleHQtLWxlZnQnPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJUZXh0XCI+QXV0aG9yOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdUZXh0LS1Cb2xkJz57cHJvamVjdC51c2VybmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlRleHRcIj5BdXRob3IgRW1haWw6PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J1RleHQtLUJvbGQnPntwcm9qZWN0LmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSlcbiAgcmV0dXJuIChcbiAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdQcm9qZWN0SW5mbyc+XG4gICAgICAgICAge3Byb2plY3RJbmZvfVxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdCdXR0b24nXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgIHRvPScvcHJvamVjdHMnPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICA+QmFjayB0byBwcm9qZWN0czwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0czogc3RhdGUucHJvamVjdHMucHJvamVjdHNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUHJvamVjdEluZm8pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL1Byb2plY3RSZWdpc3RyYXRpb24uc2Nzcyc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlci9Mb2FkZXInO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9wcm9qZWN0UmVnaXN0ZXJBY3Rpb25zJztcbmltcG9ydCB7b25Qcm9qZWN0UmVnaXN0ZXJGb3JtU3VibWl0fSBmcm9tICcuLi8uLi90aHVua3MvcHJvamVjdFJlZ2lzdGVyVGh1bmsnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJztcbmltcG9ydCB7Y3JlYXRlTXVpVGhlbWUsIE11aVRoZW1lUHJvdmlkZXIsIHdpdGhTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcbmltcG9ydCBFcnJvckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vycm9yJztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcblxuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjRUE3OTI1JyxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyMwMDQ0ZmYnLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIG1haW46ICcjZmZmZmZmJyxcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIG1haW46IHtcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoNDAwICsgdGhlbWUuc3BhY2luZy51bml0ICogMyAqIDIpXToge1xuICAgICAgd2lkdGg6IDQwMCxcbiAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgfSxcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDgsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDJ9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weGAsXG4gIH0sXG4gIGZvcm06IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0LFxuICB9LFxuICB0ZXh0RmllbGQ6IHtcbiAgICBoZWlnaHQ6IDUwLFxuICB9LFxuICBzdWJtaXQ6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgaGVpZ2h0OiA1MCxcbiAgfSxcbiAgcm9vdDoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcbiAgfSxcbiAgaWNvbjoge1xuICAgIGZvbnRTaXplOjIwLFxuICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgfSxcbiAgbWVzc2FnZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgfSxcbn0pO1xuXG5jbGFzcyBQcm9qZWN0UmVnaXN0cmF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3BlbjogZmFsc2UsXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gIH07XG5cbiAgaGFuZGxlQ2xvc2UgPSAoZXZlbnQsIHJlYXNvbikgPT4ge1xuICAgIGlmIChyZWFzb24gPT09ICdjbGlja2F3YXknKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgfTtcblxuXG4gIG9uRm9ybVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25Gb3JtU3VibWl0KHRoaXMucHJvcHMucHJvamVjdFJlZ2lzdGVyLCB0aGlzLnByb3BzLmhpc3RvcnksIHRoaXMucHJvcHMuYXV0aC5lbWFpbClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB1c2VybmFtZSxcbiAgICAgIGhvYmJ5TmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgYW1vdW50LFxuICAgICAgbG9hZGluZyxcbiAgICAgIGVycm9yLFxuICAgIH0gPXRoaXMucHJvcHMucHJvamVjdFJlZ2lzdGVyO1xuICAgIGNvbnN0IHtvbklucHV0Q2hhbmdlfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZW1haWwgfSA9dGhpcy5wcm9wcy5hdXRoXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiPlJlZ2lzdGVyIFlvdXIgSG9iYnlcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICB7ZXJyb3IgP1xuICAgICAgICAgICAgICAgICAgICA8U25hY2tiYXJcbiAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XG4gICAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgQ29udGVudFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogJ21lc3NhZ2UtaWQnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5yb290XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgbWVzc2FnZT17PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgIDxFcnJvckljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259Lz5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9yfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgYWN0aW9uPXtbXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD4sXG4gICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG5cbiAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uRm9ybVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9XG4gICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxuXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3VzZXJuYW1lJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdob2JieU5hbWUnXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtob2JieU5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQbGVhc2UgZW50ZXIgeW91ciBob2JieSBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBlbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICByb3dzTWF4PVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxlYXNlIGRlc2NyaWJlIGl0XCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2Ftb3VudCdcbiAgICAgICAgICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW1vdW50fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxlYXNlIGVudGVyIGFtb3VudCBmb3IgeW91ciBuZWVkc1wiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRlciB0ZXh0Q29sb3I9XCJzZWNvbmRhcnlcIiBjb2xvcj17JyNmZmYnfSBoPXsxNX0gLz4gOlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiZXJyb3JcIiA+UGxhY2UgeW91ciBob2JieTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0UmVnaXN0ZXI6IHN0YXRlLnByb2plY3RSZWdpc3RlcixcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvbklucHV0Q2hhbmdlOiAoZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5vbklucHV0Q2hhbmdlKGUpKSxcbiAgb25EYXRlQ2hhbmdlOiAoZGF0ZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5vbkRhdGVDaGFuZ2UoZGF0ZSkpLFxuICBvbkZvcm1TdWJtaXQ6IChwcm9qZWN0SW5mbywgaGlzdG9yeSwgZW1haWwpPT5kaXNwYXRjaChvblByb2plY3RSZWdpc3RlckZvcm1TdWJtaXQocHJvamVjdEluZm8saGlzdG9yeSxlbWFpbCkpXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFN0eWxlcyhzdHlsZXMpKFByb2plY3RSZWdpc3RyYXRpb24pKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluayBhcyBSb3V0ZXJMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCAnLi9Qcm9qZWN0c0xpc3Quc2Nzcyc7XG5pbXBvcnQge3NldFByb2plY3RMaXN0fSBmcm9tICcuLi8uLi90aHVua3MvZ2V0UHJvamVjdHMnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI7XG5pbXBvcnQge29uVm90ZX0gZnJvbSAnLi4vLi4vdGh1bmtzL3ZvdGVUaHVuayc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IHtjcmVhdGVNdWlUaGVtZSwgTXVpVGhlbWVQcm92aWRlcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIlxuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyL0xvYWRlcic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogJyNFQTc5MjUnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzAwNDRmZicsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5cbmNsYXNzIFByb2plY3RzTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgIHNlYXJjaFZhbHVlOiAnJ1xuICAgIH1cbiAgfVxuXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkdldFByb2plY3RzTGlzdCgpO1xuICB9XG5cbiAgb25TZWFyY2hCYXJDaGFuZ2UgPSBlID0+IHRoaXMuc2V0U3RhdGUoe3NlYXJjaFZhbHVlOiBlLnRhcmdldC52YWx1ZX0pXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtwcm9qZWN0cywgb25Wb3RlQ2xpY2t9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7YW1vdW50fSA9IHRoaXMucHJvcHMuYXV0aDtcbiAgICBsZXQgcHJvamVjdHNMaXN0O1xuICAgIGlmIChwcm9qZWN0cy5sZW5ndGggIT09IDApIHtcbiAgICAgIHByb2plY3RzTGlzdCA9IHByb2plY3RzICYmIHByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHtcbiAgICAgICAgaWYgKHByb2plY3QudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAgICAgLm1hcCgocHJvamVjdCwgaSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfSBrZXk9e2l9PlxuICAgICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9eydtYWluJ30+XG4gICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17J0NhcmQnfSBjb21wb25lbnQ9e1JvdXRlckxpbmt9IHRvPXtgL3Byb2plY3QvJHtwcm9qZWN0LmlkfWB9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydDYXJkLXRpdGxlJ30+e3Byb2plY3QudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J0NhcmQtZGVzY3JpcHRpb24nfT57cHJvamVjdC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIkNhcmQtcHJvZ3Jlc3NcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3Byb2plY3QuYnVkZ2V0fSQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiQ2FyZC1wcm9ncmVzcy1iYXJcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmVhclByb2dyZXNzIHZhcmlhbnQ9eydidWZmZXInfSB2YWx1ZT17KHByb2plY3QuYnVkZ2V0IC8gcHJvamVjdC5hbW91bnQpICogMTAwfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pntwcm9qZWN0LmFtb3VudH0kPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnVm90ZUJ1dHRvbnMnfT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzdHlsZT17e2JvcmRlclJhZGl1czogNTAsIG1hcmdpbjogNX19IGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Wb3RlQ2xpY2socHJvamVjdC5pZCwgNSl9IGRpc2FibGVkPXthbW91bnQgPCA1fT414oKsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgc3R5bGU9e3tib3JkZXJSYWRpdXM6IDUwLCBtYXJnaW46IDV9fSBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVm90ZUNsaWNrKHByb2plY3QuaWQsIDE1KX0gZGlzYWJsZWQ9e2Ftb3VudCA8IDE1fT4xNeKCrDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiA1MCwgbWFyZ2luOiA1fX0gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblZvdGVDbGljayhwcm9qZWN0LmlkLCAzMCl9IGRpc2FibGVkPXthbW91bnQgPCAzMH0+MzDigqw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICAgICAgKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdHNMaXN0ID0gPGRpdiBjbGFzc05hbWU9J0xvYWRlci1jb250YWluZXInPlxuICAgICAgICA8TG9hZGVyIGNvbG9yPXsnI0VBNzkyNSd9IGg9ezEwMH0vPlxuICAgICAgPC9kaXY+XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1Byb2plY3RzTGlzdCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNlYXJjaEJhclwiPlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGVhc2UgZW50ZXIga2V5d29yZHNcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFZhbHVlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWFyY2hCYXJDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc2VhcmNoVmFsdWUnfT57dGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZX08L2Rpdj5cbiAgICAgICAgICAgIHtwcm9qZWN0c0xpc3R9XG5cblxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgID5JZiB5b3UgaGF2ZSBhIHByb2plY3QsIHBsZWFzZXsnICd9XG4gICAgICAgICAgICAgIDxMaW5rIGNvbXBvbmVudD17Um91dGVyTGlua30gY29sb3I9eydzZWNvbmRhcnknfSB0bz0nL3Byb2plY3QtcmVnaXN0cmF0aW9uJz5SZWdpc3RlcjwvTGluaz5cbiAgICAgICAgICAgICAgeycgJ315b3VyIHByb2plY3QoaG9iYnkpLlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvamVjdHM6IHN0YXRlLnByb2plY3RzLnByb2plY3RzLFxuICAgIGF1dGg6IHN0YXRlLmF1dGhcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIG9uR2V0UHJvamVjdHNMaXN0OiAoKSA9PiBkaXNwYXRjaChzZXRQcm9qZWN0TGlzdCgpKSxcbiAgb25Wb3RlQ2xpY2s6IChwcm9qZWN0SWQsIGFtb3VudCkgPT4gZGlzcGF0Y2gob25Wb3RlKHByb2plY3RJZCwgYW1vdW50KSlcblxufSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQcm9qZWN0c0xpc3QpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXIvTG9hZGVyJztcbmltcG9ydCB7TGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCAnLi9SZWdpc3Rlci5zY3NzJ1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vLi4vYWN0aW9ucy9yZWdpc3RlckFjdGlvbnNcIjtcbmltcG9ydCB7b25SZWdpc3RlckZvcm1TdWJtaXR9IGZyb20gJy4uLy4uL3RodW5rcy9yZWdpc3RlclRodW5rJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcbmltcG9ydCB7Y3JlYXRlTXVpVGhlbWUsIE11aVRoZW1lUHJvdmlkZXIsIHdpdGhTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XG5pbXBvcnQgRXJyb3JJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FcnJvcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgQWNjb3VudCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZSc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogJyNFQTc5MjUnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzAwNDRmZicsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgbWFpbjogJyNmZmZmZmYnLFxuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgbWFpbjoge1xuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCg0MDAgKyB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzICogMildOiB7XG4gICAgICB3aWR0aDogNDAwLFxuICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICB9LFxuICB9LFxuICBwYXBlcjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0ICogOCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy51bml0ICogMn1weCAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDN9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4YCxcbiAgfSxcbiAgZm9ybToge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gIH0sXG4gIHRleHRGaWVsZDoge1xuICAgIGhlaWdodDogNTAsXG4gIH0sXG4gIHN1Ym1pdDoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICBoZWlnaHQ6IDUwLFxuICB9LFxuICByb290OiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5lcnJvci5kYXJrLFxuICB9LFxuICBpY29uOiB7XG4gICAgZm9udFNpemU6MjAsXG4gICAgbWFyZ2luUmlnaHQ6IDEwLFxuICB9LFxuICBtZXNzYWdlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB9LFxuICBhdmF0YXI6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRUE3OTI1JyxcbiAgfSxcbn0pO1xuXG5cbmNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3BlbjogZmFsc2UsXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gIH07XG5cbiAgaGFuZGxlQ2xvc2UgPSAoZXZlbnQsIHJlYXNvbikgPT4ge1xuICAgIGlmIChyZWFzb24gPT09ICdjbGlja2F3YXknKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgfTtcblxuICBvbkZvcm1TdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uRm9ybVN1Ym1pdCh0aGlzLnByb3BzLnJlZ2lzdGVyLCB0aGlzLnByb3BzLmhpc3RvcnkpO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3VzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHBhc3N3b3JkMiwgZXJyb3IsIGxvYWRpbmcsfSA9IHRoaXMucHJvcHMucmVnaXN0ZXI7XG4gICAgY29uc3Qge29uSW5wdXRDaGFuZ2V9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9ID5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cbiAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lLz5cbiAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0gPlxuICAgICAgICAgICAgICAgICAgICA8QWNjb3VudC8+XG4gICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCI+U2lnbiBVcFxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIHtlcnJvciA/IDxTbmFja2JhclxuICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MzAwMH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgICBDb250ZW50UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiAnbWVzc2FnZS1pZCcsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLnJvb3RcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9ezxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgPEVycm9ySWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0vPlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3J9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgYWN0aW9uPXtbXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25Gb3JtU3VibWl0fSAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0gIG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd1c2VybmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBlbnRlciB5b3VyIG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBlbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkMidcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkMn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlcGVhdCBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRlciBjb2xvcj17JyNmZmYnfSBoPXsxNX0gLz4gOlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiZXJyb3JcIiA+U2lnbiB1cDwvVHlwb2dyYXBoeT4gfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzdWJoZWFkaW5nXCJ9PlxuICAgICAgICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P3snICd9XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XG4gICAgICAgICAgICAgICAgICAgIHRvPScvbG9naW4nPlxuICAgICAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcmVnaXN0ZXI6IHN0YXRlLnJlZ2lzdGVyXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvbklucHV0Q2hhbmdlOiAoZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5vbklucHV0Q2hhbmdlKGUpKSxcbiAgb25Gb3JtU3VibWl0OiAodXNlciwgaGlzdG9yeSkgPT4gZGlzcGF0Y2gob25SZWdpc3RlckZvcm1TdWJtaXQodXNlciwgaGlzdG9yeSkpXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFN0eWxlcyhzdHlsZXMpKFJlZ2lzdGVyKSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vVXNlci5zY3NzJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge3ZvdGVzfSBmcm9tICcuLi8uLi90aHVua3MvZ2V0Vm90ZXNUaHVuayc7XG5pbXBvcnQge3VuVm90ZX0gZnJvbSAnLi4vLi4vdGh1bmtzL3VuVm90ZVRodW5rJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyL0xvYWRlcic7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2VzL1BhcGVyL1BhcGVyXCI7XG5cblxuY2xhc3MgVXNlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMub25HZXRWb3RlcygpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3ZvdGVzfSA9IHRoaXMucHJvcHMudm90ZXM7XG4gICAgY29uc3Qge29uVW5Wb3RlfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbG9hZGVyID0gPGRpdiBjbGFzc05hbWU9XCJMb2FkZXItY29udGFpbmVyXCI+XG4gICAgICA8TG9hZGVyIGNvbG9yPXsnI0VBNzkyNSd9IGg9ezEwMH0vPlxuICAgIDwvZGl2PlxuICAgIGNvbnN0IHZvdGVzQXJyYXkgPSB2b3Rlcy5tYXAodm90ZSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxQYXBlcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1ZvdGUnIGtleT17dm90ZS5pZH0+XG4gICAgICAgICAgICAgICAgPHA+Vm90ZWQgSG9iYnk6IHt2b3RlLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5Wb3RlZCBBbW91bnQ6IHt2b3RlLmFtb3VudH3igqw8L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVuVm90ZSh2b3RlLmlkKX0+VW5Wb3RlPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvUGFwZXI+XG4gICAgICApXG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVXNlcic+XG4gICAgICAgICAgTXkgVm90ZXNcbiAgICAgICAgICB7dm90ZXMubGVuZ3RoID4gMCA/IHZvdGVzQXJyYXkgOiBsb2FkZXJ9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdm90ZXM6IHN0YXRlLnZvdGVzXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvbkdldFZvdGVzOiAoKSA9PiBkaXNwYXRjaCh2b3RlcygpKSxcbiAgb25VblZvdGU6IChpZCkgPT4gZGlzcGF0Y2godW5Wb3RlKGlkKSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVc2VyKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge2NyZWF0ZVN0b3JlLCBjb21wb3NlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9yb290UmVkdWNlcic7XG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5pbXBvcnQgUm91dGVzIGZyb20gJy4vUm91dGVzJztcbmltcG9ydCAqIGFzIHNlcnZpY2VXb3JrZXIgZnJvbSAnLi9zZXJ2aWNlV29ya2VyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbidcblxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKHJlcXVlc3QgPT4ge1xuICByZXR1cm4gcmVxdWVzdDtcbn0pXG5cbmF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShyZXNwb25zZSA9PiB7XG4gIHJldHVybiByZXNwb25zZTtcbn0pXG5cbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIHx8IGNvbXBvc2U7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGNvbXBvc2VFbmhhbmNlcnMoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSkpO1xuXG5SZWFjdERPTS5yZW5kZXIoPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gIDxSb3V0ZXMvPlxuPC9Qcm92aWRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuXG5cbi8vIElmIHlvdSB3YW50IHlvdXIgYXBwIHRvIHdvcmsgb2ZmbGluZSBhbmQgbG9hZCBmYXN0ZXIsIHlvdSBjYW4gY2hhbmdlXG4vLyB1bnJlZ2lzdGVyKCkgdG8gcmVnaXN0ZXIoKSBiZWxvdy4gTm90ZSB0aGlzIGNvbWVzIHdpdGggc29tZSBwaXRmYWxscy5cbi8vIExlYXJuIG1vcmUgYWJvdXQgc2VydmljZSB3b3JrZXJzOiBodHRwczovL2JpdC5seS9DUkEtUFdBXG5zZXJ2aWNlV29ya2VyLnVucmVnaXN0ZXIoKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgZW1haWw6ICcnLFxuICAgIGFtb3VudDogMCxcbiAgICBpc0F1dGg6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLkFVVEhfVVNFUjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgZW1haWw6IGFjdGlvbi51c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgIGFtb3VudDogYWN0aW9uLnVzZXIuYnVkZ2V0LFxuICAgICAgICAgICAgICAgIGlzQXV0aDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIHR5cGVzLkxPR19PVVQ6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDAsXG4gICAgICAgICAgICAgICAgaXNBdXRoOiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSB0eXBlcy5WT1RFX1VTRVI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGFtb3VudDogc3RhdGUuYW1vdW50LWFjdGlvbi5hbW91bnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBlbWFpbDogJycsXG4gIHBhc3N3b3JkOiAnJyxcbiAgZXJyb3I6ICcnLFxuICBsb2FkaW5nOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5MT0dJTl9GT1JNX0lOUFVUX0NIQU5HRTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIFthY3Rpb24ubmFtZV06IGFjdGlvbi52YWx1ZX07XG4gICAgY2FzZSB0eXBlcy5MT0dJTl9GT1JNX0xPQURJTkc6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlcnJvcjogJycsIGxvYWRpbmc6IHRydWV9O1xuICAgIGNhc2UgdHlwZXMuTE9HSU5fRk9STV9FUlJPUjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVycm9yOiBhY3Rpb24uZXJyb3IsIGxvYWRpbmc6ZmFsc2V9O1xuICAgIGNhc2UgdHlwZXMuTE9HSU5fRk9STV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZW1haWw6ICcnLCBwYXNzd29yZDogJycsIGxvYWRpbmc6ZmFsc2V9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VybmFtZTogJycsXG4gIGhvYmJ5TmFtZTogJycsXG4gIGVtYWlsOiAnJyxcbiAgZGVzY3JpcHRpb246ICcnLFxuICBhbW91bnQ6ICcnLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgZXJyb3I6ICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgW2FjdGlvbi5uYW1lXTogYWN0aW9uLnZhbHVlfTtcbiAgICBjYXNlIHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfREFURV9DSEFOR0U6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlbmREYXRlOiBhY3Rpb24uZGF0ZX07XG4gICAgY2FzZSB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fTE9BRElORzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IHRydWV9O1xuICAgIGNhc2UgdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0VSUk9SOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXJyb3I6IGFjdGlvbi5lcnJvciwgbG9hZGluZzpmYWxzZX07XG4gICAgY2FzZSB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHVzZXJuYW1lOiAnJywgaG9iYnlOYW1lOiAnJywgZW1haWw6ICcnLCBhbW91bnQ6ICcnLCBkZXNjcmlwdGlvbjogJycsIGxvYWRpbmc6ZmFsc2UsIGVycm9yOicnfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwcm9qZWN0czogW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLkdFVF9QUk9KRUNUUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHByb2plY3RzOiBhY3Rpb24ucHJvamVjdHN9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHVzZXJuYW1lOiAnJyxcbiAgZW1haWw6ICcnLFxuICBwYXNzd29yZDogJycsXG4gIHBhc3N3b3JkMjogJycsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcjogJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0U6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBbYWN0aW9uLm5hbWVdOiBhY3Rpb24udmFsdWV9O1xuICAgIGNhc2UgdHlwZXMuUkVHSVNURVJfRk9STV9MT0FESU5HOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXJyb3I6JycsIGxvYWRpbmc6IHRydWV9O1xuICAgIGNhc2UgdHlwZXMuUkVHSVNURVJfRk9STV9FUlJPUjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVycm9yOiBhY3Rpb24uZXJyb3IsIGxvYWRpbmc6ZmFsc2V9O1xuICAgIGNhc2UgdHlwZXMuUkVHSVNURVJfRk9STV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdXNlcm5hbWU6ICcnLCBlbWFpbDogJycsIHBhc3N3b3JkOiAnJywgcGFzc3dvcmQyOiAnJywgZXJyb3I6ICcnLCBsb2FkaW5nOiBmYWxzZX1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gICdyZWR1eCc7XG5pbXBvcnQgbG9naW5SZWR1Y2VyIGZyb20gJy4vbG9naW5SZWR1Y2VyJztcbmltcG9ydCByZWdpc3RlclJlZHVjZXIgZnJvbSAnLi9yZWdpc3RlclJlZHVjZXInO1xuaW1wb3J0IHByb2plY3RSZWdpc3RlclJlZHVjZXIgZnJvbSAnLi9wcm9qZWN0UmVnaXN0ZXJSZWR1Y2VyJztcbmltcG9ydCBwcm9qZWN0c1JlZHVjZXIgZnJvbSAnLi9wcm9qZWN0c1JlZHVjZXInO1xuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gJy4vYXV0aFJlZHVjZXInO1xuaW1wb3J0IHZvdGVzUmVkdWNlciBmcm9tICcuL3ZvdGVzUmVkdWNlcic7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgbG9naW46IGxvZ2luUmVkdWNlcixcbiAgcmVnaXN0ZXI6IHJlZ2lzdGVyUmVkdWNlcixcbiAgcHJvamVjdFJlZ2lzdGVyOiBwcm9qZWN0UmVnaXN0ZXJSZWR1Y2VyLFxuICBwcm9qZWN0czogcHJvamVjdHNSZWR1Y2VyLFxuICBhdXRoOiBhdXRoUmVkdWNlcixcbiAgdm90ZXM6IHZvdGVzUmVkdWNlclxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB2b3RlczogW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5HRVRfVk9URVM6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCB2b3RlczogYWN0aW9uLnZvdGVzfVxuICAgIGNhc2UgdHlwZXMuUkVNT1ZFX1ZPVEU6XG4gICAgICBjb25zdCB2b3RlcyA9IHN0YXRlLnZvdGVzLmZpbHRlcih2b3RlID0+IHZvdGUuaWQgIT09IGFjdGlvbi52b3RlSUQpXG4gICAgICByZXR1cm4gey4uLnN0YXRlLCB2b3Rlc31cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiLy8gVGhpcyBvcHRpb25hbCBjb2RlIGlzIHVzZWQgdG8gcmVnaXN0ZXIgYSBzZXJ2aWNlIHdvcmtlci5cbi8vIHJlZ2lzdGVyKCkgaXMgbm90IGNhbGxlZCBieSBkZWZhdWx0LlxuXG4vLyBUaGlzIGxldHMgdGhlIGFwcCBsb2FkIGZhc3RlciBvbiBzdWJzZXF1ZW50IHZpc2l0cyBpbiBwcm9kdWN0aW9uLCBhbmQgZ2l2ZXNcbi8vIGl0IG9mZmxpbmUgY2FwYWJpbGl0aWVzLiBIb3dldmVyLCBpdCBhbHNvIG1lYW5zIHRoYXQgZGV2ZWxvcGVycyAoYW5kIHVzZXJzKVxuLy8gd2lsbCBvbmx5IHNlZSBkZXBsb3llZCB1cGRhdGVzIG9uIHN1YnNlcXVlbnQgdmlzaXRzIHRvIGEgcGFnZSwgYWZ0ZXIgYWxsIHRoZVxuLy8gZXhpc3RpbmcgdGFicyBvcGVuIG9uIHRoZSBwYWdlIGhhdmUgYmVlbiBjbG9zZWQsIHNpbmNlIHByZXZpb3VzbHkgY2FjaGVkXG4vLyByZXNvdXJjZXMgYXJlIHVwZGF0ZWQgaW4gdGhlIGJhY2tncm91bmQuXG5cbi8vIFRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIGJlbmVmaXRzIG9mIHRoaXMgbW9kZWwgYW5kIGluc3RydWN0aW9ucyBvbiBob3cgdG9cbi8vIG9wdC1pbiwgcmVhZCBodHRwczovL2JpdC5seS9DUkEtUFdBXG5cbmNvbnN0IGlzTG9jYWxob3N0ID0gQm9vbGVhbihcbiAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnbG9jYWxob3N0JyB8fFxuICAgIC8vIFs6OjFdIGlzIHRoZSBJUHY2IGxvY2FsaG9zdCBhZGRyZXNzLlxuICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ1s6OjFdJyB8fFxuICAgIC8vIDEyNy4wLjAuMS84IGlzIGNvbnNpZGVyZWQgbG9jYWxob3N0IGZvciBJUHY0LlxuICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5tYXRjaChcbiAgICAgIC9eMTI3KD86XFwuKD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KSl7M30kL1xuICAgIClcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlcihjb25maWcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgIC8vIFRoZSBVUkwgY29uc3RydWN0b3IgaXMgYXZhaWxhYmxlIGluIGFsbCBicm93c2VycyB0aGF0IHN1cHBvcnQgU1cuXG4gICAgY29uc3QgcHVibGljVXJsID0gbmV3IFVSTChwcm9jZXNzLmVudi5QVUJMSUNfVVJMLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgaWYgKHB1YmxpY1VybC5vcmlnaW4gIT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgIC8vIE91ciBzZXJ2aWNlIHdvcmtlciB3b24ndCB3b3JrIGlmIFBVQkxJQ19VUkwgaXMgb24gYSBkaWZmZXJlbnQgb3JpZ2luXG4gICAgICAvLyBmcm9tIHdoYXQgb3VyIHBhZ2UgaXMgc2VydmVkIG9uLiBUaGlzIG1pZ2h0IGhhcHBlbiBpZiBhIENETiBpcyB1c2VkIHRvXG4gICAgICAvLyBzZXJ2ZSBhc3NldHM7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svY3JlYXRlLXJlYWN0LWFwcC9pc3N1ZXMvMjM3NFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc3dVcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9zZXJ2aWNlLXdvcmtlci5qc2A7XG5cbiAgICAgIGlmIChpc0xvY2FsaG9zdCkge1xuICAgICAgICAvLyBUaGlzIGlzIHJ1bm5pbmcgb24gbG9jYWxob3N0LiBMZXQncyBjaGVjayBpZiBhIHNlcnZpY2Ugd29ya2VyIHN0aWxsIGV4aXN0cyBvciBub3QuXG4gICAgICAgIGNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyKHN3VXJsLCBjb25maWcpO1xuXG4gICAgICAgIC8vIEFkZCBzb21lIGFkZGl0aW9uYWwgbG9nZ2luZyB0byBsb2NhbGhvc3QsIHBvaW50aW5nIGRldmVsb3BlcnMgdG8gdGhlXG4gICAgICAgIC8vIHNlcnZpY2Ugd29ya2VyL1BXQSBkb2N1bWVudGF0aW9uLlxuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICdUaGlzIHdlYiBhcHAgaXMgYmVpbmcgc2VydmVkIGNhY2hlLWZpcnN0IGJ5IGEgc2VydmljZSAnICtcbiAgICAgICAgICAgICAgJ3dvcmtlci4gVG8gbGVhcm4gbW9yZSwgdmlzaXQgaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQSdcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElzIG5vdCBsb2NhbGhvc3QuIEp1c3QgcmVnaXN0ZXIgc2VydmljZSB3b3JrZXJcbiAgICAgICAgcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCwgY29uZmlnKSB7XG4gIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgLnJlZ2lzdGVyKHN3VXJsKVxuICAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICByZWdpc3RyYXRpb24ub251cGRhdGVmb3VuZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5zdGFsbGluZ1dvcmtlciA9IHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nO1xuICAgICAgICBpZiAoaW5zdGFsbGluZ1dvcmtlciA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbGxpbmdXb3JrZXIub25zdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoaW5zdGFsbGluZ1dvcmtlci5zdGF0ZSA9PT0gJ2luc3RhbGxlZCcpIHtcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIHRoZSB1cGRhdGVkIHByZWNhY2hlZCBjb250ZW50IGhhcyBiZWVuIGZldGNoZWQsXG4gICAgICAgICAgICAgIC8vIGJ1dCB0aGUgcHJldmlvdXMgc2VydmljZSB3b3JrZXIgd2lsbCBzdGlsbCBzZXJ2ZSB0aGUgb2xkZXJcbiAgICAgICAgICAgICAgLy8gY29udGVudCB1bnRpbCBhbGwgY2xpZW50IHRhYnMgYXJlIGNsb3NlZC5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgJ05ldyBjb250ZW50IGlzIGF2YWlsYWJsZSBhbmQgd2lsbCBiZSB1c2VkIHdoZW4gYWxsICcgK1xuICAgICAgICAgICAgICAgICAgJ3RhYnMgZm9yIHRoaXMgcGFnZSBhcmUgY2xvc2VkLiBTZWUgaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQS4nXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBjYWxsYmFja1xuICAgICAgICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5vblVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5vblVwZGF0ZShyZWdpc3RyYXRpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50LCBldmVyeXRoaW5nIGhhcyBiZWVuIHByZWNhY2hlZC5cbiAgICAgICAgICAgICAgLy8gSXQncyB0aGUgcGVyZmVjdCB0aW1lIHRvIGRpc3BsYXkgYVxuICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQgaXMgY2FjaGVkIGZvciBvZmZsaW5lIHVzZS5cIiBtZXNzYWdlLlxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29udGVudCBpcyBjYWNoZWQgZm9yIG9mZmxpbmUgdXNlLicpO1xuXG4gICAgICAgICAgICAgIC8vIEV4ZWN1dGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcub25TdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLm9uU3VjY2VzcyhyZWdpc3RyYXRpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uOicsIGVycm9yKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIoc3dVcmwsIGNvbmZpZykge1xuICAvLyBDaGVjayBpZiB0aGUgc2VydmljZSB3b3JrZXIgY2FuIGJlIGZvdW5kLiBJZiBpdCBjYW4ndCByZWxvYWQgdGhlIHBhZ2UuXG4gIGZldGNoKHN3VXJsKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIC8vIEVuc3VyZSBzZXJ2aWNlIHdvcmtlciBleGlzdHMsIGFuZCB0aGF0IHdlIHJlYWxseSBhcmUgZ2V0dGluZyBhIEpTIGZpbGUuXG4gICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKTtcbiAgICAgIGlmIChcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzID09PSA0MDQgfHxcbiAgICAgICAgKGNvbnRlbnRUeXBlICE9IG51bGwgJiYgY29udGVudFR5cGUuaW5kZXhPZignamF2YXNjcmlwdCcpID09PSAtMSlcbiAgICAgICkge1xuICAgICAgICAvLyBObyBzZXJ2aWNlIHdvcmtlciBmb3VuZC4gUHJvYmFibHkgYSBkaWZmZXJlbnQgYXBwLiBSZWxvYWQgdGhlIHBhZ2UuXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgICAgICByZWdpc3RyYXRpb24udW5yZWdpc3RlcigpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNlcnZpY2Ugd29ya2VyIGZvdW5kLiBQcm9jZWVkIGFzIG5vcm1hbC5cbiAgICAgICAgcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnTm8gaW50ZXJuZXQgY29ubmVjdGlvbiBmb3VuZC4gQXBwIGlzIHJ1bm5pbmcgaW4gb2ZmbGluZSBtb2RlLidcbiAgICAgICk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyKCkge1xuICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyRnJvbUxTKCkge1xuICBjb25zdCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hvYmJ5Q3JhZnQtdXNlcicpXG4gIHJldHVybiBKU09OLnBhcnNlKHVzZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlclRvTFModXNlcikge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaG9iYnlDcmFmdC11c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpXG4gIHJldHVybjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVVzZXJBbW91bnRJbkxTKGFtb3VudCkge1xuICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaG9iYnlDcmFmdC11c2VyJykpXG4gIHVzZXIuYnVkZ2V0ID0gdXNlci5idWRnZXQgLSBhbW91bnQ7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdob2JieUNyYWZ0LXVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcbiAgcmV0dXJuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVXNlckZyb21MUygpIHtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2hvYmJ5Q3JhZnQtdXNlcicpXG4gIHJldHVybjtcbn1cblxuIiwiaW1wb3J0IHtnZXRQcm9qZWN0c30gZnJvbSAnLi4vYWN0aW9ucy9wcm9qZWN0c0FjdGlvbic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBjb25zdCBzZXRQcm9qZWN0TGlzdCA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGF4aW9zXG4gICAgICAuZ2V0KCcvYXBpL2hvYmJpZXMnKVxuICAgIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGdldFByb2plY3RzKHJlcy5kYXRhKSkpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICByZXR1cm4gcHJvamVjdExpc3Q7XG59IiwiaW1wb3J0IHtnZXRWb3Rlc30gZnJvbSAnLi4vYWN0aW9ucy92b3Rlc0FjdGlvbnMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IHZvdGVzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGF4aW9zLmdldCgnL2FwaS91c2VyL3ZvdGVzJylcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGdldFZvdGVzKHJlcy5kYXRhKSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICByZXR1cm4gbnVsbDtcbn0iLCJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvbG9naW5BY3Rpb25zJztcbmltcG9ydCB7YXV0aFVzZXJ9IGZyb20gJy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7c2V0VXNlclRvTFN9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZSc7XG5cbmV4cG9ydCBjb25zdCBvbkZvcm1TdWJtaXQgPSAodXNlciwgaGlzdG9yeSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKGFjdGlvbnMub25Gb3JtTG9hZGluZygpKTtcbiAgaWYodXNlci5lbWFpbCA9PT0gJycgfHwgdXNlci5wYXNzd29yZCA9PT0gJycgKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbnMub25Mb2dpbkZvcm1FcnJvcignUGxlYXNlIGZpbGwgZmllbGRzJykpO1xuICB9XG4gIGNvbnN0IGxvZ2luSnNvbiA9IFx0e1xuICAgICAgXCJzZWN1cml0eVwiOiB7XG4gICAgICAgICAgXCJjcmVkZW50aWFsc1wiOiB7XG4gICAgICAgICAgICAgIFwiZW1haWxcIjogdXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgXCJwYXNzd29yZFwiOiB1c2VyLnBhc3N3b3JkXG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIGF4aW9zLnBvc3QoJy9hcGkvc2VjdXJpdHkvbG9naW4nLCBsb2dpbkpzb24pXG4gICAgICAudGhlbihyZXMgPT57XG4gICAgICAgIHNldFVzZXJUb0xTKHJlcy5kYXRhKVxuICAgICAgICBkaXNwYXRjaChhdXRoVXNlcihyZXMuZGF0YSkpXG4gICAgICAgIGRpc3BhdGNoKGFjdGlvbnMub25Mb2dpbkZvcm1TdWNjZXNzKHVzZXIpKVxuICAgICAgICBoaXN0b3J5LnB1c2goJy8nKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbnMub25Mb2dpbkZvcm1FcnJvcihlcnIucmVzcG9uc2UuZGF0YS5lcnJvciA/IGVyci5yZXNwb25zZS5kYXRhLmVycm9yIDpcbiAgICAgICAgICAnU2VydmVyIEVycm9yLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyJykpXG4gICAgICAgIH1cbiAgICAgIClcbn0iLCJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuaW1wb3J0IHtyZW1vdmVVc2VyRnJvbUxTfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3Qgb25Mb2dPdXQgPSAoaGlzdG9yeSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGF4aW9zLmdldCgnL2FwaS9zZWN1cml0eS9sb2dvdXQnKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmVtb3ZlVXNlckZyb21MUygpXG4gICAgICAgIGRpc3BhdGNoKGFjdGlvbnMubG9nb3V0KCkpXG4gICAgICAgIGhpc3RvcnkucHVzaCgnLycpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgcmV0dXJuIG51bGw7XG59IiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3Byb2plY3RSZWdpc3RlckFjdGlvbnMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB1dWlkdjQgZnJvbSAndXVpZCdcblxuZXhwb3J0IGNvbnN0IG9uUHJvamVjdFJlZ2lzdGVyRm9ybVN1Ym1pdCA9IChwcm9qZWN0SW5mbywgaGlzdG9yeSwgZW1haWwpID0+IChkaXNwYXRjaCkgPT4ge1xuXG4gIGRpc3BhdGNoKGFjdGlvbnMub25Qcm9qZWN0UmVnaXN0ZXJGb3JtTG9hZGluZygpKTtcbiAgaWYocHJvamVjdEluZm8udXNlcm5hbWUgPT09ICcnIHx8IHByb2plY3RJbmZvLmhvYmJ5TmFtZSA9PT0gJycgfHxcbiAgcHJvamVjdEluZm8uZGVzY3JpcHRpb24gPT09ICcnIHx8IHByb2plY3RJbmZvLmFtb3VudCA9PT0gJycgKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbnMub25Qcm9qZWN0UmVnaXN0ZXJGb3JtRXJyb3IoJ1BsZWFzZSBmaWxsIGFsbCBmaWVsZHMnKSlcbiAgfVxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gbW9tZW50KHByb2plY3RJbmZvLmVuZERhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuXG4gIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgXCJ0aXRsZVwiOiBwcm9qZWN0SW5mby5ob2JieU5hbWUsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBwcm9qZWN0SW5mby5kZXNjcmlwdGlvbixcbiAgICBcImFtb3VudFwiOiBwcm9qZWN0SW5mby5hbW91bnQsXG4gICAgXCJlbWFpbFwiOiBlbWFpbFxuICB9KTtcbiAgYXhpb3NcbiAgICAgIC5wb3N0KCcvYXBpL2hvYmJ5Jyxqc29uKVxuICAgIC50aGVuKHJlcz0+e1xuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5vblByb2plY3RSZWdpc3RlckZvcm1TdWJtaXQocmVzKSk7XG4gICAgICBoaXN0b3J5LnB1c2goJy9wcm9qZWN0cycpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMub25Qcm9qZWN0UmVnaXN0ZXJGb3JtRXJyb3IoJ1NlcnZlciBlcnJvci4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKSlcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH0pXG5cbn0iLCJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvcmVnaXN0ZXJBY3Rpb25zJztcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7c2V0VXNlclRvTFN9IGZyb20gXCIuLi9zdG9yYWdlL3N0b3JhZ2VcIjtcbmltcG9ydCB7YXV0aFVzZXJ9IGZyb20gXCIuLi9hY3Rpb25zL2F1dGhBY3Rpb25zXCI7XG5cbmV4cG9ydCBjb25zdCBvblJlZ2lzdGVyRm9ybVN1Ym1pdCA9ICh1c2VyLCBoaXN0b3J5KSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goYWN0aW9ucy5vbkZvcm1Mb2FkaW5nKCkpO1xuICBpZih1c2VyLnVzZXJuYW1lID09PSAnJyB8fCB1c2VyLmVtYWlsID09PSAnJyB8fCB1c2VyLnBhc3N3b3JkID09PSAnJyB8fCB1c2VyLnBhc3N3b3JkMiA9PT0gJycpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9ucy5vblJlZ2lzdGVyRm9ybUVycm9yKCdQbGVhc2UgZmlsbCBmaWVsZHMnKSk7XG4gIH1cbiAgaWYodXNlci5wYXNzd29yZCAhPT0gdXNlci5wYXNzd29yZDIpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9ucy5vblJlZ2lzdGVyRm9ybUVycm9yKCdQYXNzd29yZHMgZG9lc25cXCd0IG1hdGNoJykpO1xuICB9XG4gIGlmKHVzZXIucGFzc3dvcmQubGVuZ3RoIDwgNikge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25zLm9uUmVnaXN0ZXJGb3JtRXJyb3IoJ1Bhc3N3b3JkIGxlbmd0aCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVyJykpO1xuICB9XG4gIGNvbnN0IHJlZ2lzdGVySnNvbiA9IHtcbiAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZCxcbiAgfTtcblxuICBheGlvcy5wb3N0KCcvYXBpL3NlY3VyaXR5L3JlZ2lzdGVyJywgcmVnaXN0ZXJKc29uKVxuICAgICAgLnRoZW4ocmVzID0+e1xuICAgICAgICBzZXRVc2VyVG9MUyhyZXMuZGF0YSlcbiAgICAgICAgZGlzcGF0Y2goYXV0aFVzZXIocmVzLmRhdGEpKVxuICAgICAgICBkaXNwYXRjaChhY3Rpb25zLm9uUmVnaXN0ZXJGb3JtU3VjY2VzcyhyZWdpc3Rlckpzb24pKVxuICAgICAgICBoaXN0b3J5LnB1c2goJy8nKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5vblJlZ2lzdGVyRm9ybUVycm9yKGVyci5yZXNwb25zZS5kYXRhLmVycm9ycy5jaGlsZHJlbi5lbWFpbC5lcnJvcnMgP1xuICAgICAgICAgICAgICAgIGVyci5yZXNwb25zZS5kYXRhLmVycm9ycy5jaGlsZHJlbi5lbWFpbC5lcnJvcnNcbiAgICAgICAgICAgICAgICA6ICdTZXJ2ZXIgZXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJykpXG4gICAgICAgICAgfVxuICAgICAgKVxuXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7cmVtb3ZlVm90ZX0gZnJvbSAnLi4vYWN0aW9ucy92b3Rlc0FjdGlvbnMnXG5cbmV4cG9ydCBjb25zdCB1blZvdGUgPSAodm90ZUlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgYXhpb3MuZGVsZXRlKGAvYXBpL3ZvdGUvJHt2b3RlSWR9YClcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHJlbW92ZVZvdGUodm90ZUlkKSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICByZXR1cm4gbnVsbDtcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtzZXRQcm9qZWN0TGlzdH0gZnJvbSAnLi9nZXRQcm9qZWN0cyc7XG5pbXBvcnQge2NoYW5nZVVzZXJBbW91bnRJbkxTfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UnXG5pbXBvcnQge3ZvdGVVc2VyfSBmcm9tICcuLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcblxuZXhwb3J0IGNvbnN0IG9uVm90ZSA9IChwcm9qZWN0SWQsIGFtb3VudCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGF4aW9zLnBvc3QoJy9hcGkvdm90ZScsIHtcbiAgICBob2JieTogcHJvamVjdElkLFxuICAgIGFtb3VudDogYW1vdW50XG4gIH0pLnRoZW4ocmVzPT57XG4gICAgY2hhbmdlVXNlckFtb3VudEluTFMoYW1vdW50KTtcbiAgICBkaXNwYXRjaChzZXRQcm9qZWN0TGlzdCgpKTtcbiAgICBkaXNwYXRjaCh2b3RlVXNlcihhbW91bnQpKTtcbiAgfSkuY2F0Y2goZXJyPT4gY29uc29sZS5sb2coZXJyKSlcblxuICByZXR1cm4gbnVsbDtcbn0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1TR1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==