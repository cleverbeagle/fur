/* eslint-disable react/no-find-dom-node */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import { DayPickerRangeController, DayPickerSingleDateController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import Input from '../Input';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      open: false,
    };
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentDidMount() {
    // TODO: Toggle this.state.open if click outside datepicker or input.
    // TODO: Set an active state on the input if this.state.open.
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick = (event) => {
    const input = this.datePicker.querySelector('.fur-form-input');
    const calendar = this.datePicker.querySelector('.DayPicker');

    if (!input.contains(event.target) && !calendar.contains(event.target)) {
      this.setState({ open: false });
    }
  };

  render() {
    const { mode, onDatesChange, ...rest } = this.props;
    const { open } = this.state;

    return (
      <div
        className="fur-form-input-datepicker"
        ref={(datePicker) => {
          this.datePicker = datePicker;
        }}
      >
        <Input
          className={open && 'fur-form-input-focused'}
          onFocus={() => this.setState({ open: true })}
        />
        {mode &&
          mode === 'range' &&
          open && (
            <DayPickerRangeController
              {...rest}
              onDatesChange={(dates) =>
                // NOTE: Do this to avoid breaking API while managing state internally.
                this.setState(
                  { ...dates, open: false },
                  () => (onDatesChange ? onDatesChange(dates) : null),
                )
              }
              weekDayFormat="ddd"
              navPrev={
                <svg version="1.1" viewBox="0 0 17 17">
                  <g />
                  <path d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z" />
                </svg>
              }
              navNext={
                <svg version="1.1" viewBox="0 0 17 17">
                  <g />
                  <path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z" />
                </svg>
              }
              transitionDuration={0}
              hideKeyboardShortcutsPanel
            />
          )}
        {mode &&
          mode === 'single' &&
          open && (
            <DayPickerSingleDateController
              {...rest}
              onDatesChange={(dates) =>
                // NOTE: Do this to avoid breaking API while managing state internally.
                this.setState(
                  { ...dates, open: false },
                  () => (onDatesChange ? onDatesChange(dates) : null),
                )
              }
              weekDayFormat="ddd"
              navPrev={
                <svg version="1.1" viewBox="0 0 17 17">
                  <g />
                  <path d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z" />
                </svg>
              }
              navNext={
                <svg version="1.1" viewBox="0 0 17 17">
                  <g />
                  <path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z" />
                </svg>
              }
              transitionDuration={0}
              hideKeyboardShortcutsPanel
            />
          )}
      </div>
    );
  }
}

DatePicker.defaultProps = {
  mode: 'single',
};

DatePicker.propTypes = {
  mode: PropTypes.string,
  onDatesChange: PropTypes.func.isRequired,
};

export default DatePicker;
