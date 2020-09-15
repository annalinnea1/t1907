const button = document.getElementById("calculate");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultsNode = document.getElementById("results");
const selectorNode = document.getElementById("method");
let method = "metric";

const calculateBmi = () =>{
    let bmi;
    if (method == "metric") {
      bmi = bmiClaculator.calculateMetric(weightInput.value, heightInput.value);
    } else {
      bmi = bmiClaculator.calculateImperial(weightInput.value, heightInput.value);
    }
    resultsNode.innerHTML = `<h2>Your BMI is ${bmi.value.toFixed(2)}, 
      you are considered ${bmi.display.message}!</h2>`;
    resultsNode.style.color = bmi.display.color;
}
button.addEventListener("click", () => {
    calculateBmi()
});

selectorNode.addEventListener("change", () => {
  method = selectorNode.options[selectorNode.selectedIndex].value;
  if (method === "imperial") {
    weightInput.placeholder = weightInput.placeholder.replace("kg", "pounds");
    heightInput.placeholder = heightInput.placeholder.replace("cm", "inches");
  } else {
    weightInput.placeholder = weightInput.placeholder.replace("pounds", "kg");
    heightInput.placeholder = heightInput.placeholder.replace("inches", "cm");
  }
});