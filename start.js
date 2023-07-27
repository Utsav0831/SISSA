let intervalId;

function register() {
  document.querySelector("#aregister a").addEventListener("click", function () {
    clearInterval(intervalId); // Clear previous interval, if any
    document.title = "SISSA - Register";
    //document.querySelector("#signin").style.display = "none";
    document.querySelector("#signin").style.right = "-100%";
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
    //document.querySelector("#signup").style.display = "none";
    document.querySelector("#signup").style.left = "-100%";
    document.querySelector("body").style.backgroundPosition = "";

    intervalId = setInterval(function () {
      document.querySelector("#signin").style.right = "7%";
    }, 50);
  });
}

function logininputs(){
  var myfields = document.querySelectorAll("#signin input");
  var field1 = myfields[0].value;
  var field2 = myfields[1].value;

  if(field1 != "" && field2 != ""){
    document.querySelector("#signin button").style.backgroundColor = "rgba(240, 90, 40, 1)";
    document.querySelector("#signin button").style.color = "white";
  }

  else{
    document.querySelector("#signin button").style.backgroundColor = "";
    document.querySelector("#signin button").style.color = "";
  }
}

function registerinputs(){
  var myfields = document.querySelectorAll("#signup input");
  var field1 = myfields[0].value;
  var field2 = myfields[1].value;
  var field3 = myfields[2].value;
  var field4 = myfields[3].value;

  if(field1 != "" && field2 != "" && field3 != "" && field4 != ""){
    document.querySelector("#signup button").style.backgroundColor = "rgb(15, 168, 15)";
    document.querySelector("#signup button").style.color = "white";
  }

  else{
    document.querySelector("#signup button").style.backgroundColor = "";
    document.querySelector("#signup button").style.color = "";
  }
}