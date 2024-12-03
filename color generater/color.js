const getcolor = () =>{
    // hexacode 
    const randomnumber=Math.floor(Math.random()*16777125);
   let randomcode='#' +randomnumber.toString(16);
   document.body.style.background=randomcode;
   document.getElementById("code").innerText=randomcode;
   
    
}
document.getElementById("button").addEventListener("click",getcolor)

getcolor()