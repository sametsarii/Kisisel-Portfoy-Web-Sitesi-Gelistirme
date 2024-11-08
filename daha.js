document.querySelectorAll(".toggleButton").forEach(button => {
    button.addEventListener("click", function () {
        const bio = this.previousElementSibling;  

        if (bio.style.display === "none" || bio.style.display === "") {
            bio.style.display = "block";
            this.textContent = "Daha Az Gör";
        } else {
            bio.style.display = "none";
            this.textContent = "Daha Fazla Gör";
        }
    });
});
