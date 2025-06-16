function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// 语言切换按钮设置
let hideMenuTimer;

const langToggle = document.getElementById("langToggle");
const langMenu = document.getElementById("langMenu");

langToggle.addEventListener("mouseenter", () => {
  clearTimeout(hideMenuTimer);
  langMenu.style.display = "block";
});

langToggle.addEventListener("mouseleave", () => {
  hideMenuTimer = setTimeout(() => {
    langMenu.style.display = "none";
  }, 100); // 等 0.1 秒
});

// 中英文内容设置
let currentLang = 'en';
function setLanguage(lang) {
  currentLang = lang;

  if (lang === 'zh') {
    document.getElementById('name').textContent = '杨佳昕';
    document.querySelector('.menu button:nth-child(1)').textContent = '关于';
    document.querySelector('.menu button:nth-child(2)').textContent = '项目';
    document.querySelector('.menu button:nth-child(3)').textContent = '联系';

    document.getElementById('about').querySelector('h2').textContent = '关于我';
    document.getElementById('about').querySelector('p').textContent = '这里是关于我个人的信息。';

    document.getElementById('projects').querySelector('h2').textContent = '项目';
    document.getElementById('projects').querySelector('p').textContent = '这里是你做过的一些项目介绍。';

    document.getElementById('contact').querySelector('h2').textContent = '联系';
    document.getElementById('contact').querySelector('p').textContent = '这里是进一步的联系方式。';
  } else {
    document.getElementById('name').textContent = 'Yang Jiaxin';
    document.querySelector('.menu button:nth-child(1)').textContent = 'About';
    document.querySelector('.menu button:nth-child(2)').textContent = 'Projects';
    document.querySelector('.menu button:nth-child(3)').textContent = 'Contact';

    document.getElementById('about').querySelector('h2').textContent = 'About Me';
    document.getElementById('about').querySelector('p').textContent = 'This is some information about me.';

    document.getElementById('projects').querySelector('h2').textContent = 'Projects';
    document.getElementById('projects').querySelector('p').textContent = 'This is a list of some projects.';

    document.getElementById('contact').querySelector('h2').textContent = 'Contact';
    document.getElementById('contact').querySelector('p').textContent = 'This is further contact info.';
  }

  // 如果有更多需要切换的内容，可以继续补充
}
