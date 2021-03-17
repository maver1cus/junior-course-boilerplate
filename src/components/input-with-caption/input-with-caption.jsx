import React from 'react';
import PropTypes from 'prop-types';
import s from '../filter/filter.module.css';

const InputWithCaption = (props) => {
  const label = (props.caption)
    ? <label className={s.label} htmlFor={props.id}>{props.caption}</label>
    : '';

  return (
    <>
      {label}
      <input className={s.input} type={props.type} defaultValue={props.value} id={props.id} ref={props.reference}/>
    </>
  );
}

InputWithCaption.propTypes = {
  id: PropTypes.string.isRequired,
  caption: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object })
  ])
};

export default InputWithCaption;
