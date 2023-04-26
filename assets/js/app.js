// Abrir - Cerrar (MENU)

const noScroll = document.querySelector("#body");
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

//quitar el scroll cuando el menu esté abierto

abrir.addEventListener("click", ()=> {
    nav.classList.add("visible");
    noScroll.classList.add("no-scroll");
})

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible");
    noScroll.classList.remove("no-scroll");
})

// Abrir - Cerrar (Sumate)

const sumate = document.querySelector("#formulario-sumate")
const sumateAbrir = document.querySelector("#title-button")
const sumateCerrar = document.querySelector("#boton-cerrar-sumate");

sumateAbrir.addEventListener("click", ()=> {
    sumate.classList.add("visible");
})

sumateCerrar.addEventListener("click", ()=>{
    sumate.classList.remove("visible");
})

// carrousel

const carrousel = document.querySelector(".contenedor-carrousel");
const logos = document.querySelectorAll('.boton');

//Saber la posición de cada punto
logos.forEach((cadaLogo, i)=>{
    logos[i].addEventListener('click', ()=>{
        let posicion = i;
        let operacion = posicion * -25;

        carrousel.style.transform = `translateX(${operacion}%)`

        logos.forEach( (cadaLogo, i)=>{
            logos[i].classList.remove('activo')
        })
        logos[i].classList.add('activo');
    })
})

//muatic
    /** This section is only needed once per page if manually copying **/
    if (typeof MauticSDKLoaded == 'undefined') {
        var MauticSDKLoaded = true;
        var head            = document.getElementsByTagName('head')[0];
        var script          = document.createElement('script');
        script.type         = 'text/javascript';
        script.src          = 'https://mail.barrio88.com.ar/media/js/mautic-form.js';
        script.onload       = function() {
            MauticSDK.onLoad();
        };
        head.appendChild(script);
        var MauticDomain = 'https://mail.barrio88.com.ar';
        var MauticLang   = {
            'submittingMessage': "Please wait..."
        }
    }else if (typeof MauticSDK != 'undefined') {
        MauticSDK.onLoad();
    }