function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();

const cursorout = document.querySelector("[data-cursor-out]");

var full = document.querySelector("#full-scr")
full.addEventListener("mousemove",function(e){
  const posX = e.clientX;
  const posY = e.clientY;

 

// cursourout.style.left = `${posX}px`;
// cursorout.style.left = `${posY}px`;
cursorout.animate({
  left: `${posX}px`,
  top: `${posY}px`
},{ duration:500, fill:"forwards"})
})  

 

var time = gsap.timeline()
time.from("#page1 #img1", {
  y: 50,
  opacity: 0,
  dutration: 1,
})
time.to("#img1", {
  y: 30,
  yoyo: true,
  repeat: -1,
})
var tl = gsap.timeline()


tl.from("#page1 h1,#page1 h2", {
  opacity: 0,
  stagger: 0.7,
  x: -20,
  delay: 1,
  duration: 1,

})


tl.from("#page1 h3", {
  y: 120,
  opacity: 0,
  stagger: 1,
  // delay:1,
  duration: 0.8,

})
tl.from("#page2 #img3", {
  y: 20,


  duration: 3,
  rotate: -40,
  scrollTrigger: {
    trigger: "#img3",
    scroller: "#main",
    // markers: true,
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  }



})
tl.from("#page2 h1", {



  duration: 2,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "#main",
    // markers: true,
    start: "top bottom",
    end: "top 0%",
    scrub: 1,
  }



})
tl.from("#page2 p", {



  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2 p",
    scroller: "#main",
    // markers: true,
    start: "top bottom",
    end: "top 0%",
    scrub: 1,
  }



})
tl.from("#page2 #img2", {


  y: 950,
  duration: 3,

  scrollTrigger: {
    trigger: "#page2 #img2",
    scroller: "#main",
    // markers: true,
    start: "top bottom",
    end: "top 0%",
    scrub: 3,
  }



})
tl.from("#page2 #img4", {


  y: -110,
  duration: 3,
  rotate: 20,
  scrollTrigger: {
    trigger: "#page2 #img4",
    scroller: "#main",
    // markers: true,
    start: "top 50%",
    end: "top 20%",
    scrub: 1,
  }



})
tl.from("#page2 #img5", {


  y: -110,
  duration: 3,
  rotate: -5,
  scrollTrigger: {
    trigger: "#page2 #img5",
    scroller: "#main",
    // markers: true,
    start: "top 30%",
    end: "top 10%",
    scrub: 1,
  }



})
tl.from("#page3 h1", {


  x: -50,
  opacity: 0,
  duration: 0.6,
  scrollTrigger: {
    trigger: "#page3 h1",
    scroller: "#main",
    // markers: true,
    start: "top 60%",
    end: "top 40%",
    scrub: 1,
  }



})
tl.from("#page3 #leftimg,#page3 #centerimg", {

  width: "0%",

  stagger: 1,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    // markers: true,
    start: "top 55%",
    end: "top 20%",
    scrub: 2,
  }



})
tl.from("#page4 h1", {

  opacity: 0,

  x: -520,
  duration: 3,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "#main",
    // markers: true,
    start: "top 25%",
    end: "top -50%",
    scrub: 3,
    // pin:true,
  }



})
tl.from("#page4 h2", {

  opacity: 0,

  x: 520,
  duration: 3,
  scrollTrigger: {
    trigger: "#page4 h2",
    scroller: "#main",
    // markers: true,
    start: "top 30%",
    end: "top -55%",
    scrub: 3,
    // pin:true,
  }



})
tl.from("#page4 #bigimg , #page4 #sideimg", {



  y: 720,
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: "#page4 ",
    scroller: "#main",
    // markers: true,
    start: "top 0%",
    end: "top -60%",
    scrub: 3,
    pin: true,
  }



})
tl.from("#page4 p, #page4 h4", {




  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page4 ",
    scroller: "#main",
    // markers: true,
    start: "top -5%",
    end: "top -60%",
    scrub: 3,
    pin: true,
  }



})








var menu = document.querySelector("#navv h3 ")
var full = document.querySelector("#full-scr")
var flag = 0
menu.addEventListener("click", function () {
  if (flag == 0) {

    menu.innerHTML = '<i class="ri-close-line"style="color: black;"></i>'
    
    full.style.left = 0;
    flag = 1

  } else {
    menu.innerHTML = '<i class="ri-menu-4-line"></i>'


    full.style.left = "-100%"
   flag=0
}
})


gsap.from("#box2",{
  y:250,
  scrollTrigger:{
    trigger:"#page6",
    scroller:"#main",
    // markers:true,
    start:"top 120%",
    end:"top -50%",
    scrub:2,
  }
})

gsap.from("#box3",{
  y:500,
  scrollTrigger:{
    trigger:"#page6",
    scroller:"#main",
    // markers:true,
    start:"top 120%",
    end:"top -50%",
    scrub:2,
  }
})

gsap.to("#img-box",{
  y:-400,
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    // markers:true,
    start:"top -10%",
    end:"top -130%",
    scrub:2,
  }
})

gsap.to("#leaf",{
  y:300,
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    // markers:true,
    start:"top -3%",
    end:"top -130%",
    scrub:2,
  }
})

gsap.to("#leaf2",{
  transform:"rotate(150deg)",
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    // markers:true,
    start:"top -10%",
    end:"top -130%",
    scrub:2,
  }
})

gsap.to("#page8 svg", {
  yoyo: true,
  repeat: -1,
  x: 30,
});

 
gsap.to("#row1,#row3",{
  y:-130,
  scrollTrigger:{
    trigger:"#page9",
    scroller:"#main",
    // markers:true,
    start:"top 70%",
    end:"top -50%",
    scrub:2,
  }
})

