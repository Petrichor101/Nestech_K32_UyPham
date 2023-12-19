let login = prompt('Enter string'); 
let message =(login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';
alert(message)