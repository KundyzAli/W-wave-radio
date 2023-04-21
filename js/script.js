document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".header-search").addEventListener("click", function () {
    document.querySelector(".search-form").classList.add("search-form_show");
    this.classList.add("active");
  });
  document.addEventListener("click", function (e) {
    let target = e.target;
    let form = document.querySelector(".search-form");
    if (!target.closest(".header-middle-block")) {
      form.classList.remove("search-form_show");
      form.querySelector("input").value = "";
      document.querySelector(".header-search").classList.remove("active")
    }
  });


  // header tab

  // let tabBtn = document.querySelectorAll('.header-tab-btn');
  // let tabItem = document.querySelectorAll('.header-tab-content');

  // tabBtn.forEach(function (element) {
  //   element.addEventListener('click', function (e) {
  //     const path = e.currentTarget.dataset.path;

  //     tabBtn.forEach(function (btn) { btn.classList.remove('header-tab-btn--active') });
  //     e.currentTarget.classList.add('header-tab-btn--active');

  //     tabItem.forEach(function (element) { element.classList.remove('header-tab-content--active') });
  //     document.querySelector(`[data-target="${path}"]`).classList.add('header-tab-content--active');
  //   });
  // });




  // modal

  document.getElementById('open-modal').addEventListener('click', (e) => {
    document.getElementById('modal-form').classList.add('open-modal_show')
  })

  document.getElementById('close-modal-form').addEventListener('click', (e) => {
    document.getElementById('modal-form').classList.remove('open-modal_show')
  })

  document.getElementById('modal-form').addEventListener('submit', (e) => {
    e.preventDefault()
  });


  // бургер-меню

  document.querySelector(".header-btn-open").addEventListener("click", function () {
    document.querySelector(".header-nav").classList.add("active");
  })
  document.querySelector(".nav-close-btn").addEventListener("click", function () {
    document.querySelector(".header-nav").classList.remove("active");

    document.body.classList.toggle('stop-scroll');
  });

  document.querySelector(".header-btn-open").addEventListener("click", function () {
    document.querySelector(".header-bottom-nav").classList.add("active");
  })
  document.querySelector(".nav-close-btn").addEventListener("click", function () {
    document.querySelector(".header-bottom-nav").classList.remove("active");

    document.body.classList.toggle('stop-scroll');
  });


  // on-air


  document.querySelector(".header-on-air-open").addEventListener("click", function () {
    document.querySelector(".header-on-air-block").classList.add("active");
  })
  document.querySelector(".header-on-air-close").addEventListener("click", function () {
    document.querySelector(".header-on-air-block").classList.remove("active");
  });

  document.querySelector(".header-on-air-open-1").addEventListener("click", function () {
    document.querySelector(".header-on-air-block").classList.add("active");
  });
  document.querySelector(".header-on-air-close").addEventListener("click", function () {
    document.querySelector(".header-on-air-block").classList.remove("active");
  });

  // on-air-btn

  document.querySelectorAll(".header-on-air-btn").forEach(btn => {
    btn.addEventListener("click", function () {

      document.querySelectorAll(".header-on-air-btn").forEach(item => {

        if (item != btn) {
          item.querySelector(".svg-play").classList.add("svg-active");

          item.querySelector(".svg-pause").classList.remove("svg-active");
        }

      });

      btn.querySelector(".svg-play").classList.toggle("svg-active");

      btn.querySelector(".svg-pause").classList.toggle("svg-active");
    });

  });


  
  document.querySelectorAll(".header-tab-btn").forEach(btn => {
    btn.addEventListener("click", function () {

      document.querySelectorAll(".header-tab-btn").forEach(item => {

        if (item != btn) {
          item.querySelector(".svg-play").classList.add("svg-active");

          item.querySelector(".svg-pause").classList.remove("svg-active");
        }

      });

      btn.querySelector(".svg-play").classList.toggle("svg-active");

      btn.querySelector(".svg-pause").classList.toggle("svg-active");
    });

  });



  


  // podcast, hidden block

  const btnMore = document.querySelector('.podcast-btn');
  const podcastItems = document.querySelectorAll('.podcast-item');

  btnMore.addEventListener('click', () => {
    podcastItems.forEach(el => { el.classList.add('podcast-item--visible') });
  });

  // document.querySelector('.play-btn').addEventListener('click', function(e) {
  //   e.target.closest('.play-btn').classList.toggle('play-btn--toggle');
  // });


  // podcats-card-btn

  document.querySelectorAll(".podcast-card-btn").forEach(btn => {
    btn.addEventListener("click", function () {

      document.querySelectorAll(".podcast-card-btn").forEach(item => {

        if (item != btn) {
          item.querySelector(".svg-play").classList.add("svg-active");

          item.querySelector(".svg-pause").classList.remove("svg-active");
        }

      });

      btn.querySelector(".svg-play").classList.toggle("svg-active");

      btn.querySelector(".svg-pause").classList.toggle("svg-active");
    });

  });


  // select

  const selector = document.querySelector(".choices")
  const choices = new Choices(selector, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices header_choices',
    }
  });

  // свайпер 

  let swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    slidesPerGroup: 4,

    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },

    loop: true,
    spaceBetween: 30,

    breakpoints: {
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },

      696: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },

      1300: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },

      1500: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },

      1920: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30,
      },

    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

  });

  let newSwiper = new Swiper('.playlist-swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,

    loop: true,
    spaceBetween: 15,

  });

  // валидатор

  new window.JustValidate('.js-form', {
    colorWrong: '#D52B1E',
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true
      },
      login: {
        required: true,
      }
    },

    messages: {
      email: {
        required: "Вы не ввели e-mail"
      },
      name: {
        required: "Вы не ввели имя"
      },
      login: {
        required: "Вы не ввели логин"
      },
      password: {
        required: "Вы не ввели пароль"
      },

    }
  });

  new window.JustValidate('.js-forms', {
    colorWrong: '#D52B1E',
    rules: {
      comments: {
        required: true,
      },
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true
      },
      login: {
        required: true,
      }
    },

    messages: {
      comments: {
        required: "Вы не ввели текст"
      },
      email: {
        required: "Вы не ввели e-mail"
      },
      name: {
        required: "Вы не ввели имя"
      },
      login: {
        required: "Вы не ввели логин"
      },
      password: {
        required: "Вы не ввели пароль"
      },

    }
  });





  // аккордеон

  let acc = new Accordion('.guests-list', {
    duration: 700,
    elementClass: 'guest-item',
    triggerClass: 'guest-btn-top',
    panelClass: 'guest-btn-bottom',
    showMultiple: false,
    openOnInit: [0],
    collapse: false
  });


  // guest tab


  let tabsBtn = document.querySelectorAll('.tab-nav-btn');
  let tabsItem = document.querySelectorAll('.tab-item');

  tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function (btn) { btn.classList.remove('tab-nav-btn--active') });
      e.currentTarget.classList.add('tab-nav-btn--active');

      tabsItem.forEach(function (element) { element.classList.remove('tab-item--active') });
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-item--active');
    });
  });

})