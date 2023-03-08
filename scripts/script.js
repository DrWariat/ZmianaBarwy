var dropdown = document.querySelector(".nav .dropdown");
var nav = document.querySelector(".nav");

//hamburger nowy 
const hamburger = document.querySelector('.hamburger');


const handleClick = () => {
  if (dropdown.style.display === "grid") {
    hamburger.classList.remove('hamburger--active');
        dropdown.style.display = "none";
       
      } else {
        dropdown.style.display = "grid";
        hamburger.classList.toggle('hamburger--active');
      }
}

// widnows size close dropdown
window.addEventListener("resize", function() {
  if (window.innerWidth > 768) {
    dropdown.style.display = "none";
    hamburger.classList.remove('hamburger--active');
  }
});

// Click windows, close dropdown
document.addEventListener("click", function(event) {
  var isClickInside = nav.contains(event.target);
  if (!isClickInside) {
    if (dropdown.style.display === "grid") {
      dropdown.style.display = "none";
      hamburger.classList.remove('hamburger--active');
    }
  }
});

hamburger.addEventListener('click', handleClick);


// click galeri set 

