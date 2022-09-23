
document.getElementById('deposit-button').addEventListener('click',function(){
    
    // get new deposit number through input and do parseFloat
    
    const depositInput = document.getElementById('deposit-input');
    const getNewDeposit = depositInput.value;
    const newDepositAmount = parseFloat(getNewDeposit);


    // read previous deposited text and get the amount and parseFloat

    const previousDeposit = document.getElementById('deposit-amount');
    const previousDepositText = previousDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    
//    sum up two deposit value 

    const totalDeposit = previousDepositAmount + newDepositAmount;
    
    // submit deposit amount to DEPOSIT field 
    
    previousDeposit.innerText = totalDeposit;

    // clear the input field 
    depositInput.value = '';

// update Balance field

const balanceField = document.getElementById('total-balance');
const balanceText = balanceField.innerText;
const balanceAmount = parseFloat(balanceText);

const totalBalance = newDepositAmount + balanceAmount;

// set balance to balance field 

balanceField.innerText = totalBalance;
    
})

document.getElementById('withdraw-button').addEventListener('click',function(){
    
    // take withdraw input 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValue = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawInputValue);

    // get the withdrawal field and previously withdrawn amount
    const withdrawField = document.getElementById('withdraw-amount');
    const withdrawText = withdrawField.innerText;
    const previouslyWithdrawn = parseFloat(withdrawText);

    // sum up two withdraw amount 

    const totalWithdrawAmount = previouslyWithdrawn + newWithdrawAmount;

    // set total withdraw as withdraw field text 

    withdrawField.innerText = totalWithdrawAmount;

    // clear withdraw input 
    withdrawInput.value = '';

    // deduct withdrawal from total balance 

    const balanceField = document.getElementById('total-balance');
    const balanceText = balanceField.innerText;
    const balanceAmount = parseFloat(balanceText);

    const deductedWithdrawal = balanceAmount - newWithdrawAmount;

    // show adjusted balance 
    balanceField.innerText = deductedWithdrawal;
})