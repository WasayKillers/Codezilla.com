
function caller(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
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




var tl1=gsap.timeline()

tl1.from(".nav h1",{
    y:"-400%",
    duration:1
})

tl1.from(".course> h1,.course> h3",{
    y:"-200%",
    duration:1,
 
    opacity:0
})


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


tl1.from(".page1 h1",{
    opacity:0,
    y:"80%"
})



tl1.from(".one-left",{
    opacity:0,
   duration:2,
 
})

let main=document.querySelector("body")

let cursor=document.querySelector(".cursor")

main.addEventListener("mousemove",function(dets){
gsap.to(".cursor",{
    x:dets.x,
    y:dets.y,
 
})
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
gsap.from(".lft-start h1,.lft-start h3,.lft-start h5,.lft-start h5,.lft-start img,.rft-start h1",{
    opacity:0,
    y:"-100%",
    stagger:1,
    duration:1,
    scrollTrigger:{
        trigger:".lft-start",
        scroller:".main",
        start:"top 20%",
        end:"top -20%",
        scrub:2,
        // markers:true
    }
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
    icon.style.color="black"

    mark=1
    }
    else{
 
        opened.style.right="0%"
        opened.style.visibility="visible"
        icon.style.color="white"
        mark=0
     
    }
})





let h2=document.querySelectorAll(".open h4")
let logo=document.querySelectorAll(".logo i")
let i=document.querySelector(".nav i")
let oneleft=document.querySelectorAll(".one-left img")
let h1=document.querySelectorAll(".open h1")




i.addEventListener("mouseenter",function(){
    cursor.style.width="60px"
    cursor.style.height="60px"

})
i.addEventListener("mouseleave",function(){
    cursor.style.width="30px"
    cursor.style.height="30px"
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
let a=document.querySelector(".out-open a")
main.addEventListener("mousemove",function(dets){
gsap.to(".cursor",{
    x:dets.x,
    y:dets.y,
 
})
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

