import React from "react";

class Result extends React.Component{
    refresh=()=>{
        window.location.reload()
    }
    render(){
        return(
            <React.Fragment>
                
                <div id="result">
                    <div className="result text-center">
                    <p className="text-center result-greet">{this.props.greetings} {this.props.username}</p><br/>
                    <p className="text-center result-msg display-4">{this.props.msg}</p><br/>
                    <button className="text-center btn btn-primary" onClick={this.refresh}>Play again</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Result
