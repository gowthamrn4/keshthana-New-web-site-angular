import { Component, AfterViewInit,OnInit} from '@angular/core';
import { Router, RouterPreloader } from '@angular/router';
import { get } from 'scriptjs';
declare var $:any;
declare var jQuery:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  loadAPI: Promise<any>;

  constructor( public router:Router) { }

  ngOnInit() {
   
  
   this.galleryMasonaryLayout();
   this.revolutionSliderActiver();
   this.testimonialsCarosuleGardener();
   this.stickyHeader();
  }

galleryMasonaryLayout() {
    if ($('#masonary-layout1').length) {
        $('#masonary-layout1').isotope({
            layoutMode: 'masonry',
            filter: $('#masonary-layout1').parent().find('.post-filter li').eq(0).attr('data-filter')
        });
    }
    if ($('#masonary-layout1').parent().find('.post-filter').length) {
        $('#masonary-layout1').parent().find('.post-filter li').children('span').click(function() {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            $('#masonary-layout1').parent().find('.post-filter li').children('span').parent().removeClass('active');
            Self.parent().addClass('active');


            $('#masonary-layout1').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
       
    }

    if ($('#masonary-layout2').length) {
        $('#masonary-layout2').isotope({
            layoutMode: 'masonry',
            filter: $('#masonary-layout2').parent().find('.post-filter li').eq(0).attr('data-filter')
        });
    }
    if ($('#masonary-layout2').parent().find('.post-filter').length) {
        $('#masonary-layout2').parent().find('.post-filter li').children('span').click(function() {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            $('#masonary-layout2').parent().find('.post-filter li').children('span').parent().removeClass('active');
            Self.parent().addClass('active');


            $('#masonary-layout2').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }
    if ($('.post-filter.has-dynamic-filter-counter').length) {
        // var allItem = $('.single-filter-item').length;

        var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

        activeFilterItem.each(function() {
            var filterElement = $(this).data('filter');
            console.log(filterElement);
            var count = $('.gallery-content').find(filterElement).length;

            $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
        });
    };
}
 revolutionSliderActiver () {
	if ($('.rev_slider_wrapper #slider1').length) {
		jQuery("#slider1").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			dottedOverlay:"yes",
			delay:5000,
			navigation: {
				arrows:{enable:true,
						left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 60,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 60,
                        v_offset: 0
                    }

				}
			},
            gridwidth: [1200, 940, 720, 480],
            gridheight: [550, 550, 550, 500],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
		});
	};
}
testimonialsCarosuleGardener() {
	if ($('.testimonials-slider').length) {
		$('.testimonials-slider').owlCarousel({
		    loop: true,
		    margin: 30,
		    nav: true,
	        navText: [
	            '<i class="fa fa-angle-left"></i>',
	            '<i class="fa fa-angle-right"></i>'
	        ],
	        dots: false,
		    autoplay:true,
		    responsive: {
		        0:{
		            items:1,
		            loop:true,
					dots:false
		        },
		        480:{
					items:1,
					loop:true,
					dots:false
				},
		        768:{
		            items:2,
		            loop:true,
					dots:false
		        },
		        1000:{
		            items:3,
		            loop:true
		        }
		    }
		});
	}
}
 stickyHeader () {
	if ($('.stricky').length) {
		var strickyScrollPos = 100;
		if($(window).scrollTop() > strickyScrollPos) {
			$('.stricky').removeClass('fadeIn animated');
	      	$('.stricky').addClass('stricky-fixed fadeInDown animated');
	      	$('.scroll-to-top').fadeIn(500);
		}
		else if($(this).scrollTop() <= strickyScrollPos) {
			$('.stricky').removeClass('stricky-fixed fadeInDown animated');
	      	$('.stricky').addClass('slideIn animated');
	      	$('.scroll-to-top').fadeOut(500);
		}
	};
}
}
