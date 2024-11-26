document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to load header.html");
            }
            return response.text();
        })
        .then((html) => {
            document.getElementById("header-container").innerHTML = html;
        })
        .catch((error) => {
            console.error("Error loading header:", error);
        });
        fetch('footer.html')
        .then((response) => response.text())
        .then((html) => {
          document.getElementById('footer-container').innerHTML = html;
        })
        .catch((error) => console.error('Footer 로드 에러:', error));
});
