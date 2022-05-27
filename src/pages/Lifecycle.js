import  React from "react";

class Lifecycle extends React.Component{
    constructor(){
        super()
        this.state={
            dataNumber:0

        }
    }
    componentDidMount(){
        console.log('did mount');
document.title = 'you have clicked' + this.state.dataNumber
    }
    componentDidUpdate(first,second){
        if(second.dataNumber !== this.state.dataNumber){
            document.title = 'you have clicked' + second.dataNumber
            console.log('did update');
            console.log('first',first);
            console.log('second',second);
    
        }
   
    }

render(){
    return(
    <>
        <h1>{this.state.dataNumber}</h1>
        <button onClick={()=>this.setState({dataNumber:this.state.dataNumber+1})}>click here</button>
    </>
    )
}
}

export default Lifecycle;