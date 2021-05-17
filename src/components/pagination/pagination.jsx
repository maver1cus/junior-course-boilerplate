import React from 'react';
import s from './pagination.module.css'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {get} from '../../utils';

const Pagination = (props) => {
  const {countPages, currentPage, changePaginationActive} = props;

  const handleClick = function(value) {
    if (value < 1 || value > countPages) {
      return false;
    }

    get('page', value)

    changePaginationActive(value);
  }
  const listNumberPages = [...Array(countPages).keys()].map(item => item + 1);

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
        listNumberPages.map((numberPage) => {
          const active = numberPage === currentPage ? 'active' : '';
          return (
            <li key={numberPage}>
              <button
                type="button"
                className={classnames(s.btn, s[active])}
                onClick={() => handleClick(numberPage)}
              >
                {numberPage}
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
