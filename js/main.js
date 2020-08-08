const button = document.getElementById("scrollTop")
const toggle = document.getElementById("sidebar")
const icon = document.getElementById("icon")

window.onscroll = () => scrollToTop()


openNav = () => {
    'use strict'
    if (toggle.classList.contains("toggled") && icon.classList.contains("fa-bars")) {
        toggle.classList.remove("toggled")
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")

    } else {
        toggle.classList.add("toggled")
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
    }
}

topFunction = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

scrollToTop = () => {
    'use strict'
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block"
        button.classList.add("fade-in-top")
    } else {
        button.style.display = "none"
    }

}

//Active Class
$(document).ready(function () {
    $('nav ul li').click(function () {
        $('li').removeClass("active")
        $(this).addClass("active")
        $('header').addClass("toggled")
        $(icon).removeClass("fa-times")
        $(icon).addClass("fa-bars")
    })
})
