//корзина
//определяем основные переменные для кнопки купона, итоговой цены, сообщения, цен
const couponButton = document.querySelector('.couponButton');
const totalprice = document.querySelector('.totalprice');
const message = document.querySelector('.message');
const price1 = Number(document.getElementById('price1').innerText);
const price2 = Number(document.getElementById('price2').innerText);
const price3 = Number(document.getElementById('price3').innerText);
const price4 = Number(document.getElementById('price4').innerText);

//считаем сумму по товарам, выводим итог на страницу
let result = price1 + price2 + price3 + price4 + ' руб.';
totalprice.innerText = result;

//добавляем обработчик на кнопку купона по клику
couponButton.addEventListener('click', function(){
let sale = (price1 + price2 + price3 + price4)/100*20;
result = (price1 + price2 + price3 + price4) - sale;
totalprice.innerText = 'Итого со скидкой: ' + result + ' руб. ';
message.innerText = `Ваша скидка - ${sale} руб.`;
});

//добавляем переменную на картинки товаров
const imgs = document.querySelectorAll('.img_container');
//добавляем обработчик через цикл - увеличение картинки товара при наведении на нее
for(let el of imgs){
el.addEventListener('mouseover', function(){
    el.classList.add('imgBig');
})};

for(let el of imgs){
    el.addEventListener('mouseout', function(){
        el.classList.remove('imgBig');
})};