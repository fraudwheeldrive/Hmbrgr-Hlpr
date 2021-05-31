<script src="/javascript/login.js"></script>

function loginFormHandler(event) {
    event.preventDefault();

    // need to add classes to login
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

if (email && passowrd) {
    const response = await fetch ('/api/user/login', {
        method: 'post',
        body:JSON.stringify({
            username,
            email,
            password
        }),
        headers: { 'Content-Type' : 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);