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
    document.getElementById("settings").style.display="none";
}

function Menu(){
    document.title = "Menu";
    
    document.getElementById("menu").style.display="flex";
    document.getElementById("dashboard").style.display="none";
    document.getElementById("orders").style.display="none";
    document.getElementById("stock").style.display="none";
    document.getElementById("settings").style.display="none";
}

function Orders(){
    document.title = "Orders";
    
    document.getElementById("menu").style.display="none";
    document.getElementById("dashboard").style.display="none";
    document.getElementById("orders").style.display="flex";
    document.getElementById("stock").style.display="none";
    document.getElementById("settings").style.display="none";
}

function Stock(){
    document.title = "Stock";
    
    document.getElementById("menu").style.display="none";
    document.getElementById("dashboard").style.display="none";
    document.getElementById("orders").style.display="none";
    document.getElementById("stock").style.display="flex";
    document.getElementById("settings").style.display="none";
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

function Settings(){
    document.title = "Settings";
    
    document.getElementById("menu").style.display="none";
    document.getElementById("dashboard").style.display="none";
    document.getElementById("orders").style.display="none";
    document.getElementById("stock").style.display="none";
    document.getElementById("settings").style.display="flex";

    document.getElementById("profileMenu").style.display="none";
}

function Privacy(){

    if(document.querySelector(".Privacy").style.display=="flex"){
        document.querySelector("#privacy").addEventListener("mousedown", function(){
            document.querySelector(".Privacy").style.display = "none";
            document.querySelector("#privacy img").style.transform = "rotate(0deg)";
            document.querySelector("#privacy").style.fontWeight = "";

            var fields = document.querySelectorAll(".settings .Privacy p input");
            var value1 = fields[0];
            var value2 = fields[1];
            var value3 = fields[2];

            value1.value = "";
            value2.value = "";
            value3.value = "";
        })
    }

    else{
        document.querySelector("#privacy").addEventListener("mousedown", function(){
            document.querySelector("#privacy img").style.transform = "rotate(90deg)";
            document.querySelector("#privacy").style.fontWeight = "700";
            document.querySelector(".Privacy").style.display="flex";
        })
    }
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

    document.getElementById("themes").addEventListener("mouseenter",function(){
        setInterval(document.getElementById("themes").addEventListener("mouseleave",function(){
            document.getElementById("themes").style.display="none";
        }),1000);
    });
    
}


function light(){
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "rgba(242, 242, 242, 1)";
    document.querySelectorAll(".content *").forEach(function(borders){
        borders.style.borderColor = "rgba(0,0,0,0.2)"
    });
    document.getElementById("SISSA").src = "textblack.png";

    document.querySelectorAll("#profileMenu img, .settings .content a img, #menu #editMenu img").forEach(function(image){
        image.style.filter="invert(0%)";
    });

    document.querySelectorAll(".content, #profileMenu, #themes, #alert").forEach(function(element) {
        element.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
      });

    var allLinks = document.querySelectorAll("a,p,h2,h3,th,td");
    
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

    document.querySelectorAll(".settings #errors p, #menu #alert").forEach(function(cons){
        cons.style.color="";
    });
}

function dark(){
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "rgba(15, 15, 15, 1)";
    document.querySelectorAll(".content *").forEach(function(borders){
        borders.style.borderColor = "rgba(255,255,255,0.2)"
    });
    document.querySelectorAll(".content, #profileMenu, #themes, #alert").forEach(function(element) {
        element.style.backgroundColor = "rgba(39, 39, 39, 0.8)";
      });
    document.getElementById("SISSA").src = "text.png";

    document.querySelectorAll("#profileMenu img, .settings .content a img, #menu #editMenu img").forEach(function(image){
        image.style.filter="invert(100%)";
    });

    //--------------//
    var allLinks = document.querySelectorAll("a,p,h2,h3,th,td");
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

    document.querySelectorAll(".settings #errors p, #menu #alert").forEach(function(cons){
        cons.style.color="";
    });
}

function lightAni(){
    document.body.style.backgroundImage = "url('https://thumbs.gfycat.com/BitesizedWeeklyAffenpinscher-size_restricted.gif')";
    document.querySelectorAll(".content *").forEach(function(borders){
        borders.style.borderColor = "rgba(0,0,0,0.2)";
    })

    document.getElementById("SISSA").src = "textblack.png";

    document.querySelectorAll("#profileMenu img, .settings .content a img, #menu #editMenu img").forEach(function(image){
        image.style.filter="invert(0%)";
    });

    document.querySelectorAll(".content, #profileMenu, #themes, #alert").forEach(function(element) {
        element.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
      });

    var allLinks = document.querySelectorAll("a,p,h2,h3,th,td");
    
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

    document.querySelectorAll(".settings #errors p, #menu #alert").forEach(function(cons){
        cons.style.color="";
    });
}

function darkAni(){
    document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/dc/7b/9b/dc7b9b31d491c5b44174436cddf0411f.gif')";
    document.querySelectorAll(".content *").forEach(function(borders){
        borders.style.borderColor = "rgba(255,255,255,0.2)"
    });

    

    document.getElementById("SISSA").src = "text.png";


    document.querySelectorAll("#profileMenu img, .settings .content a img, #menu #editMenu img").forEach(function(image){
        image.style.filter="invert(100%)";
    });


    document.querySelectorAll(".content, #profileMenu, #themes, #alert").forEach(function(element) {
        element.style.backgroundColor = "rgba(39, 39, 39, 0.9)";
      });

    var allLinks = document.querySelectorAll("a,p,h2,h3,th,td");
    
    allLinks.forEach(function(link) {
    link.style.color = "rgb(255, 255, 255)";
    });

    document.querySelectorAll(".settings #errors p, #menu #alert").forEach(function(cons){
        cons.style.color="";
    });

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
}

//---------------------------------------------------------------------------------------------------------

function addbox(){
    document.getElementById("addbox").style.display="flex";
}

function addStuff(){
    document.getElementById("addStuff").style.display="flex";
}

//---------------------------------------------------------------------------------------------------------
function nobox(){
    document.querySelector("#menu #addbox h3").textContent="Add New Item";

    var fields = document.querySelectorAll("#addbox input");
    var value1 = fields[0];
    var value2 = fields[1];
    var value3 = fields[2];

    value1.value="";
    value2.value="";
    value3.value=""

    var fields = document.querySelectorAll("#addStuff input");
    var value1 = fields[0];
    var value2 = fields[1];
    var value3 = fields[2];

    value1.value="";
    value2.value="";
    value3.value="";

    document.getElementById("addbox").style.display="none";
    document.getElementById("addStuff").style.display="none";
}
//---------------------------------------------------------------------------------------------------------

function editMenu(){
    document.getElementById("alert").style.display="block";

    setInterval(function(){
        document.getElementById("alert").style.display="none";
    },5000);

    var paragraphs = document.querySelectorAll("#lists p");
    var i = 0;
    
    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].addEventListener("click", function() {
        document.getElementById("alert").style.display="none";
        document.querySelector("#menu #addbox h3").textContent="Edit Item";
        document.getElementById("addbox").style.display = "flex";

        var section = this.parentNode.querySelector("h3").textContent;
        var item = this.textContent.slice(0,-(this.querySelector("span").textContent.length));
        var price = this.querySelector("span").textContent.substring(4);

        var fields = document.querySelectorAll("#addbox input");
        var value1 = fields[0];
        var value2 = fields[1];
        var value3 = fields[2];

        value1.value=section;
        value2.value=item;
        value3.value=price;
      });
    } 
}

//---------------------------------------------------------------------------------------------------------
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

//---------------------------------------------------------------------------------------------------------
  
function stockItem() {
    var fields = document.querySelectorAll("#addStuff input");
    var value1 = fields[0].value.trim();
    var value2 = fields[1].value.trim();
    var value3 = fields[2].value.trim();
  
    if (value1 !== "" && value2 !== "" && value3 !== "") {
      document.getElementById("saveStock").style.color = "green";
      document.getElementById("saveStock").style.borderColor = "green";

      document.getElementById("saveStock").addEventListener("mouseenter", function(){
        document.getElementById("saveStock").style.color="white";
        document.getElementById("saveStock").style.backgroundColor="green";
      });

      document.getElementById("saveStock").addEventListener("mouseleave", function(){
        document.getElementById("saveStock").style.color="green";
        document.getElementById("saveStock").style.backgroundColor="transparent";
      });
    }

    else{
        document.getElementById("saveStock").style.color = "";
        document.getElementById("saveStock").style.borderColor = "";
        
        document.getElementById("saveStock").addEventListener("mouseenter", function(){
            document.getElementById("saveStock").style.color="";
            document.getElementById("saveStock").style.backgroundColor="";
          });
    
          document.getElementById("saveStock").addEventListener("mouseleave", function(){
            document.getElementById("saveStock").style.color="";
            document.getElementById("saveStock").style.backgroundColor="";
          });
    }
  }

//---------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------
  function passwords(){
    var fields = document.querySelectorAll(".settings .Privacy p input");
    var value1 = fields[0].value;
    var value2 = fields[1].value;
    var value3 = fields[2].value;
  
    if (value1 !== "" && value2 !== "" && value3 !== "") {
        if(value2==value3){
            document.getElementById("saveChange").style.color = "green";
            document.getElementById("saveChange").style.borderColor = "green";

            document.getElementById("saveChange").addEventListener("mouseenter", function(){
                document.getElementById("saveChange").style.color="white";
                document.getElementById("saveChange").style.backgroundColor="green";
            });

            document.getElementById("saveChange").addEventListener("mouseleave", function(){
                document.getElementById("saveChange").style.color="green";
                document.getElementById("saveChange").style.backgroundColor="transparent";
            });

        }

        else{
            document.getElementById("saveChange").style.color = "";
        document.getElementById("saveChange").style.borderColor = "";
        
        document.getElementById("saveChange").addEventListener("mouseenter", function(){
            document.getElementById("saveChange").style.color="";
            document.getElementById("saveChange").style.backgroundColor="";
          });
    
          document.getElementById("saveChange").addEventListener("mouseleave", function(){
            document.getElementById("saveChange").style.color="";
            document.getElementById("saveChange").style.backgroundColor="";
          });
        }
      
    }

    else{
        document.getElementById("saveChange").style.color = "";
        document.getElementById("saveChange").style.borderColor = "";
        
        document.getElementById("saveChange").addEventListener("mouseenter", function(){
            document.getElementById("saveChange").style.color="";
            document.getElementById("saveChange").style.backgroundColor="";
          });
    
          document.getElementById("saveChange").addEventListener("mouseleave", function(){
            document.getElementById("saveChange").style.color="";
            document.getElementById("saveChange").style.backgroundColor="";
          });
    }
  }
  //---------------------------------------------------------------------------------------------------------