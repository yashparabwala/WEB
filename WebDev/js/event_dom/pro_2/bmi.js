const form = document.querySelector('#bmi-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);

    const result = document.querySelector('#result');

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        result.innerHTML = "Please enter valid height and weight values.";
        return;
    }
    console.log("3");
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    result.innerHTML = `Your BMI is ${bmi}`;
});
