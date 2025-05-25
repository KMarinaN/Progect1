// Получаем элементы
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModalBtn = document.querySelector('.close-modal');
    const userIcon = document.querySelector('.user-auth');
    
    // Открываем модальное окно при клике на иконку пользователя
    userIcon.addEventListener('click', (e) => {
        e.preventDefault();
        modalOverlay.classList.add('active');
    });
    
    // Закрываем модальное окно при клике на крестик
    closeModalBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });
    
    // Закрываем модальное окно при клике вне его области
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
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