const gridProducts = document.querySelector('.grid-products');
$(document).ready(() => {
    promise  = getProducts();
    promise.then((res) => {
        products = res.products
        for(product of products) {
            newItem = createNewItem(product);
            gridProducts.appendChild(newItem)
        }
    })
});

$(".see-more-button").click(() => {
    promise  = getProducts();
    promise.then((res) => {
        products = res.products
        for(product of products) {
            newItem = createNewItem(product);
            gridProducts.appendChild(newItem)
        }
    })
});