
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







gsap.to(".page1 > h1",{
    transform:"translateX(-95%)",
    duration:3,
    scrollTrigger:{
        trigger:".page1",
        scroller:".main",
        // markers:true,
        start:"top 0%",
        end:"top -600%",
        scrub:6,
        pin:true
    }
})
gsap.to(".nav h1",{
    color:"black",
    duration:1,
    scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        // markers:true,
        start:"top 10%",
        end:"top 0%",
        scrub:true
    }
})
gsap.to(".nav h1",{
    color:"white",
    duration:1,
    scrollTrigger:{
        trigger:".page4",
        scroller:".main",
        // markers:true,
        start:"top 5%",
        end:"top 0%",
        scrub:true
    }
})
gsap.to(".nav h1",{
    color:"black",
    duration:1,
    scrollTrigger:{
        trigger:".page5",
        scroller:".main",
        // markers:true,
        start:"top 5%",
        end:"top 0%",
        scrub:true
    }
})
gsap.to(".nav h1",{
    color:"white",
    duration:1,
    scrollTrigger:{
        trigger:".page6",
        scroller:".main",
        // markers:true,
        start:"top 5%",
        end:"top 0%",
        scrub:true
    }
})
gsap.to(".nav h1",{
    color:"white",
    duration:1,
    scrollTrigger:{
        trigger:".page9",
        scroller:".main",
        // markers:true,
        start:"top 5%",
        end:"top 0%",
        scrub:true
    }
})
gsap.to(".nav h1",{
    color:"black",
    duration:1,
    scrollTrigger:{
        trigger:".page10",
        scroller:".main",
        // markers:true,
        start:"top 5%",
        end:"top 0%",
        scrub:true
    }
})
gsap.to(".nav i",{
    display:"none"
    ,
    scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        // markers:true,
        start:"top 10%",
        end:"top 0%",
        scrub:true
    }
})

var tl1=gsap.timeline()
tl1.from(".loader h1",{
    delay:1,
    y:"-80%",
    duration:1,
    stagger:0.5,
   opacity:0
})
tl1.to(".loader",{
    y:"-100%",
 
    delay:1
})
tl1.from(".nav h1, .nav i",{
    y:"-400%"
})

tl1.from(".page1 h1",{
    opacity:0,
    y:"80%"
})


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
        icon.style.color="black"
        mark=0
     
    }
})
let main=document.querySelector("body")
let h2=document.querySelectorAll(".open h4")
let button=document.querySelectorAll("button")
let h1=document.querySelectorAll(".open h1")
let oneleft=document.querySelectorAll(".one-left img")
let cursor=document.querySelector(".cursor")
let i=document.querySelector(".nav i")
let all=document.querySelectorAll(".roller")
let logo=document.querySelectorAll(".logo i")
let img2=document.querySelectorAll(".right-per")
let elem=document.querySelectorAll(".elem3")
let a=document.querySelector(".out-open a")
main.addEventListener("mousemove",function(dets){
gsap.to(".cursor",{
    x:dets.x,
    y:dets.y,
 
})
})

i.addEventListener("mouseenter",function(){
    cursor.style.width="60px"
    cursor.style.height="60px"

})
i.addEventListener("mouseleave",function(){
    cursor.style.width="30px"
    cursor.style.height="30px"
})



a.addEventListener("mouseenter",function(){
    cursor.style.width="60px"
    cursor.style.height="60px"
})
a.addEventListener("mouseleave",function(){
    cursor.style.width="30px"
    cursor.style.height="30px"
})


h1.forEach(element => {
    element.addEventListener("mouseenter",function(){
        cursor.style.width="60px"
        cursor.style.height="60px"
   
      
        
    })
    element.addEventListener("mouseleave",function(){
        cursor.style.width="30px"
        cursor.style.height="30px"
    })
});
img2.forEach(element => {
    element.addEventListener("mouseenter",function(){
        cursor.style.width="60px"
        cursor.style.height="60px"

      
        
    })
    element.addEventListener("mouseleave",function(){
        cursor.style.width="30px"
        cursor.style.height="30px"
    })
});
elem.forEach(element => {
    element.addEventListener("mouseenter",function(){
        cursor.style.width="60px"
        cursor.style.height="60px"
   
      
        
    })
    element.addEventListener("mouseleave",function(){
        cursor.style.width="30px"
        cursor.style.height="30px"
    })
});
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
all.forEach(element => {
    element.addEventListener("mouseenter",function(){
        cursor.style.width="100px"
        cursor.style.height="100px"
   cursor.innerHTML="Be The Best"
      
        
    })
    element.addEventListener("mouseleave",function(){
        cursor.style.width="30px"
        cursor.style.height="30px"
        cursor.innerHTML=""
    })
});
oneleft.forEach(element => {
    element.addEventListener("mouseenter",function(){
        cursor.style.width="100px"
        cursor.style.height="100px"
   cursor.innerHTML="In Depth"

      
        
    })
    element.addEventListener("mouseleave",function(){
        cursor.style.width="30px"
        cursor.style.height="30px"
        cursor.innerHTML=""
     
    })
});
button.forEach(element => {
    element.addEventListener("mouseenter",function(){
        cursor.style.width="60px"
        cursor.style.height="60px"
   
      
        
    })
    element.addEventListener("mouseleave",function(){
        cursor.style.width="30px"
        cursor.style.height="30px"
    })
});
h2.forEach(element => {
    element.addEventListener("mouseenter",function(){
        cursor.style.width="60px"
        cursor.style.height="60px"
       
    })
    element.addEventListener("mouseleave",function(){
        cursor.style.width="20px"
        cursor.style.height="20px"
       
    })
    
});
Shery.makeMagnet(".nav h1" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  let page2=document.querySelector(".page2")
  page2.addEventListener("mousemove",function(){
    cursor.innerHTML="Play Reel"
    cursor.style.width="100px"
    cursor.style.height="100px"
 
    
  })
  page2.addEventListener("mouseleave",function(){
    cursor.innerHTML=""
    cursor.style.width=""
    cursor.style.height=""


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
  
  
let tl=gsap.timeline()
tl.from(".course> h1,.course> h3",{
    y:"-100%",
    opacity:0,
    stagger:0.4,
    duration:0.4,
    scrollTrigger:{
trigger:".page3",
scroller:".main",
start:"top 50%",
end:"top -20%",
// markers:true,
scrub:2
    }
})
gsap.from(".one-left",{
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        start:"top 30%",
        end:"top 50%",
        // markers:true,
        scrub:2
            }
})
gsap.from(".page7 > h1",{
    color:"gray",
    opacity:0,
    scrollTrigger:{
        trigger:".page7",
        scroller:".main",
        start:"top 30%",
        end:"top 50%",
        // markers:true,
        scrub:2
            }
})
gsap.from(".all",{
    opacity:0,
    stagger:2,
    scrollTrigger:{
        trigger:".page4",
        scroller:".main",
        start:"top 30%",
        end:"top 50%",
        // markers:true,
        scrub:4
            }
})





gsap.from(".page7 img",{
filter:" grayscale(100)" ,
    scrollTrigger:{
        trigger:".page7",
        scroller:".main",
        start:"top 30%",
        end:"top 10%",
        // markers:true,
        scrub:2
            }
})
gsap.from(".clients > h1",{
    color:"gray",
    opacity:0,
    scrollTrigger:{
        trigger:".page8",
        scroller:".main",
        start:"top 30%",
        end:"top 50%",
        // markers:true,
        scrub:2
            }
})
gsap.from(".page8 img",{
filter:" grayscale(100)" ,
    scrollTrigger:{
        trigger:".page8",
        scroller:".main",
        start:"top 30%",
        end:"top 10%",
        // markers:true,
        scrub:2
            }
})
gsap.from(".logo i,.logo h1,.logo h2",{
    opacity:0,
    y:"-100%",
    stagger:1,
    duration:1,
    scrollTrigger:{
        trigger:".logo",
        scroller:".main",
        start:"top 100%",
        end:"top 60%",
        scrub:2,
        // markers:true
    }
})

