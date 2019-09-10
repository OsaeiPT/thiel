<script>
    $(document).ready(function () {

        $("#owl-carousel-1").owlCarousel();

    $("#noticias-carousel").owlCarousel({


        items: 4,
    margin: 30,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
        responsive: {
        0: {
        items: 1
  },
          768: {
        items: 2
  },
          992: {
        items: 3
  },
          1200: {
        items: 4
  },
}

});

})
  </script>

    <script>
        $(document).ready(function () {

      var saludo;
        saludo = "Hola Mundo";
        console.log(saludo)
        saludo = 'Hola jQuery';
        console.log(saludo);
  
  
        var titulodestacado;
        titulodestacado = $("#titulo-primero").text("Hola Mundo")
        console.log(titulodestacado)
  
      });
  </script>