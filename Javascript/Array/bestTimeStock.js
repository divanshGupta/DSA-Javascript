function timeToBuy (stockPrices) {
    let maxProfit = 0;
    
    let minimumPrice = stockPrices[0]
    for(let i= 0; i< stockPrices.length; i++) {
        if (stockPrices[i] < minimumPrice) {
            minimumPrice = stockPrices[i]
        }
        let todaysProfit = stockPrices[i] - minimumPrice;
        if (todaysProfit > maxProfit) {
            maxProfit = todaysProfit;
        }
    }
    return maxProfit
}
console.log(timeToBuy([4, 1, 2, 1]))