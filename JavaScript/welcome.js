var Username = localStorage.getItem('USerName');
console.log(Username)

userName.innerHTML = Username



// welcome.js


var logoutButton = document.getElementById('logoutBtn');

logoutButton.addEventListener('click', function() {
  window.location.href = 'index.html';
});
