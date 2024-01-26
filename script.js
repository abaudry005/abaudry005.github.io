/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function myFunctionContact() {
    if(document.getElementById("contact-hide").style.display === "flex"){
        document.getElementById("contact-hide").style.display = "none";
    }
    else{
        document.getElementById("contact-hide").style.display = "flex";
    }
}

function myFunctionDarkMode() {
  if(document.getElementById("body").style.backgroundColor === "Black !important"){
      document.getElementById("body").style.backgroundColor = "White";
  }
  else{
      document.getElementById("contact-hide").style.backgroundColor = "Black !important";
  }
}