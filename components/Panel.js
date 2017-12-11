import React, { Component, Children, PropTypes } from "react";
import { InternalPanelComponent } from "./InternalPanel";
//import './App.css'

export class PanelComponent extends React.Component {


render() {
    return <div>
        <InternalPanelComponent />
        <footer>Panel.js</footer>
    </div>
}
}