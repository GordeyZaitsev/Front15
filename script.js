// Часть 1: Работа с DOM
const h1 = document.querySelector('h1');
if (h1) {
    h1.textContent = 'Добро пожаловать на наш сайт!';
}

const h2 = document.querySelector('h2');
if (h2) {
    h2.style.color = 'red';
}

const firstParagraph = document.querySelector('p');
if (firstParagraph) {
    firstParagraph.textContent = 'Это новый текст параграфа.';
}

const video = document.querySelector('video');
if (video) {
    video.style.display = 'none';
}

// Часть 2: Работа с объектами
let formData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    comment: '',
    printData: function() {
        console.log(`Имя: ${this.name}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Дата: ${this.date}`);
        console.log(`Комментарий: ${this.comment}`);
    }
};

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value;
    const comment = document.getElementById('comment').value.trim();

    if (!name || !email || !comment) {
        alert('Пожалуйста, заполните обязательные поля: Имя, E-mail, Комментарий.');
        return;
    }

    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
        alert('Поле "Телефон" должно содержать только цифры.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Введите корректный адрес электронной почты.');
        return;
    }

    formData.name = name;
    formData.email = email;
    formData.phone = phone;
    formData.date = date;
    formData.comment = comment;
    formData.printData();

    alert('Форма успешно отправлена!');
}

const form = document.getElementById('order-form');
if (form) {
    form.addEventListener('submit', submitForm);
}