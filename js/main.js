// /* --------------------------about section-------------- */

(() => {
    const aboutSection = document.querySelector(".about-section"),tabsConatiner = document.querySelector(".about-tabs");
    
    tabsConatiner.addEventListener("click",(event) =>{
        // console.log(event.target);
        // console.log("Hello world");
        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");

            // deactivate existing active 'tabs item'
            tabsConatiner.querySelector(".active").classList.remove("outer-shadow","active");
            // activates new 'tab-item'
            event.target.classList.add("active","outer-shadow");
            // deactivate existing active 'tabs content'
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            // activate new 'tab content'
            aboutSection.querySelector(target).classList.add("active");
        }
    })
})();

// console.log("hello");