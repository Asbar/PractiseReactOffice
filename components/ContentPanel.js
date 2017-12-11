import React, { Component, Children } from "react";

export class ContentPanelComponent extends React.Component {

    render() {
        return <div className="contentPanel">
            <h1>Heading Text</h1>
            <p>
                This content is inside the third panel, and it also inside in the internal panel
            </p>
            <button>I'm a Button</button>
            <footer>Content Panel js</footer>
        </div>
    }
}