//корзина
//определяем основные переменные для кнопки купона, итоговой цены, сообщения, цен
const couponButton = document.querySelector('.couponButton');
const totalprice = document.querySelector('.totalprice');
const message = document.querySelector('.message');
const price1 = Number(document.getElementById('price1').innerText);
const price2 = Number(document.getElementById('price2').innerText);
const price3 = Number(document.getElementById('price3').innerText);
const price4 = Number(document.getElementById('price4').innerText);
const itemPrice = document.querySelectorAll('.price');
console.log(itemPrice);


//считаем сумму по товарам, выводим итог на страницу
let result = 0;
itemPrice.forEach(function(num){
    result + num;
});
console.log(result);
// let result = price1 + price2 + price3 + price4 + ' руб.';
totalprice.innerText = result;
const prizeBlock = document.querySelector('.prizeBlock');



//добавляем обработчик на кнопку купона по клику
couponButton.addEventListener('click', function(){
let sale = (price1 + price2 + price3 + price4)/100*20;
result = (price1 + price2 + price3 + price4) - sale;
totalprice.innerText = 'Итого со скидкой: ' + result + ' руб. ';
if (isEven(result) === false) {
    alert('Никому не рассказывай. что ты выиграл приз, потомучто сумма покупок - четное число. Нажми кнопку ниже, чтобы разыграть приз.')
    const letprize = document.createElement('button');
    letprize.innerText = 'Розыгрыш приза';
    prizeBlock.append(letprize);
    letprize.classList.add('buttonPrz');
    letprize.onclick = letprizeOnclick;
    }
    couponButton.classList.add('invisible');    
    message.innerText = `Ваша скидка - ${sale} руб.`;
});

// console.log(letprize);
//добавляем переменную на картинки товаров
const imgs = document.querySelectorAll('.img_container');
//добавляем обработчик через цикл - увеличение картинки товара при наведении на нее
for(let el of imgs){
el.addEventListener('mouseover', () => el.classList.add('imgBig'));
el.addEventListener('mouseout', () => el.classList.remove('imgBig'));
};


function isEven(number){
    return number % 2 === 0;
}


    function letprizeOnclick() {
    const randomNumber = Math.random()*100;
    let yourePrize = document.createElement('div');
    yourePrize.innerText = "Ваш приз добавится в корзину после оплаты. Номер приза "+ (Math.round(randomNumber));
    totalprice.append(yourePrize);
    prizeBlock.classList.add('invisible');
};


