import React, { useState } from "react";
import "./App.css";

function Button(props) {
	return (
		<button onClick={props.onClick} className={props.name} value={props.value}>
			{props.value}
		</button>
	);
}

function App() {
	const [total, setTotal] = useState();
	const [output, setOutput] = useState("0");
	const [operation, setOperation] = useState("");
	const handleCalc = (input, operation, total) => {};

	const handleInput = (e) => {
		switch (e.target.value) {
			case "AC":
				setOutput("0");
				setTotal();
				break;
			case "+/-":
				if (!output.includes("-")) {
					setOutput("-" + output);
				} else {
					setOutput(output.substring(1, output.length));
				}
				break;
			case "%":
				setOutput((output / 100).toString());
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
				if (!output.includes(".")) {
					setOutput(output + ".");
				}
				break;
			default:
				if (output === "0") {
					setOutput(e.target.value);
				} else {
					setOutput(output + e.target.value);
				}
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
						<Button name="number etc" onClick={handleInput} value={"AC"} />
						<Button name="number etc" onClick={handleInput} value={"+/-"} />
						<Button name="number etc" onClick={handleInput} value={"%"} />
						<Button name="operation" onClick={handleInput} value={"÷"} />
					</div>
					<div id="buttons" className="button-row">
						<Button name="number" onClick={handleInput} value={"7"} />
						<Button name="number" onClick={handleInput} value={"8"} />
						<Button name="number" onClick={handleInput} value={"9"} />
						<Button name="operation" onClick={handleInput} value={"×"} />
					</div>
					<div id="buttons" className="button-row">
						<Button name="number" onClick={handleInput} value={"4"} />
						<Button name="number" onClick={handleInput} value={"5"} />
						<Button name="number" onClick={handleInput} value={"6"} />
						<Button name={"operation"} onClick={handleInput} value={"−"} />
					</div>
					<div id="buttons" className="button-row">
						<Button name="number" onClick={handleInput} value={"1"} />
						<Button name="number" onClick={handleInput} value={"2"} />
						<Button name="number" onClick={handleInput} value={"3"} />
						<Button name="operation" onClick={handleInput} value={"+"} />
					</div>
					<div id="buttons" className="button-row">
						<Button name="number zero" onClick={handleInput} value={"0"} />
						<Button name="number" onClick={handleInput} value={"."} />
						<Button name="operation" onClick={handleInput} value={"="} />
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
