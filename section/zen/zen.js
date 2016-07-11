var buttons = document.getElementsByClassName('pad'),
  text = document.getElementById('text'),
  color = document.getElementById('color'),
  colorCode = document.getElementById('colorCode');

for (b in buttons) {
  if (buttons.hasOwnProperty(b)) {
    buttons[b].addEventListener("click", function() {

      console.log(this.value);

      if (this.value === "clear") {

        color.style.backgroundColor = "transparent";
        colorCode.innerHTML = "";
        text.value = "";

      } else if (this.value === "enter") {

        if (text.value.length < 6) {

          console.log(text.value);
          colorCode.innerHTML = "";
          text.value = "";

        } else if (text.value.length === 6) {

          color.style.backgroundColor = "#"+text.value;
          colorCode.innerHTML = "#"+text.value;
          //text.value = "";

        } else {

          console.log("but nah");

        }

      } else {

        if (text.value.length < 6) {

          text.value = (text.value + this.value);

        } else if (text.value.length === 6) {

          var shifted = text.value.split("").splice(1, 6);
          shifted.push(this.value);
          shifted = shifted.join("");
          text.value = shifted;

          console.log(shifted);

        } else {

          console.log("nope")

        }
        
      }

    }, false);

  }
}

document.getElementById('text').addEventListener('click', function () {
  console.log(text.value)
});
