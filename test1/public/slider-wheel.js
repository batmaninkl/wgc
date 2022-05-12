/* ******************************************* */
/*  Simple Slider Wheel                        */
/*  -------------------                        */
/*  Copyright                                  */
/*     Mejias David   -> Info-DVD aka M-DVD    */
/* ******************************************* */
/*  MIT License                                */
/* ******************************************* */
$(document).ready(function(){
	var winHeight = window.innerHeight ?
				function() {
					return window.innerHeight;
				} :
				function() {
					return document.documentElement.clientHeight;
				};
	$('.first-block').height(winHeight);
	var BlockHeight = $('.first-block').height();
	$.browser = {};
	$.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) &&     !/webkit/.test(navigator.userAgent.toLowerCase());
	if($.browser.mozilla)
	{
	 var ScrollType = 'html';
	  }
	else
	   {
	 var ScrollType = 'body';
	  }
	$('.first-block').mousewheel(function(event, delta, deltaX, deltaY) {
	  if((delta<0) && ($(ScrollType).scrollTop()==0)) $(ScrollType).animate({ scrollTop: BlockHeight-    104 }, 600);
	});
	
	$(ScrollType).keydown(function(event){
	 if((event.keyCode==40) && ($(ScrollType).scrollTop()==0)) $(ScrollType).animate({ scrollTop:  BlockHeight-104 }, 600);
	})
	
	});
		$(document).ready(function(){
			heightSlide = $("#slide-04").outerHeight(true) / 2;
			heightLastSlide = $("#slide_04").offset().top ;
			$("body").scrollspy({target: '.dvd_fixed_slider', offset: heightSlide });
		});

		$(window).on("scroll", function () {
			var scrollTop = $(window).scrollTop();
			var attrPosition = (scrollTop > heightLastSlide) ? 'static' : 'absolute';
			$("#slide-04").css({ position: attrPosition });
		});

