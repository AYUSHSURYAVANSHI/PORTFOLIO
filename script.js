let nav = document.querySelector(".navbar");
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");

      } else {
        nav.classList.remove("header-scrolled");
      }
    }

    let navBar = document.querySelectorAll(".nav-link");
    let navCollapse = document.querySelector(".navbar-collapse.collapse");
    navBar.forEach(function (a) {
      a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
      })

    })

    ScrollReveal({
        reset:true,
        distance:'80px',
        duration:2000,
        delay:200
    });

    ScrollReveal().reveal('.banner_wrapper , .portfolio_wrapper' , { origin : 'top' }); 
    ScrollReveal().reveal('.services_wrapper ,.blog_wrapper , .contact_wrapper',{ origin : 'bottom' }); 
    ScrollReveal().reveal('.about_wrapper .img-fluid',{ origin : 'left' }); 
    ScrollReveal().reveal('.about_wrapper .para',{ origin : 'right' }); 

