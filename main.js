const mainContainer = document.querySelector("#bigContainer");
// probably unnecesary const flexer = document.querySelector("div");

function getNumberOfsquares() {
  var numberOfsquares = prompt(
    "Which number of squares per side would you like to have? "
  );
  return numberOfsquares;
}

//button to choose the number of rows and columns

const btn = document.createElement("button");
btn.innerHTML = "Click to customize grid";
btn.classList.add("btnStyle");
mainContainer.appendChild(btn);

//adding functionality to the button
btn.addEventListener("click", function () {
  var numberOfSquares = parseInt(getNumberOfsquares());
  createSquares(numberOfSquares);
});

//adding another conainer in js, because setting the height of the container in the html doesnt do anything
const frameContainer = document.createElement("div");
frameContainer.classList.add("frameContainerStyle");
mainContainer.appendChild(frameContainer);

//creating 4 rows

function createSquares(numberOfSquares) {
  // Clear the existing squares
  frameContainer.innerHTML = "";
  for (let i = 1; i < numberOfSquares; i++) {
    const flexer = document.createElement("div");
    flexer.classList.add("midContainer");
    frameContainer.appendChild(flexer);

    for (let i = 1; i < numberOfSquares; i++) {
      const miniFlexer = document.createElement("div");
      miniFlexer.classList.add("miniContainer");
      flexer.appendChild(miniFlexer);
      //propabky unnecassary   miniFlexer.id = "miniFlexer";
      //adding the eventListeners

      miniFlexer.addEventListener("mouseover", function () {
        miniFlexer.classList.add("hovered");
      });

      miniFlexer.addEventListener("mouseout", function () {
        setTimeout(function () {
          miniFlexer.classList.remove("hovered");
        }, 500);
      });
    }
  }
}
/*

*/

//adding the hover events

/*

const allMiniFlexers = document.querySelectorAll('#miniFLexer');
const miniFlexer = document.getElementById("miniFlexer");

for (let i = 0; i<20; i++)  {

  // and for each one we add a 'click' listener
  miniFlexer.addEventListener('mouseover', () => {
        miniFlexer.classList.add("hovered");
  });
};

*/

//CODE BELOW IS before using loops

/*const flex1 = document.createElement("div");
flex1.classList.add("midContainer");


const flex2 = document.createElement("div");
flex2.classList.add("midContainer");


const flex3 = document.createElement("div");
flex3.classList.add("midContainer");


const flex4 = document.createElement("div");
flex4.classList.add("midContainer");


mainContainer.appendChild(flex1);
mainContainer.appendChild(flex2);
mainContainer.appendChild(flex3);
mainContainer.appendChild(flex4);


//creating the mini containers inside the rows

//first row

*/

/*

const miniFlex1 = document.createElement("div");
miniFlex1.classList.add("miniContainer");
miniFlex1.textContent = "hello mini flex1";

const miniFlex2 = document.createElement("div");
miniFlex2.classList.add("miniContainer");
miniFlex2.textContent = "hello mini flex2";

const miniFlex3 = document.createElement("div");
miniFlex3.classList.add("miniContainer");
miniFlex3.textContent = "hello mini flex3";

const miniFlex4 = document.createElement("div");
miniFlex4.classList.add("miniContainer");
miniFlex4.textContent = "hello mini flex4";



flex1.appendChild(miniFlex1)

flex1.appendChild(miniFlex2)


flex1.appendChild(miniFlex3)

flex1.appendChild(miniFlex4)

// second row
const miniFlex5 = document.createElement("div");
miniFlex5.classList.add("miniContainer");

const miniFlex6 = document.createElement("div");
miniFlex6.classList.add("miniContainer");

const miniFlex7 = document.createElement("div");
miniFlex7.classList.add("miniContainer");

const miniFlex8 = document.createElement("div");
miniFlex8.classList.add("miniContainer");
miniFlex8.textContent = "hello mini flex4";


flex2.appendChild(miniFlex5)

flex2.appendChild(miniFlex6)


flex2.appendChild(miniFlex7)

flex2.appendChild(miniFlex8)

// third row
const miniFlex9 = document.createElement("div");
miniFlex9.classList.add("miniContainer");

const miniFlex10 = document.createElement("div");
miniFlex10.classList.add("miniContainer");

const miniFlex11 = document.createElement("div");
miniFlex11.classList.add("miniContainer");

const miniFlex12 = document.createElement("div");
miniFlex12.classList.add("miniContainer");


flex3.appendChild(miniFlex9)

flex3.appendChild(miniFlex10)


flex3.appendChild(miniFlex11)

flex3.appendChild(miniFlex12)

//// fourth row

const miniFlex13 = document.createElement("div");
miniFlex13.classList.add("miniContainer");

const miniFlex14 = document.createElement("div");
miniFlex14.classList.add("miniContainer");

const miniFlex15 = document.createElement("div");
miniFlex15.classList.add("miniContainer");

const miniFlex16 = document.createElement("div");
miniFlex16.classList.add("miniContainer");


flex4.appendChild(miniFlex13)

flex4.appendChild(miniFlex14)


flex4.appendChild(miniFlex15)

flex4.appendChild(miniFlex16)

*/
