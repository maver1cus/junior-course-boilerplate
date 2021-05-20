import React from 'react';
import s from './title.module.css';

const Title = (props) => {
  return <h1 className={s.title}>{props.children}</h1>;
}

export default Title;
