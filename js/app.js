$(document).ready(function(){
    $(document).foundation();
});

/***
$("document").ready(function(e) {        

    $("#floatingNav").css("z-index", "99999").css("right", "0").css("position", "absolute");

    // get initial top offset of navigation 
    var floating_navigation_offset_top = $('#floatingNav').offset().top;

    // define the floating navigation function
    var floating_navigation = function(){

        // current vertical position from the top
        var scroll_top = $(window).scrollTop(); 

        // if scrolled more than the navigation, change its 
        // position to fixed to float to top, otherwise change 
        // it back to relative
        if (scroll_top > floating_navigation_offset_top) { 
            $('#floatingNav').css({ 'position': 'fixed', 'top':0, 'right': $('h4.titleImage').offset().left, 'width': 158 });
        } else {
            $('#floatingNav').css({ 'position': 'relative', 'right':0, 'width':158 }); 
        }   
    };

    // run function on load
    floating_navigation();

    // run function every time you scroll
    $(window).scroll(function() {
        floating_navigation();
    });
});
***/