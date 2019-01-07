"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ListGroupItem = _interopRequireDefault(require("../ListGroupItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListGroup = function ListGroup(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "fur-list-group"
  }, children);
};

ListGroup.propTypes = {
  children: _propTypes.default.node.isRequired
};
ListGroup.Item = _ListGroupItem.default;
var _default = ListGroup;
exports.default = _default;