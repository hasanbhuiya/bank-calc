function getInputFild(input){
    const inputFildElement = document.getElementById(input);
    const inputBalance = parseFloat(inputFildElement.value);
    inputFildElement.value = '';
    return inputBalance;
}

function getTextFild(elementId) {
    const previousFildElement = document.getElementById(elementId);
    const previousElement = parseFloat(previousFildElement.innerText);
    return previousElement;
} 

function setElement(previousBalanceFild, NewBalance) {
    const balance = document.getElementById(previousBalanceFild);
    balance.innerText = NewBalance;
}