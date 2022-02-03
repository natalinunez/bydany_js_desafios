"use strict";

function fCategoriaAretes() {
  // let valor = categoriaAretes.innerText.toLowerCase()
  localStorage.setItem("lscategoria", 1);
}

function fcategoriaCollares() {
  localStorage.setItem("lscategoria", 2);
}

function fcategoriaPulseras() {
  localStorage.setItem("lscategoria", 3);
} //forma corta par el método ready


$(function () {
  var carrito = []; //obtenemos el localStorage

  function obtenerStorage(clave) {
    var valor = JSON.parse(localStorage.getItem(clave));
    console.log("obtenerStorage - paso x 1 ".concat(valor));
    return valor;
  } //para actualizar el localStorage


  function guardarStorage(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
  }

  if (obtenerStorage('carrito')) {
    carrito = obtenerStorage('carrito');
  } else {
    alert('No hay nada en el carrito');
  } //cargamo el carrito en HTML


  function renderCarrito() {
    console.log("renderCarrito: ".concat(carrito.length));
    var i = 0; //limpiamos el tbody para que no se acumule lo anaterior al realizar la recarga

    $(".tbody").empty();
    carrito.map(function (item) {
      i++;
      $(".tbody").append("      \n            <tr class=\"ItemCarrito\">\n              <td scope=\"row\">".concat(i, "</td>\n              <td class=\"table__productos\">                \n                <h6 class=\"title\">").concat(item.nombre, "</h6>\n              </td>\n              <td class=\"table__price\">\n                <p>").concat(item.precio, "</p>\n              </td>\n              <td class=\"\">                                                               \n                <button id=\"btnMinus").concat(item.id, "\" class=\"btn botonCantiCarrito \">-</button>\n                  <span>").concat(item.cantidad, "</span>\n                <button id=\"btnPlus").concat(item.id, "\" class=\"btn botonCantiCarrito \">+</button>\n              </td>             \n              <td class=\"precioxcantidad \">\n                <p class=\"colorAzul \">").concat(item.precioxcantidad, "</p>\n              </td>\n              <td>\n                <button type=\"button\" class=\"delete btn btn-danger botonEliminar\">X</button>    \n              </td>\n            </tr>\n      "));
      $(".delete").on("click", function (e) {
        removeItemCarrito(e);
      });
      $("#btnPlus" + item.id).on("click", function (e) {
        item.cantidad = item.cantidad + 1;
        CarritoTotal();
      });
      $("#btnMinus" + item.id).on("click", function (e) {
        if (item.cantidad >= 1) {
          if (item.cantidad > 1) {
            item.cantidad = item.cantidad - 1;
          }

          CarritoTotal();
        }
      });
    });
  } //Sumatoria total de todo el carrito


  function CarritoTotal() {
    var Total = 0;
    var itemCartTotal = document.querySelector('.itemCartTotal');
    carrito.forEach(function (item) {
      var precio = item.precio;
      item.precioxcantidad = item.precio * item.cantidad;
      Total = Total + precio * item.cantidad;
      console.log("Total=".concat(Total));
    });
    itemCartTotal.innerHTML = "Total $ ".concat(Total);
    guardarStorage('carrito', carrito);
    renderCarrito();
  }

  renderCarrito();
  CarritoTotal(); //eliminar un registro del carrito

  function removeItemCarrito(e) {
    var buttonDelete = e.target;
    var tr = buttonDelete.closest(".ItemCarrito");
    var title = tr.querySelector('.title').textContent;
    console.log("len=".concat(carrito.length));

    for (var i = 0; i < carrito.length; i++) {
      if (carrito[i].nombre.trim() === title.trim()) {
        carrito.splice(i, 1);
        break;
      }
    }

    tr.remove();
    guardarStorage('carrito', carrito);
    CarritoTotal();
    renderCarrito();
  }
});