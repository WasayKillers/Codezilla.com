
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


tl1.from(".nav h1, .nav  i",{
    y:"-400%"
})

tl1.from(".left-inp img",{
    scale:0
})
tl1.from(".right-inp h1,.right-inp form",{
    opacity:0,
    y:"-100%",
    stagger:0.4
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
let main=document.querySelector("body")

let cursor=document.querySelector(".cursor")

main.addEventListener("mousemove",function(dets){
gsap.to(".cursor",{
    x:dets.x,
    y:dets.y,
 
})
})

let h2=document.querySelectorAll(".open h4")
let h1=document.querySelectorAll(".open h1")
let form=document.querySelectorAll("form input")
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



form.forEach(function(element){
    element.addEventListener("mouseenter",function(){
        cursor.style.width="60px"
        cursor.style.height="60px"
   
      
        
    })
    element.addEventListener("mouseleave",function(){
        cursor.style.width="30px"
        cursor.style.height="30px"
    })

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