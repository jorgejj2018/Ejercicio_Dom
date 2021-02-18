let d = document,
    n = navigator,
    ua = n.userAgent;

export default function userAgent(id){
    const $id = d.getElementById(id),
    isMobile = {
    android: () => ua.match(/android/i),
    ios: () => ua.match(/iphone|ipad|ipod/i),
    windows: () => ua.match(/windows phone/i),
    any: function (){
        return this.android()||this.ios()||this.windows();
        },
    },
    isDesktop = {
    linux: () => ua.match(/linux/i),
    mac: () => ua.match(/mac os/i),
    windows: () => ua.match(/windows nt/i),
    any: function (){
        return this.linux()||this.mac()||this.windows();
        },
    },
    isBrowser = {
    chrome: () => ua.match(/chrome/i),
    safari: () => ua.match(/safari/i),
    opera: () => ua.match(/opera|opera mini/i),
    firefox: () => ua.match(/firefox/i),
    edge: () => ua.match(/edg/i),
    ie: () => ua.match(/msie|iemobile/i),
    any: function (){
        return (
        this.chrome()||
        this.safari()||
        this.opera()||
        this.firefox()||
        this.edge()||
        this.ie()
        )
        },    
    }

    $id.innerHTML= `
             <h2>User Agent:<em> ${ua}</em> </h2>
             <br>
             <h2>Plataforma:<em> ${isMobile.any()?isMobile.any():isDesktop.any()}</em></h2>
             <br>
             <h2>Navegador:<em> ${isBrowser.any()}</em></h2>
        
    `

    //Tambien podemos hacer Redireccionamientos a Sitios Especificos
    
    if(isMobile.any())window.location.href = "https://www.youtube.com/watch?v=WHfyN411fd4&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=93"
    
    //Como Tambien Podemos Colocar Contenido Exclusivo

    if(isBrowser.chrome())$id.innerHTML += `<h2>Exclusivo:<em>Contenido Solo Para Chrome</em></h2>`
    if(isBrowser.edge())$id.innerHTML += `<h2>Exclusivo:<em>Contenido Solo Para EDGE</em></h2>`
}