/* Search */

$(document).ready(function () {
    $('.btn').click(function (event) {
        $('.block').removeClass('active')
        var num = $(this).attr('data-num');
        $('#block' + num).addClass('active')
    });


    /* Dropdown */

    $('.select').each(function () {
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
        selectHead.on('click', function () {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(duration);

                selectItem.on('click', function () {
                    let chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text($(this).find('span').text());

                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });


    /* carousel */

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

    $('.jewelry_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });

    $('.jewelry_second_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });

    $('.jewelry_second_adapt_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });

    $('.catalog_jewelry_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });

    $('.catalog_jewelry_adapt_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });

    $('.card_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        appendDots: $('.dots'),
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

    /* Dropdown city */

    $(function () {
        $('.js-select2').select2({
            placeholder: "Выберите город",
            maximumSelectionLength: 2,
            language: "ru"
        });
    })

    /* catalog mobile select */

    $('.catalog_select').each(function () {
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
        selectHead.on('click', function () {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(duration);

                selectItem.on('click', function () {
                    let chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text($(this).find('span').text());

                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });


    /* hamburger menu */

    $(function () {
        $('.footer_hamburger').on('click', function () {
            $('.footer_hamburger_menu').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
        $('.footer_exit').on('click', function () {
            $('.footer_hamburger_menu').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
    });

    $(function () {
        $('.rings_link').on('click', function () {
            $('.footer_rings_menu').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
        $('.footer_rings_menu_title').on('click', function () {
            $('.footer_rings_menu').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
    });

    $(function () {
        $('.earrings_link').on('click', function () {
            $('.footer_earrings_menu').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
        $('.footer_earrings_menu_title').on('click', function () {
            $('.footer_earrings_menu').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
    });

    $(function () {
        $('.wedding_link').on('click', function () {
            $('.footer_wedding_menu').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
        $('.footer_wedding_menu_title').on('click', function () {
            $('.footer_wedding_menu').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
    });

    $(function () {
        $('.bracelets_link').on('click', function () {
            $('.footer_bracelets_menu').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
        $('.footer_bracelets_menu_title').on('click', function () {
            $('.footer_bracelets_menu').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
    });

    $(function () {
        $('.religion_link').on('click', function () {
            $('.footer_religion_menu').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
        $('.footer_religion_menu_title').on('click', function () {
            $('.footer_religion_menu').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
    });

    $(function () {
        $('.pendants_link').on('click', function () {
            $('.footer_pendants_menu').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
        $('.footer_pendants_menu_title').on('click', function () {
            $('.footer_pendants_menu').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
    });

    $(function () {
        $('.mobile_item').on('click', function () {
            $('.hamburger_dropdown').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
        $('.exit').on('click', function () {
            $('.hamburger_dropdown').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
    });

    $(function () {
        $('.currency').on('click', function () {
            $('.currency_dropdown').slideToggle(100, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
        $('.currency_dropdown_back').on('click', function () {
            $('.currency_dropdown').slideToggle(100, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
    });

    $(function () {
        $('.city').on('click', function () {
            $('.city_dropdown').slideToggle(100, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
        $('.city_dropdown_back').on('click', function () {
            $('.city_dropdown').slideToggle(100, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
    });

    $(function () {
        $('.diamonds_link').on('click', function () {
            $('.diamonds_mobile_dropdown').slideToggle(100, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
        $('.diamonds_dropdown_back').on('click', function () {
            $('.diamonds_mobile_dropdown').slideToggle(100, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
    });

    $(function () {
        $('.decoration_link').on('click', function () {
            $('.decoration_mobile_dropdown').slideToggle(100, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
        $('.decoration_dropdown_back').on('click', function () {
            $('.decoration_mobile_dropdown').slideToggle(100, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
    });

    $(function () {
        $('.services_link').on('click', function () {
            $('.services_mobile_dropdown').slideToggle(100, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
        $('.services_dropdown_back').on('click', function () {
            $('.services_mobile_dropdown').slideToggle(100, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
    });

    $(function () {
        $('.information_link').on('click', function () {
            $('.information_mobile_dropdown').slideToggle(100, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
        $('.information_dropdown_back').on('click', function () {
            $('.information_mobile_dropdown').slideToggle(100, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
    });

    $(function () {
        $('.search_title_button').on('click', function () {
            $('.search_title').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
        $('.search_back').on('click', function () {
            $('.search_title').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
    });

    $(function () {
        $('#catalog_dropdown_button').on('click', function () {
            $('.catalog_filter_active').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
        $('.catalog_choice_block_mobile_dropdown_title').on('click', function () {
            $('.catalog_filter_active').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
    });

    $(function () {
        $('#catalog_dropdown_button').on('click', function () {
            $('.catalog_choice_block').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
        $('.catalog_dropdown_exit').on('click', function () {
            $('.catalog_choice_block').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
    });

    $(function () {
        $('#catalog_dropdown_button').on('click', function () {
            $('.catalog_filter_active_container ').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
        $('.catalog_dropdown_exit').on('click', function () {
            $('.catalog_filter_active_container ').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
    });

    $(function () {
        $('.catalog_item_hover_button1').on('click', function () {
            $('.catalog_item_active').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
        $('.catalog_item_active_exit').on('click', function () {
            $('.catalog_item_active').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
    });

    $(function () {
        $('.card_dropdown_button').on('click', function () {
            $('.card_dropdown').slideToggle(300, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
            $('.card_next').toggleClass('transform');
        });
    });

    $(function () {
        $('.cart_main_block_button').on('click', function () {
            $(this).parents(".cart_main_block_dropdown_container").find(".cart_main_block_dropdown").slideToggle(300, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
            $('.card_dropdown_next').toggleClass('transform');
        });
    });

    $(function () {
        $('.constructor_dropdown_button1').on('click', function () {
            $('.constructor_dropdown1').slideToggle(300, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
            $('.constructor_next1').toggleClass('transform');
        });
    });

    $(function () {
        $('.constructor_dropdown_button2').on('click', function () {
            $('.constructor_dropdown2').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
            $('.constructor_next2').toggleClass('transform');
            $('.static_right_block_steps_item').toggleClass('border')
        });
        $('.lk_dropdown_back').on('click', function () {
            $('.constructor_dropdown2').slideToggle(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
    });

    $(function () {
        $('.card_description_item_first').on('click', function () {
            $('.card_description_item_first_text').slideToggle(300, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
            $('.card_description_next1').toggleClass('transform');
            $('.card_description_item_first').toggleClass('card_description_mobile_active');
        });
    });

    $(function () {
        $('.card_description_item_second').on('click', function () {
            $('.card_description_item_second_text').slideToggle(300, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
            $('.card_description_next2').toggleClass('transform');
            $('.card_description_item_second').toggleClass('card_description_mobile_active');
        });
    });

    $(function () {
        $('.card_description_item_third').on('click', function () {
            $('.card_description_item_third_text').slideToggle(300, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
            $('.card_description_next3').toggleClass('transform');
            $('.card_description_item_third').toggleClass('card_description_mobile_active');
        });
    });

    $(function () {
        $('.card_description_item_fourth').on('click', function () {
            $('.card_description_item_fourth_text').slideToggle(300, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
            $('.card_description_next4').toggleClass('transform');
            $('.card_description_item_fourth').toggleClass('card_description_mobile_active');
        });
    });

    $(function () {
        $('.card_description_item_fifth').on('click', function () {
            $('.card_description_item_fifth_text').slideToggle(300, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
            $('.card_description_next5').toggleClass('transform');
            $('.card_description_item_fifth').toggleClass('card_description_mobile_active');
        });
    });


    $("body").on("click", "[data-open-modal-btn]", function (e) {
        e.preventDefault();
        let this_id = $(this).attr("data-open-modal-btn");
        $(".header_modal_active").removeClass("open");
        $("[data-open-modal]").removeClass("open");
        $("[data-open-modal]").each(function () {
            if ($(this).attr("data-open-modal") == this_id) {
                $('.header_modal_active').addClass("open");
                $(this).addClass("open");

            }
        })
    });

    $("body").on("click", "[data-close-modal]", function (e) {
        $(".header_modal_active").removeClass("open");

    });


    $(function () {
        $('.video_play').on('click', function () {
            $('.main_container_modal_video').fadeIn(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
            let this_src = $(this).attr("data-src");
            $(".main_container_modal_video").find("iframe").attr('src', this_src)
        });
        $('.main_modal_active_exit').on('click', function () {
            $('.main_container_modal_video').fadeOut(0, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
        });
    });

    $(function () {
        $('.catalog_item_hover_img').on('click', function () {
            let src = $(this).attr("data-src");
            $(this).parents(".catalog_item").find(".catalog_item_img").find("img").attr('src', src)
        });
    });

    /*  $(this).parents(".cart_main_block_dropdown_container").find(".cart_main_block_dropdown")*/

    $(function () {
        $(".order_form_comment_button").on('click', function () {
            $('.order_form_comment_text_field').val("");
        });
    })


    $(".order_calendar").on('click', function () {
        $('.customLabel').css("display", "none");
        $('.calendar--value').css("display", "block");
    });


    $(function () {
        $('.constructor_right_block_steps_item').on('click', function () {
            $('.constructor_right_block_steps_dropdown_list_container').slideToggle(300, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
            $('.constructor_right_block_steps_img').toggleClass('transform_constructor');
        });
    });

    $(function () {
        $('.order_last_step_button').on('click', function () {
            $(this).parents(".order_last_step_dropdown").find(".order_last_step_dropdown_container").slideToggle(300, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
            $(this).parents(".order_last_step_dropdown").find('.order_right_block_next').toggleClass('transform');
        });
    });


    $(function () {
        $('.lk_buttons_block_button').on('click', function () {
            $(this).parents(".lk_order_table_item").find(".lk_order_table_item_dropdown").slideToggle(200, function () {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                }
            });
            $(this).parents(".order_last_step_dropdown").find('.lk_buttons_block').toggleClass('lk_buttons_block_active');
            $(this).parents(".order_last_step_dropdown").find('.lk_buttons_block_button').toggleClass('lk_buttons_block_button_active');
        });
    });

    /* slider */


    var $navRange = $('.js-range');

    $navRange.each(function () {
        var min = parseInt($(this).data('minValue') || 0),
            max = parseInt($(this).data('maxValue') || 1000),
            currentMin = parseInt($(this).data('currentMinValue') || 0),
            currentMax = parseInt($(this).data('currentMaxValue') || 0),
            $inputMin = $(this).find('.range-widget-min'),
            $inputMax = $(this).find('.range-widget-max'),
            $slider = $(this).find('.range-widget__slider');


        if ($inputMin.length && $inputMax.length && $slider.length) {
            var inputs = [$inputMin[0], $inputMax[0]],
                keypressSlider = $slider[0];

            noUiSlider.create(keypressSlider, {
                start: [currentMin, currentMax],
                connect: true,
                direction: 'ltr',
                range: {
                    'min': min,
                    'max': max
                }
            });

            keypressSlider.noUiSlider.on('update', function (values, handle) {
                inputs[handle].value = parseInt(values[handle]);
            });
        }
    });


    /* constructor steps */
    /*
            (function (query) {
                let alla = Array.prototype.slice.call(document.querySelectorAll(query));
                alla.forEach(function (a, index) {
                    a.addEventListener('click', function (index) {
                        alla.forEach(function (a) {
                            a.classList.remove("steps_active");
                        });
                        this.classList.add('steps_active');
                        document.querySelector('.constructor_right_block_main.steps_active_block').classList.remove('steps_active_block');
                        document.querySelectorAll('.constructor_right_block_main')[index].classList.add('steps_active_block');
                    }.bind(a, index));
                });
            })('.constructor_right_block_steps_item');


    */

    $('.constructor_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        appendDots: $('.dots'),
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    })


    $('.compare_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendDots: $('.dots'),
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

    $('.static_slider_adaptive').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: $('.dots'),
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

    /*  Catalog sliders  */

    $(".productSlider").each(function () {
        let _this = $(this);
        $(this).slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            swipeToSlide: true,
            appendArrows: _this.parents(".productBox").find(".product-arrows"),
            prevArrow: $('.catalog_title_left_arrow'),
            nextArrow: $('.catalog_title_right_arrow'),
            responsive: [
                {
                    breakpoint: 1401,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 1140,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 716,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    });

    $(".secondProductSlider").each(function () {
        let _this = $(this);
        $(this).slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            swipeToSlide: true,
            appendArrows: _this.parents(".productBox").find(".product-arrows"),
            prevArrow: $('.catalog_title_left_arrow2'),
            nextArrow: $('.catalog_title_right_arrow2'),
            responsive: [
                {
                    breakpoint: 1401,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 1140,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 716,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    });

    $(".thirdProductSlider").each(function () {
        let _this = $(this);
        $(this).slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            swipeToSlide: true,
            appendArrows: _this.parents(".productBox").find(".product-arrows"),
            prevArrow: $('.catalog_title_left_arrow3'),
            nextArrow: $('.catalog_title_right_arrow3'),
            responsive: [
                {
                    breakpoint: 1401,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 1140,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 716,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    });

    (function (query) {
        let alla = Array.prototype.slice.call(document.querySelectorAll(query));
        alla.forEach(function (a, index) {
            a.addEventListener('click', function (index) {
                alla.forEach(function (a) {
                    a.classList.remove("card_description_active");
                });
                this.classList.add('card_description_active');
                document.querySelector('.card_description.card_description_active').classList.remove('card_description_active');
                document.querySelectorAll('.card_description')[index].classList.add('card_description_active');
            }.bind(a, index));
        });
    })('.card_description_item');


    /* counter */

    $("body").on("click", ".card_counter_button", function () {
        let min_val = $(this).parents(".card_counter").find(".card_counter_input").attr("min");
        let max_val = $(this).parents(".card_counter").find(".card_counter_input").attr("max");
        let cur_val = +$(this).parents(".card_counter").find(".card_counter_input").val();
        let inp = $(this).parents(".card_counter").find(".card_counter_input");
        if ($(this).hasClass("card_counter_del")) {
            if (min_val) {
                if (!(cur_val - 1 < +min_val)) {
                    $(this).parents(".card_counter").find(".card_counter_input").val(cur_val - 1);
                }
            } else if (!(cur_val - 1 < 0)) {
                $(this).parents(".card_counter").find(".card_counter_input").val(cur_val - 1);
            }
        } else if ($(this).hasClass("card_counter_add")) {
            if (max_val) {
                if (!(cur_val + 1 > +max_val)) {
                    $(this).parents(".card_counter").find(".card_counter_input").val(cur_val + 1);
                }
            } else {
                $(this).parents(".card_counter").find(".card_counter_input").val(cur_val + 1);
            }
        }
    });

    $("body").on("change", ".card_counter_input", function () {
        let min_val = +$(this).attr("min");
        let max_val = +$(this).attr("max");
        let cur_val = +$(this).val();
        let old_val = $(this).attr("data-val");
        if (min_val && max_val) {
            if (cur_val < min_val) {
                $(this).val(min_val)
            } else if (cur_val > max_val) {
                $(this).val(max_val);
            }
        } else if (min_val) {
            if (cur_val < min_val) {
                $(this).val(min_val)
            }
        } else if (max_val) {
            if (cur_val > max_val) {
                $(this).val(max_val);
            }
        }
    });


    /* radio */

    $('[data-open-block]').on('click', function () {
        const activeCls = 'is-active';

        $('[data-content]').removeClass(activeCls);
        $(`[data-content="${$(this).data('open-block')}"`).addClass(activeCls);
    });

    $("body").on("click", "[data-calendar-open]", function (e) {
        if ($(this).parents(".calendarParent").find("[data-calendar-input]").hasClass("__active")) {
            $(this).parents(".calendarParent").find("[data-calendar-input]").removeClass("__active");
            $(this).parents(".calendarParent").find(".calendarParent-main").removeClass("__open");
        } else {
            $(this).parents(".calendarParent").find("[data-calendar-input]").addClass("__active");
            $(this).parents(".calendarParent").find(".calendarParent-main").addClass("__open");
        }
    });

});

$("body").on("click", "[data-calendar-open]", function(e){
    if ($(this).parents(".calendarParent").find("[data-calendar-input]").change) {
        $(this).parents(".personalInputBox").find(".customLabel").addClass("hide");
        $(this).parents(".personalInputBox").find(".customInput-text").addClass("show");
    }

   /* $("[data-calendar-open]").on("change", function() {
          $(this).parents(".calendarParent").find(".calendarParent-main").removeClass("__open");
    })*/

});

