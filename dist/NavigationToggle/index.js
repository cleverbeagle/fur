Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const _Button = _interopRequireDefault(require('../Button'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const NavigationToggle = function NavigationToggle(_ref) {
  const toggleNavigation = _ref.toggleNavigation;
  return _react.default.createElement(
    _Button.default,
    {
      className: 'fur-navigation-toggle',
      onClick: toggleNavigation,
    },
    _react.default.createElement('span', null),
    _react.default.createElement('span', null),
    _react.default.createElement('span', null),
  );
};

NavigationToggle.propTypes = {
  toggleNavigation: _propTypes.default.func.isRequired,
};
const _default = NavigationToggle;
exports.default = _default;
