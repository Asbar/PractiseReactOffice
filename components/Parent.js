import React, { Component, Children } from "react";

export class ParentComponent extends React.Component {

    render() {
        const buttons = Children.map(this.props.children, child => (
            <button>
                <p>Awesome Cats</p>
                {child}
            </button>
        ));
        return <div>
            Total Children : {Children.count(this.props.children)}
            {buttons}
        </div>
    }
}
