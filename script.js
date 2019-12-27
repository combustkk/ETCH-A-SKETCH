let container = document.querySelector("#container");
container.style.gridTemplateColumns="repeat(2, 50%)";
let sliders = document.querySelectorAll("#ranges>input");
let squareColor = "white";
let gridNumberInput = document.querySelector("#reset>input");
let clearBtn = document.querySelector("#clear");
let randomBtn = document.querySelector("#colorPicker button");

function fillContainer(num)
{
  container.style.gridTemplateColumns=`repeat(${num}, ${100/num}%)`;
  console.log(container.style.gridTemplateColumns);
  for(let i = 0; i < num; i++)
  {
    for(let j = 0; j < num; j++)
    {
      let divBox = document.createElement("div");
      divBox.classList.add("square");
      divBox.addEventListener("mouseover", ()=>{divBox.style.backgroundColor=squareColor;});
      container.appendChild(divBox);
    }
  }
}

function setColor()
{
  let colorBlock = document.querySelector("#displayColor");
  squareColor="rgb(" + sliders[0].value + ", " + sliders[1].value + ", " + sliders[2].value + ")";
  colorBlock.style.backgroundColor=squareColor;
}

function clearContainer()
{
  container.innerHTML = "";
  fillContainer(gridNumberInput.value);
}

setColor();
gridNumberInput.addEventListener("change",clearContainer);
clearBtn.addEventListener("click",clearContainer);
sliders.forEach((sl)=>
{
  sl.addEventListener("change", ()=>{
    setColor();
    document.querySelectorAll(".square").forEach((sq)=>{
      sq.addEventListener("mouseover", ()=>{sq.style.backgroundColor=squareColor});
    });
  });
});
fillContainer(16);
randomBtn.addEventListener("click",()=>{
  document.querySelectorAll(".square").forEach((sq)=>{
    sq.addEventListener("mouseover", ()=>{sq.style.backgroundColor="#"+((1<<24)*Math.random()|0).toString(16);});
  });
});
