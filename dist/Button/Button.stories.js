"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Button', module).add('Default', function () {
  return _react.default.createElement(_.default, null, "Click Here");
}).add('Primary', function () {
  return _react.default.createElement(_.default, {
    theme: "primary"
  }, "Click Here");
}).add('Success', function () {
  return _react.default.createElement(_.default, {
    theme: "success"
  }, "Click Here");
}).add('Warning', function () {
  return _react.default.createElement(_.default, {
    theme: "warning"
  }, "Click Here");
}).add('Danger', function () {
  return _react.default.createElement(_.default, {
    theme: "danger"
  }, "Click Here");
});