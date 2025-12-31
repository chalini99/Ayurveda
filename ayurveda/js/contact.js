
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navActions = document.querySelector(".nav-actions");

hamburger.addEventListener("click",()=>{
  navLinks.classList.toggle("active");
  navActions.classList.toggle("active");
});






const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
  reveals.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  })
});
