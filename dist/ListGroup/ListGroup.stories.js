"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('ListGroup', module).add('w/ items', function () {
  return _react.default.createElement(_.default, null, _react.default.createElement(_.default.Item, null, _react.default.createElement("p", null, "Testing 123")), _react.default.createElement(_.default.Item, null, _react.default.createElement("p", null, "Testing 123")), _react.default.createElement(_.default.Item, null, _react.default.createElement("p", null, "Testing 123")));
});