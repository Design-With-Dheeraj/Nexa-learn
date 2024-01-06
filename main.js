// Sticky Header ---------------------------------------->

window.addEventListener("scroll", function () {
  header = document.querySelector(".navMain");
  header.classList.toggle("sticky", window.scrollY > 140);
})





// Leader Page Swiper -------------------------->
const swiperWrapper = document.querySelector('.swiper-wrapper');
const slides = document.querySelectorAll('.swiper-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function updateSlidePosition() {
  swiperWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Enable or disable navigation buttons based on slide index
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === slides.length - 1;

  // Add or remove disabled class based on button state
  if (prevBtn.disabled) {
    prevBtn.classList.add('disabled-btn');
    prevBtn.style.cursor = "auto";
  } else {
    prevBtn.classList.remove('disabled-btn');
    prevBtn.style.cursor = "pointer";
  }

  if (nextBtn.disabled) {
    nextBtn.classList.add('disabled-btn');
    nextBtn.style.cursor = "auto";
  } else {
    nextBtn.classList.remove('disabled-btn');
    nextBtn.style.cursor = "pointer";
  }
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlidePosition();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlidePosition();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

updateSlidePosition();






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



let crsDropbx = document.querySelectorAll('.crs-drop-bx')

const plusIcon = document.getElementById('resNavDropIcon');
const rotateBtn = document.querySelector('.dropdown-btn');

    rotateBtn.addEventListener('click', () => {
      plusIcon.classList.toggle('iconRotate');
      document.querySelector('.drop-link-bx').classList.toggle('crsDropActive')
    });



// const banner = document.querySelector('.home_page');
// 		const element1 = document.querySelector('#element1');
// 		const element2 = document.querySelector('#element2');
// 		const element3 = document.querySelector('#element3');
// 		const element4 = document.querySelector('#element4');
// 		const element7 = document.querySelector('#element7');

// 		const element5 = document.querySelector('#element5');
// 		const element6 = document.querySelector('#element6')

// 		document.addEventListener('mousemove', (e) => {
// 			const largeMove_x = (e.clientX / window.innerWidth) * 100;
// 			const largeMove_y = (e.clientY / window.innerHeight) * 100;

// 			const shortMove_x = (e.clientX / window.innerWidth) * 20;
// 			const shortMove_y = (e.clientY / window.innerHeight) * 20;

// 			// Element 1 moves in the same direction as the cursor
// 			element1.style.transform = `translate(-${largeMove_x}%, -${largeMove_y}%)`;
// 			element3.style.transform = `translate(-${largeMove_x}%, -${largeMove_y}%)`;
// 			// element7.style.transform = `translate(-${largeMove_x}%, -${largeMove_y}%)`;
			
// 			element5.style.transform = `translate(-${shortMove_x}%, -${shortMove_y}%)`;
// 			element6.style.transform = `translate(-${shortMove_x}%, -${shortMove_y}%)`;

// 			// Element 2 moves in the opposite direction
// 			element2.style.transform = `translate(${largeMove_x}%, ${largeMove_y}%)`;
// 			element4.style.transform = `translate(-${largeMove_x}%, -${largeMove_y}%)`;
// 		});

const banner = document.querySelector('.home_page');
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



// Main Page Banner Btn
let joinBtn = document.getElementById('joinBtn');

joinBtn.addEventListener('click', function() {
  window.location.href = 'contact-page.html';
})


// Why Us Page Btn
let whyUsBtn = document.getElementById('whyUs-btn');

whyUsBtn.addEventListener('click', function() {
  window.location.href = 'about-page.html';
})


// Book Seat Page Btn
let bookSeatBtn = document.getElementById('seatBook-btn');

bookSeatBtn.addEventListener('click', function() {
  window.location.href = 'contact-page.html';
})
