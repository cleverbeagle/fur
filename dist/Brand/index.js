"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Brand = function Brand(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      children = _ref.children;
  return _react.default.createElement("button", {
    type: "button",
    className: "fur-brand ".concat(className),
    onClick: onClick
  }, children);
};

Brand.defaultProps = {
  onClick: null,
  className: ''
};
Brand.propTypes = {
  onClick: _propTypes.default.func,
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string
};
var _default = Brand;
exports.default = _default;