var closedFace=document.querySelector('.closed')
var openedFace=document.querySelector('.opened')
var smiledFace=document.querySelector('.smile')
//add event listener

closedFace.addEventListener('click', () => {
    if(openedFace.classList.contains('opened'))
    {
        openedFace.classList.add('active');
        closedFace.classList.remove('active');
    }
});
openedFace.addEventListener('click', () =>  {
    if(smiledFace.classList.contains('smile'))
    {
    
        smiledFace.classList.add('active');
        openedFace.classList.remove('active');

    }

});
smiledFace.addEventListener('click', () =>  {
    if(closedFace.classList.contains('closed'))
    {
    
        closedFace.classList.add('active');
        smiledFace.classList.remove('active');

    }

});



