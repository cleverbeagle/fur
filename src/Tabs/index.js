/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Tab from '../Tab';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    const { activeTab } = props;
    this.state = { activeTab: activeTab || 1 };
  }

  componentWillReceiveProps(nextProps) {
    const newActiveTab = _.get(nextProps, 'activeTab', null);
    const { activeTab } = this.state;

    if (newActiveTab && newActiveTab !== activeTab) {
      this.setState({ activeTab: newActiveTab });
    }
  }

  validateChildrenAreTabs = (children) =>
    children.forEach(({ type }) => {
      if (type.name !== 'Tab')
        throw Error('[Fur] Children of the <Tabs> component can only be <Tabs.Tab> components.');
    });

  handleSelectTab = (activeTab) => {
    const { onSelect } = this.props;
    this.setState({ activeTab }, () => {
      if (onSelect) onSelect(activeTab);
    });
  };

  render() {
    const { children } = this.props;
    const activeTab = this.props.activeTab || this.state.activeTab; // eslint-disable-line

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
            const tabActiveKey = props.tabId || tabIndex + 1;
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
              props.tabId === activeTab || tabIndex + 1 === activeTab ? props.children : null,
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
