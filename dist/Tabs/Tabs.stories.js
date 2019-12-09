"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Tabs', module).add('w/ tabs', function () {
  return _react.default.createElement(_.default, null, _react.default.createElement(_.default.Tab, {
    title: "Issues"
  }, _react.default.createElement("p", null, "Issues here")), _react.default.createElement(_.default.Tab, {
    title: "Releases"
  }, _react.default.createElement("p", null, "Releases here")), _react.default.createElement(_.default.Tab, {
    title: "Settings"
  }, _react.default.createElement("p", null, "Settings here")));
});