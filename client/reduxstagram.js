import React from 'react';

import {render} from 'react-dom';

import css from './styles/style.styl';

// import Main from './components/Main';
//now that we have the redux connector we are going to wrap Main in the App
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//import react router deps
import {Router, Route, IndexRoute, browserhistory} from 'react-router';
import {Provider} from 'react-redux';
// store was the default name, while {history} with curly brackets is the 
// named export
// the "history" is now the syncHistoryWithStore
import store, {history} from './store';

import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

Raven.config(sentry_url, {
    tags: {
        git_commit: 'asdfas23423',
        user_level: 'editor'
    }
}).install();

// logException(new Error('download failed'), {
//    email: 'asklein@gmail.com' 
// });

// Raven.captureMessage('something bad happened!');
// Raven.showReportDialog();
//
// console.log(window.user.doesNotExist.different);

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}>
                </IndexRoute>
                <Route path="/view/:postId" component={Single}>

                </Route>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));
