$(document).ready(function () {
  // console.log("Hello World!")
  $("#track-type-button").click(function () {
    $(".popup-overlay, .popup-content").addClass("active");
    $(".close, .popup-overlay").on("click", function () {
      $(".popup-overlay, .popup-content").removeClass("active");
    });
  });
  // name,address,city,state,zipCode,trackType,details (from seeds)
  $("#add-track").click(function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    const name = $("#name").val();
    const trackType = $("#trackType").val();
    const address = $("#address").val();
    const city = $("#city").val();
    const state = $("#state-name").val();
    const zipCode = $("#zipCode").val();
    const details = $("#details").val();

    // console.log(zipCode);

    $.ajax({
      method: "POST",
      url: "/api/tracks",
      data: {
        name,
        address,
        city,
        state,
        zipCode,
        trackType,
        details,
      },
    }).then((response) => {
      window.location.replace(`/tracks/${city}/view`);
    });
  });
});