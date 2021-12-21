$(function(){




  $('.lang_box .btn_lang').click(function(e){
    e.preventDefault();
      $('.btn_lang').removeClass('active');
      $(this).addClass('active');
  })


  // sc_gallery_swipe
  var swiper = new Swiper(".gallery_swiper", {
      slidesPerView: 2.3,
      spaceBetween: 25,
      breakpoints: {
        767: {
          slidesPerView: 3.4,
          spaceBetween: 10,
        },
      },
      on:{
        touchStart:function(){
          $('.gallery_swiper .swiper-slide').addClass('scale')
        },
        touchEnd:function(){
          $('.gallery_swiper .swiper-slide').removeClass('scale')
        }
      }

  });


  // team_swiper
  var swiper = new Swiper(".team_swiper", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
  });

 



  gsap.to('.sc_hero .video_box video',{
    scrollTrigger:{
      trigger:".sc_hero",
      start:"top top",
      end:"+=1200",
      scrub:1,
      // markers:true,
      pin:".sc_hero"
    },
    "clip":"rect(0vh, 100vw, 100vh, 0vw)",
    // y:100,
    // duration:,
  })

// 글자 오른쪽에서 왼쪽으로 흐르기 

gsap.to(".slogan", {
  scrollTrigger: {
    trigger:".sc_vision",
    // toggleActions: "restart none reverse none",
    scrub: 1,
    // markers:true,
    start:"top 80%",
    end:"bottom 80%"
  },
  x:-50+'%',
   duration: 5,
});


gsap.to(".sc_news_title", {
  scrollTrigger: {
    trigger:".sc_news",
    // toggleActions: "restart none reverse none",
    scrub: 1,
    // markers:true,
    start:"top 50%",
    end:"bottom 80%"
  },
  x:-250+'%',
   duration: 5,
});




var startCount = document.querySelectorAll(".sc_statistics .value")

gsap.from(startCount, {
  ease: "none",
  duration: 3,
  // onUpdate: changeNumber,
  textContent: 0,
  snap: {
     textContent: 2 //자리수
  },
  scrollTrigger: {
    trigger:".sc_statistics .value",
    toggleActions: "restart none restart none",
  },
});

var startCount = document.querySelectorAll(".sc_team .count")

gsap.from(startCount, {
  ease: "none",
  duration: 3,
  // onUpdate: changeNumber,
  textContent: 0,
  snap: {
     textContent: 1 //자리수
  },
  scrollTrigger: {
    trigger:".sc_team .count",
    toggleActions: "restart none restart none",
  },
});



// 오른쪽에서 왼쪽으로 슬라이드 넘어가는 스크롤이벤트



  gsap.to('#section_box',{
    scrollTrigger: {
      trigger: '#section_box',
      pin:"#section_box",
      scrub:1,
      start:"top 9%",
      // end:"+=1500",
      // markers:true,
    },
    x:-80+'%',

  })

  //사진들 떠오르는 이벤트

  gsap.to(".sc_beginning .content", {
    scrollTrigger: {
      trigger:".sc_beginning",
      pin:".sc_beginning",
      // toggleActions: "restart none reverse none",
      scrub: 1,
      // markers:true,
      start:"top top",
      end:"bottom 10%",
     
    },
      // top: 50+"%",
      y: -250+"%",
      duration: 15,
  });






//항상 밑에
  gsap.utils.toArray(".color").forEach(function(elem) {
    var color = elem.getAttribute('data-color');
    ScrollTrigger.create({
      trigger: elem,
      start:'top 30%',
      end:'bottom 30%',
      // markers:true,
      onEnter: () => gsap.to('body', {backgroundColor:color}), 
      onLeave: () => gsap.to('body', {backgroundColor:'#fed700'}), 
      onLeaveBack: () => gsap.to('body', {backgroundColor:'#fed700'}), 
      onEnterBack: () => gsap.to('body', {backgroundColor:color}), 
    });
  });

})//지우지말것!!