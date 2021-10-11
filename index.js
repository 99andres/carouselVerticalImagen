let btnIzquierdo=document.getElementById("btnIzquierdo")
let container=document.getElementById("container")
let btnDerecho=document.getElementById("btnDerecho")
let valor=0;
btnIzquierdo.style.display="none"    
btnDerecho.addEventListener('click',function(){
   
   valor=container.scrollLeft+=260
   btnIzquierdo.style.display="block"

    

   

  
})
btnIzquierdo.addEventListener('click',function(e){ 
    
    valor-=260
    if(valor<=0){
       btnIzquierdo.style.display="none"
    }
    container.scrollLeft=valor
})    