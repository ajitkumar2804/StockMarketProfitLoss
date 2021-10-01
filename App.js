var initialPrice = document.querySelector("#enter-price");
var quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current");
const btnCheck = document.querySelector("#check");
const message = document.querySelector("#finalMessage");

btnCheck.addEventListener("click", stockcalHandler);

function stockcalHandler() {
    var ip = initialPrice.value * quantity.value ;
    var cp = currentPrice.value * quantity.value;


    calProfitAndLoss(ip, cp);
}
function calProfitAndLoss(initial, current) {
    if (initial > current) {
        var loss = (initial - current);
        var lossPercentage = ((loss / initial) * 100).toFixed(2);

        setMessage(`The loss is ${loss} and the Percentage is ${lossPercentage}%`);

    } else if (current > initial) {
        var profit = (current - initial);
        var profitPercentage = ((profit / initial) * 100).toFixed(2);

        setMessage(`The profit is ${profit} and the percentage is ${profitPercentage}%`);
    } else {
        setMessage('NO LOSS NO PROFIT')
    }
}
function setMessage(msg) {
    message.innerHTML = msg;
}