// debugger;

//определяем переменные
const add = document.querySelector('.add');
const submit = document.querySelector('.submit');
const todoPoint = document.querySelector('.todo-point');
const reset = document.querySelector('.reset');

//описание функции добавления задачи

let addTodo = () => 
{
    let point = document.createElement('input');
    point.innerHTML = `${add.value}`;
    point.className = 'todo';
    point.type = 'checkbox';
    todoPoint.append(point);

    const listArr = [];
    listArr.push(point);
    console.log(listArr);

}

submit.addEventListener('click', addTodo); 








