"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageHeaderTitle = function PageHeaderTitle(_ref) {
  var children = _ref.children;
  return _react.default.createElement("h1", {
    className: "fur-page-header-title"
  }, children);
};

PageHeaderTitle.propTypes = {
  children: _propTypes.default.node.isRequired
};
var _default = PageHeaderTitle;
exports.default = _default;