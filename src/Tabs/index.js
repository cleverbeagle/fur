/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    const { defaultActiveKey } = props;
    this.state = { activeTab: defaultActiveKey || 1 };
  }

  validateChildrenAreTabs = (children) =>
    children.forEach(({ type }) => {
      if (type.name !== 'Tab')
        throw Error('[Fur] Children of the <Tabs> component can only be <Tabs.Tab> components.');
    });

  handleSelectTab = (activeTab) => {
    console.log('activeTab', activeTab);
    this.setState({ activeTab });
  };

  render() {
    const { children } = this.props;
    const { activeTab } = this.state;

    this.validateChildrenAreTabs(children);

    const tabs = children.map((tab) => ({
      key: tab.key,
      ref: tab.ref,
      props: tab.props,
    }));

    return (
      <div className="fur-tabs">
        <ul className="clearfix">
          {tabs.map(({ key, ref, props }, tabIndex) => {
            const tabActiveKey = props.activeKey || tabIndex + 1;
            return (
              <Tab
                {...props}
                key={`${key}_${tabIndex}`}
                ref={ref}
                onClick={() => this.handleSelectTab(tabActiveKey)}
                isActive={activeTab === tabActiveKey}
              />
            );
          })}
        </ul>
        <div className="fur-tabs-content">
          {tabs.map(
            ({ props }, tabIndex) =>
              props.activeKey === activeTab || tabIndex + 1 === activeTab ? props.children : null,
          )}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
};

Tabs.Tab = Tab;

export default Tabs;
