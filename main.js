$(document).ready(function () {

    // nav btn

    $(".navBtn").focus(function () {
        $(".taps").css("display", "flex")
    })

    $(".navBtn").blur(function () {
        $(".taps").css("display", "none")
    })

    // slider

    let firstSlide = document.querySelector(".slider .slide:nth-child(1)").innerHTML;


    document.querySelector(".main .slider").innerHTML += "<div class='slide'>" + firstSlide + "</div>";

    let allSlides = document.querySelectorAll(".slide")

    $(".main .slider").css("width", allSlides.length * 100 + "%")
    $(".slide").css("width", 100 / (allSlides.length) + "%")

    let tran = 0;
    time = 2000

    let sliderRunning = setInterval(function () {
        tran += 100 / (allSlides.length);
        if (tran < (100 / (allSlides.length) * (allSlides.length))) {
            $(".main .slider").css({
                "transform": "translateX(" + tran + "%)", "transition": "1.5s"
            });
        } else {
            tran = 0;
            $(".main .slider").css({
                "transform": "translateX(" + tran + "%)", "transition": "0s"
            });
        }
    }, 4000)


    

})