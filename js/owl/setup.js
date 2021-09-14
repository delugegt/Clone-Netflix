$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          /*itens por vez*/
          items:3
      },
      1000:{
          items:5
      }
  }
});
