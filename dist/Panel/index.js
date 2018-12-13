"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Panel = function Panel(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "fur-panel"
  }, children);
};

var PanelHeader = function PanelHeader(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement("div", {
    className: "fur-panel-header"
  }, children);
};

var PanelBody = function PanelBody(_ref3) {
  var children = _ref3.children;
  return _react.default.createElement("div", {
    className: "fur-panel-body"
  }, children);
};

var PanelFooter = function PanelFooter(_ref4) {
  var children = _ref4.children;
  return _react.default.createElement("div", {
    className: "fur-panel-footer"
  }, children);
};

Panel.propTypes = {
  children: _propTypes.default.node.isRequired
};
PanelHeader.propTypes = {
  children: _propTypes.default.node.isRequired
};
PanelBody.propTypes = {
  children: _propTypes.default.node.isRequired
};
PanelFooter.propTypes = {
  children: _propTypes.default.node.isRequired
};
Panel.Header = PanelHeader;
Panel.Body = PanelBody;
Panel.Footer = PanelFooter;
var _default = Panel;
exports.default = _default;