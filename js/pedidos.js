
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const loginSection = document.getElementById('loginSection');
  const perfilSection = document.getElementById('perfilSection');
  const btnLogout = document.getElementById('btnLogout');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    if (login && senha) {
      loginSection.style.display = 'none';
      perfilSection.style.display = 'block';
    } else {
      alert('Preencha login e senha!');
    }
  });

  btnLogout.addEventListener('click', () => {
    perfilSection.style.display = 'none';
    loginSection.style.display = 'block';
  });
});
