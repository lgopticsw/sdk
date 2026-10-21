const SITE_LINKS = {
  home: 'index.html',
  products: 'index.html#products',

  robotDetails: 'https://vigilant-meme-684wo6q.pages.github.io/robot.html',
  robotGuide: 'https://vigilant-meme-684wo6q.pages.github.io/robot-guide.html',
  aiispDetails: 'https://improved-adventure-7z4yg2g.pages.github.io/aiisp.html',
  aiispGuide: 'https://improved-adventure-7z4yg2g.pages.github.io/aiisp-guide.html',
  dmsDetails: 'https://curly-doodle-7z4yo6m.pages.github.io/dms.html',
  dmsGuide: 'https://curly-doodle-7z4yo6m.pages.github.io/dms-guide.html',
  underdisplayDetails: 'https://scaling-adventure-y9o4oww.pages.github.io/underdisplay.html',
  underdisplayGuide: 'https://scaling-adventure-y9o4oww.pages.github.io/underdisplay-guide.html',
  rpiDetails: 'https://psychic-broccoli-jkmq2n3.pages.github.io/rpi-camera.html',
  rpiGuide: 'https://psychic-broccoli-jkmq2n3.pages.github.io/rpi-camera-guide.html',

  allSdks: 'https://github.com/LGIT-Optics',
  sdkPages: 'https://github.com/LGIT-Optics',
  robotSdk: 'https://github.com/LGIT-Optics/multi-perception-driver-sdk',
  aiispSdk: 'https://github.com/LGIT-Optics/ai-isp-driver-sdk',
  dmsSdk: 'https://github.com/LGIT-Optics/rgb-ir-depth',
  underdisplaySdk: 'https://github.com/LGIT-Optics/under-display-ir',
  rpiSdk: 'https://github.com/LGIT-Optics/rpi-pantilt-camera',

  lgInnotekGithub: 'https://github.com/LGInnotek',
  lgInnotekWebsite: 'https://www.lginnotek.com'
};

document.querySelectorAll('a[data-link]').forEach((link) => {
  link.href = SITE_LINKS[link.dataset.link];
});