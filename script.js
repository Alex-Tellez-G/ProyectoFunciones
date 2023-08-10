const $lucesDelCirculo = document.querySelectorAll('.luces-circulo');
let contadorLuz = 0;
const mostrarLuz = () =>
{
    $lucesDelCirculo[contadorLuz].className = 'luces-circulo';
    contadorLuz ++;

    if(contadorLuz > 2)
    {
        contadorLuz = 0;
    }

    const luzActual = $lucesDelCirculo[contadorLuz];
    luzActual.classList.add(luzActual.getAttribute('color')); 
}

//cambiar de luz
setInterval(mostrarLuz,3000)