// - Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let d = document;
    item = d.querySelectorAll('.item');
    cartCont = d.getElementById('card_content');
function addEvent(elem, type, handler) {
        if(elem.addEventListener){
            elem.addEventListener(type,handler,false);
        }else {
            elem.attachEvent('on' + type, function () {
                handler.call( elem );
            });
        }
        return false;
}
function getCartData(){
        return JSON.parse(localStorage.getItem('cart'));
}
function setCartData(o){
        localStorage.setItem('cart', JSON.stringify(o));
        return false;
}
function addToCart(){
        this.disable = true;
        let cartData = getCartData() || {};
        parentBox = this.parentNode;
        itemId = this.getAttribute('data-id');
        itemName = parentBox.querySelector('.name').innerHTML;
        itemNumber = parentBox.querySelector('.number').innerHTML;
        itemPrice = parentBox.querySelector('.price').innerHTML;
        if (cartData.hasOwnProperty(itemId)) {
            cartData[itemId][2] += 1;
        } else   {
            cartData[itemId] = [itemName, itemNumber, itemPrice, 1];
        }
        if (!setCartData(cartData)){
            this.disable = false;
        }
        return false;
}
for(let i = 0; i < item.length; i++){
    addEvent(item[i].querySelector('.add_item'), 'click', addToCart);
}
function openCart(){
    let cartData = getCartData(),
        totalItems = '';
    if (cartData !== null){
        totalItems = '<table class="shopping_list"><tr><th>title</th><th>price</th><th>number</th></tr>';
       for (let items in cartData){
           totalItems += '<tr>';
           for(let i = 0; i < cartData[items].length; i++){
               totalItems += '<td>' + cartData[items][i] + '</td>';
           }
           totalItems += '</tr>';
       }
       totalItems += '</table>';
       cartCont.innerHTML = totalItems;
    } else {
        cartCont.innerHTML = 'В корзині пусто';
    }
    return false;
}
addEvent(d.getElementById('checkout'), 'click', openCart);
addEvent(d.getElementById('clear'), 'click', function (){
    localStorage.removeItem('cart');
    cartCont.innerHTML = 'Корзина очищена';
});



