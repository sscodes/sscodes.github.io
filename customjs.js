new WOW().init();

const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function(){

    $("html, body").animate({scrollTop: 0 }, "fast");

});

var preloader = document.getElementById('loading')

function myfunction()
{
    preloader.style.display = 'none';
}

var typed = new Typed('.type', {
    strings: ["Follow me on GitHub to explore all my codes..."],
    typeSpeed:60,
    backSpeed:60,
    loop:60
  });

  var typed1 = new Typed('.type1', {
    strings: ["For more details check out my CV..."],
    typeSpeed:60,
    backSpeed:60,
    loop:60
  });

  var typed1 = new Typed('.type2', {
    strings: ["Call me up or send me a mail if you have any project or collaboration in your mind..."],
    typeSpeed:60,
    backSpeed:60,
    loop:60
  });


$(function(){
$('#btnScrollToTop').mouseenter(function(){
    animate('#btnScrollToTop', 'animate__bounce');
    return false;
});
$('#gt').mouseenter(function(){
    animate('#gt', 'animate__rubberBand');
    return false;
});
$('#gt1').mouseenter(function(){
    animate('#gt1', 'animate__rubberBand');
    return false;
});
$('#gt2').mouseenter(function(){
    animate('#gt2', 'animate__rubberBand');
    return false;
});
$('#gt3').mouseenter(function(){
    animate('#gt3', 'animate__rubberBand');
    return false;
});
$('#gt4').mouseenter(function(){
    animate('#gt4', 'animate__rubberBand');
    return false;
});
$('#gt5').mouseenter(function(){
    animate('#gt5', 'animate__rubberBand');
    return false;
});
$('#gt6').mouseenter(function(){
    animate('#gt6', 'animate__rubberBand');
    return false;
});
$('#gt7').mouseenter(function(){
    animate('#gt7', 'animate__rubberBand');
    return false;
});
$('#gt8').mouseenter(function(){
    animate('#gt8', 'animate__rubberBand');
    return false;
});
$('#gt9').mouseenter(function(){
    animate('#gt9', 'animate__rubberBand');
    return false;
});
$('#gt10').mouseenter(function(){
    animate('#gt10', 'animate__rubberBand');
    return false;
});
$('#gt11').mouseenter(function(){
    animate('#gt11', 'animate__rubberBand');
    return false;
});
$('#gt12').mouseenter(function(){
    animate('#gt12', 'animate__rubberBand');
    return false;
});
$('#gt13').mouseenter(function(){
    animate('#gt13', 'animate__rubberBand');
    return false;
});
$('#gt14').mouseenter(function(){
    animate('#gt14', 'animate__rubberBand');
    return false;
});
$('#gt15').mouseenter(function(){
    animate('#gt15', 'animate__rubberBand');
    return false;
});
$('#gt16').mouseenter(function(){
    animate('#gt16', 'animate__rubberBand');
    return false;
});
$('#gt17').mouseenter(function(){
    animate('#gt17', 'animate__rubberBand');
    return false;
});
$('#gt18').mouseenter(function(){
    animate('#gt18', 'animate__rubberBand');
    return false;
});
$('#gt19').mouseenter(function(){
    animate('#gt19', 'animate__rubberBand');
    return false;
});
$('#gt20').mouseenter(function(){
    animate('#gt20', 'animate__rubberBand');
    return false;
});
$('#gt21').mouseenter(function(){
    animate('#gt21', 'animate__rubberBand');
    return false;
});
$('#gt22').mouseenter(function(){
    animate('#gt22', 'animate__rubberBand');
    return false;
});
// Animate
function animate(element, animation){
    $(element).addClass('animate__animated '+animation);
    var wait = setTimeout(function(){
    $(element).removeClass('animate__animated '+animation);
    }, 1000);
}
})


/*
var lastScrollTop = 0;

navbar = document.getElementById("mainnav");

window.addEventListener("scroll", function(){

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop>lastScrollTop)
    {
        navbar.style.top = "-120px";
    }
    else
    {
        navbar.style.top = "0";
    }

    lastScrollTop = scrollTop;
})
*/