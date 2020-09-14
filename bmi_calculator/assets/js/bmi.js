const bmiClaculator = {
    calculateMetric(weight,height){
        let height_m = parseInt(height)/100
        let bmi = parseInt(weight)/(height_m**2)
        return {
            value: bmi,
            display: this.checkResult(bmi)
        }  
    },
    checkResult(bmiValue) {
        // display is an object
        let display = {}
        if (bmiValue <= 18.5){
            display.message = 'underweight'
            display.color = 'red'
        } else if (bmiValue >= 18.6 && bmiValue<= 24.9){
            display.message = 'normal'
            display.color = 'green'
        } else if (bmiValue >= 25 && bmiValue <= 29.9){
            display.message = 'overweight'
            display.color = 'orange'
        } else if (bmiValue >= 30){
            display.message = 'obese'
            display.color = 'red'
    }
        return display
    }
}
