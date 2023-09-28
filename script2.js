gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
var time = gsap.timeline()
time.from("#page1 h1",{
// scale:0.3,
y:-30,
    
    opacity:0,
    duration:1,
})
time.from("#page1 #line",{
scale:0.4,
    opacity:0,
    duration:0.5,
})
time.from("#page2 img", {

y:120,

    duration: 1,
    opacity: 0,
   
  
  
  
  })
  time.from("#page3 img", {


y:120,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page3 img",
      scroller: "#main",
    //   markers: true,
      start: "top 80%",
      end: "top 0%",
      scrub: 1,
    }
  
  
  
  })
  time.from("#page4 img", {


y:120,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page4 img",
      scroller: "#main",
    //   markers: true,
      start: "top 80%",
      end: "top 0%",
      scrub: 1,
    }
  
  
  
  })
  time.from("#page5 img", {


y:120,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page5 img",
      scroller: "#main",
    //   markers: true,
      start: "top 80%",
      end: "top 0%",
      scrub: 1,
   }
})