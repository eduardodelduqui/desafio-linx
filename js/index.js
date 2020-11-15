const gridProducts = document.querySelector('.grid-products');
$(document).ready(() => {
    createProductList();
});

$(".see-more-button").click(() => {
    createProductList();
});

/**
 *  Creates and appends a new product list
 */
function createProductList() {
    promise  = getProducts();
    promise.then((res) => {
        products = res.products
        for(product of products) {
            newItem = createNewItem(product);
            gridProducts.appendChild(newItem)
        }
    })
}



