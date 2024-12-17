const hamberg = document.querySelector(".hamberg")
const menulist = document.querySelector("nav ul")
hamberg.addEventListener('click',()=>{
    menulist.classList.toggle('showmenu')
})