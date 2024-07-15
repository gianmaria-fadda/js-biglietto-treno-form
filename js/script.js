const calcForm = document.querySelector('form');
calcForm.addEventListener(
    'submit',
    function (event) {
        event.preventDefault();
        console.log('event', event, typeof event);

        const kmInput = document.getElementById('km');
        const km = kmInput.value;
        console.log('km', km, typeof km);
        
        const ageInput = document.getElementById('age');
        const age = ageInput.value;
        console.log('age', age, typeof age);
        
        if (age < 18) {
            console.log('Minorenne');
            const price = km * 0.21
            console.log('price', price, typeof price)
        
            const discount = (price / 100) * 20
            console.log('discount', discount, typeof discount)
        
            const finalPrice = price - discount
        }
        else if (age > 65) {
            console.log('Over 65');
            const price = km * 0.21
            console.log('price', price, typeof price)
        
            const discount = (price / 100) * 40
            console.log('discount', discount, typeof discount)
        
            const finalPrice = price - discount
        }
        else {
            console.log('Paga prezzo Pieno');
            const price = km * 0.21
            console.log('price', price, typeof price)
        
            alert('il prezzo del biglietto è €' + price.toFixed(2))
            const resultSpan = document.getElementById('result');
            resultSpan.innerHTML = price.toFixed(2)
        }   
         
    }
)