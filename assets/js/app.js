document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector("#step-toggle");
    const steps = document.querySelectorAll(".step");

    toggleButton.addEventListener("click", () => {
        steps.forEach(element => {
            element.classList.toggle("active")
        })
    })
})