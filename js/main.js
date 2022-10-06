(function($){

	jQuery(document).ready(function(){

        /*** Sticky header */
		$(window).scroll(function(){
			if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
				$(".header").addClass("stop");
			} else {
				$(".header").removeClass("stop");
			}
		});

		/*** Sticky header */
		const body = document.body;
		const scrollUp = "scroll-up";
		const scrollDown = "scroll-down";
		let lastScroll = 100;

		window.addEventListener("scroll", () => {
			const currentScroll = window.pageYOffset;
			if (currentScroll <= 0) 
			{
				body.classList.remove(scrollUp);
				return;
			}

			if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) 
			{
				// down
				body.classList.remove(scrollUp);
				body.classList.add(scrollDown);
			} 
			else if ( currentScroll < lastScroll && body.classList.contains(scrollDown) ) 
			{
				// up
				body.classList.remove(scrollDown);
				body.classList.add(scrollUp);
			}

			lastScroll = currentScroll;
		});

		/*** Scroll Nav */
		var link = $('.main-menu ul li a');
 
		link.on('click', function(e) {
			var target = $($(this).attr('href'));
			$('html, body').animate({
			scrollTop: target.offset().top - 76
			}, 600); 
			$(this).parent().addClass('active');
			e.preventDefault();
		});
 
		$(window).on('scroll', function(){
			scrNav();
		});

		function scrNav() {
			var sTop = $(window).scrollTop();
			$('section').each(function() {
				var id = $(this).attr('id'),
					offset = $(this).offset().top-1,
					height = $(this).height();
				if(sTop >= offset && sTop < offset + height) {
					link.parent().removeClass('active');
					$('.main-menu').find('[href="#' + id + '"]').parent().addClass('active');
				}
			});
		}
		scrNav();

		/*** mobile menu  */
		$(".hamburger-menu").on("click", function () {
			$(".side-info").toggleClass("info-open");
			$(".offcanvas-overlay").toggleClass("overlay-open");
		});

		$(window).scroll(function(){
			if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
				$(".side-info").removeClass("info-open");
				$(".offcanvas-overlay").removeClass("overlay-open");
			}
		});

        /*** AOS */
		AOS.init({
			once: true,
			offset: 0,
			duration: 900,
		});

		/*** enable lightbox */
		$('.popup-video').magnificPopup({
			type: 'iframe',
			preloader: false,
			fixedBgPos: true,
			removalDelay: 500,
			fixedContentPos: true,
			callbacks: {
				beforeOpen: function() { 
					this.st.iframe.markup = this.st.iframe.markup.replace('mfp-iframe-scaler', 'mfp-iframe-scaler mfp-with-anim');
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
			closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close"></button>',
		});
    	/*** slick slider  */
		$('.client-slider').slick();

		// Feature Property 
		var grid = $('.grid').isotope({
			itemSelector: '.grid-item',
		})

		$('.filter-button-group').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			grid.isotope({ filter: filterValue });
		});

		//for portfolio menu active class
		$('.filter-button-group button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		}); 

		/*** categories-slider Slider */
    	var $categories_slider;

		$categories_slider = $('.categories-slider');

		$categories_slider.slick({
			autoplay: true,
			speed: 300, 
			dots: false,
			arrows: true,
			infinite: true,
			slidesToShow: 3,
			initialSlide: 1, 
			slidesToScroll: 1,
			appendArrows: $('.slider-controls .slider-arrows'),
			prevArrow: '<div class="categories-slider__arrow categories-slider__arrow_left"><i class="fa-solid fa-arrow-left-long"></i></div>',
        	nextArrow: '<div class="categories-slider__arrow categories-slider__arrow_right"><i class="fa-solid fa-arrow-right-long"></i></div>', 
			responsive: [
				{
					breakpoint: 995,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 580,
					settings: {
						slidesToShow: 1
					}
				}
			]
		})

        /** counter **/
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

	});

}(jQuery));