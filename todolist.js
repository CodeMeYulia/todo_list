//планер задач
//задаем переменные поля ввода, кнопки добавления и поля сохраненных задач
const newTask = document.getElementById('newTask');
const addTask = document.getElementById('addTask');
const todolist = document.getElementById('todolist');

//функция добавления новой задачи
function addNewTask() {
   const taskPoint = document.createElement('li');
   taskPoint.innerText = newTask.value;
   todolist.append(taskPoint);
   newTask.value = "";

   taskPoint.addEventListener('click', function(){
    taskPoint.classList.toggle('close');
});
}

//вешаем обработчик события на кнопку добавления задачи по клику
addTask.addEventListener('click', addNewTask);


