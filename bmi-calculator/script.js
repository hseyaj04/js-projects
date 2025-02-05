const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    // console.log(document.querySelector('#height').value)
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    if(height < 0 || isNaN(height) || weight<0 || isNaN(weight)){
        result = document.querySelector('#result')
        result.style.color = 'red'
        result.textContent = "Invalid Entry, Please try again!"  
    }
    else{
        const bmi = (weight/((height/100)**2)).toFixed(1)
        let status;
        if(bmi >= 18.5 && bmi <= 24.9){
            result.style.color = 'green';
            status = "Fit!!"
        }
        else if(bmi < 18.5){
            result.style.color = 'red';
            status = "Underweight!!"
        }
        else if(bmi >= 25 && bmi <= 29.9){
            result.style.color = 'red';
            status = "Overweight!!"
        }
        else{
            result.style.color = 'red';     
            status = "Obese!!"
        }
        result.textContent = `BMI = ${bmi} and you are ${status}`
    }
    
})