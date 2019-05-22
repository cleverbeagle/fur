import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ModalHeader from '../ModalHeader';
import ModalTitle from '../ModalTitle';
import ModalBody from '../ModalBody';
import ModalFooter from '../ModalFooter';

class Modal extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { open } = nextProps;

    // NOTE: If modal is not currently open but will be, set overflow hidden
    // on body to disable scroling.
    if (!this.props.open && open) {
      document.body.style.overflow = 'hidden'; // eslint-disable-line
      this.modal.scrollTo(0, 0);
    }

    if (this.props.open && !open) document.body.style.overflow = 'auto'; // eslint-disable-line
  }

  handleClose = (event) => {
    document.body.style.overflow = 'auto';
    const { onClose } = this.props;
    event.preventDefault();
    if (onClose) onClose(event);
  };

  render() {
    const { open, size, className, children, maskOpacity } = this.props;
    return (
      <div
        ref={(modal) => (this.modal = modal)}
        className={classNames(className, 'fur-modal', {
          [`fur-modal-size-${size}`]: size,
          'fur-modal-open': open,
        })}
      >
        <div className="fur-modal-close-icon" />
        <div className="fur-modal-content">{children}</div>
        <div
          tabIndex={0}
          role="button"
          className="fur-modal-mask"
          style={{ background: `rgba(135, 151, 178, ${maskOpacity})` }}
          onClick={this.handleClose}
          onKeyUp={this.handleClose}
        />
      </div>
    );
  }
}

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

Modal.defaultProps = {
  open: false,
  size: '',
  className: '',
  maskOpacity: 0.75,
  children: null,
};

Modal.propTypes = {
  open: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  maskOpacity: PropTypes.number,
};

export default Modal;
