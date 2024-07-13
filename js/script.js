const km = prompt('Quanti chilometri vuoi percorrere?')
console.log('km', km, typeof km)

const age = prompt('Quanti anni hai?')
console.log('age', age, typeof age)

if (age < 18) {
    console.log('Minorenne');
    const price = km * 0.21
    console.log('price', price, typeof price)

    const discount = (price / 100) * 20
    console.log('discount', discount, typeof discount)

    const finalPrice = price - discount

    alert('|PREZZO RIDOTTO| il prezzo del biglietto è €' + finalPrice.toFixed(2))
}
else if (age > 65) {
    console.log('Over 65');
    const price = km * 0.21
    console.log('price', price, typeof price)

    const discount = (price / 100) * 40
    console.log('discount', discount, typeof discount)

    const finalPrice = price - discount

    alert('|PREZZO OVER 65| il prezzo del biglietto è €' + finalPrice.toFixed(2))
}
else {
    console.log('Paga prezzo Pieno');
    const price = km * 0.21
    console.log('price', price, typeof price)

    alert('il prezzo del biglietto è €' + price.toFixed(2))
}   