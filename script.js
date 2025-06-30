window.onload = function () {
  setLanguage('en');
};

const lastUpdatedDate = {
  zh: '2025年6月20日',
  en: '20 Jun 2025'
};

function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// 语言切换按钮设置
let hideMenuTimer;
let menuVisible = false;

const langToggle = document.getElementById("langToggle");
const langMenu = document.getElementById("langMenu");

// 显示/隐藏菜单的函数
function toggleLanguageMenu(show = null) {
  if (show === null) {
    // 切换状态
    menuVisible = !menuVisible;
  } else {
    menuVisible = show;
  }
  
  langMenu.style.display = menuVisible ? "block" : "none";
}

langToggle.addEventListener("mouseenter", () => {
  clearTimeout(hideMenuTimer);
  toggleLanguageMenu(true);
});

langToggle.addEventListener("mouseleave", () => {
  hideMenuTimer = setTimeout(() => {
    toggleLanguageMenu(false);
  }, 300); // 稍微延长延迟时间，避免误关闭
});

// 添加点击事件处理
langToggle.addEventListener("click", (event) => {
  event.stopPropagation(); // 阻止事件冒泡
  toggleLanguageMenu(); // 切换菜单状态
});

// 添加全局点击事件，点击页面其他地方时关闭菜单
document.addEventListener("click", (event) => {
  if (!langToggle.contains(event.target) && menuVisible) {
    toggleLanguageMenu(false);
  }
});

// 防止点击菜单本身时关闭
langMenu.addEventListener("click", (event) => {
  event.stopPropagation();
});

// 展开项目详情页面
function showProject(projectId) {
  // 隐藏项目列表
  document.getElementById('project-list').style.display = 'none';
  
  // 隐藏所有项目详情页面
  const projectPages = document.querySelectorAll('.project-page');
  projectPages.forEach(page => {
    page.style.display = 'none';
  });
  
  // 显示指定的项目详情
  document.getElementById(projectId).style.display = 'block';
}

// 返回项目列表函数
function backToList() {
  // 显示项目列表
  document.getElementById('project-list').style.display = 'block';
  
  // 隐藏所有项目详情页面
  const projectPages = document.querySelectorAll('.project-page');
  projectPages.forEach(page => {
    page.style.display = 'none';
  });
}

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
  document.querySelector('#projects p').textContent = lang === 'zh' ? '这里是我做过的一些项目介绍，点击查看详细信息。' : 'Here are some projects I have done. You can click for details.';
  document.getElementById('projects-a1').innerHTML = lang === 'zh'
    ? '<a href="javascript:void(0)" onclick="showProject(\'projects-pgc\')">数学建模：分布式能源接入配电网的风险分析</a>'
    : '<a href="javascript:void(0)" onclick="showProject(\'projects-pgc\')">Math modeling: Risk analysis of distributed energy access to the distribution network</a>';
  document.getElementById('projects-a2').innerHTML = lang === 'zh'
    ? '<a href="javascript:void(0)" onclick="showProject(\'projects-bc\')">一个带有两块蓝牙模块通信的红外避障小车</a>'
    : '<a href="javascript:void(0)" onclick="showProject(\'projects-bc\')">An infrared obstacle avoidance car with two Bluetooth modules for communication</a>';
  document.getElementById('projects-a3').innerHTML = lang === 'zh'
    ? '<a href="javascript:void(0)" onclick="showProject(\'projects-cb\')">移动机器人仿真：轨迹规划和避障</a>'
    : '<a href="javascript:void(0)" onclick="showProject(\'projects-cb\')">Mobile Robot Simulation: Path Planning and Obstacle Avoidance</a>';
  document.getElementById('projects-a4').innerHTML = lang === 'zh'
    ? '<a href="javascript:void(0)" onclick="showProject(\'projects-srtp\')">基于ROS的AGV建图与自主导航</a>'
    : '<a href="javascript:void(0)" onclick="showProject(\'projects-srtp\')">AGV mapping and autonomous navigation based on ROS</a>';
  document.getElementById('projects-more').innerHTML = lang === 'zh'
    ? '更多项目，请前往我的Github主页：<a href="https://github.com/camxini">https://github.com/camxini</a>.'
    : 'For more projects, please visit my GitHub homepage: <a href="https://github.com/camxini">https://github.com/camxini</a>.';
  
  document.getElementById('power-grid-control').textContent = lang === 'zh' ? '数学建模：分布式能源接入配电网的风险分析' : 'Math modeling: Risk analysis of distributed energy access to the distribution network';
  document.getElementById('project-back-pgc').textContent = lang === 'zh' ? '返回项目首页' : 'Back to Projects Homepage';
  document.getElementById('projects-pgc1').textContent = lang === 'zh' ? '2025年深圳杯数学建模挑战赛（C题）' : '2025 Shenzhen Cup Math Modeling Challenge (Problem C)';
  document.getElementById('projects-pgc2').textContent = lang === 'zh' ? '2025年浙江大学数学建模竞赛（A题）' : '2025 Zhejiang University Math Modeling Competition (Problem A)';
  document.getElementById('projects-pgc3').innerHTML = lang === 'zh'
    ? '您可以访问 <a href="https://github.com/camxini/camxinibot">https://github.com/camxini/camxinibot</a> 获取更多信息。'
    : 'You can visit <a href="https://github.com/camxini/camxinibot">https://github.com/camxini/camxinibot</a> for more information.';
  
  document.getElementById('bluetooth-car').textContent = lang === 'zh' ? '一个带有两块蓝牙传感器通信的红外避障小车' : 'An infrared obstacle avoidance car with two Bluetooth sensors for communication';
  document.getElementById('project-back-bc').textContent = lang === 'zh' ? '返回项目首页' : 'Back to Projects Homepage';
  document.getElementById('projects-bc1').textContent = lang === 'zh'
    ? '这是一个由Arduino UNO控制的避障小车，车头装有四个红外传感器，实现以下避障逻辑：'
    : 'This is an obstacle avoidance car controlled by Arduino UNO. The front of the car is equipped with four infrared sensors, which realize the following obstacle avoidance logic:';
  document.getElementById('projects-bc2').textContent = lang === 'zh'
    ? '1. 前方障碍：急停。'
    : '1. Obstacle ahead: Emergency stop.'
  document.getElementById('projects-bc3').textContent = lang === 'zh'
    ? '2. 左/右侧障碍：短暂向反方向偏转后急停。'
    : '2. Obstacle on the left/right: A short deflection in the opposite direction followed by an emergency stop.';
  document.getElementById('projects-bc4').textContent = lang === 'zh'
    ? '3. 静止时逼近的障碍物：主动后退。'
    : '3. Approaching obstacle when stationary: Actively reverse.';
  document.getElementById('projects-bc5').textContent = lang === 'zh'
    ? '小车通过双蓝牙模块接受来自电脑的无线通信指令，此外，小车配备一块OLED显示屏来实时显示关键信息。'
    : 'The car receives wireless motion commands from the computer through the dual Bluetooth module system. In addition, the trolley is equipped with an OLED display for real-time display of key info.';
  document.getElementById('projects-bc6').innerHTML = lang === 'zh'
    ? '您可以访问 <a href="https://github.com/camxini/mess-ball">https://github.com/camxini/mess-ball</a> 获取更多信息。'
    : 'You can visit <a href="https://github.com/camxini/mess-ball">https://github.com/camxini/mess-ball</a> for more information.';
  
  document.getElementById('camxinibot').textContent = lang === 'zh' ? '移动机器人仿真：轨迹规划和避障' : 'Mobile Robot Simulation: Path Planning and Obstacle Avoidance';
  document.getElementById('project-back-cb').textContent = lang === 'zh' ? '返回项目首页' : 'Back to Projects Homepage';

  document.getElementById('srtp').textContent = lang === 'zh' ? '基于ROS的AGV建图与自主导航' : 'AGV Mapping and Autonomous Navigation based on ROS';
  document.getElementById('project-back-srtp').textContent = lang === 'zh' ? '返回项目首页' : 'Back to Projects Homepage';

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
  document.querySelector('#download-academic-report-zh a').textContent = lang === 'zh' ? '中文成绩单（扫描件）' : 'Academic Report (Chinese, Scanned)';
  document.querySelector('#download-academic-report-en a').textContent = lang === 'zh' ? '英文成绩单（扫描件）' : 'Academic Report (English, Scanned)';
  document.querySelector('#download-cv-pdf a').textContent = lang === 'zh' ? '简历' : 'CV';
  document.querySelector('#download-sc a').textContent = lang === 'zh' ? '在读证明（扫描件）' : 'Studying Certificate (Scanned)';
  document.querySelector('#download-ielts a').textContent = lang === 'zh' ? '雅思成绩单（扫描件）' : 'IELTS Score Report (Scanned)';
  document.querySelector('#download-passport a').textContent = lang === 'zh' ? '护照（扫描件）' : 'Passport (Scanned)';
  document.querySelector('#download-ps a').textContent = lang === 'zh' ? '个人陈述' : 'Personal Statement';
  document.querySelector('#download-rl1 a').textContent = lang === 'zh' ? '推荐信1（扫描件）' : 'Recommendation Letter 1 (Scanned)';
  document.querySelector('#download-rl2 a').textContent = lang === 'zh' ? '推荐信2（扫描件）' : 'Recommendation Letter 2 (Scanned)';

  // Contact
  document.querySelector('#contact h2').textContent = lang === 'zh' ? '联系' : 'Contact';
  document.querySelector('#contact > p').textContent = lang === 'zh' ? '这里是进一步的联系方式。' : 'This is further contact info.';
  document.getElementById('contact-h1').textContent = lang === 'zh' ? '邮件' : 'Email';
  document.getElementById('contact-p1').textContent = lang === 'zh' ? 'chamxine@gmail.com（建议）' : 'chamxine@gmail.com (recommended)';
  document.getElementById('contact-p2').textContent = 'hello@camxini.com';
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
  document.getElementById('contact-p5.1').textContent = lang === 'zh' ? '邮政编码：310027' : 'Postcode: 310027';
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

  toggleLanguageMenu(false); // 切换语言后关闭菜单
}