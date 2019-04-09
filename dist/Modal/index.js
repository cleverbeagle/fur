"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ModalHeader = _interopRequireDefault(require("../ModalHeader"));

var _ModalTitle = _interopRequireDefault(require("../ModalTitle"));

var _ModalBody = _interopRequireDefault(require("../ModalBody"));

var _ModalFooter = _interopRequireDefault(require("../ModalFooter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClose", function (event) {
      document.body.style.overflow = 'auto';
      var onClose = _this.props.onClose;
      event.preventDefault();
      if (onClose) onClose(event);
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var open = nextProps.open; // NOTE: If modal is not currently open but will be, set overflow hidden
      // on body to disable scroling.

      if (!this.props.open && open) document.body.style.overflow = 'hidden'; // eslint-disable-line

      if (this.props.open && !open) document.body.style.overflow = 'auto'; // eslint-disable-line
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          open = _this$props.open,
          size = _this$props.size,
          className = _this$props.className,
          children = _this$props.children,
          maskOpacity = _this$props.maskOpacity;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)(className, 'fur-modal', (_classNames = {}, _defineProperty(_classNames, "fur-modal-size-".concat(size), size), _defineProperty(_classNames, 'fur-modal-open', open), _classNames))
      }, _react.default.createElement("div", {
        className: "fur-modal-close-icon"
      }), _react.default.createElement("div", {
        className: "fur-modal-content"
      }, children), _react.default.createElement("div", {
        tabIndex: 0,
        role: "button",
        className: "fur-modal-mask",
        style: {
          background: "rgba(135, 151, 178, ".concat(maskOpacity, ")")
        },
        onClick: this.handleClose,
        onKeyUp: this.handleClose
      }));
    }
  }]);

  return Modal;
}(_react.default.Component);

Modal.Header = _ModalHeader.default;
Modal.Title = _ModalTitle.default;
Modal.Body = _ModalBody.default;
Modal.Footer = _ModalFooter.default;
Modal.defaultProps = {
  open: false,
  size: '',
  className: '',
  maskOpacity: 0.75,
  children: null
};
Modal.propTypes = {
  open: _propTypes.default.bool,
  size: _propTypes.default.string,
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  onClose: _propTypes.default.func.isRequired,
  maskOpacity: _propTypes.default.number
};
var _default = Modal;
exports.default = _default;