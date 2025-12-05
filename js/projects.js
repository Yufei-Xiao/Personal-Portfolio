const projects=document.querySelectorAll(".project");
projects.forEach(project=>{
    const description=project.querySelector(".description");
    const link=description.querySelector("a").href;
    const image=project.querySelector('img');
    image.addEventListener("click",()=>{
        window.open(link, "blank");
    });
    const title=project.querySelector("h1");
    title.addEventListener("click",()=>{
        if(description.style.display==='block'){
            description.style.display='none';
        }else{
            description.style.display='block';
        }
    })
})