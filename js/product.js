const image = $('#image').attr('src');
const name = $('#name').text();
const sizeContainer = $('#size');
const priceText = $('#price').text();

$('.buy').on('click', function() {
    addToCart();
    window.location.href = "cart.html";
});

$('.add-to-cart').on('click', function() {
    addToCart();
    alert('Adicionado com sucesso!')
});

$('#add').on('click', function() {
    let currentAmmount = $('#ammount').val();
    let ammount = parseInt(currentAmmount) + 1;
    $('#ammount').val(ammount);
});

$('#sub').on('click', function() {
    let currentAmmount = $('#ammount').val();
    let ammount = parseInt(currentAmmount) - 1;
    if (ammount <= 0) {
        ammount = 1;
    }
    $('#ammount').val(ammount);
});

$('.size-button').on('click', function() {
    $('.size-button').removeClass('selected');
    $(this).addClass('selected');
});

function addToCart() {
    const size = sizeContainer.find('.selected').text();
    const ammount = $('#ammount').val();
    let price = priceText.replace(',', '.')
    let products = JSON.parse(localStorage.getItem("products") || "[]");
    console.log(products)
    let product = {
        "id": products.length,
        "name": name,
        "image": image,
        "size": size,
        "price": parseFloat(price.replace('R$', '') * ammount),
        "ammount": ammount
    }
    
    console.log(product.price)

    products.unshift(product);
    localStorage.setItem('products', JSON.stringify(products));
}
