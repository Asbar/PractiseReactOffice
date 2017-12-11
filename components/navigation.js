import React, { Component } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

export class NavigationComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <Router>
                        <div>
                            <div className="navbar-header">
                                <Link className="navbar-brand" to="/">React Test Web Application</Link>
                            </div>
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/About">About Us</Link>
                                </li>
                                <li><Link to="/Contact">Contact Us</Link></li>
                                <li><a href="#">Page 3</a></li>
                            </ul>
                        </div>
                    </Router>
                </div>
            </nav>
            <div className="container">
            </div>
        </div>
    }
}