$(document).ready(function () {
  $('.track-directions').on('click', function () {
    const addr = $(this).data('address')
    const city = $(this).data('city')
    const state = $(this).data('state')
    window.open(
      `https://www.google.com/maps/place/${addr}+${city}+${state}`
    )
  })
})
