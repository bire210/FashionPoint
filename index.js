let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length)
      {slideIndex = 1}    
  if (n < 1) 
  {slideIndex = 1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
  
}
// #####################################shivam##########################
document.getElementById('New').addEventListener('mouseover',()=>{
  let hov=document.querySelector('#hover-main1');
  hov.style.display='block';
  
})
document.getElementById('New').addEventListener('mouseleave',()=>{
  let hov=document.querySelector('#hover-main1');
  hov.style.display='none';
})

document.querySelector("#Dress").addEventListener("mouseover",()=>{
  hov2=document.querySelector("#hover-2")
  hov2.style.display="block"
})
document.querySelector("#Dress").addEventListener("mouseleave",()=>{
  hov2=document.querySelector("#hover-2")
  hov2.style.display="none"
})
document.querySelector("#Clothing").addEventListener("mouseover",()=>{
  hov2=document.querySelector("#hover-2")
  hov2.style.display="block"
})
document.querySelector("#Clothing").addEventListener("mouseleave",()=>{
  hov2=document.querySelector("#hover-2")
  hov2.style.display="none"
})
document.querySelector("#BHL").addEventListener("mouseover",()=>{
  hov2=document.querySelector("#hover-4")
  hov2.style.display="block"
})
document.querySelector("#BHL").addEventListener("mouseleave",()=>{
  hov3=document.querySelector("#hover-4")
  hov3.style.display="none"
})
document.querySelector("#Home").addEventListener("mouseover",()=>{
  hov2=document.querySelector("#hover-2")
  hov2.style.display="block"
})
document.querySelector("#Home").addEventListener("mouseleave",()=>{
  hov3=document.querySelector("#hover-2")
  hov3.style.display="none"
})
document.getElementById('Beauty').addEventListener('mouseover',()=>{
  let hov=document.querySelector('#hover-main2');
  hov.style.display='block';
  
})
document.getElementById('Beauty').addEventListener('mouseleave',()=>{
  let hov=document.querySelector('#hover-main2');
  hov.style.display='none';
})
document.getElementById("res").addEventListener("click",()=>{
  Menu=document.getElementById("responsLogin")
  if(Menu.style.display=="none"){
    Menu.style.display="block"
  }else{
    Menu.style.display="none"
  }
  
})
