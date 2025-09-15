document.getElementById('calcBtn').addEventListener('click', calculateTip);

function calculateTip(){
    let bill = parseFloat(document.getElementById('bill').value);
    let tipPercent = parseFloat(document.getElementById('tip').value);
    let people = parseInt(document.getElementById('people').value);


    if(isNaN(bill) || bill <= 0) {
        document.getElementById('result').innerHTML = '⚠ Please enter a valid bill amount.';
        return;
    }

    if(isNaN(tipPercent) || tipPercent < 0){
        document.getElementById('result').innerHTML ='⚠ Please enter a valid tip percentage.';
        return;
    }

    if (isNaN(people) || people < 1){
        people = 1;
    }

    let tipAmount = (bill * tipPercent) / 100;
    let total =  bill + tipAmount;
    let perPerson  = total / people;

    document.getElementById('result').innerHTML = `
    <p> 💵 Tip: ₹${tipAmount.toFixed(2)} </p>
    <p> 🧾 Total: ₹${total.toFixed(2)} </p>
    <p> 👥 Per Person: ₹${perPerson.toFixed(2)}
    `;
}


