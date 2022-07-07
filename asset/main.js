
const toggle= document.querySelector(".header-toggle");
const headerMenu=document.querySelector(".header-menu-toggle");
// const isToggle=document.querySelector(".is-toggle")
toggle.addEventListener("click",function(e){
    headerMenu.classList.toggle("is-toggle");
    // headerMenu.classList.toggle("is-toggle");
})

var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 3000);




    // 
    $(function () { 
        $(".header-toggle-dropdown").slideUp();
        $(".header-toggle-item-tuyensinh").click(function (e) { 
          e.preventDefault();
          // <i class="fa-solid fa-angle-up"></i>
          $(".header-toggle-item-tuyensinh i").toggleClass("fa-angle-up");
          $(".header-toggle-dropdown").slideToggle();
        });
        // 
        $(".header-toggle-dropdown2").slideUp();
        $(".header-toggle-dropdown-item:nth-child(1) a").click(function (e) { 
          e.preventDefault();
          $(".header-toggle-dropdown-item a i").toggleClass("fa-angle-up");
          $(".header-toggle-dropdown2").slideToggle();
        });


        $(".nav-list li:nth-child(1) a").click(function(e){
            e.preventDefault();
            $('html,body').animate({scrollTop: $('.noti').offset().top},500)
          })
          $(".nav-list li:nth-child(2) a").click(function(e){
            e.preventDefault();
            $('html,body').animate({scrollTop: $('.event-addmission').offset().top},500)
          })
          $(".nav-list li:nth-child(4) a").click(function(e){
            e.preventDefault();
            $('html,body').animate({scrollTop: $('.event-addmission').offset().top},500)
          })
          $(".nav-list li:nth-child(4) a").click(function(e){
            e.preventDefault();
            $('html,body').animate({scrollTop: $('.event-addmission').offset().top},500)
          })
          $(".nav-list li:nth-child(6) a").click(function(e){
            e.preventDefault();
            $('html,body').animate({scrollTop: $('.co-operate').offset().top},500)
          })
    });
