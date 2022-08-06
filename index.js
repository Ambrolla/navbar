(async () => {
  const linkBtn = document.getElementsByClassName('dropdown_button');

  for (i = 0; i < linkBtn.length; i++) {
    linkBtn[i].addEventListener('click', (e) => {
      const subMenu = e.target.nextElementSibling;
      if (subMenu.style.display === "block") {
        subMenu.style.display = "none";
        e.target.children[0].src = "images/icon-arrow-down.svg";
      } else {
        subMenu.style.display = "block";
        e.target.children[0].src = "images/icon-arrow-up.svg";
        e.stopPropagation();
      }
    });
  }
})();