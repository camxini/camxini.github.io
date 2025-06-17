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
    document.getElementById('download').querySelector('p').textContent = '可以在这里下载与我相关的文件。';
    document.getElementById('download-personal-use').textContent = '请注意，所有下载的文件仅供个人使用，未经允许不得用于商业目的。';
    document.getElementById('download-privacy').textContent = '涉及隐私信息的部分已被隐藏。如需完整版文件，请联系我。';
    document.getElementById('download-cv-pdf').querySelector('a').textContent = '(PDF) 简历';
    document.getElementById('download-cv-tex').querySelector('a').textContent = '(LaTeX) 简历';
    document.getElementById('download-ielts').querySelector('a').textContent = '(PDF) 雅思成绩单扫描件';
    document.getElementById('download-academic-report').querySelector('a').textContent = '(PDF) 成绩单扫描件';

    document.getElementById('contact').querySelector('h2').textContent = '联系';
    document.getElementById('contact').querySelector('p').textContent = '这里是进一步的联系方式。';
    document.getElementById('contact-h1').textContent = '邮件';
    document.getElementById('contact-p1').textContent = 'chamxine@163.com（建议）';
    document.getElementById('contact-p2').textContent = 'chamxine@gmail.com';
    document.getElementById('contact-p3').textContent = '邮件大约需要一天的回复时间，请耐心等待。';
    document.getElementById('contact-h2').textContent = '寄送地址';
    document.getElementById('contact-p4').textContent = '如果需要邮寄材料，请使用以下地址：';
    document.getElementById('contact-p5').textContent = '中国 浙江省 杭州市 西湖区 浙江大学玉泉校区 浙江大学控制科学与工程学院';
    document.getElementById('contact-h3').textContent = '联系电话';
    document.getElementById('contact-p6').textContent = '+86 173 0098 2876';
    document.getElementById('contact-p7').textContent = '欢迎您在工作日的 9:00-21:00 (GMT+8)与我联系。';
    document.getElementById('contact-p8').textContent = '如果您不是中国大陆的电话号码，电话可能会被拒接。请您再次拨打以示来意。';
    document.getElementById('contact-h4').textContent = '社交媒体';
    document.getElementById('contact-p9').textContent = '微信号：cam_fh';
    document.getElementById('contact-p10').textContent = '除微信以外的任何社交媒体联系方式（包括Github）不会被接受或暂未注册。';

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
    document.getElementById('download').querySelector('p').textContent = 'You can download files related to me here.';
    document.getElementById('download-personal-use').textContent = 'All downloaded files are for personal use only, and should not be used for commercial purposes without permission.';
    document.getElementById('download-privacy').textContent = 'Some parts containing private information have been hidden. If you need the full version of the files, please contact me.';
    document.getElementById('download-cv-pdf').querySelector('a').textContent = '(PDF) CV';
    document.getElementById('download-cv-tex').querySelector('a').textContent = '(LaTeX) CV';
    document.getElementById('download-ielts').querySelector('a').textContent = '(PDF) Scanned Copy of IELTS Score Report';
    document.getElementById('download-academic-report').querySelector('a').textContent = '(PDF) Scanned Copy of Academic Report';

    document.getElementById('contact').querySelector('h2').textContent = 'Contact';
    document.getElementById('contact').querySelector('p').textContent = 'This is further contact info.';
    document.getElementById('contact-h1').textContent = 'Email';
    document.getElementById('contact-p1').textContent = 'chamxine@163.com (recommended)';
    document.getElementById('contact-p2').textContent = 'chamxine@gmail.com';
    document.getElementById('contact-p3').textContent = 'Emails typically take about a day to reply.';
    document.getElementById('contact-h2').textContent = 'Mailing Address';
    document.getElementById('contact-p4').textContent = 'If you need to send materials, please use the following address:';
    document.getElementById('contact-p5').textContent = 'College of Control Science and Engineering, Yuquan Campus, Zhejiang University, Hangzhou, Zhejiang, China';
    document.getElementById('contact-h3').textContent = 'Phone Number';
    document.getElementById('contact-p6').textContent = '+86 173 0098 2876';
    document.getElementById('contact-p7').textContent = 'Feel free to contact me during weekdays from 9:00 AM to 9:00 PM (GMT+8).';
    document.getElementById('contact-p8').textContent = 'If your phone number is outside mainland China, the call may be rejected. If so, please try again.';
    document.getElementById('contact-h4').textContent = 'Social Media';
    document.getElementById('contact-p9').textContent = 'WeChat ID: cam_fh';
    document.getElementById('contact-p10').textContent = 'Any social media other than WeChat (including Github) will not be accepted or is not registered yet.';

    document.getElementById('download-cv').querySelector('a').textContent = 'Download CV';
    document.getElementById('last-updated').textContent = 'Last updated at ' + lastUpdatedDate.en;
  }

  // 如果有更多需要切换的内容，可以继续补充
}
