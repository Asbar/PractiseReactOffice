import React, { Component } from "react";

export class AddListItemComponent extends React.Component {

    constructor(props) {
        super();
        this.justSubmitted = this.justSubmitted.bind(this);
    }

    justSubmitted(event) {
        event.preventDefault();
        var input = event.target.querySelector('input');
        var value = input.value;
        input.value = '';
        this.props.updateList(value);

    }
    render() {
        return <form onSubmit={this.justSubmitted}>
            <input type="text" />
            <input type="button" value="Add a Task" />
        </form>
    }
}