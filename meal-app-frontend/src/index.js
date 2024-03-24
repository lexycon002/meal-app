import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CartProvider } from './context/cart';
import { store } from "./redux/Store";
import { Provider } from "react-redux"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <CartProvider>
        <App />
    </CartProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
