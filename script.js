function getInputValueById (id){
    return parseFloat(document.getElementById(id).value);
}
function getResultValueById(id){
    return document.getElementById(id);
}
let count = 0;

document.getElementById('calculate').addEventListener('click',function(){
    count++;
    
    const income = getInputValueById('income');
    const software = getInputValueById('software');
    const courses = getInputValueById('courses');
    const internet = getInputValueById('internet');

    if(income <= 0 || isNaN(income)){
        document.getElementById('income-error').classList.remove('hidden');
        return;
    }
    else if(software < 0){
        document.getElementById('software-error').classList.remove('hidden');
        return;
    }
    else if(courses < 0){
        document.getElementById('courses-error').classList.remove('hidden');
        return;
    }
    else if(internet < 0){
        document.getElementById('internet-error').classList.remove('hidden');
        return;
    }
    else{
        document.getElementById('income-error').classList.add('hidden')
        document.getElementById('software-error').classList.add('hidden')
        document.getElementById('courses-error').classList.add('hidden')
        document.getElementById('internet-error').classList.add('hidden')
        const totalExpenses = software + courses + internet;
        
        if(totalExpenses > income){
            getResultValueById('logic-error').classList.remove('hidden')
            return;
        }
        getResultValueById('logic-error').classList.add('hidden')

    const balance = income - totalExpenses;

    const totalExpensesValue = getResultValueById("total-expenses");
    totalExpensesValue.innerText =  totalExpenses.toFixed(2);
   
    
    const totalBalance = getResultValueById('balance');
    totalBalance.innerText = balance.toFixed(2);


    document.getElementById('calculate-savings').addEventListener('click',function(){
        const saving = getInputValueById('savings');
        if(saving < 0 || saving > 100 ){
            document.getElementById('savings-error').classList.remove('hidden');
            return;
        }
        else{
            document.getElementById('savings-error').classList.add('hidden');
        const savingAmount = (balance * saving ) / 100;
        const remainingBalance = balance - savingAmount;
        
        const savingAmountValue = getResultValueById('savings-amount');
        savingAmountValue.innerText = savingAmount.toFixed(2);

        const remainingBalanceValue = getResultValueById('remaining-balance');
        remainingBalanceValue.innerText = remainingBalance.toFixed(2);
        }
        document.getElementById('savings').value = '';
        
    })
    getResultValueById('results').classList.remove('hidden')

    const historyItem = document.createElement('div');
    historyItem.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500";


    historyItem.innerHTML = `
    <p class="text-xs text-gray-500"> Serial : ${count} </p>
    <p class="text-xs text-gray-500"> ${new Date().toLocaleDateString()} </p>
    <p class="text-xs text-gray-500"> Income : $${income} </p>
    <p class="text-xs text-gray-500"> Expenses : ${totalExpenses} </p>
    <p class="text-xs text-gray-500"> Balance : $${balance} </p>
    `
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

   
    }
   document.getElementById('income').value = '';
   document.getElementById('software').value = '';
   document.getElementById('courses').value = '';
   document.getElementById('internet').value = '';
   
    
})

document.getElementById('history-tab').addEventListener('click',function(){
    getResultValueById('expense-form').classList.add('hidden')
    getResultValueById('history-section').classList.remove('hidden')
    getResultValueById('results').classList.remove('hidden')
    getResultValueById('history-tab').classList.add('w-1/2', "py-2", "rounded-l-md", "focus:outline-none", "transition-colors", "duration-200", "text-white", "font-semibold", "bg-gradient-to-r", "from-blue-500", "to-purple-600")
    getResultValueById('assistant-tab').classList.remove('w-1/2', "py-2", "rounded-l-md", "focus:outline-none", "transition-colors", "duration-200", "text-white", "font-semibold", "bg-gradient-to-r", "from-blue-500", "to-purple-600")
})
document.getElementById('assistant-tab').addEventListener('click',function(){
    getResultValueById('assistant-tab').classList.add('w-1/2', "py-2", "rounded-l-md", "focus:outline-none", "transition-colors", "duration-200", "text-white", "font-semibold", "bg-gradient-to-r", "from-blue-500", "to-purple-600")

    getResultValueById('history-tab').classList.remove('w-1/2', "py-2", "rounded-l-md", "focus:outline-none", "transition-colors", "duration-200", "text-white", "font-semibold", "bg-gradient-to-r", "from-blue-500", "to-purple-600")

    getResultValueById('expense-form').classList.remove('hidden')
    getResultValueById('history-section').classList.add('hidden')
    getResultValueById('results').classList.add('hidden')
})