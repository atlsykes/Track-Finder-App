$(document).ready(function () {

  $("#view-track").on("submit", function (e) {
    e.preventDefault();
    const trackName = $("#name").val();
    const trackType = $("#trackType").val();
    const address = $("#address").val();
    const state = $("#state").val();
    const zipCode = $("#zipCode").val();
    const availability = $("#availability").val();
    console.log(trackName);
    console.log(trackType);
    console.log(address);
    console.log(state);
    console.log(zipCode)
    console.log(availability);

    $.ajax({
      method: "GET",
      url: "/api/tracks/:id",
      data: {
        name,
        trackType,
        address,
        availability,
        state,
        zipCode,
        availability,
      },
    }).then((response) => {
      window.location.replace("/tracks");
    });
  });
});
