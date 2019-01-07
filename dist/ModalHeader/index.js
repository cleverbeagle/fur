"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalHeader = function ModalHeader(_ref) {
  var children = _ref.children,
      closeButton = _ref.closeButton,
      onClose = _ref.onClose;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
    className: "fur-modal-header clearfix"
  }, children, closeButton && _react.default.createElement("button", {
    type: "button",
    className: "fur-modal-close",
    onClick: onClose
  }, "\xD7")));
};

ModalHeader.defaultProps = {
  closeButton: false
};
ModalHeader.propTypes = {
  children: _propTypes.default.node.isRequired,
  closeButton: _propTypes.default.bool,
  onClose: _propTypes.default.func.isRequired
};
var _default = ModalHeader;
exports.default = _default;