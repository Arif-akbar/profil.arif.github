//==========================================KODING MODEL MENGETIK============================================
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current word
        const current = this.wordIndex;
        const fullTxt = this.words[current];

        // Check if deleting
        if(this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = this.txt;

        // Initial Type Speed
        let typeSpeed = 130;

        if(this.isDeleting) {
            typeSpeed /= 1;
        }

        // If word is complete
        if(!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        // If words array is complete, restart
        if(this.wordIndex === this.words.length) {
            this.wordIndex = 0;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.typing-text');
    const words = ['ARIF'];  // Anda bisa menambahkan kata-kata lain jika ingin bergantian
    const wait = 3000;

    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}

//============================================AKHIR KODING MODEL MENGERIK==================================== 

//==============================================AWAL KODING MODEL TOMBOL=====================================
// Mengambil referensi tombol
const contactBtn = document.getElementById('contactBtn');

// Menambahkan efek klik
contactBtn.addEventListener('click', function(e) {
    // Menghentikan default action
    e.preventDefault();
    
    // Menghapus animasi bounce sementara
    this.style.animation = 'none';
    
    // Menambahkan class clicked untuk animasi klik
    this.classList.add('clicked');
    
    // Setelah animasi klik selesai, kembalikan animasi bounce
    setTimeout(() => {
        this.classList.remove('clicked');
        this.style.animation = 'bounce 2s infinite';
    }, 300);
    
    // Disini bisa ditambahkan logic untuk handle click event
    // Misalnya membuka form kontak atau mengarahkan ke halaman kontak
    console.log('Contact button clicked!');
});

// Menambahkan efek hover yang lebih smooth
contactBtn.addEventListener('mouseover', function() {
    this.style.animation = 'shake 0.5s ease-in-out';
});

contactBtn.addEventListener('mouseout', function() {
    this.style.animation = 'bounce 2s infinite';
});

// Menambahkan efek ripple saat diklik
contactBtn.addEventListener('mousedown', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});
//=============================================AKHIR KODING MODEL TOMBOL=====================================

//================================================AWAL ======================================================
// Event listener untuk form submit
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form dari submit default
    showNotification(); // Menampilkan notifikasi
});

// Fungsi untuk menampilkan notifikasi
function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('show');

    // Auto hide setelah 3 detik
    setTimeout(hideNotification, 3000);
}

// Fungsi untuk menyembunyikan notifikasi
function hideNotification() {
    const notification = document.getElementById('notification');
    notification.classList.remove('show');
}

