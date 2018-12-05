import React from 'react';
import PropTypes from 'prop-types';
import Field from '../Field';
import Label from '../Label';
import Input from '../Input';
import Select from '../Select';
import Textarea from '../Textarea';

class Form extends React.Component {
  state = {};

  render() {
    return <React.Fragment>{/* Code goes here */}</React.Fragment>;
  }
}

Form.propTypes = {
  // prop: PropTypes.string.isRequired,
};

Form.Field = Field;
Form.Label = Label;
Form.Input = Input;
Form.Select = Select;
Form.Textarea = Textarea;

export default Form;
