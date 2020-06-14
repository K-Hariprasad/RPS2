(this["webpackJsonprock-paper-scissors"]=this["webpackJsonprock-paper-scissors"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(7),c=a.n(s),l=(a(13),a(6),a(1)),o=a(2),m=a(4),i=a(3),u=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"result"},n.a.createElement("p",{className:"text-center"},this.props.greetings," ",this.props.username),n.a.createElement("br",null),n.a.createElement("p",{className:"text-center"},this.props.msg)))}}]),a}(n.a.Component),d=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).game=function(t){var a=Math.floor(3*Math.random())+1,r={1:"far fa-hand-rock",2:"far fa-hand-paper",3:"far fa-hand-scissors"};console.log(a,t),e.setState({userIcon:r[t],comIcon:r[a]}),a===t?e.setState({message:"It's a draw...!"}):1===t&&3===a||2===t&&1===a||3===t&&2===a?(e.setState({userScore:e.state.userScore+1,message:"You got it...!"}),19===e.state.userScore&&e.setState({uWin:!0})):(e.setState({comScore:e.state.comScore+1,message:"Ohh sorry...!"}),19===e.state.comScore&&e.setState({cWin:!0}))},e.state={uWin:!1,cWin:!1,userScore:0,comScore:0,message:"Let's start...",userIcon:"fa fa-handshake-o",comIcon:"fa fa-handshake-o",show:!1},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return this.state.uWin?n.a.createElement(u,{username:this.props.user.toUpperCase(),greetings:"Congartulations",msg:"You won the game..!"}):this.state.cWin?n.a.createElement(u,{username:this.props.user.toUpperCase(),greetings:"Ohh Sorry",msg:"You lose the game..!"}):n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{id:"single-game"},n.a.createElement("div",{className:"text-center text-light heading col-md-4 offset-md-4"},n.a.createElement("h4",null,"ROCK PAPER SCISSORS")),n.a.createElement("div",{id:"score",className:"text-center"},n.a.createElement("span",{className:"score-title"},this.props.user.toUpperCase()),"\xa0\xa0",n.a.createElement("span",{id:"score-card"},this.state.userScore," - ",this.state.comScore),"\xa0\xa0",n.a.createElement("span",{className:"score-title"},"COM")),n.a.createElement("br",null),n.a.createElement("div",{id:"screen",className:"container"},n.a.createElement("div",{className:"col-md-4 offset-md-4 text-center screen"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-6 user-screen"},n.a.createElement("i",{className:this.state.userIcon})),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("i",{className:this.state.comIcon}))))),n.a.createElement("br",null),n.a.createElement("div",{id:"keys",className:"text-center container"},n.a.createElement("div",{className:"col-md-4 offset-md-4 text-center keys"},n.a.createElement("button",{className:"btn bt",onClick:function(){e.game(1)}},n.a.createElement("i",{className:"far fa-hand-rock"})),n.a.createElement("button",{className:"btn bt",onClick:function(){e.game(2)}},n.a.createElement("i",{className:"far fa-hand-paper"})),n.a.createElement("button",{className:"btn bt",onClick:function(){e.game(3)}},n.a.createElement("i",{className:"far fa-hand-scissors"})))),n.a.createElement("br",null),n.a.createElement("div",{id:"msg",className:"text-center text-light container"},n.a.createElement("div",{className:"col-md-4 offset-md-4 text-center msg"},this.state.message)),n.a.createElement("br",null)))}}]),a}(n.a.Component),h=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Multi player page"),n.a.createElement("br",null),n.a.createElement("h3",null,"Welcome ",this.props.user.toUpperCase()),n.a.createElement("br",null),n.a.createElement("h5",null,"Under development"))}}]),a}(n.a.Component),E=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).single=function(){e.setState({land:!1,single:!0})},e.multi=function(){e.setState({land:!1,multi:!0})},e.getUser=function(t){e.setState({userName:t.target.value}),t.target.value.length<4?e.setState({errorMsg:"Please enter atleast 4 characters",formValid:!1}):e.setState({errorMsg:"",formValid:!0})},e.state={land:!0,single:!1,multi:!1,userName:"",formValid:!1,errorMsg:""},e}return Object(o.a)(a,[{key:"render",value:function(){return this.state.land?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("div",null,n.a.createElement("h5",null,"WELCOME TO"),n.a.createElement("h4",null,"ROCK PAPER SCISSORS")," ",n.a.createElement("br",null),n.a.createElement("form",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{className:"form-control",type:"text",placeholder:"Enter your name",name:"user",onChange:this.getUser})),n.a.createElement("div",{className:"form-group"},n.a.createElement("button",{onClick:this.single,className:"btn btn-danger form-control",disabled:!this.state.formValid},"with Computer")),n.a.createElement("div",{className:"form-group"},n.a.createElement("button",{onClick:this.multi,className:"btn btn-primary form-control",disabled:!this.state.formValid},"with Friends"))),n.a.createElement("div",{id:"errorMsg",className:"text-danger"},this.state.errorMsg))))):this.state.single?n.a.createElement(d,{user:this.state.userName}):n.a.createElement(h,{user:this.state.userName})}}]),a}(n.a.Component);var p=function(){return n.a.createElement(E,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.dbd02908.chunk.js.map