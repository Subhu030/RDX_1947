const payBtn = document.getElementById('pay-btn');
const name = document.getElementById('merchant-name');
const amount = document.getElementById('merchant-amount');

payBtn.addEventListener('click', () => {
    url = 'phonepe-spoof/redirects/paymentsuccess.html?name=' + name.value + '&amount=' + amount.value;
    document.location.href = url;
});