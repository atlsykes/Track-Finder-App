$(document).ready(function () {
  $(".delete-track").on("click", function () {
    const id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: `/api/tracks/${id}`
    }).then(response => {
      window.location.reload();
    });
  });
});
