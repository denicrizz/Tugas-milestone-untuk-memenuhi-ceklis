document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        document.getElementById('register-error-message').innerText = "Passwords do not match";
        document.getElementById('register-error-message').style.display = 'block';
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(user => user.email === email)) {
        document.getElementById('register-error-message').innerText = "Email is already registered";
        document.getElementById('register-error-message').style.display = 'block';
        return;
    }

    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert("Registration successful!");
    window.location.href = "login.html";
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        document.getElementById('login-error-message').innerText = "Invalid email or password";
        document.getElementById('login-error-message').style.display = 'block';
    }
});
