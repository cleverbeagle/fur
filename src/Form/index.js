import React from 'react';
import PropTypes from 'prop-types';
import Field from '../Field';
import Control from '../Control';
import Label from '../Label';
import Input from '../Input';
import InputWrap from '../InputWrap';
import InputCap from '../InputCap';
import Select from '../Select';
import Textarea from '../Textarea';
import Checkbox from '../Checkbox';
import DatePicker from '../DatePicker';
import Legend from '../Legend';

class Form extends React.Component {
  state = {};

  render() {
    const { children, ...rest } = this.props;
    return <form {...rest}>{children}</form>;
  }
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
};

Form.Field = Field;
Form.Control = Control;
Form.Label = Label;
Form.Input = Input;
Form.InputWrap = InputWrap;
Form.InputCap = InputCap;
Form.Select = Select;
Form.Textarea = Textarea;
Form.Checkbox = Checkbox;
Form.DatePicker = DatePicker;
Form.Legend = Legend;

export default Form;
