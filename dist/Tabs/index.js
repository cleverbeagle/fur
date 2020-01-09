"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash"));

var _Tab = _interopRequireDefault(require("../Tab"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tabs).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "validateChildrenAreTabs", function (children) {
      return children.forEach(function (_ref) {
        var type = _ref.type;
        if (type.name !== 'Tab') throw Error('[Fur] Children of the <Tabs> component can only be <Tabs.Tab> components.');
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSelectTab", function (activeTab) {
      var onSelect = _this.props.onSelect;

      _this.setState({
        activeTab: activeTab
      }, function () {
        if (onSelect) onSelect(activeTab);
      });
    });

    var _activeTab = props.activeTab;
    _this.state = {
      activeTab: _activeTab || 1
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var newActiveTab = _lodash.default.get(nextProps, 'activeTab', null);

      this.setState({
        activeTab: newActiveTab
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var activeTab = this.props.activeTab || this.state.activeTab; // eslint-disable-line
      // this.validateChildrenAreTabs(children);

      var tabs = children.map(function (tab) {
        return {
          key: tab.key,
          ref: tab.ref,
          props: tab.props
        };
      });
      return _react.default.createElement("div", {
        className: "fur-tabs"
      }, _react.default.createElement("ul", {
        className: "clearfix"
      }, tabs.map(function (_ref2, tabIndex) {
        var key = _ref2.key,
            ref = _ref2.ref,
            props = _ref2.props;
        var tabActiveKey = props.tabid || tabIndex + 1;
        return _react.default.createElement(_Tab.default, _extends({}, props, {
          key: "".concat(key, "_").concat(tabIndex),
          ref: ref,
          onClick: function onClick() {
            return _this2.handleSelectTab(tabActiveKey);
          },
          isActive: activeTab === tabActiveKey
        }));
      })), _react.default.createElement("div", {
        className: "fur-tabs-content"
      }, tabs.map(function (_ref3, tabIndex) {
        var props = _ref3.props;
        return props.tabid === activeTab || tabIndex + 1 === activeTab ? props.children : null;
      })));
    }
  }]);

  return Tabs;
}(_react.default.Component);

Tabs.propTypes = {
  children: _propTypes.default.node.isRequired
};
Tabs.Tab = _Tab.default;
var _default = Tabs;
exports.default = _default;