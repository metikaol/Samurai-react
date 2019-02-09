import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

const MyApp = () => (
    <Provider store={store}>
      <App />
    </Provider>
  )

ReactDOM.render(<MyApp />, document.getElementById('root'));
