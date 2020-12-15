$(document).ready(function () {
  console.log("Hello world");
  let city = "Miami";
  let state = "Florida";
  let map = `<iframe class="text-center animated fadeIn delay-2s" frameborder="0" style="border:0;" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyClFZgU_nLZ7QpoqQC_IvIizDwaNpYsYsU&amp;q=${city}, ${state}" allowfullscreen="">
    </iframe>`;
  theLocationOnThePage.append(map);
  const email = $("#email").val();
  const password = $("#password").val();
  const firstName = $("#firstName").val();
  const lastName = $("#lastName").val();
  console.log(email);
  console.log(password);
  console.log(firstName);
  console.log(lastName);
});
