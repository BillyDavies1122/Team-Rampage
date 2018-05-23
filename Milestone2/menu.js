
function displaySubmenu(menu) {
    var submenu = document.getElementById(menu).childNodes;
    submenu[3].style.display = "block";
}

function hideSubmenu(menu) {
    var submenu = document.getElementById(menu).childNodes;
    submenu[3].style.display = "none";
}
