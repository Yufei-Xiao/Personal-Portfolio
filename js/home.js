/*function redirect(){
    const dropdown = document.getElementById("searchbar");
    dropdown.addEventListener("change", () => {
      const url = dropdown.value;
      if (url) {
        window.location.href = url; // Redirect immediately
      }
    });
}*/
const startBtn = document.getElementById("start");
const loadingScreen = document.getElementById("loadingScreen");
// select all buttons EXCEPT start
const otherButtons = document.querySelectorAll("button:not(#start)");
const username=document.getElementById("name");
startBtn.addEventListener("click", () => {
    startBtn.style.display = "none"; // hide start button
    username.style.display="none";
    loadingScreen.style.display="flex";
    setTimeout(()=>{
      loadingScreen.style.display="none";
    otherButtons.forEach(btn => {
        btn.style.display = "inline-block";}); // show every other button
    },1000);
});

const about=document.getElementById("about");
about.addEventListener("click",()=>{
  window.location.href="about.html";
})
const experience=document.getElementById("experience");
experience.addEventListener("click",()=>{
  window.location.href="experience.html";
})
const project=document.getElementById("project");
project.addEventListener("click",()=>{
  window.location.href="projects.html";
})
const skill=document.getElementById("skill");
skill.addEventListener("click",()=>{
  window.location.href="skills.html";
})
const contact=document.getElementById("contact");
contact.addEventListener("click",()=>{
  window.location.href="contact.html";
})
const resume=document.getElementById("resume");
resume.addEventListener("click",()=>{
    const link = document.createElement("a");
    link.href = "assets/files/Yufei_Xiao_resume.pdf"; // ← correct relative path
    link.download = "Yufei_Xiao_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
})
const email=document.getElementById("email");
email.addEventListener("click",()=>{
  window.location.href="mailto:yufeix856@gmail.com";
});























document.addEventListener("DOMContentLoaded",()=>{
  redirect();
  
});
