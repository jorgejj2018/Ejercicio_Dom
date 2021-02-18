let d = document;

export default function ResponsTester(nameForm){
    const $form = d.getElementById(nameForm);
    let tester;

    d.addEventListener("submit", (e) =>{
        if(e.target === $form){
            e.preventDefault();
        tester = window.open($form.direccion.value, 'Tester-Responsive' , `innerWidth= ${$form.ancho.value}, innerHeight= ${$form.alto.value}`);
        }
    })

    d.addEventListener('click', (e) =>{
        if(e.target === $form.cerrar)tester.close()
    })
}