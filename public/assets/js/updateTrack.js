$(document).ready(function () {
  const city = $("#city-update").val();
  console.log("city", city);
  $("#save-track-button").on("click", function (e) {
    e.preventDefault();
    console.log("you clicked this button!!!!!!!!!")
    const id = $("#track-id").val();
    const trackType = $("#track-type-update").val();
    const city = $("#city-update").val();
    const details = $("#details").val();
    console.log("id", id);
    console.log("city", city);

    $.ajax({
      method: "PUT",
      url: `/api/tracks/${id}`,
      data: {
        trackType,
        details,
      },
    }).then((response) => {
      console.log(response);
      window.location.replace("/tracks/" + city + "/view");
    }).fail(err => {
      alert("Error! Please enter correct values for each input!");
    })
  });
});
