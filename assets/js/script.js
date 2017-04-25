$(document).ready(function() {

/* Scroll */
$("a").click(function() {
    $('html, body').animate({
    scrollTop: $( $.attr(this, 'href')).offset().top
    }, 1500);
     return false;
});

// Travel Hover
$('.travel-item').hover(function(){
$(this).find('#travel-text').fadeIn(750);
}, function(){
$(this).find('#travel-text').fadeOut(750);});

// Typed Plugin
$(function(){
  $(".type").typed({
        strings:
        ["#Developer",
         "#Musician",
         "#Traveler",],
        typeSpeed: 200,
        backSpeed: 100,
        backDelay: 100,
        loop: true, })});

//Opacity with Hover for Travel
$(".travel-item").hover(function() {
    $(this).find("#travel-pic").fadeTo(500, 1);
    }, function() {
$(this).find("#travel-pic").fadeTo(500, 0.7);});

$(".about ul li a.email").hover(function() {
        $(".about ul li a.email").fadeTo(300, 1);},
            function() {
            $(".about ul li a.email").fadeTo(300, 0.6);});

$(".about ul li a.fb").hover(function() {
       $(".about ul li a.fb").fadeTo(300, 1);},
              function() {
                 $(".about ul li a.fb").fadeTo(300, 0.6);});

$(".about ul li a.link").hover(function() {
        $(".about ul li a.link").fadeTo(300, 1);},
              function() {
                    $(".about ul li a.link").fadeTo(300, 0.6);});

$(".about ul li a.dev").hover(function() {
         $(".about ul li a.dev").fadeTo(300, 1);},
                  function() {
                     $(".about ul li a.dev").fadeTo(300, 0.6);});


$("#about-me").hover(function() {
    $("#about-me").fadeTo(300, 0.7);},
        function() {
           $("#about-me").fadeTo(300, 1);});

$("#hobbies").hover(function() {
$("#hobbies").fadeTo(300, 0.7);},
 function() {
    $("#hobbies").fadeTo(300, 1);});

$("#travels").hover(function() {
$("#travels").fadeTo(300, 0.7);},
function() {
$("#travels").fadeTo(300, 1);});

$(".button").hover(function() {
  $(this).css('background-color', '#ea618c');
}, function() {
  $(this).css('background-color', '');
  });

$(".dance-item").hover(function() {
    $(".dance").show("slow");
  }, function() {
    $(".dance").hide("hide");
    });

    $(".violin-item").hover(function() {
      $(".violin").show("slow");
    }, function() {
      $(".violin").hide("hide");
      });

  $(".keyboard-item").hover(function() {
    $(".keyboard").show("slow");
    }, function() {
      $(".keyboard").hide("hide");
        });

})
