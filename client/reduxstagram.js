import React from 'react';

import {render} from 'react-dom';

import css from './styles/style.styl';

import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//import react router deps
import {Router, Route, IndexRoute, browserhistory} from 'react-router';
import {Provider} from 'react-redux';
// store was the default name, while {history} with curly brackets is the 
// named export
// the "history" is now the syncHistoryWithStore
import store, {history} from './store';


const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Main}>
                <IndexRoute component={PhotoGrid}>
                    <Route path="/view/:postId" component={Single}>

                    </Route>
                </IndexRoute>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));
