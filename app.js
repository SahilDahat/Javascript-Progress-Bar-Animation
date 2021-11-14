const progressBar = document.querySelector("#progress-bar");
const section = document.querySelector("section");

const animateProgressBar = () => {
    let scrollDistance = -section.getBoundingClientRect().top;
    let progressWidth =
     (scrollDistance / 
        (section.getBoundingClientRect().height - 
          document.documentElement.clientHeight)) * 100;
    
    let value = Math.floor(progressWidth);
    progressBar.style.width = value + "%";
};

/*getBoundingClientRect() method returns a DOMRect object providing
information about the size of an element and its position relative
to the viewport.*/

window.addEventListener("scroll" , animateProgressBar);
//What is window?
