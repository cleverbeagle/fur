Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _propTypes = _interopRequireDefault(require('prop-types'));

const _react = _interopRequireDefault(require('react'));

const _classnames = _interopRequireDefault(require('classnames'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const Button = function Button(_ref) {
  const className = _ref.className;

  const children = _ref.children;

  const onClick = _ref.onClick;

  const onMouseOver = _ref.onMouseOver;

  const onMouseOut = _ref.onMouseOut;

  const theme = _ref.theme;

  const block = _ref.block;
  return _react.default.createElement(
    'button',
    {
      onClick,
      onMouseOver,
      onFocus: onMouseOver,
      onMouseOut,
      onBlur: onMouseOut,
      type: 'button',
      className: (0, _classnames.default)(
        'fur-button',
        'fur-button-'.concat(theme || 'default'),
        {
          'fur-button-block': block,
        },
        className,
      ),
    },
    children,
  );
};

Button.defaultProps = {
  onClick: null,
  onMouseOver: null,
  onMouseOut: null,
  block: false,
};
Button.propTypes = {
  className: _propTypes.default.string.isRequired,
  children: _propTypes.default.node.isRequired,
  onClick: _propTypes.default.func,
  onMouseOver: _propTypes.default.func,
  onMouseOut: _propTypes.default.func,
  theme: _propTypes.default.string.isRequired,
  block: _propTypes.default.bool,
};
const _default = Button;
exports.default = _default;
