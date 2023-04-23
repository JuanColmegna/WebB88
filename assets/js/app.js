// Abrir - Cerrar (MENU)

const noScroll = document.querySelector("#html");
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


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

