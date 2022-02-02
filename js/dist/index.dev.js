"use strict";

//este bloque de codigo es para establecer en el localStorage el valor de la categoria (1,2,3)
//que se seleccione en la pagina principal
function fCategoriaAretes() {
  // let valor = categoriaAretes.innerText.toLowerCase()
  localStorage.setItem("lscategoria", 1);
}

function fcategoriaCollares() {
  localStorage.setItem("lscategoria", 2);
}

function fcategoriaPulseras() {
  localStorage.setItem("lscategoria", 3);
} //desafio complementario: animaciones con jquery


$("#contenedorMensaje_1").mouseenter(function () {
  $("#eventoMensaje_1").fadeIn("slow"); // .slideDown("fast")        

  $(".imagenCate_1").css("opacity", "0.6");
});
$("#contenedorMensaje_1").mouseleave(function () {
  $("#eventoMensaje_1") // .hide()            
  .fadeOut("slow");
  $(".imagenCate_1").css("opacity", "1");
});
$("#contenedorMensaje_2").mouseenter(function () {
  $("#eventoMensaje_2").fadeIn("slow"); // .slideDown("fast")

  $(".imagenCate_2").css("opacity", "0.6");
});
$("#contenedorMensaje_2").mouseleave(function () {
  $("#eventoMensaje_2") // .hide()            
  .fadeOut("slow");
  $(".imagenCate_2").css("opacity", "1");
});
$("#contenedorMensaje_3").mouseenter(function () {
  $("#eventoMensaje_3").fadeIn("slow"); // .slideDown("fast")

  $(".imagenCate_3").css("opacity", "0.6");
});
$("#contenedorMensaje_3").mouseleave(function () {
  $("#eventoMensaje_3").fadeOut("slow"); // .hide()            

  $(".imagenCate_3").css("opacity", "1");
});
$("#eventoMensaje_1").hide();
$("#eventoMensaje_2").hide();
$("#eventoMensaje_3").hide();