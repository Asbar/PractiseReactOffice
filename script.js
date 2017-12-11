import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom'
import { MainTodoComponent } from "./components/mainTodo";
import { AboutComponent } from "./components/About";
import { HomeUsComponent } from "./components/Home";
import { browserHistory } from 'react-router'

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createLooger from "redux-logger";
import promise from "redux-promise";
import thunk from "redux-thunk";

import allReducers from "./components/reducers";
import App from "./components/components/app";
const store = createStore(allReducers);

var items = ["Asbar", "Kasun", "Ishan"];
const routes = [
    {
        path: '/',
        exact: true,
        sidebar: HomeUsComponent,
        main: () => <h2>Home</h2>
    },
    {
        path: '/About',
        sidebar: AboutComponent,
        main: () => <h2>About</h2>
    }
]

ReactDOM.render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
        {/* <Router history={browserHistory} routes={routes} >
            <div>
                {
                    routes.map((route, index) => (
                        <Route key={index} path={route.path} exact={route.exact} component={route.sidebar} />
                    ))
                }
            </div>
        </Router>,
        <MainTodoComponent AllNames={items} /> */}
    </div>,
    document.getElementById('firstApp')
);