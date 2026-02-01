/* ==========================================
   VALENTINE PROPOSAL WEBSITE - ENHANCED
   With Mini-Game & Giphy API Integration
   ========================================== */

// ==========================================
// CONFIGURATION
// ==========================================
const CONFIG = {
    // Giphy API Configuration
    giphy: {
        apiKey: 'DQoSatj4lytj8x5wowBrqqqELUGTsW2U', // Get free key at https://developers.giphy.com/
        searchTerms: {
            intro: 'cute love bear',
            question: 'romantic hearts valentine',
            celebration: 'cute valentine love hearts'
        },
        limit: 20, // Number of GIFs to fetch
        rating: 'g' // Content rating (g, pg, pg-13, r)
    },

    // Mini-Game Settings
    miniGame: {
        heartsToCollect: 5,
        maxHearts: 8, // Max hearts on screen at once
        heartSpawnInterval: 1500, // ms
        heartSymbols: ['❤️', '💕', '💖', '💗', '💓', '💝']
    },

    // Typewriter Settings
    typewriter: {
        text1: "Hey my love ❤️",
        text2: "I made something special just for you…",
        speed: 80,
        pauseBetween: 1000
    },

    // Carousel Settings
    carousel: {
        autoAdvance: true,
        interval: 5000, // ms
        totalSlides: 7
    },

    // NO Button Settings
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
        dodgeDistance: 100,
        swapChance: 0.15
    },

    // Celebration Settings
    celebration: {
        confettiCount: 150,
        heartRainCount: 30
    }
};

// ==========================================
// GIPHY API INTEGRATION
// ==========================================
async function fetchRandomGif(searchTerm) {
    // If no API key, use fallback GIFs
    if (CONFIG.giphy.apiKey === 'YOUR_GIPHY_API_KEY_HERE') {
        return getFallbackGif(searchTerm);
    }

    try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${CONFIG.giphy.apiKey}&q=${encodeURIComponent(searchTerm)}&limit=${CONFIG.giphy.limit}&rating=${CONFIG.giphy.rating}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.data && data.data.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.data.length);
            return data.data[randomIndex].images.original.url;
        }
    } catch (error) {
        console.log('Giphy API error, using fallback:', error);
    }

    return getFallbackGif(searchTerm);
}

function getFallbackGif(searchTerm) {
    const fallbacks = {
        'cute love bear': 'https://media.giphy.com/media/l0HlSLlbkVqJTOJnW/giphy.gif',
        'romantic hearts valentine': 'https://media.giphy.com/media/3oEjI1erPMTMBFmNHi/giphy.gif',
        'happy celebration love': 'https://media.giphy.com/media/g5R9dok94mrIvplmZd/giphy.gif'
    };
    return fallbacks[searchTerm] || 'https://media.giphy.com/media/l0HlSLlbkVqJTOJnW/giphy.gif';
}

async function loadAllGifs() {
    const introGif = document.getElementById('introGif');
    const questionGif = document.getElementById('questionGif');
    const celebrationGif = document.getElementById('celebrationGif');

    introGif.src = await fetchRandomGif(CONFIG.giphy.searchTerms.intro);
    questionGif.src = await fetchRandomGif(CONFIG.giphy.searchTerms.question);
    celebrationGif.src = await fetchRandomGif(CONFIG.giphy.searchTerms.celebration);
}

// ==========================================
// MINI-GAME: CATCH THE HEARTS
// ==========================================
let heartsCollected = 0;
let gameHearts = [];
let gameInterval;

function createCatchableHeart() {
    const gameArea = document.getElementById('gameArea');
    const heart = document.createElement('div');
    heart.className = 'catchable-heart';
    heart.textContent = CONFIG.miniGame.heartSymbols[Math.floor(Math.random() * CONFIG.miniGame.heartSymbols.length)];

    // Random position
    const x = Math.random() * (window.innerWidth - 80);
    const y = Math.random() * (window.innerHeight - 200) + 100;

    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    // Click/tap handler
    heart.addEventListener('click', () => catchHeart(heart));

    gameArea.appendChild(heart);
    gameHearts.push(heart);

    // Remove excess hearts
    if (gameHearts.length > CONFIG.miniGame.maxHearts) {
        const oldHeart = gameHearts.shift();
        oldHeart.remove();
    }
}

function catchHeart(heart) {
    heartsCollected++;
    document.getElementById('heartCount').textContent = heartsCollected;

    // Animate heart caught
    heart.classList.add('caught');
    setTimeout(() => heart.remove(), 600);

    // Update hint
    const hint = document.getElementById('gameHint');
    if (heartsCollected === 1) {
        hint.textContent = 'Great! Keep going! 💖';
    } else if (heartsCollected === 3) {
        hint.textContent = 'Almost there! 😳💕';
    } else if (heartsCollected === 4) {
        hint.textContent = 'One more! 🥰';
    }

    // Check if game complete
    if (heartsCollected >= CONFIG.miniGame.heartsToCollect) {
        completeGame();
    }
}

function completeGame() {
    clearInterval(gameInterval);

    const hint = document.getElementById('gameHint');
    hint.textContent = 'Perfect! Unlocking your surprise... 💖';

    // Fade out game, fade in main website
    setTimeout(() => {
        document.getElementById('miniGame').classList.add('fade-out');

        setTimeout(() => {
            document.getElementById('miniGame').style.display = 'none';
            const mainWebsite = document.getElementById('mainWebsite');
            mainWebsite.classList.remove('hidden');
            setTimeout(() => mainWebsite.classList.add('visible'), 50);

            // Start main website animations
            startMainWebsite();
        }, 800);
    }, 1000);
}

function startMiniGame() {
    // Spawn hearts periodically
    gameInterval = setInterval(createCatchableHeart, CONFIG.miniGame.heartSpawnInterval);

    // Create initial hearts
    for (let i = 0; i < 3; i++) {
        setTimeout(createCatchableHeart, i * 500);
    }
}

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

        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 10 + 's';
        heart.style.animationDuration = (8 + Math.random() * 4) + 's';

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

    typeWriter(textElement, CONFIG.typewriter.text1, CONFIG.typewriter.speed, () => {
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
// INTERACTIVE CAROUSEL
// ==========================================
let currentSlide = 0;
let carouselInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.memory-card');
    const indicators = document.querySelectorAll('.indicator');

    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % CONFIG.carousel.totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + CONFIG.carousel.totalSlides) % CONFIG.carousel.totalSlides;
    showSlide(currentSlide);
}

function createCarouselIndicators() {
    const container = document.getElementById('carouselIndicators');

    for (let i = 0; i < CONFIG.carousel.totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (i === 0) indicator.classList.add('active');

        indicator.addEventListener('click', () => {
            currentSlide = i;
            showSlide(currentSlide);
            resetCarouselInterval();
        });

        container.appendChild(indicator);
    }
}

function resetCarouselInterval() {
    if (CONFIG.carousel.autoAdvance) {
        clearInterval(carouselInterval);
        carouselInterval = setInterval(nextSlide, CONFIG.carousel.interval);
    }
}

function setupCarousel() {
    createCarouselIndicators();

    document.getElementById('prevBtn').addEventListener('click', () => {
        prevSlide();
        resetCarouselInterval();
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        nextSlide();
        resetCarouselInterval();
    });

    if (CONFIG.carousel.autoAdvance) {
        carouselInterval = setInterval(nextSlide, CONFIG.carousel.interval);
    }
}

// ==========================================
// TRANSITION SECTION AUTO-SCROLL
// ==========================================
function setupTransitionAnimation() {
    const transitionSection = document.getElementById('transition');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    document.getElementById('question').scrollIntoView({ behavior: 'smooth' });
                }, 3000);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(transitionSection);
}

// ==========================================
// NO BUTTON EVASION
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

    setTimeout(() => tooltip.classList.remove('show'), 1500);
}

function shouldSwapButtons() {
    return Math.random() < CONFIG.noButton.swapChance;
}

function swapButtons() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const container = document.querySelector('.buttons-container');

    if (yesBtn.nextSibling === noBtn) {
        container.insertBefore(noBtn, yesBtn);
    } else {
        container.insertBefore(yesBtn, noBtn);
    }
}

// Desktop: Mouse proximity
function setupNoButtonDesktop() {
    const noBtn = document.getElementById('noBtn');

    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 768) return;

        const rect = noBtn.getBoundingClientRect();
        const btnCenterX = rect.left + rect.width / 2;
        const btnCenterY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
            Math.pow(e.clientX - btnCenterX, 2) +
            Math.pow(e.clientY - btnCenterY, 2)
        );

        if (distance < CONFIG.noButton.dodgeDistance) {
            noButtonDodgeCount++;
            showTooltip(e.clientX + 10, e.clientY + 10, getRandomMessage());

            if (shouldSwapButtons()) {
                swapButtons();
            }

            const angle = Math.atan2(e.clientY - btnCenterY, e.clientX - btnCenterX);
            const moveDistance = CONFIG.noButton.dodgeDistance;

            const newX = btnCenterX - Math.cos(angle) * moveDistance;
            const newY = btnCenterY - Math.sin(angle) * moveDistance;

            const container = document.querySelector('.buttons-container').getBoundingClientRect();
            const boundedX = Math.max(0, Math.min(newX - container.left - rect.width / 2, container.width - rect.width));
            const boundedY = Math.max(0, Math.min(newY - container.top - rect.height / 2, container.height - rect.height));

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

        const touch = e.touches[0];
        showTooltip(touch.clientX + 10, touch.clientY + 10, getRandomMessage());

        if (shouldSwapButtons()) {
            swapButtons();
        }

        const containerRect = container.getBoundingClientRect();
        const btnRect = noBtn.getBoundingClientRect();
        const maxX = containerRect.width - btnRect.width - 20;
        const maxY = containerRect.height - btnRect.height - 20;

        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        noBtn.style.position = 'absolute';
        noBtn.style.left = newX + 'px';
        noBtn.style.top = newY + 'px';
    });

    noBtn.addEventListener('click', (e) => e.preventDefault());
}

function setupNoButton() {
    setupNoButtonDesktop();
    setupNoButtonMobile();
}

// ==========================================
// YES BUTTON CELEBRATION
// ==========================================
function createConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confetti = [];
    const colors = ['#ff8ccf', '#d63384', '#a78bfa', '#ffd6e8', '#e8def8'];

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

    for (let i = 0; i < CONFIG.celebration.confettiCount; i++) {
        confetti.push(new Confetto());
    }

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

    celebrationSection.classList.remove('hidden');
    celebrationSection.scrollIntoView({ behavior: 'smooth' });

    createConfetti();
    createHeartRain();
}

function setupYesButton() {
    document.getElementById('yesBtn').addEventListener('click', triggerCelebration);
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
// MAIN WEBSITE INITIALIZATION
// ==========================================
function startMainWebsite() {
    createFloatingHearts();
    startTypewriterAnimation();
    setupSmoothScroll();
    setupCarousel();
    setupTransitionAnimation();
    setupNoButton();
    setupYesButton();
    window.addEventListener('resize', handleResize);
}

// ==========================================
// INITIALIZATION
// ==========================================
async function init() {
    // Load GIFs from Giphy API
    await loadAllGifs();

    // Start mini-game
    startMiniGame();
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

