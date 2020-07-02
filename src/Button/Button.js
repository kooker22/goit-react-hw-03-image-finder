import React from 'react';
import style from './Button.module.css';
const Button = ({ onClick, onScroll }) => (
  <button
    type="button"
    className={style.button}
    onClick={onClick}
    onScroll={onScroll}
  >
    {' '}
    Load more
  </button>
);
export default Button;
