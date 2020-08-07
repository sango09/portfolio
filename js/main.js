const button = document.getElementById("scrollTop")
const toggle = document.getElementById("sidebar")
const icon = document.getElementById("icon")
const active = document.getElementsByClassName("active")

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


googleAnalytics = () => {
    'use strict'
    window.dataLayer = window.dataLayer || []

    function gtag() {
        dataLayer.push(arguments)
    }

    gtag('js', new Date())

    gtag('config', 'UA-155334281-2')
}


//Active Class
$(document).ready(function () {
    $('ul li').click(function () {
        $('li').removeClass("active")
        $(this).addClass("active")
        $('header').addClass("toggled")
        $(icon).removeClass("fa-times")
        $(icon).addClass("fa-bars")
    })
})
