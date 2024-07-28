// function which call api to 
         function Currencyapi() {
          const convert = document.getElementById("Convert");
        const result = document.getElementById("currency-output");
        const from = document.getElementById("efrom");
        const to = document.getElementById("eto");
        const amount = document.getElementById("amount-field");
           let fromCurrency = from.value;
           console.log(fromCurrency);
           let toCurrency = to.value;
           let amt = amount.value;
           fetch('https://api.exchangerate-api.com/v4/latest/'+fromCurrency)
           .then(response => {
            console.log(response);
                 return response.json();
           })
           .then(data => {
              let rate = data.rates[toCurrency];
              let total = rate * amt;
              console.log(total);
              result.innerHTML = `${amt} ${fromCurrency} = ${total}
              ${toCurrency}`;
           });
        };