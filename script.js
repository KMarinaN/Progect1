// Получаем элементы
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModalBtn = document.querySelector('.close-modal');
    const userIcon = document.querySelector('.user-auth');
    
    userIcon.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.style.overflow = 'hidden';
        modalOverlay.classList.add('active');
        window.scrollTo(0, 0);
        if (navLinks) navLinks.classList.remove('active'); // <-- добавьте эту строку!
    });

    
    // Закрываем модальное окно при клике на крестик
    closeModalBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Восстанавливаем прокрутку
    });
    
    // Закрываем модальное окно при клике вне его области
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Восстанавливаем прокрутку
        }
    });
    
    // Обработка формы регистрации
    const registerForm = document.querySelector('.register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Здесь можно добавить логику регистрации
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // Если все хорошо, закрываем модальное окно
            modalOverlay.classList.remove('active');
            alert('Registration successful!');
        });
    }
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Закрытие меню при клике вне его области
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    }
    // Добавляем анимацию при клике на часы
const watchItems = document.querySelectorAll('.watches-item');
watchItems.forEach(item => {
    item.addEventListener('click', function() {
        this.style.animation = 'none';
        void this.offsetWidth; // Trigger reflow
        this.style.animation = 'jump 0.4s ease';
    });
});

// Анимация для кнопок в навигации
const navButtons = document.querySelectorAll('.menu-link');
navButtons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'translateY(2px)';
    });
    button.addEventListener('mouseup', () => {
        button.style.transform = 'translateY(0)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
});
