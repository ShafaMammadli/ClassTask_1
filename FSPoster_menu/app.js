let icon = document.querySelector(".menu__icon"),
  menu = document.querySelector(".menu"),
  menuIcon = document.querySelector(".icon");

  menuIcon.addEventListener('click', function(e) {
    menu.classList.remove('d-none');
  })

  icon.addEventListener('click', function(e) {
    menu.classList.add('d-none');
  })