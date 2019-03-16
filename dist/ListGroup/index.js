"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ListGroupItem = _interopRequireDefault(require("../ListGroupItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListGroup = function ListGroup(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)('fur-list-group', className)
  }, children);
};

ListGroup.defaultProps = {
  className: null
};
ListGroup.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string
};
ListGroup.Item = _ListGroupItem.default;
var _default = ListGroup;
exports.default = _default;