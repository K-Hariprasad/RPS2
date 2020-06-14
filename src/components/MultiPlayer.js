import React from "react"

class MultiPlayer extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                <h1>Multi player page</h1>
                <br/>
                <h3>Welcome {this.props.user.toUpperCase()}</h3><br/>
                <h5>Under development</h5>
            </React.Fragment>
        )
    }
}

export default MultiPlayer