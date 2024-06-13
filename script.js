const scriptURL = 'https://script.google.com/macros/s/AKfycby9eK7O6HEzEbkgfNBRIKknkjj689bgPjzySy7tHSI8MMAmAtGH9cHSVdagB0aqonrknA/exec'
  const form = document.forms['kind-form']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
  document.addEventListener('DOMContentLoaded', function() {
    gapi.load('client', initClient);
});

function initClient() {
    gapi.client.init({
        'apiKey': 'AIzaSyAGyVoCS9LW-Pwn0QjzDxSiPtehx9p721s',
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function () {
        console.log('Google API client initialized.');
    }).catch(function(error) {
        console.error('Error initializing Google API client:', error);
    });
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('info-section').style.display = 'block';
        loadSpecies();
    } else {
        alert('Неверный логин или пароль');
    }
});






