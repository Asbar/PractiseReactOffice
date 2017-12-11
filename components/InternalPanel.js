import React, { Component, Children } from "react";
import { ContentPanelComponent } from "./ContentPanel";

export class InternalPanelComponent extends React.Component {

    render(){
        return <div>
            <ContentPanelComponent/>
            <footer>Internal Panel js</footer>
        </div>
    }
}