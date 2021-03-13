import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ isFilled }) => (<div className={`star ${isFilled ? 'is-filled' : ''}`}/>);

Rating.propTypes = {
  isFilled: PropTypes.bool
};

export default Rating;
