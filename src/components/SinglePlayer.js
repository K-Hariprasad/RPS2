import React from "react";
import "../App.css";
import Result from "./Result.js"

class SinglePlayer extends React.Component {
    constructor(){
        super();
        this.state={uWin:false,cWin:false,userScore:0,comScore:0,message:"Let's start...",userIcon:"fa fa-handshake-o",comIcon:"fa fa-handshake-o",show:false}
    }

   
    game=(user)=>{
        var com = Math.floor(Math.random() * 3) + 1;
        var icon={1:"far fa-hand-rock",2:"far fa-hand-paper",3:"far fa-hand-scissors"}
        console.log(com,user)
        this.setState({userIcon:icon[user],comIcon:icon[com]})

        if(com===user){
          this.setState({message:"It's a draw...!"})
        }
        else if( (user===1&&com===3) || (user===2 && com===1) || (user===3&&com===2) ){        
          this.setState({userScore:this.state.userScore+1,message:"You got it...!"})
          if(this.state.userScore===4){
            this.setState({uWin:true})           
          }
        }
        else {
          
          this.setState({comScore:this.state.comScore+1,message:"Ohh sorry...!"})
          if(this.state.comScore===4){
            this.setState({cWin:true})
          }
        }
    }
  render() {
    if(this.state.uWin){
      return <Result username={this.props.user.toUpperCase()} greetings="Congartulations" msg="You won the game..!"></Result>        
    }
    else if(this.state.cWin){
      return <Result username={this.props.user.toUpperCase()} greetings="Sorry" msg="You lose the game..!"></Result>
    }
    else{
      return(
        <React.Fragment>
        <section id="single-game">
          <div className="text-center text-light heading col-md-4 offset-md-4">
            <h4>ROCK PAPER SCISSORS</h4>
          </div>
          <div id="score" className="text-center">
            <span className="score-title">{this.props.user.toUpperCase()}</span>
            &nbsp;&nbsp;
            <span id="score-card">{this.state.userScore} - {this.state.comScore}</span>&nbsp;&nbsp;
            <span className="score-title">COM</span>
          </div><br/>
          <div id="screen" className="container">
            <div className="col-md-4 offset-md-4 text-center screen">
               <div className="row">
               <div className="col-sm-6 user-screen"><i className={this.state.userIcon}></i></div>
                <div className="col-sm-6"><i className={this.state.comIcon}></i></div>
               </div>
            </div>
          </div><br/>
          <div id="keys" className="text-center container">
          <div className="col-md-4 offset-md-4 text-center keys">
          <button className="btn bt"  onClick={()=>{this.game(1)}}><i className="far fa-hand-rock"></i></button>
              <button className="btn bt"  onClick={()=>{this.game(2)}}><i className="far fa-hand-paper"></i></button>
              <button className="btn bt"  onClick={()=>{this.game(3)}}><i className="far fa-hand-scissors"></i></button>
          </div>     
          </div><br/>
          <div id="msg" className="text-center text-light container">
            <div className="col-md-4 offset-md-4 text-center msg">
            {this.state.message}
            </div>
          </div><br/>
          
        </section>
      </React.Fragment>
      )    
      };
    
  }
}

export default SinglePlayer;
