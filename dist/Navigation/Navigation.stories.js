"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _Grid = _interopRequireDefault(require("../Grid"));

var _Brand = _interopRequireDefault(require("../Brand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Navigation', module).add('Horizontal w/ Container', function () {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_.default, {
    orientation: "horizontal"
  }, _react.default.createElement(_Grid.default.Container, null, _react.default.createElement(_Brand.default, null, "Hound"), _react.default.createElement(_.default.Toggle, null), _react.default.createElement(_.default.Items, null, _react.default.createElement(_.default.Item, {
    label: "Dashboard",
    onClick: function onClick() {
      return alert('/documents');
    }
  }), _react.default.createElement(_.default.Item, {
    label: "Products",
    onClick: function onClick() {
      return alert('/documents');
    }
  }), _react.default.createElement(_.default.Item, {
    label: "Appointments"
  }), _react.default.createElement(_.default.Item, {
    label: "Admin",
    downArrow: true
  }, _react.default.createElement(_.default.Items, null, _react.default.createElement(_.default.Item, {
    label: "Products",
    onClick: function onClick() {
      return alert('/documents');
    }
  }), _react.default.createElement(_.default.Item, {
    label: "Team"
  }))), _react.default.createElement(_.default.User, {
    avatar: "http://fillmurray.com/150/150",
    name: "Ren\xE9 Redzepi"
  }, _react.default.createElement(_.default.Items, null, _react.default.createElement(_.default.Item, {
    label: "Profile",
    onClick: function onClick() {
      return alert('/documents');
    }
  }), _react.default.createElement(_.default.Item, {
    label: "Billing & Subscription"
  }), _react.default.createElement(_.default.Item, {
    label: "Contact Support"
  }), _react.default.createElement(_.default.Item, {
    divider: true
  }), _react.default.createElement(_.default.Item, {
    label: "Logout",
    onClick: function onClick() {
      return alert('/profile');
    }
  })))))));
}).add('Horizontal Fluid', function () {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_.default, {
    orientation: "horizontal",
    fluid: true
  }, _react.default.createElement(_Brand.default, null, "Hound"), _react.default.createElement(_.default.Toggle, null), _react.default.createElement(_.default.Items, null, _react.default.createElement(_.default.Item, {
    label: "Dashboard",
    onClick: function onClick() {
      return alert('/documents');
    }
  }), _react.default.createElement(_.default.Item, {
    label: "Products",
    onClick: function onClick() {
      return alert('/documents');
    }
  }), _react.default.createElement(_.default.Item, {
    label: "Appointments"
  }), _react.default.createElement(_.default.Item, {
    label: "Admin",
    downArrow: true
  }, _react.default.createElement(_.default.Items, null, _react.default.createElement(_.default.Item, {
    label: "Products",
    onClick: function onClick() {
      return alert('/documents');
    }
  }), _react.default.createElement(_.default.Item, {
    label: "Team"
  }))), _react.default.createElement(_.default.User, {
    avatar: "http://fillmurray.com/150/150",
    name: "Ren\xE9 Redzepi"
  }, _react.default.createElement(_.default.Items, null, _react.default.createElement(_.default.Item, {
    label: "Profile",
    onClick: function onClick() {
      return alert('/documents');
    }
  }), _react.default.createElement(_.default.Item, {
    label: "Billing & Subscription"
  }), _react.default.createElement(_.default.Item, {
    label: "Contact Support"
  }), _react.default.createElement(_.default.Item, {
    divider: true
  }), _react.default.createElement(_.default.Item, {
    label: "Logout",
    onClick: function onClick() {
      return alert('/profile');
    }
  }))))));
});