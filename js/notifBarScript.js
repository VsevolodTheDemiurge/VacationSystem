const openButton = document.getElementById('openNotifications');
const notifWindow = document.getElementById('notifWindow');

function openModalUnderButton() {
    const buttonRect = openButton.getBoundingClientRect(); // Получаем координаты кнопки
    notifWindow.style.left = `${buttonRect.left}px`; // Устанавливаем left для модального окна
    notifWindow.style.top = `${buttonRect.bottom}px`; // Устанавливаем top для модального окна
    notifWindow.style.display = 'block';
}

openButton.addEventListener('click', function() { 
	if (openButton.src.endsWith('notifications-icon.svg')) {
        notifWindow.style.display = 'none';
    } else {
    	openModalUnderButton();
    }
});
