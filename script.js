document.addEventListener("DOMContentLoaded", function () {
    // Reusable Header / Footer: https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/
    const header = document.getElementById("header")
    const footer = document.getElementById("footer")
    header.innerHTML = '<p id="headerLinks"><a href="./index.html">Landing Page</a><a href="./resume.html">Resume</a><a href="./portfolio.html">Portfolio</a>';  
    footer.innerHTML = '<a href="https://rose-hulman.joinhandshake.com/profiles/cgwaka">Handshake</a><a href="www.linkedin.com/in/ana-johnson-142b85408">LinkedIn</a>';
})

