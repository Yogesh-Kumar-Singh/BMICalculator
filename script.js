document.getElementById("bmiform").addEventListener('submit',function(e){
    e.preventDefault();
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const heightfeet = parseInt(document.getElementById("heightfeet").value);
    const heightinch = parseInt(document.getElementById("heightinch").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (gender && age && heightfeet && heightinch && weight) {
        const heightinmeter = ((heightfeet*12)+heightinch) * 0.0254;
        const bmi = weight / (heightinmeter*heightinmeter);
        const resultElement = document.getElementById('result');
        let category = '';
        if (bmi<18.5) {
            category='Under Weight'
        }
        else if (bmi>=18.5 && bmi<24.9) {
            category='Normal Weight'
        }
        else if (bmi>24.9 && bmi<29.9){
            category='Over Weight'
        }
        else {
            category='Obese'
        }
        let resultmessage = 'Your BMI:'+bmi.toFixed(2)+'</br>';
        resultmessage+='Category: '+ category;
        resultElement.innerHTML = `${resultmessage}`;
    }
});
