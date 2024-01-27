// Sticky Header ---------------------------------------->

window.addEventListener("scroll", function () {
    header = document.querySelector(".navMain");
    header.classList.toggle("sticky", window.scrollY > 140);
  })
  
  
  
  
  // Add event listeners to toggle FAQ answers
  const faqItems = document.querySelectorAll('.ques_box');
  
  faqItems.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
  });
  
  
  
  // Responsive NavBar
  
  function navSlideOpen() {
    document.querySelector('.mobile_navBar').classList.add('navSlide');
  }
  
  function navSlideClose() {
    document.querySelector('.mobile_navBar').classList.remove('navSlide');
  }
  
  
  
  let crsDropbx = document.querySelectorAll('.crs-drop-bx')
  
  const plusIcon = document.getElementById('resNavDropIcon');
  const rotateBtn = document.querySelector('.dropdown-btn');
  
      rotateBtn.addEventListener('click', () => {
        plusIcon.classList.toggle('iconRotate');
        document.querySelector('.drop-link-bx').classList.toggle('crsDropActive')
      });
  
  
  
  
  
  // Log In Form Open
  
  function logIn_open() {
    document.getElementById('LogInForm').classList.add('logIn_open');
    document.getElementById('SignInForm').classList.remove('SignIn_open');
    document.querySelector('.fade').classList.add('fade_open');
  }
  
  function signIn_open() {
    document.getElementById('SignInForm').classList.add('SignIn_open')
    document.getElementById('LogInForm').classList.remove('logIn_open')
    document.querySelector('.fade').classList.add('fade_open')
  }
  
  function formClose() {
    document.getElementById('LogInForm').classList.remove('logIn_open')
    document.getElementById('SignInForm').classList.remove('SignIn_open')
    document.querySelector('.fade').classList.remove('fade_open')
  
    document.getElementById('webFormContent').reset();
    document.querySelector('.fa-eye').style.display = "none";
    document.querySelector('.fa-eye-slash').style.display = "block";
    document.getElementById('password').type = "password";
  
    let webForm = document.getElementById("webForms");
    webForm.reset(); // Resets the form to its default state
  }
  
  function togglePassword() {
    let passwordInput = document.getElementById('password');
    let eyeOpen = document.querySelector('.fa-eye');
    let eyeClose = document.querySelector('.fa-eye-slash');
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeOpen.style.display = "block";
      eyeClose.style.display = "none";
    }
    else
    {
      passwordInput.type = "password";
      eyeOpen.style.display = "none"
      eyeClose.style.display = "block";
    }
  }


  // NavBar Btn
  let joinNow = document.getElementById('joinNow');

  joinNow.addEventListener('click', function() {
    window.location.href = 'register-form.html';
  })

  const strSide_Para = document.querySelectorAll('#strParallax');
  const oppoSide_Para = document.querySelectorAll('#oppoParallax');
  const miniMove_Para = document.querySelectorAll('#miniParallax');

  document.addEventListener('mousemove', (e) => {
      const largeMove_x = (e.clientX / window.innerWidth) * 100;
      const largeMove_y = (e.clientY / window.innerHeight) * 100;

      const shortMove_x = (e.clientX / window.innerWidth) * 20;
      const shortMove_y = (e.clientY / window.innerHeight) * 20;

strSide_Para.forEach(strPara_elem => {
  strPara_elem.style.transform = `translate(-${largeMove_x}%, -${largeMove_y}%)`;
});
oppoSide_Para.forEach(oppoPara_elem => {
  oppoPara_elem.style.transform = `translate(${largeMove_x}%, ${largeMove_y}%)`;
});
miniMove_Para.forEach(miniPara_elem => {
  miniPara_elem.style.transform = `translate(-${shortMove_x}%, -${shortMove_y}%)`;
});
});





// Initialize Swiper -------------------------------------> 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
      // when window width is >= 320px
      768: {
      slidesPerView: 2,
      spaceBetween: 20
      },
      // when window width is >= 480px
      1024: {
      slidesPerView: 3,
      spaceBetween: 30
      },
  },
loop: true,
centeredSlides: true,
autoplay: {
  delay: 2500,
  disableOnInteraction: false,
},
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
});

