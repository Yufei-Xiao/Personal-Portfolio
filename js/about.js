const questions=document.querySelectorAll(".question");
questions.forEach(q=>{
    q.addEventListener("click",()=>{
        const answer=q.nextElementSibling;
        if(answer.style.display==="block"){
            answer.style.display="none";
        }else{
            answer.style.display="block";
        }
    });
});
function loadExperiences(){
    const experiences=`
    <div class="experienceCard">
        <h1>Designathon</h1>
        <p>Designathon Participant</p>
        <p>Nov 2025</p>
    </div>
    `;
    document.getElementById("experienceList").innerHTML=experiences;
}
const toExperiences=document.getElementById("seeallexperience");
toExperiences.addEventListener("click",()=>{
    window.location.href="experience.html";
});
const email=document.querySelector(".Email");
email.addEventListener("click",()=>{
    window.location.href="mailto:yufeix856@gmail.com";
});
const github=document.querySelector(".Github");
github.addEventListener("click",()=>{
    window.open("https://github.com/Yufei-Xiao","blank");
});
const linkedIn=document.querySelector(".LinkedIn");
linkedIn.addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/yufei-xiao-1a4971329/","blank");
})
const instagram=document.querySelector(".Instagram");
instagram.addEventListener("click",()=>{
    window.open("https://www.instagram.com/xiaoyufei25/","blank");
});
document.addEventListener("DOMContentLoaded",loadExperiences);