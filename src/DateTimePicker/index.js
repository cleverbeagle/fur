import React from 'react';
import PropTypes from 'prop-types';
import flatpickr from 'flatpickr';
import Input from '../Input';

class DateTimePicker extends React.Component {
  componentDidMount() {
    const { options } = this.props;
    this.flatpickr = flatpickr(this.dateTimePicker, options);
  }

  render() {
    const { options, ...rest } = this.props;
    return <Input {...rest} inputRef={dateTimePicker => (this.dateTimePicker = dateTimePicker)} />; // eslint-disable-line
  }
}

DateTimePicker.defaultProps = {
  options: {},
};

DateTimePicker.propTypes = {
  options: PropTypes.object, // eslint-disable-line
};

export default DateTimePicker;
