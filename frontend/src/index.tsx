import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/global.css';
import App from './App';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from './redux/slices/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>

);
