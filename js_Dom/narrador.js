const d = document,
    w = window;
export default function speedReader() {
    const $select = d.getElementById("speed-select"),
    $textArea = d.getElementById("speed-text"),
    $btnSpeed = d.getElementById("speed-btn"),
    speechMessage = new SpeechSynthesisUtterance()

    let voices =[] 
    //console.log(w.speechSynthesis.getVoices()) Con este metodo podemos obtener las voces
    // Pero tenemos que ejecutarlo dentro de el evento voiceschanged!!

    d.addEventListener('DOMContentLoaded', (e) =>{
        //En este evento podemos ejecutar el w.speechSynthesis.getVoices() para asi poder obtener las voces de nuestro ordenador
        w.speechSynthesis.addEventListener("voiceschanged",e =>{
            voices = speechSynthesis.getVoices()
            //console.log(voices)
            
            //Por cada voz reconocida le vamos a crear un option y se lo agregamos a nuestro select

            voices.forEach(voice =>{
             const $option = d.createElement("option")
             $option.value = voice.name;
             $option.textContent = `${voice.name} -> ${voice.lang}`
             $select.appendChild($option)
            })
        })
    })
    d.addEventListener('change', (e) =>{
        if (e.target === $select) {
            speechMessage.voice = voices.find((voice) =>voice.name === e.target.value)
            
        }
    })
    d.addEventListener('click', (e) =>{
        if (e.target === $btnSpeed) {
            speechMessage.text = $textArea.value;
            w.speechSynthesis.speak(speechMessage)
        }
    })
}