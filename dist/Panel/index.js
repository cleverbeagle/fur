Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const Panel = function Panel(_ref) {
  const children = _ref.children;
  return _react.default.createElement(
    'div',
    {
      className: 'fur-panel',
    },
    children,
  );
};

const PanelHeader = function PanelHeader(_ref2) {
  const children = _ref2.children;
  return _react.default.createElement(
    'div',
    {
      className: 'fur-panel-header',
    },
    children,
  );
};

const PanelBody = function PanelBody(_ref3) {
  const children = _ref3.children;
  return _react.default.createElement(
    'div',
    {
      className: 'fur-panel-body',
    },
    children,
  );
};

const PanelFooter = function PanelFooter(_ref4) {
  const children = _ref4.children;
  return _react.default.createElement(
    'div',
    {
      className: 'fur-panel-footer',
    },
    children,
  );
};

Panel.propTypes = {
  children: _propTypes.default.node.isRequired,
};
PanelHeader.propTypes = {
  children: _propTypes.default.node.isRequired,
};
PanelBody.propTypes = {
  children: _propTypes.default.node.isRequired,
};
PanelFooter.propTypes = {
  children: _propTypes.default.node.isRequired,
};
Panel.Header = PanelHeader;
Panel.Body = PanelBody;
Panel.Footer = PanelFooter;
const _default = Panel;
exports.default = _default;
