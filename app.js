//Obteniendo elementos HTML
const boton = document.getElementById('btnEmpezar');
const azul = document.getElementById('azul');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const morado = document.getElementById('morado');

class Juego{
    constructor(){
        this.inicializar()
        this.secuenciaNumero()
        this.siguienteNivel()
    }
    
    inicializar(){
        boton.classList.add('hide')
        /* this.secuenciaNumero() */
        this.nivel = 1
        this.colores = {
            azul,
            naranja,
            verde,
            morado
        }
    }
    
    secuenciaNumero(){
        this.secuencia = new Array(10).fill(0).map(()=> Math.floor(Math.random() * 4))
    }

    siguienteNivel(){
        this.iluminarSecuencia()
    }

    iluminarSecuencia(){
        for(var i = 0; i <= this.nivel; i++)
    }
}

function empezarJuego(){
        window.juego = new Juego()
    
}