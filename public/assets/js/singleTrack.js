$(document).ready(function () {
  let city = "Miami";
  let state = "Florida";
  let map = `<iframe class="text-center animated fadeIn delay-2s" frameborder="0" style="border:0;" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyClFZgU_nLZ7QpoqQC_IvIizDwaNpYsYsU&amp;q=${city}, ${state}" allowfullscreen="">
    </iframe>`;
  theLocationOnThePage.append(map);
});
