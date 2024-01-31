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






const slider = document.querySelector('.slider');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const counter = document.querySelector('.counter');
    const slides = document.querySelector('.slides');
    let currentIndex = 0;

    nextButton.addEventListener('click', () => {
        if (currentIndex < 4) {
            currentIndex++;
            updateSlider();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    function updateSlider() {
      const slideWidth = 100; // 100% for full-width slides
        slides.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        counter.textContent = `0${currentIndex + 4}`;

        if (currentIndex === 0) {
          prevButton.style.opacity = 0.5;
        }
        else
        {
          prevButton.style.opacity = 1;
        };
        
        if (currentIndex === 4) {
          nextButton.style.opacity = 0.5;
        }
        else {
          nextButton.style.opacity = 1;
        }
    }

    updateSlider();


// NavBar Btn
let joinNow = document.getElementById('joinNow');

joinNow.addEventListener('click', function() {
  window.location.href = 'register-form.html';
})
