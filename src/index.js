import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/style.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from "./redux/store/store";
import { getAnimals } from './redux/actions';

const store = configureStore();

store.dispatch(getAnimals());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    
document.getElementById('root'));
