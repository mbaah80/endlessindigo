$(document).ready(function(e) {

    setTimeout(function() {
        $('.hidden-content-part').show();
        $( ".s2_slider" ).slick("refresh");
        $( ".sec4_video_block" ).slick("refresh");
    }, 1758000);


    $('.s2_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplaySpeed:5000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1021,
                settings: {
                    slidesToShow: 2,
                }
            },

            {

                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    centerMode: true,
                }
            }
        ]
    });


    $('.sec4_video_block').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed:5000,
        autoplay: false,
        arrows: true,
        responsive: [

            {
                breakpoint: 1021,
                settings: {
                    slidesToShow:2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    autoplay:false,
                    slidesToShow:1,
                    variableWidth: true,
                    centerMode: true,
                    arrows: true,
                }
            }
        ]
    });


    $('.ing-hdng').click(function(e) {

        var thisDiv = $(this).next('.ing-content');
        if ($(thisDiv).is(":visible")){
            $(this).next('.ing-content').slideUp();
            $(this).removeClass('active');
            $('.s3-ing-dwn').removeClass('s3-ing-dwnNew');
        }else{
            $('.ing-content').slideUp();
            $(this).next('.ing-content').slideDown();
            $('.ing-hdng').removeClass('active');
            $(this).addClass('active');
            $('.s3-ing-dwn').removeClass('s3-ing-dwnNew');
            $(this).parent('.s3-ing-dwn').addClass('s3-ing-dwnNew');
        }

        var trg = $(this);
        window.setTimeout(function(){
            $('html, body').animate({
                scrollTop: $(trg).offset().top - 15
            }, 1000);
        }, 700);

    });


    //accordion JS
    $(".acdn-heading").click(function() {

        var questionDiv = $(this);
        var answerDiv   = $(this).next('.acdn-content');
        var idx = $('.acdn-content').index(answerDiv);

        $('.acdn-content').each(function(index, ansDiv) {
            if(index != idx && $(ansDiv).is(':visible')) {
                $(ansDiv).slideUp(500, function() {
                    $(ansDiv).prev('.acdn-heading').removeClass('accordion-open');
                });
            }
        });

        if (answerDiv.is(':visible')) {
            answerDiv.stop().slideUp(500, function() {
                questionDiv.removeClass('accordion-open');
            });
        } else {
            questionDiv.addClass('accordion-open');
            answerDiv.stop().slideDown(500);
        }

    });

});

document.addEventListener('DOMContentLoaded', function () {
    var timer = new PsgTimer({
        selector: '#firstTimer',
        currentDateTime: Date.UTC(2020, 0, 26, 1, 0, 0),
        endDateTime: Date.UTC(2020, 0, 26, 1, 39, 0),
        multilpeBlocks: true,
        animation: 'fade',
        labels: {
            days: 'Days',
            hours: 'HRS',
            minutes: 'MINS',
            seconds: 'SECS'
        },
        callbacks: {
            onInit: function () {
                //console.log('Hello world!');
            }
        }
    });
})