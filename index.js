/* ==========================================
   VALENTINE PROPOSAL WEBSITE - JAVASCRIPT
   Smooth • Cute • Mobile-Perfect • Romantic
   ========================================== */

// ==========================================
// CONFIGURATION (Easy to customize!)
// ==========================================
const CONFIG = {
    typewriter: {
        text1: "Hey my love ❤️",
        text2: "I made something special just for you…",
        speed: 80, // milliseconds per character
        pauseBetween: 1000 // pause between lines
    },
    slideshow: {
        interval: 4000, // milliseconds between slides
        totalSlides: 5
    },
    noButton: {
        messages: [
            "Nice try 😜",
            "You know the answer 😏",
            "Not this one 😌",
            "Oops, wrong button! 💕",
            "Try again 😉",
            "Almost there... not! 😆",
            "The other one! 👉",
            "Come on, you know which one 💖"
        ],
        dodgeDistance: 100, // pixels from cursor to start dodging (desktop)
        swapChance: 0.15 // 15% chance to swap with YES button
    },
    celebration: {
        confettiCount: 150,
        heartRainCount: 30
    }
};

// ==========================================
// FLOATING HEARTS BACKGROUND
// ==========================================
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💓', '💝'];
    const heartCount = 15;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

        // Random horizontal position
        heart.style.left = Math.random() * 100 + '%';

        // Random animation delay
        heart.style.animationDelay = Math.random() * 8 + 's';

        // Random animation duration (6-10 seconds)
        heart.style.animationDuration = (6 + Math.random() * 4) + 's';

        container.appendChild(heart);
    }
}

// ==========================================
// TYPEWRITER EFFECT
// ==========================================
function typeWriter(element, text, speed, callback) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            setTimeout(callback, CONFIG.typewriter.pauseBetween);
        }
    }

    type();
}

function startTypewriterAnimation() {
    const textElement = document.getElementById('typewriterText');
    const subtextElement = document.getElementById('typewriterSubtext');

    // Type first line
    typeWriter(textElement, CONFIG.typewriter.text1, CONFIG.typewriter.speed, () => {
        // Then type second line
        typeWriter(subtextElement, CONFIG.typewriter.text2, CONFIG.typewriter.speed);
    });
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
function setupSmoothScroll() {
    const scrollBtn = document.getElementById('scrollToMemories');
    const memoriesSection = document.getElementById('memories');

    scrollBtn.addEventListener('click', () => {
        memoriesSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// ==========================================
// IMAGE SLIDESHOW
// ==========================================
let currentSlide = 0;
let slideshowInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');

    // Remove active class from all
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    // Add active class to current
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % CONFIG.slideshow.totalSlides;
    showSlide(currentSlide);
}

function createSlideshowIndicators() {
    const container = document.getElementById('slideshowIndicators');

    for (let i = 0; i < CONFIG.slideshow.totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (i === 0) indicator.classList.add('active');

        indicator.addEventListener('click', () => {
            currentSlide = i;
            showSlide(currentSlide);
            resetSlideshowInterval();
        });

        container.appendChild(indicator);
    }
}

function resetSlideshowInterval() {
    clearInterval(slideshowInterval);
    slideshowInterval = setInterval(nextSlide, CONFIG.slideshow.interval);
}

function startSlideshow() {
    createSlideshowIndicators();
    slideshowInterval = setInterval(nextSlide, CONFIG.slideshow.interval);
}

// ==========================================
// TRANSITION SECTION ANIMATION
// ==========================================
function setupTransitionAnimation() {
    const transitionSection = document.getElementById('transition');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Auto-scroll to question after transition text appears
                setTimeout(() => {
                    document.getElementById('question').scrollIntoView({ behavior: 'smooth' });
                }, 3000); // Wait 3 seconds
            }
        });
    }, { threshold: 0.5 });

    observer.observe(transitionSection);
}

// ==========================================
// NO BUTTON EVASION LOGIC (The Fun Part!)
// ==========================================
let noButtonDodgeCount = 0;

function getRandomMessage() {
    return CONFIG.noButton.messages[Math.floor(Math.random() * CONFIG.noButton.messages.length)];
}

function showTooltip(x, y, message) {
    const tooltip = document.getElementById('noTooltip');
    tooltip.textContent = message;
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
    tooltip.classList.add('show');

    setTimeout(() => {
        tooltip.classList.remove('show');
    }, 1500);
}

function getRandomPosition(button, container) {
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    // Calculate safe boundaries
    const maxX = containerRect.width - buttonRect.width - 20;
    const maxY = containerRect.height - buttonRect.height - 20;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    return { x: newX, y: newY };
}

function shouldSwapButtons() {
    return Math.random() < CONFIG.noButton.swapChance;
}

function swapButtons() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const container = document.querySelector('.buttons-container');

    // Swap their positions in the DOM
    if (yesBtn.nextSibling === noBtn) {
        container.insertBefore(noBtn, yesBtn);
    } else {
        container.insertBefore(yesBtn, noBtn);
    }
}

// Desktop: Mouse proximity detection
function setupNoButtonDesktop() {
    const noBtn = document.getElementById('noBtn');
    const container = document.querySelector('.buttons-container');

    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 768) return; // Only on desktop

        const rect = noBtn.getBoundingClientRect();
        const btnCenterX = rect.left + rect.width / 2;
        const btnCenterY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
            Math.pow(e.clientX - btnCenterX, 2) +
            Math.pow(e.clientY - btnCenterY, 2)
        );

        if (distance < CONFIG.noButton.dodgeDistance) {
            noButtonDodgeCount++;

            // Show tooltip
            showTooltip(e.clientX + 10, e.clientY + 10, getRandomMessage());

            // Maybe swap buttons
            if (shouldSwapButtons()) {
                swapButtons();
            }

            // Move button away
            const angle = Math.atan2(e.clientY - btnCenterY, e.clientX - btnCenterX);
            const moveDistance = CONFIG.noButton.dodgeDistance;

            const newX = btnCenterX - Math.cos(angle) * moveDistance - rect.width / 2;
            const newY = btnCenterY - Math.sin(angle) * moveDistance - rect.height / 2;

            // Keep within bounds
            const containerRect = container.getBoundingClientRect();
            const boundedX = Math.max(0, Math.min(newX - containerRect.left, containerRect.width - rect.width));
            const boundedY = Math.max(0, Math.min(newY - containerRect.top, containerRect.height - rect.height));

            noBtn.style.position = 'absolute';
            noBtn.style.left = boundedX + 'px';
            noBtn.style.top = boundedY + 'px';
        }
    });
}

// Mobile: Tap dodge
function setupNoButtonMobile() {
    const noBtn = document.getElementById('noBtn');
    const container = document.querySelector('.buttons-container');

    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        noButtonDodgeCount++;

        // Show tooltip at touch position
        const touch = e.touches[0];
        showTooltip(touch.clientX + 10, touch.clientY + 10, getRandomMessage());

        // Maybe swap buttons
        if (shouldSwapButtons()) {
            swapButtons();
        }

        // Jump to random position
        const pos = getRandomPosition(noBtn, container);
        noBtn.style.position = 'absolute';
        noBtn.style.left = pos.x + 'px';
        noBtn.style.top = pos.y + 'px';
    });

    // Prevent actual click
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
    });
}

function setupNoButton() {
    setupNoButtonDesktop();
    setupNoButtonMobile();
}

// ==========================================
// YES BUTTON - CELEBRATION!
// ==========================================
function createConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confetti = [];
    const colors = ['#FF69B4', '#FF1493', '#FFC0CB', '#FFB6C1', '#E6E6FA', '#DDA0DD'];

    class Confetto {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.size = Math.random() * 8 + 4;
            this.speedY = Math.random() * 3 + 2;
            this.speedX = Math.random() * 2 - 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 10 - 5;
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;

            if (this.y > canvas.height) {
                this.y = -10;
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }

    // Create confetti
    for (let i = 0; i < CONFIG.celebration.confettiCount; i++) {
        confetti.push(new Confetto());
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confetti.forEach(c => {
            c.update();
            c.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

function createHeartRain() {
    const container = document.getElementById('heartRain');
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝'];

    for (let i = 0; i < CONFIG.celebration.heartRainCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'falling-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 4 + 's';
        heart.style.animationDuration = (3 + Math.random() * 2) + 's';

        container.appendChild(heart);
    }
}

function triggerCelebration() {
    const celebrationSection = document.getElementById('celebration');

    // Show celebration section
    celebrationSection.classList.remove('hidden');
    celebrationSection.scrollIntoView({ behavior: 'smooth' });

    // Create effects
    createConfetti();
    createHeartRain();

    // Optional: Play music (uncomment if you add music file)
    // const audio = new Audio('assets/music/romantic-song.mp3');
    // audio.volume = 0.3;
    // audio.play();
}

function setupYesButton() {
    const yesBtn = document.getElementById('yesBtn');

    yesBtn.addEventListener('click', () => {
        triggerCelebration();
    });
}

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// ==========================================
// WINDOW RESIZE HANDLER
// ==========================================
function handleResize() {
    const canvas = document.getElementById('confettiCanvas');
    if (canvas && canvas.width > 0) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
}

// ==========================================
// INITIALIZATION
// ==========================================
function init() {
    // Create floating hearts background
    createFloatingHearts();

    // Start typewriter animation
    startTypewriterAnimation();

    // Setup smooth scroll
    setupSmoothScroll();

    // Start slideshow
    startSlideshow();

    // Setup transition animation
    setupTransitionAnimation();

    // Setup NO button evasion
    setupNoButton();

    // Setup YES button celebration
    setupYesButton();

    // Setup scroll animations
    setupScrollAnimations();

    // Handle window resize
    window.addEventListener('resize', handleResize);
}

// Start everything when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ==========================================
// CUSTOMIZATION INSTRUCTIONS
// ==========================================
/*
TO CUSTOMIZE THIS WEBSITE:

1. CHANGE TEXT:
   - Edit CONFIG.typewriter.text1 and text2 at the top
   - Modify HTML content in index.html

2. ADD YOUR PHOTOS:
   - Replace image src URLs in index.html
   - Update CONFIG.slideshow.totalSlides if you add/remove photos

3. ADJUST TIMINGS:
   - CONFIG.typewriter.speed - typing speed
   - CONFIG.slideshow.interval - time between photos
   - CONFIG.noButton.dodgeDistance - how close cursor can get

4. ADD MUSIC:
   - Uncomment the audio code in triggerCelebration()
   - Add your music file to assets/music/

5. CHANGE COLORS:
   - Edit CSS custom properties in style.css (--color-pink, etc.)

6. ADJUST NO BUTTON BEHAVIOR:
   - CONFIG.noButton.messages - add more playful messages
   - CONFIG.noButton.swapChance - how often buttons swap

Have fun and good luck! 💖
*/
