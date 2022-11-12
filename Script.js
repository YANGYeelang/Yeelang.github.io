$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navb").addClass("sticky");
        } else {
            $(".navb").removeClass("sticky");
        }
    })

});




var typed = new Typed(".typing", {
    strings: [ " ", "Youtuber.", "Designer.",  "Web developer.", "Freelancer."],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
});
var typed = new Typed(".typing_1", {
    strings: [ "Viengton Primary School.", "Viengton Secondary School.", "Phonsavan Hight School.", ],
    typeSpeed: 100,
    backSpeed: 30,
    loop: true,
});