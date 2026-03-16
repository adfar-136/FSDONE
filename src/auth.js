export function isLoggedIn() {
  return localStorage.getItem('user') === 'loggedIn';
}

export function login() {
  localStorage.setItem('user', 'loggedIn');
}

export function logout() {
  localStorage.removeItem('user');
}