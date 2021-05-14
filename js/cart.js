$(function() {
    $('#cep').mask('99999-999');

    let products = JSON.parse(localStorage.getItem("products") || "[]");
    let cards = [];
    let total = 0.00;
    if(products.length !== 0) {
        products.forEach((product) => {
            let card = $(document.createElement('div')).attr('id', product.id).load('../components/product-card.html', function () {
                $(this).find('#product-name').text(product.name);
                $(this).find('#product-image').attr('src', product.image)
                $(this).find('#product-size').text(product.size);
                $(this).find('#product-price').text('R$ ' + product.price);
                $(this).find('#product-ammount').text('x' + product.ammount);

                $(this).find('#product-delete').on('click', function() {
                    $(document).find('#' + product.id).remove();
                    let filtered = products.filter(function(value) {
                        return value.id !== product.id;
                    });
                    console.log(filtered)
                    localStorage.setItem('products', JSON.stringify(filtered));
                    document.location.reload();
                });
            });
            total += product.price;
            cards.push(card);
        });
        $('#cart').html(cards);
    } else {
        $('#cart').load('../components/empty-cart.html');
        $('#cart').css({'width': '100%', 'height': '50vh'});
        $(document).find('.buy-cart').remove();
    }
    $('#subtotal').text('R$' + total);
    $('#total').text('R$' + total);
});
