let boxes = document.querySelectorAll(".box")




function colorChanger()
{
    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => { 
            if(window.getComputedStyle(box).backgroundColor == "rgb(255, 255, 255)") {
                box.style.backgroundColor = "rgb(0, 0, 0)";
                console.log("clicked");
            } else {
                box.style.backgroundColor = "rgb(255, 255, 255)";
                console.log("clicked");
            }
        });
    });
}

