$(document).ready(function () {
    moment.locale('ru');
    let now = moment();
    let todayDate = now.format('YYYY-MM-DD');
    let todayDate_t = now.format('DD.MM.YYYY');
    $(".inline--calendar").each(function () {
        let _this = $(this);
        $(this).dateRangePicker({
            language: 'ru',
            format: 'DD.MM.YYYY',
            alwaysOpen: true,
            startOfWeek: 'monday',
            container: _this[0],
            inline: true,
            singleDate: true,
            monthSelect: true,
            yearSelect: true,
            singleMonth: true,
            customArrowPrevSymbol: '<svg style="width: 7px; height: 10px; transform: rotate(90deg)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 5.35"><defs><style>.cls-1{fill:#28272f;}</style></defs><title>NEXT</title><polygon class="cls-1" points="8 0 4 5.35 0 0 8 0"/></svg>',
            customArrowNextSymbol: '<svg style="width: 7px; height: 10px; transform: rotate(270deg)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 5.35"><defs><style>.cls-1{fill:#28272f;}</style></defs><title>NEXT</title><polygon class="cls-1" points="8 0 4 5.35 0 0 8 0"/></svg>',
            showShortcuts: false,
            showTopbar: false,
            separator: ' - ',
            setValue: function (s, s1, s2) {
                _this.parents(".calendarParent").find(".calendar--value").val(s);
                _this.parents(".calendarParent").find(".calendar--value").change();
            }
        });

        $(".calendar--value").on("change", function () {
            $(this).removeClass("__open");
            $(this).parents(".calendarParent").find(".calendarParent-main").removeClass("__open")

        })

    });


})
