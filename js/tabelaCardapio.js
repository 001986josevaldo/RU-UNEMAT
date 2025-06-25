document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));
            btn.classList.add("active");
            contents[index].classList.add("active");
        });
    });

    // Ativar o primeiro por padrão
    if (buttons.length && contents.length) {
        buttons[0].classList.add("active");
        contents[0].classList.add("active");
    }
});
