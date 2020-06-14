import React from "react";

class Result extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1>Result page</h1>
                <br/>
                <h3>Welcome {this.props.username}</h3>
                <h1>{this.props.greetings}</h1>
            </React.Fragment>
        )
    }
}

export default Result
