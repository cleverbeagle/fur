"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var type = _ref.type,
      theme = _ref.theme,
      block = _ref.block,
      className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["type", "theme", "block", "className", "children"]);

  return _react.default.createElement("button", _extends({}, rest, {
    type: type || 'button',
    className: (0, _classnames.default)('fur-button', "fur-button-".concat(theme || 'default'), {
      'fur-button-block': block
    }, className)
  }), children);
};

Button.defaultProps = {
  onClick: null,
  onMouseOver: null,
  onMouseOut: null,
  block: false
};
Button.propTypes = {
  className: _propTypes.default.string.isRequired,
  children: _propTypes.default.node.isRequired,
  onClick: _propTypes.default.func,
  onMouseOver: _propTypes.default.func,
  onMouseOut: _propTypes.default.func,
  theme: _propTypes.default.string.isRequired,
  block: _propTypes.default.bool
};
var _default = Button;
exports.default = _default;