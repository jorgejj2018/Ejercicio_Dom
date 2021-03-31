const d = document;

export default function scrollSpy() {
    const $seccion = d.querySelectorAll('section[data-scroll-spy]');

    const cb = (entries) =>{
        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id")
            //console.log(entry)
            
            if (entry.isIntersecting) {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).
                classList.add('active')
            }
            else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).
                classList.remove('active')
            }
        })
    }

    const observador = new IntersectionObserver(cb,{
        //root
        //rootMargin esta opcion nos permite calcular en pixel
        threshold: 0.5, // esta opcion nos permite calcular en porcentaje 

    })

    $seccion.forEach((el) => observador.observe(el))

}