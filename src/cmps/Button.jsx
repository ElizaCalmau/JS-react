import React from "react";

export class Button extends React.Component {
    constructor(props){
        super(props)
        this.state = { count : 1}
        console.log('constructor')
    }
    componentDidMount(){
        console.log('mount')
    }
    componentDidUpdate(...rest){
        console.log(rest)
    }
    onClick = () => {
        const count = this.state.count + 1;
        this.setState({ count })
    }
    render(){
        console.log('render')
        console.log(this.state)
        return(
            <button onClick={this.onClick}>
              click
            </button>
        )
    }
}