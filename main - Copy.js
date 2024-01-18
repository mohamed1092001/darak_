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

    let perEnd = $(".percent").attr("per");
    let perStrt = 0;
    let per = setInterval(function () {
        perStrt++;
        $(".percent").css({ "width": perStrt + "%" })
        $(".percent .data").html(perStrt + "%")
        if (perStrt == perEnd) {
            clearInterval(per)
        }
    })


    $(".nat-side-bar button").click(function () {
        $(".nat-side-bar button").removeClass("active").removeClass("upper").removeClass("lower");
        $(this).addClass("active")
        $(this).prev().addClass("upper")
        $(this).next().addClass("lower")

        let target_slide = $(this).attr("target")

        $(".services-info").slideUp();
        $("." + target_slide).slideDown();
    })

    $(".project-slider-show button").click(function () {
        $(".flout-slider").fadeIn()
    })
    $(".flout-slider>button ").click(function () {
        $(".flout-slider").fadeOut()
    })


    // img-slider

    let allImgSlides = document.querySelectorAll(".flout-slider .son .img-slider img")

    $(" .flout-slider .son .img-slider").css("width", allImgSlides.length * 100 + "%")
    $(".flout-slider .son .img-slider img").css("width", 100 / (allImgSlides.length) + "%")

    let sliderImgTran = 0;


    $(".flout-slider .son button.right-btn").click(function () {
        if (sliderImgTran < (100 - (100 / (allImgSlides.length)))) {
            sliderImgTran += 100 / (allImgSlides.length)
            $(" .flout-slider .son .img-slider").css("transform", "translateX(-" + sliderImgTran + "%)")
        }
        return sliderImgTran;
    })

    $(".flout-slider .son button.left-btn").click(function () {
        if (sliderImgTran > 0) {
            sliderImgTran -= 100 / (allImgSlides.length)
            $(" .flout-slider .son .img-slider").css("transform", "translateX(-" + sliderImgTran + "%)")
        }
        return sliderImgTran;
    })
})