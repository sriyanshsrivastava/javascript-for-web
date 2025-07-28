// writing function directly in to interval function

// const clock=document.getElementById("clock-text");
// // const time = new Date();
// // console.log(time.toLocaleTimeString());
// setInterval(()=>{
//     const time = new Date();
//     clock.innerHTML=time.toLocaleTimeString()
// },1000)


// writing local time change function outside the interval function.
const clock=document.getElementById("clock-text");

// time change function in which inject current time in the span in DOM
const timechange=()=>{
    const time = new Date();
    clock.innerHTML=time.toLocaleTimeString()
}
setInterval(timechange,1000) // runs timechange function in 1sec interval, argument 1000ms = 1sec;
