document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositInputValue = getInputFieldValue("deposit-field");
  const depositPreviousValue = getPreviousValue("deposit-total");
  if (isNaN(depositInputValue)) {
    alert("Please input valid value");
    return;
  } else {
    const currentDepositValue = depositPreviousValue + depositInputValue;
    setCurrentValue("deposit-total", currentDepositValue);

    const balancePreviousValue = getPreviousValue("balance-total");
    const currentBalanceValue = balancePreviousValue + depositInputValue;
    setCurrentValue("balance-total", currentBalanceValue);
  }
});
