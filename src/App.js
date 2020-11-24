import React, { useState } from "react";
import "./App.css";

function Button(props) {
	return (
		<button>
		</button>
	);
}

function App() {
	const [total, setTotal] = useState();
	const [output, setOutput] = useState("0");
	const [operation, setOperation] = useState("");
	const handleCalc = (input, operation, total) => {
	};

	const handleInput = (e) => {
		switch (e.target.value) {
			case "AC":
				break;
			case "+/-":
				break;
			case "%":
				break;
			case "÷":
				break;
			case "+":
				break;
			case "×":
				break;
			case "−":
				break;
			case "=":
				break;
			case ".":
				break;
			default:
		}
	};

	return (
		<>
			<body>
				<main>
					<div className="outputContainer">
						<h1 className="output">{output}</h1>
					</div>
					<div id="buttons" className="button-row">
						<Button name="number etc" onClick={handleInput} />
						<Button name="number etc" onClick={handleInput} />
						<Button name="number etc" onClick={handleInput} />
						<Button name="operation" onClick={handleInput} />
					</div>
					<div id="buttons" className="button-row">
						<Button name="number" onClick={handleInput}/>
						<Button name="number" onClick={handleInput} />
						<Button name="number" onClick={handleInput} />
						<Button name="operation" onClick={handleInput} />
					</div>
					<div id="buttons" className="button-row">
						<Button name="number" onClick={handleInput}/>
						<Button name="number" onClick={handleInput}/>
						<Button name="number" onClick={handleInput}/>
						<Button name={"operation"} onClick={handleInput}/>
					</div>
					<div id="buttons" className="button-row">
						<Button name="number" onClick={handleInput} />
						<Button name="number" onClick={handleInput}/>
						<Button name="number" onClick={handleInput}/>
						<Button name="operation" onClick={handleInput}/>
					</div>
					<div id="buttons" className="button-row">
						<Button name="number zero" onClick={handleInput}/>
						<Button name="number" onClick={handleInput}/>
						<Button name="operation" onClick={handleInput}/>
					</div>
				</main>
				<footer>
					<h3>[insert name]</h3>
				</footer>
			</body>
		</>
	);
}

export default App;
