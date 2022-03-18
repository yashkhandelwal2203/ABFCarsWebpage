burger=document.querySelector('.burger')
navba=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightnav=document.querySelector('.rightnav')


burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navba.classList.toggle('h-nav-resp');
    
})