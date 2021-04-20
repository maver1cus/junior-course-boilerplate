import React from 'react';
import s from './pagination.module.css'
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Pagination = (props) => {
  const {countPages, currentPage, changePaginationActive} = props;

  const handleClick = (value) => {
    if (value < 1 || value > countPages) {
      return false;
    }

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('page', value);

    window.history.pushState(
      {...window.history.state, paginationActive: value},
      'page',
      '?' + searchParams.toString());

    changePaginationActive(value);
  }

  return (
    <ul className={s.pagination}>
      <li>
        <button
          type="button"
          disabled={currentPage === 1}
          className={classnames(s.btn, s.btn__prev)}
          onClick={() => handleClick(currentPage - 1)}
        >
          Назад
        </button>
      </li>
      {
        [...Array(countPages).keys()].map((item) => {
          const active = item + 1 === currentPage ? 'active' : '';
          return (
            <li key={item + 1}>
              <button
                type="button"
                className={classnames(s.btn, s[active])}
                onClick={() => handleClick(item + 1)}
              >
                {item + 1}
              </button>
            </li>
          )
        })
      }
      <li>
        <button
          type="button"
          disabled={currentPage === countPages}
          className={classnames(s.btn, s.btn__prev)}
          onClick={() => handleClick(currentPage + 1)}
        >
          Вперед
        </button>
      </li>
    </ul>
  )
}

Pagination.propTypes = {
  countPages: PropTypes.number,
  currentPage: PropTypes.number,
  changePaginationActive: PropTypes.func
};

export default Pagination;
