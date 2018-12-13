"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationItems = function NavigationItems(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react.default.createElement("ul", {
    className: "fur-navigation-items ".concat(className)
  }, children);
};

NavigationItems.propTypes = {
  children: _propTypes.default.node.isRequired
};
var _default = NavigationItems;
exports.default = _default;