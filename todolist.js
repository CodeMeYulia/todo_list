const newTask = document.getElementById('newTask');
const addTask = document.getElementById('addTask');
const todolist = document.getElementById('todolist');

function addNewTask() {
   const taskPoint = document.createElement('li');
   taskPoint.innerText = newTask.value;
   todolist.append(taskPoint);
   newTask.value = "";

   taskPoint.addEventListener('click', function(){
    taskPoint.classList.toggle('close');
});

}

addTask. addEventListener('click', addNewTask);


//-----------------------------------------
const couponButton = document.querySelector('.couponButton');
const totalprice = document.querySelector('.totalprice');
const message = document.querySelector('.message');
const price1 = Number(document.getElementById('price1').innerText);
const price2 = Number(document.getElementById('price2').innerText);
const price3 = Number(document.getElementById('price3').innerText);
const price4 = Number(document.getElementById('price4').innerText);
let result = price1 + price2 + price3 + price4 + ' руб.';
totalprice.innerText = result;


couponButton.addEventListener('click', function(){
let sale = (price1 + price2 + price3 + price4)/100*20;
result = (price1 + price2 + price3 + price4) - sale;
totalprice.innerText = 'Итого со скидкой: ' + result + ' руб. ';
message.innerText = `Ваша скидка - ${sale} руб.`;
});

const imgs = document.querySelectorAll('.img_container');

for(let el of imgs){
el.addEventListener('mouseover', function(){
    el.classList.add('imgBig');
})};

for(let el of imgs){
    el.addEventListener('mouseout', function(){
        el.classList.remove('imgBig');
})};