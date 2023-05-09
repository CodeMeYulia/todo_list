// //определяем переменные
const add = document.querySelector('.add');
const submit = document.querySelector('.submit');
const todoPoint = document.querySelector('.todo-point');
const reset = document.querySelector('.reset');
const done = document.querySelector('.checkbox');
let listArr = [];
todoPoint.innerHTML = `<p class="alertEmpty">Нет задач</p>`;


//добавляем задачу по клику на кнопку добавить
submit.addEventListener('click', () => {
    //проверка на пустое значение поля
    if (add.value.length < 1) {return false};

//если есть значение, то передаем его в созданные элементы
    todoPoint.innerHTML = `
    <div class="todo-point"><label class="todo">${add.value}<input type="checkbox" class="checkbox"></label></div> 
    `;
    document.querySelector('.add').value = '';

//добавляем элемент в массив и передаем массив объединенной строкой в список
    listArr.push(todoPoint.innerHTML);
    document.querySelector('.todo-field').innerHTML = listArr.join('');

//отменяем блокировку сброса    
    reset.disabled = false;
}); 


//очищаем список задач по клику на кнопке сброса
reset.addEventListener('click', () => {
    listArr = [];
    document.querySelector('.todo-field').innerHTML = `<p class="alertEmpty">Нет задач</p>`
});