"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PageHeaderTitle = _interopRequireDefault(require("../PageHeaderTitle"));

var _PageHeaderAction = _interopRequireDefault(require("../PageHeaderAction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageHeader = function PageHeader(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "fur-page-header"
  }, children);
};

PageHeader.propTypes = {
  children: _propTypes.default.node.isRequired
};
PageHeader.Title = _PageHeaderTitle.default;
PageHeader.Action = _PageHeaderAction.default;
var _default = PageHeader;
exports.default = _default;