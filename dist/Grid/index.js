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

function _objectSpread(target) {
  for (let i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    let ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(
          (sym) => Object.getOwnPropertyDescriptor(source, sym).enumerable,
        ),
      );
    }
    ownKeys.forEach((key) => {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  const target = _objectWithoutPropertiesLoose(source, excluded);
  let key;
  let i;
  if (Object.getOwnPropertySymbols) {
    const sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  const target = {};
  const sourceKeys = Object.keys(source);
  let key;
  let i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

const mapGlobalPropsToChildren = function mapGlobalPropsToChildren(_ref) {
  const children = _ref.children;

  const rest = _objectWithoutProperties(_ref, ['children']);

  return _react.default.Children.map(children, (child) =>
    _react.default.cloneElement(child, _objectSpread({}, rest)),
  );
};

const Container = function Container(props) {
  return _react.default.createElement(
    'div',
    {
      className: 'fur-grid-container',
    },
    mapGlobalPropsToChildren(props),
  );
};

const Row = function Row(props) {
  return _react.default.createElement(
    'div',
    {
      className: 'fur-grid-row',
    },
    mapGlobalPropsToChildren(props),
  );
};

const Col = function Col(_ref2) {
  let _classNames;

  const auto = _ref2.auto;

  const col = _ref2.col;

  const sm = _ref2.sm;

  const md = _ref2.md;

  const lg = _ref2.lg;

  const xl = _ref2.xl;

  const smOffset = _ref2.smOffset;

  const mdOffset = _ref2.mdOffset;

  const lgOffset = _ref2.lgOffset;

  const xlOffset = _ref2.xlOffset;

  const order = _ref2.order;

  const smOrder = _ref2.smOrder;

  const mdOrder = _ref2.mdOrder;

  const lgOrder = _ref2.lgOrder;

  const xlOrder = _ref2.xlOrder;

  const rest = _objectWithoutProperties(_ref2, [
    'auto',
    'col',
    'sm',
    'md',
    'lg',
    'xl',
    'smOffset',
    'mdOffset',
    'lgOffset',
    'xlOffset',
    'order',
    'smOrder',
    'mdOrder',
    'lgOrder',
    'xlOrder',
  ]);

  return _react.default.createElement(
    'div',
    {
      className: (0, _classnames.default)(
        ((_classNames = {}),
        _defineProperty(_classNames, 'fur-grid-col-auto', !!auto),
        _defineProperty(_classNames, 'fur-grid-col-'.concat(col), !!col),
        _defineProperty(_classNames, 'fur-grid-col-sm-'.concat(sm), !!sm),
        _defineProperty(_classNames, 'fur-grid-col-md-'.concat(md), !!md),
        _defineProperty(_classNames, 'fur-grid-col-lg-'.concat(lg), !!lg),
        _defineProperty(_classNames, 'fur-grid-col-xl-'.concat(xl), !!xl),
        _defineProperty(_classNames, 'fur-grid-offset-sm-'.concat(smOffset), !!smOffset),
        _defineProperty(_classNames, 'fur-grid-offset-md-'.concat(mdOffset), !!mdOffset),
        _defineProperty(_classNames, 'fur-grid-offset-lg-'.concat(lgOffset), !!lgOffset),
        _defineProperty(_classNames, 'fur-grid-offset-xl-'.concat(xlOffset), !!xlOffset),
        _defineProperty(_classNames, 'fur-grid-order-'.concat(order), !!order),
        _defineProperty(_classNames, 'fur-grid-order-sm-'.concat(smOrder), !!smOrder),
        _defineProperty(_classNames, 'fur-grid-order-md-'.concat(mdOrder), !!mdOrder),
        _defineProperty(_classNames, 'fur-grid-order-log-'.concat(lgOrder), !!lgOrder),
        _defineProperty(_classNames, 'fur-grid-order-xl-'.concat(xlOrder), !!xlOrder),
        _classNames),
      ),
    },
    mapGlobalPropsToChildren(_objectSpread({}, rest)),
  );
};

Col.defaultProps = {
  auto: false,
  col: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  smOffset: null,
  mdOffset: null,
  lgOffset: null,
  xlOffset: null,
  order: null,
  smOrder: null,
  mdOrder: null,
  lgOrder: null,
  xlOrder: null,
};
Col.propTypes = {
  auto: _propTypes.default.bool,
  col: _propTypes.default.number,
  sm: _propTypes.default.number,
  md: _propTypes.default.number,
  lg: _propTypes.default.number,
  xl: _propTypes.default.number,
  smOffset: _propTypes.default.number,
  mdOffset: _propTypes.default.number,
  lgOffset: _propTypes.default.number,
  xlOffset: _propTypes.default.number,
  order: _propTypes.default.number,
  smOrder: _propTypes.default.number,
  mdOrder: _propTypes.default.number,
  lgOrder: _propTypes.default.number,
  xlOrder: _propTypes.default.number,
};
const _default = {
  Container,
  Row,
  Col,
};
exports.default = _default;
