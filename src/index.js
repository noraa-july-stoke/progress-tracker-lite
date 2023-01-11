import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';

const store = configureStore();

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
