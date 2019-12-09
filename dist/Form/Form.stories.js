"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Form.Input', module).add('Input w/ start cap', function () {
  return _react.default.createElement(_.default.InputWrap, null, _react.default.createElement(_.default.InputCap, null, "Price in USD"), _react.default.createElement(_.default.Input, {
    type: "text"
  }));
}).add('Input w/ end cap', function () {
  return _react.default.createElement(_.default.InputWrap, null, _react.default.createElement(_.default.Input, {
    type: "text"
  }), _react.default.createElement(_.default.InputCap, null, "Test"));
}).add('Input w/ double cap', function () {
  return _react.default.createElement(_.default.InputWrap, null, _react.default.createElement(_.default.InputCap, null, "Test"), _react.default.createElement(_.default.Input, {
    type: "text"
  }), _react.default.createElement(_.default.InputCap, null, "Test"));
}).add('Multiple inputs', function () {
  return _react.default.createElement(_.default.InputWrap, null, _react.default.createElement(_.default.Input, {
    type: "text"
  }), _react.default.createElement(_.default.Input, {
    type: "text"
  }), _react.default.createElement(_.default.Input, {
    type: "text"
  }));
}).add('Input w/ Legend', function () {
  return _react.default.createElement(_.default.Field, null, _react.default.createElement(_.default.Legend, null, "This is a legend"), _react.default.createElement(_.default.Input, {
    type: "text"
  }));
}).add('Checkbox', function () {
  return _react.default.createElement(_.default.Field, null, _react.default.createElement(_.default.Checkbox, null));
}).add('DateTimePicker', function () {
  return _react.default.createElement(_.default.Field, null, _react.default.createElement(_.default.DateTimePicker, {
    options: {
      mode: 'range'
    }
  }));
}).add('Control', function () {
  return _react.default.createElement(_.default.Control, null, _react.default.createElement(_.default.Input, {
    type: "text"
  }), _react.default.createElement(_Button.default, {
    theme: "success"
  }, "Save"));
});