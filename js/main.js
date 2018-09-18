var options = document.querySelectorAll("option");

for(var i = 0; i < options.length; i++) {
  if(options[i].innerText != "") {
    document.querySelector("#custom-select").innerHTML += "<li>" + options[i].innerText + "</li>";
  }
}

document.querySelector("#custom-select").addEventListener("click", function(e) {
  e.target.classList.toggle("open");
})