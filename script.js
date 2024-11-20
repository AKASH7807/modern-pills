// ANIMATION TO OUR CURSOR 

function cursor() {

    let cursor = document.querySelector(".cursor")
    let body = document.querySelector("body")

    //cursor event listener 

    body.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.x + "px",
            y: e.y + "px"
        })
    })
}
cursor()

// SECTION1 ANIMATION 

function section1() {
    let tl = gsap.timeline();
    tl.from(".header", {
        y: -50,
        opacity: 0,
        duration: 1
    })

    tl.from(".text-content h1, .text-content p", {
        y: 100,
        opacity: 0,
        duration: 0.8,
    })
}

section1()


// SECTION2 ANIMATION 

function section2() {


    // click to play song in video 
    let video = document.getElementById("video")

    let sectionTwo = document.querySelector(".section2")
    let cursor = document.querySelector(".cursor")
    let body = document.querySelector("body")


    sectionTwo.addEventListener("click", () => {
        video.muted = !video.muted;
    })

    sectionTwo.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            height: "100px",
            width: "100px",
            innerHTML: "<i class='fa-solid fa-volume-high'></i>",
            fontSize: "25px",
            color: "black",
            margin: "20px",
            background: "white"
        })

        gsap.to(body, {
            background: "#0f0f0f",
            color: "white",
        })
    })


    sectionTwo.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            height: "18px",
            width: "18px",
            margin: 0,
            innerHTML: "",
        })

        gsap.to(body, {
            background: "white",
            color: "#0f0f0f",
        })
    })

}
section2()



// SECTION3 ANIMATION 

function section3() {

    let cursor = document.querySelector(".cursor")
    let sectionThree = document.querySelector(".section3")

    sectionThree.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            background: "#0f0f0f",

        })
    })

}
section3()



// SECTION4 ANIMATION 

function section4() {

    let sectionFour = document.querySelector(".section4")
    let cursor = document.querySelector(".cursor")

    sectionFour.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            background: "#0f0f0f",
            color: "white"
        })

        gsap.to(sectionFour, {
            background: "#0f0f0f",
            color: "white",


            scrollTrigger: {
                trigger: ".section4 .four .moving-text",
                start: "bottom center",
                end: "bottom center",
                scrub: 2,
                // markers:true,
            }
        })

        gsap.from(".services", {
            color: "white",
            scrollTrigger: {
                trigger: ".section4 .four .moving-text",
                start: "bottom center",
                end: "bottom center",
                scrib: 2,
            }
        })

        //changing mouse color 

        sectionFour.addEventListener("mouseleave", () => {
            gsap.to(cursor, {
                background: "white",
                scrollTrigger: {
                    trigger: ".section4 .four .moving-text",
                    start: "bottom center",
                    end: "bottom center",
                    scrub: 2,
                }
            })
        })

    })


    // PROJECTS

    let parentEl = document.querySelector(".bg")
    let childEl = document.querySelectorAll(".first-project .first")

    childEl.forEach((item) => {

        //iteration of list 
        item.addEventListener("mouseenter", () => {
            let ids = item.getAttribute("data-id")
            let bgEl = document.querySelector(`.id-${ids}`)
            console.log(bgEl);

            //display videos based on list hover
            parentEl.querySelectorAll("video").forEach((video) => {
                video.style.display = "none"
            })
            bgEl.style.display = "block"


            //cursor size increase 
            gsap.to(cursor, {
                height: "100px",
                width: "100px",
                duration: 0.1,
                innerHTML: "<p>see projects</p>",
                fontSize: "15px",
                margin: "20px",
                color: "#0f0f0f"
            })
        })

        // MOUSE LEAVE 

        item.addEventListener("mouseleave", () => {
            let ids = item.getAttribute("data-id")
            let bgEl = document.querySelector(`.id-${ids}`)
            console.log(bgEl);

            parentEl.querySelectorAll("video").forEach((video) => {
                video.style.display = "none"
            })
            bgEl.style.display = "NONE"


            //cursor size normal 
            gsap.to(cursor, {
                height: "18px",
                width: "18px",
                innerHTML: "",
                margin: 0,
            })
        })

    })

}
section4()



// SECTION5 ANIMATION 

function section5() {

    let sectionFive = document.querySelector(".section5")
    let cursor = document.querySelector(".cursor")

    sectionFive.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            background: "#0f0f0f",
            duration: 0.1,
        })

        gsap.from(".section5 .five .left h1, .section5 .five .left h5", {
            y: 100,
            opacity: 0,
            stagger: 1,
            duration: 3,

            scrollTrigger: {
                trigger: ".section5 .five",
                start: "top 60%",
                end: "top 30%",
                scrub: 1,
            }
        })


    })

}
section5()


// SECTION7 ANIMATION 

function section7() {

    let cursor = document.querySelector(".cursor")
    let body = document.querySelector("body")
    let sectionSeven = document.querySelector(".section7")

    gsap.to(body, {
        background: "#0f0f0f",
        color: "white",
        scrollTrigger: {
            trigger: ".section6 .right",
            start: "bottom 60%",
            end: "bottom 40%",
            scrub: 1,
        }
    })

    sectionSeven.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            background: "white",
            duration: 0.1,
            scrollTrigger: {
                trigger: ".section6 .right",
                start: "bottom 60%",
                end: "bottom 40%",
                scrub: 1,
            }
        })
    })
}
section7()



//navigation 

let menu = document.getElementById("menu")
let nav = document.getElementById("nav")

menu.addEventListener("click",()=>{
    nav.classList.toggle("active")
})