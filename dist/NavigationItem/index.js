"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NavigationItem = function NavigationItem(_ref) {
  var className = _ref.className,
      theme = _ref.theme,
      active = _ref.active,
      divider = _ref.divider,
      label = _ref.label,
      onClick = _ref.onClick,
      children = _ref.children,
      downArrow = _ref.downArrow;
  return _react.default.createElement("li", {
    className: (0, _classnames.default)('fur-navigation-item', {
      'fur-navigation-item-divider': divider
    }, {
      'fur-navigation-item-active': active
    }, className)
  }, !divider && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("button", {
    type: "button",
    onClick: onClick,
    className: (0, _classnames.default)(_defineProperty({}, "theme-".concat(theme), theme))
  }, label, downArrow ? _react.default.createElement("div", {
    className: "fur-down-arrow"
  }) : ''), children));
};

NavigationItem.defaultProps = {
  active: false,
  divider: false,
  onClick: null,
  children: null,
  downArrow: false,
  className: false
};
NavigationItem.propTypes = {
  active: _propTypes.default.bool,
  divider: _propTypes.default.bool,
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func,
  children: _propTypes.default.node,
  downArrow: _propTypes.default.bool,
  className: _propTypes.default.bool
};
var _default = NavigationItem;
exports.default = _default;