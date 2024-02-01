window.onload = function (){
    //상단 스크롤 기능 
    const header = document.querySelector(".header");
    let scy = 0
    window.addEventListener("scroll", function(){
    scy = this.document.documentElement.scrollTop;
    if(scy > 0){
        header.classList.add("active")
    }else{
        header.classList.remove("active")        
    }
    })
 }

