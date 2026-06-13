$(document).ready(function () {
    let currentSeason = "2026/27";
    let currentMw = "MW1";

    function updateView() {
        if (currentSeason === "2025/26" && currentMw === "MW1") {
            $("#noDataCard").hide();
            $("#matchesListCard").show();
            $("#mwSubtitle").text("Sat 16 Aug - Tue 19 Aug");
        } else {
            $("#noDataCard").show();
            $("#matchesListCard").hide();
            $("#mwSubtitle").text("");
        }
    }

    $("#seasonDropdown .dropdown-item").click(function (e) {
        e.preventDefault();
        $("#seasonDropdown .dropdown-item").removeClass("active");
        $(this).addClass("active");
        currentSeason = $(this).attr("data-val");
        $("#seasonBtn").html(currentSeason + ' <i class="bi bi-chevron-down"></i>');
        updateView();
    });

    $("#mwDropdown .dropdown-item").click(function (e) {
        e.preventDefault();
        $("#mwDropdown .dropdown-item").removeClass("active");
        $(this).addClass("active");
        currentMw = $(this).attr("data-val");
        $("#mwBtn").html(currentMw + ' <i class="bi bi-chevron-down"></i>');
        updateView();
    });

    $("#resetBtn").click(function () {
        currentSeason = "2026/27";
        currentMw = "MW1";

        $("#seasonDropdown .dropdown-item").removeClass("active");
        $("#seasonDropdown .dropdown-item[data-val='2026/27']").addClass("active");

        $("#mwDropdown .dropdown-item").removeClass("active");
        $("#mwDropdown .dropdown-item[data-val='MW1']").addClass("active");

        $("#seasonBtn").html('2026/27 <i class="bi bi-chevron-down"></i>');
        $("#mwBtn").html('MW1 <i class="bi bi-chevron-down"></i>');

        updateView();
    });

    const newsRow = $("#newsCardsRow");
    const scrollButtons = $(".scroll-btns .nav-circle-btn");

    if (newsRow.length && scrollButtons.length >= 2) {
        $(scrollButtons[0]).click(function () {
            newsRow.animate({
                scrollLeft: "-=300"
            }, 300);
        });

        $(scrollButtons[1]).click(function () {
            newsRow.animate({
                scrollLeft: "+=300"
            }, 300);
        });
    }

    updateView();
});
