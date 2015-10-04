$(document).ready(function(){

	$('.features').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    initialSlide: 1,
    mobileFirst: true,
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