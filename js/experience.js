<<<<<<< HEAD
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
=======
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
>>>>>>> e5cd679387b989ee904e6f85d15292e365d6e2c5
})