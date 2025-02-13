document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.classList.add("hidden");
        document.body.classList.add("loaded")
    }, 2000); // Loader hilang setelah 2 detik
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth', block: 'start'
        });
    });
});

document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
});
// Animasi saat scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < window.innerHeight) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Perbaikan JavaScript (di file script.js)
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navContainer = document.querySelector('nav');

    // Toggle menu
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navLinks.classList.toggle('active');
    });

    // Close menu saat klik di luar
    document.addEventListener('click', function(e) {
        if (!navContainer.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Close menu saat resize window (opsional)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
        }
    });
});
// mini games
let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3; // Pemain punya 3 kesempatan

function checkGuess() {
let guess = parseInt(document.getElementById('guess').value);
let resultMessage = document.getElementById('result-message');
let restartBtn = document.getElementById('restart-btn');

if (isNaN(guess) || guess < 1 || guess >= 10) {
    resultMessage.innerHTML = "⚠️ Masukkan angka 1-10!";
return;
    }

    attempts--;

if (guess === randomNumber) {
    resultMessage.innerHTML = "🎉 Selamat! Angkanya " + randomNumber + "!";
    resultMessage.style.color = "#00ff00";
    restartBtn.style.display = "block";
} else if (attempts > 0) {
    resultMessage.innerHTML = `❌ Salah! Kamu punya ${attempts} kesempatan lagi!`;
    resultMessage.style.color = "#ffcc00";
} else {
    resultMessage.innerHTML = "💀 Game Over! Angka yang benar: " + randomNumber;
    resultMessage.style.color = "#ff0000";
    restartBtn.style.display = "block";
}
}

function restartGame() {
   randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 3;
    document.getElementById('result-message').innerHTML = "";
    document.getElementById('guess').value = "";
    document.getElementById('restart-btn').style.display = "none";
}

// mini games
document.querySelectorAll('.certificate-img').forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            cursor: zoom-out;
        `;
        
        const zoomedImg = document.createElement('img');
        zoomedImg.src = img.src;
        zoomedImg.style.maxWidth = '90%';
        zoomedImg.style.maxHeight = '90%';
        zoomedImg.style.borderRadius = '8px';
        
        overlay.appendChild(zoomedImg);
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', () => {
            overlay.remove();
        });
    });
});

// Formspree Integration
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Ganti YOUR_FORMSPREE_ENDPOINT dengan endpoint dari Formspree
    const formspreeEndpoint = 'https://formspree.io/f/mnnjvnvj';

    fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Pesan berhasil dikirim!');
        form.reset(); // Reset form setelah pengiriman
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan, silakan coba lagi.');
    });
});

// Tambahkan di script.js
console.log("Form sedang dikirim...");
console.log("Nama:", document.getElementById('name').value);
console.log("Email:", document.getElementById('email').value);
console.log("Pesan:", document.getElementById('message').value);