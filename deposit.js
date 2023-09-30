document.getElementById('btn-withdrow').addEventListener('click', function () {
    const newWithdrowElement = getInputFild('withdraw-fild');
    const previousWithdrowElement = getTextFild('withdraw-total');
    const newWithdrowTotal = newWithdrowElement + previousWithdrowElement;
    setElement("withdraw-total", newWithdrowTotal);
    const previousBalanceTotal = getTextFild('balance-total');
     const newBalanceTotal = previousBalanceTotal - newWithdrowTotal;
     setElement('balance-total',newBalanceTotal)
    console.log(previousBalanceTotal)
})