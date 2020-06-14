import React from "react";
import SinglePlayer from "./SinglePlayer";
import MultiPlayer from "./MultiPlayer";

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      land: true,
      single: false,
      multi: false,
      userName: "",
      formValid:false,
      errorMsg:""
    };
  }
  single = () => {
    this.setState({ land: false, single: true });
  };
  multi = () => {
    this.setState({ land: false, multi: true });
  };
  getUser = (event) => {
    this.setState({ userName: event.target.value });
    if(event.target.value.length<4){
        this.setState({errorMsg:"Please enter atleast 4 characters",formValid:false})
    }
    else{
        this.setState({errorMsg:"",formValid:true})
    }
  };

  render() {
    if (this.state.land) {
      return (
        <React.Fragment>
          <div className="App">
            <header className="App-header">
              <div>
                <h5>WELCOME TO</h5>
                <h4>ROCK PAPER SCISSORS</h4> <br />
                <form>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter your name"
                      name="user"
                      onChange={this.getUser}
                    ></input>
                  </div>
                  <div className="form-group">
                    <button
                      onClick={this.single}
                      className="btn btn-danger form-control" disabled={!this.state.formValid}
                    >
                      with Computer
                    </button>
                  </div>
                  <div className="form-group">
                    <button
                      onClick={this.multi}
                      className="btn btn-primary form-control" disabled={!this.state.formValid}
                    >
                      with Friends
                    </button>
                  </div>
                </form>
                <div id="errorMsg" className="text-danger">{this.state.errorMsg}</div>

              </div>
            </header>
          </div>
        </React.Fragment>
      );
    } else if (this.state.single) {
      return <SinglePlayer user={this.state.userName}></SinglePlayer>;
    } else {
      return <MultiPlayer user={this.state.userName}></MultiPlayer>;
    }
  }
}
export default Landing;
