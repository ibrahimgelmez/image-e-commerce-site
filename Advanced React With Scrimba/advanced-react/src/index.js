import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './Context';
import { Provider } from 'react-redux';
import {store} from "./redux/count"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ContextProvider>
      <App /> 
    </ContextProvider>
  </Provider>
  
);


