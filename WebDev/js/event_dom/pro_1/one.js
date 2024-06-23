const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach(function(buttons){
    // console.log(buttons);
    buttons.addEventListener('click',function(e){
        // console.log(e);
        const parentDiv = e.target.closest('.button');
        console.log(parentDiv.id); // Logs the id of the parent div

        if (parentDiv.id === 'white') {
            body.style.backgroundColor = 'white';
        } else if (parentDiv.id === 'red') {
            body.style.backgroundColor = '#E31837';
        } else if (parentDiv.id === 'blue') {
            body.style.backgroundColor = '#009ACD';
        } else if (parentDiv.id === 'black') {
            body.style.backgroundColor = 'black';
        } else if (parentDiv.id === 'cyan') {
            body.style.backgroundColor = '#80FFFF';
        }
    })
})