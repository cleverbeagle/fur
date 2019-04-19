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
  var togglenavigation = _ref.togglenavigation;
  return _react.default.createElement(_Button.default, {
    className: "fur-navigation-toggle",
    onClick: togglenavigation
  }, _react.default.createElement("span", null), _react.default.createElement("span", null), _react.default.createElement("span", null));
};

NavigationToggle.defaultProps = {
  togglenavigation: function togglenavigation() {}
};
NavigationToggle.propTypes = {
  togglenavigation: _propTypes.default.func
};
var _default = NavigationToggle;
exports.default = _default;