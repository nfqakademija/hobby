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
      user ? this.props.onLoadProjects() : null;
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
        path: "/register/:token",
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
/*! exports provided: authUser, logout, voteUser, unVoteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authUser", function() { return authUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voteUser", function() { return voteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unVoteUser", function() { return unVoteUser; });
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
function unVoteUser(amount) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["UNVOTE_USER"],
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
/*! exports provided: LOGIN_FORM_INPUT_CHANGE, LOGIN_FORM_LOADING, LOGIN_FORM_ERROR, LOGIN_FORM_SUCCESS, REGISTER_FORM_INPUT_CHANGE, REGISTER_FORM_LOADING, REGISTER_FORM_ERROR, REGISTER_FORM_SUCCESS, PROJECT_REGISTER_FORM_INPUT_CHANGE, PROJECT_REGISTER_DATE_CHANGE, PROJECT_REGISTER_FORM_LOADING, PROJECT_REGISTER_FORM_ERROR, PROJECT_REGISTER_FORM_SUCCESS, GET_PROJECTS, AUTH_USER, LOG_OUT, UNVOTE_USER, VOTE_USER, GET_VOTES, REMOVE_VOTE */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNVOTE_USER", function() { return UNVOTE_USER; });
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
var UNVOTE_USER = 'UNVOTE_USER';
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
/* harmony import */ var _Images_Friends_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Images/Friends.png */ "./assets/js/components/Images/Friends.png");
/* harmony import */ var _Images_Friends_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Images_Friends_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Images_team_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Images/team.png */ "./assets/js/components/Images/team.png");
/* harmony import */ var _Images_team_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Images_team_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Images_colleague_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Images/colleague.png */ "./assets/js/components/Images/colleague.png");
/* harmony import */ var _Images_colleague_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Images_colleague_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_es_Paper_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/es/Paper/Paper */ "./node_modules/@material-ui/core/es/Paper/Paper.js");










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
    src: _Images_Friends_png__WEBPACK_IMPORTED_MODULE_6___default.a
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Container--inline"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_es_Paper_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "Card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "Img-card",
    src: _Images_team_png__WEBPACK_IMPORTED_MODULE_7___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Message-Title"
  }, "A New and Better way to engange"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Message-Subheading"
  }, "Companies use HobbyCraft to organize their employees hobby budget"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "link"
  }, "Read More")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_es_Paper_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "Card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "Img-card",
    src: _Images_colleague_png__WEBPACK_IMPORTED_MODULE_8___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Message-Title"
  }, "A New and Better way to engange"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Message-Subheading"
  }, "Companies use HobbyCraft to organize their employees hobby budget"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "link"
  }, "Read More")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Container--Bottom"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Navigation"
  }, "HobbyCraft"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Navigation"
  }, "Navigation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Navigation"
  }, "Legal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Navigation"
  }, "Contact Us"))));
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

/***/ "./assets/js/components/Images/Friends.png":
/*!*************************************************!*\
  !*** ./assets/js/components/Images/Friends.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/build/images/Friends.36431729.png";

/***/ }),

/***/ "./assets/js/components/Images/colleague.png":
/*!***************************************************!*\
  !*** ./assets/js/components/Images/colleague.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/build/images/colleague.e009a69a.png";

/***/ }),

/***/ "./assets/js/components/Images/team.png":
/*!**********************************************!*\
  !*** ./assets/js/components/Images/team.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/build/images/team.aeccea8d.png";

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
    paddingLeft: "10%",
    paddingRight: "10%",
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
            className: "main-card"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default.a, {
            className: "Card-Project",
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
            onClick: function onClick(e) {
              e.preventDefault();
              onVoteClick(project.id, 5);
            },
            disabled: amount < 5
          }, "5\u20AC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
            variant: "outlined",
            style: {
              borderRadius: 50,
              margin: 5
            },
            color: "primary",
            onClick: function onClick(e) {
              e.preventDefault();
              onVoteClick(project.id, 15);
            },
            disabled: amount < 15
          }, "15\u20AC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
            variant: "outlined",
            style: {
              borderRadius: 50,
              margin: 5
            },
            color: "primary",
            onClick: function onClick(e) {
              e.preventDefault();
              onVoteClick(project.id, 30);
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

      _this.props.onFormSubmit(_this.props.register, _this.props.history, _this.props.match.params.token);
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
    onFormSubmit: function onFormSubmit(user, history, token) {
      return dispatch(Object(_thunks_registerThunk__WEBPACK_IMPORTED_MODULE_5__["onRegisterFormSubmit"])(user, history, token));
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
            return onUnVote(vote.id, vote.amount);
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
    onUnVote: function onUnVote(id, amount) {
      return dispatch(Object(_thunks_unVoteThunk__WEBPACK_IMPORTED_MODULE_4__["unVote"])(id, amount));
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

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["UNVOTE_USER"]:
      return _objectSpread({}, state, {
        amount: state.amount + action.amount
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




var onRegisterFormSubmit = function onRegisterFormSubmit(user, history, token) {
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
      password: user.password,
      registrationToken: token
    };
    console.log(registerJson);
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
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/authActions */ "./assets/js/actions/authActions.js");



var unVote = function unVote(voteId, amount) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/vote/".concat(voteId)).then(function (res) {
      dispatch(Object(_actions_votesActions__WEBPACK_IMPORTED_MODULE_1__["removeVote"])(voteId));
      dispatch(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_2__["unVoteUser"])(amount));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvUm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL2xvZ2luQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy9wcm9qZWN0UmVnaXN0ZXJBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3Byb2plY3RzQWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3JlZ2lzdGVyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy92b3Rlc0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWJvdXQvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWJvdXQvYWJvdXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS9Ib21lLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSW1hZ2VzL0ZyaWVuZHMucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ltYWdlcy9jb2xsZWFndWUucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ltYWdlcy90ZWFtLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2FkZXIvTG9hZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvYWRlci9sb2FkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL05hdkJhci9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdEluZm8vUHJvamVjdEluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdEluZm8vUHJvamVjdEluZm8uc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qcm9qZWN0UmVnaXN0cmF0aW9uL1Byb2plY3RSZWdpc3RyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdFJlZ2lzdHJhdGlvbi9Qcm9qZWN0UmVnaXN0cmF0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdHNMaXN0L1Byb2plY3RzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qcm9qZWN0c0xpc3QvUHJvamVjdHNMaXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUmVnaXN0ZXIvUmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUmVnaXN0ZXIvUmVnaXN0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TbmFja2Jhci9zbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Vc2VyL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVXNlci9Vc2VyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy9hdXRoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvbG9naW5SZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy9wcm9qZWN0UmVnaXN0ZXJSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy9wcm9qZWN0c1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL3JlZ2lzdGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvcm9vdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL3ZvdGVzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2VydmljZVdvcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3RvcmFnZS9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3MvZ2V0UHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RodW5rcy9nZXRWb3Rlc1RodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3MvbG9naW5UaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL2xvZ291dFRodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3MvcHJvamVjdFJlZ2lzdGVyVGh1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RodW5rcy9yZWdpc3RlclRodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3MvdW5Wb3RlVGh1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RodW5rcy92b3RlVGh1bmsuanMiXSwibmFtZXMiOlsiUm91dGVzIiwidXNlciIsImdldFVzZXJGcm9tTFMiLCJwcm9wcyIsIm9uTG9hZEF1dGgiLCJvbkxvYWRQcm9qZWN0cyIsImlzQXV0aCIsImF1dGgiLCJwcm9jZXNzIiwiUFVCTElDX1VSTCIsIkhvbWUiLCJBYm91dCIsIlByb2plY3RzTGlzdCIsIkxvZ2luIiwiUmVnaXN0ZXIiLCJVc2VyIiwiUHJvamVjdEluZm8iLCJQcm9qZWN0UmVnaXN0cmF0aW9uIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImF1dGhVc2VyIiwic2V0UHJvamVjdExpc3QiLCJjb25uZWN0IiwidHlwZSIsInR5cGVzIiwibG9nb3V0IiwiTE9HX09VVCIsInZvdGVVc2VyIiwiYW1vdW50IiwidW5Wb3RlVXNlciIsIm9uSW5wdXRDaGFuZ2UiLCJlIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwib25Gb3JtTG9hZGluZyIsIkxPR0lOX0ZPUk1fTE9BRElORyIsIm9uTG9naW5Gb3JtRXJyb3IiLCJlcnJvciIsIm9uTG9naW5Gb3JtU3VjY2VzcyIsIm9uRGF0ZUNoYW5nZSIsImRhdGUiLCJvblByb2plY3RSZWdpc3RlckZvcm1Mb2FkaW5nIiwiUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0xPQURJTkciLCJvblByb2plY3RSZWdpc3RlckZvcm1FcnJvciIsIm9uUHJvamVjdFJlZ2lzdGVyRm9ybVN1Ym1pdCIsInByb2plY3RJbmZvIiwiZ2V0UHJvamVjdHMiLCJwcm9qZWN0cyIsIlJFR0lTVEVSX0ZPUk1fTE9BRElORyIsIm9uUmVnaXN0ZXJGb3JtRXJyb3IiLCJvblJlZ2lzdGVyRm9ybVN1Y2Nlc3MiLCJMT0dJTl9GT1JNX0lOUFVUX0NIQU5HRSIsIkxPR0lOX0ZPUk1fRVJST1IiLCJMT0dJTl9GT1JNX1NVQ0NFU1MiLCJSRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRSIsIlJFR0lTVEVSX0ZPUk1fRVJST1IiLCJSRUdJU1RFUl9GT1JNX1NVQ0NFU1MiLCJQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFIiwiUFJPSkVDVF9SRUdJU1RFUl9EQVRFX0NIQU5HRSIsIlBST0pFQ1RfUkVHSVNURVJfRk9STV9FUlJPUiIsIlBST0pFQ1RfUkVHSVNURVJfRk9STV9TVUNDRVNTIiwiR0VUX1BST0pFQ1RTIiwiQVVUSF9VU0VSIiwiVU5WT1RFX1VTRVIiLCJWT1RFX1VTRVIiLCJHRVRfVk9URVMiLCJSRU1PVkVfVk9URSIsImdldFZvdGVzIiwidm90ZXMiLCJyZW1vdmVWb3RlIiwidm90ZUlEIiwiYWJvdXQiLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwiUm91dGVyTGluayIsImxvZ28iLCJUZWFtSW1hZ2UiLCJDb2xsZWFndWVJbWFnZSIsIkxvYWRlciIsImNvbG9yIiwiaCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmlnaHQiLCJib3JkZXJMZWZ0IiwiYm9yZGVyVG9wIiwiYm9yZGVyQm90dG9tIiwic3R5bGVzIiwiZGlzcGxheSIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwidW5pdCIsIm1hcmdpblJpZ2h0IiwiYnJlYWtwb2ludHMiLCJ1cCIsInBhcGVyIiwibWFyZ2luVG9wIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwiYXZhdGFyIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwiZm9ybSIsInRleHRGaWVsZCIsInN1Ym1pdCIsIm9wZW4iLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0Iiwib25Gb3JtU3VibWl0IiwibG9naW4iLCJoaXN0b3J5IiwiZW1haWwiLCJwYXNzd29yZCIsImxvYWRpbmciLCJjbGFzc2VzIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDbGljayIsImFjdGlvbnMiLCJ3aXRoU3R5bGVzIiwicm9vdCIsIk1vYmlsZU5hdiIsInBvc2l0aW9uIiwiYm90dG9tIiwibGVmdCIsInpJbmRleCIsIm1lbnViYXIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImJhY2tncm91bmQiLCJncm93IiwiZmxleEdyb3ciLCJhbGlnbiIsInRpdGxlIiwic2VjdGlvbkRlc2t0b3AiLCJidXR0b24iLCJ0ZXh0RGVjb3JhdGlvbiIsImxpbmsiLCJ0ZXh0VHJhbnNmb3JtIiwiTW9iaWxlQnV0dG9uIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJidXR0b25TaW5nVXAiLCJib3JkZXJSYWRpdXMiLCJmb250V2VpZ2h0Iiwic2VjdGlvbk1vYmlsZSIsInRpdGxlTW9iaWxlIiwiTmF2QmFyIiwic2hvd01lbnUiLCJldmVudCIsIm9uTG9nb3V0Q2xpY2siLCJsb2NhdGlvbiIsInJvbGUiLCJSb3V0ZXJMaW5rTmF2IiwicGF0aG5hbWUiLCJvbkxvZ091dFRvZ2dsZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJMb2dvdXQiLCJ3aXRoUm91dGVyIiwib25Wb3RlQ2xpY2siLCJmaWx0ZXIiLCJwcm9qZWN0IiwiaWQiLCJ0b1N0cmluZyIsIm1hdGNoIiwicGFyYW1zIiwibWFwIiwiaSIsImJ1ZGdldCIsImxlbmd0aCIsInJlZHVjZSIsInRvdGFsIiwidm90ZSIsImRlc2NyaXB0aW9uIiwicHJvamVjdElkIiwib25Wb3RlIiwicHJvamVjdFJlZ2lzdGVyIiwiaG9iYnlOYW1lIiwiY29udGFpbmVyIiwic2VhcmNoVmFsdWUiLCJvcGVuZWQiLCJvbkdldFByb2plY3RzTGlzdCIsInByb2plY3RzTGlzdCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJvblNlYXJjaEJhckNoYW5nZSIsInJlZ2lzdGVyIiwidG9rZW4iLCJwYXNzd29yZDIiLCJvblJlZ2lzdGVyRm9ybVN1Ym1pdCIsIk1vYmlibGVTbmFja2JhciIsIkRlc2t0b3BTbmFja2JhciIsImljb24iLCJtZXNzYWdlIiwiU25hY2tiYXIiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJvbkNsb3NlIiwib25HZXRWb3RlcyIsIm9uVW5Wb3RlIiwibG9hZGVyIiwidm90ZXNBcnJheSIsInVuVm90ZSIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwicG9zdCIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJyZXNwb25zZSIsImNvbXBvc2VFbmhhbmNlcnMiLCJ3aW5kb3ciLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18iLCJjb21wb3NlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJvb3RSZWR1Y2VyIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXJ2aWNlV29ya2VyIiwiaW5pdGlhbFN0YXRlIiwiYWN0aW9uIiwidXNlcm5hbWUiLCJlbmREYXRlIiwiY29tYmluZVJlZHVjZXJzIiwibG9naW5SZWR1Y2VyIiwicmVnaXN0ZXJSZWR1Y2VyIiwicHJvamVjdFJlZ2lzdGVyUmVkdWNlciIsInByb2plY3RzUmVkdWNlciIsImF1dGhSZWR1Y2VyIiwidm90ZXNSZWR1Y2VyIiwiaXNMb2NhbGhvc3QiLCJCb29sZWFuIiwiaG9zdG5hbWUiLCJjb25maWciLCJyZWdpc3RlclZhbGlkU1ciLCJzd1VybCIsIm5hdmlnYXRvciIsInRoZW4iLCJyZWdpc3RyYXRpb24iLCJvbnVwZGF0ZWZvdW5kIiwiaW5zdGFsbGluZ1dvcmtlciIsImluc3RhbGxpbmciLCJvbnN0YXRlY2hhbmdlIiwiY29udHJvbGxlciIsImNvbnNvbGUiLCJsb2ciLCJvblVwZGF0ZSIsIm9uU3VjY2VzcyIsImNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyIiwiZmV0Y2giLCJjb250ZW50VHlwZSIsImdldCIsInN0YXR1cyIsImluZGV4T2YiLCJyZWFkeSIsInVucmVnaXN0ZXIiLCJyZWxvYWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic2V0VXNlclRvTFMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiY2hhbmdlVXNlckFtb3VudEluTFMiLCJyZW1vdmVVc2VyRnJvbUxTIiwicmVtb3ZlSXRlbSIsInByb2plY3RMaXN0IiwicmVzIiwiZGF0YSIsImxvZ2luSnNvbiIsInB1c2giLCJlcnIiLCJvbkxvZ091dCIsImpzb24iLCJyZWdpc3Rlckpzb24iLCJyZWdpc3RyYXRpb25Ub2tlbiIsImVycm9ycyIsImNoaWxkcmVuIiwidm90ZUlkIiwiaG9iYnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFJTUEsTTs7Ozs7Ozs7Ozs7Ozt3Q0FDZ0I7QUFDbEIsVUFBTUMsSUFBSSxHQUFHQyxzRUFBYSxFQUExQjtBQUNBRCxVQUFJLEdBQUcsS0FBS0UsS0FBTCxDQUFXQyxVQUFYLENBQXNCSCxJQUF0QixDQUFILEdBQWlDLElBQXJDO0FBQ0FBLFVBQUksR0FBRyxLQUFLRSxLQUFMLENBQVdFLGNBQVgsRUFBSCxHQUFpQyxJQUFyQztBQUNEOzs7NkJBRVE7QUFBQSxVQUNBQyxNQURBLEdBQ1MsS0FBS0gsS0FBTCxDQUFXSSxJQURwQixDQUNBRCxNQURBO0FBRVAsYUFDRSwyREFBQyw4REFBRDtBQUFlLGdCQUFRLEVBQUVFLGtDQUFBLENBQVlDO0FBQXJDLFNBQ0UsMkRBQUMsOENBQUQsUUFDRSwyREFBQyxpRUFBRCxPQURGLEVBRUUsMkRBQUMsdURBQUQsUUFDRSwyREFBQyxzREFBRDtBQUFPLGFBQUssTUFBWjtBQUFhLFlBQUksRUFBQyxHQUFsQjtBQUFzQixpQkFBUyxFQUFFQyw2REFBSUE7QUFBckMsUUFERixFQUVFLDJEQUFDLHNEQUFEO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsaUJBQVMsRUFBRUMsZ0VBQUtBO0FBQXJDLFFBRkYsRUFHRSwyREFBQyxzREFBRDtBQUFPLFlBQUksRUFBQyxXQUFaO0FBQXdCLGlCQUFTLEVBQUVDLDZFQUFZQTtBQUEvQyxRQUhGLEVBSUUsMkRBQUMsc0RBQUQ7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFB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Q0FBQ0MsTUFBRCxDQUFULENBQVI7QUFDRCxLQVBELFdBT1MsVUFBQWtRLEdBQUc7QUFBQSxhQUFHNUIsT0FBTyxDQUFDQyxHQUFSLENBQVkyQixHQUFaLENBQUg7QUFBQSxLQVBaO0FBU0EsV0FBTyxJQUFQO0FBQ0QsR0FYcUI7QUFBQSxDQUFmLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIEJyb3dzZXJSb3V0ZXIsUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtnZXRVc2VyRnJvbUxTfSBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZSc7XG5pbXBvcnQge2F1dGhVc2VyfSBmcm9tICcuL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuaW1wb3J0IHtzZXRQcm9qZWN0TGlzdH0gZnJvbSAnLi90aHVua3MvZ2V0UHJvamVjdHMnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUvSG9tZSc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyJztcbmltcG9ydCBQcm9qZWN0c0xpc3QgZnJvbSAgJy4vY29tcG9uZW50cy9Qcm9qZWN0c0xpc3QvUHJvamVjdHNMaXN0JztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4vTG9naW4nO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vY29tcG9uZW50cy9SZWdpc3Rlci9SZWdpc3Rlcic7XG5pbXBvcnQgUHJvamVjdFJlZ2lzdHJhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdFJlZ2lzdHJhdGlvbi9Qcm9qZWN0UmVnaXN0cmF0aW9uJztcbmltcG9ydCBQcm9qZWN0SW5mbyBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdEluZm8vUHJvamVjdEluZm8nO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9jb21wb25lbnRzL1VzZXIvVXNlcic7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9jb21wb25lbnRzL0Fib3V0L2Fib3V0JztcblxuXG5cbmNsYXNzIFJvdXRlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHVzZXIgPSBnZXRVc2VyRnJvbUxTKCk7XG4gICAgdXNlciA/IHRoaXMucHJvcHMub25Mb2FkQXV0aCh1c2VyKSA6IG51bGxcbiAgICB1c2VyID8gdGhpcy5wcm9wcy5vbkxvYWRQcm9qZWN0cygpIDogbnVsbFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtpc0F1dGh9ID10aGlzLnByb3BzLmF1dGhcbiAgICByZXR1cm4gKFxuICAgICAgPEJyb3dzZXJSb3V0ZXIgYmFzZW5hbWU9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9PlxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPE5hdkJhci8+XG4gICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9e0hvbWV9Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvYWJvdXQnIGNvbXBvbmVudD17QWJvdXR9Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvcHJvamVjdHMnIGNvbXBvbmVudD17UHJvamVjdHNMaXN0fS8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL2xvZ2luJyBjb21wb25lbnQ9e0xvZ2lufS8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL3JlZ2lzdGVyLzp0b2tlbicgY29tcG9uZW50PXtSZWdpc3Rlcn0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy91c2VyJyBjb21wb25lbnQ9e1VzZXJ9IC8+XG4gICAgICAgICAgICB7Lyo8Um91dGUgcGF0aD0nL2FkbWluJyAvPiovfVxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9wcm9qZWN0LzppZCcgY29tcG9uZW50PXtQcm9qZWN0SW5mb30vPlxuICAgICAgICAgICAge2lzQXV0aCA/IDxSb3V0ZSBwYXRoPScvcHJvamVjdC1yZWdpc3RyYXRpb24nIGNvbXBvbmVudD17UHJvamVjdFJlZ2lzdHJhdGlvbn0vPiA6IDxSZWRpcmVjdCB0bz0nL2xvZ2luJy8+fVxuXG4gICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvbkxvYWRBdXRoOiAodXNlcikgPT4gZGlzcGF0Y2goYXV0aFVzZXIodXNlcikpLFxuICBvbkxvYWRQcm9qZWN0czogKCkgPT4gZGlzcGF0Y2goc2V0UHJvamVjdExpc3QoKSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFJvdXRlcyk7XG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhVc2VyKHVzZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5BVVRIX1VTRVIsXG4gICAgICAgIHVzZXJcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuTE9HX09VVFxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZvdGVVc2VyKGFtb3VudCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlZPVEVfVVNFUixcbiAgICAgICAgYW1vdW50XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5Wb3RlVXNlcihhbW91bnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5VTlZPVEVfVVNFUixcbiAgICAgICAgYW1vdW50XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gb25JbnB1dENoYW5nZShlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuTE9HSU5fRk9STV9JTlBVVF9DSEFOR0UsXG4gICAgbmFtZTogZS50YXJnZXQubmFtZSxcbiAgICB2YWx1ZTogZS50YXJnZXQudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Gb3JtTG9hZGluZygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5MT0dJTl9GT1JNX0xPQURJTkdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Mb2dpbkZvcm1FcnJvcihlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLkxPR0lOX0ZPUk1fRVJST1IsXG4gICAgZXJyb3JcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Mb2dpbkZvcm1TdWNjZXNzKHVzZXIpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOnR5cGVzLkxPR0lOX0ZPUk1fU1VDQ0VTUyxcbiAgICB1c2VyXG4gIH1cbn0iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uSW5wdXRDaGFuZ2UoZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UsXG4gICAgbmFtZTogZS50YXJnZXQubmFtZSxcbiAgICB2YWx1ZTogZS50YXJnZXQudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25EYXRlQ2hhbmdlKGRhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0RBVEVfQ0hBTkdFLFxuICAgIGRhdGVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Qcm9qZWN0UmVnaXN0ZXJGb3JtTG9hZGluZygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fTE9BRElOR1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblByb2plY3RSZWdpc3RlckZvcm1FcnJvcihlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9FUlJPUixcbiAgICBlcnJvclxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblByb2plY3RSZWdpc3RlckZvcm1TdWJtaXQocHJvamVjdEluZm8pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fU1VDQ0VTUyxcbiAgICBwcm9qZWN0SW5mb1xuICB9XG59IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0cyhwcm9qZWN0cykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLkdFVF9QUk9KRUNUUyxcbiAgICBwcm9qZWN0c1xuICB9XG59IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbklucHV0Q2hhbmdlKGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5SRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRSxcbiAgICBuYW1lOiBlLnRhcmdldC5uYW1lLFxuICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkZvcm1Mb2FkaW5nKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlJFR0lTVEVSX0ZPUk1fTE9BRElOR1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblJlZ2lzdGVyRm9ybUVycm9yKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuUkVHSVNURVJfRk9STV9FUlJPUixcbiAgICBlcnJvclxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblJlZ2lzdGVyRm9ybVN1Y2Nlc3ModXNlcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6dHlwZXMuUkVHSVNURVJfRk9STV9TVUNDRVNTLFxuICAgIHVzZXJcbiAgfVxufSIsIi8vIExvZ2luIHR5cGVzXG5cbmV4cG9ydCBjb25zdCBMT0dJTl9GT1JNX0lOUFVUX0NIQU5HRSA9ICdMT0dJTl9GT1JNX0lOUFVUX0NIQU5HRSc7XG5leHBvcnQgY29uc3QgTE9HSU5fRk9STV9MT0FESU5HID0gJ0xPR0lOX0ZPUk1fTE9BRElORyc7XG5leHBvcnQgY29uc3QgTE9HSU5fRk9STV9FUlJPUiA9ICdMT0dJTl9GT1JNX0VSUk9SJztcbmV4cG9ydCBjb25zdCBMT0dJTl9GT1JNX1NVQ0NFU1MgPSAnTE9HSU5fRk9STV9TVUNDRVNTJztcblxuLy8gUmVnaXN0ZXIgdHlwZXNcblxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFID0gJ1JFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9GT1JNX0xPQURJTkcgPSAnUkVHSVNURVJfRk9STV9MT0FESU5HJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9GT1JNX0VSUk9SID0gJ1JFR0lTVEVSX0ZPUk1fRVJST1InO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZPUk1fU1VDQ0VTUyA9ICdSRUdJU1RFUl9GT1JNX1NVQ0NFU1MnO1xuXG4vLyBQcm9qZWN0IFJlZ2lzdGVyIHR5cGVzXG5cbmV4cG9ydCBjb25zdCBQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFID0gJ1BST0pFQ1RfUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UnO1xuZXhwb3J0IGNvbnN0IFBST0pFQ1RfUkVHSVNURVJfREFURV9DSEFOR0UgPSAnUFJPSkVDVF9SRUdJU1RFUl9EQVRFX0NIQU5HRSc7XG5leHBvcnQgY29uc3QgUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0xPQURJTkcgPSAnUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0xPQURJTkcnO1xuZXhwb3J0IGNvbnN0IFBST0pFQ1RfUkVHSVNURVJfRk9STV9FUlJPUiA9ICdQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fRVJST1InO1xuZXhwb3J0IGNvbnN0IFBST0pFQ1RfUkVHSVNURVJfRk9STV9TVUNDRVNTID0gJ1BST0pFQ1RfUkVHSVNURVJfRk9STV9TVUNDRVNTJztcblxuLy8gUHJvamVjdHMgdHlwZXNcblxuZXhwb3J0IGNvbnN0IEdFVF9QUk9KRUNUUyA9ICdHRVRfUFJPSkVDVFMnO1xuXG4vLyBBdXRoIHR5cGVzXG5cbmV4cG9ydCBjb25zdCBBVVRIX1VTRVIgPSAnQVVUSF9VU0VSJztcbmV4cG9ydCBjb25zdCBMT0dfT1VUID0gJ0xPR19PVVQnO1xuZXhwb3J0IGNvbnN0IFVOVk9URV9VU0VSID0gJ1VOVk9URV9VU0VSJztcbmV4cG9ydCBjb25zdCBWT1RFX1VTRVIgPSAnVk9URV9VU0VSJztcblxuLy8gVm90ZSB0eXBlc1xuXG5leHBvcnQgY29uc3QgR0VUX1ZPVEVTID0gJ0dFVF9WT1RFUyc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1ZPVEUgPSAnUkVNT1ZFX1ZPVEUnOyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vm90ZXModm90ZXMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5HRVRfVk9URVMsXG4gICAgdm90ZXNcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVm90ZSh2b3RlSUQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5SRU1PVkVfVk9URSxcbiAgICB2b3RlSURcbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vYWJvdXQuc2Nzcyc7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2VzL1BhcGVyL1BhcGVyXCI7XG5jb25zdCBhYm91dCA9ICggKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT1cInBhcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nSGVhZGluZyc+SG9iYnlDcmFmdCBUZWFtPC9kaXY+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmsgYXMgUm91dGVyTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgJy4vSG9tZS5zY3NzJztcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IHtjcmVhdGVNdWlUaGVtZSwgTXVpVGhlbWVQcm92aWRlcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBsb2dvIGZyb20gJy4uL0ltYWdlcy9GcmllbmRzLnBuZyc7XG5pbXBvcnQgVGVhbUltYWdlIGZyb20gXCIuLi9JbWFnZXMvdGVhbS5wbmdcIjtcbmltcG9ydCBDb2xsZWFndWVJbWFnZSBmcm9tIFwiLi4vSW1hZ2VzL2NvbGxlYWd1ZS5wbmdcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvZXMvUGFwZXIvUGFwZXJcIjtcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gICAgcGFsZXR0ZToge1xuICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgbWFpbjogJyNmZmZmZmYnLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxuXG5cblxuY29uc3QgSG9tZSA9ICggKSA9PiB7XG4gIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lJz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk1lc3NhZ2UtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J01lc3NhZ2UtVGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBBIE5ldyBhbmQgQmV0dGVyIHdheSB0byBlbmdhbmdlIGFuZCByZXRhaW4gZW1wbG95ZWVzXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J01lc3NhZ2UtU3ViaGVhZGluZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBhbmllcyB1c2UgSG9iYnlDcmFmdCB0byBvcmdhbml6ZSB0aGVpclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVzIGhvYmJ5IGJ1ZGdldCwgaXRzIGEgcGVyZmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJuYWwgY3JvdWQgZnVuZGluZyBzeXN0ZW0gZm9yIHlvdSAhXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM9e1wiMjVweFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy9sb2dpbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48VHlwb2dyYXBoeSBjb2xvcj1cInNlY29uZGFyeVwiID5HZXQgU3RhcnRlZDwvVHlwb2dyYXBoeT48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJJbWdcIiBzcmM9e2xvZ299IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiQ29udGFpbmVyXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udGFpbmVyLS1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtcIkNhcmRcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiSW1nLWNhcmRcIiBzcmM9e1RlYW1JbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J01lc3NhZ2UtVGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQSBOZXcgYW5kIEJldHRlciB3YXkgdG8gZW5nYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J01lc3NhZ2UtU3ViaGVhZGluZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wYW5pZXMgdXNlIEhvYmJ5Q3JhZnQgdG8gb3JnYW5pemUgdGhlaXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcGxveWVlcyBob2JieSBidWRnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua1wiPlJlYWQgTW9yZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtcIkNhcmRcIn0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIkltZy1jYXJkXCIgc3JjPXtDb2xsZWFndWVJbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J01lc3NhZ2UtVGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQSBOZXcgYW5kIEJldHRlciB3YXkgdG8gZW5nYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J01lc3NhZ2UtU3ViaGVhZGluZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wYW5pZXMgdXNlIEhvYmJ5Q3JhZnQgdG8gb3JnYW5pemUgdGhlaXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcGxveWVlcyBob2JieSBidWRnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua1wiPlJlYWQgTW9yZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJDb250YWluZXItLUJvdHRvbVwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOYXZpZ2F0aW9uXCIgPkhvYmJ5Q3JhZnQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOYXZpZ2F0aW9uXCIgPk5hdmlnYXRpb248L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOYXZpZ2F0aW9uXCIgPkxlZ2FsPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTmF2aWdhdGlvblwiID5Db250YWN0IFVzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9idWlsZC9pbWFnZXMvRnJpZW5kcy4zNjQzMTcyOS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2J1aWxkL2ltYWdlcy9jb2xsZWFndWUuZTAwOWE2OWEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9idWlsZC9pbWFnZXMvdGVhbS5hZWNjZWE4ZC5wbmdcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL2xvYWRlci5zY3NzJztcblxuY29uc3QgTG9hZGVyID0gKHtjb2xvcixoPTQwfSkgPT4gKFxuICA8ZGl2XG4gICAgc3R5bGU9e3tcbiAgICAgIHdpZHRoOmgrJ3B4JyxcbiAgICAgIGhlaWdodDpoKydweCcsXG4gICAgICBib3JkZXJSaWdodDpgJHtoLzZ9cHggc29saWQgdHJhbnNwYXJlbnRgLFxuICAgICAgYm9yZGVyTGVmdDpgJHtoLzZ9cHggc29saWQgdHJhbnNwYXJlbnRgLFxuICAgICAgYm9yZGVyVG9wOmAke2gvNn1weCBzb2xpZCAke2NvbG9yfWAsXG4gICAgICBib3JkZXJCb3R0b206YCR7aC82fXB4IHNvbGlkICR7Y29sb3J9YCxcbiAgICB9fVxuICAgIGNsYXNzTmFtZT17YExvYWRlciAke2NvbG9yfWB9Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL2xvZ2luQWN0aW9ucyc7XG5pbXBvcnQgeyBvbkZvcm1TdWJtaXQgfSBmcm9tICcuLi8uLi90aHVua3MvbG9naW5UaHVuayc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlci9Mb2FkZXInO1xuaW1wb3J0ICcuL0xvZ2luLnNjc3MnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnLi4vU25hY2tiYXIvc25hY2tiYXInO1xuaW1wb3J0IHtjcmVhdGVNdWlUaGVtZSwgTXVpVGhlbWVQcm92aWRlciwgd2l0aFN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgTG9ja091dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9ja091dGxpbmVkJztcblxuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgIG1haW46ICcjRUE3OTI1JyxcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnIzAwNDRmZicsXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBtYWluOiAnI2ZmZmZmZicsXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICAgIG1haW46IHtcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCg0MDAgKyB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzICogMildOiB7XG4gICAgICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHBhcGVyOiB7XG4gICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0LFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy51bml0ICogMn1weCAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDN9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4YCxcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQgKjgsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGF2YXRhcjoge1xuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0VBNzkyNScsXG4gICAgfSxcbiAgICBmb3JtOiB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0LFxuICAgIH0sXG4gICAgdGV4dEZpZWxkOiB7XG4gICAgICAgIGhlaWdodDogNTAsXG4gICAgfSxcbiAgICBzdWJtaXQ6IHtcbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgICAgICBoZWlnaHQ6IDUwLFxuICAgIH0sXG59KTtcblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICAgIH07XG5cbiAgICBvbkZvcm1TdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucHJvcHMub25Gb3JtU3VibWl0KHRoaXMucHJvcHMubG9naW4sIHRoaXMucHJvcHMuaGlzdG9yeSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCBlcnJvciwgbG9hZGluZyB9ID0gdGhpcy5wcm9wcy5sb2dpblxuICAgICAgICBjb25zdCB7b25JbnB1dENoYW5nZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2tPdXRsaW5lZEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yID8gPFNuYWNrYmFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uRm9ybVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRlciBjb2xvcj17JyNmZmYnfSBoPXsxNX0gLz4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJlcnJvclwiID5TaWduIEluPC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic3ViaGVhZGluZ1wifT5cbiAgICAgICAgICAgICAgICAgICAgICAgIElmIHlvdSBkb24ndCBoYXZlIGFuIGFjY291bnQsIHBsZWFzZXsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy9SZWdpc3Rlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvZ2luOiBzdGF0ZS5sb2dpblxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIG9uSW5wdXRDaGFuZ2U6IChlKSA9PiBkaXNwYXRjaChhY3Rpb25zLm9uSW5wdXRDaGFuZ2UoZSkpLFxuICAgIG9uRm9ybVN1Ym1pdDogKHVzZXIsIGhpc3RvcnkpID0+ZGlzcGF0Y2gob25Gb3JtU3VibWl0KHVzZXIsaGlzdG9yeSkpLFxufSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhTdHlsZXMoc3R5bGVzKShMb2dpbikpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtOYXZMaW5rIGFzIFJvdXRlckxpbmtOYXYsIExpbmsgYXMgUm91dGVyTGluaywgd2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IHt3aXRoU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtNdWlUaGVtZVByb3ZpZGVyLCBjcmVhdGVNdWlUaGVtZX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7b25Mb2dPdXQgYXMgTG9nb3V0fSBmcm9tICcuLi8uLi90aHVua3MvbG9nb3V0VGh1bmsnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEJvdHRvbU5hdmlnYXRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm90dG9tTmF2aWdhdGlvbic7XG5pbXBvcnQgQm90dG9tTmF2aWdhdGlvbkFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3R0b21OYXZpZ2F0aW9uQWN0aW9uJztcbmltcG9ydCBIb21lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZSc7XG5pbXBvcnQgVmlldyBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVmlld01vZHVsZSc7XG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGlicmFyeUFkZCc7XG5pbXBvcnQgUGVyc29uSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGVyc29uJztcbmltcG9ydCBQZXJzb25BZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QZXJzb25BZGQnO1xuXG5cblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6e1xuICAgICAgbWFpbjogJyNmZmZmZmYnLFxuICAgIH1cbiAgfSxcbn0pO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9LFxuXG4gIE1vYmlsZU5hdjp7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICB6SW5kZXg6IDEwMDAsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG5cblxuICBtZW51YmFyOiB7XG4gICAgcGFkZGluZ0xlZnQ6IFwiMTAlXCIsXG4gICAgcGFkZGluZ1JpZ2h0OiBcIjEwJVwiLFxuICAgIHBvc2l0aW9uOiAnc3RhdGljJyxcbiAgICBiYWNrZ3JvdW5kOiBcIiMxODE4MThcIixcblxuICB9LFxuICBncm93OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gICAgYWxpZ246ICdjZW50ZXInLFxuICB9LFxuICB0aXRsZToge1xuICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgZGlzcGxheTogJ25vbmUnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgfSxcbiAgfSxcbiAgc2VjdGlvbkRlc2t0b3A6IHtcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB9LFxuICB9LFxuICBidXR0b246IHtcbiAgICBjb2xvcjogJyNBNEE0QTQnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgIHBhZGRpbmdMZWZ0OiAyMCxcbiAgICBwYWRkaW5nUmlnaHQ6IDIwLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZSdcbiAgfSxcbiAgbGluazoge1xuICAgIGNvbG9yOiAnI0E0QTRBNCcsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAgbWFyZ2luOiAnYXV0bycsXG4gICAgcGFkZGluZzogJzZweCAyMHB4JyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXG4gIH0sXG4gIE1vYmlsZUJ1dHRvbjoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiAnI0E0QTRBNCcsXG4gICAgfSxcbiAgICBtYXJnaW46ICdhdXRvJyxcbiAgICBwYWRkaW5nTGVmdDogMjAsXG4gICAgcGFkZGluZ1JpZ2h0OiAyMCxcbiAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgfSxcbiAgYnV0dG9uU2luZ1VwOiB7XG4gICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0VBNzkyNVwiLFxuICAgIGJvcmRlclJhZGl1czogMjUsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNBMTU0MjFcIixcbiAgICB9LFxuICB9LFxuICBzZWN0aW9uTW9iaWxlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB9LFxuICB9LFxuICB0aXRsZU1vYmlsZToge1xuICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gIH0sXG59O1xuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB2YWx1ZTogMCxcbiAgICBzaG93TWVudTogZmFsc2VcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCwgdmFsdWUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZX0pO1xuICB9O1xuXG4gIG9uTG9nT3V0VG9nZ2xlID0gKCkgPT4gdGhpcy5wcm9wcy5vbkxvZ291dENsaWNrKHRoaXMucHJvcHMuaGlzdG9yeSlcblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7Y2xhc3NlcywgbG9jYXRpb259ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7aXNBdXRoLCByb2xlfSA9IHRoaXMucHJvcHMuYXV0aDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgPEFwcEJhciBjbGFzc05hbWU9e2NsYXNzZXMubWVudWJhcn0+XG4gICAgICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua05hdn0gdG89Jy8nID5cbiAgICAgICAgICAgICAgICAgIEhvYmJ5Q3JhZnRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uTW9iaWxlfT5cbiAgICAgICAgICAgICAgICAgIHtpc0F1dGggP1xuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj0nc2Vjb25kYXJ5JyBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVNb2JpbGV9IGNvbXBvbmVudD17Um91dGVyTGlua05hdn0gdG89Jy8nPlxuICAgICAgICAgICAgICAgICAgICBIb2JieUNyYWZ0XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj4gOiBudWxsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbkRlc2t0b3B9PlxuICAgICAgICAgICAgICAgICAge2lzQXV0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgPCBCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnL3Byb2plY3RzJyA9PT0gbG9jYXRpb24ucGF0aG5hbWUgPyBjbGFzc2VzLmJ1dHRvblNpbmdVcCA6IGNsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPScvcHJvamVjdHMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgRGlzY292ZXIgUHJvamVjdHNcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgPCBCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnLycgPT09IGxvY2F0aW9uLnBhdGhuYW1lID8gY2xhc3Nlcy5idXR0b25TaW5nVXAgOiBjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rTmF2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bz0nLyc+XG4gICAgICAgICAgICAgICAgICAgICAgICBEaXNjb3ZlclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPn1cbiAgICAgICAgICAgICAgICAgIHtpc0F1dGggP1xuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnL3Byb2plY3QtcmVnaXN0cmF0aW9uJyA9PT0gbG9jYXRpb24ucGF0aG5hbWUgPyBjbGFzc2VzLmJ1dHRvblNpbmdVcCA6IGNsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPScvcHJvamVjdC1yZWdpc3RyYXRpb24nPkNyZWF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgYSBQcm9qZWN0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnL3JlZ2lzdGVyJyA9PT0gbG9jYXRpb24ucGF0aG5hbWUgPyBjbGFzc2VzLmJ1dHRvblNpbmdVcCA6IGNsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPScvcmVnaXN0ZXInPlNpZ25cbiAgICAgICAgICAgICAgICAgICAgICAgIFVwIFdpdGggRW1haWw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHtpc0F1dGggP1xuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnL3VzZXInID09PSBsb2NhdGlvbi5wYXRobmFtZSA/IGNsYXNzZXMuYnV0dG9uU2luZ1VwIDogY2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua05hdn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy91c2VyJz57dGhpcy5wcm9wcy5hdXRoLmVtYWlsfSB7dGhpcy5wcm9wcy5hdXRoLmFtb3VudH3igqw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycvYWJvdXQnID09PSBsb2NhdGlvbi5wYXRobmFtZSA/IGNsYXNzZXMuYnV0dG9uU2luZ1VwIDogY2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua05hdn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFib3V0IFVzXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHtyb2xlID09PSAxID9cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGhyZWY9eycvYWRtaW4nfSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSA+QWRtaW48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge2lzQXV0aCA/XG4gICAgICAgICAgICAgICAgICAgIG51bGw6IDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25Nb2JpbGV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9J3NlY29uZGFyeScgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlTW9iaWxlfSBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9IHRvPScvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhvYmJ5Q3JhZnRcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbkRlc2t0b3B9PlxuICAgICAgICAgICAgICAgICAge2lzQXV0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgPCBCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gb25DbGljaz17dGhpcy5vbkxvZ091dFRvZ2dsZX0gdG89Jy9sb2dvdXQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgIDwgQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IGNvbXBvbmVudD17Um91dGVyTGlua30gdG89Jy9sb2dpbic+XG4gICAgICAgICAgICAgICAgICAgICAgICBTaWduIEluXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uTW9iaWxlfT5cbiAgICAgICAgICAgICAgICAgIHtpc0F1dGggP1xuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25Nb2JpbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPSdzZWNvbmRhcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZU1vYmlsZX0gb25DbGljaz17dGhpcy5vbkxvZ091dFRvZ2dsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz0nL2xvZ291dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICAgIDwvQXBwQmFyPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge2lzQXV0aCA/XG4gICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uXG4gICAgICAgICAgICAgICAgICBzaG93TGFiZWxzXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuTW9iaWxlTmF2fT5cbiAgICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIkhvbWVcIiBjb21wb25lbnQ9e1JvdXRlckxpbmt9IHRvPScvJyBpY29uPXs8SG9tZUljb24vPn0vPlxuICAgICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPVwiRGlzY292ZXJcIiAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfSB0bz0nL3Byb2plY3RzJyBpY29uPXs8Vmlldy8+fS8+XG4gICAgICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9XCJDcmVhdGVcIiBjb21wb25lbnQ9e1JvdXRlckxpbmt9IHRvPScvcHJvamVjdC1yZWdpc3RyYXRpb24nIGljb249ezxBZGRJY29uLz59Lz5cbiAgICAgICAgICAgICAgICB7cm9sZSA9PT0gMSA/IDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPVwiQWRtaW5cIiBocmVmPXsnL2FkbWluJ30gaWNvbj17PFBlcnNvbkljb24vPn0gLz4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9e3RoaXMucHJvcHMuYXV0aC5lbWFpbH0gY29tcG9uZW50PXtSb3V0ZXJMaW5rfSB0bz0nL3VzZXInIGljb249ezxQZXJzb25JY29uLz59Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvQm90dG9tTmF2aWdhdGlvbj5cbiAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvblxuICAgICAgICAgICAgICAgICAgc2hvd0xhYmVsc1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLk1vYmlsZU5hdn0+XG4gICAgICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9XCJIb21lXCIgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9IHRvPScvJyBpY29uPXs8SG9tZUljb24vPn0vPlxuICAgICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPVwiU2lnbiBVcFwiIGNvbXBvbmVudD17Um91dGVyTGlua30gdG89Jy9yZWdpc3RlcicgaWNvbj17PFBlcnNvbkFkZEljb24vPn0vPlxuICAgICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPVwiU2lnbiBJblwiIGNvbXBvbmVudD17Um91dGVyTGlua30gdG89Jy9sb2dpbicgaWNvbj17PFBlcnNvbkljb24vPn0vPlxuICAgICAgICAgICAgICA8L0JvdHRvbU5hdmlnYXRpb24+XG4gICAgICAgICAgfVxuICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5OYXZCYXIucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGF1dGg6IHN0YXRlLmF1dGhcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIG9uTG9nb3V0Q2xpY2s6IChoaXN0b3J5KSA9PiBkaXNwYXRjaChMb2dvdXQoaGlzdG9yeSkpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFJvdXRlcih3aXRoU3R5bGVzKHN0eWxlcykoTmF2QmFyKSkpOyIsImltcG9ydCBSZWFjdCwge0ZyYWdtZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7TGluayBhcyBSb3V0ZXJMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0ICcuL1Byb2plY3RJbmZvLnNjc3MnO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB7Y3JlYXRlTXVpVGhlbWUsIE11aVRoZW1lUHJvdmlkZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvZXMvVHlwb2dyYXBoeS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2VzL1BhcGVyL1BhcGVyXCI7XG5pbXBvcnQge29uVm90ZX0gZnJvbSBcIi4uLy4uL3RodW5rcy92b3RlVGh1bmtcIjtcblxuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgIG1haW46ICcjRUE3OTI1JyxcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnI2ZmZmZmZicsXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG5cblxuY29uc3QgUHJvamVjdEluZm8gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2Ftb3VudH0gPSBwcm9wcy5hdXRoO1xuICBjb25zdCB7cHJvamVjdHMsIG9uVm90ZUNsaWNrfSA9IHByb3BzO1xuICBjb25zdCBwcm9qZWN0SW5mbyA9IHByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHtcbiAgICBpZihwcm9qZWN0LmlkLnRvU3RyaW5nKCkgPT09IHByb3BzLm1hdGNoLnBhcmFtcy5pZCkge1xuICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9KS5tYXAoKHByb2plY3QsIGkpID0+IHtcbiAgICBwcm9qZWN0LmJ1ZGdldCA9IDA7XG4gICAgaWYgKHByb2plY3Qudm90ZXMubGVuZ3RoID4gMSkge1xuICAgICAgcHJvamVjdC5idWRnZXQgPSBwcm9qZWN0LnZvdGVzLnJlZHVjZSgodG90YWwsIHZvdGUpPT4ge1xuICAgICAgICByZXR1cm4gdG90YWwgKyB2b3RlLmFtb3VudDtcbiAgICAgIH0sIDApXG4gICAgfSBlbHNlIGlmKHByb2plY3Qudm90ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBwcm9qZWN0LmJ1ZGdldCA9IHByb2plY3Qudm90ZXNbMF0uYW1vdW50O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdQcm9qZWN0JyBrZXk9e2l9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RpdGxlJz57cHJvamVjdC50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2dyZXNzLWJhcic+XG4gICAgICAgICAgICAgICAgICA8ZGl2Pntwcm9qZWN0LmJ1ZGdldH0g4oKsPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nTGluZWFyUHJvZ3Jlc3NNb25leSc+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmVhclByb2dyZXNzIHZhcmlhbnQ9eydidWZmZXInfSB2YWx1ZT17KHByb2plY3QuYnVkZ2V0L3Byb2plY3QuYW1vdW50KSoxMDB9Lz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj57cHJvamVjdC5hbW91bnR9IOKCrDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1ZvdGVCdXR0b25zJz5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVm90ZUNsaWNrKHByb2plY3QuaWQsIDUpfVxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthbW91bnQgPCA1fVxuICAgICAgICAgICAgICAgICAgPjXigqw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVm90ZUNsaWNrKHByb2plY3QuaWQsIDE1KX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YW1vdW50IDwgMTV9XG4gICAgICAgICAgICAgICAgICA+MTXigqw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVm90ZUNsaWNrKHByb2plY3QuaWQsIDMwKX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YW1vdW50IDwgMzB9XG4gICAgICAgICAgICAgICAgICA+MzDigqw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nQXV0aG9yJz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkF1dGhvciBFbWFpbDogPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RleHQtLUJvbGQnPiB7cHJvamVjdC5lbWFpbH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRGVzY3JpcHRpb24nID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nQnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgdG89Jy9wcm9qZWN0cyc+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgID5CYWNrIHRvIHByb2plY3RzPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH0pXG4gIHJldHVybiAoXG4gICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nUHJvamVjdEluZm8nPlxuICAgICAgICAgICAgICB7cHJvamVjdEluZm99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvamVjdHM6IHN0YXRlLnByb2plY3RzLnByb2plY3RzLFxuICAgIGF1dGg6IHN0YXRlLmF1dGhcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIG9uVm90ZUNsaWNrOiAocHJvamVjdElkLCBhbW91bnQpID0+IGRpc3BhdGNoKG9uVm90ZShwcm9qZWN0SWQsIGFtb3VudCkpXG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFByb2plY3RJbmZvKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9Qcm9qZWN0UmVnaXN0cmF0aW9uLnNjc3MnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXIvTG9hZGVyJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFwicmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIuY3NzXCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMvcHJvamVjdFJlZ2lzdGVyQWN0aW9ucyc7XG5pbXBvcnQge29uUHJvamVjdFJlZ2lzdGVyRm9ybVN1Ym1pdH0gZnJvbSAnLi4vLi4vdGh1bmtzL3Byb2plY3RSZWdpc3RlclRodW5rJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB7Y3JlYXRlTXVpVGhlbWUsIE11aVRoZW1lUHJvdmlkZXIsIHdpdGhTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gJy4uL1NuYWNrYmFyL3NuYWNrYmFyJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjMDA0NGZmJyxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBtYWluOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBtYWluOiB7XG4gICAgd2lkdGg6ICdhdXRvJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKDQwMCArIHRoZW1lLnNwYWNpbmcudW5pdCAqIDMgKiAyKV06IHtcbiAgICAgIHdpZHRoOiA0MDAsXG4gICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgIH0sXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDJ9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weGAsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQgKjgsXG4gICAgfSxcbiAgfSxcbiAgZm9ybToge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gIH0sXG4gIHRleHRGaWVsZDoge1xuICAgIGhlaWdodDogNTAsXG4gIH0sXG4gIHN1Ym1pdDoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICBoZWlnaHQ6IDUwLFxuICB9LFxufSk7XG5cbmNsYXNzIFByb2plY3RSZWdpc3RyYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBvcGVuOiBmYWxzZSxcbiAgfTtcblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gIH07XG5cbiAgb25Gb3JtU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5vbkZvcm1TdWJtaXQodGhpcy5wcm9wcy5wcm9qZWN0UmVnaXN0ZXIsIHRoaXMucHJvcHMuaGlzdG9yeSwgdGhpcy5wcm9wcy5hdXRoLmVtYWlsKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhvYmJ5TmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgYW1vdW50LFxuICAgICAgbG9hZGluZyxcbiAgICAgIGVycm9yLFxuICAgIH0gPXRoaXMucHJvcHMucHJvamVjdFJlZ2lzdGVyO1xuICAgIGNvbnN0IHtvbklucHV0Q2hhbmdlfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIj5SZWdpc3RlciBZb3VyIEhvYmJ5XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgICB7ZXJyb3IgPyA8U25hY2tiYXJcbiAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgIC8+IDogbnVsbH1cblxuICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25Gb3JtU3VibWl0fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICAgIG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2hvYmJ5TmFtZSdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2hvYmJ5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBlbnRlciB5b3VyIGhvYmJ5IG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICByb3dzTWF4PVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxlYXNlIGRlc2NyaWJlIGl0XCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2Ftb3VudCdcbiAgICAgICAgICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW1vdW50fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxlYXNlIGVudGVyIGFtb3VudCBmb3IgeW91ciBuZWVkc1wiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRlciB0ZXh0Q29sb3I9XCJzZWNvbmRhcnlcIiBjb2xvcj17JyNmZmYnfSBoPXsxNX0gLz4gOlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiZXJyb3JcIiA+UGxhY2UgeW91ciBob2JieTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0UmVnaXN0ZXI6IHN0YXRlLnByb2plY3RSZWdpc3RlcixcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvbklucHV0Q2hhbmdlOiAoZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5vbklucHV0Q2hhbmdlKGUpKSxcbiAgb25EYXRlQ2hhbmdlOiAoZGF0ZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5vbkRhdGVDaGFuZ2UoZGF0ZSkpLFxuICBvbkZvcm1TdWJtaXQ6IChwcm9qZWN0SW5mbywgaGlzdG9yeSwgZW1haWwpPT5kaXNwYXRjaChvblByb2plY3RSZWdpc3RlckZvcm1TdWJtaXQocHJvamVjdEluZm8saGlzdG9yeSxlbWFpbCkpXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFN0eWxlcyhzdHlsZXMpKFByb2plY3RSZWdpc3RyYXRpb24pKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluayBhcyBSb3V0ZXJMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCAnLi9Qcm9qZWN0c0xpc3Quc2Nzcyc7XG5pbXBvcnQge3NldFByb2plY3RMaXN0fSBmcm9tICcuLi8uLi90aHVua3MvZ2V0UHJvamVjdHMnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7b25Wb3RlfSBmcm9tICcuLi8uLi90aHVua3Mvdm90ZVRodW5rJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBNdWlUaGVtZVByb3ZpZGVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIlxuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyL0xvYWRlcic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5cblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjMDA0NGZmJyxcbiAgICB9LFxuICB9LFxufSk7XG5cblxuY2xhc3MgUHJvamVjdHNMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuZWQ6IGZhbHNlLFxuICAgICAgc2VhcmNoVmFsdWU6ICcnXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkdldFByb2plY3RzTGlzdCgpO1xuICB9XG5cbiAgb25TZWFyY2hCYXJDaGFuZ2UgPSBlID0+IHRoaXMuc2V0U3RhdGUoe3NlYXJjaFZhbHVlOiBlLnRhcmdldC52YWx1ZX0pXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtwcm9qZWN0cywgb25Wb3RlQ2xpY2t9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7YW1vdW50fSA9IHRoaXMucHJvcHMuYXV0aDtcbiAgICBsZXQgcHJvamVjdHNMaXN0O1xuICAgIGlmIChwcm9qZWN0cy5sZW5ndGggIT09IDApIHtcbiAgICAgIHByb2plY3RzTGlzdCA9IHByb2plY3RzICYmIHByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHtcbiAgICAgICAgcHJvamVjdC5idWRnZXQgPSAwO1xuICAgICAgICBpZiAocHJvamVjdC52b3Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJvamVjdC5idWRnZXQgPSBwcm9qZWN0LnZvdGVzLnJlZHVjZSgodG90YWwsIHZvdGUpPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRvdGFsICsgdm90ZS5hbW91bnQ7XG4gICAgICAgICAgfSwgMClcbiAgICAgICAgfSBlbHNlIGlmKHByb2plY3Qudm90ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgcHJvamVjdC5idWRnZXQgPSBwcm9qZWN0LnZvdGVzWzBdLmFtb3VudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvamVjdC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgICAgICAubWFwKChwcm9qZWN0LCBpKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9IGtleT17aX0+XG4gICAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT0nbWFpbi1jYXJkJz5cbiAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPSdDYXJkLVByb2plY3QnIGNvbXBvbmVudD17Um91dGVyTGlua30gdG89e2AvcHJvamVjdC8ke3Byb2plY3QuaWR9YH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J0NhcmQtdGl0bGUnfT57cHJvamVjdC50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnQ2FyZC1kZXNjcmlwdGlvbid9Pntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiQ2FyZC1wcm9ncmVzc1wifT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57cHJvamVjdC5idWRnZXR9JDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJDYXJkLXByb2dyZXNzLWJhclwifT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluZWFyUHJvZ3Jlc3MgdmFyaWFudD17J2J1ZmZlcid9IHZhbHVlPXsocHJvamVjdC5idWRnZXQgLyBwcm9qZWN0LmFtb3VudCkgKiAxMDB9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3Byb2plY3QuYW1vdW50fSQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydWb3RlQnV0dG9ucyd9PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiA1MCwgbWFyZ2luOiA1fX0gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblZvdGVDbGljayhwcm9qZWN0LmlkLCA1KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGRpc2FibGVkPXthbW91bnQgPCA1fT414oKsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgc3R5bGU9e3tib3JkZXJSYWRpdXM6IDUwLCBtYXJnaW46IDV9fSBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVm90ZUNsaWNrKHByb2plY3QuaWQsIDE1KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGRpc2FibGVkPXthbW91bnQgPCAxNX0+MTXigqw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzdHlsZT17e2JvcmRlclJhZGl1czogNTAsIG1hcmdpbjogNX19IGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Wb3RlQ2xpY2socHJvamVjdC5pZCwgMzApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gZGlzYWJsZWQ9e2Ftb3VudCA8IDMwfT4zMOKCrDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICAgICApXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0c0xpc3QgPSA8ZGl2IGNsYXNzTmFtZT0nTG9hZGVyLWNvbnRhaW5lci1saXN0Jz5cbiAgICAgICAgPExvYWRlciBjb2xvcj17JyNFQTc5MjUnfSBoPXsxMDB9Lz5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdQcm9qZWN0c0xpc3QnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTZWFyY2hCYXJcIj5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxlYXNlIGVudGVyIGtleXdvcmRzXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2VhcmNoQmFyQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtwcm9qZWN0c0xpc3R9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb2plY3RzOiBzdGF0ZS5wcm9qZWN0cy5wcm9qZWN0cyxcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvbkdldFByb2plY3RzTGlzdDogKCkgPT4gZGlzcGF0Y2goc2V0UHJvamVjdExpc3QoKSksXG4gIG9uVm90ZUNsaWNrOiAocHJvamVjdElkLCBhbW91bnQpID0+IGRpc3BhdGNoKG9uVm90ZShwcm9qZWN0SWQsIGFtb3VudCkpXG5cbn0pO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUHJvamVjdHNMaXN0KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyL0xvYWRlcic7XG5pbXBvcnQge0xpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgJy4vUmVnaXN0ZXIuc2NzcydcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uLy4uL2FjdGlvbnMvcmVnaXN0ZXJBY3Rpb25zXCI7XG5pbXBvcnQge29uUmVnaXN0ZXJGb3JtU3VibWl0fSBmcm9tICcuLi8uLi90aHVua3MvcmVnaXN0ZXJUaHVuayc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBNdWlUaGVtZVByb3ZpZGVyLCB3aXRoU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBBY2NvdW50IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlJztcbmltcG9ydCBTbmFja2JhciBmcm9tICcuLi9TbmFja2Jhci9zbmFja2Jhcic7XG5cblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjMDA0NGZmJyxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBtYWluOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBtYWluOiB7XG4gICAgd2lkdGg6ICdhdXRvJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKDQwMCArIHRoZW1lLnNwYWNpbmcudW5pdCAqIDMgKiAyKV06IHtcbiAgICAgIHdpZHRoOiA0MDAsXG4gICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgIH0sXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDJ9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weGAsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQgKjgsXG4gICAgfSxcbiAgfSxcbiAgZm9ybToge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gIH0sXG4gIHRleHRGaWVsZDoge1xuICAgIGhlaWdodDogNTAsXG4gIH0sXG4gIHN1Ym1pdDoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICBoZWlnaHQ6IDUwLFxuICB9LFxuICBhdmF0YXI6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRUE3OTI1JyxcbiAgfSxcbn0pO1xuXG5cbmNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3BlbjogZmFsc2UsXG5cbiAgfTtcblxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gIH07XG5cblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgfTtcblxuXG4gIG9uRm9ybVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25Gb3JtU3VibWl0KHRoaXMucHJvcHMucmVnaXN0ZXIsIHRoaXMucHJvcHMuaGlzdG9yeSwgdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMudG9rZW4pO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIHBhc3N3b3JkMiwgZXJyb3IsIGxvYWRpbmcsfSA9IHRoaXMucHJvcHMucmVnaXN0ZXI7XG4gICAgY29uc3Qge29uSW5wdXRDaGFuZ2V9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfSA+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgIDxDc3NCYXNlbGluZS8+XG4gICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0gPlxuICAgICAgICAgICAgICAgIDxBY2NvdW50Lz5cbiAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiPlNpZ24gVXBcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgIHtlcnJvciA/IDxTbmFja2JhclxuICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgLz4gOiBudWxsfVxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vbkZvcm1TdWJtaXR9ICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSAgbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cblxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxlYXNlIGVudGVyIHlvdXIgZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQyJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmQyfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVwZWF0IFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyA8TG9hZGVyIGNvbG9yPXsnI2ZmZid9IGg9ezE1fSAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJlcnJvclwiID5TaWduIHVwPC9UeXBvZ3JhcGh5PiB9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzdWJoZWFkaW5nXCJ9PlxuICAgICAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD97JyAnfVxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgY29sb3I9eydzZWNvbmRhcnknfVxuICAgICAgICAgICAgICAgICAgdG89Jy9sb2dpbic+XG4gICAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHJlZ2lzdGVyOiBzdGF0ZS5yZWdpc3RlclxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgb25JbnB1dENoYW5nZTogKGUpID0+IGRpc3BhdGNoKGFjdGlvbnMub25JbnB1dENoYW5nZShlKSksXG4gIG9uRm9ybVN1Ym1pdDogKHVzZXIsIGhpc3RvcnksIHRva2VuKSA9PiBkaXNwYXRjaChvblJlZ2lzdGVyRm9ybVN1Ym1pdCh1c2VyLCBoaXN0b3J5LCB0b2tlbikpXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFN0eWxlcyhzdHlsZXMpKFJlZ2lzdGVyKSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0ICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU25hY2sgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyXCI7XG5pbXBvcnQgRXJyb3JJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXJyb3JcIjtcbmltcG9ydCB7d2l0aFN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnI2QzMmYyZicsXG4gICAgfSxcbiAgICBNb2JpYmxlU25hY2tiYXI6e1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBEZXNrdG9wU25hY2tiYXI6e1xuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICAgIGZvbnRTaXplOjIwLFxuICAgICAgICBtYXJnaW5SaWdodDogMTAsXG4gICAgfSxcbiAgICBtZXNzYWdlOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgfSxcbn0pO1xuXG4gICAgICAgIGNvbnN0IFNuYWNrYmFyICA9IChwcm9wcykgPT4ge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuRGVza3RvcFNuYWNrYmFyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3Byb3BzLm9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXsyMDAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgQ29udGVudFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiAnbWVzc2FnZS1pZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogeyByb290OiBwcm9wcy5jbGFzc2VzLnJvb3R9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9ezxzcGFuIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXJyb3JJY29uIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5pY29ufS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmVycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLk1vYmlibGVTbmFja2Jhcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U25hY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3Byb3BzLm9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17cHJvcHMub25DbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXszMDAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRlbnRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6ICdtZXNzYWdlLWlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogeyByb290OiBwcm9wcy5jbGFzc2VzLnJvb3R9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXs8c3BhbiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVycm9ySWNvbiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuaWNvbn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZXJyb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgKHdpdGhTdHlsZXMoc3R5bGVzKShTbmFja2JhcikpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL1VzZXIuc2Nzcyc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHt2b3Rlc30gZnJvbSAnLi4vLi4vdGh1bmtzL2dldFZvdGVzVGh1bmsnO1xuaW1wb3J0IHt1blZvdGV9IGZyb20gJy4uLy4uL3RodW5rcy91blZvdGVUaHVuayc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlci9Mb2FkZXInO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvZXMvUGFwZXIvUGFwZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IHtjcmVhdGVNdWlUaGVtZSwgTXVpVGhlbWVQcm92aWRlcix9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cblxuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgIG1haW46ICcjRUE3OTI1JyxcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnIzAwNDRmZicsXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG5cblxuY2xhc3MgVXNlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW5lZDogZmFsc2UsXG4gICAgICAgICAgICBzZWFyY2hWYWx1ZTogJydcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkdldFZvdGVzKClcbiAgfVxuXG4gICAgb25TZWFyY2hCYXJDaGFuZ2UgPSBlID0+IHRoaXMuc2V0U3RhdGUoe3NlYXJjaFZhbHVlOiBlLnRhcmdldC52YWx1ZX0pXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICBjb25zdCB7dm90ZXN9ID0gdGhpcy5wcm9wcy52b3RlcztcbiAgICBjb25zdCB7b25VblZvdGV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3QgbG9hZGVyID0gPGRpdiBjbGFzc05hbWU9XCJMb2FkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgPExvYWRlciBjb2xvcj17JyNFQTc5MjUnfSBoPXsxMDB9Lz5cbiAgICAgIDwvZGl2PlxuXG4gICAgY29uc3Qgdm90ZXNBcnJheSA9IHZvdGVzLm1hcCh2b3RlID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXsnbWFpbid9ID5cbiAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9eydDYXJkJ30gIGtleT17dm90ZS5pZH0gPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnQ2FyZC10aXRsZSd9Pnt2b3RlLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnQ2FyZC1Nb25leVNwZW5kJ30gPlZvdGVkIEFtb3VudDoge3ZvdGUuYW1vdW50feKCrDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25VblZvdGUodm90ZS5pZCwgdm90ZS5hbW91bnQpfT5VblZvdGU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgICApXG4gICAgfSlcbiAgICAgIHJldHVybiAoXG5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVXNlcic+XG4gICAgICAgICAgICAgICAgICB7dm90ZXMubGVuZ3RoID4gMCA/IHZvdGVzQXJyYXkgOiBsb2FkZXJ9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHZvdGVzOiBzdGF0ZS52b3Rlc1xuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgb25HZXRWb3RlczogKCkgPT4gZGlzcGF0Y2godm90ZXMoKSksXG4gIG9uVW5Wb3RlOiAoaWQsIGFtb3VudCkgPT4gZGlzcGF0Y2godW5Wb3RlKGlkLGFtb3VudCkpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVXNlcik7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtjcmVhdGVTdG9yZSwgY29tcG9zZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvcm9vdFJlZHVjZXInO1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuaW1wb3J0IFJvdXRlcyBmcm9tICcuL1JvdXRlcyc7XG5pbXBvcnQgKiBhcyBzZXJ2aWNlV29ya2VyIGZyb20gJy4vc2VydmljZVdvcmtlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nXG5cbmF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShyZXF1ZXN0ID0+IHtcbiAgcmV0dXJuIHJlcXVlc3Q7XG59KVxuXG5heGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UocmVzcG9uc2UgPT4ge1xuICByZXR1cm4gcmVzcG9uc2U7XG59KVxuXG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBjb21wb3NlRW5oYW5jZXJzKGFwcGx5TWlkZGxld2FyZSh0aHVuaykpKTtcblxuUmVhY3RET00ucmVuZGVyKDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICA8Um91dGVzLz5cbjwvUHJvdmlkZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuXG4vLyBJZiB5b3Ugd2FudCB5b3VyIGFwcCB0byB3b3JrIG9mZmxpbmUgYW5kIGxvYWQgZmFzdGVyLCB5b3UgY2FuIGNoYW5nZVxuLy8gdW5yZWdpc3RlcigpIHRvIHJlZ2lzdGVyKCkgYmVsb3cuIE5vdGUgdGhpcyBjb21lcyB3aXRoIHNvbWUgcGl0ZmFsbHMuXG4vLyBMZWFybiBtb3JlIGFib3V0IHNlcnZpY2Ugd29ya2VyczogaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQVxuc2VydmljZVdvcmtlci51bnJlZ2lzdGVyKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBlbWFpbDogJycsXG4gIGFtb3VudDogMCxcbiAgcm9sZTogbnVsbCxcbiAgaXNBdXRoOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5BVVRIX1VTRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZW1haWw6IGFjdGlvbi51c2VyLmVtYWlsLFxuICAgICAgICBhbW91bnQ6IGFjdGlvbi51c2VyLmJ1ZGdldCxcbiAgICAgICAgcm9sZTogYWN0aW9uLnVzZXIucm9sZSxcbiAgICAgICAgaXNBdXRoOiB0cnVlXG4gICAgICB9XG4gICAgY2FzZSB0eXBlcy5MT0dfT1VUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgYW1vdW50OiAwLFxuICAgICAgICByb2xlOiBudWxsLFxuICAgICAgICBpc0F1dGg6IGZhbHNlXG4gICAgICB9O1xuICAgIGNhc2UgdHlwZXMuVk9URV9VU0VSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFtb3VudDogc3RhdGUuYW1vdW50IC0gYWN0aW9uLmFtb3VudFxuICAgICAgfVxuICAgIGNhc2UgdHlwZXMuVU5WT1RFX1VTRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYW1vdW50OiBzdGF0ZS5hbW91bnQgKyBhY3Rpb24uYW1vdW50XG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZW1haWw6ICcnLFxuICBwYXNzd29yZDogJycsXG4gIGVycm9yOiAnJyxcbiAgbG9hZGluZzogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuTE9HSU5fRk9STV9JTlBVVF9DSEFOR0U6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBbYWN0aW9uLm5hbWVdOiBhY3Rpb24udmFsdWV9O1xuICAgIGNhc2UgdHlwZXMuTE9HSU5fRk9STV9MT0FESU5HOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXJyb3I6ICcnLCBsb2FkaW5nOiB0cnVlfTtcbiAgICBjYXNlIHR5cGVzLkxPR0lOX0ZPUk1fRVJST1I6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlcnJvcjogYWN0aW9uLmVycm9yLCBsb2FkaW5nOmZhbHNlfTtcbiAgICBjYXNlIHR5cGVzLkxPR0lOX0ZPUk1fU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnLCBsb2FkaW5nOmZhbHNlfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcm5hbWU6ICcnLFxuICBob2JieU5hbWU6ICcnLFxuICBlbWFpbDogJycsXG4gIGRlc2NyaXB0aW9uOiAnJyxcbiAgYW1vdW50OiAnJyxcbiAgbG9hZGluZzogZmFsc2UsXG4gIGVycm9yOiAnJ1xufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIFthY3Rpb24ubmFtZV06IGFjdGlvbi52YWx1ZX07XG4gICAgY2FzZSB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0RBVEVfQ0hBTkdFOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZW5kRGF0ZTogYWN0aW9uLmRhdGV9O1xuICAgIGNhc2UgdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0xPQURJTkc6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlfTtcbiAgICBjYXNlIHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9FUlJPUjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVycm9yOiBhY3Rpb24uZXJyb3IsIGxvYWRpbmc6ZmFsc2V9O1xuICAgIGNhc2UgdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9GT1JNX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICBob2JieU5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIGFtb3VudDogJycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgZW5kRGF0ZTogbnVsbCxcbiAgICAgICAgbG9hZGluZzpmYWxzZSxcbiAgICAgICAgZXJyb3I6Jyd9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHByb2plY3RzOiBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuR0VUX1BST0pFQ1RTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcHJvamVjdHM6IGFjdGlvbi5wcm9qZWN0c31cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcm5hbWU6ICcnLFxuICBlbWFpbDogJycsXG4gIHBhc3N3b3JkOiAnJyxcbiAgcGFzc3dvcmQyOiAnJyxcbiAgbG9hZGluZzogZmFsc2UsXG4gIGVycm9yOiAnJ1xufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5SRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIFthY3Rpb24ubmFtZV06IGFjdGlvbi52YWx1ZX07XG4gICAgY2FzZSB0eXBlcy5SRUdJU1RFUl9GT1JNX0xPQURJTkc6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlcnJvcjonJywgbG9hZGluZzogdHJ1ZX07XG4gICAgY2FzZSB0eXBlcy5SRUdJU1RFUl9GT1JNX0VSUk9SOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXJyb3I6IGFjdGlvbi5lcnJvciwgbG9hZGluZzpmYWxzZX07XG4gICAgY2FzZSB0eXBlcy5SRUdJU1RFUl9GT1JNX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCB1c2VybmFtZTogJycsIGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnLCBwYXNzd29yZDI6ICcnLCBlcnJvcjogJycsIGxvYWRpbmc6IGZhbHNlfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAgJ3JlZHV4JztcbmltcG9ydCBsb2dpblJlZHVjZXIgZnJvbSAnLi9sb2dpblJlZHVjZXInO1xuaW1wb3J0IHJlZ2lzdGVyUmVkdWNlciBmcm9tICcuL3JlZ2lzdGVyUmVkdWNlcic7XG5pbXBvcnQgcHJvamVjdFJlZ2lzdGVyUmVkdWNlciBmcm9tICcuL3Byb2plY3RSZWdpc3RlclJlZHVjZXInO1xuaW1wb3J0IHByb2plY3RzUmVkdWNlciBmcm9tICcuL3Byb2plY3RzUmVkdWNlcic7XG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSAnLi9hdXRoUmVkdWNlcic7XG5pbXBvcnQgdm90ZXNSZWR1Y2VyIGZyb20gJy4vdm90ZXNSZWR1Y2VyJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBsb2dpbjogbG9naW5SZWR1Y2VyLFxuICByZWdpc3RlcjogcmVnaXN0ZXJSZWR1Y2VyLFxuICBwcm9qZWN0UmVnaXN0ZXI6IHByb2plY3RSZWdpc3RlclJlZHVjZXIsXG4gIHByb2plY3RzOiBwcm9qZWN0c1JlZHVjZXIsXG4gIGF1dGg6IGF1dGhSZWR1Y2VyLFxuICB2b3Rlczogdm90ZXNSZWR1Y2VyXG59KVxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHZvdGVzOiBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLkdFVF9WT1RFUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHZvdGVzOiBhY3Rpb24udm90ZXN9XG4gICAgY2FzZSB0eXBlcy5SRU1PVkVfVk9URTpcbiAgICAgIGNvbnN0IHZvdGVzID0gc3RhdGUudm90ZXMuZmlsdGVyKHZvdGUgPT4gdm90ZS5pZCAhPT0gYWN0aW9uLnZvdGVJRClcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHZvdGVzfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCIvLyBUaGlzIG9wdGlvbmFsIGNvZGUgaXMgdXNlZCB0byByZWdpc3RlciBhIHNlcnZpY2Ugd29ya2VyLlxuLy8gcmVnaXN0ZXIoKSBpcyBub3QgY2FsbGVkIGJ5IGRlZmF1bHQuXG5cbi8vIFRoaXMgbGV0cyB0aGUgYXBwIGxvYWQgZmFzdGVyIG9uIHN1YnNlcXVlbnQgdmlzaXRzIGluIHByb2R1Y3Rpb24sIGFuZCBnaXZlc1xuLy8gaXQgb2ZmbGluZSBjYXBhYmlsaXRpZXMuIEhvd2V2ZXIsIGl0IGFsc28gbWVhbnMgdGhhdCBkZXZlbG9wZXJzIChhbmQgdXNlcnMpXG4vLyB3aWxsIG9ubHkgc2VlIGRlcGxveWVkIHVwZGF0ZXMgb24gc3Vic2VxdWVudCB2aXNpdHMgdG8gYSBwYWdlLCBhZnRlciBhbGwgdGhlXG4vLyBleGlzdGluZyB0YWJzIG9wZW4gb24gdGhlIHBhZ2UgaGF2ZSBiZWVuIGNsb3NlZCwgc2luY2UgcHJldmlvdXNseSBjYWNoZWRcbi8vIHJlc291cmNlcyBhcmUgdXBkYXRlZCBpbiB0aGUgYmFja2dyb3VuZC5cblxuLy8gVG8gbGVhcm4gbW9yZSBhYm91dCB0aGUgYmVuZWZpdHMgb2YgdGhpcyBtb2RlbCBhbmQgaW5zdHJ1Y3Rpb25zIG9uIGhvdyB0b1xuLy8gb3B0LWluLCByZWFkIGh0dHBzOi8vYml0Lmx5L0NSQS1QV0FcblxuY29uc3QgaXNMb2NhbGhvc3QgPSBCb29sZWFuKFxuICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnIHx8XG4gICAgLy8gWzo6MV0gaXMgdGhlIElQdjYgbG9jYWxob3N0IGFkZHJlc3MuXG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnWzo6MV0nIHx8XG4gICAgLy8gMTI3LjAuMC4xLzggaXMgY29uc2lkZXJlZCBsb2NhbGhvc3QgZm9yIElQdjQuXG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLm1hdGNoKFxuICAgICAgL14xMjcoPzpcXC4oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pKXszfSQvXG4gICAgKVxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKGNvbmZpZykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgLy8gVGhlIFVSTCBjb25zdHJ1Y3RvciBpcyBhdmFpbGFibGUgaW4gYWxsIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBTVy5cbiAgICBjb25zdCBwdWJsaWNVcmwgPSBuZXcgVVJMKHByb2Nlc3MuZW52LlBVQkxJQ19VUkwsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICBpZiAocHVibGljVXJsLm9yaWdpbiAhPT0gd2luZG93LmxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgLy8gT3VyIHNlcnZpY2Ugd29ya2VyIHdvbid0IHdvcmsgaWYgUFVCTElDX1VSTCBpcyBvbiBhIGRpZmZlcmVudCBvcmlnaW5cbiAgICAgIC8vIGZyb20gd2hhdCBvdXIgcGFnZSBpcyBzZXJ2ZWQgb24uIFRoaXMgbWlnaHQgaGFwcGVuIGlmIGEgQ0ROIGlzIHVzZWQgdG9cbiAgICAgIC8vIHNlcnZlIGFzc2V0czsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9jcmVhdGUtcmVhY3QtYXBwL2lzc3Vlcy8yMzc0XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBzd1VybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L3NlcnZpY2Utd29ya2VyLmpzYDtcblxuICAgICAgaWYgKGlzTG9jYWxob3N0KSB7XG4gICAgICAgIC8vIFRoaXMgaXMgcnVubmluZyBvbiBsb2NhbGhvc3QuIExldCdzIGNoZWNrIGlmIGEgc2VydmljZSB3b3JrZXIgc3RpbGwgZXhpc3RzIG9yIG5vdC5cbiAgICAgICAgY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIoc3dVcmwsIGNvbmZpZyk7XG5cbiAgICAgICAgLy8gQWRkIHNvbWUgYWRkaXRpb25hbCBsb2dnaW5nIHRvIGxvY2FsaG9zdCwgcG9pbnRpbmcgZGV2ZWxvcGVycyB0byB0aGVcbiAgICAgICAgLy8gc2VydmljZSB3b3JrZXIvUFdBIGRvY3VtZW50YXRpb24uXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgJ1RoaXMgd2ViIGFwcCBpcyBiZWluZyBzZXJ2ZWQgY2FjaGUtZmlyc3QgYnkgYSBzZXJ2aWNlICcgK1xuICAgICAgICAgICAgICAnd29ya2VyLiBUbyBsZWFybiBtb3JlLCB2aXNpdCBodHRwczovL2JpdC5seS9DUkEtUFdBJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSXMgbm90IGxvY2FsaG9zdC4gSnVzdCByZWdpc3RlciBzZXJ2aWNlIHdvcmtlclxuICAgICAgICByZWdpc3RlclZhbGlkU1coc3dVcmwsIGNvbmZpZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpIHtcbiAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbiAgICAucmVnaXN0ZXIoc3dVcmwpXG4gICAgLnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgIHJlZ2lzdHJhdGlvbi5vbnVwZGF0ZWZvdW5kID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnN0YWxsaW5nV29ya2VyID0gcmVnaXN0cmF0aW9uLmluc3RhbGxpbmc7XG4gICAgICAgIGlmIChpbnN0YWxsaW5nV29ya2VyID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFsbGluZ1dvcmtlci5vbnN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChpbnN0YWxsaW5nV29ya2VyLnN0YXRlID09PSAnaW5zdGFsbGVkJykge1xuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHVwZGF0ZWQgcHJlY2FjaGVkIGNvbnRlbnQgaGFzIGJlZW4gZmV0Y2hlZCxcbiAgICAgICAgICAgICAgLy8gYnV0IHRoZSBwcmV2aW91cyBzZXJ2aWNlIHdvcmtlciB3aWxsIHN0aWxsIHNlcnZlIHRoZSBvbGRlclxuICAgICAgICAgICAgICAvLyBjb250ZW50IHVudGlsIGFsbCBjbGllbnQgdGFicyBhcmUgY2xvc2VkLlxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAnTmV3IGNvbnRlbnQgaXMgYXZhaWxhYmxlIGFuZCB3aWxsIGJlIHVzZWQgd2hlbiBhbGwgJyArXG4gICAgICAgICAgICAgICAgICAndGFicyBmb3IgdGhpcyBwYWdlIGFyZSBjbG9zZWQuIFNlZSBodHRwczovL2JpdC5seS9DUkEtUFdBLidcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAvLyBFeGVjdXRlIGNhbGxiYWNrXG4gICAgICAgICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLm9uVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLm9uVXBkYXRlKHJlZ2lzdHJhdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIGV2ZXJ5dGhpbmcgaGFzIGJlZW4gcHJlY2FjaGVkLlxuICAgICAgICAgICAgICAvLyBJdCdzIHRoZSBwZXJmZWN0IHRpbWUgdG8gZGlzcGxheSBhXG4gICAgICAgICAgICAgIC8vIFwiQ29udGVudCBpcyBjYWNoZWQgZm9yIG9mZmxpbmUgdXNlLlwiIG1lc3NhZ2UuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb250ZW50IGlzIGNhY2hlZCBmb3Igb2ZmbGluZSB1c2UuJyk7XG5cbiAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBjYWxsYmFja1xuICAgICAgICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5vblN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBjb25maWcub25TdWNjZXNzKHJlZ2lzdHJhdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb246JywgZXJyb3IpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja1ZhbGlkU2VydmljZVdvcmtlcihzd1VybCwgY29uZmlnKSB7XG4gIC8vIENoZWNrIGlmIHRoZSBzZXJ2aWNlIHdvcmtlciBjYW4gYmUgZm91bmQuIElmIGl0IGNhbid0IHJlbG9hZCB0aGUgcGFnZS5cbiAgZmV0Y2goc3dVcmwpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gRW5zdXJlIHNlcnZpY2Ugd29ya2VyIGV4aXN0cywgYW5kIHRoYXQgd2UgcmVhbGx5IGFyZSBnZXR0aW5nIGEgSlMgZmlsZS5cbiAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xuICAgICAgaWYgKFxuICAgICAgICByZXNwb25zZS5zdGF0dXMgPT09IDQwNCB8fFxuICAgICAgICAoY29udGVudFR5cGUgIT0gbnVsbCAmJiBjb250ZW50VHlwZS5pbmRleE9mKCdqYXZhc2NyaXB0JykgPT09IC0xKVxuICAgICAgKSB7XG4gICAgICAgIC8vIE5vIHNlcnZpY2Ugd29ya2VyIGZvdW5kLiBQcm9iYWJseSBhIGRpZmZlcmVudCBhcHAuIFJlbG9hZCB0aGUgcGFnZS5cbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2VydmljZSB3b3JrZXIgZm91bmQuIFByb2NlZWQgYXMgbm9ybWFsLlxuICAgICAgICByZWdpc3RlclZhbGlkU1coc3dVcmwsIGNvbmZpZyk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICdObyBpbnRlcm5ldCBjb25uZWN0aW9uIGZvdW5kLiBBcHAgaXMgcnVubmluZyBpbiBvZmZsaW5lIG1vZGUuJ1xuICAgICAgKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXIoKSB7XG4gIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgcmVnaXN0cmF0aW9uLnVucmVnaXN0ZXIoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJGcm9tTFMoKSB7XG4gIGNvbnN0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaG9iYnlDcmFmdC11c2VyJylcbiAgcmV0dXJuIEpTT04ucGFyc2UodXNlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRVc2VyVG9MUyh1c2VyKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdob2JieUNyYWZ0LXVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcbiAgcmV0dXJuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVXNlckFtb3VudEluTFMoYW1vdW50KSB7XG4gIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdob2JieUNyYWZ0LXVzZXInKSlcbiAgdXNlci5idWRnZXQgPSB1c2VyLmJ1ZGdldCAtIGFtb3VudDtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hvYmJ5Q3JhZnQtdXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxuICByZXR1cm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVVc2VyRnJvbUxTKCkge1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaG9iYnlDcmFmdC11c2VyJylcbiAgcmV0dXJuO1xufVxuXG4iLCJpbXBvcnQge2dldFByb2plY3RzfSBmcm9tICcuLi9hY3Rpb25zL3Byb2plY3RzQWN0aW9uJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGNvbnN0IHNldFByb2plY3RMaXN0ID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gYXhpb3NcbiAgICAgIC5nZXQoJy9hcGkvaG9iYmllcycpXG4gICAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goZ2V0UHJvamVjdHMocmVzLmRhdGEpKSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIHJldHVybiBwcm9qZWN0TGlzdDtcbn0iLCJpbXBvcnQge2dldFZvdGVzfSBmcm9tICcuLi9hY3Rpb25zL3ZvdGVzQWN0aW9ucyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3Qgdm90ZXMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgYXhpb3MuZ2V0KCcvYXBpL3VzZXIvdm90ZXMnKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZ2V0Vm90ZXMocmVzLmRhdGEpKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIHJldHVybiBudWxsO1xufSIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9sb2dpbkFjdGlvbnMnO1xuaW1wb3J0IHthdXRoVXNlcn0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtzZXRVc2VyVG9MU30gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlJztcblxuZXhwb3J0IGNvbnN0IG9uRm9ybVN1Ym1pdCA9ICh1c2VyLCBoaXN0b3J5KSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goYWN0aW9ucy5vbkZvcm1Mb2FkaW5nKCkpO1xuICBpZih1c2VyLmVtYWlsID09PSAnJyB8fCB1c2VyLnBhc3N3b3JkID09PSAnJyApIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9ucy5vbkxvZ2luRm9ybUVycm9yKCdQbGVhc2UgZmlsbCBmaWVsZHMnKSk7XG4gIH1cbiAgY29uc3QgbG9naW5Kc29uID0gXHR7XG4gICAgICBcInNlY3VyaXR5XCI6IHtcbiAgICAgICAgICBcImNyZWRlbnRpYWxzXCI6IHtcbiAgICAgICAgICAgICAgXCJlbWFpbFwiOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICBcInBhc3N3b3JkXCI6IHVzZXIucGFzc3dvcmRcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgYXhpb3MucG9zdCgnL2FwaS9zZWN1cml0eS9sb2dpbicsIGxvZ2luSnNvbilcbiAgICAgIC50aGVuKHJlcyA9PntcbiAgICAgICAgc2V0VXNlclRvTFMocmVzLmRhdGEpXG4gICAgICAgIGRpc3BhdGNoKGF1dGhVc2VyKHJlcy5kYXRhKSlcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5vbkxvZ2luRm9ybVN1Y2Nlc3ModXNlcikpXG4gICAgICAgIGhpc3RvcnkucHVzaCgnLycpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5vbkxvZ2luRm9ybUVycm9yKGVyci5yZXNwb25zZS5kYXRhLmVycm9yID8gZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3IgOlxuICAgICAgICAgICdTZXJ2ZXIgRXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXInKSlcbiAgICAgICAgfVxuICAgICAgKVxufSIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XG5pbXBvcnQge3JlbW92ZVVzZXJGcm9tTFN9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZSdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCBvbkxvZ091dCA9IChoaXN0b3J5KSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgYXhpb3MuZ2V0KCcvYXBpL3NlY3VyaXR5L2xvZ291dCcpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICByZW1vdmVVc2VyRnJvbUxTKClcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5sb2dvdXQoKSlcbiAgICAgICAgaGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICByZXR1cm4gbnVsbDtcbn0iLCJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvcHJvamVjdFJlZ2lzdGVyQWN0aW9ucyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3Qgb25Qcm9qZWN0UmVnaXN0ZXJGb3JtU3VibWl0ID0gKHByb2plY3RJbmZvLCBoaXN0b3J5LCBlbWFpbCkgPT4gKGRpc3BhdGNoKSA9PiB7XG5cbiAgZGlzcGF0Y2goYWN0aW9ucy5vblByb2plY3RSZWdpc3RlckZvcm1Mb2FkaW5nKCkpO1xuICBpZihwcm9qZWN0SW5mby5ob2JieU5hbWUgPT09ICcnIHx8XG4gIHByb2plY3RJbmZvLmRlc2NyaXB0aW9uID09PSAnJyB8fCBwcm9qZWN0SW5mby5hbW91bnQgPT09ICcnICkge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25zLm9uUHJvamVjdFJlZ2lzdGVyRm9ybUVycm9yKCdQbGVhc2UgZmlsbCBhbGwgZmllbGRzJykpXG4gIH1cblxuICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgIFwidGl0bGVcIjogcHJvamVjdEluZm8uaG9iYnlOYW1lLFxuICAgIFwiZGVzY3JpcHRpb25cIjogcHJvamVjdEluZm8uZGVzY3JpcHRpb24sXG4gICAgXCJhbW91bnRcIjogcHJvamVjdEluZm8uYW1vdW50LFxuICAgIFwiZW1haWxcIjogZW1haWxcbiAgfSk7XG4gIGF4aW9zXG4gICAgICAucG9zdCgnL2FwaS9ob2JieScsanNvbilcbiAgICAudGhlbihyZXM9PntcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMub25Qcm9qZWN0UmVnaXN0ZXJGb3JtU3VibWl0KHJlcykpO1xuICAgICAgaGlzdG9yeS5wdXNoKCcvcHJvamVjdHMnKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBkaXNwYXRjaChhY3Rpb25zLm9uUHJvamVjdFJlZ2lzdGVyRm9ybUVycm9yKCdTZXJ2ZXIgZXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJykpXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9KVxuXG59IiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3JlZ2lzdGVyQWN0aW9ucyc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge3NldFVzZXJUb0xTfSBmcm9tIFwiLi4vc3RvcmFnZS9zdG9yYWdlXCI7XG5pbXBvcnQge2F1dGhVc2VyfSBmcm9tIFwiLi4vYWN0aW9ucy9hdXRoQWN0aW9uc1wiO1xuXG5leHBvcnQgY29uc3Qgb25SZWdpc3RlckZvcm1TdWJtaXQgPSAodXNlciwgaGlzdG9yeSx0b2tlbikgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKGFjdGlvbnMub25Gb3JtTG9hZGluZygpKTtcbiAgaWYodXNlci5lbWFpbCA9PT0gJycgfHwgdXNlci5wYXNzd29yZCA9PT0gJycgfHwgdXNlci5wYXNzd29yZDIgPT09ICcnKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbnMub25SZWdpc3RlckZvcm1FcnJvcignUGxlYXNlIGZpbGwgZmllbGRzJykpO1xuICB9XG4gIGlmKHVzZXIucGFzc3dvcmQgIT09IHVzZXIucGFzc3dvcmQyKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbnMub25SZWdpc3RlckZvcm1FcnJvcignUGFzc3dvcmRzIGRvZXNuXFwndCBtYXRjaCcpKTtcbiAgfVxuICBpZih1c2VyLnBhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9ucy5vblJlZ2lzdGVyRm9ybUVycm9yKCdQYXNzd29yZCBsZW5ndGggbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcicpKTtcbiAgfVxuICBjb25zdCByZWdpc3Rlckpzb24gPSB7XG4gICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXG4gICAgcmVnaXN0cmF0aW9uVG9rZW46IHRva2VuXG4gIH07XG4gIGNvbnNvbGUubG9nKHJlZ2lzdGVySnNvbilcbiAgYXhpb3MucG9zdCgnL2FwaS9zZWN1cml0eS9yZWdpc3RlcicsIHJlZ2lzdGVySnNvbilcbiAgICAgIC50aGVuKHJlcyA9PntcbiAgICAgICAgc2V0VXNlclRvTFMocmVzLmRhdGEpXG4gICAgICAgIGRpc3BhdGNoKGF1dGhVc2VyKHJlcy5kYXRhKSlcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5vblJlZ2lzdGVyRm9ybVN1Y2Nlc3MocmVnaXN0ZXJKc29uKSlcbiAgICAgICAgaGlzdG9yeS5wdXNoKCcvJylcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbnMub25SZWdpc3RlckZvcm1FcnJvcihlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMuY2hpbGRyZW4uZW1haWwuZXJyb3JzID9cbiAgICAgICAgICAgICAgICBlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMuY2hpbGRyZW4uZW1haWwuZXJyb3JzXG4gICAgICAgICAgICAgICAgOiAnU2VydmVyIGVycm9yLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpKVxuICAgICAgICAgIH1cbiAgICAgIClcblxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge3JlbW92ZVZvdGV9IGZyb20gJy4uL2FjdGlvbnMvdm90ZXNBY3Rpb25zJztcbmltcG9ydCB7dW5Wb3RlVXNlcn0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCB1blZvdGUgPSAodm90ZUlkLCBhbW91bnQpID0+IChkaXNwYXRjaCkgPT4ge1xuICBheGlvcy5kZWxldGUoYC9hcGkvdm90ZS8ke3ZvdGVJZH1gKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgZGlzcGF0Y2gocmVtb3ZlVm90ZSh2b3RlSWQpKTtcbiAgICAgICAgZGlzcGF0Y2godW5Wb3RlVXNlcihhbW91bnQpKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIHJldHVybiBudWxsO1xufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge3NldFByb2plY3RMaXN0fSBmcm9tICcuL2dldFByb2plY3RzJztcbmltcG9ydCB7Y2hhbmdlVXNlckFtb3VudEluTFN9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZSdcbmltcG9ydCB7dm90ZVVzZXJ9IGZyb20gJy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuXG5leHBvcnQgY29uc3Qgb25Wb3RlID0gKHByb2plY3RJZCwgYW1vdW50KSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgYXhpb3MucG9zdCgnL2FwaS92b3RlJywge1xuICAgIGhvYmJ5OiBwcm9qZWN0SWQsXG4gICAgYW1vdW50OiBhbW91bnRcbiAgfSkudGhlbihyZXM9PntcbiAgICBjaGFuZ2VVc2VyQW1vdW50SW5MUyhhbW91bnQpO1xuICAgIGRpc3BhdGNoKHNldFByb2plY3RMaXN0KCkpO1xuICAgIGRpc3BhdGNoKHZvdGVVc2VyKGFtb3VudCkpO1xuICB9KS5jYXRjaChlcnI9PiBjb25zb2xlLmxvZyhlcnIpKVxuXG4gIHJldHVybiBudWxsO1xufSJdLCJzb3VyY2VSb290IjoiIn0=