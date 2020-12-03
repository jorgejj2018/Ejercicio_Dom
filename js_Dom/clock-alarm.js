const d = document;

export function clock(clock,btnPlay,btnStop){
    let intervalClok;
    d.addEventListener('click', e =>{
        console.log(e.taget)
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

export function clockAlarm(clock,btnPlay,btnStop){
    let audioAlarm = `<audio src="/asset/alarm.mp3"autoplay></audio>`;
    let imgAlarm = `<img src="/asset/alarm.jpg" class= "img-alarm">`
    let timeOut;
    let endTimOut;

    const $bgAlamr = d.querySelector('#seccion1')
    
    d.addEventListener('click', e =>{
        
        if (e.target.matches(btnPlay)){
           timeOut = setTimeout(() =>{
                d.querySelector(clock).innerHTML = `${audioAlarm}`;
                $bgAlamr.style.backgroundImage= 'url("/asset/alarm.jpg")';
                $bgAlamr.style.backgroundRepeat= 'no-repeat';
                $bgAlamr.style.backgroundSize= 'cover';
                /* endTimOut = setInterval(() => {
                    d.querySelector(clock).innerHTML = `${audioAlarm}`;
                },30000);; */
            })
            e.target.disabled = true;
            d.querySelector('#clock-start').disabled = true;
            d.querySelector('#clock-stop').disabled = true;
                console.log($bgAlamr)
                
        }
        if(e.target.matches(btnStop)){
            clearTimeout(timeOut)
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
            d.querySelector('#clock-start').disabled = false;
            d.querySelector('#clock-stop').disabled = false;
            $bgAlamr.style.backgroundImage=null;
            $bgAlamr.style.backgroundRepeat= null;
            $bgAlamr.style.backgroundSize= null;
        }
        
    })
}