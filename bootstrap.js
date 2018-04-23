document.addEventListener("DOMContentLoaded", () => {

  let color;

  $(".btn").click(function() {
    color = $(event.target).css("background-color")
  })

  function paintColor(event) {
    $(event.target).css("background-color", color)
  }
  $(".pixel").click(paintColor)

});
