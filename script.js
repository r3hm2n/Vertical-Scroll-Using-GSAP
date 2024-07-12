let tl = gsap.timeline()


tl.from("#page1 h1",{
    opacity:0,
    duration:1,
    delay:1,
    stageer:true,
    y:-20
})



tl.from("#page1 p",{
    opacity:0,
    duration:1,
    stageer:true,
    scrub:0.5,
    y:-20
})


tl.from("#page3 H1",{
    opacity:0,
    delay:4,
    duration:1,
    stagger:true,
    y:-20
})




// ---------------------------- 1st and 3rd page complete -----------------------------------



ScrollTrigger.create({
    trigger: "#content",
    start: "top top",
    end: "bottom bottom",
    pin: "#block", 
    delay: 1,
    ease:"back.out",
})






