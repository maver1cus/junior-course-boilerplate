import React from 'react';
import PropTypes from 'prop-types';
import s from './list.module.css';

const List = (props) => {
  return (
    <ul className={s.list}>
      {props.children}
    </ul>
  );
};

List.propTypes = {
  children: PropTypes.array
};

export default List;
