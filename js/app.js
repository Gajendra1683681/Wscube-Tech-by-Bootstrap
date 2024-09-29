// $('.autoplay').slick({
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });

$('.autoplay').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200, // Large devices
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 992, // Medium devices
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768, // Small devices
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576, // Extra small devices
      settings: {
        slidesToShow: 2
      }
    }
  ]
});



  // $('.multiple-items').slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 2
  // });

  $('.multiple-items').slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  });