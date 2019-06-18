import React from 'react';
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

  componentDidMount() {
    // TODO: Toggle this.state.open if click outside datepicker or input.
    // TODO: Set an active state on the input if this.state.open.
  }

  render() {
    const { mode, onDatesChange, onOutsideClick, ...rest } = this.props;
    const { open } = this.state;

    return (
      <React.Fragment>
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
              onOutsideClick={() => {
                console.log('outside click');
                this.setState({ open: false }, () => (onOutsideClick ? onOutsideClick() : null));
              }}
              hideKeyboardShortcutsPanel
            />
          )}
        {mode &&
          mode === 'single' &&
          open && <DayPickerSingleDateController {...rest} hideKeyboardShortcutsPanel />}
      </React.Fragment>
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
