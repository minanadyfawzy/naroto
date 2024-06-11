

const li =document.querySelectorAll(".nav") ;
const sec =document.querySelectorAll("section") ;


function activemenu(){
    let len=sec.length
    while(--len&& window.scrollY +100< sec[len].offsetTop ){}
    li.forEach(ltx => ltx.classList.remove("nav_act"));
    li[len].classList.add("nav_act");
  }
  activemenu();
  window.addEventListener("scroll",activemenu);
  
  
  let navbar = document.querySelector('.nav_bar')
  document.querySelector('#menu_btn').onclick=()=>{
       navbar.classList.toggle('active_nav')
      
  }
// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
 


function activemenu(){
    let len=sec.length
    while(--len&& window.scrollY +100< sec[len].offsetTop ){}
    li.forEach(ltx => ltx.classList.remove("nav_act"));
    li[len].classList.add("nav_act");
  }
  activemenu();
  window.addEventListener("scroll",activemenu);
  
  
  let navbar1 = document.querySelector('.nav_bar1')
  document.querySelector('#menu_btn1').onclick=()=>{
    nav_bar1.classList.toggle('active_nav')
      
  }


