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
/* harmony import */ var _thunks_amountUpdateThunk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thunks/amountUpdateThunk */ "./assets/js/thunks/amountUpdateThunk.js");
/* harmony import */ var _components_Home_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Home/Home */ "./assets/js/components/Home/Home.js");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/NavBar/NavBar */ "./assets/js/components/NavBar/NavBar.js");
/* harmony import */ var _components_ProjectsList_ProjectsList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ProjectsList/ProjectsList */ "./assets/js/components/ProjectsList/ProjectsList.js");
/* harmony import */ var _components_Login_Login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Login/Login */ "./assets/js/components/Login/Login.js");
/* harmony import */ var _components_Register_Register__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Register/Register */ "./assets/js/components/Register/Register.js");
/* harmony import */ var _components_ProjectRegistration_ProjectRegistration__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ProjectRegistration/ProjectRegistration */ "./assets/js/components/ProjectRegistration/ProjectRegistration.js");
/* harmony import */ var _components_ProjectInfo_ProjectInfo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ProjectInfo/ProjectInfo */ "./assets/js/components/ProjectInfo/ProjectInfo.js");
/* harmony import */ var _components_User_User__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/User/User */ "./assets/js/components/User/User.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }















 // import About from './components/About/about';

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
      user ? this.props.onUpdateWallet() : null;
    }
  }, {
    key: "render",
    value: function render() {
      var isAuth = this.props.auth.isAuth;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
        basename: Object({"NODE_ENV":"development"}).PUBLIC_URL
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/",
        component: _components_Home_Home__WEBPACK_IMPORTED_MODULE_7__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/projects",
        component: _components_ProjectsList_ProjectsList__WEBPACK_IMPORTED_MODULE_9__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/login",
        component: _components_Login_Login__WEBPACK_IMPORTED_MODULE_10__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/register/:token",
        component: _components_Register_Register__WEBPACK_IMPORTED_MODULE_11__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/register/",
        component: _components_Register_Register__WEBPACK_IMPORTED_MODULE_11__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/user",
        component: _components_User_User__WEBPACK_IMPORTED_MODULE_14__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/project/:id",
        component: _components_ProjectInfo_ProjectInfo__WEBPACK_IMPORTED_MODULE_13__["default"]
      }), isAuth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/project-registration",
        component: _components_ProjectRegistration_ProjectRegistration__WEBPACK_IMPORTED_MODULE_12__["default"]
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
    },
    onUpdateWallet: function onUpdateWallet() {
      return dispatch(Object(_thunks_amountUpdateThunk__WEBPACK_IMPORTED_MODULE_6__["amountUpdate"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Routes));

/***/ }),

/***/ "./assets/js/actions/authActions.js":
/*!******************************************!*\
  !*** ./assets/js/actions/authActions.js ***!
  \******************************************/
/*! exports provided: authUser, logout, voteUser, unVoteUser, userAmountUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authUser", function() { return authUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voteUser", function() { return voteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unVoteUser", function() { return unVoteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userAmountUpdate", function() { return userAmountUpdate; });
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
function userAmountUpdate(amount) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UPDATE"],
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
/*! exports provided: LOGIN_FORM_INPUT_CHANGE, LOGIN_FORM_LOADING, LOGIN_FORM_ERROR, LOGIN_FORM_SUCCESS, REGISTER_FORM_INPUT_CHANGE, REGISTER_FORM_LOADING, REGISTER_FORM_ERROR, REGISTER_FORM_SUCCESS, PROJECT_REGISTER_FORM_INPUT_CHANGE, PROJECT_REGISTER_DATE_CHANGE, PROJECT_REGISTER_FORM_LOADING, PROJECT_REGISTER_FORM_ERROR, PROJECT_REGISTER_FORM_SUCCESS, GET_PROJECTS, AUTH_USER, LOG_OUT, UNVOTE_USER, VOTE_USER, AMOUNT_UPDATE, GET_VOTES, REMOVE_VOTE */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMOUNT_UPDATE", function() { return AMOUNT_UPDATE; });
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
var VOTE_USER = 'VOTE_USER';
var AMOUNT_UPDATE = "AMOUNT_UPDATE"; // Vote types

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
    className: "Card-Home"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "Img-card",
    src: _Images_team_png__WEBPACK_IMPORTED_MODULE_7___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Message-Title-Card"
  }, "Build employees up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Message-Subheading-Card"
  }, "Reward frequency is more important than size.Top employers create an environment using HobyCraft where employees feel connected to the organization.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_es_Paper_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "Card-Home"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "Img-card-2",
    src: _Images_colleague_png__WEBPACK_IMPORTED_MODULE_8___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Message-Title-Card"
  }, "Make work-life balance a priority"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Message-Subheading-Card"
  }, "To engage the workforce and remain competitive, it's no longer sufficient to focus solely on benefits")))));
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
var _buttonSingUp;

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
  buttonSingUp: (_buttonSingUp = {
    color: '#ffffff',
    marginLeft: 20,
    marginRight: 20
  }, _defineProperty(_buttonSingUp, theme.breakpoints.up('lg'), {
    paddingLeft: 10,
    paddingRight: 10
  }), _defineProperty(_buttonSingUp, theme.breakpoints.up('md'), {
    paddingLeft: 5,
    paddingRight: 5
  }), _defineProperty(_buttonSingUp, "backgroundColor", "#EA7925"), _defineProperty(_buttonSingUp, "fontWeight", 600), _defineProperty(_buttonSingUp, '&:hover', {
    backgroundColor: "#A15421"
  }), _buttonSingUp),
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
      }, this.props.auth.email, " ", this.props.auth.amount, "\u20AC") : null, role === 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
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
      height: 'auto'
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
        rowsMax: "10",
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
          className: "main-user"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_es_Paper_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: "Card-User",
          key: vote.id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Card-title"
        }, vote.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Card-MoneySpend"
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

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["AMOUNT_UPDATE"]:
      return _objectSpread({}, state, {
        amount: action.amount
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
/*! exports provided: getUserFromLS, setUserToLS, changeUserAmountInLS, removeUserFromLS, updateUserAmountInLs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserFromLS", function() { return getUserFromLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserToLS", function() { return setUserToLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeUserAmountInLS", function() { return changeUserAmountInLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUserFromLS", function() { return removeUserFromLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserAmountInLs", function() { return updateUserAmountInLs; });
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
function updateUserAmountInLs(amount) {
  var user = JSON.parse(localStorage.getItem('hobbyCraft-user'));
  user.budget = amount;
  localStorage.setItem('hobbyCraft-user', JSON.stringify(user));
  return;
}

/***/ }),

/***/ "./assets/js/thunks/amountUpdateThunk.js":
/*!***********************************************!*\
  !*** ./assets/js/thunks/amountUpdateThunk.js ***!
  \***********************************************/
/*! exports provided: amountUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amountUpdate", function() { return amountUpdate; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/authActions */ "./assets/js/actions/authActions.js");
/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/storage */ "./assets/js/storage/storage.js");



var amountUpdate = function amountUpdate() {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/user/wallet').then(function (res) {
      dispatch(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_1__["userAmountUpdate"])(res.data.budget));
      Object(_storage_storage__WEBPACK_IMPORTED_MODULE_2__["updateUserAmountInLs"])(res.data.budget);
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

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
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/security/register', registerJson).then(function (res) {
      Object(_storage_storage__WEBPACK_IMPORTED_MODULE_2__["setUserToLS"])(res.data);
      dispatch(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_3__["authUser"])(res.data));
      dispatch(_actions_registerActions__WEBPACK_IMPORTED_MODULE_0__["onRegisterFormSuccess"](registerJson));
      history.push('/');
    })["catch"](function (err) {
      dispatch(_actions_registerActions__WEBPACK_IMPORTED_MODULE_0__["onRegisterFormError"](err.response.data.errors ? err.response.data.errors : 'Server error. Please try again later.'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvUm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL2xvZ2luQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy9wcm9qZWN0UmVnaXN0ZXJBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3Byb2plY3RzQWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3JlZ2lzdGVyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWN0aW9ucy92b3Rlc0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS9Ib21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0hvbWUvSG9tZS5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ltYWdlcy9GcmllbmRzLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9JbWFnZXMvY29sbGVhZ3VlLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9JbWFnZXMvdGVhbS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2FkZXIvbG9hZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW4vTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW4vTG9naW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RJbmZvL1Byb2plY3RJbmZvLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RJbmZvL1Byb2plY3RJbmZvLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdFJlZ2lzdHJhdGlvbi9Qcm9qZWN0UmVnaXN0cmF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RSZWdpc3RyYXRpb24vUHJvamVjdFJlZ2lzdHJhdGlvbi5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RzTGlzdC9Qcm9qZWN0c0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdHNMaXN0L1Byb2plY3RzTGlzdC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JlZ2lzdGVyL1JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JlZ2lzdGVyL1JlZ2lzdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU25hY2tiYXIvc25hY2tiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVXNlci9Vc2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VzZXIvVXNlci5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL2xvZ2luUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvcHJvamVjdFJlZ2lzdGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvcHJvamVjdHNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy9yZWdpc3RlclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy92b3Rlc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlcnZpY2VXb3JrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N0b3JhZ2Uvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL2Ftb3VudFVwZGF0ZVRodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3MvZ2V0UHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RodW5rcy9nZXRWb3Rlc1RodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3MvbG9naW5UaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGh1bmtzL2xvZ291dFRodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3MvcHJvamVjdFJlZ2lzdGVyVGh1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RodW5rcy9yZWdpc3RlclRodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aHVua3MvdW5Wb3RlVGh1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RodW5rcy92b3RlVGh1bmsuanMiXSwibmFtZXMiOlsiUm91dGVzIiwidXNlciIsImdldFVzZXJGcm9tTFMiLCJwcm9wcyIsIm9uTG9hZEF1dGgiLCJvbkxvYWRQcm9qZWN0cyIsIm9uVXBkYXRlV2FsbGV0IiwiaXNBdXRoIiwiYXV0aCIsInByb2Nlc3MiLCJQVUJMSUNfVVJMIiwiSG9tZSIsIlByb2plY3RzTGlzdCIsIkxvZ2luIiwiUmVnaXN0ZXIiLCJVc2VyIiwiUHJvamVjdEluZm8iLCJQcm9qZWN0UmVnaXN0cmF0aW9uIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImF1dGhVc2VyIiwic2V0UHJvamVjdExpc3QiLCJhbW91bnRVcGRhdGUiLCJjb25uZWN0IiwidHlwZSIsInR5cGVzIiwibG9nb3V0IiwiTE9HX09VVCIsInZvdGVVc2VyIiwiYW1vdW50IiwidW5Wb3RlVXNlciIsInVzZXJBbW91bnRVcGRhdGUiLCJvbklucHV0Q2hhbmdlIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uRm9ybUxvYWRpbmciLCJMT0dJTl9GT1JNX0xPQURJTkciLCJvbkxvZ2luRm9ybUVycm9yIiwiZXJyb3IiLCJvbkxvZ2luRm9ybVN1Y2Nlc3MiLCJvbkRhdGVDaGFuZ2UiLCJkYXRlIiwib25Qcm9qZWN0UmVnaXN0ZXJGb3JtTG9hZGluZyIsIlBST0pFQ1RfUkVHSVNURVJfRk9STV9MT0FESU5HIiwib25Qcm9qZWN0UmVnaXN0ZXJGb3JtRXJyb3IiLCJvblByb2plY3RSZWdpc3RlckZvcm1TdWJtaXQiLCJwcm9qZWN0SW5mbyIsImdldFByb2plY3RzIiwicHJvamVjdHMiLCJSRUdJU1RFUl9GT1JNX0xPQURJTkciLCJvblJlZ2lzdGVyRm9ybUVycm9yIiwib25SZWdpc3RlckZvcm1TdWNjZXNzIiwiTE9HSU5fRk9STV9JTlBVVF9DSEFOR0UiLCJMT0dJTl9GT1JNX0VSUk9SIiwiTE9HSU5fRk9STV9TVUNDRVNTIiwiUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UiLCJSRUdJU1RFUl9GT1JNX0VSUk9SIiwiUkVHSVNURVJfRk9STV9TVUNDRVNTIiwiUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRSIsIlBST0pFQ1RfUkVHSVNURVJfREFURV9DSEFOR0UiLCJQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fRVJST1IiLCJQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fU1VDQ0VTUyIsIkdFVF9QUk9KRUNUUyIsIkFVVEhfVVNFUiIsIlVOVk9URV9VU0VSIiwiVk9URV9VU0VSIiwiQU1PVU5UX1VQREFURSIsIkdFVF9WT1RFUyIsIlJFTU9WRV9WT1RFIiwiZ2V0Vm90ZXMiLCJ2b3RlcyIsInJlbW92ZVZvdGUiLCJ2b3RlSUQiLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwiUm91dGVyTGluayIsImxvZ28iLCJUZWFtSW1hZ2UiLCJDb2xsZWFndWVJbWFnZSIsIkxvYWRlciIsImNvbG9yIiwiaCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmlnaHQiLCJib3JkZXJMZWZ0IiwiYm9yZGVyVG9wIiwiYm9yZGVyQm90dG9tIiwic3R5bGVzIiwiZGlzcGxheSIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwidW5pdCIsIm1hcmdpblJpZ2h0IiwiYnJlYWtwb2ludHMiLCJ1cCIsInBhcGVyIiwibWFyZ2luVG9wIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwiYXZhdGFyIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwiZm9ybSIsInRleHRGaWVsZCIsInN1Ym1pdCIsIm9wZW4iLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0Iiwib25Gb3JtU3VibWl0IiwibG9naW4iLCJoaXN0b3J5IiwiZW1haWwiLCJwYXNzd29yZCIsImxvYWRpbmciLCJjbGFzc2VzIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDbGljayIsImFjdGlvbnMiLCJ3aXRoU3R5bGVzIiwicm9vdCIsIk1vYmlsZU5hdiIsInBvc2l0aW9uIiwiYm90dG9tIiwibGVmdCIsInpJbmRleCIsIm1lbnViYXIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImJhY2tncm91bmQiLCJncm93IiwiZmxleEdyb3ciLCJhbGlnbiIsInRpdGxlIiwic2VjdGlvbkRlc2t0b3AiLCJidXR0b24iLCJ0ZXh0RGVjb3JhdGlvbiIsImxpbmsiLCJ0ZXh0VHJhbnNmb3JtIiwiTW9iaWxlQnV0dG9uIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJidXR0b25TaW5nVXAiLCJzZWN0aW9uTW9iaWxlIiwidGl0bGVNb2JpbGUiLCJOYXZCYXIiLCJzaG93TWVudSIsImV2ZW50Iiwib25Mb2dvdXRDbGljayIsImxvY2F0aW9uIiwicm9sZSIsIlJvdXRlckxpbmtOYXYiLCJwYXRobmFtZSIsIm9uTG9nT3V0VG9nZ2xlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIkxvZ291dCIsIndpdGhSb3V0ZXIiLCJvblZvdGVDbGljayIsImZpbHRlciIsInByb2plY3QiLCJpZCIsInRvU3RyaW5nIiwibWF0Y2giLCJwYXJhbXMiLCJtYXAiLCJpIiwiYnVkZ2V0IiwibGVuZ3RoIiwicmVkdWNlIiwidG90YWwiLCJ2b3RlIiwiZGVzY3JpcHRpb24iLCJwcm9qZWN0SWQiLCJvblZvdGUiLCJwcm9qZWN0UmVnaXN0ZXIiLCJob2JieU5hbWUiLCJjb250YWluZXIiLCJzZWFyY2hWYWx1ZSIsIm9wZW5lZCIsIm9uR2V0UHJvamVjdHNMaXN0IiwicHJvamVjdHNMaXN0IiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImJvcmRlclJhZGl1cyIsIm9uU2VhcmNoQmFyQ2hhbmdlIiwicmVnaXN0ZXIiLCJ0b2tlbiIsInBhc3N3b3JkMiIsIm9uUmVnaXN0ZXJGb3JtU3VibWl0IiwiTW9iaWJsZVNuYWNrYmFyIiwiRGVza3RvcFNuYWNrYmFyIiwiaWNvbiIsIm1lc3NhZ2UiLCJTbmFja2JhciIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIm9uQ2xvc2UiLCJvbkdldFZvdGVzIiwib25VblZvdGUiLCJsb2FkZXIiLCJ2b3Rlc0FycmF5IiwidW5Wb3RlIiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJwb3N0IiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsInJlc3BvbnNlIiwiY29tcG9zZUVuaGFuY2VycyIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyIsImNvbXBvc2UiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNlcnZpY2VXb3JrZXIiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJ1c2VybmFtZSIsImVuZERhdGUiLCJjb21iaW5lUmVkdWNlcnMiLCJsb2dpblJlZHVjZXIiLCJyZWdpc3RlclJlZHVjZXIiLCJwcm9qZWN0UmVnaXN0ZXJSZWR1Y2VyIiwicHJvamVjdHNSZWR1Y2VyIiwiYXV0aFJlZHVjZXIiLCJ2b3Rlc1JlZHVjZXIiLCJpc0xvY2FsaG9zdCIsIkJvb2xlYW4iLCJob3N0bmFtZSIsImNvbmZpZyIsInJlZ2lzdGVyVmFsaWRTVyIsInN3VXJsIiwibmF2aWdhdG9yIiwidGhlbiIsInJlZ2lzdHJhdGlvbiIsIm9udXBkYXRlZm91bmQiLCJpbnN0YWxsaW5nV29ya2VyIiwiaW5zdGFsbGluZyIsIm9uc3RhdGVjaGFuZ2UiLCJjb250cm9sbGVyIiwiY29uc29sZSIsImxvZyIsIm9uVXBkYXRlIiwib25TdWNjZXNzIiwiY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIiLCJmZXRjaCIsImNvbnRlbnRUeXBlIiwiZ2V0Iiwic3RhdHVzIiwiaW5kZXhPZiIsInJlYWR5IiwidW5yZWdpc3RlciIsInJlbG9hZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzZXRVc2VyVG9MUyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJjaGFuZ2VVc2VyQW1vdW50SW5MUyIsInJlbW92ZVVzZXJGcm9tTFMiLCJyZW1vdmVJdGVtIiwidXBkYXRlVXNlckFtb3VudEluTHMiLCJyZXMiLCJkYXRhIiwiZXJyIiwicHJvamVjdExpc3QiLCJsb2dpbkpzb24iLCJwdXNoIiwib25Mb2dPdXQiLCJqc29uIiwicmVnaXN0ZXJKc29uIiwicmVnaXN0cmF0aW9uVG9rZW4iLCJlcnJvcnMiLCJ2b3RlSWQiLCJob2JieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztJQUlNQSxNOzs7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUNsQixVQUFNQyxJQUFJLEdBQUdDLHNFQUFhLEVBQTFCO0FBQ0FELFVBQUksR0FBRyxLQUFLRSxLQUFMLENBQVdDLFVBQVgsQ0FBc0JILElBQXRCLENBQUgsR0FBaUMsSUFBckM7QUFDQUEsVUFBSSxHQUFHLEtBQUtFLEtBQUwsQ0FBV0UsY0FBWCxFQUFILEdBQWlDLElBQXJDO0FBQ0FKLFVBQUksR0FBRyxLQUFLRSxLQUFMLENBQVdHLGNBQVgsRUFBSCxHQUFpQyxJQUFyQztBQUNEOzs7NkJBRVE7QUFBQSxVQUNBQyxNQURBLEdBQ1MsS0FBS0osS0FBTCxDQUFXSyxJQURwQixDQUNBRCxNQURBO0FBRVAsYUFDRSwyREFBQyw4REFBRDtBQUFlLGdCQUFRLEVBQUVFLGtDQUFBLENBQVlDO0FBQXJDLFNBQ0UsMkRBQUMsOENBQUQsUUFDRSwyREFBQyxpRUFBRCxPQURGLEVBRUUsMkRBQUMsdURBQUQsUUFDRSwyREFBQyxzREFBRDtBQUFPLGFBQUssTUFBWjtBQUFhLFlBQUksRUFBQyxHQUFsQjtBQUFzQixpQkFBUyxFQUFFQyw2REFBSUE7QUFBckMsUUFERixFQUVFLDJEQUFDLHNEQUFEO0FBQU8sWUFBSSxFQUFDLFdBQVo7QUFBd0IsaUJBQVMsRUFBRUMsNkVBQVlBO0FBQS9DLFFBRkYsRUFHRSwyREFBQyxzREFBRDtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGlCQUFTLEVBQUVDLGdFQUFLQTtBQUFy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QUs7QUFBQSxhQUFJMk4sT0FBTyxDQUFDQyxHQUFSLENBQVk1TixLQUFaLENBQUo7QUFBQSxLQUxoQjtBQU1BLFdBQU8sSUFBUDtBQUNELEdBUnFCO0FBQUEsQ0FBZixDOzs7Ozs7Ozs7Ozs7QUNKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTStJLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNELFNBQUQsRUFBWXpKLE1BQVo7QUFBQSxTQUF1QixVQUFDVixRQUFELEVBQWM7QUFDekRpTSxnREFBSyxDQUFDRyxJQUFOLENBQVcsV0FBWCxFQUF3QjtBQUN0QmdGLFdBQUssRUFBRWpILFNBRGU7QUFFdEJ6SixZQUFNLEVBQUVBO0FBRmMsS0FBeEIsRUFHRytOLElBSEgsQ0FHUSxVQUFBK0IsR0FBRyxFQUFFO0FBQ1hKLG1GQUFvQixDQUFDMVAsTUFBRCxDQUFwQjtBQUNBVixjQUFRLENBQUNFLG1FQUFjLEVBQWYsQ0FBUjtBQUNBRixjQUFRLENBQUNTLHFFQUFRLENBQUNDLE1BQUQsQ0FBVCxDQUFSO0FBQ0QsS0FQRCxXQU9TLFVBQUFnUSxHQUFHO0FBQUEsYUFBRzFCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZeUIsR0FBWixDQUFIO0FBQUEsS0FQWjtBQVNBLFdBQU8sSUFBUDtBQUNELEdBWHFCO0FBQUEsQ0FBZixDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBCcm93c2VyUm91dGVyLFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7Z2V0VXNlckZyb21MU30gZnJvbSAnLi9zdG9yYWdlL3N0b3JhZ2UnO1xuaW1wb3J0IHthdXRoVXNlcn0gZnJvbSAnLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcbmltcG9ydCB7c2V0UHJvamVjdExpc3R9IGZyb20gJy4vdGh1bmtzL2dldFByb2plY3RzJztcbmltcG9ydCB7YW1vdW50VXBkYXRlfSBmcm9tICcuL3RodW5rcy9hbW91bnRVcGRhdGVUaHVuaydcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lL0hvbWUnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhcic7XG5pbXBvcnQgUHJvamVjdHNMaXN0IGZyb20gICcuL2NvbXBvbmVudHMvUHJvamVjdHNMaXN0L1Byb2plY3RzTGlzdCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9jb21wb25lbnRzL0xvZ2luL0xvZ2luJztcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL2NvbXBvbmVudHMvUmVnaXN0ZXIvUmVnaXN0ZXInO1xuaW1wb3J0IFByb2plY3RSZWdpc3RyYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3RSZWdpc3RyYXRpb24vUHJvamVjdFJlZ2lzdHJhdGlvbic7XG5pbXBvcnQgUHJvamVjdEluZm8gZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3RJbmZvL1Byb2plY3RJbmZvJztcbmltcG9ydCBVc2VyIGZyb20gJy4vY29tcG9uZW50cy9Vc2VyL1VzZXInO1xuLy8gaW1wb3J0IEFib3V0IGZyb20gJy4vY29tcG9uZW50cy9BYm91dC9hYm91dCc7XG5cblxuXG5jbGFzcyBSb3V0ZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB1c2VyID0gZ2V0VXNlckZyb21MUygpO1xuICAgIHVzZXIgPyB0aGlzLnByb3BzLm9uTG9hZEF1dGgodXNlcikgOiBudWxsXG4gICAgdXNlciA/IHRoaXMucHJvcHMub25Mb2FkUHJvamVjdHMoKSA6IG51bGxcbiAgICB1c2VyID8gdGhpcy5wcm9wcy5vblVwZGF0ZVdhbGxldCgpIDogbnVsbFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtpc0F1dGh9ID10aGlzLnByb3BzLmF1dGhcbiAgICByZXR1cm4gKFxuICAgICAgPEJyb3dzZXJSb3V0ZXIgYmFzZW5hbWU9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9PlxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPE5hdkJhci8+XG4gICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9e0hvbWV9Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvcHJvamVjdHMnIGNvbXBvbmVudD17UHJvamVjdHNMaXN0fS8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL2xvZ2luJyBjb21wb25lbnQ9e0xvZ2lufS8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL3JlZ2lzdGVyLzp0b2tlbicgY29tcG9uZW50PXtSZWdpc3Rlcn0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9yZWdpc3Rlci8nIGNvbXBvbmVudD17UmVnaXN0ZXJ9Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvdXNlcicgY29tcG9uZW50PXtVc2VyfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9wcm9qZWN0LzppZCcgY29tcG9uZW50PXtQcm9qZWN0SW5mb30vPlxuICAgICAgICAgICAge2lzQXV0aCA/IDxSb3V0ZSBwYXRoPScvcHJvamVjdC1yZWdpc3RyYXRpb24nIGNvbXBvbmVudD17UHJvamVjdFJlZ2lzdHJhdGlvbn0vPiA6IDxSZWRpcmVjdCB0bz0nL2xvZ2luJy8+fVxuXG4gICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvbkxvYWRBdXRoOiAodXNlcikgPT4gZGlzcGF0Y2goYXV0aFVzZXIodXNlcikpLFxuICBvbkxvYWRQcm9qZWN0czogKCkgPT4gZGlzcGF0Y2goc2V0UHJvamVjdExpc3QoKSksXG4gIG9uVXBkYXRlV2FsbGV0OiAoKSA9PiBkaXNwYXRjaChhbW91bnRVcGRhdGUoKSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFJvdXRlcyk7XG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhVc2VyKHVzZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5BVVRIX1VTRVIsXG4gICAgICAgIHVzZXJcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuTE9HX09VVFxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZvdGVVc2VyKGFtb3VudCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlZPVEVfVVNFUixcbiAgICAgICAgYW1vdW50XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5Wb3RlVXNlcihhbW91bnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5VTlZPVEVfVVNFUixcbiAgICAgICAgYW1vdW50XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlckFtb3VudFVwZGF0ZShhbW91bnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5BTU9VTlRfVVBEQVRFLFxuICAgICAgICBhbW91bnRcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbklucHV0Q2hhbmdlKGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5MT0dJTl9GT1JNX0lOUFVUX0NIQU5HRSxcbiAgICBuYW1lOiBlLnRhcmdldC5uYW1lLFxuICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkZvcm1Mb2FkaW5nKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLkxPR0lOX0ZPUk1fTE9BRElOR1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvZ2luRm9ybUVycm9yKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuTE9HSU5fRk9STV9FUlJPUixcbiAgICBlcnJvclxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvZ2luRm9ybVN1Y2Nlc3ModXNlcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6dHlwZXMuTE9HSU5fRk9STV9TVUNDRVNTLFxuICAgIHVzZXJcbiAgfVxufSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gb25JbnB1dENoYW5nZShlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRSxcbiAgICBuYW1lOiBlLnRhcmdldC5uYW1lLFxuICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkRhdGVDaGFuZ2UoZGF0ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfREFURV9DSEFOR0UsXG4gICAgZGF0ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblByb2plY3RSZWdpc3RlckZvcm1Mb2FkaW5nKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9MT0FESU5HXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uUHJvamVjdFJlZ2lzdGVyRm9ybUVycm9yKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0VSUk9SLFxuICAgIGVycm9yXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uUHJvamVjdFJlZ2lzdGVyRm9ybVN1Ym1pdChwcm9qZWN0SW5mbykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9TVUNDRVNTLFxuICAgIHByb2plY3RJbmZvXG4gIH1cbn0iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RzKHByb2plY3RzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuR0VUX1BST0pFQ1RTLFxuICAgIHByb2plY3RzXG4gIH1cbn0iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uSW5wdXRDaGFuZ2UoZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlJFR0lTVEVSX0ZPUk1fSU5QVVRfQ0hBTkdFLFxuICAgIG5hbWU6IGUudGFyZ2V0Lm5hbWUsXG4gICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRm9ybUxvYWRpbmcoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuUkVHSVNURVJfRk9STV9MT0FESU5HXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uUmVnaXN0ZXJGb3JtRXJyb3IoZXJyb3IpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5SRUdJU1RFUl9GT1JNX0VSUk9SLFxuICAgIGVycm9yXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uUmVnaXN0ZXJGb3JtU3VjY2Vzcyh1c2VyKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTp0eXBlcy5SRUdJU1RFUl9GT1JNX1NVQ0NFU1MsXG4gICAgdXNlclxuICB9XG59IiwiLy8gTG9naW4gdHlwZXNcblxuZXhwb3J0IGNvbnN0IExPR0lOX0ZPUk1fSU5QVVRfQ0hBTkdFID0gJ0xPR0lOX0ZPUk1fSU5QVVRfQ0hBTkdFJztcbmV4cG9ydCBjb25zdCBMT0dJTl9GT1JNX0xPQURJTkcgPSAnTE9HSU5fRk9STV9MT0FESU5HJztcbmV4cG9ydCBjb25zdCBMT0dJTl9GT1JNX0VSUk9SID0gJ0xPR0lOX0ZPUk1fRVJST1InO1xuZXhwb3J0IGNvbnN0IExPR0lOX0ZPUk1fU1VDQ0VTUyA9ICdMT0dJTl9GT1JNX1NVQ0NFU1MnO1xuXG4vLyBSZWdpc3RlciB0eXBlc1xuXG5leHBvcnQgY29uc3QgUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UgPSAnUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UnO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZPUk1fTE9BRElORyA9ICdSRUdJU1RFUl9GT1JNX0xPQURJTkcnO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZPUk1fRVJST1IgPSAnUkVHSVNURVJfRk9STV9FUlJPUic7XG5leHBvcnQgY29uc3QgUkVHSVNURVJfRk9STV9TVUNDRVNTID0gJ1JFR0lTVEVSX0ZPUk1fU1VDQ0VTUyc7XG5cbi8vIFByb2plY3QgUmVnaXN0ZXIgdHlwZXNcblxuZXhwb3J0IGNvbnN0IFBST0pFQ1RfUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0UgPSAnUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0lOUFVUX0NIQU5HRSc7XG5leHBvcnQgY29uc3QgUFJPSkVDVF9SRUdJU1RFUl9EQVRFX0NIQU5HRSA9ICdQUk9KRUNUX1JFR0lTVEVSX0RBVEVfQ0hBTkdFJztcbmV4cG9ydCBjb25zdCBQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fTE9BRElORyA9ICdQUk9KRUNUX1JFR0lTVEVSX0ZPUk1fTE9BRElORyc7XG5leHBvcnQgY29uc3QgUFJPSkVDVF9SRUdJU1RFUl9GT1JNX0VSUk9SID0gJ1BST0pFQ1RfUkVHSVNURVJfRk9STV9FUlJPUic7XG5leHBvcnQgY29uc3QgUFJPSkVDVF9SRUdJU1RFUl9GT1JNX1NVQ0NFU1MgPSAnUFJPSkVDVF9SRUdJU1RFUl9GT1JNX1NVQ0NFU1MnO1xuXG4vLyBQcm9qZWN0cyB0eXBlc1xuXG5leHBvcnQgY29uc3QgR0VUX1BST0pFQ1RTID0gJ0dFVF9QUk9KRUNUUyc7XG5cbi8vIEF1dGggdHlwZXNcblxuZXhwb3J0IGNvbnN0IEFVVEhfVVNFUiA9ICdBVVRIX1VTRVInO1xuZXhwb3J0IGNvbnN0IExPR19PVVQgPSAnTE9HX09VVCc7XG5leHBvcnQgY29uc3QgVU5WT1RFX1VTRVIgPSAnVU5WT1RFX1VTRVInO1xuZXhwb3J0IGNvbnN0IFZPVEVfVVNFUiA9ICdWT1RFX1VTRVInO1xuZXhwb3J0IGNvbnN0IEFNT1VOVF9VUERBVEUgPSBcIkFNT1VOVF9VUERBVEVcIjtcblxuLy8gVm90ZSB0eXBlc1xuXG5leHBvcnQgY29uc3QgR0VUX1ZPVEVTID0gJ0dFVF9WT1RFUyc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1ZPVEUgPSAnUkVNT1ZFX1ZPVEUnOyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vm90ZXModm90ZXMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5HRVRfVk9URVMsXG4gICAgdm90ZXNcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVm90ZSh2b3RlSUQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5SRU1PVkVfVk9URSxcbiAgICB2b3RlSURcbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmsgYXMgUm91dGVyTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgJy4vSG9tZS5zY3NzJztcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IHtjcmVhdGVNdWlUaGVtZSwgTXVpVGhlbWVQcm92aWRlcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBsb2dvIGZyb20gJy4uL0ltYWdlcy9GcmllbmRzLnBuZyc7XG5pbXBvcnQgVGVhbUltYWdlIGZyb20gXCIuLi9JbWFnZXMvdGVhbS5wbmdcIjtcbmltcG9ydCBDb2xsZWFndWVJbWFnZSBmcm9tIFwiLi4vSW1hZ2VzL2NvbGxlYWd1ZS5wbmdcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvZXMvUGFwZXIvUGFwZXJcIjtcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gICAgcGFsZXR0ZToge1xuICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgbWFpbjogJyNmZmZmZmYnLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxuXG5cblxuY29uc3QgSG9tZSA9ICggKSA9PiB7XG4gIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lJz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk1lc3NhZ2UtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J01lc3NhZ2UtVGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBBIE5ldyBhbmQgQmV0dGVyIHdheSB0byBlbmdhbmdlIGFuZCByZXRhaW4gZW1wbG95ZWVzXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J01lc3NhZ2UtU3ViaGVhZGluZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBhbmllcyB1c2UgSG9iYnlDcmFmdCB0byBvcmdhbml6ZSB0aGVpclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVzIGhvYmJ5IGJ1ZGdldCwgaXRzIGEgcGVyZmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJuYWwgY3JvdWQgZnVuZGluZyBzeXN0ZW0gZm9yIHlvdSAhXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM9e1wiMjVweFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy9sb2dpbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48VHlwb2dyYXBoeSBjb2xvcj1cInNlY29uZGFyeVwiID5HZXQgU3RhcnRlZDwvVHlwb2dyYXBoeT48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJJbWdcIiBzcmM9e2xvZ299IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRhaW5lci0taW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT1cIkNhcmQtSG9tZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIkltZy1jYXJkXCIgc3JjPXtUZWFtSW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdNZXNzYWdlLVRpdGxlLUNhcmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnVpbGQgZW1wbG95ZWVzIHVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nTWVzc2FnZS1TdWJoZWFkaW5nLUNhcmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmV3YXJkIGZyZXF1ZW5jeSBpcyBtb3JlIGltcG9ydGFudCB0aGFuIHNpemUuVG9wIGVtcGxveWVycyBjcmVhdGUgYW4gZW52aXJvbm1lbnQgdXNpbmcgSG9ieUNyYWZ0IHdoZXJlIGVtcGxveWVlcyBmZWVsIGNvbm5lY3RlZCB0byB0aGUgb3JnYW5pemF0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT1cIkNhcmQtSG9tZVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJJbWctY2FyZC0yXCIgc3JjPXtDb2xsZWFndWVJbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J01lc3NhZ2UtVGl0bGUtQ2FyZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWtlIHdvcmstbGlmZSBiYWxhbmNlIGEgcHJpb3JpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdNZXNzYWdlLVN1YmhlYWRpbmctQ2FyZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUbyBlbmdhZ2UgdGhlIHdvcmtmb3JjZSBhbmQgcmVtYWluIGNvbXBldGl0aXZlLCBpdCdzIG5vIGxvbmdlciBzdWZmaWNpZW50IHRvIGZvY3VzIHNvbGVseSBvbiBiZW5lZml0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvYnVpbGQvaW1hZ2VzL0ZyaWVuZHMuMzY0MzE3MjkucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9idWlsZC9pbWFnZXMvY29sbGVhZ3VlLmUwMDlhNjlhLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYnVpbGQvaW1hZ2VzL3RlYW0uYWVjY2VhOGQucG5nXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9sb2FkZXIuc2Nzcyc7XG5cbmNvbnN0IExvYWRlciA9ICh7Y29sb3IsaD00MH0pID0+IChcbiAgPGRpdlxuICAgIHN0eWxlPXt7XG4gICAgICB3aWR0aDpoKydweCcsXG4gICAgICBoZWlnaHQ6aCsncHgnLFxuICAgICAgYm9yZGVyUmlnaHQ6YCR7aC82fXB4IHNvbGlkIHRyYW5zcGFyZW50YCxcbiAgICAgIGJvcmRlckxlZnQ6YCR7aC82fXB4IHNvbGlkIHRyYW5zcGFyZW50YCxcbiAgICAgIGJvcmRlclRvcDpgJHtoLzZ9cHggc29saWQgJHtjb2xvcn1gLFxuICAgICAgYm9yZGVyQm90dG9tOmAke2gvNn1weCBzb2xpZCAke2NvbG9yfWAsXG4gICAgfX1cbiAgICBjbGFzc05hbWU9e2BMb2FkZXIgJHtjb2xvcn1gfS8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dpbkFjdGlvbnMnO1xuaW1wb3J0IHsgb25Gb3JtU3VibWl0IH0gZnJvbSAnLi4vLi4vdGh1bmtzL2xvZ2luVGh1bmsnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXIvTG9hZGVyJztcbmltcG9ydCAnLi9Mb2dpbi5zY3NzJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gJy4uL1NuYWNrYmFyL3NuYWNrYmFyJztcbmltcG9ydCB7Y3JlYXRlTXVpVGhlbWUsIE11aVRoZW1lUHJvdmlkZXIsIHdpdGhTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IExvY2tPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvY2tPdXRsaW5lZCc7XG5cblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gICAgcGFsZXR0ZToge1xuICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgbWFpbjogJyMwMDQ0ZmYnLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgbWFpbjogJyNmZmZmZmYnLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgICBtYWluOiB7XG4gICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoNDAwICsgdGhlbWUuc3BhY2luZy51bml0ICogMyAqIDIpXToge1xuICAgICAgICAgICAgd2lkdGg6IDQwMCxcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBwYXBlcjoge1xuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDJ9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weGAsXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0ICo4LFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBhdmF0YXI6IHtcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNFQTc5MjUnLFxuICAgIH0sXG4gICAgZm9ybToge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgICB9LFxuICAgIHRleHRGaWVsZDoge1xuICAgICAgICBoZWlnaHQ6IDUwLFxuICAgIH0sXG4gICAgc3VibWl0OiB7XG4gICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICAgICAgaGVpZ2h0OiA1MCxcbiAgICB9LFxufSk7XG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgfTtcblxuICAgIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgICB9O1xuXG4gICAgb25Gb3JtU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnByb3BzLm9uRm9ybVN1Ym1pdCh0aGlzLnByb3BzLmxvZ2luLCB0aGlzLnByb3BzLmhpc3RvcnkpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGxvYWRpbmcgfSA9IHRoaXMucHJvcHMubG9naW5cbiAgICAgICAgY29uc3Qge29uSW5wdXRDaGFuZ2V9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NrT3V0bGluZWRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIEluXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvciA/IDxTbmFja2JhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+IDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5vbkZvcm1TdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IDxMb2FkZXIgY29sb3I9eycjZmZmJ30gaD17MTV9IC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiZXJyb3JcIiA+U2lnbiBJbjwvVHlwb2dyYXBoeT59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInN1YmhlYWRpbmdcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBJZiB5b3UgZG9uJ3QgaGF2ZSBhbiBhY2NvdW50LCBwbGVhc2V7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9eydzZWNvbmRhcnknfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPScvUmVnaXN0ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2dpbjogc3RhdGUubG9naW5cbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgICBvbklucHV0Q2hhbmdlOiAoZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5vbklucHV0Q2hhbmdlKGUpKSxcbiAgICBvbkZvcm1TdWJtaXQ6ICh1c2VyLCBoaXN0b3J5KSA9PmRpc3BhdGNoKG9uRm9ybVN1Ym1pdCh1c2VyLGhpc3RvcnkpKSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKSh3aXRoU3R5bGVzKHN0eWxlcykoTG9naW4pKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TmF2TGluayBhcyBSb3V0ZXJMaW5rTmF2LCBMaW5rIGFzIFJvdXRlckxpbmssIHdpdGhSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCB7d2l0aFN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7TXVpVGhlbWVQcm92aWRlciwgY3JlYXRlTXVpVGhlbWV9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge29uTG9nT3V0IGFzIExvZ291dH0gZnJvbSAnLi4vLi4vdGh1bmtzL2xvZ291dFRodW5rJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBCb3R0b21OYXZpZ2F0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JvdHRvbU5hdmlnYXRpb24nO1xuaW1wb3J0IEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm90dG9tTmF2aWdhdGlvbkFjdGlvbic7XG5pbXBvcnQgSG9tZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hvbWUnO1xuaW1wb3J0IFZpZXcgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1ZpZXdNb2R1bGUnO1xuaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xpYnJhcnlBZGQnO1xuaW1wb3J0IFBlcnNvbkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BlcnNvbic7XG5pbXBvcnQgUGVyc29uQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGVyc29uQWRkJztcblxuXG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogJyNFQTc5MjUnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OntcbiAgICAgIG1haW46ICcjZmZmZmZmJyxcbiAgICB9XG4gIH0sXG59KTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICByb290OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSxcblxuICBNb2JpbGVOYXY6e1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgekluZGV4OiAxMDAwLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB9LFxuICB9LFxuXG5cbiAgbWVudWJhcjoge1xuICAgIHBhZGRpbmdMZWZ0OiBcIjEwJVwiLFxuICAgIHBhZGRpbmdSaWdodDogXCIxMCVcIixcbiAgICBwb3NpdGlvbjogJ3N0YXRpYycsXG4gICAgYmFja2dyb3VuZDogXCIjMTgxODE4XCIsXG5cbiAgfSxcbiAgZ3Jvdzoge1xuICAgIGZsZXhHcm93OiAxLFxuICAgIGFsaWduOiAnY2VudGVyJyxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIH0sXG4gIH0sXG4gIHNlY3Rpb25EZXNrdG9wOiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgfSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgY29sb3I6ICcjQTRBNEE0JyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICBtYXJnaW46ICdhdXRvJyxcbiAgICBwYWRkaW5nTGVmdDogMjAsXG4gICAgcGFkZGluZ1JpZ2h0OiAyMCxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXG4gIH0sXG4gIGxpbms6IHtcbiAgICBjb2xvcjogJyNBNEE0QTQnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgIHBhZGRpbmc6ICc2cHggMjBweCcsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xuICB9LFxuICBNb2JpbGVCdXR0b246IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBjb2xvcjogJyNBNEE0QTQnLFxuICAgIH0sXG4gICAgbWFyZ2luOiAnYXV0bycsXG4gICAgcGFkZGluZ0xlZnQ6IDIwLFxuICAgIHBhZGRpbmdSaWdodDogMjAsXG4gICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gIH0sXG4gIGJ1dHRvblNpbmdVcDoge1xuICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgbWFyZ2luTGVmdDogMjAsXG4gICAgbWFyZ2luUmlnaHQ6IDIwLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiAxMCxcbiAgICAgIHBhZGRpbmdSaWdodDogMTAsXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBwYWRkaW5nTGVmdDogNSxcbiAgICAgIHBhZGRpbmdSaWdodDogNSxcbiAgICB9LFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRUE3OTI1XCIsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNBMTU0MjFcIixcbiAgICB9LFxuICB9LFxuICBzZWN0aW9uTW9iaWxlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB9LFxuICB9LFxuICB0aXRsZU1vYmlsZToge1xuICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gIH0sXG59O1xuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB2YWx1ZTogMCxcbiAgICBzaG93TWVudTogZmFsc2VcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCwgdmFsdWUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZX0pO1xuICB9O1xuXG4gIG9uTG9nT3V0VG9nZ2xlID0gKCkgPT4gdGhpcy5wcm9wcy5vbkxvZ291dENsaWNrKHRoaXMucHJvcHMuaGlzdG9yeSlcblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7Y2xhc3NlcywgbG9jYXRpb259ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7aXNBdXRoLCByb2xlfSA9IHRoaXMucHJvcHMuYXV0aDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgPEFwcEJhciBjbGFzc05hbWU9e2NsYXNzZXMubWVudWJhcn0+XG4gICAgICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua05hdn0gdG89Jy8nID5cbiAgICAgICAgICAgICAgICAgIEhvYmJ5Q3JhZnRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uTW9iaWxlfT5cbiAgICAgICAgICAgICAgICAgIHtpc0F1dGggP1xuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj0nc2Vjb25kYXJ5JyBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVNb2JpbGV9IGNvbXBvbmVudD17Um91dGVyTGlua05hdn0gdG89Jy8nPlxuICAgICAgICAgICAgICAgICAgICBIb2JieUNyYWZ0XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj4gOiBudWxsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbkRlc2t0b3B9PlxuICAgICAgICAgICAgICAgICAge2lzQXV0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgPCBCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnL3Byb2plY3RzJyA9PT0gbG9jYXRpb24ucGF0aG5hbWUgPyBjbGFzc2VzLmJ1dHRvblNpbmdVcCA6IGNsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPScvcHJvamVjdHMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgRGlzY292ZXIgUHJvamVjdHNcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgPCBCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnLycgPT09IGxvY2F0aW9uLnBhdGhuYW1lID8gY2xhc3Nlcy5idXR0b25TaW5nVXAgOiBjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rTmF2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bz0nLyc+XG4gICAgICAgICAgICAgICAgICAgICAgICBEaXNjb3ZlclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPn1cbiAgICAgICAgICAgICAgICAgIHtpc0F1dGggP1xuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnL3Byb2plY3QtcmVnaXN0cmF0aW9uJyA9PT0gbG9jYXRpb24ucGF0aG5hbWUgPyBjbGFzc2VzLmJ1dHRvblNpbmdVcCA6IGNsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPScvcHJvamVjdC1yZWdpc3RyYXRpb24nPkNyZWF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgYSBQcm9qZWN0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnL3JlZ2lzdGVyJyA9PT0gbG9jYXRpb24ucGF0aG5hbWUgPyBjbGFzc2VzLmJ1dHRvblNpbmdVcCA6IGNsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmtOYXZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPScvcmVnaXN0ZXInPlNpZ25cbiAgICAgICAgICAgICAgICAgICAgICAgIFVwIFdpdGggRW1haWw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHtpc0F1dGggP1xuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnL3VzZXInID09PSBsb2NhdGlvbi5wYXRobmFtZSA/IGNsYXNzZXMuYnV0dG9uU2luZ1VwIDogY2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua05hdn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy91c2VyJz57dGhpcy5wcm9wcy5hdXRoLmVtYWlsfSB7dGhpcy5wcm9wcy5hdXRoLmFtb3VudH3igqw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB7cm9sZSA9PT0gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBocmVmPXsnL2FkbWluJ30gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gPkFkbWluPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHtpc0F1dGggP1xuICAgICAgICAgICAgICAgICAgICBudWxsOiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uTW9iaWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPSdzZWNvbmRhcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZU1vYmlsZX0gY29tcG9uZW50PXtSb3V0ZXJMaW5rTmF2fSB0bz0nLyc+XG4gICAgICAgICAgICAgICAgICAgICAgICBIb2JieUNyYWZ0XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3Jvd30vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25EZXNrdG9wfT5cbiAgICAgICAgICAgICAgICAgIHtpc0F1dGggP1xuICAgICAgICAgICAgICAgICAgICAgIDwgQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9e3RoaXMub25Mb2dPdXRUb2dnbGV9IHRvPScvbG9nb3V0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICA8IEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBjb21wb25lbnQ9e1JvdXRlckxpbmt9IHRvPScvbG9naW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbk1vYmlsZX0+XG4gICAgICAgICAgICAgICAgICB7aXNBdXRoID9cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uTW9iaWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj0nc2Vjb25kYXJ5JyBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVNb2JpbGV9IG9uQ2xpY2s9e3RoaXMub25Mb2dPdXRUb2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89Jy9sb2dvdXQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHtpc0F1dGggP1xuICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvblxuICAgICAgICAgICAgICAgICAgc2hvd0xhYmVsc1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLk1vYmlsZU5hdn0+XG4gICAgICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9XCJIb21lXCIgY29tcG9uZW50PXtSb3V0ZXJMaW5rfSB0bz0nLycgaWNvbj17PEhvbWVJY29uLz59Lz5cbiAgICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIkRpc2NvdmVyXCIgIGNvbXBvbmVudD17Um91dGVyTGlua30gdG89Jy9wcm9qZWN0cycgaWNvbj17PFZpZXcvPn0vPlxuICAgICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPVwiQ3JlYXRlXCIgY29tcG9uZW50PXtSb3V0ZXJMaW5rfSB0bz0nL3Byb2plY3QtcmVnaXN0cmF0aW9uJyBpY29uPXs8QWRkSWNvbi8+fS8+XG4gICAgICAgICAgICAgICAge3JvbGUgPT09IDEgPyA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIkFkbWluXCIgaHJlZj17Jy9hZG1pbid9IGljb249ezxQZXJzb25JY29uLz59IC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPXt0aGlzLnByb3BzLmF1dGguZW1haWx9IGNvbXBvbmVudD17Um91dGVyTGlua30gdG89Jy91c2VyJyBpY29uPXs8UGVyc29uSWNvbi8+fS8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0JvdHRvbU5hdmlnYXRpb24+XG4gICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25cbiAgICAgICAgICAgICAgICAgIHNob3dMYWJlbHNcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5Nb2JpbGVOYXZ9PlxuICAgICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPVwiSG9tZVwiICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfSB0bz0nLycgaWNvbj17PEhvbWVJY29uLz59Lz5cbiAgICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIlNpZ24gVXBcIiBjb21wb25lbnQ9e1JvdXRlckxpbmt9IHRvPScvcmVnaXN0ZXInIGljb249ezxQZXJzb25BZGRJY29uLz59Lz5cbiAgICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIlNpZ24gSW5cIiBjb21wb25lbnQ9e1JvdXRlckxpbmt9IHRvPScvbG9naW4nIGljb249ezxQZXJzb25JY29uLz59Lz5cbiAgICAgICAgICAgICAgPC9Cb3R0b21OYXZpZ2F0aW9uPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuTmF2QmFyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvbkxvZ291dENsaWNrOiAoaGlzdG9yeSkgPT4gZGlzcGF0Y2goTG9nb3V0KGhpc3RvcnkpKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhSb3V0ZXIod2l0aFN0eWxlcyhzdHlsZXMpKE5hdkJhcikpKTsiLCJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge0xpbmsgYXMgUm91dGVyTGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCAnLi9Qcm9qZWN0SW5mby5zY3NzJztcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBNdWlUaGVtZVByb3ZpZGVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2VzL1R5cG9ncmFwaHkvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9lcy9QYXBlci9QYXBlclwiO1xuaW1wb3J0IHtvblZvdGV9IGZyb20gXCIuLi8uLi90aHVua3Mvdm90ZVRodW5rXCI7XG5cblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gICAgcGFsZXR0ZToge1xuICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgbWFpbjogJyNmZmZmZmYnLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxuXG5cbmNvbnN0IFByb2plY3RJbmZvID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHthbW91bnR9ID0gcHJvcHMuYXV0aDtcbiAgY29uc3Qge3Byb2plY3RzLCBvblZvdGVDbGlja30gPSBwcm9wcztcbiAgY29uc3QgcHJvamVjdEluZm8gPSBwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiB7XG4gICAgaWYocHJvamVjdC5pZC50b1N0cmluZygpID09PSBwcm9wcy5tYXRjaC5wYXJhbXMuaWQpIHtcbiAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSkubWFwKChwcm9qZWN0LCBpKSA9PiB7XG4gICAgcHJvamVjdC5idWRnZXQgPSAwO1xuICAgIGlmIChwcm9qZWN0LnZvdGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHByb2plY3QuYnVkZ2V0ID0gcHJvamVjdC52b3Rlcy5yZWR1Y2UoKHRvdGFsLCB2b3RlKT0+IHtcbiAgICAgICAgcmV0dXJuIHRvdGFsICsgdm90ZS5hbW91bnQ7XG4gICAgICB9LCAwKVxuICAgIH0gZWxzZSBpZihwcm9qZWN0LnZvdGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcHJvamVjdC5idWRnZXQgPSBwcm9qZWN0LnZvdGVzWzBdLmFtb3VudDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nUHJvamVjdCcga2V5PXtpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUaXRsZSc+e3Byb2plY3QudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9ncmVzcy1iYXInPlxuICAgICAgICAgICAgICAgICAgPGRpdj57cHJvamVjdC5idWRnZXR9IOKCrDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0xpbmVhclByb2dyZXNzTW9uZXknPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5lYXJQcm9ncmVzcyB2YXJpYW50PXsnYnVmZmVyJ30gdmFsdWU9eyhwcm9qZWN0LmJ1ZGdldC9wcm9qZWN0LmFtb3VudCkqMTAwfS8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+e3Byb2plY3QuYW1vdW50fSDigqw8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdWb3RlQnV0dG9ucyc+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblZvdGVDbGljayhwcm9qZWN0LmlkLCA1KX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YW1vdW50IDwgNX1cbiAgICAgICAgICAgICAgICAgID414oKsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblZvdGVDbGljayhwcm9qZWN0LmlkLCAxNSl9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Ftb3VudCA8IDE1fVxuICAgICAgICAgICAgICAgICAgPjE14oKsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblZvdGVDbGljayhwcm9qZWN0LmlkLCAzMCl9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Ftb3VudCA8IDMwfVxuICAgICAgICAgICAgICAgICAgPjMw4oKsPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0F1dGhvcic+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5BdXRob3IgRW1haWw6IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUZXh0LS1Cb2xkJz4ge3Byb2plY3QuZW1haWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Rlc2NyaXB0aW9uJyA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj57cHJvamVjdC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J0J1dHRvbidcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgICAgICAgIHRvPScvcHJvamVjdHMnPlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICA+QmFjayB0byBwcm9qZWN0czwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9KVxuICByZXR1cm4gKFxuICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1Byb2plY3RJbmZvJz5cbiAgICAgICAgICAgICAge3Byb2plY3RJbmZvfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9QYXBlcj5cbiAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb2plY3RzOiBzdGF0ZS5wcm9qZWN0cy5wcm9qZWN0cyxcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvblZvdGVDbGljazogKHByb2plY3RJZCwgYW1vdW50KSA9PiBkaXNwYXRjaChvblZvdGUocHJvamVjdElkLCBhbW91bnQpKVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShQcm9qZWN0SW5mbyk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vUHJvamVjdFJlZ2lzdHJhdGlvbi5zY3NzJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyL0xvYWRlcic7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL3Byb2plY3RSZWdpc3RlckFjdGlvbnMnO1xuaW1wb3J0IHtvblByb2plY3RSZWdpc3RlckZvcm1TdWJtaXR9IGZyb20gJy4uLy4uL3RodW5rcy9wcm9qZWN0UmVnaXN0ZXJUaHVuayc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBNdWlUaGVtZVByb3ZpZGVyLCB3aXRoU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBTbmFja2JhciBmcm9tICcuLi9TbmFja2Jhci9zbmFja2Jhcic7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogJyNFQTc5MjUnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzAwNDRmZicsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgbWFpbjogJyNmZmZmZmYnLFxuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgbWFpbjoge1xuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCg0MDAgKyB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzICogMildOiB7XG4gICAgICB3aWR0aDogNDAwLFxuICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICB9LFxuICB9LFxuICBwYXBlcjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0LFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAyfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weCAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDN9cHhgLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0ICo4LFxuICAgIH0sXG4gIH0sXG4gIGZvcm06IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0LFxuICB9LFxuICB0ZXh0RmllbGQ6IHtcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgfSxcbiAgc3VibWl0OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICAgIGhlaWdodDogNTAsXG4gIH0sXG59KTtcblxuY2xhc3MgUHJvamVjdFJlZ2lzdHJhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG9wZW46IGZhbHNlLFxuICB9O1xuXG4gIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgfTtcblxuICBvbkZvcm1TdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uRm9ybVN1Ym1pdCh0aGlzLnByb3BzLnByb2plY3RSZWdpc3RlciwgdGhpcy5wcm9wcy5oaXN0b3J5LCB0aGlzLnByb3BzLmF1dGguZW1haWwpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaG9iYnlOYW1lLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBhbW91bnQsXG4gICAgICBsb2FkaW5nLFxuICAgICAgZXJyb3IsXG4gICAgfSA9dGhpcy5wcm9wcy5wcm9qZWN0UmVnaXN0ZXI7XG4gICAgY29uc3Qge29uSW5wdXRDaGFuZ2V9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiPlJlZ2lzdGVyIFlvdXIgSG9iYnlcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgIHtlcnJvciA/IDxTbmFja2JhclxuICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgLz4gOiBudWxsfVxuXG4gICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5vbkZvcm1TdWJtaXR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfVxuICAgICAgICAgICAgICAgICAgbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0naG9iYnlOYW1lJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aG9iYnlOYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxlYXNlIGVudGVyIHlvdXIgaG9iYnkgbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHJvd3NNYXg9XCIxMFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxlYXNlIGRlc2NyaWJlIGl0XCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2Ftb3VudCdcbiAgICAgICAgICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW1vdW50fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxlYXNlIGVudGVyIGFtb3VudCBmb3IgeW91ciBuZWVkc1wiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRlciB0ZXh0Q29sb3I9XCJzZWNvbmRhcnlcIiBjb2xvcj17JyNmZmYnfSBoPXsxNX0gLz4gOlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiZXJyb3JcIiA+UGxhY2UgeW91ciBob2JieTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0UmVnaXN0ZXI6IHN0YXRlLnByb2plY3RSZWdpc3RlcixcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvbklucHV0Q2hhbmdlOiAoZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5vbklucHV0Q2hhbmdlKGUpKSxcbiAgb25EYXRlQ2hhbmdlOiAoZGF0ZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5vbkRhdGVDaGFuZ2UoZGF0ZSkpLFxuICBvbkZvcm1TdWJtaXQ6IChwcm9qZWN0SW5mbywgaGlzdG9yeSwgZW1haWwpPT5kaXNwYXRjaChvblByb2plY3RSZWdpc3RlckZvcm1TdWJtaXQocHJvamVjdEluZm8saGlzdG9yeSxlbWFpbCkpXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFN0eWxlcyhzdHlsZXMpKFByb2plY3RSZWdpc3RyYXRpb24pKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluayBhcyBSb3V0ZXJMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCAnLi9Qcm9qZWN0c0xpc3Quc2Nzcyc7XG5pbXBvcnQge3NldFByb2plY3RMaXN0fSBmcm9tICcuLi8uLi90aHVua3MvZ2V0UHJvamVjdHMnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7b25Wb3RlfSBmcm9tICcuLi8uLi90aHVua3Mvdm90ZVRodW5rJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBNdWlUaGVtZVByb3ZpZGVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIlxuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyL0xvYWRlcic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5cblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjMDA0NGZmJyxcbiAgICB9LFxuICB9LFxufSk7XG5cblxuY2xhc3MgUHJvamVjdHNMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuZWQ6IGZhbHNlLFxuICAgICAgc2VhcmNoVmFsdWU6ICcnXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkdldFByb2plY3RzTGlzdCgpO1xuICB9XG5cbiAgb25TZWFyY2hCYXJDaGFuZ2UgPSBlID0+IHRoaXMuc2V0U3RhdGUoe3NlYXJjaFZhbHVlOiBlLnRhcmdldC52YWx1ZX0pXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtwcm9qZWN0cywgb25Wb3RlQ2xpY2t9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7YW1vdW50fSA9IHRoaXMucHJvcHMuYXV0aDtcbiAgICBsZXQgcHJvamVjdHNMaXN0O1xuICAgIGlmIChwcm9qZWN0cy5sZW5ndGggIT09IDApIHtcbiAgICAgIHByb2plY3RzTGlzdCA9IHByb2plY3RzICYmIHByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHtcbiAgICAgICAgcHJvamVjdC5idWRnZXQgPSAwO1xuICAgICAgICBpZiAocHJvamVjdC52b3Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJvamVjdC5idWRnZXQgPSBwcm9qZWN0LnZvdGVzLnJlZHVjZSgodG90YWwsIHZvdGUpPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRvdGFsICsgdm90ZS5hbW91bnQ7XG4gICAgICAgICAgfSwgMClcbiAgICAgICAgfSBlbHNlIGlmKHByb2plY3Qudm90ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgcHJvamVjdC5idWRnZXQgPSBwcm9qZWN0LnZvdGVzWzBdLmFtb3VudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvamVjdC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgICAgICAubWFwKChwcm9qZWN0LCBpKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9IGtleT17aX0+XG4gICAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT0nbWFpbi1jYXJkJz5cbiAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPSdDYXJkLVByb2plY3QnIGNvbXBvbmVudD17Um91dGVyTGlua30gdG89e2AvcHJvamVjdC8ke3Byb2plY3QuaWR9YH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J0NhcmQtdGl0bGUnfT57cHJvamVjdC50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnQ2FyZC1kZXNjcmlwdGlvbid9Pntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiQ2FyZC1wcm9ncmVzc1wifT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57cHJvamVjdC5idWRnZXR9JDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJDYXJkLXByb2dyZXNzLWJhclwifT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluZWFyUHJvZ3Jlc3MgdmFyaWFudD17J2J1ZmZlcid9IHZhbHVlPXsocHJvamVjdC5idWRnZXQgLyBwcm9qZWN0LmFtb3VudCkgKiAxMDB9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3Byb2plY3QuYW1vdW50fSQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydWb3RlQnV0dG9ucyd9PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiA1MCwgbWFyZ2luOiA1fX0gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblZvdGVDbGljayhwcm9qZWN0LmlkLCA1KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGRpc2FibGVkPXthbW91bnQgPCA1fT414oKsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgc3R5bGU9e3tib3JkZXJSYWRpdXM6IDUwLCBtYXJnaW46IDV9fSBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVm90ZUNsaWNrKHByb2plY3QuaWQsIDE1KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGRpc2FibGVkPXthbW91bnQgPCAxNX0+MTXigqw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzdHlsZT17e2JvcmRlclJhZGl1czogNTAsIG1hcmdpbjogNX19IGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Wb3RlQ2xpY2socHJvamVjdC5pZCwgMzApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gZGlzYWJsZWQ9e2Ftb3VudCA8IDMwfT4zMOKCrDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICAgICApXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0c0xpc3QgPSA8ZGl2IGNsYXNzTmFtZT0nTG9hZGVyLWNvbnRhaW5lci1saXN0Jz5cbiAgICAgICAgPExvYWRlciBjb2xvcj17JyNFQTc5MjUnfSBoPXsxMDB9Lz5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdQcm9qZWN0c0xpc3QnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTZWFyY2hCYXJcIj5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxlYXNlIGVudGVyIGtleXdvcmRzXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2VhcmNoQmFyQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtwcm9qZWN0c0xpc3R9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb2plY3RzOiBzdGF0ZS5wcm9qZWN0cy5wcm9qZWN0cyxcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBvbkdldFByb2plY3RzTGlzdDogKCkgPT4gZGlzcGF0Y2goc2V0UHJvamVjdExpc3QoKSksXG4gIG9uVm90ZUNsaWNrOiAocHJvamVjdElkLCBhbW91bnQpID0+IGRpc3BhdGNoKG9uVm90ZShwcm9qZWN0SWQsIGFtb3VudCkpXG5cbn0pO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUHJvamVjdHNMaXN0KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyL0xvYWRlcic7XG5pbXBvcnQge0xpbmsgYXMgUm91dGVyTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgJy4vUmVnaXN0ZXIuc2NzcydcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uLy4uL2FjdGlvbnMvcmVnaXN0ZXJBY3Rpb25zXCI7XG5pbXBvcnQge29uUmVnaXN0ZXJGb3JtU3VibWl0fSBmcm9tICcuLi8uLi90aHVua3MvcmVnaXN0ZXJUaHVuayc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBNdWlUaGVtZVByb3ZpZGVyLCB3aXRoU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBBY2NvdW50IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlJztcbmltcG9ydCBTbmFja2JhciBmcm9tICcuLi9TbmFja2Jhci9zbmFja2Jhcic7XG5cblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnI0VBNzkyNScsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjMDA0NGZmJyxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBtYWluOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBtYWluOiB7XG4gICAgd2lkdGg6ICdhdXRvJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKDQwMCArIHRoZW1lLnNwYWNpbmcudW5pdCAqIDMgKiAyKV06IHtcbiAgICAgIHdpZHRoOiA0MDAsXG4gICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgIH0sXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDJ9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weGAsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQgKjgsXG4gICAgfSxcbiAgfSxcbiAgZm9ybToge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gIH0sXG4gIHRleHRGaWVsZDoge1xuICAgIGhlaWdodDogNTAsXG4gIH0sXG4gIHN1Ym1pdDoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICBoZWlnaHQ6IDUwLFxuICB9LFxuICBhdmF0YXI6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRUE3OTI1JyxcbiAgfSxcbn0pO1xuXG5cbmNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3BlbjogZmFsc2UsXG5cbiAgfTtcblxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gIH07XG5cblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgfTtcblxuXG4gIG9uRm9ybVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25Gb3JtU3VibWl0KHRoaXMucHJvcHMucmVnaXN0ZXIsIHRoaXMucHJvcHMuaGlzdG9yeSwgdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMudG9rZW4pO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIHBhc3N3b3JkMiwgZXJyb3IsIGxvYWRpbmcsfSA9IHRoaXMucHJvcHMucmVnaXN0ZXI7XG4gICAgY29uc3Qge29uSW5wdXRDaGFuZ2V9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfSA+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgIDxDc3NCYXNlbGluZS8+XG4gICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0gPlxuICAgICAgICAgICAgICAgIDxBY2NvdW50Lz5cbiAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiPlNpZ24gVXBcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgIHtlcnJvciA/IDxTbmFja2JhclxuICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgLz4gOiBudWxsfVxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vbkZvcm1TdWJtaXR9ICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSAgbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cblxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxlYXNlIGVudGVyIHlvdXIgZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQyJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmQyfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVwZWF0IFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyA8TG9hZGVyIGNvbG9yPXsnI2ZmZid9IGg9ezE1fSAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJlcnJvclwiID5TaWduIHVwPC9UeXBvZ3JhcGh5PiB9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzdWJoZWFkaW5nXCJ9PlxuICAgICAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD97JyAnfVxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSb3V0ZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgY29sb3I9eydzZWNvbmRhcnknfVxuICAgICAgICAgICAgICAgICAgdG89Jy9sb2dpbic+XG4gICAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHJlZ2lzdGVyOiBzdGF0ZS5yZWdpc3RlclxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgb25JbnB1dENoYW5nZTogKGUpID0+IGRpc3BhdGNoKGFjdGlvbnMub25JbnB1dENoYW5nZShlKSksXG4gIG9uRm9ybVN1Ym1pdDogKHVzZXIsIGhpc3RvcnksIHRva2VuKSA9PiBkaXNwYXRjaChvblJlZ2lzdGVyRm9ybVN1Ym1pdCh1c2VyLCBoaXN0b3J5LCB0b2tlbikpXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFN0eWxlcyhzdHlsZXMpKFJlZ2lzdGVyKSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0ICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU25hY2sgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyXCI7XG5pbXBvcnQgRXJyb3JJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXJyb3JcIjtcbmltcG9ydCB7d2l0aFN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnI2QzMmYyZicsXG4gICAgfSxcbiAgICBNb2JpYmxlU25hY2tiYXI6e1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBEZXNrdG9wU25hY2tiYXI6e1xuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICAgIGZvbnRTaXplOjIwLFxuICAgICAgICBtYXJnaW5SaWdodDogMTAsXG4gICAgfSxcbiAgICBtZXNzYWdlOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgfSxcbn0pO1xuXG4gICAgICAgIGNvbnN0IFNuYWNrYmFyICA9IChwcm9wcykgPT4ge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuRGVza3RvcFNuYWNrYmFyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3Byb3BzLm9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXsyMDAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgQ29udGVudFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiAnbWVzc2FnZS1pZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogeyByb290OiBwcm9wcy5jbGFzc2VzLnJvb3R9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9ezxzcGFuIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXJyb3JJY29uIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5pY29ufS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmVycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLk1vYmlibGVTbmFja2Jhcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U25hY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3Byb3BzLm9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17cHJvcHMub25DbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXszMDAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRlbnRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6ICdtZXNzYWdlLWlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogeyByb290OiBwcm9wcy5jbGFzc2VzLnJvb3R9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXs8c3BhbiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVycm9ySWNvbiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuaWNvbn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZXJyb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgKHdpdGhTdHlsZXMoc3R5bGVzKShTbmFja2JhcikpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL1VzZXIuc2Nzcyc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHt2b3Rlc30gZnJvbSAnLi4vLi4vdGh1bmtzL2dldFZvdGVzVGh1bmsnO1xuaW1wb3J0IHt1blZvdGV9IGZyb20gJy4uLy4uL3RodW5rcy91blZvdGVUaHVuayc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlci9Mb2FkZXInO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvZXMvUGFwZXIvUGFwZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IHtjcmVhdGVNdWlUaGVtZSwgTXVpVGhlbWVQcm92aWRlcix9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cblxuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgIG1haW46ICcjRUE3OTI1JyxcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiAnIzAwNDRmZicsXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG5cblxuY2xhc3MgVXNlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW5lZDogZmFsc2UsXG4gICAgICAgICAgICBzZWFyY2hWYWx1ZTogJydcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkdldFZvdGVzKClcbiAgfVxuXG4gICAgb25TZWFyY2hCYXJDaGFuZ2UgPSBlID0+IHRoaXMuc2V0U3RhdGUoe3NlYXJjaFZhbHVlOiBlLnRhcmdldC52YWx1ZX0pXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICBjb25zdCB7dm90ZXN9ID0gdGhpcy5wcm9wcy52b3RlcztcbiAgICBjb25zdCB7b25VblZvdGV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3QgbG9hZGVyID0gPGRpdiBjbGFzc05hbWU9XCJMb2FkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgPExvYWRlciBjb2xvcj17JyNFQTc5MjUnfSBoPXsxMDB9Lz5cbiAgICAgIDwvZGl2PlxuXG4gICAgY29uc3Qgdm90ZXNBcnJheSA9IHZvdGVzLm1hcCh2b3RlID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPSdtYWluLXVzZXInID5cbiAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9J0NhcmQtVXNlcicga2V5PXt2b3RlLmlkfSA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0NhcmQtdGl0bGUnPnt2b3RlLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdDYXJkLU1vbmV5U3BlbmQnPlZvdGVkIEFtb3VudDoge3ZvdGUuYW1vdW50feKCrDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25VblZvdGUodm90ZS5pZCwgdm90ZS5hbW91bnQpfT5VblZvdGU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgICApXG4gICAgfSlcbiAgICAgIHJldHVybiAoXG5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVXNlcic+XG4gICAgICAgICAgICAgICAgICB7dm90ZXMubGVuZ3RoID4gMCA/IHZvdGVzQXJyYXkgOiBsb2FkZXJ9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHZvdGVzOiBzdGF0ZS52b3Rlc1xuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgb25HZXRWb3RlczogKCkgPT4gZGlzcGF0Y2godm90ZXMoKSksXG4gIG9uVW5Wb3RlOiAoaWQsIGFtb3VudCkgPT4gZGlzcGF0Y2godW5Wb3RlKGlkLGFtb3VudCkpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVXNlcik7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtjcmVhdGVTdG9yZSwgY29tcG9zZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvcm9vdFJlZHVjZXInO1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuaW1wb3J0IFJvdXRlcyBmcm9tICcuL1JvdXRlcyc7XG5pbXBvcnQgKiBhcyBzZXJ2aWNlV29ya2VyIGZyb20gJy4vc2VydmljZVdvcmtlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nXG5cbmF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShyZXF1ZXN0ID0+IHtcbiAgcmV0dXJuIHJlcXVlc3Q7XG59KVxuXG5heGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UocmVzcG9uc2UgPT4ge1xuICByZXR1cm4gcmVzcG9uc2U7XG59KVxuXG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBjb21wb3NlRW5oYW5jZXJzKGFwcGx5TWlkZGxld2FyZSh0aHVuaykpKTtcblxuUmVhY3RET00ucmVuZGVyKDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICA8Um91dGVzLz5cbjwvUHJvdmlkZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuXG4vLyBJZiB5b3Ugd2FudCB5b3VyIGFwcCB0byB3b3JrIG9mZmxpbmUgYW5kIGxvYWQgZmFzdGVyLCB5b3UgY2FuIGNoYW5nZVxuLy8gdW5yZWdpc3RlcigpIHRvIHJlZ2lzdGVyKCkgYmVsb3cuIE5vdGUgdGhpcyBjb21lcyB3aXRoIHNvbWUgcGl0ZmFsbHMuXG4vLyBMZWFybiBtb3JlIGFib3V0IHNlcnZpY2Ugd29ya2VyczogaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQVxuc2VydmljZVdvcmtlci51bnJlZ2lzdGVyKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBlbWFpbDogJycsXG4gIGFtb3VudDogMCxcbiAgcm9sZTogbnVsbCxcbiAgaXNBdXRoOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5BVVRIX1VTRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZW1haWw6IGFjdGlvbi51c2VyLmVtYWlsLFxuICAgICAgICBhbW91bnQ6IGFjdGlvbi51c2VyLmJ1ZGdldCxcbiAgICAgICAgcm9sZTogYWN0aW9uLnVzZXIucm9sZSxcbiAgICAgICAgaXNBdXRoOiB0cnVlXG4gICAgICB9XG4gICAgY2FzZSB0eXBlcy5MT0dfT1VUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgYW1vdW50OiAwLFxuICAgICAgICByb2xlOiBudWxsLFxuICAgICAgICBpc0F1dGg6IGZhbHNlXG4gICAgICB9O1xuICAgIGNhc2UgdHlwZXMuVk9URV9VU0VSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFtb3VudDogc3RhdGUuYW1vdW50IC0gYWN0aW9uLmFtb3VudFxuICAgICAgfVxuICAgIGNhc2UgdHlwZXMuVU5WT1RFX1VTRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYW1vdW50OiBzdGF0ZS5hbW91bnQgKyBhY3Rpb24uYW1vdW50XG4gICAgICB9XG4gICAgY2FzZSB0eXBlcy5BTU9VTlRfVVBEQVRFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFtb3VudDogYWN0aW9uLmFtb3VudFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGVtYWlsOiAnJyxcbiAgcGFzc3dvcmQ6ICcnLFxuICBlcnJvcjogJycsXG4gIGxvYWRpbmc6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLkxPR0lOX0ZPUk1fSU5QVVRfQ0hBTkdFOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgW2FjdGlvbi5uYW1lXTogYWN0aW9uLnZhbHVlfTtcbiAgICBjYXNlIHR5cGVzLkxPR0lOX0ZPUk1fTE9BRElORzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVycm9yOiAnJywgbG9hZGluZzogdHJ1ZX07XG4gICAgY2FzZSB0eXBlcy5MT0dJTl9GT1JNX0VSUk9SOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXJyb3I6IGFjdGlvbi5lcnJvciwgbG9hZGluZzpmYWxzZX07XG4gICAgY2FzZSB0eXBlcy5MT0dJTl9GT1JNX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlbWFpbDogJycsIHBhc3N3b3JkOiAnJywgbG9hZGluZzpmYWxzZX07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHVzZXJuYW1lOiAnJyxcbiAgaG9iYnlOYW1lOiAnJyxcbiAgZW1haWw6ICcnLFxuICBkZXNjcmlwdGlvbjogJycsXG4gIGFtb3VudDogJycsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcjogJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0U6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBbYWN0aW9uLm5hbWVdOiBhY3Rpb24udmFsdWV9O1xuICAgIGNhc2UgdHlwZXMuUFJPSkVDVF9SRUdJU1RFUl9EQVRFX0NIQU5HRTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVuZERhdGU6IGFjdGlvbi5kYXRlfTtcbiAgICBjYXNlIHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9MT0FESU5HOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZX07XG4gICAgY2FzZSB0eXBlcy5QUk9KRUNUX1JFR0lTVEVSX0ZPUk1fRVJST1I6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlcnJvcjogYWN0aW9uLmVycm9yLCBsb2FkaW5nOmZhbHNlfTtcbiAgICBjYXNlIHR5cGVzLlBST0pFQ1RfUkVHSVNURVJfRk9STV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgaG9iYnlOYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBhbW91bnQ6ICcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGVuZERhdGU6IG51bGwsXG4gICAgICAgIGxvYWRpbmc6ZmFsc2UsXG4gICAgICAgIGVycm9yOicnfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwcm9qZWN0czogW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLkdFVF9QUk9KRUNUUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHByb2plY3RzOiBhY3Rpb24ucHJvamVjdHN9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHVzZXJuYW1lOiAnJyxcbiAgZW1haWw6ICcnLFxuICBwYXNzd29yZDogJycsXG4gIHBhc3N3b3JkMjogJycsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcjogJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuUkVHSVNURVJfRk9STV9JTlBVVF9DSEFOR0U6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBbYWN0aW9uLm5hbWVdOiBhY3Rpb24udmFsdWV9O1xuICAgIGNhc2UgdHlwZXMuUkVHSVNURVJfRk9STV9MT0FESU5HOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXJyb3I6JycsIGxvYWRpbmc6IHRydWV9O1xuICAgIGNhc2UgdHlwZXMuUkVHSVNURVJfRk9STV9FUlJPUjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVycm9yOiBhY3Rpb24uZXJyb3IsIGxvYWRpbmc6ZmFsc2V9O1xuICAgIGNhc2UgdHlwZXMuUkVHSVNURVJfRk9STV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdXNlcm5hbWU6ICcnLCBlbWFpbDogJycsIHBhc3N3b3JkOiAnJywgcGFzc3dvcmQyOiAnJywgZXJyb3I6ICcnLCBsb2FkaW5nOiBmYWxzZX1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gICdyZWR1eCc7XG5pbXBvcnQgbG9naW5SZWR1Y2VyIGZyb20gJy4vbG9naW5SZWR1Y2VyJztcbmltcG9ydCByZWdpc3RlclJlZHVjZXIgZnJvbSAnLi9yZWdpc3RlclJlZHVjZXInO1xuaW1wb3J0IHByb2plY3RSZWdpc3RlclJlZHVjZXIgZnJvbSAnLi9wcm9qZWN0UmVnaXN0ZXJSZWR1Y2VyJztcbmltcG9ydCBwcm9qZWN0c1JlZHVjZXIgZnJvbSAnLi9wcm9qZWN0c1JlZHVjZXInO1xuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gJy4vYXV0aFJlZHVjZXInO1xuaW1wb3J0IHZvdGVzUmVkdWNlciBmcm9tICcuL3ZvdGVzUmVkdWNlcic7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgbG9naW46IGxvZ2luUmVkdWNlcixcbiAgcmVnaXN0ZXI6IHJlZ2lzdGVyUmVkdWNlcixcbiAgcHJvamVjdFJlZ2lzdGVyOiBwcm9qZWN0UmVnaXN0ZXJSZWR1Y2VyLFxuICBwcm9qZWN0czogcHJvamVjdHNSZWR1Y2VyLFxuICBhdXRoOiBhdXRoUmVkdWNlcixcbiAgdm90ZXM6IHZvdGVzUmVkdWNlclxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB2b3RlczogW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5HRVRfVk9URVM6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCB2b3RlczogYWN0aW9uLnZvdGVzfVxuICAgIGNhc2UgdHlwZXMuUkVNT1ZFX1ZPVEU6XG4gICAgICBjb25zdCB2b3RlcyA9IHN0YXRlLnZvdGVzLmZpbHRlcih2b3RlID0+IHZvdGUuaWQgIT09IGFjdGlvbi52b3RlSUQpXG4gICAgICByZXR1cm4gey4uLnN0YXRlLCB2b3Rlc31cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiLy8gVGhpcyBvcHRpb25hbCBjb2RlIGlzIHVzZWQgdG8gcmVnaXN0ZXIgYSBzZXJ2aWNlIHdvcmtlci5cbi8vIHJlZ2lzdGVyKCkgaXMgbm90IGNhbGxlZCBieSBkZWZhdWx0LlxuXG4vLyBUaGlzIGxldHMgdGhlIGFwcCBsb2FkIGZhc3RlciBvbiBzdWJzZXF1ZW50IHZpc2l0cyBpbiBwcm9kdWN0aW9uLCBhbmQgZ2l2ZXNcbi8vIGl0IG9mZmxpbmUgY2FwYWJpbGl0aWVzLiBIb3dldmVyLCBpdCBhbHNvIG1lYW5zIHRoYXQgZGV2ZWxvcGVycyAoYW5kIHVzZXJzKVxuLy8gd2lsbCBvbmx5IHNlZSBkZXBsb3llZCB1cGRhdGVzIG9uIHN1YnNlcXVlbnQgdmlzaXRzIHRvIGEgcGFnZSwgYWZ0ZXIgYWxsIHRoZVxuLy8gZXhpc3RpbmcgdGFicyBvcGVuIG9uIHRoZSBwYWdlIGhhdmUgYmVlbiBjbG9zZWQsIHNpbmNlIHByZXZpb3VzbHkgY2FjaGVkXG4vLyByZXNvdXJjZXMgYXJlIHVwZGF0ZWQgaW4gdGhlIGJhY2tncm91bmQuXG5cbi8vIFRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIGJlbmVmaXRzIG9mIHRoaXMgbW9kZWwgYW5kIGluc3RydWN0aW9ucyBvbiBob3cgdG9cbi8vIG9wdC1pbiwgcmVhZCBodHRwczovL2JpdC5seS9DUkEtUFdBXG5cbmNvbnN0IGlzTG9jYWxob3N0ID0gQm9vbGVhbihcbiAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnbG9jYWxob3N0JyB8fFxuICAgIC8vIFs6OjFdIGlzIHRoZSBJUHY2IGxvY2FsaG9zdCBhZGRyZXNzLlxuICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ1s6OjFdJyB8fFxuICAgIC8vIDEyNy4wLjAuMS84IGlzIGNvbnNpZGVyZWQgbG9jYWxob3N0IGZvciBJUHY0LlxuICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5tYXRjaChcbiAgICAgIC9eMTI3KD86XFwuKD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KSl7M30kL1xuICAgIClcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlcihjb25maWcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgIC8vIFRoZSBVUkwgY29uc3RydWN0b3IgaXMgYXZhaWxhYmxlIGluIGFsbCBicm93c2VycyB0aGF0IHN1cHBvcnQgU1cuXG4gICAgY29uc3QgcHVibGljVXJsID0gbmV3IFVSTChwcm9jZXNzLmVudi5QVUJMSUNfVVJMLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgaWYgKHB1YmxpY1VybC5vcmlnaW4gIT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgIC8vIE91ciBzZXJ2aWNlIHdvcmtlciB3b24ndCB3b3JrIGlmIFBVQkxJQ19VUkwgaXMgb24gYSBkaWZmZXJlbnQgb3JpZ2luXG4gICAgICAvLyBmcm9tIHdoYXQgb3VyIHBhZ2UgaXMgc2VydmVkIG9uLiBUaGlzIG1pZ2h0IGhhcHBlbiBpZiBhIENETiBpcyB1c2VkIHRvXG4gICAgICAvLyBzZXJ2ZSBhc3NldHM7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svY3JlYXRlLXJlYWN0LWFwcC9pc3N1ZXMvMjM3NFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc3dVcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9zZXJ2aWNlLXdvcmtlci5qc2A7XG5cbiAgICAgIGlmIChpc0xvY2FsaG9zdCkge1xuICAgICAgICAvLyBUaGlzIGlzIHJ1bm5pbmcgb24gbG9jYWxob3N0LiBMZXQncyBjaGVjayBpZiBhIHNlcnZpY2Ugd29ya2VyIHN0aWxsIGV4aXN0cyBvciBub3QuXG4gICAgICAgIGNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyKHN3VXJsLCBjb25maWcpO1xuXG4gICAgICAgIC8vIEFkZCBzb21lIGFkZGl0aW9uYWwgbG9nZ2luZyB0byBsb2NhbGhvc3QsIHBvaW50aW5nIGRldmVsb3BlcnMgdG8gdGhlXG4gICAgICAgIC8vIHNlcnZpY2Ugd29ya2VyL1BXQSBkb2N1bWVudGF0aW9uLlxuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICdUaGlzIHdlYiBhcHAgaXMgYmVpbmcgc2VydmVkIGNhY2hlLWZpcnN0IGJ5IGEgc2VydmljZSAnICtcbiAgICAgICAgICAgICAgJ3dvcmtlci4gVG8gbGVhcm4gbW9yZSwgdmlzaXQgaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQSdcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElzIG5vdCBsb2NhbGhvc3QuIEp1c3QgcmVnaXN0ZXIgc2VydmljZSB3b3JrZXJcbiAgICAgICAgcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCwgY29uZmlnKSB7XG4gIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgLnJlZ2lzdGVyKHN3VXJsKVxuICAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICByZWdpc3RyYXRpb24ub251cGRhdGVmb3VuZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5zdGFsbGluZ1dvcmtlciA9IHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nO1xuICAgICAgICBpZiAoaW5zdGFsbGluZ1dvcmtlciA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbGxpbmdXb3JrZXIub25zdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoaW5zdGFsbGluZ1dvcmtlci5zdGF0ZSA9PT0gJ2luc3RhbGxlZCcpIHtcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIHRoZSB1cGRhdGVkIHByZWNhY2hlZCBjb250ZW50IGhhcyBiZWVuIGZldGNoZWQsXG4gICAgICAgICAgICAgIC8vIGJ1dCB0aGUgcHJldmlvdXMgc2VydmljZSB3b3JrZXIgd2lsbCBzdGlsbCBzZXJ2ZSB0aGUgb2xkZXJcbiAgICAgICAgICAgICAgLy8gY29udGVudCB1bnRpbCBhbGwgY2xpZW50IHRhYnMgYXJlIGNsb3NlZC5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgJ05ldyBjb250ZW50IGlzIGF2YWlsYWJsZSBhbmQgd2lsbCBiZSB1c2VkIHdoZW4gYWxsICcgK1xuICAgICAgICAgICAgICAgICAgJ3RhYnMgZm9yIHRoaXMgcGFnZSBhcmUgY2xvc2VkLiBTZWUgaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQS4nXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBjYWxsYmFja1xuICAgICAgICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5vblVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5vblVwZGF0ZShyZWdpc3RyYXRpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50LCBldmVyeXRoaW5nIGhhcyBiZWVuIHByZWNhY2hlZC5cbiAgICAgICAgICAgICAgLy8gSXQncyB0aGUgcGVyZmVjdCB0aW1lIHRvIGRpc3BsYXkgYVxuICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQgaXMgY2FjaGVkIGZvciBvZmZsaW5lIHVzZS5cIiBtZXNzYWdlLlxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29udGVudCBpcyBjYWNoZWQgZm9yIG9mZmxpbmUgdXNlLicpO1xuXG4gICAgICAgICAgICAgIC8vIEV4ZWN1dGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcub25TdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLm9uU3VjY2VzcyhyZWdpc3RyYXRpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uOicsIGVycm9yKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIoc3dVcmwsIGNvbmZpZykge1xuICAvLyBDaGVjayBpZiB0aGUgc2VydmljZSB3b3JrZXIgY2FuIGJlIGZvdW5kLiBJZiBpdCBjYW4ndCByZWxvYWQgdGhlIHBhZ2UuXG4gIGZldGNoKHN3VXJsKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIC8vIEVuc3VyZSBzZXJ2aWNlIHdvcmtlciBleGlzdHMsIGFuZCB0aGF0IHdlIHJlYWxseSBhcmUgZ2V0dGluZyBhIEpTIGZpbGUuXG4gICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKTtcbiAgICAgIGlmIChcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzID09PSA0MDQgfHxcbiAgICAgICAgKGNvbnRlbnRUeXBlICE9IG51bGwgJiYgY29udGVudFR5cGUuaW5kZXhPZignamF2YXNjcmlwdCcpID09PSAtMSlcbiAgICAgICkge1xuICAgICAgICAvLyBObyBzZXJ2aWNlIHdvcmtlciBmb3VuZC4gUHJvYmFibHkgYSBkaWZmZXJlbnQgYXBwLiBSZWxvYWQgdGhlIHBhZ2UuXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgICAgICByZWdpc3RyYXRpb24udW5yZWdpc3RlcigpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNlcnZpY2Ugd29ya2VyIGZvdW5kLiBQcm9jZWVkIGFzIG5vcm1hbC5cbiAgICAgICAgcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnTm8gaW50ZXJuZXQgY29ubmVjdGlvbiBmb3VuZC4gQXBwIGlzIHJ1bm5pbmcgaW4gb2ZmbGluZSBtb2RlLidcbiAgICAgICk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyKCkge1xuICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyRnJvbUxTKCkge1xuICBjb25zdCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hvYmJ5Q3JhZnQtdXNlcicpXG4gIHJldHVybiBKU09OLnBhcnNlKHVzZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlclRvTFModXNlcikge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaG9iYnlDcmFmdC11c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpXG4gIHJldHVybjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVVzZXJBbW91bnRJbkxTKGFtb3VudCkge1xuICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaG9iYnlDcmFmdC11c2VyJykpXG4gIHVzZXIuYnVkZ2V0ID0gdXNlci5idWRnZXQgLSBhbW91bnQ7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdob2JieUNyYWZ0LXVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcbiAgcmV0dXJuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVXNlckZyb21MUygpIHtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2hvYmJ5Q3JhZnQtdXNlcicpXG4gIHJldHVybjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVVzZXJBbW91bnRJbkxzKGFtb3VudCkge1xuICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaG9iYnlDcmFmdC11c2VyJykpXG4gIHVzZXIuYnVkZ2V0ID0gYW1vdW50O1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaG9iYnlDcmFmdC11c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpXG4gIHJldHVybjtcbn1cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge3VzZXJBbW91bnRVcGRhdGV9IGZyb20gJy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuaW1wb3J0IHt1cGRhdGVVc2VyQW1vdW50SW5Mc30gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlJ1xuZXhwb3J0IGNvbnN0IGFtb3VudFVwZGF0ZSA9ICgpID0+IGRpc3BhdGNoID0+IHtcbiAgYXhpb3MuZ2V0KCcvYXBpL3VzZXIvd2FsbGV0JylcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHVzZXJBbW91bnRVcGRhdGUocmVzLmRhdGEuYnVkZ2V0KSlcbiAgICAgICAgdXBkYXRlVXNlckFtb3VudEluTHMocmVzLmRhdGEuYnVkZ2V0KVxuXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxufSIsImltcG9ydCB7Z2V0UHJvamVjdHN9IGZyb20gJy4uL2FjdGlvbnMvcHJvamVjdHNBY3Rpb24nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgY29uc3Qgc2V0UHJvamVjdExpc3QgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBheGlvc1xuICAgICAgLmdldCgnL2FwaS9ob2JiaWVzJylcbiAgICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChnZXRQcm9qZWN0cyhyZXMuZGF0YSkpKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgcmV0dXJuIHByb2plY3RMaXN0O1xufSIsImltcG9ydCB7Z2V0Vm90ZXN9IGZyb20gJy4uL2FjdGlvbnMvdm90ZXNBY3Rpb25zJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCB2b3RlcyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICBheGlvcy5nZXQoJy9hcGkvdXNlci92b3RlcycpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBkaXNwYXRjaChnZXRWb3RlcyhyZXMuZGF0YSkpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgcmV0dXJuIG51bGw7XG59IiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2xvZ2luQWN0aW9ucyc7XG5pbXBvcnQge2F1dGhVc2VyfSBmcm9tICcuLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge3NldFVzZXJUb0xTfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UnO1xuXG5leHBvcnQgY29uc3Qgb25Gb3JtU3VibWl0ID0gKHVzZXIsIGhpc3RvcnkpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChhY3Rpb25zLm9uRm9ybUxvYWRpbmcoKSk7XG4gIGlmKHVzZXIuZW1haWwgPT09ICcnIHx8IHVzZXIucGFzc3dvcmQgPT09ICcnICkge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25zLm9uTG9naW5Gb3JtRXJyb3IoJ1BsZWFzZSBmaWxsIGZpZWxkcycpKTtcbiAgfVxuICBjb25zdCBsb2dpbkpzb24gPSBcdHtcbiAgICAgIFwic2VjdXJpdHlcIjoge1xuICAgICAgICAgIFwiY3JlZGVudGlhbHNcIjoge1xuICAgICAgICAgICAgICBcImVtYWlsXCI6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgIFwicGFzc3dvcmRcIjogdXNlci5wYXNzd29yZFxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICBheGlvcy5wb3N0KCcvYXBpL3NlY3VyaXR5L2xvZ2luJywgbG9naW5Kc29uKVxuICAgICAgLnRoZW4ocmVzID0+e1xuICAgICAgICBzZXRVc2VyVG9MUyhyZXMuZGF0YSlcbiAgICAgICAgZGlzcGF0Y2goYXV0aFVzZXIocmVzLmRhdGEpKVxuICAgICAgICBkaXNwYXRjaChhY3Rpb25zLm9uTG9naW5Gb3JtU3VjY2Vzcyh1c2VyKSlcbiAgICAgICAgaGlzdG9yeS5wdXNoKCcvJylcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChhY3Rpb25zLm9uTG9naW5Gb3JtRXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3IgPyBlcnIucmVzcG9uc2UuZGF0YS5lcnJvciA6XG4gICAgICAgICAgJ1NlcnZlciBFcnJvci4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlcicpKVxuICAgICAgICB9XG4gICAgICApXG59IiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcbmltcG9ydCB7cmVtb3ZlVXNlckZyb21MU30gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IG9uTG9nT3V0ID0gKGhpc3RvcnkpID0+IChkaXNwYXRjaCkgPT4ge1xuICBheGlvcy5nZXQoJy9hcGkvc2VjdXJpdHkvbG9nb3V0JylcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHJlbW92ZVVzZXJGcm9tTFMoKVxuICAgICAgICBkaXNwYXRjaChhY3Rpb25zLmxvZ291dCgpKVxuICAgICAgICBoaXN0b3J5LnB1c2goJy8nKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG4gIHJldHVybiBudWxsO1xufSIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9wcm9qZWN0UmVnaXN0ZXJBY3Rpb25zJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCBvblByb2plY3RSZWdpc3RlckZvcm1TdWJtaXQgPSAocHJvamVjdEluZm8sIGhpc3RvcnksIGVtYWlsKSA9PiAoZGlzcGF0Y2gpID0+IHtcblxuICBkaXNwYXRjaChhY3Rpb25zLm9uUHJvamVjdFJlZ2lzdGVyRm9ybUxvYWRpbmcoKSk7XG4gIGlmKHByb2plY3RJbmZvLmhvYmJ5TmFtZSA9PT0gJycgfHxcbiAgcHJvamVjdEluZm8uZGVzY3JpcHRpb24gPT09ICcnIHx8IHByb2plY3RJbmZvLmFtb3VudCA9PT0gJycgKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbnMub25Qcm9qZWN0UmVnaXN0ZXJGb3JtRXJyb3IoJ1BsZWFzZSBmaWxsIGFsbCBmaWVsZHMnKSlcbiAgfVxuXG4gIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgXCJ0aXRsZVwiOiBwcm9qZWN0SW5mby5ob2JieU5hbWUsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBwcm9qZWN0SW5mby5kZXNjcmlwdGlvbixcbiAgICBcImFtb3VudFwiOiBwcm9qZWN0SW5mby5hbW91bnQsXG4gICAgXCJlbWFpbFwiOiBlbWFpbFxuICB9KTtcbiAgYXhpb3NcbiAgICAgIC5wb3N0KCcvYXBpL2hvYmJ5Jyxqc29uKVxuICAgIC50aGVuKHJlcz0+e1xuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5vblByb2plY3RSZWdpc3RlckZvcm1TdWJtaXQocmVzKSk7XG4gICAgICBoaXN0b3J5LnB1c2goJy9wcm9qZWN0cycpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMub25Qcm9qZWN0UmVnaXN0ZXJGb3JtRXJyb3IoJ1NlcnZlciBlcnJvci4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKSlcbiAgICB9KVxuXG59IiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3JlZ2lzdGVyQWN0aW9ucyc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge3NldFVzZXJUb0xTfSBmcm9tIFwiLi4vc3RvcmFnZS9zdG9yYWdlXCI7XG5pbXBvcnQge2F1dGhVc2VyfSBmcm9tIFwiLi4vYWN0aW9ucy9hdXRoQWN0aW9uc1wiO1xuXG5leHBvcnQgY29uc3Qgb25SZWdpc3RlckZvcm1TdWJtaXQgPSAodXNlciwgaGlzdG9yeSx0b2tlbikgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKGFjdGlvbnMub25Gb3JtTG9hZGluZygpKTtcbiAgaWYodXNlci5lbWFpbCA9PT0gJycgfHwgdXNlci5wYXNzd29yZCA9PT0gJycgfHwgdXNlci5wYXNzd29yZDIgPT09ICcnKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbnMub25SZWdpc3RlckZvcm1FcnJvcignUGxlYXNlIGZpbGwgZmllbGRzJykpO1xuICB9XG4gIGlmKHVzZXIucGFzc3dvcmQgIT09IHVzZXIucGFzc3dvcmQyKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbnMub25SZWdpc3RlckZvcm1FcnJvcignUGFzc3dvcmRzIGRvZXNuXFwndCBtYXRjaCcpKTtcbiAgfVxuICBpZih1c2VyLnBhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9ucy5vblJlZ2lzdGVyRm9ybUVycm9yKCdQYXNzd29yZCBsZW5ndGggbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcicpKTtcbiAgfVxuICBjb25zdCByZWdpc3Rlckpzb24gPSB7XG4gICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXG4gICAgcmVnaXN0cmF0aW9uVG9rZW46IHRva2VuXG4gIH07XG4gIGF4aW9zLnBvc3QoJy9hcGkvc2VjdXJpdHkvcmVnaXN0ZXInLCByZWdpc3Rlckpzb24pXG4gICAgICAudGhlbihyZXMgPT57XG4gICAgICAgIHNldFVzZXJUb0xTKHJlcy5kYXRhKVxuICAgICAgICBkaXNwYXRjaChhdXRoVXNlcihyZXMuZGF0YSkpXG4gICAgICAgIGRpc3BhdGNoKGFjdGlvbnMub25SZWdpc3RlckZvcm1TdWNjZXNzKHJlZ2lzdGVySnNvbikpXG4gICAgICAgIGhpc3RvcnkucHVzaCgnLycpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChhY3Rpb25zLm9uUmVnaXN0ZXJGb3JtRXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzID9cbiAgICAgICAgICAgICAgICBlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnNcbiAgICAgICAgICAgICAgICA6ICdTZXJ2ZXIgZXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJykpXG4gICAgICAgICAgfVxuICAgICAgKVxuXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7cmVtb3ZlVm90ZX0gZnJvbSAnLi4vYWN0aW9ucy92b3Rlc0FjdGlvbnMnO1xuaW1wb3J0IHt1blZvdGVVc2VyfSBmcm9tICcuLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcblxuZXhwb3J0IGNvbnN0IHVuVm90ZSA9ICh2b3RlSWQsIGFtb3VudCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGF4aW9zLmRlbGV0ZShgL2FwaS92b3RlLyR7dm90ZUlkfWApXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBkaXNwYXRjaChyZW1vdmVWb3RlKHZvdGVJZCkpO1xuICAgICAgICBkaXNwYXRjaCh1blZvdGVVc2VyKGFtb3VudCkpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgcmV0dXJuIG51bGw7XG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7c2V0UHJvamVjdExpc3R9IGZyb20gJy4vZ2V0UHJvamVjdHMnO1xuaW1wb3J0IHtjaGFuZ2VVc2VyQW1vdW50SW5MU30gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlJ1xuaW1wb3J0IHt2b3RlVXNlcn0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBvblZvdGUgPSAocHJvamVjdElkLCBhbW91bnQpID0+IChkaXNwYXRjaCkgPT4ge1xuICBheGlvcy5wb3N0KCcvYXBpL3ZvdGUnLCB7XG4gICAgaG9iYnk6IHByb2plY3RJZCxcbiAgICBhbW91bnQ6IGFtb3VudFxuICB9KS50aGVuKHJlcz0+e1xuICAgIGNoYW5nZVVzZXJBbW91bnRJbkxTKGFtb3VudCk7XG4gICAgZGlzcGF0Y2goc2V0UHJvamVjdExpc3QoKSk7XG4gICAgZGlzcGF0Y2godm90ZVVzZXIoYW1vdW50KSk7XG4gIH0pLmNhdGNoKGVycj0+IGNvbnNvbGUubG9nKGVycikpXG5cbiAgcmV0dXJuIG51bGw7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==