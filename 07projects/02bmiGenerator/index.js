const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    // To get the values user has filled at the point of submission
    const height=parseInt(document.querySelector("#height").value)
    const weight=parseInt(document.querySelector("#weight").value)
    const results=document.querySelector("#results");
    const resultLabel=document.querySelector("#result-label")
    if(height ==="" || height<0 || isNaN(height)){
        results.innerHTML="Please enter a valid height"
    }
    else if(weight ==="" || weight<0 || isNaN(weight)){
        results.innerHTML="Please enter a valid weight"
    }
    else{
        const bmi=(weight/((height *height)/10000)).toFixed(2);
        results.innerHTML=`<span>${bmi}</span>`;
        if(bmi<18.6)
        {
            resultLabel.innerHTML="You are Underweight";
        }
        else if(bmi>=18.6 && bmi<=24.9)
        {
            resultLabel.innerHTML="You are perfectly fine!!";
        }
        else{
            resultLabel.innerHTML="You are Overweight";
        }
    }   
   
})