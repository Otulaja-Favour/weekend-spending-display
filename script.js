//to get the input value that will be inputted in the user interface for the calculation of expense
document.getElementById('eachExpenses').addEventListener('input', function () {


    //calling the input value from the interface
    let list = document.getElementById('eachExpenses').value;

    // console.log(list)
    //adding up the value from the interface
    let addUp = eval(list);
    // console.log(addUp)


    //i  need to retun it to show my output in the userinterface
    //EXPENSES
    function equal(addUp) {
        return addUp
    }
    document.getElementById('spent').innerHTML = 'Total Expenses =' + ' ' + equal(addUp) + 'naira';
    // console.log('Total Expenses =' + ' ' + (equal(addUp)) + 'naira')


    // the remainder 
    const budget = document.getElementById('budget').value;
    let amount = budget
    console.log(amount)
    let remain = amount - equal(addUp);
    console.log(remain)
    document.getElementById('remainder').innerHTML = 'The amount remaining from your budget is' + ' ' + remain;


function clearall(){
    document.getElementById('eachExpenses').value = '';
    document.getElementById('eachExpenses').innerHTML = '';

}

})
