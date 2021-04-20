import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListContainer from '../../containers/list-container';
import FilterContainer from '../../containers/filters-container';
import Title from '../title/title';
import logRender from '../log-render/log-render';
import store from '../../store';
import s from './app.module.css';
import PaginationContainer from '../../containers/pagination-container';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = store.getState();
  }

  render() {
    return (
      <div className={s.app}>
        <header className={s.header}>
          <Title />
        </header>
        <aside className={s.column}>
            <FilterContainer />
        </aside>
        <main className={s.content}>
          <ListContainer />
          <PaginationContainer />
        </main>
      </div>
    );
  }
}

App.propTypes = {
  products: PropTypes.array
};

App.defaultProps = {
  products: []
};

export default logRender(App);
