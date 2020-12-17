$(document).ready(function () {
  $("#view-track").on("submit", function (e) {
    e.preventDefault();
    const trackName = $("#name").val();
    const trackType = $("#trackType").val();
    const address = $("#address").val();
    // const city = $("#city").val();
    // const state = $("#state").val();
    const zipCode = $("#zipCode").val();
    const availability = $("#availability").val();
    let city = "Miami";
    let state = "Florida";
    let map = `<iframe class="text-center animated fadeIn delay-2s" frameborder="0" style="border:0;" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyClFZgU_nLZ7QpoqQC_IvIizDwaNpYsYsU&amp;q=${city}, ${state}" allowfullscreen="">
    </iframe>`;
    theLocationOnThePage.append(map);
    console.log(trackName);
    console.log(trackType);
    console.log(address);
    console.log(state);
    console.log(zipCode);
    console.log(availability);
    $.ajax({
      method: "GET",
      url: "/api/tracks/:id",
      data: {
        name,
        trackType,
        address,
        availability,
        city,
        state,
        zipCode,
        availability,
        map,
      },
    }).then((response) => {
      window.location.replace("/tracks");
    });
  });
});
