//call up the variables
var changeorgJustice = $(".changeJusticeBlake");
var chargeTheCops = $(".chargeTheCops");
var demandJustice = $(".demandJustice");
var whitehousePetition = $(".whitehousePetition");

//create the event listeners for the on-click function
changeorgJustice.on("click", changeorgJusticeDirect);
chargeTheCops.on("click", chargeTheCopsDirect);
demandJustice.on("click", demandJusticeDirect);
whitehousePetition.on("click", whitehousePetitionDirect);

//create the functions
function changeorgJusticeDirect() {
  window.open(
    "https://www.change.org/p/human-rights-campaign-justice-for-jacob-blake"
  );
}

function chargeTheCopsDirect() {
  window.open(
    "https://www.change.org/p/tony-evers-charge-the-cops-who-shot-jacob-blake"
  );
}

function demandJusticeDirect() {
  window.open("https://signup.gosociafy.com/GoSociafy/SignUp235");
}

function whitehousePetitionDirect() {
  window.open("https://petitions.whitehouse.gov/petition/justice-jacob-blake");
}
