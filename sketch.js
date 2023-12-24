const gridContainer = document.querySelector('#gridContainer');
createGrid(10);

function createGrid(n){
    gridContainer.innerHTML='';//This will clear the gridContainer initial contents
for(let i=1;i<=n;i++) //this loop creates n flexboxes(div elements) arranged vertically
{
   
    const nthContainer = document.createElement('div');
    for(let j=1;j<=n;j++)// this loop creates n div elements inside each flexbox(div) and also makes the flexbox dynamic by adjusting the height and width of each pixel and the each flexbox
    {
        const pixel = document.createElement('div');
        pixel.classList.add('pix');
        pixel.style.width = (800/n)+'px';
        pixel.style.height = (800/n)+'px';
        nthContainer.appendChild(pixel);
    }
    nthContainer.style.display = 'flex';
    nthContainer.style.width = '800px';
    nthContainer.style.height = (800/n)+'px';
    gridContainer.appendChild(nthContainer);

   
}
fillColor();}

function fillColor(){
const drawingPixels = document.querySelectorAll('.pix');
let mousedown = false;

for(let i=0;i<drawingPixels.length;i++)  //Handling the mouse events to fill the required divs 
{
    drawingPixels[i].addEventListener('mouseover',changeColor);
    drawingPixels[i].addEventListener('mousedown',changeMouseDownState);
    drawingPixels[i].addEventListener('mousedown',changeColor);

    drawingPixels[i].addEventListener('mouseup',changeMouseUpState);


}
function changeMouseUpState()
{
    mousedown = false;
}
function changeMouseDownState()
{
    mousedown = true;
}

function changeColor(e)
{
    if(e.type==='mouseover'&& !mousedown)
      return;

     e.target.style.backgroundColor = 'black';
}
}
const smallButton = document.querySelector('#smallButton');
smallButton.addEventListener('click', ()=>createGrid(16));

const mediumButton = document.querySelector('#mediumButton');
mediumButton.addEventListener('click',()=>createGrid(64));

const largeButton = document.querySelector('#largeButton');
largeButton.addEventListener('click',()=>createGrid(99));