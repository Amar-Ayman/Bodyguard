function checkAuth() {
    const user = localStorage.getItem('currentUser');
    const currentPage = window.location.pathname;
    
    if ((currentPage.includes('dashboard') || currentPage.includes('chat') || currentPage.includes('payment')) && !user) {
        window.location.href = 'login.html';
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

function saveUser(userData) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
}

function loginUser(email, password, type) {
    const user = { email, type };
    localStorage.setItem('currentUser', JSON.stringify(user));
    return true;
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '0.5rem 5%';
        header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
    } else {
        header.style.padding = '1rem 5%';
        header.style.backgroundColor = 'var(--primary-color)';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Bodyguard platform initialized');
});