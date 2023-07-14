function Profile() {
    var myProfile = document.getElementById("profileMenu");

    if (myProfile.style.display === "none") {
        myProfile.style.display = "flex";
    } else {
        myProfile.style.display = "none";
    }
}

function Dashboard(){
    document.title = "Dashboard";
    
    document.getElementById("dashboard").style.display="flex";
    document.getElementById("menu").style.display="none";
    document.getElementById("orders").style.display="none";
    document.getElementById("stock").style.display="none";
}

function Menu(){
    document.title = "Menu";
    
    document.getElementById("menu").style.display="flex";
    document.getElementById("dashboard").style.display="none";
    document.getElementById("orders").style.display="none";
    document.getElementById("stock").style.display="none";
}

function Orders(){
    document.title = "Orders";
    
    document.getElementById("menu").style.display="none";
    document.getElementById("dashboard").style.display="none";
    document.getElementById("orders").style.display="flex";
    document.getElementById("stock").style.display="none";
}

function Stock(){
    document.title = "Stock";
    
    document.getElementById("menu").style.display="none";
    document.getElementById("dashboard").style.display="none";
    document.getElementById("orders").style.display="none";
    document.getElementById("stock").style.display="flex";
}

document.addEventListener('click', function(event){
    var icmenu = document.getElementById("profile");
    var mymenu = document.getElementById("profileMenu");
    var themes = document.getElementById("themes");

    if(!icmenu.contains(event.target) && !mymenu.contains(event.target)){
        mymenu.style.display="none";
        themes.style.display="none";
    }
});

function themes(){
    document.getElementById("themes").style.display="flex";
    if(document.getElementById("profileMenu").style.display=="none"){
        document.getElementById("themes").style.display="none";
    }
}


function light(){
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "rgba(242, 242, 242, 1)";
    document.getElementById("SISSA").src = "textblack.png";

    document.querySelectorAll("#profileMenu img").forEach(function(image){
        image.style.filter="invert(0%)";
    });

    document.querySelectorAll(".content, #profileMenu, #themes").forEach(function(element) {
        element.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
      });

    var allLinks = document.querySelectorAll("a,p,h2,h3");
    
    allLinks.forEach(function(link) {
    link.style.color = "rgb(0,0,0)";
    });

    var elements = document.querySelectorAll("#profileMenu a, #themes a");
    elements.forEach(function(element) {
    element.addEventListener("mouseenter", function() {
        this.style.backgroundColor = "rgba(0,0,0,0.5)";
        this.style.filter = "invert(0%)";
    });
});

    elements.forEach(function(element){
        element.addEventListener("mouseleave", function(){
            this.style.backgroundColor = "";
        this.style.filter = "";
        })
    });

    
}

function dark(){
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "rgba(15, 15, 15, 1)";
    document.querySelectorAll(".content, #profileMenu, #themes").forEach(function(element) {
        element.style.backgroundColor = "rgba(39, 39, 39, 0.8)";
      });
    document.getElementById("SISSA").src = "text.png";

    document.querySelectorAll("#profileMenu img").forEach(function(image){
        image.style.filter="invert(100%)";
    });

    //--------------//
    var allLinks = document.querySelectorAll("a, p, h2, h3");
    allLinks.forEach(function(link) {
       
            link.style.color = "rgb(255, 255, 255)";
          
    });

    var buttoninput = document.querySelectorAll("input, button");
    buttoninput.forEach(function(item){
        item.style.color="";
    })
    //--------------//



    //--------------//
    var elements = document.querySelectorAll("#profileMenu a, #themes a");
    elements.forEach(function(element) {
    element.addEventListener("mouseenter", function() {
        this.style.backgroundColor = "rgba(0,0,0,0.5)";
        this.style.filter = "invert(100%)";
    });
});

    elements.forEach(function(element){
        element.addEventListener("mouseleave", function(){
            this.style.backgroundColor = "";
        this.style.filter = "";
        })
    });
    //--------------//
}

function lightAni(){
    document.body.style.backgroundImage = "url('https://thumbs.gfycat.com/BitesizedWeeklyAffenpinscher-size_restricted.gif')";
    document.getElementById("SISSA").src = "textblack.png";

    document.querySelectorAll("#profileMenu img").forEach(function(image){
        image.style.filter="invert(0%)";
    });

    document.querySelectorAll(".content, #profileMenu, #themes").forEach(function(element) {
        element.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
      });

    var allLinks = document.querySelectorAll("a,p,h2,h3");
    
    allLinks.forEach(function(link) {
    link.style.color = "rgb(0,0,0)";
    });

    var elements = document.querySelectorAll("#profileMenu a, #themes a");
    elements.forEach(function(element) {
    element.addEventListener("mouseenter", function() {
        this.style.backgroundColor = "rgba(0,0,0,0.5)";
        this.style.filter = "invert(00%)";
    });
});

    elements.forEach(function(element){
        element.addEventListener("mouseleave", function(){
            this.style.backgroundColor = "";
        this.style.filter = "";
        })
    });
}

function darkAni(){
    document.body.style.backgroundImage = "url('https://j.gifs.com/j2VzyP.gif')";
    document.getElementById("SISSA").src = "text.png";

    document.querySelectorAll("#profileMenu img").forEach(function(image){
        image.style.filter="invert(100%)";
    });


    document.querySelectorAll(".content, #profileMenu, #themes").forEach(function(element) {
        element.style.backgroundColor = "rgba(39, 39, 39, 0.9)";
      });

    var allLinks = document.querySelectorAll("a,p,h2,h3");
    
    allLinks.forEach(function(link) {
    link.style.color = "rgb(255, 255, 255)";
    });
}

function addbox(){
    document.getElementById("addbox").style.display="flex";
}

function nobox(){
    var fields = document.querySelectorAll("#addbox input");
    var value1 = fields[0];
    var value2 = fields[1];
    var value3 = fields[2];

    value1.value="";
    value2.value="";
    value3.value=""

    document.getElementById("addbox").style.display="none";
}

function menuItem() {
    var fields = document.querySelectorAll("#addbox input");
    var value1 = fields[0].value.trim();
    var value2 = fields[1].value.trim();
    var value3 = fields[2].value.trim();
  
    if (value1 !== "" && value2 !== "" && value3 !== "") {
      document.getElementById("saveButton").style.color = "green";
      document.getElementById("saveButton").style.borderColor = "green";

      document.getElementById("saveButton").addEventListener("mouseenter", function(){
        document.getElementById("saveButton").style.color="white";
        document.getElementById("saveButton").style.backgroundColor="green";
      });

      document.getElementById("saveButton").addEventListener("mouseleave", function(){
        document.getElementById("saveButton").style.color="green";
        document.getElementById("saveButton").style.backgroundColor="transparent";
      });
    }

    else{
        document.getElementById("saveButton").style.color = "";
        document.getElementById("saveButton").style.borderColor = "";
        
        document.getElementById("saveButton").addEventListener("mouseenter", function(){
            document.getElementById("saveButton").style.color="";
            document.getElementById("saveButton").style.backgroundColor="";
          });
    
          document.getElementById("saveButton").addEventListener("mouseleave", function(){
            document.getElementById("saveButton").style.color="";
            document.getElementById("saveButton").style.backgroundColor="";
          });
    }
  }
  
  if (document.querySelector("#addbox").style.display === "flex") {
    setInterval(menuItem, 500);
  }