import React,{ Component, PropTypes } from "react";

export class ScrollPosComponent extends React.Component {

    static propTypes = {
        children : PropTypes.func.isRequired
    }

    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
