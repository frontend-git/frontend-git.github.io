/*=========================================

Template Name: Aarong - Personal Portfolio Template
Author: ThemeFusionBD
Version: 1.0
Design and Developed by: ThemeFusionBD

NOTE: This is the custom jQuery file for the template

=========================================*/


/*******************************************
        {  Table of contents  }
********************************************

1. Preloader
2. Navigation Section
3. Smoothscroll js
4. jquery scroll spy
5. Bootstrap menu fix
6. background-image flickering solution for mobile
7. Magnific popup
8. WOW js

********************************************
        {  End table content }
********************************************/


(function ($) {
	"use strict";
    
    
    var $body = $("body"),
        $window = $(window),
        $documentElement = $(document),
        nav = $('.custom-navbar'),
        lastScrollTop = 0;
    
    
        
        
    
    
     
         
         
         
         /*=======================================
            DEMO PANLE JS
    =======================================*/
        $("span.red_color").on("click", function(){
            $("body").addClass("red_color_theme").removeClass("green_color_theme yellow_color_theme blue_color_theme pink_color_theme purple_color_theme");
        });
        $("span.green_color").on("click", function(){
            $("body").addClass("green_color_theme").removeClass("red_color_theme yellow_color_theme blue_color_theme pink_color_theme purple_color_theme");
        });
    $("span.yellow_color").on("click", function(){
            $("body").addClass("yellow_color_theme").removeClass("green_color_theme red_color_theme blue_color_theme pink_color_theme purple_color_theme");
        });
    $("span.blue_color").on("click", function(){
            $("body").addClass("blue_color_theme").removeClass("yellow_color_theme green_color_theme red_color_theme pink_color_theme purple_color_theme");
        });
    $("span.pink_color").on("click", function(){
            $("body").addClass("pink_color_theme").removeClass("green_color_theme red_color_theme yellow_color_theme purple_color_theme blue_color_theme");
        });
    $("span.purple_color").on("click", function(){
            $("body").addClass("purple_color_theme").removeClass("green_color_theme red_color_theme yellow_color_theme blue_color_theme pink_color_theme");
        });
    
    	$(".spiner_button").on("click", function(event){
            event.preventDefault();
            if ( $(this).hasClass("slide_in_out") ) {
            $(".demo_panel_box").stop().animate({left:"-180px"}, 500);
            } else {
            $(".demo_panel_box").stop().animate({left:"0px"}, 500);
            }
            $(this).toggleClass("slide_in_out");
            return false;
        });

    


        
        
        /*=============================
                Navigation Section
        ==============================*/
    
    
    
    
    
       
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });
    
    
    
        $documentElement.on('scroll', function () {
        
                var currentScrollTop = $(this).scrollTop();
            if(currentScrollTop >  lastScrollTop ) nav.addClass('');
            
            else nav.removeClass('hidden');
            
            lastScrollTop = currentScrollTop;
            
            });
    
    
    
    
    /*=============================
                Smoothscroll js
        ==============================*/
        $(function() {
          $('.custom-navbar a, a.scroll-btn').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
          });
        });  
    
    
        
  
        
        
    /*======================================
        jquery scroll spy
    ========================================*/
        $body.scrollspy({
        
            target : ".navbar-collapse",
            offset : 95
        
        });
        
        
     /*=================================
            Bootstrap menu fix
     ==================================*/
        $(".navbar-toggle").on("click", function(){
        
            $body.addClass("mobile-menu-activated");
        
        });
        
        $("ul.nav.navbar-nav li a").on("click", function(){
        
            $(".navbar-collapse").removeClass("in");
        
        });
        
        
        /*====================================================
            background-image flickering solution for mobile
            =======================================================*/
             var bg = jQuery("#home");
            function resizeBackground() {
                bg.height($window.height() + 60);
            }
            resizeBackground();
        
    
   
    

        /*===================================
                owl carousel
         ====================================*/
        $(".review-list").owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            dots:true,
            autoplay:true,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
      
    
  
     
    
    /*=============================
            WOW js
    ==============================*/
        new WOW({ mobile: false }).init();
    
    
    
        
        
       $("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        //formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var msg_subject = $("#msg_subject").val();
    var message = $("#message").val();


    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    $("#contactForm").removeClass().addClass('fadeIn animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
        
        
        
        



        


    
    $window.on('load', function(){
        
        
        
          /*=============================
                Preloder
        ==============================*/
        $('#status').fadeOut(); 
        $('#preloader').delay(350).fadeOut('slow'); 
        $body.delay(350).css({'overflow':'visible'});
            
        });

    
         
  


})(jQuery);