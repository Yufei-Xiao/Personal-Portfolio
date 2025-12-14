function loadNavbar(){
    const navbar=`
    <nav class="navbar">
        <a href="about.html">About</a>
        <a href="experience.html">Experience</a>
        <a href="projects.html">Projects</a>
        <a href="skills.html">Skills</a>
        <a href="contact.html">Contact</a>
        <a href="resume.html">Resume</a>
    </nav>
    `;
    document.getElementById('navbar').innerHTML=navbar;
}
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop(); 
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}
document.addEventListener("DOMContentLoaded",()=>{
    loadNavbar();
    highlightCurrentPage();
});