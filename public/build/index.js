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
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/user",
        component: _components_User_User__WEBPACK_IMPORTED_MODULE_12__["default"]
      }), "g", isAuth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
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
      main: '#ffffff'
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
  MobileButton: {
    display: 'block',
    color: '#ffffff',
    '&:hover': {
      color: '#A4A4A4'
    },
    margin: 'auto',
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: '20px',
    textAlign: 'center'
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
  },
  MobileMenu: {
    position: 'fixed',
    top: '56px',
    right: 0,
    paddingTop: '20px',
    zIndex: 1000,
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0, 0.75)'
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
      value: 0,
      showMenu: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event, value) {
      _this.setState({
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onLogOutToggle", function () {
      return _this.props.onLogoutClick(_this.props.history);
    });

    _defineProperty(_assertThisInitialized(_this), "onMenuShow", function () {
      return _this.setState({
        showMenu: !_this.state.showMenu
      });
    });

    return _this;
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          location = _this$props.location;
      var isAuth = this.props.auth.isAuth;
      var showMenu = this.state.showMenu;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["MuiThemeProvider"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.menubar
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        color: "secondary",
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        to: "/"
      }, "HobbyCraft"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.sectionMobile
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.IconMobile
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default.a, {
        onClick: this.onMenuShow
      })), showMenu ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.onMenuShow,
        className: classes.MobileMenu
      }, isAuth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.MobileButton,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        exact: true,
        to: "/projects"
      }, "Discover Projects") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.MobileButton,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        exact: true,
        to: "/"
      }, "Discover"), isAuth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.MobileButton,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        to: "/project-registration"
      }, "Create a Project") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.MobileButton,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        to: "/register"
      }, "Sign Up With Email"), isAuth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.MobileButton,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        to: "/user"
      }, this.props.auth.email, " ", this.props.auth.amount, "\u20AC") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.MobileButton,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        to: "/about"
      }, "About Us")) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.grow
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.sectionDesktop
      }, isAuth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: '/projects' === location.pathname ? classes.buttonSingUp : classes.button,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        exact: true,
        to: "/projects"
      }, "Discover Projects") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: '/' === location.pathname ? classes.buttonSingUp : classes.button,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        exact: true,
        to: "/"
      }, "Discover"), isAuth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: '/project-registration' === location.pathname ? classes.buttonSingUp : classes.button,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        to: "/project-registration"
      }, "Create a Project") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: '/register' === location.pathname ? classes.buttonSingUp : classes.button,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        to: "/register"
      }, "Sign Up With Email"), isAuth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: '/user' === location.pathname ? classes.buttonSingUp : classes.button,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        to: "/user"
      }, this.props.auth.email, " ", this.props.auth.amount, "\u20AC") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: '/about' === location.pathname ? classes.buttonSingUp : classes.button,
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
      }, isAuth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.button,
        onClick: this.onLogOutToggle,
        to: "/logout"
      }, "Logout") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.button,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: "/login"
      }, "Sign In"))))));
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
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_es_Paper_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/es/Paper/Paper */ "./node_modules/@material-ui/core/es/Paper/Paper.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__);
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

var User =
/*#__PURE__*/
function (_Component) {
  _inherits(User, _Component);

  function User() {
    var _this;

    _classCallCheck(this, User);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(User).call(this));

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
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["MuiThemeProvider"], {
          theme: theme
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          className: 'main'
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_es_Paper_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: 'Card',
          key: vote.id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: 'Card-title'
        }, vote.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: 'Card-MoneySpend'
        }, "Voted Amount: ", vote.amount, "\u20AC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
          color: "primary",
          variant: "outlined",
          onClick: function onClick() {
            return onUnVote(vote.id);
          }
        }, "UnVote"))));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "User"
      }, votes.length > 0 ? votesArray : loader);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvUm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL2xvZ2luQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy9wcm9qZWN0UmVnaXN0ZXJBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3Byb2plY3RzQWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3JlZ2lzdGVyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy92b3Rlc0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWJvdXQvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWJvdXQvYWJvdXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS9Ib21lLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2FkZXIvbG9hZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW4vTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW4vTG9naW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RJbmZvL1Byb2plY3RJbmZvLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RJbmZvL1Byb2plY3RJbmZvLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdFJlZ2lzdHJhdGlvbi9Qcm9qZWN0UmVnaXN0cmF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RSZWdpc3RyYXRpb24vUHJvamVjdFJlZ2lzdHJhdGlvbi5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RzTGlzdC9Qcm9qZWN0c0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdHNMaXN0L1Byb2plY3RzTGlzdC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JlZ2lzdGVyL1JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JlZ2lzdGVyL1JlZ2lzdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVXNlci9Vc2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VzZXIvVXNlci5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL2xvZ2luUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvcHJvamVjdFJlZ2lzdGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvcHJvamVjdHNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy9yZWdpc3RlclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy92b3Rlc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlcnZpY2VXb3JrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N0b3JhZ2Uvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL2dldFByb2plY3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3MvZ2V0Vm90ZXNUaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL2xvZ2luVGh1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RodW5rcy9sb2dvdXRUaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL3Byb2plY3RSZWdpc3RlclRodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3MvcmVnaXN0ZXJUaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL3VuVm90ZVRodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3Mvdm90ZVRodW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCJdLCJuYW1lcyI6WyJSb3V0ZXMiLCJ1c2VyIiwiZ2V0VXNlckZyb21MUyIsInByb3BzIiwib25Mb2FkQXV0aCIsImlzQXV0aCIsImF1dGgiLCJwcm9jZXNzIiwiUFVCTElDX1VSTCIsIkhvbWUiLCJBYm91dCIsIlByb2plY3RzTGlzdCIsIkxvZ2luIiwiUmVnaXN0ZXIiLCJVc2VyIiwiUHJvamVjdFJlZ2lzdHJhdGlvbiIsIlByb2plY3RJbmZvIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImF1dGhVc2VyIiwiY29ubmVjdCIsInR5cGUiLCJ0eXBlcyIsImxvZ291dCIsIkxPR19PVVQiLCJ2b3RlVXNlciIsImFtb3VudCIsIm9uSW5wdXRDaGFuZ2UiLCJlIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwib25Gb3JtTG9hZGluZyIsIkxPR0lOX0ZPUk1fTE9BRElORyIsIm9uTG9naW5Gb3JtRXJyb3IiLCJlcnJvciIsIm9uTG9naW5Gb3JtU3VjY2VzcyIsIm9uRGF0ZUNoYW5nZSIsImRhdGUiLCJvblByb2plY3RSZWdpc3RlckZvcm1Mb2FkaW5nIiwiUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0xPQURJTkciLCJvblByb2plY3RSZWdpc3RlckZvcm1FcnJvciIsIm9uUHJvamVjdFJlZ2lzdGVyRm9ybVN1Ym1pdCIsInByb2plY3RJbmZvIiwiZ2V0UHJvamVjdHMiLCJwcm9qZWN0cyIsIlJFR0lTVEVSX0ZPUk1fTE9BRElORyIsIm9uUmVnaXN0ZXJGb3JtRXJyb3IiLCJvblJlZ2lzdGVyRm9ybVN1Y2Nlc3MiLCJMT0dJTl9GT1JNX0lOUFVUX0NIQU5HRSIsIkxPR0lOX0ZPUk1fRVJST1IiLCJMT0dJTl9GT1JNX1NVQ0NFU1MiLCJSRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRSIsIlJFR0lTVEVSX0ZPUk1fRVJST1IiLCJSRUdJU1RFUl9GT1JNX1NVQ0NFU1MiLCJQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFIiwiUFJPSkVDVF9SRUdJU1RFUl9EQVRFX0NIQU5HRSIsIlBST0pFQ1RfUkVHSVNURVJfRk9STV9FUlJPUiIsIlBST0pFQ1RfUkVHSVNURVJfRk9STV9TVUNDRVNTIiwiR0VUX1BST0pFQ1RTIiwiQVVUSF9VU0VSIiwiVk9URV9VU0VSIiwiR0VUX1ZPVEVTIiwiUkVNT1ZFX1ZPVEUiLCJnZXRWb3RlcyIsInZvdGVzIiwicmVtb3ZlVm90ZSIsInZvdGVJRCIsImFib3V0IiwidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsIlJvdXRlckxpbmsiLCJMb2FkZXIiLCJjb2xvciIsImgiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJpZ2h0IiwiYm9yZGVyTGVmdCIsImJvcmRlclRvcCIsImJvcmRlckJvdHRvbSIsInN0eWxlcyIsImRpc3BsYXkiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsInVuaXQiLCJtYXJnaW5SaWdodCIsImJyZWFrcG9pbnRzIiwidXAiLCJwYXBlciIsIm1hcmdpblRvcCIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImF2YXRhciIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsImZvcm0iLCJ0ZXh0RmllbGQiLCJzdWJtaXQiLCJyb290IiwiYmFja2dyb3VuZCIsImRhcmsiLCJpY29uIiwiZm9udFNpemUiLCJtZXNzYWdlIiwib3BlbiIsInNldFN0YXRlIiwiZXZlbnQiLCJyZWFzb24iLCJwcmV2ZW50RGVmYXVsdCIsIm9uRm9ybVN1Ym1pdCIsImxvZ2luIiwiaGlzdG9yeSIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2FkaW5nIiwiY2xhc3NlcyIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsImhhbmRsZUNsb3NlIiwiY2xvc2UiLCJoYW5kbGVDbGljayIsImFjdGlvbnMiLCJ3aXRoU3R5bGVzIiwibWVudWJhciIsInBvc2l0aW9uIiwiZ3JvdyIsImZsZXhHcm93IiwiYWxpZ24iLCJ0aXRsZSIsInNlY3Rpb25EZXNrdG9wIiwiYnV0dG9uIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJNb2JpbGVCdXR0b24iLCJ0ZXh0QWxpZ24iLCJidXR0b25TaW5nVXAiLCJib3JkZXJSYWRpdXMiLCJmb250V2VpZ2h0Iiwic2VjdGlvbk1vYmlsZSIsInRpdGxlTW9iaWxlIiwiSWNvbk1vYmlsZSIsIk1vYmlsZU1lbnUiLCJ0b3AiLCJyaWdodCIsInBhZGRpbmdUb3AiLCJ6SW5kZXgiLCJOYXZCYXIiLCJzaG93TWVudSIsIm9uTG9nb3V0Q2xpY2siLCJsb2NhdGlvbiIsIlJvdXRlckxpbmtOYXYiLCJvbk1lbnVTaG93IiwicGF0aG5hbWUiLCJvbkxvZ091dFRvZ2dsZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJMb2dvdXQiLCJ3aXRoUm91dGVyIiwiZmlsdGVyIiwicHJvamVjdCIsImlkIiwidG9TdHJpbmciLCJtYXRjaCIsInBhcmFtcyIsIm1hcCIsImkiLCJidWRnZXQiLCJkZXNjcmlwdGlvbiIsInVzZXJuYW1lIiwicHJvamVjdFJlZ2lzdGVyIiwiaG9iYnlOYW1lIiwiY29udGFpbmVyIiwic2VhcmNoVmFsdWUiLCJvcGVuZWQiLCJvbkdldFByb2plY3RzTGlzdCIsIm9uVm90ZUNsaWNrIiwicHJvamVjdHNMaXN0IiwibGVuZ3RoIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIm9uU2VhcmNoQmFyQ2hhbmdlIiwic2V0UHJvamVjdExpc3QiLCJwcm9qZWN0SWQiLCJvblZvdGUiLCJyZWdpc3RlciIsInBhc3N3b3JkMiIsIm9uUmVnaXN0ZXJGb3JtU3VibWl0Iiwib25HZXRWb3RlcyIsIm9uVW5Wb3RlIiwibG9hZGVyIiwidm90ZXNBcnJheSIsInZvdGUiLCJ1blZvdGUiLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsInBvc3QiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwicmVzcG9uc2UiLCJjb21wb3NlRW5oYW5jZXJzIiwid2luZG93IiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIiwiY29tcG9zZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VydmljZVdvcmtlciIsImluaXRpYWxTdGF0ZSIsImFjdGlvbiIsImVuZERhdGUiLCJjb21iaW5lUmVkdWNlcnMiLCJsb2dpblJlZHVjZXIiLCJyZWdpc3RlclJlZHVjZXIiLCJwcm9qZWN0UmVnaXN0ZXJSZWR1Y2VyIiwicHJvamVjdHNSZWR1Y2VyIiwiYXV0aFJlZHVjZXIiLCJ2b3Rlc1JlZHVjZXIiLCJpc0xvY2FsaG9zdCIsIkJvb2xlYW4iLCJob3N0bmFtZSIsImNvbmZpZyIsInJlZ2lzdGVyVmFsaWRTVyIsInN3VXJsIiwibmF2aWdhdG9yIiwidGhlbiIsInJlZ2lzdHJhdGlvbiIsIm9udXBkYXRlZm91bmQiLCJpbnN0YWxsaW5nV29ya2VyIiwiaW5zdGFsbGluZyIsIm9uc3RhdGVjaGFuZ2UiLCJjb250cm9sbGVyIiwiY29uc29sZSIsImxvZyIsIm9uVXBkYXRlIiwib25TdWNjZXNzIiwiY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIiLCJmZXRjaCIsImNvbnRlbnRUeXBlIiwiZ2V0Iiwic3RhdHVzIiwiaW5kZXhPZiIsInJlYWR5IiwidW5yZWdpc3RlciIsInJlbG9hZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzZXRVc2VyVG9MUyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJjaGFuZ2VVc2VyQW1vdW50SW5MUyIsInJlbW92ZVVzZXJGcm9tTFMiLCJyZW1vdmVJdGVtIiwicHJvamVjdExpc3QiLCJyZXMiLCJkYXRhIiwibG9naW5Kc29uIiwicHVzaCIsImVyciIsIm9uTG9nT3V0IiwiZm9ybWF0dGVkRGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsImpzb24iLCJyZWdpc3Rlckpzb24iLCJlcnJvcnMiLCJjaGlsZHJlbiIsInZvdGVJZCIsImhvYmJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBSU1BLE07Ozs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQ2xCLFVBQU1DLElBQUksR0FBR0Msc0VBQWEsRUFBMUI7QUFDQUQsVUFBSSxHQUFHLEtBQUtFLEtBQUwsQ0FBV0MsVUFBWCxDQUFzQkgsSUFBdEIsQ0FBSCxHQUFpQyxJQUFyQztBQUNEOzs7NkJBRVE7QUFBQSxVQUNBSSxNQURBLEdBQ1MsS0FBS0YsS0FBTCxDQUFXRyxJQURwQixDQUNBRCxNQURBO0FBRVAsYUFDRSwyREFBQyw4REFBRDtBQUFlLGdCQUFRLEVBQUVFLGtDQUFBLENBQVlDO0FBQXJDLFNBQ0UsMkRBQUMsOENBQUQsUUFDRSwyREFBQyxpRUFBRCxPQURGLEVBRUUsMkRBQUMsdURBQUQsUUFDRSwyREFBQyxzREFBRDtBQUFPLGFBQUssTUFBWjtBQUFhLFlBQUksRUFBQyxHQUFsQjtBQUFzQixpQkFBUyxFQUFFQyw2REFBSUE7QUFBckMsUUFERixFQUVFLDJEQUFDLHNEQUFEO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsaUJBQVMsRUFBRUMsZ0VBQUtBO0FBQXJDLFFBRkYsRUFHRSwyREFBQyxzREFBRDtBQUFPLFlBQUksRUFBQyxXQUFaO0FBQXdCLGlCQUFTLEVBQUVDLDZFQUFZQTtBQUEvQyxRQUhGLEVBSUUsMkRBQUMsc0RBQUQ7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFBUyxFQUFFQywrREFBS0E7QUFBckMsUUFKRixFQUtFLDJEQUFDLHNEQUFEO0FBQU8sWUFBSSxFQUFDLFdBQVo7QUFBd0IsaUJBQVMsRUFBRUMscUVBQVFBO0FBQTNDLFFBTEYsRUFNRSwyREFBQyxzREFBRDtBQUFPLFlBQUksRUFBQyxPQUFaO0FBQW9CLGlCQUFTLEVBQUVDLDhEQUFJQTtBQUFuQyxRQU5GLE9BT0dULE1BQU0sR0FBRywyREFBQyxzREFBRDtBQUFPLFlBQUksRUFBQyx1QkFBWjtBQUFvQyxpQkFBUyxFQUFFVSw0RkFBbUJBO0FBQWxFLFFBQUgsR0FBMkUsMkRBQUMseURBQUQ7QUFBVSxVQUFFLEVBQUM7QUFBYixRQVBwRixFQVFFLDJEQUFDLHNEQUFEO0FBQU8sWUFBSSxFQUFDO0FBQVosUUFSRixFQVNFLDJEQUFDLHNEQUFEO0FBQU8sWUFBSSxFQUFDLGNBQVo7QUFBMkIsaUJBQVMsRUFBRUMsNEVBQVdBO0FBQWpELFFBVEYsQ0FGRixDQURGLENBREY7QUFtQkQ7Ozs7RUEzQmtCQywrQzs7QUE4QnJCLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTGIsUUFBSSxFQUFFYSxLQUFLLENBQUNiO0FBRFAsR0FBUDtBQUdELENBSkQ7O0FBTUEsSUFBTWMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN4Q2pCLGNBQVUsRUFBRSxvQkFBQ0gsSUFBRDtBQUFBLGFBQVVvQixRQUFRLENBQUNDLHFFQUFRLENBQUNyQixJQUFELENBQVQsQ0FBbEI7QUFBQTtBQUQ0QixHQUFmO0FBQUEsQ0FBM0I7O0FBSWVzQiwwSEFBTyxDQUFDTCxlQUFELEVBQWlCRSxrQkFBakIsQ0FBUCxDQUE0Q3BCLE1BQTVDLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVNzQixRQUFULENBQWtCckIsSUFBbEIsRUFBd0I7QUFDM0IsU0FBTztBQUNIdUIsUUFBSSxFQUFFQyxnREFESDtBQUVIeEIsUUFBSSxFQUFKQTtBQUZHLEdBQVA7QUFJSDtBQUVNLFNBQVN5QixNQUFULEdBQWtCO0FBQ3JCLFNBQU87QUFDSEYsUUFBSSxFQUFFQyw4Q0FBYUU7QUFEaEIsR0FBUDtBQUdIO0FBRU0sU0FBU0MsUUFBVCxDQUFrQkMsTUFBbEIsRUFBMEI7QUFDN0IsU0FBTztBQUNITCxRQUFJLEVBQUVDLGdEQURIO0FBRUhJLFVBQU0sRUFBTkE7QUFGRyxHQUFQO0FBSUgsQzs7Ozs7Ozs7Ozs7O0FDcEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sU0FBU0MsYUFBVCxDQUF1QkMsQ0FBdkIsRUFBMEI7QUFDL0IsU0FBTztBQUNMUCxRQUFJLEVBQUVDLGlFQUREO0FBRUxPLFFBQUksRUFBRUQsQ0FBQyxDQUFDRSxNQUFGLENBQVNELElBRlY7QUFHTEUsU0FBSyxFQUFFSCxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFIWCxHQUFQO0FBS0Q7QUFFTSxTQUFTQyxhQUFULEdBQXlCO0FBQzlCLFNBQU87QUFDTFgsUUFBSSxFQUFFQyw0REFBd0JXO0FBRHpCLEdBQVA7QUFHRDtBQUVNLFNBQVNDLGdCQUFULENBQTBCQyxLQUExQixFQUFpQztBQUN0QyxTQUFPO0FBQ0xkLFFBQUksRUFBRUMsMERBREQ7QUFFTGEsU0FBSyxFQUFMQTtBQUZLLEdBQVA7QUFJRDtBQUVNLFNBQVNDLGtCQUFULENBQTRCdEMsSUFBNUIsRUFBa0M7QUFDdkMsU0FBTztBQUNMdUIsUUFBSSxFQUFDQyw0REFEQTtBQUVMeEIsUUFBSSxFQUFKQTtBQUZLLEdBQVA7QUFJRCxDOzs7Ozs7Ozs7Ozs7QUM1QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVM2QixhQUFULENBQXVCQyxDQUF2QixFQUEwQjtBQUMvQixTQUFPO0FBQ0xQLFFBQUksRUFBRUMseUVBREQ7QUFFTE8sUUFBSSxFQUFFRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0QsSUFGVjtBQUdMRSxTQUFLLEVBQUVILENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQUhYLEdBQVA7QUFLRDtBQUVNLFNBQVNNLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQ2pDLFNBQU87QUFDTGpCLFFBQUksRUFBRUMsbUVBREQ7QUFFTGdCLFFBQUksRUFBSkE7QUFGSyxHQUFQO0FBSUQ7QUFFTSxTQUFTQyw0QkFBVCxHQUF3QztBQUM3QyxTQUFPO0FBQ0xsQixRQUFJLEVBQUVDLG9FQUFtQ2tCO0FBRHBDLEdBQVA7QUFHRDtBQUVNLFNBQVNDLDBCQUFULENBQW9DTixLQUFwQyxFQUEyQztBQUNoRCxTQUFPO0FBQ0xkLFFBQUksRUFBRUMsa0VBREQ7QUFFTGEsU0FBSyxFQUFMQTtBQUZLLEdBQVA7QUFJRDtBQUVNLFNBQVNPLDJCQUFULENBQXFDQyxXQUFyQyxFQUFrRDtBQUN2RCxTQUFPO0FBQ0x0QixRQUFJLEVBQUVDLG9FQUREO0FBRUxxQixlQUFXLEVBQVhBO0FBRkssR0FBUDtBQUlELEM7Ozs7Ozs7Ozs7OztBQ25DRDtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVNDLFdBQVQsQ0FBcUJDLFFBQXJCLEVBQStCO0FBQ3BDLFNBQU87QUFDTHhCLFFBQUksRUFBRUMsbURBREQ7QUFFTHVCLFlBQVEsRUFBUkE7QUFGSyxHQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7O0FDUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxTQUFTbEIsYUFBVCxDQUF1QkMsQ0FBdkIsRUFBMEI7QUFDL0IsU0FBTztBQUNMUCxRQUFJLEVBQUVDLG9FQUREO0FBRUxPLFFBQUksRUFBRUQsQ0FBQyxDQUFDRSxNQUFGLENBQVNELElBRlY7QUFHTEUsU0FBSyxFQUFFSCxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFIWCxHQUFQO0FBS0Q7QUFFTSxTQUFTQyxhQUFULEdBQXlCO0FBQzlCLFNBQU87QUFDTFgsUUFBSSxFQUFFQywrREFBMkJ3QjtBQUQ1QixHQUFQO0FBR0Q7QUFFTSxTQUFTQyxtQkFBVCxDQUE2QlosS0FBN0IsRUFBb0M7QUFDekMsU0FBTztBQUNMZCxRQUFJLEVBQUVDLDZEQUREO0FBRUxhLFNBQUssRUFBTEE7QUFGSyxHQUFQO0FBSUQ7QUFFTSxTQUFTYSxxQkFBVCxDQUErQmxELElBQS9CLEVBQXFDO0FBQzFDLFNBQU87QUFDTHVCLFFBQUksRUFBQ0MsK0RBREE7QUFFTHhCLFFBQUksRUFBSkE7QUFGSyxHQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7O0FDNUJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1tRCx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxJQUFNaEIsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsSUFBTWlCLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLG9CQUEzQixDLENBRVA7O0FBRU8sSUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsSUFBTU4scUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsSUFBTU8sbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCLEMsQ0FFUDs7QUFFTyxJQUFNQyxrQ0FBa0MsR0FBRyxvQ0FBM0M7QUFDQSxJQUFNQyw0QkFBNEIsR0FBRyw4QkFBckM7QUFDQSxJQUFNaEIsNkJBQTZCLEdBQUcsK0JBQXRDO0FBQ0EsSUFBTWlCLDJCQUEyQixHQUFHLDZCQUFwQztBQUNBLElBQU1DLDZCQUE2QixHQUFHLCtCQUF0QyxDLENBRVA7O0FBRU8sSUFBTUMsWUFBWSxHQUFHLGNBQXJCLEMsQ0FFUDs7QUFFTyxJQUFNQyxTQUFTLEdBQUcsV0FBbEI7QUFDQSxJQUFNcEMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsSUFBTXFDLFNBQVMsR0FBRyxXQUFsQixDLENBRVA7O0FBRU8sSUFBTUMsU0FBUyxHQUFHLFdBQWxCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLGFBQXBCLEM7Ozs7Ozs7Ozs7OztBQ25DUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDOUIsU0FBTztBQUNMNUMsUUFBSSxFQUFFQyxnREFERDtBQUVMMkMsU0FBSyxFQUFMQTtBQUZLLEdBQVA7QUFJRDtBQUVNLFNBQVNDLFVBQVQsQ0FBb0JDLE1BQXBCLEVBQTRCO0FBQ2pDLFNBQU87QUFDTDlDLFFBQUksRUFBRUMsa0RBREQ7QUFFTDZDLFVBQU0sRUFBTkE7QUFGSyxHQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7O0FDZEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU87QUFDakIsU0FDSSwyREFBQyx3RUFBRDtBQUFPLGFBQVMsRUFBQztBQUFqQixLQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsdUJBREosQ0FESjtBQUtILENBTkQ7O0FBUWVBLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDWEEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1DLEtBQUssR0FBR0MsK0VBQWMsQ0FBQztBQUN6QkMsU0FBTyxFQUFFO0FBQ0xDLFdBQU8sRUFBRTtBQUNMQyxVQUFJLEVBQUU7QUFERCxLQURKO0FBSUxDLGFBQVMsRUFBRTtBQUNQRCxVQUFJLEVBQUU7QUFEQztBQUpOO0FBRGdCLENBQUQsQ0FBNUI7O0FBV0EsSUFBTW5FLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU87QUFDbEIsU0FDSSwyREFBQyx5RUFBRDtBQUFrQixTQUFLLEVBQUUrRDtBQUF6QixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0ksMkRBQUMsbUVBQUQ7QUFDSSxXQUFPLEVBQUMsSUFEWjtBQUVJLGdCQUFZLE1BRmhCO0FBR0ksU0FBSyxFQUFDO0FBSFYsd0NBSWdDLHNFQUpoQyx5QkFESixFQVFBLDJEQUFDLG1FQUFEO0FBQ0ksV0FBTyxFQUFDLFlBRFo7QUFFSSxnQkFBWSxNQUZoQjtBQUdJLFNBQUssRUFBQztBQUhWLG1EQUkyQyxzRUFKM0MsMkNBS3lDLHNFQUx6Qyw0Q0FSQSxDQURKLEVBa0JFLDJEQUFDLCtEQUFEO0FBQ0ksYUFBUyxFQUFDLFFBRGQ7QUFFSSxhQUFTLEVBQUVNLHFEQUZmO0FBR0ksV0FBTyxFQUFDLFdBSFo7QUFJSSxTQUFLLEVBQUMsU0FKVjtBQUtJLFFBQUksRUFBQyxPQUxUO0FBTUksTUFBRSxFQUFDO0FBTlAsS0FPQywyREFBQyxtRUFBRDtBQUFZLFNBQUssRUFBQztBQUFsQixtQkFQRCxDQWxCRixDQURGLENBREo7QUErQkQsQ0FoQ0Q7O0FBa0NlckUsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNwREEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLElBQU1zRSxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLE1BQUVDLEtBQUYsUUFBRUEsS0FBRjtBQUFBLG9CQUFRQyxDQUFSO0FBQUEsTUFBUUEsQ0FBUix1QkFBVSxFQUFWO0FBQUEsU0FDYjtBQUNFLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUNELENBQUMsR0FBQyxJQURIO0FBRUxFLFlBQU0sRUFBQ0YsQ0FBQyxHQUFDLElBRko7QUFHTEcsaUJBQVcsWUFBSUgsQ0FBQyxHQUFDLENBQU4seUJBSE47QUFJTEksZ0JBQVUsWUFBSUosQ0FBQyxHQUFDLENBQU4seUJBSkw7QUFLTEssZUFBUyxZQUFJTCxDQUFDLEdBQUMsQ0FBTixzQkFBbUJELEtBQW5CLENBTEo7QUFNTE8sa0JBQVksWUFBSU4sQ0FBQyxHQUFDLENBQU4sc0JBQW1CRCxLQUFuQjtBQU5QLEtBRFQ7QUFTRSxhQUFTLG1CQUFZQSxLQUFaO0FBVFgsSUFEYTtBQUFBLENBQWY7O0FBYWVELHFFQUFmLEU7Ozs7Ozs7Ozs7O0FDaEJBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTVAsS0FBSyxHQUFHQyxnRkFBYyxDQUFDO0FBQ3pCQyxTQUFPLEVBQUU7QUFDTEMsV0FBTyxFQUFFO0FBQ0xDLFVBQUksRUFBRTtBQURELEtBREo7QUFJTEMsYUFBUyxFQUFFO0FBQ1BELFVBQUksRUFBRTtBQURDLEtBSk47QUFPTHRDLFNBQUssRUFBRTtBQUNIc0MsVUFBSSxFQUFFO0FBREg7QUFQRjtBQURnQixDQUFELENBQTVCOztBQWNBLElBQU1ZLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFoQixLQUFLO0FBQUEsU0FBSztBQUNyQkksUUFBSTtBQUNBTSxXQUFLLEVBQUUsTUFEUDtBQUVBTyxhQUFPLEVBQUUsT0FGVDtBQUdBQyxnQkFBVSxFQUFFbEIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBSGpDO0FBSUFDLGlCQUFXLEVBQUVyQixLQUFLLENBQUNtQixPQUFOLENBQWNDLElBQWQsR0FBcUI7QUFKbEMsT0FLQ3BCLEtBQUssQ0FBQ3NCLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLE1BQU12QixLQUFLLENBQUNtQixPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FBckIsR0FBeUIsQ0FBcEQsQ0FMRCxFQUswRDtBQUN0RFYsV0FBSyxFQUFFLEdBRCtDO0FBRXREUSxnQkFBVSxFQUFFLE1BRjBDO0FBR3RERyxpQkFBVyxFQUFFO0FBSHlDLEtBTDFELENBRGlCO0FBWXJCRyxTQUFLLEVBQUU7QUFDSEMsZUFBUyxFQUFFekIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBRDdCO0FBRUhILGFBQU8sRUFBRSxNQUZOO0FBR0hTLG1CQUFhLEVBQUUsUUFIWjtBQUlIQyxnQkFBVSxFQUFFLFFBSlQ7QUFLSEMsYUFBTyxZQUFLNUIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBQTFCLGdCQUFpQ3BCLEtBQUssQ0FBQ21CLE9BQU4sQ0FBY0MsSUFBZCxHQUFxQixDQUF0RCxnQkFBNkRwQixLQUFLLENBQUNtQixPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FBbEY7QUFMSixLQVpjO0FBbUJyQlMsVUFBTSxFQUFFO0FBQ0pDLFlBQU0sRUFBRTlCLEtBQUssQ0FBQ21CLE9BQU4sQ0FBY0MsSUFEbEI7QUFFSlcscUJBQWUsRUFBRTtBQUZiLEtBbkJhO0FBdUJyQkMsUUFBSSxFQUFFO0FBQ0Z0QixXQUFLLEVBQUUsTUFETDtBQUVGZSxlQUFTLEVBQUV6QixLQUFLLENBQUNtQixPQUFOLENBQWNDO0FBRnZCLEtBdkJlO0FBMkJyQmEsYUFBUyxFQUFFO0FBQ1B0QixZQUFNLEVBQUU7QUFERCxLQTNCVTtBQThCckJ1QixVQUFNLEVBQUU7QUFDSlQsZUFBUyxFQUFFekIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBRDVCO0FBRUpULFlBQU0sRUFBRTtBQUZKLEtBOUJhO0FBa0NyQndCLFFBQUksRUFBRTtBQUNGQyxnQkFBVSxFQUFFcEMsS0FBSyxDQUFDRSxPQUFOLENBQWNwQyxLQUFkLENBQW9CdUU7QUFEOUIsS0FsQ2U7QUFxQ3JCQyxRQUFJLEVBQUU7QUFDRkMsY0FBUSxFQUFDLEVBRFA7QUFFRmxCLGlCQUFXLEVBQUU7QUFGWCxLQXJDZTtBQXlDckJtQixXQUFPLEVBQUU7QUFDTHZCLGFBQU8sRUFBRSxNQURKO0FBRUxVLGdCQUFVLEVBQUU7QUFGUDtBQXpDWSxHQUFMO0FBQUEsQ0FBcEI7O0lBK0NNdkYsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzREQUNNO0FBQ0pxRyxVQUFJLEVBQUU7QUFERixLOztrRUFJTSxZQUFNO0FBQ2hCLFlBQUtDLFFBQUwsQ0FBYztBQUFFRCxZQUFJLEVBQUU7QUFBUixPQUFkO0FBQ0gsSzs7a0VBRWEsVUFBQ0UsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzdCLFVBQUlBLE1BQU0sS0FBSyxXQUFmLEVBQTRCO0FBQ3hCO0FBQ0g7O0FBQ0QsWUFBS0YsUUFBTCxDQUFjO0FBQUVELFlBQUksRUFBRTtBQUFSLE9BQWQ7QUFDSCxLOzttRUFHYyxVQUFDbEYsQ0FBRCxFQUFPO0FBQ2xCQSxPQUFDLENBQUNzRixjQUFGOztBQUNBLFlBQUtsSCxLQUFMLENBQVdtSCxZQUFYLENBQXdCLE1BQUtuSCxLQUFMLENBQVdvSCxLQUFuQyxFQUEwQyxNQUFLcEgsS0FBTCxDQUFXcUgsT0FBckQ7QUFDSCxLOzs7Ozs7OzZCQUdRO0FBQUEsOEJBQ3VDLEtBQUtySCxLQUFMLENBQVdvSCxLQURsRDtBQUFBLFVBQ0dFLEtBREgscUJBQ0dBLEtBREg7QUFBQSxVQUNVQyxRQURWLHFCQUNVQSxRQURWO0FBQUEsVUFDb0JwRixLQURwQixxQkFDb0JBLEtBRHBCO0FBQUEsVUFDMkJxRixPQUQzQixxQkFDMkJBLE9BRDNCO0FBQUEsVUFFRTdGLGFBRkYsR0FFbUIsS0FBSzNCLEtBRnhCLENBRUUyQixhQUZGO0FBQUEsVUFHRzhGLE9BSEgsR0FHZSxLQUFLekgsS0FIcEIsQ0FHR3lILE9BSEg7QUFJTCxhQUNJLDJEQUFDLDBFQUFEO0FBQWtCLGFBQUssRUFBRXBEO0FBQXpCLFNBQ0k7QUFBTSxpQkFBUyxFQUFFb0QsT0FBTyxDQUFDaEQ7QUFBekIsU0FDSSwyREFBQyw4REFBRDtBQUFPLGlCQUFTLEVBQUVnRCxPQUFPLENBQUM1QjtBQUExQixTQUNJLDJEQUFDLHFFQUFELE9BREosRUFFSSwyREFBQyxnRUFBRDtBQUFRLGlCQUFTLEVBQUU0QixPQUFPLENBQUN2QjtBQUEzQixTQUNJLDJEQUFDLHVFQUFELE9BREosQ0FGSixFQUtJLDJEQUFDLG1FQUFEO0FBQ0ksaUJBQVMsRUFBQyxJQURkO0FBQ21CLGVBQU8sRUFBQztBQUQzQixtQkFMSixFQVNLL0QsS0FBSyxHQUFHLDJEQUFDLGtFQUFEO0FBQ0wsb0JBQVksRUFBRTtBQUNWdUYsa0JBQVEsRUFBRSxLQURBO0FBRVZDLG9CQUFVLEVBQUU7QUFGRixTQURUO0FBS0wsWUFBSSxFQUFFLEtBQUszRyxLQUFMLENBQVc4RixJQUxaO0FBTUwsd0JBQWdCLEVBQUUsSUFOYjtBQU9MLGVBQU8sRUFBRSxLQUFLYyxXQVBUO0FBUUwsb0JBQVksRUFBRTtBQUNWLDhCQUFvQixZQURWO0FBRVZILGlCQUFPLEVBQUU7QUFDTGpCLGdCQUFJLEVBQUVpQixPQUFPLENBQUNqQjtBQURUO0FBRkMsU0FSVDtBQWNMLGVBQU8sRUFBRTtBQUFNLG1CQUFTLEVBQUVpQixPQUFPLENBQUNaO0FBQXpCLFdBQ2pCLDJEQUFDLGdFQUFEO0FBQVcsbUJBQVMsRUFBRVksT0FBTyxDQUFDZDtBQUE5QixVQURpQixFQUVKeEUsS0FGSSxDQWRKO0FBa0JMLGNBQU0sRUFBRSxDQUNKLDJEQUFDLGlFQUFEO0FBQVMsZUFBSyxFQUFDO0FBQWYsV0FDSSwyREFBQyxvRUFBRDtBQUFZLHdCQUFXLE9BQXZCO0FBQ1ksYUFBRyxFQUFDLE9BRGhCO0FBRVksZUFBSyxFQUFDLFNBRmxCO0FBR1ksbUJBQVMsRUFBRXNGLE9BQU8sQ0FBQ0ksS0FIL0I7QUFJWSxpQkFBTyxFQUFFLEtBQUtEO0FBSjFCLFdBS0ksMkRBQUMsZ0VBQUQsT0FMSixDQURKLENBREk7QUFsQkgsUUFBSCxHQTZCRCxJQXRDVCxFQXVDSTtBQUFNLGlCQUFTLEVBQUVILE9BQU8sQ0FBQ3BCLElBQXpCO0FBQ00sZ0JBQVEsRUFBRSxLQUFLYyxZQURyQjtBQUVNLGtCQUFVLE1BRmhCO0FBRWlCLG9CQUFZLEVBQUM7QUFGOUIsU0FHSSwyREFBQyxrRUFBRDtBQUNJLFlBQUksRUFBQyxPQURUO0FBRUksWUFBSSxFQUFDLE9BRlQ7QUFHSSxhQUFLLEVBQUVHLEtBSFg7QUFJSSxnQkFBUSxFQUFFM0YsYUFKZDtBQUtJLGlCQUFTLE1BTGI7QUFNSSxnQkFBUSxNQU5aO0FBT0ksYUFBSyxFQUFDLE9BUFY7QUFRSSxjQUFNLEVBQUMsUUFSWDtBQVNJLGVBQU8sRUFBQyxVQVRaO0FBVUksaUJBQVMsRUFBRThGLE9BQU8sQ0FBQ25CO0FBVnZCLFFBSEosRUFlSSwyREFBQyxrRUFBRDtBQUNJLFlBQUksRUFBQyxVQURUO0FBRUksWUFBSSxFQUFDLFVBRlQ7QUFHSSxhQUFLLEVBQUVpQixRQUhYO0FBSUksZ0JBQVEsRUFBRTVGLGFBSmQ7QUFLSSxpQkFBUyxNQUxiO0FBTUksZ0JBQVEsTUFOWjtBQU9JLGFBQUssRUFBQyxVQVBWO0FBUUksY0FBTSxFQUFDLFFBUlg7QUFTSSxlQUFPLEVBQUMsVUFUWjtBQVVJLGlCQUFTLEVBQUU4RixPQUFPLENBQUNuQjtBQVZ2QixRQWZKLEVBMkJJLDJEQUFDLGdFQUFEO0FBQ0ksZUFBTyxFQUFDLFdBRFo7QUFFSSxhQUFLLEVBQUMsU0FGVjtBQUdJLGlCQUFTLEVBQUMsV0FIZDtBQUlJLGlCQUFTLEVBQUVtQixPQUFPLENBQUNsQixNQUp2QjtBQUtJLGNBQU0sRUFBQyxRQUxYO0FBTUksaUJBQVMsTUFOYjtBQU9JLG9CQUFZLE1BUGhCO0FBUUksZUFBTyxFQUFFLEtBQUt1QixXQVJsQjtBQVNJLFlBQUksRUFBQztBQVRULFNBVUtOLE9BQU8sR0FBRywyREFBQyxzREFBRDtBQUFRLGFBQUssRUFBRSxNQUFmO0FBQXVCLFNBQUMsRUFBRTtBQUExQixRQUFILEdBQ0osMkRBQUMsbUVBQUQ7QUFBWSxhQUFLLEVBQUM7QUFBbEIsbUJBWFIsQ0EzQkosQ0F2Q0osQ0FESixFQWtGSTtBQUFLLGlCQUFTLEVBQUU7QUFBaEIsaURBQ3lDLEdBRHpDLEVBRUksMkRBQUMsOERBQUQ7QUFDSSxpQkFBUyxFQUFFN0MscURBRGY7QUFFSSxhQUFLLEVBQUUsV0FGWDtBQUdJLFVBQUUsRUFBQztBQUhQLG1CQUZKLENBbEZKLENBREosQ0FESjtBQWdHSDs7OztFQTNIZTdELCtDOztBQStIcEIsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDL0IsU0FBTztBQUNIb0csU0FBSyxFQUFFcEcsS0FBSyxDQUFDb0c7QUFEVixHQUFQO0FBR0gsQ0FKRDs7QUFNQSxJQUFNbkcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN0Q1MsaUJBQWEsRUFBRSx1QkFBQ0MsQ0FBRDtBQUFBLGFBQU9WLFFBQVEsQ0FBQzZHLG1FQUFBLENBQXNCbkcsQ0FBdEIsQ0FBRCxDQUFmO0FBQUEsS0FEdUI7QUFFdEN1RixnQkFBWSxFQUFFLHNCQUFDckgsSUFBRCxFQUFPdUgsT0FBUDtBQUFBLGFBQWtCbkcsUUFBUSxDQUFDaUcsdUVBQVksQ0FBQ3JILElBQUQsRUFBTXVILE9BQU4sQ0FBYixDQUExQjtBQUFBO0FBRndCLEdBQWY7QUFBQSxDQUEzQjs7QUFJZWpHLDBIQUFPLENBQUNMLGVBQUQsRUFBaUJFLGtCQUFqQixDQUFQLENBQTRDK0csNEVBQVUsQ0FBQzNDLE1BQUQsQ0FBVixDQUFtQjVFLEtBQW5CLENBQTVDLENBQWYsRTs7Ozs7Ozs7Ozs7QUM3TkEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTTRELEtBQUssR0FBR0MsK0VBQWMsQ0FBQztBQUMzQkMsU0FBTyxFQUFFO0FBQ1BDLFdBQU8sRUFBRTtBQUNQQyxVQUFJLEVBQUU7QUFEQyxLQURGO0FBSVBDLGFBQVMsRUFBQztBQUNSRCxVQUFJLEVBQUU7QUFERTtBQUpIO0FBRGtCLENBQUQsQ0FBNUI7QUFXQSxJQUFNWSxNQUFNLEdBQUc7QUFDYm1CLE1BQUksRUFBRTtBQUNKekIsU0FBSyxFQUFFO0FBREgsR0FETztBQUlia0QsU0FBTyxFQUFFO0FBQ1BDLFlBQVEsRUFBRSxRQURIO0FBRVB6QixjQUFVLEVBQUU7QUFGTCxHQUpJO0FBU2IwQixNQUFJLEVBQUU7QUFDSkMsWUFBUSxFQUFFLENBRE47QUFFSkMsU0FBSyxFQUFFO0FBRkgsR0FUTztBQWFiQyxPQUFLO0FBQ0h6RCxTQUFLLEVBQUUsU0FESjtBQUVIUyxXQUFPLEVBQUU7QUFGTixLQUdGakIsS0FBSyxDQUFDc0IsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FIRSxFQUcyQjtBQUM1Qk4sV0FBTyxFQUFFO0FBRG1CLEdBSDNCLENBYlE7QUFvQmJpRCxnQkFBYztBQUNaakQsV0FBTyxFQUFFO0FBREcsS0FFWGpCLEtBQUssQ0FBQ3NCLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBRlcsRUFFa0I7QUFDNUJOLFdBQU8sRUFBRTtBQURtQixHQUZsQixDQXBCRDtBQTBCYmtELFFBQU0sRUFBRTtBQUNOM0QsU0FBSyxFQUFFLFNBREQ7QUFFTixlQUFXO0FBQ1RBLFdBQUssRUFBRTtBQURFLEtBRkw7QUFLTnNCLFVBQU0sRUFBRSxNQUxGO0FBTU5zQyxlQUFXLEVBQUUsRUFOUDtBQU9OQyxnQkFBWSxFQUFFO0FBUFIsR0ExQks7QUFtQ2JDLGNBQVksRUFBRTtBQUNackQsV0FBTyxFQUFFLE9BREc7QUFFWlQsU0FBSyxFQUFFLFNBRks7QUFHWixlQUFXO0FBQ1RBLFdBQUssRUFBRTtBQURFLEtBSEM7QUFNWnNCLFVBQU0sRUFBRSxNQU5JO0FBT1pzQyxlQUFXLEVBQUUsRUFQRDtBQVFaQyxnQkFBWSxFQUFFLEVBUkY7QUFTWjlCLFlBQVEsRUFBRSxNQVRFO0FBVVpnQyxhQUFTLEVBQUU7QUFWQyxHQW5DRDtBQStDYkMsY0FBWSxFQUFFO0FBQ1poRSxTQUFLLEVBQUUsU0FESztBQUVadUIsbUJBQWUsRUFBRSxTQUZMO0FBR1owQyxnQkFBWSxFQUFFLEVBSEY7QUFJWkMsY0FBVSxFQUFFLEdBSkE7QUFLWixlQUFXO0FBQ1QzQyxxQkFBZSxFQUFFO0FBRFI7QUFMQyxHQS9DRDtBQXdEYjRDLGVBQWE7QUFDWDFELFdBQU8sRUFBRTtBQURFLEtBRVZqQixLQUFLLENBQUNzQixXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUZVLEVBRW1CO0FBQzVCTixXQUFPLEVBQUU7QUFEbUIsR0FGbkIsQ0F4REE7QUE4RGIyRCxhQUFXLEVBQUU7QUFDWHBFLFNBQUssRUFBRTtBQURJLEdBOURBO0FBaUVicUUsWUFBVSxFQUFFO0FBQ1ZyRSxTQUFLLEVBQUU7QUFERyxHQWpFQztBQW9FYnNFLFlBQVUsRUFBRTtBQUNWakIsWUFBUSxFQUFFLE9BREE7QUFFVmtCLE9BQUcsRUFBRSxNQUZLO0FBR1ZDLFNBQUssRUFBRSxDQUhHO0FBSVZDLGNBQVUsRUFBRSxNQUpGO0FBS1ZDLFVBQU0sRUFBRSxJQUxFO0FBTVZ4RSxTQUFLLEVBQUUsTUFORztBQU9WQyxVQUFNLEVBQUUsT0FQRTtBQVFWb0IsbUJBQWUsRUFBRTtBQVJQO0FBcEVDLENBQWY7O0lBaUZNb0QsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzREQUNJO0FBQ056SCxXQUFLLEVBQUUsQ0FERDtBQUVOMEgsY0FBUSxFQUFFO0FBRkosSzs7bUVBS08sVUFBQ3pDLEtBQUQsRUFBUWpGLEtBQVIsRUFBa0I7QUFDL0IsWUFBS2dGLFFBQUwsQ0FBYztBQUFDaEYsYUFBSyxFQUFMQTtBQUFELE9BQWQ7QUFDRCxLOztxRUFFZ0I7QUFBQSxhQUFNLE1BQUsvQixLQUFMLENBQVcwSixhQUFYLENBQXlCLE1BQUsxSixLQUFMLENBQVdxSCxPQUFwQyxDQUFOO0FBQUEsSzs7aUVBRUo7QUFBQSxhQUFNLE1BQUtOLFFBQUwsQ0FBYztBQUFDMEMsZ0JBQVEsRUFBRSxDQUFDLE1BQUt6SSxLQUFMLENBQVd5STtBQUF2QixPQUFkLENBQU47QUFBQSxLOzs7Ozs7OzZCQUVKO0FBQUEsd0JBQ3FCLEtBQUt6SixLQUQxQjtBQUFBLFVBQ0F5SCxPQURBLGVBQ0FBLE9BREE7QUFBQSxVQUNTa0MsUUFEVCxlQUNTQSxRQURUO0FBQUEsVUFFQXpKLE1BRkEsR0FFVSxLQUFLRixLQUFMLENBQVdHLElBRnJCLENBRUFELE1BRkE7QUFBQSxVQUdBdUosUUFIQSxHQUdZLEtBQUt6SSxLQUhqQixDQUdBeUksUUFIQTtBQUlQLGFBQ0ksMkRBQUMseUVBQUQ7QUFBa0IsYUFBSyxFQUFFcEY7QUFBekIsU0FDRTtBQUFLLGlCQUFTLEVBQUVvRCxPQUFPLENBQUNqQjtBQUF4QixTQUNFLDJEQUFDLCtEQUFEO0FBQVEsaUJBQVMsRUFBRWlCLE9BQU8sQ0FBQ1E7QUFBM0IsU0FDRSwyREFBQyxnRUFBRCxRQUNFLDJEQUFDLCtEQUFEO0FBQVEsYUFBSyxFQUFDLFdBQWQ7QUFDUSxpQkFBUyxFQUFFMkIsd0RBRG5CO0FBQ2tDLFVBQUUsRUFBQztBQURyQyxzQkFERixFQU1FO0FBQUssaUJBQVMsRUFBRW5DLE9BQU8sQ0FBQ3VCO0FBQXhCLFNBQ0UsMkRBQUMsb0VBQUQ7QUFBWSxpQkFBUyxFQUFFdkIsT0FBTyxDQUFDeUI7QUFBL0IsU0FDRSwyREFBQywrREFBRDtBQUFVLGVBQU8sRUFBRSxLQUFLVztBQUF4QixRQURGLENBREYsRUFJR0osUUFBUSxHQUFHO0FBQUssZUFBTyxFQUFFLEtBQUtJLFVBQW5CO0FBQStCLGlCQUFTLEVBQUVwQyxPQUFPLENBQUMwQjtBQUFsRCxTQUNUakosTUFBTSxHQUNILDJEQUFDLCtEQUFEO0FBQ0ksaUJBQVMsRUFBRXVILE9BQU8sQ0FBQ2tCLFlBRHZCO0FBRUksaUJBQVMsRUFBRWlCLHdEQUZmO0FBR0ksYUFBSyxNQUhUO0FBSUksVUFBRSxFQUFDO0FBSlAsNkJBREcsR0FTSCwyREFBRSwrREFBRjtBQUNJLGlCQUFTLEVBQUVuQyxPQUFPLENBQUNrQixZQUR2QjtBQUVJLGlCQUFTLEVBQUVpQix3REFGZjtBQUdJLGFBQUssTUFIVDtBQUlJLFVBQUUsRUFBQztBQUpQLG9CQVZNLEVBa0JUMUosTUFBTSxHQUNILDJEQUFDLCtEQUFEO0FBQ0ksaUJBQVMsRUFBRXVILE9BQU8sQ0FBQ2tCLFlBRHZCO0FBRUksaUJBQVMsRUFBRWlCLHdEQUZmO0FBR0ksVUFBRSxFQUFDO0FBSFAsNEJBREcsR0FPSCwyREFBQywrREFBRDtBQUNJLGlCQUFTLEVBQUVuQyxPQUFPLENBQUNrQixZQUR2QjtBQUVJLGlCQUFTLEVBQUVpQix3REFGZjtBQUdJLFVBQUUsRUFBQztBQUhQLDhCQXpCTSxFQStCVDFKLE1BQU0sR0FDSCwyREFBQywrREFBRDtBQUNJLGlCQUFTLEVBQUV1SCxPQUFPLENBQUNrQixZQUR2QjtBQUVJLGlCQUFTLEVBQUVpQix3REFGZjtBQUdJLFVBQUUsRUFBQztBQUhQLFNBR2dCLEtBQUs1SixLQUFMLENBQVdHLElBQVgsQ0FBZ0JtSCxLQUhoQyxPQUd3QyxLQUFLdEgsS0FBTCxDQUFXRyxJQUFYLENBQWdCdUIsTUFIeEQsV0FERyxHQU1ILDJEQUFDLCtEQUFEO0FBQ0ksaUJBQVMsRUFBRStGLE9BQU8sQ0FBQ2tCLFlBRHZCO0FBRUksaUJBQVMsRUFBRWlCLHdEQUZmO0FBR0ksVUFBRSxFQUFDO0FBSFAsb0JBckNNLENBQUgsR0E2Q0EsSUFqRFgsQ0FORixFQTBERTtBQUFLLGlCQUFTLEVBQUVuQyxPQUFPLENBQUNVO0FBQXhCLFFBMURGLEVBMkRFO0FBQUssaUJBQVMsRUFBRVYsT0FBTyxDQUFDYztBQUF4QixTQUNHckksTUFBTSxHQUNILDJEQUFFLCtEQUFGO0FBQ0ksaUJBQVMsRUFBRSxnQkFBZ0J5SixRQUFRLENBQUNHLFFBQXpCLEdBQW9DckMsT0FBTyxDQUFDb0IsWUFBNUMsR0FBMkRwQixPQUFPLENBQUNlLE1BRGxGO0FBRUksaUJBQVMsRUFBRW9CLHdEQUZmO0FBR0ksYUFBSyxNQUhUO0FBSUksVUFBRSxFQUFDO0FBSlAsNkJBREcsR0FTSCwyREFBRSwrREFBRjtBQUNJLGlCQUFTLEVBQUUsUUFBUUQsUUFBUSxDQUFDRyxRQUFqQixHQUE0QnJDLE9BQU8sQ0FBQ29CLFlBQXBDLEdBQW1EcEIsT0FBTyxDQUFDZSxNQUQxRTtBQUVJLGlCQUFTLEVBQUVvQix3REFGZjtBQUdJLGFBQUssTUFIVDtBQUlJLFVBQUUsRUFBQztBQUpQLG9CQVZOLEVBaUJHMUosTUFBTSxHQUNILDJEQUFDLCtEQUFEO0FBQ0ksaUJBQVMsRUFBRSw0QkFBNEJ5SixRQUFRLENBQUNHLFFBQXJDLEdBQWdEckMsT0FBTyxDQUFDb0IsWUFBeEQsR0FBdUVwQixPQUFPLENBQUNlLE1BRDlGO0FBRUksaUJBQVMsRUFBRW9CLHdEQUZmO0FBR0ksVUFBRSxFQUFDO0FBSFAsNEJBREcsR0FPSCwyREFBQywrREFBRDtBQUNJLGlCQUFTLEVBQUUsZ0JBQWdCRCxRQUFRLENBQUNHLFFBQXpCLEdBQW9DckMsT0FBTyxDQUFDb0IsWUFBNUMsR0FBMkRwQixPQUFPLENBQUNlLE1BRGxGO0FBRUksaUJBQVMsRUFBRW9CLHdEQUZmO0FBR0ksVUFBRSxFQUFDO0FBSFAsOEJBeEJOLEVBOEJHMUosTUFBTSxHQUNILDJEQUFDLCtEQUFEO0FBQ0ksaUJBQVMsRUFBRSxZQUFZeUosUUFBUSxDQUFDRyxRQUFyQixHQUFnQ3JDLE9BQU8sQ0FBQ29CLFlBQXhDLEdBQXVEcEIsT0FBTyxDQUFDZSxNQUQ5RTtBQUVJLGlCQUFTLEVBQUVvQix3REFGZjtBQUdJLFVBQUUsRUFBQztBQUhQLFNBR2dCLEtBQUs1SixLQUFMLENBQVdHLElBQVgsQ0FBZ0JtSCxLQUhoQyxPQUd3QyxLQUFLdEgsS0FBTCxDQUFXRyxJQUFYLENBQWdCdUIsTUFIeEQsV0FERyxHQU1ILDJEQUFDLCtEQUFEO0FBQ0ksaUJBQVMsRUFBRSxhQUFhaUksUUFBUSxDQUFDRyxRQUF0QixHQUFpQ3JDLE9BQU8sQ0FBQ29CLFlBQXpDLEdBQXdEcEIsT0FBTyxDQUFDZSxNQUQvRTtBQUVJLGlCQUFTLEVBQUVvQix3REFGZjtBQUdJLFVBQUUsRUFBQztBQUhQLG9CQXBDTixDQTNERixFQXVHRTtBQUFLLGlCQUFTLEVBQUVuQyxPQUFPLENBQUN1QjtBQUF4QixTQUNFLDJEQUFDLG1FQUFEO0FBQVksZUFBTyxFQUFDLElBQXBCO0FBQXlCLGlCQUFTLEVBQUV2QixPQUFPLENBQUN3QjtBQUE1QyxzQkFERixDQXZHRixFQTZHRTtBQUFLLGlCQUFTLEVBQUV4QixPQUFPLENBQUNVO0FBQXhCLFFBN0dGLEVBOEdFO0FBQUssaUJBQVMsRUFBRVYsT0FBTyxDQUFDYztBQUF4QixTQUNHckksTUFBTSxHQUNILDJEQUFFLCtEQUFGO0FBQVMsaUJBQVMsRUFBRXVILE9BQU8sQ0FBQ2UsTUFBNUI7QUFBb0MsZUFBTyxFQUFFLEtBQUt1QixjQUFsRDtBQUFrRSxVQUFFLEVBQUM7QUFBckUsa0JBREcsR0FLSCwyREFBRSwrREFBRjtBQUFTLGlCQUFTLEVBQUV0QyxPQUFPLENBQUNlLE1BQTVCO0FBQW9DLGlCQUFTLEVBQUU3RCxxREFBL0M7QUFBMkQsVUFBRSxFQUFDO0FBQTlELG1CQU5OLENBOUdGLEVBMEhFO0FBQUssaUJBQVMsRUFBRThDLE9BQU8sQ0FBQ3VCO0FBQXhCLFNBQ0c5SSxNQUFNLEdBQ0gsMkRBQUUsK0RBQUY7QUFBUyxpQkFBUyxFQUFFdUgsT0FBTyxDQUFDZSxNQUE1QjtBQUFvQyxlQUFPLEVBQUUsS0FBS3VCLGNBQWxEO0FBQWtFLFVBQUUsRUFBQztBQUFyRSxrQkFERyxHQUtILDJEQUFFLCtEQUFGO0FBQVMsaUJBQVMsRUFBRXRDLE9BQU8sQ0FBQ2UsTUFBNUI7QUFBb0MsaUJBQVMsRUFBRTdELHFEQUEvQztBQUEyRCxVQUFFLEVBQUM7QUFBOUQsbUJBTk4sQ0ExSEYsQ0FERixDQURGLENBREYsQ0FESjtBQStJRDs7OztFQWpLa0I3RCwrQzs7QUFvS3JCMEksTUFBTSxDQUFDUSxTQUFQLEdBQW1CO0FBQ2pCdkMsU0FBTyxFQUFFd0MsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFEVCxDQUFuQjs7QUFLQSxJQUFNcEosZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMYixRQUFJLEVBQUVhLEtBQUssQ0FBQ2I7QUFEUCxHQUFQO0FBR0QsQ0FKRDs7QUFNQSxJQUFNYyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFlO0FBQ3hDd0ksaUJBQWEsRUFBRSx1QkFBQ3JDLE9BQUQ7QUFBQSxhQUFhbkcsUUFBUSxDQUFDa0osb0VBQU0sQ0FBQy9DLE9BQUQsQ0FBUCxDQUFyQjtBQUFBO0FBRHlCLEdBQWY7QUFBQSxDQUEzQjs7QUFJZWpHLDBIQUFPLENBQUNMLGVBQUQsRUFBa0JFLGtCQUFsQixDQUFQLENBQTZDb0osbUVBQVUsQ0FBQ3JDLDJFQUFVLENBQUMzQyxNQUFELENBQVYsQ0FBbUJtRSxNQUFuQixDQUFELENBQXZELENBQWYsRTs7Ozs7Ozs7Ozs7O0FDN1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNbkYsS0FBSyxHQUFHQywrRUFBYyxDQUFDO0FBQ3pCQyxTQUFPLEVBQUU7QUFDTEMsV0FBTyxFQUFFO0FBQ0xDLFVBQUksRUFBRTtBQURELEtBREo7QUFJTEMsYUFBUyxFQUFFO0FBQ1BELFVBQUksRUFBRTtBQURDO0FBSk47QUFEZ0IsQ0FBRCxDQUE1Qjs7QUFhQSxJQUFNNUQsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ2IsS0FBRCxFQUFXO0FBQzdCLE1BQU0yQyxXQUFXLEdBQUczQyxLQUFLLENBQUM2QyxRQUFOLENBQWV5SCxNQUFmLENBQXNCLFVBQUFDLE9BQU8sRUFBSTtBQUNuRCxRQUFHQSxPQUFPLENBQUNDLEVBQVIsQ0FBV0MsUUFBWCxPQUEwQnpLLEtBQUssQ0FBQzBLLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkgsRUFBaEQsRUFBb0Q7QUFDbEQsYUFBT0QsT0FBUDtBQUNEOztBQUNELFdBQU8sSUFBUDtBQUNELEdBTG1CLEVBS2pCSyxHQUxpQixDQUtiLFVBQUNMLE9BQUQsRUFBVU0sQ0FBVixFQUFnQjtBQUNyQixXQUNFO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBeUIsU0FBRyxFQUFFQTtBQUE5QixPQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FBd0JOLE9BQU8sQ0FBQ2pDLEtBQWhDLENBREYsRUFFSTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0ksd0VBQU1pQyxPQUFPLENBQUNPLE1BQWQsQ0FESixFQUVJO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDSSwyREFBQyx1RUFBRDtBQUFnQixhQUFPLEVBQUUsUUFBekI7QUFBbUMsV0FBSyxFQUFHUCxPQUFPLENBQUNPLE1BQVIsR0FBZVAsT0FBTyxDQUFDN0ksTUFBeEIsR0FBZ0M7QUFBMUUsTUFESixDQUZKLEVBS0ksd0VBQU02SSxPQUFPLENBQUM3SSxNQUFkLENBTEosQ0FGSixFQVNJO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDSSwyREFBQywrREFBRDtBQUFRLGFBQU8sRUFBQztBQUFoQixpQkFESixFQUVJLDJEQUFDLCtEQUFEO0FBQVEsYUFBTyxFQUFDO0FBQWhCLGtCQUZKLEVBR0ksMkRBQUMsK0RBQUQ7QUFBUSxhQUFPLEVBQUM7QUFBaEIsa0JBSEosQ0FUSixFQWVJO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQThCNkksT0FBTyxDQUFDUSxXQUF0QyxDQURGLEVBRUU7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNJO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDSTtBQUFHLGVBQVMsRUFBQztBQUFiLGlCQURKLEVBRUk7QUFBRyxlQUFTLEVBQUM7QUFBYixPQUEyQlIsT0FBTyxDQUFDUyxRQUFuQyxDQUZKLEVBR0k7QUFBRyxlQUFTLEVBQUM7QUFBYix1QkFISixFQUlJO0FBQUcsZUFBUyxFQUFDO0FBQWIsT0FBMkJULE9BQU8sQ0FBQ2pELEtBQW5DLENBSkosQ0FESixDQUZGLENBZkosQ0FERjtBQStCRCxHQXJDbUIsQ0FBcEI7QUFzQ0EsU0FDSSwyREFBQyx5RUFBRDtBQUFrQixTQUFLLEVBQUVqRDtBQUF6QixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRzFCLFdBREgsRUFFRSwyREFBQywrREFBRDtBQUNJLGFBQVMsRUFBQyxRQURkO0FBRUksV0FBTyxFQUFDLFdBRlo7QUFHSSxTQUFLLEVBQUMsU0FIVjtBQUlJLGFBQVMsRUFBRWdDLHFEQUpmO0FBS0ksTUFBRSxFQUFDO0FBTFAsS0FNSSwyREFBQyxrRkFBRDtBQUNJLFNBQUssRUFBQztBQURWLHdCQU5KLENBRkYsQ0FERixDQURKO0FBaUJELENBeEREOztBQTBEQSxJQUFNNUQsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMNkIsWUFBUSxFQUFFN0IsS0FBSyxDQUFDNkIsUUFBTixDQUFlQTtBQURwQixHQUFQO0FBR0QsQ0FKRDs7QUFNZXpCLDBIQUFPLENBQUNMLGVBQUQsQ0FBUCxDQUF5QkYsV0FBekIsQ0FBZixFOzs7Ozs7Ozs7OztBQ3hGQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNd0QsS0FBSyxHQUFHQyxnRkFBYyxDQUFDO0FBQzNCQyxTQUFPLEVBQUU7QUFDUEMsV0FBTyxFQUFFO0FBQ1BDLFVBQUksRUFBRTtBQURDLEtBREY7QUFJUEMsYUFBUyxFQUFFO0FBQ1RELFVBQUksRUFBRTtBQURHLEtBSko7QUFPUHRDLFNBQUssRUFBRTtBQUNMc0MsVUFBSSxFQUFFO0FBREQ7QUFQQTtBQURrQixDQUFELENBQTVCOztBQWNBLElBQU1ZLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFoQixLQUFLO0FBQUEsU0FBSztBQUN2QkksUUFBSTtBQUNGTSxXQUFLLEVBQUUsTUFETDtBQUVGTyxhQUFPLEVBQUUsT0FGUDtBQUdGQyxnQkFBVSxFQUFFbEIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBSC9CO0FBSUZDLGlCQUFXLEVBQUVyQixLQUFLLENBQUNtQixPQUFOLENBQWNDLElBQWQsR0FBcUI7QUFKaEMsT0FLRHBCLEtBQUssQ0FBQ3NCLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLE1BQU12QixLQUFLLENBQUNtQixPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FBckIsR0FBeUIsQ0FBcEQsQ0FMQyxFQUt3RDtBQUN4RFYsV0FBSyxFQUFFLEdBRGlEO0FBRXhEUSxnQkFBVSxFQUFFLE1BRjRDO0FBR3hERyxpQkFBVyxFQUFFO0FBSDJDLEtBTHhELENBRG1CO0FBWXZCRyxTQUFLLEVBQUU7QUFDTEMsZUFBUyxFQUFFekIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBRDNCO0FBRUxILGFBQU8sRUFBRSxNQUZKO0FBR0xTLG1CQUFhLEVBQUUsUUFIVjtBQUlMQyxnQkFBVSxFQUFFLFFBSlA7QUFLTEMsYUFBTyxZQUFLNUIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBQTFCLGdCQUFpQ3BCLEtBQUssQ0FBQ21CLE9BQU4sQ0FBY0MsSUFBZCxHQUFxQixDQUF0RCxnQkFBNkRwQixLQUFLLENBQUNtQixPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FBbEY7QUFMRixLQVpnQjtBQW1CdkJZLFFBQUksRUFBRTtBQUNKdEIsV0FBSyxFQUFFLE1BREg7QUFFSmUsZUFBUyxFQUFFekIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQztBQUZyQixLQW5CaUI7QUF1QnZCYSxhQUFTLEVBQUU7QUFDVHRCLFlBQU0sRUFBRTtBQURDLEtBdkJZO0FBMEJ2QnVCLFVBQU0sRUFBRTtBQUNOVCxlQUFTLEVBQUV6QixLQUFLLENBQUNtQixPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FEMUI7QUFFTlQsWUFBTSxFQUFFO0FBRkYsS0ExQmU7QUE4QnZCd0IsUUFBSSxFQUFFO0FBQ0pDLGdCQUFVLEVBQUVwQyxLQUFLLENBQUNFLE9BQU4sQ0FBY3BDLEtBQWQsQ0FBb0J1RTtBQUQ1QixLQTlCaUI7QUFpQ3ZCQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFDLEVBREw7QUFFSmxCLGlCQUFXLEVBQUU7QUFGVCxLQWpDaUI7QUFxQ3ZCbUIsV0FBTyxFQUFFO0FBQ1B2QixhQUFPLEVBQUUsTUFERjtBQUVQVSxnQkFBVSxFQUFFO0FBRkw7QUFyQ2MsR0FBTDtBQUFBLENBQXBCOztJQTJDTXBGLG1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7NERBQ0k7QUFDTmtHLFVBQUksRUFBRTtBQURBLEs7O2tFQUlNLFlBQU07QUFDbEIsWUFBS0MsUUFBTCxDQUFjO0FBQUVELFlBQUksRUFBRTtBQUFSLE9BQWQ7QUFDRCxLOztrRUFFYSxVQUFDRSxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDL0IsVUFBSUEsTUFBTSxLQUFLLFdBQWYsRUFBNEI7QUFDMUI7QUFDRDs7QUFDRCxZQUFLRixRQUFMLENBQWM7QUFBRUQsWUFBSSxFQUFFO0FBQVIsT0FBZDtBQUNELEs7O21FQUdjLFVBQUNsRixDQUFELEVBQU87QUFDcEJBLE9BQUMsQ0FBQ3NGLGNBQUY7O0FBQ0EsWUFBS2xILEtBQUwsQ0FBV21ILFlBQVgsQ0FBd0IsTUFBS25ILEtBQUwsQ0FBV2lMLGVBQW5DLEVBQW9ELE1BQUtqTCxLQUFMLENBQVdxSCxPQUEvRCxFQUF3RSxNQUFLckgsS0FBTCxDQUFXRyxJQUFYLENBQWdCbUgsS0FBeEY7QUFDRCxLOzs7Ozs7OzZCQUVRO0FBQUEsa0NBUUosS0FBS3RILEtBQUwsQ0FBV2lMLGVBUlA7QUFBQSxVQUVMRCxRQUZLLHlCQUVMQSxRQUZLO0FBQUEsVUFHTEUsU0FISyx5QkFHTEEsU0FISztBQUFBLFVBSUxILFdBSksseUJBSUxBLFdBSks7QUFBQSxVQUtMckosTUFMSyx5QkFLTEEsTUFMSztBQUFBLFVBTUw4RixPQU5LLHlCQU1MQSxPQU5LO0FBQUEsVUFPTHJGLEtBUEsseUJBT0xBLEtBUEs7QUFBQSxVQVNBUixhQVRBLEdBU2lCLEtBQUszQixLQVR0QixDQVNBMkIsYUFUQTtBQUFBLFVBVUM4RixPQVZELEdBVWEsS0FBS3pILEtBVmxCLENBVUN5SCxPQVZEO0FBQUEsVUFXQ0gsS0FYRCxHQVdVLEtBQUt0SCxLQUFMLENBQVdHLElBWHJCLENBV0NtSCxLQVhEO0FBWVAsYUFDSSwyREFBQywwRUFBRDtBQUFrQixhQUFLLEVBQUVqRDtBQUF6QixTQUNFO0FBQU0saUJBQVMsRUFBRW9ELE9BQU8sQ0FBQ2hEO0FBQXpCLFNBQ0UsMkRBQUMsOERBQUQ7QUFBTyxpQkFBUyxFQUFFZ0QsT0FBTyxDQUFDNUI7QUFBMUIsU0FDRSwyREFBQyxxRUFBRCxPQURGLEVBRUUsMkRBQUMsbUVBQUQ7QUFDSSxlQUFPLEVBQUMsSUFEWjtBQUVJLG9CQUFZLE1BRmhCO0FBR0ksYUFBSyxFQUFDO0FBSFYsK0JBRkYsRUFPRzFELEtBQUssR0FDQSwyREFBQyxrRUFBRDtBQUNGLG9CQUFZLEVBQUU7QUFDWnVGLGtCQUFRLEVBQUUsUUFERTtBQUVaQyxvQkFBVSxFQUFFO0FBRkEsU0FEWjtBQUtGLFlBQUksRUFBRSxLQUFLM0csS0FBTCxDQUFXOEYsSUFMZjtBQU1GLHdCQUFnQixFQUFFLElBTmhCO0FBT0YsZUFBTyxFQUFFLEtBQUtjLFdBUFo7QUFRRixvQkFBWSxFQUFFO0FBQ1osOEJBQW9CLFlBRFI7QUFFWkgsaUJBQU8sRUFBRTtBQUNQakIsZ0JBQUksRUFBRWlCLE9BQU8sQ0FBQ2pCO0FBRFA7QUFGRyxTQVJaO0FBY0YsZUFBTyxFQUFFO0FBQU0sbUJBQVMsRUFBRWlCLE9BQU8sQ0FBQ1o7QUFBekIsV0FDTCwyREFBQyxnRUFBRDtBQUFXLG1CQUFTLEVBQUVZLE9BQU8sQ0FBQ2Q7QUFBOUIsVUFESyxFQUVOeEUsS0FGTSxDQWRQO0FBa0JGLGNBQU0sRUFBRSxDQUNOLDJEQUFDLGlFQUFEO0FBQVMsZUFBSyxFQUFDO0FBQWYsV0FDRSwyREFBQyxvRUFBRDtBQUFZLHdCQUFXLE9BQXZCO0FBQ1ksYUFBRyxFQUFDLE9BRGhCO0FBRVksZUFBSyxFQUFDLFNBRmxCO0FBR1ksbUJBQVMsRUFBRXNGLE9BQU8sQ0FBQ0ksS0FIL0I7QUFJWSxpQkFBTyxFQUFFLEtBQUtEO0FBSjFCLFdBS0UsMkRBQUMsZ0VBQUQsT0FMRixDQURGLENBRE07QUFsQk4sUUFEQSxHQStCRSxJQXRDVixFQXdDRTtBQUNJLGdCQUFRLEVBQUUsS0FBS1QsWUFEbkI7QUFFSSxpQkFBUyxFQUFFTSxPQUFPLENBQUMwRCxTQUZ2QjtBQUdJLGtCQUFVLE1BSGQ7QUFHZSxvQkFBWSxFQUFDO0FBSDVCLFNBS0UsMkRBQUMsa0VBQUQ7QUFDSSxZQUFJLEVBQUMsTUFEVDtBQUVJLFlBQUksRUFBQyxVQUZUO0FBR0ksYUFBSyxFQUFFSCxRQUhYO0FBSUksZ0JBQVEsRUFBRXJKLGFBSmQ7QUFLSSxpQkFBUyxNQUxiO0FBTUksZ0JBQVEsTUFOWjtBQU9JLGFBQUssRUFBQyx3QkFQVjtBQVFJLGNBQU0sRUFBQyxRQVJYO0FBU0ksZUFBTyxFQUFDLFVBVFo7QUFVSSxpQkFBUyxFQUFFOEYsT0FBTyxDQUFDbkI7QUFWdkIsUUFMRixFQWlCRSwyREFBQyxrRUFBRDtBQUNJLFlBQUksRUFBQyxNQURUO0FBRUksWUFBSSxFQUFDLFdBRlQ7QUFHSSxhQUFLLEVBQUU0RSxTQUhYO0FBSUksZ0JBQVEsRUFBRXZKLGFBSmQ7QUFLSSxpQkFBUyxNQUxiO0FBTUksZ0JBQVEsTUFOWjtBQU9JLGFBQUssRUFBQyw4QkFQVjtBQVFJLGNBQU0sRUFBQyxRQVJYO0FBU0ksZUFBTyxFQUFDLFVBVFo7QUFVSSxpQkFBUyxFQUFFOEYsT0FBTyxDQUFDbkI7QUFWdkIsUUFqQkYsRUE2QkUsMkRBQUMsa0VBQUQ7QUFDSSxZQUFJLEVBQUMsT0FEVDtBQUVJLFlBQUksRUFBQyxPQUZUO0FBR0ksYUFBSyxFQUFFZ0IsS0FIWDtBQUlJLGdCQUFRLEVBQUUzRixhQUpkO0FBS0ksaUJBQVMsTUFMYjtBQU1JLGdCQUFRLE1BTlo7QUFPSSxhQUFLLEVBQUMseUJBUFY7QUFRSSxjQUFNLEVBQUMsUUFSWDtBQVNJLGVBQU8sRUFBQyxVQVRaO0FBVUksaUJBQVMsRUFBRThGLE9BQU8sQ0FBQ25CO0FBVnZCLFFBN0JGLEVBMENFLDJEQUFDLGtFQUFEO0FBQ0ksWUFBSSxFQUFDLGFBRFQ7QUFFSSxhQUFLLEVBQUV5RSxXQUZYO0FBR0ksZ0JBQVEsRUFBRXBKLGFBSGQ7QUFJSSxpQkFBUyxNQUpiO0FBS0ksaUJBQVMsTUFMYjtBQU1JLGVBQU8sRUFBQyxHQU5aO0FBT0ksaUJBQVMsRUFBRThGLE9BQU8sQ0FBQ25CLFNBUHZCO0FBUUksYUFBSyxFQUFDLG9CQVJWO0FBU0ksY0FBTSxFQUFDLFFBVFg7QUFVSSxlQUFPLEVBQUM7QUFWWixRQTFDRixFQXNERSwyREFBQyxrRUFBRDtBQUNJLFlBQUksRUFBQyxRQURUO0FBRUksWUFBSSxFQUFDLFFBRlQ7QUFHSSxXQUFHLEVBQUUsQ0FIVDtBQUlJLGFBQUssRUFBRTVFLE1BSlg7QUFLSSxnQkFBUSxFQUFFQyxhQUxkO0FBTUksaUJBQVMsTUFOYjtBQU9JLGdCQUFRLE1BUFo7QUFRSSxhQUFLLEVBQUMsb0NBUlY7QUFTSSxjQUFNLEVBQUMsUUFUWDtBQVVJLGVBQU8sRUFBQyxVQVZaO0FBV0ksaUJBQVMsRUFBRThGLE9BQU8sQ0FBQ25CO0FBWHZCLFFBdERGLEVBbUVFLDJEQUFDLGdFQUFEO0FBQ0ksZUFBTyxFQUFDLFdBRFo7QUFFSSxhQUFLLEVBQUMsU0FGVjtBQUdJLGlCQUFTLEVBQUMsV0FIZDtBQUlJLGlCQUFTLEVBQUVtQixPQUFPLENBQUNsQixNQUp2QjtBQUtJLGNBQU0sRUFBQyxRQUxYO0FBTUksaUJBQVMsTUFOYjtBQU9JLG9CQUFZLE1BUGhCO0FBUUksZUFBTyxFQUFFLEtBQUt1QixXQVJsQjtBQVNJLFlBQUksRUFBQztBQVRULFNBVUdOLE9BQU8sR0FBRywyREFBQyxzREFBRDtBQUFRLGlCQUFTLEVBQUMsV0FBbEI7QUFBOEIsYUFBSyxFQUFFLE1BQXJDO0FBQTZDLFNBQUMsRUFBRTtBQUFoRCxRQUFILEdBQ0osMkRBQUMsbUVBQUQ7QUFBWSxhQUFLLEVBQUM7QUFBbEIsNEJBWE4sQ0FuRUYsQ0F4Q0YsQ0FERixDQURGLENBREo7QUFpSUQ7Ozs7RUFuSytCMUcsK0M7O0FBc0tsQyxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xpSyxtQkFBZSxFQUFFakssS0FBSyxDQUFDaUssZUFEbEI7QUFFTDlLLFFBQUksRUFBRWEsS0FBSyxDQUFDYjtBQUZQLEdBQVA7QUFJRCxDQUxEOztBQU9BLElBQU1jLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQWU7QUFDeENTLGlCQUFhLEVBQUUsdUJBQUNDLENBQUQ7QUFBQSxhQUFPVixRQUFRLENBQUM2Ryw2RUFBQSxDQUFzQm5HLENBQXRCLENBQUQsQ0FBZjtBQUFBLEtBRHlCO0FBRXhDUyxnQkFBWSxFQUFFLHNCQUFDQyxJQUFEO0FBQUEsYUFBVXBCLFFBQVEsQ0FBQzZHLDRFQUFBLENBQXFCekYsSUFBckIsQ0FBRCxDQUFsQjtBQUFBLEtBRjBCO0FBR3hDNkUsZ0JBQVksRUFBRSxzQkFBQ3hFLFdBQUQsRUFBYzBFLE9BQWQsRUFBdUJDLEtBQXZCO0FBQUEsYUFBK0JwRyxRQUFRLENBQUN3QixnR0FBMkIsQ0FBQ0MsV0FBRCxFQUFhMEUsT0FBYixFQUFxQkMsS0FBckIsQ0FBNUIsQ0FBdkM7QUFBQTtBQUgwQixHQUFmO0FBQUEsQ0FBM0I7O0FBS2VsRywwSEFBTyxDQUFDTCxlQUFELEVBQWlCRSxrQkFBakIsQ0FBUCxDQUE0QytHLDRFQUFVLENBQUMzQyxNQUFELENBQVYsQ0FBbUJ6RSxtQkFBbkIsQ0FBNUMsQ0FBZixFOzs7Ozs7Ozs7OztBQy9QQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU15RCxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDM0JDLFNBQU8sRUFBRTtBQUNQQyxXQUFPLEVBQUU7QUFDUEMsVUFBSSxFQUFFO0FBREMsS0FERjtBQUlQQyxhQUFTLEVBQUU7QUFDVEQsVUFBSSxFQUFFO0FBREc7QUFKSjtBQURrQixDQUFELENBQTVCOztJQVlNakUsWTs7Ozs7QUFDSiwwQkFBYztBQUFBOztBQUFBOztBQUNaOztBQURZLHdFQWFNLFVBQUFvQixDQUFDO0FBQUEsYUFBSSxNQUFLbUYsUUFBTCxDQUFjO0FBQUNxRSxtQkFBVyxFQUFFeEosQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBQXZCLE9BQWQsQ0FBSjtBQUFBLEtBYlA7O0FBR1osVUFBS2YsS0FBTCxHQUFhO0FBQ1hxSyxZQUFNLEVBQUUsS0FERztBQUVYRCxpQkFBVyxFQUFFO0FBRkYsS0FBYjtBQUhZO0FBT2I7Ozs7d0NBRW1CO0FBQ2xCLFdBQUtwTCxLQUFMLENBQVdzTCxpQkFBWDtBQUNEOzs7NkJBSVE7QUFBQTs7QUFBQSx3QkFDeUIsS0FBS3RMLEtBRDlCO0FBQUEsVUFDQTZDLFFBREEsZUFDQUEsUUFEQTtBQUFBLFVBQ1UwSSxXQURWLGVBQ1VBLFdBRFY7QUFBQSxVQUVBN0osTUFGQSxHQUVVLEtBQUsxQixLQUFMLENBQVdHLElBRnJCLENBRUF1QixNQUZBO0FBR1AsVUFBSThKLFlBQUo7O0FBQ0EsVUFBSTNJLFFBQVEsQ0FBQzRJLE1BQVQsS0FBb0IsQ0FBeEIsRUFBMkI7QUFDekJELG9CQUFZLEdBQUczSSxRQUFRLElBQUlBLFFBQVEsQ0FBQ3lILE1BQVQsQ0FBZ0IsVUFBQUMsT0FBTyxFQUFJO0FBQ3BELGNBQUlBLE9BQU8sQ0FBQ2pDLEtBQVIsQ0FBY29ELFdBQWQsR0FBNEJDLFFBQTVCLENBQXFDLE1BQUksQ0FBQzNLLEtBQUwsQ0FBV29LLFdBQVgsQ0FBdUJNLFdBQXZCLEVBQXJDLENBQUosRUFBZ0Y7QUFDOUUsbUJBQU9uQixPQUFQO0FBQ0Q7QUFDRixTQUowQixFQUt0QkssR0FMc0IsQ0FLbEIsVUFBQ0wsT0FBRCxFQUFVTSxDQUFWLEVBQWdCO0FBQ3ZCLGlCQUNJLDJEQUFDLHlFQUFEO0FBQWtCLGlCQUFLLEVBQUV4RyxLQUF6QjtBQUFnQyxlQUFHLEVBQUV3RztBQUFyQyxhQUNFLDJEQUFDLDhEQUFEO0FBQU0scUJBQVMsRUFBRTtBQUFqQixhQUNFLDJEQUFDLDhEQUFEO0FBQU8scUJBQVMsRUFBRSxNQUFsQjtBQUEwQixxQkFBUyxFQUFFbEcscURBQXJDO0FBQWlELGNBQUUscUJBQWM0RixPQUFPLENBQUNDLEVBQXRCO0FBQW5ELGFBQ0U7QUFBSyxxQkFBUyxFQUFFO0FBQWhCLGFBQStCRCxPQUFPLENBQUNqQyxLQUF2QyxDQURGLEVBRUU7QUFBSyxxQkFBUyxFQUFFO0FBQWhCLGFBQXFDaUMsT0FBTyxDQUFDUSxXQUE3QyxDQUZGLEVBR0U7QUFBSyxxQkFBUyxFQUFFO0FBQWhCLGFBQ0Usd0VBQU1SLE9BQU8sQ0FBQ08sTUFBZCxNQURGLEVBRUU7QUFBSyxxQkFBUyxFQUFFO0FBQWhCLGFBQ0UsMkRBQUMsd0VBQUQ7QUFBZ0IsbUJBQU8sRUFBRSxRQUF6QjtBQUFtQyxpQkFBSyxFQUFHUCxPQUFPLENBQUNPLE1BQVIsR0FBaUJQLE9BQU8sQ0FBQzdJLE1BQTFCLEdBQW9DO0FBQTlFLFlBREYsQ0FGRixFQUtFLHdFQUFNNkksT0FBTyxDQUFDN0ksTUFBZCxNQUxGLENBSEYsRUFVRTtBQUFLLHFCQUFTLEVBQUU7QUFBaEIsYUFDRSwyREFBQywrREFBRDtBQUFRLG1CQUFPLEVBQUMsVUFBaEI7QUFBMkIsaUJBQUssRUFBRTtBQUFDb0gsMEJBQVksRUFBRSxFQUFmO0FBQW1CM0Msb0JBQU0sRUFBRTtBQUEzQixhQUFsQztBQUFpRSxpQkFBSyxFQUFDLFNBQXZFO0FBQ1EsbUJBQU8sRUFBRTtBQUFBLHFCQUFNb0YsV0FBVyxDQUFDaEIsT0FBTyxDQUFDQyxFQUFULEVBQWEsQ0FBYixDQUFqQjtBQUFBLGFBRGpCO0FBQ21ELG9CQUFRLEVBQUU5SSxNQUFNLEdBQUc7QUFEdEUsdUJBREYsRUFHRSwyREFBQywrREFBRDtBQUFRLG1CQUFPLEVBQUMsVUFBaEI7QUFBMkIsaUJBQUssRUFBRTtBQUFDb0gsMEJBQVksRUFBRSxFQUFmO0FBQW1CM0Msb0JBQU0sRUFBRTtBQUEzQixhQUFsQztBQUFpRSxpQkFBSyxFQUFDLFNBQXZFO0FBQ1EsbUJBQU8sRUFBRTtBQUFBLHFCQUFNb0YsV0FBVyxDQUFDaEIsT0FBTyxDQUFDQyxFQUFULEVBQWEsRUFBYixDQUFqQjtBQUFBLGFBRGpCO0FBQ29ELG9CQUFRLEVBQUU5SSxNQUFNLEdBQUc7QUFEdkUsd0JBSEYsRUFLRSwyREFBQywrREFBRDtBQUFRLG1CQUFPLEVBQUMsVUFBaEI7QUFBMkIsaUJBQUssRUFBRTtBQUFDb0gsMEJBQVksRUFBRSxFQUFmO0FBQW1CM0Msb0JBQU0sRUFBRTtBQUEzQixhQUFsQztBQUFpRSxpQkFBSyxFQUFDLFNBQXZFO0FBQ1EsbUJBQU8sRUFBRTtBQUFBLHFCQUFNb0YsV0FBVyxDQUFDaEIsT0FBTyxDQUFDQyxFQUFULEVBQWEsRUFBYixDQUFqQjtBQUFBLGFBRGpCO0FBQ29ELG9CQUFRLEVBQUU5SSxNQUFNLEdBQUc7QUFEdkUsd0JBTEYsQ0FWRixDQURGLENBREYsQ0FESjtBQXlCRCxTQS9CMEIsQ0FBM0I7QUFnQ0QsT0FqQ0QsTUFpQ087QUFDTDhKLG9CQUFZLEdBQUc7QUFBSyxtQkFBUyxFQUFDO0FBQWYsV0FDYiwyREFBQyx1REFBRDtBQUFRLGVBQUssRUFBRSxTQUFmO0FBQTBCLFdBQUMsRUFBRTtBQUE3QixVQURhLENBQWY7QUFHRDs7QUFDRCxhQUNJLDJEQUFDLHlFQUFEO0FBQWtCLGFBQUssRUFBRW5IO0FBQXpCLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLDJEQUFDLG1FQUFEO0FBQ0ksaUJBQVMsTUFEYjtBQUVJLGVBQU8sRUFBQyxVQUZaO0FBR0ksbUJBQVcsRUFBQyx1QkFIaEI7QUFJSSxhQUFLLEVBQUMsU0FKVjtBQUtJLGFBQUssRUFBRSxLQUFLckQsS0FBTCxDQUFXb0ssV0FMdEI7QUFNSSxnQkFBUSxFQUFFLEtBQUtRO0FBTm5CLFFBREYsQ0FERixFQVdFO0FBQUssaUJBQVMsRUFBRTtBQUFoQixTQUFnQyxLQUFLNUssS0FBTCxDQUFXb0ssV0FBM0MsQ0FYRixFQVlHSSxZQVpILEVBYUUsMkRBQUMsb0VBQUQ7QUFDSSxlQUFPLEVBQUMsSUFEWjtBQUVJLG9CQUFZLE1BRmhCO0FBR0ksYUFBSyxFQUFDO0FBSFYsMENBSStCLEdBSi9CLEVBS0UsMkRBQUMsNkRBQUQ7QUFBTSxpQkFBUyxFQUFFN0cscURBQWpCO0FBQTZCLGFBQUssRUFBRSxXQUFwQztBQUFpRCxVQUFFLEVBQUM7QUFBcEQsb0JBTEYsRUFNRyxHQU5ILHlCQWJGLENBREYsQ0FESjtBQTBCRDs7OztFQXBGd0I3RCwrQzs7QUF1RjNCLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTDZCLFlBQVEsRUFBRTdCLEtBQUssQ0FBQzZCLFFBQU4sQ0FBZUEsUUFEcEI7QUFFTDFDLFFBQUksRUFBRWEsS0FBSyxDQUFDYjtBQUZQLEdBQVA7QUFJRCxDQUxEOztBQU9BLElBQU1jLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQWU7QUFDeENvSyxxQkFBaUIsRUFBRTtBQUFBLGFBQU1wSyxRQUFRLENBQUMySywwRUFBYyxFQUFmLENBQWQ7QUFBQSxLQURxQjtBQUV4Q04sZUFBVyxFQUFFLHFCQUFDTyxTQUFELEVBQVlwSyxNQUFaO0FBQUEsYUFBdUJSLFFBQVEsQ0FBQzZLLGdFQUFNLENBQUNELFNBQUQsRUFBWXBLLE1BQVosQ0FBUCxDQUEvQjtBQUFBO0FBRjJCLEdBQWY7QUFBQSxDQUEzQjs7QUFLZU4sMEhBQU8sQ0FBQ0wsZUFBRCxFQUFrQkUsa0JBQWxCLENBQVAsQ0FBNkNULFlBQTdDLENBQWYsRTs7Ozs7Ozs7Ozs7QUMvSEEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNNkQsS0FBSyxHQUFHQyxnRkFBYyxDQUFDO0FBQzNCQyxTQUFPLEVBQUU7QUFDUEMsV0FBTyxFQUFFO0FBQ1BDLFVBQUksRUFBRTtBQURDLEtBREY7QUFJUEMsYUFBUyxFQUFFO0FBQ1RELFVBQUksRUFBRTtBQURHLEtBSko7QUFPUHRDLFNBQUssRUFBRTtBQUNMc0MsVUFBSSxFQUFFO0FBREQ7QUFQQTtBQURrQixDQUFELENBQTVCOztBQWNBLElBQU1ZLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFoQixLQUFLO0FBQUEsU0FBSztBQUN2QkksUUFBSTtBQUNGTSxXQUFLLEVBQUUsTUFETDtBQUVGTyxhQUFPLEVBQUUsT0FGUDtBQUdGQyxnQkFBVSxFQUFFbEIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBSC9CO0FBSUZDLGlCQUFXLEVBQUVyQixLQUFLLENBQUNtQixPQUFOLENBQWNDLElBQWQsR0FBcUI7QUFKaEMsT0FLRHBCLEtBQUssQ0FBQ3NCLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLE1BQU12QixLQUFLLENBQUNtQixPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FBckIsR0FBeUIsQ0FBcEQsQ0FMQyxFQUt3RDtBQUN4RFYsV0FBSyxFQUFFLEdBRGlEO0FBRXhEUSxnQkFBVSxFQUFFLE1BRjRDO0FBR3hERyxpQkFBVyxFQUFFO0FBSDJDLEtBTHhELENBRG1CO0FBWXZCRyxTQUFLLEVBQUU7QUFDTEMsZUFBUyxFQUFFekIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBRDNCO0FBRUxILGFBQU8sRUFBRSxNQUZKO0FBR0xTLG1CQUFhLEVBQUUsUUFIVjtBQUlMQyxnQkFBVSxFQUFFLFFBSlA7QUFLTEMsYUFBTyxZQUFLNUIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBQTFCLGdCQUFpQ3BCLEtBQUssQ0FBQ21CLE9BQU4sQ0FBY0MsSUFBZCxHQUFxQixDQUF0RCxnQkFBNkRwQixLQUFLLENBQUNtQixPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FBbEY7QUFMRixLQVpnQjtBQW1CdkJZLFFBQUksRUFBRTtBQUNKdEIsV0FBSyxFQUFFLE1BREg7QUFFSmUsZUFBUyxFQUFFekIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQztBQUZyQixLQW5CaUI7QUF1QnZCYSxhQUFTLEVBQUU7QUFDVHRCLFlBQU0sRUFBRTtBQURDLEtBdkJZO0FBMEJ2QnVCLFVBQU0sRUFBRTtBQUNOVCxlQUFTLEVBQUV6QixLQUFLLENBQUNtQixPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FEMUI7QUFFTlQsWUFBTSxFQUFFO0FBRkYsS0ExQmU7QUE4QnZCd0IsUUFBSSxFQUFFO0FBQ0pDLGdCQUFVLEVBQUVwQyxLQUFLLENBQUNFLE9BQU4sQ0FBY3BDLEtBQWQsQ0FBb0J1RTtBQUQ1QixLQTlCaUI7QUFpQ3ZCQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFDLEVBREw7QUFFSmxCLGlCQUFXLEVBQUU7QUFGVCxLQWpDaUI7QUFxQ3ZCbUIsV0FBTyxFQUFFO0FBQ1B2QixhQUFPLEVBQUUsTUFERjtBQUVQVSxnQkFBVSxFQUFFO0FBRkwsS0FyQ2M7QUF5Q3ZCRSxVQUFNLEVBQUU7QUFDTkMsWUFBTSxFQUFFOUIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxJQURoQjtBQUVOVyxxQkFBZSxFQUFFO0FBRlg7QUF6Q2UsR0FBTDtBQUFBLENBQXBCOztJQWdETTFGLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDSTtBQUNOb0csVUFBSSxFQUFFO0FBREEsSzs7a0VBSU0sWUFBTTtBQUNsQixZQUFLQyxRQUFMLENBQWM7QUFBRUQsWUFBSSxFQUFFO0FBQVIsT0FBZDtBQUNELEs7O2tFQUVhLFVBQUNFLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUMvQixVQUFJQSxNQUFNLEtBQUssV0FBZixFQUE0QjtBQUMxQjtBQUNEOztBQUNELFlBQUtGLFFBQUwsQ0FBYztBQUFFRCxZQUFJLEVBQUU7QUFBUixPQUFkO0FBQ0QsSzs7bUVBRWMsVUFBQ2xGLENBQUQsRUFBTztBQUNwQkEsT0FBQyxDQUFDc0YsY0FBRjs7QUFDQSxZQUFLbEgsS0FBTCxDQUFXbUgsWUFBWCxDQUF3QixNQUFLbkgsS0FBTCxDQUFXZ00sUUFBbkMsRUFBNkMsTUFBS2hNLEtBQUwsQ0FBV3FILE9BQXhEO0FBQ0QsSzs7Ozs7Ozs2QkFHUTtBQUFBLGlDQUN5RCxLQUFLckgsS0FBTCxDQUFXZ00sUUFEcEU7QUFBQSxVQUNBaEIsUUFEQSx3QkFDQUEsUUFEQTtBQUFBLFVBQ1UxRCxLQURWLHdCQUNVQSxLQURWO0FBQUEsVUFDaUJDLFFBRGpCLHdCQUNpQkEsUUFEakI7QUFBQSxVQUMyQjBFLFNBRDNCLHdCQUMyQkEsU0FEM0I7QUFBQSxVQUNzQzlKLEtBRHRDLHdCQUNzQ0EsS0FEdEM7QUFBQSxVQUM2Q3FGLE9BRDdDLHdCQUM2Q0EsT0FEN0M7QUFBQSxVQUVBN0YsYUFGQSxHQUVpQixLQUFLM0IsS0FGdEIsQ0FFQTJCLGFBRkE7QUFBQSxVQUdDOEYsT0FIRCxHQUdhLEtBQUt6SCxLQUhsQixDQUdDeUgsT0FIRDtBQUlQLGFBQ00sMkRBQUMsMEVBQUQ7QUFBa0IsYUFBSyxFQUFFcEQ7QUFBekIsU0FDRTtBQUFNLGlCQUFTLEVBQUVvRCxPQUFPLENBQUNoRDtBQUF6QixTQUNFLDJEQUFDLDhEQUFEO0FBQU8saUJBQVMsRUFBRWdELE9BQU8sQ0FBQzVCO0FBQTFCLFNBQ0UsMkRBQUMscUVBQUQsT0FERixFQUVJLDJEQUFDLGdFQUFEO0FBQVEsaUJBQVMsRUFBRTRCLE9BQU8sQ0FBQ3ZCO0FBQTNCLFNBQ0UsMkRBQUMsd0VBQUQsT0FERixDQUZKLEVBS0EsMkRBQUMsbUVBQUQ7QUFDSSxlQUFPLEVBQUMsSUFEWjtBQUVJLG9CQUFZLE1BRmhCO0FBR0ksYUFBSyxFQUFDO0FBSFYsbUJBTEEsRUFVQy9ELEtBQUssR0FBRywyREFBQyxrRUFBRDtBQUNMLG9CQUFZLEVBQUU7QUFDWnVGLGtCQUFRLEVBQUUsUUFERTtBQUVaQyxvQkFBVSxFQUFFO0FBRkEsU0FEVDtBQUtMLFlBQUksRUFBRSxLQUFLM0csS0FBTCxDQUFXOEYsSUFMWjtBQU1MLHdCQUFnQixFQUFFLElBTmI7QUFPTCxlQUFPLEVBQUUsS0FBS2MsV0FQVDtBQVFMLG9CQUFZLEVBQUU7QUFDWiw4QkFBb0IsWUFEUjtBQUVWSCxpQkFBTyxFQUFFO0FBQ0xqQixnQkFBSSxFQUFFaUIsT0FBTyxDQUFDakI7QUFEVDtBQUZDLFNBUlQ7QUFjTCxlQUFPLEVBQUU7QUFBTSxtQkFBUyxFQUFFaUIsT0FBTyxDQUFDWjtBQUF6QixXQUNQLDJEQUFDLGdFQUFEO0FBQVcsbUJBQVMsRUFBRVksT0FBTyxDQUFDZDtBQUE5QixVQURPLEVBRU54RSxLQUZNLENBZEo7QUFrQkwsY0FBTSxFQUFFLENBQ04sMkRBQUMsaUVBQUQ7QUFBUyxlQUFLLEVBQUM7QUFBZixXQUNFLDJEQUFDLG9FQUFEO0FBQVksd0JBQVcsT0FBdkI7QUFDWSxhQUFHLEVBQUMsT0FEaEI7QUFFWSxlQUFLLEVBQUMsU0FGbEI7QUFHWSxtQkFBUyxFQUFFc0YsT0FBTyxDQUFDSSxLQUgvQjtBQUlZLGlCQUFPLEVBQUUsS0FBS0Q7QUFKMUIsV0FLRSwyREFBQyxnRUFBRCxPQUxGLENBREYsQ0FETTtBQWxCSCxRQUFILEdBNkJELElBdkNMLEVBd0NBO0FBQU0sZ0JBQVEsRUFBRSxLQUFLVCxZQUFyQjtBQUFvQyxpQkFBUyxFQUFFTSxPQUFPLENBQUMwRCxTQUF2RDtBQUFtRSxrQkFBVSxNQUE3RTtBQUE4RSxvQkFBWSxFQUFDO0FBQTNGLFNBQ0UsMkRBQUMsa0VBQUQ7QUFDTSxZQUFJLEVBQUMsTUFEWDtBQUVNLFlBQUksRUFBQyxVQUZYO0FBR00sYUFBSyxFQUFFSCxRQUhiO0FBSU0sZ0JBQVEsRUFBRXJKLGFBSmhCO0FBS00saUJBQVMsTUFMZjtBQU1NLGdCQUFRLE1BTmQ7QUFPTSxhQUFLLEVBQUMsd0JBUFo7QUFRTSxjQUFNLEVBQUMsUUFSYjtBQVNNLGVBQU8sRUFBQyxVQVRkO0FBVU0saUJBQVMsRUFBRThGLE9BQU8sQ0FBQ25CO0FBVnpCLFFBREYsRUFhRSwyREFBQyxrRUFBRDtBQUNJLFlBQUksRUFBQyxNQURUO0FBRUksWUFBSSxFQUFDLE9BRlQ7QUFHSSxhQUFLLEVBQUVnQixLQUhYO0FBSUksZ0JBQVEsRUFBRTNGLGFBSmQ7QUFLSSxpQkFBUyxNQUxiO0FBTUksZ0JBQVEsTUFOWjtBQU9JLGFBQUssRUFBQyx5QkFQVjtBQVFJLGNBQU0sRUFBQyxRQVJYO0FBU0ksZUFBTyxFQUFDLFVBVFo7QUFVSSxpQkFBUyxFQUFFOEYsT0FBTyxDQUFDbkI7QUFWdkIsUUFiRixFQTBCRSwyREFBQyxrRUFBRDtBQUNJLFlBQUksRUFBQyxVQURUO0FBRUksWUFBSSxFQUFDLFVBRlQ7QUFHSSxhQUFLLEVBQUVpQixRQUhYO0FBSUksZ0JBQVEsRUFBRTVGLGFBSmQ7QUFLSSxpQkFBUyxNQUxiO0FBTUksZ0JBQVEsTUFOWjtBQU9JLGFBQUssRUFBQyxVQVBWO0FBUUksY0FBTSxFQUFDLFFBUlg7QUFTSSxhQUFLLEVBQUMsV0FUVjtBQVVJLGVBQU8sRUFBQyxVQVZaO0FBV0ksaUJBQVMsRUFBRThGLE9BQU8sQ0FBQ25CO0FBWHZCLFFBMUJGLEVBdUNFLDJEQUFDLGtFQUFEO0FBQ0ksWUFBSSxFQUFDLFVBRFQ7QUFFSSxZQUFJLEVBQUMsV0FGVDtBQUdJLGFBQUssRUFBRTJGLFNBSFg7QUFJSSxnQkFBUSxFQUFFdEssYUFKZDtBQUtJLGlCQUFTLE1BTGI7QUFNSSxnQkFBUSxNQU5aO0FBT0ksYUFBSyxFQUFDLGlCQVBWO0FBUUksY0FBTSxFQUFDLFFBUlg7QUFTSSxlQUFPLEVBQUMsVUFUWjtBQVVJLGlCQUFTLEVBQUU4RixPQUFPLENBQUNuQjtBQVZ2QixRQXZDRixFQW1ERSwyREFBQyxnRUFBRDtBQUNJLGVBQU8sRUFBQyxXQURaO0FBRUksYUFBSyxFQUFDLFNBRlY7QUFHSSxpQkFBUyxFQUFDLFdBSGQ7QUFJSSxpQkFBUyxFQUFFbUIsT0FBTyxDQUFDbEIsTUFKdkI7QUFLSSxjQUFNLEVBQUMsUUFMWDtBQU1JLGlCQUFTLE1BTmI7QUFPSSxvQkFBWSxNQVBoQjtBQVFJLGVBQU8sRUFBRSxLQUFLdUIsV0FSbEI7QUFTSSxZQUFJLEVBQUM7QUFUVCxTQVVHTixPQUFPLEdBQUcsMkRBQUMsc0RBQUQ7QUFBUSxhQUFLLEVBQUUsTUFBZjtBQUF1QixTQUFDLEVBQUU7QUFBMUIsUUFBSCxHQUNKLDJEQUFDLG1FQUFEO0FBQVksYUFBSyxFQUFDO0FBQWxCLG1CQVhOLENBbkRGLENBeENBLENBREYsRUEyR0U7QUFBSyxpQkFBUyxFQUFFO0FBQWhCLHFDQUMyQixHQUQzQixFQUVFLDJEQUFDLDhEQUFEO0FBQ0ksaUJBQVMsRUFBRTdDLHFEQURmO0FBRUksYUFBSyxFQUFFLFdBRlg7QUFHSSxVQUFFLEVBQUM7QUFIUCxtQkFGRixDQTNHRixDQURGLENBRE47QUF5SEQ7Ozs7RUFuSm9CN0QsK0M7O0FBc0p2QixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xnTCxZQUFRLEVBQUVoTCxLQUFLLENBQUNnTDtBQURYLEdBQVA7QUFHRCxDQUpEOztBQU1BLElBQU0vSyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFlO0FBQ3hDUyxpQkFBYSxFQUFFLHVCQUFDQyxDQUFEO0FBQUEsYUFBT1YsUUFBUSxDQUFDNkcsc0VBQUEsQ0FBc0JuRyxDQUF0QixDQUFELENBQWY7QUFBQSxLQUR5QjtBQUV4Q3VGLGdCQUFZLEVBQUUsc0JBQUNySCxJQUFELEVBQU91SCxPQUFQO0FBQUEsYUFBbUJuRyxRQUFRLENBQUNnTCxrRkFBb0IsQ0FBQ3BNLElBQUQsRUFBT3VILE9BQVAsQ0FBckIsQ0FBM0I7QUFBQTtBQUYwQixHQUFmO0FBQUEsQ0FBM0I7O0FBSWVqRywwSEFBTyxDQUFDTCxlQUFELEVBQWlCRSxrQkFBakIsQ0FBUCxDQUE0QytHLDRFQUFVLENBQUMzQyxNQUFELENBQVYsQ0FBbUIzRSxRQUFuQixDQUE1QyxDQUFmLEU7Ozs7Ozs7Ozs7O0FDcFBBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU0yRCxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDekJDLFNBQU8sRUFBRTtBQUNMQyxXQUFPLEVBQUU7QUFDTEMsVUFBSSxFQUFFO0FBREQsS0FESjtBQUlMQyxhQUFTLEVBQUU7QUFDUEQsVUFBSSxFQUFFO0FBREM7QUFKTjtBQURnQixDQUFELENBQTVCOztJQWFNOUQsSTs7Ozs7QUFDRixrQkFBYztBQUFBOztBQUFBOztBQUNWOztBQURVLHdFQWNNLFVBQUFpQixDQUFDO0FBQUEsYUFBSSxNQUFLbUYsUUFBTCxDQUFjO0FBQUNxRSxtQkFBVyxFQUFFeEosQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBQXZCLE9BQWQsQ0FBSjtBQUFBLEtBZFA7O0FBR1YsVUFBS2YsS0FBTCxHQUFhO0FBQ1RxSyxZQUFNLEVBQUUsS0FEQztBQUVURCxpQkFBVyxFQUFFO0FBRkosS0FBYjtBQUhVO0FBT2I7Ozs7d0NBR21CO0FBQ3BCLFdBQUtwTCxLQUFMLENBQVdtTSxVQUFYO0FBQ0Q7Ozs2QkFLVTtBQUFBLFVBQ0ZsSSxLQURFLEdBQ08sS0FBS2pFLEtBQUwsQ0FBV2lFLEtBRGxCLENBQ0ZBLEtBREU7QUFBQSxVQUVGbUksUUFGRSxHQUVVLEtBQUtwTSxLQUZmLENBRUZvTSxRQUZFO0FBSVAsVUFBTUMsTUFBTSxHQUFHO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ1gsMkRBQUMsc0RBQUQ7QUFBUSxhQUFLLEVBQUUsU0FBZjtBQUEwQixTQUFDLEVBQUU7QUFBN0IsUUFEVyxDQUFmO0FBSUYsVUFBTUMsVUFBVSxHQUFHckksS0FBSyxDQUFDMkcsR0FBTixDQUFVLFVBQUEyQixJQUFJLEVBQUk7QUFDbkMsZUFDSSwyREFBQyx5RUFBRDtBQUFrQixlQUFLLEVBQUVsSTtBQUF6QixXQUNJLDJEQUFDLDZEQUFEO0FBQU0sbUJBQVMsRUFBRTtBQUFqQixXQUNJLDJEQUFDLHdFQUFEO0FBQU8sbUJBQVMsRUFBRSxNQUFsQjtBQUEyQixhQUFHLEVBQUVrSSxJQUFJLENBQUMvQjtBQUFyQyxXQUNJO0FBQUssbUJBQVMsRUFBRTtBQUFoQixXQUErQitCLElBQUksQ0FBQ2pFLEtBQXBDLENBREosRUFFSTtBQUFLLG1CQUFTLEVBQUU7QUFBaEIsNkJBQW1EaUUsSUFBSSxDQUFDN0ssTUFBeEQsV0FGSixFQUdJLDJEQUFDLCtEQUFEO0FBQ0ksZUFBSyxFQUFDLFNBRFY7QUFFSSxpQkFBTyxFQUFDLFVBRlo7QUFHSSxpQkFBTyxFQUFFO0FBQUEsbUJBQU0wSyxRQUFRLENBQUNHLElBQUksQ0FBQy9CLEVBQU4sQ0FBZDtBQUFBO0FBSGIsb0JBSEosQ0FESixDQURKLENBREo7QUFjRCxPQWZrQixDQUFuQjtBQWdCRSxhQUNRO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0t2RyxLQUFLLENBQUN3SCxNQUFOLEdBQWUsQ0FBZixHQUFtQmEsVUFBbkIsR0FBZ0NELE1BRHJDLENBRFI7QUFLSDs7OztFQS9DZ0J2TCwrQzs7QUFrRG5CLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTGlELFNBQUssRUFBRWpELEtBQUssQ0FBQ2lEO0FBRFIsR0FBUDtBQUdELENBSkQ7O0FBTUEsSUFBTWhELGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQWU7QUFDeENpTCxjQUFVLEVBQUU7QUFBQSxhQUFNakwsUUFBUSxDQUFDK0MsbUVBQUssRUFBTixDQUFkO0FBQUEsS0FENEI7QUFFeENtSSxZQUFRLEVBQUUsa0JBQUM1QixFQUFEO0FBQUEsYUFBUXRKLFFBQVEsQ0FBQ3NMLGtFQUFNLENBQUNoQyxFQUFELENBQVAsQ0FBaEI7QUFBQTtBQUY4QixHQUFmO0FBQUEsQ0FBM0I7O0FBS2VwSiwwSEFBTyxDQUFDTCxlQUFELEVBQWtCRSxrQkFBbEIsQ0FBUCxDQUE2Q04sSUFBN0MsQ0FBZixFOzs7Ozs7Ozs7OztBQ3ZGQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQThMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkMsSUFBdkIsQ0FBNEIsY0FBNUIsSUFBOEMsa0JBQTlDO0FBRUFILDRDQUFLLENBQUNJLFlBQU4sQ0FBbUJDLE9BQW5CLENBQTJCQyxHQUEzQixDQUErQixVQUFBRCxPQUFPLEVBQUk7QUFDeEMsU0FBT0EsT0FBUDtBQUNELENBRkQ7QUFJQUwsNENBQUssQ0FBQ0ksWUFBTixDQUFtQkMsT0FBbkIsQ0FBMkJDLEdBQTNCLENBQStCLFVBQUFDLFFBQVEsRUFBSTtBQUN6QyxTQUFPQSxRQUFQO0FBQ0QsQ0FGRDtBQUlBLElBQU1DLGdCQUFnQixHQUFHQyxNQUFNLENBQUNDLG9DQUFQLElBQStDQyw2Q0FBeEU7QUFFQSxJQUFNQyxLQUFLLEdBQUdDLHlEQUFXLENBQUNDLDZEQUFELEVBQWNOLGdCQUFnQixDQUFDTyw2REFBZSxDQUFDQyxtREFBRCxDQUFoQixDQUE5QixDQUF6QjtBQUVBQyxnREFBUSxDQUFDQyxNQUFULENBQWdCLDJEQUFDLG9EQUFEO0FBQVUsT0FBSyxFQUFFTjtBQUFqQixHQUNkLDJEQUFDLCtDQUFELE9BRGMsQ0FBaEIsRUFFYU8sUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBRmIsRSxDQUtBO0FBQ0E7QUFDQTs7QUFDQUMseURBQUEsRzs7Ozs7Ozs7Ozs7QUNqQ0EsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUEsSUFBTUMsWUFBWSxHQUFHO0FBQ2pCekcsT0FBSyxFQUFFLEVBRFU7QUFFakI1RixRQUFNLEVBQUUsQ0FGUztBQUdqQnhCLFFBQU0sRUFBRTtBQUhTLENBQXJCO0FBTWUsMkVBQWtDO0FBQUEsTUFBakNjLEtBQWlDLHVFQUF6QitNLFlBQXlCO0FBQUEsTUFBWEMsTUFBVzs7QUFDN0MsVUFBUUEsTUFBTSxDQUFDM00sSUFBZjtBQUNJLFNBQUtDLHdEQUFMO0FBQ0ksK0JBQ09OLEtBRFA7QUFFSXNHLGFBQUssRUFBRTBHLE1BQU0sQ0FBQ2xPLElBQVAsQ0FBWXdILEtBRnZCO0FBR0k1RixjQUFNLEVBQUVzTSxNQUFNLENBQUNsTyxJQUFQLENBQVlnTCxNQUh4QjtBQUlJNUssY0FBTSxFQUFFO0FBSlo7O0FBTUosU0FBS29CLHNEQUFMO0FBQ0ksK0JBQ09OLEtBRFA7QUFFSXNHLGFBQUssRUFBRSxFQUZYO0FBR0k1RixjQUFNLEVBQUUsQ0FIWjtBQUlJeEIsY0FBTSxFQUFFO0FBSlo7O0FBTUosU0FBS29CLHdEQUFMO0FBQ0ksK0JBQ09OLEtBRFA7QUFFSVUsY0FBTSxFQUFFVixLQUFLLENBQUNVLE1BQU4sR0FBYXNNLE1BQU0sQ0FBQ3RNO0FBRmhDOztBQUlKO0FBQ0ksYUFBT1YsS0FBUDtBQXJCUjtBQXVCSCxDQXhCRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUVBLElBQU0rTSxZQUFZLEdBQUc7QUFDbkJ6RyxPQUFLLEVBQUUsRUFEWTtBQUVuQkMsVUFBUSxFQUFFLEVBRlM7QUFHbkJwRixPQUFLLEVBQUUsRUFIWTtBQUluQnFGLFNBQU8sRUFBRTtBQUpVLENBQXJCO0FBT2UsMkVBQWtDO0FBQUEsTUFBakN4RyxLQUFpQyx1RUFBekIrTSxZQUF5QjtBQUFBLE1BQVhDLE1BQVc7O0FBQy9DLFVBQVFBLE1BQU0sQ0FBQzNNLElBQWY7QUFDRSxTQUFLQyxzRUFBTDtBQUNFLCtCQUFXTixLQUFYLHNCQUFtQmdOLE1BQU0sQ0FBQ25NLElBQTFCLEVBQWlDbU0sTUFBTSxDQUFDak0sS0FBeEM7O0FBQ0YsU0FBS1QsaUVBQUw7QUFDRSwrQkFBV04sS0FBWDtBQUFrQm1CLGFBQUssRUFBRSxFQUF6QjtBQUE2QnFGLGVBQU8sRUFBRTtBQUF0Qzs7QUFDRixTQUFLbEcsK0RBQUw7QUFDRSwrQkFBV04sS0FBWDtBQUFrQm1CLGFBQUssRUFBRTZMLE1BQU0sQ0FBQzdMLEtBQWhDO0FBQXVDcUYsZUFBTyxFQUFDO0FBQS9DOztBQUNGLFNBQUtsRyxpRUFBTDtBQUNFLCtCQUFXTixLQUFYO0FBQWtCc0csYUFBSyxFQUFFLEVBQXpCO0FBQTZCQyxnQkFBUSxFQUFFLEVBQXZDO0FBQTJDQyxlQUFPLEVBQUM7QUFBbkQ7O0FBQ0Y7QUFDRSxhQUFPeEcsS0FBUDtBQVZKO0FBWUQsQ0FiRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUVBLElBQU0rTSxZQUFZLEdBQUc7QUFDbkIvQyxVQUFRLEVBQUUsRUFEUztBQUVuQkUsV0FBUyxFQUFFLEVBRlE7QUFHbkI1RCxPQUFLLEVBQUUsRUFIWTtBQUluQnlELGFBQVcsRUFBRSxFQUpNO0FBS25CckosUUFBTSxFQUFFLEVBTFc7QUFNbkI4RixTQUFPLEVBQUUsS0FOVTtBQU9uQnJGLE9BQUssRUFBRTtBQVBZLENBQXJCO0FBVWUsMkVBQWdDO0FBQUEsTUFBL0JuQixLQUErQix1RUFBekIrTSxZQUF5QjtBQUFBLE1BQVhDLE1BQVc7O0FBQzdDLFVBQVFBLE1BQU0sQ0FBQzNNLElBQWY7QUFDRSxTQUFLQyxpRkFBTDtBQUNFLCtCQUFXTixLQUFYLHNCQUFtQmdOLE1BQU0sQ0FBQ25NLElBQTFCLEVBQWlDbU0sTUFBTSxDQUFDak0sS0FBeEM7O0FBQ0YsU0FBS1QsMkVBQUw7QUFDRSwrQkFBV04sS0FBWDtBQUFrQmlOLGVBQU8sRUFBRUQsTUFBTSxDQUFDMUw7QUFBbEM7O0FBQ0YsU0FBS2hCLDRFQUFMO0FBQ0UsK0JBQVdOLEtBQVg7QUFBa0J3RyxlQUFPLEVBQUU7QUFBM0I7O0FBQ0YsU0FBS2xHLDBFQUFMO0FBQ0UsK0JBQVdOLEtBQVg7QUFBa0JtQixhQUFLLEVBQUU2TCxNQUFNLENBQUM3TCxLQUFoQztBQUF1Q3FGLGVBQU8sRUFBQztBQUEvQzs7QUFDRixTQUFLbEcsNEVBQUw7QUFDRSwrQkFBV04sS0FBWDtBQUFrQmdLLGdCQUFRLEVBQUUsRUFBNUI7QUFBZ0NFLGlCQUFTLEVBQUUsRUFBM0M7QUFBK0M1RCxhQUFLLEVBQUUsRUFBdEQ7QUFBMEQ1RixjQUFNLEVBQUUsRUFBbEU7QUFBc0VxSixtQkFBVyxFQUFFLEVBQW5GO0FBQXVGdkQsZUFBTyxFQUFDLEtBQS9GO0FBQXNHckYsYUFBSyxFQUFDO0FBQTVHOztBQUNGO0FBQ0UsYUFBT25CLEtBQVA7QUFaSjtBQWNELENBZkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFFQSxJQUFNK00sWUFBWSxHQUFHO0FBQ25CbEwsVUFBUSxFQUFFO0FBRFMsQ0FBckI7QUFJZSwyRUFBZ0M7QUFBQSxNQUEvQjdCLEtBQStCLHVFQUF6QitNLFlBQXlCO0FBQUEsTUFBWEMsTUFBVzs7QUFDN0MsVUFBUUEsTUFBTSxDQUFDM00sSUFBZjtBQUNFLFNBQUtDLDJEQUFMO0FBQ0UsK0JBQVdOLEtBQVg7QUFBa0I2QixnQkFBUSxFQUFFbUwsTUFBTSxDQUFDbkw7QUFBbkM7O0FBQ0Y7QUFDRSxhQUFPN0IsS0FBUDtBQUpKO0FBTUQsQ0FQRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUVBLElBQU0rTSxZQUFZLEdBQUc7QUFDbkIvQyxVQUFRLEVBQUUsRUFEUztBQUVuQjFELE9BQUssRUFBRSxFQUZZO0FBR25CQyxVQUFRLEVBQUUsRUFIUztBQUluQjBFLFdBQVMsRUFBRSxFQUpRO0FBS25CekUsU0FBTyxFQUFFLEtBTFU7QUFNbkJyRixPQUFLLEVBQUU7QUFOWSxDQUFyQjtBQVNlLDJFQUFrQztBQUFBLE1BQWpDbkIsS0FBaUMsdUVBQXpCK00sWUFBeUI7QUFBQSxNQUFYQyxNQUFXOztBQUMvQyxVQUFRQSxNQUFNLENBQUMzTSxJQUFmO0FBQ0UsU0FBS0MseUVBQUw7QUFDRSwrQkFBV04sS0FBWCxzQkFBbUJnTixNQUFNLENBQUNuTSxJQUExQixFQUFpQ21NLE1BQU0sQ0FBQ2pNLEtBQXhDOztBQUNGLFNBQUtULG9FQUFMO0FBQ0UsK0JBQVdOLEtBQVg7QUFBa0JtQixhQUFLLEVBQUMsRUFBeEI7QUFBNEJxRixlQUFPLEVBQUU7QUFBckM7O0FBQ0YsU0FBS2xHLGtFQUFMO0FBQ0UsK0JBQVdOLEtBQVg7QUFBa0JtQixhQUFLLEVBQUU2TCxNQUFNLENBQUM3TCxLQUFoQztBQUF1Q3FGLGVBQU8sRUFBQztBQUEvQzs7QUFDRixTQUFLbEcsb0VBQUw7QUFDRSwrQkFBV04sS0FBWDtBQUFrQmdLLGdCQUFRLEVBQUUsRUFBNUI7QUFBZ0MxRCxhQUFLLEVBQUUsRUFBdkM7QUFBMkNDLGdCQUFRLEVBQUUsRUFBckQ7QUFBeUQwRSxpQkFBUyxFQUFFLEVBQXBFO0FBQXdFOUosYUFBSyxFQUFFLEVBQS9FO0FBQW1GcUYsZUFBTyxFQUFFO0FBQTVGOztBQUNGO0FBQ0UsYUFBT3hHLEtBQVA7QUFWSjtBQVlELENBYkQsRTs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTXVNLFdBQVcsR0FBR1csNkRBQWUsQ0FBQztBQUNsQzlHLE9BQUssRUFBRStHLHFEQUQyQjtBQUVsQ25DLFVBQVEsRUFBRW9DLHdEQUZ3QjtBQUdsQ25ELGlCQUFlLEVBQUVvRCwrREFIaUI7QUFJbEN4TCxVQUFRLEVBQUV5TCx3REFKd0I7QUFLbENuTyxNQUFJLEVBQUVvTyxvREFMNEI7QUFNbEN0SyxPQUFLLEVBQUV1SyxxREFBWUE7QUFOZSxDQUFELENBQW5DO0FBU2VqQiwwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFFQSxJQUFNUSxZQUFZLEdBQUc7QUFDbkI5SixPQUFLLEVBQUU7QUFEWSxDQUFyQjtBQUllLDJFQUFpQztBQUFBLE1BQWhDakQsS0FBZ0MsdUVBQXpCK00sWUFBeUI7QUFBQSxNQUFYQyxNQUFXOztBQUM5QyxVQUFRQSxNQUFNLENBQUMzTSxJQUFmO0FBQ0UsU0FBS0Msd0RBQUw7QUFDRSwrQkFBV04sS0FBWDtBQUFrQmlELGFBQUssRUFBRStKLE1BQU0sQ0FBQy9KO0FBQWhDOztBQUNGLFNBQUszQywwREFBTDtBQUNFLFVBQU0yQyxLQUFLLEdBQUdqRCxLQUFLLENBQUNpRCxLQUFOLENBQVlxRyxNQUFaLENBQW1CLFVBQUFpQyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDL0IsRUFBTCxLQUFZd0QsTUFBTSxDQUFDN0osTUFBdkI7QUFBQSxPQUF2QixDQUFkO0FBQ0EsK0JBQVduRCxLQUFYO0FBQWtCaUQsYUFBSyxFQUFMQTtBQUFsQjs7QUFDRjtBQUNFLGFBQU9qRCxLQUFQO0FBUEo7QUFTRCxDQVZELEU7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU15TixXQUFXLEdBQUdDLE9BQU8sQ0FDekJ4QixNQUFNLENBQUN2RCxRQUFQLENBQWdCZ0YsUUFBaEIsS0FBNkIsV0FBN0IsSUFDRTtBQUNBekIsTUFBTSxDQUFDdkQsUUFBUCxDQUFnQmdGLFFBQWhCLEtBQTZCLE9BRi9CLElBR0U7QUFDQXpCLE1BQU0sQ0FBQ3ZELFFBQVAsQ0FBZ0JnRixRQUFoQixDQUF5QmpFLEtBQXpCLENBQ0Usd0RBREYsQ0FMdUIsQ0FBM0I7QUFVTyxTQUFTc0IsUUFBVCxDQUFrQjRDLE1BQWxCLEVBQTBCO0FBQy9CLE1BQUl4TyxLQUFKLEVBQTJFLGtCQThCMUU7QUFDRjs7QUFFRCxTQUFTeU8sZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0NGLE1BQWhDLEVBQXdDO0FBQ3RDRyxXQUFTLENBQUNqQixhQUFWLENBQ0c5QixRQURILENBQ1k4QyxLQURaLEVBRUdFLElBRkgsQ0FFUSxVQUFBQyxZQUFZLEVBQUk7QUFDcEJBLGdCQUFZLENBQUNDLGFBQWIsR0FBNkIsWUFBTTtBQUNqQyxVQUFNQyxnQkFBZ0IsR0FBR0YsWUFBWSxDQUFDRyxVQUF0Qzs7QUFDQSxVQUFJRCxnQkFBZ0IsSUFBSSxJQUF4QixFQUE4QjtBQUM1QjtBQUNEOztBQUNEQSxzQkFBZ0IsQ0FBQ0UsYUFBakIsR0FBaUMsWUFBTTtBQUNyQyxZQUFJRixnQkFBZ0IsQ0FBQ25PLEtBQWpCLEtBQTJCLFdBQS9CLEVBQTRDO0FBQzFDLGNBQUkrTixTQUFTLENBQUNqQixhQUFWLENBQXdCd0IsVUFBNUIsRUFBd0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0FDLG1CQUFPLENBQUNDLEdBQVIsQ0FDRSx3REFDRSw0REFGSixFQUpzQyxDQVN0Qzs7QUFDQSxnQkFBSVosTUFBTSxJQUFJQSxNQUFNLENBQUNhLFFBQXJCLEVBQStCO0FBQzdCYixvQkFBTSxDQUFDYSxRQUFQLENBQWdCUixZQUFoQjtBQUNEO0FBQ0YsV0FiRCxNQWFPO0FBQ0w7QUFDQTtBQUNBO0FBQ0FNLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxvQ0FBWixFQUpLLENBTUw7O0FBQ0EsZ0JBQUlaLE1BQU0sSUFBSUEsTUFBTSxDQUFDYyxTQUFyQixFQUFnQztBQUM5QmQsb0JBQU0sQ0FBQ2MsU0FBUCxDQUFpQlQsWUFBakI7QUFDRDtBQUNGO0FBQ0Y7QUFDRixPQTNCRDtBQTRCRCxLQWpDRDtBQWtDRCxHQXJDSCxXQXNDUyxVQUFBOU0sS0FBSyxFQUFJO0FBQ2RvTixXQUFPLENBQUNwTixLQUFSLENBQWMsMkNBQWQsRUFBMkRBLEtBQTNEO0FBQ0QsR0F4Q0g7QUF5Q0Q7O0FBRUQsU0FBU3dOLHVCQUFULENBQWlDYixLQUFqQyxFQUF3Q0YsTUFBeEMsRUFBZ0Q7QUFDOUM7QUFDQWdCLE9BQUssQ0FBQ2QsS0FBRCxDQUFMLENBQ0dFLElBREgsQ0FDUSxVQUFBaEMsUUFBUSxFQUFJO0FBQ2hCO0FBQ0EsUUFBTTZDLFdBQVcsR0FBRzdDLFFBQVEsQ0FBQ0wsT0FBVCxDQUFpQm1ELEdBQWpCLENBQXFCLGNBQXJCLENBQXBCOztBQUNBLFFBQ0U5QyxRQUFRLENBQUMrQyxNQUFULEtBQW9CLEdBQXBCLElBQ0NGLFdBQVcsSUFBSSxJQUFmLElBQXVCQSxXQUFXLENBQUNHLE9BQVosQ0FBb0IsWUFBcEIsTUFBc0MsQ0FBQyxDQUZqRSxFQUdFO0FBQ0E7QUFDQWpCLGVBQVMsQ0FBQ2pCLGFBQVYsQ0FBd0JtQyxLQUF4QixDQUE4QmpCLElBQTlCLENBQW1DLFVBQUFDLFlBQVksRUFBSTtBQUNqREEsb0JBQVksQ0FBQ2lCLFVBQWIsR0FBMEJsQixJQUExQixDQUErQixZQUFNO0FBQ25DOUIsZ0JBQU0sQ0FBQ3ZELFFBQVAsQ0FBZ0J3RyxNQUFoQjtBQUNELFNBRkQ7QUFHRCxPQUpEO0FBS0QsS0FWRCxNQVVPO0FBQ0w7QUFDQXRCLHFCQUFlLENBQUNDLEtBQUQsRUFBUUYsTUFBUixDQUFmO0FBQ0Q7QUFDRixHQWxCSCxXQW1CUyxZQUFNO0FBQ1hXLFdBQU8sQ0FBQ0MsR0FBUixDQUNFLCtEQURGO0FBR0QsR0F2Qkg7QUF3QkQ7O0FBRU0sU0FBU1UsVUFBVCxHQUFzQjtBQUMzQixNQUFJLG1CQUFtQm5CLFNBQXZCLEVBQWtDO0FBQ2hDQSxhQUFTLENBQUNqQixhQUFWLENBQXdCbUMsS0FBeEIsQ0FBOEJqQixJQUE5QixDQUFtQyxVQUFBQyxZQUFZLEVBQUk7QUFDakRBLGtCQUFZLENBQUNpQixVQUFiO0FBQ0QsS0FGRDtBQUdEO0FBQ0YsQzs7Ozs7Ozs7Ozs7O0FDdElEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxTQUFTblEsYUFBVCxHQUF5QjtBQUM5QixNQUFNRCxJQUFJLEdBQUdzUSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsaUJBQXJCLENBQWI7QUFDQSxTQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV3pRLElBQVgsQ0FBUDtBQUNEO0FBRU0sU0FBUzBRLFdBQVQsQ0FBcUIxUSxJQUFyQixFQUEyQjtBQUNoQ3NRLGNBQVksQ0FBQ0ssT0FBYixDQUFxQixpQkFBckIsRUFBd0NILElBQUksQ0FBQ0ksU0FBTCxDQUFlNVEsSUFBZixDQUF4QztBQUNBO0FBQ0Q7QUFFTSxTQUFTNlEsb0JBQVQsQ0FBOEJqUCxNQUE5QixFQUFzQztBQUMzQyxNQUFNNUIsSUFBSSxHQUFHd1EsSUFBSSxDQUFDQyxLQUFMLENBQVdILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixpQkFBckIsQ0FBWCxDQUFiO0FBQ0F2USxNQUFJLENBQUNnTCxNQUFMLEdBQWNoTCxJQUFJLENBQUNnTCxNQUFMLEdBQWNwSixNQUE1QjtBQUNBME8sY0FBWSxDQUFDSyxPQUFiLENBQXFCLGlCQUFyQixFQUF3Q0gsSUFBSSxDQUFDSSxTQUFMLENBQWU1USxJQUFmLENBQXhDO0FBQ0E7QUFDRDtBQUVNLFNBQVM4USxnQkFBVCxHQUE0QjtBQUNqQ1IsY0FBWSxDQUFDUyxVQUFiLENBQXdCLGlCQUF4QjtBQUNBO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDcEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTWhGLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxTQUFNLFVBQUMzSyxRQUFELEVBQWM7QUFDaEQsUUFBTTRQLFdBQVcsR0FBR3JFLDRDQUFLLENBQ3BCcUQsR0FEZSxDQUNYLGNBRFcsRUFFakJkLElBRmlCLENBRVosVUFBQytCLEdBQUQ7QUFBQSxhQUFTN1AsUUFBUSxDQUFDMEIsMkVBQVcsQ0FBQ21PLEdBQUcsQ0FBQ0MsSUFBTCxDQUFaLENBQWpCO0FBQUEsS0FGWSxXQUdYLFVBQUM3TyxLQUFEO0FBQUEsYUFBV29OLE9BQU8sQ0FBQ0MsR0FBUixDQUFZck4sS0FBWixDQUFYO0FBQUEsS0FIVyxDQUFwQjtBQUlBLFdBQU8yTyxXQUFQO0FBQ0QsR0FONkI7QUFBQSxDQUF2QixDOzs7Ozs7Ozs7Ozs7QUNIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU03TSxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLFNBQU0sVUFBQy9DLFFBQUQsRUFBYztBQUN2Q3VMLGdEQUFLLENBQUNxRCxHQUFOLENBQVUsaUJBQVYsRUFDS2QsSUFETCxDQUNVLFVBQUErQixHQUFHLEVBQUk7QUFDWDdQLGNBQVEsQ0FBQzhDLHNFQUFRLENBQUMrTSxHQUFHLENBQUNDLElBQUwsQ0FBVCxDQUFSO0FBQ0QsS0FITCxXQUlXLFVBQUE3TyxLQUFLO0FBQUEsYUFBSW9OLE9BQU8sQ0FBQ0MsR0FBUixDQUFZck4sS0FBWixDQUFKO0FBQUEsS0FKaEI7QUFLQSxXQUFPLElBQVA7QUFDRCxHQVBvQjtBQUFBLENBQWQsQzs7Ozs7Ozs7Ozs7O0FDSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1nRixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDckgsSUFBRCxFQUFPdUgsT0FBUDtBQUFBLFNBQW1CLFVBQUNuRyxRQUFELEVBQWM7QUFDM0RBLFlBQVEsQ0FBQzZHLG1FQUFBLEVBQUQsQ0FBUjs7QUFDQSxRQUFHakksSUFBSSxDQUFDd0gsS0FBTCxLQUFlLEVBQWYsSUFBcUJ4SCxJQUFJLENBQUN5SCxRQUFMLEtBQWtCLEVBQTFDLEVBQStDO0FBQzdDLGFBQU9yRyxRQUFRLENBQUM2RyxzRUFBQSxDQUF5QixvQkFBekIsQ0FBRCxDQUFmO0FBQ0Q7O0FBQ0QsUUFBTWtKLFNBQVMsR0FBSTtBQUNmLGtCQUFZO0FBQ1IsdUJBQWU7QUFDWCxtQkFBU25SLElBQUksQ0FBQ3dILEtBREg7QUFFWCxzQkFBWXhILElBQUksQ0FBQ3lIO0FBRk47QUFEUDtBQURHLEtBQW5CO0FBUUFrRixnREFBSyxDQUFDRyxJQUFOLENBQVcscUJBQVgsRUFBa0NxRSxTQUFsQyxFQUNLakMsSUFETCxDQUNVLFVBQUErQixHQUFHLEVBQUc7QUFDVlAsMEVBQVcsQ0FBQ08sR0FBRyxDQUFDQyxJQUFMLENBQVg7QUFDQTlQLGNBQVEsQ0FBQ0MscUVBQVEsQ0FBQzRQLEdBQUcsQ0FBQ0MsSUFBTCxDQUFULENBQVI7QUFDQTlQLGNBQVEsQ0FBQzZHLHdFQUFBLENBQTJCakksSUFBM0IsQ0FBRCxDQUFSO0FBQ0F1SCxhQUFPLENBQUM2SixJQUFSLENBQWEsR0FBYjtBQUNELEtBTkwsV0FPVyxVQUFBQyxHQUFHLEVBQUk7QUFDVmpRLGNBQVEsQ0FBQzZHLHNFQUFBLENBQXlCb0osR0FBRyxDQUFDbkUsUUFBSixDQUFhZ0UsSUFBYixDQUFrQjdPLEtBQWxCLEdBQTBCZ1AsR0FBRyxDQUFDbkUsUUFBSixDQUFhZ0UsSUFBYixDQUFrQjdPLEtBQTVDLEdBQ2xDLHNDQURTLENBQUQsQ0FBUjtBQUVELEtBVlA7QUFZRCxHQXpCMkI7QUFBQSxDQUFyQixDOzs7Ozs7Ozs7Ozs7QUNMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNaVAsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQy9KLE9BQUQ7QUFBQSxTQUFhLFVBQUNuRyxRQUFELEVBQWM7QUFDakR1TCxnREFBSyxDQUFDcUQsR0FBTixDQUFVLHNCQUFWLEVBQ0tkLElBREwsQ0FDVSxVQUFBK0IsR0FBRyxFQUFJO0FBQ1hILCtFQUFnQjtBQUNoQjFQLGNBQVEsQ0FBQzZHLDJEQUFBLEVBQUQsQ0FBUjtBQUNBVixhQUFPLENBQUM2SixJQUFSLENBQWEsR0FBYjtBQUNELEtBTEwsV0FNVyxVQUFBQyxHQUFHO0FBQUEsYUFBSTVCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZMkIsR0FBWixDQUFKO0FBQUEsS0FOZDtBQU9BLFdBQU8sSUFBUDtBQUNELEdBVHVCO0FBQUEsQ0FBakIsQzs7Ozs7Ozs7Ozs7O0FDSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNek8sMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUE4QixDQUFDQyxXQUFELEVBQWMwRSxPQUFkLEVBQXVCQyxLQUF2QjtBQUFBLFNBQWlDLFVBQUNwRyxRQUFELEVBQWM7QUFFeEZBLFlBQVEsQ0FBQzZHLDRGQUFBLEVBQUQsQ0FBUjs7QUFDQSxRQUFHcEYsV0FBVyxDQUFDcUksUUFBWixLQUF5QixFQUF6QixJQUErQnJJLFdBQVcsQ0FBQ3VJLFNBQVosS0FBMEIsRUFBekQsSUFDSHZJLFdBQVcsQ0FBQ29JLFdBQVosS0FBNEIsRUFEekIsSUFDK0JwSSxXQUFXLENBQUNqQixNQUFaLEtBQXVCLEVBRHpELEVBQzhEO0FBQzVELGFBQU9SLFFBQVEsQ0FBQzZHLDBGQUFBLENBQW1DLHdCQUFuQyxDQUFELENBQWY7QUFDRDs7QUFDRCxRQUFNc0osYUFBYSxHQUFHQyw2Q0FBTSxDQUFDM08sV0FBVyxDQUFDc0wsT0FBYixDQUFOLENBQTRCc0QsTUFBNUIsQ0FBbUMsWUFBbkMsQ0FBdEI7QUFFQSxRQUFNQyxJQUFJLEdBQUdsQixJQUFJLENBQUNJLFNBQUwsQ0FBZTtBQUMxQixlQUFTL04sV0FBVyxDQUFDdUksU0FESztBQUUxQixxQkFBZXZJLFdBQVcsQ0FBQ29JLFdBRkQ7QUFHMUIsZ0JBQVVwSSxXQUFXLENBQUNqQixNQUhJO0FBSTFCLGVBQVM0RjtBQUppQixLQUFmLENBQWI7QUFNQW1GLGdEQUFLLENBQ0FHLElBREwsQ0FDVSxZQURWLEVBQ3VCNEUsSUFEdkIsRUFFR3hDLElBRkgsQ0FFUSxVQUFBK0IsR0FBRyxFQUFFO0FBQ1Q3UCxjQUFRLENBQUM2RywyRkFBQSxDQUFvQ2dKLEdBQXBDLENBQUQsQ0FBUjtBQUNBMUosYUFBTyxDQUFDNkosSUFBUixDQUFhLFdBQWI7QUFDRCxLQUxILFdBTVMsVUFBQS9PLEtBQUssRUFBSTtBQUNkakIsY0FBUSxDQUFDNkcsMEZBQUEsQ0FBbUMsdUNBQW5DLENBQUQsQ0FBUjtBQUNBd0gsYUFBTyxDQUFDQyxHQUFSLENBQVlyTixLQUFaO0FBQ0QsS0FUSDtBQVdELEdBMUIwQztBQUFBLENBQXBDLEM7Ozs7Ozs7Ozs7OztBQ0xQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNK0osb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDcE0sSUFBRCxFQUFPdUgsT0FBUDtBQUFBLFNBQW1CLFVBQUNuRyxRQUFELEVBQWM7QUFDbkVBLFlBQVEsQ0FBQzZHLHNFQUFBLEVBQUQsQ0FBUjs7QUFDQSxRQUFHakksSUFBSSxDQUFDa0wsUUFBTCxLQUFrQixFQUFsQixJQUF3QmxMLElBQUksQ0FBQ3dILEtBQUwsS0FBZSxFQUF2QyxJQUE2Q3hILElBQUksQ0FBQ3lILFFBQUwsS0FBa0IsRUFBL0QsSUFBcUV6SCxJQUFJLENBQUNtTSxTQUFMLEtBQW1CLEVBQTNGLEVBQStGO0FBQzdGLGFBQU8vSyxRQUFRLENBQUM2Ryw0RUFBQSxDQUE0QixvQkFBNUIsQ0FBRCxDQUFmO0FBQ0Q7O0FBQ0QsUUFBR2pJLElBQUksQ0FBQ3lILFFBQUwsS0FBa0J6SCxJQUFJLENBQUNtTSxTQUExQixFQUFxQztBQUNuQyxhQUFPL0ssUUFBUSxDQUFDNkcsNEVBQUEsQ0FBNEIsMEJBQTVCLENBQUQsQ0FBZjtBQUNEOztBQUNELFFBQUdqSSxJQUFJLENBQUN5SCxRQUFMLENBQWNrRSxNQUFkLEdBQXVCLENBQTFCLEVBQTZCO0FBQzNCLGFBQU92SyxRQUFRLENBQUM2Ryw0RUFBQSxDQUE0Qiw4Q0FBNUIsQ0FBRCxDQUFmO0FBQ0Q7O0FBQ0QsUUFBTTBKLFlBQVksR0FBRztBQUNuQm5LLFdBQUssRUFBRXhILElBQUksQ0FBQ3dILEtBRE87QUFFbkJDLGNBQVEsRUFBRXpILElBQUksQ0FBQ3lIO0FBRkksS0FBckI7QUFLQWtGLGdEQUFLLENBQUNHLElBQU4sQ0FBVyx3QkFBWCxFQUFxQzZFLFlBQXJDLEVBQ0t6QyxJQURMLENBQ1UsVUFBQStCLEdBQUcsRUFBRztBQUNWUCwwRUFBVyxDQUFDTyxHQUFHLENBQUNDLElBQUwsQ0FBWDtBQUNBOVAsY0FBUSxDQUFDQyxxRUFBUSxDQUFDNFAsR0FBRyxDQUFDQyxJQUFMLENBQVQsQ0FBUjtBQUNBOVAsY0FBUSxDQUFDNkcsOEVBQUEsQ0FBOEIwSixZQUE5QixDQUFELENBQVI7QUFDQXBLLGFBQU8sQ0FBQzZKLElBQVIsQ0FBYSxHQUFiO0FBQ0QsS0FOTCxXQU9XLFVBQUFDLEdBQUcsRUFBSTtBQUNSalEsY0FBUSxDQUFDNkcsNEVBQUEsQ0FBNEJvSixHQUFHLENBQUNuRSxRQUFKLENBQWFnRSxJQUFiLENBQWtCVSxNQUFsQixDQUF5QkMsUUFBekIsQ0FBa0NySyxLQUFsQyxDQUF3Q29LLE1BQXhDLEdBQ2pDUCxHQUFHLENBQUNuRSxRQUFKLENBQWFnRSxJQUFiLENBQWtCVSxNQUFsQixDQUF5QkMsUUFBekIsQ0FBa0NySyxLQUFsQyxDQUF3Q29LLE1BRFAsR0FFL0IsdUNBRkcsQ0FBRCxDQUFSO0FBR0QsS0FYVDtBQWNELEdBOUJtQztBQUFBLENBQTdCLEM7Ozs7Ozs7Ozs7OztBQ0xQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTWxGLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNvRixNQUFEO0FBQUEsU0FBWSxVQUFDMVEsUUFBRCxFQUFjO0FBQzlDdUwsZ0RBQUssVUFBTCxxQkFBMEJtRixNQUExQixHQUNLNUMsSUFETCxDQUNVLFVBQUErQixHQUFHLEVBQUk7QUFDWDdQLGNBQVEsQ0FBQ2dELHdFQUFVLENBQUMwTixNQUFELENBQVgsQ0FBUjtBQUNELEtBSEwsV0FJVyxVQUFBelAsS0FBSztBQUFBLGFBQUlvTixPQUFPLENBQUNDLEdBQVIsQ0FBWXJOLEtBQVosQ0FBSjtBQUFBLEtBSmhCO0FBS0EsV0FBTyxJQUFQO0FBQ0QsR0FQcUI7QUFBQSxDQUFmLEM7Ozs7Ozs7Ozs7OztBQ0hQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNNEosTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0QsU0FBRCxFQUFZcEssTUFBWjtBQUFBLFNBQXVCLFVBQUNSLFFBQUQsRUFBYztBQUN6RHVMLGdEQUFLLENBQUNHLElBQU4sQ0FBVyxXQUFYLEVBQXdCO0FBQ3RCaUYsV0FBSyxFQUFFL0YsU0FEZTtBQUV0QnBLLFlBQU0sRUFBRUE7QUFGYyxLQUF4QixFQUdHc04sSUFISCxDQUdRLFVBQUErQixHQUFHLEVBQUU7QUFDWEosbUZBQW9CLENBQUNqUCxNQUFELENBQXBCO0FBQ0FSLGNBQVEsQ0FBQzJLLG1FQUFjLEVBQWYsQ0FBUjtBQUNBM0ssY0FBUSxDQUFDTyxxRUFBUSxDQUFDQyxNQUFELENBQVQsQ0FBUjtBQUNELEtBUEQsV0FPUyxVQUFBeVAsR0FBRztBQUFBLGFBQUc1QixPQUFPLENBQUNDLEdBQVIsQ0FBWTJCLEdBQVosQ0FBSDtBQUFBLEtBUFo7QUFTQSxXQUFPLElBQVA7QUFDRCxHQVhxQjtBQUFBLENBQWYsQzs7Ozs7Ozs7Ozs7QUNMUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBCcm93c2VyUm91dGVyLFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7Z2V0VXNlckZyb21MU30gZnJvbSAnLi9zdG9yYWdlL3N0b3JhZ2UnO1xuaW1wb3J0IHthdXRoVXNlcn0gZnJvbSAnLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lL0hvbWUnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhcic7XG5pbXBvcnQgUHJvamVjdHNMaXN0IGZyb20gICcuL2NvbXBvbmVudHMvUHJvamVjdHNMaXN0L1Byb2plY3RzTGlzdCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9jb21wb25lbnRzL0xvZ2luL0xvZ2luJztcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL2NvbXBvbmVudHMvUmVnaXN0ZXIvUmVnaXN0ZXInO1xuaW1wb3J0IFByb2plY3RSZWdpc3RyYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3RSZWdpc3RyYXRpb24vUHJvamVjdFJlZ2lzdHJhdGlvbic7XG5pbXBvcnQgUHJvamVjdEluZm8gZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3RJbmZvL1Byb2plY3RJbmZvJztcbmltcG9ydCBVc2VyIGZyb20gJy4vY29tcG9uZW50cy9Vc2VyL1VzZXInO1xuaW1wb3J0IEFib3V0IGZyb20gJy4vY29tcG9uZW50cy9BYm91dC9hYm91dCc7XG5cblxuXG5jbGFzcyBSb3V0ZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB1c2VyID0gZ2V0VXNlckZyb21MUygpO1xuICAgIHVzZXIgPyB0aGlzLnByb3BzLm9uTG9hZEF1dGgodXNlcikgOiBudWxsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2lzQXV0aH0gPXRoaXMucHJvcHMuYXV0aFxuICAgIHJldHVybiAoXG4gICAgICA8QnJvd3NlclJvdXRlciBiYXNlbmFtZT17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0+XG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIGNvbXBvbmVudD17SG9tZX0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9hYm91dCcgY29tcG9uZW50PXtBYm91dH0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9wcm9qZWN0cycgY29tcG9uZW50PXtQcm9qZWN0c0xpc3R9Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvbG9naW4nIGNvbXBvbmVudD17TG9naW59Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvcmVnaXN0ZXInIGNvbXBvbmVudD17UmVnaXN0ZXJ9Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvdXNlcicgY29tcG9uZW50PXtVc2VyfSAvPmdcbiAgICAgICAgICAgIHtpc0F1dGggPyA8Um91dGUgcGF0aD0nL3Byb2plY3QtcmVnaXN0cmF0aW9uJyBjb21wb25lbnQ9e1Byb2plY3RSZWdpc3RyYXRpb259Lz4gOiA8UmVkaXJlY3QgdG89Jy9sb2dpbicvPn1cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvYWRtaW4nIC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL3Byb2plY3QvOmlkJyBjb21wb25lbnQ9e1Byb2plY3RJbmZvfS8+XG5cbiAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGF1dGg6IHN0YXRlLmF1dGhcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIG9uTG9hZEF1dGg6ICh1c2VyKSA9PiBkaXNwYXRjaChhdXRoVXNlcih1c2VyKSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFJvdXRlcyk7XG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhVc2VyKHVzZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5BVVRIX1VTRVIsXG4gICAgICAgIHVzZXJcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuTE9HX09VVFxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZvdGVVc2VyKGFtb3VudCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlZPVEVfVVNFUixcbiAgICAgICAgYW1vdW50XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gb25JbnB1dENoYW5nZShlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuTE9HSU5fRk9STV9JTlBVVF9DSEFOR0UsXG4gICAgbmFtZTogZS50YXJnZXQubmFtZSxcbiAgICB2YWx1ZTogZS50YXJnZXQudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Gb3JtTG9hZGluZygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5MT0dJTl9GT1JNX0xPQURJTkdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Mb2dpbkZvcm1FcnJvcihlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLkxPR0lOX0ZPUk1fRVJST1IsXG4gICAgZXJyb3JcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Mb2dpbkZvcm1TdWNjZXNzKHVzZXIpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOnR5cGVzLkxPR0lOX0ZPUk1fU1VDQ0VTUyxcbiAgICB1c2VyXG4gIH1cbn0iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uSW5wdXRDaGFuZ2UoZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UsXG4gICAgbmFtZTogZS50YXJnZXQubmFtZSxcbiAgICB2YWx1ZTogZS50YXJnZXQudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25EYXRlQ2hhbmdlKGRhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0RBVEVfQ0hBTkdFLFxuICAgIGRhdGVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Qcm9qZWN0UmVnaXN0ZXJGb3JtTG9hZGluZygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fTE9BRElOR1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblByb2plY3RSZWdpc3RlckZvcm1FcnJvcihlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9FUlJPUixcbiAgICBlcnJvclxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblByb2plY3RSZWdpc3RlckZvcm1TdWJtaXQocHJvamVjdEluZm8pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fU1VDQ0VTUyxcbiAgICBwcm9qZWN0SW5mb1xuICB9XG59IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0cyhwcm9qZWN0cykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLkdFVF9QUk9KRUNUUyxcbiAgICBwcm9qZWN0c1xuICB9XG59IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbklucHV0Q2hhbmdlKGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5SRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRSxcbiAgICBuYW1lOiBlLnRhcmdldC5uYW1lLFxuICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkZvcm1Mb2FkaW5nKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlJFR0lTVEVSX0ZPUk1fTE9BRElOR1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblJlZ2lzdGVyRm9ybUVycm9yKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuUkVHSVNURVJfRk9STV9FUlJPUixcbiAgICBlcnJvclxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblJlZ2lzdGVyRm9ybVN1Y2Nlc3ModXNlcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6dHlwZXMuUkVHSVNURVJfRk9STV9TVUNDRVNTLFxuICAgIHVzZXJcbiAgfVxufSIsIi8vIExvZ2luIHR5cGVzXG5cbmV4cG9ydCBjb25zdCBMT0dJTl9GT1JNX0lOUFVUX0NIQU5HRSA9ICdMT0dJTl9GT1JNX0lOUFVUX0NIQU5HRSc7XG5leHBvcnQgY29uc3QgTE9HSU5fRk9STV9MT0FESU5HID0gJ0xPR0lOX0ZPUk1fTE9BRElORyc7XG5leHBvcnQgY29uc3QgTE9HSU5fRk9STV9FUlJPUiA9ICdMT0dJTl9GT1JNX0VSUk9SJztcbmV4cG9ydCBjb25zdCBMT0dJTl9GT1JNX1NVQ0NFU1MgPSAnTE9HSU5fRk9STV9TVUNDRVNTJztcblxuLy8gUmVnaXN0ZXIgdHlwZXNcblxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFID0gJ1JFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9GT1JNX0xPQURJTkcgPSAnUkVHSVNURVJfRk9STV9MT0FESU5HJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9GT1JNX0VSUk9SID0gJ1JFR0lTVEVSX0ZPUk1fRVJST1InO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZPUk1fU1VDQ0VTUyA9ICdSRUdJU1RFUl9GT1JNX1NVQ0NFU1MnO1xuXG4vLyBQcm9qZWN0IFJlZ2lzdGVyIHR5cGVzXG5cbmV4cG9ydCBjb25zdCBQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFID0gJ1BST0pFQ1RfUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UnO1xuZXhwb3J0IGNvbnN0IFBST0pFQ1RfUkVHSVNURVJfREFURV9DSEFOR0UgPSAnUFJPSkVDVF9SRUdJU1RFUl9EQVRFX0NIQU5HRSc7XG5leHBvcnQgY29uc3QgUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0xPQURJTkcgPSAnUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0xPQURJTkcnO1xuZXhwb3J0IGNvbnN0IFBST0pFQ1RfUkVHSVNURVJfRk9STV9FUlJPUiA9ICdQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fRVJST1InO1xuZXhwb3J0IGNvbnN0IFBST0pFQ1RfUkVHSVNURVJfRk9STV9TVUNDRVNTID0gJ1BST0pFQ1RfUkVHSVNURVJfRk9STV9TVUNDRVNTJztcblxuLy8gUHJvamVjdHMgdHlwZXNcblxuZXhwb3J0IGNvbnN0IEdFVF9QUk9KRUNUUyA9ICdHRVRfUFJPSkVDVFMnO1xuXG4vLyBBdXRoIHR5cGVzXG5cbmV4cG9ydCBjb25zdCBBVVRIX1VTRVIgPSAnQVVUSF9VU0VSJztcbmV4cG9ydCBjb25zdCBMT0dfT1VUID0gJ0xPR19PVVQnO1xuZXhwb3J0IGNvbnN0IFZPVEVfVVNFUiA9ICdWT1RFX1VTRVInO1xuXG4vLyBWb3RlIHR5cGVzXG5cbmV4cG9ydCBjb25zdCBHRVRfVk9URVMgPSAnR0VUX1ZPVEVTJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfVk9URSA9ICdSRU1PVkVfVk9URSc7IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWb3Rlcyh2b3Rlcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLkdFVF9WT1RFUyxcbiAgICB2b3Rlc1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVWb3RlKHZvdGVJRCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlJFTU9WRV9WT1RFLFxuICAgIHZvdGVJRFxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9hYm91dC5zY3NzJztcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvZXMvUGFwZXIvUGFwZXJcIjtcbmNvbnN0IGFib3V0ID0gKCApID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPVwicGFwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdIZWFkaW5nJz5Ib2JieUNyYWZ0IFRlYW08L2Rpdj5cbiAgICAgICAgPC9QYXBlcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCAnLi9Ib21lLnNjc3MnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBNdWlUaGVtZVByb3ZpZGVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgIG1haW46ICcjRUE3OTI1JyxcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnI2ZmZmZmZicsXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG5jb25zdCBIb21lID0gKCApID0+IHtcbiAgcmV0dXJuIChcbiAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lLWZsb2F0TGVmdCc+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImgzXCJcbiAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICAgIGFsaWduPVwiTGVmdFwiXG4gICAgICAgICAgICAgICAgPkEgTmV3IGFuZCBCZXR0ZXIgd2F5IHRvIGVuZ2FuZ2U8YnIvPlxuICAgICAgICAgICAgICAgIGFuZCByZXRhaW4gZW1wbG95ZWVzXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic3ViaGVhZGluZ1wiXG4gICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgYWxpZ249XCJMZWZ0XCJcbiAgICAgICAgICAgID5Db21wYW5pZXMgdXNlIEhvYmJ5Q3JhZnQgdG8gb3JnYW5pemUgdGhlaXI8YnIvPlxuICAgICAgICAgICAgICAgIGVtcGxveWVlcyBob2JieSBidWRnZXQsIGl0cyBhIHBlcmZlY3Q8YnIvPlxuICAgICAgICAgICAgICAgIGludGVybmFsIGNyb3VkIGZ1bmRpbmcgc3lzdGVtIGZvciB5b3UgIVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICB0bz0nL2xvZ2luJ1xuICAgICAgICAgID48VHlwb2dyYXBoeSBjb2xvcj1cInNlY29uZGFyeVwiID5HZXQgU3RhcnRlZDwvVHlwb2dyYXBoeT48L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL2xvYWRlci5zY3NzJztcblxuY29uc3QgTG9hZGVyID0gKHtjb2xvcixoPTQwfSkgPT4gKFxuICA8ZGl2XG4gICAgc3R5bGU9e3tcbiAgICAgIHdpZHRoOmgrJ3B4JyxcbiAgICAgIGhlaWdodDpoKydweCcsXG4gICAgICBib3JkZXJSaWdodDpgJHtoLzZ9cHggc29saWQgdHJhbnNwYXJlbnRgLFxuICAgICAgYm9yZGVyTGVmdDpgJHtoLzZ9cHggc29saWQgdHJhbnNwYXJlbnRgLFxuICAgICAgYm9yZGVyVG9wOmAke2gvNn1weCBzb2xpZCAke2NvbG9yfWAsXG4gICAgICBib3JkZXJCb3R0b206YCR7aC82fXB4IHNvbGlkICR7Y29sb3J9YCxcbiAgICB9fVxuICAgIGNsYXNzTmFtZT17YExvYWRlciAke2NvbG9yfWB9Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL2xvZ2luQWN0aW9ucyc7XG5pbXBvcnQgeyBvbkZvcm1TdWJtaXQgfSBmcm9tICcuLi8uLi90aHVua3MvbG9naW5UaHVuayc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlci9Mb2FkZXInO1xuaW1wb3J0ICcuL0xvZ2luLnNjc3MnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xuaW1wb3J0IHtjcmVhdGVNdWlUaGVtZSwgTXVpVGhlbWVQcm92aWRlciwgd2l0aFN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xuaW1wb3J0IEVycm9ySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXJyb3InO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IExvY2tPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvY2tPdXRsaW5lZCc7XG5cblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gICAgcGFsZXR0ZToge1xuICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgbWFpbjogJyMwMDQ0ZmYnLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgbWFpbjogJyNmZmZmZmYnLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgICBtYWluOiB7XG4gICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoNDAwICsgdGhlbWUuc3BhY2luZy51bml0ICogMyAqIDIpXToge1xuICAgICAgICAgICAgd2lkdGg6IDQwMCxcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBwYXBlcjoge1xuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDgsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAyfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weCAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDN9cHhgLFxuICAgIH0sXG4gICAgYXZhdGFyOiB7XG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZy51bml0LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRUE3OTI1JyxcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgfSxcbiAgICB0ZXh0RmllbGQ6IHtcbiAgICAgICAgaGVpZ2h0OiA1MCxcbiAgICB9LFxuICAgIHN1Ym1pdDoge1xuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgICAgIGhlaWdodDogNTAsXG4gICAgfSxcbiAgICByb290OiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgICAgZm9udFNpemU6MjAsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgICB9LFxuICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB9LFxufSk7XG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgfTtcblxuICAgIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlQ2xvc2UgPSAoZXZlbnQsIHJlYXNvbikgPT4ge1xuICAgICAgICBpZiAocmVhc29uID09PSAnY2xpY2thd2F5Jykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgICB9O1xuXG5cbiAgICBvbkZvcm1TdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucHJvcHMub25Gb3JtU3VibWl0KHRoaXMucHJvcHMubG9naW4sIHRoaXMucHJvcHMuaGlzdG9yeSlcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBsb2FkaW5nIH0gPSB0aGlzLnByb3BzLmxvZ2luXG4gICAgICAgIGNvbnN0IHtvbklucHV0Q2hhbmdlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9ja091dGxpbmVkSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yID8gPFNuYWNrYmFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MzAwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRlbnRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6ICdtZXNzYWdlLWlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5yb290XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXs8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgICAgIDxFcnJvckljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25Gb3JtU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyA8TG9hZGVyIGNvbG9yPXsnI2ZmZid9IGg9ezE1fSAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cImVycm9yXCIgPlNpZ24gSW48L1R5cG9ncmFwaHk+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzdWJoZWFkaW5nXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgSWYgeW91IGRvbid0IGhhdmUgYW4gYWNjb3VudCwgcGxlYXNleycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz0nL1JlZ2lzdGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9naW46IHN0YXRlLmxvZ2luXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgb25JbnB1dENoYW5nZTogKGUpID0+IGRpc3BhdGNoKGFjdGlvbnMub25JbnB1dENoYW5nZShlKSksXG4gICAgb25Gb3JtU3VibWl0OiAodXNlciwgaGlzdG9yeSkgPT5kaXNwYXRjaChvbkZvcm1TdWJtaXQodXNlcixoaXN0b3J5KSksXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFN0eWxlcyhzdHlsZXMpKExvZ2luKSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge05hdkxpbmsgYXMgUm91dGVyTGlua05hdiwgTGluayBhcyBSb3V0ZXJMaW5rLCB3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQge3dpdGhTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge011aVRoZW1lUHJvdmlkZXIsIGNyZWF0ZU11aVRoZW1lfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtvbkxvZ091dCBhcyBMb2dvdXR9IGZyb20gJy4uLy4uL3RodW5rcy9sb2dvdXRUaHVuayc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6e1xuICAgICAgbWFpbjogJyNmZmZmZmYnLFxuICAgIH1cbiAgfSxcbn0pO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9LFxuICBtZW51YmFyOiB7XG4gICAgcG9zaXRpb246IFwic3RhdGljXCIsXG4gICAgYmFja2dyb3VuZDogXCIjMTgxODE4XCIsXG5cbiAgfSxcbiAgZ3Jvdzoge1xuICAgIGZsZXhHcm93OiAxLFxuICAgIGFsaWduOiAnY2VudGVyJyxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIH0sXG4gIH0sXG4gIHNlY3Rpb25EZXNrdG9wOiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgfSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgY29sb3I6ICcjQTRBNEE0JyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICBtYXJnaW46ICdhdXRvJyxcbiAgICBwYWRkaW5nTGVmdDogMjAsXG4gICAgcGFkZGluZ1JpZ2h0OiAyMCxcbiAgfSxcbiAgTW9iaWxlQnV0dG9uOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgY29sb3I6ICcjQTRBNEE0JyxcbiAgICB9LFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgIHBhZGRpbmdMZWZ0OiAyMCxcbiAgICBwYWRkaW5nUmlnaHQ6IDIwLFxuICAgIGZvbnRTaXplOiAnMjBweCcsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICB9LFxuICBidXR0b25TaW5nVXA6IHtcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRUE3OTI1XCIsXG4gICAgYm9yZGVyUmFkaXVzOiAyNSxcbiAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ExNTQyMVwiLFxuICAgIH0sXG4gIH0sXG4gIHNlY3Rpb25Nb2JpbGU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG4gIHRpdGxlTW9iaWxlOiB7XG4gICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgfSxcbiAgSWNvbk1vYmlsZToge1xuICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgfSxcbiAgTW9iaWxlTWVudToge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogJzU2cHgnLFxuICAgIHJpZ2h0OiAwLFxuICAgIHBhZGRpbmdUb3A6ICcyMHB4JyxcbiAgICB6SW5kZXg6IDEwMDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwgMC43NSknLFxuXG4gIH1cbn07XG5cbmNsYXNzIE5hdkJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHZhbHVlOiAwLFxuICAgIHNob3dNZW51OiBmYWxzZVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCB2YWx1ZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlfSk7XG4gIH07XG5cbiAgb25Mb2dPdXRUb2dnbGUgPSAoKSA9PiB0aGlzLnByb3BzLm9uTG9nb3V0Q2xpY2sodGhpcy5wcm9wcy5oaXN0b3J5KVxuXG4gIG9uTWVudVNob3cgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHtzaG93TWVudTogIXRoaXMuc3RhdGUuc2hvd01lbnV9KVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7Y2xhc3NlcywgbG9jYXRpb259ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7aXNBdXRofSA9IHRoaXMucHJvcHMuYXV0aDtcbiAgICBjb25zdCB7c2hvd01lbnV9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgPEFwcEJhciBjbGFzc05hbWU9e2NsYXNzZXMubWVudWJhcn0+XG4gICAgICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rTmF2fSB0bz0nLycgPlxuICAgICAgICAgICAgICAgICAgSG9iYnlDcmFmdFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbk1vYmlsZX0+XG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuSWNvbk1vYmlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiBvbkNsaWNrPXt0aGlzLm9uTWVudVNob3d9Lz5cbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIHtzaG93TWVudSA/IDxkaXYgb25DbGljaz17dGhpcy5vbk1lbnVTaG93fSBjbGFzc05hbWU9e2NsYXNzZXMuTW9iaWxlTWVudX0+XG4gICAgICAgICAgICAgICAgICAgIHtpc0F1dGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5Nb2JpbGVCdXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rTmF2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy9wcm9qZWN0cyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIERpc2NvdmVyIFByb2plY3RzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwgQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLk1vYmlsZUJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz0nLyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIERpc2NvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7aXNBdXRoID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuTW9iaWxlQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua05hdn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz0nL3Byb2plY3QtcmVnaXN0cmF0aW9uJz5DcmVhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYSBQcm9qZWN0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLk1vYmlsZUJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy9yZWdpc3Rlcic+U2lnblxuICAgICAgICAgICAgICAgICAgICAgICAgICBVcCBXaXRoIEVtYWlsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge2lzQXV0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLk1vYmlsZUJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy91c2VyJz57dGhpcy5wcm9wcy5hdXRoLmVtYWlsfSB7dGhpcy5wcm9wcy5hdXRoLmFtb3VudH3igqw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuTW9iaWxlQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua05hdn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBBYm91dCBVc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyb3d9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uRGVza3RvcH0+XG4gICAgICAgICAgICAgICAgICB7aXNBdXRoID9cbiAgICAgICAgICAgICAgICAgICAgICA8IEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycvcHJvamVjdHMnID09PSBsb2NhdGlvbi5wYXRobmFtZSA/IGNsYXNzZXMuYnV0dG9uU2luZ1VwIDogY2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua05hdn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy9wcm9qZWN0cyc+XG4gICAgICAgICAgICAgICAgICAgICAgICBEaXNjb3ZlciBQcm9qZWN0c1xuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICA8IEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycvJyA9PT0gbG9jYXRpb24ucGF0aG5hbWUgPyBjbGFzc2VzLmJ1dHRvblNpbmdVcCA6IGNsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPScvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIERpc2NvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+fVxuICAgICAgICAgICAgICAgICAge2lzQXV0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycvcHJvamVjdC1yZWdpc3RyYXRpb24nID09PSBsb2NhdGlvbi5wYXRobmFtZSA/IGNsYXNzZXMuYnV0dG9uU2luZ1VwIDogY2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua05hdn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy9wcm9qZWN0LXJlZ2lzdHJhdGlvbic+Q3JlYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBhIFByb2plY3Q8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycvcmVnaXN0ZXInID09PSBsb2NhdGlvbi5wYXRobmFtZSA/IGNsYXNzZXMuYnV0dG9uU2luZ1VwIDogY2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua05hdn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy9yZWdpc3Rlcic+U2lnblxuICAgICAgICAgICAgICAgICAgICAgICAgVXAgV2l0aCBFbWFpbDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAge2lzQXV0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycvdXNlcicgPT09IGxvY2F0aW9uLnBhdGhuYW1lID8gY2xhc3Nlcy5idXR0b25TaW5nVXAgOiBjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rTmF2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bz0nL3VzZXInPnt0aGlzLnByb3BzLmF1dGguZW1haWx9IHt0aGlzLnByb3BzLmF1dGguYW1vdW50feKCrDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jy9hYm91dCcgPT09IGxvY2F0aW9uLnBhdGhuYW1lID8gY2xhc3Nlcy5idXR0b25TaW5nVXAgOiBjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rTmF2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bz1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWJvdXQgVXNcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uTW9iaWxlfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZU1vYmlsZX0+XG4gICAgICAgICAgICAgICAgICAgIEhvYmJ5Q3JhZnRcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyb3d9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uRGVza3RvcH0+XG4gICAgICAgICAgICAgICAgICB7aXNBdXRoID9cbiAgICAgICAgICAgICAgICAgICAgICA8IEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBvbkNsaWNrPXt0aGlzLm9uTG9nT3V0VG9nZ2xlfSB0bz0nL2xvZ291dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgPCBCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gY29tcG9uZW50PXtSb3V0ZXJMaW5rfSB0bz0nL2xvZ2luJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25Nb2JpbGV9PlxuICAgICAgICAgICAgICAgICAge2lzQXV0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgPCBCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gb25DbGljaz17dGhpcy5vbkxvZ091dFRvZ2dsZX0gdG89Jy9sb2dvdXQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgIDwgQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IGNvbXBvbmVudD17Um91dGVyTGlua30gdG89Jy9sb2dpbic+XG4gICAgICAgICAgICAgICAgICAgICAgICBTaWduIEluXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbk5hdkJhci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYXV0aDogc3RhdGUuYXV0aFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgb25Mb2dvdXRDbGljazogKGhpc3RvcnkpID0+IGRpc3BhdGNoKExvZ291dChoaXN0b3J5KSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKSh3aXRoUm91dGVyKHdpdGhTdHlsZXMoc3R5bGVzKShOYXZCYXIpKSk7IiwiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtMaW5rIGFzIFJvdXRlckxpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgJy4vUHJvamVjdEluZm8uc2Nzcyc7XG4vLyBpbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSBcIi4uL1Byb2plY3RzTGlzdC9Qcm9qZWN0c0xpc3RcIjtcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBNdWlUaGVtZVByb3ZpZGVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2VzL1R5cG9ncmFwaHkvVHlwb2dyYXBoeVwiO1xuLy8gaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gXCIuLi9Qcm9qZWN0c0xpc3QvUHJvamVjdHNMaXN0XCI7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICAgIHBhbGV0dGU6IHtcbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgbWFpbjogJyNFQTc5MjUnLFxuICAgICAgICB9LFxuICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgIG1haW46ICcjZmZmZmZmJyxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG5cblxuXG5jb25zdCBQcm9qZWN0SW5mbyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBwcm9qZWN0SW5mbyA9IHByb3BzLnByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHtcbiAgICBpZihwcm9qZWN0LmlkLnRvU3RyaW5nKCkgPT09IHByb3BzLm1hdGNoLnBhcmFtcy5pZCkge1xuICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9KS5tYXAoKHByb2plY3QsIGkpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J1Byb2plY3QnIGtleT17aX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUaXRsZSc+e3Byb2plY3QudGl0bGV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2dyZXNzLWJhcic+XG4gICAgICAgICAgICAgIDxkaXY+e3Byb2plY3QuYnVkZ2V0fTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nTGluZWFyUHJvZ3Jlc3NNb25leSc+XG4gICAgICAgICAgICAgICAgICA8TGluZWFyUHJvZ3Jlc3MgdmFyaWFudD17J2J1ZmZlcid9IHZhbHVlPXsocHJvamVjdC5idWRnZXQvcHJvamVjdC5hbW91bnQpKjEwMH0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj57cHJvamVjdC5hbW91bnR9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1ZvdGVCdXR0b25zJz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiA+NeKCrDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiID4xNeKCrDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiID4zMOKCrDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRGVzY3JpcHRpb24nPntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUZXh0LS1sZWZ0Jz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiVGV4dFwiPkF1dGhvcjo8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nVGV4dC0tQm9sZCc+e3Byb2plY3QudXNlcm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJUZXh0XCI+QXV0aG9yIEVtYWlsOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdUZXh0LS1Cb2xkJz57cHJvamVjdC5lbWFpbH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0pXG4gIHJldHVybiAoXG4gICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nUHJvamVjdEluZm8nPlxuICAgICAgICAgIHtwcm9qZWN0SW5mb31cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nQnV0dG9uJ1xuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICB0bz0nL3Byb2plY3RzJz5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgPkJhY2sgdG8gcHJvamVjdHM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvamVjdHM6IHN0YXRlLnByb2plY3RzLnByb2plY3RzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFByb2plY3RJbmZvKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9Qcm9qZWN0UmVnaXN0cmF0aW9uLnNjc3MnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXIvTG9hZGVyJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFwicmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIuY3NzXCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMvcHJvamVjdFJlZ2lzdGVyQWN0aW9ucyc7XG5pbXBvcnQge29uUHJvamVjdFJlZ2lzdGVyRm9ybVN1Ym1pdH0gZnJvbSAnLi4vLi4vdGh1bmtzL3Byb2plY3RSZWdpc3RlclRodW5rJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhcic7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBNdWlUaGVtZVByb3ZpZGVyLCB3aXRoU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XG5pbXBvcnQgRXJyb3JJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FcnJvcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5cblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjMDA0NGZmJyxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBtYWluOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBtYWluOiB7XG4gICAgd2lkdGg6ICdhdXRvJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKDQwMCArIHRoZW1lLnNwYWNpbmcudW5pdCAqIDMgKiAyKV06IHtcbiAgICAgIHdpZHRoOiA0MDAsXG4gICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgIH0sXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQgKiA4LFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAyfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weCAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDN9cHhgLFxuICB9LFxuICBmb3JtOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgfSxcbiAgdGV4dEZpZWxkOiB7XG4gICAgaGVpZ2h0OiA1MCxcbiAgfSxcbiAgc3VibWl0OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgIGhlaWdodDogNTAsXG4gIH0sXG4gIHJvb3Q6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmVycm9yLmRhcmssXG4gIH0sXG4gIGljb246IHtcbiAgICBmb250U2l6ZToyMCxcbiAgICBtYXJnaW5SaWdodDogMTAsXG4gIH0sXG4gIG1lc3NhZ2U6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIH0sXG59KTtcblxuY2xhc3MgUHJvamVjdFJlZ2lzdHJhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG9wZW46IGZhbHNlLFxuICB9O1xuXG4gIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNsb3NlID0gKGV2ZW50LCByZWFzb24pID0+IHtcbiAgICBpZiAocmVhc29uID09PSAnY2xpY2thd2F5Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gIH07XG5cblxuICBvbkZvcm1TdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uRm9ybVN1Ym1pdCh0aGlzLnByb3BzLnByb2plY3RSZWdpc3RlciwgdGhpcy5wcm9wcy5oaXN0b3J5LCB0aGlzLnByb3BzLmF1dGguZW1haWwpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdXNlcm5hbWUsXG4gICAgICBob2JieU5hbWUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGFtb3VudCxcbiAgICAgIGxvYWRpbmcsXG4gICAgICBlcnJvcixcbiAgICB9ID10aGlzLnByb3BzLnByb2plY3RSZWdpc3RlcjtcbiAgICBjb25zdCB7b25JbnB1dENoYW5nZX0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGVtYWlsIH0gPXRoaXMucHJvcHMuYXV0aFxuICAgIHJldHVybiAoXG4gICAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIj5SZWdpc3RlciBZb3VyIEhvYmJ5XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAge2Vycm9yID9cbiAgICAgICAgICAgICAgICAgICAgPFNuYWNrYmFyXG4gICAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxuICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgIENvbnRlbnRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6ICdtZXNzYWdlLWlkJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMucm9vdFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9ezxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICA8RXJyb3JJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufS8+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgIGFjdGlvbj17W1xuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+LFxuICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuXG4gICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5vbkZvcm1TdWJtaXR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfVxuICAgICAgICAgICAgICAgICAgbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cblxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPSd1c2VybmFtZSdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxlYXNlIGVudGVyIHlvdXIgbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0naG9iYnlOYW1lJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aG9iYnlOYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxlYXNlIGVudGVyIHlvdXIgaG9iYnkgbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQbGVhc2UgZW50ZXIgeW91ciBlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgcm93c01heD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBkZXNjcmliZSBpdFwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdhbW91bnQnXG4gICAgICAgICAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBlbnRlciBhbW91bnQgZm9yIHlvdXIgbmVlZHNcIlxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IDxMb2FkZXIgdGV4dENvbG9yPVwic2Vjb25kYXJ5XCIgY29sb3I9eycjZmZmJ30gaD17MTV9IC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cImVycm9yXCIgPlBsYWNlIHlvdXIgaG9iYnk8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvamVjdFJlZ2lzdGVyOiBzdGF0ZS5wcm9qZWN0UmVnaXN0ZXIsXG4gICAgYXV0aDogc3RhdGUuYXV0aFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgb25JbnB1dENoYW5nZTogKGUpID0+IGRpc3BhdGNoKGFjdGlvbnMub25JbnB1dENoYW5nZShlKSksXG4gIG9uRGF0ZUNoYW5nZTogKGRhdGUpID0+IGRpc3BhdGNoKGFjdGlvbnMub25EYXRlQ2hhbmdlKGRhdGUpKSxcbiAgb25Gb3JtU3VibWl0OiAocHJvamVjdEluZm8sIGhpc3RvcnksIGVtYWlsKT0+ZGlzcGF0Y2gob25Qcm9qZWN0UmVnaXN0ZXJGb3JtU3VibWl0KHByb2plY3RJbmZvLGhpc3RvcnksZW1haWwpKVxufSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhTdHlsZXMoc3R5bGVzKShQcm9qZWN0UmVnaXN0cmF0aW9uKSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmsgYXMgUm91dGVyTGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgJy4vUHJvamVjdHNMaXN0LnNjc3MnO1xuaW1wb3J0IHtzZXRQcm9qZWN0TGlzdH0gZnJvbSAnLi4vLi4vdGh1bmtzL2dldFByb2plY3RzJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiO1xuaW1wb3J0IHtvblZvdGV9IGZyb20gJy4uLy4uL3RodW5rcy92b3RlVGh1bmsnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB7Y3JlYXRlTXVpVGhlbWUsIE11aVRoZW1lUHJvdmlkZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCJcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlci9Mb2FkZXInO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjRUE3OTI1JyxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyMwMDQ0ZmYnLFxuICAgIH0sXG4gIH0sXG59KTtcblxuXG5jbGFzcyBQcm9qZWN0c0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW5lZDogZmFsc2UsXG4gICAgICBzZWFyY2hWYWx1ZTogJydcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLm9uR2V0UHJvamVjdHNMaXN0KCk7XG4gIH1cblxuICBvblNlYXJjaEJhckNoYW5nZSA9IGUgPT4gdGhpcy5zZXRTdGF0ZSh7c2VhcmNoVmFsdWU6IGUudGFyZ2V0LnZhbHVlfSlcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3Byb2plY3RzLCBvblZvdGVDbGlja30gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHthbW91bnR9ID0gdGhpcy5wcm9wcy5hdXRoO1xuICAgIGxldCBwcm9qZWN0c0xpc3Q7XG4gICAgaWYgKHByb2plY3RzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgcHJvamVjdHNMaXN0ID0gcHJvamVjdHMgJiYgcHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4ge1xuICAgICAgICBpZiAocHJvamVjdC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgICAgICAubWFwKChwcm9qZWN0LCBpKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9IGtleT17aX0+XG4gICAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17J21haW4nfT5cbiAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXsnQ2FyZCd9IGNvbXBvbmVudD17Um91dGVyTGlua30gdG89e2AvcHJvamVjdC8ke3Byb2plY3QuaWR9YH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J0NhcmQtdGl0bGUnfT57cHJvamVjdC50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnQ2FyZC1kZXNjcmlwdGlvbid9Pntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiQ2FyZC1wcm9ncmVzc1wifT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57cHJvamVjdC5idWRnZXR9JDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJDYXJkLXByb2dyZXNzLWJhclwifT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluZWFyUHJvZ3Jlc3MgdmFyaWFudD17J2J1ZmZlcid9IHZhbHVlPXsocHJvamVjdC5idWRnZXQgLyBwcm9qZWN0LmFtb3VudCkgKiAxMDB9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3Byb2plY3QuYW1vdW50fSQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydWb3RlQnV0dG9ucyd9PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiA1MCwgbWFyZ2luOiA1fX0gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblZvdGVDbGljayhwcm9qZWN0LmlkLCA1KX0gZGlzYWJsZWQ9e2Ftb3VudCA8IDV9PjXigqw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzdHlsZT17e2JvcmRlclJhZGl1czogNTAsIG1hcmdpbjogNX19IGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Wb3RlQ2xpY2socHJvamVjdC5pZCwgMTUpfSBkaXNhYmxlZD17YW1vdW50IDwgMTV9PjE14oKsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgc3R5bGU9e3tib3JkZXJSYWRpdXM6IDUwLCBtYXJnaW46IDV9fSBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVm90ZUNsaWNrKHByb2plY3QuaWQsIDMwKX0gZGlzYWJsZWQ9e2Ftb3VudCA8IDMwfT4zMOKCrDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICAgICApXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0c0xpc3QgPSA8ZGl2IGNsYXNzTmFtZT0nTG9hZGVyLWNvbnRhaW5lcic+XG4gICAgICAgIDxMb2FkZXIgY29sb3I9eycjRUE3OTI1J30gaD17MTAwfS8+XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nUHJvamVjdHNMaXN0Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2VhcmNoQmFyXCI+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBlbnRlciBrZXl3b3Jkc1wiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlYXJjaEJhckNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzZWFyY2hWYWx1ZSd9Pnt0aGlzLnN0YXRlLnNlYXJjaFZhbHVlfTwvZGl2PlxuICAgICAgICAgICAge3Byb2plY3RzTGlzdH1cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcbiAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICA+SWYgeW91IGhhdmUgYSBwcm9qZWN0LCBwbGVhc2V7JyAnfVxuICAgICAgICAgICAgICA8TGluayBjb21wb25lbnQ9e1JvdXRlckxpbmt9IGNvbG9yPXsnc2Vjb25kYXJ5J30gdG89Jy9wcm9qZWN0LXJlZ2lzdHJhdGlvbic+UmVnaXN0ZXI8L0xpbms+XG4gICAgICAgICAgICAgIHsnICd9eW91ciBwcm9qZWN0KGhvYmJ5KS5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvamVjdHM6IHN0YXRlLnByb2plY3RzLnByb2plY3RzLFxuICAgIGF1dGg6IHN0YXRlLmF1dGhcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIG9uR2V0UHJvamVjdHNMaXN0OiAoKSA9PiBkaXNwYXRjaChzZXRQcm9qZWN0TGlzdCgpKSxcbiAgb25Wb3RlQ2xpY2s6IChwcm9qZWN0SWQsIGFtb3VudCkgPT4gZGlzcGF0Y2gob25Wb3RlKHByb2plY3RJZCwgYW1vdW50KSlcblxufSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQcm9qZWN0c0xpc3QpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXIvTG9hZGVyJztcbmltcG9ydCB7TGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCAnLi9SZWdpc3Rlci5zY3NzJ1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vLi4vYWN0aW9ucy9yZWdpc3RlckFjdGlvbnNcIjtcbmltcG9ydCB7b25SZWdpc3RlckZvcm1TdWJtaXR9IGZyb20gJy4uLy4uL3RodW5rcy9yZWdpc3RlclRodW5rJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcbmltcG9ydCB7Y3JlYXRlTXVpVGhlbWUsIE11aVRoZW1lUHJvdmlkZXIsIHdpdGhTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XG5pbXBvcnQgRXJyb3JJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FcnJvcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgQWNjb3VudCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZSc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogJyNFQTc5MjUnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzAwNDRmZicsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgbWFpbjogJyNmZmZmZmYnLFxuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgbWFpbjoge1xuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCg0MDAgKyB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzICogMildOiB7XG4gICAgICB3aWR0aDogNDAwLFxuICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICB9LFxuICB9LFxuICBwYXBlcjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0ICogOCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy51bml0ICogMn1weCAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDN9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4YCxcbiAgfSxcbiAgZm9ybToge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gIH0sXG4gIHRleHRGaWVsZDoge1xuICAgIGhlaWdodDogNTAsXG4gIH0sXG4gIHN1Ym1pdDoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICBoZWlnaHQ6IDUwLFxuICB9LFxuICByb290OiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5lcnJvci5kYXJrLFxuICB9LFxuICBpY29uOiB7XG4gICAgZm9udFNpemU6MjAsXG4gICAgbWFyZ2luUmlnaHQ6IDEwLFxuICB9LFxuICBtZXNzYWdlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB9LFxuICBhdmF0YXI6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRUE3OTI1JyxcbiAgfSxcbn0pO1xuXG5cbmNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3BlbjogZmFsc2UsXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gIH07XG5cbiAgaGFuZGxlQ2xvc2UgPSAoZXZlbnQsIHJlYXNvbikgPT4ge1xuICAgIGlmIChyZWFzb24gPT09ICdjbGlja2F3YXknKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgfTtcblxuICBvbkZvcm1TdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uRm9ybVN1Ym1pdCh0aGlzLnByb3BzLnJlZ2lzdGVyLCB0aGlzLnByb3BzLmhpc3RvcnkpO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3VzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHBhc3N3b3JkMiwgZXJyb3IsIGxvYWRpbmcsfSA9IHRoaXMucHJvcHMucmVnaXN0ZXI7XG4gICAgY29uc3Qge29uSW5wdXRDaGFuZ2V9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9ID5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cbiAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lLz5cbiAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0gPlxuICAgICAgICAgICAgICAgICAgICA8QWNjb3VudC8+XG4gICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCI+U2lnbiBVcFxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIHtlcnJvciA/IDxTbmFja2JhclxuICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MzAwMH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgICBDb250ZW50UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiAnbWVzc2FnZS1pZCcsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLnJvb3RcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9ezxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgPEVycm9ySWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0vPlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3J9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgYWN0aW9uPXtbXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25Gb3JtU3VibWl0fSAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0gIG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd1c2VybmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBlbnRlciB5b3VyIG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBlbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkMidcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkMn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlcGVhdCBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRlciBjb2xvcj17JyNmZmYnfSBoPXsxNX0gLz4gOlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiZXJyb3JcIiA+U2lnbiB1cDwvVHlwb2dyYXBoeT4gfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzdWJoZWFkaW5nXCJ9PlxuICAgICAgICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P3snICd9XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XG4gICAgICAgICAgICAgICAgICAgIHRvPScvbG9naW4nPlxuICAgICAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcmVnaXN0ZXI6IHN0YXRlLnJlZ2lzdGVyXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvbklucHV0Q2hhbmdlOiAoZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5vbklucHV0Q2hhbmdlKGUpKSxcbiAgb25Gb3JtU3VibWl0OiAodXNlciwgaGlzdG9yeSkgPT4gZGlzcGF0Y2gob25SZWdpc3RlckZvcm1TdWJtaXQodXNlciwgaGlzdG9yeSkpXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFN0eWxlcyhzdHlsZXMpKFJlZ2lzdGVyKSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vVXNlci5zY3NzJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge3ZvdGVzfSBmcm9tICcuLi8uLi90aHVua3MvZ2V0Vm90ZXNUaHVuayc7XG5pbXBvcnQge3VuVm90ZX0gZnJvbSAnLi4vLi4vdGh1bmtzL3VuVm90ZVRodW5rJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyL0xvYWRlcic7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9lcy9QYXBlci9QYXBlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBNdWlUaGVtZVByb3ZpZGVyLH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuXG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICAgIHBhbGV0dGU6IHtcbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgbWFpbjogJyNFQTc5MjUnLFxuICAgICAgICB9LFxuICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgIG1haW46ICcjMDA0NGZmJyxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG5cblxuXG5jbGFzcyBVc2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOiAnJ1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLm9uR2V0Vm90ZXMoKVxuICB9XG5cbiAgICBvblNlYXJjaEJhckNoYW5nZSA9IGUgPT4gdGhpcy5zZXRTdGF0ZSh7c2VhcmNoVmFsdWU6IGUudGFyZ2V0LnZhbHVlfSlcblxuXG4gICAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt2b3Rlc30gPSB0aGlzLnByb3BzLnZvdGVzO1xuICAgIGNvbnN0IHtvblVuVm90ZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBjb25zdCBsb2FkZXIgPSA8ZGl2IGNsYXNzTmFtZT1cIkxvYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgICA8TG9hZGVyIGNvbG9yPXsnI0VBNzkyNSd9IGg9ezEwMH0vPlxuICAgICAgPC9kaXY+XG5cbiAgICBjb25zdCB2b3Rlc0FycmF5ID0gdm90ZXMubWFwKHZvdGUgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9eydtYWluJ30gPlxuICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17J0NhcmQnfSAga2V5PXt2b3RlLmlkfSA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydDYXJkLXRpdGxlJ30+e3ZvdGUudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydDYXJkLU1vbmV5U3BlbmQnfSA+Vm90ZWQgQW1vdW50OiB7dm90ZS5hbW91bnR94oKsPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblVuVm90ZSh2b3RlLmlkKX0+VW5Wb3RlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICAgKVxuICAgIH0pXG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVXNlcic+XG4gICAgICAgICAgICAgICAgICB7dm90ZXMubGVuZ3RoID4gMCA/IHZvdGVzQXJyYXkgOiBsb2FkZXJ9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB2b3Rlczogc3RhdGUudm90ZXNcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIG9uR2V0Vm90ZXM6ICgpID0+IGRpc3BhdGNoKHZvdGVzKCkpLFxuICBvblVuVm90ZTogKGlkKSA9PiBkaXNwYXRjaCh1blZvdGUoaWQpKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFVzZXIpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7Y3JlYXRlU3RvcmUsIGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyJztcbmltcG9ydCAnLi9pbmRleC5zY3NzJztcbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi9Sb3V0ZXMnO1xuaW1wb3J0ICogYXMgc2VydmljZVdvcmtlciBmcm9tICcuL3NlcnZpY2VXb3JrZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJ1xuXG5heGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UocmVxdWVzdCA9PiB7XG4gIHJldHVybiByZXF1ZXN0O1xufSlcblxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKHJlc3BvbnNlID0+IHtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufSlcblxuY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gfHwgY29tcG9zZTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgY29tcG9zZUVuaGFuY2VycyhhcHBseU1pZGRsZXdhcmUodGh1bmspKSk7XG5cblJlYWN0RE9NLnJlbmRlcig8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgPFJvdXRlcy8+XG48L1Byb3ZpZGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cblxuLy8gSWYgeW91IHdhbnQgeW91ciBhcHAgdG8gd29yayBvZmZsaW5lIGFuZCBsb2FkIGZhc3RlciwgeW91IGNhbiBjaGFuZ2Vcbi8vIHVucmVnaXN0ZXIoKSB0byByZWdpc3RlcigpIGJlbG93LiBOb3RlIHRoaXMgY29tZXMgd2l0aCBzb21lIHBpdGZhbGxzLlxuLy8gTGVhcm4gbW9yZSBhYm91dCBzZXJ2aWNlIHdvcmtlcnM6IGh0dHBzOi8vYml0Lmx5L0NSQS1QV0FcbnNlcnZpY2VXb3JrZXIudW5yZWdpc3RlcigpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBlbWFpbDogJycsXG4gICAgYW1vdW50OiAwLFxuICAgIGlzQXV0aDogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuQVVUSF9VU0VSOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBlbWFpbDogYWN0aW9uLnVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgYW1vdW50OiBhY3Rpb24udXNlci5idWRnZXQsXG4gICAgICAgICAgICAgICAgaXNBdXRoOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgdHlwZXMuTE9HX09VVDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgICAgICBpc0F1dGg6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIHR5cGVzLlZPVEVfVVNFUjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYW1vdW50OiBzdGF0ZS5hbW91bnQtYWN0aW9uLmFtb3VudFxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGVtYWlsOiAnJyxcbiAgcGFzc3dvcmQ6ICcnLFxuICBlcnJvcjogJycsXG4gIGxvYWRpbmc6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLkxPR0lOX0ZPUk1fSU5QVVRfQ0hBTkdFOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgW2FjdGlvbi5uYW1lXTogYWN0aW9uLnZhbHVlfTtcbiAgICBjYXNlIHR5cGVzLkxPR0lOX0ZPUk1fTE9BRElORzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVycm9yOiAnJywgbG9hZGluZzogdHJ1ZX07XG4gICAgY2FzZSB0eXBlcy5MT0dJTl9GT1JNX0VSUk9SOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXJyb3I6IGFjdGlvbi5lcnJvciwgbG9hZGluZzpmYWxzZX07XG4gICAgY2FzZSB0eXBlcy5MT0dJTl9GT1JNX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlbWFpbDogJycsIHBhc3N3b3JkOiAnJywgbG9hZGluZzpmYWxzZX07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHVzZXJuYW1lOiAnJyxcbiAgaG9iYnlOYW1lOiAnJyxcbiAgZW1haWw6ICcnLFxuICBkZXNjcmlwdGlvbjogJycsXG4gIGFtb3VudDogJycsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcjogJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0U6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBbYWN0aW9uLm5hbWVdOiBhY3Rpb24udmFsdWV9O1xuICAgIGNhc2UgdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9EQVRFX0NIQU5HRTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVuZERhdGU6IGFjdGlvbi5kYXRlfTtcbiAgICBjYXNlIHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9MT0FESU5HOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZX07XG4gICAgY2FzZSB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fRVJST1I6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlcnJvcjogYWN0aW9uLmVycm9yLCBsb2FkaW5nOmZhbHNlfTtcbiAgICBjYXNlIHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdXNlcm5hbWU6ICcnLCBob2JieU5hbWU6ICcnLCBlbWFpbDogJycsIGFtb3VudDogJycsIGRlc2NyaXB0aW9uOiAnJywgbG9hZGluZzpmYWxzZSwgZXJyb3I6Jyd9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHByb2plY3RzOiBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuR0VUX1BST0pFQ1RTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcHJvamVjdHM6IGFjdGlvbi5wcm9qZWN0c31cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcm5hbWU6ICcnLFxuICBlbWFpbDogJycsXG4gIHBhc3N3b3JkOiAnJyxcbiAgcGFzc3dvcmQyOiAnJyxcbiAgbG9hZGluZzogZmFsc2UsXG4gIGVycm9yOiAnJ1xufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5SRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIFthY3Rpb24ubmFtZV06IGFjdGlvbi52YWx1ZX07XG4gICAgY2FzZSB0eXBlcy5SRUdJU1RFUl9GT1JNX0xPQURJTkc6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlcnJvcjonJywgbG9hZGluZzogdHJ1ZX07XG4gICAgY2FzZSB0eXBlcy5SRUdJU1RFUl9GT1JNX0VSUk9SOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXJyb3I6IGFjdGlvbi5lcnJvciwgbG9hZGluZzpmYWxzZX07XG4gICAgY2FzZSB0eXBlcy5SRUdJU1RFUl9GT1JNX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCB1c2VybmFtZTogJycsIGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnLCBwYXNzd29yZDI6ICcnLCBlcnJvcjogJycsIGxvYWRpbmc6IGZhbHNlfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAgJ3JlZHV4JztcbmltcG9ydCBsb2dpblJlZHVjZXIgZnJvbSAnLi9sb2dpblJlZHVjZXInO1xuaW1wb3J0IHJlZ2lzdGVyUmVkdWNlciBmcm9tICcuL3JlZ2lzdGVyUmVkdWNlcic7XG5pbXBvcnQgcHJvamVjdFJlZ2lzdGVyUmVkdWNlciBmcm9tICcuL3Byb2plY3RSZWdpc3RlclJlZHVjZXInO1xuaW1wb3J0IHByb2plY3RzUmVkdWNlciBmcm9tICcuL3Byb2plY3RzUmVkdWNlcic7XG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSAnLi9hdXRoUmVkdWNlcic7XG5pbXBvcnQgdm90ZXNSZWR1Y2VyIGZyb20gJy4vdm90ZXNSZWR1Y2VyJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBsb2dpbjogbG9naW5SZWR1Y2VyLFxuICByZWdpc3RlcjogcmVnaXN0ZXJSZWR1Y2VyLFxuICBwcm9qZWN0UmVnaXN0ZXI6IHByb2plY3RSZWdpc3RlclJlZHVjZXIsXG4gIHByb2plY3RzOiBwcm9qZWN0c1JlZHVjZXIsXG4gIGF1dGg6IGF1dGhSZWR1Y2VyLFxuICB2b3Rlczogdm90ZXNSZWR1Y2VyXG59KVxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHZvdGVzOiBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLkdFVF9WT1RFUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHZvdGVzOiBhY3Rpb24udm90ZXN9XG4gICAgY2FzZSB0eXBlcy5SRU1PVkVfVk9URTpcbiAgICAgIGNvbnN0IHZvdGVzID0gc3RhdGUudm90ZXMuZmlsdGVyKHZvdGUgPT4gdm90ZS5pZCAhPT0gYWN0aW9uLnZvdGVJRClcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHZvdGVzfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCIvLyBUaGlzIG9wdGlvbmFsIGNvZGUgaXMgdXNlZCB0byByZWdpc3RlciBhIHNlcnZpY2Ugd29ya2VyLlxuLy8gcmVnaXN0ZXIoKSBpcyBub3QgY2FsbGVkIGJ5IGRlZmF1bHQuXG5cbi8vIFRoaXMgbGV0cyB0aGUgYXBwIGxvYWQgZmFzdGVyIG9uIHN1YnNlcXVlbnQgdmlzaXRzIGluIHByb2R1Y3Rpb24sIGFuZCBnaXZlc1xuLy8gaXQgb2ZmbGluZSBjYXBhYmlsaXRpZXMuIEhvd2V2ZXIsIGl0IGFsc28gbWVhbnMgdGhhdCBkZXZlbG9wZXJzIChhbmQgdXNlcnMpXG4vLyB3aWxsIG9ubHkgc2VlIGRlcGxveWVkIHVwZGF0ZXMgb24gc3Vic2VxdWVudCB2aXNpdHMgdG8gYSBwYWdlLCBhZnRlciBhbGwgdGhlXG4vLyBleGlzdGluZyB0YWJzIG9wZW4gb24gdGhlIHBhZ2UgaGF2ZSBiZWVuIGNsb3NlZCwgc2luY2UgcHJldmlvdXNseSBjYWNoZWRcbi8vIHJlc291cmNlcyBhcmUgdXBkYXRlZCBpbiB0aGUgYmFja2dyb3VuZC5cblxuLy8gVG8gbGVhcm4gbW9yZSBhYm91dCB0aGUgYmVuZWZpdHMgb2YgdGhpcyBtb2RlbCBhbmQgaW5zdHJ1Y3Rpb25zIG9uIGhvdyB0b1xuLy8gb3B0LWluLCByZWFkIGh0dHBzOi8vYml0Lmx5L0NSQS1QV0FcblxuY29uc3QgaXNMb2NhbGhvc3QgPSBCb29sZWFuKFxuICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnIHx8XG4gICAgLy8gWzo6MV0gaXMgdGhlIElQdjYgbG9jYWxob3N0IGFkZHJlc3MuXG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnWzo6MV0nIHx8XG4gICAgLy8gMTI3LjAuMC4xLzggaXMgY29uc2lkZXJlZCBsb2NhbGhvc3QgZm9yIElQdjQuXG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLm1hdGNoKFxuICAgICAgL14xMjcoPzpcXC4oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pKXszfSQvXG4gICAgKVxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKGNvbmZpZykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgLy8gVGhlIFVSTCBjb25zdHJ1Y3RvciBpcyBhdmFpbGFibGUgaW4gYWxsIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBTVy5cbiAgICBjb25zdCBwdWJsaWNVcmwgPSBuZXcgVVJMKHByb2Nlc3MuZW52LlBVQkxJQ19VUkwsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICBpZiAocHVibGljVXJsLm9yaWdpbiAhPT0gd2luZG93LmxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgLy8gT3VyIHNlcnZpY2Ugd29ya2VyIHdvbid0IHdvcmsgaWYgUFVCTElDX1VSTCBpcyBvbiBhIGRpZmZlcmVudCBvcmlnaW5cbiAgICAgIC8vIGZyb20gd2hhdCBvdXIgcGFnZSBpcyBzZXJ2ZWQgb24uIFRoaXMgbWlnaHQgaGFwcGVuIGlmIGEgQ0ROIGlzIHVzZWQgdG9cbiAgICAgIC8vIHNlcnZlIGFzc2V0czsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9jcmVhdGUtcmVhY3QtYXBwL2lzc3Vlcy8yMzc0XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBzd1VybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L3NlcnZpY2Utd29ya2VyLmpzYDtcblxuICAgICAgaWYgKGlzTG9jYWxob3N0KSB7XG4gICAgICAgIC8vIFRoaXMgaXMgcnVubmluZyBvbiBsb2NhbGhvc3QuIExldCdzIGNoZWNrIGlmIGEgc2VydmljZSB3b3JrZXIgc3RpbGwgZXhpc3RzIG9yIG5vdC5cbiAgICAgICAgY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIoc3dVcmwsIGNvbmZpZyk7XG5cbiAgICAgICAgLy8gQWRkIHNvbWUgYWRkaXRpb25hbCBsb2dnaW5nIHRvIGxvY2FsaG9zdCwgcG9pbnRpbmcgZGV2ZWxvcGVycyB0byB0aGVcbiAgICAgICAgLy8gc2VydmljZSB3b3JrZXIvUFdBIGRvY3VtZW50YXRpb24uXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgJ1RoaXMgd2ViIGFwcCBpcyBiZWluZyBzZXJ2ZWQgY2FjaGUtZmlyc3QgYnkgYSBzZXJ2aWNlICcgK1xuICAgICAgICAgICAgICAnd29ya2VyLiBUbyBsZWFybiBtb3JlLCB2aXNpdCBodHRwczovL2JpdC5seS9DUkEtUFdBJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSXMgbm90IGxvY2FsaG9zdC4gSnVzdCByZWdpc3RlciBzZXJ2aWNlIHdvcmtlclxuICAgICAgICByZWdpc3RlclZhbGlkU1coc3dVcmwsIGNvbmZpZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpIHtcbiAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbiAgICAucmVnaXN0ZXIoc3dVcmwpXG4gICAgLnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgIHJlZ2lzdHJhdGlvbi5vbnVwZGF0ZWZvdW5kID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnN0YWxsaW5nV29ya2VyID0gcmVnaXN0cmF0aW9uLmluc3RhbGxpbmc7XG4gICAgICAgIGlmIChpbnN0YWxsaW5nV29ya2VyID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFsbGluZ1dvcmtlci5vbnN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChpbnN0YWxsaW5nV29ya2VyLnN0YXRlID09PSAnaW5zdGFsbGVkJykge1xuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHVwZGF0ZWQgcHJlY2FjaGVkIGNvbnRlbnQgaGFzIGJlZW4gZmV0Y2hlZCxcbiAgICAgICAgICAgICAgLy8gYnV0IHRoZSBwcmV2aW91cyBzZXJ2aWNlIHdvcmtlciB3aWxsIHN0aWxsIHNlcnZlIHRoZSBvbGRlclxuICAgICAgICAgICAgICAvLyBjb250ZW50IHVudGlsIGFsbCBjbGllbnQgdGFicyBhcmUgY2xvc2VkLlxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAnTmV3IGNvbnRlbnQgaXMgYXZhaWxhYmxlIGFuZCB3aWxsIGJlIHVzZWQgd2hlbiBhbGwgJyArXG4gICAgICAgICAgICAgICAgICAndGFicyBmb3IgdGhpcyBwYWdlIGFyZSBjbG9zZWQuIFNlZSBodHRwczovL2JpdC5seS9DUkEtUFdBLidcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAvLyBFeGVjdXRlIGNhbGxiYWNrXG4gICAgICAgICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLm9uVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLm9uVXBkYXRlKHJlZ2lzdHJhdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIGV2ZXJ5dGhpbmcgaGFzIGJlZW4gcHJlY2FjaGVkLlxuICAgICAgICAgICAgICAvLyBJdCdzIHRoZSBwZXJmZWN0IHRpbWUgdG8gZGlzcGxheSBhXG4gICAgICAgICAgICAgIC8vIFwiQ29udGVudCBpcyBjYWNoZWQgZm9yIG9mZmxpbmUgdXNlLlwiIG1lc3NhZ2UuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb250ZW50IGlzIGNhY2hlZCBmb3Igb2ZmbGluZSB1c2UuJyk7XG5cbiAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBjYWxsYmFja1xuICAgICAgICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5vblN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBjb25maWcub25TdWNjZXNzKHJlZ2lzdHJhdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb246JywgZXJyb3IpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja1ZhbGlkU2VydmljZVdvcmtlcihzd1VybCwgY29uZmlnKSB7XG4gIC8vIENoZWNrIGlmIHRoZSBzZXJ2aWNlIHdvcmtlciBjYW4gYmUgZm91bmQuIElmIGl0IGNhbid0IHJlbG9hZCB0aGUgcGFnZS5cbiAgZmV0Y2goc3dVcmwpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gRW5zdXJlIHNlcnZpY2Ugd29ya2VyIGV4aXN0cywgYW5kIHRoYXQgd2UgcmVhbGx5IGFyZSBnZXR0aW5nIGEgSlMgZmlsZS5cbiAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xuICAgICAgaWYgKFxuICAgICAgICByZXNwb25zZS5zdGF0dXMgPT09IDQwNCB8fFxuICAgICAgICAoY29udGVudFR5cGUgIT0gbnVsbCAmJiBjb250ZW50VHlwZS5pbmRleE9mKCdqYXZhc2NyaXB0JykgPT09IC0xKVxuICAgICAgKSB7XG4gICAgICAgIC8vIE5vIHNlcnZpY2Ugd29ya2VyIGZvdW5kLiBQcm9iYWJseSBhIGRpZmZlcmVudCBhcHAuIFJlbG9hZCB0aGUgcGFnZS5cbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2VydmljZSB3b3JrZXIgZm91bmQuIFByb2NlZWQgYXMgbm9ybWFsLlxuICAgICAgICByZWdpc3RlclZhbGlkU1coc3dVcmwsIGNvbmZpZyk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICdObyBpbnRlcm5ldCBjb25uZWN0aW9uIGZvdW5kLiBBcHAgaXMgcnVubmluZyBpbiBvZmZsaW5lIG1vZGUuJ1xuICAgICAgKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXIoKSB7XG4gIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgcmVnaXN0cmF0aW9uLnVucmVnaXN0ZXIoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJGcm9tTFMoKSB7XG4gIGNvbnN0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaG9iYnlDcmFmdC11c2VyJylcbiAgcmV0dXJuIEpTT04ucGFyc2UodXNlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRVc2VyVG9MUyh1c2VyKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdob2JieUNyYWZ0LXVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcbiAgcmV0dXJuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVXNlckFtb3VudEluTFMoYW1vdW50KSB7XG4gIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdob2JieUNyYWZ0LXVzZXInKSlcbiAgdXNlci5idWRnZXQgPSB1c2VyLmJ1ZGdldCAtIGFtb3VudDtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hvYmJ5Q3JhZnQtdXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxuICByZXR1cm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVVc2VyRnJvbUxTKCkge1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaG9iYnlDcmFmdC11c2VyJylcbiAgcmV0dXJuO1xufVxuXG4iLCJpbXBvcnQge2dldFByb2plY3RzfSBmcm9tICcuLi9hY3Rpb25zL3Byb2plY3RzQWN0aW9uJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGNvbnN0IHNldFByb2plY3RMaXN0ID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gYXhpb3NcbiAgICAgIC5nZXQoJy9hcGkvaG9iYmllcycpXG4gICAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goZ2V0UHJvamVjdHMocmVzLmRhdGEpKSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIHJldHVybiBwcm9qZWN0TGlzdDtcbn0iLCJpbXBvcnQge2dldFZvdGVzfSBmcm9tICcuLi9hY3Rpb25zL3ZvdGVzQWN0aW9ucyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3Qgdm90ZXMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgYXhpb3MuZ2V0KCcvYXBpL3VzZXIvdm90ZXMnKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZ2V0Vm90ZXMocmVzLmRhdGEpKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIHJldHVybiBudWxsO1xufSIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9sb2dpbkFjdGlvbnMnO1xuaW1wb3J0IHthdXRoVXNlcn0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtzZXRVc2VyVG9MU30gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlJztcblxuZXhwb3J0IGNvbnN0IG9uRm9ybVN1Ym1pdCA9ICh1c2VyLCBoaXN0b3J5KSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goYWN0aW9ucy5vbkZvcm1Mb2FkaW5nKCkpO1xuICBpZih1c2VyLmVtYWlsID09PSAnJyB8fCB1c2VyLnBhc3N3b3JkID09PSAnJyApIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9ucy5vbkxvZ2luRm9ybUVycm9yKCdQbGVhc2UgZmlsbCBmaWVsZHMnKSk7XG4gIH1cbiAgY29uc3QgbG9naW5Kc29uID0gXHR7XG4gICAgICBcInNlY3VyaXR5XCI6IHtcbiAgICAgICAgICBcImNyZWRlbnRpYWxzXCI6IHtcbiAgICAgICAgICAgICAgXCJlbWFpbFwiOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICBcInBhc3N3b3JkXCI6IHVzZXIucGFzc3dvcmRcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgYXhpb3MucG9zdCgnL2FwaS9zZWN1cml0eS9sb2dpbicsIGxvZ2luSnNvbilcbiAgICAgIC50aGVuKHJlcyA9PntcbiAgICAgICAgc2V0VXNlclRvTFMocmVzLmRhdGEpXG4gICAgICAgIGRpc3BhdGNoKGF1dGhVc2VyKHJlcy5kYXRhKSlcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5vbkxvZ2luRm9ybVN1Y2Nlc3ModXNlcikpXG4gICAgICAgIGhpc3RvcnkucHVzaCgnLycpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5vbkxvZ2luRm9ybUVycm9yKGVyci5yZXNwb25zZS5kYXRhLmVycm9yID8gZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3IgOlxuICAgICAgICAgICdTZXJ2ZXIgRXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXInKSlcbiAgICAgICAgfVxuICAgICAgKVxufSIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XG5pbXBvcnQge3JlbW92ZVVzZXJGcm9tTFN9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZSdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCBvbkxvZ091dCA9IChoaXN0b3J5KSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgYXhpb3MuZ2V0KCcvYXBpL3NlY3VyaXR5L2xvZ291dCcpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICByZW1vdmVVc2VyRnJvbUxTKClcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5sb2dvdXQoKSlcbiAgICAgICAgaGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICByZXR1cm4gbnVsbDtcbn0iLCJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvcHJvamVjdFJlZ2lzdGVyQWN0aW9ucyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHV1aWR2NCBmcm9tICd1dWlkJ1xuXG5leHBvcnQgY29uc3Qgb25Qcm9qZWN0UmVnaXN0ZXJGb3JtU3VibWl0ID0gKHByb2plY3RJbmZvLCBoaXN0b3J5LCBlbWFpbCkgPT4gKGRpc3BhdGNoKSA9PiB7XG5cbiAgZGlzcGF0Y2goYWN0aW9ucy5vblByb2plY3RSZWdpc3RlckZvcm1Mb2FkaW5nKCkpO1xuICBpZihwcm9qZWN0SW5mby51c2VybmFtZSA9PT0gJycgfHwgcHJvamVjdEluZm8uaG9iYnlOYW1lID09PSAnJyB8fFxuICBwcm9qZWN0SW5mby5kZXNjcmlwdGlvbiA9PT0gJycgfHwgcHJvamVjdEluZm8uYW1vdW50ID09PSAnJyApIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9ucy5vblByb2plY3RSZWdpc3RlckZvcm1FcnJvcignUGxlYXNlIGZpbGwgYWxsIGZpZWxkcycpKVxuICB9XG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBtb21lbnQocHJvamVjdEluZm8uZW5kRGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG5cbiAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICBcInRpdGxlXCI6IHByb2plY3RJbmZvLmhvYmJ5TmFtZSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IHByb2plY3RJbmZvLmRlc2NyaXB0aW9uLFxuICAgIFwiYW1vdW50XCI6IHByb2plY3RJbmZvLmFtb3VudCxcbiAgICBcImVtYWlsXCI6IGVtYWlsXG4gIH0pO1xuICBheGlvc1xuICAgICAgLnBvc3QoJy9hcGkvaG9iYnknLGpzb24pXG4gICAgLnRoZW4ocmVzPT57XG4gICAgICBkaXNwYXRjaChhY3Rpb25zLm9uUHJvamVjdFJlZ2lzdGVyRm9ybVN1Ym1pdChyZXMpKTtcbiAgICAgIGhpc3RvcnkucHVzaCgnL3Byb2plY3RzJyk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5vblByb2plY3RSZWdpc3RlckZvcm1FcnJvcignU2VydmVyIGVycm9yLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpKVxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfSlcblxufSIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9yZWdpc3RlckFjdGlvbnMnO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHtzZXRVc2VyVG9MU30gZnJvbSBcIi4uL3N0b3JhZ2Uvc3RvcmFnZVwiO1xuaW1wb3J0IHthdXRoVXNlcn0gZnJvbSBcIi4uL2FjdGlvbnMvYXV0aEFjdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IG9uUmVnaXN0ZXJGb3JtU3VibWl0ID0gKHVzZXIsIGhpc3RvcnkpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChhY3Rpb25zLm9uRm9ybUxvYWRpbmcoKSk7XG4gIGlmKHVzZXIudXNlcm5hbWUgPT09ICcnIHx8IHVzZXIuZW1haWwgPT09ICcnIHx8IHVzZXIucGFzc3dvcmQgPT09ICcnIHx8IHVzZXIucGFzc3dvcmQyID09PSAnJykge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25zLm9uUmVnaXN0ZXJGb3JtRXJyb3IoJ1BsZWFzZSBmaWxsIGZpZWxkcycpKTtcbiAgfVxuICBpZih1c2VyLnBhc3N3b3JkICE9PSB1c2VyLnBhc3N3b3JkMikge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25zLm9uUmVnaXN0ZXJGb3JtRXJyb3IoJ1Bhc3N3b3JkcyBkb2VzblxcJ3QgbWF0Y2gnKSk7XG4gIH1cbiAgaWYodXNlci5wYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbnMub25SZWdpc3RlckZvcm1FcnJvcignUGFzc3dvcmQgbGVuZ3RoIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXInKSk7XG4gIH1cbiAgY29uc3QgcmVnaXN0ZXJKc29uID0ge1xuICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxuICB9O1xuXG4gIGF4aW9zLnBvc3QoJy9hcGkvc2VjdXJpdHkvcmVnaXN0ZXInLCByZWdpc3Rlckpzb24pXG4gICAgICAudGhlbihyZXMgPT57XG4gICAgICAgIHNldFVzZXJUb0xTKHJlcy5kYXRhKVxuICAgICAgICBkaXNwYXRjaChhdXRoVXNlcihyZXMuZGF0YSkpXG4gICAgICAgIGRpc3BhdGNoKGFjdGlvbnMub25SZWdpc3RlckZvcm1TdWNjZXNzKHJlZ2lzdGVySnNvbikpXG4gICAgICAgIGhpc3RvcnkucHVzaCgnLycpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChhY3Rpb25zLm9uUmVnaXN0ZXJGb3JtRXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzLmNoaWxkcmVuLmVtYWlsLmVycm9ycyA/XG4gICAgICAgICAgICAgICAgZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzLmNoaWxkcmVuLmVtYWlsLmVycm9yc1xuICAgICAgICAgICAgICAgIDogJ1NlcnZlciBlcnJvci4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKSlcbiAgICAgICAgICB9XG4gICAgICApXG5cbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtyZW1vdmVWb3RlfSBmcm9tICcuLi9hY3Rpb25zL3ZvdGVzQWN0aW9ucydcblxuZXhwb3J0IGNvbnN0IHVuVm90ZSA9ICh2b3RlSWQpID0+IChkaXNwYXRjaCkgPT4ge1xuICBheGlvcy5kZWxldGUoYC9hcGkvdm90ZS8ke3ZvdGVJZH1gKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgZGlzcGF0Y2gocmVtb3ZlVm90ZSh2b3RlSWQpKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIHJldHVybiBudWxsO1xufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge3NldFByb2plY3RMaXN0fSBmcm9tICcuL2dldFByb2plY3RzJztcbmltcG9ydCB7Y2hhbmdlVXNlckFtb3VudEluTFN9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZSdcbmltcG9ydCB7dm90ZVVzZXJ9IGZyb20gJy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuXG5leHBvcnQgY29uc3Qgb25Wb3RlID0gKHByb2plY3RJZCwgYW1vdW50KSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgYXhpb3MucG9zdCgnL2FwaS92b3RlJywge1xuICAgIGhvYmJ5OiBwcm9qZWN0SWQsXG4gICAgYW1vdW50OiBhbW91bnRcbiAgfSkudGhlbihyZXM9PntcbiAgICBjaGFuZ2VVc2VyQW1vdW50SW5MUyhhbW91bnQpO1xuICAgIGRpc3BhdGNoKHNldFByb2plY3RMaXN0KCkpO1xuICAgIGRpc3BhdGNoKHZvdGVVc2VyKGFtb3VudCkpO1xuICB9KS5jYXRjaChlcnI9PiBjb25zb2xlLmxvZyhlcnIpKVxuXG4gIHJldHVybiBudWxsO1xufSIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLVNHXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tU0cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiXSwic291cmNlUm9vdCI6IiJ9