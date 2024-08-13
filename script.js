// gsap.from("#page2 h1", {

//     opacity: 0,
//     x: 100,
//     duration: 0.8,

//     scrollTrigger: {    
//         trigger: "#page2 h1",
//         scroller: "body",
//         markers: true,
//         start:"top 50%"
//     }


// })

// gsap.from("#page2 h2", {

//     opacity: 0,
//     x: 100,
//     duration: 0.8,

//     scrollTrigger: {    
//         trigger: "#page2 h2",
//         scroller: "body",
//         markers: true,
//         start:"top 50%"
//     }


// })

// gsap.from("#page3 .box",{
//     scale:0,
//     duration:0.5,
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page3 .box",
//         markers:true,
//         scroller:"body",
//         start:"top 90%",
//         scrub:2

//     }

// })


gsap.from("#outer-box1 .box1",{

    x:1600,
    duration:3,
    scrollTrigger:{
        trigger:"#outer-box1 .box1",
        scroller:"body",
        markers:true,
        scrub:1,
        start:"top 50%"


    }


})