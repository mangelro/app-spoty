'use strict';
(function () {



  document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    let $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }

    /*
      desactiva el NavBar al pulsar sobre alguna de los items
      
    */
    const $navbarItemCloser = Array.prototype.slice.call(document.querySelectorAll('.menu-closer'), 0);
    
    if ($navbarItemCloser.length > 0) {
      $navbarItemCloser.forEach(el => {
        el.addEventListener('click', (e) => {
          // Add a click event on each of them
          $navbarBurgers.forEach(el => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          },true);

          

        });
      });
    }

  });
})();

