import React from "react";

class WillMount extends React.Component{
    constructor(){
        super()
this.state={
    valueX:0,
    valueY:0,
    count:0
}

    }
    mouseOver=(e)=>{
        this.setState({valueX:e.clientX,valueY:e.clientY})
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({count:this.state.count+1})
        },1000);
        window.addEventListener('mouseover',this.mouseOver)
    }
    componentWillUnmount(){
        clearInterval(this.state.count)
        window.removeEventListener('mouseover',this.mouseOver)
    }


    render(){
        return(
            <div>
            <h2>{this.state.count}</h2>
<h2>My X -{this.state.valueX}</h2>
<h2>My Y - {this.state.valueY}</h2>
            </div>
        )
    }

}

export default WillMount;