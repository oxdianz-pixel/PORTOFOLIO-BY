// script.js
// DOM manipulation 
document.addEventListener('DOMContentLoaded', function() {
    // Semua kode akan jalan setelah HTML dimuat
});

// smoth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
    
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// form kontak
const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if(name && email) {
            alert(`Terima kasih ${name}! Pesan anda telah dikirim.`);
            contactForm.reset();
        } else {
            alert('Harap isi semua bidang yang diperlukan.');
        }
    });
}


// filter projek
function filterprojects(category) {
    const projects = document.querySelectorAll('.project-item');

    projects.forEach(project => {
        if(category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}


// dark mode toggle
const themetoggle = document.getElementById('theme-toggle');
if(themetoggle) {
    themetoggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
}

// Toggle hamburger menu
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');
const navMenu = document.getElementById('nav-menu');

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburgerBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close menu when link is clicked
if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && !navMenu.contains(e.target)) {
        if (hamburgerBtn) hamburgerBtn.classList.remove('active');
        if (navLinks) navLinks.classList.remove('active');
    }
});

// Function untuk hubungi via WhatsApp
function hubungiWhatsApp(namaKendaraan) {
    const nomorWhatsApp = '6285231269377'; // Nomor WhatsApp Anda
    const pesan = `Halo, saya tertarik dengan ${namaKendaraan}. Apakah masih tersedia?`;
    const urlWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;
    window.open(urlWhatsApp, '_blank');
}