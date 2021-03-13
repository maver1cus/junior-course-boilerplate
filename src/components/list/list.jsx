import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
  return (
    <ul className="products-card__list">
      {props.children}
    </ul>
  );
};

List.propTypes = {
  children: PropTypes.element
};

export default List;
