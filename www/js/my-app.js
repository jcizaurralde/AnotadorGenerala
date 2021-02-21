// If we need to use custom DOM library, let's save it to $$ variable:
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
var Casilla = "";
var valorBase = 0;
var valorTotalJ1 = 0;

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
    $$('#n1').html('<p>'+nombre1+'</p>');
    $$('#n2').html('<p>'+nombre2+'</p>');
    //FUNCIONA NO TOCAR.
    $$('.popup-open').on('click', fnCasilla);
    $$('.game').on('click', fnPonerValorBase);
    //$$('.total').on('click', fnMostrarTotal);

    function fnCasilla (){
      Casilla = this.id;
      console.log('Entre en esta casilla'+Casilla);

    }

        $$('.my-popup').on('popup:opened', function(){
          console.log('Vista PopUp1');
          $$('.Dado').on('click', function fnValor(){
            datoElegido = this.id;
            console.log('Estoy poniendo este dato' +datoElegido);
            $$('#dt'+Casilla).val(datoElegido);
          });
        });
    //-----------------------

      $$('.my-popup2').on('popup:opened', function(){
        console.log('Vista PopUp2');
       
        $$('.Jugada').on('click', function fnValor(){
              valorElegido = this.value;
                if (isNaN(valorElegido)){
                  $$('#dt'+Casilla).val(valorElegido);
                  }else {
                    $$('#dt'+Casilla).val(parseInt(valorElegido) + parseInt(valorBase));
                  }
             });
      });
    });

    function fnPonerValorBase(){
      valorBase = $$(this).attr('valorBase');
    }
    /*function fnMostrarTotal(){
      valorTotalJ1= $$('#J11').this.value()+$$('#J12').this.value()+$$('#J13').this.value()+$$('#J14').this.value()+$$('#J15').this.value()+$$('#J16').this.value()+$$('#J31').this.value()+$$('#J32').this.value()+$$('#J33').this.value()+$$('#J34').this.value()+$$('#J35').this.value();
      //valorTotalJ1 = parseInt(valorTotalJ1);
      if ()
        console.log('Total'+valorTotalJ1)
      $$('#TotalJ1').val(valorTotalJ1);

  }*/


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
