// Время создания элемента в данном случае документа
const date = new Date(document.lastModified);

const weekDays = ['0','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
const monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']

let day = date.getDate()
let day_of_week = date.getDay()
let week = getNumberOfWeek()
let month = date.getMonth()
const year = date.getFullYear()

function getNumberOfWeek() {
    return Math.ceil((day) / 7);
}

let dataUpdate = `${weekDays[day_of_week]}, ${week} неделя ${monthNames[month]}, ${year} года`

product_date.innerHTML = dataUpdate;

const nodeList = document.querySelectorAll(".example");
for (let i = 0; i < product_date.length; i++) {
    product_date[i].innerHTML = dataUpdate;
}