$(document).ready(function () {
    $("#track-type").click(function () {
        $(".popup-overlay, .popup-content").addClass("active");
        $(".close, .popup-overlay").on("click", function () {
            $(".popup-overlay, .popup-content").removeClass("active");
        });
    });
});
