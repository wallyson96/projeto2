 gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

 ScrollSmoother.create({
	smooth: 3,
    effects: true
	
});
// ANIMAÇÕES HERO
gsap.from(".hero", {
  opacity: 0,
  duration: 1.5,
 
})

 gsap.from("picture:nth-child(2)", {
    y: 60,
    duration: 1,
  });

   gsap.from("picture:nth-child(1)", {
    y:-60,
    duration: 1,
  });
//   ANIMACOES CARDS

gsap.from(".card", {
    opacity: 0,
    
    duration: 2,
    filter: "blur(20px)",
     scrollTrigger: {
      trigger: ".cards",
      start: "0% 70%",
        end: "100% 70%",
      scrub: true,
      
     }
  } )