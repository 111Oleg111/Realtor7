$(document).ready(() => {
    'use strict';

    $('#team-category').slick({
        infinite: true,
        dots: true,
        centerMode: true,
        centerPadding: 60,
        slidesToShow: 2,
        focusOnSelect: true,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 930,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
        ]
    });

    new WOW({
        animateClass: 'animate__animated'
    }).init();

    $('.advice').click(() => {
        $('#reservation-container').css('display', 'flex');
    });

    $('#reservation-cancel-close, #reservation-container').click((e) => {
        if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-close') {
            $('#reservation-container').hide();
        }
    });



    $('#reserve-button-main').click(() => {
        $('.reserve-error').hide();

        let name = $('#name-main');
        let number = $('#number-main');

        name.css('border-color', 'rgb(46, 41, 95)');
        number.css('border-color', 'rgb(46, 41, 95)');


        let hasError = false;

        if (!name.val().match(/^([а-яa-z]+\s*)+([а-яa-z]+\s*)+$/i)) {
            name.siblings('.reserve-error').show();
            name.css('border-color', 'red');
            hasError = true;
        }
        if (!number.val().match(/[^0-9+]/)) {
            number.siblings('.reserve-error').show();
            number.css('border-color', 'red');
            hasError = true;
        }

        if (!hasError) {
            $.ajax({
                // type: 'post',
                // url: 'mail.php',
                // data: 'name=' + name.val() + '&data=' + data.val() + '&number=' + number.val() + '&haircut=' + haircut.val() + '&barber=' + barber.val() + '&time=' + time.val(),
                success: () => {
                    $('#reservation-sent').show().css('display', 'flex');
                    $('#reservation-container').hide();
                    $('#reservation-cancel-close-second, #reservation-sent').click((e) => {
                        if (e.target.id === 'reservation-sent' || e.target.id === 'reservation-cancel-close-second') {
                            $('#reservation-sent').hide();
                        }
                    });
                },
                error: () => {
                    $('#reservation-container').hide();
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, с нами по номеру телефона.');
                }
            })
        }
    });
    $('#reserve-button').click(() => {
        $('.reserve-error').hide();

        let name = $('#name-second');
        let number = $('#number-second');

        name.css('border-color', 'rgb(46, 41, 95)');
        number.css('border-color', 'rgb(46, 41, 95)');


        let hasError = false;

        if (!name.val().match(/^([а-яa-z]+\s*)+([а-яa-z]+\s*)+$/i)) {
            name.siblings('.reserve-error').show();
            name.css('border-color', 'red');
            hasError = true;
        }
        if (!number.val().match(/[^0-9+]/)) {
            number.siblings('.reserve-error').show();
            number.css('border-color', 'red');
            hasError = true;
        }

        if (!hasError) {
            $.ajax({
                // type: 'post',
                // url: 'mail.php',
                // data: 'name=' + name.val() + '&data=' + data.val() + '&number=' + number.val() + '&haircut=' + haircut.val() + '&barber=' + barber.val() + '&time=' + time.val(),
                success: () => {
                    $('#reservation-sent').show().css('display', 'flex');
                    $('#reservation-container').hide();
                    $('#reservation-cancel-close-second, #reservation-sent').click((e) => {
                        if (e.target.id === 'reservation-sent' || e.target.id === 'reservation-cancel-close-second') {
                            $('#reservation-sent').hide();
                        }
                    });
                },
                error: () => {
                    $('#reservation-container').hide();
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, с нами по номеру телефона.');
                }
            })
        }
    });

});