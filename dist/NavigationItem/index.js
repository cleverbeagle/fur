Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const _classnames = _interopRequireDefault(require('classnames'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const NavigationItem = function NavigationItem(_ref) {
  const active = _ref.active;

  const divider = _ref.divider;

  const label = _ref.label;

  const onClick = _ref.onClick;

  const children = _ref.children;

  const downArrow = _ref.downArrow;
  return _react.default.createElement(
    'li',
    {
      className: (0, _classnames.default)(
        'fur-navigation-item',
        {
          'fur-navigation-item-divider': divider,
        },
        {
          'fur-navigation-item-active': active,
        },
      ),
    },
    !divider &&
      _react.default.createElement(
        _react.default.Fragment,
        null,
        _react.default.createElement(
          'button',
          {
            type: 'button',
            onClick,
          },
          label,
          downArrow
            ? _react.default.createElement('div', {
                className: 'fur-down-arrow',
              })
            : '',
        ),
        children,
      ),
  );
};

NavigationItem.defaultProps = {
  active: false,
  divider: false,
  onClick: null,
  children: null,
  downArrow: false,
};
NavigationItem.propTypes = {
  active: _propTypes.default.bool,
  divider: _propTypes.default.bool,
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func,
  children: _propTypes.default.node,
  downArrow: _propTypes.default.bool,
};
const _default = NavigationItem;
exports.default = _default;
