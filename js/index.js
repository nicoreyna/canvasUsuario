var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

var texto = document.getElementById("texto");
var boton = document.getElementById("botoncito");
boton.addEventListener ("click", dibujoPorClick);
var pickcolor = document.getElementById("favcolor")
var borrar = document.getElementById("borrarTodo");
borrar.addEventListener ("click", borrarDibujo);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l = 0;
    var xf, yi;
    var colorcito = pickcolor.value;
    var espacio = ancho / lineas;

    for(l=0; l < lineas; l++)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea (colorcito, 0, yi, xf, 300);
        console.log(lineas)
    }

    dibujarLinea (colorcito, 1, 1, 1, 300);
    dibujarLinea (colorcito, 1, 299, 299, 299);
}

function borrarDibujo() 
{
    lienzo.clearRect(0, 0, d.width, d.height);
}

function cambiarColor()
{
    if (rojo) 
    {

    }
}