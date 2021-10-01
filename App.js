var initialPrice = document.querySelector("#enter-price");

var quantity = document.querySelector("#quantity");

var currentPrice = document.querySelector("#current");

const btnCheck = document.querySelector("#check");

const message = document.querySelector("#finalMessage");

btnCheck.addEventListener("click",stockcalHandler);

function stockcalHandler(){
    var ip =Number(initialPrice.value);
    var qty = Number(quantity.value);
    var cp = Number(currentPrice.value);

    calProfitAndLoss(ip,qty,cp);
}
function calProfitAndLoss(initial,quantity,current){
    if(initial>current){
        var loss = (initial-current)* quantity;
        var lossPercentage = (loss/initial)*100;

    setMessage('The loss is ${loss} and the percentage is ${lossPercentage}%');
    }
}
function setMessage(msg){
    message.innerHTML = msg;
}