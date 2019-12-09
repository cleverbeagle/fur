"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Alert', module).add('Default', function () {
  return _react.default.createElement(_.default, null, "This is just a heads up!");
}).add('Primary', function () {
  return _react.default.createElement(_.default, {
    theme: "primary"
  }, "Enter your email address below to receive a link to reset your password.");
}).add('Success', function () {
  return _react.default.createElement(_.default, {
    theme: "success"
  }, "All is well here!");
}).add('Warning', function () {
  return _react.default.createElement(_.default, {
    theme: "warning"
  }, "Uh oh. ", "Something's", " not right.");
}).add('Danger', function () {
  return _react.default.createElement(_.default, {
    theme: "danger"
  }, "Something is really wrong! Pay attention!");
});