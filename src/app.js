import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpense} from './actions/expenses';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/style.scss';
import {firebase} from './firebase/firebase';
import {login, logout} from './actions/auth';
import WebFont from 'webfontloader';
import LoadingPage from './components/LoadingPage';

//Font-awesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGoogle, faFacebookF, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faPlus, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faGoogle, faFacebookF, faGithub, faTwitter, faPlus, faSave, faTrash);

//Webfont loader 
WebFont.load({
    google: {
      families: ['Mukta:400,700', 'Cabin']
    }
  });

const store = configureStore();

const jsx = (
    <Provider store={store} >
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    } else {
        hasRendered = false;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged( (user) => {
    if(user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpense()).then(() => {
            renderApp();
            console.log('Log in');
            if(history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    }else {
        store.dispatch(logout());
        renderApp();
        console.log('Log out');
        history.push('/');
    }
});

