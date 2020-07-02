import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';
import { node } from 'prop-types';
const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
    window.addEventListener('click', this.handleOverlayClickClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
    window.removeEventListener('click', this.handleOverlayClickClose);
  }
  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleOverlayClickClose = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className={style.overlay} onClick={this.handleOverlayClickClose}>
        <div className={style.modal}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
export default Modal;
