import {render} from 'react-dom';
import React from 'react';
import 'babel-polyfill';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import configureStore from "./store/configureStore";
import {loadCourses} from './actions/courseAction';
import {loadAuthors} from './actions/authorAction';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(<
    Provider store={store}>
    <Router routes={routes}
            history={browserHistory}/>
  </Provider>,
  document.getElementById('app')
);
