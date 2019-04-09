"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _NavigationItems = _interopRequireDefault(require("../NavigationItems"));

var _NavigationItem = _interopRequireDefault(require("../NavigationItem"));

var _UserNavigationItem = _interopRequireDefault(require("../UserNavigationItem"));

var _NavigationToggle = _interopRequireDefault(require("../NavigationToggle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Navigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Navigation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleNavigation", function () {
      var open = _this.state.open;

      _this.setState({
        open: !open
      });
    });

    return _this;
  }

  _createClass(Navigation, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          orientation = _this$props.orientation,
          fluid = _this$props.fluid;
      var open = this.state.open;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "fur-navigation-".concat(orientation), !!orientation), _defineProperty(_classNames, 'fur-navigation-open', open), _defineProperty(_classNames, 'fur-navigation-fluid', fluid), _classNames))
      }, _react.default.Children.map(children, function (child) {
        return _react.default.cloneElement(child, {
          toggleNavigation: _this2.toggleNavigation
        });
      }));
    }
  }]);

  return Navigation;
}(_react.default.Component);

Navigation.defaultProps = {
  fluid: false
};
Navigation.propTypes = {
  children: _propTypes.default.node.isRequired,
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical']).isRequired,
  fluid: _propTypes.default.bool
};
Navigation.Items = _NavigationItems.default;
Navigation.Item = _NavigationItem.default;
Navigation.User = _UserNavigationItem.default;
Navigation.Toggle = _NavigationToggle.default;
var _default = Navigation;
exports.default = _default;