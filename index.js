let btnIzquierdo=document.getElementById("btnArriba")
let container=document.getElementById("container")
let btnDerecho=document.getElementById("btnAbajo")
let valor=0;
btnIzquierdo.style.display="none"    
btnDerecho.addEventListener('click',function(){
   
   valor=container.scrollTop+=170
   btnIzquierdo.style.display="block"

    

   

  
})
btnIzquierdo.addEventListener('click',function(e){ 
    
    valor-=170
    if(valor<=0){
       btnIzquierdo.style.display="none"
    }
    container.scrollTop=valor
})    