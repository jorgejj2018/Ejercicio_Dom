const d = document,
    w = window;

export default function clipInteligent(){
const $videosI = d.querySelectorAll('video[data-videoI]')
const cb = (entries)=>{
entries.forEach((entry) =>{
    if (entry.isIntersecting) {
        entry.target.play()
    }
    else{
        entry.target.pause()
    }

    w.addEventListener("visibilitichange" , e =>
    d.visibilityState === "visible" 
    ?entry.target.play()
    :entry.target.pause()
    )
})
}    
const observador = new IntersectionObserver(cb,{threshold: 0.9})

$videosI.forEach(el => observador.observe(el))
}