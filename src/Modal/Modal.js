import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';
const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }
  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className={style.overlay}>
        <div className={style.modal}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
export default Modal;
