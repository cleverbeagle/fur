"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalBody = function ModalBody(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)('fur-modal-body', className)
  }, children);
};

ModalBody.defaultProps = {
  className: null
};
ModalBody.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string
};
var _default = ModalBody;
exports.default = _default;