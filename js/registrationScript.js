document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        // Здесь можно добавить логику для отправки данных на сервер и обработки входа пользователя
        // Пример проверки логина и пароля:
        if (username === 'example' && password === 'password') {
            alert('Вход выполнен успешно.');
        } else {
            alert('Неверное имя пользователя или пароль.');
        }
    });

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
        const fullname = document.getElementById('signup-fullname').value;
        // Здесь можно добавить логику для отправки данных на сервер и регистрации нового пользователя
        // Пример регистрации нового пользователя:
        alert('Пользователь ' + username + ' успешно зарегистрирован.');
        // Здесь также можно добавить код для отправки данных на сервер и сохранения нового пользователя в базе данных
    });
});
