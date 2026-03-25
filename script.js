// ========== WELCOME POPUP AUTO CLOSE AFTER 5 SECONDS ==========
// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded - starting 5 second countdown');
    
    // Get the modal element
    const modal = document.getElementById('welcomeModal');
    const closeBtn = document.getElementById('closeModalBtn');
    const countdownElement = document.getElementById('countdownTimer');
    
    // Make sure modal is visible
    if (modal) {
        modal.style.display = 'flex';
        modal.style.opacity = '1';
    }
    
    let countdown = 5;
    
    // Update countdown display
    if (countdownElement) {
        countdownElement.textContent = countdown;
    }
    
    // Function to close the modal with fade effect
    function closeModal() {
        if (modal) {
            modal.style.opacity = '0';
            modal.style.transition = 'opacity 0.3s ease';
            setTimeout(function() {
                modal.style.display = 'none';
                console.log('Modal closed after 5 seconds');
            }, 300);
        }
    }
    
    // Start countdown timer
    let timerInterval = setInterval(function() {
        countdown--;
        
        // Update the timer display
        if (countdownElement) {
            countdownElement.textContent = countdown;
        }
        
        // Close when countdown reaches 0
        if (countdown <= 0) {
            clearInterval(timerInterval);
            closeModal();
        }
    }, 1000);
    
    // Close modal when X button is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            clearInterval(timerInterval);
            closeModal();
        });
    }
    
    // Close modal if user clicks outside the modal content
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                clearInterval(timerInterval);
                closeModal();
            }
        });
    }
    
    // Close modal when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display !== 'none') {
            clearInterval(timerInterval);
            closeModal();
        }
    });
});

// ========== MOBILE NAVIGATION TOGGLE ==========
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
const allNavLinks = document.querySelectorAll('.nav-menu a');
for (let i = 0; i < allNavLinks.length; i++) {
    allNavLinks[i].addEventListener('click', function() {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    });
}

// ========== SMOOTH SCROLLING ==========
const allAnchors = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < allAnchors.length; i++) {
    allAnchors[i].addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// ========== COPY TO CLIPBOARD FUNCTION ==========
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        const copyBtn = document.querySelector('.copy-btn');
        if (copyBtn) {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = 'Copied!';
            setTimeout(function() {
                copyBtn.innerHTML = originalText;
            }, 2000);
        }
    }).catch(function(err) {
        console.error('Copy failed:', err);
        alert('Press Ctrl+C to copy: ' + text);
    });
}

// ========== DYNAMIC PLAYER COUNT ==========
function updatePlayerCount() {
    const playerCountEl = document.getElementById('playerCount');
    const footerPlayerCount = document.getElementById('footerPlayerCount');
    if (playerCountEl) {
        const online = Math.floor(Math.random() * (128 - 45 + 1) + 45);
        playerCountEl.textContent = online + '/128';
        if (footerPlayerCount) {
            footerPlayerCount.textContent = online + '+ Active Players';
        }
    }
}

updatePlayerCount();
setInterval(updatePlayerCount, 30000);

// ========== NAVBAR BACKGROUND ON SCROLL ==========
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 15, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
    }
});

// ========== INTERSECTION OBSERVER FOR FADE-UP ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    for (let i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
            entries[i].target.style.opacity = '1';
            entries[i].target.style.transform = 'translateY(0)';
        }
    }
}, observerOptions);

const cardsToAnimate = document.querySelectorAll('.feature, .admin-card, .stat, .owner-card, .member-card');
for (let i = 0; i < cardsToAnimate.length; i++) {
    cardsToAnimate[i].style.opacity = '0';
    cardsToAnimate[i].style.transform = 'translateY(30px)';
    cardsToAnimate[i].style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(cardsToAnimate[i]);
}

// ========== STAFF IMAGES LOADING ==========
const staffImages = document.querySelectorAll('.owner-avatar img, .admin-avatar img, .member-avatar img');
for (let i = 0; i < staffImages.length; i++) {
    staffImages[i].addEventListener('load', function() {
        this.style.opacity = '1';
    });
    if (staffImages[i].complete) {
        staffImages[i].style.opacity = '1';
    } else {
        staffImages[i].style.opacity = '0.5';
        staffImages[i].onload = function() { this.style.opacity = '1'; };
    }
}

// ========== CONSOLE WELCOME MESSAGE ==========
console.log('%c🚔 METROLIVE RP | Welcome to the City! 🚔', 'color: #ff6b35; font-size: 16px; font-weight: bold;');
console.log('%cJoin us: discord.gg/zzBnbJQ3 | cfx.re/join/ok3dvx', 'color: #5865f2; font-size: 12px;');
console.log('%cThis popup will close automatically in 5 seconds', 'color: #888; font-size: 12px;');