//планер задач
//задаем переменные поля ввода, кнопки добавления и поля сохраненных задач
const newTask = document.getElementById('newTask');
const addTask = document.getElementById('addTask');
const todolist = document.getElementById('todolist');

//функция добавления новой задачи
function addNewTask() {
if (newTask.value.trim().length){
   const taskPoint = document.createElement('li');
   taskPoint.innerText = newTask.value;
   todolist.append(taskPoint);
   newTask.value = "";

   //зачеркиваем выполненное
   taskPoint.addEventListener('click', function(){
    console.log(e.target.tagName);
    taskPoint.classList.toggle('close');
});
}else{alert("добавьте задачу")};
} ;

//вешаем обработчик события на кнопку добавления задачи по клику
addTask.addEventListener('click', addNewTask);


