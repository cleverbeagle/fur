"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Pagination', module).add('Numbers Only', function () {
  return _react.default.createElement(_.default, null, _react.default.createElement(_.default.Page, null, "Prev"), _react.default.createElement(_.default.Page, null, "1"), _react.default.createElement(_.default.Page, null, "2"), _react.default.createElement(_.default.Page, {
    active: true
  }, "3"), _react.default.createElement(_.default.Page, null, "4"), _react.default.createElement(_.default.Page, null, "5"), _react.default.createElement(_.default.Page, null, "Next"));
});