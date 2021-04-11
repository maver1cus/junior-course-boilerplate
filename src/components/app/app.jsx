import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListContainer from '../../containers/list-container';
import FilterContainer from '../../containers/filters-container';
import Title from '../title/title';
import logRender from '../log-render/log-render';
import AppContext from '../../app-context';
import reducer from '../../store/reducer';
import {changeCategory } from '../../store/actions';
import {getCategoriesFromUrl} from '../../utils';
import s from './app.module.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = reducer.getState();

    reducer.subscribe(() => {
      this.setState(reducer.getState());
    })
  }

  componentDidMount() {
    window.addEventListener('popstate', this.setCategoriesFromHistory);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.setCategoriesFromHistory);
  }

  setCategoriesFromHistory = () => {
    const categories = getCategoriesFromUrl() || this.state.categories

    reducer.dispatch(changeCategory(categories))
  }

  render() {
    return (
      <AppContext.Provider value={{
        state: this.state,
        dispatch: reducer.dispatch
      }}>
        <div className={s.app}>
          <header className={s.header}><Title /></header>
          <aside className={s.column}>
              <FilterContainer />
          </aside>
          <main>
            <ListContainer />
          </main>
        </div>
      </AppContext.Provider>
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
