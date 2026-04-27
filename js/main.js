// وظائف عامة لموقع بوديجارد

// التحقق من حالة تسجيل الدخول
function checkAuth() {
    const user = localStorage.getItem('currentUser');
    const currentPage = window.location.pathname;
    
    // منع الوصول للوحات التحكم بدون تسجيل دخول
    if ((currentPage.includes('dashboard') || currentPage.includes('chat') || currentPage.includes('payment')) && !user) {
        window.location.href = 'login.html';
    }
}

// تسجيل الخروج
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// محاكاة حفظ بيانات المستخدم عند التسجيل
function saveUser(userData) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
}

// محاكاة تسجيل الدخول
function loginUser(email, password, type) {
    // في هذا المشروع البسيط، سنقوم فقط بحفظ نوع المستخدم الحالي لتوجيهه
    const user = { email, type };
    localStorage.setItem('currentUser', JSON.stringify(user));
    return true;
}

// إضافة تأثيرات التمرير للهيدر
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

// تهيئة الموقع عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    // يمكن إضافة وظائف تهيئة هنا
    console.log('Bodyguard platform initialized');
});