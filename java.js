
$(document).ready(function () {
    $(".card").on("mouseover", function () {
        $(this).nextAll().addClass("prev");
    });
    $(".card").on("mouseout", function () {
        $(this).nextAll().removeClass("prev");
    });
});
