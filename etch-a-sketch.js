let boxes = document.querySelectorAll(".box")



boxes.forEach((box)=>{
    box.addEventListener("click", () => {colorChanger();box.style.backgroundColor = "rgb(0, 0, 0)"})
})//starting point for sketch


function colorChanger()//changes color of the box on when mouse is hovered
{
    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => { 
            if(window.getComputedStyle(box).backgroundColor == "rgb(255, 255, 255)") 
            {
                box.style.backgroundColor = "rgb(0, 0, 0)";
                
            }

            
            
        });
    });
}

function stopPoint()
{
    boxes.forEach((box)=>{
        box.addEventListener("click", () => {})
    })
}

let resetBtn = document.querySelector("#resetBtn")

resetBtn.addEventListener("click", () =>{boxes.forEach((box)=>
{box.style.backgroundColor = "rgb(255, 255, 255)"})
})

