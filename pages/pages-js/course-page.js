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






// Course Btn Filter ---------->

let crsFilterBtn = document.querySelectorAll('.crs-filter-btn');
crsFilterBtn.forEach(crsFilButton => {
  crsFilButton.addEventListener('click', function() {
    crsFilterBtn.forEach(crsFilBtn => {crsFilBtn.classList.remove('active')});
    crsFilButton.classList.add('active');
  })
});

const courses = [
  // Design Category Courses List ------------------>
  { 
    title: 'Graphic Design Mastery',
    category: 'designing',
    imageUrl: 'img/pop-graphic.avif',
    rating: 4.2,
    reviews: 15,
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti earum aliquid voluptate aperiam eveniet est iusto minima error obcaecati!',
    author: { name: 'Ethan Harper', avatar: 'testimonial-page-img/review-card-avatar2.jpg' }
  },
  { 
    title: 'Web Designing',
    category: 'designing',
    imageUrl: 'course-page-img/pop-webDesign.jpg',
    rating: 4.2,
    reviews: 15,
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti earum aliquid voluptate aperiam eveniet est iusto minima error obcaecati!',
    author: { name: 'Ethan Harper', avatar: 'testimonial-page-img/review-card-avatar2.jpg' }
  },
  { 
    title: 'UI UX Fundamentals',
    category: 'designing',
    imageUrl: 'img/pop-ui-ux.avif',
    rating: 4.2,
    reviews: 15,
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti earum aliquid voluptate aperiam eveniet est iusto minima error obcaecati!',
    author: { name: 'Ethan Harper', avatar: 'testimonial-page-img/review-card-avatar2.jpg' }
  },

  // Development Category Courses List ------------------>
  { 
    title: 'Full Stack Web Development',
    category: 'development',
    imageUrl: 'course-page-img/pop-full-stack.jpg',
    rating: 4.5,
    reviews: 20,
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti earum aliquid voluptate aperiam eveniet est iusto minima error obcaecati!',
    author: { name: 'Ethan Harper', avatar: 'testimonial-page-img/review-card-avatar2.jpg' }
  },
  { 
    title: 'Front End Web Development',
    category: 'development',
    imageUrl: 'course-page-img/pop-frontend.jpg',
    rating: 4.9,
    reviews: 20,
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti earum aliquid voluptate aperiam eveniet est iusto minima error obcaecati!',
    author: { name: 'Ethan Harper', avatar: 'testimonial-page-img/review-card-avatar2.jpg' }
  },
  { 
    title: 'Back End Development',
    category: 'development',
    imageUrl: 'course-page-img/pop-backend.jpg',
    rating: 4.2,
    reviews: 20,
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti earum aliquid voluptate aperiam eveniet est iusto minima error obcaecati!',
    author: { name: 'Ethan Harper', avatar: 'testimonial-page-img/review-card-avatar2.jpg' }
  },
  { 
    title: 'Python Developer',
    category: 'development',
    imageUrl: 'course-page-img/pop-python.jpg',
    rating: 4.2,
    reviews: 20,
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti earum aliquid voluptate aperiam eveniet est iusto minima error obcaecati!',
    author: { name: 'Ethan Harper', avatar: 'testimonial-page-img/review-card-avatar2.jpg' }
  },
  // Business Category Courses List ------------------>
  { 
    title: 'Essentials Workflow with MS Office',
    category: 'business',
    imageUrl: 'img/pop-ms-office.avif',
    rating: 4.2,
    reviews: 20,
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti earum aliquid voluptate aperiam eveniet est iusto minima error obcaecati!',
    author: { name: 'Ethan Harper', avatar: 'testimonial-page-img/review-card-avatar2.jpg' }
  },
  { 
    title: 'Mastering Microsoft Word',
    category: 'business',
    imageUrl: 'course-page-img/pop-word.jpg',
    rating: 4.2,
    reviews: 20,
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti earum aliquid voluptate aperiam eveniet est iusto minima error obcaecati!',
    author: { name: 'Ethan Harper', avatar: 'testimonial-page-img/review-card-avatar2.jpg' }
  },
  { 
    title: 'Excel Analytics',
    category: 'business',
    imageUrl: 'course-page-img/pop-excel.jpg',
    rating: 4.2,
    reviews: 20,
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti earum aliquid voluptate aperiam eveniet est iusto minima error obcaecati!',
    author: { name: 'Ethan Harper', avatar: 'testimonial-page-img/review-card-avatar2.jpg' }
  },
  { 
    title: 'PowerPoint Mastery',
    category: 'business',
    imageUrl: 'course-page-img/pop-ppt.jpg',
    rating: 4.2,
    reviews: 20,
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti earum aliquid voluptate aperiam eveniet est iusto minima error obcaecati!',
    author: { name: 'Ethan Harper', avatar: 'testimonial-page-img/review-card-avatar2.jpg' }
  },
  // Marketing Category Courses List ------------------>
  { 
    title: 'Digital Marketing Essentials',
    category: 'marketing',
    imageUrl: 'img/pop-marketing.avif',
    rating: 4.2,
    reviews: 20,
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti earum aliquid voluptate aperiam eveniet est iusto minima error obcaecati!',
    author: { name: 'Ethan Harper', avatar: 'testimonial-page-img/review-card-avatar2.jpg' }
  },
  { 
    title: 'Social Media Strategy',
    category: 'marketing',
    imageUrl: 'course-page-img/pop-socialMedia.jpg',
    rating: 4.2,
    reviews: 20,
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti earum aliquid voluptate aperiam eveniet est iusto minima error obcaecati!',
    author: { name: 'Ethan Harper', avatar: 'testimonial-page-img/review-card-avatar2.jpg' }
  },
  { 
    title: 'SEO Essentials Expert',
    category: 'marketing',
    imageUrl: 'course-page-img/pop-seo.jpg',
    rating: 4.2,
    reviews: 20,
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti earum aliquid voluptate aperiam eveniet est iusto minima error obcaecati!',
    author: { name: 'Ethan Harper', avatar: 'testimonial-page-img/review-card-avatar2.jpg' }
  },
  { 
    title: 'Content Marketing Mastery',
    category: 'marketing',
    imageUrl: 'course-page-img/pop-contentMarket.jpg',
    rating: 4.2,
    reviews: 20,
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti earum aliquid voluptate aperiam eveniet est iusto minima error obcaecati!',
    author: { name: 'Ethan Harper', avatar: 'testimonial-page-img/review-card-avatar2.jpg' }
  },
  // Animation Category Courses List ------------------>
  { 
    title: 'Motion Graphics Mastery',
    category: 'animation',
    imageUrl: 'course-page-img/pop-animation.jpg',
    rating: 4.2,
    reviews: 20,
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti earum aliquid voluptate aperiam eveniet est iusto minima error obcaecati!',
    author: { name: 'Ethan Harper', avatar: 'testimonial-page-img/review-card-avatar2.jpg' }
  },
  
  // Editing Category Courses List ------------------>
  { 
    title: 'Video Editing with Premiere Pro',
    category: 'editing',
    imageUrl: 'img/pop-video-edit.avif',
    rating: 4.2,
    reviews: 20,
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti earum aliquid voluptate aperiam eveniet est iusto minima error obcaecati!',
    author: { name: 'Ethan Harper', avatar: 'testimonial-page-img/review-card-avatar2.jpg' }
  }, 
  { 
    title: 'Photoshop for Beginners',
    category: 'editing',
    imageUrl: 'course-page-img/pop-photoshop.jpg',
    rating: 4.2,
    reviews: 20,
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti earum aliquid voluptate aperiam eveniet est iusto minima error obcaecati!',
    author: { name: 'Ethan Harper', avatar: 'testimonial-page-img/review-card-avatar2.jpg' }
  },
  { 
    title: 'Illustrator for Visual Design',
    category: 'editing',
    imageUrl: 'course-page-img/pop-illustrator.jpg',
    rating: 4.2,
    reviews: 20,
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti earum aliquid voluptate aperiam eveniet est iusto minima error obcaecati!',
    author: { name: 'Ethan Harper', avatar: 'testimonial-page-img/review-card-avatar2.jpg' }
  },  
  
];

// Initial display of all courses
displayCourses(courses);
// Update Swiper after dynamically adding slides
  swiper.update();

// Function to filter and display courses based on category
function filterCards(category) {
  const filteredCourses = category === 'all' ? courses : courses.filter(course => course.category === category);
  displayCourses(filteredCourses);
}

// Function to display courses in the swiper container in zig-zag pattern
function displayCourses(coursesToShow) {
  const outputContainer = document.getElementById('outputContainer');
  outputContainer.innerHTML = '';

  // Separate courses by category
  const categorizedCourses = {};
  coursesToShow.forEach(course => {
    if (!categorizedCourses[course.category]) {
      categorizedCourses[course.category] = [];
    }
    categorizedCourses[course.category].push(course);
  });

  // Iterate through categories and add courses in zig-zag pattern
  let maxCoursesCount = 0;
  Object.values(categorizedCourses).forEach(categoryCourses => {
    if (categoryCourses.length > maxCoursesCount) {
      maxCoursesCount = categoryCourses.length;
    }
  });

  for (let i = 0; i < maxCoursesCount; i++) {
    Object.values(categorizedCourses).forEach(categoryCourses => {
      if (categoryCourses[i]) {
        const course = categoryCourses[i];
        const swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');

        const courseCard = document.createElement('div');
        courseCard.classList.add('popular-crs-bx');

        // Course card structure
        courseCard.innerHTML = `
          <div class="crs-img">
            <img src="${course.imageUrl}" alt="">
          </div>
          <div class="crs-info">
            <div class="crs-categ-rating">
              <div class="crs-categ">${course.category}</div>
              <div class="crs-rating"><i class="fas fa-star"></i>(${course.rating} reviews)</i></div>
            </div>
            <div class="crs-title">${course.title}</div>
            <div class="crs-intro">${course.intro}</div>
            <div class="crs-author">
              <img src="${course.author.avatar}" alt=""> by, ${course.author.name}
            </div>
          </div>
          <div class="crs-box-btn">
            <a href="#" class="crs-more-info-btn">more info</a>
            <a href="#" class="crs-enroll-btn">enroll now</a>
          </div>
        `;

        swiperSlide.appendChild(courseCard);
        outputContainer.appendChild(swiperSlide);
      }
    });
  }
}


