"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationToggle = function NavigationToggle(_ref) {
  var toggleNavigation = _ref.toggleNavigation;
  return _react.default.createElement(_Button.default, {
    className: "fur-navigation-toggle",
    onClick: toggleNavigation
  }, _react.default.createElement("span", null), _react.default.createElement("span", null), _react.default.createElement("span", null));
};

NavigationToggle.defaultProps = {
  toggleNavigation: function toggleNavigation() {}
};
NavigationToggle.propTypes = {
  toggleNavigation: _propTypes.default.func
};
var _default = NavigationToggle;
exports.default = _default;