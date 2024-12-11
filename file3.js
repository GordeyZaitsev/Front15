// Получаем все кнопки "Заказать"
const btns = document.querySelectorAll('.btn-order');

// Добавляем событие клика на каждую кнопку
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Показываем модальное окно
        document.getElementById('modal').style.display = 'block';
    });
});

// Получаем форму и поля
const form = document.getElementById('order-form');
const inputs = form.elements;

// Добавляем событие отправки формы
form.addEventListener('submit', (e) => {
    // Предотвращаем стандартное поведение формы
    e.preventDefault();

    // Проверяем все поля
    let isValid = true;
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
        }
    });

    // Если все поля заполнены, отправляем форму
    if (isValid) {
        // Получаем значения полей
        const name = inputs['name'].value;
        const email = inputs['email'].value;
        const phone = inputs['phone'].value;
        const country = inputs['country'].value;
        const date = inputs['date'].value;
        const comment = inputs['comment'].value;
        const serviceType = document.getElementById('service-type').value;

        // Отправляем форму на сервер (в данном случае мы не отправляем, а просто выводим сообщение)
        alert('Форма успешно отправлена!');
        // которые можно заменить на код для отправки формы на сервер
        // window.location.href = 'https://example.com/thank-you';
    } else {
        alert('Пожалуйста, заполните все поля!');
    }
});

// Добавляем событие клика на кнопку закрытия модального окна
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});