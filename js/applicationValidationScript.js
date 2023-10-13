document.addEventListener('DOMContentLoaded', function () {
    const vacationForm = document.getElementById('vacation-form');
    vacationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const startDate = new Date(document.getElementById('start-date').value);
        const endDate = new Date(document.getElementById('end-date').value);

        const diffTime = Math.abs(endDate - startDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays >= 14) {
            // Ваш код для отправки данных в базу данных
            alert('Заявка на отпуск отправлена.');
        } else {
            alert('Ошибка: Хотя бы одна часть отпуска должна быть не менее 14 дней.');
        }
    });
});
