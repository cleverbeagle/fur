"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalFooter = function ModalFooter(_ref) {
  var children = _ref.children;
  return _react.default.createElement("footer", {
    className: "fur-modal-footer clearfix"
  }, children);
};

ModalFooter.propTypes = {
  children: _propTypes.default.node.isRequired
};
var _default = ModalFooter;
exports.default = _default;