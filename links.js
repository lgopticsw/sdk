const SITE_LINKS = {
  home: 'index.html',
  products: 'index.html#products',

  robotDetails: 'https://reimagined-adventure-9m8817p.pages.github.io/robot.html',
  robotGuide: 'https://reimagined-adventure-9m8817p.pages.github.io/robot-guide.html',
  aiispDetails: 'https://reimagined-adventure-9m8817p.pages.github.io/aiisp.html',
  aiispGuide: 'https://reimagined-adventure-9m8817p.pages.github.io/aiisp-guide.html',
  dmsDetails: 'https://reimagined-adventure-9m8817p.pages.github.io/dms.html',
  dmsGuide: 'https://reimagined-adventure-9m8817p.pages.github.io/dms-guide.html',
  underdisplayDetails: 'https://reimagined-adventure-9m8817p.pages.github.io/underdisplay.html',
  underdisplayGuide: 'https://reimagined-adventure-9m8817p.pages.github.io/underdisplay-guide.html',

  allSdks: 'https://github.com/LGIT-Optics',
  sdkPages: 'https://github.com/LGIT-Optics/SDK-pages',
  robotSdk: 'https://github.com/LGIT-Optics/multi-perception-driver-sdk',
  aiispSdk: 'https://github.com/LGIT-Optics/ai-isp-driver-sdk',
  dmsSdk: 'https://github.com/LGIT-Optics/rgb_ir_depth',
  underdisplaySdk: 'https://github.com/LGIT-Optics/under_display_ir',

  lgInnotekGithub: 'https://github.com/LGInnotek',
  lgInnotekWebsite: 'https://www.lginnotek.com'
};

document.querySelectorAll('a[data-link]').forEach((link) => {
  link.href = SITE_LINKS[link.dataset.link];
});