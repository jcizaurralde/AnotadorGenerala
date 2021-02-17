  
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

    /* JUAN: Agrego la funcion para enviar valor seleccionado del popup, cuando tocamos "Cerrar" */
    $$('#btnCerrar').on('click', fnEnviaValorDados);
    $$('#btnCerrar2').on('click', fnEnviaValorJuegos);

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

  function fnMuestraGanador() {
    /* JUAN: ACA DEBERIA MOSTRAR EL MENSAJE DEL GANADOR, RECIBIENDO ALGUN PARAMETRO... Se podria imprimir un DIV
    con el mensaje en Juego.html (Con un OK, que si lo toco va al index nuevamente)*/
    /*ACA PODRIA CARGAR LA VISTA DEL INDEX: mainView.router.navigate('/index/');*/
  }


  /* JUAN: Aca hago una funcion que lo que hace, es del documento juego.html, toma "seleccion" que es el formulario
  de opciones del popup, recorre todos los boton radio (que tienen el name=opcion), y le decimos que si hay una opcion
  con el valor "checked" (el radio seleccionado), que la guarde en una variable global "seleccion". Luego se lo
  enviamos a #J11 como valor para que quede en el div
  DAI: agregue un if/else para poder agregar las opciones del otro pop-up, el de las categorias armadas*/
  function fnEnviaValorDados() {
    for (var i = 0; i < document.seleccion.opcion.length; i++) {
      if (document.seleccion.opcion[i].checked)
        break;
    }
    seleccion = document.seleccion.opcion[i].value
    $$('#J11').val(seleccion);
  }

  /*JUAN: Dai, saque el if/else, porque no funcionaba correctamente, ponia los valores directamente siempre en el popup2
  entonces arme una funcion aparte para los juegos armados ... si elegia los dados, igualmente me ponia puntaje en 
  escalera por ejemplo */
  function fnEnviaValorJuegos() {
    for (var i = 0; i < document.seleccion2.opcion2.length; i++) {
      if (document.seleccion2.opcion2[i].checked)
        break;
    }
    seleccion2 = document.seleccion2.opcion2[i].value
    $$('#J17').val(seleccion2);
}

/* HABRIA QUE HACER UN FOR PARA QUE RECORRA DESDE EL J11 (PARA EL JUGADOR 1) Y J22 (PARA EL JUGADOR 2)
SUMANDO DE UNO EN UNO J11...J12...J13, PARA QUE PODAMOS ENVIARLES LOS VALORES A TODOS ESOS INPUTS QUE FALTAN */

