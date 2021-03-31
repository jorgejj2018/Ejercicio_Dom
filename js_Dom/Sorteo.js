const d = document;

export default function draw(btn,selector){
    const $btn = d.getElementById(btn),
    ganador = (selector) =>{
    let $players = d.querySelectorAll(selector),
    random = Math.floor(Math.random() *$players.length),
    winner = $players[random]
    return `El Ganador Es ${winner.textContent}`;
    }

    d.addEventListener('click' , (e) =>{
        if (e.target === $btn) {
            let result = ganador(selector)
            alert(result);
        }
    })



}

// funcion de sorteo de redes sociales Proximamente

