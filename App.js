import React from 'react';
import App1 from './App1';
import { Provider } from 'react-redux';
import store from './pages/Store'


export default function App() {


  return (
    <Provider store={store}>
      <App1 />
    </Provider>
  );
}
