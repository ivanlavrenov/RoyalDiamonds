/* Search */

$(document).ready(function() {
    $('.btn').click(function(event) {
        $('.block').removeClass('active')
        var num = $(this).attr('data-num');
        $('#block'+num).addClass('active')
    });
});


/* Dropdown */

$('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450; // длительность анимации

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});


/* Slider */

$('.your-class').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    appendDots: $('.dots'),
    prevArrow: $('.prev'),
    nextArrow: $('.next')
});


$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});

/* Dropdown city */

$(document).ready(function() {
    $('.js-select2').select2({
        placeholder: "Выберите город",
        maximumSelectionLength: 2,
        language: "ru"
    });
});



/* hamburger menu */

$(function(){
    $('.mobile_item').on('click', function() {
        $('.hamburger_dropdown').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });
    });
    $('.exit').on('click', function() {
        $('.hamburger_dropdown').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });
    });

});

$(function(){
    $('.currency').on('click', function() {
        $('.currency_dropdown').slideToggle(100, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });
    });
    $('.currency_dropdown_back').on('click', function() {
        $('.currency_dropdown').slideToggle(100, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });
    });
});

$(function(){
    $('.city').on('click', function() {
        $('.city_dropdown').slideToggle(100, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });
    });
    $('.city_dropdown_back').on('click', function() {
        $('.city_dropdown').slideToggle(100, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });
    });
});

$(function(){
    $('.diamonds_link').on('click', function() {
        $('.diamonds_mobile_dropdown').slideToggle(100, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });
    });
    $('.diamonds_dropdown_back').on('click', function() {
        $('.diamonds_mobile_dropdown').slideToggle(100, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });
    });
});

$(function(){
    $('.decoration_link').on('click', function() {
        $('.decoration_mobile_dropdown').slideToggle(100, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });
    });
    $('.decoration_dropdown_back').on('click', function() {
        $('.decoration_mobile_dropdown').slideToggle(100, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });
    });
});

$(function(){
    $('.services_link').on('click', function() {
        $('.services_mobile_dropdown').slideToggle(100, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });
    });
    $('.services_dropdown_back').on('click', function() {
        $('.services_mobile_dropdown').slideToggle(100, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });
    });
});

$(function(){
    $('.information_link').on('click', function() {
        $('.information_mobile_dropdown').slideToggle(100, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });
    });
    $('.information_dropdown_back').on('click', function() {
        $('.information_mobile_dropdown').slideToggle(100, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });
    });
});

$(function(){
    $('.search_title_button').on('click', function() {
        $('.search_title').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });
    });
    $('.search_back').on('click', function() {
        $('.search_title').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });
    });
});



$(function() {
    $('.constructor_dropdown_button1').on('click', function () {
        $('.constructor_dropdown1').slideToggle(300, function () {
            if ($(this).css('display') === "none") {
                $(this).removeAttr('style');
            }
        });
        $('.constructor_next1').toggleClass('transform');
    });
});


$(function() {
    $('.constructor_dropdown_button2').on('click', function () {
        $('.constructor_dropdown2').slideToggle(300, function () {
            if ($(this).css('display') === "none") {
                $(this).removeAttr('style');
            }
        });
        $('.constructor_next2').toggleClass('transform');
    });
});
