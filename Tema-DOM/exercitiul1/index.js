const dropdownMenu = document.querySelector(".show-dropdown");
const menuIcon = document.querySelector(".menu-icon");



menuIcon.addEventListener("click", function(){
    const dropdownMenuStyles = getComputedStyle(dropdownMenu);
    const display = dropdownMenuStyles.getPropertyValue("display");

    if(display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }

});
