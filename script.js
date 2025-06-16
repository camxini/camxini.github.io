window.onload = function () {
  setLanguage('en');
};

const lastUpdatedDate = {
  zh: '2025年6月16日',
  en: '16 Jun 2025'
};

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
    document.getElementById('title').textContent = '我的主页';
    document.getElementById('user_text').textContent = '杨佳昕';
    document.getElementById('btn-about').textContent = '关于';
    document.getElementById('btn-projects').textContent = '项目';
    document.getElementById('btn-skills').textContent = '技能';
    document.getElementById('btn-download').textContent = '下载';
    document.getElementById('btn-contact').textContent = '联系';

    document.getElementById('about').querySelector('h2').textContent = '关于我';
    document.getElementById('about').querySelector('p').textContent = '这里是关于我个人的信息。';

    document.getElementById('projects').querySelector('h2').textContent = '项目';
    document.getElementById('projects').querySelector('p').textContent = '这里是你做过的一些项目介绍。';

    document.getElementById('skills').querySelector('h2').textContent = '技能';
    document.getElementById('skills').querySelector('p').textContent = '这里是我的技能介绍。';

    document.getElementById('download').querySelector('h2').textContent = '下载';
    document.getElementById('download').querySelector('p').textContent = '这里是我可以提供的下载链接。';

    document.getElementById('contact').querySelector('h2').textContent = '联系';
    document.getElementById('contact').querySelector('p').textContent = '这里是进一步的联系方式。';

    document.getElementById('download-cv').querySelector('a').textContent = '下载简历';
    document.getElementById('last-updated').textContent = '最后更新于 ' + lastUpdatedDate.zh;
  } else {
    document.getElementById('title').textContent = 'My Homepage';
    document.getElementById('user_text').textContent = 'Jiaxin Yang';
    document.getElementById('btn-about').textContent = 'About';
    document.getElementById('btn-projects').textContent = 'Projects';
    document.getElementById('btn-skills').textContent = 'Skills';
    document.getElementById('btn-download').textContent = 'Download';
    document.getElementById('btn-contact').textContent = 'Contact';

    document.getElementById('about').querySelector('h2').textContent = 'About Me';
    document.getElementById('about').querySelector('p').textContent = 'This is some information about me.';

    document.getElementById('projects').querySelector('h2').textContent = 'Projects';
    document.getElementById('projects').querySelector('p').textContent = 'This is a list of some projects.';

    document.getElementById('skills').querySelector('h2').textContent = 'Skills';
    document.getElementById('skills').querySelector('p').textContent = 'This is my skills introduction.';

    document.getElementById('download').querySelector('h2').textContent = 'Download';
    document.getElementById('download').querySelector('p').textContent = 'This is further download info.';

    document.getElementById('contact').querySelector('h2').textContent = 'Contact';
    document.getElementById('contact').querySelector('p').textContent = 'This is further contact info.';

    document.getElementById('download-cv').querySelector('a').textContent = 'Download CV';
    document.getElementById('last-updated').textContent = 'Last updated at ' + lastUpdatedDate.en;
  }

  // 如果有更多需要切换的内容，可以继续补充
}
