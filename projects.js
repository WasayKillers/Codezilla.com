
function caller(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
      lerp:0.1
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
caller()
















let opened=document.querySelector(".open");
let icon=document.querySelector(".nav i")
let page=document.querySelector(".page1")
let rightnav=document.querySelector(".right-nav")
let mark=0

icon.addEventListener("click",function(){
    if(mark===0){
        // rightnav.innerHTML=`<i class="fa-solid fa-xmark"></i>`
    opened.style.right="-70%"
   
opened.style.transition="all 0.6s ease"
    icon.style.color="white"

    mark=1
    }
    else{
 
        opened.style.right="0%"
        opened.style.visibility="visible"
        icon.style.color="white"
        mark=0
     
    }
})






gsap.from(".all",{
    opacity:0,
    duration:2,
  
})
gsap.from(".logo i,.logo h1,.logo h2",{
    opacity:0,
    y:"-100%",
    stagger:1,
    scrollTrigger:{
        trigger:".logo",
        scroller:".main",
        start:"top 60%",
        end:"top 36%",
        scrub:2,
        // markers:true
    }
})


var tl1=gsap.timeline()
// tl1.from(".loader h1",{
//     delay:1,
//     y:"-80%",
//     duration:1,
//     stagger:0.5,
//    opacity:0
// })
// tl1.to(".loader",{
//     y:"-100%",
 
//     delay:1
// })
tl1.from(".nav h1, .nav i",{
    y:"-400%"
})




let main=document.querySelector("body")
let i=document.querySelector(".nav i")
let cursor=document.querySelector(".cursor")
let logo=document.querySelectorAll(".logo i")

main.addEventListener("mousemove",function(dets){
gsap.to(".cursor",{
    x:dets.x,
    y:dets.y,
 
})
})
logo.forEach(element => {
    element.addEventListener("mouseenter",function(){
        cursor.style.width="60px"
        cursor.style.height="60px"
   
      
        
    })
    element.addEventListener("mouseleave",function(){
        cursor.style.width="30px"
        cursor.style.height="30px"
    })
});

i.addEventListener("mouseenter",function(){
    cursor.style.width="60px"
    cursor.style.height="60px"

})
i.addEventListener("mouseleave",function(){
    cursor.style.width="30px"
    cursor.style.height="30px"
})
 
let img=document.querySelectorAll(".all img")
img.forEach(function(elem){
    elem.addEventListener('mouseenter', () => {
     
        cursor.innerHTML="Enjoy It"
        cursor.style.width="100px"
        cursor.style.height="100px"
     
      });
      elem.addEventListener('mouseleave', () => {
       
         cursor.style.width=""
         cursor.style.height=""
         cursor.innerHTML=""
       });
})


  let video = document.querySelectorAll(".all video");
video.forEach(function(elem){
    elem.addEventListener('mouseenter', () => {
        elem.play();
        cursor.innerHTML="Enjoy It"
        cursor.style.width="100px"
        cursor.style.height="100px"
     
      });
      elem.addEventListener('mouseleave', () => {
       elem.pause();
        cursor.style.width=""
        cursor.style.height=""
        cursor.innerHTML=""
      });
})
  
