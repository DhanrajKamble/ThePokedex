const search_bar = document.querySelector(".search");
const search_icon = document.querySelector(".search-icon");
const nav_bar = document.querySelector(".bar");
const menu_bar = document.querySelector(".menu-active-div")

const toggleSearchBar = ()=>{
    search_bar.classList.add("active");
    search_icon.classList.toggle("active");
}
const toggleSearchBarIcon = ()=>{
    search_bar.classList.toggle("active");
    search_icon.classList.toggle("active")
}
document.onclick = (e)=>{
    if(!search_bar.contains(e.target) && !search_icon.contains(e.target)){
        search_bar.classList.remove("active");
        search_icon.classList.remove("active");
    }
}
nav_bar.onclick = ()=>{
    menu_bar.classList.toggle("active");
    nav_bar.classList.toggle("active");
}
search_bar.addEventListener("click",()=>toggleSearchBar());
search_icon.addEventListener("click",()=>toggleSearchBarIcon());
