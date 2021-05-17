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
        this.secuencia = new Array(10).fill(0).map((n)=> Math.floor(Math.random() * 4))
    }

    siguienteNivel(){
        this.iluminarSecuencia()
        this.EventosAlCkick()
    }

    transformarNumeroAColor(numero){
        switch(numero){
            case 0: 
            return 'azul'
            case 1:
                return 'morado'
            case 2: 
                return 'naranja'
            case 3:
                return 'verde'
        }
    }

    iluminarSecuencia(){
        for(let i = 0; i < this.nivel; i++){
            const color = this.transformarNumeroAColor(this.secuencia[i])
            console.log(color)
            setTimeout(()=> this.iluminarColor(color), 1000 * i) 
        }
    }

    iluminarColor(color){
        /* console.log(this.colores) */
        /* console.log(this.colores[color]) */
        this.colores[color].classList.add('light');
        setTimeout(() => this.apagarColor(color) , 550);
        console.log(this.colores[color])
    }

    apagarColor(color){
        this.colores[color].classList.remove('light')
    }

    EventosAlCkick(){
        this.colores.azul.addEventListener('click', this.elegirColor.bind(this))
        this.colores.morado.addEventListener('click', this.elegirColor.bind(this))
        this.colores.naranja.addEventListener('click', this.elegirColor.bind(this))
        this.colores.verde.addEventListener('click', this.elegirColor.bind(this))
    }

    elegirColor(e){
        console.log(this)
    }

}

function empezarJuego(){
        window.juego = new Juego()
    
}