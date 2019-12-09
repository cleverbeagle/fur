"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Navigation = _interopRequireDefault(require("../Navigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('NavigationItems', module).add('Inactive', function () {
  return _react.default.createElement(_Navigation.default.Items, null, _react.default.createElement(_Navigation.default.Item, {
    theme: "primary",
    label: "Products",
    onClick: function onClick() {
      return alert('/documents');
    }
  }), _react.default.createElement(_Navigation.default.Item, {
    theme: "success",
    label: "Products",
    onClick: function onClick() {
      return alert('/documents');
    }
  }), _react.default.createElement(_Navigation.default.Item, {
    theme: "warning",
    label: "Products",
    onClick: function onClick() {
      return alert('/documents');
    }
  }), _react.default.createElement(_Navigation.default.Item, {
    theme: "danger",
    label: "Products",
    onClick: function onClick() {
      return alert('/documents');
    }
  }), _react.default.createElement(_Navigation.default.Item, {
    label: "Team"
  }));
}).add('Active', function () {
  return _react.default.createElement(_Navigation.default.Items, null, _react.default.createElement(_Navigation.default.Item, {
    active: true,
    theme: "primary",
    label: "Products",
    onClick: function onClick() {
      return alert('/documents');
    }
  }), _react.default.createElement(_Navigation.default.Item, {
    active: true,
    theme: "success",
    label: "Products",
    onClick: function onClick() {
      return alert('/documents');
    }
  }), _react.default.createElement(_Navigation.default.Item, {
    active: true,
    theme: "warning",
    label: "Products",
    onClick: function onClick() {
      return alert('/documents');
    }
  }), _react.default.createElement(_Navigation.default.Item, {
    active: true,
    theme: "danger",
    label: "Products",
    onClick: function onClick() {
      return alert('/documents');
    }
  }), _react.default.createElement(_Navigation.default.Item, {
    active: true,
    label: "Team"
  }));
});