$(document).ready(function () {
  $("#save-track-button").on("submit", function (e) {
    e.preventDefault();
    const name = $("#name").val();
    const trackType = $("#trackType").val();
    const address = $("#address").val();
    const city = $("#city").val();
    const state = $("#state").val();
    const zipCode = $("#zipCode").val();
    const details = $("#details").val();

    $.ajax({
      method: "PUT",
      url: `/api/tracks/${id}`,
      data: {
        trackType,
        details,
      },
    }).then((response) => {
      window.location.replace(`/tracks/${city}/view`);
    });
  });
});
