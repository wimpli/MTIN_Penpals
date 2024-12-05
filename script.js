gsap.registerPlugin(ScrollTrigger);

// Szene 1 ------------------------------------------------------------

gsap.set('.ganzerBrief', { x: -750 })
gsap.set('.ganzerBrief', { y: -100 })
gsap.set('.letter', { y: 500 })

const tlBrief = gsap.timeline({
    scrollTrigger: {
        trigger: '.scene1',
        markers: true,
        scrub: true,    
        pin: true,
        end: '+=7000',
    }
})

tlBrief.to('.ueberschrift', { opacity: 0, duration: 5 });
tlBrief.to('.ganzerBrief', { x: 475, duration: 10});
tlBrief.to('.letter', { y: -950, duration:15, end: '+=00000'});

// ------------------------------------------------------------------------

// Szene 5 ------------------------------------------------------------

gsap.to(".middle", {
    scrollTrigger: {
        trigger: ".middle",
        start: "top center",    
        end: "bottom+=200 center",
        scrub: true,
        markers: true,
    },
    y: 300,
});
