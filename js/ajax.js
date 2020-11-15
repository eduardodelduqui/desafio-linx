var page = 'frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1';
var readyToRequest = true
function getProducts() {
    if(readyToRequest){
        return  $.ajax({
            url: 'https://'+page,
            type: 'GET',
            dataType: 'JSON',
            beforeSend: () => {readyToRequest = false},
            success: (res) => {
                page = res.nextPage;
            },
            complete: () => {readyToRequest = true}
        });
        
    }
}