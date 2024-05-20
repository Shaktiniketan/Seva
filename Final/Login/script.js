const firebaseConfig = {
    apiKey: "AIzaSyCWQzr00oj86dhQZSZPenUgUGK771QJa0E",
    authDomain: "sevaauth.firebaseapp.com",
    databaseURL: "https://sevaauth-default-rtdb.firebaseio.com",
    projectId: "sevaauth",
    storageBucket: "sevaauth.appspot.com",
    messagingSenderId: "992136921606",
    appId: "1:992136921606:web:2dba01b1d31a8e0fc57987"
  };

const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

const roleIcon = document.getElementById('roleIcon');
const roleDropdown = document.getElementById('roleDropdown');
const roleInput = document.getElementById('roleInput');


signUpBtn.addEventListener("click", () => {
    container.classList.toggle("change");
});



roleIcon.addEventListener('click', function() {
  roleDropdown.style.display = roleDropdown.style.display === 'block' ? 'none' : 'block';
});

roleDropdown.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    const selectedRole = event.target.dataset.value;
    roleInput.value = event.target.textContent;
    roleDropdown.style.display = 'none';
  }
});