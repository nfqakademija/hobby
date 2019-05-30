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
/* harmony import */ var _Images_Friends_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Images/Friends.png */ "./assets/js/components/Images/Friends.png");
/* harmony import */ var _Images_Friends_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Images_Friends_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Images_team_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Images/team.png */ "./assets/js/components/Images/team.png");
/* harmony import */ var _Images_team_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Images_team_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Images_colleague_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Images/colleague.png */ "./assets/js/components/Images/colleague.png");
/* harmony import */ var _Images_colleague_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Images_colleague_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_es_Paper_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/es/Paper/Paper */ "./node_modules/@material-ui/core/es/Paper/Paper.js");
/* harmony import */ var _material_ui_core_es_Link_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/es/Link/Link */ "./node_modules/@material-ui/core/es/Link/Link.js");











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
    className: "Cards--inline"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_es_Paper_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "Card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "Img-card",
    src: _Images_team_png__WEBPACK_IMPORTED_MODULE_7___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Message-Title"
  }, "A New and Better way to engange"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Message-Subheading"
  }, "Companies use HobbyCraft to organize their employees hobby budget"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_es_Link_Link__WEBPACK_IMPORTED_MODULE_10__["default"], null, "Read More")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_es_Paper_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "Card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "Img-card",
    src: _Images_colleague_png__WEBPACK_IMPORTED_MODULE_8___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Message-Title"
  }, "A New and Better way to engange"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Message-Subheading"
  }, "Companies use HobbyCraft to organize their employees hobby budget"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_es_Link_Link__WEBPACK_IMPORTED_MODULE_10__["default"], null, "Read More")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvUm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL2xvZ2luQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy9wcm9qZWN0UmVnaXN0ZXJBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3Byb2plY3RzQWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3JlZ2lzdGVyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy92b3Rlc0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWJvdXQvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWJvdXQvYWJvdXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS9Ib21lLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSW1hZ2VzL0ZyaWVuZHMucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ltYWdlcy9jb2xsZWFndWUucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ltYWdlcy90ZWFtLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2FkZXIvTG9hZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvYWRlci9sb2FkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL05hdkJhci9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdEluZm8vUHJvamVjdEluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdEluZm8vUHJvamVjdEluZm8uc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qcm9qZWN0UmVnaXN0cmF0aW9uL1Byb2plY3RSZWdpc3RyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdFJlZ2lzdHJhdGlvbi9Qcm9qZWN0UmVnaXN0cmF0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdHNMaXN0L1Byb2plY3RzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qcm9qZWN0c0xpc3QvUHJvamVjdHNMaXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUmVnaXN0ZXIvUmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUmVnaXN0ZXIvUmVnaXN0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TbmFja2Jhci9zbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Vc2VyL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVXNlci9Vc2VyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy9hdXRoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvbG9naW5SZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy9wcm9qZWN0UmVnaXN0ZXJSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy9wcm9qZWN0c1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL3JlZ2lzdGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvcm9vdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL3ZvdGVzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2VydmljZVdvcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3RvcmFnZS9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3MvZ2V0UHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RodW5rcy9nZXRWb3Rlc1RodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3MvbG9naW5UaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL2xvZ291dFRodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3MvcHJvamVjdFJlZ2lzdGVyVGh1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RodW5rcy9yZWdpc3RlclRodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3MvdW5Wb3RlVGh1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RodW5rcy92b3RlVGh1bmsuanMiXSwibmFtZXMiOlsiUm91dGVzIiwidXNlciIsImdldFVzZXJGcm9tTFMiLCJwcm9wcyIsIm9uTG9hZEF1dGgiLCJvbkxvYWRQcm9qZWN0cyIsImlzQXV0aCIsImF1dGgiLCJwcm9jZXNzIiwiUFVCTElDX1VSTCIsIkhvbWUiLCJBYm91dCIsIlByb2plY3RzTGlzdCIsIkxvZ2luIiwiUmVnaXN0ZXIiLCJVc2VyIiwiUHJvamVjdEluZm8iLCJQcm9qZWN0UmVnaXN0cmF0aW9uIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImF1dGhVc2VyIiwic2V0UHJvamVjdExpc3QiLCJjb25uZWN0IiwidHlwZSIsInR5cGVzIiwibG9nb3V0IiwiTE9HX09VVCIsInZvdGVVc2VyIiwiYW1vdW50Iiwib25JbnB1dENoYW5nZSIsImUiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJvbkZvcm1Mb2FkaW5nIiwiTE9HSU5fRk9STV9MT0FESU5HIiwib25Mb2dpbkZvcm1FcnJvciIsImVycm9yIiwib25Mb2dpbkZvcm1TdWNjZXNzIiwib25EYXRlQ2hhbmdlIiwiZGF0ZSIsIm9uUHJvamVjdFJlZ2lzdGVyRm9ybUxvYWRpbmciLCJQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fTE9BRElORyIsIm9uUHJvamVjdFJlZ2lzdGVyRm9ybUVycm9yIiwib25Qcm9qZWN0UmVnaXN0ZXJGb3JtU3VibWl0IiwicHJvamVjdEluZm8iLCJnZXRQcm9qZWN0cyIsInByb2plY3RzIiwiUkVHSVNURVJfRk9STV9MT0FESU5HIiwib25SZWdpc3RlckZvcm1FcnJvciIsIm9uUmVnaXN0ZXJGb3JtU3VjY2VzcyIsIkxPR0lOX0ZPUk1fSU5QVVRfQ0hBTkdFIiwiTE9HSU5fRk9STV9FUlJPUiIsIkxPR0lOX0ZPUk1fU1VDQ0VTUyIsIlJFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFIiwiUkVHSVNURVJfRk9STV9FUlJPUiIsIlJFR0lTVEVSX0ZPUk1fU1VDQ0VTUyIsIlBST0pFQ1RfUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UiLCJQUk9KRUNUX1JFR0lTVEVSX0RBVEVfQ0hBTkdFIiwiUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0VSUk9SIiwiUFJPSkVDVF9SRUdJU1RFUl9GT1JNX1NVQ0NFU1MiLCJHRVRfUFJPSkVDVFMiLCJBVVRIX1VTRVIiLCJWT1RFX1VTRVIiLCJHRVRfVk9URVMiLCJSRU1PVkVfVk9URSIsImdldFZvdGVzIiwidm90ZXMiLCJyZW1vdmVWb3RlIiwidm90ZUlEIiwiYWJvdXQiLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwiUm91dGVyTGluayIsImxvZ28iLCJUZWFtSW1hZ2UiLCJDb2xsZWFndWVJbWFnZSIsIkxvYWRlciIsImNvbG9yIiwiaCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmlnaHQiLCJib3JkZXJMZWZ0IiwiYm9yZGVyVG9wIiwiYm9yZGVyQm90dG9tIiwic3R5bGVzIiwiZGlzcGxheSIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwidW5pdCIsIm1hcmdpblJpZ2h0IiwiYnJlYWtwb2ludHMiLCJ1cCIsInBhcGVyIiwibWFyZ2luVG9wIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwiYXZhdGFyIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwiZm9ybSIsInRleHRGaWVsZCIsInN1Ym1pdCIsIm9wZW4iLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0Iiwib25Gb3JtU3VibWl0IiwibG9naW4iLCJoaXN0b3J5IiwiZW1haWwiLCJwYXNzd29yZCIsImxvYWRpbmciLCJjbGFzc2VzIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDbGljayIsImFjdGlvbnMiLCJ3aXRoU3R5bGVzIiwicm9vdCIsIk1vYmlsZU5hdiIsInBvc2l0aW9uIiwiYm90dG9tIiwibGVmdCIsInpJbmRleCIsIm1lbnViYXIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImJhY2tncm91bmQiLCJncm93IiwiZmxleEdyb3ciLCJhbGlnbiIsInRpdGxlIiwic2VjdGlvbkRlc2t0b3AiLCJidXR0b24iLCJ0ZXh0RGVjb3JhdGlvbiIsImxpbmsiLCJ0ZXh0VHJhbnNmb3JtIiwiTW9iaWxlQnV0dG9uIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJidXR0b25TaW5nVXAiLCJib3JkZXJSYWRpdXMiLCJmb250V2VpZ2h0Iiwic2VjdGlvbk1vYmlsZSIsInRpdGxlTW9iaWxlIiwiTmF2QmFyIiwic2hvd01lbnUiLCJldmVudCIsIm9uTG9nb3V0Q2xpY2siLCJsb2NhdGlvbiIsInJvbGUiLCJSb3V0ZXJMaW5rTmF2IiwicGF0aG5hbWUiLCJvbkxvZ091dFRvZ2dsZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJMb2dvdXQiLCJ3aXRoUm91dGVyIiwib25Wb3RlQ2xpY2siLCJmaWx0ZXIiLCJwcm9qZWN0IiwiaWQiLCJ0b1N0cmluZyIsIm1hdGNoIiwicGFyYW1zIiwibWFwIiwiaSIsImJ1ZGdldCIsImxlbmd0aCIsInJlZHVjZSIsInRvdGFsIiwidm90ZSIsImRlc2NyaXB0aW9uIiwicHJvamVjdElkIiwib25Wb3RlIiwicHJvamVjdFJlZ2lzdGVyIiwiaG9iYnlOYW1lIiwiY29udGFpbmVyIiwic2VhcmNoVmFsdWUiLCJvcGVuZWQiLCJvbkdldFByb2plY3RzTGlzdCIsInByb2plY3RzTGlzdCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJvblNlYXJjaEJhckNoYW5nZSIsInJlZ2lzdGVyIiwicGFzc3dvcmQyIiwib25SZWdpc3RlckZvcm1TdWJtaXQiLCJNb2JpYmxlU25hY2tiYXIiLCJEZXNrdG9wU25hY2tiYXIiLCJpY29uIiwibWVzc2FnZSIsIlNuYWNrYmFyIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwib25DbG9zZSIsIm9uR2V0Vm90ZXMiLCJvblVuVm90ZSIsImxvYWRlciIsInZvdGVzQXJyYXkiLCJ1blZvdGUiLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsInBvc3QiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwicmVzcG9uc2UiLCJjb21wb3NlRW5oYW5jZXJzIiwid2luZG93IiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIiwiY29tcG9zZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VydmljZVdvcmtlciIsImluaXRpYWxTdGF0ZSIsImFjdGlvbiIsInVzZXJuYW1lIiwiZW5kRGF0ZSIsImNvbWJpbmVSZWR1Y2VycyIsImxvZ2luUmVkdWNlciIsInJlZ2lzdGVyUmVkdWNlciIsInByb2plY3RSZWdpc3RlclJlZHVjZXIiLCJwcm9qZWN0c1JlZHVjZXIiLCJhdXRoUmVkdWNlciIsInZvdGVzUmVkdWNlciIsImlzTG9jYWxob3N0IiwiQm9vbGVhbiIsImhvc3RuYW1lIiwiY29uZmlnIiwicmVnaXN0ZXJWYWxpZFNXIiwic3dVcmwiLCJuYXZpZ2F0b3IiLCJ0aGVuIiwicmVnaXN0cmF0aW9uIiwib251cGRhdGVmb3VuZCIsImluc3RhbGxpbmdXb3JrZXIiLCJpbnN0YWxsaW5nIiwib25zdGF0ZWNoYW5nZSIsImNvbnRyb2xsZXIiLCJjb25zb2xlIiwibG9nIiwib25VcGRhdGUiLCJvblN1Y2Nlc3MiLCJjaGVja1ZhbGlkU2VydmljZVdvcmtlciIsImZldGNoIiwiY29udGVudFR5cGUiLCJnZXQiLCJzdGF0dXMiLCJpbmRleE9mIiwicmVhZHkiLCJ1bnJlZ2lzdGVyIiwicmVsb2FkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNldFVzZXJUb0xTIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImNoYW5nZVVzZXJBbW91bnRJbkxTIiwicmVtb3ZlVXNlckZyb21MUyIsInJlbW92ZUl0ZW0iLCJwcm9qZWN0TGlzdCIsInJlcyIsImRhdGEiLCJsb2dpbkpzb24iLCJwdXNoIiwiZXJyIiwib25Mb2dPdXQiLCJqc29uIiwicmVnaXN0ZXJKc29uIiwiZXJyb3JzIiwiY2hpbGRyZW4iLCJ2b3RlSWQiLCJob2JieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUlNQSxNOzs7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUNsQixVQUFNQyxJQUFJLEdBQUdDLHNFQUFhLEVBQTFCO0FBQ0FELFVBQUksR0FBRyxLQUFLRSxLQUFMLENBQVdDLFVBQVgsQ0FBc0JILElBQXRCLENBQUgsR0FBaUMsSUFBckM7QUFDQUEsVUFBSSxHQUFHLEtBQUtFLEtBQUwsQ0FBV0UsY0FBZCxHQUErQixJQUFuQztBQUNEOzs7NkJBRVE7QUFBQSxVQUNBQyxNQURBLEdBQ1MsS0FBS0gsS0FBTCxDQUFXSSxJQURwQixDQUNBRCxNQURBO0FBRVAsYUFDRSwyREFBQyw4REFBRDtBQUFlLGdCQUFRLEVBQUVFLGtDQUFBLENBQVlDO0FBQXJDLFNBQ0UsMkRBQUMsOENBQUQsUUFDRSwyREFBQyxpRUFBRCxPQURGLEVBRUUsMkRBQUMsdURBQUQsUUFDRSwyREFBQyxzREFBRDtBQUFPLGFBQUssTUFBWjtBQUFhLFlBQUksRUFBQyxHQUFsQjtBQUFzQixpQkFBUyxFQUFFQyw2REFBSUE7QUFBckMsUUFERixFQUVFLDJEQUFDLHNEQUFEO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsaUJBQVMsRUFBRUMsZ0VBQUtBO0FBQXJDLFFBRkYsRUFHRSwyREFBQyxzREFBRDtBQUFPLFlBQUksRUFBQyxXQUFaO0FBQXdCLGlCQUFTLEVBQUVDLDZFQUFZQTtBQUEvQyxRQUhGLEVBSUUsMkRBQUMsc0RBQUQ7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFBUyxFQUFFQywrREFBS0E7QUFBckMsUUFKRixFQUtFLDJEQUFDLHNEQUFEO0FBQU8sWUFBSSxFQUFDLFdB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LEVBQUU7QUFDWEosbUZBQW9CLENBQUN2UCxNQUFELENBQXBCO0FBQ0FULGNBQVEsQ0FBQ0UsbUVBQWMsRUFBZixDQUFSO0FBQ0FGLGNBQVEsQ0FBQ1EscUVBQVEsQ0FBQ0MsTUFBRCxDQUFULENBQVI7QUFDRCxLQVBELFdBT1MsVUFBQStQLEdBQUc7QUFBQSxhQUFHNUIsT0FBTyxDQUFDQyxHQUFSLENBQVkyQixHQUFaLENBQUg7QUFBQSxLQVBaO0FBU0EsV0FBTyxJQUFQO0FBQ0QsR0FYcUI7QUFBQSxDQUFmLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIEJyb3dzZXJSb3V0ZXIsUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtnZXRVc2VyRnJvbUxTfSBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZSc7XG5pbXBvcnQge2F1dGhVc2VyfSBmcm9tICcuL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuaW1wb3J0IHtzZXRQcm9qZWN0TGlzdH0gZnJvbSAnLi90aHVua3MvZ2V0UHJvamVjdHMnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUvSG9tZSc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyJztcbmltcG9ydCBQcm9qZWN0c0xpc3QgZnJvbSAgJy4vY29tcG9uZW50cy9Qcm9qZWN0c0xpc3QvUHJvamVjdHNMaXN0JztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4vTG9naW4nO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vY29tcG9uZW50cy9SZWdpc3Rlci9SZWdpc3Rlcic7XG5pbXBvcnQgUHJvamVjdFJlZ2lzdHJhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdFJlZ2lzdHJhdGlvbi9Qcm9qZWN0UmVnaXN0cmF0aW9uJztcbmltcG9ydCBQcm9qZWN0SW5mbyBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdEluZm8vUHJvamVjdEluZm8nO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9jb21wb25lbnRzL1VzZXIvVXNlcic7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9jb21wb25lbnRzL0Fib3V0L2Fib3V0JztcblxuXG5cbmNsYXNzIFJvdXRlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHVzZXIgPSBnZXRVc2VyRnJvbUxTKCk7XG4gICAgdXNlciA/IHRoaXMucHJvcHMub25Mb2FkQXV0aCh1c2VyKSA6IG51bGxcbiAgICB1c2VyID8gdGhpcy5wcm9wcy5vbkxvYWRQcm9qZWN0cyA6IG51bGxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7aXNBdXRofSA9dGhpcy5wcm9wcy5hdXRoXG4gICAgcmV0dXJuIChcbiAgICAgIDxCcm93c2VyUm91dGVyIGJhc2VuYW1lPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfT5cbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgY29tcG9uZW50PXtIb21lfS8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL2Fib3V0JyBjb21wb25lbnQ9e0Fib3V0fS8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL3Byb2plY3RzJyBjb21wb25lbnQ9e1Byb2plY3RzTGlzdH0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9sb2dpbicgY29tcG9uZW50PXtMb2dpbn0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9yZWdpc3RlcicgY29tcG9uZW50PXtSZWdpc3Rlcn0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy91c2VyJyBjb21wb25lbnQ9e1VzZXJ9IC8+XG4gICAgICAgICAgICB7Lyo8Um91dGUgcGF0aD0nL2FkbWluJyAvPiovfVxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9wcm9qZWN0LzppZCcgY29tcG9uZW50PXtQcm9qZWN0SW5mb30vPlxuICAgICAgICAgICAge2lzQXV0aCA/IDxSb3V0ZSBwYXRoPScvcHJvamVjdC1yZWdpc3RyYXRpb24nIGNvbXBvbmVudD17UHJvamVjdFJlZ2lzdHJhdGlvbn0vPiA6IDxSZWRpcmVjdCB0bz0nL2xvZ2luJy8+fVxuXG4gICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvbkxvYWRBdXRoOiAodXNlcikgPT4gZGlzcGF0Y2goYXV0aFVzZXIodXNlcikpLFxuICBvbkxvYWRQcm9qZWN0czogKCkgPT4gZGlzcGF0Y2goc2V0UHJvamVjdExpc3QoKSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFJvdXRlcyk7XG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhVc2VyKHVzZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5BVVRIX1VTRVIsXG4gICAgICAgIHVzZXJcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuTE9HX09VVFxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZvdGVVc2VyKGFtb3VudCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlZPVEVfVVNFUixcbiAgICAgICAgYW1vdW50XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gb25JbnB1dENoYW5nZShlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuTE9HSU5fRk9STV9JTlBVVF9DSEFOR0UsXG4gICAgbmFtZTogZS50YXJnZXQubmFtZSxcbiAgICB2YWx1ZTogZS50YXJnZXQudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Gb3JtTG9hZGluZygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5MT0dJTl9GT1JNX0xPQURJTkdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Mb2dpbkZvcm1FcnJvcihlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLkxPR0lOX0ZPUk1fRVJST1IsXG4gICAgZXJyb3JcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Mb2dpbkZvcm1TdWNjZXNzKHVzZXIpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOnR5cGVzLkxPR0lOX0ZPUk1fU1VDQ0VTUyxcbiAgICB1c2VyXG4gIH1cbn0iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uSW5wdXRDaGFuZ2UoZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UsXG4gICAgbmFtZTogZS50YXJnZXQubmFtZSxcbiAgICB2YWx1ZTogZS50YXJnZXQudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25EYXRlQ2hhbmdlKGRhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0RBVEVfQ0hBTkdFLFxuICAgIGRhdGVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Qcm9qZWN0UmVnaXN0ZXJGb3JtTG9hZGluZygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fTE9BRElOR1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblByb2plY3RSZWdpc3RlckZvcm1FcnJvcihlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9FUlJPUixcbiAgICBlcnJvclxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblByb2plY3RSZWdpc3RlckZvcm1TdWJtaXQocHJvamVjdEluZm8pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fU1VDQ0VTUyxcbiAgICBwcm9qZWN0SW5mb1xuICB9XG59IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0cyhwcm9qZWN0cykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLkdFVF9QUk9KRUNUUyxcbiAgICBwcm9qZWN0c1xuICB9XG59IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbklucHV0Q2hhbmdlKGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5SRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRSxcbiAgICBuYW1lOiBlLnRhcmdldC5uYW1lLFxuICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkZvcm1Mb2FkaW5nKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlJFR0lTVEVSX0ZPUk1fTE9BRElOR1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblJlZ2lzdGVyRm9ybUVycm9yKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuUkVHSVNURVJfRk9STV9FUlJPUixcbiAgICBlcnJvclxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblJlZ2lzdGVyRm9ybVN1Y2Nlc3ModXNlcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6dHlwZXMuUkVHSVNURVJfRk9STV9TVUNDRVNTLFxuICAgIHVzZXJcbiAgfVxufSIsIi8vIExvZ2luIHR5cGVzXG5cbmV4cG9ydCBjb25zdCBMT0dJTl9GT1JNX0lOUFVUX0NIQU5HRSA9ICdMT0dJTl9GT1JNX0lOUFVUX0NIQU5HRSc7XG5leHBvcnQgY29uc3QgTE9HSU5fRk9STV9MT0FESU5HID0gJ0xPR0lOX0ZPUk1fTE9BRElORyc7XG5leHBvcnQgY29uc3QgTE9HSU5fRk9STV9FUlJPUiA9ICdMT0dJTl9GT1JNX0VSUk9SJztcbmV4cG9ydCBjb25zdCBMT0dJTl9GT1JNX1NVQ0NFU1MgPSAnTE9HSU5fRk9STV9TVUNDRVNTJztcblxuLy8gUmVnaXN0ZXIgdHlwZXNcblxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFID0gJ1JFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9GT1JNX0xPQURJTkcgPSAnUkVHSVNURVJfRk9STV9MT0FESU5HJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9GT1JNX0VSUk9SID0gJ1JFR0lTVEVSX0ZPUk1fRVJST1InO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZPUk1fU1VDQ0VTUyA9ICdSRUdJU1RFUl9GT1JNX1NVQ0NFU1MnO1xuXG4vLyBQcm9qZWN0IFJlZ2lzdGVyIHR5cGVzXG5cbmV4cG9ydCBjb25zdCBQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFID0gJ1BST0pFQ1RfUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UnO1xuZXhwb3J0IGNvbnN0IFBST0pFQ1RfUkVHSVNURVJfREFURV9DSEFOR0UgPSAnUFJPSkVDVF9SRUdJU1RFUl9EQVRFX0NIQU5HRSc7XG5leHBvcnQgY29uc3QgUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0xPQURJTkcgPSAnUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0xPQURJTkcnO1xuZXhwb3J0IGNvbnN0IFBST0pFQ1RfUkVHSVNURVJfRk9STV9FUlJPUiA9ICdQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fRVJST1InO1xuZXhwb3J0IGNvbnN0IFBST0pFQ1RfUkVHSVNURVJfRk9STV9TVUNDRVNTID0gJ1BST0pFQ1RfUkVHSVNURVJfRk9STV9TVUNDRVNTJztcblxuLy8gUHJvamVjdHMgdHlwZXNcblxuZXhwb3J0IGNvbnN0IEdFVF9QUk9KRUNUUyA9ICdHRVRfUFJPSkVDVFMnO1xuXG4vLyBBdXRoIHR5cGVzXG5cbmV4cG9ydCBjb25zdCBBVVRIX1VTRVIgPSAnQVVUSF9VU0VSJztcbmV4cG9ydCBjb25zdCBMT0dfT1VUID0gJ0xPR19PVVQnO1xuZXhwb3J0IGNvbnN0IFZPVEVfVVNFUiA9ICdWT1RFX1VTRVInO1xuXG4vLyBWb3RlIHR5cGVzXG5cbmV4cG9ydCBjb25zdCBHRVRfVk9URVMgPSAnR0VUX1ZPVEVTJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfVk9URSA9ICdSRU1PVkVfVk9URSc7IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWb3Rlcyh2b3Rlcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLkdFVF9WT1RFUyxcbiAgICB2b3Rlc1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVWb3RlKHZvdGVJRCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlJFTU9WRV9WT1RFLFxuICAgIHZvdGVJRFxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9hYm91dC5zY3NzJztcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvZXMvUGFwZXIvUGFwZXJcIjtcbmNvbnN0IGFib3V0ID0gKCApID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPVwicGFwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdIZWFkaW5nJz5Ib2JieUNyYWZ0IFRlYW08L2Rpdj5cbiAgICAgICAgPC9QYXBlcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCAnLi9Ib21lLnNjc3MnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBNdWlUaGVtZVByb3ZpZGVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi4vSW1hZ2VzL0ZyaWVuZHMucG5nJztcbmltcG9ydCBUZWFtSW1hZ2UgZnJvbSBcIi4uL0ltYWdlcy90ZWFtLnBuZ1wiO1xuaW1wb3J0IENvbGxlYWd1ZUltYWdlIGZyb20gXCIuLi9JbWFnZXMvY29sbGVhZ3VlLnBuZ1wiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9lcy9QYXBlci9QYXBlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2VzL0xpbmsvTGlua1wiO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgIG1haW46ICcjRUE3OTI1JyxcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnI2ZmZmZmZicsXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG5cblxuXG5jb25zdCBIb21lID0gKCApID0+IHtcbiAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0hvbWUnPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTWVzc2FnZS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nTWVzc2FnZS1UaXRsZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEEgTmV3IGFuZCBCZXR0ZXIgd2F5IHRvIGVuZ2FuZ2UgYW5kIHJldGFpbiBlbXBsb3llZXNcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nTWVzc2FnZS1TdWJoZWFkaW5nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGFuaWVzIHVzZSBIb2JieUNyYWZ0IHRvIG9yZ2FuaXplIHRoZWlyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZXMgaG9iYnkgYnVkZ2V0LCBpdHMgYSBwZXJmZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcm5hbCBjcm91ZCBmdW5kaW5nIHN5c3RlbSBmb3IgeW91ICFcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1cz17XCIyNXB4XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz0nL2xvZ2luJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxUeXBvZ3JhcGh5IGNvbG9yPVwic2Vjb25kYXJ5XCIgPkdldCBTdGFydGVkPC9UeXBvZ3JhcGh5PjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIkltZ1wiIHNyYz17bG9nb30gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJDb250YWluZXJcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDYXJkcy0taW5saW5lXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtcIkNhcmRcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiSW1nLWNhcmRcIiBzcmM9e1RlYW1JbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J01lc3NhZ2UtVGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQSBOZXcgYW5kIEJldHRlciB3YXkgdG8gZW5nYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J01lc3NhZ2UtU3ViaGVhZGluZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wYW5pZXMgdXNlIEhvYmJ5Q3JhZnQgdG8gb3JnYW5pemUgdGhlaXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcGxveWVlcyBob2JieSBidWRnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rPlJlYWQgTW9yZTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17XCJDYXJkXCJ9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJJbWctY2FyZFwiIHNyYz17Q29sbGVhZ3VlSW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdNZXNzYWdlLVRpdGxlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEEgTmV3IGFuZCBCZXR0ZXIgd2F5IHRvIGVuZ2FuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdNZXNzYWdlLVN1YmhlYWRpbmcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGFuaWVzIHVzZSBIb2JieUNyYWZ0IHRvIG9yZ2FuaXplIHRoZWlyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZXMgaG9iYnkgYnVkZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluaz5SZWFkIE1vcmU8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cblxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9idWlsZC9pbWFnZXMvRnJpZW5kcy4zNjQzMTcyOS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2J1aWxkL2ltYWdlcy9jb2xsZWFndWUuZTAwOWE2OWEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9idWlsZC9pbWFnZXMvdGVhbS5hZWNjZWE4ZC5wbmdcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL2xvYWRlci5zY3NzJztcblxuY29uc3QgTG9hZGVyID0gKHtjb2xvcixoPTQwfSkgPT4gKFxuICA8ZGl2XG4gICAgc3R5bGU9e3tcbiAgICAgIHdpZHRoOmgrJ3B4JyxcbiAgICAgIGhlaWdodDpoKydweCcsXG4gICAgICBib3JkZXJSaWdodDpgJHtoLzZ9cHggc29saWQgdHJhbnNwYXJlbnRgLFxuICAgICAgYm9yZGVyTGVmdDpgJHtoLzZ9cHggc29saWQgdHJhbnNwYXJlbnRgLFxuICAgICAgYm9yZGVyVG9wOmAke2gvNn1weCBzb2xpZCAke2NvbG9yfWAsXG4gICAgICBib3JkZXJCb3R0b206YCR7aC82fXB4IHNvbGlkICR7Y29sb3J9YCxcbiAgICB9fVxuICAgIGNsYXNzTmFtZT17YExvYWRlciAke2NvbG9yfWB9Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL2xvZ2luQWN0aW9ucyc7XG5pbXBvcnQgeyBvbkZvcm1TdWJtaXQgfSBmcm9tICcuLi8uLi90aHVua3MvbG9naW5UaHVuayc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlci9Mb2FkZXInO1xuaW1wb3J0ICcuL0xvZ2luLnNjc3MnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnLi4vU25hY2tiYXIvc25hY2tiYXInO1xuaW1wb3J0IHtjcmVhdGVNdWlUaGVtZSwgTXVpVGhlbWVQcm92aWRlciwgd2l0aFN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgTG9ja091dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9ja091dGxpbmVkJztcblxuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgIG1haW46ICcjRUE3OTI1JyxcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnIzAwNDRmZicsXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBtYWluOiAnI2ZmZmZmZicsXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICAgIG1haW46IHtcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCg0MDAgKyB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzICogMildOiB7XG4gICAgICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHBhcGVyOiB7XG4gICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0LFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy51bml0ICogMn1weCAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDN9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4YCxcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQgKjgsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGF2YXRhcjoge1xuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0VBNzkyNScsXG4gICAgfSxcbiAgICBmb3JtOiB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0LFxuICAgIH0sXG4gICAgdGV4dEZpZWxkOiB7XG4gICAgICAgIGhlaWdodDogNTAsXG4gICAgfSxcbiAgICBzdWJtaXQ6IHtcbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgICAgICBoZWlnaHQ6IDUwLFxuICAgIH0sXG59KTtcblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICAgIH07XG5cbiAgICBvbkZvcm1TdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucHJvcHMub25Gb3JtU3VibWl0KHRoaXMucHJvcHMubG9naW4sIHRoaXMucHJvcHMuaGlzdG9yeSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCBlcnJvciwgbG9hZGluZyB9ID0gdGhpcy5wcm9wcy5sb2dpblxuICAgICAgICBjb25zdCB7b25JbnB1dENoYW5nZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2tPdXRsaW5lZEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yID8gPFNuYWNrYmFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uRm9ybVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRlciBjb2xvcj17JyNmZmYnfSBoPXsxNX0gLz4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJlcnJvclwiID5TaWduIEluPC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic3ViaGVhZGluZ1wifT5cbiAgICAgICAgICAgICAgICAgICAgICAgIElmIHlvdSBkb24ndCBoYXZlIGFuIGFjY291bnQsIHBsZWFzZXsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy9SZWdpc3Rlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvZ2luOiBzdGF0ZS5sb2dpblxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIG9uSW5wdXRDaGFuZ2U6IChlKSA9PiBkaXNwYXRjaChhY3Rpb25zLm9uSW5wdXRDaGFuZ2UoZSkpLFxuICAgIG9uRm9ybVN1Ym1pdDogKHVzZXIsIGhpc3RvcnkpID0+ZGlzcGF0Y2gob25Gb3JtU3VibWl0KHVzZXIsaGlzdG9yeSkpLFxufSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhTdHlsZXMoc3R5bGVzKShMb2dpbikpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtOYXZMaW5rIGFzIFJvdXRlckxpbmtOYXYsIExpbmsgYXMgUm91dGVyTGluaywgd2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IHt3aXRoU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtNdWlUaGVtZVByb3ZpZGVyLCBjcmVhdGVNdWlUaGVtZX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7b25Mb2dPdXQgYXMgTG9nb3V0fSBmcm9tICcuLi8uLi90aHVua3MvbG9nb3V0VGh1bmsnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEJvdHRvbU5hdmlnYXRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm90dG9tTmF2aWdhdGlvbic7XG5pbXBvcnQgQm90dG9tTmF2aWdhdGlvbkFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3R0b21OYXZpZ2F0aW9uQWN0aW9uJztcbmltcG9ydCBIb21lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZSc7XG5pbXBvcnQgVmlldyBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVmlld01vZHVsZSc7XG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGlicmFyeUFkZCc7XG5pbXBvcnQgUGVyc29uSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGVyc29uJztcbmltcG9ydCBQZXJzb25BZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QZXJzb25BZGQnO1xuXG5cblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6e1xuICAgICAgbWFpbjogJyNmZmZmZmYnLFxuICAgIH1cbiAgfSxcbn0pO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9LFxuXG4gIE1vYmlsZU5hdjp7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICB6SW5kZXg6IDEwMDAsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG5cblxuICBtZW51YmFyOiB7XG4gICAgcGFkZGluZ0xlZnQ6IFwiMyVcIixcbiAgICBwYWRkaW5nUmlnaHQ6IFwiMyVcIixcbiAgICBwb3NpdGlvbjogJ3N0YXRpYycsXG4gICAgYmFja2dyb3VuZDogXCIjMTgxODE4XCIsXG5cbiAgfSxcbiAgZ3Jvdzoge1xuICAgIGZsZXhHcm93OiAxLFxuICAgIGFsaWduOiAnY2VudGVyJyxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIH0sXG4gIH0sXG4gIHNlY3Rpb25EZXNrdG9wOiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgfSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgY29sb3I6ICcjQTRBNEE0JyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICBtYXJnaW46ICdhdXRvJyxcbiAgICBwYWRkaW5nTGVmdDogMjAsXG4gICAgcGFkZGluZ1JpZ2h0OiAyMCxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXG4gIH0sXG4gIGxpbms6IHtcbiAgICBjb2xvcjogJyNBNEE0QTQnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgIHBhZGRpbmc6ICc2cHggMjBweCcsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xuICB9LFxuICBNb2JpbGVCdXR0b246IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBjb2xvcjogJyNBNEE0QTQnLFxuICAgIH0sXG4gICAgbWFyZ2luOiAnYXV0bycsXG4gICAgcGFkZGluZ0xlZnQ6IDIwLFxuICAgIHBhZGRpbmdSaWdodDogMjAsXG4gICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gIH0sXG4gIGJ1dHRvblNpbmdVcDoge1xuICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNFQTc5MjVcIixcbiAgICBib3JkZXJSYWRpdXM6IDI1LFxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjQTE1NDIxXCIsXG4gICAgfSxcbiAgfSxcbiAgc2VjdGlvbk1vYmlsZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgfSxcbiAgfSxcbiAgdGl0bGVNb2JpbGU6IHtcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxuICB9LFxufTtcblxuY2xhc3MgTmF2QmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdmFsdWU6IDAsXG4gICAgc2hvd01lbnU6IGZhbHNlXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIHZhbHVlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWV9KTtcbiAgfTtcblxuICBvbkxvZ091dFRvZ2dsZSA9ICgpID0+IHRoaXMucHJvcHMub25Mb2dvdXRDbGljayh0aGlzLnByb3BzLmhpc3RvcnkpXG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2NsYXNzZXMsIGxvY2F0aW9ufSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge2lzQXV0aCwgcm9sZX0gPSB0aGlzLnByb3BzLmF1dGg7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgIDxBcHBCYXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnViYXJ9PlxuICAgICAgICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9IHRvPScvJyA+XG4gICAgICAgICAgICAgICAgICBIb2JieUNyYWZ0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbk1vYmlsZX0+XG4gICAgICAgICAgICAgICAgICB7aXNBdXRoID9cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9J3NlY29uZGFyeScgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlTW9iaWxlfSBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9IHRvPScvJz5cbiAgICAgICAgICAgICAgICAgICAgSG9iYnlDcmFmdFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+IDogbnVsbFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3Jvd30vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25EZXNrdG9wfT5cbiAgICAgICAgICAgICAgICAgIHtpc0F1dGggP1xuICAgICAgICAgICAgICAgICAgICAgIDwgQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jy9wcm9qZWN0cycgPT09IGxvY2F0aW9uLnBhdGhuYW1lID8gY2xhc3Nlcy5idXR0b25TaW5nVXAgOiBjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rTmF2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bz0nL3Byb2plY3RzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIERpc2NvdmVyIFByb2plY3RzXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgIDwgQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jy8nID09PSBsb2NhdGlvbi5wYXRobmFtZSA/IGNsYXNzZXMuYnV0dG9uU2luZ1VwIDogY2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua05hdn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy8nPlxuICAgICAgICAgICAgICAgICAgICAgICAgRGlzY292ZXJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj59XG4gICAgICAgICAgICAgICAgICB7aXNBdXRoID9cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jy9wcm9qZWN0LXJlZ2lzdHJhdGlvbicgPT09IGxvY2F0aW9uLnBhdGhuYW1lID8gY2xhc3Nlcy5idXR0b25TaW5nVXAgOiBjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rTmF2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bz0nL3Byb2plY3QtcmVnaXN0cmF0aW9uJz5DcmVhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgUHJvamVjdDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jy9yZWdpc3RlcicgPT09IGxvY2F0aW9uLnBhdGhuYW1lID8gY2xhc3Nlcy5idXR0b25TaW5nVXAgOiBjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rTmF2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bz0nL3JlZ2lzdGVyJz5TaWduXG4gICAgICAgICAgICAgICAgICAgICAgICBVcCBXaXRoIEVtYWlsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB7aXNBdXRoID9cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jy91c2VyJyA9PT0gbG9jYXRpb24ucGF0aG5hbWUgPyBjbGFzc2VzLmJ1dHRvblNpbmdVcCA6IGNsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPScvdXNlcic+e3RoaXMucHJvcHMuYXV0aC5lbWFpbH0ge3RoaXMucHJvcHMuYXV0aC5hbW91bnR94oKsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnL2Fib3V0JyA9PT0gbG9jYXRpb24ucGF0aG5hbWUgPyBjbGFzc2VzLmJ1dHRvblNpbmdVcCA6IGNsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBYm91dCBVc1xuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB7cm9sZSA9PT0gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBocmVmPXsnL2FkbWluJ30gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gPkFkbWluPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHtpc0F1dGggP1xuICAgICAgICAgICAgICAgICAgICBudWxsOiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uTW9iaWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPSdzZWNvbmRhcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZU1vYmlsZX0gY29tcG9uZW50PXtSb3V0ZXJMaW5rTmF2fSB0bz0nLyc+XG4gICAgICAgICAgICAgICAgICAgICAgICBIb2JieUNyYWZ0XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3Jvd30vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25EZXNrdG9wfT5cbiAgICAgICAgICAgICAgICAgIHtpc0F1dGggP1xuICAgICAgICAgICAgICAgICAgICAgIDwgQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9e3RoaXMub25Mb2dPdXRUb2dnbGV9IHRvPScvbG9nb3V0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICA8IEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBjb21wb25lbnQ9e1JvdXRlckxpbmt9IHRvPScvbG9naW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbk1vYmlsZX0+XG4gICAgICAgICAgICAgICAgICB7aXNBdXRoID9cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uTW9iaWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj0nc2Vjb25kYXJ5JyBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVNb2JpbGV9IG9uQ2xpY2s9e3RoaXMub25Mb2dPdXRUb2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy9sb2dvdXQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHtpc0F1dGggP1xuICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvblxuICAgICAgICAgICAgICAgICAgc2hvd0xhYmVsc1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLk1vYmlsZU5hdn0+XG4gICAgICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9XCJIb21lXCIgY29tcG9uZW50PXtSb3V0ZXJMaW5rfSB0bz0nLycgaWNvbj17PEhvbWVJY29uLz59Lz5cbiAgICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIkRpc2NvdmVyXCIgIGNvbXBvbmVudD17Um91dGVyTGlua30gdG89Jy9wcm9qZWN0cycgaWNvbj17PFZpZXcvPn0vPlxuICAgICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPVwiQ3JlYXRlXCIgY29tcG9uZW50PXtSb3V0ZXJMaW5rfSB0bz0nL3Byb2plY3QtcmVnaXN0cmF0aW9uJyBpY29uPXs8QWRkSWNvbi8+fS8+XG4gICAgICAgICAgICAgICAge3JvbGUgPT09IDEgPyA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIkFkbWluXCIgaHJlZj17Jy9hZG1pbid9IGljb249ezxQZXJzb25JY29uLz59IC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPXt0aGlzLnByb3BzLmF1dGguZW1haWx9IGNvbXBvbmVudD17Um91dGVyTGlua30gdG89Jy91c2VyJyBpY29uPXs8UGVyc29uSWNvbi8+fS8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0JvdHRvbU5hdmlnYXRpb24+XG4gICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25cbiAgICAgICAgICAgICAgICAgIHNob3dMYWJlbHNcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5Nb2JpbGVOYXZ9PlxuICAgICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPVwiSG9tZVwiICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfSB0bz0nLycgaWNvbj17PEhvbWVJY29uLz59Lz5cbiAgICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIlNpZ24gVXBcIiBjb21wb25lbnQ9e1JvdXRlckxpbmt9IHRvPScvcmVnaXN0ZXInIGljb249ezxQZXJzb25BZGRJY29uLz59Lz5cbiAgICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIlNpZ24gSW5cIiBjb21wb25lbnQ9e1JvdXRlckxpbmt9IHRvPScvbG9naW4nIGljb249ezxQZXJzb25JY29uLz59Lz5cbiAgICAgICAgICAgICAgPC9Cb3R0b21OYXZpZ2F0aW9uPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuTmF2QmFyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvbkxvZ291dENsaWNrOiAoaGlzdG9yeSkgPT4gZGlzcGF0Y2goTG9nb3V0KGhpc3RvcnkpKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhSb3V0ZXIod2l0aFN0eWxlcyhzdHlsZXMpKE5hdkJhcikpKTsiLCJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge0xpbmsgYXMgUm91dGVyTGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCAnLi9Qcm9qZWN0SW5mby5zY3NzJztcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBNdWlUaGVtZVByb3ZpZGVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2VzL1R5cG9ncmFwaHkvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9lcy9QYXBlci9QYXBlclwiO1xuaW1wb3J0IHtvblZvdGV9IGZyb20gXCIuLi8uLi90aHVua3Mvdm90ZVRodW5rXCI7XG5cblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gICAgcGFsZXR0ZToge1xuICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgbWFpbjogJyNmZmZmZmYnLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxuXG5cbmNvbnN0IFByb2plY3RJbmZvID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHthbW91bnR9ID0gcHJvcHMuYXV0aDtcbiAgY29uc3Qge3Byb2plY3RzLCBvblZvdGVDbGlja30gPSBwcm9wcztcbiAgY29uc3QgcHJvamVjdEluZm8gPSBwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiB7XG4gICAgaWYocHJvamVjdC5pZC50b1N0cmluZygpID09PSBwcm9wcy5tYXRjaC5wYXJhbXMuaWQpIHtcbiAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSkubWFwKChwcm9qZWN0LCBpKSA9PiB7XG4gICAgcHJvamVjdC5idWRnZXQgPSAwO1xuICAgIGlmIChwcm9qZWN0LnZvdGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHByb2plY3QuYnVkZ2V0ID0gcHJvamVjdC52b3Rlcy5yZWR1Y2UoKHRvdGFsLCB2b3RlKT0+IHtcbiAgICAgICAgcmV0dXJuIHRvdGFsICsgdm90ZS5hbW91bnQ7XG4gICAgICB9LCAwKVxuICAgIH0gZWxzZSBpZihwcm9qZWN0LnZvdGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcHJvamVjdC5idWRnZXQgPSBwcm9qZWN0LnZvdGVzWzBdLmFtb3VudDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nUHJvamVjdCcga2V5PXtpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUaXRsZSc+e3Byb2plY3QudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9ncmVzcy1iYXInPlxuICAgICAgICAgICAgICAgICAgPGRpdj57cHJvamVjdC5idWRnZXR9IOKCrDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0xpbmVhclByb2dyZXNzTW9uZXknPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5lYXJQcm9ncmVzcyB2YXJpYW50PXsnYnVmZmVyJ30gdmFsdWU9eyhwcm9qZWN0LmJ1ZGdldC9wcm9qZWN0LmFtb3VudCkqMTAwfS8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+e3Byb2plY3QuYW1vdW50fSDigqw8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdWb3RlQnV0dG9ucyc+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblZvdGVDbGljayhwcm9qZWN0LmlkLCA1KX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YW1vdW50IDwgNX1cbiAgICAgICAgICAgICAgICAgID414oKsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblZvdGVDbGljayhwcm9qZWN0LmlkLCAxNSl9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Ftb3VudCA8IDE1fVxuICAgICAgICAgICAgICAgICAgPjE14oKsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblZvdGVDbGljayhwcm9qZWN0LmlkLCAzMCl9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Ftb3VudCA8IDMwfVxuICAgICAgICAgICAgICAgICAgPjMw4oKsPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0F1dGhvcic+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5BdXRob3IgRW1haWw6IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUZXh0LS1Cb2xkJz4ge3Byb2plY3QuZW1haWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Rlc2NyaXB0aW9uJyA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj57cHJvamVjdC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J0J1dHRvbidcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICAgIHRvPScvcHJvamVjdHMnPlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICA+QmFjayB0byBwcm9qZWN0czwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9KVxuICByZXR1cm4gKFxuICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1Byb2plY3RJbmZvJz5cbiAgICAgICAgICAgICAge3Byb2plY3RJbmZvfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9QYXBlcj5cbiAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb2plY3RzOiBzdGF0ZS5wcm9qZWN0cy5wcm9qZWN0cyxcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvblZvdGVDbGljazogKHByb2plY3RJZCwgYW1vdW50KSA9PiBkaXNwYXRjaChvblZvdGUocHJvamVjdElkLCBhbW91bnQpKVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShQcm9qZWN0SW5mbyk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vUHJvamVjdFJlZ2lzdHJhdGlvbi5zY3NzJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyL0xvYWRlcic7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL3Byb2plY3RSZWdpc3RlckFjdGlvbnMnO1xuaW1wb3J0IHtvblByb2plY3RSZWdpc3RlckZvcm1TdWJtaXR9IGZyb20gJy4uLy4uL3RodW5rcy9wcm9qZWN0UmVnaXN0ZXJUaHVuayc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBNdWlUaGVtZVByb3ZpZGVyLCB3aXRoU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBTbmFja2JhciBmcm9tICcuLi9TbmFja2Jhci9zbmFja2Jhcic7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogJyNFQTc5MjUnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzAwNDRmZicsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgbWFpbjogJyNmZmZmZmYnLFxuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgbWFpbjoge1xuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCg0MDAgKyB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzICogMildOiB7XG4gICAgICB3aWR0aDogNDAwLFxuICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICB9LFxuICB9LFxuICBwYXBlcjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0LFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAyfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weCAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDN9cHhgLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0ICo4LFxuICAgIH0sXG4gIH0sXG4gIGZvcm06IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0LFxuICB9LFxuICB0ZXh0RmllbGQ6IHtcbiAgICBoZWlnaHQ6IDUwLFxuICB9LFxuICBzdWJtaXQ6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgaGVpZ2h0OiA1MCxcbiAgfSxcbn0pO1xuXG5jbGFzcyBQcm9qZWN0UmVnaXN0cmF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3BlbjogZmFsc2UsXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gIH07XG5cbiAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICB9O1xuXG4gIG9uRm9ybVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25Gb3JtU3VibWl0KHRoaXMucHJvcHMucHJvamVjdFJlZ2lzdGVyLCB0aGlzLnByb3BzLmhpc3RvcnksIHRoaXMucHJvcHMuYXV0aC5lbWFpbClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBob2JieU5hbWUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGFtb3VudCxcbiAgICAgIGxvYWRpbmcsXG4gICAgICBlcnJvcixcbiAgICB9ID10aGlzLnByb3BzLnByb2plY3RSZWdpc3RlcjtcbiAgICBjb25zdCB7b25JbnB1dENoYW5nZX0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCI+UmVnaXN0ZXIgWW91ciBIb2JieVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgICAge2Vycm9yID8gPFNuYWNrYmFyXG4gICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAvPiA6IG51bGx9XG5cbiAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uRm9ybVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9XG4gICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdob2JieU5hbWUnXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtob2JieU5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQbGVhc2UgZW50ZXIgeW91ciBob2JieSBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgcm93c01heD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBkZXNjcmliZSBpdFwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdhbW91bnQnXG4gICAgICAgICAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBlbnRlciBhbW91bnQgZm9yIHlvdXIgbmVlZHNcIlxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IDxMb2FkZXIgdGV4dENvbG9yPVwic2Vjb25kYXJ5XCIgY29sb3I9eycjZmZmJ30gaD17MTV9IC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cImVycm9yXCIgPlBsYWNlIHlvdXIgaG9iYnk8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvamVjdFJlZ2lzdGVyOiBzdGF0ZS5wcm9qZWN0UmVnaXN0ZXIsXG4gICAgYXV0aDogc3RhdGUuYXV0aFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgb25JbnB1dENoYW5nZTogKGUpID0+IGRpc3BhdGNoKGFjdGlvbnMub25JbnB1dENoYW5nZShlKSksXG4gIG9uRGF0ZUNoYW5nZTogKGRhdGUpID0+IGRpc3BhdGNoKGFjdGlvbnMub25EYXRlQ2hhbmdlKGRhdGUpKSxcbiAgb25Gb3JtU3VibWl0OiAocHJvamVjdEluZm8sIGhpc3RvcnksIGVtYWlsKT0+ZGlzcGF0Y2gob25Qcm9qZWN0UmVnaXN0ZXJGb3JtU3VibWl0KHByb2plY3RJbmZvLGhpc3RvcnksZW1haWwpKVxufSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhTdHlsZXMoc3R5bGVzKShQcm9qZWN0UmVnaXN0cmF0aW9uKSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmsgYXMgUm91dGVyTGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgJy4vUHJvamVjdHNMaXN0LnNjc3MnO1xuaW1wb3J0IHtzZXRQcm9qZWN0TGlzdH0gZnJvbSAnLi4vLi4vdGh1bmtzL2dldFByb2plY3RzJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge29uVm90ZX0gZnJvbSAnLi4vLi4vdGh1bmtzL3ZvdGVUaHVuayc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IHtjcmVhdGVNdWlUaGVtZSwgTXVpVGhlbWVQcm92aWRlcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCJcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlci9Mb2FkZXInO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuXG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogJyNFQTc5MjUnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzAwNDRmZicsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5cbmNsYXNzIFByb2plY3RzTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgIHNlYXJjaFZhbHVlOiAnJ1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMub25HZXRQcm9qZWN0c0xpc3QoKTtcbiAgfVxuXG4gIG9uU2VhcmNoQmFyQ2hhbmdlID0gZSA9PiB0aGlzLnNldFN0YXRlKHtzZWFyY2hWYWx1ZTogZS50YXJnZXQudmFsdWV9KVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7cHJvamVjdHMsIG9uVm90ZUNsaWNrfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge2Ftb3VudH0gPSB0aGlzLnByb3BzLmF1dGg7XG4gICAgbGV0IHByb2plY3RzTGlzdDtcbiAgICBpZiAocHJvamVjdHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBwcm9qZWN0c0xpc3QgPSBwcm9qZWN0cyAmJiBwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiB7XG4gICAgICAgIHByb2plY3QuYnVkZ2V0ID0gMDtcbiAgICAgICAgaWYgKHByb2plY3Qudm90ZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByb2plY3QuYnVkZ2V0ID0gcHJvamVjdC52b3Rlcy5yZWR1Y2UoKHRvdGFsLCB2b3RlKT0+IHtcbiAgICAgICAgICAgIHJldHVybiB0b3RhbCArIHZvdGUuYW1vdW50O1xuICAgICAgICAgIH0sIDApXG4gICAgICAgIH0gZWxzZSBpZihwcm9qZWN0LnZvdGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHByb2plY3QuYnVkZ2V0ID0gcHJvamVjdC52b3Rlc1swXS5hbW91bnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2plY3QudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAgICAgLm1hcCgocHJvamVjdCwgaSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfSBrZXk9e2l9PlxuICAgICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9eydtYWluLWNhcmQnfT5cbiAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXsnQ2FyZCd9IGNvbXBvbmVudD17Um91dGVyTGlua30gdG89e2AvcHJvamVjdC8ke3Byb2plY3QuaWR9YH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J0NhcmQtdGl0bGUnfT57cHJvamVjdC50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnQ2FyZC1kZXNjcmlwdGlvbid9Pntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiQ2FyZC1wcm9ncmVzc1wifT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57cHJvamVjdC5idWRnZXR9JDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJDYXJkLXByb2dyZXNzLWJhclwifT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluZWFyUHJvZ3Jlc3MgdmFyaWFudD17J2J1ZmZlcid9IHZhbHVlPXsocHJvamVjdC5idWRnZXQgLyBwcm9qZWN0LmFtb3VudCkgKiAxMDB9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3Byb2plY3QuYW1vdW50fSQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydWb3RlQnV0dG9ucyd9PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiA1MCwgbWFyZ2luOiA1fX0gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblZvdGVDbGljayhwcm9qZWN0LmlkLCA1KX0gZGlzYWJsZWQ9e2Ftb3VudCA8IDV9PjXigqw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzdHlsZT17e2JvcmRlclJhZGl1czogNTAsIG1hcmdpbjogNX19IGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Wb3RlQ2xpY2socHJvamVjdC5pZCwgMTUpfSBkaXNhYmxlZD17YW1vdW50IDwgMTV9PjE14oKsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgc3R5bGU9e3tib3JkZXJSYWRpdXM6IDUwLCBtYXJnaW46IDV9fSBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVm90ZUNsaWNrKHByb2plY3QuaWQsIDMwKX0gZGlzYWJsZWQ9e2Ftb3VudCA8IDMwfT4zMOKCrDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICAgICApXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0c0xpc3QgPSA8ZGl2IGNsYXNzTmFtZT0nTG9hZGVyLWNvbnRhaW5lci1saXN0Jz5cbiAgICAgICAgPExvYWRlciBjb2xvcj17JyNFQTc5MjUnfSBoPXsxMDB9Lz5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdQcm9qZWN0c0xpc3QnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTZWFyY2hCYXJcIj5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxlYXNlIGVudGVyIGtleXdvcmRzXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2VhcmNoQmFyQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtwcm9qZWN0c0xpc3R9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb2plY3RzOiBzdGF0ZS5wcm9qZWN0cy5wcm9qZWN0cyxcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvbkdldFByb2plY3RzTGlzdDogKCkgPT4gZGlzcGF0Y2goc2V0UHJvamVjdExpc3QoKSksXG4gIG9uVm90ZUNsaWNrOiAocHJvamVjdElkLCBhbW91bnQpID0+IGRpc3BhdGNoKG9uVm90ZShwcm9qZWN0SWQsIGFtb3VudCkpXG5cbn0pO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUHJvamVjdHNMaXN0KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyL0xvYWRlcic7XG5pbXBvcnQge0xpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgJy4vUmVnaXN0ZXIuc2NzcydcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uLy4uL2FjdGlvbnMvcmVnaXN0ZXJBY3Rpb25zXCI7XG5pbXBvcnQge29uUmVnaXN0ZXJGb3JtU3VibWl0fSBmcm9tICcuLi8uLi90aHVua3MvcmVnaXN0ZXJUaHVuayc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBNdWlUaGVtZVByb3ZpZGVyLCB3aXRoU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBBY2NvdW50IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlJztcbmltcG9ydCBTbmFja2JhciBmcm9tICcuLi9TbmFja2Jhci9zbmFja2Jhcic7XG5cblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjMDA0NGZmJyxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBtYWluOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBtYWluOiB7XG4gICAgd2lkdGg6ICdhdXRvJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKDQwMCArIHRoZW1lLnNwYWNpbmcudW5pdCAqIDMgKiAyKV06IHtcbiAgICAgIHdpZHRoOiA0MDAsXG4gICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgIH0sXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDJ9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weGAsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQgKjgsXG4gICAgfSxcbiAgfSxcbiAgZm9ybToge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gIH0sXG4gIHRleHRGaWVsZDoge1xuICAgIGhlaWdodDogNTAsXG4gIH0sXG4gIHN1Ym1pdDoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICBoZWlnaHQ6IDUwLFxuICB9LFxuICBhdmF0YXI6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRUE3OTI1JyxcbiAgfSxcbn0pO1xuXG5cbmNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3BlbjogZmFsc2UsXG5cbiAgfTtcblxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gIH07XG5cblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgfTtcblxuXG4gIG9uRm9ybVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25Gb3JtU3VibWl0KHRoaXMucHJvcHMucmVnaXN0ZXIsIHRoaXMucHJvcHMuaGlzdG9yeSk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgcGFzc3dvcmQyLCBlcnJvciwgbG9hZGluZyx9ID0gdGhpcy5wcm9wcy5yZWdpc3RlcjtcbiAgICBjb25zdCB7b25JbnB1dENoYW5nZX0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9ID5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lLz5cbiAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfSA+XG4gICAgICAgICAgICAgICAgPEFjY291bnQvPlxuICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCI+U2lnbiBVcFxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgICAge2Vycm9yID8gPFNuYWNrYmFyXG4gICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAvPiA6IG51bGx9XG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uRm9ybVN1Ym1pdH0gIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9ICBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxuXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQbGVhc2UgZW50ZXIgeW91ciBlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZDInXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZDJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZXBlYXQgUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IDxMb2FkZXIgY29sb3I9eycjZmZmJ30gaD17MTV9IC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cImVycm9yXCIgPlNpZ24gdXA8L1R5cG9ncmFwaHk+IH1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInN1YmhlYWRpbmdcIn0+XG4gICAgICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P3snICd9XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XG4gICAgICAgICAgICAgICAgICB0bz0nL2xvZ2luJz5cbiAgICAgICAgICAgICAgICBTaWduIEluXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcmVnaXN0ZXI6IHN0YXRlLnJlZ2lzdGVyXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvbklucHV0Q2hhbmdlOiAoZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5vbklucHV0Q2hhbmdlKGUpKSxcbiAgb25Gb3JtU3VibWl0OiAodXNlciwgaGlzdG9yeSkgPT4gZGlzcGF0Y2gob25SZWdpc3RlckZvcm1TdWJtaXQodXNlciwgaGlzdG9yeSkpXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFN0eWxlcyhzdHlsZXMpKFJlZ2lzdGVyKSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0ICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU25hY2sgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyXCI7XG5pbXBvcnQgRXJyb3JJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXJyb3JcIjtcbmltcG9ydCB7d2l0aFN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnI2QzMmYyZicsXG4gICAgfSxcbiAgICBNb2JpYmxlU25hY2tiYXI6e1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBEZXNrdG9wU25hY2tiYXI6e1xuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICAgIGZvbnRTaXplOjIwLFxuICAgICAgICBtYXJnaW5SaWdodDogMTAsXG4gICAgfSxcbiAgICBtZXNzYWdlOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgfSxcbn0pO1xuXG4gICAgICAgIGNvbnN0IFNuYWNrYmFyICA9IChwcm9wcykgPT4ge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuRGVza3RvcFNuYWNrYmFyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3Byb3BzLm9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXsyMDAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgQ29udGVudFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiAnbWVzc2FnZS1pZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogeyByb290OiBwcm9wcy5jbGFzc2VzLnJvb3R9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9ezxzcGFuIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXJyb3JJY29uIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5pY29ufS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmVycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLk1vYmlibGVTbmFja2Jhcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U25hY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3Byb3BzLm9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17cHJvcHMub25DbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXszMDAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRlbnRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6ICdtZXNzYWdlLWlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogeyByb290OiBwcm9wcy5jbGFzc2VzLnJvb3R9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXs8c3BhbiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVycm9ySWNvbiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuaWNvbn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZXJyb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgKHdpdGhTdHlsZXMoc3R5bGVzKShTbmFja2JhcikpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL1VzZXIuc2Nzcyc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHt2b3Rlc30gZnJvbSAnLi4vLi4vdGh1bmtzL2dldFZvdGVzVGh1bmsnO1xuaW1wb3J0IHt1blZvdGV9IGZyb20gJy4uLy4uL3RodW5rcy91blZvdGVUaHVuayc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlci9Mb2FkZXInO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvZXMvUGFwZXIvUGFwZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IHtjcmVhdGVNdWlUaGVtZSwgTXVpVGhlbWVQcm92aWRlcix9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cblxuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgIG1haW46ICcjRUE3OTI1JyxcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnIzAwNDRmZicsXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG5cblxuY2xhc3MgVXNlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW5lZDogZmFsc2UsXG4gICAgICAgICAgICBzZWFyY2hWYWx1ZTogJydcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkdldFZvdGVzKClcbiAgfVxuXG4gICAgb25TZWFyY2hCYXJDaGFuZ2UgPSBlID0+IHRoaXMuc2V0U3RhdGUoe3NlYXJjaFZhbHVlOiBlLnRhcmdldC52YWx1ZX0pXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICBjb25zdCB7dm90ZXN9ID0gdGhpcy5wcm9wcy52b3RlcztcbiAgICBjb25zdCB7b25VblZvdGV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3QgbG9hZGVyID0gPGRpdiBjbGFzc05hbWU9XCJMb2FkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgPExvYWRlciBjb2xvcj17JyNFQTc5MjUnfSBoPXsxMDB9Lz5cbiAgICAgIDwvZGl2PlxuXG4gICAgY29uc3Qgdm90ZXNBcnJheSA9IHZvdGVzLm1hcCh2b3RlID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXsnbWFpbid9ID5cbiAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9eydDYXJkJ30gIGtleT17dm90ZS5pZH0gPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnQ2FyZC10aXRsZSd9Pnt2b3RlLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnQ2FyZC1Nb25leVNwZW5kJ30gPlZvdGVkIEFtb3VudDoge3ZvdGUuYW1vdW50feKCrDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25VblZvdGUodm90ZS5pZCl9PlVuVm90ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICAgIClcbiAgICB9KVxuICAgICAgcmV0dXJuIChcblxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdVc2VyJz5cbiAgICAgICAgICAgICAgICAgIHt2b3Rlcy5sZW5ndGggPiAwID8gdm90ZXNBcnJheSA6IGxvYWRlcn1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdm90ZXM6IHN0YXRlLnZvdGVzXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvbkdldFZvdGVzOiAoKSA9PiBkaXNwYXRjaCh2b3RlcygpKSxcbiAgb25VblZvdGU6IChpZCkgPT4gZGlzcGF0Y2godW5Wb3RlKGlkKSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVc2VyKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge2NyZWF0ZVN0b3JlLCBjb21wb3NlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9yb290UmVkdWNlcic7XG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5pbXBvcnQgUm91dGVzIGZyb20gJy4vUm91dGVzJztcbmltcG9ydCAqIGFzIHNlcnZpY2VXb3JrZXIgZnJvbSAnLi9zZXJ2aWNlV29ya2VyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbidcblxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKHJlcXVlc3QgPT4ge1xuICByZXR1cm4gcmVxdWVzdDtcbn0pXG5cbmF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShyZXNwb25zZSA9PiB7XG4gIHJldHVybiByZXNwb25zZTtcbn0pXG5cbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIHx8IGNvbXBvc2U7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGNvbXBvc2VFbmhhbmNlcnMoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSkpO1xuXG5SZWFjdERPTS5yZW5kZXIoPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gIDxSb3V0ZXMvPlxuPC9Qcm92aWRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuXG5cbi8vIElmIHlvdSB3YW50IHlvdXIgYXBwIHRvIHdvcmsgb2ZmbGluZSBhbmQgbG9hZCBmYXN0ZXIsIHlvdSBjYW4gY2hhbmdlXG4vLyB1bnJlZ2lzdGVyKCkgdG8gcmVnaXN0ZXIoKSBiZWxvdy4gTm90ZSB0aGlzIGNvbWVzIHdpdGggc29tZSBwaXRmYWxscy5cbi8vIExlYXJuIG1vcmUgYWJvdXQgc2VydmljZSB3b3JrZXJzOiBodHRwczovL2JpdC5seS9DUkEtUFdBXG5zZXJ2aWNlV29ya2VyLnVucmVnaXN0ZXIoKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgZW1haWw6ICcnLFxuICAgIGFtb3VudDogMCxcbiAgICByb2xlOiBudWxsLFxuICAgIGlzQXV0aDogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuQVVUSF9VU0VSOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBlbWFpbDogYWN0aW9uLnVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgYW1vdW50OiBhY3Rpb24udXNlci5idWRnZXQsXG4gICAgICAgICAgICAgICAgcm9sZTogYWN0aW9uLnVzZXIucm9sZSxcbiAgICAgICAgICAgICAgICBpc0F1dGg6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSB0eXBlcy5MT0dfT1VUOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICAgICAgYW1vdW50OiAwLFxuICAgICAgICAgICAgICAgIHJvbGU6IG51bGwsXG4gICAgICAgICAgICAgICAgaXNBdXRoOiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSB0eXBlcy5WT1RFX1VTRVI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGFtb3VudDogc3RhdGUuYW1vdW50LWFjdGlvbi5hbW91bnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBlbWFpbDogJycsXG4gIHBhc3N3b3JkOiAnJyxcbiAgZXJyb3I6ICcnLFxuICBsb2FkaW5nOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5MT0dJTl9GT1JNX0lOUFVUX0NIQU5HRTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIFthY3Rpb24ubmFtZV06IGFjdGlvbi52YWx1ZX07XG4gICAgY2FzZSB0eXBlcy5MT0dJTl9GT1JNX0xPQURJTkc6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlcnJvcjogJycsIGxvYWRpbmc6IHRydWV9O1xuICAgIGNhc2UgdHlwZXMuTE9HSU5fRk9STV9FUlJPUjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVycm9yOiBhY3Rpb24uZXJyb3IsIGxvYWRpbmc6ZmFsc2V9O1xuICAgIGNhc2UgdHlwZXMuTE9HSU5fRk9STV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZW1haWw6ICcnLCBwYXNzd29yZDogJycsIGxvYWRpbmc6ZmFsc2V9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VybmFtZTogJycsXG4gIGhvYmJ5TmFtZTogJycsXG4gIGVtYWlsOiAnJyxcbiAgZGVzY3JpcHRpb246ICcnLFxuICBhbW91bnQ6ICcnLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgZXJyb3I6ICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgW2FjdGlvbi5uYW1lXTogYWN0aW9uLnZhbHVlfTtcbiAgICBjYXNlIHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfREFURV9DSEFOR0U6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlbmREYXRlOiBhY3Rpb24uZGF0ZX07XG4gICAgY2FzZSB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fTE9BRElORzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IHRydWV9O1xuICAgIGNhc2UgdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0VSUk9SOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXJyb3I6IGFjdGlvbi5lcnJvciwgbG9hZGluZzpmYWxzZX07XG4gICAgY2FzZSB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VybmFtZTogJycsXG4gICAgICAgIGhvYmJ5TmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgYW1vdW50OiAnJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBlbmREYXRlOiBudWxsLFxuICAgICAgICBsb2FkaW5nOmZhbHNlLFxuICAgICAgICBlcnJvcjonJ31cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgcHJvamVjdHM6IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5HRVRfUFJPSkVDVFM6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBwcm9qZWN0czogYWN0aW9uLnByb2plY3RzfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VybmFtZTogJycsXG4gIGVtYWlsOiAnJyxcbiAgcGFzc3dvcmQ6ICcnLFxuICBwYXNzd29yZDI6ICcnLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgZXJyb3I6ICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLlJFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgW2FjdGlvbi5uYW1lXTogYWN0aW9uLnZhbHVlfTtcbiAgICBjYXNlIHR5cGVzLlJFR0lTVEVSX0ZPUk1fTE9BRElORzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVycm9yOicnLCBsb2FkaW5nOiB0cnVlfTtcbiAgICBjYXNlIHR5cGVzLlJFR0lTVEVSX0ZPUk1fRVJST1I6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlcnJvcjogYWN0aW9uLmVycm9yLCBsb2FkaW5nOmZhbHNlfTtcbiAgICBjYXNlIHR5cGVzLlJFR0lTVEVSX0ZPUk1fU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHVzZXJuYW1lOiAnJywgZW1haWw6ICcnLCBwYXNzd29yZDogJycsIHBhc3N3b3JkMjogJycsIGVycm9yOiAnJywgbG9hZGluZzogZmFsc2V9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICAncmVkdXgnO1xuaW1wb3J0IGxvZ2luUmVkdWNlciBmcm9tICcuL2xvZ2luUmVkdWNlcic7XG5pbXBvcnQgcmVnaXN0ZXJSZWR1Y2VyIGZyb20gJy4vcmVnaXN0ZXJSZWR1Y2VyJztcbmltcG9ydCBwcm9qZWN0UmVnaXN0ZXJSZWR1Y2VyIGZyb20gJy4vcHJvamVjdFJlZ2lzdGVyUmVkdWNlcic7XG5pbXBvcnQgcHJvamVjdHNSZWR1Y2VyIGZyb20gJy4vcHJvamVjdHNSZWR1Y2VyJztcbmltcG9ydCBhdXRoUmVkdWNlciBmcm9tICcuL2F1dGhSZWR1Y2VyJztcbmltcG9ydCB2b3Rlc1JlZHVjZXIgZnJvbSAnLi92b3Rlc1JlZHVjZXInO1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGxvZ2luOiBsb2dpblJlZHVjZXIsXG4gIHJlZ2lzdGVyOiByZWdpc3RlclJlZHVjZXIsXG4gIHByb2plY3RSZWdpc3RlcjogcHJvamVjdFJlZ2lzdGVyUmVkdWNlcixcbiAgcHJvamVjdHM6IHByb2plY3RzUmVkdWNlcixcbiAgYXV0aDogYXV0aFJlZHVjZXIsXG4gIHZvdGVzOiB2b3Rlc1JlZHVjZXJcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdm90ZXM6IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9aW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuR0VUX1ZPVEVTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdm90ZXM6IGFjdGlvbi52b3Rlc31cbiAgICBjYXNlIHR5cGVzLlJFTU9WRV9WT1RFOlxuICAgICAgY29uc3Qgdm90ZXMgPSBzdGF0ZS52b3Rlcy5maWx0ZXIodm90ZSA9PiB2b3RlLmlkICE9PSBhY3Rpb24udm90ZUlEKVxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdm90ZXN9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSIsIi8vIFRoaXMgb3B0aW9uYWwgY29kZSBpcyB1c2VkIHRvIHJlZ2lzdGVyIGEgc2VydmljZSB3b3JrZXIuXG4vLyByZWdpc3RlcigpIGlzIG5vdCBjYWxsZWQgYnkgZGVmYXVsdC5cblxuLy8gVGhpcyBsZXRzIHRoZSBhcHAgbG9hZCBmYXN0ZXIgb24gc3Vic2VxdWVudCB2aXNpdHMgaW4gcHJvZHVjdGlvbiwgYW5kIGdpdmVzXG4vLyBpdCBvZmZsaW5lIGNhcGFiaWxpdGllcy4gSG93ZXZlciwgaXQgYWxzbyBtZWFucyB0aGF0IGRldmVsb3BlcnMgKGFuZCB1c2Vycylcbi8vIHdpbGwgb25seSBzZWUgZGVwbG95ZWQgdXBkYXRlcyBvbiBzdWJzZXF1ZW50IHZpc2l0cyB0byBhIHBhZ2UsIGFmdGVyIGFsbCB0aGVcbi8vIGV4aXN0aW5nIHRhYnMgb3BlbiBvbiB0aGUgcGFnZSBoYXZlIGJlZW4gY2xvc2VkLCBzaW5jZSBwcmV2aW91c2x5IGNhY2hlZFxuLy8gcmVzb3VyY2VzIGFyZSB1cGRhdGVkIGluIHRoZSBiYWNrZ3JvdW5kLlxuXG4vLyBUbyBsZWFybiBtb3JlIGFib3V0IHRoZSBiZW5lZml0cyBvZiB0aGlzIG1vZGVsIGFuZCBpbnN0cnVjdGlvbnMgb24gaG93IHRvXG4vLyBvcHQtaW4sIHJlYWQgaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQVxuXG5jb25zdCBpc0xvY2FsaG9zdCA9IEJvb2xlYW4oXG4gIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgfHxcbiAgICAvLyBbOjoxXSBpcyB0aGUgSVB2NiBsb2NhbGhvc3QgYWRkcmVzcy5cbiAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICdbOjoxXScgfHxcbiAgICAvLyAxMjcuMC4wLjEvOCBpcyBjb25zaWRlcmVkIGxvY2FsaG9zdCBmb3IgSVB2NC5cbiAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUubWF0Y2goXG4gICAgICAvXjEyNyg/OlxcLig/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPykpezN9JC9cbiAgICApXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXIoY29uZmlnKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAvLyBUaGUgVVJMIGNvbnN0cnVjdG9yIGlzIGF2YWlsYWJsZSBpbiBhbGwgYnJvd3NlcnMgdGhhdCBzdXBwb3J0IFNXLlxuICAgIGNvbnN0IHB1YmxpY1VybCA9IG5ldyBVUkwocHJvY2Vzcy5lbnYuUFVCTElDX1VSTCwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIGlmIChwdWJsaWNVcmwub3JpZ2luICE9PSB3aW5kb3cubG9jYXRpb24ub3JpZ2luKSB7XG4gICAgICAvLyBPdXIgc2VydmljZSB3b3JrZXIgd29uJ3Qgd29yayBpZiBQVUJMSUNfVVJMIGlzIG9uIGEgZGlmZmVyZW50IG9yaWdpblxuICAgICAgLy8gZnJvbSB3aGF0IG91ciBwYWdlIGlzIHNlcnZlZCBvbi4gVGhpcyBtaWdodCBoYXBwZW4gaWYgYSBDRE4gaXMgdXNlZCB0b1xuICAgICAgLy8gc2VydmUgYXNzZXRzOyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2NyZWF0ZS1yZWFjdC1hcHAvaXNzdWVzLzIzNzRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHN3VXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vc2VydmljZS13b3JrZXIuanNgO1xuXG4gICAgICBpZiAoaXNMb2NhbGhvc3QpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBydW5uaW5nIG9uIGxvY2FsaG9zdC4gTGV0J3MgY2hlY2sgaWYgYSBzZXJ2aWNlIHdvcmtlciBzdGlsbCBleGlzdHMgb3Igbm90LlxuICAgICAgICBjaGVja1ZhbGlkU2VydmljZVdvcmtlcihzd1VybCwgY29uZmlnKTtcblxuICAgICAgICAvLyBBZGQgc29tZSBhZGRpdGlvbmFsIGxvZ2dpbmcgdG8gbG9jYWxob3N0LCBwb2ludGluZyBkZXZlbG9wZXJzIHRvIHRoZVxuICAgICAgICAvLyBzZXJ2aWNlIHdvcmtlci9QV0EgZG9jdW1lbnRhdGlvbi5cbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbigoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAnVGhpcyB3ZWIgYXBwIGlzIGJlaW5nIHNlcnZlZCBjYWNoZS1maXJzdCBieSBhIHNlcnZpY2UgJyArXG4gICAgICAgICAgICAgICd3b3JrZXIuIFRvIGxlYXJuIG1vcmUsIHZpc2l0IGh0dHBzOi8vYml0Lmx5L0NSQS1QV0EnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJcyBub3QgbG9jYWxob3N0LiBKdXN0IHJlZ2lzdGVyIHNlcnZpY2Ugd29ya2VyXG4gICAgICAgIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCwgY29uZmlnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWdpc3RlclZhbGlkU1coc3dVcmwsIGNvbmZpZykge1xuICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxuICAgIC5yZWdpc3Rlcihzd1VybClcbiAgICAudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgcmVnaXN0cmF0aW9uLm9udXBkYXRlZm91bmQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluc3RhbGxpbmdXb3JrZXIgPSByZWdpc3RyYXRpb24uaW5zdGFsbGluZztcbiAgICAgICAgaWYgKGluc3RhbGxpbmdXb3JrZXIgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YWxsaW5nV29ya2VyLm9uc3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKGluc3RhbGxpbmdXb3JrZXIuc3RhdGUgPT09ICdpbnN0YWxsZWQnKSB7XG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50LCB0aGUgdXBkYXRlZCBwcmVjYWNoZWQgY29udGVudCBoYXMgYmVlbiBmZXRjaGVkLFxuICAgICAgICAgICAgICAvLyBidXQgdGhlIHByZXZpb3VzIHNlcnZpY2Ugd29ya2VyIHdpbGwgc3RpbGwgc2VydmUgdGhlIG9sZGVyXG4gICAgICAgICAgICAgIC8vIGNvbnRlbnQgdW50aWwgYWxsIGNsaWVudCB0YWJzIGFyZSBjbG9zZWQuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICdOZXcgY29udGVudCBpcyBhdmFpbGFibGUgYW5kIHdpbGwgYmUgdXNlZCB3aGVuIGFsbCAnICtcbiAgICAgICAgICAgICAgICAgICd0YWJzIGZvciB0aGlzIHBhZ2UgYXJlIGNsb3NlZC4gU2VlIGh0dHBzOi8vYml0Lmx5L0NSQS1QV0EuJ1xuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIC8vIEV4ZWN1dGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcub25VcGRhdGUpIHtcbiAgICAgICAgICAgICAgICBjb25maWcub25VcGRhdGUocmVnaXN0cmF0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgZXZlcnl0aGluZyBoYXMgYmVlbiBwcmVjYWNoZWQuXG4gICAgICAgICAgICAgIC8vIEl0J3MgdGhlIHBlcmZlY3QgdGltZSB0byBkaXNwbGF5IGFcbiAgICAgICAgICAgICAgLy8gXCJDb250ZW50IGlzIGNhY2hlZCBmb3Igb2ZmbGluZSB1c2UuXCIgbWVzc2FnZS5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRlbnQgaXMgY2FjaGVkIGZvciBvZmZsaW5lIHVzZS4nKTtcblxuICAgICAgICAgICAgICAvLyBFeGVjdXRlIGNhbGxiYWNrXG4gICAgICAgICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLm9uU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5vblN1Y2Nlc3MocmVnaXN0cmF0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbjonLCBlcnJvcik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyKHN3VXJsLCBjb25maWcpIHtcbiAgLy8gQ2hlY2sgaWYgdGhlIHNlcnZpY2Ugd29ya2VyIGNhbiBiZSBmb3VuZC4gSWYgaXQgY2FuJ3QgcmVsb2FkIHRoZSBwYWdlLlxuICBmZXRjaChzd1VybClcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAvLyBFbnN1cmUgc2VydmljZSB3b3JrZXIgZXhpc3RzLCBhbmQgdGhhdCB3ZSByZWFsbHkgYXJlIGdldHRpbmcgYSBKUyBmaWxlLlxuICAgICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJyk7XG4gICAgICBpZiAoXG4gICAgICAgIHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0IHx8XG4gICAgICAgIChjb250ZW50VHlwZSAhPSBudWxsICYmIGNvbnRlbnRUeXBlLmluZGV4T2YoJ2phdmFzY3JpcHQnKSA9PT0gLTEpXG4gICAgICApIHtcbiAgICAgICAgLy8gTm8gc2VydmljZSB3b3JrZXIgZm91bmQuIFByb2JhYmx5IGEgZGlmZmVyZW50IGFwcC4gUmVsb2FkIHRoZSBwYWdlLlxuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICAgICAgcmVnaXN0cmF0aW9uLnVucmVnaXN0ZXIoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTZXJ2aWNlIHdvcmtlciBmb3VuZC4gUHJvY2VlZCBhcyBub3JtYWwuXG4gICAgICAgIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCwgY29uZmlnKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgJ05vIGludGVybmV0IGNvbm5lY3Rpb24gZm91bmQuIEFwcCBpcyBydW5uaW5nIGluIG9mZmxpbmUgbW9kZS4nXG4gICAgICApO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3RlcigpIHtcbiAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICByZWdpc3RyYXRpb24udW5yZWdpc3RlcigpO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0VXNlckZyb21MUygpIHtcbiAgY29uc3QgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdob2JieUNyYWZ0LXVzZXInKVxuICByZXR1cm4gSlNPTi5wYXJzZSh1c2VyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFVzZXJUb0xTKHVzZXIpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hvYmJ5Q3JhZnQtdXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxuICByZXR1cm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VVc2VyQW1vdW50SW5MUyhhbW91bnQpIHtcbiAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hvYmJ5Q3JhZnQtdXNlcicpKVxuICB1c2VyLmJ1ZGdldCA9IHVzZXIuYnVkZ2V0IC0gYW1vdW50O1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaG9iYnlDcmFmdC11c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpXG4gIHJldHVybjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVVzZXJGcm9tTFMoKSB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdob2JieUNyYWZ0LXVzZXInKVxuICByZXR1cm47XG59XG5cbiIsImltcG9ydCB7Z2V0UHJvamVjdHN9IGZyb20gJy4uL2FjdGlvbnMvcHJvamVjdHNBY3Rpb24nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgY29uc3Qgc2V0UHJvamVjdExpc3QgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBheGlvc1xuICAgICAgLmdldCgnL2FwaS9ob2JiaWVzJylcbiAgICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChnZXRQcm9qZWN0cyhyZXMuZGF0YSkpKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgcmV0dXJuIHByb2plY3RMaXN0O1xufSIsImltcG9ydCB7Z2V0Vm90ZXN9IGZyb20gJy4uL2FjdGlvbnMvdm90ZXNBY3Rpb25zJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCB2b3RlcyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICBheGlvcy5nZXQoJy9hcGkvdXNlci92b3RlcycpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBkaXNwYXRjaChnZXRWb3RlcyhyZXMuZGF0YSkpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgcmV0dXJuIG51bGw7XG59IiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2xvZ2luQWN0aW9ucyc7XG5pbXBvcnQge2F1dGhVc2VyfSBmcm9tICcuLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge3NldFVzZXJUb0xTfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UnO1xuXG5leHBvcnQgY29uc3Qgb25Gb3JtU3VibWl0ID0gKHVzZXIsIGhpc3RvcnkpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChhY3Rpb25zLm9uRm9ybUxvYWRpbmcoKSk7XG4gIGlmKHVzZXIuZW1haWwgPT09ICcnIHx8IHVzZXIucGFzc3dvcmQgPT09ICcnICkge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25zLm9uTG9naW5Gb3JtRXJyb3IoJ1BsZWFzZSBmaWxsIGZpZWxkcycpKTtcbiAgfVxuICBjb25zdCBsb2dpbkpzb24gPSBcdHtcbiAgICAgIFwic2VjdXJpdHlcIjoge1xuICAgICAgICAgIFwiY3JlZGVudGlhbHNcIjoge1xuICAgICAgICAgICAgICBcImVtYWlsXCI6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgIFwicGFzc3dvcmRcIjogdXNlci5wYXNzd29yZFxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICBheGlvcy5wb3N0KCcvYXBpL3NlY3VyaXR5L2xvZ2luJywgbG9naW5Kc29uKVxuICAgICAgLnRoZW4ocmVzID0+e1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgICAgc2V0VXNlclRvTFMocmVzLmRhdGEpXG4gICAgICAgIGRpc3BhdGNoKGF1dGhVc2VyKHJlcy5kYXRhKSlcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5vbkxvZ2luRm9ybVN1Y2Nlc3ModXNlcikpXG4gICAgICAgIGhpc3RvcnkucHVzaCgnLycpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5vbkxvZ2luRm9ybUVycm9yKGVyci5yZXNwb25zZS5kYXRhLmVycm9yID8gZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3IgOlxuICAgICAgICAgICdTZXJ2ZXIgRXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXInKSlcbiAgICAgICAgfVxuICAgICAgKVxufSIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XG5pbXBvcnQge3JlbW92ZVVzZXJGcm9tTFN9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZSdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCBvbkxvZ091dCA9IChoaXN0b3J5KSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgYXhpb3MuZ2V0KCcvYXBpL3NlY3VyaXR5L2xvZ291dCcpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICByZW1vdmVVc2VyRnJvbUxTKClcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5sb2dvdXQoKSlcbiAgICAgICAgaGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICByZXR1cm4gbnVsbDtcbn0iLCJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvcHJvamVjdFJlZ2lzdGVyQWN0aW9ucyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3Qgb25Qcm9qZWN0UmVnaXN0ZXJGb3JtU3VibWl0ID0gKHByb2plY3RJbmZvLCBoaXN0b3J5LCBlbWFpbCkgPT4gKGRpc3BhdGNoKSA9PiB7XG5cbiAgZGlzcGF0Y2goYWN0aW9ucy5vblByb2plY3RSZWdpc3RlckZvcm1Mb2FkaW5nKCkpO1xuICBpZihwcm9qZWN0SW5mby5ob2JieU5hbWUgPT09ICcnIHx8XG4gIHByb2plY3RJbmZvLmRlc2NyaXB0aW9uID09PSAnJyB8fCBwcm9qZWN0SW5mby5hbW91bnQgPT09ICcnICkge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25zLm9uUHJvamVjdFJlZ2lzdGVyRm9ybUVycm9yKCdQbGVhc2UgZmlsbCBhbGwgZmllbGRzJykpXG4gIH1cblxuICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgIFwidGl0bGVcIjogcHJvamVjdEluZm8uaG9iYnlOYW1lLFxuICAgIFwiZGVzY3JpcHRpb25cIjogcHJvamVjdEluZm8uZGVzY3JpcHRpb24sXG4gICAgXCJhbW91bnRcIjogcHJvamVjdEluZm8uYW1vdW50LFxuICAgIFwiZW1haWxcIjogZW1haWxcbiAgfSk7XG4gIGF4aW9zXG4gICAgICAucG9zdCgnL2FwaS9ob2JieScsanNvbilcbiAgICAudGhlbihyZXM9PntcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMub25Qcm9qZWN0UmVnaXN0ZXJGb3JtU3VibWl0KHJlcykpO1xuICAgICAgaGlzdG9yeS5wdXNoKCcvcHJvamVjdHMnKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBkaXNwYXRjaChhY3Rpb25zLm9uUHJvamVjdFJlZ2lzdGVyRm9ybUVycm9yKCdTZXJ2ZXIgZXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJykpXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9KVxuXG59IiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3JlZ2lzdGVyQWN0aW9ucyc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge3NldFVzZXJUb0xTfSBmcm9tIFwiLi4vc3RvcmFnZS9zdG9yYWdlXCI7XG5pbXBvcnQge2F1dGhVc2VyfSBmcm9tIFwiLi4vYWN0aW9ucy9hdXRoQWN0aW9uc1wiO1xuXG5leHBvcnQgY29uc3Qgb25SZWdpc3RlckZvcm1TdWJtaXQgPSAodXNlciwgaGlzdG9yeSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKGFjdGlvbnMub25Gb3JtTG9hZGluZygpKTtcbiAgaWYodXNlci5lbWFpbCA9PT0gJycgfHwgdXNlci5wYXNzd29yZCA9PT0gJycgfHwgdXNlci5wYXNzd29yZDIgPT09ICcnKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbnMub25SZWdpc3RlckZvcm1FcnJvcignUGxlYXNlIGZpbGwgZmllbGRzJykpO1xuICB9XG4gIGlmKHVzZXIucGFzc3dvcmQgIT09IHVzZXIucGFzc3dvcmQyKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbnMub25SZWdpc3RlckZvcm1FcnJvcignUGFzc3dvcmRzIGRvZXNuXFwndCBtYXRjaCcpKTtcbiAgfVxuICBpZih1c2VyLnBhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9ucy5vblJlZ2lzdGVyRm9ybUVycm9yKCdQYXNzd29yZCBsZW5ndGggbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcicpKTtcbiAgfVxuICBjb25zdCByZWdpc3Rlckpzb24gPSB7XG4gICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXG4gIH07XG5cbiAgYXhpb3MucG9zdCgnL2FwaS9zZWN1cml0eS9yZWdpc3RlcicsIHJlZ2lzdGVySnNvbilcbiAgICAgIC50aGVuKHJlcyA9PntcbiAgICAgICAgc2V0VXNlclRvTFMocmVzLmRhdGEpXG4gICAgICAgIGRpc3BhdGNoKGF1dGhVc2VyKHJlcy5kYXRhKSlcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5vblJlZ2lzdGVyRm9ybVN1Y2Nlc3MocmVnaXN0ZXJKc29uKSlcbiAgICAgICAgaGlzdG9yeS5wdXNoKCcvJylcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbnMub25SZWdpc3RlckZvcm1FcnJvcihlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMuY2hpbGRyZW4uZW1haWwuZXJyb3JzID9cbiAgICAgICAgICAgICAgICBlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMuY2hpbGRyZW4uZW1haWwuZXJyb3JzXG4gICAgICAgICAgICAgICAgOiAnU2VydmVyIGVycm9yLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpKVxuICAgICAgICAgIH1cbiAgICAgIClcblxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge3JlbW92ZVZvdGV9IGZyb20gJy4uL2FjdGlvbnMvdm90ZXNBY3Rpb25zJ1xuXG5leHBvcnQgY29uc3QgdW5Wb3RlID0gKHZvdGVJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGF4aW9zLmRlbGV0ZShgL2FwaS92b3RlLyR7dm90ZUlkfWApXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBkaXNwYXRjaChyZW1vdmVWb3RlKHZvdGVJZCkpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgcmV0dXJuIG51bGw7XG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7c2V0UHJvamVjdExpc3R9IGZyb20gJy4vZ2V0UHJvamVjdHMnO1xuaW1wb3J0IHtjaGFuZ2VVc2VyQW1vdW50SW5MU30gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlJ1xuaW1wb3J0IHt2b3RlVXNlcn0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBvblZvdGUgPSAocHJvamVjdElkLCBhbW91bnQpID0+IChkaXNwYXRjaCkgPT4ge1xuICBheGlvcy5wb3N0KCcvYXBpL3ZvdGUnLCB7XG4gICAgaG9iYnk6IHByb2plY3RJZCxcbiAgICBhbW91bnQ6IGFtb3VudFxuICB9KS50aGVuKHJlcz0+e1xuICAgIGNoYW5nZVVzZXJBbW91bnRJbkxTKGFtb3VudCk7XG4gICAgZGlzcGF0Y2goc2V0UHJvamVjdExpc3QoKSk7XG4gICAgZGlzcGF0Y2godm90ZVVzZXIoYW1vdW50KSk7XG4gIH0pLmNhdGNoKGVycj0+IGNvbnNvbGUubG9nKGVycikpXG5cbiAgcmV0dXJuIG51bGw7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==