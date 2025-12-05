const experiences=document.querySelectorAll(".experience");
experiences.forEach(experience=>{
    const description=experience.querySelector("p");
    experience.addEventListener("click",()=>{
        if(description.style.display==='block'){
            description.style.display='none';
        }else{
            description.style.display='block';
        }
    })
})