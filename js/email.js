const emailProductList = document.querySelector('.email-product-list');
$(document).ready(() => {
    createEmailProductList();
})


function createEmailProductList() {
    promise  = getProducts();
    promise.then((res) => {
        products = res.products
        for(let i = 0; i < 2; i++){
            newItem = createNewItem(products[i]);
            emailProductList.appendChild(newItem)
        }
    })
}