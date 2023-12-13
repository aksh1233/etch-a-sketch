

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
