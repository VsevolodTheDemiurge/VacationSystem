// Получаем ссылку на элемент кнопки с изображением
const imageButton = document.getElementById('openNotifications');

let unactiveImagePath;
let activeImagePath;
const currentPath = window.location.pathname;

if (currentPath.endsWith('index.html')){
    activeImagePath = './imgs/notifications-icon-active.svg';
    unactiveImagePath = './imgs/notifications-icon.svg';
}
else if (currentPath.endsWith('/authorization-page.html')){
    activeImagePath = '../imgs/notifications-icon-active.svg';
    unactiveImagePath = '../imgs/notifications-icon.svg';
}
else if (currentPath.endsWith('/applications-reg-page.html')){
    activeImagePath = '../imgs/notifications-icon-active.svg';
    unactiveImagePath = '../imgs/notifications-icon.svg';
}/*
else if (currentPath.endsWith('/authorization-page.html')){
    activeImagePath = '../imgs/notifications-icon-active.svg';
    unactiveImagePath = '../imgs/notifications-icon.svg';
}
*/

// Устанавливаем обработчик события "click" для кнопки
imageButton.addEventListener('click', function() {
	if (imageButton.src.endsWith('notifications-icon.svg')) {
        // Если текущее изображение - image1.jpg, то меняем на image2.jpg
        imageButton.src = activeImagePath;
        imageButton.alt = 'Изображение 2';
        imageButton.setAttribute('style', 'border-top-left-radius: 15px; border-top-right-radius: 15px; background: #c4cdd4;')
    } else {
        // В противном случае меняем обратно на image1.jpg
        imageButton.src = unactiveImagePath;
        imageButton.alt = 'Изображение 1';
        imageButton.setAttribute('style', 'border-top-left-radius: 0px; border-top-right-radius: 0px; background: lightgray;')
    }
});