import React from "react";

class Result extends React.Component{
    render(){
        return(
            <React.Fragment>
                
                <div id="result">
                    <p className="text-center">{this.props.greetings} {this.props.username}</p><br/>
                    <p className="text-center">{this.props.msg}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default Result
