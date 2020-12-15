const d = document;

export default function countDown (id,date,textTime){
const $countdown = d.getElementById(id),
    countdownDate = new Date(date).getTime();

    let countDownTempo = setInterval(() => {
        let now = new Date().getTime(),
            limitTime = countdownDate - now,
            day = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
            hours = 
            ('0' + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2),
            minutes =
            ('0' + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2),
            seconds =
            ('0' + Math.floor(limitTime % (1000 * 60 ) / (1000))).slice(-2);

        $countdown.innerHTML= `<h2>Faltan: Dias${day} Horas${hours} Minutos${minutes} Segundos${seconds}</h2>`
        console.log(countdownDate,now,limitTime)
        
        if(limitTime <= 0 ){
            clearInterval(countDownTempo)
            $countdown.innerHTML = `<h3>Que Esperas?</h3>`
            const $btnMsj = d.createElement('button')
            $btnMsj.innerText = 'Abir'
            $btnMsj.classList.toggle('openMsj')
            $countdown.appendChild($btnMsj)
        }

    },1000);

    d.addEventListener('click', e =>{
        if(e.target.matches('.openMsj')){
            $countdown.innerHTML = `<h3>${textTime}</h3>`
        }
    })


}