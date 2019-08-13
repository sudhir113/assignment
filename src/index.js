import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './componets/welcome';
import ProductPage from './componets/pages/productPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
// import * as bst from 'bootstrap/dist/css/bootstrap-theme.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/my-store" component={ProductPage} />
        </Switch>
    </Router>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
