import React, { Component } from "react";

export class AllListItemComponent extends React.Component {

    constructor(props) {
        super();
        this.remove = this.remove.bind(this);
    }

    remove(event) {
        var value = event.target.parentNode.querySelector('span').innerText;
        this.props.removeItem(value);
    }

    render() {
        const arrays = this.props.Names.map((Name, i) => {
            return (
                <li key={i}><span>{Name}</span><button onClick={this.remove} >X</button></li>
            );
        }, this);
        return <div>
            <ul>
                {arrays}
            </ul>
        </div>
    }
}