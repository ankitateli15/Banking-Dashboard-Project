let balance = 1000;
function updateBalanceDisplay() {
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = 'Current Balance :' +`$${  balance.toFixed(2)}`;
}
function deposit() {
    const amountElement = document.getElementById('amount');
    const depositAmount = parseFloat(amountElement.value);
    console.log(depositAmount)
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("Please enter a valid amount to deposit.");
        return;

    }
    balance += depositAmount;
    updateBalanceDisplay();
    amountElement.value = ''; 
}

function withdraw() {
    const amountElement = document.getElementById('mymoney');
    const withdrawAmount = parseFloat(amountElement.value);
    console.log(withdrawAmount)
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Please enter a valid amount to withdraw.");
        return;
    }

    if (withdrawAmount > balance) {
        alert("Insufficient funds.");
        return;
    }
    balance -= withdrawAmount;
    updateBalanceDisplay();
    amountElement.value = '';
}
updateBalanceDisplay();