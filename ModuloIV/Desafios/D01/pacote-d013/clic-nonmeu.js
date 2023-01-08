document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("mousemove", event => {
        document.getElementsByClassName("cursor")[0].style.transform = "translate(" + (event.pageX) + "px, " + (event.pageY) + "px)";
        })

        document.addEventListener("click", event => {
        document.getElementsByClassName("cursor")[0].classList.add("click")
        setTimeout(() => {
            document.getElementsByClassName("cursor")[0].classList.remove("click")
        }, 250)
        })
});