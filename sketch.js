

const gridContainer = document.querySelector('#gridContainer');
for(let i=1;i<=16;i++) //this loop creates n flexboxes(div elements) arranged vertically
{
    const nthContainer = document.createElement('div');
    for(let j=1;j<=16;j++)// this loop creates n div elements inside each flexbox(div)
    {
        const pixel = document.createElement('div');
        pixel.classList.add('pix');
        nthContainer.appendChild(pixel);
    }
    nthContainer.style.display = 'flex';
    gridContainer.appendChild(nthContainer);
}

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