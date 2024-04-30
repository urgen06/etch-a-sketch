let boxes = document.querySelectorAll(".box")



boxes.forEach((box)=>{
    box.addEventListener("click", () => {colorChanger();box.style.backgroundColor = "rgb(0, 0, 0)"})
})//starting point for sketch when the mouse is clicked on a box









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





let resetBtn = document.querySelector("#resetBtn")

resetBtn.addEventListener("click", () =>{boxes.forEach((box)=>{
    resetBtn.addEventListener("click", () => {box.style.backgroundColor = "rgb(255, 255, 255)"; })
})
 })
