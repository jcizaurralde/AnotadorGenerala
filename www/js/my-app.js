  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {path: '/juego/', url: 'juego.html',},
      {path: '/index/', url: 'index.html',},
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');
var nombre1 = "";
var nombre2 = "";
var seleccion ="";
var seleccion2="";


// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="juego"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("vista juego");

    /* JUAN: Le indicamos que escriba el nombre de cada jugador*/
    $$('#J1').html('<p>'+nombre1+'</p>');
    $$('#J2').html('<p>'+nombre2+'</p>');

    /* JUAN: Agrego la funcion, cuando tocamos cada input para luego enviar valor de los dados en EnviaValor*/
    $$('#J11').on('click', fnSeleccionaValorDadosJ1 ('11'));
    $$('#J12').on('click', fnSeleccionaValorDadosJ1 ('12'));
    $$('#J13').on('click', fnSeleccionaValorDadosJ1 ('13'));
    $$('#J14').on('click', fnSeleccionaValorDadosJ1 ('14'));
    $$('#J15').on('click', fnSeleccionaValorDadosJ1 ('15'));
    $$('#J16').on('click', fnSeleccionaValorDadosJ1 ('16'));

    $$('#J17').on('click', fnSeleccionaValorJuegosJ1 ('17'));
    $$('#J18').on('click', fnSeleccionaValorJuegosJ1 ('18'));
    $$('#J19').on('click', fnSeleccionaValorJuegosJ1 ('19'));
    $$('#J20').on('click', fnSeleccionaValorJuegosJ1 ('20'));
    $$('#J21').on('click', fnSeleccionaValorJuegosJ1 ('21'));

    $$('#J22').on('click', fnSeleccionaValorDadosJ2 ('22'));
    $$('#J23').on('click', fnSeleccionaValorDadosJ2 ('23'));
    $$('#J24').on('click', fnSeleccionaValorDadosJ2 ('24'));
    $$('#J25').on('click', fnSeleccionaValorDadosJ2 ('25'));
    $$('#J26').on('click', fnSeleccionaValorDadosJ2 ('26'));
    $$('#J27').on('click', fnSeleccionaValorDadosJ2 ('27'));

    $$('#J28').on('click', fnSeleccionaValorJuegosJ2 ('28'));
    $$('#J29').on('click', fnSeleccionaValorJuegosJ2 ('29'));
    $$('#J30').on('click', fnSeleccionaValorJuegosJ2 ('30'));
    $$('#J31').on('click', fnSeleccionaValorJuegosJ2 ('31'));
    $$('#J32').on('click', fnSeleccionaValorJuegosJ2 ('32'));

    

    /* JUAN: Agrego el boton terminar para que llame a funcion */
    $$('#btnTerminar').on('click', fnMuestraGanador);
    });

$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("vista index")

    $$('#btnJugar').on('click', fnTomarNombres);
   
    
    });


function fnTomarNombres() {
    nombre1 = $$('#nombre1').val();
    nombre2 = $$('#nombre2').val();
  
    mainView.router.navigate('/juego/');
}


//---------------------------- FUNCIONES DADOS------------------------------------------------------

/* JUAN: Aca hago una funcion que lo que hace, es del documento juego.html, toma "seleccion" que es el formulario
de opciones del popup, recorre todos los boton radio (que tienen el name=opcion), y le decimos que si hay una opcion
con el valor "checked" (el radio seleccionado), que la guarde en una variable global "seleccion". Luego se lo
enviamos a #J11 como valor para que quede en el div
DAI: agregue un if/else para poder agregar las opciones del otro pop-up, el de las categorias armadas*/


//---------------------------- JUGADOR 1

function fnSeleccionaValorDadosJ1(num) {
  $$('#btnCerrar').on('click', fnEnviaValorDadosJ1(num));
}

function fnEnviaValorDadosJ1(num) {
  for (var i = 0; i < document.seleccion.opcion.length; i++) {
    if (document.seleccion.opcion[i].checked)
      break;
  }
  seleccion = document.seleccion.opcion[i].value
  $$('#J'+ num).val(seleccion);
}

//---------------------------- JUGADOR 2

function fnSeleccionaValorDadosJ2(num) {
  $$('#btnCerrar').on('click', fnEnviaValorDadosJ2(num));
}

function fnEnviaValorDadosJ2(num) {
  for (var i = 0; i < document.seleccion.opcion.length; i++) {
    if (document.seleccion.opcion[i].checked)
      break;
  }
  seleccion = document.seleccion.opcion[i].value
  $$('#J' + num).val(seleccion);
}

//---------------------------- FUNCIONES JUEGOS ARMADOS-------------------------------------

//---------------------------- JUGADOR 1

function fnSeleccionaValorJuegosJ1(num) {
  $$('#btnCerrar2').on('click', fnEnviaValorJuegosJ1(num));
}

function fnEnviaValorJuegosJ1(num) {
  for (var i = 0; i < document.seleccion2.opcion2.length; i++) {
    if (document.seleccion2.opcion2[i].checked)
      break;
  }
  seleccion2 = document.seleccion2.opcion2[i].value
  $$('#J' + num).val(seleccion2);
}

//---------------------------- JUGADOR 2

function fnSeleccionaValorJuegosJ2(num) {
  $$('#btnCerrar2').on('click', fnEnviaValorJuegosJ2(num));
}

function fnEnviaValorJuegosJ2(num) {
  for (var i = 0; i < document.seleccion2.opcion2.length; i++) {
    if (document.seleccion2.opcion2[i].checked)
      break;
  }
  seleccion2 = document.seleccion2.opcion2[i].value
  $$('#J' + num).val(seleccion2);
}


// --------------------------FUNCION MUESTRA GANADOR-------------------------------------------

function fnMuestraGanador() {
  /* JUAN: ACA DEBERIA MOSTRAR EL MENSAJE DEL GANADOR, RECIBIENDO ALGUN PARAMETRO... Se podria imprimir un DIV
  con el mensaje en Juego.html (Con un OK, que si lo toco va al index nuevamente)*/
  /*ACA PODRIA CARGAR LA VISTA DEL INDEX: mainView.router.navigate('/index/');*/
}
