document.addEventListener("DOMContentLoaded", () => {

    // Generating Pixel Count =======================================
  let canvas = document.getElementsByClassName("canvas")[0]

  for (var i = 0; i < 2556; i++) {
    let newDiv = document.createElement("div")
    newDiv.classList.add("pixel")
    canvas.appendChild(newDiv)
  }
// storing color on click ========================================

  let color;

  $(".btn").click(function() {
    color = $(event.target).css("background-color")
  })

  function paintColor(event) {
    $(event.target).css("background-color", color)
  }
  $(".pixel").click(paintColor)



});
