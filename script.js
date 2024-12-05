const cdiv = document.querySelector('.container-2');
const button = document.querySelector("#btn");


    
    // On click, button will show a pop up of user input

    button.addEventListener ("click",  () => {
        const userInput = prompt("Please enter your desired number");

        const numDivs = parseInt(userInput, 10);
    
        if (!isNaN(numDivs) && numDivs > 0 && numDivs <= 100) {
            createDivs(numDivs);
            addHoverEffects();

        } else {
            alert("Please enter a number between 1 and 100");
        }
    })



    // create a function which takes userInput and create divs in a square
  function createDivs (number) {
    cdiv.innerHTML = "";
    const gridSize = Math.ceil(Math.sqrt(number));
    cdiv.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    cdiv.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 1; i <= number; i++) {
        const div = document.createElement('div');
        div.classList.add("cell");
        cdiv.appendChild(div);

    }
  }

  // add hover effect and leave a color 
  function addHoverEffects () {
      
      const allDivs = cdiv.querySelectorAll('div');
      
      allDivs.forEach((div) => {
          div.addEventListener("mouseenter", function (event) {
              event.target.style.backgroundColor = "purple"; // Change background color on mouse enter
            });
            
            div.addEventListener("mouseleave", function (event) {
                event.target.style.backgroundColor = "red"; // Reset background color on mouse leave
            });
        });
        
  }



//   Generate different color scheme on hover and re-hover
function generateDarkerColors (level) {
    const baseColor = 100;
    const darkeningStep = 10;
    const colorValue = Math.max(baseColor - level * darkeningStep, 0);
    return `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
}