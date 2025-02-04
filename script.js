gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

// Szene 1 ------------------------------------------------------------

gsap.set('.ganzerBrief', { x: -750 })
gsap.set('.ganzerBrief', { y: -100 })
gsap.set('.letter', { y: 500 })

const tlBrief = gsap.timeline({
    scrollTrigger: {
        trigger: '.scene1',
        markers: false,
        scrub: true,
        pin: true,
        end: '+=2400',
    }
})

tlBrief.to('.ueberschrift, .animation', { opacity: 0, duration: 5 });
tlBrief.to('.ganzerBrief', { x: 475, duration: 10 });
tlBrief.to('.letter', { y: -950, duration: 15, end: '+=00000' });
tlBrief.to('.envfront, .envback', { opacity: 0, duration: 4 });
tlBrief.to('.ganzerBrief', { x: -750 });

// Szene3------------------------------------------------------------------------

gsap.set(".wlan", { opacity:0});
gsap.set('.controllerBlink', {opacity:0});

const tlBrief2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".scene3",
      markers: false,
      scrub: true,
      pin: true,
    }
  });
  
  tlBrief2.to(".brief2", { x: -1100, duration: 10});

const tlController = gsap.timeline({ repeat: -1, repeatDelay: 0});
tlController.to(".controllerBlink", { opacity: 1, duration: 2, ease: "expo.inOut" });
tlController.to(".controllerBlink", { opacity: 0, duration: 1, ease: "expo.inOut" });

const tlWlan = gsap.timeline({repeat:-1,repeatDelay:0});
tlWlan.to(".wlan", {opacity:1, duration:1});
tlWlan.to(".wlan", {opacity:0, duration:1});

// Szene4-------------------------------------------------------------
gsap.set('.kompass1',{opacity:1, transformOrigin: "85% 18%",rotation: -20,});

const tlKompass = gsap.timeline({ repeat: -1, repeatDelay: 0});
tlKompass.to(".kompass1", { transformOrigin: "85% 18%",rotation: 20, duration: 1.5, ease: "expo.inOut" });
tlKompass.to(".kompass1", { transformOrigin: "85% 18%",rotation: -20, duration: 1.5, ease: "expo.inOut" });


const tlBrief3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".scene4",
      markers: false,
      scrub: true,
      pin: true,
      end: '+=1600',
    }
  });

  tlBrief3.to(".brief3", { x: +100, duration: 10 });


// Szene 5 ------------------------------------------------------------

const tlCamera = gsap.timeline({ repeat: -1, repeatDelay: 0});
tlCamera.to(".cameraFlash", { opacity: 1, duration: 2, ease: "expo.inOut" });
tlCamera.to(".cameraFlash", { opacity: 0, duration: 1, ease: "expo.inOut" });



// gsap.to(".middle", {
//     scrollTrigger: {
//         trigger: ".middle",
//         start: "top center",
//         end: "bottom+=200 center",
//         scrub: true,
//         markers: false,
//     },
//     y: 300,
// });
