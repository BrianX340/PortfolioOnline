window.onload = function(){
  document.addEventListener('click', event =>{
    elementId = event.path[0].getAttribute('id')
    if (elementId=='proyect01'){
      window.location.href = 'https://brianx340-social-network.herokuapp.com/login'
    }
  })
  


    var barraCarga = document.getElementById('barra-carga');
}
$('document').ready(function(){
    //ANIMACIÓN DE "REVELACIÓN" DE TEXTO.

    /* Guardo en la variable "profesion" la etiqueta que contiene el texto 
    al cual quiero aplicar el efecto de revelado.*/
    const profesion = baffle(".profesion");

    /* Le asigno a la variable profesión (que contiene el texto que quiero animar) los caracteres a utilizar para 
    la animación del texto revelado (puedes utilizar cualquier tipo de carácteres). También asigno la velocidad que tendrá el efecto de las letras*/
    profesion.set({
        characters: '█▓▓ ░░>██ ▓█▓>▓ ▓<█ ░<▒░▓ █░<█ █▒> ▓░▓< ▒▓░░',
        speed: 90
    });

    // Ejecuto el inicio de la animacion.
    profesion.start();
    // Establezco la duración que tendrá la animación antes de revelar el texto.
    profesion.reveal(3000);

    var boton = document.getElementById('boton');
        
    $('#tagline').t({
        beep:false,
        caret:'<span style="color:hotpink;">•</span>',
        typing:function(elm,chr){
        if(chr.match(/\-trigger/))
            $('#pow-txt').show().delay(500).fadeOut(0);
        }
    });

    $('#boton-arriba').click(function(){
        $('body, html').animate({
          scrollTop: '0px'
        }, 300);
      });
   
    $(window).scroll(function(){
      if( $(this).scrollTop() > 0 ){
        $('#boton-arriba').slideDown(300);
      } else {
        $('#boton-arriba').slideUp(300);
      }
    });
});