const gridProducts = document.querySelector('.grid-products');

$(document).ready(() => {
    getProducts();
});

$(".see-more-button").click(() => {
    getProducts();
});

var pageCount = 1;
function getProducts() {
    $.ajax({
        url: 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page='+pageCount,
        type: 'GET',
        dataType: 'JSON',
        success: (res) => {
            let lista = res.products;
            for (item of lista) {
                newItem = createNewItem(item);
                gridProducts.appendChild(newItem);
            }
        }
    });
    pageCount++
}

function createNewItem(item) { 
    // CREATE ELEMENTS
    productItem = document.createElement('div');
    productImg = document.createElement('div');
    img = document.createElement('img');
    productDetails = document.createElement('div');
    productName = document.createElement('p');
    productDescription = document.createElement('p');
    priceFrom = document.createElement('p');
    priceTo = document.createElement('p');
    priceDetails = document.createElement('p');
    buyButton = document.createElement('button');

    // ADD VALUE TO ELEMENT
    img.src = item.image;
    productName.innerHTML = item.name;
    productDescription.innerHTML = item.description;
    priceFrom.innerHTML = formattedPrice(item.oldPrice);
    priceTo.innerHTML = formattedPrice(item.price);
    priceDetails.innerHTML = `ou ${item.installments.count}x de ${formattedPrice(item.installments.value)}`;
    buyButton.innerHTML = 'Comprar';

    // ADD CLASSES
    productItem.classList.add('product-item');
    productImg.classList.add('product-img');
    productDetails.classList.add('product-details');
    productName.classList.add('product-name');
    productDescription.classList.add('product-description');
    priceFrom.classList.add('old-price')
    priceTo.classList.add('price');
    priceDetails.classList.add('price-details');
    buyButton.classList.add('buy-button');

    //APPEND
    productImg.appendChild(img);
    productDetails.appendChild(productName);
    productDetails.appendChild(productDescription);
    productDetails.appendChild(priceFrom);
    productDetails.appendChild(priceTo);
    productDetails.appendChild(priceDetails);
    productDetails.appendChild(buyButton);
    productItem.appendChild(productImg);
    productItem.appendChild(productDetails);

    return productItem
}

function formattedPrice(price) {
    return price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}