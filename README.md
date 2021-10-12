# carouselVerticalImagen
Para este proyecto solamente se esta usando css,js,html
# Resumen
la idea de este proyecto es generar un carousel vertical, va tener dos boton arriba y abajo, cada vez que se le de click va desplazar el overflow.
ver proyecto:
https://99andres.github.io/carouselVerticalImagen/
# html 
antes de empezar se debe agregar dentro del head 
la siguiente línea
```sh
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

para  poder hacer el ejecicio tenemos que encapsular lo en:
```sh
<div class="principal"></div>
```
este va contener una posicion relative para que los otro elementos se mantegan de el y se mantengan dentro del flujo del código.
```sh
    <div class="principal">
        <div class="contenedor-Btn"><div>
    </div>
    
```        
la clase .contenedor-Btn va contener los boton que van hacer que el carousel suba y baje 
```sh
<div class="principal">
        <div class="contenedor-Btn">
            <div class="container" id="container"></div>
        <div>
    </div>
        
```
la clase .container va tener  las imagenes y descripcion, va ser una tarjeta
```sh
<div class="principal">
        <div class="contenedor-Btn">
            <div class="container" id="container">
                <img src="https://dummyimage.com/600x400/1a63eb/0011ff.jpg"> 
                <div class="container-item__detail">
                    <p>12-10-2050</p>
                    <p>Ingles</p>
                </div>
            </div>
        <div>
    </div>
        
```
la imagen se está usando de otra pagina ya que solo se hace con fines de prueba, el sitio es:
https://dummyimage.com
La clase .container-item__detail contiene los detalles, el año en el cual se tomo la foto y en el país que se tomo la foto
# css
Antes de empezar con el código el lector debe tener conocimientos basicos en css para poder entender cada uno de los bloques css, sin embargo intentare detallar lo más posible que se pueda
```sh
.principal{
    position: relative;
    width: 100%;
    margin-left: 50px;
    margin-top: 50px;
```    
en las clases .principal va ser el contenedor referente a los elementos que estan dentro de él, se coloca los margin para poder ver mejor el efecto del carousel

```sh
.principal .container{
    margin-top: 10px;
    height:80vh; 
    min-width: 234px    ;
    display: flex;
    flex-direction: column;
    position: absolute;
    overflow-y:hidden;
}
```
display funciona para implementar flex en el contendor padre,flex-direction: column hace que los hijos del container puedar posicion verticalmente, overflow-y:hidden ocultamos el scroll en el eje y para que el usuario no lo pueda modifica o manipular, en caso lo hacemos desde las flechas 
```sh
principal .contenedor-Btn{
    position: absolute;
    height: 510px;
    min-width: 234px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
```
en este bloque, se define los estilos del contenedor del boton
position: absolute toma de referencia al contenedor padre en este caso a principal, se mantiene dentro del padre.
align-items: center;
justify-content: space-between;
las dos propiedades de arriba lo que hace es centrar las flechas horizontal y colocar los botones en los extremos del contenedor padre
```sh
.contenedor-Btn:hover .contenedor-Btn__derecho,.contenedor-Btn:hover .contenedor-Btn__izquierdo{
    opacity: .5;
}
```
En el bloque de arriba, cuesta seguir el hilo de la explicacion (a mi se me diculta un poco entenderlo), voy a intentar explicarlo como me parece que funciona.
Sabemos que hay un contenedor padre(principal) y dos hijos(.contenedor-Btn,.container),partiendo de esta premisa,
cuando estamos parados dentro de  contenedor-Btn, este mismo va afectar o va aplicar los estilos a las clases que tiene los boton, un  caso de la vida seria que yo hable con el padre(cuando me pare sobre el contenedor principal contenedor-Btn) de mi primo y le paso el regalo al padre y este se lo da al hijo(los hijos del padre), este percute el estados emocional de mi primo(estas son las clases de los botones)
```sh
.principal:hover .contenedor-Btn__derecho:hover,.principal:hover .contenedor-Btn__izquierdo:hover{
    opacity: 1;
}
```
este bloque de código se ejecuta cuando estemos parados en el boton de la flecha en ese momento se activa 

.container .container-item{
    
    border-radius: 20px;
    margin-bottom: 5px;    
    position: relative;
    width: 250px;
    height: 300px ;
    -webkit-transform-origin: center top;
    -moz-transform-origin: center top;
    transform-origin: center top;
    transition:450ms all
}
transform-origin: center top; esta propiedad lo que hace es tomar referencia el centro cuando se estire el el bloque
.container .container-item:hover ~ .container-item{
    
    -webkit-transform: translate3d(0,30px,0);
    -moz-transform: translate3d(0,30px,0);
    transform: translate3d(0,30px,0);
}
En .container .container-item:hover ~ .container-item{
se activa cuando el mouse este sobre el item y los otros items se va a desplazar hacia abajo 30px
```sh
.container-item:hover .container-item__detail{
    opacity: 1;
  }
  ```
  por último este efecto se  activa cuando se posiciona sobre el item va afectar a los datalles, en este caso igual al ejemplo del padre y primo que esta en la parte de arrica  
 # js
 ```sh
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
```   
se declara valor afuera de los eventos ya que va tener la sumatoria o la resta,la propiedad scrollTop hace es colocar un valor para que poder desplazar el scroll ya que en el css esta oculto 
