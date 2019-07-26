$(document).ready(function() {
	$('.options ul li').on("click", function(){
        var tab_id = $(this).attr('data-tab');
        $('.options ul li').removeClass('current');
        $('.bfr-slider').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

});

