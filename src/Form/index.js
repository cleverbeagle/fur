import React from 'react';
import PropTypes from 'prop-types';
import Field from '../Field';
import Label from '../Label';
import Input from '../Input';
import InputWrap from '../InputWrap';
import InputCap from '../InputCap';
import Select from '../Select';
import Textarea from '../Textarea';

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
Form.Label = Label;
Form.Input = Input;
Form.InputWrap = InputWrap;
Form.InputCap = InputCap;
Form.Select = Select;
Form.Textarea = Textarea;

export default Form;
