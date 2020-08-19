$(document).ready(function() {

    $('.card-1').waypoint(function(direction) {
        $('.card-1').addClass('animate__animated animate__fadeInUp')
    }, {
        offset: '80%'
    });

    $('.card-2').waypoint(function(direction) {
        $('.card-2').addClass('animate__animated animate__fadeInUp')
    }, {
        offset: '80%'
    });
    
    $('.card-3').waypoint(function(direction) {
        $('.card-3').addClass('animate__animated animate__fadeInUp')
    }, {
        offset: '80%'
    });

    $('.block-1-img').waypoint(function(direction) {
        $('.block-1-img').addClass('animate__animated animate__fadeInLeft')
    }, {
        offset: '70%'
    });

    $('.block-2-img').waypoint(function(direction) {
        $('.block-2-img').addClass('animate__animated animate__fadeInLeft')
    }, {
        offset: '50%'
    });

    $('.block-3-img').waypoint(function(direction) {
        $('.block-3-img').addClass('animate__animated animate__fadeInLeft')
    }, {
        offset: '50%'
    });

    $('.block-1-text').waypoint(function(direction) {
        $('.block-1-text').addClass('animate__animated animate__fadeInRight')
    }, {
        offset: '70%'
    });

    $('.block-2-text').waypoint(function(direction) {
        $('.block-2-text').addClass('animate__animated animate__fadeInRight')
    }, {
        offset: '50%'
    });

    $('.block-3-text').waypoint(function(direction) {
        $('.block-3-text').addClass('animate__animated animate__fadeInRight')
    }, {
        offset: '50%'
    });

    $('.smileyimage').waypoint(function(direction) {
        $('.smileyimage').addClass('animate__animated animate__zoomIn')
    }, {
        offset: '60%'
    });


});