const button = document.getElementById('calculate')
const weightInput = document.getElementById('weight')
const heightInput = document.getElementById('height')
const resultsNode = document.getElementById('results')


button.addEventListener('click', function(){
    let bmi = bmiClaculator.calculateMetric(weightInput.value, heightInput.value)
    resultsNode.innerHTML = `<h2>Your BMI value is ${bmi.value.toFixed(2)}, 
    you are considered ${bmi.display.message}!</h2>`
    resultsNode.style.color = bmi.display.color

})