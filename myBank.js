
// FOR MyBank html file -------------------------------------

document.getElementById('login-submit').addEventListener('click',function(){

    //get user email
    const emailField = document.getElementById('user-email')
    const userEmail = emailField.value;
    
    // get user password

    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;
    
// condtion

if(userEmail == 'shyam@gmail.com' && password == 'shyam'){
    window.location.href = 'vault.html';
}
else{
    alert('Khankir put!!!!');
}
})


