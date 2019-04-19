"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalHeader = function ModalHeader(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
    className: "fur-modal-header clearfix"
  }, children));
};

ModalHeader.defaultProps = {};
ModalHeader.propTypes = {
  children: _propTypes.default.node.isRequired
};
var _default = ModalHeader;
exports.default = _default;