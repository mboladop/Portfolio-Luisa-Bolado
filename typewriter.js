function typeWriter(text, i) {
    if (i < (text.length)) {
            $('.landingText').html(text.substring(0, i + 1));
            i++;
            setTimeout(function() {
                typeWriter(text, i);
            }, 200);
        }
    }
    var notStarted = true;
    $(window).scroll(function() {
	var $height = $(window).scrollTop();
  if($height > 645 && notStarted) {
    notStarted = false; 
    typeWriter("Function js(){console.log('It´s not a bug, it´s a feature!');}", 0);
	}
});
        