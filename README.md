# carouselVerticalImagen
Para este proyecto solamente se esta usando css,js,html
# Resumen
la idea de este proyecto es generar un carousel vertical, va tener dos boton arriba y abajo, cada vez que se le de click va desplazar el overflow.
ver proyecto:
https://99andres.github.io/carouselVerticalImagen/
# html 
para  poder hacer el ejecicio tenemos que encapsular lo en:
```sh
<div class="principal"></div>
```
este va contener una posicion relative para que los otro elementos se mantegan de el y se mantengan dentro del flujo del codigo.
```sh
    <div class="principal">
        <div class="contenedor-Btn"><div>
    </div>
    
```        
la clase .contenedor-Btn va contener los boton que van hacer que el carousel suba y baje 
```sh
<div class="principal">
        <div class="contenedor-Btn">
            <div class="container" id="container">
        <div>
    </div>
        
```
la clase .container va tener  las imagenes y descripcion, va ser una targeta
