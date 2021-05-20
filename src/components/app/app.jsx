import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListContainer from '../../containers/list-container';
import FilterContainer from '../../containers/filters-container';
import PaginationContainer from '../../containers/pagination-container';
import Title from '../title/title';
import logRender from '../log-render/log-render';
import {store} from '../../store/';
import {BrowserRouter, Route} from 'react-router-dom';
import ProductContainer from '../../containers/product-container';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = store.getState();
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route path="/product/:id">
            <ProductContainer />
          </Route>
          <Route exact path="/">
              <header className="header">
                <Title>Список товаров</Title>
              </header>
              <aside className="column">
                <FilterContainer />
              </aside>
              <main className="content">
                <ListContainer />
                <PaginationContainer />
              </main>
          </Route>
        </BrowserRouter>
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
