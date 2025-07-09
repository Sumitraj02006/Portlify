// Smooth Scroll for Navigation
document.querySelectorAll('.nav-links a, .hero-content .btn').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Floating Action Button (FAB) Scroll to Top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/Hide FAB based on scroll position
window.addEventListener('scroll', () => {
    const fab = document.querySelector('.fab');
    if (window.scrollY > 300) { // Show FAB after scrolling 300px
        fab.style.display = 'flex'; // Or use opacity/transform for smooth appearance
    } else {
        fab.style.display = 'none'; // Hide FAB
    }
});

// Animated Progress Bars (Simple Intersection Observer)
const skillProgressBars = document.querySelectorAll('.progress');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // When 50% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.style.width; // Get the target width set in CSS
            progressBar.style.width = width; // Trigger the CSS transition
            observer.unobserve(progressBar); // Stop observing once animated
        }
    });
}, observerOptions);

skillProgressBars.forEach(bar => {
    observer.observe(bar);
});


// Particles.js Initialization (Requires the particles.js library linked in HTML)
particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#8A2BE2" // Neon purple
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#00FFFF", // Neon blue
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
});


// Basic Scroll-based Animations (for About Me section - requires more advanced libraries like GSAP for complex effects)
const aboutSection = document.querySelector('#about');

const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in'); // Add a class to trigger CSS animation
            observer.unobserve(entry.target);
        }
    });
};

const sectionObserver = new IntersectionObserver(animateOnScroll, {
    rootMargin: '0px',
    threshold: 0.3
});

// Observe sections for animation
sectionObserver.observe(aboutSection);

// Add CSS for fade-in animation (in style.css)
/*
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-out, transform 1s ease-out;
}
.fade-in.animated { // Add this class by JS after IntersectionObserver
    opacity: 1;
    transform: translateY(0);
}
*/