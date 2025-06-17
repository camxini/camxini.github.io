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

  // 公共内容
  document.getElementById('title').textContent = lang === 'zh' ? '我的主页' : 'My Homepage';
  document.getElementById('user_text').textContent = lang === 'zh' ? '杨佳昕' : 'Jiaxin Yang';
  document.getElementById('btn-about').textContent = lang === 'zh' ? '关于' : 'About';
  document.getElementById('btn-projects').textContent = lang === 'zh' ? '项目' : 'Projects';
  document.getElementById('btn-skills').textContent = lang === 'zh' ? '技能' : 'Skills';
  document.getElementById('btn-download').textContent = lang === 'zh' ? '下载' : 'Download';
  document.getElementById('btn-contact').textContent = lang === 'zh' ? '联系' : 'Contact';

  // About
  document.querySelector('#about h2').textContent = lang === 'zh' ? '关于我' : 'About Me';
  document.querySelector('#about p').textContent = lang === 'zh' ? '这里是关于我个人的信息。' : 'This is information about me.';

  // Projects
  document.querySelector('#projects h2').textContent = lang === 'zh' ? '项目' : 'Projects';
  document.querySelector('#projects p').textContent = lang === 'zh' ? '这里是你做过的一些项目介绍。' : 'Here are some projects I have done.';

  // Skills
  document.querySelector('#skills h2').textContent = lang === 'zh' ? '技能' : 'Skills';
  document.querySelector('#skills p').textContent = lang === 'zh' ? '这里是我的技能介绍。' : 'This is a description of my skills.';

  // Download
  document.querySelector('#download h2').textContent = lang === 'zh' ? '下载' : 'Download';
  document.querySelector('#download > p').textContent = lang === 'zh'
    ? '可以在这里下载与我相关的文件。'
    : 'You can download files related to me here.';
  document.getElementById('download-personal-use').textContent = lang === 'zh'
    ? '请注意，所有下载的文件仅供个人使用，未经允许不得用于商业目的。'
    : 'All downloaded files are for personal use only, and should not be used for commercial purposes without permission.';
  document.getElementById('download-privacy').textContent = lang === 'zh'
    ? '涉及隐私信息的部分已被隐藏。如需完整版文件，请联系我。'
    : 'Some parts containing private information have been hidden. If you need the full version of the files, please contact me.';
  document.querySelector('#download-cv-pdf a').textContent = lang === 'zh' ? '(PDF) 简历' : '(PDF) CV';
  document.querySelector('#download-cv-tex a').textContent = lang === 'zh' ? '(LaTeX) 简历' : '(LaTeX) CV';
  document.querySelector('#download-ielts a').textContent = lang === 'zh' ? '(PDF) 雅思成绩单扫描件' : '(PDF) Scanned Copy of IELTS Score Report';
  document.querySelector('#download-academic-report a').textContent = lang === 'zh' ? '(PDF) 成绩单扫描件' : '(PDF) Scanned Copy of Academic Report';

  // Contact
  document.querySelector('#contact h2').textContent = lang === 'zh' ? '联系' : 'Contact';
  document.querySelector('#contact > p').textContent = lang === 'zh' ? '这里是进一步的联系方式。' : 'This is further contact info.';
  document.getElementById('contact-h1').textContent = lang === 'zh' ? '邮件' : 'Email';
  document.getElementById('contact-p1').textContent = lang === 'zh' ? 'chamxine@163.com（建议）' : 'chamxine@163.com (recommended)';
  document.getElementById('contact-p2').textContent = 'chamxine@gmail.com';
  document.getElementById('contact-p3').textContent = lang === 'zh'
    ? '邮件大约需要一天的回复时间，请耐心等待。'
    : 'Emails typically take about a day to reply.';
  document.getElementById('contact-h2').textContent = lang === 'zh' ? '寄送地址' : 'Mailing Address';
  document.getElementById('contact-p4').textContent = lang === 'zh'
    ? '如果需要邮寄材料，请使用以下地址：'
    : 'If you need to send materials, please use the following address:';
  document.getElementById('contact-p5').textContent = lang === 'zh'
    ? '中国 浙江省 杭州市 西湖区 浙江大学玉泉校区 浙江大学控制科学与工程学院'
    : 'College of Control Science and Engineering, Yuquan Campus, Zhejiang University, Hangzhou, Zhejiang, China';
  document.getElementById('contact-h3').textContent = lang === 'zh' ? '联系电话' : 'Phone Number';
  document.getElementById('contact-p6').textContent = '+86 173 0098 2876';
  document.getElementById('contact-p7').textContent = lang === 'zh'
    ? '欢迎您在工作日的 9:00-21:00 (GMT+8)与我联系。'
    : 'Feel free to contact me during weekdays from 9:00 AM to 9:00 PM (GMT+8).';
  document.getElementById('contact-p8').textContent = lang === 'zh'
    ? '如果您不是中国大陆的电话号码，电话可能会被拒接。请您再次拨打以示来意。'
    : 'If you are not calling from a mainland China phone number, the call may be rejected. Please dial again to indicate your intention.';
  document.getElementById('contact-h4').textContent = lang === 'zh' ? '社交媒体' : 'Social Media';
  document.getElementById('contact-p9').textContent = lang === 'zh' ? '微信号：cam_fh' : 'WeChat ID: cam_fh';
  document.getElementById('contact-p10').textContent = lang === 'zh'
    ? '除微信以外的任何社交媒体联系方式（包括Github）不会被接受或暂未注册。'
    : 'Any social media contact information other than WeChat (including Github) will not be accepted or is not yet registered.';

  // 下载栏侧边更新提示
  document.querySelector('#download-cv a').textContent = lang === 'zh' ? '下载简历' : 'Download CV';
  document.getElementById('last-updated').textContent = lang === 'zh'
    ? '最后更新于 ' + lastUpdatedDate.zh
    : 'Last updated on ' + lastUpdatedDate.en;
}