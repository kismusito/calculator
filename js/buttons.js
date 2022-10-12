import { calculate } from "./calculator.js";
let operation = "";
const operationContainer = document.getElementById("operation");
const operationResult = document.getElementById("operation-result");
const buttonsContainer = document.getElementById("calculator-buttons");
function addValue(value) {
    operation += value;
    operationContainer.innerHTML = operation;
}
function handleCalculate(operation) {
    operationResult.innerHTML = calculate(operation).toString();
}
function handleClear() {
    operation = "";
    operationContainer.innerHTML = "";
    operationResult.innerHTML = "0";
}
function handleDelete() {
    operation = operation.slice(0, operation.length - 1);
    operationContainer.innerHTML = operation;
}
const buttons = [
    {
        value: "(",
        className: "button small dark",
        action: addValue,
    },
    {
        value: ")",
        className: "button small dark",
        action: addValue,
    },
    {
        value: "ans",
        className: "button small dark",
        action: addValue,
    },
    {
        value: "del",
        className: "button small dark",
        action: handleDelete,
    },
    {
        value: "clear",
        className: "button small dark",
        action: handleClear,
    },
    {
        value: 7,
        className: "button",
        action: addValue,
    },
    {
        value: 8,
        className: "button",
        action: addValue,
    },
    {
        value: 9,
        className: "button",
        action: addValue,
    },
    {
        value: "%",
        className: "button dark large",
        action: addValue,
    },
    {
        value: 4,
        className: "button",
        action: addValue,
    },
    {
        value: 5,
        className: "button",
        action: addValue,
    },
    {
        value: 6,
        className: "button",
        action: addValue,
    },
    {
        value: "*",
        className: "button dark",
        action: addValue,
    },
    {
        value: "/",
        className: "button dark",
        action: addValue,
    },
    {
        value: 1,
        className: "button",
        action: addValue,
    },
    {
        value: 2,
        className: "button",
        action: addValue,
    },
    {
        value: 3,
        className: "button",
        action: addValue,
    },
    {
        value: "+",
        className: "button dark",
        action: addValue,
    },
    {
        value: "-",
        className: "button dark",
        action: addValue,
    },
    {
        value: ".",
        className: "button dark",
        action: addValue,
    },
    {
        value: 0,
        className: "button",
        action: addValue,
    },
    {
        value: "^",
        className: "button dark",
        action: addValue,
    },
    {
        value: "ENTER",
        className: "button dark large",
        action: handleCalculate,
    },
];
buttons.forEach((button) => {
    const buttonElement = document.createElement("button");
    buttonElement.className = button.className;
    buttonElement.innerText = button.value.toString();
    if (button.value === "ENTER") {
        buttonElement.addEventListener("click", () => button.action(operation));
    }
    else {
        buttonElement.addEventListener("click", () => button.action(button.value.toString()));
    }
    buttonsContainer.appendChild(buttonElement);
});
