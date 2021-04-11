import React from 'react';
import reducer from './store/reducer';

const AppContext = React.createContext({
  state: reducer.getState(),
  dispatch: reducer.dispatch
});

export default AppContext;
