//Selecionamos el elemento del HTML
let tarjetas = document.querySelector("#contenedorCards");

//Obtengo la data
fetch("/js/data.json")
  .then((respuesta) => respuesta.json())

  .then(data => {
    crearCard(data);
  });


//Funcion para crear todas las cards 
function crearCard(data) {
  //console.log(data);
  tarjetas.innerHTML = ""
  for (let valor of data) {
    //console.log(valor.nombre)
    tarjetas.innerHTML += `     
      <div class="col-md-3 my-3"> 
        <div class="card filtro ${valor.categoria} ">
              <img src="${valor.imagen}" class="card-img-top my-2" alt="..." style="width: 100px; height:100px; margin:auto">
          <div class="card-body">
              <h5 class="card-title text-center">${valor.nombre}</h5>                          
            <div class="progress">
                 <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ${valor.porcentaje}">${valor.porcentaje}</div>
              </div>
            </div>                            
          </div>
        </div>
      </div>            
    `
  }
}

//Filtra do por categorias
$(document).ready(function () {
// Menu principal
  $('.navbar-nav li a').click(function() {

        $('.navbar-nav li a').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    });

    // Menu habilidades
  $('.menuActivo li').click(function() {

        $('.contenedor ul li').removeClass('bg-success');

        var $this = $(this);
        if (!$this.hasClass('bg-success')) {
            $this.addClass('bg-success');
        }
    });

// filtro habilidades
  $('.enlaces').click(function (e) {
    e.preventDefault();
    var valor = $(this).attr('data-categoria');

    if (valor == 'todos') {
      $('.filtro').show('1000');
    } else {
      $('.filtro').not('.' + valor).hide('1000');
      $('.filtro').filter('.' + valor).show('1000');
    }
  })

  //Volver al inicio
  let inicio = $(".volver-arriba");
  inicio.click(function (e) {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
  inicio.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1200) {
      inicio.fadeIn();
    } else {
      inicio.fadeOut();
    }
  });
});

