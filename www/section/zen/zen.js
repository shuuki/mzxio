var buttons = document.getElementsByClassName('pad');
var text = document.getElementById('text');

for (b in buttons) {
  if (buttons.hasOwnProperty(b)) {
    buttons[b].addEventListener("click", function() {

      console.log(this.value);

      if (this.value === "clear") {

        text.value = "";

      } else if (this.value === "enter") {

        if (text.value.length > 0) {
          console.log(text.value);
        } else {
          console.log("but nah");
        }

      } else {

        if (text.value.length < 6) {
          text.value = (text.value + this.value);
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
