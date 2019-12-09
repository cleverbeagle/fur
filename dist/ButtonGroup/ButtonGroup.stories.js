"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('ButtonGroup', module).add('Three buttons', function () {
  return _react.default.createElement(_.default, null, _react.default.createElement(_Button.default, {
    theme: "default"
  }, "One"), _react.default.createElement(_Button.default, {
    theme: "default"
  }, "Two"), _react.default.createElement(_Button.default, {
    theme: "default"
  }, "Three"));
}).add('First button active', function () {
  return _react.default.createElement(_.default, null, _react.default.createElement(_Button.default, {
    theme: "default"
  }, "One"), _react.default.createElement(_Button.default, {
    theme: "default"
  }, "Two"));
}).add('Second button active', function () {
  return _react.default.createElement(_.default, null, _react.default.createElement(_Button.default, {
    theme: "default"
  }, "One"), _react.default.createElement(_Button.default, {
    theme: "primary"
  }, "Two"));
}).add('Middle button active', function () {
  return _react.default.createElement(_.default, null, _react.default.createElement(_Button.default, {
    theme: "default"
  }, "One"), _react.default.createElement(_Button.default, {
    theme: "primary"
  }, "Two"), _react.default.createElement(_Button.default, {
    theme: "default"
  }, "Three"));
});