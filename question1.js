//question-1
function formatCurrency(amount,currencyCode){
    return new Intl.NumberFormat('en-US',{
        style:'currency',
        currency: currencyCode
    }).format(amount)
}
console.log(formatCurrency(1234567.89,'USD'));
