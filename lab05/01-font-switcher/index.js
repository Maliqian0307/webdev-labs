const makeBigger = () => {
   var el1 = document.querySelector("p");
   var el2 = document.querySelector("h1");
   var style1 = window.getComputedStyle(el1, null).getPropertyValue('font-size');
   var style2 = window.getComputedStyle(el2, null).getPropertyValue('font-size');
   var fontSize1 = parseFloat(style1); 
   var fontSize2 = parseFloat(style2); 
   el1.style.fontSize = (fontSize1+ 1) + 'px';
   el2.style.fontSize = (fontSize2+ 1) + 'px';
   
};

const makeSmaller = () => {
   var el1 = document.querySelector("p");
   var el2 = document.querySelector("h1");
   var style1 = window.getComputedStyle(el1, null).getPropertyValue('font-size');
   var style2 = window.getComputedStyle(el2, null).getPropertyValue('font-size');
   var fontSize1 = parseFloat(style1); 
   var fontSize2 = parseFloat(style2); 
   el1.style.fontSize = (fontSize1- 1) + 'px';
   el2.style.fontSize = (fontSize2- 1) + 'px';
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
