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
}

//desafio complementario: animaciones con jquery
let contenedorMensaje_1 = $("#contenedorMensaje_1");
let eventoMensaje_1 = $("#eventoMensaje_1");
contenedorMensaje_1.mouseenter(function () {
  eventoMensaje_1.fadeIn("slow");
  // eventoMensaje.show();
  $(".imagenCate_1").css("opacity", "0.6");
});

contenedorMensaje_1.mouseleave(function () {
  eventoMensaje_1.fadeOut("slow");
  // eventoMensaje_1.hide();
  $(".imagenCate_1").css("opacity", "1");
});

let contenedorMensaje_2 = $("#contenedorMensaje_2");
let eventoMensaje_2 = $("#eventoMensaje_2");
contenedorMensaje_2.mouseenter(function () {
  eventoMensaje_2.fadeIn("slow");
  // eventoMensaje.show();
  $(".imagenCate_2").css("opacity", "0.6");
});

contenedorMensaje_2.mouseleave(function () {
  eventoMensaje_2.fadeOut("slow");
  // eventoMensaje_2.hide();
  $(".imagenCate_2").css("opacity", "1");
});

let contenedorMensaje_3 = $("#contenedorMensaje_3");
let eventoMensaje_3 = $("#eventoMensaje_3");
contenedorMensaje_3.mouseenter(function () {
  eventoMensaje_3.fadeIn("slow");
  // eventoMensaje_3.show();
  $(".imagenCate_3").css("opacity", "0.6");
});

contenedorMensaje_3.mouseleave(function () {
  eventoMensaje_3.fadeOut("slow");
  // eventoMensaje_3.hide();
  $(".imagenCate_3").css("opacity", "1");
});

eventoMensaje_1.hide();
eventoMensaje_2.hide();
eventoMensaje_3.hide();
