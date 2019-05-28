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
/* harmony import */ var _thunks_getProjects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thunks/getProjects */ "./assets/js/thunks/getProjects.js");
/* harmony import */ var _components_Home_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Home/Home */ "./assets/js/components/Home/Home.js");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/NavBar/NavBar */ "./assets/js/components/NavBar/NavBar.js");
/* harmony import */ var _components_ProjectsList_ProjectsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ProjectsList/ProjectsList */ "./assets/js/components/ProjectsList/ProjectsList.js");
/* harmony import */ var _components_Login_Login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Login/Login */ "./assets/js/components/Login/Login.js");
/* harmony import */ var _components_Register_Register__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Register/Register */ "./assets/js/components/Register/Register.js");
/* harmony import */ var _components_ProjectRegistration_ProjectRegistration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ProjectRegistration/ProjectRegistration */ "./assets/js/components/ProjectRegistration/ProjectRegistration.js");
/* harmony import */ var _components_ProjectInfo_ProjectInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ProjectInfo/ProjectInfo */ "./assets/js/components/ProjectInfo/ProjectInfo.js");
/* harmony import */ var _components_User_User__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/User/User */ "./assets/js/components/User/User.js");
/* harmony import */ var _components_About_about__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/About/about */ "./assets/js/components/About/about.js");
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
      user ? this.props.onLoadProjects : null;
    }
  }, {
    key: "render",
    value: function render() {
      var isAuth = this.props.auth.isAuth;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
        basename: Object({"NODE_ENV":"development"}).PUBLIC_URL
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/",
        component: _components_Home_Home__WEBPACK_IMPORTED_MODULE_6__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/about",
        component: _components_About_about__WEBPACK_IMPORTED_MODULE_14__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/projects",
        component: _components_ProjectsList_ProjectsList__WEBPACK_IMPORTED_MODULE_8__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/login",
        component: _components_Login_Login__WEBPACK_IMPORTED_MODULE_9__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/register",
        component: _components_Register_Register__WEBPACK_IMPORTED_MODULE_10__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/user",
        component: _components_User_User__WEBPACK_IMPORTED_MODULE_13__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/project/:id",
        component: _components_ProjectInfo_ProjectInfo__WEBPACK_IMPORTED_MODULE_12__["default"]
      }), isAuth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/project-registration",
        component: _components_ProjectRegistration_ProjectRegistration__WEBPACK_IMPORTED_MODULE_11__["default"]
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: "/login"
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
    },
    onLoadProjects: function onLoadProjects() {
      return dispatch(Object(_thunks_getProjects__WEBPACK_IMPORTED_MODULE_5__["setProjectList"])());
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Home"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h3"
  }, "A New and Better way to engange and retain employees")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Subheading"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "subheading"
  }, "Companies use HobbyCraft to organize their employees hobby budget, its a perfect internal croud funding system for you !")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["MuiThemeProvider"], {
    theme: theme
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Button"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "button",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    variant: "contained",
    color: "primary",
    size: "large",
    to: "/login"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    color: "secondary"
  }, "Get Started"))))));
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
/* harmony import */ var _Snackbar_snackbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Snackbar/snackbar */ "./assets/js/components/Snackbar/snackbar.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "./node_modules/@material-ui/icons/LockOutlined.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_16__);
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
    paper: _defineProperty({
      marginTop: theme.spacing.unit,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: "".concat(theme.spacing.unit * 2, "px ").concat(theme.spacing.unit * 3, "px ").concat(theme.spacing.unit * 3, "px")
    }, theme.breakpoints.up('sm'), {
      marginTop: theme.spacing.unit * 8
    }),
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

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_14___default.a, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_15___default.a, {
        className: classes.avatar
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_16___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
        component: "h1",
        variant: "h5"
      }, "Sign In"), error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Snackbar_snackbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        error: error,
        open: this.state.open,
        onClose: this.handleClose
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
/* harmony import */ var _material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/BottomNavigation */ "./node_modules/@material-ui/core/BottomNavigation/index.js");
/* harmony import */ var _material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/BottomNavigationAction */ "./node_modules/@material-ui/core/BottomNavigationAction/index.js");
/* harmony import */ var _material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_ViewModule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ViewModule */ "./node_modules/@material-ui/icons/ViewModule.js");
/* harmony import */ var _material_ui_icons_ViewModule__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewModule__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_LibraryAdd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/LibraryAdd */ "./node_modules/@material-ui/icons/LibraryAdd.js");
/* harmony import */ var _material_ui_icons_LibraryAdd__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LibraryAdd__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Person */ "./node_modules/@material-ui/icons/Person.js");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/PersonAdd */ "./node_modules/@material-ui/icons/PersonAdd.js");
/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_15__);
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
  MobileNav: _defineProperty({
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 1000
  }, theme.breakpoints.up('md'), {
    display: 'none'
  }),
  menubar: {
    position: 'static',
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
    paddingRight: 20,
    textDecoration: 'none'
  },
  link: {
    color: '#A4A4A4',
    '&:hover': {
      color: '#ffffff'
    },
    margin: 'auto',
    padding: '6px 20px',
    textDecoration: 'none',
    textTransform: 'uppercase'
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

    return _this;
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          location = _this$props.location;
      var _this$props$auth = this.props.auth,
          isAuth = _this$props$auth.isAuth,
          role = _this$props$auth.role;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["MuiThemeProvider"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.menubar
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.title,
        color: "secondary",
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        to: "/"
      }, "HobbyCraft"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.sectionMobile
      }, isAuth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        color: "secondary",
        className: classes.titleMobile,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        to: "/"
      }, "HobbyCraft") : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      }, "About Us"), role === 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: '/admin',
        className: classes.button
      }, "Admin") : null), isAuth ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.sectionMobile
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        color: "secondary",
        className: classes.titleMobile,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        to: "/"
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
      }, isAuth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.sectionMobile
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        color: "secondary",
        className: classes.titleMobile,
        onClick: this.onLogOutToggle,
        to: "/logout"
      }, "Logout")) : null)))), isAuth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_9___default.a, {
        showLabels: true,
        className: classes.MobileNav
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_10___default.a, {
        label: "Home",
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: "/",
        icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_11___default.a, null)
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_10___default.a, {
        label: "Discover",
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: "/projects",
        icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ViewModule__WEBPACK_IMPORTED_MODULE_12___default.a, null)
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_10___default.a, {
        label: "Create",
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: "/project-registration",
        icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LibraryAdd__WEBPACK_IMPORTED_MODULE_13___default.a, null)
      }), role === 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_10___default.a, {
        label: "Admin",
        href: '/admin',
        icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_14___default.a, null)
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_10___default.a, {
        label: this.props.auth.email,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: "/user",
        icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_14___default.a, null)
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_9___default.a, {
        showLabels: true,
        className: classes.MobileNav
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_10___default.a, {
        label: "Home",
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: "/",
        icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_11___default.a, null)
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_10___default.a, {
        label: "Sign Up",
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: "/register",
        icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_15___default.a, null)
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_10___default.a, {
        label: "Sign In",
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        to: "/login",
        icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_14___default.a, null)
      })));
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
/* harmony import */ var _material_ui_core_es_Paper_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/es/Paper/Paper */ "./node_modules/@material-ui/core/es/Paper/Paper.js");
/* harmony import */ var _thunks_voteThunk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../thunks/voteThunk */ "./assets/js/thunks/voteThunk.js");










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
  var amount = props.auth.amount;
  var projects = props.projects,
      onVoteClick = props.onVoteClick;
  var projectInfo = projects.filter(function (project) {
    if (project.id.toString() === props.match.params.id) {
      return project;
    }

    return null;
  }).map(function (project, i) {
    project.budget = 0;

    if (project.votes.length > 1) {
      project.budget = project.votes.reduce(function (total, vote) {
        return total + vote.amount;
      }, 0);
    } else if (project.votes.length === 1) {
      project.budget = project.votes[0].amount;
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Project",
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Title"
    }, project.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress-bar"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, project.budget, " \u20AC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "LinearProgressMoney"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: 'buffer',
      value: project.budget / project.amount * 100
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, project.amount, " \u20AC")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "VoteButtons"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      variant: "outlined",
      onClick: function onClick() {
        return onVoteClick(project.id, 5);
      },
      disabled: amount < 5
    }, "5\u20AC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      variant: "outlined",
      onClick: function onClick() {
        return onVoteClick(project.id, 15);
      },
      disabled: amount < 15
    }, "15\u20AC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      variant: "outlined",
      onClick: function onClick() {
        return onVoteClick(project.id, 30);
      },
      disabled: amount < 30
    }, "30\u20AC")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Author"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Author Email: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Text--Bold"
    }, " ", project.email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Description"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, project.description))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: "Button",
      variant: "contained",
      color: "primary",
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
      to: "/projects"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_es_Typography_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      color: "secondary"
    }, "Back to projects")));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["MuiThemeProvider"], {
    theme: theme
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_es_Paper_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ProjectInfo"
  }, projectInfo)));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    projects: state.projects.projects,
    auth: state.auth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onVoteClick: function onVoteClick(projectId, amount) {
      return dispatch(Object(_thunks_voteThunk__WEBPACK_IMPORTED_MODULE_9__["onVote"])(projectId, amount));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ProjectInfo));

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
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Snackbar_snackbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Snackbar/snackbar */ "./assets/js/components/Snackbar/snackbar.js");
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
    paper: _defineProperty({
      marginTop: theme.spacing.unit,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: "".concat(theme.spacing.unit * 2, "px ").concat(theme.spacing.unit * 3, "px ").concat(theme.spacing.unit * 3, "px")
    }, theme.breakpoints.up('sm'), {
      marginTop: theme.spacing.unit * 8
    }),
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

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["MuiThemeProvider"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: classes.main
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: classes.paper
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12___default.a, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
        variant: "h5",
        gutterBottom: true,
        align: "center"
      }, "Register Your Hobby"), error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Snackbar_snackbar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        error: error,
        open: this.state.open,
        onClose: this.handleClose
      }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.onFormSubmit,
        className: classes.container,
        noValidate: true,
        autoComplete: "off"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
          project.budget = 0;

          if (project.votes.length > 1) {
            project.budget = project.votes.reduce(function (total, vote) {
              return total + vote.amount;
            }, 0);
          } else if (project.votes.length === 1) {
            project.budget = project.votes[0].amount;
          }

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
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Snackbar_snackbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Snackbar/snackbar */ "./assets/js/components/Snackbar/snackbar.js");
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
    paper: _defineProperty({
      marginTop: theme.spacing.unit,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: "".concat(theme.spacing.unit * 2, "px ").concat(theme.spacing.unit * 3, "px ").concat(theme.spacing.unit * 3, "px")
    }, theme.breakpoints.up('sm'), {
      marginTop: theme.spacing.unit * 8
    }),
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

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.setState({
        open: true
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_13___default.a, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_14___default.a, {
        className: classes.avatar
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_15___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
        variant: "h5",
        gutterBottom: true,
        align: "center"
      }, "Sign Up"), error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Snackbar_snackbar__WEBPACK_IMPORTED_MODULE_16__["default"], {
        error: error,
        open: this.state.open,
        onClose: this.handleClose
      }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.onFormSubmit,
        className: classes.container,
        noValidate: true,
        autoComplete: "off"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a, {
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

/***/ "./assets/js/components/Snackbar/snackbar.js":
/*!***************************************************!*\
  !*** ./assets/js/components/Snackbar/snackbar.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/Snackbar/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Error */ "./node_modules/@material-ui/icons/Error.js");
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/Tooltip/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var styles = function styles(theme) {
  return {
    root: {
      background: '#d32f2f'
    },
    MobibleSnackbar: _defineProperty({
      display: 'block'
    }, theme.breakpoints.up('sm'), {
      display: 'none'
    }),
    DesktopSnackbar: _defineProperty({
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'block'
    }),
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

var Snackbar = function Snackbar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.classes.DesktopSnackbar
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    open: props.open,
    autoHideDuration: 2000,
    ContentProps: {
      'aria-describedby': 'message-id',
      classes: {
        root: props.classes.root
      }
    },
    message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: props.classes.message
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: props.classes.icon
    }), props.error),
    action: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_4___default.a, {
      title: "Close"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
      "aria-label": "Close",
      key: "close",
      color: "inherit",
      onClick: props.onClose
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default.a, null)))]
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.classes.MobibleSnackbar
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    open: props.open,
    onClose: props.onClose,
    autoHideDuration: 3000,
    ContentProps: {
      'aria-describedby': 'message-id',
      classes: {
        root: props.classes.root
      }
    },
    message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: props.classes.message
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: props.classes.icon
    }), props.error),
    action: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_4___default.a, {
      title: "Close"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
      "aria-label": "Close",
      key: "close",
      color: "inherit",
      onClick: props.onClose
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default.a, null)))]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(Snackbar));

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
  role: null,
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
        role: action.user.role,
        isAuth: true
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["LOG_OUT"]:
      return _objectSpread({}, state, {
        email: '',
        amount: 0,
        role: null,
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
        endDate: null,
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
      console.log(res.data);
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

    if (user.email === '' || user.password === '' || user.password2 === '') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvUm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL2xvZ2luQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy9wcm9qZWN0UmVnaXN0ZXJBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3Byb2plY3RzQWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3JlZ2lzdGVyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy92b3Rlc0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWJvdXQvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWJvdXQvYWJvdXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS9Ib21lLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2FkZXIvbG9hZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW4vTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW4vTG9naW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RJbmZvL1Byb2plY3RJbmZvLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RJbmZvL1Byb2plY3RJbmZvLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdFJlZ2lzdHJhdGlvbi9Qcm9qZWN0UmVnaXN0cmF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RSZWdpc3RyYXRpb24vUHJvamVjdFJlZ2lzdHJhdGlvbi5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RzTGlzdC9Qcm9qZWN0c0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdHNMaXN0L1Byb2plY3RzTGlzdC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JlZ2lzdGVyL1JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JlZ2lzdGVyL1JlZ2lzdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU25hY2tiYXIvc25hY2tiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVXNlci9Vc2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VzZXIvVXNlci5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL2xvZ2luUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvcHJvamVjdFJlZ2lzdGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvcHJvamVjdHNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy9yZWdpc3RlclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy92b3Rlc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlcnZpY2VXb3JrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N0b3JhZ2Uvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL2dldFByb2plY3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3MvZ2V0Vm90ZXNUaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL2xvZ2luVGh1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RodW5rcy9sb2dvdXRUaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL3Byb2plY3RSZWdpc3RlclRodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3MvcmVnaXN0ZXJUaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL3VuVm90ZVRodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3Mvdm90ZVRodW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCJdLCJuYW1lcyI6WyJSb3V0ZXMiLCJ1c2VyIiwiZ2V0VXNlckZyb21MUyIsInByb3BzIiwib25Mb2FkQXV0aCIsIm9uTG9hZFByb2plY3RzIiwiaXNBdXRoIiwiYXV0aCIsInByb2Nlc3MiLCJQVUJMSUNfVVJMIiwiSG9tZSIsIkFib3V0IiwiUHJvamVjdHNMaXN0IiwiTG9naW4iLCJSZWdpc3RlciIsIlVzZXIiLCJQcm9qZWN0SW5mbyIsIlByb2plY3RSZWdpc3RyYXRpb24iLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYXV0aFVzZXIiLCJzZXRQcm9qZWN0TGlzdCIsImNvbm5lY3QiLCJ0eXBlIiwidHlwZXMiLCJsb2dvdXQiLCJMT0dfT1VUIiwidm90ZVVzZXIiLCJhbW91bnQiLCJvbklucHV0Q2hhbmdlIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uRm9ybUxvYWRpbmciLCJMT0dJTl9GT1JNX0xPQURJTkciLCJvbkxvZ2luRm9ybUVycm9yIiwiZXJyb3IiLCJvbkxvZ2luRm9ybVN1Y2Nlc3MiLCJvbkRhdGVDaGFuZ2UiLCJkYXRlIiwib25Qcm9qZWN0UmVnaXN0ZXJGb3JtTG9hZGluZyIsIlBST0pFQ1RfUkVHSVNURVJfRk9STV9MT0FESU5HIiwib25Qcm9qZWN0UmVnaXN0ZXJGb3JtRXJyb3IiLCJvblByb2plY3RSZWdpc3RlckZvcm1TdWJtaXQiLCJwcm9qZWN0SW5mbyIsImdldFByb2plY3RzIiwicHJvamVjdHMiLCJSRUdJU1RFUl9GT1JNX0xPQURJTkciLCJvblJlZ2lzdGVyRm9ybUVycm9yIiwib25SZWdpc3RlckZvcm1TdWNjZXNzIiwiTE9HSU5fRk9STV9JTlBVVF9DSEFOR0UiLCJMT0dJTl9GT1JNX0VSUk9SIiwiTE9HSU5fRk9STV9TVUNDRVNTIiwiUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UiLCJSRUdJU1RFUl9GT1JNX0VSUk9SIiwiUkVHSVNURVJfRk9STV9TVUNDRVNTIiwiUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRSIsIlBST0pFQ1RfUkVHSVNURVJfREFURV9DSEFOR0UiLCJQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fRVJST1IiLCJQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fU1VDQ0VTUyIsIkdFVF9QUk9KRUNUUyIsIkFVVEhfVVNFUiIsIlZPVEVfVVNFUiIsIkdFVF9WT1RFUyIsIlJFTU9WRV9WT1RFIiwiZ2V0Vm90ZXMiLCJ2b3RlcyIsInJlbW92ZVZvdGUiLCJ2b3RlSUQiLCJhYm91dCIsInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJSb3V0ZXJMaW5rIiwiTG9hZGVyIiwiY29sb3IiLCJoIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSaWdodCIsImJvcmRlckxlZnQiLCJib3JkZXJUb3AiLCJib3JkZXJCb3R0b20iLCJzdHlsZXMiLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJ1bml0IiwibWFyZ2luUmlnaHQiLCJicmVha3BvaW50cyIsInVwIiwicGFwZXIiLCJtYXJnaW5Ub3AiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJhdmF0YXIiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb3JtIiwidGV4dEZpZWxkIiwic3VibWl0Iiwib3BlbiIsInNldFN0YXRlIiwicHJldmVudERlZmF1bHQiLCJvbkZvcm1TdWJtaXQiLCJsb2dpbiIsImhpc3RvcnkiLCJlbWFpbCIsInBhc3N3b3JkIiwibG9hZGluZyIsImNsYXNzZXMiLCJoYW5kbGVDbG9zZSIsImhhbmRsZUNsaWNrIiwiYWN0aW9ucyIsIndpdGhTdHlsZXMiLCJyb290IiwiTW9iaWxlTmF2IiwicG9zaXRpb24iLCJib3R0b20iLCJsZWZ0IiwiekluZGV4IiwibWVudWJhciIsImJhY2tncm91bmQiLCJncm93IiwiZmxleEdyb3ciLCJhbGlnbiIsInRpdGxlIiwic2VjdGlvbkRlc2t0b3AiLCJidXR0b24iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInRleHREZWNvcmF0aW9uIiwibGluayIsInRleHRUcmFuc2Zvcm0iLCJNb2JpbGVCdXR0b24iLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImJ1dHRvblNpbmdVcCIsImJvcmRlclJhZGl1cyIsImZvbnRXZWlnaHQiLCJzZWN0aW9uTW9iaWxlIiwidGl0bGVNb2JpbGUiLCJOYXZCYXIiLCJzaG93TWVudSIsImV2ZW50Iiwib25Mb2dvdXRDbGljayIsImxvY2F0aW9uIiwicm9sZSIsIlJvdXRlckxpbmtOYXYiLCJwYXRobmFtZSIsIm9uTG9nT3V0VG9nZ2xlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIkxvZ291dCIsIndpdGhSb3V0ZXIiLCJvblZvdGVDbGljayIsImZpbHRlciIsInByb2plY3QiLCJpZCIsInRvU3RyaW5nIiwibWF0Y2giLCJwYXJhbXMiLCJtYXAiLCJpIiwiYnVkZ2V0IiwibGVuZ3RoIiwicmVkdWNlIiwidG90YWwiLCJ2b3RlIiwiZGVzY3JpcHRpb24iLCJwcm9qZWN0SWQiLCJvblZvdGUiLCJwcm9qZWN0UmVnaXN0ZXIiLCJ1c2VybmFtZSIsImhvYmJ5TmFtZSIsImNvbnRhaW5lciIsInNlYXJjaFZhbHVlIiwib3BlbmVkIiwib25HZXRQcm9qZWN0c0xpc3QiLCJwcm9qZWN0c0xpc3QiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwib25TZWFyY2hCYXJDaGFuZ2UiLCJyZWdpc3RlciIsInBhc3N3b3JkMiIsIm9uUmVnaXN0ZXJGb3JtU3VibWl0IiwiTW9iaWJsZVNuYWNrYmFyIiwiRGVza3RvcFNuYWNrYmFyIiwiaWNvbiIsIm1lc3NhZ2UiLCJTbmFja2JhciIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIm9uQ2xvc2UiLCJvbkdldFZvdGVzIiwib25VblZvdGUiLCJsb2FkZXIiLCJ2b3Rlc0FycmF5IiwidW5Wb3RlIiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJwb3N0IiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsInJlc3BvbnNlIiwiY29tcG9zZUVuaGFuY2VycyIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyIsImNvbXBvc2UiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNlcnZpY2VXb3JrZXIiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJlbmREYXRlIiwiY29tYmluZVJlZHVjZXJzIiwibG9naW5SZWR1Y2VyIiwicmVnaXN0ZXJSZWR1Y2VyIiwicHJvamVjdFJlZ2lzdGVyUmVkdWNlciIsInByb2plY3RzUmVkdWNlciIsImF1dGhSZWR1Y2VyIiwidm90ZXNSZWR1Y2VyIiwiaXNMb2NhbGhvc3QiLCJCb29sZWFuIiwiaG9zdG5hbWUiLCJjb25maWciLCJyZWdpc3RlclZhbGlkU1ciLCJzd1VybCIsIm5hdmlnYXRvciIsInRoZW4iLCJyZWdpc3RyYXRpb24iLCJvbnVwZGF0ZWZvdW5kIiwiaW5zdGFsbGluZ1dvcmtlciIsImluc3RhbGxpbmciLCJvbnN0YXRlY2hhbmdlIiwiY29udHJvbGxlciIsImNvbnNvbGUiLCJsb2ciLCJvblVwZGF0ZSIsIm9uU3VjY2VzcyIsImNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyIiwiZmV0Y2giLCJjb250ZW50VHlwZSIsImdldCIsInN0YXR1cyIsImluZGV4T2YiLCJyZWFkeSIsInVucmVnaXN0ZXIiLCJyZWxvYWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic2V0VXNlclRvTFMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiY2hhbmdlVXNlckFtb3VudEluTFMiLCJyZW1vdmVVc2VyRnJvbUxTIiwicmVtb3ZlSXRlbSIsInByb2plY3RMaXN0IiwicmVzIiwiZGF0YSIsImxvZ2luSnNvbiIsInB1c2giLCJlcnIiLCJvbkxvZ091dCIsImZvcm1hdHRlZERhdGUiLCJtb21lbnQiLCJmb3JtYXQiLCJqc29uIiwicmVnaXN0ZXJKc29uIiwiZXJyb3JzIiwiY2hpbGRyZW4iLCJ2b3RlSWQiLCJob2JieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUlNQSxNOzs7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUNsQixVQUFNQyxJQUFJLEdBQUdDLHNFQUFhLEVBQTFCO0FBQ0FELFVBQUksR0FBRyxLQUFLRSxLQUFMLENBQVdDLFVBQVgsQ0FBc0JILElBQXRCLENBQUgsR0FBaUMsSUFBckM7QUFDQUEsVUFBSSxHQUFHLEtBQUtFLEtBQUwsQ0FBV0UsY0FBZCxHQUErQixJQUFuQztBQUNEOzs7NkJBRVE7QUFBQSxVQUNBQyxNQURBLEdBQ1MsS0FBS0gsS0FBTCxDQUFXSSxJQURwQixDQUNBRCxNQURBO0FBRVAsYUFDRSwyREFBQyw4REFBRDtBQUFlLGdCQUFRLEVBQUVFLGtDQUFBLENBQVlDO0FBQXJDLFNBQ0UsMkRBQUMsOENBQUQsUUFDRSwyREFBQyxpRUFBRCxPQURGLEVBRUUsMkRBQUMsdURBQUQsUUFDRSwyREFBQyxzREFBRDtBQUFPLGFBQUssTUFBWjtBQUFhLFlBQUksRUFBQyxHQUFsQjtBQUFzQixpQkFBUyxFQUFFQyw2REFBSUE7QUFBckMsUUFERixFQUVFLDJEQUFDLHNEQUFEO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsaUJBQVMsRUFBRUMsZ0VBQUtBO0FBQXJDLFFBRkYsRUFHRSwyREFBQyxzREFBRDtBQUFPLFlBQUksRUFBQyxXQUFaO0FBQXdCLGlCQUFTLEVBQUVDLDZFQUFZQTtBQUEvQyxRQUhGLEVBSUUsMkRBQUMsc0RBQUQ7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFBUyxFQUFFQywrREFBS0E7QUFBckMsUUFKRixFQUtFLDJEQUFDLHNEQUFEO0FBQU8sWUFBSSxFQUFDLFdBQVo7QUFBd0IsaUJBQVMsRUFBRUMsc0VBQVFBO0FBQTNDLFFBTEYsRUFNRSwyREFBQyxzREFBRDtBQUFPLFlBQUksRUFBQyxPQUFaO0FBQW9CLGlCQUFTLEVBQUVDLDhEQUFJQTtBQUFuQyxRQU5GLEVBUUUsMkRBQUMsc0RBQUQ7QUFBTyxZQUFJLEVBQUMsY0FBWjtBQUEyQixpQkFBUyxFQUFFQyw0RUFBV0E7QUFBakQsUUFSRixFQVNHVixNQUFNLEdBQUcsMkRBQUMsc0RBQUQ7QUFBTyxZQUFJLEVBQUMsdUJBQVo7QUFBb0MsaUJBQVMsRUFBRVcsNEZBQW1CQTtBQUFsRSxRQUFILEdBQTJFLDJEQUFDLHlEQUFEO0FBQVUsVUFBRSxFQUFDO0FBQWIsUUFUcEYsQ0FGRixDQURGLENBREY7QUFtQkQ7Ozs7RUE1QmtCQywrQzs7QUErQnJCLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTGIsUUFBSSxFQUFFYSxLQUFLLENBQUNiO0FBRFAsR0FBUDtBQUdELENBSkQ7O0FBTUEsSUFBTWMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN4Q2xCLGNBQVUsRUFBRSxvQkFBQ0gsSUFBRDtBQUFBLGFBQVVxQixRQUFRLENBQUNDLHFFQUFRLENBQUN0QixJQUFELENBQVQsQ0FBbEI7QUFBQSxLQUQ0QjtBQUV4Q0ksa0JBQWMsRUFBRTtBQUFBLGFBQU1pQixRQUFRLENBQUNFLDBFQUFjLEVBQWYsQ0FBZDtBQUFBO0FBRndCLEdBQWY7QUFBQSxDQUEzQjs7QUFLZUMsMEhBQU8sQ0FBQ04sZUFBRCxFQUFpQkUsa0JBQWpCLENBQVAsQ0FBNENyQixNQUE1QyxDQUFmLEU7Ozs7Ozs7Ozs7OztBQzVEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxTQUFTdUIsUUFBVCxDQUFrQnRCLElBQWxCLEVBQXdCO0FBQzNCLFNBQU87QUFDSHlCLFFBQUksRUFBRUMsZ0RBREg7QUFFSDFCLFFBQUksRUFBSkE7QUFGRyxHQUFQO0FBSUg7QUFFTSxTQUFTMkIsTUFBVCxHQUFrQjtBQUNyQixTQUFPO0FBQ0hGLFFBQUksRUFBRUMsOENBQWFFO0FBRGhCLEdBQVA7QUFHSDtBQUVNLFNBQVNDLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQzdCLFNBQU87QUFDSEwsUUFBSSxFQUFFQyxnREFESDtBQUVISSxVQUFNLEVBQU5BO0FBRkcsR0FBUDtBQUlILEM7Ozs7Ozs7Ozs7OztBQ3BCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVNDLGFBQVQsQ0FBdUJDLENBQXZCLEVBQTBCO0FBQy9CLFNBQU87QUFDTFAsUUFBSSxFQUFFQyxpRUFERDtBQUVMTyxRQUFJLEVBQUVELENBQUMsQ0FBQ0UsTUFBRixDQUFTRCxJQUZWO0FBR0xFLFNBQUssRUFBRUgsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBSFgsR0FBUDtBQUtEO0FBRU0sU0FBU0MsYUFBVCxHQUF5QjtBQUM5QixTQUFPO0FBQ0xYLFFBQUksRUFBRUMsNERBQXdCVztBQUR6QixHQUFQO0FBR0Q7QUFFTSxTQUFTQyxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFDdEMsU0FBTztBQUNMZCxRQUFJLEVBQUVDLDBEQUREO0FBRUxhLFNBQUssRUFBTEE7QUFGSyxHQUFQO0FBSUQ7QUFFTSxTQUFTQyxrQkFBVCxDQUE0QnhDLElBQTVCLEVBQWtDO0FBQ3ZDLFNBQU87QUFDTHlCLFFBQUksRUFBQ0MsNERBREE7QUFFTDFCLFFBQUksRUFBSkE7QUFGSyxHQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7O0FDNUJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxTQUFTK0IsYUFBVCxDQUF1QkMsQ0FBdkIsRUFBMEI7QUFDL0IsU0FBTztBQUNMUCxRQUFJLEVBQUVDLHlFQUREO0FBRUxPLFFBQUksRUFBRUQsQ0FBQyxDQUFDRSxNQUFGLENBQVNELElBRlY7QUFHTEUsU0FBSyxFQUFFSCxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFIWCxHQUFQO0FBS0Q7QUFFTSxTQUFTTSxZQUFULENBQXNCQyxJQUF0QixFQUE0QjtBQUNqQyxTQUFPO0FBQ0xqQixRQUFJLEVBQUVDLG1FQUREO0FBRUxnQixRQUFJLEVBQUpBO0FBRkssR0FBUDtBQUlEO0FBRU0sU0FBU0MsNEJBQVQsR0FBd0M7QUFDN0MsU0FBTztBQUNMbEIsUUFBSSxFQUFFQyxvRUFBbUNrQjtBQURwQyxHQUFQO0FBR0Q7QUFFTSxTQUFTQywwQkFBVCxDQUFvQ04sS0FBcEMsRUFBMkM7QUFDaEQsU0FBTztBQUNMZCxRQUFJLEVBQUVDLGtFQUREO0FBRUxhLFNBQUssRUFBTEE7QUFGSyxHQUFQO0FBSUQ7QUFFTSxTQUFTTywyQkFBVCxDQUFxQ0MsV0FBckMsRUFBa0Q7QUFDdkQsU0FBTztBQUNMdEIsUUFBSSxFQUFFQyxvRUFERDtBQUVMcUIsZUFBVyxFQUFYQTtBQUZLLEdBQVA7QUFJRCxDOzs7Ozs7Ozs7Ozs7QUNuQ0Q7QUFBQTtBQUFBO0FBQUE7QUFFTyxTQUFTQyxXQUFULENBQXFCQyxRQUFyQixFQUErQjtBQUNwQyxTQUFPO0FBQ0x4QixRQUFJLEVBQUVDLG1EQUREO0FBRUx1QixZQUFRLEVBQVJBO0FBRkssR0FBUDtBQUlELEM7Ozs7Ozs7Ozs7OztBQ1BEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sU0FBU2xCLGFBQVQsQ0FBdUJDLENBQXZCLEVBQTBCO0FBQy9CLFNBQU87QUFDTFAsUUFBSSxFQUFFQyxvRUFERDtBQUVMTyxRQUFJLEVBQUVELENBQUMsQ0FBQ0UsTUFBRixDQUFTRCxJQUZWO0FBR0xFLFNBQUssRUFBRUgsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBSFgsR0FBUDtBQUtEO0FBRU0sU0FBU0MsYUFBVCxHQUF5QjtBQUM5QixTQUFPO0FBQ0xYLFFBQUksRUFBRUMsK0RBQTJCd0I7QUFENUIsR0FBUDtBQUdEO0FBRU0sU0FBU0MsbUJBQVQsQ0FBNkJaLEtBQTdCLEVBQW9DO0FBQ3pDLFNBQU87QUFDTGQsUUFBSSxFQUFFQyw2REFERDtBQUVMYSxTQUFLLEVBQUxBO0FBRkssR0FBUDtBQUlEO0FBRU0sU0FBU2EscUJBQVQsQ0FBK0JwRCxJQUEvQixFQUFxQztBQUMxQyxTQUFPO0FBQ0x5QixRQUFJLEVBQUNDLCtEQURBO0FBRUwxQixRQUFJLEVBQUpBO0FBRkssR0FBUDtBQUlELEM7Ozs7Ozs7Ozs7OztBQzVCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNcUQsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsSUFBTWhCLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLElBQU1pQixnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0IsQyxDQUVQOztBQUVPLElBQU1DLDBCQUEwQixHQUFHLDRCQUFuQztBQUNBLElBQU1OLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLElBQU1PLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLElBQU1DLHFCQUFxQixHQUFHLHVCQUE5QixDLENBRVA7O0FBRU8sSUFBTUMsa0NBQWtDLEdBQUcsb0NBQTNDO0FBQ0EsSUFBTUMsNEJBQTRCLEdBQUcsOEJBQXJDO0FBQ0EsSUFBTWhCLDZCQUE2QixHQUFHLCtCQUF0QztBQUNBLElBQU1pQiwyQkFBMkIsR0FBRyw2QkFBcEM7QUFDQSxJQUFNQyw2QkFBNkIsR0FBRywrQkFBdEMsQyxDQUVQOztBQUVPLElBQU1DLFlBQVksR0FBRyxjQUFyQixDLENBRVA7O0FBRU8sSUFBTUMsU0FBUyxHQUFHLFdBQWxCO0FBQ0EsSUFBTXBDLE9BQU8sR0FBRyxTQUFoQjtBQUNBLElBQU1xQyxTQUFTLEdBQUcsV0FBbEIsQyxDQUVQOztBQUVPLElBQU1DLFNBQVMsR0FBRyxXQUFsQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxhQUFwQixDOzs7Ozs7Ozs7Ozs7QUNuQ1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQzlCLFNBQU87QUFDTDVDLFFBQUksRUFBRUMsZ0RBREQ7QUFFTDJDLFNBQUssRUFBTEE7QUFGSyxHQUFQO0FBSUQ7QUFFTSxTQUFTQyxVQUFULENBQW9CQyxNQUFwQixFQUE0QjtBQUNqQyxTQUFPO0FBQ0w5QyxRQUFJLEVBQUVDLGtEQUREO0FBRUw2QyxVQUFNLEVBQU5BO0FBRkssR0FBUDtBQUlELEM7Ozs7Ozs7Ozs7OztBQ2REO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFPO0FBQ2pCLFNBQ0ksMkRBQUMsd0VBQUQ7QUFBTyxhQUFTLEVBQUM7QUFBakIsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLHVCQURKLENBREo7QUFLSCxDQU5EOztBQVFlQSxvRUFBZixFOzs7Ozs7Ozs7OztBQ1hBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQyxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDekJDLFNBQU8sRUFBRTtBQUNMQyxXQUFPLEVBQUU7QUFDTEMsVUFBSSxFQUFFO0FBREQsS0FESjtBQUlMQyxhQUFTLEVBQUU7QUFDUEQsVUFBSSxFQUFFO0FBREM7QUFKTjtBQURnQixDQUFELENBQTVCOztBQVdBLElBQU1wRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFPO0FBQ2xCLFNBRU07QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNNO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsMkRBQUMsbUVBQUQ7QUFDQSxXQUFPLEVBQUU7QUFEVCw0REFERixDQURKLEVBT0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJLDJEQUFDLG1FQUFEO0FBQVksV0FBTyxFQUFDO0FBQXBCLGdJQURKLENBUEYsRUFhRiwyREFBQyx5RUFBRDtBQUFrQixTQUFLLEVBQUVnRTtBQUF6QixLQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSwyREFBQywrREFBRDtBQUNJLGFBQVMsRUFBQyxRQURkO0FBRUksYUFBUyxFQUFFTSxxREFGZjtBQUdJLFdBQU8sRUFBQyxXQUhaO0FBSUksU0FBSyxFQUFDLFNBSlY7QUFLSSxRQUFJLEVBQUMsT0FMVDtBQU1JLE1BQUUsRUFBQztBQU5QLEtBT0MsMkRBQUMsbUVBQUQ7QUFBWSxTQUFLLEVBQUM7QUFBbEIsbUJBUEQsQ0FERixDQURKLENBYkUsQ0FETixDQUZOO0FBaUNELENBbENEOztBQW9DZXRFLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDdERBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxJQUFNdUUsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxNQUFFQyxLQUFGLFFBQUVBLEtBQUY7QUFBQSxvQkFBUUMsQ0FBUjtBQUFBLE1BQVFBLENBQVIsdUJBQVUsRUFBVjtBQUFBLFNBQ2I7QUFDRSxTQUFLLEVBQUU7QUFDTEMsV0FBSyxFQUFDRCxDQUFDLEdBQUMsSUFESDtBQUVMRSxZQUFNLEVBQUNGLENBQUMsR0FBQyxJQUZKO0FBR0xHLGlCQUFXLFlBQUlILENBQUMsR0FBQyxDQUFOLHlCQUhOO0FBSUxJLGdCQUFVLFlBQUlKLENBQUMsR0FBQyxDQUFOLHlCQUpMO0FBS0xLLGVBQVMsWUFBSUwsQ0FBQyxHQUFDLENBQU4sc0JBQW1CRCxLQUFuQixDQUxKO0FBTUxPLGtCQUFZLFlBQUlOLENBQUMsR0FBQyxDQUFOLHNCQUFtQkQsS0FBbkI7QUFOUCxLQURUO0FBU0UsYUFBUyxtQkFBWUEsS0FBWjtBQVRYLElBRGE7QUFBQSxDQUFmOztBQWFlRCxxRUFBZixFOzs7Ozs7Ozs7OztBQ2hCQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNUCxLQUFLLEdBQUdDLGdGQUFjLENBQUM7QUFDekJDLFNBQU8sRUFBRTtBQUNMQyxXQUFPLEVBQUU7QUFDTEMsVUFBSSxFQUFFO0FBREQsS0FESjtBQUlMQyxhQUFTLEVBQUU7QUFDUEQsVUFBSSxFQUFFO0FBREMsS0FKTjtBQU9MdEMsU0FBSyxFQUFFO0FBQ0hzQyxVQUFJLEVBQUU7QUFESDtBQVBGO0FBRGdCLENBQUQsQ0FBNUI7O0FBY0EsSUFBTVksTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQWhCLEtBQUs7QUFBQSxTQUFLO0FBQ3JCSSxRQUFJO0FBQ0FNLFdBQUssRUFBRSxNQURQO0FBRUFPLGFBQU8sRUFBRSxPQUZUO0FBR0FDLGdCQUFVLEVBQUVsQixLQUFLLENBQUNtQixPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FIakM7QUFJQUMsaUJBQVcsRUFBRXJCLEtBQUssQ0FBQ21CLE9BQU4sQ0FBY0MsSUFBZCxHQUFxQjtBQUpsQyxPQUtDcEIsS0FBSyxDQUFDc0IsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsTUFBTXZCLEtBQUssQ0FBQ21CLE9BQU4sQ0FBY0MsSUFBZCxHQUFxQixDQUFyQixHQUF5QixDQUFwRCxDQUxELEVBSzBEO0FBQ3REVixXQUFLLEVBQUUsR0FEK0M7QUFFdERRLGdCQUFVLEVBQUUsTUFGMEM7QUFHdERHLGlCQUFXLEVBQUU7QUFIeUMsS0FMMUQsQ0FEaUI7QUFZckJHLFNBQUs7QUFDREMsZUFBUyxFQUFFekIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxJQUR4QjtBQUVESCxhQUFPLEVBQUUsTUFGUjtBQUdEUyxtQkFBYSxFQUFFLFFBSGQ7QUFJREMsZ0JBQVUsRUFBRSxRQUpYO0FBS0RDLGFBQU8sWUFBSzVCLEtBQUssQ0FBQ21CLE9BQU4sQ0FBY0MsSUFBZCxHQUFxQixDQUExQixnQkFBaUNwQixLQUFLLENBQUNtQixPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FBdEQsZ0JBQTZEcEIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBQWxGO0FBTE4sT0FNQXBCLEtBQUssQ0FBQ3NCLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBTkEsRUFNNkI7QUFDMUJFLGVBQVMsRUFBRXpCLEtBQUssQ0FBQ21CLE9BQU4sQ0FBY0MsSUFBZCxHQUFvQjtBQURMLEtBTjdCLENBWmdCO0FBdUJyQlMsVUFBTSxFQUFFO0FBQ0pDLFlBQU0sRUFBRTlCLEtBQUssQ0FBQ21CLE9BQU4sQ0FBY0MsSUFEbEI7QUFFSlcscUJBQWUsRUFBRTtBQUZiLEtBdkJhO0FBMkJyQkMsUUFBSSxFQUFFO0FBQ0Z0QixXQUFLLEVBQUUsTUFETDtBQUVGZSxlQUFTLEVBQUV6QixLQUFLLENBQUNtQixPQUFOLENBQWNDO0FBRnZCLEtBM0JlO0FBK0JyQmEsYUFBUyxFQUFFO0FBQ1B0QixZQUFNLEVBQUU7QUFERCxLQS9CVTtBQWtDckJ1QixVQUFNLEVBQUU7QUFDSlQsZUFBUyxFQUFFekIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBRDVCO0FBRUpULFlBQU0sRUFBRTtBQUZKO0FBbENhLEdBQUw7QUFBQSxDQUFwQjs7SUF3Q014RSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NERBQ007QUFDSmdHLFVBQUksRUFBRTtBQURGLEs7O2tFQUlNLFlBQU07QUFDaEIsWUFBS0MsUUFBTCxDQUFjO0FBQUVELFlBQUksRUFBRTtBQUFSLE9BQWQ7QUFDSCxLOztrRUFFYSxZQUFNO0FBQ2hCLFlBQUtDLFFBQUwsQ0FBYztBQUFFRCxZQUFJLEVBQUU7QUFBUixPQUFkO0FBQ0gsSzs7bUVBRWMsVUFBQzVFLENBQUQsRUFBTztBQUNsQkEsT0FBQyxDQUFDOEUsY0FBRjs7QUFDQSxZQUFLNUcsS0FBTCxDQUFXNkcsWUFBWCxDQUF3QixNQUFLN0csS0FBTCxDQUFXOEcsS0FBbkMsRUFBMEMsTUFBSzlHLEtBQUwsQ0FBVytHLE9BQXJEO0FBQ0gsSzs7Ozs7Ozs2QkFFUTtBQUFBLDhCQUN1QyxLQUFLL0csS0FBTCxDQUFXOEcsS0FEbEQ7QUFBQSxVQUNHRSxLQURILHFCQUNHQSxLQURIO0FBQUEsVUFDVUMsUUFEVixxQkFDVUEsUUFEVjtBQUFBLFVBQ29CNUUsS0FEcEIscUJBQ29CQSxLQURwQjtBQUFBLFVBQzJCNkUsT0FEM0IscUJBQzJCQSxPQUQzQjtBQUFBLFVBRUVyRixhQUZGLEdBRW1CLEtBQUs3QixLQUZ4QixDQUVFNkIsYUFGRjtBQUFBLFVBR0dzRixPQUhILEdBR2UsS0FBS25ILEtBSHBCLENBR0dtSCxPQUhIO0FBSUwsYUFDSSwyREFBQywwRUFBRDtBQUFrQixhQUFLLEVBQUU1QztBQUF6QixTQUNJO0FBQU0saUJBQVMsRUFBRTRDLE9BQU8sQ0FBQ3hDO0FBQXpCLFNBQ0ksMkRBQUMsOERBQUQ7QUFBTyxpQkFBUyxFQUFFd0MsT0FBTyxDQUFDcEI7QUFBMUIsU0FDSSwyREFBQyxxRUFBRCxPQURKLEVBRUksMkRBQUMsZ0VBQUQ7QUFBUSxpQkFBUyxFQUFFb0IsT0FBTyxDQUFDZjtBQUEzQixTQUNJLDJEQUFDLHVFQUFELE9BREosQ0FGSixFQUtJLDJEQUFDLG1FQUFEO0FBQ0ksaUJBQVMsRUFBQyxJQURkO0FBQ21CLGVBQU8sRUFBQztBQUQzQixtQkFMSixFQVVLL0QsS0FBSyxHQUFHLDJEQUFDLDJEQUFEO0FBQ0wsYUFBSyxFQUFFQSxLQURGO0FBRUwsWUFBSSxFQUFFLEtBQUtwQixLQUFMLENBQVd5RixJQUZaO0FBR0wsZUFBTyxFQUFFLEtBQUtVO0FBSFQsUUFBSCxHQUlELElBZFQsRUFnQkk7QUFBTSxpQkFBUyxFQUFFRCxPQUFPLENBQUNaLElBQXpCO0FBQ00sZ0JBQVEsRUFBRSxLQUFLTSxZQURyQjtBQUVNLGtCQUFVLE1BRmhCO0FBRWlCLG9CQUFZLEVBQUM7QUFGOUIsU0FHSSwyREFBQyxrRUFBRDtBQUNJLFlBQUksRUFBQyxPQURUO0FBRUksWUFBSSxFQUFDLE9BRlQ7QUFHSSxhQUFLLEVBQUVHLEtBSFg7QUFJSSxnQkFBUSxFQUFFbkYsYUFKZDtBQUtJLGlCQUFTLE1BTGI7QUFNSSxnQkFBUSxNQU5aO0FBT0ksYUFBSyxFQUFDLE9BUFY7QUFRSSxjQUFNLEVBQUMsUUFSWDtBQVNJLGVBQU8sRUFBQyxVQVRaO0FBVUksaUJBQVMsRUFBRXNGLE9BQU8sQ0FBQ1g7QUFWdkIsUUFISixFQWVJLDJEQUFDLGtFQUFEO0FBQ0ksWUFBSSxFQUFDLFVBRFQ7QUFFSSxZQUFJLEVBQUMsVUFGVDtBQUdJLGFBQUssRUFBRVMsUUFIWDtBQUlJLGdCQUFRLEVBQUVwRixhQUpkO0FBS0ksaUJBQVMsTUFMYjtBQU1JLGdCQUFRLE1BTlo7QUFPSSxhQUFLLEVBQUMsVUFQVjtBQVFJLGNBQU0sRUFBQyxRQVJYO0FBU0ksZUFBTyxFQUFDLFVBVFo7QUFVSSxpQkFBUyxFQUFFc0YsT0FBTyxDQUFDWDtBQVZ2QixRQWZKLEVBMkJJLDJEQUFDLGdFQUFEO0FBQ0ksZUFBTyxFQUFDLFdBRFo7QUFFSSxhQUFLLEVBQUMsU0FGVjtBQUdJLGlCQUFTLEVBQUMsV0FIZDtBQUlJLGlCQUFTLEVBQUVXLE9BQU8sQ0FBQ1YsTUFKdkI7QUFLSSxjQUFNLEVBQUMsUUFMWDtBQU1JLGlCQUFTLE1BTmI7QUFPSSxvQkFBWSxNQVBoQjtBQVFJLGVBQU8sRUFBRSxLQUFLWSxXQVJsQjtBQVNJLFlBQUksRUFBQztBQVRULFNBVUtILE9BQU8sR0FBRywyREFBQyxzREFBRDtBQUFRLGFBQUssRUFBRSxNQUFmO0FBQXVCLFNBQUMsRUFBRTtBQUExQixRQUFILEdBQ0osMkRBQUMsbUVBQUQ7QUFBWSxhQUFLLEVBQUM7QUFBbEIsbUJBWFIsQ0EzQkosQ0FoQkosQ0FESixFQTJESTtBQUFLLGlCQUFTLEVBQUU7QUFBaEIsaURBQ3lDLEdBRHpDLEVBRUksMkRBQUMsOERBQUQ7QUFDSSxpQkFBUyxFQUFFckMscURBRGY7QUFFSSxhQUFLLEVBQUUsV0FGWDtBQUdJLFVBQUUsRUFBQztBQUhQLG1CQUZKLENBM0RKLENBREosQ0FESjtBQXlFSDs7OztFQS9GZTlELCtDOztBQW1HcEIsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDL0IsU0FBTztBQUNINkYsU0FBSyxFQUFFN0YsS0FBSyxDQUFDNkY7QUFEVixHQUFQO0FBR0gsQ0FKRDs7QUFNQSxJQUFNNUYsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN0Q1UsaUJBQWEsRUFBRSx1QkFBQ0MsQ0FBRDtBQUFBLGFBQU9YLFFBQVEsQ0FBQ21HLG1FQUFBLENBQXNCeEYsQ0FBdEIsQ0FBRCxDQUFmO0FBQUEsS0FEdUI7QUFFdEMrRSxnQkFBWSxFQUFFLHNCQUFDL0csSUFBRCxFQUFPaUgsT0FBUDtBQUFBLGFBQWtCNUYsUUFBUSxDQUFDMEYsdUVBQVksQ0FBQy9HLElBQUQsRUFBTWlILE9BQU4sQ0FBYixDQUExQjtBQUFBO0FBRndCLEdBQWY7QUFBQSxDQUEzQjs7QUFJZXpGLDBIQUFPLENBQUNOLGVBQUQsRUFBaUJFLGtCQUFqQixDQUFQLENBQTRDcUcsNEVBQVUsQ0FBQ2hDLE1BQUQsQ0FBVixDQUFtQjdFLEtBQW5CLENBQTVDLENBQWYsRTs7Ozs7Ozs7Ozs7QUN0TEEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU02RCxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDM0JDLFNBQU8sRUFBRTtBQUNQQyxXQUFPLEVBQUU7QUFDUEMsVUFBSSxFQUFFO0FBREMsS0FERjtBQUlQQyxhQUFTLEVBQUM7QUFDUkQsVUFBSSxFQUFFO0FBREU7QUFKSDtBQURrQixDQUFELENBQTVCO0FBV0EsSUFBTVksTUFBTSxHQUFHO0FBQ2JpQyxNQUFJLEVBQUU7QUFDSnZDLFNBQUssRUFBRTtBQURILEdBRE87QUFLYndDLFdBQVM7QUFDUHhDLFNBQUssRUFBRSxNQURBO0FBRVB5QyxZQUFRLEVBQUUsT0FGSDtBQUdQQyxVQUFNLEVBQUUsQ0FIRDtBQUlQQyxRQUFJLEVBQUUsQ0FKQztBQUtQQyxVQUFNLEVBQUU7QUFMRCxLQU1OdEQsS0FBSyxDQUFDc0IsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FOTSxFQU11QjtBQUM1Qk4sV0FBTyxFQUFFO0FBRG1CLEdBTnZCLENBTEk7QUFpQmJzQyxTQUFPLEVBQUU7QUFDUEosWUFBUSxFQUFFLFFBREg7QUFFUEssY0FBVSxFQUFFO0FBRkwsR0FqQkk7QUFzQmJDLE1BQUksRUFBRTtBQUNKQyxZQUFRLEVBQUUsQ0FETjtBQUVKQyxTQUFLLEVBQUU7QUFGSCxHQXRCTztBQTBCYkMsT0FBSztBQUNIcEQsU0FBSyxFQUFFLFNBREo7QUFFSFMsV0FBTyxFQUFFO0FBRk4sS0FHRmpCLEtBQUssQ0FBQ3NCLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBSEUsRUFHMkI7QUFDNUJOLFdBQU8sRUFBRTtBQURtQixHQUgzQixDQTFCUTtBQWlDYjRDLGdCQUFjO0FBQ1o1QyxXQUFPLEVBQUU7QUFERyxLQUVYakIsS0FBSyxDQUFDc0IsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FGVyxFQUVrQjtBQUM1Qk4sV0FBTyxFQUFFO0FBRG1CLEdBRmxCLENBakNEO0FBdUNiNkMsUUFBTSxFQUFFO0FBQ050RCxTQUFLLEVBQUUsU0FERDtBQUVOLGVBQVc7QUFDVEEsV0FBSyxFQUFFO0FBREUsS0FGTDtBQUtOc0IsVUFBTSxFQUFFLE1BTEY7QUFNTmlDLGVBQVcsRUFBRSxFQU5QO0FBT05DLGdCQUFZLEVBQUUsRUFQUjtBQVFOQyxrQkFBYyxFQUFFO0FBUlYsR0F2Q0s7QUFpRGJDLE1BQUksRUFBRTtBQUNKMUQsU0FBSyxFQUFFLFNBREg7QUFFSixlQUFXO0FBQ1RBLFdBQUssRUFBRTtBQURFLEtBRlA7QUFLSnNCLFVBQU0sRUFBRSxNQUxKO0FBTUpGLFdBQU8sRUFBRSxVQU5MO0FBT0pxQyxrQkFBYyxFQUFFLE1BUFo7QUFRSkUsaUJBQWEsRUFBRTtBQVJYLEdBakRPO0FBMkRiQyxjQUFZLEVBQUU7QUFDWm5ELFdBQU8sRUFBRSxPQURHO0FBRVpULFNBQUssRUFBRSxTQUZLO0FBR1osZUFBVztBQUNUQSxXQUFLLEVBQUU7QUFERSxLQUhDO0FBTVpzQixVQUFNLEVBQUUsTUFOSTtBQU9aaUMsZUFBVyxFQUFFLEVBUEQ7QUFRWkMsZ0JBQVksRUFBRSxFQVJGO0FBU1pLLFlBQVEsRUFBRSxNQVRFO0FBVVpDLGFBQVMsRUFBRTtBQVZDLEdBM0REO0FBdUViQyxjQUFZLEVBQUU7QUFDWi9ELFNBQUssRUFBRSxTQURLO0FBRVp1QixtQkFBZSxFQUFFLFNBRkw7QUFHWnlDLGdCQUFZLEVBQUUsRUFIRjtBQUlaQyxjQUFVLEVBQUUsR0FKQTtBQUtaLGVBQVc7QUFDVDFDLHFCQUFlLEVBQUU7QUFEUjtBQUxDLEdBdkVEO0FBZ0ZiMkMsZUFBYTtBQUNYekQsV0FBTyxFQUFFO0FBREUsS0FFVmpCLEtBQUssQ0FBQ3NCLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBRlUsRUFFbUI7QUFDNUJOLFdBQU8sRUFBRTtBQURtQixHQUZuQixDQWhGQTtBQXNGYjBELGFBQVcsRUFBRTtBQUNYbkUsU0FBSyxFQUFFO0FBREk7QUF0RkEsQ0FBZjs7SUEyRk1vRSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NERBQ0k7QUFDTmxILFdBQUssRUFBRSxDQUREO0FBRU5tSCxjQUFRLEVBQUU7QUFGSixLOzttRUFLTyxVQUFDQyxLQUFELEVBQVFwSCxLQUFSLEVBQWtCO0FBQy9CLFlBQUswRSxRQUFMLENBQWM7QUFBQzFFLGFBQUssRUFBTEE7QUFBRCxPQUFkO0FBQ0QsSzs7cUVBRWdCO0FBQUEsYUFBTSxNQUFLakMsS0FBTCxDQUFXc0osYUFBWCxDQUF5QixNQUFLdEosS0FBTCxDQUFXK0csT0FBcEMsQ0FBTjtBQUFBLEs7Ozs7Ozs7NkJBR1I7QUFBQSx3QkFDcUIsS0FBSy9HLEtBRDFCO0FBQUEsVUFDQW1ILE9BREEsZUFDQUEsT0FEQTtBQUFBLFVBQ1NvQyxRQURULGVBQ1NBLFFBRFQ7QUFBQSw2QkFFZ0IsS0FBS3ZKLEtBQUwsQ0FBV0ksSUFGM0I7QUFBQSxVQUVBRCxNQUZBLG9CQUVBQSxNQUZBO0FBQUEsVUFFUXFKLElBRlIsb0JBRVFBLElBRlI7QUFHUCxhQUNJLDJEQUFDLHlFQUFEO0FBQWtCLGFBQUssRUFBRWpGO0FBQXpCLFNBQ0U7QUFBSyxpQkFBUyxFQUFFNEMsT0FBTyxDQUFDSztBQUF4QixTQUNFLDJEQUFDLCtEQUFEO0FBQVEsaUJBQVMsRUFBRUwsT0FBTyxDQUFDVztBQUEzQixTQUNFLDJEQUFDLGdFQUFELFFBQ0UsMkRBQUMsK0RBQUQ7QUFDSSxpQkFBUyxFQUFFWCxPQUFPLENBQUNnQixLQUR2QjtBQUVJLGFBQUssRUFBQyxXQUZWO0FBR0ksaUJBQVMsRUFBRXNCLHdEQUhmO0FBRzhCLFVBQUUsRUFBQztBQUhqQyxzQkFERixFQVFFO0FBQUssaUJBQVMsRUFBRXRDLE9BQU8sQ0FBQzhCO0FBQXhCLFNBQ0c5SSxNQUFNLEdBQ1AsMkRBQUMsK0RBQUQ7QUFBUSxhQUFLLEVBQUMsV0FBZDtBQUEwQixpQkFBUyxFQUFFZ0gsT0FBTyxDQUFDK0IsV0FBN0M7QUFBMEQsaUJBQVMsRUFBRU8sd0RBQXJFO0FBQW9GLFVBQUUsRUFBQztBQUF2RixzQkFETyxHQUdLLElBSmQsQ0FSRixFQWdCRTtBQUFLLGlCQUFTLEVBQUV0QyxPQUFPLENBQUNhO0FBQXhCLFFBaEJGLEVBaUJFO0FBQUssaUJBQVMsRUFBRWIsT0FBTyxDQUFDaUI7QUFBeEIsU0FDR2pJLE1BQU0sR0FDSCwyREFBRSwrREFBRjtBQUNJLGlCQUFTLEVBQUUsZ0JBQWdCb0osUUFBUSxDQUFDRyxRQUF6QixHQUFvQ3ZDLE9BQU8sQ0FBQzJCLFlBQTVDLEdBQTJEM0IsT0FBTyxDQUFDa0IsTUFEbEY7QUFFSSxpQkFBUyxFQUFFb0Isd0RBRmY7QUFHSSxhQUFLLE1BSFQ7QUFJSSxVQUFFLEVBQUM7QUFKUCw2QkFERyxHQVNILDJEQUFFLCtEQUFGO0FBQ0ksaUJBQVMsRUFBRSxRQUFRRixRQUFRLENBQUNHLFFBQWpCLEdBQTRCdkMsT0FBTyxDQUFDMkIsWUFBcEMsR0FBbUQzQixPQUFPLENBQUNrQixNQUQxRTtBQUVJLGlCQUFTLEVBQUVvQix3REFGZjtBQUdJLGFBQUssTUFIVDtBQUlJLFVBQUUsRUFBQztBQUpQLG9CQVZOLEVBaUJHdEosTUFBTSxHQUNILDJEQUFDLCtEQUFEO0FBQ0ksaUJBQVMsRUFBRSw0QkFBNEJvSixRQUFRLENBQUNHLFFBQXJDLEdBQWdEdkMsT0FBTyxDQUFDMkIsWUFBeEQsR0FBdUUzQixPQUFPLENBQUNrQixNQUQ5RjtBQUVJLGlCQUFTLEVBQUVvQix3REFGZjtBQUdJLFVBQUUsRUFBQztBQUhQLDRCQURHLEdBT0gsMkRBQUMsK0RBQUQ7QUFDSSxpQkFBUyxFQUFFLGdCQUFnQkYsUUFBUSxDQUFDRyxRQUF6QixHQUFvQ3ZDLE9BQU8sQ0FBQzJCLFlBQTVDLEdBQTJEM0IsT0FBTyxDQUFDa0IsTUFEbEY7QUFFSSxpQkFBUyxFQUFFb0Isd0RBRmY7QUFHSSxVQUFFLEVBQUM7QUFIUCw4QkF4Qk4sRUE4Qkd0SixNQUFNLEdBQ0gsMkRBQUMsK0RBQUQ7QUFDSSxpQkFBUyxFQUFFLFlBQVlvSixRQUFRLENBQUNHLFFBQXJCLEdBQWdDdkMsT0FBTyxDQUFDMkIsWUFBeEMsR0FBdUQzQixPQUFPLENBQUNrQixNQUQ5RTtBQUVJLGlCQUFTLEVBQUVvQix3REFGZjtBQUdJLFVBQUUsRUFBQztBQUhQLFNBR2dCLEtBQUt6SixLQUFMLENBQVdJLElBQVgsQ0FBZ0I0RyxLQUhoQyxPQUd3QyxLQUFLaEgsS0FBTCxDQUFXSSxJQUFYLENBQWdCd0IsTUFIeEQsV0FERyxHQU1ILDJEQUFDLCtEQUFEO0FBQ0ksaUJBQVMsRUFBRSxhQUFhMkgsUUFBUSxDQUFDRyxRQUF0QixHQUFpQ3ZDLE9BQU8sQ0FBQzJCLFlBQXpDLEdBQXdEM0IsT0FBTyxDQUFDa0IsTUFEL0U7QUFFSSxpQkFBUyxFQUFFb0Isd0RBRmY7QUFHSSxVQUFFLEVBQUM7QUFIUCxvQkFwQ04sRUE0Q0dELElBQUksS0FBSyxDQUFULEdBQ0csMkRBQUMsK0RBQUQ7QUFBUSxZQUFJLEVBQUUsUUFBZDtBQUF3QixpQkFBUyxFQUFFckMsT0FBTyxDQUFDa0I7QUFBM0MsaUJBREgsR0FFSyxJQTlDUixDQWpCRixFQW9FR2xJLE1BQU0sR0FDSCxJQURHLEdBQ0c7QUFBSyxpQkFBUyxFQUFFZ0gsT0FBTyxDQUFDOEI7QUFBeEIsU0FDSiwyREFBQywrREFBRDtBQUFRLGFBQUssRUFBQyxXQUFkO0FBQTBCLGlCQUFTLEVBQUU5QixPQUFPLENBQUMrQixXQUE3QztBQUEwRCxpQkFBUyxFQUFFTyx3REFBckU7QUFBb0YsVUFBRSxFQUFDO0FBQXZGLHNCQURJLENBckVaLEVBNkVFO0FBQUssaUJBQVMsRUFBRXRDLE9BQU8sQ0FBQ2E7QUFBeEIsUUE3RUYsRUE4RUU7QUFBSyxpQkFBUyxFQUFFYixPQUFPLENBQUNpQjtBQUF4QixTQUNHakksTUFBTSxHQUNILDJEQUFFLCtEQUFGO0FBQVMsaUJBQVMsRUFBRWdILE9BQU8sQ0FBQ2tCLE1BQTVCO0FBQW9DLGVBQU8sRUFBRSxLQUFLc0IsY0FBbEQ7QUFBa0UsVUFBRSxFQUFDO0FBQXJFLGtCQURHLEdBS0gsMkRBQUUsK0RBQUY7QUFBUyxpQkFBUyxFQUFFeEMsT0FBTyxDQUFDa0IsTUFBNUI7QUFBb0MsaUJBQVMsRUFBRXhELHFEQUEvQztBQUEyRCxVQUFFLEVBQUM7QUFBOUQsbUJBTk4sQ0E5RUYsRUF5Rkk7QUFBSyxpQkFBUyxFQUFFc0MsT0FBTyxDQUFDOEI7QUFBeEIsU0FDQzlJLE1BQU0sR0FDSDtBQUFLLGlCQUFTLEVBQUVnSCxPQUFPLENBQUM4QjtBQUF4QixTQUNJLDJEQUFDLCtEQUFEO0FBQVEsYUFBSyxFQUFDLFdBQWQ7QUFBMEIsaUJBQVMsRUFBRTlCLE9BQU8sQ0FBQytCLFdBQTdDO0FBQTBELGVBQU8sRUFBRSxLQUFLUyxjQUF4RTtBQUNRLFVBQUUsRUFBQztBQURYLGtCQURKLENBREcsR0FNTSxJQVBiLENBekZKLENBREYsQ0FERixDQURGLEVBMEdHeEosTUFBTSxHQUNILDJEQUFDLHlFQUFEO0FBQ0ksa0JBQVUsTUFEZDtBQUVJLGlCQUFTLEVBQUVnSCxPQUFPLENBQUNNO0FBRnZCLFNBR0UsMkRBQUMsZ0ZBQUQ7QUFBd0IsYUFBSyxFQUFDLE1BQTlCO0FBQXFDLGlCQUFTLEVBQUU1QyxxREFBaEQ7QUFBNEQsVUFBRSxFQUFDLEdBQS9EO0FBQW1FLFlBQUksRUFBRSwyREFBQywrREFBRDtBQUF6RSxRQUhGLEVBSUUsMkRBQUMsZ0ZBQUQ7QUFBd0IsYUFBSyxFQUFDLFVBQTlCO0FBQTBDLGlCQUFTLEVBQUVBLHFEQUFyRDtBQUFpRSxVQUFFLEVBQUMsV0FBcEU7QUFBZ0YsWUFBSSxFQUFFLDJEQUFDLHFFQUFEO0FBQXRGLFFBSkYsRUFLRSwyREFBQyxnRkFBRDtBQUF3QixhQUFLLEVBQUMsUUFBOUI7QUFBdUMsaUJBQVMsRUFBRUEscURBQWxEO0FBQThELFVBQUUsRUFBQyx1QkFBakU7QUFBeUYsWUFBSSxFQUFFLDJEQUFDLHFFQUFEO0FBQS9GLFFBTEYsRUFNRzJFLElBQUksS0FBSyxDQUFULEdBQWEsMkRBQUMsZ0ZBQUQ7QUFBd0IsYUFBSyxFQUFDLE9BQTlCO0FBQXNDLFlBQUksRUFBRSxRQUE1QztBQUFzRCxZQUFJLEVBQUUsMkRBQUMsaUVBQUQ7QUFBNUQsUUFBYixHQUNhLDJEQUFDLGdGQUFEO0FBQXdCLGFBQUssRUFBRSxLQUFLeEosS0FBTCxDQUFXSSxJQUFYLENBQWdCNEcsS0FBL0M7QUFBc0QsaUJBQVMsRUFBRW5DLHFEQUFqRTtBQUE2RSxVQUFFLEVBQUMsT0FBaEY7QUFBd0YsWUFBSSxFQUFFLDJEQUFDLGlFQUFEO0FBQTlGLFFBUGhCLENBREcsR0FZSCwyREFBQyx5RUFBRDtBQUNJLGtCQUFVLE1BRGQ7QUFFSSxpQkFBUyxFQUFFc0MsT0FBTyxDQUFDTTtBQUZ2QixTQUdFLDJEQUFDLGdGQUFEO0FBQXdCLGFBQUssRUFBQyxNQUE5QjtBQUF1QyxpQkFBUyxFQUFFNUMscURBQWxEO0FBQThELFVBQUUsRUFBQyxHQUFqRTtBQUFxRSxZQUFJLEVBQUUsMkRBQUMsK0RBQUQ7QUFBM0UsUUFIRixFQUlFLDJEQUFDLGdGQUFEO0FBQXdCLGFBQUssRUFBQyxTQUE5QjtBQUF3QyxpQkFBUyxFQUFFQSxxREFBbkQ7QUFBK0QsVUFBRSxFQUFDLFdBQWxFO0FBQThFLFlBQUksRUFBRSwyREFBQyxvRUFBRDtBQUFwRixRQUpGLEVBS0UsMkRBQUMsZ0ZBQUQ7QUFBd0IsYUFBSyxFQUFDLFNBQTlCO0FBQXdDLGlCQUFTLEVBQUVBLHFEQUFuRDtBQUErRCxVQUFFLEVBQUMsUUFBbEU7QUFBMkUsWUFBSSxFQUFFLDJEQUFDLGlFQUFEO0FBQWpGLFFBTEYsQ0F0SE4sQ0FESjtBQWlJRDs7OztFQWpKa0I5RCwrQzs7QUFvSnJCb0ksTUFBTSxDQUFDUyxTQUFQLEdBQW1CO0FBQ2pCekMsU0FBTyxFQUFFMEMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFEVCxDQUFuQjs7QUFLQSxJQUFNL0ksZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMYixRQUFJLEVBQUVhLEtBQUssQ0FBQ2I7QUFEUCxHQUFQO0FBR0QsQ0FKRDs7QUFNQSxJQUFNYyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFlO0FBQ3hDbUksaUJBQWEsRUFBRSx1QkFBQ3ZDLE9BQUQ7QUFBQSxhQUFhNUYsUUFBUSxDQUFDNkksb0VBQU0sQ0FBQ2pELE9BQUQsQ0FBUCxDQUFyQjtBQUFBO0FBRHlCLEdBQWY7QUFBQSxDQUEzQjs7QUFJZXpGLDBIQUFPLENBQUNOLGVBQUQsRUFBa0JFLGtCQUFsQixDQUFQLENBQTZDK0ksbUVBQVUsQ0FBQzFDLDJFQUFVLENBQUNoQyxNQUFELENBQVYsQ0FBbUI0RCxNQUFuQixDQUFELENBQXZELENBQWYsRTs7Ozs7Ozs7Ozs7O0FDOVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNNUUsS0FBSyxHQUFHQywrRUFBYyxDQUFDO0FBQ3pCQyxTQUFPLEVBQUU7QUFDTEMsV0FBTyxFQUFFO0FBQ0xDLFVBQUksRUFBRTtBQURELEtBREo7QUFJTEMsYUFBUyxFQUFFO0FBQ1BELFVBQUksRUFBRTtBQURDO0FBSk47QUFEZ0IsQ0FBRCxDQUE1Qjs7QUFhQSxJQUFNOUQsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ2IsS0FBRCxFQUFXO0FBQUEsTUFDdEI0QixNQURzQixHQUNaNUIsS0FBSyxDQUFDSSxJQURNLENBQ3RCd0IsTUFEc0I7QUFBQSxNQUV0Qm1CLFFBRnNCLEdBRUcvQyxLQUZILENBRXRCK0MsUUFGc0I7QUFBQSxNQUVabUgsV0FGWSxHQUVHbEssS0FGSCxDQUVaa0ssV0FGWTtBQUc3QixNQUFNckgsV0FBVyxHQUFHRSxRQUFRLENBQUNvSCxNQUFULENBQWdCLFVBQUFDLE9BQU8sRUFBSTtBQUM3QyxRQUFHQSxPQUFPLENBQUNDLEVBQVIsQ0FBV0MsUUFBWCxPQUEwQnRLLEtBQUssQ0FBQ3VLLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkgsRUFBaEQsRUFBb0Q7QUFDbEQsYUFBT0QsT0FBUDtBQUNEOztBQUNELFdBQU8sSUFBUDtBQUNELEdBTG1CLEVBS2pCSyxHQUxpQixDQUtiLFVBQUNMLE9BQUQsRUFBVU0sQ0FBVixFQUFnQjtBQUNyQk4sV0FBTyxDQUFDTyxNQUFSLEdBQWlCLENBQWpCOztBQUNBLFFBQUlQLE9BQU8sQ0FBQ2pHLEtBQVIsQ0FBY3lHLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUJSLGFBQU8sQ0FBQ08sTUFBUixHQUFpQlAsT0FBTyxDQUFDakcsS0FBUixDQUFjMEcsTUFBZCxDQUFxQixVQUFDQyxLQUFELEVBQVFDLElBQVIsRUFBZ0I7QUFDcEQsZUFBT0QsS0FBSyxHQUFHQyxJQUFJLENBQUNuSixNQUFwQjtBQUNELE9BRmdCLEVBRWQsQ0FGYyxDQUFqQjtBQUdELEtBSkQsTUFJTyxJQUFHd0ksT0FBTyxDQUFDakcsS0FBUixDQUFjeUcsTUFBZCxLQUF5QixDQUE1QixFQUErQjtBQUNwQ1IsYUFBTyxDQUFDTyxNQUFSLEdBQWlCUCxPQUFPLENBQUNqRyxLQUFSLENBQWMsQ0FBZCxFQUFpQnZDLE1BQWxDO0FBQ0Q7O0FBQ0QsV0FDTTtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQXlCLFNBQUcsRUFBRThJO0FBQTlCLE9BQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUF3Qk4sT0FBTyxDQUFDakMsS0FBaEMsQ0FERixFQUVJO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDSSx3RUFBTWlDLE9BQU8sQ0FBQ08sTUFBZCxZQURKLEVBRUk7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNJLDJEQUFDLHVFQUFEO0FBQWdCLGFBQU8sRUFBRSxRQUF6QjtBQUFtQyxXQUFLLEVBQUdQLE9BQU8sQ0FBQ08sTUFBUixHQUFlUCxPQUFPLENBQUN4SSxNQUF4QixHQUFnQztBQUExRSxNQURKLENBRkosRUFLSSx3RUFBTXdJLE9BQU8sQ0FBQ3hJLE1BQWQsWUFMSixDQUZKLEVBU0k7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNJLDJEQUFDLCtEQUFEO0FBQ0ksYUFBTyxFQUFDLFVBRFo7QUFFSSxhQUFPLEVBQUU7QUFBQSxlQUFNc0ksV0FBVyxDQUFDRSxPQUFPLENBQUNDLEVBQVQsRUFBYSxDQUFiLENBQWpCO0FBQUEsT0FGYjtBQUdJLGNBQVEsRUFBRXpJLE1BQU0sR0FBRztBQUh2QixpQkFESixFQU1JLDJEQUFDLCtEQUFEO0FBQ0ksYUFBTyxFQUFDLFVBRFo7QUFFSSxhQUFPLEVBQUU7QUFBQSxlQUFNc0ksV0FBVyxDQUFDRSxPQUFPLENBQUNDLEVBQVQsRUFBYSxFQUFiLENBQWpCO0FBQUEsT0FGYjtBQUdJLGNBQVEsRUFBRXpJLE1BQU0sR0FBRztBQUh2QixrQkFOSixFQVdJLDJEQUFDLCtEQUFEO0FBQ0ksYUFBTyxFQUFDLFVBRFo7QUFFSSxhQUFPLEVBQUU7QUFBQSxlQUFNc0ksV0FBVyxDQUFDRSxPQUFPLENBQUNDLEVBQVQsRUFBYSxFQUFiLENBQWpCO0FBQUEsT0FGYjtBQUdJLGNBQVEsRUFBRXpJLE1BQU0sR0FBRztBQUh2QixrQkFYSixDQVRKLEVBMkJJO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDTTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0UseUZBREYsRUFFRTtBQUFLLGVBQVMsRUFBQztBQUFmLFlBQThCd0ksT0FBTyxDQUFDcEQsS0FBdEMsQ0FGRixDQUROLEVBS0k7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNJLHdFQUFNb0QsT0FBTyxDQUFDWSxXQUFkLENBREosQ0FMSixDQTNCSixFQXFDSSwyREFBQywrREFBRDtBQUNJLGVBQVMsRUFBQyxRQURkO0FBRUksYUFBTyxFQUFDLFdBRlo7QUFHSSxXQUFLLEVBQUMsU0FIVjtBQUlJLGVBQVMsRUFBRW5HLHFEQUpmO0FBS0ksUUFBRSxFQUFDO0FBTFAsT0FNSSwyREFBQyxrRkFBRDtBQUNJLFdBQUssRUFBQztBQURWLDBCQU5KLENBckNKLENBRE47QUFrREQsR0FoRW1CLENBQXBCO0FBaUVBLFNBQ0ksMkRBQUMseUVBQUQ7QUFBa0IsU0FBSyxFQUFFTjtBQUF6QixLQUNJLDJEQUFDLHdFQUFEO0FBQU8sYUFBUyxFQUFDO0FBQWpCLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHMUIsV0FESCxDQURGLENBREosQ0FESjtBQVNELENBN0VEOztBQStFQSxJQUFNN0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMOEIsWUFBUSxFQUFFOUIsS0FBSyxDQUFDOEIsUUFBTixDQUFlQSxRQURwQjtBQUVMM0MsUUFBSSxFQUFFYSxLQUFLLENBQUNiO0FBRlAsR0FBUDtBQUlELENBTEQ7O0FBT0EsSUFBTWMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN4QytJLGVBQVcsRUFBRSxxQkFBQ2UsU0FBRCxFQUFZckosTUFBWjtBQUFBLGFBQXVCVCxRQUFRLENBQUMrSixnRUFBTSxDQUFDRCxTQUFELEVBQVlySixNQUFaLENBQVAsQ0FBL0I7QUFBQTtBQUQyQixHQUFmO0FBQUEsQ0FBM0I7O0FBS2VOLDBIQUFPLENBQUNOLGVBQUQsRUFBaUJFLGtCQUFqQixDQUFQLENBQTRDTCxXQUE1QyxDQUFmLEU7Ozs7Ozs7Ozs7O0FDcEhBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNMEQsS0FBSyxHQUFHQyxnRkFBYyxDQUFDO0FBQzNCQyxTQUFPLEVBQUU7QUFDUEMsV0FBTyxFQUFFO0FBQ1BDLFVBQUksRUFBRTtBQURDLEtBREY7QUFJUEMsYUFBUyxFQUFFO0FBQ1RELFVBQUksRUFBRTtBQURHLEtBSko7QUFPUHRDLFNBQUssRUFBRTtBQUNMc0MsVUFBSSxFQUFFO0FBREQ7QUFQQTtBQURrQixDQUFELENBQTVCOztBQWNBLElBQU1ZLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFoQixLQUFLO0FBQUEsU0FBSztBQUN2QkksUUFBSTtBQUNGTSxXQUFLLEVBQUUsTUFETDtBQUVGTyxhQUFPLEVBQUUsT0FGUDtBQUdGQyxnQkFBVSxFQUFFbEIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBSC9CO0FBSUZDLGlCQUFXLEVBQUVyQixLQUFLLENBQUNtQixPQUFOLENBQWNDLElBQWQsR0FBcUI7QUFKaEMsT0FLRHBCLEtBQUssQ0FBQ3NCLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLE1BQU12QixLQUFLLENBQUNtQixPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FBckIsR0FBeUIsQ0FBcEQsQ0FMQyxFQUt3RDtBQUN4RFYsV0FBSyxFQUFFLEdBRGlEO0FBRXhEUSxnQkFBVSxFQUFFLE1BRjRDO0FBR3hERyxpQkFBVyxFQUFFO0FBSDJDLEtBTHhELENBRG1CO0FBWXZCRyxTQUFLO0FBQ0hDLGVBQVMsRUFBRXpCLEtBQUssQ0FBQ21CLE9BQU4sQ0FBY0MsSUFEdEI7QUFFSEgsYUFBTyxFQUFFLE1BRk47QUFHSFMsbUJBQWEsRUFBRSxRQUhaO0FBSUhDLGdCQUFVLEVBQUUsUUFKVDtBQUtIQyxhQUFPLFlBQUs1QixLQUFLLENBQUNtQixPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FBMUIsZ0JBQWlDcEIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBQXRELGdCQUE2RHBCLEtBQUssQ0FBQ21CLE9BQU4sQ0FBY0MsSUFBZCxHQUFxQixDQUFsRjtBQUxKLE9BTUZwQixLQUFLLENBQUNzQixXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQU5FLEVBTTJCO0FBQzVCRSxlQUFTLEVBQUV6QixLQUFLLENBQUNtQixPQUFOLENBQWNDLElBQWQsR0FBb0I7QUFESCxLQU4zQixDQVprQjtBQXNCdkJZLFFBQUksRUFBRTtBQUNKdEIsV0FBSyxFQUFFLE1BREg7QUFFSmUsZUFBUyxFQUFFekIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQztBQUZyQixLQXRCaUI7QUEwQnZCYSxhQUFTLEVBQUU7QUFDVHRCLFlBQU0sRUFBRTtBQURDLEtBMUJZO0FBNkJ2QnVCLFVBQU0sRUFBRTtBQUNOVCxlQUFTLEVBQUV6QixLQUFLLENBQUNtQixPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FEMUI7QUFFTlQsWUFBTSxFQUFFO0FBRkY7QUE3QmUsR0FBTDtBQUFBLENBQXBCOztJQW1DTXBFLG1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7NERBQ0k7QUFDTjRGLFVBQUksRUFBRTtBQURBLEs7O2tFQUlNLFlBQU07QUFDbEIsWUFBS0MsUUFBTCxDQUFjO0FBQUVELFlBQUksRUFBRTtBQUFSLE9BQWQ7QUFDRCxLOztrRUFFYSxZQUFNO0FBQ2xCLFlBQUtDLFFBQUwsQ0FBYztBQUFFRCxZQUFJLEVBQUU7QUFBUixPQUFkO0FBQ0QsSzs7bUVBRWMsVUFBQzVFLENBQUQsRUFBTztBQUNwQkEsT0FBQyxDQUFDOEUsY0FBRjs7QUFDQSxZQUFLNUcsS0FBTCxDQUFXNkcsWUFBWCxDQUF3QixNQUFLN0csS0FBTCxDQUFXbUwsZUFBbkMsRUFBb0QsTUFBS25MLEtBQUwsQ0FBVytHLE9BQS9ELEVBQXdFLE1BQUsvRyxLQUFMLENBQVdJLElBQVgsQ0FBZ0I0RyxLQUF4RjtBQUNELEs7Ozs7Ozs7NkJBRVE7QUFBQSxrQ0FRSixLQUFLaEgsS0FBTCxDQUFXbUwsZUFSUDtBQUFBLFVBRUxDLFFBRksseUJBRUxBLFFBRks7QUFBQSxVQUdMQyxTQUhLLHlCQUdMQSxTQUhLO0FBQUEsVUFJTEwsV0FKSyx5QkFJTEEsV0FKSztBQUFBLFVBS0xwSixNQUxLLHlCQUtMQSxNQUxLO0FBQUEsVUFNTHNGLE9BTksseUJBTUxBLE9BTks7QUFBQSxVQU9MN0UsS0FQSyx5QkFPTEEsS0FQSztBQUFBLFVBU0FSLGFBVEEsR0FTaUIsS0FBSzdCLEtBVHRCLENBU0E2QixhQVRBO0FBQUEsVUFVQ3NGLE9BVkQsR0FVYSxLQUFLbkgsS0FWbEIsQ0FVQ21ILE9BVkQ7QUFBQSxVQVdDSCxLQVhELEdBV1UsS0FBS2hILEtBQUwsQ0FBV0ksSUFYckIsQ0FXQzRHLEtBWEQ7QUFZUCxhQUNJLDJEQUFDLDBFQUFEO0FBQWtCLGFBQUssRUFBRXpDO0FBQXpCLFNBQ0U7QUFBTSxpQkFBUyxFQUFFNEMsT0FBTyxDQUFDeEM7QUFBekIsU0FDRSwyREFBQyw4REFBRDtBQUFPLGlCQUFTLEVBQUV3QyxPQUFPLENBQUNwQjtBQUExQixTQUNFLDJEQUFDLHFFQUFELE9BREYsRUFFRSwyREFBQyxtRUFBRDtBQUNJLGVBQU8sRUFBQyxJQURaO0FBRUksb0JBQVksTUFGaEI7QUFHSSxhQUFLLEVBQUM7QUFIViwrQkFGRixFQVFHMUQsS0FBSyxHQUFHLDJEQUFDLDJEQUFEO0FBQ0wsYUFBSyxFQUFFQSxLQURGO0FBRUwsWUFBSSxFQUFFLEtBQUtwQixLQUFMLENBQVd5RixJQUZaO0FBR0wsZUFBTyxFQUFFLEtBQUtVO0FBSFQsUUFBSCxHQUlELElBWlAsRUFjRTtBQUNJLGdCQUFRLEVBQUUsS0FBS1AsWUFEbkI7QUFFSSxpQkFBUyxFQUFFTSxPQUFPLENBQUNtRSxTQUZ2QjtBQUdJLGtCQUFVLE1BSGQ7QUFHZSxvQkFBWSxFQUFDO0FBSDVCLFNBSUUsMkRBQUMsa0VBQUQ7QUFDSSxZQUFJLEVBQUMsTUFEVDtBQUVJLFlBQUksRUFBQyxXQUZUO0FBR0ksYUFBSyxFQUFFRCxTQUhYO0FBSUksZ0JBQVEsRUFBRXhKLGFBSmQ7QUFLSSxpQkFBUyxNQUxiO0FBTUksZ0JBQVEsTUFOWjtBQU9JLGFBQUssRUFBQyw4QkFQVjtBQVFJLGNBQU0sRUFBQyxRQVJYO0FBU0ksZUFBTyxFQUFDLFVBVFo7QUFVSSxpQkFBUyxFQUFFc0YsT0FBTyxDQUFDWDtBQVZ2QixRQUpGLEVBZ0JFLDJEQUFDLGtFQUFEO0FBQ0ksWUFBSSxFQUFDLE9BRFQ7QUFFSSxZQUFJLEVBQUMsT0FGVDtBQUdJLGFBQUssRUFBRVEsS0FIWDtBQUlJLGdCQUFRLEVBQUVuRixhQUpkO0FBS0ksaUJBQVMsTUFMYjtBQU1JLGdCQUFRLE1BTlo7QUFPSSxhQUFLLEVBQUMseUJBUFY7QUFRSSxjQUFNLEVBQUMsUUFSWDtBQVNJLGVBQU8sRUFBQyxVQVRaO0FBVUksaUJBQVMsRUFBRXNGLE9BQU8sQ0FBQ1g7QUFWdkIsUUFoQkYsRUE2QkUsMkRBQUMsa0VBQUQ7QUFDSSxZQUFJLEVBQUMsYUFEVDtBQUVJLGFBQUssRUFBRXdFLFdBRlg7QUFHSSxnQkFBUSxFQUFFbkosYUFIZDtBQUlJLGlCQUFTLE1BSmI7QUFLSSxpQkFBUyxNQUxiO0FBTUksZUFBTyxFQUFDLEdBTlo7QUFPSSxpQkFBUyxFQUFFc0YsT0FBTyxDQUFDWCxTQVB2QjtBQVFJLGFBQUssRUFBQyxvQkFSVjtBQVNJLGNBQU0sRUFBQyxRQVRYO0FBVUksZUFBTyxFQUFDO0FBVlosUUE3QkYsRUF5Q0UsMkRBQUMsa0VBQUQ7QUFDSSxZQUFJLEVBQUMsUUFEVDtBQUVJLFlBQUksRUFBQyxRQUZUO0FBR0ksV0FBRyxFQUFFLENBSFQ7QUFJSSxhQUFLLEVBQUU1RSxNQUpYO0FBS0ksZ0JBQVEsRUFBRUMsYUFMZDtBQU1JLGlCQUFTLE1BTmI7QUFPSSxnQkFBUSxNQVBaO0FBUUksYUFBSyxFQUFDLG9DQVJWO0FBU0ksY0FBTSxFQUFDLFFBVFg7QUFVSSxlQUFPLEVBQUMsVUFWWjtBQVdJLGlCQUFTLEVBQUVzRixPQUFPLENBQUNYO0FBWHZCLFFBekNGLEVBc0RFLDJEQUFDLGdFQUFEO0FBQ0ksZUFBTyxFQUFDLFdBRFo7QUFFSSxhQUFLLEVBQUMsU0FGVjtBQUdJLGlCQUFTLEVBQUMsV0FIZDtBQUlJLGlCQUFTLEVBQUVXLE9BQU8sQ0FBQ1YsTUFKdkI7QUFLSSxjQUFNLEVBQUMsUUFMWDtBQU1JLGlCQUFTLE1BTmI7QUFPSSxvQkFBWSxNQVBoQjtBQVFJLGVBQU8sRUFBRSxLQUFLWSxXQVJsQjtBQVNJLFlBQUksRUFBQztBQVRULFNBVUdILE9BQU8sR0FBRywyREFBQyxzREFBRDtBQUFRLGlCQUFTLEVBQUMsV0FBbEI7QUFBOEIsYUFBSyxFQUFFLE1BQXJDO0FBQTZDLFNBQUMsRUFBRTtBQUFoRCxRQUFILEdBQ0osMkRBQUMsbUVBQUQ7QUFBWSxhQUFLLEVBQUM7QUFBbEIsNEJBWE4sQ0F0REYsQ0FkRixDQURGLENBREYsQ0FESjtBQTBGRDs7OztFQXhIK0JuRywrQzs7QUEySGxDLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTGtLLG1CQUFlLEVBQUVsSyxLQUFLLENBQUNrSyxlQURsQjtBQUVML0ssUUFBSSxFQUFFYSxLQUFLLENBQUNiO0FBRlAsR0FBUDtBQUlELENBTEQ7O0FBT0EsSUFBTWMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN4Q1UsaUJBQWEsRUFBRSx1QkFBQ0MsQ0FBRDtBQUFBLGFBQU9YLFFBQVEsQ0FBQ21HLDZFQUFBLENBQXNCeEYsQ0FBdEIsQ0FBRCxDQUFmO0FBQUEsS0FEeUI7QUFFeENTLGdCQUFZLEVBQUUsc0JBQUNDLElBQUQ7QUFBQSxhQUFVckIsUUFBUSxDQUFDbUcsNEVBQUEsQ0FBcUI5RSxJQUFyQixDQUFELENBQWxCO0FBQUEsS0FGMEI7QUFHeENxRSxnQkFBWSxFQUFFLHNCQUFDaEUsV0FBRCxFQUFja0UsT0FBZCxFQUF1QkMsS0FBdkI7QUFBQSxhQUErQjdGLFFBQVEsQ0FBQ3lCLGdHQUEyQixDQUFDQyxXQUFELEVBQWFrRSxPQUFiLEVBQXFCQyxLQUFyQixDQUE1QixDQUF2QztBQUFBO0FBSDBCLEdBQWY7QUFBQSxDQUEzQjs7QUFLZTFGLDBIQUFPLENBQUNOLGVBQUQsRUFBaUJFLGtCQUFqQixDQUFQLENBQTRDcUcsNEVBQVUsQ0FBQ2hDLE1BQUQsQ0FBVixDQUFtQnpFLG1CQUFuQixDQUE1QyxDQUFmLEU7Ozs7Ozs7Ozs7O0FDeE1BLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTXlELEtBQUssR0FBR0MsK0VBQWMsQ0FBQztBQUMzQkMsU0FBTyxFQUFFO0FBQ1BDLFdBQU8sRUFBRTtBQUNQQyxVQUFJLEVBQUU7QUFEQyxLQURGO0FBSVBDLGFBQVMsRUFBRTtBQUNURCxVQUFJLEVBQUU7QUFERztBQUpKO0FBRGtCLENBQUQsQ0FBNUI7O0lBWU1sRSxZOzs7OztBQUNKLDBCQUFjO0FBQUE7O0FBQUE7O0FBQ1o7O0FBRFksd0VBYU0sVUFBQXFCLENBQUM7QUFBQSxhQUFJLE1BQUs2RSxRQUFMLENBQWM7QUFBQzRFLG1CQUFXLEVBQUV6SixDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFBdkIsT0FBZCxDQUFKO0FBQUEsS0FiUDs7QUFHWixVQUFLaEIsS0FBTCxHQUFhO0FBQ1h1SyxZQUFNLEVBQUUsS0FERztBQUVYRCxpQkFBVyxFQUFFO0FBRkYsS0FBYjtBQUhZO0FBT2I7Ozs7d0NBRW1CO0FBQ2xCLFdBQUt2TCxLQUFMLENBQVd5TCxpQkFBWDtBQUNEOzs7NkJBSVE7QUFBQTs7QUFBQSx3QkFDeUIsS0FBS3pMLEtBRDlCO0FBQUEsVUFDQStDLFFBREEsZUFDQUEsUUFEQTtBQUFBLFVBQ1VtSCxXQURWLGVBQ1VBLFdBRFY7QUFBQSxVQUVBdEksTUFGQSxHQUVVLEtBQUs1QixLQUFMLENBQVdJLElBRnJCLENBRUF3QixNQUZBO0FBR1AsVUFBSThKLFlBQUo7O0FBQ0EsVUFBSTNJLFFBQVEsQ0FBQzZILE1BQVQsS0FBb0IsQ0FBeEIsRUFBMkI7QUFDekJjLG9CQUFZLEdBQUczSSxRQUFRLElBQUlBLFFBQVEsQ0FBQ29ILE1BQVQsQ0FBZ0IsVUFBQUMsT0FBTyxFQUFJO0FBQ3BEQSxpQkFBTyxDQUFDTyxNQUFSLEdBQWlCLENBQWpCOztBQUNBLGNBQUlQLE9BQU8sQ0FBQ2pHLEtBQVIsQ0FBY3lHLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUJSLG1CQUFPLENBQUNPLE1BQVIsR0FBaUJQLE9BQU8sQ0FBQ2pHLEtBQVIsQ0FBYzBHLE1BQWQsQ0FBcUIsVUFBQ0MsS0FBRCxFQUFRQyxJQUFSLEVBQWdCO0FBQ3BELHFCQUFPRCxLQUFLLEdBQUdDLElBQUksQ0FBQ25KLE1BQXBCO0FBQ0QsYUFGZ0IsRUFFZCxDQUZjLENBQWpCO0FBR0QsV0FKRCxNQUlPLElBQUd3SSxPQUFPLENBQUNqRyxLQUFSLENBQWN5RyxNQUFkLEtBQXlCLENBQTVCLEVBQStCO0FBQ3BDUixtQkFBTyxDQUFDTyxNQUFSLEdBQWlCUCxPQUFPLENBQUNqRyxLQUFSLENBQWMsQ0FBZCxFQUFpQnZDLE1BQWxDO0FBQ0Q7O0FBQ0QsY0FBSXdJLE9BQU8sQ0FBQ2pDLEtBQVIsQ0FBY3dELFdBQWQsR0FBNEJDLFFBQTVCLENBQXFDLE1BQUksQ0FBQzNLLEtBQUwsQ0FBV3NLLFdBQVgsQ0FBdUJJLFdBQXZCLEVBQXJDLENBQUosRUFBZ0Y7QUFDOUUsbUJBQU92QixPQUFQO0FBQ0Q7QUFDRixTQVowQixFQWF0QkssR0Fic0IsQ0FhbEIsVUFBQ0wsT0FBRCxFQUFVTSxDQUFWLEVBQWdCO0FBQ3ZCLGlCQUNJLDJEQUFDLHlFQUFEO0FBQWtCLGlCQUFLLEVBQUVuRyxLQUF6QjtBQUFnQyxlQUFHLEVBQUVtRztBQUFyQyxhQUNFLDJEQUFDLDhEQUFEO0FBQU0scUJBQVMsRUFBRTtBQUFqQixhQUNFLDJEQUFDLDhEQUFEO0FBQU8scUJBQVMsRUFBRSxNQUFsQjtBQUEwQixxQkFBUyxFQUFFN0YscURBQXJDO0FBQWlELGNBQUUscUJBQWN1RixPQUFPLENBQUNDLEVBQXRCO0FBQW5ELGFBQ0U7QUFBSyxxQkFBUyxFQUFFO0FBQWhCLGFBQStCRCxPQUFPLENBQUNqQyxLQUF2QyxDQURGLEVBRUU7QUFBSyxxQkFBUyxFQUFFO0FBQWhCLGFBQXFDaUMsT0FBTyxDQUFDWSxXQUE3QyxDQUZGLEVBR0U7QUFBSyxxQkFBUyxFQUFFO0FBQWhCLGFBQ0Usd0VBQU1aLE9BQU8sQ0FBQ08sTUFBZCxNQURGLEVBRUU7QUFBSyxxQkFBUyxFQUFFO0FBQWhCLGFBQ0UsMkRBQUMsd0VBQUQ7QUFBZ0IsbUJBQU8sRUFBRSxRQUF6QjtBQUFtQyxpQkFBSyxFQUFHUCxPQUFPLENBQUNPLE1BQVIsR0FBaUJQLE9BQU8sQ0FBQ3hJLE1BQTFCLEdBQW9DO0FBQTlFLFlBREYsQ0FGRixFQUtFLHdFQUFNd0ksT0FBTyxDQUFDeEksTUFBZCxNQUxGLENBSEYsRUFVRTtBQUFLLHFCQUFTLEVBQUU7QUFBaEIsYUFDRSwyREFBQywrREFBRDtBQUFRLG1CQUFPLEVBQUMsVUFBaEI7QUFBMkIsaUJBQUssRUFBRTtBQUFDbUgsMEJBQVksRUFBRSxFQUFmO0FBQW1CMUMsb0JBQU0sRUFBRTtBQUEzQixhQUFsQztBQUFpRSxpQkFBSyxFQUFDLFNBQXZFO0FBQ1EsbUJBQU8sRUFBRTtBQUFBLHFCQUFNNkQsV0FBVyxDQUFDRSxPQUFPLENBQUNDLEVBQVQsRUFBYSxDQUFiLENBQWpCO0FBQUEsYUFEakI7QUFDbUQsb0JBQVEsRUFBRXpJLE1BQU0sR0FBRztBQUR0RSx1QkFERixFQUdFLDJEQUFDLCtEQUFEO0FBQVEsbUJBQU8sRUFBQyxVQUFoQjtBQUEyQixpQkFBSyxFQUFFO0FBQUNtSCwwQkFBWSxFQUFFLEVBQWY7QUFBbUIxQyxvQkFBTSxFQUFFO0FBQTNCLGFBQWxDO0FBQWlFLGlCQUFLLEVBQUMsU0FBdkU7QUFDUSxtQkFBTyxFQUFFO0FBQUEscUJBQU02RCxXQUFXLENBQUNFLE9BQU8sQ0FBQ0MsRUFBVCxFQUFhLEVBQWIsQ0FBakI7QUFBQSxhQURqQjtBQUNvRCxvQkFBUSxFQUFFekksTUFBTSxHQUFHO0FBRHZFLHdCQUhGLEVBS0UsMkRBQUMsK0RBQUQ7QUFBUSxtQkFBTyxFQUFDLFVBQWhCO0FBQTJCLGlCQUFLLEVBQUU7QUFBQ21ILDBCQUFZLEVBQUUsRUFBZjtBQUFtQjFDLG9CQUFNLEVBQUU7QUFBM0IsYUFBbEM7QUFBaUUsaUJBQUssRUFBQyxTQUF2RTtBQUNRLG1CQUFPLEVBQUU7QUFBQSxxQkFBTTZELFdBQVcsQ0FBQ0UsT0FBTyxDQUFDQyxFQUFULEVBQWEsRUFBYixDQUFqQjtBQUFBLGFBRGpCO0FBQ29ELG9CQUFRLEVBQUV6SSxNQUFNLEdBQUc7QUFEdkUsd0JBTEYsQ0FWRixDQURGLENBREYsQ0FESjtBQXlCRCxTQXZDMEIsQ0FBM0I7QUF3Q0QsT0F6Q0QsTUF5Q087QUFDTDhKLG9CQUFZLEdBQUc7QUFBSyxtQkFBUyxFQUFDO0FBQWYsV0FDYiwyREFBQyx1REFBRDtBQUFRLGVBQUssRUFBRSxTQUFmO0FBQTBCLFdBQUMsRUFBRTtBQUE3QixVQURhLENBQWY7QUFHRDs7QUFDRCxhQUNJLDJEQUFDLHlFQUFEO0FBQWtCLGFBQUssRUFBRW5IO0FBQXpCLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLDJEQUFDLG1FQUFEO0FBQ0ksaUJBQVMsTUFEYjtBQUVJLGVBQU8sRUFBQyxVQUZaO0FBR0ksbUJBQVcsRUFBQyx1QkFIaEI7QUFJSSxhQUFLLEVBQUMsU0FKVjtBQUtJLGFBQUssRUFBRSxLQUFLdEQsS0FBTCxDQUFXc0ssV0FMdEI7QUFNSSxnQkFBUSxFQUFFLEtBQUtNO0FBTm5CLFFBREYsQ0FERixFQVdFO0FBQUssaUJBQVMsRUFBRTtBQUFoQixTQUFnQyxLQUFLNUssS0FBTCxDQUFXc0ssV0FBM0MsQ0FYRixFQVlHRyxZQVpILEVBYUUsMkRBQUMsb0VBQUQ7QUFDSSxlQUFPLEVBQUMsSUFEWjtBQUVJLG9CQUFZLE1BRmhCO0FBR0ksYUFBSyxFQUFDO0FBSFYsMENBSStCLEdBSi9CLEVBS0UsMkRBQUMsNkRBQUQ7QUFBTSxpQkFBUyxFQUFFN0cscURBQWpCO0FBQTZCLGFBQUssRUFBRSxXQUFwQztBQUFpRCxVQUFFLEVBQUM7QUFBcEQsb0JBTEYsRUFNRyxHQU5ILHlCQWJGLENBREYsQ0FESjtBQTBCRDs7OztFQTVGd0I5RCwrQzs7QUErRjNCLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTDhCLFlBQVEsRUFBRTlCLEtBQUssQ0FBQzhCLFFBQU4sQ0FBZUEsUUFEcEI7QUFFTDNDLFFBQUksRUFBRWEsS0FBSyxDQUFDYjtBQUZQLEdBQVA7QUFJRCxDQUxEOztBQU9BLElBQU1jLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQWU7QUFDeENzSyxxQkFBaUIsRUFBRTtBQUFBLGFBQU10SyxRQUFRLENBQUNFLDBFQUFjLEVBQWYsQ0FBZDtBQUFBLEtBRHFCO0FBRXhDNkksZUFBVyxFQUFFLHFCQUFDZSxTQUFELEVBQVlySixNQUFaO0FBQUEsYUFBdUJULFFBQVEsQ0FBQytKLGdFQUFNLENBQUNELFNBQUQsRUFBWXJKLE1BQVosQ0FBUCxDQUEvQjtBQUFBO0FBRjJCLEdBQWY7QUFBQSxDQUEzQjs7QUFLZU4sMEhBQU8sQ0FBQ04sZUFBRCxFQUFrQkUsa0JBQWxCLENBQVAsQ0FBNkNULFlBQTdDLENBQWYsRTs7Ozs7Ozs7Ozs7QUN2SUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTThELEtBQUssR0FBR0MsZ0ZBQWMsQ0FBQztBQUMzQkMsU0FBTyxFQUFFO0FBQ1BDLFdBQU8sRUFBRTtBQUNQQyxVQUFJLEVBQUU7QUFEQyxLQURGO0FBSVBDLGFBQVMsRUFBRTtBQUNURCxVQUFJLEVBQUU7QUFERyxLQUpKO0FBT1B0QyxTQUFLLEVBQUU7QUFDTHNDLFVBQUksRUFBRTtBQUREO0FBUEE7QUFEa0IsQ0FBRCxDQUE1Qjs7QUFjQSxJQUFNWSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBaEIsS0FBSztBQUFBLFNBQUs7QUFDdkJJLFFBQUk7QUFDRk0sV0FBSyxFQUFFLE1BREw7QUFFRk8sYUFBTyxFQUFFLE9BRlA7QUFHRkMsZ0JBQVUsRUFBRWxCLEtBQUssQ0FBQ21CLE9BQU4sQ0FBY0MsSUFBZCxHQUFxQixDQUgvQjtBQUlGQyxpQkFBVyxFQUFFckIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxJQUFkLEdBQXFCO0FBSmhDLE9BS0RwQixLQUFLLENBQUNzQixXQUFOLENBQWtCQyxFQUFsQixDQUFxQixNQUFNdkIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBQXJCLEdBQXlCLENBQXBELENBTEMsRUFLd0Q7QUFDeERWLFdBQUssRUFBRSxHQURpRDtBQUV4RFEsZ0JBQVUsRUFBRSxNQUY0QztBQUd4REcsaUJBQVcsRUFBRTtBQUgyQyxLQUx4RCxDQURtQjtBQVl2QkcsU0FBSztBQUNIQyxlQUFTLEVBQUV6QixLQUFLLENBQUNtQixPQUFOLENBQWNDLElBRHRCO0FBRUhILGFBQU8sRUFBRSxNQUZOO0FBR0hTLG1CQUFhLEVBQUUsUUFIWjtBQUlIQyxnQkFBVSxFQUFFLFFBSlQ7QUFLSEMsYUFBTyxZQUFLNUIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBQTFCLGdCQUFpQ3BCLEtBQUssQ0FBQ21CLE9BQU4sQ0FBY0MsSUFBZCxHQUFxQixDQUF0RCxnQkFBNkRwQixLQUFLLENBQUNtQixPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FBbEY7QUFMSixPQU1GcEIsS0FBSyxDQUFDc0IsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FORSxFQU0yQjtBQUM1QkUsZUFBUyxFQUFFekIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxJQUFkLEdBQW9CO0FBREgsS0FOM0IsQ0Faa0I7QUFzQnZCWSxRQUFJLEVBQUU7QUFDSnRCLFdBQUssRUFBRSxNQURIO0FBRUplLGVBQVMsRUFBRXpCLEtBQUssQ0FBQ21CLE9BQU4sQ0FBY0M7QUFGckIsS0F0QmlCO0FBMEJ2QmEsYUFBUyxFQUFFO0FBQ1R0QixZQUFNLEVBQUU7QUFEQyxLQTFCWTtBQTZCdkJ1QixVQUFNLEVBQUU7QUFDTlQsZUFBUyxFQUFFekIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBRDFCO0FBRU5ULFlBQU0sRUFBRTtBQUZGLEtBN0JlO0FBaUN2QmtCLFVBQU0sRUFBRTtBQUNOQyxZQUFNLEVBQUU5QixLQUFLLENBQUNtQixPQUFOLENBQWNDLElBRGhCO0FBRU5XLHFCQUFlLEVBQUU7QUFGWDtBQWpDZSxHQUFMO0FBQUEsQ0FBcEI7O0lBd0NNM0YsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzREQUNJO0FBQ04rRixVQUFJLEVBQUU7QUFEQSxLOztrRUFLTSxZQUFNO0FBQ2xCLFlBQUtDLFFBQUwsQ0FBYztBQUFFRCxZQUFJLEVBQUU7QUFBUixPQUFkO0FBQ0QsSzs7a0VBR2EsWUFBTTtBQUNsQixZQUFLQyxRQUFMLENBQWM7QUFBRUQsWUFBSSxFQUFFO0FBQVIsT0FBZDtBQUNELEs7O21FQUdjLFVBQUM1RSxDQUFELEVBQU87QUFDcEJBLE9BQUMsQ0FBQzhFLGNBQUY7O0FBQ0EsWUFBSzVHLEtBQUwsQ0FBVzZHLFlBQVgsQ0FBd0IsTUFBSzdHLEtBQUwsQ0FBVzhMLFFBQW5DLEVBQTZDLE1BQUs5TCxLQUFMLENBQVcrRyxPQUF4RDtBQUNELEs7Ozs7Ozs7NkJBR1E7QUFBQSxpQ0FDZ0QsS0FBSy9HLEtBQUwsQ0FBVzhMLFFBRDNEO0FBQUEsVUFDQzlFLEtBREQsd0JBQ0NBLEtBREQ7QUFBQSxVQUNRQyxRQURSLHdCQUNRQSxRQURSO0FBQUEsVUFDa0I4RSxTQURsQix3QkFDa0JBLFNBRGxCO0FBQUEsVUFDNkIxSixLQUQ3Qix3QkFDNkJBLEtBRDdCO0FBQUEsVUFDb0M2RSxPQURwQyx3QkFDb0NBLE9BRHBDO0FBQUEsVUFFQXJGLGFBRkEsR0FFaUIsS0FBSzdCLEtBRnRCLENBRUE2QixhQUZBO0FBQUEsVUFHQ3NGLE9BSEQsR0FHYSxLQUFLbkgsS0FIbEIsQ0FHQ21ILE9BSEQ7QUFJUCxhQUNJLDJEQUFDLDBFQUFEO0FBQWtCLGFBQUssRUFBRTVDO0FBQXpCLFNBQ0U7QUFBTSxpQkFBUyxFQUFFNEMsT0FBTyxDQUFDeEM7QUFBekIsU0FDRSwyREFBQyw4REFBRDtBQUFPLGlCQUFTLEVBQUV3QyxPQUFPLENBQUNwQjtBQUExQixTQUNFLDJEQUFDLHFFQUFELE9BREYsRUFFRSwyREFBQyxnRUFBRDtBQUFRLGlCQUFTLEVBQUVvQixPQUFPLENBQUNmO0FBQTNCLFNBQ0UsMkRBQUMsd0VBQUQsT0FERixDQUZGLEVBS0UsMkRBQUMsbUVBQUQ7QUFDSSxlQUFPLEVBQUMsSUFEWjtBQUVJLG9CQUFZLE1BRmhCO0FBR0ksYUFBSyxFQUFDO0FBSFYsbUJBTEYsRUFXRy9ELEtBQUssR0FBRywyREFBQywyREFBRDtBQUNMLGFBQUssRUFBRUEsS0FERjtBQUVMLFlBQUksRUFBRSxLQUFLcEIsS0FBTCxDQUFXeUYsSUFGWjtBQUdMLGVBQU8sRUFBRSxLQUFLVTtBQUhULFFBQUgsR0FJRCxJQWZQLEVBZ0JFO0FBQU0sZ0JBQVEsRUFBRSxLQUFLUCxZQUFyQjtBQUFvQyxpQkFBUyxFQUFFTSxPQUFPLENBQUNtRSxTQUF2RDtBQUFtRSxrQkFBVSxNQUE3RTtBQUE4RSxvQkFBWSxFQUFDO0FBQTNGLFNBRUUsMkRBQUMsa0VBQUQ7QUFDSSxZQUFJLEVBQUMsTUFEVDtBQUVJLFlBQUksRUFBQyxPQUZUO0FBR0ksYUFBSyxFQUFFdEUsS0FIWDtBQUlJLGdCQUFRLEVBQUVuRixhQUpkO0FBS0ksaUJBQVMsTUFMYjtBQU1JLGdCQUFRLE1BTlo7QUFPSSxhQUFLLEVBQUMseUJBUFY7QUFRSSxjQUFNLEVBQUMsUUFSWDtBQVNJLGVBQU8sRUFBQyxVQVRaO0FBVUksaUJBQVMsRUFBRXNGLE9BQU8sQ0FBQ1g7QUFWdkIsUUFGRixFQWVFLDJEQUFDLGtFQUFEO0FBQ0ksWUFBSSxFQUFDLFVBRFQ7QUFFSSxZQUFJLEVBQUMsVUFGVDtBQUdJLGFBQUssRUFBRVMsUUFIWDtBQUlJLGdCQUFRLEVBQUVwRixhQUpkO0FBS0ksaUJBQVMsTUFMYjtBQU1JLGdCQUFRLE1BTlo7QUFPSSxhQUFLLEVBQUMsVUFQVjtBQVFJLGNBQU0sRUFBQyxRQVJYO0FBU0ksYUFBSyxFQUFDLFdBVFY7QUFVSSxlQUFPLEVBQUMsVUFWWjtBQVdJLGlCQUFTLEVBQUVzRixPQUFPLENBQUNYO0FBWHZCLFFBZkYsRUE0QkUsMkRBQUMsa0VBQUQ7QUFDSSxZQUFJLEVBQUMsVUFEVDtBQUVJLFlBQUksRUFBQyxXQUZUO0FBR0ksYUFBSyxFQUFFdUYsU0FIWDtBQUlJLGdCQUFRLEVBQUVsSyxhQUpkO0FBS0ksaUJBQVMsTUFMYjtBQU1JLGdCQUFRLE1BTlo7QUFPSSxhQUFLLEVBQUMsaUJBUFY7QUFRSSxjQUFNLEVBQUMsUUFSWDtBQVNJLGVBQU8sRUFBQyxVQVRaO0FBVUksaUJBQVMsRUFBRXNGLE9BQU8sQ0FBQ1g7QUFWdkIsUUE1QkYsRUF3Q0UsMkRBQUMsZ0VBQUQ7QUFDSSxlQUFPLEVBQUMsV0FEWjtBQUVJLGFBQUssRUFBQyxTQUZWO0FBR0ksaUJBQVMsRUFBQyxXQUhkO0FBSUksaUJBQVMsRUFBRVcsT0FBTyxDQUFDVixNQUp2QjtBQUtJLGNBQU0sRUFBQyxRQUxYO0FBTUksaUJBQVMsTUFOYjtBQU9JLG9CQUFZLE1BUGhCO0FBUUksZUFBTyxFQUFFLEtBQUtZLFdBUmxCO0FBU0ksWUFBSSxFQUFDO0FBVFQsU0FVR0gsT0FBTyxHQUFHLDJEQUFDLHNEQUFEO0FBQVEsYUFBSyxFQUFFLE1BQWY7QUFBdUIsU0FBQyxFQUFFO0FBQTFCLFFBQUgsR0FDSiwyREFBQyxtRUFBRDtBQUFZLGFBQUssRUFBQztBQUFsQixtQkFYTixDQXhDRixDQWhCRixDQURGLEVBd0VFO0FBQUssaUJBQVMsRUFBRTtBQUFoQixxQ0FDMkIsR0FEM0IsRUFFRSwyREFBQyw4REFBRDtBQUNJLGlCQUFTLEVBQUVyQyxxREFEZjtBQUVJLGFBQUssRUFBRSxXQUZYO0FBR0ksVUFBRSxFQUFDO0FBSFAsbUJBRkYsQ0F4RUYsQ0FERixDQURKO0FBc0ZEOzs7O0VBaEhvQjlELCtDOztBQW1IdkIsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMNkssWUFBUSxFQUFFN0ssS0FBSyxDQUFDNks7QUFEWCxHQUFQO0FBR0QsQ0FKRDs7QUFNQSxJQUFNNUssa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN4Q1UsaUJBQWEsRUFBRSx1QkFBQ0MsQ0FBRDtBQUFBLGFBQU9YLFFBQVEsQ0FBQ21HLHNFQUFBLENBQXNCeEYsQ0FBdEIsQ0FBRCxDQUFmO0FBQUEsS0FEeUI7QUFFeEMrRSxnQkFBWSxFQUFFLHNCQUFDL0csSUFBRCxFQUFPaUgsT0FBUDtBQUFBLGFBQW1CNUYsUUFBUSxDQUFDNkssa0ZBQW9CLENBQUNsTSxJQUFELEVBQU9pSCxPQUFQLENBQXJCLENBQTNCO0FBQUE7QUFGMEIsR0FBZjtBQUFBLENBQTNCOztBQUllekYsMEhBQU8sQ0FBQ04sZUFBRCxFQUFpQkUsa0JBQWpCLENBQVAsQ0FBNENxRyw0RUFBVSxDQUFDaEMsTUFBRCxDQUFWLENBQW1CNUUsUUFBbkIsQ0FBNUMsQ0FBZixFOzs7Ozs7Ozs7OztBQ3RNQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNNEUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQWhCLEtBQUs7QUFBQSxTQUFLO0FBQ3JCaUQsUUFBSSxFQUFFO0FBQ0ZPLGdCQUFVLEVBQUU7QUFEVixLQURlO0FBSXJCa0UsbUJBQWU7QUFDWHpHLGFBQU8sRUFBRTtBQURFLE9BRVZqQixLQUFLLENBQUNzQixXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUZVLEVBRW1CO0FBQzFCTixhQUFPLEVBQUU7QUFEaUIsS0FGbkIsQ0FKTTtBQVVyQjBHLG1CQUFlO0FBQ1gxRyxhQUFPLEVBQUU7QUFERSxPQUVWakIsS0FBSyxDQUFDc0IsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FGVSxFQUVtQjtBQUMxQk4sYUFBTyxFQUFFO0FBRGlCLEtBRm5CLENBVk07QUFnQnJCMkcsUUFBSSxFQUFFO0FBQ0Z2RCxjQUFRLEVBQUMsRUFEUDtBQUVGaEQsaUJBQVcsRUFBRTtBQUZYLEtBaEJlO0FBb0JyQndHLFdBQU8sRUFBRTtBQUNMNUcsYUFBTyxFQUFFLE1BREo7QUFFTFUsZ0JBQVUsRUFBRTtBQUZQO0FBcEJZLEdBQUw7QUFBQSxDQUFwQjs7QUEwQlEsSUFBTW1HLFFBQVEsR0FBSSxTQUFaQSxRQUFZLENBQUNyTSxLQUFELEVBQVc7QUFFN0IsU0FDUSx3RUFDSTtBQUFLLGFBQVMsRUFBRUEsS0FBSyxDQUFDbUgsT0FBTixDQUFjK0U7QUFBOUIsS0FDSSwyREFBQyxpRUFBRDtBQUNBLGdCQUFZLEVBQUU7QUFDVkksY0FBUSxFQUFFLEtBREE7QUFFVkMsZ0JBQVUsRUFBRTtBQUZGLEtBRGQ7QUFLQSxRQUFJLEVBQUV2TSxLQUFLLENBQUMwRyxJQUxaO0FBTUEsb0JBQWdCLEVBQUUsSUFObEI7QUFPQSxnQkFBWSxFQUFFO0FBQ1YsMEJBQW9CLFlBRFY7QUFFVlMsYUFBTyxFQUFFO0FBQUVLLFlBQUksRUFBRXhILEtBQUssQ0FBQ21ILE9BQU4sQ0FBY0s7QUFBdEI7QUFGQyxLQVBkO0FBV0EsV0FBTyxFQUFFO0FBQU0sZUFBUyxFQUFFeEgsS0FBSyxDQUFDbUgsT0FBTixDQUFjaUY7QUFBL0IsT0FDTCwyREFBQywrREFBRDtBQUFXLGVBQVMsRUFBRXBNLEtBQUssQ0FBQ21ILE9BQU4sQ0FBY2dGO0FBQXBDLE1BREssRUFFSm5NLEtBQUssQ0FBQ3FDLEtBRkYsQ0FYVDtBQWVBLFVBQU0sRUFBRSxDQUNKLDJEQUFDLGdFQUFEO0FBQVMsV0FBSyxFQUFDO0FBQWYsT0FDSSwyREFBQyxtRUFBRDtBQUFZLG9CQUFXLE9BQXZCO0FBQ1ksU0FBRyxFQUFDLE9BRGhCO0FBRVksV0FBSyxFQUFDLFNBRmxCO0FBR1ksYUFBTyxFQUFFckMsS0FBSyxDQUFDd007QUFIM0IsT0FJSSwyREFBQywrREFBRCxPQUpKLENBREosQ0FESTtBQWZSLElBREosQ0FESixFQTZCSTtBQUFLLGFBQVMsRUFBRXhNLEtBQUssQ0FBQ21ILE9BQU4sQ0FBYzhFO0FBQTlCLEtBQ0ksMkRBQUMsaUVBQUQ7QUFDSSxnQkFBWSxFQUFFO0FBQ1ZLLGNBQVEsRUFBRSxRQURBO0FBRVZDLGdCQUFVLEVBQUU7QUFGRixLQURsQjtBQUtJLFFBQUksRUFBRXZNLEtBQUssQ0FBQzBHLElBTGhCO0FBTUksV0FBTyxFQUFFMUcsS0FBSyxDQUFDd00sT0FObkI7QUFPSSxvQkFBZ0IsRUFBRSxJQVB0QjtBQVFJLGdCQUFZLEVBQUU7QUFDViwwQkFBb0IsWUFEVjtBQUVWckYsYUFBTyxFQUFFO0FBQUVLLFlBQUksRUFBRXhILEtBQUssQ0FBQ21ILE9BQU4sQ0FBY0s7QUFBdEI7QUFGQyxLQVJsQjtBQWFJLFdBQU8sRUFBRTtBQUFNLGVBQVMsRUFBRXhILEtBQUssQ0FBQ21ILE9BQU4sQ0FBY2lGO0FBQS9CLE9BQ1QsMkRBQUMsK0RBQUQ7QUFBVyxlQUFTLEVBQUVwTSxLQUFLLENBQUNtSCxPQUFOLENBQWNnRjtBQUFwQyxNQURTLEVBRUpuTSxLQUFLLENBQUNxQyxLQUZGLENBYmI7QUFpQkksVUFBTSxFQUFFLENBQ0osMkRBQUMsZ0VBQUQ7QUFBUyxXQUFLLEVBQUM7QUFBZixPQUNJLDJEQUFDLG1FQUFEO0FBQVksb0JBQVcsT0FBdkI7QUFDWSxTQUFHLEVBQUMsT0FEaEI7QUFFWSxXQUFLLEVBQUMsU0FGbEI7QUFHWSxhQUFPLEVBQUVyQyxLQUFLLENBQUN3TTtBQUgzQixPQUlJLDJEQUFDLCtEQUFELE9BSkosQ0FESixDQURJO0FBakJaLElBREosQ0E3QkosQ0FEUjtBQThESCxDQWhFRzs7QUFrRVFqRiwwSUFBVSxDQUFDaEMsTUFBRCxDQUFWLENBQW1COEcsUUFBbkIsQ0FBaEIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTTlILEtBQUssR0FBR0MsK0VBQWMsQ0FBQztBQUN6QkMsU0FBTyxFQUFFO0FBQ0xDLFdBQU8sRUFBRTtBQUNMQyxVQUFJLEVBQUU7QUFERCxLQURKO0FBSUxDLGFBQVMsRUFBRTtBQUNQRCxVQUFJLEVBQUU7QUFEQztBQUpOO0FBRGdCLENBQUQsQ0FBNUI7O0lBYU0vRCxJOzs7OztBQUNGLGtCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7O0FBRFUsd0VBY00sVUFBQWtCLENBQUM7QUFBQSxhQUFJLE1BQUs2RSxRQUFMLENBQWM7QUFBQzRFLG1CQUFXLEVBQUV6SixDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFBdkIsT0FBZCxDQUFKO0FBQUEsS0FkUDs7QUFHVixVQUFLaEIsS0FBTCxHQUFhO0FBQ1R1SyxZQUFNLEVBQUUsS0FEQztBQUVURCxpQkFBVyxFQUFFO0FBRkosS0FBYjtBQUhVO0FBT2I7Ozs7d0NBR21CO0FBQ3BCLFdBQUt2TCxLQUFMLENBQVd5TSxVQUFYO0FBQ0Q7Ozs2QkFLVTtBQUFBLFVBQ0Z0SSxLQURFLEdBQ08sS0FBS25FLEtBQUwsQ0FBV21FLEtBRGxCLENBQ0ZBLEtBREU7QUFBQSxVQUVGdUksUUFGRSxHQUVVLEtBQUsxTSxLQUZmLENBRUYwTSxRQUZFO0FBSVAsVUFBTUMsTUFBTSxHQUFHO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ1gsMkRBQUMsc0RBQUQ7QUFBUSxhQUFLLEVBQUUsU0FBZjtBQUEwQixTQUFDLEVBQUU7QUFBN0IsUUFEVyxDQUFmO0FBSUYsVUFBTUMsVUFBVSxHQUFHekksS0FBSyxDQUFDc0csR0FBTixDQUFVLFVBQUFNLElBQUksRUFBSTtBQUNuQyxlQUNJLDJEQUFDLHlFQUFEO0FBQWtCLGVBQUssRUFBRXhHO0FBQXpCLFdBQ0ksMkRBQUMsNkRBQUQ7QUFBTSxtQkFBUyxFQUFFO0FBQWpCLFdBQ0ksMkRBQUMsd0VBQUQ7QUFBTyxtQkFBUyxFQUFFLE1BQWxCO0FBQTJCLGFBQUcsRUFBRXdHLElBQUksQ0FBQ1Y7QUFBckMsV0FDSTtBQUFLLG1CQUFTLEVBQUU7QUFBaEIsV0FBK0JVLElBQUksQ0FBQzVDLEtBQXBDLENBREosRUFFSTtBQUFLLG1CQUFTLEVBQUU7QUFBaEIsNkJBQW1ENEMsSUFBSSxDQUFDbkosTUFBeEQsV0FGSixFQUdJLDJEQUFDLCtEQUFEO0FBQ0ksZUFBSyxFQUFDLFNBRFY7QUFFSSxpQkFBTyxFQUFDLFVBRlo7QUFHSSxpQkFBTyxFQUFFO0FBQUEsbUJBQU04SyxRQUFRLENBQUMzQixJQUFJLENBQUNWLEVBQU4sQ0FBZDtBQUFBO0FBSGIsb0JBSEosQ0FESixDQURKLENBREo7QUFjRCxPQWZrQixDQUFuQjtBQWdCRSxhQUVRO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0tsRyxLQUFLLENBQUN5RyxNQUFOLEdBQWUsQ0FBZixHQUFtQmdDLFVBQW5CLEdBQWdDRCxNQURyQyxDQUZSO0FBT0g7Ozs7RUFqRGdCNUwsK0M7O0FBb0RuQixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xrRCxTQUFLLEVBQUVsRCxLQUFLLENBQUNrRDtBQURSLEdBQVA7QUFHRCxDQUpEOztBQU1BLElBQU1qRCxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFlO0FBQ3hDc0wsY0FBVSxFQUFFO0FBQUEsYUFBTXRMLFFBQVEsQ0FBQ2dELG1FQUFLLEVBQU4sQ0FBZDtBQUFBLEtBRDRCO0FBRXhDdUksWUFBUSxFQUFFLGtCQUFDckMsRUFBRDtBQUFBLGFBQVFsSixRQUFRLENBQUMwTCxrRUFBTSxDQUFDeEMsRUFBRCxDQUFQLENBQWhCO0FBQUE7QUFGOEIsR0FBZjtBQUFBLENBQTNCOztBQUtlL0ksMEhBQU8sQ0FBQ04sZUFBRCxFQUFrQkUsa0JBQWxCLENBQVAsQ0FBNkNOLElBQTdDLENBQWYsRTs7Ozs7Ozs7Ozs7QUN6RkEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFrTSw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLElBQXZCLENBQTRCLGNBQTVCLElBQThDLGtCQUE5QztBQUVBSCw0Q0FBSyxDQUFDSSxZQUFOLENBQW1CQyxPQUFuQixDQUEyQkMsR0FBM0IsQ0FBK0IsVUFBQUQsT0FBTyxFQUFJO0FBQ3hDLFNBQU9BLE9BQVA7QUFDRCxDQUZEO0FBSUFMLDRDQUFLLENBQUNJLFlBQU4sQ0FBbUJDLE9BQW5CLENBQTJCQyxHQUEzQixDQUErQixVQUFBQyxRQUFRLEVBQUk7QUFDekMsU0FBT0EsUUFBUDtBQUNELENBRkQ7QUFJQSxJQUFNQyxnQkFBZ0IsR0FBR0MsTUFBTSxDQUFDQyxvQ0FBUCxJQUErQ0MsNkNBQXhFO0FBRUEsSUFBTUMsS0FBSyxHQUFHQyx5REFBVyxDQUFDQyw2REFBRCxFQUFjTixnQkFBZ0IsQ0FBQ08sNkRBQWUsQ0FBQ0MsbURBQUQsQ0FBaEIsQ0FBOUIsQ0FBekI7QUFFQUMsZ0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQiwyREFBQyxvREFBRDtBQUFVLE9BQUssRUFBRU47QUFBakIsR0FDZCwyREFBQywrQ0FBRCxPQURjLENBQWhCLEVBRWFPLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUZiLEUsQ0FLQTtBQUNBO0FBQ0E7O0FBQ0FDLHlEQUFBLEc7Ozs7Ozs7Ozs7O0FDakNBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBLElBQU1DLFlBQVksR0FBRztBQUNqQnBILE9BQUssRUFBRSxFQURVO0FBRWpCcEYsUUFBTSxFQUFFLENBRlM7QUFHakI0SCxNQUFJLEVBQUUsSUFIVztBQUlqQnJKLFFBQU0sRUFBRTtBQUpTLENBQXJCO0FBT2UsMkVBQWtDO0FBQUEsTUFBakNjLEtBQWlDLHVFQUF6Qm1OLFlBQXlCO0FBQUEsTUFBWEMsTUFBVzs7QUFDN0MsVUFBUUEsTUFBTSxDQUFDOU0sSUFBZjtBQUNJLFNBQUtDLHdEQUFMO0FBQ0ksK0JBQ09QLEtBRFA7QUFFSStGLGFBQUssRUFBRXFILE1BQU0sQ0FBQ3ZPLElBQVAsQ0FBWWtILEtBRnZCO0FBR0lwRixjQUFNLEVBQUV5TSxNQUFNLENBQUN2TyxJQUFQLENBQVk2SyxNQUh4QjtBQUlJbkIsWUFBSSxFQUFFNkUsTUFBTSxDQUFDdk8sSUFBUCxDQUFZMEosSUFKdEI7QUFLSXJKLGNBQU0sRUFBRTtBQUxaOztBQU9KLFNBQUtxQixzREFBTDtBQUNJLCtCQUNPUCxLQURQO0FBRUkrRixhQUFLLEVBQUUsRUFGWDtBQUdJcEYsY0FBTSxFQUFFLENBSFo7QUFJSTRILFlBQUksRUFBRSxJQUpWO0FBS0lySixjQUFNLEVBQUU7QUFMWjs7QUFPSixTQUFLcUIsd0RBQUw7QUFDSSwrQkFDT1AsS0FEUDtBQUVJVyxjQUFNLEVBQUVYLEtBQUssQ0FBQ1csTUFBTixHQUFheU0sTUFBTSxDQUFDek07QUFGaEM7O0FBSUo7QUFDSSxhQUFPWCxLQUFQO0FBdkJSO0FBeUJILENBMUJELEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBRUEsSUFBTW1OLFlBQVksR0FBRztBQUNuQnBILE9BQUssRUFBRSxFQURZO0FBRW5CQyxVQUFRLEVBQUUsRUFGUztBQUduQjVFLE9BQUssRUFBRSxFQUhZO0FBSW5CNkUsU0FBTyxFQUFFO0FBSlUsQ0FBckI7QUFPZSwyRUFBa0M7QUFBQSxNQUFqQ2pHLEtBQWlDLHVFQUF6Qm1OLFlBQXlCO0FBQUEsTUFBWEMsTUFBVzs7QUFDL0MsVUFBUUEsTUFBTSxDQUFDOU0sSUFBZjtBQUNFLFNBQUtDLHNFQUFMO0FBQ0UsK0JBQVdQLEtBQVgsc0JBQW1Cb04sTUFBTSxDQUFDdE0sSUFBMUIsRUFBaUNzTSxNQUFNLENBQUNwTSxLQUF4Qzs7QUFDRixTQUFLVCxpRUFBTDtBQUNFLCtCQUFXUCxLQUFYO0FBQWtCb0IsYUFBSyxFQUFFLEVBQXpCO0FBQTZCNkUsZUFBTyxFQUFFO0FBQXRDOztBQUNGLFNBQUsxRiwrREFBTDtBQUNFLCtCQUFXUCxLQUFYO0FBQWtCb0IsYUFBSyxFQUFFZ00sTUFBTSxDQUFDaE0sS0FBaEM7QUFBdUM2RSxlQUFPLEVBQUM7QUFBL0M7O0FBQ0YsU0FBSzFGLGlFQUFMO0FBQ0UsK0JBQVdQLEtBQVg7QUFBa0IrRixhQUFLLEVBQUUsRUFBekI7QUFBNkJDLGdCQUFRLEVBQUUsRUFBdkM7QUFBMkNDLGVBQU8sRUFBQztBQUFuRDs7QUFDRjtBQUNFLGFBQU9qRyxLQUFQO0FBVko7QUFZRCxDQWJELEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBRUEsSUFBTW1OLFlBQVksR0FBRztBQUNuQmhELFVBQVEsRUFBRSxFQURTO0FBRW5CQyxXQUFTLEVBQUUsRUFGUTtBQUduQnJFLE9BQUssRUFBRSxFQUhZO0FBSW5CZ0UsYUFBVyxFQUFFLEVBSk07QUFLbkJwSixRQUFNLEVBQUUsRUFMVztBQU1uQnNGLFNBQU8sRUFBRSxLQU5VO0FBT25CN0UsT0FBSyxFQUFFO0FBUFksQ0FBckI7QUFVZSwyRUFBZ0M7QUFBQSxNQUEvQnBCLEtBQStCLHVFQUF6Qm1OLFlBQXlCO0FBQUEsTUFBWEMsTUFBVzs7QUFDN0MsVUFBUUEsTUFBTSxDQUFDOU0sSUFBZjtBQUNFLFNBQUtDLGlGQUFMO0FBQ0UsK0JBQVdQLEtBQVgsc0JBQW1Cb04sTUFBTSxDQUFDdE0sSUFBMUIsRUFBaUNzTSxNQUFNLENBQUNwTSxLQUF4Qzs7QUFDRixTQUFLVCwyRUFBTDtBQUNFLCtCQUFXUCxLQUFYO0FBQWtCcU4sZUFBTyxFQUFFRCxNQUFNLENBQUM3TDtBQUFsQzs7QUFDRixTQUFLaEIsNEVBQUw7QUFDRSwrQkFBV1AsS0FBWDtBQUFrQmlHLGVBQU8sRUFBRTtBQUEzQjs7QUFDRixTQUFLMUYsMEVBQUw7QUFDRSwrQkFBV1AsS0FBWDtBQUFrQm9CLGFBQUssRUFBRWdNLE1BQU0sQ0FBQ2hNLEtBQWhDO0FBQXVDNkUsZUFBTyxFQUFDO0FBQS9DOztBQUNGLFNBQUsxRiw0RUFBTDtBQUNFLCtCQUNLUCxLQURMO0FBRUVtSyxnQkFBUSxFQUFFLEVBRlo7QUFHRUMsaUJBQVMsRUFBRSxFQUhiO0FBSUVyRSxhQUFLLEVBQUUsRUFKVDtBQUtFcEYsY0FBTSxFQUFFLEVBTFY7QUFNRW9KLG1CQUFXLEVBQUUsRUFOZjtBQU9Fc0QsZUFBTyxFQUFFLElBUFg7QUFRRXBILGVBQU8sRUFBQyxLQVJWO0FBU0U3RSxhQUFLLEVBQUM7QUFUUjs7QUFVRjtBQUNFLGFBQU9wQixLQUFQO0FBckJKO0FBdUJELENBeEJELEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBRUEsSUFBTW1OLFlBQVksR0FBRztBQUNuQnJMLFVBQVEsRUFBRTtBQURTLENBQXJCO0FBSWUsMkVBQWdDO0FBQUEsTUFBL0I5QixLQUErQix1RUFBekJtTixZQUF5QjtBQUFBLE1BQVhDLE1BQVc7O0FBQzdDLFVBQVFBLE1BQU0sQ0FBQzlNLElBQWY7QUFDRSxTQUFLQywyREFBTDtBQUNFLCtCQUFXUCxLQUFYO0FBQWtCOEIsZ0JBQVEsRUFBRXNMLE1BQU0sQ0FBQ3RMO0FBQW5DOztBQUNGO0FBQ0UsYUFBTzlCLEtBQVA7QUFKSjtBQU1ELENBUEQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQSxJQUFNbU4sWUFBWSxHQUFHO0FBQ25CaEQsVUFBUSxFQUFFLEVBRFM7QUFFbkJwRSxPQUFLLEVBQUUsRUFGWTtBQUduQkMsVUFBUSxFQUFFLEVBSFM7QUFJbkI4RSxXQUFTLEVBQUUsRUFKUTtBQUtuQjdFLFNBQU8sRUFBRSxLQUxVO0FBTW5CN0UsT0FBSyxFQUFFO0FBTlksQ0FBckI7QUFTZSwyRUFBa0M7QUFBQSxNQUFqQ3BCLEtBQWlDLHVFQUF6Qm1OLFlBQXlCO0FBQUEsTUFBWEMsTUFBVzs7QUFDL0MsVUFBUUEsTUFBTSxDQUFDOU0sSUFBZjtBQUNFLFNBQUtDLHlFQUFMO0FBQ0UsK0JBQVdQLEtBQVgsc0JBQW1Cb04sTUFBTSxDQUFDdE0sSUFBMUIsRUFBaUNzTSxNQUFNLENBQUNwTSxLQUF4Qzs7QUFDRixTQUFLVCxvRUFBTDtBQUNFLCtCQUFXUCxLQUFYO0FBQWtCb0IsYUFBSyxFQUFDLEVBQXhCO0FBQTRCNkUsZUFBTyxFQUFFO0FBQXJDOztBQUNGLFNBQUsxRixrRUFBTDtBQUNFLCtCQUFXUCxLQUFYO0FBQWtCb0IsYUFBSyxFQUFFZ00sTUFBTSxDQUFDaE0sS0FBaEM7QUFBdUM2RSxlQUFPLEVBQUM7QUFBL0M7O0FBQ0YsU0FBSzFGLG9FQUFMO0FBQ0UsK0JBQVdQLEtBQVg7QUFBa0JtSyxnQkFBUSxFQUFFLEVBQTVCO0FBQWdDcEUsYUFBSyxFQUFFLEVBQXZDO0FBQTJDQyxnQkFBUSxFQUFFLEVBQXJEO0FBQXlEOEUsaUJBQVMsRUFBRSxFQUFwRTtBQUF3RTFKLGFBQUssRUFBRSxFQUEvRTtBQUFtRjZFLGVBQU8sRUFBRTtBQUE1Rjs7QUFDRjtBQUNFLGFBQU9qRyxLQUFQO0FBVko7QUFZRCxDQWJELEU7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU0yTSxXQUFXLEdBQUdXLDZEQUFlLENBQUM7QUFDbEN6SCxPQUFLLEVBQUUwSCxxREFEMkI7QUFFbEMxQyxVQUFRLEVBQUUyQyx3REFGd0I7QUFHbEN0RCxpQkFBZSxFQUFFdUQsK0RBSGlCO0FBSWxDM0wsVUFBUSxFQUFFNEwsd0RBSndCO0FBS2xDdk8sTUFBSSxFQUFFd08sb0RBTDRCO0FBTWxDekssT0FBSyxFQUFFMEsscURBQVlBO0FBTmUsQ0FBRCxDQUFuQztBQVNlakIsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBRUEsSUFBTVEsWUFBWSxHQUFHO0FBQ25CakssT0FBSyxFQUFFO0FBRFksQ0FBckI7QUFJZSwyRUFBaUM7QUFBQSxNQUFoQ2xELEtBQWdDLHVFQUF6Qm1OLFlBQXlCO0FBQUEsTUFBWEMsTUFBVzs7QUFDOUMsVUFBUUEsTUFBTSxDQUFDOU0sSUFBZjtBQUNFLFNBQUtDLHdEQUFMO0FBQ0UsK0JBQVdQLEtBQVg7QUFBa0JrRCxhQUFLLEVBQUVrSyxNQUFNLENBQUNsSztBQUFoQzs7QUFDRixTQUFLM0MsMERBQUw7QUFDRSxVQUFNMkMsS0FBSyxHQUFHbEQsS0FBSyxDQUFDa0QsS0FBTixDQUFZZ0csTUFBWixDQUFtQixVQUFBWSxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDVixFQUFMLEtBQVlnRSxNQUFNLENBQUNoSyxNQUF2QjtBQUFBLE9BQXZCLENBQWQ7QUFDQSwrQkFBV3BELEtBQVg7QUFBa0JrRCxhQUFLLEVBQUxBO0FBQWxCOztBQUNGO0FBQ0UsYUFBT2xELEtBQVA7QUFQSjtBQVNELENBVkQsRTs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTTZOLFdBQVcsR0FBR0MsT0FBTyxDQUN6QnhCLE1BQU0sQ0FBQ2hFLFFBQVAsQ0FBZ0J5RixRQUFoQixLQUE2QixXQUE3QixJQUNFO0FBQ0F6QixNQUFNLENBQUNoRSxRQUFQLENBQWdCeUYsUUFBaEIsS0FBNkIsT0FGL0IsSUFHRTtBQUNBekIsTUFBTSxDQUFDaEUsUUFBUCxDQUFnQnlGLFFBQWhCLENBQXlCekUsS0FBekIsQ0FDRSx3REFERixDQUx1QixDQUEzQjtBQVVPLFNBQVN1QixRQUFULENBQWtCbUQsTUFBbEIsRUFBMEI7QUFDL0IsTUFBSTVPLEtBQUosRUFBMkUsa0JBOEIxRTtBQUNGOztBQUVELFNBQVM2TyxlQUFULENBQXlCQyxLQUF6QixFQUFnQ0YsTUFBaEMsRUFBd0M7QUFDdENHLFdBQVMsQ0FBQ2pCLGFBQVYsQ0FDR3JDLFFBREgsQ0FDWXFELEtBRFosRUFFR0UsSUFGSCxDQUVRLFVBQUFDLFlBQVksRUFBSTtBQUNwQkEsZ0JBQVksQ0FBQ0MsYUFBYixHQUE2QixZQUFNO0FBQ2pDLFVBQU1DLGdCQUFnQixHQUFHRixZQUFZLENBQUNHLFVBQXRDOztBQUNBLFVBQUlELGdCQUFnQixJQUFJLElBQXhCLEVBQThCO0FBQzVCO0FBQ0Q7O0FBQ0RBLHNCQUFnQixDQUFDRSxhQUFqQixHQUFpQyxZQUFNO0FBQ3JDLFlBQUlGLGdCQUFnQixDQUFDdk8sS0FBakIsS0FBMkIsV0FBL0IsRUFBNEM7QUFDMUMsY0FBSW1PLFNBQVMsQ0FBQ2pCLGFBQVYsQ0FBd0J3QixVQUE1QixFQUF3QztBQUN0QztBQUNBO0FBQ0E7QUFDQUMsbUJBQU8sQ0FBQ0MsR0FBUixDQUNFLHdEQUNFLDREQUZKLEVBSnNDLENBU3RDOztBQUNBLGdCQUFJWixNQUFNLElBQUlBLE1BQU0sQ0FBQ2EsUUFBckIsRUFBK0I7QUFDN0JiLG9CQUFNLENBQUNhLFFBQVAsQ0FBZ0JSLFlBQWhCO0FBQ0Q7QUFDRixXQWJELE1BYU87QUFDTDtBQUNBO0FBQ0E7QUFDQU0sbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG9DQUFaLEVBSkssQ0FNTDs7QUFDQSxnQkFBSVosTUFBTSxJQUFJQSxNQUFNLENBQUNjLFNBQXJCLEVBQWdDO0FBQzlCZCxvQkFBTSxDQUFDYyxTQUFQLENBQWlCVCxZQUFqQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLE9BM0JEO0FBNEJELEtBakNEO0FBa0NELEdBckNILFdBc0NTLFVBQUFqTixLQUFLLEVBQUk7QUFDZHVOLFdBQU8sQ0FBQ3ZOLEtBQVIsQ0FBYywyQ0FBZCxFQUEyREEsS0FBM0Q7QUFDRCxHQXhDSDtBQXlDRDs7QUFFRCxTQUFTMk4sdUJBQVQsQ0FBaUNiLEtBQWpDLEVBQXdDRixNQUF4QyxFQUFnRDtBQUM5QztBQUNBZ0IsT0FBSyxDQUFDZCxLQUFELENBQUwsQ0FDR0UsSUFESCxDQUNRLFVBQUFoQyxRQUFRLEVBQUk7QUFDaEI7QUFDQSxRQUFNNkMsV0FBVyxHQUFHN0MsUUFBUSxDQUFDTCxPQUFULENBQWlCbUQsR0FBakIsQ0FBcUIsY0FBckIsQ0FBcEI7O0FBQ0EsUUFDRTlDLFFBQVEsQ0FBQytDLE1BQVQsS0FBb0IsR0FBcEIsSUFDQ0YsV0FBVyxJQUFJLElBQWYsSUFBdUJBLFdBQVcsQ0FBQ0csT0FBWixDQUFvQixZQUFwQixNQUFzQyxDQUFDLENBRmpFLEVBR0U7QUFDQTtBQUNBakIsZUFBUyxDQUFDakIsYUFBVixDQUF3Qm1DLEtBQXhCLENBQThCakIsSUFBOUIsQ0FBbUMsVUFBQUMsWUFBWSxFQUFJO0FBQ2pEQSxvQkFBWSxDQUFDaUIsVUFBYixHQUEwQmxCLElBQTFCLENBQStCLFlBQU07QUFDbkM5QixnQkFBTSxDQUFDaEUsUUFBUCxDQUFnQmlILE1BQWhCO0FBQ0QsU0FGRDtBQUdELE9BSkQ7QUFLRCxLQVZELE1BVU87QUFDTDtBQUNBdEIscUJBQWUsQ0FBQ0MsS0FBRCxFQUFRRixNQUFSLENBQWY7QUFDRDtBQUNGLEdBbEJILFdBbUJTLFlBQU07QUFDWFcsV0FBTyxDQUFDQyxHQUFSLENBQ0UsK0RBREY7QUFHRCxHQXZCSDtBQXdCRDs7QUFFTSxTQUFTVSxVQUFULEdBQXNCO0FBQzNCLE1BQUksbUJBQW1CbkIsU0FBdkIsRUFBa0M7QUFDaENBLGFBQVMsQ0FBQ2pCLGFBQVYsQ0FBd0JtQyxLQUF4QixDQUE4QmpCLElBQTlCLENBQW1DLFVBQUFDLFlBQVksRUFBSTtBQUNqREEsa0JBQVksQ0FBQ2lCLFVBQWI7QUFDRCxLQUZEO0FBR0Q7QUFDRixDOzs7Ozs7Ozs7Ozs7QUN0SUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLFNBQVN4USxhQUFULEdBQXlCO0FBQzlCLE1BQU1ELElBQUksR0FBRzJRLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixpQkFBckIsQ0FBYjtBQUNBLFNBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXOVEsSUFBWCxDQUFQO0FBQ0Q7QUFFTSxTQUFTK1EsV0FBVCxDQUFxQi9RLElBQXJCLEVBQTJCO0FBQ2hDMlEsY0FBWSxDQUFDSyxPQUFiLENBQXFCLGlCQUFyQixFQUF3Q0gsSUFBSSxDQUFDSSxTQUFMLENBQWVqUixJQUFmLENBQXhDO0FBQ0E7QUFDRDtBQUVNLFNBQVNrUixvQkFBVCxDQUE4QnBQLE1BQTlCLEVBQXNDO0FBQzNDLE1BQU05QixJQUFJLEdBQUc2USxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGlCQUFyQixDQUFYLENBQWI7QUFDQTVRLE1BQUksQ0FBQzZLLE1BQUwsR0FBYzdLLElBQUksQ0FBQzZLLE1BQUwsR0FBYy9JLE1BQTVCO0FBQ0E2TyxjQUFZLENBQUNLLE9BQWIsQ0FBcUIsaUJBQXJCLEVBQXdDSCxJQUFJLENBQUNJLFNBQUwsQ0FBZWpSLElBQWYsQ0FBeEM7QUFDQTtBQUNEO0FBRU0sU0FBU21SLGdCQUFULEdBQTRCO0FBQ2pDUixjQUFZLENBQUNTLFVBQWIsQ0FBd0IsaUJBQXhCO0FBQ0E7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNwQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNN1AsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLFNBQU0sVUFBQ0YsUUFBRCxFQUFjO0FBQ2hELFFBQU1nUSxXQUFXLEdBQUdyRSw0Q0FBSyxDQUNwQnFELEdBRGUsQ0FDWCxjQURXLEVBRWpCZCxJQUZpQixDQUVaLFVBQUMrQixHQUFEO0FBQUEsYUFBU2pRLFFBQVEsQ0FBQzJCLDJFQUFXLENBQUNzTyxHQUFHLENBQUNDLElBQUwsQ0FBWixDQUFqQjtBQUFBLEtBRlksV0FHWCxVQUFDaFAsS0FBRDtBQUFBLGFBQVd1TixPQUFPLENBQUNDLEdBQVIsQ0FBWXhOLEtBQVosQ0FBWDtBQUFBLEtBSFcsQ0FBcEI7QUFJQSxXQUFPOE8sV0FBUDtBQUNELEdBTjZCO0FBQUEsQ0FBdkIsQzs7Ozs7Ozs7Ozs7O0FDSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNaE4sS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxTQUFNLFVBQUNoRCxRQUFELEVBQWM7QUFDdkMyTCxnREFBSyxDQUFDcUQsR0FBTixDQUFVLGlCQUFWLEVBQ0tkLElBREwsQ0FDVSxVQUFBK0IsR0FBRyxFQUFJO0FBQ1hqUSxjQUFRLENBQUMrQyxzRUFBUSxDQUFDa04sR0FBRyxDQUFDQyxJQUFMLENBQVQsQ0FBUjtBQUNELEtBSEwsV0FJVyxVQUFBaFAsS0FBSztBQUFBLGFBQUl1TixPQUFPLENBQUNDLEdBQVIsQ0FBWXhOLEtBQVosQ0FBSjtBQUFBLEtBSmhCO0FBS0EsV0FBTyxJQUFQO0FBQ0QsR0FQb0I7QUFBQSxDQUFkLEM7Ozs7Ozs7Ozs7OztBQ0hQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNd0UsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQy9HLElBQUQsRUFBT2lILE9BQVA7QUFBQSxTQUFtQixVQUFDNUYsUUFBRCxFQUFjO0FBQzNEQSxZQUFRLENBQUNtRyxtRUFBQSxFQUFELENBQVI7O0FBQ0EsUUFBR3hILElBQUksQ0FBQ2tILEtBQUwsS0FBZSxFQUFmLElBQXFCbEgsSUFBSSxDQUFDbUgsUUFBTCxLQUFrQixFQUExQyxFQUErQztBQUM3QyxhQUFPOUYsUUFBUSxDQUFDbUcsc0VBQUEsQ0FBeUIsb0JBQXpCLENBQUQsQ0FBZjtBQUNEOztBQUNELFFBQU1nSyxTQUFTLEdBQUk7QUFDZixrQkFBWTtBQUNSLHVCQUFlO0FBQ1gsbUJBQVN4UixJQUFJLENBQUNrSCxLQURIO0FBRVgsc0JBQVlsSCxJQUFJLENBQUNtSDtBQUZOO0FBRFA7QUFERyxLQUFuQjtBQVFBNkYsZ0RBQUssQ0FBQ0csSUFBTixDQUFXLHFCQUFYLEVBQWtDcUUsU0FBbEMsRUFDS2pDLElBREwsQ0FDVSxVQUFBK0IsR0FBRyxFQUFHO0FBQ1Z4QixhQUFPLENBQUNDLEdBQVIsQ0FBWXVCLEdBQUcsQ0FBQ0MsSUFBaEI7QUFDQVIsMEVBQVcsQ0FBQ08sR0FBRyxDQUFDQyxJQUFMLENBQVg7QUFDQWxRLGNBQVEsQ0FBQ0MscUVBQVEsQ0FBQ2dRLEdBQUcsQ0FBQ0MsSUFBTCxDQUFULENBQVI7QUFDQWxRLGNBQVEsQ0FBQ21HLHdFQUFBLENBQTJCeEgsSUFBM0IsQ0FBRCxDQUFSO0FBQ0FpSCxhQUFPLENBQUN3SyxJQUFSLENBQWEsR0FBYjtBQUNELEtBUEwsV0FRVyxVQUFBQyxHQUFHLEVBQUk7QUFDVnJRLGNBQVEsQ0FBQ21HLHNFQUFBLENBQXlCa0ssR0FBRyxDQUFDbkUsUUFBSixDQUFhZ0UsSUFBYixDQUFrQmhQLEtBQWxCLEdBQTBCbVAsR0FBRyxDQUFDbkUsUUFBSixDQUFhZ0UsSUFBYixDQUFrQmhQLEtBQTVDLEdBQ2xDLHNDQURTLENBQUQsQ0FBUjtBQUVELEtBWFA7QUFhRCxHQTFCMkI7QUFBQSxDQUFyQixDOzs7Ozs7Ozs7Ozs7QUNMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNb1AsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQzFLLE9BQUQ7QUFBQSxTQUFhLFVBQUM1RixRQUFELEVBQWM7QUFDakQyTCxnREFBSyxDQUFDcUQsR0FBTixDQUFVLHNCQUFWLEVBQ0tkLElBREwsQ0FDVSxVQUFBK0IsR0FBRyxFQUFJO0FBQ1hILCtFQUFnQjtBQUNoQjlQLGNBQVEsQ0FBQ21HLDJEQUFBLEVBQUQsQ0FBUjtBQUNBUCxhQUFPLENBQUN3SyxJQUFSLENBQWEsR0FBYjtBQUNELEtBTEwsV0FNVyxVQUFBQyxHQUFHO0FBQUEsYUFBSTVCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZMkIsR0FBWixDQUFKO0FBQUEsS0FOZDtBQU9BLFdBQU8sSUFBUDtBQUNELEdBVHVCO0FBQUEsQ0FBakIsQzs7Ozs7Ozs7Ozs7O0FDSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNNU8sMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUE4QixDQUFDQyxXQUFELEVBQWNrRSxPQUFkLEVBQXVCQyxLQUF2QjtBQUFBLFNBQWlDLFVBQUM3RixRQUFELEVBQWM7QUFFeEZBLFlBQVEsQ0FBQ21HLDRGQUFBLEVBQUQsQ0FBUjs7QUFDQSxRQUFHekUsV0FBVyxDQUFDdUksUUFBWixLQUF5QixFQUF6QixJQUErQnZJLFdBQVcsQ0FBQ3dJLFNBQVosS0FBMEIsRUFBekQsSUFDSHhJLFdBQVcsQ0FBQ21JLFdBQVosS0FBNEIsRUFEekIsSUFDK0JuSSxXQUFXLENBQUNqQixNQUFaLEtBQXVCLEVBRHpELEVBQzhEO0FBQzVELGFBQU9ULFFBQVEsQ0FBQ21HLDBGQUFBLENBQW1DLHdCQUFuQyxDQUFELENBQWY7QUFDRDs7QUFDRCxRQUFNb0ssYUFBYSxHQUFHQyw2Q0FBTSxDQUFDOU8sV0FBVyxDQUFDeUwsT0FBYixDQUFOLENBQTRCc0QsTUFBNUIsQ0FBbUMsWUFBbkMsQ0FBdEI7QUFFQSxRQUFNQyxJQUFJLEdBQUdsQixJQUFJLENBQUNJLFNBQUwsQ0FBZTtBQUMxQixlQUFTbE8sV0FBVyxDQUFDd0ksU0FESztBQUUxQixxQkFBZXhJLFdBQVcsQ0FBQ21JLFdBRkQ7QUFHMUIsZ0JBQVVuSSxXQUFXLENBQUNqQixNQUhJO0FBSTFCLGVBQVNvRjtBQUppQixLQUFmLENBQWI7QUFNQThGLGdEQUFLLENBQ0FHLElBREwsQ0FDVSxZQURWLEVBQ3VCNEUsSUFEdkIsRUFFR3hDLElBRkgsQ0FFUSxVQUFBK0IsR0FBRyxFQUFFO0FBQ1RqUSxjQUFRLENBQUNtRywyRkFBQSxDQUFvQzhKLEdBQXBDLENBQUQsQ0FBUjtBQUNBckssYUFBTyxDQUFDd0ssSUFBUixDQUFhLFdBQWI7QUFDRCxLQUxILFdBTVMsVUFBQWxQLEtBQUssRUFBSTtBQUNkbEIsY0FBUSxDQUFDbUcsMEZBQUEsQ0FBbUMsdUNBQW5DLENBQUQsQ0FBUjtBQUNBc0ksYUFBTyxDQUFDQyxHQUFSLENBQVl4TixLQUFaO0FBQ0QsS0FUSDtBQVdELEdBMUIwQztBQUFBLENBQXBDLEM7Ozs7Ozs7Ozs7OztBQ0xQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNMkosb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDbE0sSUFBRCxFQUFPaUgsT0FBUDtBQUFBLFNBQW1CLFVBQUM1RixRQUFELEVBQWM7QUFDbkVBLFlBQVEsQ0FBQ21HLHNFQUFBLEVBQUQsQ0FBUjs7QUFDQSxRQUFHeEgsSUFBSSxDQUFDa0gsS0FBTCxLQUFlLEVBQWYsSUFBcUJsSCxJQUFJLENBQUNtSCxRQUFMLEtBQWtCLEVBQXZDLElBQTZDbkgsSUFBSSxDQUFDaU0sU0FBTCxLQUFtQixFQUFuRSxFQUF1RTtBQUNyRSxhQUFPNUssUUFBUSxDQUFDbUcsNEVBQUEsQ0FBNEIsb0JBQTVCLENBQUQsQ0FBZjtBQUNEOztBQUNELFFBQUd4SCxJQUFJLENBQUNtSCxRQUFMLEtBQWtCbkgsSUFBSSxDQUFDaU0sU0FBMUIsRUFBcUM7QUFDbkMsYUFBTzVLLFFBQVEsQ0FBQ21HLDRFQUFBLENBQTRCLDBCQUE1QixDQUFELENBQWY7QUFDRDs7QUFDRCxRQUFHeEgsSUFBSSxDQUFDbUgsUUFBTCxDQUFjMkQsTUFBZCxHQUF1QixDQUExQixFQUE2QjtBQUMzQixhQUFPekosUUFBUSxDQUFDbUcsNEVBQUEsQ0FBNEIsOENBQTVCLENBQUQsQ0FBZjtBQUNEOztBQUNELFFBQU13SyxZQUFZLEdBQUc7QUFDbkI5SyxXQUFLLEVBQUVsSCxJQUFJLENBQUNrSCxLQURPO0FBRW5CQyxjQUFRLEVBQUVuSCxJQUFJLENBQUNtSDtBQUZJLEtBQXJCO0FBS0E2RixnREFBSyxDQUFDRyxJQUFOLENBQVcsd0JBQVgsRUFBcUM2RSxZQUFyQyxFQUNLekMsSUFETCxDQUNVLFVBQUErQixHQUFHLEVBQUc7QUFDVlAsMEVBQVcsQ0FBQ08sR0FBRyxDQUFDQyxJQUFMLENBQVg7QUFDQWxRLGNBQVEsQ0FBQ0MscUVBQVEsQ0FBQ2dRLEdBQUcsQ0FBQ0MsSUFBTCxDQUFULENBQVI7QUFDQWxRLGNBQVEsQ0FBQ21HLDhFQUFBLENBQThCd0ssWUFBOUIsQ0FBRCxDQUFSO0FBQ0EvSyxhQUFPLENBQUN3SyxJQUFSLENBQWEsR0FBYjtBQUNELEtBTkwsV0FPVyxVQUFBQyxHQUFHLEVBQUk7QUFDUnJRLGNBQVEsQ0FBQ21HLDRFQUFBLENBQTRCa0ssR0FBRyxDQUFDbkUsUUFBSixDQUFhZ0UsSUFBYixDQUFrQlUsTUFBbEIsQ0FBeUJDLFFBQXpCLENBQWtDaEwsS0FBbEMsQ0FBd0MrSyxNQUF4QyxHQUNqQ1AsR0FBRyxDQUFDbkUsUUFBSixDQUFhZ0UsSUFBYixDQUFrQlUsTUFBbEIsQ0FBeUJDLFFBQXpCLENBQWtDaEwsS0FBbEMsQ0FBd0MrSyxNQURQLEdBRS9CLHVDQUZHLENBQUQsQ0FBUjtBQUdELEtBWFQ7QUFjRCxHQTlCbUM7QUFBQSxDQUE3QixDOzs7Ozs7Ozs7Ozs7QUNMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU1sRixNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDb0YsTUFBRDtBQUFBLFNBQVksVUFBQzlRLFFBQUQsRUFBYztBQUM5QzJMLGdEQUFLLFVBQUwscUJBQTBCbUYsTUFBMUIsR0FDSzVDLElBREwsQ0FDVSxVQUFBK0IsR0FBRyxFQUFJO0FBQ1hqUSxjQUFRLENBQUNpRCx3RUFBVSxDQUFDNk4sTUFBRCxDQUFYLENBQVI7QUFDRCxLQUhMLFdBSVcsVUFBQTVQLEtBQUs7QUFBQSxhQUFJdU4sT0FBTyxDQUFDQyxHQUFSLENBQVl4TixLQUFaLENBQUo7QUFBQSxLQUpoQjtBQUtBLFdBQU8sSUFBUDtBQUNELEdBUHFCO0FBQUEsQ0FBZixDOzs7Ozs7Ozs7Ozs7QUNIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTTZJLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNELFNBQUQsRUFBWXJKLE1BQVo7QUFBQSxTQUF1QixVQUFDVCxRQUFELEVBQWM7QUFDekQyTCxnREFBSyxDQUFDRyxJQUFOLENBQVcsV0FBWCxFQUF3QjtBQUN0QmlGLFdBQUssRUFBRWpILFNBRGU7QUFFdEJySixZQUFNLEVBQUVBO0FBRmMsS0FBeEIsRUFHR3lOLElBSEgsQ0FHUSxVQUFBK0IsR0FBRyxFQUFFO0FBQ1hKLG1GQUFvQixDQUFDcFAsTUFBRCxDQUFwQjtBQUNBVCxjQUFRLENBQUNFLG1FQUFjLEVBQWYsQ0FBUjtBQUNBRixjQUFRLENBQUNRLHFFQUFRLENBQUNDLE1BQUQsQ0FBVCxDQUFSO0FBQ0QsS0FQRCxXQU9TLFVBQUE0UCxHQUFHO0FBQUEsYUFBRzVCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZMkIsR0FBWixDQUFIO0FBQUEsS0FQWjtBQVNBLFdBQU8sSUFBUDtBQUNELEdBWHFCO0FBQUEsQ0FBZixDOzs7Ozs7Ozs7OztBQ0xQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIEJyb3dzZXJSb3V0ZXIsUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtnZXRVc2VyRnJvbUxTfSBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZSc7XG5pbXBvcnQge2F1dGhVc2VyfSBmcm9tICcuL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuaW1wb3J0IHtzZXRQcm9qZWN0TGlzdH0gZnJvbSAnLi90aHVua3MvZ2V0UHJvamVjdHMnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUvSG9tZSc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyJztcbmltcG9ydCBQcm9qZWN0c0xpc3QgZnJvbSAgJy4vY29tcG9uZW50cy9Qcm9qZWN0c0xpc3QvUHJvamVjdHNMaXN0JztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4vTG9naW4nO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vY29tcG9uZW50cy9SZWdpc3Rlci9SZWdpc3Rlcic7XG5pbXBvcnQgUHJvamVjdFJlZ2lzdHJhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdFJlZ2lzdHJhdGlvbi9Qcm9qZWN0UmVnaXN0cmF0aW9uJztcbmltcG9ydCBQcm9qZWN0SW5mbyBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdEluZm8vUHJvamVjdEluZm8nO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9jb21wb25lbnRzL1VzZXIvVXNlcic7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9jb21wb25lbnRzL0Fib3V0L2Fib3V0JztcblxuXG5cbmNsYXNzIFJvdXRlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHVzZXIgPSBnZXRVc2VyRnJvbUxTKCk7XG4gICAgdXNlciA/IHRoaXMucHJvcHMub25Mb2FkQXV0aCh1c2VyKSA6IG51bGxcbiAgICB1c2VyID8gdGhpcy5wcm9wcy5vbkxvYWRQcm9qZWN0cyA6IG51bGxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7aXNBdXRofSA9dGhpcy5wcm9wcy5hdXRoXG4gICAgcmV0dXJuIChcbiAgICAgIDxCcm93c2VyUm91dGVyIGJhc2VuYW1lPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfT5cbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgY29tcG9uZW50PXtIb21lfS8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL2Fib3V0JyBjb21wb25lbnQ9e0Fib3V0fS8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL3Byb2plY3RzJyBjb21wb25lbnQ9e1Byb2plY3RzTGlzdH0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9sb2dpbicgY29tcG9uZW50PXtMb2dpbn0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9yZWdpc3RlcicgY29tcG9uZW50PXtSZWdpc3Rlcn0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy91c2VyJyBjb21wb25lbnQ9e1VzZXJ9IC8+XG4gICAgICAgICAgICB7Lyo8Um91dGUgcGF0aD0nL2FkbWluJyAvPiovfVxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9wcm9qZWN0LzppZCcgY29tcG9uZW50PXtQcm9qZWN0SW5mb30vPlxuICAgICAgICAgICAge2lzQXV0aCA/IDxSb3V0ZSBwYXRoPScvcHJvamVjdC1yZWdpc3RyYXRpb24nIGNvbXBvbmVudD17UHJvamVjdFJlZ2lzdHJhdGlvbn0vPiA6IDxSZWRpcmVjdCB0bz0nL2xvZ2luJy8+fVxuXG4gICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvbkxvYWRBdXRoOiAodXNlcikgPT4gZGlzcGF0Y2goYXV0aFVzZXIodXNlcikpLFxuICBvbkxvYWRQcm9qZWN0czogKCkgPT4gZGlzcGF0Y2goc2V0UHJvamVjdExpc3QoKSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFJvdXRlcyk7XG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhVc2VyKHVzZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5BVVRIX1VTRVIsXG4gICAgICAgIHVzZXJcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuTE9HX09VVFxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZvdGVVc2VyKGFtb3VudCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlZPVEVfVVNFUixcbiAgICAgICAgYW1vdW50XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gb25JbnB1dENoYW5nZShlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuTE9HSU5fRk9STV9JTlBVVF9DSEFOR0UsXG4gICAgbmFtZTogZS50YXJnZXQubmFtZSxcbiAgICB2YWx1ZTogZS50YXJnZXQudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Gb3JtTG9hZGluZygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5MT0dJTl9GT1JNX0xPQURJTkdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Mb2dpbkZvcm1FcnJvcihlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLkxPR0lOX0ZPUk1fRVJST1IsXG4gICAgZXJyb3JcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Mb2dpbkZvcm1TdWNjZXNzKHVzZXIpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOnR5cGVzLkxPR0lOX0ZPUk1fU1VDQ0VTUyxcbiAgICB1c2VyXG4gIH1cbn0iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uSW5wdXRDaGFuZ2UoZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UsXG4gICAgbmFtZTogZS50YXJnZXQubmFtZSxcbiAgICB2YWx1ZTogZS50YXJnZXQudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25EYXRlQ2hhbmdlKGRhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0RBVEVfQ0hBTkdFLFxuICAgIGRhdGVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Qcm9qZWN0UmVnaXN0ZXJGb3JtTG9hZGluZygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fTE9BRElOR1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblByb2plY3RSZWdpc3RlckZvcm1FcnJvcihlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9FUlJPUixcbiAgICBlcnJvclxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblByb2plY3RSZWdpc3RlckZvcm1TdWJtaXQocHJvamVjdEluZm8pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fU1VDQ0VTUyxcbiAgICBwcm9qZWN0SW5mb1xuICB9XG59IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0cyhwcm9qZWN0cykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLkdFVF9QUk9KRUNUUyxcbiAgICBwcm9qZWN0c1xuICB9XG59IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbklucHV0Q2hhbmdlKGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5SRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRSxcbiAgICBuYW1lOiBlLnRhcmdldC5uYW1lLFxuICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkZvcm1Mb2FkaW5nKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlJFR0lTVEVSX0ZPUk1fTE9BRElOR1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblJlZ2lzdGVyRm9ybUVycm9yKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuUkVHSVNURVJfRk9STV9FUlJPUixcbiAgICBlcnJvclxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblJlZ2lzdGVyRm9ybVN1Y2Nlc3ModXNlcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6dHlwZXMuUkVHSVNURVJfRk9STV9TVUNDRVNTLFxuICAgIHVzZXJcbiAgfVxufSIsIi8vIExvZ2luIHR5cGVzXG5cbmV4cG9ydCBjb25zdCBMT0dJTl9GT1JNX0lOUFVUX0NIQU5HRSA9ICdMT0dJTl9GT1JNX0lOUFVUX0NIQU5HRSc7XG5leHBvcnQgY29uc3QgTE9HSU5fRk9STV9MT0FESU5HID0gJ0xPR0lOX0ZPUk1fTE9BRElORyc7XG5leHBvcnQgY29uc3QgTE9HSU5fRk9STV9FUlJPUiA9ICdMT0dJTl9GT1JNX0VSUk9SJztcbmV4cG9ydCBjb25zdCBMT0dJTl9GT1JNX1NVQ0NFU1MgPSAnTE9HSU5fRk9STV9TVUNDRVNTJztcblxuLy8gUmVnaXN0ZXIgdHlwZXNcblxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFID0gJ1JFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9GT1JNX0xPQURJTkcgPSAnUkVHSVNURVJfRk9STV9MT0FESU5HJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9GT1JNX0VSUk9SID0gJ1JFR0lTVEVSX0ZPUk1fRVJST1InO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZPUk1fU1VDQ0VTUyA9ICdSRUdJU1RFUl9GT1JNX1NVQ0NFU1MnO1xuXG4vLyBQcm9qZWN0IFJlZ2lzdGVyIHR5cGVzXG5cbmV4cG9ydCBjb25zdCBQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFID0gJ1BST0pFQ1RfUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UnO1xuZXhwb3J0IGNvbnN0IFBST0pFQ1RfUkVHSVNURVJfREFURV9DSEFOR0UgPSAnUFJPSkVDVF9SRUdJU1RFUl9EQVRFX0NIQU5HRSc7XG5leHBvcnQgY29uc3QgUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0xPQURJTkcgPSAnUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0xPQURJTkcnO1xuZXhwb3J0IGNvbnN0IFBST0pFQ1RfUkVHSVNURVJfRk9STV9FUlJPUiA9ICdQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fRVJST1InO1xuZXhwb3J0IGNvbnN0IFBST0pFQ1RfUkVHSVNURVJfRk9STV9TVUNDRVNTID0gJ1BST0pFQ1RfUkVHSVNURVJfRk9STV9TVUNDRVNTJztcblxuLy8gUHJvamVjdHMgdHlwZXNcblxuZXhwb3J0IGNvbnN0IEdFVF9QUk9KRUNUUyA9ICdHRVRfUFJPSkVDVFMnO1xuXG4vLyBBdXRoIHR5cGVzXG5cbmV4cG9ydCBjb25zdCBBVVRIX1VTRVIgPSAnQVVUSF9VU0VSJztcbmV4cG9ydCBjb25zdCBMT0dfT1VUID0gJ0xPR19PVVQnO1xuZXhwb3J0IGNvbnN0IFZPVEVfVVNFUiA9ICdWT1RFX1VTRVInO1xuXG4vLyBWb3RlIHR5cGVzXG5cbmV4cG9ydCBjb25zdCBHRVRfVk9URVMgPSAnR0VUX1ZPVEVTJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfVk9URSA9ICdSRU1PVkVfVk9URSc7IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWb3Rlcyh2b3Rlcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLkdFVF9WT1RFUyxcbiAgICB2b3Rlc1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVWb3RlKHZvdGVJRCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlJFTU9WRV9WT1RFLFxuICAgIHZvdGVJRFxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9hYm91dC5zY3NzJztcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvZXMvUGFwZXIvUGFwZXJcIjtcbmNvbnN0IGFib3V0ID0gKCApID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPVwicGFwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdIZWFkaW5nJz5Ib2JieUNyYWZ0IFRlYW08L2Rpdj5cbiAgICAgICAgPC9QYXBlcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCAnLi9Ib21lLnNjc3MnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBNdWlUaGVtZVByb3ZpZGVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgIG1haW46ICcjRUE3OTI1JyxcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnI2ZmZmZmZicsXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG5jb25zdCBIb21lID0gKCApID0+IHtcbiAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdDb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RpdGxlJz5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17XCJoM1wifVxuICAgICAgICAgICAgICAgICAgICA+QSBOZXcgYW5kIEJldHRlciB3YXkgdG8gZW5nYW5nZSBhbmQgcmV0YWluIGVtcGxveWVlc1xuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nU3ViaGVhZGluZyc+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJoZWFkaW5nXCIgPkNvbXBhbmllcyB1c2UgSG9iYnlDcmFmdCB0byBvcmdhbml6ZSB0aGVpclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVzIGhvYmJ5IGJ1ZGdldCwgaXRzIGEgcGVyZmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJuYWwgY3JvdWQgZnVuZGluZyBzeXN0ZW0gZm9yIHlvdSAhXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIHRvPScvbG9naW4nXG4gICAgICAgICAgICAgICAgICA+PFR5cG9ncmFwaHkgY29sb3I9XCJzZWNvbmRhcnlcIiA+R2V0IFN0YXJ0ZWQ8L1R5cG9ncmFwaHk+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG5cblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vbG9hZGVyLnNjc3MnO1xuXG5jb25zdCBMb2FkZXIgPSAoe2NvbG9yLGg9NDB9KSA9PiAoXG4gIDxkaXZcbiAgICBzdHlsZT17e1xuICAgICAgd2lkdGg6aCsncHgnLFxuICAgICAgaGVpZ2h0OmgrJ3B4JyxcbiAgICAgIGJvcmRlclJpZ2h0OmAke2gvNn1weCBzb2xpZCB0cmFuc3BhcmVudGAsXG4gICAgICBib3JkZXJMZWZ0OmAke2gvNn1weCBzb2xpZCB0cmFuc3BhcmVudGAsXG4gICAgICBib3JkZXJUb3A6YCR7aC82fXB4IHNvbGlkICR7Y29sb3J9YCxcbiAgICAgIGJvcmRlckJvdHRvbTpgJHtoLzZ9cHggc29saWQgJHtjb2xvcn1gLFxuICAgIH19XG4gICAgY2xhc3NOYW1lPXtgTG9hZGVyICR7Y29sb3J9YH0vPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9naW5BY3Rpb25zJztcbmltcG9ydCB7IG9uRm9ybVN1Ym1pdCB9IGZyb20gJy4uLy4uL3RodW5rcy9sb2dpblRodW5rJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyL0xvYWRlcic7XG5pbXBvcnQgJy4vTG9naW4uc2Nzcyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcbmltcG9ydCBTbmFja2JhciBmcm9tICcuLi9TbmFja2Jhci9zbmFja2Jhcic7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBNdWlUaGVtZVByb3ZpZGVyLCB3aXRoU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBMb2NrT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NrT3V0bGluZWQnO1xuXG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICAgIHBhbGV0dGU6IHtcbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgbWFpbjogJyNFQTc5MjUnLFxuICAgICAgICB9LFxuICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgIG1haW46ICcjMDA0NGZmJyxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIG1haW46ICcjZmZmZmZmJyxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gICAgbWFpbjoge1xuICAgICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKDQwMCArIHRoZW1lLnNwYWNpbmcudW5pdCAqIDMgKiAyKV06IHtcbiAgICAgICAgICAgIHdpZHRoOiA0MDAsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgcGFwZXI6IHtcbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAyfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weCAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDN9cHhgLFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCAqOCxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYXZhdGFyOiB7XG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZy51bml0LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRUE3OTI1JyxcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgfSxcbiAgICB0ZXh0RmllbGQ6IHtcbiAgICAgICAgaGVpZ2h0OiA1MCxcbiAgICB9LFxuICAgIHN1Ym1pdDoge1xuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgICAgIGhlaWdodDogNTAsXG4gICAgfSxcbn0pO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG9wZW46IGZhbHNlLFxuICAgIH07XG5cbiAgICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gICAgfTtcblxuICAgIG9uRm9ybVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkZvcm1TdWJtaXQodGhpcy5wcm9wcy5sb2dpbiwgdGhpcy5wcm9wcy5oaXN0b3J5KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBsb2FkaW5nIH0gPSB0aGlzLnByb3BzLmxvZ2luXG4gICAgICAgIGNvbnN0IHtvbklucHV0Q2hhbmdlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9ja091dGxpbmVkSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgPyA8U25hY2tiYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPiA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25Gb3JtU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyA8TG9hZGVyIGNvbG9yPXsnI2ZmZid9IGg9ezE1fSAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cImVycm9yXCIgPlNpZ24gSW48L1R5cG9ncmFwaHk+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzdWJoZWFkaW5nXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgSWYgeW91IGRvbid0IGhhdmUgYW4gYWNjb3VudCwgcGxlYXNleycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz0nL1JlZ2lzdGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9naW46IHN0YXRlLmxvZ2luXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgb25JbnB1dENoYW5nZTogKGUpID0+IGRpc3BhdGNoKGFjdGlvbnMub25JbnB1dENoYW5nZShlKSksXG4gICAgb25Gb3JtU3VibWl0OiAodXNlciwgaGlzdG9yeSkgPT5kaXNwYXRjaChvbkZvcm1TdWJtaXQodXNlcixoaXN0b3J5KSksXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFN0eWxlcyhzdHlsZXMpKExvZ2luKSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge05hdkxpbmsgYXMgUm91dGVyTGlua05hdiwgTGluayBhcyBSb3V0ZXJMaW5rLCB3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQge3dpdGhTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge011aVRoZW1lUHJvdmlkZXIsIGNyZWF0ZU11aVRoZW1lfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtvbkxvZ091dCBhcyBMb2dvdXR9IGZyb20gJy4uLy4uL3RodW5rcy9sb2dvdXRUaHVuayc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQm90dG9tTmF2aWdhdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3R0b21OYXZpZ2F0aW9uJztcbmltcG9ydCBCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JvdHRvbU5hdmlnYXRpb25BY3Rpb24nO1xuaW1wb3J0IEhvbWVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ib21lJztcbmltcG9ydCBWaWV3IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9WaWV3TW9kdWxlJztcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MaWJyYXJ5QWRkJztcbmltcG9ydCBQZXJzb25JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QZXJzb24nO1xuaW1wb3J0IFBlcnNvbkFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BlcnNvbkFkZCc7XG5cblxuXG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogJyNFQTc5MjUnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OntcbiAgICAgIG1haW46ICcjZmZmZmZmJyxcbiAgICB9XG4gIH0sXG59KTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICByb290OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSxcblxuICBNb2JpbGVOYXY6e1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgekluZGV4OiAxMDAwLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB9LFxuICB9LFxuXG5cbiAgbWVudWJhcjoge1xuICAgIHBvc2l0aW9uOiAnc3RhdGljJyxcbiAgICBiYWNrZ3JvdW5kOiBcIiMxODE4MThcIixcblxuICB9LFxuICBncm93OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gICAgYWxpZ246ICdjZW50ZXInLFxuICB9LFxuICB0aXRsZToge1xuICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgZGlzcGxheTogJ25vbmUnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgfSxcbiAgfSxcbiAgc2VjdGlvbkRlc2t0b3A6IHtcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB9LFxuICB9LFxuICBidXR0b246IHtcbiAgICBjb2xvcjogJyNBNEE0QTQnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgIHBhZGRpbmdMZWZ0OiAyMCxcbiAgICBwYWRkaW5nUmlnaHQ6IDIwLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZSdcbiAgfSxcbiAgbGluazoge1xuICAgIGNvbG9yOiAnI0E0QTRBNCcsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAgbWFyZ2luOiAnYXV0bycsXG4gICAgcGFkZGluZzogJzZweCAyMHB4JyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXG4gIH0sXG4gIE1vYmlsZUJ1dHRvbjoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiAnI0E0QTRBNCcsXG4gICAgfSxcbiAgICBtYXJnaW46ICdhdXRvJyxcbiAgICBwYWRkaW5nTGVmdDogMjAsXG4gICAgcGFkZGluZ1JpZ2h0OiAyMCxcbiAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgfSxcbiAgYnV0dG9uU2luZ1VwOiB7XG4gICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0VBNzkyNVwiLFxuICAgIGJvcmRlclJhZGl1czogMjUsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNBMTU0MjFcIixcbiAgICB9LFxuICB9LFxuICBzZWN0aW9uTW9iaWxlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB9LFxuICB9LFxuICB0aXRsZU1vYmlsZToge1xuICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gIH0sXG59O1xuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB2YWx1ZTogMCxcbiAgICBzaG93TWVudTogZmFsc2VcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCwgdmFsdWUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZX0pO1xuICB9O1xuXG4gIG9uTG9nT3V0VG9nZ2xlID0gKCkgPT4gdGhpcy5wcm9wcy5vbkxvZ291dENsaWNrKHRoaXMucHJvcHMuaGlzdG9yeSlcblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7Y2xhc3NlcywgbG9jYXRpb259ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7aXNBdXRoLCByb2xlfSA9IHRoaXMucHJvcHMuYXV0aDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgPEFwcEJhciBjbGFzc05hbWU9e2NsYXNzZXMubWVudWJhcn0+XG4gICAgICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua05hdn0gdG89Jy8nID5cbiAgICAgICAgICAgICAgICAgIEhvYmJ5Q3JhZnRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25Nb2JpbGV9PlxuICAgICAgICAgICAgICAgICAge2lzQXV0aCA/XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPSdzZWNvbmRhcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZU1vYmlsZX0gY29tcG9uZW50PXtSb3V0ZXJMaW5rTmF2fSB0bz0nLyc+XG4gICAgICAgICAgICAgICAgICAgIEhvYmJ5Q3JhZnRcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPiA6IG51bGxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyb3d9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uRGVza3RvcH0+XG4gICAgICAgICAgICAgICAgICB7aXNBdXRoID9cbiAgICAgICAgICAgICAgICAgICAgICA8IEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycvcHJvamVjdHMnID09PSBsb2NhdGlvbi5wYXRobmFtZSA/IGNsYXNzZXMuYnV0dG9uU2luZ1VwIDogY2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua05hdn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy9wcm9qZWN0cyc+XG4gICAgICAgICAgICAgICAgICAgICAgICBEaXNjb3ZlciBQcm9qZWN0c1xuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICA8IEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycvJyA9PT0gbG9jYXRpb24ucGF0aG5hbWUgPyBjbGFzc2VzLmJ1dHRvblNpbmdVcCA6IGNsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPScvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIERpc2NvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+fVxuICAgICAgICAgICAgICAgICAge2lzQXV0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycvcHJvamVjdC1yZWdpc3RyYXRpb24nID09PSBsb2NhdGlvbi5wYXRobmFtZSA/IGNsYXNzZXMuYnV0dG9uU2luZ1VwIDogY2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua05hdn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy9wcm9qZWN0LXJlZ2lzdHJhdGlvbic+Q3JlYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBhIFByb2plY3Q8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycvcmVnaXN0ZXInID09PSBsb2NhdGlvbi5wYXRobmFtZSA/IGNsYXNzZXMuYnV0dG9uU2luZ1VwIDogY2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua05hdn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy9yZWdpc3Rlcic+U2lnblxuICAgICAgICAgICAgICAgICAgICAgICAgVXAgV2l0aCBFbWFpbDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAge2lzQXV0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycvdXNlcicgPT09IGxvY2F0aW9uLnBhdGhuYW1lID8gY2xhc3Nlcy5idXR0b25TaW5nVXAgOiBjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rTmF2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bz0nL3VzZXInPnt0aGlzLnByb3BzLmF1dGguZW1haWx9IHt0aGlzLnByb3BzLmF1dGguYW1vdW50feKCrDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jy9hYm91dCcgPT09IGxvY2F0aW9uLnBhdGhuYW1lID8gY2xhc3Nlcy5idXR0b25TaW5nVXAgOiBjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rTmF2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bz1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWJvdXQgVXNcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAge3JvbGUgPT09IDEgP1xuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaHJlZj17Jy9hZG1pbid9IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259ID5BZG1pbjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7aXNBdXRoID9cbiAgICAgICAgICAgICAgICAgICAgbnVsbDogPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbk1vYmlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj0nc2Vjb25kYXJ5JyBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVNb2JpbGV9IGNvbXBvbmVudD17Um91dGVyTGlua05hdn0gdG89Jy8nPlxuICAgICAgICAgICAgICAgICAgICAgICAgSG9iYnlDcmFmdFxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyb3d9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uRGVza3RvcH0+XG4gICAgICAgICAgICAgICAgICB7aXNBdXRoID9cbiAgICAgICAgICAgICAgICAgICAgICA8IEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBvbkNsaWNrPXt0aGlzLm9uTG9nT3V0VG9nZ2xlfSB0bz0nL2xvZ291dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgPCBCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gY29tcG9uZW50PXtSb3V0ZXJMaW5rfSB0bz0nL2xvZ2luJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25Nb2JpbGV9PlxuICAgICAgICAgICAgICAgICAge2lzQXV0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbk1vYmlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9J3NlY29uZGFyeScgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlTW9iaWxlfSBvbkNsaWNrPXt0aGlzLm9uTG9nT3V0VG9nZ2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPScvbG9nb3V0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBudWxsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7aXNBdXRoID9cbiAgICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25cbiAgICAgICAgICAgICAgICAgIHNob3dMYWJlbHNcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5Nb2JpbGVOYXZ9PlxuICAgICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPVwiSG9tZVwiIGNvbXBvbmVudD17Um91dGVyTGlua30gdG89Jy8nIGljb249ezxIb21lSWNvbi8+fS8+XG4gICAgICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9XCJEaXNjb3ZlclwiICBjb21wb25lbnQ9e1JvdXRlckxpbmt9IHRvPScvcHJvamVjdHMnIGljb249ezxWaWV3Lz59Lz5cbiAgICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIkNyZWF0ZVwiIGNvbXBvbmVudD17Um91dGVyTGlua30gdG89Jy9wcm9qZWN0LXJlZ2lzdHJhdGlvbicgaWNvbj17PEFkZEljb24vPn0vPlxuICAgICAgICAgICAgICAgIHtyb2xlID09PSAxID8gPEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9XCJBZG1pblwiIGhyZWY9eycvYWRtaW4nfSBpY29uPXs8UGVyc29uSWNvbi8+fSAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD17dGhpcy5wcm9wcy5hdXRoLmVtYWlsfSBjb21wb25lbnQ9e1JvdXRlckxpbmt9IHRvPScvdXNlcicgaWNvbj17PFBlcnNvbkljb24vPn0vPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9Cb3R0b21OYXZpZ2F0aW9uPlxuICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uXG4gICAgICAgICAgICAgICAgICBzaG93TGFiZWxzXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuTW9iaWxlTmF2fT5cbiAgICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIkhvbWVcIiAgIGNvbXBvbmVudD17Um91dGVyTGlua30gdG89Jy8nIGljb249ezxIb21lSWNvbi8+fS8+XG4gICAgICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9XCJTaWduIFVwXCIgY29tcG9uZW50PXtSb3V0ZXJMaW5rfSB0bz0nL3JlZ2lzdGVyJyBpY29uPXs8UGVyc29uQWRkSWNvbi8+fS8+XG4gICAgICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9XCJTaWduIEluXCIgY29tcG9uZW50PXtSb3V0ZXJMaW5rfSB0bz0nL2xvZ2luJyBpY29uPXs8UGVyc29uSWNvbi8+fS8+XG4gICAgICAgICAgICAgIDwvQm90dG9tTmF2aWdhdGlvbj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbk5hdkJhci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYXV0aDogc3RhdGUuYXV0aFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgb25Mb2dvdXRDbGljazogKGhpc3RvcnkpID0+IGRpc3BhdGNoKExvZ291dChoaXN0b3J5KSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKSh3aXRoUm91dGVyKHdpdGhTdHlsZXMoc3R5bGVzKShOYXZCYXIpKSk7IiwiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtMaW5rIGFzIFJvdXRlckxpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgJy4vUHJvamVjdEluZm8uc2Nzcyc7XG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3MnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IHtjcmVhdGVNdWlUaGVtZSwgTXVpVGhlbWVQcm92aWRlcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9lcy9UeXBvZ3JhcGh5L1R5cG9ncmFwaHlcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvZXMvUGFwZXIvUGFwZXJcIjtcbmltcG9ydCB7b25Wb3RlfSBmcm9tIFwiLi4vLi4vdGh1bmtzL3ZvdGVUaHVua1wiO1xuXG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICAgIHBhbGV0dGU6IHtcbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgbWFpbjogJyNFQTc5MjUnLFxuICAgICAgICB9LFxuICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgIG1haW46ICcjZmZmZmZmJyxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG5cblxuXG5jb25zdCBQcm9qZWN0SW5mbyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7YW1vdW50fSA9IHByb3BzLmF1dGg7XG4gIGNvbnN0IHtwcm9qZWN0cywgb25Wb3RlQ2xpY2t9ID0gcHJvcHM7XG4gIGNvbnN0IHByb2plY3RJbmZvID0gcHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4ge1xuICAgIGlmKHByb2plY3QuaWQudG9TdHJpbmcoKSA9PT0gcHJvcHMubWF0Y2gucGFyYW1zLmlkKSB7XG4gICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0pLm1hcCgocHJvamVjdCwgaSkgPT4ge1xuICAgIHByb2plY3QuYnVkZ2V0ID0gMDtcbiAgICBpZiAocHJvamVjdC52b3Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICBwcm9qZWN0LmJ1ZGdldCA9IHByb2plY3Qudm90ZXMucmVkdWNlKCh0b3RhbCwgdm90ZSk9PiB7XG4gICAgICAgIHJldHVybiB0b3RhbCArIHZvdGUuYW1vdW50O1xuICAgICAgfSwgMClcbiAgICB9IGVsc2UgaWYocHJvamVjdC52b3Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHByb2plY3QuYnVkZ2V0ID0gcHJvamVjdC52b3Rlc1swXS5hbW91bnQ7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1Byb2plY3QnIGtleT17aX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVGl0bGUnPntwcm9qZWN0LnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZ3Jlc3MtYmFyJz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+e3Byb2plY3QuYnVkZ2V0fSDigqw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdMaW5lYXJQcm9ncmVzc01vbmV5Jz5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluZWFyUHJvZ3Jlc3MgdmFyaWFudD17J2J1ZmZlcid9IHZhbHVlPXsocHJvamVjdC5idWRnZXQvcHJvamVjdC5hbW91bnQpKjEwMH0vPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2Pntwcm9qZWN0LmFtb3VudH0g4oKsPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVm90ZUJ1dHRvbnMnPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Wb3RlQ2xpY2socHJvamVjdC5pZCwgNSl9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Ftb3VudCA8IDV9XG4gICAgICAgICAgICAgICAgICA+NeKCrDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Wb3RlQ2xpY2socHJvamVjdC5pZCwgMTUpfVxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthbW91bnQgPCAxNX1cbiAgICAgICAgICAgICAgICAgID4xNeKCrDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Wb3RlQ2xpY2socHJvamVjdC5pZCwgMzApfVxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthbW91bnQgPCAzMH1cbiAgICAgICAgICAgICAgICAgID4zMOKCrDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdBdXRob3InPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+QXV0aG9yIEVtYWlsOiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVGV4dC0tQm9sZCc+IHtwcm9qZWN0LmVtYWlsfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdEZXNjcmlwdGlvbicgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3Byb2plY3QuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdCdXR0b24nXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgICAgICB0bz0nL3Byb2plY3RzJz5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgPkJhY2sgdG8gcHJvamVjdHM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgIClcbiAgfSlcbiAgcmV0dXJuIChcbiAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdQcm9qZWN0SW5mbyc+XG4gICAgICAgICAgICAgIHtwcm9qZWN0SW5mb31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvUGFwZXI+XG4gICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0czogc3RhdGUucHJvamVjdHMucHJvamVjdHMsXG4gICAgYXV0aDogc3RhdGUuYXV0aFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgb25Wb3RlQ2xpY2s6IChwcm9qZWN0SWQsIGFtb3VudCkgPT4gZGlzcGF0Y2gob25Wb3RlKHByb2plY3RJZCwgYW1vdW50KSlcblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoUHJvamVjdEluZm8pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL1Byb2plY3RSZWdpc3RyYXRpb24uc2Nzcyc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlci9Mb2FkZXInO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9wcm9qZWN0UmVnaXN0ZXJBY3Rpb25zJztcbmltcG9ydCB7b25Qcm9qZWN0UmVnaXN0ZXJGb3JtU3VibWl0fSBmcm9tICcuLi8uLi90aHVua3MvcHJvamVjdFJlZ2lzdGVyVGh1bmsnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IHtjcmVhdGVNdWlUaGVtZSwgTXVpVGhlbWVQcm92aWRlciwgd2l0aFN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnLi4vU25hY2tiYXIvc25hY2tiYXInO1xuXG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogJyNFQTc5MjUnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzAwNDRmZicsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgbWFpbjogJyNmZmZmZmYnLFxuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgbWFpbjoge1xuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCg0MDAgKyB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzICogMildOiB7XG4gICAgICB3aWR0aDogNDAwLFxuICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICB9LFxuICB9LFxuICBwYXBlcjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0LFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAyfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weCAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDN9cHhgLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0ICo4LFxuICAgIH0sXG4gIH0sXG4gIGZvcm06IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0LFxuICB9LFxuICB0ZXh0RmllbGQ6IHtcbiAgICBoZWlnaHQ6IDUwLFxuICB9LFxuICBzdWJtaXQ6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgaGVpZ2h0OiA1MCxcbiAgfSxcbn0pO1xuXG5jbGFzcyBQcm9qZWN0UmVnaXN0cmF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3BlbjogZmFsc2UsXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gIH07XG5cbiAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICB9O1xuXG4gIG9uRm9ybVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25Gb3JtU3VibWl0KHRoaXMucHJvcHMucHJvamVjdFJlZ2lzdGVyLCB0aGlzLnByb3BzLmhpc3RvcnksIHRoaXMucHJvcHMuYXV0aC5lbWFpbClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB1c2VybmFtZSxcbiAgICAgIGhvYmJ5TmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgYW1vdW50LFxuICAgICAgbG9hZGluZyxcbiAgICAgIGVycm9yLFxuICAgIH0gPXRoaXMucHJvcHMucHJvamVjdFJlZ2lzdGVyO1xuICAgIGNvbnN0IHtvbklucHV0Q2hhbmdlfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZW1haWwgfSA9dGhpcy5wcm9wcy5hdXRoXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiPlJlZ2lzdGVyIFlvdXIgSG9iYnlcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgIHtlcnJvciA/IDxTbmFja2JhclxuICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgLz4gOiBudWxsfVxuXG4gICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5vbkZvcm1TdWJtaXR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfVxuICAgICAgICAgICAgICAgICAgbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0naG9iYnlOYW1lJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aG9iYnlOYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxlYXNlIGVudGVyIHlvdXIgaG9iYnkgbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQbGVhc2UgZW50ZXIgeW91ciBlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgcm93c01heD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBkZXNjcmliZSBpdFwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdhbW91bnQnXG4gICAgICAgICAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBlbnRlciBhbW91bnQgZm9yIHlvdXIgbmVlZHNcIlxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IDxMb2FkZXIgdGV4dENvbG9yPVwic2Vjb25kYXJ5XCIgY29sb3I9eycjZmZmJ30gaD17MTV9IC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cImVycm9yXCIgPlBsYWNlIHlvdXIgaG9iYnk8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvamVjdFJlZ2lzdGVyOiBzdGF0ZS5wcm9qZWN0UmVnaXN0ZXIsXG4gICAgYXV0aDogc3RhdGUuYXV0aFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgb25JbnB1dENoYW5nZTogKGUpID0+IGRpc3BhdGNoKGFjdGlvbnMub25JbnB1dENoYW5nZShlKSksXG4gIG9uRGF0ZUNoYW5nZTogKGRhdGUpID0+IGRpc3BhdGNoKGFjdGlvbnMub25EYXRlQ2hhbmdlKGRhdGUpKSxcbiAgb25Gb3JtU3VibWl0OiAocHJvamVjdEluZm8sIGhpc3RvcnksIGVtYWlsKT0+ZGlzcGF0Y2gob25Qcm9qZWN0UmVnaXN0ZXJGb3JtU3VibWl0KHByb2plY3RJbmZvLGhpc3RvcnksZW1haWwpKVxufSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhTdHlsZXMoc3R5bGVzKShQcm9qZWN0UmVnaXN0cmF0aW9uKSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmsgYXMgUm91dGVyTGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgJy4vUHJvamVjdHNMaXN0LnNjc3MnO1xuaW1wb3J0IHtzZXRQcm9qZWN0TGlzdH0gZnJvbSAnLi4vLi4vdGh1bmtzL2dldFByb2plY3RzJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiO1xuaW1wb3J0IHtvblZvdGV9IGZyb20gJy4uLy4uL3RodW5rcy92b3RlVGh1bmsnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB7Y3JlYXRlTXVpVGhlbWUsIE11aVRoZW1lUHJvdmlkZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCJcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlci9Mb2FkZXInO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjRUE3OTI1JyxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyMwMDQ0ZmYnLFxuICAgIH0sXG4gIH0sXG59KTtcblxuXG5jbGFzcyBQcm9qZWN0c0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW5lZDogZmFsc2UsXG4gICAgICBzZWFyY2hWYWx1ZTogJydcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLm9uR2V0UHJvamVjdHNMaXN0KCk7XG4gIH1cblxuICBvblNlYXJjaEJhckNoYW5nZSA9IGUgPT4gdGhpcy5zZXRTdGF0ZSh7c2VhcmNoVmFsdWU6IGUudGFyZ2V0LnZhbHVlfSlcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3Byb2plY3RzLCBvblZvdGVDbGlja30gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHthbW91bnR9ID0gdGhpcy5wcm9wcy5hdXRoO1xuICAgIGxldCBwcm9qZWN0c0xpc3Q7XG4gICAgaWYgKHByb2plY3RzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgcHJvamVjdHNMaXN0ID0gcHJvamVjdHMgJiYgcHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4ge1xuICAgICAgICBwcm9qZWN0LmJ1ZGdldCA9IDA7XG4gICAgICAgIGlmIChwcm9qZWN0LnZvdGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcm9qZWN0LmJ1ZGdldCA9IHByb2plY3Qudm90ZXMucmVkdWNlKCh0b3RhbCwgdm90ZSk9PiB7XG4gICAgICAgICAgICByZXR1cm4gdG90YWwgKyB2b3RlLmFtb3VudDtcbiAgICAgICAgICB9LCAwKVxuICAgICAgICB9IGVsc2UgaWYocHJvamVjdC52b3Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBwcm9qZWN0LmJ1ZGdldCA9IHByb2plY3Qudm90ZXNbMF0uYW1vdW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9qZWN0LnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgICAgIC5tYXAoKHByb2plY3QsIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0ga2V5PXtpfT5cbiAgICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXsnbWFpbid9PlxuICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9eydDYXJkJ30gY29tcG9uZW50PXtSb3V0ZXJMaW5rfSB0bz17YC9wcm9qZWN0LyR7cHJvamVjdC5pZH1gfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnQ2FyZC10aXRsZSd9Pntwcm9qZWN0LnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydDYXJkLWRlc2NyaXB0aW9uJ30+e3Byb2plY3QuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJDYXJkLXByb2dyZXNzXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pntwcm9qZWN0LmJ1ZGdldH0kPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIkNhcmQtcHJvZ3Jlc3MtYmFyXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5lYXJQcm9ncmVzcyB2YXJpYW50PXsnYnVmZmVyJ30gdmFsdWU9eyhwcm9qZWN0LmJ1ZGdldCAvIHByb2plY3QuYW1vdW50KSAqIDEwMH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57cHJvamVjdC5hbW91bnR9JDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J1ZvdGVCdXR0b25zJ30+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgc3R5bGU9e3tib3JkZXJSYWRpdXM6IDUwLCBtYXJnaW46IDV9fSBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVm90ZUNsaWNrKHByb2plY3QuaWQsIDUpfSBkaXNhYmxlZD17YW1vdW50IDwgNX0+NeKCrDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiA1MCwgbWFyZ2luOiA1fX0gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblZvdGVDbGljayhwcm9qZWN0LmlkLCAxNSl9IGRpc2FibGVkPXthbW91bnQgPCAxNX0+MTXigqw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzdHlsZT17e2JvcmRlclJhZGl1czogNTAsIG1hcmdpbjogNX19IGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Wb3RlQ2xpY2socHJvamVjdC5pZCwgMzApfSBkaXNhYmxlZD17YW1vdW50IDwgMzB9PjMw4oKsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RzTGlzdCA9IDxkaXYgY2xhc3NOYW1lPSdMb2FkZXItY29udGFpbmVyJz5cbiAgICAgICAgPExvYWRlciBjb2xvcj17JyNFQTc5MjUnfSBoPXsxMDB9Lz5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdQcm9qZWN0c0xpc3QnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTZWFyY2hCYXJcIj5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxlYXNlIGVudGVyIGtleXdvcmRzXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2VhcmNoQmFyQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3NlYXJjaFZhbHVlJ30+e3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9PC9kaXY+XG4gICAgICAgICAgICB7cHJvamVjdHNMaXN0fVxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgID5JZiB5b3UgaGF2ZSBhIHByb2plY3QsIHBsZWFzZXsnICd9XG4gICAgICAgICAgICAgIDxMaW5rIGNvbXBvbmVudD17Um91dGVyTGlua30gY29sb3I9eydzZWNvbmRhcnknfSB0bz0nL3Byb2plY3QtcmVnaXN0cmF0aW9uJz5SZWdpc3RlcjwvTGluaz5cbiAgICAgICAgICAgICAgeycgJ315b3VyIHByb2plY3QoaG9iYnkpLlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0czogc3RhdGUucHJvamVjdHMucHJvamVjdHMsXG4gICAgYXV0aDogc3RhdGUuYXV0aFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgb25HZXRQcm9qZWN0c0xpc3Q6ICgpID0+IGRpc3BhdGNoKHNldFByb2plY3RMaXN0KCkpLFxuICBvblZvdGVDbGljazogKHByb2plY3RJZCwgYW1vdW50KSA9PiBkaXNwYXRjaChvblZvdGUocHJvamVjdElkLCBhbW91bnQpKVxuXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFByb2plY3RzTGlzdCk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlci9Mb2FkZXInO1xuaW1wb3J0IHtMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0ICcuL1JlZ2lzdGVyLnNjc3MnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi8uLi9hY3Rpb25zL3JlZ2lzdGVyQWN0aW9uc1wiO1xuaW1wb3J0IHtvblJlZ2lzdGVyRm9ybVN1Ym1pdH0gZnJvbSAnLi4vLi4vdGh1bmtzL3JlZ2lzdGVyVGh1bmsnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IHtjcmVhdGVNdWlUaGVtZSwgTXVpVGhlbWVQcm92aWRlciwgd2l0aFN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgQWNjb3VudCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZSc7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnLi4vU25hY2tiYXIvc25hY2tiYXInO1xuXG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogJyNFQTc5MjUnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzAwNDRmZicsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgbWFpbjogJyNmZmZmZmYnLFxuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgbWFpbjoge1xuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCg0MDAgKyB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzICogMildOiB7XG4gICAgICB3aWR0aDogNDAwLFxuICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICB9LFxuICB9LFxuICBwYXBlcjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0LFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAyfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weCAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDN9cHhgLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0ICo4LFxuICAgIH0sXG4gIH0sXG4gIGZvcm06IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0LFxuICB9LFxuICB0ZXh0RmllbGQ6IHtcbiAgICBoZWlnaHQ6IDUwLFxuICB9LFxuICBzdWJtaXQ6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgaGVpZ2h0OiA1MCxcbiAgfSxcbiAgYXZhdGFyOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0VBNzkyNScsXG4gIH0sXG59KTtcblxuXG5jbGFzcyBSZWdpc3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG9wZW46IGZhbHNlLFxuXG4gIH07XG5cbiAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICB9O1xuXG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gIH07XG5cblxuICBvbkZvcm1TdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uRm9ybVN1Ym1pdCh0aGlzLnByb3BzLnJlZ2lzdGVyLCB0aGlzLnByb3BzLmhpc3RvcnkpO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIHBhc3N3b3JkMiwgZXJyb3IsIGxvYWRpbmcsfSA9IHRoaXMucHJvcHMucmVnaXN0ZXI7XG4gICAgY29uc3Qge29uSW5wdXRDaGFuZ2V9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfSA+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgIDxDc3NCYXNlbGluZS8+XG4gICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0gPlxuICAgICAgICAgICAgICAgIDxBY2NvdW50Lz5cbiAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiPlNpZ24gVXBcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgIHtlcnJvciA/IDxTbmFja2JhclxuICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgLz4gOiBudWxsfVxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vbkZvcm1TdWJtaXR9ICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSAgbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cblxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxlYXNlIGVudGVyIHlvdXIgZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQyJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmQyfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVwZWF0IFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyA8TG9hZGVyIGNvbG9yPXsnI2ZmZid9IGg9ezE1fSAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJlcnJvclwiID5TaWduIHVwPC9UeXBvZ3JhcGh5PiB9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzdWJoZWFkaW5nXCJ9PlxuICAgICAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD97JyAnfVxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgY29sb3I9eydzZWNvbmRhcnknfVxuICAgICAgICAgICAgICAgICAgdG89Jy9sb2dpbic+XG4gICAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHJlZ2lzdGVyOiBzdGF0ZS5yZWdpc3RlclxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgb25JbnB1dENoYW5nZTogKGUpID0+IGRpc3BhdGNoKGFjdGlvbnMub25JbnB1dENoYW5nZShlKSksXG4gIG9uRm9ybVN1Ym1pdDogKHVzZXIsIGhpc3RvcnkpID0+IGRpc3BhdGNoKG9uUmVnaXN0ZXJGb3JtU3VibWl0KHVzZXIsIGhpc3RvcnkpKVxufSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhTdHlsZXMoc3R5bGVzKShSZWdpc3RlcikpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNuYWNrIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiO1xuaW1wb3J0IEVycm9ySWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Vycm9yXCI7XG5pbXBvcnQge3dpdGhTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJyNkMzJmMmYnLFxuICAgIH0sXG4gICAgTW9iaWJsZVNuYWNrYmFyOntcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgRGVza3RvcFNuYWNrYmFyOntcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgICBmb250U2l6ZToyMCxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDEwLFxuICAgIH0sXG4gICAgbWVzc2FnZToge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIH0sXG59KTtcblxuICAgICAgICBjb25zdCBTbmFja2JhciAgPSAocHJvcHMpID0+IHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLkRlc2t0b3BTbmFja2Jhcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U25hY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtwcm9wcy5vcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MjAwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnRlbnRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogJ21lc3NhZ2UtaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IHsgcm9vdDogcHJvcHMuY2xhc3Nlcy5yb290fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXs8c3BhbiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVycm9ySWNvbiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuaWNvbn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5lcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25DbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5Nb2JpYmxlU25hY2tiYXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNuYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtwcm9wcy5vcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3Byb3BzLm9uQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MzAwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250ZW50UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiAnbWVzc2FnZS1pZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IHsgcm9vdDogcHJvcHMuY2xhc3Nlcy5yb290fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17PHNwYW4gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLm1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFcnJvckljb24gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLmljb259Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmVycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbmV4cG9ydCBkZWZhdWx0ICh3aXRoU3R5bGVzKHN0eWxlcykoU25hY2tiYXIpKTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9Vc2VyLnNjc3MnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7dm90ZXN9IGZyb20gJy4uLy4uL3RodW5rcy9nZXRWb3Rlc1RodW5rJztcbmltcG9ydCB7dW5Wb3RlfSBmcm9tICcuLi8uLi90aHVua3MvdW5Wb3RlVGh1bmsnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXIvTG9hZGVyJztcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2VzL1BhcGVyL1BhcGVyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCB7Y3JlYXRlTXVpVGhlbWUsIE11aVRoZW1lUHJvdmlkZXIsfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5cblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gICAgcGFsZXR0ZToge1xuICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgbWFpbjogJyMwMDQ0ZmYnLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxuXG5cbmNsYXNzIFVzZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuZWQ6IGZhbHNlLFxuICAgICAgICAgICAgc2VhcmNoVmFsdWU6ICcnXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMub25HZXRWb3RlcygpXG4gIH1cblxuICAgIG9uU2VhcmNoQmFyQ2hhbmdlID0gZSA9PiB0aGlzLnNldFN0YXRlKHtzZWFyY2hWYWx1ZTogZS50YXJnZXQudmFsdWV9KVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3ZvdGVzfSA9IHRoaXMucHJvcHMudm90ZXM7XG4gICAgY29uc3Qge29uVW5Wb3RlfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGNvbnN0IGxvYWRlciA9IDxkaXYgY2xhc3NOYW1lPVwiTG9hZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxMb2FkZXIgY29sb3I9eycjRUE3OTI1J30gaD17MTAwfS8+XG4gICAgICA8L2Rpdj5cblxuICAgIGNvbnN0IHZvdGVzQXJyYXkgPSB2b3Rlcy5tYXAodm90ZSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17J21haW4nfSA+XG4gICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXsnQ2FyZCd9ICBrZXk9e3ZvdGUuaWR9ID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J0NhcmQtdGl0bGUnfT57dm90ZS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J0NhcmQtTW9uZXlTcGVuZCd9ID5Wb3RlZCBBbW91bnQ6IHt2b3RlLmFtb3VudH3igqw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVW5Wb3RlKHZvdGUuaWQpfT5VblZvdGU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgICApXG4gICAgfSlcbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1VzZXInPlxuICAgICAgICAgICAgICAgICAge3ZvdGVzLmxlbmd0aCA+IDAgPyB2b3Rlc0FycmF5IDogbG9hZGVyfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB2b3Rlczogc3RhdGUudm90ZXNcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIG9uR2V0Vm90ZXM6ICgpID0+IGRpc3BhdGNoKHZvdGVzKCkpLFxuICBvblVuVm90ZTogKGlkKSA9PiBkaXNwYXRjaCh1blZvdGUoaWQpKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFVzZXIpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7Y3JlYXRlU3RvcmUsIGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyJztcbmltcG9ydCAnLi9pbmRleC5zY3NzJztcbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi9Sb3V0ZXMnO1xuaW1wb3J0ICogYXMgc2VydmljZVdvcmtlciBmcm9tICcuL3NlcnZpY2VXb3JrZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJ1xuXG5heGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UocmVxdWVzdCA9PiB7XG4gIHJldHVybiByZXF1ZXN0O1xufSlcblxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKHJlc3BvbnNlID0+IHtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufSlcblxuY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gfHwgY29tcG9zZTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgY29tcG9zZUVuaGFuY2VycyhhcHBseU1pZGRsZXdhcmUodGh1bmspKSk7XG5cblJlYWN0RE9NLnJlbmRlcig8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgPFJvdXRlcy8+XG48L1Byb3ZpZGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cblxuLy8gSWYgeW91IHdhbnQgeW91ciBhcHAgdG8gd29yayBvZmZsaW5lIGFuZCBsb2FkIGZhc3RlciwgeW91IGNhbiBjaGFuZ2Vcbi8vIHVucmVnaXN0ZXIoKSB0byByZWdpc3RlcigpIGJlbG93LiBOb3RlIHRoaXMgY29tZXMgd2l0aCBzb21lIHBpdGZhbGxzLlxuLy8gTGVhcm4gbW9yZSBhYm91dCBzZXJ2aWNlIHdvcmtlcnM6IGh0dHBzOi8vYml0Lmx5L0NSQS1QV0FcbnNlcnZpY2VXb3JrZXIudW5yZWdpc3RlcigpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBlbWFpbDogJycsXG4gICAgYW1vdW50OiAwLFxuICAgIHJvbGU6IG51bGwsXG4gICAgaXNBdXRoOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5BVVRIX1VTRVI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBhY3Rpb24udXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGFjdGlvbi51c2VyLmJ1ZGdldCxcbiAgICAgICAgICAgICAgICByb2xlOiBhY3Rpb24udXNlci5yb2xlLFxuICAgICAgICAgICAgICAgIGlzQXV0aDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIHR5cGVzLkxPR19PVVQ6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDAsXG4gICAgICAgICAgICAgICAgcm9sZTogbnVsbCxcbiAgICAgICAgICAgICAgICBpc0F1dGg6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIHR5cGVzLlZPVEVfVVNFUjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYW1vdW50OiBzdGF0ZS5hbW91bnQtYWN0aW9uLmFtb3VudFxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGVtYWlsOiAnJyxcbiAgcGFzc3dvcmQ6ICcnLFxuICBlcnJvcjogJycsXG4gIGxvYWRpbmc6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLkxPR0lOX0ZPUk1fSU5QVVRfQ0hBTkdFOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgW2FjdGlvbi5uYW1lXTogYWN0aW9uLnZhbHVlfTtcbiAgICBjYXNlIHR5cGVzLkxPR0lOX0ZPUk1fTE9BRElORzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVycm9yOiAnJywgbG9hZGluZzogdHJ1ZX07XG4gICAgY2FzZSB0eXBlcy5MT0dJTl9GT1JNX0VSUk9SOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXJyb3I6IGFjdGlvbi5lcnJvciwgbG9hZGluZzpmYWxzZX07XG4gICAgY2FzZSB0eXBlcy5MT0dJTl9GT1JNX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlbWFpbDogJycsIHBhc3N3b3JkOiAnJywgbG9hZGluZzpmYWxzZX07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHVzZXJuYW1lOiAnJyxcbiAgaG9iYnlOYW1lOiAnJyxcbiAgZW1haWw6ICcnLFxuICBkZXNjcmlwdGlvbjogJycsXG4gIGFtb3VudDogJycsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcjogJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0U6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBbYWN0aW9uLm5hbWVdOiBhY3Rpb24udmFsdWV9O1xuICAgIGNhc2UgdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9EQVRFX0NIQU5HRTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVuZERhdGU6IGFjdGlvbi5kYXRlfTtcbiAgICBjYXNlIHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9MT0FESU5HOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZX07XG4gICAgY2FzZSB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fRVJST1I6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlcnJvcjogYWN0aW9uLmVycm9yLCBsb2FkaW5nOmZhbHNlfTtcbiAgICBjYXNlIHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgaG9iYnlOYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBhbW91bnQ6ICcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGVuZERhdGU6IG51bGwsXG4gICAgICAgIGxvYWRpbmc6ZmFsc2UsXG4gICAgICAgIGVycm9yOicnfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwcm9qZWN0czogW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLkdFVF9QUk9KRUNUUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHByb2plY3RzOiBhY3Rpb24ucHJvamVjdHN9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHVzZXJuYW1lOiAnJyxcbiAgZW1haWw6ICcnLFxuICBwYXNzd29yZDogJycsXG4gIHBhc3N3b3JkMjogJycsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcjogJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0U6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBbYWN0aW9uLm5hbWVdOiBhY3Rpb24udmFsdWV9O1xuICAgIGNhc2UgdHlwZXMuUkVHSVNURVJfRk9STV9MT0FESU5HOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXJyb3I6JycsIGxvYWRpbmc6IHRydWV9O1xuICAgIGNhc2UgdHlwZXMuUkVHSVNURVJfRk9STV9FUlJPUjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVycm9yOiBhY3Rpb24uZXJyb3IsIGxvYWRpbmc6ZmFsc2V9O1xuICAgIGNhc2UgdHlwZXMuUkVHSVNURVJfRk9STV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdXNlcm5hbWU6ICcnLCBlbWFpbDogJycsIHBhc3N3b3JkOiAnJywgcGFzc3dvcmQyOiAnJywgZXJyb3I6ICcnLCBsb2FkaW5nOiBmYWxzZX1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gICdyZWR1eCc7XG5pbXBvcnQgbG9naW5SZWR1Y2VyIGZyb20gJy4vbG9naW5SZWR1Y2VyJztcbmltcG9ydCByZWdpc3RlclJlZHVjZXIgZnJvbSAnLi9yZWdpc3RlclJlZHVjZXInO1xuaW1wb3J0IHByb2plY3RSZWdpc3RlclJlZHVjZXIgZnJvbSAnLi9wcm9qZWN0UmVnaXN0ZXJSZWR1Y2VyJztcbmltcG9ydCBwcm9qZWN0c1JlZHVjZXIgZnJvbSAnLi9wcm9qZWN0c1JlZHVjZXInO1xuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gJy4vYXV0aFJlZHVjZXInO1xuaW1wb3J0IHZvdGVzUmVkdWNlciBmcm9tICcuL3ZvdGVzUmVkdWNlcic7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgbG9naW46IGxvZ2luUmVkdWNlcixcbiAgcmVnaXN0ZXI6IHJlZ2lzdGVyUmVkdWNlcixcbiAgcHJvamVjdFJlZ2lzdGVyOiBwcm9qZWN0UmVnaXN0ZXJSZWR1Y2VyLFxuICBwcm9qZWN0czogcHJvamVjdHNSZWR1Y2VyLFxuICBhdXRoOiBhdXRoUmVkdWNlcixcbiAgdm90ZXM6IHZvdGVzUmVkdWNlclxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB2b3RlczogW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5HRVRfVk9URVM6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCB2b3RlczogYWN0aW9uLnZvdGVzfVxuICAgIGNhc2UgdHlwZXMuUkVNT1ZFX1ZPVEU6XG4gICAgICBjb25zdCB2b3RlcyA9IHN0YXRlLnZvdGVzLmZpbHRlcih2b3RlID0+IHZvdGUuaWQgIT09IGFjdGlvbi52b3RlSUQpXG4gICAgICByZXR1cm4gey4uLnN0YXRlLCB2b3Rlc31cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiLy8gVGhpcyBvcHRpb25hbCBjb2RlIGlzIHVzZWQgdG8gcmVnaXN0ZXIgYSBzZXJ2aWNlIHdvcmtlci5cbi8vIHJlZ2lzdGVyKCkgaXMgbm90IGNhbGxlZCBieSBkZWZhdWx0LlxuXG4vLyBUaGlzIGxldHMgdGhlIGFwcCBsb2FkIGZhc3RlciBvbiBzdWJzZXF1ZW50IHZpc2l0cyBpbiBwcm9kdWN0aW9uLCBhbmQgZ2l2ZXNcbi8vIGl0IG9mZmxpbmUgY2FwYWJpbGl0aWVzLiBIb3dldmVyLCBpdCBhbHNvIG1lYW5zIHRoYXQgZGV2ZWxvcGVycyAoYW5kIHVzZXJzKVxuLy8gd2lsbCBvbmx5IHNlZSBkZXBsb3llZCB1cGRhdGVzIG9uIHN1YnNlcXVlbnQgdmlzaXRzIHRvIGEgcGFnZSwgYWZ0ZXIgYWxsIHRoZVxuLy8gZXhpc3RpbmcgdGFicyBvcGVuIG9uIHRoZSBwYWdlIGhhdmUgYmVlbiBjbG9zZWQsIHNpbmNlIHByZXZpb3VzbHkgY2FjaGVkXG4vLyByZXNvdXJjZXMgYXJlIHVwZGF0ZWQgaW4gdGhlIGJhY2tncm91bmQuXG5cbi8vIFRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIGJlbmVmaXRzIG9mIHRoaXMgbW9kZWwgYW5kIGluc3RydWN0aW9ucyBvbiBob3cgdG9cbi8vIG9wdC1pbiwgcmVhZCBodHRwczovL2JpdC5seS9DUkEtUFdBXG5cbmNvbnN0IGlzTG9jYWxob3N0ID0gQm9vbGVhbihcbiAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnbG9jYWxob3N0JyB8fFxuICAgIC8vIFs6OjFdIGlzIHRoZSBJUHY2IGxvY2FsaG9zdCBhZGRyZXNzLlxuICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ1s6OjFdJyB8fFxuICAgIC8vIDEyNy4wLjAuMS84IGlzIGNvbnNpZGVyZWQgbG9jYWxob3N0IGZvciBJUHY0LlxuICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5tYXRjaChcbiAgICAgIC9eMTI3KD86XFwuKD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KSl7M30kL1xuICAgIClcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlcihjb25maWcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgIC8vIFRoZSBVUkwgY29uc3RydWN0b3IgaXMgYXZhaWxhYmxlIGluIGFsbCBicm93c2VycyB0aGF0IHN1cHBvcnQgU1cuXG4gICAgY29uc3QgcHVibGljVXJsID0gbmV3IFVSTChwcm9jZXNzLmVudi5QVUJMSUNfVVJMLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgaWYgKHB1YmxpY1VybC5vcmlnaW4gIT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgIC8vIE91ciBzZXJ2aWNlIHdvcmtlciB3b24ndCB3b3JrIGlmIFBVQkxJQ19VUkwgaXMgb24gYSBkaWZmZXJlbnQgb3JpZ2luXG4gICAgICAvLyBmcm9tIHdoYXQgb3VyIHBhZ2UgaXMgc2VydmVkIG9uLiBUaGlzIG1pZ2h0IGhhcHBlbiBpZiBhIENETiBpcyB1c2VkIHRvXG4gICAgICAvLyBzZXJ2ZSBhc3NldHM7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svY3JlYXRlLXJlYWN0LWFwcC9pc3N1ZXMvMjM3NFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc3dVcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9zZXJ2aWNlLXdvcmtlci5qc2A7XG5cbiAgICAgIGlmIChpc0xvY2FsaG9zdCkge1xuICAgICAgICAvLyBUaGlzIGlzIHJ1bm5pbmcgb24gbG9jYWxob3N0LiBMZXQncyBjaGVjayBpZiBhIHNlcnZpY2Ugd29ya2VyIHN0aWxsIGV4aXN0cyBvciBub3QuXG4gICAgICAgIGNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyKHN3VXJsLCBjb25maWcpO1xuXG4gICAgICAgIC8vIEFkZCBzb21lIGFkZGl0aW9uYWwgbG9nZ2luZyB0byBsb2NhbGhvc3QsIHBvaW50aW5nIGRldmVsb3BlcnMgdG8gdGhlXG4gICAgICAgIC8vIHNlcnZpY2Ugd29ya2VyL1BXQSBkb2N1bWVudGF0aW9uLlxuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICdUaGlzIHdlYiBhcHAgaXMgYmVpbmcgc2VydmVkIGNhY2hlLWZpcnN0IGJ5IGEgc2VydmljZSAnICtcbiAgICAgICAgICAgICAgJ3dvcmtlci4gVG8gbGVhcm4gbW9yZSwgdmlzaXQgaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQSdcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElzIG5vdCBsb2NhbGhvc3QuIEp1c3QgcmVnaXN0ZXIgc2VydmljZSB3b3JrZXJcbiAgICAgICAgcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCwgY29uZmlnKSB7XG4gIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgLnJlZ2lzdGVyKHN3VXJsKVxuICAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICByZWdpc3RyYXRpb24ub251cGRhdGVmb3VuZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5zdGFsbGluZ1dvcmtlciA9IHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nO1xuICAgICAgICBpZiAoaW5zdGFsbGluZ1dvcmtlciA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbGxpbmdXb3JrZXIub25zdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoaW5zdGFsbGluZ1dvcmtlci5zdGF0ZSA9PT0gJ2luc3RhbGxlZCcpIHtcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIHRoZSB1cGRhdGVkIHByZWNhY2hlZCBjb250ZW50IGhhcyBiZWVuIGZldGNoZWQsXG4gICAgICAgICAgICAgIC8vIGJ1dCB0aGUgcHJldmlvdXMgc2VydmljZSB3b3JrZXIgd2lsbCBzdGlsbCBzZXJ2ZSB0aGUgb2xkZXJcbiAgICAgICAgICAgICAgLy8gY29udGVudCB1bnRpbCBhbGwgY2xpZW50IHRhYnMgYXJlIGNsb3NlZC5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgJ05ldyBjb250ZW50IGlzIGF2YWlsYWJsZSBhbmQgd2lsbCBiZSB1c2VkIHdoZW4gYWxsICcgK1xuICAgICAgICAgICAgICAgICAgJ3RhYnMgZm9yIHRoaXMgcGFnZSBhcmUgY2xvc2VkLiBTZWUgaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQS4nXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBjYWxsYmFja1xuICAgICAgICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5vblVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5vblVwZGF0ZShyZWdpc3RyYXRpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50LCBldmVyeXRoaW5nIGhhcyBiZWVuIHByZWNhY2hlZC5cbiAgICAgICAgICAgICAgLy8gSXQncyB0aGUgcGVyZmVjdCB0aW1lIHRvIGRpc3BsYXkgYVxuICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQgaXMgY2FjaGVkIGZvciBvZmZsaW5lIHVzZS5cIiBtZXNzYWdlLlxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29udGVudCBpcyBjYWNoZWQgZm9yIG9mZmxpbmUgdXNlLicpO1xuXG4gICAgICAgICAgICAgIC8vIEV4ZWN1dGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcub25TdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLm9uU3VjY2VzcyhyZWdpc3RyYXRpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uOicsIGVycm9yKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIoc3dVcmwsIGNvbmZpZykge1xuICAvLyBDaGVjayBpZiB0aGUgc2VydmljZSB3b3JrZXIgY2FuIGJlIGZvdW5kLiBJZiBpdCBjYW4ndCByZWxvYWQgdGhlIHBhZ2UuXG4gIGZldGNoKHN3VXJsKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIC8vIEVuc3VyZSBzZXJ2aWNlIHdvcmtlciBleGlzdHMsIGFuZCB0aGF0IHdlIHJlYWxseSBhcmUgZ2V0dGluZyBhIEpTIGZpbGUuXG4gICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKTtcbiAgICAgIGlmIChcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzID09PSA0MDQgfHxcbiAgICAgICAgKGNvbnRlbnRUeXBlICE9IG51bGwgJiYgY29udGVudFR5cGUuaW5kZXhPZignamF2YXNjcmlwdCcpID09PSAtMSlcbiAgICAgICkge1xuICAgICAgICAvLyBObyBzZXJ2aWNlIHdvcmtlciBmb3VuZC4gUHJvYmFibHkgYSBkaWZmZXJlbnQgYXBwLiBSZWxvYWQgdGhlIHBhZ2UuXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgICAgICByZWdpc3RyYXRpb24udW5yZWdpc3RlcigpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNlcnZpY2Ugd29ya2VyIGZvdW5kLiBQcm9jZWVkIGFzIG5vcm1hbC5cbiAgICAgICAgcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnTm8gaW50ZXJuZXQgY29ubmVjdGlvbiBmb3VuZC4gQXBwIGlzIHJ1bm5pbmcgaW4gb2ZmbGluZSBtb2RlLidcbiAgICAgICk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyKCkge1xuICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyRnJvbUxTKCkge1xuICBjb25zdCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hvYmJ5Q3JhZnQtdXNlcicpXG4gIHJldHVybiBKU09OLnBhcnNlKHVzZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlclRvTFModXNlcikge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaG9iYnlDcmFmdC11c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpXG4gIHJldHVybjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVVzZXJBbW91bnRJbkxTKGFtb3VudCkge1xuICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaG9iYnlDcmFmdC11c2VyJykpXG4gIHVzZXIuYnVkZ2V0ID0gdXNlci5idWRnZXQgLSBhbW91bnQ7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdob2JieUNyYWZ0LXVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcbiAgcmV0dXJuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVXNlckZyb21MUygpIHtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2hvYmJ5Q3JhZnQtdXNlcicpXG4gIHJldHVybjtcbn1cblxuIiwiaW1wb3J0IHtnZXRQcm9qZWN0c30gZnJvbSAnLi4vYWN0aW9ucy9wcm9qZWN0c0FjdGlvbic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBjb25zdCBzZXRQcm9qZWN0TGlzdCA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGF4aW9zXG4gICAgICAuZ2V0KCcvYXBpL2hvYmJpZXMnKVxuICAgIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGdldFByb2plY3RzKHJlcy5kYXRhKSkpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICByZXR1cm4gcHJvamVjdExpc3Q7XG59IiwiaW1wb3J0IHtnZXRWb3Rlc30gZnJvbSAnLi4vYWN0aW9ucy92b3Rlc0FjdGlvbnMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IHZvdGVzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGF4aW9zLmdldCgnL2FwaS91c2VyL3ZvdGVzJylcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGdldFZvdGVzKHJlcy5kYXRhKSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICByZXR1cm4gbnVsbDtcbn0iLCJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvbG9naW5BY3Rpb25zJztcbmltcG9ydCB7YXV0aFVzZXJ9IGZyb20gJy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7c2V0VXNlclRvTFN9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZSc7XG5cbmV4cG9ydCBjb25zdCBvbkZvcm1TdWJtaXQgPSAodXNlciwgaGlzdG9yeSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKGFjdGlvbnMub25Gb3JtTG9hZGluZygpKTtcbiAgaWYodXNlci5lbWFpbCA9PT0gJycgfHwgdXNlci5wYXNzd29yZCA9PT0gJycgKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbnMub25Mb2dpbkZvcm1FcnJvcignUGxlYXNlIGZpbGwgZmllbGRzJykpO1xuICB9XG4gIGNvbnN0IGxvZ2luSnNvbiA9IFx0e1xuICAgICAgXCJzZWN1cml0eVwiOiB7XG4gICAgICAgICAgXCJjcmVkZW50aWFsc1wiOiB7XG4gICAgICAgICAgICAgIFwiZW1haWxcIjogdXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgXCJwYXNzd29yZFwiOiB1c2VyLnBhc3N3b3JkXG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIGF4aW9zLnBvc3QoJy9hcGkvc2VjdXJpdHkvbG9naW4nLCBsb2dpbkpzb24pXG4gICAgICAudGhlbihyZXMgPT57XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgICBzZXRVc2VyVG9MUyhyZXMuZGF0YSlcbiAgICAgICAgZGlzcGF0Y2goYXV0aFVzZXIocmVzLmRhdGEpKVxuICAgICAgICBkaXNwYXRjaChhY3Rpb25zLm9uTG9naW5Gb3JtU3VjY2Vzcyh1c2VyKSlcbiAgICAgICAgaGlzdG9yeS5wdXNoKCcvJylcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChhY3Rpb25zLm9uTG9naW5Gb3JtRXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3IgPyBlcnIucmVzcG9uc2UuZGF0YS5lcnJvciA6XG4gICAgICAgICAgJ1NlcnZlciBFcnJvci4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlcicpKVxuICAgICAgICB9XG4gICAgICApXG59IiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcbmltcG9ydCB7cmVtb3ZlVXNlckZyb21MU30gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IG9uTG9nT3V0ID0gKGhpc3RvcnkpID0+IChkaXNwYXRjaCkgPT4ge1xuICBheGlvcy5nZXQoJy9hcGkvc2VjdXJpdHkvbG9nb3V0JylcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHJlbW92ZVVzZXJGcm9tTFMoKVxuICAgICAgICBkaXNwYXRjaChhY3Rpb25zLmxvZ291dCgpKVxuICAgICAgICBoaXN0b3J5LnB1c2goJy8nKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG4gIHJldHVybiBudWxsO1xufSIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9wcm9qZWN0UmVnaXN0ZXJBY3Rpb25zJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgdXVpZHY0IGZyb20gJ3V1aWQnXG5cbmV4cG9ydCBjb25zdCBvblByb2plY3RSZWdpc3RlckZvcm1TdWJtaXQgPSAocHJvamVjdEluZm8sIGhpc3RvcnksIGVtYWlsKSA9PiAoZGlzcGF0Y2gpID0+IHtcblxuICBkaXNwYXRjaChhY3Rpb25zLm9uUHJvamVjdFJlZ2lzdGVyRm9ybUxvYWRpbmcoKSk7XG4gIGlmKHByb2plY3RJbmZvLnVzZXJuYW1lID09PSAnJyB8fCBwcm9qZWN0SW5mby5ob2JieU5hbWUgPT09ICcnIHx8XG4gIHByb2plY3RJbmZvLmRlc2NyaXB0aW9uID09PSAnJyB8fCBwcm9qZWN0SW5mby5hbW91bnQgPT09ICcnICkge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25zLm9uUHJvamVjdFJlZ2lzdGVyRm9ybUVycm9yKCdQbGVhc2UgZmlsbCBhbGwgZmllbGRzJykpXG4gIH1cbiAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IG1vbWVudChwcm9qZWN0SW5mby5lbmREYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcblxuICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgIFwidGl0bGVcIjogcHJvamVjdEluZm8uaG9iYnlOYW1lLFxuICAgIFwiZGVzY3JpcHRpb25cIjogcHJvamVjdEluZm8uZGVzY3JpcHRpb24sXG4gICAgXCJhbW91bnRcIjogcHJvamVjdEluZm8uYW1vdW50LFxuICAgIFwiZW1haWxcIjogZW1haWxcbiAgfSk7XG4gIGF4aW9zXG4gICAgICAucG9zdCgnL2FwaS9ob2JieScsanNvbilcbiAgICAudGhlbihyZXM9PntcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMub25Qcm9qZWN0UmVnaXN0ZXJGb3JtU3VibWl0KHJlcykpO1xuICAgICAgaGlzdG9yeS5wdXNoKCcvcHJvamVjdHMnKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBkaXNwYXRjaChhY3Rpb25zLm9uUHJvamVjdFJlZ2lzdGVyRm9ybUVycm9yKCdTZXJ2ZXIgZXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJykpXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9KVxuXG59IiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3JlZ2lzdGVyQWN0aW9ucyc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge3NldFVzZXJUb0xTfSBmcm9tIFwiLi4vc3RvcmFnZS9zdG9yYWdlXCI7XG5pbXBvcnQge2F1dGhVc2VyfSBmcm9tIFwiLi4vYWN0aW9ucy9hdXRoQWN0aW9uc1wiO1xuXG5leHBvcnQgY29uc3Qgb25SZWdpc3RlckZvcm1TdWJtaXQgPSAodXNlciwgaGlzdG9yeSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKGFjdGlvbnMub25Gb3JtTG9hZGluZygpKTtcbiAgaWYodXNlci5lbWFpbCA9PT0gJycgfHwgdXNlci5wYXNzd29yZCA9PT0gJycgfHwgdXNlci5wYXNzd29yZDIgPT09ICcnKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbnMub25SZWdpc3RlckZvcm1FcnJvcignUGxlYXNlIGZpbGwgZmllbGRzJykpO1xuICB9XG4gIGlmKHVzZXIucGFzc3dvcmQgIT09IHVzZXIucGFzc3dvcmQyKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbnMub25SZWdpc3RlckZvcm1FcnJvcignUGFzc3dvcmRzIGRvZXNuXFwndCBtYXRjaCcpKTtcbiAgfVxuICBpZih1c2VyLnBhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9ucy5vblJlZ2lzdGVyRm9ybUVycm9yKCdQYXNzd29yZCBsZW5ndGggbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcicpKTtcbiAgfVxuICBjb25zdCByZWdpc3Rlckpzb24gPSB7XG4gICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXG4gIH07XG5cbiAgYXhpb3MucG9zdCgnL2FwaS9zZWN1cml0eS9yZWdpc3RlcicsIHJlZ2lzdGVySnNvbilcbiAgICAgIC50aGVuKHJlcyA9PntcbiAgICAgICAgc2V0VXNlclRvTFMocmVzLmRhdGEpXG4gICAgICAgIGRpc3BhdGNoKGF1dGhVc2VyKHJlcy5kYXRhKSlcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5vblJlZ2lzdGVyRm9ybVN1Y2Nlc3MocmVnaXN0ZXJKc29uKSlcbiAgICAgICAgaGlzdG9yeS5wdXNoKCcvJylcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbnMub25SZWdpc3RlckZvcm1FcnJvcihlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMuY2hpbGRyZW4uZW1haWwuZXJyb3JzID9cbiAgICAgICAgICAgICAgICBlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMuY2hpbGRyZW4uZW1haWwuZXJyb3JzXG4gICAgICAgICAgICAgICAgOiAnU2VydmVyIGVycm9yLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpKVxuICAgICAgICAgIH1cbiAgICAgIClcblxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge3JlbW92ZVZvdGV9IGZyb20gJy4uL2FjdGlvbnMvdm90ZXNBY3Rpb25zJ1xuXG5leHBvcnQgY29uc3QgdW5Wb3RlID0gKHZvdGVJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGF4aW9zLmRlbGV0ZShgL2FwaS92b3RlLyR7dm90ZUlkfWApXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBkaXNwYXRjaChyZW1vdmVWb3RlKHZvdGVJZCkpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgcmV0dXJuIG51bGw7XG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7c2V0UHJvamVjdExpc3R9IGZyb20gJy4vZ2V0UHJvamVjdHMnO1xuaW1wb3J0IHtjaGFuZ2VVc2VyQW1vdW50SW5MU30gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlJ1xuaW1wb3J0IHt2b3RlVXNlcn0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBvblZvdGUgPSAocHJvamVjdElkLCBhbW91bnQpID0+IChkaXNwYXRjaCkgPT4ge1xuICBheGlvcy5wb3N0KCcvYXBpL3ZvdGUnLCB7XG4gICAgaG9iYnk6IHByb2plY3RJZCxcbiAgICBhbW91bnQ6IGFtb3VudFxuICB9KS50aGVuKHJlcz0+e1xuICAgIGNoYW5nZVVzZXJBbW91bnRJbkxTKGFtb3VudCk7XG4gICAgZGlzcGF0Y2goc2V0UHJvamVjdExpc3QoKSk7XG4gICAgZGlzcGF0Y2godm90ZVVzZXIoYW1vdW50KSk7XG4gIH0pLmNhdGNoKGVycj0+IGNvbnNvbGUubG9nKGVycikpXG5cbiAgcmV0dXJuIG51bGw7XG59IiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYWYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXItZHouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXItbHlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItbWEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYm1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vYnMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vZGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZGUtYXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZW4tU0dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1TRy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyJdLCJzb3VyY2VSb290IjoiIn0=