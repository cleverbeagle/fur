"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Panel = function Panel(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)('fur-panel', className)
  }, children);
};

var PanelHeader = function PanelHeader(_ref2) {
  var className = _ref2.className,
      children = _ref2.children;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)('fur-panel-header', className)
  }, children);
};

var PanelBody = function PanelBody(_ref3) {
  var className = _ref3.className,
      children = _ref3.children;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)('fur-panel-body', className)
  }, children);
};

var PanelFooter = function PanelFooter(_ref4) {
  var className = _ref4.className,
      children = _ref4.children;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)('fur-panel-footer', className)
  }, children);
};

Panel.defaultProps = {
  className: null
};
Panel.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string
};
PanelHeader.defaultProps = {
  className: null
};
PanelHeader.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string
};
PanelBody.defaultProps = {
  className: null
};
PanelBody.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string
};
PanelFooter.defaultProps = {
  className: null
};
PanelFooter.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string
};
Panel.Header = PanelHeader;
Panel.Body = PanelBody;
Panel.Footer = PanelFooter;
var _default = Panel;
exports.default = _default;