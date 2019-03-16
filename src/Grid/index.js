import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const mapGlobalPropsToChildren = ({ children, ...rest }) =>
  React.Children.map(children, (child) => (child ? React.cloneElement(child, { ...rest }) : null));

const Container = (props) => (
  <div className="fur-grid-container">{mapGlobalPropsToChildren(props)}</div>
);

const Row = (props) => <div className="fur-grid-row">{mapGlobalPropsToChildren(props)}</div>;

const Col = ({
  auto,
  col,
  sm,
  md,
  lg,
  xl,
  smOffset,
  mdOffset,
  lgOffset,
  xlOffset,
  order,
  smOrder,
  mdOrder,
  lgOrder,
  xlOrder,
  ...rest
}) => (
  <div
    className={classNames('fur-grid-col', {
      [`fur-grid-col-auto`]: !!auto,
      [`fur-grid-col-${col}`]: !!col,
      [`fur-grid-col-sm-${sm}`]: !!sm,
      [`fur-grid-col-md-${md}`]: !!md,
      [`fur-grid-col-lg-${lg}`]: !!lg,
      [`fur-grid-col-xl-${xl}`]: !!xl,
      [`fur-grid-offset-sm-${smOffset}`]: !!smOffset,
      [`fur-grid-offset-md-${mdOffset}`]: !!mdOffset,
      [`fur-grid-offset-lg-${lgOffset}`]: !!lgOffset,
      [`fur-grid-offset-xl-${xlOffset}`]: !!xlOffset,
      [`fur-grid-order-${order}`]: !!order,
      [`fur-grid-order-sm-${smOrder}`]: !!smOrder,
      [`fur-grid-order-md-${mdOrder}`]: !!mdOrder,
      [`fur-grid-order-log-${lgOrder}`]: !!lgOrder,
      [`fur-grid-order-xl-${xlOrder}`]: !!xlOrder,
    })}
  >
    {mapGlobalPropsToChildren({ ...rest })}
  </div>
);

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
  auto: PropTypes.bool,
  col: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xlOffset: PropTypes.number,
  order: PropTypes.number,
  smOrder: PropTypes.number,
  mdOrder: PropTypes.number,
  lgOrder: PropTypes.number,
  xlOrder: PropTypes.number,
};

export default {
  Container,
  Row,
  Col,
};
