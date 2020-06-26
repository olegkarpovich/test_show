import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import episodesReducer from './reducers'
import thunk from 'redux-thunk';

const store = createStore(episodesReducer, applyMiddleware(thunk))

it('renders Loading', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText("Loading...")).toBeInTheDocument();
});


