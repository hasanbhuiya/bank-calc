document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositElement = getInputFild("deposit-fild");
    const previousDepositElement = getTextFild('deposit-total');
    const newDepositTotal = newDepositElement + previousDepositElement;
    setElement('deposit-total', newDepositTotal);
    const previousBalanceTotalElement = getTextFild('balance-total');
    const balanceTotal = previousBalanceTotalElement + newDepositTotal;
    setElement('balance-total',balanceTotal)
})