"use strict";

function websiteVisits(response) {
  document.querySelector("#visits").textContent = response.value;
}
const menu = document.querySelector("#menuToggle");
const openmenu = document.querySelector(".input-field");
const Sidemenu = document.querySelector(".side-menu");
const hidden = document.querySelector(".hidden");
const downArow = document.querySelector("#downarrow-1");
const resourcesLink = document.querySelector("#r-1-1");
const laptoparrow = document.querySelector("#right-arrow");

const home = document.querySelector("#menu-home");
const secret = document.querySelector("#menu-secret");
const resources = document.querySelector("#menu-resources");
const reachus = document.querySelector("#menu-reachus");
const footersection = document.querySelector(".whole-footer");
const resourcessection = document.querySelector(".head");
const secretSection = document.querySelector(".below-hero");
const WholeSection = document.querySelector(".screen-part1");
const toTop = document.querySelector(".totop");

const downArow2 = document.querySelector("#downarrow-2");
const resourcesLink2 = document.querySelector("#r-1-2");

const downArow3 = document.querySelector("#downarrow-3");
const resourcesLink3 = document.querySelector("#r-1-3");

const downArow4 = document.querySelector("#downarrow-4");
const resourcesLink4 = document.querySelector("#r-1-4");

const downArow5 = document.querySelector("#downarrow-5");
const resourcesLink5= document.querySelector("#r-1-5");

const downArow6 = document.querySelector("#downarrow-6");
const resourcesLink6 = document.querySelector("#r-1-6");

const downArow7 = document.querySelector("#downarrow-7");
const resourcesLink7 = document.querySelector("#r-1-7");

const downArow8 = document.querySelector("#downarrow-8");
const resourcesLink8 = document.querySelector("#r-1-8");

const downArow9 = document.querySelector("#downarrow-9");
const resourcesLink9 = document.querySelector("#r-1-9");

const downArow10 = document.querySelector("#downarrow-10");
const resourcesLink10 = document.querySelector("#r-1-10");

const downArow11 = document.querySelector("#downarrow-11");
const resourcesLink11 = document.querySelector("#r-1-11");

const downArow12 = document.querySelector("#downarrow-12");
const resourcesLink12 = document.querySelector("#r-1-12");

const downArow13 = document.querySelector("#downarrow-13");
const resourcesLink13 = document.querySelector("#r-1-13");

const rapidoCode = document.querySelector(".cp-rapido");
const AmazonPayCode = document.querySelector(".cp-amazon");
const AmazonPay = document.querySelector("#amazon-pay-code");
const rapido = document.querySelector("#rapido");
const zeptoCode = document.querySelector(".cp-zepto");
const zepto = document.querySelector("#zepto");
const olaCode = document.querySelector(".cp-ola");
const ola = document.querySelector("#ola");
const blocksCode = document.querySelector(".cp-c-blocks");
const codingB = document.querySelector("#c-blocks");


let open1 = false;
let open = false;
let open2 = false;
let open3 = false;
let open4 = false;
let open5 = false;
let open6 = false;
let open7 = false;
let open8 = false;
let open9 = false;
let open10 = false;
let open11 = false;
let open12 = false;
let open13 = false;

menu.addEventListener("click", function(){
  if(openmenu.checked){
  Sidemenu.style.display = "flex";
  } else {
    Sidemenu.style.display = "none";
  }
})

home.addEventListener("click" , function(){
  Sidemenu.style.display = "none";
  openmenu.checked = false;
  open = false;
})

secret.addEventListener("click", function(){
  secretSection.scrollIntoView({behavior:"smooth"});
  open = false;
})

toTop.addEventListener("click", function(){
  WholeSection.scrollIntoView({behavior:"smooth"});
  open = false;
  // preventdefault();
})

resources.addEventListener("click", function(){
  resourcessection.scrollIntoView({behavior:"smooth"});
  open = false;
})

reachus.addEventListener("click", function(){
  footersection.scrollIntoView({behavior:"smooth"});
  open = false;
})

hidden.addEventListener("click" , function(){
  hidden.style.filter = "none";
  hidden.textContent= "College teaches you everything except how useless college is."
})

downArow.addEventListener("click", function () {
  if (open1 === false) {
    downArow.style.transform = "rotate(180deg)";
    downArow.style.animation = "antirotateclock 1s 1"
    resourcesLink.style.display = "flex";
    open1 = true;
  } else if (open1 === true) {
    downArow.style.transform = "rotate(0deg)";
    resourcesLink.style.display = "none";
    downArow.style.animation = "rotateclock 1s 1"    
    open1 = false;
  }
});

downArow2.addEventListener("click", function () {
  if (open2 === false) {
    downArow2.style.transform = "rotate(180deg)";
    downArow2.style.animation = "antirotateclock 1s 1"
    resourcesLink2.style.display = "flex";
  
    open2 = true;
  } else if (open2 === true) {
    downArow2.style.transform = "rotate(0deg)";
    resourcesLink2.style.display = "none";
    downArow2.style.animation = "rotateclock 1s 1"    
    open2 = false;
  }
});


downArow3.addEventListener("click", function () {
  if (open3 === false) {
    downArow3.style.transform = "rotate(180deg)";
    downArow3.style.animation = "antirotateclock 1s 1"
    resourcesLink3.style.display = "flex";
    open3 = true;
  } else if (open3 === true) {
    downArow3.style.transform = "rotate(0deg)";
    resourcesLink3.style.display = "none";
    downArow3.style.animation = "rotateclock 1s 1"    
    open3 = false;
  }
});


downArow4.addEventListener("click", function () {
  if (open4 === false) {
    downArow4.style.transform = "rotate(180deg)";
    downArow4.style.animation = "antirotateclock 1s 1"
    resourcesLink4.style.display = "flex";
    open4 = true;
  } else if (open4 === true) {
    downArow4.style.transform = "rotate(0deg)";

    resourcesLink4.style.display = "none";
    downArow4.style.animation = "rotateclock 1s 1"    
    open4 = false;
  }
});


downArow5.addEventListener("click", function () {
  if (open5 === false) {
    downArow5.style.transform = "rotate(180deg)";
    downArow5.style.animation = "antirotateclock 1s 1"
    resourcesLink5.style.display = "flex";
    open5 = true;
  } else if (open5 === true) {
    downArow5.style.transform = "rotate(0deg)";
    resourcesLink5.style.display = "none";
    downArow5.style.animation = "rotateclock 1s 1"    
    open5 = false;
  }
});


downArow6.addEventListener("click", function () {
  if (open6 === false) {
    downArow6.style.transform = "rotate(180deg)";
    downArow6.style.animation = "antirotateclock 1s 1"
    resourcesLink6.style.display = "flex";
    open6 = true;
  } else if (open6 === true) {
    downArow6.style.transform = "rotate(0deg)";
    resourcesLink6.style.display = "none";
    downArow6.style.animation = "rotateclock 1s 1"    
    open6 = false;
  }
});


downArow7.addEventListener("click", function () {
  if (open7 === false) {
    downArow7.style.transform = "rotate(180deg)";
    downArow7.style.animation = "antirotateclock 1s 1"
    resourcesLink7.style.display = "flex";
    open7 = true;
  } else if (open7 === true) {
    downArow7.style.transform = "rotate(0deg)";
    resourcesLink7.style.display = "none";
    downArow7.style.animation = "rotateclock 1s 1"    
    open7 = false;
  }
});


downArow8.addEventListener("click", function () {
  if (open8 === false) {
    downArow8.style.animation = "antirotateclock 1s 1"
    resourcesLink8.style.display = "flex";
    open8 = true;
  } else if (open8 === true) {
    downArow8.style.transform = "rotate(0deg)";
    resourcesLink8.style.display = "none";
    downArow8.style.animation = "rotateclock 1s 1"    
    open8 = false;
  }
});


downArow9.addEventListener("click", function () {
  if (open9 === false) {
    downArow9.style.transform = "rotate(180deg)";
    downArow9.style.animation = "antirotateclock 1s 1"
    resourcesLink9.style.display = "flex";
    open9 = true;
  } else if (open9 === true) {
    downArow9.style.transform = "rotate(0deg)";
    resourcesLink9.style.display = "none";
    downArow9.style.animation = "rotateclock 1s 1"    
    open9 = false;
  }
});

downArow10.addEventListener("click", function () {
  if (open10 === false) {
    downArow10.style.transform = "rotate(180deg)";
    downArow10.style.animation = "antirotateclock 1s 1"
    resourcesLink10.style.display = "flex";
    open10 = true;
  } else if (open10 === true) {
    downArow10.style.transform = "rotate(0deg)";
    resourcesLink10.style.display = "none";
    downArow10.style.animation = "rotateclock 1s 1"    
    open10 = false;
  }
});

downArow11.addEventListener("click", function () {
  if (open11 === false) {
    downArow11.style.transform = "rotate(180deg)";
    downArow11.style.animation = "antirotateclock 1s 1"
    resourcesLink11.style.display = "flex";
    open11 = true;
  } else if (open11 === true) {
    downArow11.style.transform = "rotate(0deg)";
    resourcesLink11.style.display = "none";
    downArow11.style.animation = "rotateclock 1s 1"    
    open11 = false;
  }
});

downArow12.addEventListener("click", function () {
  if (open12 === false) {
    downArow12.style.transform = "rotate(180deg)";
    downArow12.style.animation = "antirotateclock 1s 1"
    resourcesLink12.style.display = "flex";
    open12 = true;
  } else if (open12 === true) {
    downArow12.style.transform = "rotate(0deg)";
    resourcesLink12.style.display = "none";
    downArow12.style.animation = "rotateclock 1s 1"    
    open12 = false;
  }
});

downArow13.addEventListener("click", function () {
  if (open13 === false) {
    downArow13.style.transform = "rotate(180deg)";
    downArow13.style.animation = "antirotateclock 1s 1"
    resourcesLink13.style.display = "flex";
    open13 = true;
  } else if (open13 === true) {
    downArow13.style.transform = "rotate(0deg)";
    resourcesLink13.style.display = "none";
    downArow13.style.animation = "rotateclock 1s 1"    
    open13 = false;
  }
});

rapidoCode.addEventListener("click" , function(){
  navigator.clipboard.writeText(rapido.textContent).then(() => {
    alert("Copied to clipboard");
})
});

AmazonPayCode.addEventListener("click" , function(){
  navigator.clipboard.writeText(AmazonPay.textContent).then(() => {
    alert("Copied to clipboard");
})
});

zeptoCode.addEventListener("click" , function(){
  navigator.clipboard.writeText(zepto.textContent).then(() => {
    alert("Copied to clipboard");
})
});

olaCode.addEventListener("click" , function(){
  navigator.clipboard.writeText(ola.textContent).then(() => {
    alert("Copied to clipboard");
})
});

blocksCode.addEventListener("click" , function(){
  navigator.clipboard.writeText(codingB.textContent).then(() => {
    alert("Copied to clipboard");
})

});


