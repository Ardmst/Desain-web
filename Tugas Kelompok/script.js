document.addEventListener('DOMContentLoaded', () => {

    // Countdown Timer
    const countdown = () => {
        // Atur tanggal promo berakhir (contoh: 3 hari dari sekarang)
        const countDate = new Date();
        countDate.setDate(countDate.getDate() + 3);

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDate - now;

            if (distance < 0) {
                clearInterval(interval);
                document.getElementById('countdown').innerHTML = "PROMO TELAH BERAKHIR";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('days').innerText = String(days).padStart(2, '0');
            document.getElementById('hours').innerText = String(hours).padStart(2, '0');
            document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
            document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
        }, 1000);
    };

    countdown();

    // Modal Logic
    const modal = document.getElementById('benefitModal');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.querySelector('.close-btn');
    const closeModalBtn = document.querySelector('.close-modal-btn'); // <-- TAMBAHKAN INI
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    const openModal = () => modal.style.display = 'block';
    const closeModal = () => modal.style.display = 'none';

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    closeModalBtn.addEventListener('click', closeModal); // <-- TAMBAHKAN INI
    window.addEventListener('click', (event) => {
        f (event.target == modal) 
        {closeModal();
    }
});


    // Modal Tab Functionality
    tabLinks.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;

            tabLinks.forEach(link => link.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
});