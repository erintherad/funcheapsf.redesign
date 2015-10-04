$(document).ready(function(){

	$('.features').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    focusOnSelect: true,
    adaptiveHeight: true,
    responsive: [
    {
      breakpoint: 868,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        adaptiveHeight: true
      }
    },
    {
      breakpoint: 380,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        adaptiveHeight: true
      }
    }
  ]
  });

  $(".sfVid").background({
    source: {
        poster: "img/poster.png"
        // webm: "img/sanfrancisco.webm",
        // mp4: "img/sanfrancisco.mp4",
        // ogg: "img/sanfrancisco.ogg"
    }
  });
});