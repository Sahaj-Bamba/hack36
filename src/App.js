import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";

class App extends Component {

	// componentDidMount(){
	// 	document.getElementById("root").style.visibility="initial"; 
	// }

	render() {
		return (
			<div className="App">
				<Routes />
			</div>
		);
	}
}

export default App;
