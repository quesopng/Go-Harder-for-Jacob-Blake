var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

//I want to create the variables for the action box and stuff
var donation = $(".donation");
var call = $(".call");
var petition = $(".petition");
var emails = $(".emails");

//now time for the click function to resources
donation.on("click",donationDirect);
call.on("click", callDirect);
petition.on("click", petitionDirect);
emails.on("click", emailsDirect);

//function time
function donationDirect() {
  window.open("https://www.gofundme.com/f/justiceforjacobblake");
}

function petitionDirect() {
  window.open("./petitionPage.html");
}

function callDirect() {
  window.open("./callPage.html");
}

function emailsDirect() {
  window.open("./emailsPage.html")
}