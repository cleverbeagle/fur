"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalTitle = function ModalTitle(_ref) {
  var children = _ref.children;
  return _react.default.createElement("h2", null, children);
};

ModalTitle.propTypes = {
  children: _propTypes.default.node.isRequired
};
var _default = ModalTitle;
exports.default = _default;