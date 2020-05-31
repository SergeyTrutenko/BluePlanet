$(document).ready(function() {

	// sliders
	$('.page-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button class="prev"></button>',
		nextArrow: '<button class="next"></button>',
		responsive: [
		    {
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
		    }
	    ]
	});

	// hamburger
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $('.nav').toggleClass("is-active");
        $('html').toggleClass('no-scroll');
    });

    $(".header .close").click(function(){
        $('.hamburger').toggleClass("is-active");
        $('.nav').toggleClass("is-active");
        $('html').toggleClass('no-scroll');
    });

    // fullPage
    new fullpage('#fullpage', {
  		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage'],
  		menu: '#menu',
  		slidesNavigation: true,
  		scrollOverflow: true,
  		scrollOverflowReset: true,
  		scrollOverflowResetKey: 'YWx2YXJvdHJpZ28uY29tXzlRaGMyTnliMnhzVDNabGNtWnNiM2RTWlhObGRBPT14Ykk='
  	});

    if ($(window).width() <= 1200) {
        fullpage_api.destroy('all');
    }

});




function sliderWorks(element) {
    element.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
		prevArrow: '<button class="prev"></button>',
		nextArrow: '<button class="next"></button>',
		responsive: [
		    {
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
		    }
	    ]
    });
}

$(document).ready(function() {
    if ( $(window).width() <= 991 ) {
      if ( !$(".costumers__items").hasClass('slick-initialized') ) {
        sliderWorks($('.costumers__items'));
      }  
    } else {
      if ( $(".costumers__items").hasClass('slick-initialized') ) {
        $(".costumers__items").slick("unslick");
      }
    }
})

$(window).resize(function() {
    if ( $(window).width() <= 991 ) {
     
      if ( !$(".costumers__items").hasClass('slick-initialized') ) {
        sliderWorks($('.costumers__items'));
      }  
    } else {
      if ( $(".costumers__items").hasClass('slick-initialized') ) {
        $(".costumers__items").slick("unslick");
      }
    }
});



$(window).resize(function() {
    if ( $(window).width() <= 1200 ) {
        fullpage_api.destroy('all');
    } else {
      new fullpage('#fullpage', {
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage'],
        menu: '#menu',
        slidesNavigation: true,
        scrollOverflow: true,
        scrollOverflowReset: true,
        scrollOverflowResetKey: 'YWx2YXJvdHJpZ28uY29tXzlRaGMyTnliMnhzVDNabGNtWnNiM2RTWlhObGRBPT14Ykk='
      });
    }
});
