// Real-time feedback for contact form
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameFeedback = document.getElementById('name-feedback');
    const emailFeedback = document.getElementById('email-feedback');
    const messageFeedback = document.getElementById('message-feedback');

    nameInput.addEventListener('input', function() {
        if (nameInput.value.trim().length < 2) {
            nameFeedback.textContent = 'Please enter your name (at least 2 characters).';
        } else {
            nameFeedback.textContent = '';
        }
    });

    emailInput.addEventListener('input', function() {
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailFeedback.textContent = 'Please enter a valid email address.';
        } else {
            emailFeedback.textContent = '';
        }
    });

    messageInput.addEventListener('input', function() {
        if (messageInput.value.trim().length < 10) {
            messageFeedback.textContent = 'Message should be at least 10 characters.';
        } else {
            messageFeedback.textContent = '';
        }
    });
});
// Lightbox effect for project images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('#projects img');
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');

    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            modalImg.src = img.src;
            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        modalImg.src = '';
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalImg.src = '';
        }
    });
});
// Toggle navigation menu visibility
function toggleMenu() {
    const nav = document.querySelector('nav[role="navigation"]');
    nav.classList.toggle('active');
}

// Attach event listener to hamburger button
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // Smooth scrolling for internal links
    document.querySelectorAll('nav[role="navigation"] a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                // Optionally close menu after click on mobile
                document.querySelector('nav[role="navigation"]').classList.remove('active');
            }
        });
    });
});
