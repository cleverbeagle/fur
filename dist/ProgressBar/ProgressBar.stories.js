"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Progress Bar', module).add('Empty', function () {
  return _react.default.createElement(_.default, null);
}).add('At 50%', function () {
  return _react.default.createElement(_.default, {
    progress: 50
  });
}).add('At 50%', function () {
  return _react.default.createElement(_.default, {
    progress: 50
  });
}).add('Primary', function () {
  return _react.default.createElement(_.default, {
    theme: "primary",
    progress: 50
  });
}).add('Success', function () {
  return _react.default.createElement(_.default, {
    theme: "success",
    progress: 80
  });
}).add('Warning', function () {
  return _react.default.createElement(_.default, {
    theme: "warning",
    progress: 30
  });
}).add('Danger', function () {
  return _react.default.createElement(_.default, {
    theme: "danger",
    progress: 10
  });
});