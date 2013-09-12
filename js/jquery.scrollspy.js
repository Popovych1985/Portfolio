$(document).ready(function() {

    $('body').scrollspy({
    min:1,
    max:$('body').height(),

    onEnter: function(element, position) {
    $("#header").fadeOut();
    },
    
    onLeave: function(element, position) {
    $("#header").fadeIn();
    }

    });

});