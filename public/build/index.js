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
/* harmony import */ var _friends_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../friends.png */ "./assets/js/friends.png");
/* harmony import */ var _friends_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_friends_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_es_Paper_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/es/Paper/Paper */ "./node_modules/@material-ui/core/es/Paper/Paper.js");








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
    className: "Message-box"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Message-Title"
  }, "A New and Better way to engange and retain employees"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Message-Subheading"
  }, "Companies use HobbyCraft to organize their employees hobby budget, its a perfect internal croud funding system for you !"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["MuiThemeProvider"], {
    theme: theme
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Button"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    radius: "25px",
    className: "button",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    variant: "contained",
    color: "primary",
    size: "large",
    to: "/login"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    color: "secondary"
  }, "Get Started"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "Img",
    src: _friends_png__WEBPACK_IMPORTED_MODULE_6___default.a
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Cards--inline"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_es_Paper_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "Card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Tai testas")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_es_Paper_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "Card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Tai testas 3")))));
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
    paddingLeft: "3%",
    paddingRight: "3%",
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
          hobbyName = _this$props$projectRe.hobbyName,
          description = _this$props$projectRe.description,
          amount = _this$props$projectRe.amount,
          loading = _this$props$projectRe.loading,
          error = _this$props$projectRe.error;
      var onInputChange = this.props.onInputChange;
      var classes = this.props.classes;
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
/* harmony import */ var _thunks_voteThunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../thunks/voteThunk */ "./assets/js/thunks/voteThunk.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/LinearProgress/index.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Loader/Loader */ "./assets/js/components/Loader/Loader.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__);
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














var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["createMuiTheme"])({
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
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["MuiThemeProvider"], {
            theme: theme,
            key: i
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
            className: 'main-card'
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_10___default.a, {
            variant: 'buffer',
            value: project.budget / project.amount * 100
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, project.amount, "$")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: 'VoteButtons'
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
          }, "5\u20AC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
          }, "15\u20AC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
          className: "Loader-container-list"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_11__["default"], {
          color: '#EA7925',
          h: 100
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["MuiThemeProvider"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ProjectsList"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "SearchBar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12___default.a, {
        fullWidth: true,
        variant: "outlined",
        placeholder: "Please enter keywords",
        color: "primary",
        value: this.state.searchValue,
        onChange: this.onSearchBarChange
      })), projectsList));
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
      return dispatch(Object(_thunks_voteThunk__WEBPACK_IMPORTED_MODULE_5__["onVote"])(projectId, amount));
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

/***/ "./assets/js/friends.png":
/*!*******************************!*\
  !*** ./assets/js/friends.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/build/images/friends.36431729.png";

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var onProjectRegisterFormSubmit = function onProjectRegisterFormSubmit(projectInfo, history, email) {
  return function (dispatch) {
    dispatch(_actions_projectRegisterActions__WEBPACK_IMPORTED_MODULE_0__["onProjectRegisterFormLoading"]());

    if (projectInfo.hobbyName === '' || projectInfo.description === '' || projectInfo.amount === '') {
      return dispatch(_actions_projectRegisterActions__WEBPACK_IMPORTED_MODULE_0__["onProjectRegisterFormError"]('Please fill all fields'));
    }

    var json = JSON.stringify({
      "title": projectInfo.hobbyName,
      "description": projectInfo.description,
      "amount": projectInfo.amount,
      "email": email
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/hobby', json).then(function (res) {
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

/***/ })

},[["./assets/js/index.js","runtime","vendors~index"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvUm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL2xvZ2luQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy9wcm9qZWN0UmVnaXN0ZXJBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3Byb2plY3RzQWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3JlZ2lzdGVyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy92b3Rlc0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWJvdXQvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWJvdXQvYWJvdXQuc2Nzcz85MGRlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lL0hvbWUuc2Nzcz8wZDQxIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9hZGVyL2xvYWRlci5zY3NzPzk3NzIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW4vTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW4vTG9naW4uc2Nzcz9mODNmIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL05hdkJhci9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdEluZm8vUHJvamVjdEluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdEluZm8vUHJvamVjdEluZm8uc2Nzcz8wMzE1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RSZWdpc3RyYXRpb24vUHJvamVjdFJlZ2lzdHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qcm9qZWN0UmVnaXN0cmF0aW9uL1Byb2plY3RSZWdpc3RyYXRpb24uc2Nzcz80Y2U4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RzTGlzdC9Qcm9qZWN0c0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdHNMaXN0L1Byb2plY3RzTGlzdC5zY3NzPzRkNzUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUmVnaXN0ZXIvUmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUmVnaXN0ZXIvUmVnaXN0ZXIuc2Nzcz9jMjZiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NuYWNrYmFyL3NuYWNrYmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VzZXIvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Vc2VyL1VzZXIuc2Nzcz9hZGQ2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mcmllbmRzLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2luZGV4LnNjc3M/OTdjZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL2xvZ2luUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvcHJvamVjdFJlZ2lzdGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvcHJvamVjdHNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy9yZWdpc3RlclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy92b3Rlc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlcnZpY2VXb3JrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N0b3JhZ2Uvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL2dldFByb2plY3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3MvZ2V0Vm90ZXNUaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL2xvZ2luVGh1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RodW5rcy9sb2dvdXRUaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL3Byb2plY3RSZWdpc3RlclRodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3MvcmVnaXN0ZXJUaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL3VuVm90ZVRodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3Mvdm90ZVRodW5rLmpzIl0sIm5hbWVzIjpbIlJvdXRlcyIsInVzZXIiLCJnZXRVc2VyRnJvbUxTIiwicHJvcHMiLCJvbkxvYWRBdXRoIiwib25Mb2FkUHJvamVjdHMiLCJpc0F1dGgiLCJhdXRoIiwicHJvY2VzcyIsIlBVQkxJQ19VUkwiLCJIb21lIiwiQWJvdXQiLCJQcm9qZWN0c0xpc3QiLCJMb2dpbiIsIlJlZ2lzdGVyIiwiVXNlciIsIlByb2plY3RJbmZvIiwiUHJvamVjdFJlZ2lzdHJhdGlvbiIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhdXRoVXNlciIsInNldFByb2plY3RMaXN0IiwiY29ubmVjdCIsInR5cGUiLCJ0eXBlcyIsImxvZ291dCIsIkxPR19PVVQiLCJ2b3RlVXNlciIsImFtb3VudCIsIm9uSW5wdXRDaGFuZ2UiLCJlIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwib25Gb3JtTG9hZGluZyIsIkxPR0lOX0ZPUk1fTE9BRElORyIsIm9uTG9naW5Gb3JtRXJyb3IiLCJlcnJvciIsIm9uTG9naW5Gb3JtU3VjY2VzcyIsIm9uRGF0ZUNoYW5nZSIsImRhdGUiLCJvblByb2plY3RSZWdpc3RlckZvcm1Mb2FkaW5nIiwiUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0xPQURJTkciLCJvblByb2plY3RSZWdpc3RlckZvcm1FcnJvciIsIm9uUHJvamVjdFJlZ2lzdGVyRm9ybVN1Ym1pdCIsInByb2plY3RJbmZvIiwiZ2V0UHJvamVjdHMiLCJwcm9qZWN0cyIsIlJFR0lTVEVSX0ZPUk1fTE9BRElORyIsIm9uUmVnaXN0ZXJGb3JtRXJyb3IiLCJvblJlZ2lzdGVyRm9ybVN1Y2Nlc3MiLCJMT0dJTl9GT1JNX0lOUFVUX0NIQU5HRSIsIkxPR0lOX0ZPUk1fRVJST1IiLCJMT0dJTl9GT1JNX1NVQ0NFU1MiLCJSRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRSIsIlJFR0lTVEVSX0ZPUk1fRVJST1IiLCJSRUdJU1RFUl9GT1JNX1NVQ0NFU1MiLCJQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFIiwiUFJPSkVDVF9SRUdJU1RFUl9EQVRFX0NIQU5HRSIsIlBST0pFQ1RfUkVHSVNURVJfRk9STV9FUlJPUiIsIlBST0pFQ1RfUkVHSVNURVJfRk9STV9TVUNDRVNTIiwiR0VUX1BST0pFQ1RTIiwiQVVUSF9VU0VSIiwiVk9URV9VU0VSIiwiR0VUX1ZPVEVTIiwiUkVNT1ZFX1ZPVEUiLCJnZXRWb3RlcyIsInZvdGVzIiwicmVtb3ZlVm90ZSIsInZvdGVJRCIsImFib3V0IiwidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsIlJvdXRlckxpbmsiLCJsb2dvIiwiTG9hZGVyIiwiY29sb3IiLCJoIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSaWdodCIsImJvcmRlckxlZnQiLCJib3JkZXJUb3AiLCJib3JkZXJCb3R0b20iLCJzdHlsZXMiLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJ1bml0IiwibWFyZ2luUmlnaHQiLCJicmVha3BvaW50cyIsInVwIiwicGFwZXIiLCJtYXJnaW5Ub3AiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJhdmF0YXIiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb3JtIiwidGV4dEZpZWxkIiwic3VibWl0Iiwib3BlbiIsInNldFN0YXRlIiwicHJldmVudERlZmF1bHQiLCJvbkZvcm1TdWJtaXQiLCJsb2dpbiIsImhpc3RvcnkiLCJlbWFpbCIsInBhc3N3b3JkIiwibG9hZGluZyIsImNsYXNzZXMiLCJoYW5kbGVDbG9zZSIsImhhbmRsZUNsaWNrIiwiYWN0aW9ucyIsIndpdGhTdHlsZXMiLCJyb290IiwiTW9iaWxlTmF2IiwicG9zaXRpb24iLCJib3R0b20iLCJsZWZ0IiwiekluZGV4IiwibWVudWJhciIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiYmFja2dyb3VuZCIsImdyb3ciLCJmbGV4R3JvdyIsImFsaWduIiwidGl0bGUiLCJzZWN0aW9uRGVza3RvcCIsImJ1dHRvbiIsInRleHREZWNvcmF0aW9uIiwibGluayIsInRleHRUcmFuc2Zvcm0iLCJNb2JpbGVCdXR0b24iLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImJ1dHRvblNpbmdVcCIsImJvcmRlclJhZGl1cyIsImZvbnRXZWlnaHQiLCJzZWN0aW9uTW9iaWxlIiwidGl0bGVNb2JpbGUiLCJOYXZCYXIiLCJzaG93TWVudSIsImV2ZW50Iiwib25Mb2dvdXRDbGljayIsImxvY2F0aW9uIiwicm9sZSIsIlJvdXRlckxpbmtOYXYiLCJwYXRobmFtZSIsIm9uTG9nT3V0VG9nZ2xlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIkxvZ291dCIsIndpdGhSb3V0ZXIiLCJvblZvdGVDbGljayIsImZpbHRlciIsInByb2plY3QiLCJpZCIsInRvU3RyaW5nIiwibWF0Y2giLCJwYXJhbXMiLCJtYXAiLCJpIiwiYnVkZ2V0IiwibGVuZ3RoIiwicmVkdWNlIiwidG90YWwiLCJ2b3RlIiwiZGVzY3JpcHRpb24iLCJwcm9qZWN0SWQiLCJvblZvdGUiLCJwcm9qZWN0UmVnaXN0ZXIiLCJob2JieU5hbWUiLCJjb250YWluZXIiLCJzZWFyY2hWYWx1ZSIsIm9wZW5lZCIsIm9uR2V0UHJvamVjdHNMaXN0IiwicHJvamVjdHNMaXN0IiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIm9uU2VhcmNoQmFyQ2hhbmdlIiwicmVnaXN0ZXIiLCJwYXNzd29yZDIiLCJvblJlZ2lzdGVyRm9ybVN1Ym1pdCIsIk1vYmlibGVTbmFja2JhciIsIkRlc2t0b3BTbmFja2JhciIsImljb24iLCJtZXNzYWdlIiwiU25hY2tiYXIiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJvbkNsb3NlIiwib25HZXRWb3RlcyIsIm9uVW5Wb3RlIiwibG9hZGVyIiwidm90ZXNBcnJheSIsInVuVm90ZSIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwicG9zdCIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJyZXNwb25zZSIsImNvbXBvc2VFbmhhbmNlcnMiLCJ3aW5kb3ciLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18iLCJjb21wb3NlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJvb3RSZWR1Y2VyIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXJ2aWNlV29ya2VyIiwiaW5pdGlhbFN0YXRlIiwiYWN0aW9uIiwidXNlcm5hbWUiLCJlbmREYXRlIiwiY29tYmluZVJlZHVjZXJzIiwibG9naW5SZWR1Y2VyIiwicmVnaXN0ZXJSZWR1Y2VyIiwicHJvamVjdFJlZ2lzdGVyUmVkdWNlciIsInByb2plY3RzUmVkdWNlciIsImF1dGhSZWR1Y2VyIiwidm90ZXNSZWR1Y2VyIiwiaXNMb2NhbGhvc3QiLCJCb29sZWFuIiwiaG9zdG5hbWUiLCJjb25maWciLCJyZWdpc3RlclZhbGlkU1ciLCJzd1VybCIsIm5hdmlnYXRvciIsInRoZW4iLCJyZWdpc3RyYXRpb24iLCJvbnVwZGF0ZWZvdW5kIiwiaW5zdGFsbGluZ1dvcmtlciIsImluc3RhbGxpbmciLCJvbnN0YXRlY2hhbmdlIiwiY29udHJvbGxlciIsImNvbnNvbGUiLCJsb2ciLCJvblVwZGF0ZSIsIm9uU3VjY2VzcyIsImNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyIiwiZmV0Y2giLCJjb250ZW50VHlwZSIsImdldCIsInN0YXR1cyIsImluZGV4T2YiLCJyZWFkeSIsInVucmVnaXN0ZXIiLCJyZWxvYWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic2V0VXNlclRvTFMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiY2hhbmdlVXNlckFtb3VudEluTFMiLCJyZW1vdmVVc2VyRnJvbUxTIiwicmVtb3ZlSXRlbSIsInByb2plY3RMaXN0IiwicmVzIiwiZGF0YSIsImxvZ2luSnNvbiIsInB1c2giLCJlcnIiLCJvbkxvZ091dCIsImpzb24iLCJyZWdpc3Rlckpzb24iLCJlcnJvcnMiLCJjaGlsZHJlbiIsInZvdGVJZCIsImhvYmJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFHLEVBQUk7QUFDWGxRLGNBQVEsQ0FBQ2lELHdFQUFVLENBQUMyTixNQUFELENBQVgsQ0FBUjtBQUNELEtBSEwsV0FJVyxVQUFBMVAsS0FBSztBQUFBLGFBQUl3TixPQUFPLENBQUNDLEdBQVIsQ0FBWXpOLEtBQVosQ0FBSjtBQUFBLEtBSmhCO0FBS0EsV0FBTyxJQUFQO0FBQ0QsR0FQcUI7QUFBQSxDQUFmLEM7Ozs7Ozs7Ozs7OztBQ0hQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNOEksTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0QsU0FBRCxFQUFZdEosTUFBWjtBQUFBLFNBQXVCLFVBQUNULFFBQUQsRUFBYztBQUN6RDJMLGdEQUFLLENBQUNHLElBQU4sQ0FBVyxXQUFYLEVBQXdCO0FBQ3RCK0UsV0FBSyxFQUFFOUcsU0FEZTtBQUV0QnRKLFlBQU0sRUFBRUE7QUFGYyxLQUF4QixFQUdHME4sSUFISCxDQUdRLFVBQUErQixHQUFHLEVBQUU7QUFDWEosbUZBQW9CLENBQUNyUCxNQUFELENBQXBCO0FBQ0FULGNBQVEsQ0FBQ0UsbUVBQWMsRUFBZixDQUFSO0FBQ0FGLGNBQVEsQ0FBQ1EscUVBQVEsQ0FBQ0MsTUFBRCxDQUFULENBQVI7QUFDRCxLQVBELFdBT1MsVUFBQTZQLEdBQUc7QUFBQSxhQUFHNUIsT0FBTyxDQUFDQyxHQUFSLENBQVkyQixHQUFaLENBQUg7QUFBQSxLQVBaO0FBU0EsV0FBTyxJQUFQO0FBQ0QsR0FYcUI7QUFBQSxDQUFmLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIEJyb3dzZXJSb3V0ZXIsUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtnZXRVc2VyRnJvbUxTfSBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZSc7XG5pbXBvcnQge2F1dGhVc2VyfSBmcm9tICcuL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuaW1wb3J0IHtzZXRQcm9qZWN0TGlzdH0gZnJvbSAnLi90aHVua3MvZ2V0UHJvamVjdHMnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUvSG9tZSc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyJztcbmltcG9ydCBQcm9qZWN0c0xpc3QgZnJvbSAgJy4vY29tcG9uZW50cy9Qcm9qZWN0c0xpc3QvUHJvamVjdHNMaXN0JztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4vTG9naW4nO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vY29tcG9uZW50cy9SZWdpc3Rlci9SZWdpc3Rlcic7XG5pbXBvcnQgUHJvamVjdFJlZ2lzdHJhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdFJlZ2lzdHJhdGlvbi9Qcm9qZWN0UmVnaXN0cmF0aW9uJztcbmltcG9ydCBQcm9qZWN0SW5mbyBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdEluZm8vUHJvamVjdEluZm8nO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9jb21wb25lbnRzL1VzZXIvVXNlcic7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9jb21wb25lbnRzL0Fib3V0L2Fib3V0JztcblxuXG5cbmNsYXNzIFJvdXRlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHVzZXIgPSBnZXRVc2VyRnJvbUxTKCk7XG4gICAgdXNlciA/IHRoaXMucHJvcHMub25Mb2FkQXV0aCh1c2VyKSA6IG51bGxcbiAgICB1c2VyID8gdGhpcy5wcm9wcy5vbkxvYWRQcm9qZWN0cyA6IG51bGxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7aXNBdXRofSA9dGhpcy5wcm9wcy5hdXRoXG4gICAgcmV0dXJuIChcbiAgICAgIDxCcm93c2VyUm91dGVyIGJhc2VuYW1lPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfT5cbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgY29tcG9uZW50PXtIb21lfS8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL2Fib3V0JyBjb21wb25lbnQ9e0Fib3V0fS8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL3Byb2plY3RzJyBjb21wb25lbnQ9e1Byb2plY3RzTGlzdH0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9sb2dpbicgY29tcG9uZW50PXtMb2dpbn0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9yZWdpc3RlcicgY29tcG9uZW50PXtSZWdpc3Rlcn0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy91c2VyJyBjb21wb25lbnQ9e1VzZXJ9IC8+XG4gICAgICAgICAgICB7Lyo8Um91dGUgcGF0aD0nL2FkbWluJyAvPiovfVxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9wcm9qZWN0LzppZCcgY29tcG9uZW50PXtQcm9qZWN0SW5mb30vPlxuICAgICAgICAgICAge2lzQXV0aCA/IDxSb3V0ZSBwYXRoPScvcHJvamVjdC1yZWdpc3RyYXRpb24nIGNvbXBvbmVudD17UHJvamVjdFJlZ2lzdHJhdGlvbn0vPiA6IDxSZWRpcmVjdCB0bz0nL2xvZ2luJy8+fVxuXG4gICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvbkxvYWRBdXRoOiAodXNlcikgPT4gZGlzcGF0Y2goYXV0aFVzZXIodXNlcikpLFxuICBvbkxvYWRQcm9qZWN0czogKCkgPT4gZGlzcGF0Y2goc2V0UHJvamVjdExpc3QoKSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFJvdXRlcyk7XG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhVc2VyKHVzZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5BVVRIX1VTRVIsXG4gICAgICAgIHVzZXJcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuTE9HX09VVFxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZvdGVVc2VyKGFtb3VudCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlZPVEVfVVNFUixcbiAgICAgICAgYW1vdW50XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gb25JbnB1dENoYW5nZShlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuTE9HSU5fRk9STV9JTlBVVF9DSEFOR0UsXG4gICAgbmFtZTogZS50YXJnZXQubmFtZSxcbiAgICB2YWx1ZTogZS50YXJnZXQudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Gb3JtTG9hZGluZygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5MT0dJTl9GT1JNX0xPQURJTkdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Mb2dpbkZvcm1FcnJvcihlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLkxPR0lOX0ZPUk1fRVJST1IsXG4gICAgZXJyb3JcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Mb2dpbkZvcm1TdWNjZXNzKHVzZXIpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOnR5cGVzLkxPR0lOX0ZPUk1fU1VDQ0VTUyxcbiAgICB1c2VyXG4gIH1cbn0iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uSW5wdXRDaGFuZ2UoZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UsXG4gICAgbmFtZTogZS50YXJnZXQubmFtZSxcbiAgICB2YWx1ZTogZS50YXJnZXQudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25EYXRlQ2hhbmdlKGRhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0RBVEVfQ0hBTkdFLFxuICAgIGRhdGVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Qcm9qZWN0UmVnaXN0ZXJGb3JtTG9hZGluZygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fTE9BRElOR1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblByb2plY3RSZWdpc3RlckZvcm1FcnJvcihlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9FUlJPUixcbiAgICBlcnJvclxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblByb2plY3RSZWdpc3RlckZvcm1TdWJtaXQocHJvamVjdEluZm8pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fU1VDQ0VTUyxcbiAgICBwcm9qZWN0SW5mb1xuICB9XG59IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0cyhwcm9qZWN0cykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLkdFVF9QUk9KRUNUUyxcbiAgICBwcm9qZWN0c1xuICB9XG59IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbklucHV0Q2hhbmdlKGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5SRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRSxcbiAgICBuYW1lOiBlLnRhcmdldC5uYW1lLFxuICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkZvcm1Mb2FkaW5nKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlJFR0lTVEVSX0ZPUk1fTE9BRElOR1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblJlZ2lzdGVyRm9ybUVycm9yKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuUkVHSVNURVJfRk9STV9FUlJPUixcbiAgICBlcnJvclxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblJlZ2lzdGVyRm9ybVN1Y2Nlc3ModXNlcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6dHlwZXMuUkVHSVNURVJfRk9STV9TVUNDRVNTLFxuICAgIHVzZXJcbiAgfVxufSIsIi8vIExvZ2luIHR5cGVzXG5cbmV4cG9ydCBjb25zdCBMT0dJTl9GT1JNX0lOUFVUX0NIQU5HRSA9ICdMT0dJTl9GT1JNX0lOUFVUX0NIQU5HRSc7XG5leHBvcnQgY29uc3QgTE9HSU5fRk9STV9MT0FESU5HID0gJ0xPR0lOX0ZPUk1fTE9BRElORyc7XG5leHBvcnQgY29uc3QgTE9HSU5fRk9STV9FUlJPUiA9ICdMT0dJTl9GT1JNX0VSUk9SJztcbmV4cG9ydCBjb25zdCBMT0dJTl9GT1JNX1NVQ0NFU1MgPSAnTE9HSU5fRk9STV9TVUNDRVNTJztcblxuLy8gUmVnaXN0ZXIgdHlwZXNcblxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFID0gJ1JFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9GT1JNX0xPQURJTkcgPSAnUkVHSVNURVJfRk9STV9MT0FESU5HJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9GT1JNX0VSUk9SID0gJ1JFR0lTVEVSX0ZPUk1fRVJST1InO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZPUk1fU1VDQ0VTUyA9ICdSRUdJU1RFUl9GT1JNX1NVQ0NFU1MnO1xuXG4vLyBQcm9qZWN0IFJlZ2lzdGVyIHR5cGVzXG5cbmV4cG9ydCBjb25zdCBQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFID0gJ1BST0pFQ1RfUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UnO1xuZXhwb3J0IGNvbnN0IFBST0pFQ1RfUkVHSVNURVJfREFURV9DSEFOR0UgPSAnUFJPSkVDVF9SRUdJU1RFUl9EQVRFX0NIQU5HRSc7XG5leHBvcnQgY29uc3QgUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0xPQURJTkcgPSAnUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0xPQURJTkcnO1xuZXhwb3J0IGNvbnN0IFBST0pFQ1RfUkVHSVNURVJfRk9STV9FUlJPUiA9ICdQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fRVJST1InO1xuZXhwb3J0IGNvbnN0IFBST0pFQ1RfUkVHSVNURVJfRk9STV9TVUNDRVNTID0gJ1BST0pFQ1RfUkVHSVNURVJfRk9STV9TVUNDRVNTJztcblxuLy8gUHJvamVjdHMgdHlwZXNcblxuZXhwb3J0IGNvbnN0IEdFVF9QUk9KRUNUUyA9ICdHRVRfUFJPSkVDVFMnO1xuXG4vLyBBdXRoIHR5cGVzXG5cbmV4cG9ydCBjb25zdCBBVVRIX1VTRVIgPSAnQVVUSF9VU0VSJztcbmV4cG9ydCBjb25zdCBMT0dfT1VUID0gJ0xPR19PVVQnO1xuZXhwb3J0IGNvbnN0IFZPVEVfVVNFUiA9ICdWT1RFX1VTRVInO1xuXG4vLyBWb3RlIHR5cGVzXG5cbmV4cG9ydCBjb25zdCBHRVRfVk9URVMgPSAnR0VUX1ZPVEVTJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfVk9URSA9ICdSRU1PVkVfVk9URSc7IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWb3Rlcyh2b3Rlcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLkdFVF9WT1RFUyxcbiAgICB2b3Rlc1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVWb3RlKHZvdGVJRCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlJFTU9WRV9WT1RFLFxuICAgIHZvdGVJRFxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9hYm91dC5zY3NzJztcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvZXMvUGFwZXIvUGFwZXJcIjtcbmNvbnN0IGFib3V0ID0gKCApID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPVwicGFwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdIZWFkaW5nJz5Ib2JieUNyYWZ0IFRlYW08L2Rpdj5cbiAgICAgICAgPC9QYXBlcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCAnLi9Ib21lLnNjc3MnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBNdWlUaGVtZVByb3ZpZGVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi4vLi4vZnJpZW5kcy5wbmcnO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9lcy9QYXBlci9QYXBlclwiO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgIG1haW46ICcjRUE3OTI1JyxcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnI2ZmZmZmZicsXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG5cblxuXG5jb25zdCBIb21lID0gKCApID0+IHtcbiAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0hvbWUnPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTWVzc2FnZS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nTWVzc2FnZS1UaXRsZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEEgTmV3IGFuZCBCZXR0ZXIgd2F5IHRvIGVuZ2FuZ2UgYW5kIHJldGFpbiBlbXBsb3llZXNcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nTWVzc2FnZS1TdWJoZWFkaW5nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGFuaWVzIHVzZSBIb2JieUNyYWZ0IHRvIG9yZ2FuaXplIHRoZWlyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZXMgaG9iYnkgYnVkZ2V0LCBpdHMgYSBwZXJmZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcm5hbCBjcm91ZCBmdW5kaW5nIHN5c3RlbSBmb3IgeW91ICFcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1cz17XCIyNXB4XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz0nL2xvZ2luJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxUeXBvZ3JhcGh5IGNvbG9yPVwic2Vjb25kYXJ5XCIgPkdldCBTdGFydGVkPC9UeXBvZ3JhcGh5PjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIkltZ1wiIHNyYz17bG9nb30gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJDb250YWluZXJcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDYXJkcy0taW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17XCJDYXJkXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UYWkgdGVzdGFzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtcIkNhcmRcIn0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UYWkgdGVzdGFzIDM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vbG9hZGVyLnNjc3MnO1xuXG5jb25zdCBMb2FkZXIgPSAoe2NvbG9yLGg9NDB9KSA9PiAoXG4gIDxkaXZcbiAgICBzdHlsZT17e1xuICAgICAgd2lkdGg6aCsncHgnLFxuICAgICAgaGVpZ2h0OmgrJ3B4JyxcbiAgICAgIGJvcmRlclJpZ2h0OmAke2gvNn1weCBzb2xpZCB0cmFuc3BhcmVudGAsXG4gICAgICBib3JkZXJMZWZ0OmAke2gvNn1weCBzb2xpZCB0cmFuc3BhcmVudGAsXG4gICAgICBib3JkZXJUb3A6YCR7aC82fXB4IHNvbGlkICR7Y29sb3J9YCxcbiAgICAgIGJvcmRlckJvdHRvbTpgJHtoLzZ9cHggc29saWQgJHtjb2xvcn1gLFxuICAgIH19XG4gICAgY2xhc3NOYW1lPXtgTG9hZGVyICR7Y29sb3J9YH0vPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9naW5BY3Rpb25zJztcbmltcG9ydCB7IG9uRm9ybVN1Ym1pdCB9IGZyb20gJy4uLy4uL3RodW5rcy9sb2dpblRodW5rJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyL0xvYWRlcic7XG5pbXBvcnQgJy4vTG9naW4uc2Nzcyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcbmltcG9ydCBTbmFja2JhciBmcm9tICcuLi9TbmFja2Jhci9zbmFja2Jhcic7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBNdWlUaGVtZVByb3ZpZGVyLCB3aXRoU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBMb2NrT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NrT3V0bGluZWQnO1xuXG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICAgIHBhbGV0dGU6IHtcbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgbWFpbjogJyNFQTc5MjUnLFxuICAgICAgICB9LFxuICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgIG1haW46ICcjMDA0NGZmJyxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIG1haW46ICcjZmZmZmZmJyxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gICAgbWFpbjoge1xuICAgICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKDQwMCArIHRoZW1lLnNwYWNpbmcudW5pdCAqIDMgKiAyKV06IHtcbiAgICAgICAgICAgIHdpZHRoOiA0MDAsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgcGFwZXI6IHtcbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAyfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weCAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDN9cHhgLFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCAqOCxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYXZhdGFyOiB7XG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZy51bml0LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRUE3OTI1JyxcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgfSxcbiAgICB0ZXh0RmllbGQ6IHtcbiAgICAgICAgaGVpZ2h0OiA1MCxcbiAgICB9LFxuICAgIHN1Ym1pdDoge1xuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgICAgIGhlaWdodDogNTAsXG4gICAgfSxcbn0pO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG9wZW46IGZhbHNlLFxuICAgIH07XG5cbiAgICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gICAgfTtcblxuICAgIG9uRm9ybVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkZvcm1TdWJtaXQodGhpcy5wcm9wcy5sb2dpbiwgdGhpcy5wcm9wcy5oaXN0b3J5KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBsb2FkaW5nIH0gPSB0aGlzLnByb3BzLmxvZ2luXG4gICAgICAgIGNvbnN0IHtvbklucHV0Q2hhbmdlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9ja091dGxpbmVkSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgPyA8U25hY2tiYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPiA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25Gb3JtU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyA8TG9hZGVyIGNvbG9yPXsnI2ZmZid9IGg9ezE1fSAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cImVycm9yXCIgPlNpZ24gSW48L1R5cG9ncmFwaHk+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzdWJoZWFkaW5nXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgSWYgeW91IGRvbid0IGhhdmUgYW4gYWNjb3VudCwgcGxlYXNleycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz0nL1JlZ2lzdGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9naW46IHN0YXRlLmxvZ2luXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgb25JbnB1dENoYW5nZTogKGUpID0+IGRpc3BhdGNoKGFjdGlvbnMub25JbnB1dENoYW5nZShlKSksXG4gICAgb25Gb3JtU3VibWl0OiAodXNlciwgaGlzdG9yeSkgPT5kaXNwYXRjaChvbkZvcm1TdWJtaXQodXNlcixoaXN0b3J5KSksXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFN0eWxlcyhzdHlsZXMpKExvZ2luKSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge05hdkxpbmsgYXMgUm91dGVyTGlua05hdiwgTGluayBhcyBSb3V0ZXJMaW5rLCB3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQge3dpdGhTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge011aVRoZW1lUHJvdmlkZXIsIGNyZWF0ZU11aVRoZW1lfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtvbkxvZ091dCBhcyBMb2dvdXR9IGZyb20gJy4uLy4uL3RodW5rcy9sb2dvdXRUaHVuayc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQm90dG9tTmF2aWdhdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3R0b21OYXZpZ2F0aW9uJztcbmltcG9ydCBCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JvdHRvbU5hdmlnYXRpb25BY3Rpb24nO1xuaW1wb3J0IEhvbWVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ib21lJztcbmltcG9ydCBWaWV3IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9WaWV3TW9kdWxlJztcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MaWJyYXJ5QWRkJztcbmltcG9ydCBQZXJzb25JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QZXJzb24nO1xuaW1wb3J0IFBlcnNvbkFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BlcnNvbkFkZCc7XG5cblxuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjRUE3OTI1JyxcbiAgICB9LFxuICAgIHNlY29uZGFyeTp7XG4gICAgICBtYWluOiAnI2ZmZmZmZicsXG4gICAgfVxuICB9LFxufSk7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0sXG5cbiAgTW9iaWxlTmF2OntcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHpJbmRleDogMTAwMCxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgfSxcbiAgfSxcblxuXG4gIG1lbnViYXI6IHtcbiAgICBwYWRkaW5nTGVmdDogXCIzJVwiLFxuICAgIHBhZGRpbmdSaWdodDogXCIzJVwiLFxuICAgIHBvc2l0aW9uOiAnc3RhdGljJyxcbiAgICBiYWNrZ3JvdW5kOiBcIiMxODE4MThcIixcblxuICB9LFxuICBncm93OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gICAgYWxpZ246ICdjZW50ZXInLFxuICB9LFxuICB0aXRsZToge1xuICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgZGlzcGxheTogJ25vbmUnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgfSxcbiAgfSxcbiAgc2VjdGlvbkRlc2t0b3A6IHtcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB9LFxuICB9LFxuICBidXR0b246IHtcbiAgICBjb2xvcjogJyNBNEE0QTQnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgIHBhZGRpbmdMZWZ0OiAyMCxcbiAgICBwYWRkaW5nUmlnaHQ6IDIwLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZSdcbiAgfSxcbiAgbGluazoge1xuICAgIGNvbG9yOiAnI0E0QTRBNCcsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAgbWFyZ2luOiAnYXV0bycsXG4gICAgcGFkZGluZzogJzZweCAyMHB4JyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXG4gIH0sXG4gIE1vYmlsZUJ1dHRvbjoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiAnI0E0QTRBNCcsXG4gICAgfSxcbiAgICBtYXJnaW46ICdhdXRvJyxcbiAgICBwYWRkaW5nTGVmdDogMjAsXG4gICAgcGFkZGluZ1JpZ2h0OiAyMCxcbiAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgfSxcbiAgYnV0dG9uU2luZ1VwOiB7XG4gICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0VBNzkyNVwiLFxuICAgIGJvcmRlclJhZGl1czogMjUsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNBMTU0MjFcIixcbiAgICB9LFxuICB9LFxuICBzZWN0aW9uTW9iaWxlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB9LFxuICB9LFxuICB0aXRsZU1vYmlsZToge1xuICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gIH0sXG59O1xuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB2YWx1ZTogMCxcbiAgICBzaG93TWVudTogZmFsc2VcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCwgdmFsdWUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZX0pO1xuICB9O1xuXG4gIG9uTG9nT3V0VG9nZ2xlID0gKCkgPT4gdGhpcy5wcm9wcy5vbkxvZ291dENsaWNrKHRoaXMucHJvcHMuaGlzdG9yeSlcblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7Y2xhc3NlcywgbG9jYXRpb259ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7aXNBdXRoLCByb2xlfSA9IHRoaXMucHJvcHMuYXV0aDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgPEFwcEJhciBjbGFzc05hbWU9e2NsYXNzZXMubWVudWJhcn0+XG4gICAgICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua05hdn0gdG89Jy8nID5cbiAgICAgICAgICAgICAgICAgIEhvYmJ5Q3JhZnRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uTW9iaWxlfT5cbiAgICAgICAgICAgICAgICAgIHtpc0F1dGggP1xuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj0nc2Vjb25kYXJ5JyBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVNb2JpbGV9IGNvbXBvbmVudD17Um91dGVyTGlua05hdn0gdG89Jy8nPlxuICAgICAgICAgICAgICAgICAgICBIb2JieUNyYWZ0XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj4gOiBudWxsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbkRlc2t0b3B9PlxuICAgICAgICAgICAgICAgICAge2lzQXV0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgPCBCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnL3Byb2plY3RzJyA9PT0gbG9jYXRpb24ucGF0aG5hbWUgPyBjbGFzc2VzLmJ1dHRvblNpbmdVcCA6IGNsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPScvcHJvamVjdHMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgRGlzY292ZXIgUHJvamVjdHNcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgPCBCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnLycgPT09IGxvY2F0aW9uLnBhdGhuYW1lID8gY2xhc3Nlcy5idXR0b25TaW5nVXAgOiBjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rTmF2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bz0nLyc+XG4gICAgICAgICAgICAgICAgICAgICAgICBEaXNjb3ZlclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPn1cbiAgICAgICAgICAgICAgICAgIHtpc0F1dGggP1xuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnL3Byb2plY3QtcmVnaXN0cmF0aW9uJyA9PT0gbG9jYXRpb24ucGF0aG5hbWUgPyBjbGFzc2VzLmJ1dHRvblNpbmdVcCA6IGNsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPScvcHJvamVjdC1yZWdpc3RyYXRpb24nPkNyZWF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgYSBQcm9qZWN0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnL3JlZ2lzdGVyJyA9PT0gbG9jYXRpb24ucGF0aG5hbWUgPyBjbGFzc2VzLmJ1dHRvblNpbmdVcCA6IGNsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPScvcmVnaXN0ZXInPlNpZ25cbiAgICAgICAgICAgICAgICAgICAgICAgIFVwIFdpdGggRW1haWw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHtpc0F1dGggP1xuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnL3VzZXInID09PSBsb2NhdGlvbi5wYXRobmFtZSA/IGNsYXNzZXMuYnV0dG9uU2luZ1VwIDogY2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua05hdn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy91c2VyJz57dGhpcy5wcm9wcy5hdXRoLmVtYWlsfSB7dGhpcy5wcm9wcy5hdXRoLmFtb3VudH3igqw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycvYWJvdXQnID09PSBsb2NhdGlvbi5wYXRobmFtZSA/IGNsYXNzZXMuYnV0dG9uU2luZ1VwIDogY2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua05hdn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFib3V0IFVzXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHtyb2xlID09PSAxID9cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGhyZWY9eycvYWRtaW4nfSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSA+QWRtaW48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge2lzQXV0aCA/XG4gICAgICAgICAgICAgICAgICAgIG51bGw6IDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25Nb2JpbGV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9J3NlY29uZGFyeScgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlTW9iaWxlfSBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9IHRvPScvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhvYmJ5Q3JhZnRcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbkRlc2t0b3B9PlxuICAgICAgICAgICAgICAgICAge2lzQXV0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgPCBCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gb25DbGljaz17dGhpcy5vbkxvZ091dFRvZ2dsZX0gdG89Jy9sb2dvdXQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgIDwgQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IGNvbXBvbmVudD17Um91dGVyTGlua30gdG89Jy9sb2dpbic+XG4gICAgICAgICAgICAgICAgICAgICAgICBTaWduIEluXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uTW9iaWxlfT5cbiAgICAgICAgICAgICAgICAgIHtpc0F1dGggP1xuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25Nb2JpbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPSdzZWNvbmRhcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZU1vYmlsZX0gb25DbGljaz17dGhpcy5vbkxvZ091dFRvZ2dsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz0nL2xvZ291dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICAgIDwvQXBwQmFyPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge2lzQXV0aCA/XG4gICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uXG4gICAgICAgICAgICAgICAgICBzaG93TGFiZWxzXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuTW9iaWxlTmF2fT5cbiAgICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIkhvbWVcIiBjb21wb25lbnQ9e1JvdXRlckxpbmt9IHRvPScvJyBpY29uPXs8SG9tZUljb24vPn0vPlxuICAgICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPVwiRGlzY292ZXJcIiAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfSB0bz0nL3Byb2plY3RzJyBpY29uPXs8Vmlldy8+fS8+XG4gICAgICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9XCJDcmVhdGVcIiBjb21wb25lbnQ9e1JvdXRlckxpbmt9IHRvPScvcHJvamVjdC1yZWdpc3RyYXRpb24nIGljb249ezxBZGRJY29uLz59Lz5cbiAgICAgICAgICAgICAgICB7cm9sZSA9PT0gMSA/IDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPVwiQWRtaW5cIiBocmVmPXsnL2FkbWluJ30gaWNvbj17PFBlcnNvbkljb24vPn0gLz4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9e3RoaXMucHJvcHMuYXV0aC5lbWFpbH0gY29tcG9uZW50PXtSb3V0ZXJMaW5rfSB0bz0nL3VzZXInIGljb249ezxQZXJzb25JY29uLz59Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvQm90dG9tTmF2aWdhdGlvbj5cbiAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvblxuICAgICAgICAgICAgICAgICAgc2hvd0xhYmVsc1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLk1vYmlsZU5hdn0+XG4gICAgICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9XCJIb21lXCIgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9IHRvPScvJyBpY29uPXs8SG9tZUljb24vPn0vPlxuICAgICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPVwiU2lnbiBVcFwiIGNvbXBvbmVudD17Um91dGVyTGlua30gdG89Jy9yZWdpc3RlcicgaWNvbj17PFBlcnNvbkFkZEljb24vPn0vPlxuICAgICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPVwiU2lnbiBJblwiIGNvbXBvbmVudD17Um91dGVyTGlua30gdG89Jy9sb2dpbicgaWNvbj17PFBlcnNvbkljb24vPn0vPlxuICAgICAgICAgICAgICA8L0JvdHRvbU5hdmlnYXRpb24+XG4gICAgICAgICAgfVxuICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5OYXZCYXIucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGF1dGg6IHN0YXRlLmF1dGhcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIG9uTG9nb3V0Q2xpY2s6IChoaXN0b3J5KSA9PiBkaXNwYXRjaChMb2dvdXQoaGlzdG9yeSkpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFJvdXRlcih3aXRoU3R5bGVzKHN0eWxlcykoTmF2QmFyKSkpOyIsImltcG9ydCBSZWFjdCwge0ZyYWdtZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7TGluayBhcyBSb3V0ZXJMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0ICcuL1Byb2plY3RJbmZvLnNjc3MnO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB7Y3JlYXRlTXVpVGhlbWUsIE11aVRoZW1lUHJvdmlkZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvZXMvVHlwb2dyYXBoeS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2VzL1BhcGVyL1BhcGVyXCI7XG5pbXBvcnQge29uVm90ZX0gZnJvbSBcIi4uLy4uL3RodW5rcy92b3RlVGh1bmtcIjtcblxuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgIG1haW46ICcjRUE3OTI1JyxcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnI2ZmZmZmZicsXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG5cblxuY29uc3QgUHJvamVjdEluZm8gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2Ftb3VudH0gPSBwcm9wcy5hdXRoO1xuICBjb25zdCB7cHJvamVjdHMsIG9uVm90ZUNsaWNrfSA9IHByb3BzO1xuICBjb25zdCBwcm9qZWN0SW5mbyA9IHByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHtcbiAgICBpZihwcm9qZWN0LmlkLnRvU3RyaW5nKCkgPT09IHByb3BzLm1hdGNoLnBhcmFtcy5pZCkge1xuICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9KS5tYXAoKHByb2plY3QsIGkpID0+IHtcbiAgICBwcm9qZWN0LmJ1ZGdldCA9IDA7XG4gICAgaWYgKHByb2plY3Qudm90ZXMubGVuZ3RoID4gMSkge1xuICAgICAgcHJvamVjdC5idWRnZXQgPSBwcm9qZWN0LnZvdGVzLnJlZHVjZSgodG90YWwsIHZvdGUpPT4ge1xuICAgICAgICByZXR1cm4gdG90YWwgKyB2b3RlLmFtb3VudDtcbiAgICAgIH0sIDApXG4gICAgfSBlbHNlIGlmKHByb2plY3Qudm90ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBwcm9qZWN0LmJ1ZGdldCA9IHByb2plY3Qudm90ZXNbMF0uYW1vdW50O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdQcm9qZWN0JyBrZXk9e2l9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RpdGxlJz57cHJvamVjdC50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2dyZXNzLWJhcic+XG4gICAgICAgICAgICAgICAgICA8ZGl2Pntwcm9qZWN0LmJ1ZGdldH0g4oKsPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nTGluZWFyUHJvZ3Jlc3NNb25leSc+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmVhclByb2dyZXNzIHZhcmlhbnQ9eydidWZmZXInfSB2YWx1ZT17KHByb2plY3QuYnVkZ2V0L3Byb2plY3QuYW1vdW50KSoxMDB9Lz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj57cHJvamVjdC5hbW91bnR9IOKCrDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1ZvdGVCdXR0b25zJz5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVm90ZUNsaWNrKHByb2plY3QuaWQsIDUpfVxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthbW91bnQgPCA1fVxuICAgICAgICAgICAgICAgICAgPjXigqw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVm90ZUNsaWNrKHByb2plY3QuaWQsIDE1KX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YW1vdW50IDwgMTV9XG4gICAgICAgICAgICAgICAgICA+MTXigqw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVm90ZUNsaWNrKHByb2plY3QuaWQsIDMwKX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YW1vdW50IDwgMzB9XG4gICAgICAgICAgICAgICAgICA+MzDigqw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nQXV0aG9yJz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkF1dGhvciBFbWFpbDogPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RleHQtLUJvbGQnPiB7cHJvamVjdC5lbWFpbH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRGVzY3JpcHRpb24nID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nQnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgdG89Jy9wcm9qZWN0cyc+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgID5CYWNrIHRvIHByb2plY3RzPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH0pXG4gIHJldHVybiAoXG4gICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nUHJvamVjdEluZm8nPlxuICAgICAgICAgICAgICB7cHJvamVjdEluZm99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvamVjdHM6IHN0YXRlLnByb2plY3RzLnByb2plY3RzLFxuICAgIGF1dGg6IHN0YXRlLmF1dGhcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIG9uVm90ZUNsaWNrOiAocHJvamVjdElkLCBhbW91bnQpID0+IGRpc3BhdGNoKG9uVm90ZShwcm9qZWN0SWQsIGFtb3VudCkpXG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFByb2plY3RJbmZvKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9Qcm9qZWN0UmVnaXN0cmF0aW9uLnNjc3MnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXIvTG9hZGVyJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFwicmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIuY3NzXCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMvcHJvamVjdFJlZ2lzdGVyQWN0aW9ucyc7XG5pbXBvcnQge29uUHJvamVjdFJlZ2lzdGVyRm9ybVN1Ym1pdH0gZnJvbSAnLi4vLi4vdGh1bmtzL3Byb2plY3RSZWdpc3RlclRodW5rJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB7Y3JlYXRlTXVpVGhlbWUsIE11aVRoZW1lUHJvdmlkZXIsIHdpdGhTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gJy4uL1NuYWNrYmFyL3NuYWNrYmFyJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjMDA0NGZmJyxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBtYWluOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBtYWluOiB7XG4gICAgd2lkdGg6ICdhdXRvJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKDQwMCArIHRoZW1lLnNwYWNpbmcudW5pdCAqIDMgKiAyKV06IHtcbiAgICAgIHdpZHRoOiA0MDAsXG4gICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgIH0sXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDJ9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weGAsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQgKjgsXG4gICAgfSxcbiAgfSxcbiAgZm9ybToge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gIH0sXG4gIHRleHRGaWVsZDoge1xuICAgIGhlaWdodDogNTAsXG4gIH0sXG4gIHN1Ym1pdDoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICBoZWlnaHQ6IDUwLFxuICB9LFxufSk7XG5cbmNsYXNzIFByb2plY3RSZWdpc3RyYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBvcGVuOiBmYWxzZSxcbiAgfTtcblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gIH07XG5cbiAgb25Gb3JtU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5vbkZvcm1TdWJtaXQodGhpcy5wcm9wcy5wcm9qZWN0UmVnaXN0ZXIsIHRoaXMucHJvcHMuaGlzdG9yeSwgdGhpcy5wcm9wcy5hdXRoLmVtYWlsKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhvYmJ5TmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgYW1vdW50LFxuICAgICAgbG9hZGluZyxcbiAgICAgIGVycm9yLFxuICAgIH0gPXRoaXMucHJvcHMucHJvamVjdFJlZ2lzdGVyO1xuICAgIGNvbnN0IHtvbklucHV0Q2hhbmdlfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIj5SZWdpc3RlciBZb3VyIEhvYmJ5XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgICB7ZXJyb3IgPyA8U25hY2tiYXJcbiAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgIC8+IDogbnVsbH1cblxuICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25Gb3JtU3VibWl0fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICAgIG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2hvYmJ5TmFtZSdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2hvYmJ5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBlbnRlciB5b3VyIGhvYmJ5IG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICByb3dzTWF4PVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxlYXNlIGRlc2NyaWJlIGl0XCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2Ftb3VudCdcbiAgICAgICAgICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW1vdW50fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxlYXNlIGVudGVyIGFtb3VudCBmb3IgeW91ciBuZWVkc1wiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRlciB0ZXh0Q29sb3I9XCJzZWNvbmRhcnlcIiBjb2xvcj17JyNmZmYnfSBoPXsxNX0gLz4gOlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiZXJyb3JcIiA+UGxhY2UgeW91ciBob2JieTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0UmVnaXN0ZXI6IHN0YXRlLnByb2plY3RSZWdpc3RlcixcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvbklucHV0Q2hhbmdlOiAoZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5vbklucHV0Q2hhbmdlKGUpKSxcbiAgb25EYXRlQ2hhbmdlOiAoZGF0ZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5vbkRhdGVDaGFuZ2UoZGF0ZSkpLFxuICBvbkZvcm1TdWJtaXQ6IChwcm9qZWN0SW5mbywgaGlzdG9yeSwgZW1haWwpPT5kaXNwYXRjaChvblByb2plY3RSZWdpc3RlckZvcm1TdWJtaXQocHJvamVjdEluZm8saGlzdG9yeSxlbWFpbCkpXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFN0eWxlcyhzdHlsZXMpKFByb2plY3RSZWdpc3RyYXRpb24pKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluayBhcyBSb3V0ZXJMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCAnLi9Qcm9qZWN0c0xpc3Quc2Nzcyc7XG5pbXBvcnQge3NldFByb2plY3RMaXN0fSBmcm9tICcuLi8uLi90aHVua3MvZ2V0UHJvamVjdHMnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7b25Wb3RlfSBmcm9tICcuLi8uLi90aHVua3Mvdm90ZVRodW5rJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBNdWlUaGVtZVByb3ZpZGVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIlxuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyL0xvYWRlcic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5cblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjMDA0NGZmJyxcbiAgICB9LFxuICB9LFxufSk7XG5cblxuY2xhc3MgUHJvamVjdHNMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuZWQ6IGZhbHNlLFxuICAgICAgc2VhcmNoVmFsdWU6ICcnXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkdldFByb2plY3RzTGlzdCgpO1xuICB9XG5cbiAgb25TZWFyY2hCYXJDaGFuZ2UgPSBlID0+IHRoaXMuc2V0U3RhdGUoe3NlYXJjaFZhbHVlOiBlLnRhcmdldC52YWx1ZX0pXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtwcm9qZWN0cywgb25Wb3RlQ2xpY2t9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7YW1vdW50fSA9IHRoaXMucHJvcHMuYXV0aDtcbiAgICBsZXQgcHJvamVjdHNMaXN0O1xuICAgIGlmIChwcm9qZWN0cy5sZW5ndGggIT09IDApIHtcbiAgICAgIHByb2plY3RzTGlzdCA9IHByb2plY3RzICYmIHByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHtcbiAgICAgICAgcHJvamVjdC5idWRnZXQgPSAwO1xuICAgICAgICBpZiAocHJvamVjdC52b3Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJvamVjdC5idWRnZXQgPSBwcm9qZWN0LnZvdGVzLnJlZHVjZSgodG90YWwsIHZvdGUpPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRvdGFsICsgdm90ZS5hbW91bnQ7XG4gICAgICAgICAgfSwgMClcbiAgICAgICAgfSBlbHNlIGlmKHByb2plY3Qudm90ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgcHJvamVjdC5idWRnZXQgPSBwcm9qZWN0LnZvdGVzWzBdLmFtb3VudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvamVjdC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgICAgICAubWFwKChwcm9qZWN0LCBpKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9IGtleT17aX0+XG4gICAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17J21haW4tY2FyZCd9PlxuICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9eydDYXJkJ30gY29tcG9uZW50PXtSb3V0ZXJMaW5rfSB0bz17YC9wcm9qZWN0LyR7cHJvamVjdC5pZH1gfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnQ2FyZC10aXRsZSd9Pntwcm9qZWN0LnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydDYXJkLWRlc2NyaXB0aW9uJ30+e3Byb2plY3QuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJDYXJkLXByb2dyZXNzXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pntwcm9qZWN0LmJ1ZGdldH0kPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIkNhcmQtcHJvZ3Jlc3MtYmFyXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5lYXJQcm9ncmVzcyB2YXJpYW50PXsnYnVmZmVyJ30gdmFsdWU9eyhwcm9qZWN0LmJ1ZGdldCAvIHByb2plY3QuYW1vdW50KSAqIDEwMH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57cHJvamVjdC5hbW91bnR9JDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J1ZvdGVCdXR0b25zJ30+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgc3R5bGU9e3tib3JkZXJSYWRpdXM6IDUwLCBtYXJnaW46IDV9fSBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVm90ZUNsaWNrKHByb2plY3QuaWQsIDUpfSBkaXNhYmxlZD17YW1vdW50IDwgNX0+NeKCrDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiA1MCwgbWFyZ2luOiA1fX0gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblZvdGVDbGljayhwcm9qZWN0LmlkLCAxNSl9IGRpc2FibGVkPXthbW91bnQgPCAxNX0+MTXigqw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzdHlsZT17e2JvcmRlclJhZGl1czogNTAsIG1hcmdpbjogNX19IGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Wb3RlQ2xpY2socHJvamVjdC5pZCwgMzApfSBkaXNhYmxlZD17YW1vdW50IDwgMzB9PjMw4oKsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RzTGlzdCA9IDxkaXYgY2xhc3NOYW1lPSdMb2FkZXItY29udGFpbmVyLWxpc3QnPlxuICAgICAgICA8TG9hZGVyIGNvbG9yPXsnI0VBNzkyNSd9IGg9ezEwMH0vPlxuICAgICAgPC9kaXY+XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1Byb2plY3RzTGlzdCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNlYXJjaEJhclwiPlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGVhc2UgZW50ZXIga2V5d29yZHNcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFZhbHVlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWFyY2hCYXJDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge3Byb2plY3RzTGlzdH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvamVjdHM6IHN0YXRlLnByb2plY3RzLnByb2plY3RzLFxuICAgIGF1dGg6IHN0YXRlLmF1dGhcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIG9uR2V0UHJvamVjdHNMaXN0OiAoKSA9PiBkaXNwYXRjaChzZXRQcm9qZWN0TGlzdCgpKSxcbiAgb25Wb3RlQ2xpY2s6IChwcm9qZWN0SWQsIGFtb3VudCkgPT4gZGlzcGF0Y2gob25Wb3RlKHByb2plY3RJZCwgYW1vdW50KSlcblxufSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQcm9qZWN0c0xpc3QpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXIvTG9hZGVyJztcbmltcG9ydCB7TGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCAnLi9SZWdpc3Rlci5zY3NzJ1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vLi4vYWN0aW9ucy9yZWdpc3RlckFjdGlvbnNcIjtcbmltcG9ydCB7b25SZWdpc3RlckZvcm1TdWJtaXR9IGZyb20gJy4uLy4uL3RodW5rcy9yZWdpc3RlclRodW5rJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcbmltcG9ydCB7Y3JlYXRlTXVpVGhlbWUsIE11aVRoZW1lUHJvdmlkZXIsIHdpdGhTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IEFjY291bnQgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGUnO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gJy4uL1NuYWNrYmFyL3NuYWNrYmFyJztcblxuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjRUE3OTI1JyxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyMwMDQ0ZmYnLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIG1haW46ICcjZmZmZmZmJyxcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIG1haW46IHtcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoNDAwICsgdGhlbWUuc3BhY2luZy51bml0ICogMyAqIDIpXToge1xuICAgICAgd2lkdGg6IDQwMCxcbiAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgfSxcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy51bml0ICogMn1weCAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDN9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4YCxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCAqOCxcbiAgICB9LFxuICB9LFxuICBmb3JtOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgfSxcbiAgdGV4dEZpZWxkOiB7XG4gICAgaGVpZ2h0OiA1MCxcbiAgfSxcbiAgc3VibWl0OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgIGhlaWdodDogNTAsXG4gIH0sXG4gIGF2YXRhcjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZy51bml0LFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNFQTc5MjUnLFxuICB9LFxufSk7XG5cblxuY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBvcGVuOiBmYWxzZSxcblxuICB9O1xuXG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgfTtcblxuXG4gIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xuICB9O1xuXG5cbiAgb25Gb3JtU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5vbkZvcm1TdWJtaXQodGhpcy5wcm9wcy5yZWdpc3RlciwgdGhpcy5wcm9wcy5oaXN0b3J5KTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCBwYXNzd29yZDIsIGVycm9yLCBsb2FkaW5nLH0gPSB0aGlzLnByb3BzLnJlZ2lzdGVyO1xuICAgIGNvbnN0IHtvbklucHV0Q2hhbmdlfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0gPlxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUvPlxuICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9ID5cbiAgICAgICAgICAgICAgICA8QWNjb3VudC8+XG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIj5TaWduIFVwXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgICB7ZXJyb3IgPyA8U25hY2tiYXJcbiAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25Gb3JtU3VibWl0fSAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0gIG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBlbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkMidcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkMn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlcGVhdCBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRlciBjb2xvcj17JyNmZmYnfSBoPXsxNX0gLz4gOlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiZXJyb3JcIiA+U2lnbiB1cDwvVHlwb2dyYXBoeT4gfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic3ViaGVhZGluZ1wifT5cbiAgICAgICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/eycgJ31cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cbiAgICAgICAgICAgICAgICAgIHRvPScvbG9naW4nPlxuICAgICAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICByZWdpc3Rlcjogc3RhdGUucmVnaXN0ZXJcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIG9uSW5wdXRDaGFuZ2U6IChlKSA9PiBkaXNwYXRjaChhY3Rpb25zLm9uSW5wdXRDaGFuZ2UoZSkpLFxuICBvbkZvcm1TdWJtaXQ6ICh1c2VyLCBoaXN0b3J5KSA9PiBkaXNwYXRjaChvblJlZ2lzdGVyRm9ybVN1Ym1pdCh1c2VyLCBoaXN0b3J5KSlcbn0pO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKSh3aXRoU3R5bGVzKHN0eWxlcykoUmVnaXN0ZXIpKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgIGZyb20gJ3JlYWN0JztcbmltcG9ydCBTbmFjayBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXJcIjtcbmltcG9ydCBFcnJvckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FcnJvclwiO1xuaW1wb3J0IHt3aXRoU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICcjZDMyZjJmJyxcbiAgICB9LFxuICAgIE1vYmlibGVTbmFja2Jhcjp7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIERlc2t0b3BTbmFja2Jhcjp7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgICAgZm9udFNpemU6MjAsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgICB9LFxuICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB9LFxufSk7XG5cbiAgICAgICAgY29uc3QgU25hY2tiYXIgID0gKHByb3BzKSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5EZXNrdG9wU25hY2tiYXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNuYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17cHJvcHMub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezIwMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBDb250ZW50UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6ICdtZXNzYWdlLWlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiB7IHJvb3Q6IHByb3BzLmNsYXNzZXMucm9vdH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17PHNwYW4gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLm1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFcnJvckljb24gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLmljb259Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZXJyb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuTW9iaWJsZVNuYWNrYmFyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17cHJvcHMub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtwcm9wcy5vbkNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezMwMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGVudFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogJ21lc3NhZ2UtaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiB7IHJvb3Q6IHByb3BzLmNsYXNzZXMucm9vdH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9ezxzcGFuIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXJyb3JJY29uIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5pY29ufS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5lcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25DbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG5leHBvcnQgZGVmYXVsdCAod2l0aFN0eWxlcyhzdHlsZXMpKFNuYWNrYmFyKSk7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vVXNlci5zY3NzJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge3ZvdGVzfSBmcm9tICcuLi8uLi90aHVua3MvZ2V0Vm90ZXNUaHVuayc7XG5pbXBvcnQge3VuVm90ZX0gZnJvbSAnLi4vLi4vdGh1bmtzL3VuVm90ZVRodW5rJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyL0xvYWRlcic7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9lcy9QYXBlci9QYXBlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBNdWlUaGVtZVByb3ZpZGVyLH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuXG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICAgIHBhbGV0dGU6IHtcbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgbWFpbjogJyNFQTc5MjUnLFxuICAgICAgICB9LFxuICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgIG1haW46ICcjMDA0NGZmJyxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG5cblxuXG5jbGFzcyBVc2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOiAnJ1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLm9uR2V0Vm90ZXMoKVxuICB9XG5cbiAgICBvblNlYXJjaEJhckNoYW5nZSA9IGUgPT4gdGhpcy5zZXRTdGF0ZSh7c2VhcmNoVmFsdWU6IGUudGFyZ2V0LnZhbHVlfSlcblxuXG4gICAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt2b3Rlc30gPSB0aGlzLnByb3BzLnZvdGVzO1xuICAgIGNvbnN0IHtvblVuVm90ZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBjb25zdCBsb2FkZXIgPSA8ZGl2IGNsYXNzTmFtZT1cIkxvYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgICA8TG9hZGVyIGNvbG9yPXsnI0VBNzkyNSd9IGg9ezEwMH0vPlxuICAgICAgPC9kaXY+XG5cbiAgICBjb25zdCB2b3Rlc0FycmF5ID0gdm90ZXMubWFwKHZvdGUgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9eydtYWluJ30gPlxuICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17J0NhcmQnfSAga2V5PXt2b3RlLmlkfSA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydDYXJkLXRpdGxlJ30+e3ZvdGUudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydDYXJkLU1vbmV5U3BlbmQnfSA+Vm90ZWQgQW1vdW50OiB7dm90ZS5hbW91bnR94oKsPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblVuVm90ZSh2b3RlLmlkKX0+VW5Wb3RlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICAgKVxuICAgIH0pXG4gICAgICByZXR1cm4gKFxuXG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1VzZXInPlxuICAgICAgICAgICAgICAgICAge3ZvdGVzLmxlbmd0aCA+IDAgPyB2b3Rlc0FycmF5IDogbG9hZGVyfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB2b3Rlczogc3RhdGUudm90ZXNcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIG9uR2V0Vm90ZXM6ICgpID0+IGRpc3BhdGNoKHZvdGVzKCkpLFxuICBvblVuVm90ZTogKGlkKSA9PiBkaXNwYXRjaCh1blZvdGUoaWQpKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFVzZXIpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvYnVpbGQvaW1hZ2VzL2ZyaWVuZHMuMzY0MzE3MjkucG5nXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtjcmVhdGVTdG9yZSwgY29tcG9zZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvcm9vdFJlZHVjZXInO1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuaW1wb3J0IFJvdXRlcyBmcm9tICcuL1JvdXRlcyc7XG5pbXBvcnQgKiBhcyBzZXJ2aWNlV29ya2VyIGZyb20gJy4vc2VydmljZVdvcmtlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nXG5cbmF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShyZXF1ZXN0ID0+IHtcbiAgcmV0dXJuIHJlcXVlc3Q7XG59KVxuXG5heGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UocmVzcG9uc2UgPT4ge1xuICByZXR1cm4gcmVzcG9uc2U7XG59KVxuXG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBjb21wb3NlRW5oYW5jZXJzKGFwcGx5TWlkZGxld2FyZSh0aHVuaykpKTtcblxuUmVhY3RET00ucmVuZGVyKDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICA8Um91dGVzLz5cbjwvUHJvdmlkZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuXG4vLyBJZiB5b3Ugd2FudCB5b3VyIGFwcCB0byB3b3JrIG9mZmxpbmUgYW5kIGxvYWQgZmFzdGVyLCB5b3UgY2FuIGNoYW5nZVxuLy8gdW5yZWdpc3RlcigpIHRvIHJlZ2lzdGVyKCkgYmVsb3cuIE5vdGUgdGhpcyBjb21lcyB3aXRoIHNvbWUgcGl0ZmFsbHMuXG4vLyBMZWFybiBtb3JlIGFib3V0IHNlcnZpY2Ugd29ya2VyczogaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQVxuc2VydmljZVdvcmtlci51bnJlZ2lzdGVyKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGVtYWlsOiAnJyxcbiAgICBhbW91bnQ6IDAsXG4gICAgcm9sZTogbnVsbCxcbiAgICBpc0F1dGg6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLkFVVEhfVVNFUjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgZW1haWw6IGFjdGlvbi51c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgIGFtb3VudDogYWN0aW9uLnVzZXIuYnVkZ2V0LFxuICAgICAgICAgICAgICAgIHJvbGU6IGFjdGlvbi51c2VyLnJvbGUsXG4gICAgICAgICAgICAgICAgaXNBdXRoOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgdHlwZXMuTE9HX09VVDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgICAgICByb2xlOiBudWxsLFxuICAgICAgICAgICAgICAgIGlzQXV0aDogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgdHlwZXMuVk9URV9VU0VSOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHN0YXRlLmFtb3VudC1hY3Rpb24uYW1vdW50XG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZW1haWw6ICcnLFxuICBwYXNzd29yZDogJycsXG4gIGVycm9yOiAnJyxcbiAgbG9hZGluZzogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuTE9HSU5fRk9STV9JTlBVVF9DSEFOR0U6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBbYWN0aW9uLm5hbWVdOiBhY3Rpb24udmFsdWV9O1xuICAgIGNhc2UgdHlwZXMuTE9HSU5fRk9STV9MT0FESU5HOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXJyb3I6ICcnLCBsb2FkaW5nOiB0cnVlfTtcbiAgICBjYXNlIHR5cGVzLkxPR0lOX0ZPUk1fRVJST1I6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlcnJvcjogYWN0aW9uLmVycm9yLCBsb2FkaW5nOmZhbHNlfTtcbiAgICBjYXNlIHR5cGVzLkxPR0lOX0ZPUk1fU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnLCBsb2FkaW5nOmZhbHNlfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcm5hbWU6ICcnLFxuICBob2JieU5hbWU6ICcnLFxuICBlbWFpbDogJycsXG4gIGRlc2NyaXB0aW9uOiAnJyxcbiAgYW1vdW50OiAnJyxcbiAgbG9hZGluZzogZmFsc2UsXG4gIGVycm9yOiAnJ1xufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIFthY3Rpb24ubmFtZV06IGFjdGlvbi52YWx1ZX07XG4gICAgY2FzZSB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0RBVEVfQ0hBTkdFOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZW5kRGF0ZTogYWN0aW9uLmRhdGV9O1xuICAgIGNhc2UgdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0xPQURJTkc6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlfTtcbiAgICBjYXNlIHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9FUlJPUjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVycm9yOiBhY3Rpb24uZXJyb3IsIGxvYWRpbmc6ZmFsc2V9O1xuICAgIGNhc2UgdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9GT1JNX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICBob2JieU5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIGFtb3VudDogJycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgZW5kRGF0ZTogbnVsbCxcbiAgICAgICAgbG9hZGluZzpmYWxzZSxcbiAgICAgICAgZXJyb3I6Jyd9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHByb2plY3RzOiBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuR0VUX1BST0pFQ1RTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcHJvamVjdHM6IGFjdGlvbi5wcm9qZWN0c31cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcm5hbWU6ICcnLFxuICBlbWFpbDogJycsXG4gIHBhc3N3b3JkOiAnJyxcbiAgcGFzc3dvcmQyOiAnJyxcbiAgbG9hZGluZzogZmFsc2UsXG4gIGVycm9yOiAnJ1xufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5SRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIFthY3Rpb24ubmFtZV06IGFjdGlvbi52YWx1ZX07XG4gICAgY2FzZSB0eXBlcy5SRUdJU1RFUl9GT1JNX0xPQURJTkc6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlcnJvcjonJywgbG9hZGluZzogdHJ1ZX07XG4gICAgY2FzZSB0eXBlcy5SRUdJU1RFUl9GT1JNX0VSUk9SOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXJyb3I6IGFjdGlvbi5lcnJvciwgbG9hZGluZzpmYWxzZX07XG4gICAgY2FzZSB0eXBlcy5SRUdJU1RFUl9GT1JNX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCB1c2VybmFtZTogJycsIGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnLCBwYXNzd29yZDI6ICcnLCBlcnJvcjogJycsIGxvYWRpbmc6IGZhbHNlfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAgJ3JlZHV4JztcbmltcG9ydCBsb2dpblJlZHVjZXIgZnJvbSAnLi9sb2dpblJlZHVjZXInO1xuaW1wb3J0IHJlZ2lzdGVyUmVkdWNlciBmcm9tICcuL3JlZ2lzdGVyUmVkdWNlcic7XG5pbXBvcnQgcHJvamVjdFJlZ2lzdGVyUmVkdWNlciBmcm9tICcuL3Byb2plY3RSZWdpc3RlclJlZHVjZXInO1xuaW1wb3J0IHByb2plY3RzUmVkdWNlciBmcm9tICcuL3Byb2plY3RzUmVkdWNlcic7XG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSAnLi9hdXRoUmVkdWNlcic7XG5pbXBvcnQgdm90ZXNSZWR1Y2VyIGZyb20gJy4vdm90ZXNSZWR1Y2VyJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBsb2dpbjogbG9naW5SZWR1Y2VyLFxuICByZWdpc3RlcjogcmVnaXN0ZXJSZWR1Y2VyLFxuICBwcm9qZWN0UmVnaXN0ZXI6IHByb2plY3RSZWdpc3RlclJlZHVjZXIsXG4gIHByb2plY3RzOiBwcm9qZWN0c1JlZHVjZXIsXG4gIGF1dGg6IGF1dGhSZWR1Y2VyLFxuICB2b3Rlczogdm90ZXNSZWR1Y2VyXG59KVxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHZvdGVzOiBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLkdFVF9WT1RFUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHZvdGVzOiBhY3Rpb24udm90ZXN9XG4gICAgY2FzZSB0eXBlcy5SRU1PVkVfVk9URTpcbiAgICAgIGNvbnN0IHZvdGVzID0gc3RhdGUudm90ZXMuZmlsdGVyKHZvdGUgPT4gdm90ZS5pZCAhPT0gYWN0aW9uLnZvdGVJRClcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHZvdGVzfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCIvLyBUaGlzIG9wdGlvbmFsIGNvZGUgaXMgdXNlZCB0byByZWdpc3RlciBhIHNlcnZpY2Ugd29ya2VyLlxuLy8gcmVnaXN0ZXIoKSBpcyBub3QgY2FsbGVkIGJ5IGRlZmF1bHQuXG5cbi8vIFRoaXMgbGV0cyB0aGUgYXBwIGxvYWQgZmFzdGVyIG9uIHN1YnNlcXVlbnQgdmlzaXRzIGluIHByb2R1Y3Rpb24sIGFuZCBnaXZlc1xuLy8gaXQgb2ZmbGluZSBjYXBhYmlsaXRpZXMuIEhvd2V2ZXIsIGl0IGFsc28gbWVhbnMgdGhhdCBkZXZlbG9wZXJzIChhbmQgdXNlcnMpXG4vLyB3aWxsIG9ubHkgc2VlIGRlcGxveWVkIHVwZGF0ZXMgb24gc3Vic2VxdWVudCB2aXNpdHMgdG8gYSBwYWdlLCBhZnRlciBhbGwgdGhlXG4vLyBleGlzdGluZyB0YWJzIG9wZW4gb24gdGhlIHBhZ2UgaGF2ZSBiZWVuIGNsb3NlZCwgc2luY2UgcHJldmlvdXNseSBjYWNoZWRcbi8vIHJlc291cmNlcyBhcmUgdXBkYXRlZCBpbiB0aGUgYmFja2dyb3VuZC5cblxuLy8gVG8gbGVhcm4gbW9yZSBhYm91dCB0aGUgYmVuZWZpdHMgb2YgdGhpcyBtb2RlbCBhbmQgaW5zdHJ1Y3Rpb25zIG9uIGhvdyB0b1xuLy8gb3B0LWluLCByZWFkIGh0dHBzOi8vYml0Lmx5L0NSQS1QV0FcblxuY29uc3QgaXNMb2NhbGhvc3QgPSBCb29sZWFuKFxuICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnIHx8XG4gICAgLy8gWzo6MV0gaXMgdGhlIElQdjYgbG9jYWxob3N0IGFkZHJlc3MuXG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnWzo6MV0nIHx8XG4gICAgLy8gMTI3LjAuMC4xLzggaXMgY29uc2lkZXJlZCBsb2NhbGhvc3QgZm9yIElQdjQuXG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLm1hdGNoKFxuICAgICAgL14xMjcoPzpcXC4oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pKXszfSQvXG4gICAgKVxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKGNvbmZpZykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgLy8gVGhlIFVSTCBjb25zdHJ1Y3RvciBpcyBhdmFpbGFibGUgaW4gYWxsIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBTVy5cbiAgICBjb25zdCBwdWJsaWNVcmwgPSBuZXcgVVJMKHByb2Nlc3MuZW52LlBVQkxJQ19VUkwsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICBpZiAocHVibGljVXJsLm9yaWdpbiAhPT0gd2luZG93LmxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgLy8gT3VyIHNlcnZpY2Ugd29ya2VyIHdvbid0IHdvcmsgaWYgUFVCTElDX1VSTCBpcyBvbiBhIGRpZmZlcmVudCBvcmlnaW5cbiAgICAgIC8vIGZyb20gd2hhdCBvdXIgcGFnZSBpcyBzZXJ2ZWQgb24uIFRoaXMgbWlnaHQgaGFwcGVuIGlmIGEgQ0ROIGlzIHVzZWQgdG9cbiAgICAgIC8vIHNlcnZlIGFzc2V0czsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9jcmVhdGUtcmVhY3QtYXBwL2lzc3Vlcy8yMzc0XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBzd1VybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L3NlcnZpY2Utd29ya2VyLmpzYDtcblxuICAgICAgaWYgKGlzTG9jYWxob3N0KSB7XG4gICAgICAgIC8vIFRoaXMgaXMgcnVubmluZyBvbiBsb2NhbGhvc3QuIExldCdzIGNoZWNrIGlmIGEgc2VydmljZSB3b3JrZXIgc3RpbGwgZXhpc3RzIG9yIG5vdC5cbiAgICAgICAgY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIoc3dVcmwsIGNvbmZpZyk7XG5cbiAgICAgICAgLy8gQWRkIHNvbWUgYWRkaXRpb25hbCBsb2dnaW5nIHRvIGxvY2FsaG9zdCwgcG9pbnRpbmcgZGV2ZWxvcGVycyB0byB0aGVcbiAgICAgICAgLy8gc2VydmljZSB3b3JrZXIvUFdBIGRvY3VtZW50YXRpb24uXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgJ1RoaXMgd2ViIGFwcCBpcyBiZWluZyBzZXJ2ZWQgY2FjaGUtZmlyc3QgYnkgYSBzZXJ2aWNlICcgK1xuICAgICAgICAgICAgICAnd29ya2VyLiBUbyBsZWFybiBtb3JlLCB2aXNpdCBodHRwczovL2JpdC5seS9DUkEtUFdBJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSXMgbm90IGxvY2FsaG9zdC4gSnVzdCByZWdpc3RlciBzZXJ2aWNlIHdvcmtlclxuICAgICAgICByZWdpc3RlclZhbGlkU1coc3dVcmwsIGNvbmZpZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpIHtcbiAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbiAgICAucmVnaXN0ZXIoc3dVcmwpXG4gICAgLnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgIHJlZ2lzdHJhdGlvbi5vbnVwZGF0ZWZvdW5kID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnN0YWxsaW5nV29ya2VyID0gcmVnaXN0cmF0aW9uLmluc3RhbGxpbmc7XG4gICAgICAgIGlmIChpbnN0YWxsaW5nV29ya2VyID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFsbGluZ1dvcmtlci5vbnN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChpbnN0YWxsaW5nV29ya2VyLnN0YXRlID09PSAnaW5zdGFsbGVkJykge1xuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHVwZGF0ZWQgcHJlY2FjaGVkIGNvbnRlbnQgaGFzIGJlZW4gZmV0Y2hlZCxcbiAgICAgICAgICAgICAgLy8gYnV0IHRoZSBwcmV2aW91cyBzZXJ2aWNlIHdvcmtlciB3aWxsIHN0aWxsIHNlcnZlIHRoZSBvbGRlclxuICAgICAgICAgICAgICAvLyBjb250ZW50IHVudGlsIGFsbCBjbGllbnQgdGFicyBhcmUgY2xvc2VkLlxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAnTmV3IGNvbnRlbnQgaXMgYXZhaWxhYmxlIGFuZCB3aWxsIGJlIHVzZWQgd2hlbiBhbGwgJyArXG4gICAgICAgICAgICAgICAgICAndGFicyBmb3IgdGhpcyBwYWdlIGFyZSBjbG9zZWQuIFNlZSBodHRwczovL2JpdC5seS9DUkEtUFdBLidcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAvLyBFeGVjdXRlIGNhbGxiYWNrXG4gICAgICAgICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLm9uVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLm9uVXBkYXRlKHJlZ2lzdHJhdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIGV2ZXJ5dGhpbmcgaGFzIGJlZW4gcHJlY2FjaGVkLlxuICAgICAgICAgICAgICAvLyBJdCdzIHRoZSBwZXJmZWN0IHRpbWUgdG8gZGlzcGxheSBhXG4gICAgICAgICAgICAgIC8vIFwiQ29udGVudCBpcyBjYWNoZWQgZm9yIG9mZmxpbmUgdXNlLlwiIG1lc3NhZ2UuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb250ZW50IGlzIGNhY2hlZCBmb3Igb2ZmbGluZSB1c2UuJyk7XG5cbiAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBjYWxsYmFja1xuICAgICAgICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5vblN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBjb25maWcub25TdWNjZXNzKHJlZ2lzdHJhdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb246JywgZXJyb3IpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja1ZhbGlkU2VydmljZVdvcmtlcihzd1VybCwgY29uZmlnKSB7XG4gIC8vIENoZWNrIGlmIHRoZSBzZXJ2aWNlIHdvcmtlciBjYW4gYmUgZm91bmQuIElmIGl0IGNhbid0IHJlbG9hZCB0aGUgcGFnZS5cbiAgZmV0Y2goc3dVcmwpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gRW5zdXJlIHNlcnZpY2Ugd29ya2VyIGV4aXN0cywgYW5kIHRoYXQgd2UgcmVhbGx5IGFyZSBnZXR0aW5nIGEgSlMgZmlsZS5cbiAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xuICAgICAgaWYgKFxuICAgICAgICByZXNwb25zZS5zdGF0dXMgPT09IDQwNCB8fFxuICAgICAgICAoY29udGVudFR5cGUgIT0gbnVsbCAmJiBjb250ZW50VHlwZS5pbmRleE9mKCdqYXZhc2NyaXB0JykgPT09IC0xKVxuICAgICAgKSB7XG4gICAgICAgIC8vIE5vIHNlcnZpY2Ugd29ya2VyIGZvdW5kLiBQcm9iYWJseSBhIGRpZmZlcmVudCBhcHAuIFJlbG9hZCB0aGUgcGFnZS5cbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2VydmljZSB3b3JrZXIgZm91bmQuIFByb2NlZWQgYXMgbm9ybWFsLlxuICAgICAgICByZWdpc3RlclZhbGlkU1coc3dVcmwsIGNvbmZpZyk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICdObyBpbnRlcm5ldCBjb25uZWN0aW9uIGZvdW5kLiBBcHAgaXMgcnVubmluZyBpbiBvZmZsaW5lIG1vZGUuJ1xuICAgICAgKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXIoKSB7XG4gIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgcmVnaXN0cmF0aW9uLnVucmVnaXN0ZXIoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJGcm9tTFMoKSB7XG4gIGNvbnN0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaG9iYnlDcmFmdC11c2VyJylcbiAgcmV0dXJuIEpTT04ucGFyc2UodXNlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRVc2VyVG9MUyh1c2VyKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdob2JieUNyYWZ0LXVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcbiAgcmV0dXJuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVXNlckFtb3VudEluTFMoYW1vdW50KSB7XG4gIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdob2JieUNyYWZ0LXVzZXInKSlcbiAgdXNlci5idWRnZXQgPSB1c2VyLmJ1ZGdldCAtIGFtb3VudDtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hvYmJ5Q3JhZnQtdXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxuICByZXR1cm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVVc2VyRnJvbUxTKCkge1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaG9iYnlDcmFmdC11c2VyJylcbiAgcmV0dXJuO1xufVxuXG4iLCJpbXBvcnQge2dldFByb2plY3RzfSBmcm9tICcuLi9hY3Rpb25zL3Byb2plY3RzQWN0aW9uJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGNvbnN0IHNldFByb2plY3RMaXN0ID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gYXhpb3NcbiAgICAgIC5nZXQoJy9hcGkvaG9iYmllcycpXG4gICAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goZ2V0UHJvamVjdHMocmVzLmRhdGEpKSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIHJldHVybiBwcm9qZWN0TGlzdDtcbn0iLCJpbXBvcnQge2dldFZvdGVzfSBmcm9tICcuLi9hY3Rpb25zL3ZvdGVzQWN0aW9ucyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3Qgdm90ZXMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgYXhpb3MuZ2V0KCcvYXBpL3VzZXIvdm90ZXMnKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZ2V0Vm90ZXMocmVzLmRhdGEpKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIHJldHVybiBudWxsO1xufSIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9sb2dpbkFjdGlvbnMnO1xuaW1wb3J0IHthdXRoVXNlcn0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtzZXRVc2VyVG9MU30gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlJztcblxuZXhwb3J0IGNvbnN0IG9uRm9ybVN1Ym1pdCA9ICh1c2VyLCBoaXN0b3J5KSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goYWN0aW9ucy5vbkZvcm1Mb2FkaW5nKCkpO1xuICBpZih1c2VyLmVtYWlsID09PSAnJyB8fCB1c2VyLnBhc3N3b3JkID09PSAnJyApIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9ucy5vbkxvZ2luRm9ybUVycm9yKCdQbGVhc2UgZmlsbCBmaWVsZHMnKSk7XG4gIH1cbiAgY29uc3QgbG9naW5Kc29uID0gXHR7XG4gICAgICBcInNlY3VyaXR5XCI6IHtcbiAgICAgICAgICBcImNyZWRlbnRpYWxzXCI6IHtcbiAgICAgICAgICAgICAgXCJlbWFpbFwiOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICBcInBhc3N3b3JkXCI6IHVzZXIucGFzc3dvcmRcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgYXhpb3MucG9zdCgnL2FwaS9zZWN1cml0eS9sb2dpbicsIGxvZ2luSnNvbilcbiAgICAgIC50aGVuKHJlcyA9PntcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgIHNldFVzZXJUb0xTKHJlcy5kYXRhKVxuICAgICAgICBkaXNwYXRjaChhdXRoVXNlcihyZXMuZGF0YSkpXG4gICAgICAgIGRpc3BhdGNoKGFjdGlvbnMub25Mb2dpbkZvcm1TdWNjZXNzKHVzZXIpKVxuICAgICAgICBoaXN0b3J5LnB1c2goJy8nKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbnMub25Mb2dpbkZvcm1FcnJvcihlcnIucmVzcG9uc2UuZGF0YS5lcnJvciA/IGVyci5yZXNwb25zZS5kYXRhLmVycm9yIDpcbiAgICAgICAgICAnU2VydmVyIEVycm9yLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyJykpXG4gICAgICAgIH1cbiAgICAgIClcbn0iLCJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuaW1wb3J0IHtyZW1vdmVVc2VyRnJvbUxTfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3Qgb25Mb2dPdXQgPSAoaGlzdG9yeSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGF4aW9zLmdldCgnL2FwaS9zZWN1cml0eS9sb2dvdXQnKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmVtb3ZlVXNlckZyb21MUygpXG4gICAgICAgIGRpc3BhdGNoKGFjdGlvbnMubG9nb3V0KCkpXG4gICAgICAgIGhpc3RvcnkucHVzaCgnLycpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgcmV0dXJuIG51bGw7XG59IiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3Byb2plY3RSZWdpc3RlckFjdGlvbnMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IG9uUHJvamVjdFJlZ2lzdGVyRm9ybVN1Ym1pdCA9IChwcm9qZWN0SW5mbywgaGlzdG9yeSwgZW1haWwpID0+IChkaXNwYXRjaCkgPT4ge1xuXG4gIGRpc3BhdGNoKGFjdGlvbnMub25Qcm9qZWN0UmVnaXN0ZXJGb3JtTG9hZGluZygpKTtcbiAgaWYocHJvamVjdEluZm8uaG9iYnlOYW1lID09PSAnJyB8fFxuICBwcm9qZWN0SW5mby5kZXNjcmlwdGlvbiA9PT0gJycgfHwgcHJvamVjdEluZm8uYW1vdW50ID09PSAnJyApIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9ucy5vblByb2plY3RSZWdpc3RlckZvcm1FcnJvcignUGxlYXNlIGZpbGwgYWxsIGZpZWxkcycpKVxuICB9XG5cbiAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICBcInRpdGxlXCI6IHByb2plY3RJbmZvLmhvYmJ5TmFtZSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IHByb2plY3RJbmZvLmRlc2NyaXB0aW9uLFxuICAgIFwiYW1vdW50XCI6IHByb2plY3RJbmZvLmFtb3VudCxcbiAgICBcImVtYWlsXCI6IGVtYWlsXG4gIH0pO1xuICBheGlvc1xuICAgICAgLnBvc3QoJy9hcGkvaG9iYnknLGpzb24pXG4gICAgLnRoZW4ocmVzPT57XG4gICAgICBkaXNwYXRjaChhY3Rpb25zLm9uUHJvamVjdFJlZ2lzdGVyRm9ybVN1Ym1pdChyZXMpKTtcbiAgICAgIGhpc3RvcnkucHVzaCgnL3Byb2plY3RzJyk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5vblByb2plY3RSZWdpc3RlckZvcm1FcnJvcignU2VydmVyIGVycm9yLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpKVxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfSlcblxufSIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9yZWdpc3RlckFjdGlvbnMnO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHtzZXRVc2VyVG9MU30gZnJvbSBcIi4uL3N0b3JhZ2Uvc3RvcmFnZVwiO1xuaW1wb3J0IHthdXRoVXNlcn0gZnJvbSBcIi4uL2FjdGlvbnMvYXV0aEFjdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IG9uUmVnaXN0ZXJGb3JtU3VibWl0ID0gKHVzZXIsIGhpc3RvcnkpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChhY3Rpb25zLm9uRm9ybUxvYWRpbmcoKSk7XG4gIGlmKHVzZXIuZW1haWwgPT09ICcnIHx8IHVzZXIucGFzc3dvcmQgPT09ICcnIHx8IHVzZXIucGFzc3dvcmQyID09PSAnJykge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25zLm9uUmVnaXN0ZXJGb3JtRXJyb3IoJ1BsZWFzZSBmaWxsIGZpZWxkcycpKTtcbiAgfVxuICBpZih1c2VyLnBhc3N3b3JkICE9PSB1c2VyLnBhc3N3b3JkMikge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25zLm9uUmVnaXN0ZXJGb3JtRXJyb3IoJ1Bhc3N3b3JkcyBkb2VzblxcJ3QgbWF0Y2gnKSk7XG4gIH1cbiAgaWYodXNlci5wYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbnMub25SZWdpc3RlckZvcm1FcnJvcignUGFzc3dvcmQgbGVuZ3RoIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXInKSk7XG4gIH1cbiAgY29uc3QgcmVnaXN0ZXJKc29uID0ge1xuICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxuICB9O1xuXG4gIGF4aW9zLnBvc3QoJy9hcGkvc2VjdXJpdHkvcmVnaXN0ZXInLCByZWdpc3Rlckpzb24pXG4gICAgICAudGhlbihyZXMgPT57XG4gICAgICAgIHNldFVzZXJUb0xTKHJlcy5kYXRhKVxuICAgICAgICBkaXNwYXRjaChhdXRoVXNlcihyZXMuZGF0YSkpXG4gICAgICAgIGRpc3BhdGNoKGFjdGlvbnMub25SZWdpc3RlckZvcm1TdWNjZXNzKHJlZ2lzdGVySnNvbikpXG4gICAgICAgIGhpc3RvcnkucHVzaCgnLycpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChhY3Rpb25zLm9uUmVnaXN0ZXJGb3JtRXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzLmNoaWxkcmVuLmVtYWlsLmVycm9ycyA/XG4gICAgICAgICAgICAgICAgZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzLmNoaWxkcmVuLmVtYWlsLmVycm9yc1xuICAgICAgICAgICAgICAgIDogJ1NlcnZlciBlcnJvci4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKSlcbiAgICAgICAgICB9XG4gICAgICApXG5cbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtyZW1vdmVWb3RlfSBmcm9tICcuLi9hY3Rpb25zL3ZvdGVzQWN0aW9ucydcblxuZXhwb3J0IGNvbnN0IHVuVm90ZSA9ICh2b3RlSWQpID0+IChkaXNwYXRjaCkgPT4ge1xuICBheGlvcy5kZWxldGUoYC9hcGkvdm90ZS8ke3ZvdGVJZH1gKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgZGlzcGF0Y2gocmVtb3ZlVm90ZSh2b3RlSWQpKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIHJldHVybiBudWxsO1xufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge3NldFByb2plY3RMaXN0fSBmcm9tICcuL2dldFByb2plY3RzJztcbmltcG9ydCB7Y2hhbmdlVXNlckFtb3VudEluTFN9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZSdcbmltcG9ydCB7dm90ZVVzZXJ9IGZyb20gJy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuXG5leHBvcnQgY29uc3Qgb25Wb3RlID0gKHByb2plY3RJZCwgYW1vdW50KSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgYXhpb3MucG9zdCgnL2FwaS92b3RlJywge1xuICAgIGhvYmJ5OiBwcm9qZWN0SWQsXG4gICAgYW1vdW50OiBhbW91bnRcbiAgfSkudGhlbihyZXM9PntcbiAgICBjaGFuZ2VVc2VyQW1vdW50SW5MUyhhbW91bnQpO1xuICAgIGRpc3BhdGNoKHNldFByb2plY3RMaXN0KCkpO1xuICAgIGRpc3BhdGNoKHZvdGVVc2VyKGFtb3VudCkpO1xuICB9KS5jYXRjaChlcnI9PiBjb25zb2xlLmxvZyhlcnIpKVxuXG4gIHJldHVybiBudWxsO1xufSJdLCJzb3VyY2VSb290IjoiIn0=