document.addEventListener('DOMContentLoaded', () => {
    // Получаем текущий URL страницы
    const currentPage = window.location.pathname.split('/').pop();

    // Обработчики для главной страницы (index4.html)
    if (currentPage === 'index4.html') {
        // 1. Обработчик клика на заголовок H1
        const mainTitle = document.querySelector('h1');
        if (mainTitle) {
            mainTitle.addEventListener('click', () => {
                alert("Вы кликнули на заголовок - так держать!");
            });
        }

        // 3. Обработчики для фотографии студента
        const studentPhoto = document.querySelector('.main-content-right img.right-aligned');
        if (studentPhoto) {
            let originalWidth = studentPhoto.offsetWidth;
            let originalHeight = studentPhoto.offsetHeight;

            studentPhoto.addEventListener('mouseover', () => {
                studentPhoto.style.width = `${originalWidth * 1.1}px`;
                studentPhoto.style.height = `${originalHeight * 1.1}px`;
            });

            studentPhoto.addEventListener('mouseout', () => {
                studentPhoto.style.width = `${originalWidth}px`;
                studentPhoto.style.height = `${originalHeight}px`;
            });

            studentPhoto.addEventListener('click', () => {
                // Замените URL на реальный URL фотографии любимого преподавателя
                studentPhoto.src = 'https://cdna.artstation.com/p/assets/images/images/024/872/092/large/titania-g-han-titania-g-han-yoda-shot0200.jpg?1583810415';
                studentPhoto.alt = 'Фотография любимого преподавателя';
            });

            // 4. Обработчик двойного клика на фотографию студента
            studentPhoto.addEventListener('dblclick', () => {
                alert("Не налегай, у меня не так много любимых преподавателей");
            });
        }
    }
});