//este bloque de codigo es para establecer en el localStorage el valor de la categoria (1,2,3)
//que se seleccione en la pagina principal
function fCategoriaAretes(){
    // let valor = categoriaAretes.innerText.toLowerCase()
    localStorage.setItem('lscategoria',1);    
};

function fcategoriaCollares(){
    localStorage.setItem('lscategoria',2);    
};

function fcategoriaPulseras(){
  localStorage.setItem('lscategoria',3);
};

