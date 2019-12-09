"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Modal', module).add('Modal w/ title', function () {
  return _react.default.createElement(_.default, {
    open: true
  }, _react.default.createElement(_.default.Header, {
    closeButton: true
  }, _react.default.createElement(_.default.Title, null, "Modal")), _react.default.createElement(_.default.Body, null, _react.default.createElement("p", null, "Hot diggity dog.")), _react.default.createElement(_.default.Footer, null, _react.default.createElement(_Button.default, {
    theme: "success"
  }, "Click Me")));
});