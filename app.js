//Obteniendo elementos HTML
const boton = document.getElementById('btnEmpezar');
const azul = document.getElementById('azul');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const morado = document.getElementById('morado');
const score = document.getElementById('score')
const ULTIMO_NIVEL = 10;


class Juego{
    constructor(){
        this.inicializar = this.inicializar.bind(this)
        this.inicializar()
        this.secuenciaNumero()

        setTimeout(this.siguienteNivel,500)
    }
    
    inicializar(){
        this.toggleboton()
        this.siguienteNivel = this.siguienteNivel.bind(this)
        this.elegirColor = this.elegirColor.bind(this)
        /* this.secuenciaNumero() */
        this.nivel = 1
        this.colores = {
            azul,
            naranja,
            verde,
            morado
        }
    }

    toggleboton(){
        if(boton.classList.contains('hide')){
            boton.classList.remove('hide')
        } else {
            boton.classList.add('hide')
        }
    }
    
    secuenciaNumero(){
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map((n)=> Math.floor(Math.random() * 4))
    }

    siguienteNivel(){
        this.numeroDeAciertos = 0
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

    transformarColorANumero(color){
        switch (color) {
            case 'azul':
                return 0
            case 'morado':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
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
        setTimeout(() => this.apagarColor(color), 350);
        //console.log(this.colores[color])
    }

    apagarColor(color){
        this.colores[color].classList.remove('light')
    }

    EventosAlCkick(){
        this.colores.azul.addEventListener('click', this.elegirColor)
        this.colores.morado.addEventListener('click', this.elegirColor)
        this.colores.naranja.addEventListener('click', this.elegirColor)
        this.colores.verde.addEventListener('click', this.elegirColor)
    }

    eliminarEventosAlClick(){
        this.colores.azul.removeEventListener('click', this.elegirColor)
        this.colores.morado.removeEventListener('click', this.elegirColor)
        this.colores.naranja.removeEventListener('click', this.elegirColor)
        this.colores.verde.removeEventListener('click', this.elegirColor)
    }

    elegirColor(event){
        //console.log(event)
        this.colores.azul.classList.add('cursor')
        this.colores.morado.classList.add('cursor')
        this.colores.naranja.classList.add('cursor')
        this.colores.verde.classList.add('cursor')

        const nombreColor = event.target.dataset.color
        const numeroColor = this.transformarColorANumero(nombreColor);
        this.iluminarColor(nombreColor);
        
        if(numeroColor === this.secuencia[this.numeroDeAciertos]){
            this.numeroDeAciertos++;
            score.innerHTML = this.numeroDeAciertos
            console.log(this.numeroDeAciertos)
            
            if(this.numeroDeAciertos == this.nivel){
                this.nivel++
                console.log(`Nivel: ${this.nivel}`)
                this.eliminarEventosAlClick();
                if(this.nivel == (ULTIMO_NIVEL + 1) ){
                    this.ganoElJuego();
                }
                else{
                    swal('Correcto!', `Pasas al nivel: ${this.nivel}`)
                    setTimeout(this.siguienteNivel, 2000)
                }
            } 
        } else {
            this.perdioElJuego()
        }
    }

    ganoElJuego() {
        swal( "Ganaste", 'Felicidades!', 'success')
        .then(()=> {
            this.inicializar})
    }
    
    perdioElJuego(){
        swal('Perdiste', 'Lo sentimos :/ ','error', {
            className: 'swal-modal'
        })
        .then(() => {
            this.eliminarEventosAlClick()
            this.inicializar()    
        })
    }

}

function empezarJuego(){
        window.juego = new Juego()
}