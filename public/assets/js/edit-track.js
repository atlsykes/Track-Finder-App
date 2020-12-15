$(document).ready(function () {
  $("#save-track-button").on("submit", function (e) {
    e.preventDefault();
    const trackName = $("#name").val();
    const trackType = $("#trackType").val();
    const address = $("#address").val();
    const city = $("#city").val();
    const state = $("#state").val();
    const zipCode = $("#zipCode").val();
    const availability = $("#details").val();

    $.ajax({
      method: "PUT",
      url: `/api/tracks/${id}`,
      data: {
        trackName,
        trackType,
        address,
        city,
        state,
        zipCode,
        availability,
      },
    }).then((response) => {
      window.location.replace("/tracks");
    });
  });

  $("#delete-track-button").on("submit", function (e) {
    e.preventDefault();
    const trackName = $("#name").val();
    const trackType = $("#trackType").val();
    const address = $("#address").val();
    const city = $("#city").val();
    const state = $("#state").val();
    const zipCode = $("#zipCode").val();
    const availability = $("#details").val();

    $.ajax({
      method: "DELETE",
      url: `/api/tracks/${id}`,
      data: {
        trackName,
        trackType,
        address,
        city,
        state,
        zipCode,
        availability,
      },
    }).then((response) => {
      window.location.replace("/tracks");
    });
  });
});
