const d = document,
        n = navigator;

export default function geo(id){
    const $id = d.getElementById(id),
    options = {
        enableHighAccuracy:true,
        Timeout:5000,
        maximumAge:0,
    };

    const success = (position)=>{
        let coords = position.coords;
        //console.log(position);

        $id.innerHTML = `
        <p></p>
        <ul>
        <li>Latitud:<b>${coords.latitude}</b></li>
        <li>Latitud:<b>${coords.longitude}</b></li>
        <li>Latitud:<b>${coords.accuracy}</b></li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z"
         target="_blank" rel="noopener"> Ver En Google Maps</a>
        `;
    }
    const error = (err)=>{
        $id.innerHTML = `
        <p><b>Error ${err.code} ${err.message}</b></p>
        `;
    }

    n.geolocation.getCurrentPosition(success,error,options)
}