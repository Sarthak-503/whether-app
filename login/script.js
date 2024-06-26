const validUsers = {
    'sarthak': '123',
    // user2: 'password2'

};

document.getElementById('loginBtn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username==''||password==''){
        alert('Please enter both usersame and password');
    }
    if (validUsers[username] && validUsers[username] === password) {
        window.location.href = '../whether/whether.html'; // Redirect to weather page on successful login
    } else {
        alert('Incorrect Username Or Password');
    }
});
