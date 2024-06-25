const timebox=document.querySelector('#time');
// console.log(date);

setInterval(function(){
    let date=new Date();
    timebox.innerHTML=date.toLocaleTimeString();
},1000);