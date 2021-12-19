function openMenu(open) {
  const menu = document.getElementById("menu");
  const menuOpener = document.getElementById("menuOpener");
  if (open) {
    menu.style.display = "block";
    menuOpener.style.display = "none";
  } else {
    menu.style.display = "none";
    menuOpener.style.display = "block";
  }
}
