document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawInputValue = getInputFieldValue("withdraw-field");
  const withdrawPreviousValue = getPreviousValue("withdraw-total");
  if (isNaN(withdrawInputValue)) {
    alert("Please input valid value");
    return;
  } else {
    const balancePreviousValue = getPreviousValue("balance-total");
    if (balancePreviousValue >= withdrawInputValue) {
      const currentWithdrawValue = withdrawPreviousValue + withdrawInputValue;
      setCurrentValue("withdraw-total", currentWithdrawValue);

      const currentBalanceValue = balancePreviousValue - withdrawInputValue;
      setCurrentValue("balance-total", currentBalanceValue);
    } else {
      alert("Baap er Bank e ato taka nai!!!");
    }
  }
});
