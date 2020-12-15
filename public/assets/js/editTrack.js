//This is used for the edit button on the table in tracks.handlebars

$(document).ready(function () {
  $("#edit-track").on("click", () => {
    const id = $(this).data("id");
    console.log(id);
    $.ajax({
      method: "GET",
      url: "/api/tracks/:id",
      data: {
        name,
        trackType,
        address,
        availability
      }
    }).then(response => {
      window.location.replace("/edit-track");
    });
  });
});
