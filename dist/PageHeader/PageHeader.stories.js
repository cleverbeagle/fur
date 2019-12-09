"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('PageHeader', module).add('w/ title', function () {
  return _react.default.createElement(_.default, null, _react.default.createElement(_.default.Title, null, "Page Title"));
}).add('w/ title and action', function () {
  return _react.default.createElement(_.default, null, _react.default.createElement(_.default.Title, null, "Page Title"), _react.default.createElement(_.default.Action, null, _react.default.createElement(_Button.default, {
    theme: "success"
  }, "Page Action")));
});