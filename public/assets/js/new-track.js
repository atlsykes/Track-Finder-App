$(document).ready(function () {
    $("#track-type").click(function () {
        $(".popup-overlay, .popup-content").addClass("active");
        $(".close, .popup-overlay").on("click", function () {
            $(".popup-overlay, .popup-content").removeClass("active");
        });
    });
    // name,address,city,state,zipCode,trackType,details (from seeds)
    $("#add-track").click(function (e) {
        e.preventDefault();
        const name = $("#name").val();
        const address = $("#address").val();
        const city = $("#city").val();
        const state = $("#state").val();
        // const zipCode = $("#zipCode").val();
        const trackType = $("#trackType").val();
        // const availability = $("#availability").val();
        const details = $("#details").val();

        $.ajax({
            method: "POST",
            url: "/api/tracks",
            data: {
                name,
                address,
                city,
                state,
                // zipCode,
                trackType,
                // availability,
                details,
            },
        }).then((response) => {
            window.location.replace("/track/new");
        });
    });
});
