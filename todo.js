const input = document.getElementById('inputTodo');
const addTodoBtn = document.getElementById('addTodo');
const listTodo = document.querySelector('.listTodo');
const clearListTodo = document.getElementById('clearListTodo');
let list = [];

function checkLSdata() {
    //проверяем хранилище на наличие сохраненных задач
    const listArrJson = localStorage.getItem("todoList");
    //если не пустое
    if (listArrJson !== "") {
        //неактивность кнопки если список пустой
        clearListTodo.disabled = !listArrJson;
        //парсим из хранилища список на страницу
        const listArrParsed = JSON.parse(listArrJson);
        if (listArrJson) {
            //для каждого пункта списка
            for (let key in listArrParsed) {
                //присвоить значение в вэлью
                const value = listArrParsed[key];
                //присвоить порядковый номер
                key = Number(key) + 1;
                //вывести на экран пункт в список
                const task = document.createElement('div');
                task.classList.add('task');
                task.innerHTML = `
                <span>${key}: ${value}</span>
                <input type="checkbox" class="done">
                <br>`
                listTodo.append(task);

                //добавляем возможность чекать выполненные
                task.addEventListener('change', function (e) {
                    e.currentTarget.classList.toggle('iDid');
                })
            }
        }
    }
}
checkLSdata();

function addTodo() {
    if (input.value !== '') {
        const todoInput = (input.value).trim();
        list.push(todoInput);
        const listJson = JSON.stringify(list);

        function makeLSdata() {
            localStorage.setItem("todoList", listJson);
            console.log("Список сохранен в лок хр-ще");
        }

        makeLSdata();

        function getLSdata() {
            listTodo.innerHTML = "";
            checkLSdata();
        }
        getLSdata();
    }

    input.value = '';
}

addTodoBtn.addEventListener('click', addTodo);

clearListTodo.addEventListener('click', function () {
    listTodo.innerHTML = "";
    clearListTodo.setAttribute("disabled", true);
})


//сделать, чтобы при обновлении страницы списо можно было дополнять
//сделать, чтобы сохранялось состояние задачи  "сделано"
//сделать, чтобы при попадании в фокус кнопки добавить показывалось напоминание о записи задачи