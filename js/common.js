$(function() {
	$(".btn-read-more").click(function() {
		$(this).css('display', 'none');
		$(".extra-text").css('display', 'inline');
	});

	$( "a.btn-find-your-council" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 800);
    });
});