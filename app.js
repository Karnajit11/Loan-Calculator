document.getElementById('loan').addEventListener('submit', function(e){
    //Hide resultas
    document.getElementById('results').style.display = 'none';

    //show loader
    document.getElementById('loader').style.display = 'block';

    setTimeout(calculateResult,2000);

    e.preventDefault();
});
//calculate result
function calculateResult(){
    //UI variables
    const amount= document.getElementById('amount');
    const interest= document.getElementById('interest');
    const year= document.getElementById('year');

    const monthlyPayment= document.getElementById('monthly-payment');
    const totalPayment= document.getElementById('total-payment');
    const totalInterest= document.getElementById('total-interest');

    const principle = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedPayments = parseFloat(year.value)*12;

    //calculate monthly payments

    const x= Math.pow(1+calculatedInterest, calculatedPayments);
    const monthly= (principle*x*calculatedInterest)/ (x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(3);
        totalPayment.value = (monthly*calculatedPayments).toFixed(3);
        totalInterest.value = ((monthly * calculatedPayments)- principle).toFixed(3);

        //show the results

        document.getElementById('results').style.display = 'block';

        // Hide the loader

        document.getElementById('loader').style.display = 'none';

    }
    else{
        showError("Please Check Your Inputs");

    }
}

//ShowError

function showError(error){
     //Hide the results

     document.getElementById('results').style.display = 'none';

     // Hide the loader

     document.getElementById('loader').style.display = 'none';

    const errorDiv = document.createElement('div');
    //Get Elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //Add Class
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    //Insert error avobe heading

    card.insertBefore(errorDiv,heading);

    // clear error message

    setTimeout(clearError,3000);

}

//clear error
function clearError(){
    document.querySelector('.alert').remove();
}