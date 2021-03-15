import React from 'react';
import PropTypes from 'prop-types';
import s from './raiting.module.css';

const Rating = ({ isFilled }) => (<div className={`${s.star} ${isFilled ? s.fill : ''}`}/>);

Rating.propTypes = {
  isFilled: PropTypes.bool
};

export default Rating;
