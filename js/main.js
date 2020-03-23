window.addEventListener("scroll", function() {
    var header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 0);
})


function toggle(){
    var header = document.querySelector("header");
    header.classList.toggle("active");
}

$('.gallerys').magnificPopup({
  type: 'image',
  delegate: 'a',
  gallery: {
    enabled: true
  }
  // other options
});

// / active class
     $(document).on('click', 'ul li', function() {
       $(this).addClass('active').siblings().removeClass('active');
     });



    //  animate on scroll
    AOS.init();
    
    $('.counter').countUp({
      'time': 2000,
      'delay': 10
    });  
    
    // Nav page
    $('#nav').onePageNav({
      currentClass: 'active',
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing',
      begin: function() {
        //I get fired when the animation is starting
      },
      end: function() {
        //I get fired when the animation is ending
      },
      scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
      }
    });
    


