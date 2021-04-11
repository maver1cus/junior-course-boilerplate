import React from 'react';
import s from './button.module.css'

const Button = (props) => {
  return (
    <button
      className={s.btn}
      onClick={props.handleResetFilter}
      type={props.type}
    >
      {props.title }
    </button>
  );
};

export default Button;
