gsap.registerPlugin(ScrollTrigger);

// Szene 1 ------------------------------------------------------------

gsap.set('.ganzerBrief', { x: -750 })
gsap.set('.ganzerBrief', { y: -100 })
gsap.set('.letter', { y: 500 })

const tlBrief = gsap.timeline({
    scrollTrigger: {
        trigger: '.scene1',
        markers: true,
        scrub: 2,
        pin: true,
    }
})

tlBrief.to('.ganzerBrief', { x: 475 })
tlBrief.to('.letter', { y: -950, })

// ------------------------------------------------------------------------