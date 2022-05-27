import React from "react";
import WillMount from "./WillMount";
import HooksUseEffects from "./HooksUseEffects";

class Toggle extends React.Component{
    constructor(){
        super()
        this.state={
            dispay:true
        }
    }

    render(){
        return(
            <div>
              <button onClick={()=>this.setState({dispay:!this.state.dispay})}> Toggle Button</button>  
              {this.state.dispay && <HooksUseEffects/>}
            </div>
        )
    }
}

export default Toggle;