const aboutmm=new Typed(".about-mm",{
    strings:["backend-developer","designer","promblem-solver","analytical-thinker"],
    loop: true,
    typeSpeed:100,
    backSpeed:50,
    backDelay: 1000,
})
const  carousel=document.querySelector(".carousel");
const nextBtn=document.querySelector(".next-btn");
const prevBtn=document.querySelector(".prev-btn");
let currentIndex=0;
const itemWidth=320;

nextBtn.addEventListener("click",()=>{
    const maxIndex=carousel.children.length-1;
    if(currentIndex<maxIndex){
        currentIndex++;
carousel.style.transform=`translateX(-${
    currentIndex*itemWidth
}px)`;

    }

})

prevBtn.addEventListener("click",()=>{
    
    if(currentIndex>0){
        currentIndex--;
carousel.style.transform=`translateX(-${
    currentIndex*itemWidth
}px)`;

    }

})