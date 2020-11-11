webpackHotUpdate("main",{

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _WelcomePage = __webpack_require__(/*! ./components/WelcomePage */ \"./src/client/components/WelcomePage.js\");\n\nvar _WelcomePage2 = _interopRequireDefault(_WelcomePage);\n\nvar _CreatePage = __webpack_require__(/*! ./components/CreatePage */ \"./src/client/components/CreatePage.js\");\n\nvar _CreatePage2 = _interopRequireDefault(_CreatePage);\n\nvar _JoinPage = __webpack_require__(/*! ./components/JoinPage */ \"./src/client/components/JoinPage.js\");\n\nvar _JoinPage2 = _interopRequireDefault(_JoinPage);\n\nvar _GamePage = __webpack_require__(/*! ./components/GamePage */ \"./src/client/components/GamePage.js\");\n\nvar _GamePage2 = _interopRequireDefault(_GamePage);\n\nvar _web = __webpack_require__(/*! web3 */ \"./node_modules/web3/src/index.js\");\n\nvar _web2 = _interopRequireDefault(_web);\n\nvar _socket = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\");\n\nvar _socket2 = _interopRequireDefault(_socket);\n\n__webpack_require__(/*! ./index.styl */ \"./src/client/index.styl\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nArray.prototype.asyncForEach = function (callback) {\n\tvar _this = this;\n\n\treturn new Promise(function (resolve) {\n\t\tfor (var i = 0; i < _this.length; i++) {\n\t\t\tcallback(_this[i], i, _this);\n\t\t}\n\t\tresolve();\n\t});\n};\n\nvar App = function (_Component) {\n\t_inherits(App, _Component);\n\n\tfunction App(props) {\n\t\t_classCallCheck(this, App);\n\n\t\tvar _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n\t\t_this2.state = {\n\t\t\taccount: '',\n\t\t\tcontract: '',\n\t\t\tcontractAddress: '',\n\t\t\tisThisPlayerOne: false,\n\t\t\tsetupComplete: false,\n\t\t\tescrowPlayerOne: '',\n\t\t\tescrowPlayerTwo: '',\n\t\t\tsocket: null\n\t\t};\n\t\t_this2.setup();\n\t\treturn _this2;\n\t}\n\n\t_createClass(App, [{\n\t\tkey: 'redirectTo',\n\t\tvalue: function redirectTo(history, location) {\n\t\t\thistory.push(location);\n\t\t}\n\t}, {\n\t\tkey: 'asyncSetState',\n\t\tvalue: function asyncSetState(state) {\n\t\t\tvar _this3 = this;\n\n\t\t\treturn new Promise(function (resolve) {\n\t\t\t\t_this3.setState(state, function () {\n\t\t\t\t\treturn resolve();\n\t\t\t\t});\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'setListeners',\n\t\tvalue: function setListeners() {\n\t\t\tvar _this4 = this;\n\n\t\t\tsocket.on('player-two-joined', function () {\n\t\t\t\t_this4.props.redirectTo(_this4.props.history, '/game');\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'setup',\n\t\tvalue: function () {\n\t\t\tvar _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n\t\t\t\tvar account, accounts, socket;\n\t\t\t\treturn regeneratorRuntime.wrap(function _callee$(_context) {\n\t\t\t\t\twhile (1) {\n\t\t\t\t\t\tswitch (_context.prev = _context.next) {\n\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\taccount = void 0;\n\n\t\t\t\t\t\t\t\tif (!window.ethereum) {\n\t\t\t\t\t\t\t\t\t_context.next = 16;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\twindow.myWeb3 = new _web2.default(ethereum);\n\t\t\t\t\t\t\t\tmyWeb3.eth.transactionConfirmationBlocks = 1; //Hard code number of blocks needed\n\t\t\t\t\t\t\t\t_context.prev = 4;\n\t\t\t\t\t\t\t\t_context.next = 7;\n\t\t\t\t\t\t\t\treturn ethereum.enable();\n\n\t\t\t\t\t\t\tcase 7:\n\t\t\t\t\t\t\t\tethereum.on('accountsChanged', function () {\n\t\t\t\t\t\t\t\t\tconsole.log('Account Changed!');\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\taccount = ethereum.selectedAddress;\n\t\t\t\t\t\t\t\t_context.next = 14;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 11:\n\t\t\t\t\t\t\t\t_context.prev = 11;\n\t\t\t\t\t\t\t\t_context.t0 = _context['catch'](4);\n\n\t\t\t\t\t\t\t\talert(\"You must approve this dApp to interact with it, reload and try again\");\n\n\t\t\t\t\t\t\tcase 14:\n\t\t\t\t\t\t\t\t_context.next = 26;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 16:\n\t\t\t\t\t\t\t\tif (!window.web3) {\n\t\t\t\t\t\t\t\t\t_context.next = 24;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\twindow.myWeb3 = new _web2.default(web3.currentProvider);\n\t\t\t\t\t\t\t\t_context.next = 20;\n\t\t\t\t\t\t\t\treturn myWeb3.eth.getAccounts();\n\n\t\t\t\t\t\t\tcase 20:\n\t\t\t\t\t\t\t\taccounts = _context.sent;\n\n\t\t\t\t\t\t\t\taccount = accounts[0];\n\t\t\t\t\t\t\t\t_context.next = 26;\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\tcase 24:\n\t\t\t\t\t\t\t\tconsole.log('Non-Ethereum browser detected. You should consider trying MetaMask!');\n\t\t\t\t\t\t\t\talert('Metamask not detected, install it or log in to use this dApp and reload the page.');\n\n\t\t\t\t\t\t\tcase 26:\n\t\t\t\t\t\t\t\t_context.next = 28;\n\t\t\t\t\t\t\t\treturn (0, _socket2.default)();\n\n\t\t\t\t\t\t\tcase 28:\n\t\t\t\t\t\t\t\tsocket = _context.sent;\n\n\t\t\t\t\t\t\t\tconsole.log('socket', socket);\n\t\t\t\t\t\t\t\t_context.next = 32;\n\t\t\t\t\t\t\t\treturn this.asyncSetState({ account: account, setupComplete: true, socket: socket });\n\n\t\t\t\t\t\t\tcase 32:\n\t\t\t\t\t\t\t\tsetListeners();\n\n\t\t\t\t\t\t\tcase 33:\n\t\t\t\t\t\t\tcase 'end':\n\t\t\t\t\t\t\t\treturn _context.stop();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}, _callee, this, [[4, 11]]);\n\t\t\t}));\n\n\t\t\tfunction setup() {\n\t\t\t\treturn _ref.apply(this, arguments);\n\t\t\t}\n\n\t\t\treturn setup;\n\t\t}()\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this5 = this;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t_reactRouterDom.BrowserRouter,\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_reactRouterDom.Switch,\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, render: function render(context) {\n\t\t\t\t\t\t\treturn _react2.default.createElement(_WelcomePage2.default, {\n\t\t\t\t\t\t\t\thistory: context.history,\n\t\t\t\t\t\t\t\tredirectTo: function redirectTo(history, location) {\n\t\t\t\t\t\t\t\t\t_this5.redirectTo(history, location);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t} }),\n\t\t\t\t\t_react2.default.createElement(_reactRouterDom.Route, { path: '/create', render: function render(context) {\n\t\t\t\t\t\t\treturn _react2.default.createElement(_CreatePage2.default, {\n\t\t\t\t\t\t\t\tcontract: function contract(instance) {\n\t\t\t\t\t\t\t\t\t_this5.setState({ contract: instance });\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\taccount: _this5.state.account,\n\t\t\t\t\t\t\t\tsetState: function setState(state) {\n\t\t\t\t\t\t\t\t\treturn _this5.setState(state);\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\thistory: context.history,\n\t\t\t\t\t\t\t\tescrowPlayerOne: function escrowPlayerOne(_escrowPlayerOne) {\n\t\t\t\t\t\t\t\t\treturn _this5.setState({ escrowPlayerOne: _escrowPlayerOne });\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\tredirectTo: function redirectTo(history, location) {\n\t\t\t\t\t\t\t\t\t_this5.redirectTo(history, location);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t} }),\n\t\t\t\t\t_react2.default.createElement(_reactRouterDom.Route, { path: '/join', render: function render(context) {\n\t\t\t\t\t\t\treturn _react2.default.createElement(_JoinPage2.default, {\n\t\t\t\t\t\t\t\taccount: _this5.state.account,\n\t\t\t\t\t\t\t\thistory: context.history,\n\t\t\t\t\t\t\t\tsetState: function setState(state) {\n\t\t\t\t\t\t\t\t\treturn _this5.setState(state);\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\tescrowPlayerTwo: function escrowPlayerTwo(_escrowPlayerTwo) {\n\t\t\t\t\t\t\t\t\treturn _this5.setState({ escrowPlayerTwo: _escrowPlayerTwo });\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\tredirectTo: function redirectTo(history, location) {\n\t\t\t\t\t\t\t\t\t_this5.redirectTo(history, location);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t} }),\n\t\t\t\t\t_react2.default.createElement(_reactRouterDom.Route, { path: '/game', render: function render(context) {\n\t\t\t\t\t\t\treturn _react2.default.createElement(_GamePage2.default, {\n\t\t\t\t\t\t\t\tsetup: _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n\t\t\t\t\t\t\t\t\treturn regeneratorRuntime.wrap(function _callee2$(_context2) {\n\t\t\t\t\t\t\t\t\t\twhile (1) {\n\t\t\t\t\t\t\t\t\t\t\tswitch (_context2.prev = _context2.next) {\n\t\t\t\t\t\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\t\t\t\t\t\t_context2.next = 2;\n\t\t\t\t\t\t\t\t\t\t\t\t\treturn _this5.setup();\n\n\t\t\t\t\t\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\t\t\t\t\t\t\treturn _context2.abrupt('return', _context2.sent);\n\n\t\t\t\t\t\t\t\t\t\t\t\tcase 3:\n\t\t\t\t\t\t\t\t\t\t\t\tcase 'end':\n\t\t\t\t\t\t\t\t\t\t\t\t\treturn _context2.stop();\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}, _callee2, _this5);\n\t\t\t\t\t\t\t\t})),\n\t\t\t\t\t\t\t\tcontract: _this5.state.contract,\n\t\t\t\t\t\t\t\taccount: _this5.state.account,\n\t\t\t\t\t\t\t\tisThisPlayerOne: _this5.state.isThisPlayerOne,\n\t\t\t\t\t\t\t\tsetupComplete: _this5.state.setupComplete,\n\t\t\t\t\t\t\t\tescrowPlayerOne: _this5.state.escrowPlayerOne,\n\t\t\t\t\t\t\t\tescrowPlayerTwo: _this5.state.escrowPlayerTwo,\n\t\t\t\t\t\t\t\thistory: context.history,\n\t\t\t\t\t\t\t\tredirectTo: function redirectTo(history, location) {\n\t\t\t\t\t\t\t\t\t_this5.redirectTo(history, location);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t} })\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn App;\n}(_react.Component);\n\n_reactDom2.default.render(_react2.default.createElement(App, null), document.querySelector('#root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0FwcC5qcz9mZGMyIl0sIm5hbWVzIjpbIkFycmF5IiwicHJvdG90eXBlIiwiYXN5bmNGb3JFYWNoIiwiY2FsbGJhY2siLCJQcm9taXNlIiwiaSIsImxlbmd0aCIsInJlc29sdmUiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiYWNjb3VudCIsImNvbnRyYWN0IiwiY29udHJhY3RBZGRyZXNzIiwiaXNUaGlzUGxheWVyT25lIiwic2V0dXBDb21wbGV0ZSIsImVzY3Jvd1BsYXllck9uZSIsImVzY3Jvd1BsYXllclR3byIsInNvY2tldCIsInNldHVwIiwiaGlzdG9yeSIsImxvY2F0aW9uIiwicHVzaCIsInNldFN0YXRlIiwib24iLCJyZWRpcmVjdFRvIiwid2luZG93IiwiZXRoZXJldW0iLCJteVdlYjMiLCJXZWIzIiwiZXRoIiwidHJhbnNhY3Rpb25Db25maXJtYXRpb25CbG9ja3MiLCJlbmFibGUiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0ZWRBZGRyZXNzIiwiYWxlcnQiLCJ3ZWIzIiwiY3VycmVudFByb3ZpZGVyIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImFzeW5jU2V0U3RhdGUiLCJzZXRMaXN0ZW5lcnMiLCJjb250ZXh0IiwiaW5zdGFuY2UiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUFBLE1BQU1DLFNBQU4sQ0FBZ0JDLFlBQWhCLEdBQStCLFVBQVVDLFFBQVYsRUFBb0I7QUFBQTs7QUFDL0MsUUFBTyxJQUFJQyxPQUFKLENBQVksbUJBQVc7QUFDMUIsT0FBSSxJQUFJQyxJQUFJLENBQVosRUFBZUEsSUFBSSxNQUFLQyxNQUF4QixFQUFnQ0QsR0FBaEMs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LENBQVdDLE9BSHJCO0FBSXNCLHlCQUFpQixPQUFLRCxLQUFMLENBQVdJLGVBSmxEO0FBS3NCLHVCQUFlLE9BQUtKLEtBQUwsQ0FBV0ssYUFMaEQ7QUFNc0IseUJBQWlCLE9BQUtMLEtBQUwsQ0FBV00sZUFObEQ7QUFPc0IseUJBQWlCLE9BQUtOLEtBQUwsQ0FBV08sZUFQbEQ7QUFRQyxpQkFBUzBCLFFBQVF2QixPQVJsQjtBQVNDLG9CQUFZLG9CQUFDQSxPQUFELEVBQVVDLFFBQVYsRUFBdUI7QUFDakMsZ0JBQUtJLFVBQUwsQ0FBZ0JMLE9BQWhCLEVBQXlCQyxRQUF6QjtBQUNEO0FBWEYsU0FEMkI7QUFBQSxPQUE1QjtBQWhDRDtBQURELElBREQ7QUFvREE7Ozs7RUFqSGdCd0IsZ0I7O0FBb0hsQkMsbUJBQVNDLE1BQVQsQ0FDQyw4QkFBQyxHQUFELE9BREQsRUFFQ0MsU0FBU0MsYUFBVCxDQUF1QixPQUF2QixDQUZEIiwiZmlsZSI6Ii4vc3JjL2NsaWVudC9BcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgV2VsY29tZVBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL1dlbGNvbWVQYWdlJ1xuaW1wb3J0IENyZWF0ZVBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL0NyZWF0ZVBhZ2UnXG5pbXBvcnQgSm9pblBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL0pvaW5QYWdlJ1xuaW1wb3J0IEdhbWVQYWdlIGZyb20gJy4vY29tcG9uZW50cy9HYW1lUGFnZSdcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcbmltcG9ydCAnLi9pbmRleC5zdHlsJ1xuXG5BcnJheS5wcm90b3R5cGUuYXN5bmNGb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2FsbGJhY2sodGhpc1tpXSwgaSwgdGhpcylcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKClcbiAgICB9KVxufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciAocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0YWNjb3VudDogJycsXG5cdFx0XHRjb250cmFjdDogJycsXG5cdFx0XHRjb250cmFjdEFkZHJlc3M6ICcnLFxuXHRcdFx0aXNUaGlzUGxheWVyT25lOiBmYWxzZSxcbiAgICAgICAgICAgIHNldHVwQ29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgZXNjcm93UGxheWVyT25lOiAnJyxcblx0XHRcdGVzY3Jvd1BsYXllclR3bzogJycsXG5cdFx0XHRzb2NrZXQ6IG51bGwsXG5cdFx0fVxuXHRcdHRoaXMuc2V0dXAoKVxuXHR9XG5cblx0cmVkaXJlY3RUbyhoaXN0b3J5LCBsb2NhdGlvbikge1xuXHRcdGhpc3RvcnkucHVzaChsb2NhdGlvbik7XG5cdH1cblxuICAgIGFzeW5jU2V0U3RhdGUoc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSwgKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICB9KVxuXHR9XG5cdFxuXHRzZXRMaXN0ZW5lcnMoKSB7XG5cdFx0c29ja2V0Lm9uKCdwbGF5ZXItdHdvLWpvaW5lZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMucmVkaXJlY3RUbyh0aGlzLnByb3BzLmhpc3RvcnksICcvZ2FtZScpXG4gICAgICAgIH0pXG5cdH1cblxuXHRhc3luYyBzZXR1cCgpIHtcblx0XHRsZXQgYWNjb3VudFxuXHRcdGlmICh3aW5kb3cuZXRoZXJldW0pIHtcblx0XHRcdHdpbmRvdy5teVdlYjMgPSBuZXcgV2ViMyhldGhlcmV1bSlcblx0XHRcdG15V2ViMy5ldGgudHJhbnNhY3Rpb25Db25maXJtYXRpb25CbG9ja3MgPSAxIC8vSGFyZCBjb2RlIG51bWJlciBvZiBibG9ja3MgbmVlZGVkXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBldGhlcmV1bS5lbmFibGUoKVxuXHRcdFx0XHRldGhlcmV1bS5vbignYWNjb3VudHNDaGFuZ2VkJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdBY2NvdW50IENoYW5nZWQhJylcblx0XHRcdFx0fSlcblx0XHRcdFx0YWNjb3VudCA9IGV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzc1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0YWxlcnQoXCJZb3UgbXVzdCBhcHByb3ZlIHRoaXMgZEFwcCB0byBpbnRlcmFjdCB3aXRoIGl0LCByZWxvYWQgYW5kIHRyeSBhZ2FpblwiKVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAod2luZG93LndlYjMpIHtcblx0XHRcdHdpbmRvdy5teVdlYjMgPSBuZXcgV2ViMyh3ZWIzLmN1cnJlbnRQcm92aWRlcilcblx0XHRcdGxldCBhY2NvdW50cyA9IGF3YWl0IG15V2ViMy5ldGguZ2V0QWNjb3VudHMoKVxuXHRcdFx0YWNjb3VudCA9IGFjY291bnRzWzBdXG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdOb24tRXRoZXJldW0gYnJvd3NlciBkZXRlY3RlZC4gWW91IHNob3VsZCBjb25zaWRlciB0cnlpbmcgTWV0YU1hc2shJylcblx0XHRcdGFsZXJ0KCdNZXRhbWFzayBub3QgZGV0ZWN0ZWQsIGluc3RhbGwgaXQgb3IgbG9nIGluIHRvIHVzZSB0aGlzIGRBcHAgYW5kIHJlbG9hZCB0aGUgcGFnZS4nKVxuXHRcdH1cblx0XHRjb25zdCBzb2NrZXQgPSBhd2FpdCBpbygpXG5cdFx0Y29uc29sZS5sb2coJ3NvY2tldCcsIHNvY2tldClcblx0XHRhd2FpdCB0aGlzLmFzeW5jU2V0U3RhdGUoeyBhY2NvdW50LCBzZXR1cENvbXBsZXRlOiB0cnVlLCBzb2NrZXQsIH0pXG5cdFx0c2V0TGlzdGVuZXJzKClcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxCcm93c2VyUm91dGVyPlxuXHRcdFx0XHQ8U3dpdGNoPlxuXHRcdFx0XHRcdDxSb3V0ZSBwYXRoPVwiL1wiIGV4YWN0IHJlbmRlcj17Y29udGV4dCA9PiAoXG5cdFx0XHRcdFx0XHQ8V2VsY29tZVBhZ2Vcblx0XHRcdFx0XHRcdFx0aGlzdG9yeT17Y29udGV4dC5oaXN0b3J5fVxuXHRcdFx0XHRcdFx0XHRyZWRpcmVjdFRvPXsoaGlzdG9yeSwgbG9jYXRpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0ICB0aGlzLnJlZGlyZWN0VG8oaGlzdG9yeSwgbG9jYXRpb24pXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCl9IC8+XG5cdFx0XHRcdFx0PFJvdXRlIHBhdGg9XCIvY3JlYXRlXCIgcmVuZGVyPXtjb250ZXh0ID0+IChcblx0XHRcdFx0XHRcdDxDcmVhdGVQYWdlXG5cdFx0XHRcdFx0XHRcdGNvbnRyYWN0PXtpbnN0YW5jZSA9PiB7dGhpcy5zZXRTdGF0ZSh7Y29udHJhY3Q6IGluc3RhbmNlfSl9fVxuXHRcdFx0XHRcdFx0XHRhY2NvdW50PXt0aGlzLnN0YXRlLmFjY291bnR9XG5cdFx0XHRcdFx0XHRcdHNldFN0YXRlPXtzdGF0ZSA9PiB0aGlzLnNldFN0YXRlKHN0YXRlKX1cblx0XHRcdFx0XHRcdFx0aGlzdG9yeT17Y29udGV4dC5oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY3Jvd1BsYXllck9uZT17ZXNjcm93UGxheWVyT25lID0+IHRoaXMuc2V0U3RhdGUoe2VzY3Jvd1BsYXllck9uZX0pfVxuXHRcdFx0XHRcdFx0XHRyZWRpcmVjdFRvPXsoaGlzdG9yeSwgbG9jYXRpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0ICB0aGlzLnJlZGlyZWN0VG8oaGlzdG9yeSwgbG9jYXRpb24pXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCl9IC8+XG5cdFx0XHRcdFx0PFJvdXRlIHBhdGg9XCIvam9pblwiIHJlbmRlcj17Y29udGV4dCA9PiAoXG5cdFx0XHRcdFx0XHQ8Sm9pblBhZ2Vcblx0XHRcdFx0XHRcdFx0YWNjb3VudD17dGhpcy5zdGF0ZS5hY2NvdW50fVxuXHRcdFx0XHRcdFx0XHRoaXN0b3J5PXtjb250ZXh0Lmhpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGU9e3N0YXRlID0+IHRoaXMuc2V0U3RhdGUoc3RhdGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY3Jvd1BsYXllclR3bz17ZXNjcm93UGxheWVyVHdvID0+IHRoaXMuc2V0U3RhdGUoe2VzY3Jvd1BsYXllclR3b30pfVxuXHRcdFx0XHRcdFx0XHRyZWRpcmVjdFRvPXsoaGlzdG9yeSwgbG9jYXRpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0ICB0aGlzLnJlZGlyZWN0VG8oaGlzdG9yeSwgbG9jYXRpb24pXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCl9IC8+XG5cdFx0XHRcdFx0PFJvdXRlIHBhdGg9XCIvZ2FtZVwiIHJlbmRlcj17Y29udGV4dCA9PiAoXG5cdFx0XHRcdFx0XHQ8R2FtZVBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR1cD17YXN5bmMgKCkgPT4gYXdhaXQgdGhpcy5zZXR1cCgpfVxuXHRcdFx0XHRcdFx0XHRjb250cmFjdD17dGhpcy5zdGF0ZS5jb250cmFjdH1cblx0XHRcdFx0XHRcdFx0YWNjb3VudD17dGhpcy5zdGF0ZS5hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVGhpc1BsYXllck9uZT17dGhpcy5zdGF0ZS5pc1RoaXNQbGF5ZXJPbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dXBDb21wbGV0ZT17dGhpcy5zdGF0ZS5zZXR1cENvbXBsZXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY3Jvd1BsYXllck9uZT17dGhpcy5zdGF0ZS5lc2Nyb3dQbGF5ZXJPbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjcm93UGxheWVyVHdvPXt0aGlzLnN0YXRlLmVzY3Jvd1BsYXllclR3b31cblx0XHRcdFx0XHRcdFx0aGlzdG9yeT17Y29udGV4dC5oaXN0b3J5fVxuXHRcdFx0XHRcdFx0XHRyZWRpcmVjdFRvPXsoaGlzdG9yeSwgbG9jYXRpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0ICB0aGlzLnJlZGlyZWN0VG8oaGlzdG9yeSwgbG9jYXRpb24pXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCl9IC8+XG5cdFx0XHRcdDwvU3dpdGNoPlxuXHRcdFx0PC9Ccm93c2VyUm91dGVyPlxuXHRcdClcblx0fVxufVxuXG5SZWFjdERPTS5yZW5kZXIoXG5cdDxBcHAgLz4sXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290JylcbilcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/App.js\n");

/***/ })

})