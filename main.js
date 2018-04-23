document.addEventListener("DOMContentLoaded", () => {

    // Generating Pixel Count =======================================
  let canvas = document.getElementsByClassName("canvas")[0]

  for (var i = 0; i < 2553; i++) {
    let newDiv = document.createElement("div")
    newDiv.classList.add("pixel")
    canvas.appendChild(newDiv)
  }
// storing color on click ========================================

  let color;
  let selectedColor = $(".selectedColor")

  $(".btn").click(function(event) {
    color = $(event.target).css("background-color")
    selectedColor.css("background-color", color)
  })

  function paintColor(event) {
    $(event.target).css("background-color", color)
  }
  $(".pixel").click(paintColor)




});
