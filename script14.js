document.addEventListener('DOMContentLoaded', () => {
    // 1. Анимация для заголовка H1 при наведении мыши (CSS)
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.style.transition = 'transform 0.3s ease-in-out';
        h1.addEventListener('mouseenter', () => {
            h1.style.transform = 'scale(1.1)';
        });
        h1.addEventListener('mouseleave', () => {
            h1.style.transform = 'scale(1)';
        });
    }

    // 2. Анимация для параграфа текста при клике
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.addEventListener('click', () => {
            p.style.transition = 'background-color 0.5s ease-in-out';
            p.style.backgroundColor = getRandomColor();
            setTimeout(() => {
                p.style.backgroundColor = ''; // Возвращаем исходный цвет
            }, 500);
        });
    });

    // 3. Кнопка "Показать лекции" и анимация появления таблицы
    const showLecturesBtn = document.querySelector('#showLecturesBtn');
    const lecturesTable = document.querySelector('#lectures-table');

    if (showLecturesBtn && lecturesTable) {
        showLecturesBtn.addEventListener('click', () => {
            lecturesTable.style.transition = 'opacity 0.5s ease-in-out';
            lecturesTable.style.display = 'table';
            setTimeout(() => {
                lecturesTable.style.opacity = 1;
            }, 10);
        });
    }

    // 4. Анимация вращения фотографии при наведении мыши (CSS лучше)
    const studentPhoto = document.querySelector('.student-photo');
    if (studentPhoto) {
        // Анимация через CSS (рекомендуется)
    }

    // 5. Обработчик события для формы
    const form = document.querySelector('#order-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = document.createElement('div');
            message.textContent = 'Форма отправлена!';
            message.style.transition = 'color 2s ease-in-out';
            message.style.color = 'green';
            form.parentNode.insertBefore(message, form);
            setTimeout(() => {
                message.style.color = '';
            }, 2000);
        });
    }

    // 6. Функция для генерации случайного цвета
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});