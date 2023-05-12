const mainContainer = document.querySelector('#bigContainer');
const flexer = document.querySelector("div");




//creating 4 rows 
for (let i=1; i<17; i++)
{
const flexer = document.createElement("div");

flexer.classList.add("midContainer");
mainContainer.appendChild(flexer);


for (let i=1; i<17; i++)
{
const miniFlexer = document.createElement("div");
miniFlexer.classList.add("miniContainer");
flexer.appendChild(miniFlexer)
miniFlexer.id = "miniFlexer"

miniFlexer.addEventListener('mouseover', () => {
    miniFlexer.classList.add("hovered");
});

}

}

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