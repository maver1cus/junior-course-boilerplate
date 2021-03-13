import React from 'react';

const List = (props) => {
  return (
    <ul className="products-card__list">
      {props.children}
    </ul>
  );
};

export default List;
