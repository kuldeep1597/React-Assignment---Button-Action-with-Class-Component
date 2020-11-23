import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state = {
			buttonstate: false,
		};
		this.change=this.change.bind(this);
	};
	change() {
		this.setState({ buttonstate: true });
	};

    render() {
    	return(
    		<div id="main">
				<button id="click" onClick={this.change}>button</button>
				{ this.buttonstate ? (
					<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
					
				): null
				}
    		</div>
    	);
    }
}


export default App;

