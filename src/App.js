import React, { useState } from "react";
import "./App.css";

function Button(props) {
	return (
		<button onClick={props.onClick} value={props.value} className={props.name}>
			{props.value}
		</button>
	);
}

function App() {
	const [total, setTotal] = useState();
	const [output, setOutput] = useState("0");
	const [operation, setOperation] = useState("");
	const handleCalc = (input, operation, total) => {
		switch (operation) {
			case "add":
				return (+input + +total).toString();
			case "sub":
				return (total - input).toString();
			case "mult":
				return (total * input).toString();
			case "div":
				return (total / input).toString();
			default:
		}
	};

	const handleInput = (e) => {
		switch (e.target.value) {
			case "AC":
				setOutput("0");
				setTotal();
				break;
			case "+/-":
				output.charAt(0) !== "-"
					? output !== "0"
						? setOutput("-" + output)
						: setOutput(output)
					: setOutput(output.substring(1, output.length));
				break;
			case "%":
				setOutput((output / 100).toString());
				break;
			case "÷":
				setOperation("div");
				if (!total) setTotal(output);
				setOutput("0");
				break;
			case "+":
				setOperation("add");
				if (!total) setTotal(output);
				setOutput("0");
				break;
			case "×":
				setOperation("mult");
				if (!total) setTotal(output);
				setOutput("0");
				break;
			case "−":
				setOperation("sub");
				if (!total) setTotal(output);
				setOutput("0");
				break;
			case "=":
				setTotal(handleCalc(output, operation, total));
				setOutput(handleCalc(output, operation, total));
				break;
			case ".":
				if (!output.includes(".")) {
					setOutput(output + ".");
				}
				break;
			default:
				output === "0" && output.length < 10
					? setOutput(e.target.value)
					: setOutput(output + e.target.value);
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
						<Button name="number" onClick={handleInput} value={7} />
						<Button name="number" onClick={handleInput} value={8} />
						<Button name="number" onClick={handleInput} value={9} />
						<Button name="operation" onClick={handleInput} value={"×"} />
					</div>
					<div id="buttons" className="button-row">
						<Button name="number" onClick={handleInput} value={4} />
						<Button name="number" onClick={handleInput} value={5} />
						<Button name="number" onClick={handleInput} value={6} />
						<Button name={"operation"} onClick={handleInput} value={"−"} />
					</div>
					<div id="buttons" className="button-row">
						<Button name="number" onClick={handleInput} value={1} />
						<Button name="number" onClick={handleInput} value={2} />
						<Button name="number" onClick={handleInput} value={3} />
						<Button name="operation" onClick={handleInput} value={"+"} />
					</div>
					<div id="buttons" className="button-row">
						<Button name="number zero" onClick={handleInput} value={"0"} />
						<Button name="number" onClick={handleInput} value={"."} />
						<Button name="operation" onClick={handleInput} value={"="} />
					</div>
				</main>
				<footer>
					<h3>Griffin Ogura</h3>
				</footer>
			</body>
		</>
	);
}

export default App;
