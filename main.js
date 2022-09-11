document.getElementById('loan-form').addEventListener("submit",function(e){
   
    document.getElementById('results').style.display = "none";
    document.getElementById('loading').style.display="block";
    setTimeout(calculate
    ,2000);
   
        e.preventDefault();
});

function calculate(e){
    const amount =document.getElementById('loan_amount')
    const interest = document.getElementById('interest')
    const year = document.getElementById('year')
    const monthlyPayment = document.getElementById('Monthly_Payment')
    const totalAmount = document.getElementById('Total_Payment')
    const totalInterest = document.getElementById('Total_Interest');

    const principle = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedPayments = parseFloat(year.value)*12
    const x = Math.pow(1 + calculatedInterest,calculatedPayments);
    const monthly = (principle * x * calculatedInterest) / (x-1);

    if(isFinite(monthly)){
        monthlyPayment.value=monthly.toFixed(2);
        totalAmount.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = (monthly * calculatedPayments - principle).toFixed(2);
        document.getElementById('results').style.display = "block";
        document.getElementById('loading').style.display="none";
}else{
    showAlert("Please Enter the Amounts");
}
    e.preventDefault();
}

function showAlert(error){
    const errorDiv=document.createElement("div");

    errorDiv.className="alert alert-danger";
    errorDiv.appendChild(document.createTextNode(error));
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");

    card.insertBefore(errorDiv, heading);
    setTimeout(function() {
        document.querySelector(".alert").remove();   }, 3000);
}