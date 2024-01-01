
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
  const rotateBtn = document.querySelector('.dropBtn-contain');
  
      rotateBtn.addEventListener('click', () => {
        plusIcon.classList.toggle('iconRotate');
      });
  
  
  
  document.querySelector('.drop-link-bx').addEventListener('click', () => {
    document.querySelector('.drop-link-bx').classList.toggle('crsDropActive')
  })
  
  
  
  
  
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
  




// Contact Filter Elements Code ------------><----------

let contectBtnFilter = document.querySelectorAll('.contactFilterBtn');
let contactItemFilter = document.querySelectorAll('.contactDetail_items');
contectBtnFilter.forEach((button) => {
  button.addEventListener('click', function() {
    
    // Active Button On Click
    contectBtnFilter.forEach(btn => {btn.classList.remove('active')});
    button.classList.add('active');

    // Active Card Head
    let filterCard = button.id.replace('Btn', '');
    switch (filterCard) {
    case 'contact':
      filterHead.textContent = '-contact-';
    break;
    case 'chat':
      filterHead.textContent = '-chat-';
    break;
    case 'connect':
      filterHead.textContent = '-connect-';
    break;
    default:
      filterHead.textContent = '';
    };

  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('contactCard').style.display = "block";
    document.getElementById('chatCard').style.display = "none";
    document.getElementById('connectCard').style.display = "none";

  document.getElementById('contactBtn').addEventListener('click', function() {
    document.getElementById('contactCard').style.display = "block";
    document.getElementById('chatCard').style.display = "none";
    document.getElementById('connectCard').style.display = "none";
  })

  document.getElementById('chatBtn').addEventListener('click', function() {
    document.getElementById('contactCard').style.display = "none";
    document.getElementById('chatCard').style.display = "block";
    document.getElementById('connectCard').style.display = "none";
  })

  document.getElementById('connectBtn').addEventListener('click', function() {
    document.getElementById('contactCard').style.display = "none";
    document.getElementById('chatCard').style.display = "none";
    document.getElementById('connectCard').style.display = "block";
  })
});

