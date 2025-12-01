function loadSearchbar(){
    const pageTitle=document.title;
    const searchBar=`
    <div id="homeName" class="cyberpunk-font-og fg-black cyber-glitch-1">Main Menu</div>
    
    `;
    document.getElementById('searchbar').innerHTML=searchBar;

}
/*<div class="cyber-select">
    <select id="searchSelect">
        <option value="" selected hidden>${pageTitle}</option>
        <option value="about.html">About Me</option>
        <option value="experience.html">Experience</option>
        <option value="projects.html">Projects</option>
        <option value="skills.html">Skills</option>
        <option value="contact.html">Contact</option>
    </select>
    </div>*/
function redirect(){
    /*const dropdown = document.getElementById("searchSelect");
    dropdown.addEventListener("change", () => {
      const url = dropdown.value;
      if (url) {
        window.location.href = url; // Redirect immediately
      }
    });*/
    const gohome=document.getElementById("homeName");
    gohome.addEventListener("click",()=>{
        window.location.href="index.html";
    });
}
document.addEventListener("DOMContentLoaded",()=>{
    loadSearchbar();
    redirect();
});