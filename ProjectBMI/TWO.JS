const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")
    if(height==""|| height<=0||isNaN(height)){
        result.innerHTML = "please enter a valid height"
    }else if(weight==""|| weight<=0||isNaN(weight)){
        result.innerHTML = "please enter a valid weight"
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    result.innerHTML = `<span>${bmi}</span>`;
    if(bmi<18.5){
        result.innerHTML =result.innerHTML+"You are underweight";
    }
    else if(bmi>=18.5 && bmi < 24.9){
        result.innerHTML =`your bmi is ${result.innerHTML}`+"so ,you are normal";
    }
    else if(bmi >= 25 && bmi < 29.9){
        result.innerHTML =result.innerHTML +"You are overweight";
    }

     }
    //  else{

    //  }
})
