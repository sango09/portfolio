openNav = () => {
    const toggle = document.getElementById("sidebar")
    const icon = document.getElementById("icon")

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

//Active Class
$(document).ready(function () {
    $('ul li').click(function () {
        $('li').removeClass("active");
        $(this).addClass("active");
    });
});
