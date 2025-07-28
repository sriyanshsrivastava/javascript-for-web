const form = document.querySelector("form")
// const result = document.querySelector(".result")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    console.log(height)
    const weight = parseInt(document.querySelector("#weight").value);
    console.log(weight)
    const result = document.querySelector("#result");
    console.log(result)
    
    if(height===""||height<0||isNaN(height)){
        result.innerHTML="Please give a Valid Height";
    }else if(weight===""||weight<0||isNaN(weight)){
        result.innerHTML="Please give a Valid Weight";
    }else{
        const bmi =(weight/((height**2)/10000)).toFixed(2);
        result.innerHTML=`<span>${bmi}</span>`;
    }
})