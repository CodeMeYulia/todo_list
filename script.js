// debugger;
// //определяем переменные
const add = document.querySelector('.add');
const submit = document.querySelector('.submit');
const todoPoint = document.querySelector('.todo-point');
const reset = document.querySelector('.reset');
const listArr = [];
todoPoint.innerHTML = `<p class="alertEmpty">Нет задач</p>`;

//добавляем задачу по клику на кнопку добавить
submit.addEventListener('click', () => {
    
    todoPoint.innerHTML = `<div class='todo-point'>
    <p class="todo">${add.value}</p>
    <label><input type="checkbox" class="checkbox"></label></div>`;
    document.querySelector('.add').value = '';

    listArr.push(todoPoint);
    console.log(listArr);
    document.querySelector('.todo-field').innerHTML = listArr;
    reset.disabled = false;
}); 

reset.addEventListener('click', () => {
    document.querySelector('.todo-field').innerHTML = `<p class="alertEmpty">Нет задач</p>`
});
