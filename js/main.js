$(function(){

	$('a, .button01').click(function(){
	var targetId = $(this).attr('href');
	console.log(targetId);

	var target = $(targetId);
	console.log(target);

	var topDistance = target.position().top;
	console.log(topDistance);

	$('body').animate({scrollTop : topDistance}, 1000);
	return false;

	});

	$('#item01').scrollspy({
    min:$('#item01').offset().top - $(window).height() + 200,
    max:$('#item01').offset().top - $(window).height() + 400,

    onEnter: function(element, position) {
    $("#item01 .thumbimage").animate({margin: 0, opacity: 1},600);
    },
    
    onLeave: function(element, position) {
    }

    });

	$('#item02').scrollspy({
    min:$('#item02').offset().top - $(window).height() + 200,
    max:$('#item02').offset().top - $(window).height() + 400,

    onEnter: function(element, position) { console.log ('test2')
    $("#item02 .thumbimage").animate({margin: 0, opacity: 1},600);
    },
    
    onLeave: function(element, position) {
    }

    });


})