import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ModalHeader from '../ModalHeader';
import ModalTitle from '../ModalTitle';
import ModalBody from '../ModalBody';
import ModalFooter from '../ModalFooter';

class Modal extends React.Component {
  componentDidUpdate() {
    const { open } = this.props;

    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  handleClose = (event) => {
    const { onClose } = this.props;
    event.preventDefault();
    document.body.style.overflow = 'auto';
    if (onClose) onClose(event);
  };

  render() {
    const { open, size, className, children, hideByClickOnMask, maskOpacity } = this.props;
    return (
      <div
        className={classNames(className, 'fur-modal', {
          [`fur-modal-size-${size}`]: size,
          'fur-modal-open': open,
        })}
      >
        <div className="fur-modal-content">{children}</div>
        <div
          tabIndex={0}
          role="button"
          className="fur-modal-mask"
          style={{ background: `rgba(135, 151, 178, ${maskOpacity})` }}
          onClick={hideByClickOnMask ? this.handleClose : () => {}}
          onKeyUp={hideByClickOnMask ? this.handleClose : () => {}}
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
  hideByClickOnMask: false,
  maskOpacity: 0.75,
};

Modal.propTypes = {
  open: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  hideByClickOnMask: PropTypes.func,
  maskOpacity: PropTypes.number,
};

export default Modal;
