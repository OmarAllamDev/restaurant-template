// Change Your Text Here:-

// Website
let websiteName = "SAVORÉ";

// Hero Section
let heroIntro = "A Taste of Perfection";
let heroDescription = "Experience the perfect blend of flavor, ambience, and hospitality. We make every meal memorable.";

// About Section
let aboutText1 = "At Savoré, every dish tells a story of passion, tradition, and the finest ingredients.";

let aboutText2 = "We believe that great food brings people together and creates memories that last a lifetime.";

// About Features
let aboutFeatureTitle1 = "Fresh Ingredients";
let aboutFeatureText1 = "We source the finest, freshest ingredients every day.";

let aboutFeatureTitle2 = "Authentic Recipes";
let aboutFeatureText2 = "Inspired by traditional Italian recipes with a modern touch.";

let aboutFeatureTitle3 = "Warm Atmosphere";
let aboutFeatureText3 = "A cozy and welcoming place for every special moment.";

// Menu
let menuTitle1 = "Truffle Pasta";
let menuDescription1 = "Creamy truffle sauce with wild mushrooms and parmesan.";
let menuPrice1 = "$18.99";

let menuTitle2 = "Grilled Salmon";
let menuDescription2 = "Fresh salmon with garlic butter sauce & seasonal veggies.";
let menuPrice2 = "$22.99";

let menuTitle3 = "Ribeye Steak";
let menuDescription3 = "Premium grilled steak with herb butter & roasted veggies.";
let menuPrice3 = "$26.99";

let menuTitle4 = "Chocolate Lava Cake";
let menuDescription4 = "Warm chocolate cake with vanilla ice cream.";
let menuPrice4 = "$8.99";

// Gallery
let galleryTitle = "Moments at Savoré";

// Reservation
let reservationPhone = "+1 (234) 567-890";

let reservationOpeningHours = "Mon - Sun: 11:00 AM - 11:00 PM";

// Footer Opening Hours
let footerWeekdays = "Monday - Friday: 11:00 AM - 10:00 PM";

let footerWeekend = "Saturday - Sunday: 11:00 AM - 11:00 PM";

// Footer Contact
let footerEmail = "info@savore.com";
let footerPhone = "(123) 567-890";
let footerLocation = "123 Flavor Street, Food City";

// DON'T EDIT HERE -------------------------------
// Website
document.getElementById("websiteName").textContent = websiteName;

// Hero
document.getElementById("heroIntro").textContent = heroIntro;
document.getElementById("heroDescription").textContent = heroDescription;

// About
document.getElementById("aboutText1").textContent = aboutText1;
document.getElementById("aboutText2").textContent = aboutText2;

// About Features
document.getElementById("aboutFeatureTitle1").textContent = aboutFeatureTitle1;
document.getElementById("aboutFeatureText1").textContent = aboutFeatureText1;

document.getElementById("aboutFeatureTitle2").textContent = aboutFeatureTitle2;
document.getElementById("aboutFeatureText2").textContent = aboutFeatureText2;

document.getElementById("aboutFeatureTitle3").textContent = aboutFeatureTitle3;
document.getElementById("aboutFeatureText3").textContent = aboutFeatureText3;

// Menu
document.getElementById("menuTitle1").textContent = menuTitle1;
document.getElementById("menuDescription1").textContent = menuDescription1;
document.getElementById("menuPrice1").textContent = menuPrice1;

document.getElementById("menuTitle2").textContent = menuTitle2;
document.getElementById("menuDescription2").textContent = menuDescription2;
document.getElementById("menuPrice2").textContent = menuPrice2;

document.getElementById("menuTitle3").textContent = menuTitle3;
document.getElementById("menuDescription3").textContent = menuDescription3;
document.getElementById("menuPrice3").textContent = menuPrice3;

document.getElementById("menuTitle4").textContent = menuTitle4;
document.getElementById("menuDescription4").textContent = menuDescription4;
document.getElementById("menuPrice4").textContent = menuPrice4;

// Gallery
document.getElementById("galleryTitle").textContent = galleryTitle;

// Reservation
document.getElementById("reservationPhone").textContent = reservationPhone;
document.getElementById("reservationOpeningHours").textContent = reservationOpeningHours;

// Footer Opening Hours
document.getElementById("footerWeekdays").innerHTML = footerWeekdays.replace(":", ":<br>");

document.getElementById("footerWeekend").innerHTML = footerWeekend.replace(":", ":<br>");

// Footer Contact
document.getElementById("footerEmail").innerHTML = `<i class="bi bi-envelope me-3"></i>${footerEmail}`;

document.getElementById("footerPhone").innerHTML = `<i class="bi bi-telephone me-3"></i>${footerPhone}`;

document.getElementById("footerLocation").innerHTML = `<i class="bi bi-geo-alt me-3"></i>${footerLocation}`;
