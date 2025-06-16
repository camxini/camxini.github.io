function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

let currentLang = 'en';
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';

  if (currentLang === 'zh') {
    document.getElementById('name').textContent = '你的名字';
    document.getElementById('contact').textContent = '邮箱：you@example.com';
  } else {
    document.getElementById('name').textContent = 'Your Name';
    document.getElementById('contact').textContent = 'Email: you@example.com';
  }

  // 如果有更多需要切换的内容，可以继续补充
}
