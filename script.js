const button = document.querySelector('.investment__btn');

const calGrowth = (investedValue, currentValue) => Math.round(((currentValue - investedValue) / investedValue) * 100);

button.addEventListener('click', () => {
    // 1. select and read data fromt he UI
    const btcPriceBougth = document.querySelector('.price__input--bought').value;
    const btcPriceNow = document.querySelector('.price__input--now').value;
    const btcsBougth = document.querySelector('.investment__btc').value;

    // 2. calculate profits
    const investedValue = btcsBougth * btcPriceBougth; // initial invesment
    const currentValue = btcsBougth * btcPriceNow; // current value
    
    const profit = currentValue - investedValue; // profit or loss
    const growth = calGrowth(investedValue, currentValue);

    // 3. write the result to the UI
    const result = document.querySelector('.result');
    let message = '';

    if (!btcPriceBougth || !btcPriceNow || !btcsBougth) {
        message = `You have missed something. Please, try it again.`;
        result.style.color = '#FF8F00';
    } else if (Number(btcPriceBougth) <= 0 || Number(btcPriceNow) <= 0 || Number(btcsBougth) <= 0) {
        message = `You have typed something wrong. Please, try it again.`;
        result.style.color = '#FF8F00';
    } else {
        if (profit > 0) { // gain
            message = `Great! You made a profit of $${profit} (${growth}%).`;
            result.style.color = 'green';
        } else if (profit < 0) { // loss
            message = `Oh, no! You are at a loss of $${profit} (${growth}%).`;
            result.style.color = 'red';
        } else { // neither gain not loss
            message = `You are break-even.`;
            result.style.color = '#ccc';
        }
    }

    result.textContent = message;
});