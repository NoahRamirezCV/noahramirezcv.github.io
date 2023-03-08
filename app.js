//MENU LATERAL
var menu_visible = false;
let menu = document.getElementById("nav")
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
    menu.style.display = "none";
    menu_visible = false; 
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

// Barras identificadas por su id
function crearBarra(id_barra){
    for(i=0;i<=19;i++){
        let div = document.createElement("div");  
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//Selecciono todas las barras para luego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let corelpainter = document.getElementById("corelpainter");
crearBarra(corelpainter);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let php = document.getElementById("php");
crearBarra(php);
let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);

let contadores = [-1,-1,-1,-1,-1,-1];

let entro = false
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html,19, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript,15, 1, intervalJavascript);
        },100);
        const intervalCorelPainter = setInterval(function(){
            pintarBarra(corelpainter,16, 2, intervalCorelPainter);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop,18, 3, intervalPhotoshop);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(php,14, 4, intervalPhp);
        },100);
        const intervalIlustrator = setInterval(function(){
            pintarBarra(ilustrator,19, 5, intervalIlustrator);
        },100);

    } 
}
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#d60505"
    }else{
        clearInterval(interval)
    }
}
//Detector del scrolling del mouse para las barras
window.onscroll = function(){
    efectoHabilidades();
}