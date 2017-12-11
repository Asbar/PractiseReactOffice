import React, { Component, Children } from "react";
import { clearInterval, interval } from "timers";

export class SlideShowComponent extends React.Component {

    constructor(props) {
        super();
        this.state = {
            total: 0,
            current: 0,
        }
        this.showNext = () => {
            const { total, current } = this.state;
            this.setState({
                current: current + 1 == total ? 0 : current + 1
            });
        }
    }

    componentDidMount() {
        const { children } = this.props;
        this.setState({ total: Children.count(children) });
        this.interval = setInterval(this.showNext, 2300);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { children } = this.props;
        const Button = Children.map(this.props.children, child => (
            <button>
                {child}
            </button>
        ));
        return <div>
            <h1>{Children.count(this.props.children)}</h1>

            {Children.toArray(Button)[this.state.current]}
        </div>
    }
}