"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageHeaderAction = function PageHeaderAction(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "fur-page-header-action"
  }, children);
};

PageHeaderAction.propTypes = {
  children: _propTypes.default.node.isRequired
};
var _default = PageHeaderAction;
exports.default = _default;