"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _PageHeaderTitle = _interopRequireDefault(require("../PageHeaderTitle"));

var _PageHeaderAction = _interopRequireDefault(require("../PageHeaderAction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageHeader = function PageHeader(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)('fur-page-header', className)
  }, children);
};

PageHeader.defaultProps = {
  className: null
};
PageHeader.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string
};
PageHeader.Title = _PageHeaderTitle.default;
PageHeader.Action = _PageHeaderAction.default;
var _default = PageHeader;
exports.default = _default;