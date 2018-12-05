Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const Brand = function Brand(_ref) {
  const onClick = _ref.onClick;

  const children = _ref.children;
  return _react.default.createElement(
    'button',
    {
      type: 'button',
      className: 'fur-brand',
      onClick,
    },
    children,
  );
};

Brand.defaultProps = {
  onClick: null,
};
Brand.propTypes = {
  onClick: _propTypes.default.func,
  children: _propTypes.default.node.isRequired,
};
const _default = Brand;
exports.default = _default;
