const boxes=document.querySelectorAll(".box")
const body=document.querySelector("body")
// console.log(boxes)
boxes.forEach((button)=>{
    // console.log(button);
    button.addEventListener("click",(e)=>{
        // console.log(e)
        // console.log(e.target)
        if(e.target.id==="lawngreen"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="aqua"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="white"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="orange"){
            body.style.backgroundColor=e.target.id;
        }
    })
})