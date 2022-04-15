const hamburger = document.querySelector(".hamburger");

const navmenu = document.querySelector(".nav container");

hamburger.addEventListener("click",mobilemenu);


function mobilemenu() {
     hamburger.classList.toggle("active");
     navmenu.classList.toggle("active");
     
    //  document.getElementsByClassName('mylist').style.visibility='visible';

}

const navlink = document.querySelectorAll(".nav-link");

navlink.forEach(n => n.addEventListener("click"),closemenu);

function closemenu() {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
    const button = document.getElementById('toggle');
     button.style.display = "none";
    // document.getElementsByClassName('mylist').style.visibility='hidden';
}

function menuButton() {
    const button = document.getElementById('toggle');
    if (button.style.display == "block") {
        button.style.display = "none"
    } else {
        button.style.display = "block"
    }
}