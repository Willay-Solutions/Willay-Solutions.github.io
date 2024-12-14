document.addEventListener("DOMContentLoaded", () => {
    const messageBox = document.getElementById("message");
    const charCount = document.getElementById("char-count");
    const maxLength = messageBox.getAttribute("maxlength");

    messageBox.addEventListener("input", () => {
        const currentLength = messageBox.value.length;
        charCount.textContent = `${currentLength}/${maxLength} caracteres`;

        // Cambiar el color si el límite está cerca
        if (currentLength > maxLength - 20) {
            charCount.style.color = "red";
        } else {
            charCount.style.color = "#555";
        }
    });
});