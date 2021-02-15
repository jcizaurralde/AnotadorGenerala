  
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
    console.log("vista juego")

    /* JUAN: Agrego el boton terminar para que llame a funcion */
    $$('#btnTerminar').on('click', fnMuestraGanador);

    })

$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("vista index")

    $$('#btnJugar').on('click', fnTomarValores);
    /* JUAN: Cambie el btn Jugar de lugar, estaba en juego.html*/
    
    })


  function fnTomarValores() {
      nombre1 = $$('#nombre1').val();
      nombre2 = $$('#nombre2').val();
  
      mainView.router.navigate('/juego/');
  }

  function fnMuestraGanador() {
    /* JUAN: ACA DEBERIA MOSTRAR EL MENSAJE DEL GANADOR, RECIBIENDO ALGUN PARAMETRO... Se podria imprimir un DIV
    con el mensaje en Juego.html (Con un OK, que si lo toco va al index nuevamente)*/
    /*ACA PODRIA CARGAR LA VISTA DEL INDEX: mainView.router.navigate('/index/');*/
  }