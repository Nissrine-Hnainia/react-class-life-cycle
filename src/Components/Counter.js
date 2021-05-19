import React, { PureComponent } from 'react'

export default class Counter extends PureComponent {
    constructor(props) {
        console.log("constructor()")
        super(props);
        this.state ={
            count: 0
        }
    }

    increment = () => {
        this.setState({count: this.state.count+1})
    }

    decrement = () => {
        this.setState({count: this.state.count > 0 ? this.state.count-1 : this.state.count})
    }

    componentDidMount() {
        console.log("component did mount ()")
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextState.count !== this.state.count) {
    //         return true
    //     } return false
    // }

    componentDidUpdate() {
        console.log("component did update")
    }

    componentWillUnmount() {
        console.log("component will unmount")
    }

    render() {
        console.log("render()")
        return (
            <div style={{marginBottom:"30px", marginTop:"30px"}}>
                <button className="btn" onClick={this.decrement}>-</button>
                <span style={{margin:"0 10px"}}>{this.state.count}</span>
                <button className="btn" onClick={this.increment}>+</button>
            </div>
        )
    }
}
