document.addEventListener("DOMContentLoaded", function() {
    const button = document.createElement("button");
    button.innerText = "🌙 Dark Mode";
    button.classList.add("dark-mode-toggle");
    document.body.appendChild(button);

    // Load dark mode preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
        button.innerText = "☀️ Light Mode";
    }

    button.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            button.innerText = "☀️ Light Mode";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            button.innerText = "🌙 Dark Mode";
        }
    });
});
