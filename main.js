fetch("https://api.currencyfreaks.com/latest?apikey=caf7b7da2bf44cd8ab44853b0363eb04")
    .then((result) => {
    // console.log(result)
        let myData = result.json();
        // console.log(myData)
        return myData;
    }).then((currency) => {

        let amount = document.querySelector(".amount");
        let lydPrice = document.querySelector(".lyd span");
        let tryPrice = document.querySelector(".try span");

        lydPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["LYD"]);
        tryPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["TRY"]);

        console.log(currency.rates["LYD"]);
        console.log(currency.rates["TRY"]);
    } )