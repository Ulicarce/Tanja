var Phone = 30;
var price = 119.95;
var rate = 5;
var currencyRate =( price * rate / 100 );
var currency = currencyRate + price;
var currencyPhone = currency * Phone;
console.log(`The value of the phones is: ${currencyPhone} `);