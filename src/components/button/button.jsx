import React from 'react';
import s from './button.module.css'

const Button = (props) => {
  const handleClick = (evt) => {
    evt.preventDefault();
    props.handleResetFilters();
  }

  return (
    <button
      className={s.btn}
      onClick={handleClick}
      type={props.type}
    >
      {props.title }
    </button>
  );
};

export default Button;
