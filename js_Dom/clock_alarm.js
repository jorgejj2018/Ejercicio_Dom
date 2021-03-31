const d = document;

export function clock(clock,btnPlay,btnStop){
    let intervalClok;
    d.addEventListener('click', e =>{
       // console.log(e.taget)
        if (e.target.matches(btnPlay)) {
            intervalClok = setInterval(() => {
                let clockHr = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHr}<h3>`;
            },1000);
            e.target.disabled = true;
            d.querySelector('#alarm-start').disabled = true;
            d.querySelector('#alarm-stop').disabled = true;
        }
        if (e.target.matches(btnStop)) {
            clearInterval(intervalClok);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false
            d.querySelector('#alarm-start').disabled = false;
            d.querySelector('#alarm-stop').disabled = false;
        }
    })

}

export function clockAlarm(sound,btnPlay,btnStop){
    let $audioAlarm = d.createElement('audio')
    let $urlImg = './asset/alarm.jpg'
    let timeOut;
    let endTimOut;
    
    const $bgAlamr = d.querySelector('#seccion1')
    
    d.addEventListener('click', e =>{
        
        if (e.target.matches(btnPlay)){
           timeOut = setTimeout(() =>{
                $audioAlarm.src = sound;
                $audioAlarm.autoplay = true;
                $bgAlamr.style.backgroundImage= `url(${$urlImg})`;
                $bgAlamr.style.backgroundSize= 'cover';
                endTimOut = setInterval(() => {
                    $audioAlarm.src = sound;
                    $audioAlarm.autoplay = true;
                },30000);;
            })
            e.target.disabled = true;
            d.querySelector('#clock-start').disabled = true;
            d.querySelector('#clock-stop').disabled = true;
                console.log($bgAlamr)
                
        }
        if(e.target.matches(btnStop)){
            clearTimeout(timeOut)
            clearInterval(endTimOut)
            $audioAlarm.pause();
            $audioAlarm.currentTime = 0;
            d.querySelector(btnPlay).disabled = false;
            d.querySelector('#clock-start').disabled = false;
            d.querySelector('#clock-stop').disabled = false;
            $bgAlamr.style.backgroundImage=null;
            $bgAlamr.style.backgroundSize= null;
        }
        
    })
}