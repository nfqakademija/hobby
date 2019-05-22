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
      }, this.props.auth.email, "  ", this.props.auth.amount, "\u20AC") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.button
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
        onClick: this.props.onLogoutClick,
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
    onLogoutClick: function onLogoutClick() {
      return dispatch(Object(_thunks_logoutThunk__WEBPACK_IMPORTED_MODULE_7__["onLogOut"])());
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














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
    _this.state = {
      opened: false
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
      var _this$props = this.props,
          projects = _this$props.projects,
          onVoteClick = _this$props.onVoteClick;
      var amount = this.props.auth.amount;
      var projectsList;

      if (projects.length !== 0) {
        projectsList = projects && projects.map(function (project, i) {
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
        projectsList = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
          variant: "h4",
          gutterBottom: true,
          align: "center"
        }, "Projects will be here soon...");
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["MuiThemeProvider"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ProjectsList"
      }, projectsList, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_18___default.a, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
        variant: "h5",
        gutterBottom: true,
        align: "center"
      }, "Sign Up"), error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_13___default.a, {
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
      var votesArray = votes.map(function (vote) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Vote",
          key: vote.id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Voted Hobby: ", vote.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Voted Amount: ", vote.amount, "\u20AC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: function onClick() {
            return onUnVote(vote.id);
          }
        }, "UnVote"));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "User"
      }, "My Votes", votesArray);
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



var onLogOut = function onLogOut() {
  return function (dispatch) {
    console.log('LOGOUT');
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

    if (user.password.length < 6) {
      return dispatch(_actions_registerActions__WEBPACK_IMPORTED_MODULE_0__["onRegisterFormError"]('Password length must be at least 6 character'));
    }

    var registerJson = {
      email: user.email,
      password: user.password
    };
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/security/register', registerJson).then(function (res) {
      dispatch(_actions_registerActions__WEBPACK_IMPORTED_MODULE_0__["onRegisterFormSuccess"](registerJson));
      history.push('/login');
    })["catch"](function (err) {
      console.log(err.response);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvUm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL2xvZ2luQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy9wcm9qZWN0UmVnaXN0ZXJBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3Byb2plY3RzQWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3JlZ2lzdGVyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy92b3Rlc0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS9Ib21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0hvbWUvSG9tZS5zY3NzPzBkNDEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2FkZXIvbG9hZGVyLnNjc3M/OTc3MiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5zY3NzP2Y4M2YiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qcm9qZWN0SW5mby9Qcm9qZWN0SW5mby5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qcm9qZWN0SW5mby9Qcm9qZWN0SW5mby5zY3NzPzAzMTUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdFJlZ2lzdHJhdGlvbi9Qcm9qZWN0UmVnaXN0cmF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RSZWdpc3RyYXRpb24vUHJvamVjdFJlZ2lzdHJhdGlvbi5zY3NzPzRjZTgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdHNMaXN0L1Byb2plY3RzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qcm9qZWN0c0xpc3QvUHJvamVjdHNMaXN0LnNjc3M/NGQ3NSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SZWdpc3Rlci9SZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SZWdpc3Rlci9SZWdpc3Rlci5zY3NzP2MyNmIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVXNlci9Vc2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VzZXIvVXNlci5zY3NzP2FkZDYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9pbmRleC5zY3NzPzk3Y2YiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL2F1dGhSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy9sb2dpblJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL3Byb2plY3RSZWdpc3RlclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL3Byb2plY3RzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvcmVnaXN0ZXJSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy9yb290UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvdm90ZXNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZXJ2aWNlV29ya2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdG9yYWdlL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RodW5rcy9nZXRQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL2dldFZvdGVzVGh1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RodW5rcy9sb2dpblRodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3MvbG9nb3V0VGh1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RodW5rcy9wcm9qZWN0UmVnaXN0ZXJUaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL3JlZ2lzdGVyVGh1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RodW5rcy91blZvdGVUaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL3ZvdGVUaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF5cXC5cXC8uKiQiXSwibmFtZXMiOlsiUm91dGVzIiwidXNlciIsImdldFVzZXJGcm9tTFMiLCJwcm9wcyIsIm9uTG9hZEF1dGgiLCJpc0F1dGgiLCJhdXRoIiwicHJvY2VzcyIsIlBVQkxJQ19VUkwiLCJIb21lIiwiUHJvamVjdHNMaXN0IiwiTG9naW4iLCJSZWdpc3RlciIsIlByb2plY3RSZWdpc3RyYXRpb24iLCJQcm9qZWN0SW5mbyIsIlVzZXIiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYXV0aFVzZXIiLCJjb25uZWN0IiwidHlwZSIsInR5cGVzIiwibG9nb3V0IiwiTE9HX09VVCIsInZvdGVVc2VyIiwiYW1vdW50Iiwib25JbnB1dENoYW5nZSIsImUiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJvbkZvcm1Mb2FkaW5nIiwiTE9HSU5fRk9STV9MT0FESU5HIiwib25Mb2dpbkZvcm1FcnJvciIsImVycm9yIiwib25Mb2dpbkZvcm1TdWNjZXNzIiwib25EYXRlQ2hhbmdlIiwiZGF0ZSIsIm9uUHJvamVjdFJlZ2lzdGVyRm9ybUxvYWRpbmciLCJQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fTE9BRElORyIsIm9uUHJvamVjdFJlZ2lzdGVyRm9ybUVycm9yIiwib25Qcm9qZWN0UmVnaXN0ZXJGb3JtU3VibWl0IiwicHJvamVjdEluZm8iLCJnZXRQcm9qZWN0cyIsInByb2plY3RzIiwiUkVHSVNURVJfRk9STV9MT0FESU5HIiwib25SZWdpc3RlckZvcm1FcnJvciIsIm9uUmVnaXN0ZXJGb3JtU3VjY2VzcyIsIkxPR0lOX0ZPUk1fSU5QVVRfQ0hBTkdFIiwiTE9HSU5fRk9STV9FUlJPUiIsIkxPR0lOX0ZPUk1fU1VDQ0VTUyIsIlJFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFIiwiUkVHSVNURVJfRk9STV9FUlJPUiIsIlJFR0lTVEVSX0ZPUk1fU1VDQ0VTUyIsIlBST0pFQ1RfUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UiLCJQUk9KRUNUX1JFR0lTVEVSX0RBVEVfQ0hBTkdFIiwiUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0VSUk9SIiwiUFJPSkVDVF9SRUdJU1RFUl9GT1JNX1NVQ0NFU1MiLCJHRVRfUFJPSkVDVFMiLCJBVVRIX1VTRVIiLCJWT1RFX1VTRVIiLCJHRVRfVk9URVMiLCJSRU1PVkVfVk9URSIsImdldFZvdGVzIiwidm90ZXMiLCJyZW1vdmVWb3RlIiwidm90ZUlEIiwidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsIlJvdXRlckxpbmsiLCJMb2FkZXIiLCJjb2xvciIsImgiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJpZ2h0IiwiYm9yZGVyTGVmdCIsImJvcmRlclRvcCIsImJvcmRlckJvdHRvbSIsInN0eWxlcyIsImRpc3BsYXkiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsInVuaXQiLCJtYXJnaW5SaWdodCIsImJyZWFrcG9pbnRzIiwidXAiLCJwYXBlciIsIm1hcmdpblRvcCIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImF2YXRhciIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsImZvcm0iLCJ0ZXh0RmllbGQiLCJzdWJtaXQiLCJyb290IiwiYmFja2dyb3VuZCIsImRhcmsiLCJpY29uIiwiZm9udFNpemUiLCJtZXNzYWdlIiwib3BlbiIsInNldFN0YXRlIiwiZXZlbnQiLCJyZWFzb24iLCJwcmV2ZW50RGVmYXVsdCIsIm9uRm9ybVN1Ym1pdCIsImxvZ2luIiwiaGlzdG9yeSIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2FkaW5nIiwiY2xhc3NlcyIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsImhhbmRsZUNsb3NlIiwiY2xvc2UiLCJoYW5kbGVDbGljayIsImFjdGlvbnMiLCJ3aXRoU3R5bGVzIiwibWVudWJhciIsInBvc2l0aW9uIiwiZ3JvdyIsImZsZXhHcm93IiwiYWxpZ24iLCJ0aXRsZSIsInNlY3Rpb25EZXNrdG9wIiwiYnV0dG9uIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJidXR0b25TaW5nVXAiLCJib3JkZXJSYWRpdXMiLCJmb250V2VpZ2h0Iiwic2VjdGlvbk1vYmlsZSIsInRpdGxlTW9iaWxlIiwiSWNvbk1vYmlsZSIsIk5hdkJhciIsIlJvdXRlckxpbmtOYXYiLCJvbkxvZ291dENsaWNrIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIkxvZ291dCIsImZpbHRlciIsInByb2plY3QiLCJpZCIsInRvU3RyaW5nIiwibWF0Y2giLCJwYXJhbXMiLCJtYXAiLCJpIiwiYnVkZ2V0IiwiZGVzY3JpcHRpb24iLCJ1c2VybmFtZSIsInByb2plY3RSZWdpc3RlciIsImhvYmJ5TmFtZSIsImNvbnRhaW5lciIsIm9wZW5lZCIsIm9uR2V0UHJvamVjdHNMaXN0Iiwib25Wb3RlQ2xpY2siLCJwcm9qZWN0c0xpc3QiLCJsZW5ndGgiLCJzZXRQcm9qZWN0TGlzdCIsInByb2plY3RJZCIsIm9uVm90ZSIsInJlZ2lzdGVyIiwicGFzc3dvcmQyIiwib25SZWdpc3RlckZvcm1TdWJtaXQiLCJvbkdldFZvdGVzIiwib25VblZvdGUiLCJ2b3Rlc0FycmF5Iiwidm90ZSIsInVuVm90ZSIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwicG9zdCIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJyZXNwb25zZSIsImNvbXBvc2VFbmhhbmNlcnMiLCJ3aW5kb3ciLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18iLCJjb21wb3NlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJvb3RSZWR1Y2VyIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXJ2aWNlV29ya2VyIiwiaW5pdGlhbFN0YXRlIiwiYWN0aW9uIiwiZW5kRGF0ZSIsImNvbWJpbmVSZWR1Y2VycyIsImxvZ2luUmVkdWNlciIsInJlZ2lzdGVyUmVkdWNlciIsInByb2plY3RSZWdpc3RlclJlZHVjZXIiLCJwcm9qZWN0c1JlZHVjZXIiLCJhdXRoUmVkdWNlciIsInZvdGVzUmVkdWNlciIsImlzTG9jYWxob3N0IiwiQm9vbGVhbiIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJjb25maWciLCJyZWdpc3RlclZhbGlkU1ciLCJzd1VybCIsIm5hdmlnYXRvciIsInRoZW4iLCJyZWdpc3RyYXRpb24iLCJvbnVwZGF0ZWZvdW5kIiwiaW5zdGFsbGluZ1dvcmtlciIsImluc3RhbGxpbmciLCJvbnN0YXRlY2hhbmdlIiwiY29udHJvbGxlciIsImNvbnNvbGUiLCJsb2ciLCJvblVwZGF0ZSIsIm9uU3VjY2VzcyIsImNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyIiwiZmV0Y2giLCJjb250ZW50VHlwZSIsImdldCIsInN0YXR1cyIsImluZGV4T2YiLCJyZWFkeSIsInVucmVnaXN0ZXIiLCJyZWxvYWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic2V0VXNlclRvTFMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiY2hhbmdlVXNlckFtb3VudEluTFMiLCJyZW1vdmVVc2VyRnJvbUxTIiwicmVtb3ZlSXRlbSIsInByb2plY3RMaXN0IiwicmVzIiwiZGF0YSIsImxvZ2luSnNvbiIsInB1c2giLCJlcnIiLCJvbkxvZ091dCIsImZvcm1hdHRlZERhdGUiLCJtb21lbnQiLCJmb3JtYXQiLCJqc29uIiwicmVnaXN0ZXJKc29uIiwiZXJyb3JzIiwiY2hpbGRyZW4iLCJ2b3RlSWQiLCJob2JieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUtNQSxNOzs7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUNsQixVQUFNQyxJQUFJLEdBQUdDLHNFQUFhLEVBQTFCO0FBQ0FELFVBQUksR0FBRyxLQUFLRSxLQUFMLENBQVdDLFVBQVgsQ0FBc0JILElBQXRCLENBQUgsR0FBaUMsSUFBckM7QUFDRDs7OzZCQUVRO0FBQUEsVUFDQUksTUFEQSxHQUNTLEtBQUtGLEtBQUwsQ0FBV0csSUFEcEIsQ0FDQUQsTUFEQTtBQUVQLGFBQ0UsMkRBQUMsOERBQUQ7QUFBZSxnQkFBUSxFQUFFRSxrQ0FBQSxDQUFZQztBQUFyQyxTQUNFLDJEQUFDLDhDQUFELFFBQ0UsMkRBQUMsaUVBQUQsT0FERixFQUVFLDJEQUFDLHVEQUFELFFBQ0UsMkRBQUMsc0RBQUQ7QUFBTyxhQUFLLE1B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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIEJyb3dzZXJSb3V0ZXIsUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtnZXRVc2VyRnJvbUxTfSBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZSc7XG5pbXBvcnQge2F1dGhVc2VyfSBmcm9tICcuL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUvSG9tZSc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyJztcbmltcG9ydCBQcm9qZWN0c0xpc3QgZnJvbSAgJy4vY29tcG9uZW50cy9Qcm9qZWN0c0xpc3QvUHJvamVjdHNMaXN0JztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4vTG9naW4nO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vY29tcG9uZW50cy9SZWdpc3Rlci9SZWdpc3Rlcic7XG5pbXBvcnQgUHJvamVjdFJlZ2lzdHJhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdFJlZ2lzdHJhdGlvbi9Qcm9qZWN0UmVnaXN0cmF0aW9uJztcbmltcG9ydCBQcm9qZWN0SW5mbyBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdEluZm8vUHJvamVjdEluZm8nO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9jb21wb25lbnRzL1VzZXIvVXNlcic7XG5cblxuXG5cbmNsYXNzIFJvdXRlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHVzZXIgPSBnZXRVc2VyRnJvbUxTKCk7XG4gICAgdXNlciA/IHRoaXMucHJvcHMub25Mb2FkQXV0aCh1c2VyKSA6IG51bGxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7aXNBdXRofSA9dGhpcy5wcm9wcy5hdXRoXG4gICAgcmV0dXJuIChcbiAgICAgIDxCcm93c2VyUm91dGVyIGJhc2VuYW1lPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfT5cbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgY29tcG9uZW50PXtIb21lfS8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL3Byb2plY3RzJyBjb21wb25lbnQ9e1Byb2plY3RzTGlzdH0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9sb2dpbicgY29tcG9uZW50PXtMb2dpbn0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9yZWdpc3RlcicgY29tcG9uZW50PXtSZWdpc3Rlcn0vPlxuICAgICAgICAgICAge2lzQXV0aCA/IDxSb3V0ZSBwYXRoPScvcHJvamVjdC1yZWdpc3RyYXRpb24nIGNvbXBvbmVudD17UHJvamVjdFJlZ2lzdHJhdGlvbn0vPiA6IDxSZWRpcmVjdCB0bz0nL2xvZ2luJy8+fVxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9hZG1pbicgLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvcHJvamVjdC86aWQnIGNvbXBvbmVudD17UHJvamVjdEluZm99Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvdXNlcicgY29tcG9uZW50PXtVc2VyfSAvPlxuICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgPC9Ccm93c2VyUm91dGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYXV0aDogc3RhdGUuYXV0aFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgb25Mb2FkQXV0aDogKHVzZXIpID0+IGRpc3BhdGNoKGF1dGhVc2VyKHVzZXIpKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoUm91dGVzKTtcbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXV0aFVzZXIodXNlcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkFVVEhfVVNFUixcbiAgICAgICAgdXNlclxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5MT0dfT1VUXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdm90ZVVzZXIoYW1vdW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVk9URV9VU0VSLFxuICAgICAgICBhbW91bnRcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbklucHV0Q2hhbmdlKGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5MT0dJTl9GT1JNX0lOUFVUX0NIQU5HRSxcbiAgICBuYW1lOiBlLnRhcmdldC5uYW1lLFxuICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkZvcm1Mb2FkaW5nKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLkxPR0lOX0ZPUk1fTE9BRElOR1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvZ2luRm9ybUVycm9yKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuTE9HSU5fRk9STV9FUlJPUixcbiAgICBlcnJvclxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvZ2luRm9ybVN1Y2Nlc3ModXNlcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6dHlwZXMuTE9HSU5fRk9STV9TVUNDRVNTLFxuICAgIHVzZXJcbiAgfVxufSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gb25JbnB1dENoYW5nZShlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRSxcbiAgICBuYW1lOiBlLnRhcmdldC5uYW1lLFxuICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkRhdGVDaGFuZ2UoZGF0ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfREFURV9DSEFOR0UsXG4gICAgZGF0ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblByb2plY3RSZWdpc3RlckZvcm1Mb2FkaW5nKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9MT0FESU5HXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uUHJvamVjdFJlZ2lzdGVyRm9ybUVycm9yKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0VSUk9SLFxuICAgIGVycm9yXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uUHJvamVjdFJlZ2lzdGVyRm9ybVN1Ym1pdChwcm9qZWN0SW5mbykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9TVUNDRVNTLFxuICAgIHByb2plY3RJbmZvXG4gIH1cbn0iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RzKHByb2plY3RzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuR0VUX1BST0pFQ1RTLFxuICAgIHByb2plY3RzXG4gIH1cbn0iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uSW5wdXRDaGFuZ2UoZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlJFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFLFxuICAgIG5hbWU6IGUudGFyZ2V0Lm5hbWUsXG4gICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRm9ybUxvYWRpbmcoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuUkVHSVNURVJfRk9STV9MT0FESU5HXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uUmVnaXN0ZXJGb3JtRXJyb3IoZXJyb3IpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5SRUdJU1RFUl9GT1JNX0VSUk9SLFxuICAgIGVycm9yXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uUmVnaXN0ZXJGb3JtU3VjY2Vzcyh1c2VyKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTp0eXBlcy5SRUdJU1RFUl9GT1JNX1NVQ0NFU1MsXG4gICAgdXNlclxuICB9XG59IiwiLy8gTG9naW4gdHlwZXNcblxuZXhwb3J0IGNvbnN0IExPR0lOX0ZPUk1fSU5QVVRfQ0hBTkdFID0gJ0xPR0lOX0ZPUk1fSU5QVVRfQ0hBTkdFJztcbmV4cG9ydCBjb25zdCBMT0dJTl9GT1JNX0xPQURJTkcgPSAnTE9HSU5fRk9STV9MT0FESU5HJztcbmV4cG9ydCBjb25zdCBMT0dJTl9GT1JNX0VSUk9SID0gJ0xPR0lOX0ZPUk1fRVJST1InO1xuZXhwb3J0IGNvbnN0IExPR0lOX0ZPUk1fU1VDQ0VTUyA9ICdMT0dJTl9GT1JNX1NVQ0NFU1MnO1xuXG4vLyBSZWdpc3RlciB0eXBlc1xuXG5leHBvcnQgY29uc3QgUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UgPSAnUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UnO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZPUk1fTE9BRElORyA9ICdSRUdJU1RFUl9GT1JNX0xPQURJTkcnO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZPUk1fRVJST1IgPSAnUkVHSVNURVJfRk9STV9FUlJPUic7XG5leHBvcnQgY29uc3QgUkVHSVNURVJfRk9STV9TVUNDRVNTID0gJ1JFR0lTVEVSX0ZPUk1fU1VDQ0VTUyc7XG5cbi8vIFByb2plY3QgUmVnaXN0ZXIgdHlwZXNcblxuZXhwb3J0IGNvbnN0IFBST0pFQ1RfUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UgPSAnUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRSc7XG5leHBvcnQgY29uc3QgUFJPSkVDVF9SRUdJU1RFUl9EQVRFX0NIQU5HRSA9ICdQUk9KRUNUX1JFR0lTVEVSX0RBVEVfQ0hBTkdFJztcbmV4cG9ydCBjb25zdCBQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fTE9BRElORyA9ICdQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fTE9BRElORyc7XG5leHBvcnQgY29uc3QgUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0VSUk9SID0gJ1BST0pFQ1RfUkVHSVNURVJfRk9STV9FUlJPUic7XG5leHBvcnQgY29uc3QgUFJPSkVDVF9SRUdJU1RFUl9GT1JNX1NVQ0NFU1MgPSAnUFJPSkVDVF9SRUdJU1RFUl9GT1JNX1NVQ0NFU1MnO1xuXG4vLyBQcm9qZWN0cyB0eXBlc1xuXG5leHBvcnQgY29uc3QgR0VUX1BST0pFQ1RTID0gJ0dFVF9QUk9KRUNUUyc7XG5cbi8vIEF1dGggdHlwZXNcblxuZXhwb3J0IGNvbnN0IEFVVEhfVVNFUiA9ICdBVVRIX1VTRVInO1xuZXhwb3J0IGNvbnN0IExPR19PVVQgPSAnTE9HX09VVCc7XG5leHBvcnQgY29uc3QgVk9URV9VU0VSID0gJ1ZPVEVfVVNFUic7XG5cbi8vIFZvdGUgdHlwZXNcblxuZXhwb3J0IGNvbnN0IEdFVF9WT1RFUyA9ICdHRVRfVk9URVMnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9WT1RFID0gJ1JFTU9WRV9WT1RFJzsiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZvdGVzKHZvdGVzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuR0VUX1ZPVEVTLFxuICAgIHZvdGVzXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVZvdGUodm90ZUlEKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuUkVNT1ZFX1ZPVEUsXG4gICAgdm90ZUlEXG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0ICcuL0hvbWUuc2Nzcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCB7Y3JlYXRlTXVpVGhlbWUsIE11aVRoZW1lUHJvdmlkZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICAgIHBhbGV0dGU6IHtcbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgbWFpbjogJyNFQTc5MjUnLFxuICAgICAgICB9LFxuICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgIG1haW46ICcjZmZmZmZmJyxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG5cbmNvbnN0IEhvbWUgPSAoICkgPT4ge1xuICByZXR1cm4gKFxuICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J0hvbWUnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0hvbWUtZmxvYXRMZWZ0Jz5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDNcIlxuICAgICAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJMZWZ0XCJcbiAgICAgICAgICAgICAgICA+QSBOZXcgYW5kIEJldHRlciB3YXkgdG8gZW5nYW5nZTxici8+XG4gICAgICAgICAgICAgICAgYW5kIHJldGFpbiBlbXBsb3llZXNcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJoZWFkaW5nXCJcbiAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgICAgICBhbGlnbj1cIkxlZnRcIlxuICAgICAgICAgICAgPkNvbXBhbmllcyB1c2UgSG9iYnlDcmFmdCB0byBvcmdhbml6ZSB0aGVpcjxici8+XG4gICAgICAgICAgICAgICAgZW1wbG95ZWVzIGhvYmJ5IGJ1ZGdldCwgaXRzIGEgcGVyZmVjdDxici8+XG4gICAgICAgICAgICAgICAgaW50ZXJuYWwgY3JvdWQgZnVuZGluZyBzeXN0ZW0gZm9yIHlvdSAhXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIHRvPScvbG9naW4nXG4gICAgICAgICAgPjxUeXBvZ3JhcGh5IGNvbG9yPVwic2Vjb25kYXJ5XCIgPkdldCBTdGFydGVkPC9UeXBvZ3JhcGh5PjwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vbG9hZGVyLnNjc3MnO1xuXG5jb25zdCBMb2FkZXIgPSAoe2NvbG9yLGg9NDB9KSA9PiAoXG4gIDxkaXZcbiAgICBzdHlsZT17e1xuICAgICAgd2lkdGg6aCsncHgnLFxuICAgICAgaGVpZ2h0OmgrJ3B4JyxcbiAgICAgIGJvcmRlclJpZ2h0OmAke2gvNn1weCBzb2xpZCB0cmFuc3BhcmVudGAsXG4gICAgICBib3JkZXJMZWZ0OmAke2gvNn1weCBzb2xpZCB0cmFuc3BhcmVudGAsXG4gICAgICBib3JkZXJUb3A6YCR7aC82fXB4IHNvbGlkICR7Y29sb3J9YCxcbiAgICAgIGJvcmRlckJvdHRvbTpgJHtoLzZ9cHggc29saWQgJHtjb2xvcn1gLFxuICAgIH19XG4gICAgY2xhc3NOYW1lPXtgTG9hZGVyICR7Y29sb3J9YH0vPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMvbG9naW5BY3Rpb25zJztcbmltcG9ydCB7IG9uRm9ybVN1Ym1pdCB9IGZyb20gJy4uLy4uL3RodW5rcy9sb2dpblRodW5rJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyL0xvYWRlcic7XG5pbXBvcnQgJy4vTG9naW4uc2Nzcyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhcic7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBNdWlUaGVtZVByb3ZpZGVyLCB3aXRoU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XG5pbXBvcnQgRXJyb3JJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FcnJvcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgTG9ja091dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9ja091dGxpbmVkJztcblxuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgIG1haW46ICcjRUE3OTI1JyxcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnIzAwNDRmZicsXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBtYWluOiAnI2ZmZmZmZicsXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICAgIG1haW46IHtcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCg0MDAgKyB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzICogMildOiB7XG4gICAgICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHBhcGVyOiB7XG4gICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0ICogOCxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDJ9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weGAsXG4gICAgfSxcbiAgICBhdmF0YXI6IHtcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNFQTc5MjUnLFxuICAgIH0sXG4gICAgZm9ybToge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgICB9LFxuICAgIHRleHRGaWVsZDoge1xuICAgICAgICBoZWlnaHQ6IDUwLFxuICAgIH0sXG4gICAgc3VibWl0OiB7XG4gICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICAgICAgaGVpZ2h0OiA1MCxcbiAgICB9LFxuICAgIHJvb3Q6IHtcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5lcnJvci5kYXJrLFxuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgICBmb250U2l6ZToyMCxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDEwLFxuICAgIH0sXG4gICAgbWVzc2FnZToge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIH0sXG59KTtcblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVDbG9zZSA9IChldmVudCwgcmVhc29uKSA9PiB7XG4gICAgICAgIGlmIChyZWFzb24gPT09ICdjbGlja2F3YXknKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICAgIH07XG5cblxuICAgIG9uRm9ybVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkZvcm1TdWJtaXQodGhpcy5wcm9wcy5sb2dpbiwgdGhpcy5wcm9wcy5oaXN0b3J5KVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGxvYWRpbmcgfSA9IHRoaXMucHJvcHMubG9naW5cbiAgICAgICAgY29uc3Qge29uSW5wdXRDaGFuZ2V9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NrT3V0bGluZWRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIEluXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgPyA8U25hY2tiYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGVudFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogJ21lc3NhZ2UtaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLnJvb3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9ezxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgPEVycm9ySWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3J9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5vbkZvcm1TdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IDxMb2FkZXIgY29sb3I9eycjZmZmJ30gaD17MTV9IC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiZXJyb3JcIiA+U2lnbiBJbjwvVHlwb2dyYXBoeT59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInN1YmhlYWRpbmdcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBJZiB5b3UgZG9uJ3QgaGF2ZSBhbiBhY2NvdW50LCBwbGVhc2V7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9eydzZWNvbmRhcnknfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPScvUmVnaXN0ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2dpbjogc3RhdGUubG9naW5cbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgICBvbklucHV0Q2hhbmdlOiAoZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5vbklucHV0Q2hhbmdlKGUpKSxcbiAgICBvbkZvcm1TdWJtaXQ6ICh1c2VyLCBoaXN0b3J5KSA9PmRpc3BhdGNoKG9uRm9ybVN1Ym1pdCh1c2VyLGhpc3RvcnkpKSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKSh3aXRoU3R5bGVzKHN0eWxlcykoTG9naW4pKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmF2TGluayBhcyBSb3V0ZXJMaW5rTmF2ICwgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyLCBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge29uTG9nT3V0IGFzIExvZ291dH0gZnJvbSAnLi4vLi4vdGh1bmtzL2xvZ291dFRodW5rJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICAgIHBhbGV0dGU6IHtcbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgbWFpbjogJyNFQTc5MjUnLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICAgIG1lbnViYXI6IHtcbiAgICAgICAgcG9zaXRpb246XCJzdGF0aWNcIixcbiAgICAgICAgYmFja2dyb3VuZDpcIiMxODE4MThcIixcblxuICAgIH0sXG4gICAgZ3Jvdzoge1xuICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgc2VjdGlvbkRlc2t0b3A6IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICAgIGNvbG9yOiAnI0E0QTRBNCcsXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiAgMjAsXG4gICAgICAgIHBhZGRpbmdSaWdodDogMjAsXG4gICAgfSxcbiAgICBidXR0b25TaW5nVXA6IHtcbiAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNFQTc5MjVcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAyNSxcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjQTE1NDIxXCIsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBzZWN0aW9uTW9iaWxlOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgdGl0bGVNb2JpbGU6IHtcbiAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIEljb25Nb2JpbGU6IHtcbiAgICAgICAgY29sb3I6XCIjZmZmZmZmXCIsXG4gICAgfSxcbn07XG5cbmNsYXNzIE5hdkJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID17XG4gICAgICB2YWx1ZTogMCxcbiAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCB2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSk7XG4gICAgfTtcblxuXG5cbiAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHsgaXNBdXRoIH0gPSB0aGlzLnByb3BzLmF1dGg7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9ID5cbiAgICAgICAgICAgICAgICA8QXBwQmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51YmFyfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb2JieUNyYWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbk1vYmlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5JY29uTW9iaWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyb3d9ICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25EZXNrdG9wfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0F1dGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gY29tcG9uZW50PXtSb3V0ZXJMaW5rTmF2fSBleGFjdCB0bz0nL3Byb2plY3RzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXNjb3ZlciBQcm9qZWN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9IGV4YWN0IHRvPScvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXNjb3ZlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQXV0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25TaW5nVXB9IGNvbXBvbmVudD17Um91dGVyTGlua05hdn0gdG89Jy9wcm9qZWN0LXJlZ2lzdHJhdGlvbic+Q3JlYXRlIGEgUHJvamVjdDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uU2luZ1VwfSBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9IHRvPScvcmVnaXN0ZXInPlNpZ25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcCBXaXRoIEVtYWlsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQXV0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IGNvbXBvbmVudD17Um91dGVyTGlua05hdn0gdG89Jy91c2VyJz57dGhpcy5wcm9wcy5hdXRoLmVtYWlsfSAge3RoaXMucHJvcHMuYXV0aC5hbW91bnR94oKsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFib3V0IFVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25Nb2JpbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVNb2JpbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9iYnlDcmFmdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25EZXNrdG9wfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQXV0aCAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBCdXR0b24gY2xhc3NOYW1lID0ge2NsYXNzZXMuYnV0dG9ufSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uTG9nb3V0Q2xpY2t9IHRvPScvbG9nb3V0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IEJ1dHRvbiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5idXR0b259IGNvbXBvbmVudD17Um91dGVyTGlua30gIHRvPScvbG9naW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uTW9iaWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLkljb25Nb2JpbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgICAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5OYXZCYXIucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXV0aDogc3RhdGUuYXV0aFxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIG9uTG9nb3V0Q2xpY2s6ICgpID0+IGRpc3BhdGNoKExvZ291dCgpKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhTdHlsZXMoc3R5bGVzKShOYXZCYXIpKTsiLCJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge0xpbmsgYXMgUm91dGVyTGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCAnLi9Qcm9qZWN0SW5mby5zY3NzJztcbi8vIGltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tIFwiLi4vUHJvamVjdHNMaXN0L1Byb2plY3RzTGlzdFwiO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB7Y3JlYXRlTXVpVGhlbWUsIE11aVRoZW1lUHJvdmlkZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvZXMvVHlwb2dyYXBoeS9UeXBvZ3JhcGh5XCI7XG4vLyBpbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSBcIi4uL1Byb2plY3RzTGlzdC9Qcm9qZWN0c0xpc3RcIjtcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gICAgcGFsZXR0ZToge1xuICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgbWFpbjogJyNmZmZmZmYnLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxuXG5cbmNvbnN0IFByb2plY3RJbmZvID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHByb2plY3RJbmZvID0gcHJvcHMucHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4ge1xuICAgIGlmKHByb2plY3QuaWQudG9TdHJpbmcoKSA9PT0gcHJvcHMubWF0Y2gucGFyYW1zLmlkKSB7XG4gICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0pLm1hcCgocHJvamVjdCwgaSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nUHJvamVjdCcga2V5PXtpfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RpdGxlJz57cHJvamVjdC50aXRsZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZ3Jlc3MtYmFyJz5cbiAgICAgICAgICAgICAgPGRpdj57cHJvamVjdC5idWRnZXR9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdMaW5lYXJQcm9ncmVzc01vbmV5Jz5cbiAgICAgICAgICAgICAgICAgIDxMaW5lYXJQcm9ncmVzcyB2YXJpYW50PXsnYnVmZmVyJ30gdmFsdWU9eyhwcm9qZWN0LmJ1ZGdldC9wcm9qZWN0LmFtb3VudCkqMTAwfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2Pntwcm9qZWN0LmFtb3VudH08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVm90ZUJ1dHRvbnMnPlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiID414oKsPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgPjE14oKsPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgPjMw4oKsPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdEZXNjcmlwdGlvbic+e3Byb2plY3QuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RleHQtLWxlZnQnPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJUZXh0XCI+QXV0aG9yOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdUZXh0LS1Cb2xkJz57cHJvamVjdC51c2VybmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlRleHRcIj5BdXRob3IgRW1haWw6PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J1RleHQtLUJvbGQnPntwcm9qZWN0LmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSlcbiAgcmV0dXJuIChcbiAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdQcm9qZWN0SW5mbyc+XG4gICAgICAgICAge3Byb2plY3RJbmZvfVxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdCdXR0b24nXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgIHRvPScvcHJvamVjdHMnPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICA+QmFjayB0byBwcm9qZWN0czwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0czogc3RhdGUucHJvamVjdHMucHJvamVjdHNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUHJvamVjdEluZm8pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL1Byb2plY3RSZWdpc3RyYXRpb24uc2Nzcyc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlci9Mb2FkZXInO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9wcm9qZWN0UmVnaXN0ZXJBY3Rpb25zJztcbmltcG9ydCB7b25Qcm9qZWN0UmVnaXN0ZXJGb3JtU3VibWl0fSBmcm9tICcuLi8uLi90aHVua3MvcHJvamVjdFJlZ2lzdGVyVGh1bmsnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJztcbmltcG9ydCB7Y3JlYXRlTXVpVGhlbWUsIE11aVRoZW1lUHJvdmlkZXIsIHdpdGhTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcbmltcG9ydCBFcnJvckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vycm9yJztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcblxuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjRUE3OTI1JyxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyMwMDQ0ZmYnLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIG1haW46ICcjZmZmZmZmJyxcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIG1haW46IHtcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoNDAwICsgdGhlbWUuc3BhY2luZy51bml0ICogMyAqIDIpXToge1xuICAgICAgd2lkdGg6IDQwMCxcbiAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgfSxcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDgsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDJ9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weGAsXG4gIH0sXG4gIGZvcm06IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0LFxuICB9LFxuICB0ZXh0RmllbGQ6IHtcbiAgICBoZWlnaHQ6IDUwLFxuICB9LFxuICBzdWJtaXQ6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgaGVpZ2h0OiA1MCxcbiAgfSxcbiAgcm9vdDoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcbiAgfSxcbiAgaWNvbjoge1xuICAgIGZvbnRTaXplOjIwLFxuICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgfSxcbiAgbWVzc2FnZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgfSxcbn0pO1xuXG5jbGFzcyBQcm9qZWN0UmVnaXN0cmF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3BlbjogZmFsc2UsXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gIH07XG5cbiAgaGFuZGxlQ2xvc2UgPSAoZXZlbnQsIHJlYXNvbikgPT4ge1xuICAgIGlmIChyZWFzb24gPT09ICdjbGlja2F3YXknKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgfTtcblxuXG4gIG9uRm9ybVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25Gb3JtU3VibWl0KHRoaXMucHJvcHMucHJvamVjdFJlZ2lzdGVyLCB0aGlzLnByb3BzLmhpc3RvcnksIHRoaXMucHJvcHMuYXV0aC5lbWFpbClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB1c2VybmFtZSxcbiAgICAgIGhvYmJ5TmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgYW1vdW50LFxuICAgICAgbG9hZGluZyxcbiAgICAgIGVycm9yLFxuICAgIH0gPXRoaXMucHJvcHMucHJvamVjdFJlZ2lzdGVyO1xuICAgIGNvbnN0IHtvbklucHV0Q2hhbmdlfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZW1haWwgfSA9dGhpcy5wcm9wcy5hdXRoXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiPlJlZ2lzdGVyIFlvdXIgSG9iYnlcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICB7ZXJyb3IgP1xuICAgICAgICAgICAgICAgICAgICA8U25hY2tiYXJcbiAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XG4gICAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgQ29udGVudFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogJ21lc3NhZ2UtaWQnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5yb290XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgbWVzc2FnZT17PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgIDxFcnJvckljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259Lz5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9yfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgYWN0aW9uPXtbXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD4sXG4gICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG5cbiAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uRm9ybVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9XG4gICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxuXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3VzZXJuYW1lJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdob2JieU5hbWUnXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtob2JieU5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQbGVhc2UgZW50ZXIgeW91ciBob2JieSBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsZWFzZSBlbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICByb3dzTWF4PVwiM1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxlYXNlIGRlc2NyaWJlIGl0XCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2Ftb3VudCdcbiAgICAgICAgICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW1vdW50fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxlYXNlIGVudGVyIGFtb3VudCBmb3IgeW91ciBuZWVkc1wiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRlciB0ZXh0Q29sb3I9XCJzZWNvbmRhcnlcIiBjb2xvcj17JyNmZmYnfSBoPXsxNX0gLz4gOlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiZXJyb3JcIiA+UGxhY2UgeW91ciBob2JieTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0UmVnaXN0ZXI6IHN0YXRlLnByb2plY3RSZWdpc3RlcixcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvbklucHV0Q2hhbmdlOiAoZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5vbklucHV0Q2hhbmdlKGUpKSxcbiAgb25EYXRlQ2hhbmdlOiAoZGF0ZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5vbkRhdGVDaGFuZ2UoZGF0ZSkpLFxuICBvbkZvcm1TdWJtaXQ6IChwcm9qZWN0SW5mbywgaGlzdG9yeSwgZW1haWwpPT5kaXNwYXRjaChvblByb2plY3RSZWdpc3RlckZvcm1TdWJtaXQocHJvamVjdEluZm8saGlzdG9yeSxlbWFpbCkpXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFN0eWxlcyhzdHlsZXMpKFByb2plY3RSZWdpc3RyYXRpb24pKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluayBhcyBSb3V0ZXJMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCAnLi9Qcm9qZWN0c0xpc3Quc2Nzcyc7XG5pbXBvcnQge3NldFByb2plY3RMaXN0fSBmcm9tICcuLi8uLi90aHVua3MvZ2V0UHJvamVjdHMnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI7XG5pbXBvcnQge29uVm90ZX0gZnJvbSAnLi4vLi4vdGh1bmtzL3ZvdGVUaHVuayc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IHtjcmVhdGVNdWlUaGVtZSwgTXVpVGhlbWVQcm92aWRlcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIlxuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gICAgcGFsZXR0ZToge1xuICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgbWFpbjogJyMwMDQ0ZmYnLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxuXG5jbGFzcyBQcm9qZWN0c0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuZWQ6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkdldFByb2plY3RzTGlzdCgpO1xuICAgIH1cblxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtwcm9qZWN0cyxvblZvdGVDbGlja30gPXRoaXMucHJvcHM7XG4gICAgY29uc3Qge2Ftb3VudH0gPSB0aGlzLnByb3BzLmF1dGg7XG4gICAgbGV0IHByb2plY3RzTGlzdDtcbiAgICBpZihwcm9qZWN0cy5sZW5ndGggIT09IDApIHtcbiAgICAgIHByb2plY3RzTGlzdCA9IHByb2plY3RzICYmIHByb2plY3RzLm1hcCgocHJvamVjdCwgaSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfSAga2V5PXtpfSA+XG4gICAgICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXsnbWFpbid9PlxuICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9eydDYXJkJ30gY29tcG9uZW50PXsgUm91dGVyTGluayB9ICB0bz17YC9wcm9qZWN0LyR7cHJvamVjdC5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J0NhcmQtdGl0bGUnfT57cHJvamVjdC50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydDYXJkLWRlc2NyaXB0aW9uJ30+e3Byb2plY3QuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIkNhcmQtcHJvZ3Jlc3NcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pntwcm9qZWN0LmJ1ZGdldH0kPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJDYXJkLXByb2dyZXNzLWJhclwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmVhclByb2dyZXNzIHZhcmlhbnQ9eydidWZmZXInfSB2YWx1ZT17KHByb2plY3QuYnVkZ2V0L3Byb2plY3QuYW1vdW50KSoxMDB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57cHJvamVjdC5hbW91bnR9JDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J1ZvdGVCdXR0b25zJ30gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiA1MCwgbWFyZ2luOiA1IH19IGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IG9uVm90ZUNsaWNrKHByb2plY3QuaWQsIDUpfSAgZGlzYWJsZWQ9e2Ftb3VudCA8IDV9PjXigqw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzdHlsZT17e2JvcmRlclJhZGl1czogNTAsIG1hcmdpbjogNSB9fSBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBvblZvdGVDbGljayhwcm9qZWN0LmlkLCAxNSl9IGRpc2FibGVkPXthbW91bnQgPCAxNX0+MTXigqw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzdHlsZT17e2JvcmRlclJhZGl1czogNTAsIG1hcmdpbjogNSB9fSBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBvblZvdGVDbGljayhwcm9qZWN0LmlkLCAzMCl9IGRpc2FibGVkPXthbW91bnQgPCAzMH0+MzDigqw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICAgICAgKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdHNMaXN0ID0gPFR5cG9ncmFwaHlcbiAgICAgICAgICB2YXJpYW50PVwiaDRcIlxuICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgID5Qcm9qZWN0cyB3aWxsIGJlIGhlcmUgc29vbi4uLjwvVHlwb2dyYXBoeT5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nUHJvamVjdHNMaXN0Jz5cbiAgICAgICAgICAgIHtwcm9qZWN0c0xpc3R9XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXG4gICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgPklmIHlvdSBoYXZlIGEgcHJvamVjdCwgcGxlYXNleycgJ31cbiAgICAgICAgICAgICAgPExpbmsgY29tcG9uZW50PXsgUm91dGVyTGluayB9IGNvbG9yPXsnc2Vjb25kYXJ5J30gdG89Jy9wcm9qZWN0LXJlZ2lzdHJhdGlvbic+UmVnaXN0ZXI8L0xpbms+XG4gICAgICAgICAgICAgIHsnICd9eW91ciBwcm9qZWN0KGhvYmJ5KS5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvamVjdHM6IHN0YXRlLnByb2plY3RzLnByb2plY3RzLFxuICAgIGF1dGg6IHN0YXRlLmF1dGhcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIG9uR2V0UHJvamVjdHNMaXN0OiAoKSA9PiBkaXNwYXRjaChzZXRQcm9qZWN0TGlzdCgpKSxcbiAgb25Wb3RlQ2xpY2s6IChwcm9qZWN0SWQsIGFtb3VudCkgPT4gZGlzcGF0Y2gob25Wb3RlKHByb2plY3RJZCwgYW1vdW50KSlcblxufSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFByb2plY3RzTGlzdCk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlci9Mb2FkZXInO1xuaW1wb3J0IHtMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0ICcuL1JlZ2lzdGVyLnNjc3MnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi8uLi9hY3Rpb25zL3JlZ2lzdGVyQWN0aW9uc1wiO1xuaW1wb3J0IHtvblJlZ2lzdGVyRm9ybVN1Ym1pdH0gZnJvbSAnLi4vLi4vdGh1bmtzL3JlZ2lzdGVyVGh1bmsnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IHtjcmVhdGVNdWlUaGVtZSwgTXVpVGhlbWVQcm92aWRlciwgd2l0aFN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhcic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcbmltcG9ydCBFcnJvckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vycm9yJztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcblxuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjRUE3OTI1JyxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyMwMDQ0ZmYnLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIG1haW46ICcjZmZmZmZmJyxcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIG1haW46IHtcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoNDAwICsgdGhlbWUuc3BhY2luZy51bml0ICogMyAqIDIpXToge1xuICAgICAgd2lkdGg6IDQwMCxcbiAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgfSxcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDgsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDJ9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weGAsXG4gIH0sXG4gIGZvcm06IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0LFxuICB9LFxuICB0ZXh0RmllbGQ6IHtcbiAgICBoZWlnaHQ6IDUwLFxuICB9LFxuICBzdWJtaXQ6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgaGVpZ2h0OiA1MCxcbiAgfSxcbiAgcm9vdDoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcbiAgfSxcbiAgaWNvbjoge1xuICAgIGZvbnRTaXplOjIwLFxuICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgfSxcbiAgbWVzc2FnZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgfSxcbn0pO1xuXG5cbmNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3BlbjogZmFsc2UsXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gIH07XG5cbiAgaGFuZGxlQ2xvc2UgPSAoZXZlbnQsIHJlYXNvbikgPT4ge1xuICAgIGlmIChyZWFzb24gPT09ICdjbGlja2F3YXknKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgfTtcblxuICBvbkZvcm1TdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uRm9ybVN1Ym1pdCh0aGlzLnByb3BzLnJlZ2lzdGVyLCB0aGlzLnByb3BzLmhpc3RvcnkpO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3VzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHBhc3N3b3JkMiwgZXJyb3IsIGxvYWRpbmcsfSA9IHRoaXMucHJvcHMucmVnaXN0ZXI7XG4gICAgY29uc3Qge29uSW5wdXRDaGFuZ2V9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9ID5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cbiAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiPlNpZ24gVXBcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICB7ZXJyb3IgPyA8U25hY2tiYXJcbiAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XG4gICAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgQ29udGVudFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogJ21lc3NhZ2UtaWQnLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5yb290XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlPXs8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgICAgIDxFcnJvckljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259Lz5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9yfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgIGFjdGlvbj17W1xuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAvPiA6IG51bGx9XG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uRm9ybVN1Ym1pdH0gIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9ICBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndXNlcm5hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQbGVhc2UgZW50ZXIgeW91ciBlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZDInXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZDJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZXBlYXQgUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IDxMb2FkZXIgY29sb3I9eycjZmZmJ30gaD17MTV9IC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cImVycm9yXCIgPlNpZ24gdXA8L1R5cG9ncmFwaHk+IH1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic3ViaGVhZGluZ1wifT5cbiAgICAgICAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD97JyAnfVxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9eydzZWNvbmRhcnknfVxuICAgICAgICAgICAgICAgICAgICB0bz0nL2xvZ2luJz5cbiAgICAgICAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHJlZ2lzdGVyOiBzdGF0ZS5yZWdpc3RlclxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgb25JbnB1dENoYW5nZTogKGUpID0+IGRpc3BhdGNoKGFjdGlvbnMub25JbnB1dENoYW5nZShlKSksXG4gIG9uRm9ybVN1Ym1pdDogKHVzZXIsIGhpc3RvcnkpID0+IGRpc3BhdGNoKG9uUmVnaXN0ZXJGb3JtU3VibWl0KHVzZXIsIGhpc3RvcnkpKVxufSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhTdHlsZXMoc3R5bGVzKShSZWdpc3RlcikpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL1VzZXIuc2Nzcyc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHt2b3Rlc30gZnJvbSAnLi4vLi4vdGh1bmtzL2dldFZvdGVzVGh1bmsnO1xuaW1wb3J0IHt1blZvdGV9IGZyb20gJy4uLy4uL3RodW5rcy91blZvdGVUaHVuaydcblxuY2xhc3MgVXNlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMub25HZXRWb3RlcygpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3ZvdGVzfSA9IHRoaXMucHJvcHMudm90ZXM7XG4gICAgY29uc3Qge29uVW5Wb3RlfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgdm90ZXNBcnJheSA9IHZvdGVzLm1hcCh2b3RlID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1ZvdGUnIGtleT17dm90ZS5pZH0+XG4gICAgICAgICAgICA8cD5Wb3RlZCBIb2JieToge3ZvdGUudGl0bGV9PC9wPlxuICAgICAgICAgICAgPHA+Vm90ZWQgQW1vdW50OiB7dm90ZS5hbW91bnR94oKsPC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVuVm90ZSh2b3RlLmlkKX0+VW5Wb3RlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVXNlcic+XG4gICAgICAgICAgTXkgVm90ZXNcbiAgICAgICAgICB7dm90ZXNBcnJheX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB2b3Rlczogc3RhdGUudm90ZXNcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIG9uR2V0Vm90ZXM6ICgpID0+IGRpc3BhdGNoKHZvdGVzKCkpLFxuICBvblVuVm90ZTogKGlkKSA9PiBkaXNwYXRjaCh1blZvdGUoaWQpKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFVzZXIpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7Y3JlYXRlU3RvcmUsIGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyJztcbmltcG9ydCAnLi9pbmRleC5zY3NzJztcbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi9Sb3V0ZXMnO1xuaW1wb3J0ICogYXMgc2VydmljZVdvcmtlciBmcm9tICcuL3NlcnZpY2VXb3JrZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJ1xuXG5heGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UocmVxdWVzdCA9PiB7XG4gIHJldHVybiByZXF1ZXN0O1xufSlcblxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKHJlc3BvbnNlID0+IHtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufSlcblxuY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gfHwgY29tcG9zZTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgY29tcG9zZUVuaGFuY2VycyhhcHBseU1pZGRsZXdhcmUodGh1bmspKSk7XG5cblJlYWN0RE9NLnJlbmRlcig8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgPFJvdXRlcy8+XG48L1Byb3ZpZGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cblxuLy8gSWYgeW91IHdhbnQgeW91ciBhcHAgdG8gd29yayBvZmZsaW5lIGFuZCBsb2FkIGZhc3RlciwgeW91IGNhbiBjaGFuZ2Vcbi8vIHVucmVnaXN0ZXIoKSB0byByZWdpc3RlcigpIGJlbG93LiBOb3RlIHRoaXMgY29tZXMgd2l0aCBzb21lIHBpdGZhbGxzLlxuLy8gTGVhcm4gbW9yZSBhYm91dCBzZXJ2aWNlIHdvcmtlcnM6IGh0dHBzOi8vYml0Lmx5L0NSQS1QV0FcbnNlcnZpY2VXb3JrZXIudW5yZWdpc3RlcigpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBlbWFpbDogJycsXG4gICAgYW1vdW50OiAwLFxuICAgIGlzQXV0aDogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuQVVUSF9VU0VSOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBlbWFpbDogYWN0aW9uLnVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgYW1vdW50OiBhY3Rpb24udXNlci5idWRnZXQsXG4gICAgICAgICAgICAgICAgaXNBdXRoOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgdHlwZXMuTE9HX09VVDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgICAgICBpc0F1dGg6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIHR5cGVzLlZPVEVfVVNFUjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYW1vdW50OiBzdGF0ZS5hbW91bnQtYWN0aW9uLmFtb3VudFxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGVtYWlsOiAnJyxcbiAgcGFzc3dvcmQ6ICcnLFxuICBlcnJvcjogJycsXG4gIGxvYWRpbmc6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLkxPR0lOX0ZPUk1fSU5QVVRfQ0hBTkdFOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgW2FjdGlvbi5uYW1lXTogYWN0aW9uLnZhbHVlfTtcbiAgICBjYXNlIHR5cGVzLkxPR0lOX0ZPUk1fTE9BRElORzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IHRydWV9O1xuICAgIGNhc2UgdHlwZXMuTE9HSU5fRk9STV9FUlJPUjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVycm9yOiBhY3Rpb24uZXJyb3IsIGxvYWRpbmc6ZmFsc2V9O1xuICAgIGNhc2UgdHlwZXMuTE9HSU5fRk9STV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZW1haWw6ICcnLCBwYXNzd29yZDogJycsIGxvYWRpbmc6ZmFsc2V9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VybmFtZTogJycsXG4gIGhvYmJ5TmFtZTogJycsXG4gIGVtYWlsOiAnJyxcbiAgZGVzY3JpcHRpb246ICcnLFxuICBhbW91bnQ6ICcnLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgZXJyb3I6ICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgW2FjdGlvbi5uYW1lXTogYWN0aW9uLnZhbHVlfTtcbiAgICBjYXNlIHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfREFURV9DSEFOR0U6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlbmREYXRlOiBhY3Rpb24uZGF0ZX07XG4gICAgY2FzZSB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fTE9BRElORzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IHRydWV9O1xuICAgIGNhc2UgdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0VSUk9SOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXJyb3I6IGFjdGlvbi5lcnJvciwgbG9hZGluZzpmYWxzZX07XG4gICAgY2FzZSB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHVzZXJuYW1lOiAnJywgaG9iYnlOYW1lOiAnJywgZW1haWw6ICcnLCBhbW91bnQ6ICcnLCBkZXNjcmlwdGlvbjogJycsIGxvYWRpbmc6ZmFsc2UsIGVycm9yOicnfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwcm9qZWN0czogW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLkdFVF9QUk9KRUNUUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHByb2plY3RzOiBhY3Rpb24ucHJvamVjdHN9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHVzZXJuYW1lOiAnJyxcbiAgZW1haWw6ICcnLFxuICBwYXNzd29yZDogJycsXG4gIHBhc3N3b3JkMjogJycsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcjogJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0U6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBbYWN0aW9uLm5hbWVdOiBhY3Rpb24udmFsdWV9O1xuICAgIGNhc2UgdHlwZXMuUkVHSVNURVJfRk9STV9MT0FESU5HOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZX07XG4gICAgY2FzZSB0eXBlcy5SRUdJU1RFUl9GT1JNX0VSUk9SOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXJyb3I6IGFjdGlvbi5lcnJvciwgbG9hZGluZzpmYWxzZX07XG4gICAgY2FzZSB0eXBlcy5SRUdJU1RFUl9GT1JNX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCB1c2VybmFtZTogJycsIGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnLCBwYXNzd29yZDI6ICcnLCBlcnJvcjogJycsIGxvYWRpbmc6IGZhbHNlfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAgJ3JlZHV4JztcbmltcG9ydCBsb2dpblJlZHVjZXIgZnJvbSAnLi9sb2dpblJlZHVjZXInO1xuaW1wb3J0IHJlZ2lzdGVyUmVkdWNlciBmcm9tICcuL3JlZ2lzdGVyUmVkdWNlcic7XG5pbXBvcnQgcHJvamVjdFJlZ2lzdGVyUmVkdWNlciBmcm9tICcuL3Byb2plY3RSZWdpc3RlclJlZHVjZXInO1xuaW1wb3J0IHByb2plY3RzUmVkdWNlciBmcm9tICcuL3Byb2plY3RzUmVkdWNlcic7XG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSAnLi9hdXRoUmVkdWNlcic7XG5pbXBvcnQgdm90ZXNSZWR1Y2VyIGZyb20gJy4vdm90ZXNSZWR1Y2VyJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBsb2dpbjogbG9naW5SZWR1Y2VyLFxuICByZWdpc3RlcjogcmVnaXN0ZXJSZWR1Y2VyLFxuICBwcm9qZWN0UmVnaXN0ZXI6IHByb2plY3RSZWdpc3RlclJlZHVjZXIsXG4gIHByb2plY3RzOiBwcm9qZWN0c1JlZHVjZXIsXG4gIGF1dGg6IGF1dGhSZWR1Y2VyLFxuICB2b3Rlczogdm90ZXNSZWR1Y2VyXG59KVxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHZvdGVzOiBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLkdFVF9WT1RFUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHZvdGVzOiBhY3Rpb24udm90ZXN9XG4gICAgY2FzZSB0eXBlcy5SRU1PVkVfVk9URTpcbiAgICAgIGNvbnN0IHZvdGVzID0gc3RhdGUudm90ZXMuZmlsdGVyKHZvdGUgPT4gdm90ZS5pZCAhPT0gYWN0aW9uLnZvdGVJRClcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHZvdGVzfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCIvLyBUaGlzIG9wdGlvbmFsIGNvZGUgaXMgdXNlZCB0byByZWdpc3RlciBhIHNlcnZpY2Ugd29ya2VyLlxuLy8gcmVnaXN0ZXIoKSBpcyBub3QgY2FsbGVkIGJ5IGRlZmF1bHQuXG5cbi8vIFRoaXMgbGV0cyB0aGUgYXBwIGxvYWQgZmFzdGVyIG9uIHN1YnNlcXVlbnQgdmlzaXRzIGluIHByb2R1Y3Rpb24sIGFuZCBnaXZlc1xuLy8gaXQgb2ZmbGluZSBjYXBhYmlsaXRpZXMuIEhvd2V2ZXIsIGl0IGFsc28gbWVhbnMgdGhhdCBkZXZlbG9wZXJzIChhbmQgdXNlcnMpXG4vLyB3aWxsIG9ubHkgc2VlIGRlcGxveWVkIHVwZGF0ZXMgb24gc3Vic2VxdWVudCB2aXNpdHMgdG8gYSBwYWdlLCBhZnRlciBhbGwgdGhlXG4vLyBleGlzdGluZyB0YWJzIG9wZW4gb24gdGhlIHBhZ2UgaGF2ZSBiZWVuIGNsb3NlZCwgc2luY2UgcHJldmlvdXNseSBjYWNoZWRcbi8vIHJlc291cmNlcyBhcmUgdXBkYXRlZCBpbiB0aGUgYmFja2dyb3VuZC5cblxuLy8gVG8gbGVhcm4gbW9yZSBhYm91dCB0aGUgYmVuZWZpdHMgb2YgdGhpcyBtb2RlbCBhbmQgaW5zdHJ1Y3Rpb25zIG9uIGhvdyB0b1xuLy8gb3B0LWluLCByZWFkIGh0dHBzOi8vYml0Lmx5L0NSQS1QV0FcblxuY29uc3QgaXNMb2NhbGhvc3QgPSBCb29sZWFuKFxuICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnIHx8XG4gICAgLy8gWzo6MV0gaXMgdGhlIElQdjYgbG9jYWxob3N0IGFkZHJlc3MuXG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnWzo6MV0nIHx8XG4gICAgLy8gMTI3LjAuMC4xLzggaXMgY29uc2lkZXJlZCBsb2NhbGhvc3QgZm9yIElQdjQuXG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLm1hdGNoKFxuICAgICAgL14xMjcoPzpcXC4oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pKXszfSQvXG4gICAgKVxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKGNvbmZpZykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgLy8gVGhlIFVSTCBjb25zdHJ1Y3RvciBpcyBhdmFpbGFibGUgaW4gYWxsIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBTVy5cbiAgICBjb25zdCBwdWJsaWNVcmwgPSBuZXcgVVJMKHByb2Nlc3MuZW52LlBVQkxJQ19VUkwsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICBpZiAocHVibGljVXJsLm9yaWdpbiAhPT0gd2luZG93LmxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgLy8gT3VyIHNlcnZpY2Ugd29ya2VyIHdvbid0IHdvcmsgaWYgUFVCTElDX1VSTCBpcyBvbiBhIGRpZmZlcmVudCBvcmlnaW5cbiAgICAgIC8vIGZyb20gd2hhdCBvdXIgcGFnZSBpcyBzZXJ2ZWQgb24uIFRoaXMgbWlnaHQgaGFwcGVuIGlmIGEgQ0ROIGlzIHVzZWQgdG9cbiAgICAgIC8vIHNlcnZlIGFzc2V0czsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9jcmVhdGUtcmVhY3QtYXBwL2lzc3Vlcy8yMzc0XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBzd1VybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L3NlcnZpY2Utd29ya2VyLmpzYDtcblxuICAgICAgaWYgKGlzTG9jYWxob3N0KSB7XG4gICAgICAgIC8vIFRoaXMgaXMgcnVubmluZyBvbiBsb2NhbGhvc3QuIExldCdzIGNoZWNrIGlmIGEgc2VydmljZSB3b3JrZXIgc3RpbGwgZXhpc3RzIG9yIG5vdC5cbiAgICAgICAgY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIoc3dVcmwsIGNvbmZpZyk7XG5cbiAgICAgICAgLy8gQWRkIHNvbWUgYWRkaXRpb25hbCBsb2dnaW5nIHRvIGxvY2FsaG9zdCwgcG9pbnRpbmcgZGV2ZWxvcGVycyB0byB0aGVcbiAgICAgICAgLy8gc2VydmljZSB3b3JrZXIvUFdBIGRvY3VtZW50YXRpb24uXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgJ1RoaXMgd2ViIGFwcCBpcyBiZWluZyBzZXJ2ZWQgY2FjaGUtZmlyc3QgYnkgYSBzZXJ2aWNlICcgK1xuICAgICAgICAgICAgICAnd29ya2VyLiBUbyBsZWFybiBtb3JlLCB2aXNpdCBodHRwczovL2JpdC5seS9DUkEtUFdBJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSXMgbm90IGxvY2FsaG9zdC4gSnVzdCByZWdpc3RlciBzZXJ2aWNlIHdvcmtlclxuICAgICAgICByZWdpc3RlclZhbGlkU1coc3dVcmwsIGNvbmZpZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpIHtcbiAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbiAgICAucmVnaXN0ZXIoc3dVcmwpXG4gICAgLnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgIHJlZ2lzdHJhdGlvbi5vbnVwZGF0ZWZvdW5kID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnN0YWxsaW5nV29ya2VyID0gcmVnaXN0cmF0aW9uLmluc3RhbGxpbmc7XG4gICAgICAgIGlmIChpbnN0YWxsaW5nV29ya2VyID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFsbGluZ1dvcmtlci5vbnN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChpbnN0YWxsaW5nV29ya2VyLnN0YXRlID09PSAnaW5zdGFsbGVkJykge1xuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHVwZGF0ZWQgcHJlY2FjaGVkIGNvbnRlbnQgaGFzIGJlZW4gZmV0Y2hlZCxcbiAgICAgICAgICAgICAgLy8gYnV0IHRoZSBwcmV2aW91cyBzZXJ2aWNlIHdvcmtlciB3aWxsIHN0aWxsIHNlcnZlIHRoZSBvbGRlclxuICAgICAgICAgICAgICAvLyBjb250ZW50IHVudGlsIGFsbCBjbGllbnQgdGFicyBhcmUgY2xvc2VkLlxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAnTmV3IGNvbnRlbnQgaXMgYXZhaWxhYmxlIGFuZCB3aWxsIGJlIHVzZWQgd2hlbiBhbGwgJyArXG4gICAgICAgICAgICAgICAgICAndGFicyBmb3IgdGhpcyBwYWdlIGFyZSBjbG9zZWQuIFNlZSBodHRwczovL2JpdC5seS9DUkEtUFdBLidcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAvLyBFeGVjdXRlIGNhbGxiYWNrXG4gICAgICAgICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLm9uVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLm9uVXBkYXRlKHJlZ2lzdHJhdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIGV2ZXJ5dGhpbmcgaGFzIGJlZW4gcHJlY2FjaGVkLlxuICAgICAgICAgICAgICAvLyBJdCdzIHRoZSBwZXJmZWN0IHRpbWUgdG8gZGlzcGxheSBhXG4gICAgICAgICAgICAgIC8vIFwiQ29udGVudCBpcyBjYWNoZWQgZm9yIG9mZmxpbmUgdXNlLlwiIG1lc3NhZ2UuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb250ZW50IGlzIGNhY2hlZCBmb3Igb2ZmbGluZSB1c2UuJyk7XG5cbiAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBjYWxsYmFja1xuICAgICAgICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5vblN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBjb25maWcub25TdWNjZXNzKHJlZ2lzdHJhdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb246JywgZXJyb3IpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja1ZhbGlkU2VydmljZVdvcmtlcihzd1VybCwgY29uZmlnKSB7XG4gIC8vIENoZWNrIGlmIHRoZSBzZXJ2aWNlIHdvcmtlciBjYW4gYmUgZm91bmQuIElmIGl0IGNhbid0IHJlbG9hZCB0aGUgcGFnZS5cbiAgZmV0Y2goc3dVcmwpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gRW5zdXJlIHNlcnZpY2Ugd29ya2VyIGV4aXN0cywgYW5kIHRoYXQgd2UgcmVhbGx5IGFyZSBnZXR0aW5nIGEgSlMgZmlsZS5cbiAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xuICAgICAgaWYgKFxuICAgICAgICByZXNwb25zZS5zdGF0dXMgPT09IDQwNCB8fFxuICAgICAgICAoY29udGVudFR5cGUgIT0gbnVsbCAmJiBjb250ZW50VHlwZS5pbmRleE9mKCdqYXZhc2NyaXB0JykgPT09IC0xKVxuICAgICAgKSB7XG4gICAgICAgIC8vIE5vIHNlcnZpY2Ugd29ya2VyIGZvdW5kLiBQcm9iYWJseSBhIGRpZmZlcmVudCBhcHAuIFJlbG9hZCB0aGUgcGFnZS5cbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2VydmljZSB3b3JrZXIgZm91bmQuIFByb2NlZWQgYXMgbm9ybWFsLlxuICAgICAgICByZWdpc3RlclZhbGlkU1coc3dVcmwsIGNvbmZpZyk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICdObyBpbnRlcm5ldCBjb25uZWN0aW9uIGZvdW5kLiBBcHAgaXMgcnVubmluZyBpbiBvZmZsaW5lIG1vZGUuJ1xuICAgICAgKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXIoKSB7XG4gIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgcmVnaXN0cmF0aW9uLnVucmVnaXN0ZXIoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJGcm9tTFMoKSB7XG4gIGNvbnN0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaG9iYnlDcmFmdC11c2VyJylcbiAgcmV0dXJuIEpTT04ucGFyc2UodXNlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRVc2VyVG9MUyh1c2VyKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdob2JieUNyYWZ0LXVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcbiAgcmV0dXJuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVXNlckFtb3VudEluTFMoYW1vdW50KSB7XG4gIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdob2JieUNyYWZ0LXVzZXInKSlcbiAgdXNlci5idWRnZXQgPSB1c2VyLmJ1ZGdldCAtIGFtb3VudDtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hvYmJ5Q3JhZnQtdXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxuICByZXR1cm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVVc2VyRnJvbUxTKCkge1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaG9iYnlDcmFmdC11c2VyJylcbiAgcmV0dXJuO1xufVxuXG4iLCJpbXBvcnQge2dldFByb2plY3RzfSBmcm9tICcuLi9hY3Rpb25zL3Byb2plY3RzQWN0aW9uJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGNvbnN0IHNldFByb2plY3RMaXN0ID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gYXhpb3NcbiAgICAgIC5nZXQoJy9hcGkvaG9iYmllcycpXG4gICAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goZ2V0UHJvamVjdHMocmVzLmRhdGEpKSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIHJldHVybiBwcm9qZWN0TGlzdDtcbn0iLCJpbXBvcnQge2dldFZvdGVzfSBmcm9tICcuLi9hY3Rpb25zL3ZvdGVzQWN0aW9ucyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3Qgdm90ZXMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgYXhpb3MuZ2V0KCcvYXBpL3VzZXIvdm90ZXMnKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZ2V0Vm90ZXMocmVzLmRhdGEpKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIHJldHVybiBudWxsO1xufSIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9sb2dpbkFjdGlvbnMnO1xuaW1wb3J0IHthdXRoVXNlcn0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtzZXRVc2VyVG9MU30gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlJztcblxuZXhwb3J0IGNvbnN0IG9uRm9ybVN1Ym1pdCA9ICh1c2VyLCBoaXN0b3J5KSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goYWN0aW9ucy5vbkZvcm1Mb2FkaW5nKCkpO1xuICBpZih1c2VyLmVtYWlsID09PSAnJyB8fCB1c2VyLnBhc3N3b3JkID09PSAnJyApIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9ucy5vbkxvZ2luRm9ybUVycm9yKCdQbGVhc2UgZmlsbCBmaWVsZHMnKSk7XG4gIH1cbiAgY29uc3QgbG9naW5Kc29uID0gXHR7XG4gICAgICBcInNlY3VyaXR5XCI6IHtcbiAgICAgICAgICBcImNyZWRlbnRpYWxzXCI6IHtcbiAgICAgICAgICAgICAgXCJlbWFpbFwiOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICBcInBhc3N3b3JkXCI6IHVzZXIucGFzc3dvcmRcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgYXhpb3MucG9zdCgnL2FwaS9zZWN1cml0eS9sb2dpbicsIGxvZ2luSnNvbilcbiAgICAgIC50aGVuKHJlcyA9PntcbiAgICAgICAgc2V0VXNlclRvTFMocmVzLmRhdGEpXG4gICAgICAgIGRpc3BhdGNoKGF1dGhVc2VyKHJlcy5kYXRhKSlcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5vbkxvZ2luRm9ybVN1Y2Nlc3ModXNlcikpXG4gICAgICAgIGhpc3RvcnkucHVzaCgnLycpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5vbkxvZ2luRm9ybUVycm9yKGVyci5yZXNwb25zZS5kYXRhLmVycm9yID8gZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3IgOlxuICAgICAgICAgICdTZXJ2ZXIgRXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXInKSlcbiAgICAgICAgfVxuICAgICAgKVxufSIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XG5pbXBvcnQge3JlbW92ZVVzZXJGcm9tTFN9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZSdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCBvbkxvZ091dCA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdMT0dPVVQnKVxuICAgIGF4aW9zLmdldCgnL2FwaS9zZWN1cml0eS9sb2dvdXQnKVxuICAgICAgICAudGhlbihyZXM9PiB7XG4gICAgICAgICAgICByZW1vdmVVc2VyRnJvbUxTKClcbiAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbnMubG9nb3V0KCkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICByZXR1cm4gbnVsbDtcbn0iLCJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvcHJvamVjdFJlZ2lzdGVyQWN0aW9ucyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHV1aWR2NCBmcm9tICd1dWlkJ1xuXG5leHBvcnQgY29uc3Qgb25Qcm9qZWN0UmVnaXN0ZXJGb3JtU3VibWl0ID0gKHByb2plY3RJbmZvLCBoaXN0b3J5LCBlbWFpbCkgPT4gKGRpc3BhdGNoKSA9PiB7XG5cbiAgZGlzcGF0Y2goYWN0aW9ucy5vblByb2plY3RSZWdpc3RlckZvcm1Mb2FkaW5nKCkpO1xuICBpZihwcm9qZWN0SW5mby51c2VybmFtZSA9PT0gJycgfHwgcHJvamVjdEluZm8uaG9iYnlOYW1lID09PSAnJyB8fFxuICBwcm9qZWN0SW5mby5kZXNjcmlwdGlvbiA9PT0gJycgfHwgcHJvamVjdEluZm8uYW1vdW50ID09PSAnJyApIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9ucy5vblByb2plY3RSZWdpc3RlckZvcm1FcnJvcignUGxlYXNlIGZpbGwgYWxsIGZpZWxkcycpKVxuICB9XG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBtb21lbnQocHJvamVjdEluZm8uZW5kRGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG5cbiAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICBcInRpdGxlXCI6IHByb2plY3RJbmZvLmhvYmJ5TmFtZSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IHByb2plY3RJbmZvLmRlc2NyaXB0aW9uLFxuICAgIFwiYW1vdW50XCI6IHByb2plY3RJbmZvLmFtb3VudCxcbiAgICBcImVtYWlsXCI6IGVtYWlsLFxuICAgIFwidXNlcm5hbWVcIjogcHJvamVjdEluZm8udXNlcm5hbWUsXG4gIH0pO1xuICBjb25zb2xlLmxvZyhqc29uKTtcbiAgYXhpb3NcbiAgICAgIC5wb3N0KCcvYXBpL2hvYmJ5Jyxqc29uKVxuICAgIC50aGVuKHJlcz0+e1xuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5vblByb2plY3RSZWdpc3RlckZvcm1TdWJtaXQocmVzKSk7XG4gICAgICBoaXN0b3J5LnB1c2goJy9wcm9qZWN0cycpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMub25Qcm9qZWN0UmVnaXN0ZXJGb3JtRXJyb3IoJ1NlcnZlciBlcnJvci4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKSlcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH0pXG5cbn0iLCJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvcmVnaXN0ZXJBY3Rpb25zJztcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGNvbnN0IG9uUmVnaXN0ZXJGb3JtU3VibWl0ID0gKHVzZXIsIGhpc3RvcnkpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChhY3Rpb25zLm9uRm9ybUxvYWRpbmcoKSk7XG4gIGlmKHVzZXIudXNlcm5hbWUgPT09ICcnIHx8IHVzZXIuZW1haWwgPT09ICcnIHx8IHVzZXIucGFzc3dvcmQgPT09ICcnIHx8IHVzZXIucGFzc3dvcmQyID09PSAnJykge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25zLm9uUmVnaXN0ZXJGb3JtRXJyb3IoJ1BsZWFzZSBmaWxsIGZpZWxkcycpKTtcbiAgfVxuICBpZih1c2VyLnBhc3N3b3JkICE9PSB1c2VyLnBhc3N3b3JkMikge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25zLm9uUmVnaXN0ZXJGb3JtRXJyb3IoJ1Bhc3N3b3JkcyBkb2VzblxcJ3QgbWF0Y2gnKSk7XG4gIH1cbiAgaWYodXNlci5wYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbnMub25SZWdpc3RlckZvcm1FcnJvcignUGFzc3dvcmQgbGVuZ3RoIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXInKSk7XG4gIH1cbiAgY29uc3QgcmVnaXN0ZXJKc29uID0ge1xuICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxuICB9O1xuXG4gIGF4aW9zLnBvc3QoJy9hcGkvc2VjdXJpdHkvcmVnaXN0ZXInLCByZWdpc3Rlckpzb24pXG4gICAgICAudGhlbihyZXMgPT57XG4gICAgICAgIGRpc3BhdGNoKGFjdGlvbnMub25SZWdpc3RlckZvcm1TdWNjZXNzKHJlZ2lzdGVySnNvbikpXG4gICAgICAgIGhpc3RvcnkucHVzaCgnL2xvZ2luJylcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKVxuICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5vblJlZ2lzdGVyRm9ybUVycm9yKGVyci5yZXNwb25zZS5kYXRhLmVycm9ycy5jaGlsZHJlbi5lbWFpbC5lcnJvcnMgP1xuICAgICAgICAgICAgICAgIGVyci5yZXNwb25zZS5kYXRhLmVycm9ycy5jaGlsZHJlbi5lbWFpbC5lcnJvcnNcbiAgICAgICAgICAgICAgICA6ICdTZXJ2ZXIgZXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJykpXG4gICAgICAgICAgfVxuICAgICAgKVxuXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7cmVtb3ZlVm90ZX0gZnJvbSAnLi4vYWN0aW9ucy92b3Rlc0FjdGlvbnMnXG5cbmV4cG9ydCBjb25zdCB1blZvdGUgPSAodm90ZUlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgYXhpb3MuZGVsZXRlKGAvYXBpL3ZvdGUvJHt2b3RlSWR9YClcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHJlbW92ZVZvdGUodm90ZUlkKSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICByZXR1cm4gbnVsbDtcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtzZXRQcm9qZWN0TGlzdH0gZnJvbSAnLi9nZXRQcm9qZWN0cyc7XG5pbXBvcnQge2NoYW5nZVVzZXJBbW91bnRJbkxTfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UnXG5pbXBvcnQge3ZvdGVVc2VyfSBmcm9tICcuLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcblxuZXhwb3J0IGNvbnN0IG9uVm90ZSA9IChwcm9qZWN0SWQsIGFtb3VudCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGF4aW9zLnBvc3QoJy9hcGkvdm90ZScsIHtcbiAgICBob2JieTogcHJvamVjdElkLFxuICAgIGFtb3VudDogYW1vdW50XG4gIH0pLnRoZW4ocmVzPT57XG4gICAgY2hhbmdlVXNlckFtb3VudEluTFMoYW1vdW50KTtcbiAgICBkaXNwYXRjaChzZXRQcm9qZWN0TGlzdCgpKTtcbiAgICBkaXNwYXRjaCh2b3RlVXNlcihhbW91bnQpKTtcbiAgfSkuY2F0Y2goZXJyPT4gY29uc29sZS5sb2coZXJyKSlcblxuICByZXR1cm4gbnVsbDtcbn0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1TR1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==