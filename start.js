let intervalId;

function register() {
  document.querySelector("#aregister a").addEventListener("click", function () {
    clearInterval(intervalId); // Clear previous interval, if any
    document.title = "SISSA - Register";
    document.querySelector("#signin").style.display = "none";
    document.querySelector("#signin").style.right = "99%";
    document.querySelector("#signup").style.display = "flex";
    document.querySelector("body").style.backgroundPosition = "90%";

    intervalId = setInterval(function () {
      document.querySelector("#signup").style.left = "7%";
    }, 50);
  });
}

function login() {
  document.querySelector("#alogin a").addEventListener("click", function () {
    clearInterval(intervalId); // Clear previous interval, if any
    document.title = "SISSA - Log In";
    document.querySelector("#signin").style.display = "flex";
    document.querySelector("#signup").style.display = "none";
    document.querySelector("#signup").style.left = "99%";
    document.querySelector("body").style.backgroundPosition = "";

    intervalId = setInterval(function () {
      document.querySelector("#signin").style.right = "7%";
    }, 50);
  });
}