"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroup = function ButtonGroup(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "fur-button-group"
  }, children);
};

ButtonGroup.propTypes = {
  children: _propTypes.default.node.isRequired
};
var _default = ButtonGroup;
exports.default = _default;