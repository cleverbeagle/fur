Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const NavigationItems = function NavigationItems(_ref) {
  const children = _ref.children;
  return _react.default.createElement(
    'ul',
    {
      className: 'fur-navigation-items',
    },
    children,
  );
};

NavigationItems.propTypes = {
  children: _propTypes.default.node.isRequired,
};
const _default = NavigationItems;
exports.default = _default;
