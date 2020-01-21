
$('.navbar-burger').on('click', function() {
	$('.menu__links').slideToggle();
});

//Указываем что будем выводить по 3 слайда на экран

$(function(){ 
    $('.section-comments').slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false
    });
});
 