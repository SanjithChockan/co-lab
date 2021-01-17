let button = document.getElementById("SignIn");

var data;

document.getElementById('pre-loader').style.visibility = 'hidden'
button.addEventListener("click", () => {
  document.getElementById('pre-loader').style.visibility = 'visible'

  setTimeout(function () {
    window.location.href = "./interest.html";
  }, 2000);

});



