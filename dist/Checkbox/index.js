"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Checkbox = function Checkbox(props) {
  return _react.default.createElement("div", {
    className: "fur-checkbox"
  }, _react.default.createElement("input", _extends({
    type: "checkbox"
  }, props)), _react.default.createElement("div", {
    className: "fur-checkbox-box"
  }));
};

Checkbox.propTypes = {// prop: PropTypes.string.isRequired,
};
var _default = Checkbox;
exports.default = _default;