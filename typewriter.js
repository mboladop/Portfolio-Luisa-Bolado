function typeWriter(text, i) {
    if (i < (text.length)) {
            $('.landingText').html(text.substring(0, i + 1));
            i++;
            setTimeout(function() {
                typeWriter(text, i);
            }, 200);
        }
    }
    if ($('.jumbotron.j2') == true) {
        typeWriter("It´s not a bug! It´s a Feature!", 0);
    }