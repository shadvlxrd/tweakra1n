const app = new Framework7({
  el: "#app",
  theme: "ios",
  name: "tweakra1n",
  id: "com.shadvlxrd.tweakra1n",
  popup: {
    push: true,
    swipeToClose: true,
  },
  sheet: {
    push: true,
    swipeToClose: true,
  },
  dialog: {
    backdrop: true,
    closeByBackdropClick: false,
  },
  serviceWorker: {
    path: "./service-worker.js",
  },
  routes: [
    {
      path: "/other/",
      content: `<div class="page"><div class="navbar"><div class="navbar-bg"></div><div class="navbar-inner sliding"><div class="left"><a href="#" class="link back"><i class="icon icon-back"></i></a></div><div class="title">Other</div></div></div><div class="page-content"><div class="list media-list separated inset"><ul><li><a href="https://ios.cfw.guide" class="item-link item-content external"><div class="item-media"><i class="f7-icons">lock_open_fill</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Jailbreak guide</div></div></div></a></li><li><a href="https://udid.tech/config/udid_tech.signed.mobileconfig" class="item-link item-content external"><div class="item-media"><i class="f7-icons">gear_alt</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Get UDID</div></div></div></a></li><li><a href="https://www.dropbox.com/scl/fi/4khxifa6dmyxtna7e8p9t/blockrevokes.mobileconfig?rlkey=kzc1wlts0u5vfkco1q5pyihb3&dl=1" class="item-link item-content external"><div class="item-media"><i class="f7-icons">shield_lefthalf_fill</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Block revokes</div></div></div></a></li><li><a href="https://cdn.adtidy.org/public/Dns/adguard-dns.mobileconfig" class="item-link item-content external"><div class="item-media"><i class="f7-icons">rectangle_3_offgrid_fill</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Block ADS</div></div></div></a></li><li><a href="https://www.dropbox.com/scl/fi/9mpbzim7x6sogk65e5jai/Block_OTA.mobileconfig?rlkey=86frs6v7zrhwzvrbwrqgo04m6&dl=1" class="item-link item-content external"><div class="item-media"><i class="f7-icons">lock_shield_fill</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Block OTA</div></div></div></a></li></ul></div><div class="block block-title">Supervision required</div><div class="list media-list separated inset"><ul><li><a href="https://www.dropbox.com/scl/fi/sbjxg9q6w6za17s94ommj/Skip_Setup.mobileconfig?rlkey=l4eojv7qyh6gb0jul53h8o08h&dl=1" class="item-link item-content external"><div class="item-media"><i class="icon f7-icons">device_phone_portrait</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Skip Setup</div></div></div></a></li><li><a href="https://www.dropbox.com/scl/fi/xmcduai5mhnyp7pznd0mb/Disable_Screen_Time.mobileconfig?rlkey=7s2vqp4kfccna8etuj57lbr2w&dl=1" class="item-link item-content external"><div class="item-media"><i class="f7-icons">hourglass</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Disable Screen Time</div></div></div></a></li></ul></div><br></div>`,
      options: { transition: "f7-cover" },
    },
   {
  path: "/trustcert/",
  content: `
    <div class="page" data-name="other">
      <div class="navbar">
        <div class="navbar-bg"></div>
        <div class="navbar-inner sliding">
          <div class="left">
            <a href="#" class="link back">
              <i class="icon icon-back"></i>
            </a>
          </div>
          <div class="title">Untrusted Enterprise Developer</div>
        </div>
      </div>
      <div class="page-content">
        <div class="block block-strong inset">
          <center>
            <img loading="lazy" src="https://i.imgur.com/YQxY1aO.png" style="max-width:340px;width:97%;border-radius:20px;margin-bottom:18px;">
          </center>
          <strong>How to Trust an Enterprise Certificate</strong>
          <ol style="margin-top:14px;padding-left:20px;">
            <li>Open <b>Settings</b> on your device.</li>
            <li>Go to <b>General</b> &rarr; <b>VPN & Device Management</b>.</li>
            <li>Find the relevant <b>Enterprise App</b> profile under "Enterprise App" or "Device Management".</li>
            <li>Tap the profile, then tap <b>Trust</b> and confirm your choice.</li>
            <li>After trusting, you can open the app as normal.</li>
          </ol>
          <p style="margin-top:10px;color:#888;">Trusting the certificate ensures the app is authenticated and can run on your device securely.</p>
        </div>
        <div class="list separated inset">
          <ul>
            <li>
              <a href="com.apple.Preferences://" class="item-link item-content external">
                <div class="item-media"><i class="f7-icons">gear</i></div>
                <div class="item-inner"><div class="item-title-row"><div class="item-title">Open Settings</div></div></div>
              </a>
            </li>
          </ul>
        </div>
        <br><br>
      </div>
    </div>
  `,
  options: { transition: "f7-cover" },
},
{
  path: "/verifyintegrity/",
  content: `
    <div class="page">
      <div class="navbar">
        <div class="navbar-bg"></div>
        <div class="navbar-inner sliding">
          <div class="left">
            <a href="#" class="link back"><i class="icon icon-back"></i></a>
          </div>
          <div class="title">Unable to install {app}</div>
        </div>
      </div>
      <div class="page-content">
        <div class="block block-strong inset">
          <center>
            <img loading="lazy" src="https://i.imgur.com/tETxFue.png" style="max-width:340px;width:97%;border-radius:20px;margin-bottom:18px;">
          </center>
          <strong>How to Fix "Unable to Verify App" or "Integrity Could Not Be Verified"</strong>
          <ol style="margin-top:14px;padding-left:20px;">
            <li>This error often means the certificate has been revoked or blacklisted.</li>
            <li>First, try deleting the app completely and reinstalling it.</li>
            <li>If the issue persists, <b>backup your data</b> and <b>reset your device to factory settings</b>:</li>
            <ul>
              <li>Go to <b>Settings &rarr; General &rarr; Transfer or Reset iPhone &rarr; Erase All Content and Settings</b>.</li>
            </ul>
            <li>After reset, restore your backup and try installing again.</li>
          </ol>
          <p style="margin-top:10px;color:#888;">Note: Always ensure your data is backed up before performing a factory reset.</p>
        </div>
        <div class="list separated inset">
          <ul>
            <li>
              <a href="com.apple.Preferences://" class="item-link item-content external">
                <div class="item-media"><i class="f7-icons">gear</i></div>
                <div class="item-inner"><div class="item-title-row"><div class="item-title">Open Settings</div></div></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  options: { transition: "f7-cover" },
},
{
  path: "/truststore/",
  content: `
    <div class="page" data-name="other">
      <div class="navbar">
        <div class="navbar-bg"></div>
        <div class="navbar-inner sliding">
          <div class="left"><a href="#" class="link back"><i class="icon icon-back"></i></a></div>
          <div class="title">Allow Marketplace from {name}</div>
        </div>
      </div>
      <div class="page-content">
        <div class="block block-strong inset">
          <center>
            <img loading="lazy" src="https://i.imgur.com/UQTwAyS.jpeg" style="max-width:340px;width:97%;border-radius:20px;margin-bottom:18px;">
          </center>
          <strong>How to Allow a 3rd Party App Store</strong>
          <ol style="margin-top:14px;padding-left:20px;">
            <li>When prompted, tap <b>OK</b> to allow installation.<br>
              <img loading="lazy" src="https://i.imgur.com/6B57i5A.jpeg" style="max-width:340px;width:97%;border-radius:20px;margin:10px 0;">
            </li>
            <li>Open <b>Settings</b>, go to <b>General &rarr; Device Management</b>, and trust the store profile.<br>
              <img loading="lazy" src="https://i.imgur.com/QAFnPr1.jpeg" style="max-width:340px;width:97%;border-radius:20px;margin:10px 0;">
            </li>
            <li>Return to the website and tap <b>Install App Marketplace</b>.<br>
              <img loading="lazy" src="https://i.imgur.com/WclZ4so.jpeg" style="max-width:340px;width:97%;border-radius:20px;margin:10px 0;">
            </li>
          </ol>
          <p style="margin-top:10px;color:#888;">You can now use the 3rd party marketplace on your device.</p>
        </div>
        <div class="list separated inset">
          <ul>
            <li>
              <a href="com.apple.Preferences://" class="item-link item-content external">
                <div class="item-media"><i class="f7-icons">gear</i></div>
                <div class="item-inner"><div class="item-title-row"><div class="item-title">Open Settings</div></div></div>
              </a>
            </li>
          </ul>
        </div>
        <br><br>
      </div>
    </div>
    <div class="popup" id="devmode">
      <div class="page">
        <div class="swipe-nav"><div><i class="f7-icons">minus</i></div></div>
        <div class="page-content">
          <div class="block-title block-title">Developer Mode required</div>
          <div class="block block-strong inset">
            <center>
              <img loading="lazy" src="https://i.imgur.com/qLbsliJ.png" style="max-width:340px;width:97%;border-radius:20px;margin-bottom:18px;">
            </center>
            <strong>How to Enable Developer Mode</strong>
            <ol style="margin-top:14px;padding-left:20px;">
              <li>Open <b>Settings</b> on your device.</li>
              <li>Go to <b>Privacy & Security</b>.</li>
              <li>Scroll down and enable <b>Developer Mode</b>.</li>
            </ol>
          </div>
          <div class="list separated inset">
            <ul>
              <li>
                <a href="com.apple.Preferences://" class="item-link item-content external">
                  <div class="item-media"><i class="f7-icons">gear</i></div>
                  <div class="item-inner"><div class="item-title-row"><div class="item-title">Open Settings</div></div></div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  options: { transition: "f7-cover" },
},
{
  path: "/devmode/",
  content: `
    <div class="page">
      <div class="navbar">
        <div class="navbar-bg"></div>
        <div class="navbar-inner sliding">
          <div class="left"><a href="#" class="link back"><i class="icon icon-back"></i></a></div>
          <div class="title">Developer Mode required</div>
        </div>
      </div>
      <div class="page-content">
        <div class="block block-strong inset">
          <center>
            <img loading="lazy" src="https://i.imgur.com/qLbsliJ.png" style="max-width:340px;width:97%;border-radius:20px;margin-bottom:18px;">
          </center>
          <strong>How to Enable Developer Mode</strong>
          <ol style="margin-top:14px;padding-left:20px;">
            <li>Open <b>Settings</b> on your device.</li>
            <li>Go to <b>Privacy & Security</b>.</li>
            <li>Scroll down and toggle <b>Developer Mode</b> ON.</li>
            <li>Follow any on-screen prompts to confirm.</li>
          </ol>
        </div>
        <div class="list separated inset">
          <ul>
            <li>
              <a href="com.apple.Preferences://" class="item-link item-content external">
                <div class="item-media"><i class="f7-icons">gear</i></div>
                <div class="item-inner"><div class="item-title-row"><div class="item-title">Open Settings</div></div></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  options: { transition: "f7-cover" },
},
  ],
});
const mainView = app.views.create(".view-main");

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tab-link").forEach(tabLink => {
    tabLink.addEventListener("click", function () {
      const tabTitle = this.getAttribute("data-tab-title");
      const navbarTitle = document.querySelector(".navbar .title");
      const navbarLargeTitle = document.querySelector(".navbar .title-large-text");
      if (navbarTitle) navbarTitle.textContent = tabTitle;
      if (navbarLargeTitle) navbarLargeTitle.textContent = tabTitle;
    });
  });
});
const CACHE_KEY = 'bingWallpapers';
const CACHE_TTL = 24 * 60 * 60 * 1000;
const WALLPAPER_COUNT = 8; 

function fadeInBg(el) {
  el.style.opacity = 0;
  el.style.transition = 'opacity 1s';
  void el.offsetWidth;
  el.style.opacity = 1;
}

async function setRandomBingWallpaperBgImg() {
  let cached = JSON.parse(localStorage.getItem(CACHE_KEY) || '{}');
  const now = Date.now();

  if (!cached.images || !cached.timestamp || (now - cached.timestamp) > CACHE_TTL) {
    try {
      const res = await fetch('https://corsproxy.io/?https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8&mkt=en-US');
      const data = await res.json();
      const images = data.images.map(img => "https://www.bing.com" + img.url);
      cached = { images, timestamp: now };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cached));
    } catch (e) {
      console.error("Failed to fetch Bing wallpapers!", e);
    
      if (!cached.images) cached.images = [];
    }
  }
  const urls = cached.images || [];
  const randomUrl = urls.length ? urls[Math.floor(Math.random() * urls.length)] : null;

  document.querySelectorAll('.bg-img').forEach(el => {
    if (randomUrl) {
  el.style.backgroundImage = `url('${randomUrl}')`;
  fadeInBg(el);
} else {
  el.style.backgroundImage = "url('./assets/background.png')";
  fadeInBg(el);
}
  });
}

setRandomBingWallpaperBgImg();
function toggleDarkMode() {
  document.querySelector("html").classList.toggle("dark");
}

function applyDarkModeSetting() {
  const htmlElement = document.querySelector("html");
  const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const applyDarkMode = e => {
    if (e.matches) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  };
  darkModeQuery.addListener(applyDarkMode);
  applyDarkMode(darkModeQuery);
}
applyDarkModeSetting();

fetch("https://www.idownloadblog.com/feed/")
  .then(response => response.text())
  .then(data => {
    const items = new window.DOMParser().parseFromString(data, "text/xml").getElementsByTagName("item");
    const newsContainer = document.getElementById("news");
    for (let i = 0; i < items.length; i++) {
      const title = items[i].getElementsByTagName("title")[0].textContent;
      const link = items[i].getElementsByTagName("link")[0].textContent;
      const content = items[i].getElementsByTagName("content:encoded")[0].textContent;
      const imgElement = new window.DOMParser().parseFromString(content, "text/html").querySelector("img");
      const imgSrc = imgElement ? imgElement.getAttribute("src") : "#";
      const card = document.createElement("div");
      card.classList.add("card", "card-raised", "frosted-glass");
      card.innerHTML = `
        <div class="card-content">
          <div class="card-image" style="text-align: center;">
            <img class="newsimg" src="${imgSrc}" loading="lazy">
          </div>
          <div class="card-header">${title}</div>
          <div class="card-footer">
            <a onclick="navigator.share({ title: '${title}', url: '${link}' })">
              <i class="f7-icons">square_arrow_up</i>
            </a>
            <a href="${link}" class="external">
              <i class="f7-icons">book_fill</i>
            </a>
          </div>
        </div>`;
      newsContainer.appendChild(card);
    }
  });

function checkConnection() {
  let dialogShown = false;
  let dialogInstance = null;
  setInterval(() => {
    if (navigator.onLine) {
      if (dialogShown && dialogInstance) {
        dialogInstance.close();
        dialogInstance = null;
        dialogShown = false;
      }
    } else if (!dialogShown) {
      dialogShown = true;
      dialogInstance = app.dialog.create({
        title: 'No Internet Connection',
        text: `
          <div style="display:flex;align-items:center;">
            <i class="icon f7-icons color-red" style="font-size:32px;margin-right:12px;">wifi_slash</i>
            <div>
              <div style="font-weight:bold;">Connection to the server could not be established.</div>
              <div style="margin-top:4px;">Please check your internet connection and try again.</div>
            </div>
          </div>
        `,
        buttons: [{
          text: 'Dismiss',
          close: true,
          cssClass: 'color-red'
        }],
        closeByBackdropClick: false,
        closeByOutsideClick: false,
        destroyOnClose: true,
        cssClass: 'connection-dialog'
      });
      dialogInstance.open();
    }
  }, 1000);
}

function updateIcon(url) {
  document.querySelectorAll("#favicon").forEach(favicon => favicon.href = url);
  document.querySelectorAll("#faviconimg").forEach(faviconImg => faviconImg.src = url);
  localStorage.setItem("customicon", url);
}

function customicon(e, t) {
  app.preloader.show();
  updateIcon(t);
  setTimeout(() => {
    app.preloader.hide();
    window.location.reload();
  }, 2000);
}

function loadIcon() {
  const customIcon = localStorage.getItem("customicon");
  if (customIcon) updateIcon(customIcon);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".ptr-content").forEach(element => {
    element.addEventListener("ptr:refresh", () => window.location.reload());
  });
  checkConnection();
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistration().then(registration => {
    if (!registration) {
      navigator.serviceWorker.register("service-worker.js").catch(() => {});
    }
  });
}

window.addEventListener("load", loadIcon);

if (window.navigator.standalone) {
  const preloaderDialog = app.dialog.preloader("Reloading data");
  preloaderDialog.open();
  setTimeout(() => preloaderDialog.close(), 2000);
} else {
  app.popup.open("#hs");
}

function initPhotoBrowser(urls) {
  const photos = urls.map(url => ({ url }));
  return app.photoBrowser.create({
    photos,
    type: "standalone",
    navbar: true,
    toolbar: false,
    swiper: { zoom: true },
    on: {
      closed: () => { app.photoBrowserPopup = null; }
    }
  });
}

function generateScreenshotElements(screenshots) {
  return screenshots.map(src => `<img loading="lazy" src="${src}">`).join('');
}

function openPhotoBrowser(urls) {
  initPhotoBrowser(urls).open();
}

function createItemHtml(item) {
  return `
    <li>
      <a class="item-link" href="#">
        <div class="item-content popup-open" data-popup="#${item.id}">
          <div class="item-media">
            <img loading="lazy" src="${item.icon}">
          </div>
          <div class="item-inner">
            <div class="item-title-row">
              <div class="item-title">
                ${item.title} <i style="font-size: 17px; color: ${item.badgeColor};" class="f7-icons">${item.badge}</i>
              </div>
            </div>
            <div class="item-subtitle">${item.category}</div>
            <div class="item-footer"></div>
          </div>
        </div>
      </a>
    </li>
  `;
}

function createPopupHtml(item) {
  return `
    <div class="popup" id="${item.id}">
      <div class="page">
        <div class="swipe-nav"><div><i class="f7-icons">minus</i></div></div>
        <div class="page-content">
          <div style="margin-top: 20px; padding: 0px;">
            <div class="list separated media-list no-chevron inset">
              <ul>
                <li style="background:none;">
                  <div class="item-content">
                    <div class="item-media">
                      <img loading="lazy" src="${item.icon}" style="width: 100px; height: 100px;">
                    </div>
                    <div class="item-inner">
                      <div class="item-title-row" style="font-size: 21px;">
                        <div class="item-title">
                          ${item.title} <i style="font-size: 21px; color: ${item.badgecolor};" class="f7-icons">${item.badge}</i>
                        </div>
                      </div>
                      <div class="item-subtitle"><span class="badge">${item.category}</span></div>
                      <div class="item-text">
                        <a href="${item.get_link}" class="button button-fill button-round button-fill get inline external">GET↓</a>
                        <a onclick="navigator.share({ title: '${item.title}', url: '${item.get_link}' })" class="button button-fill button-round get inline" style="background:none;float:right;">
                          <i class="f7-icons" style="color:var(--f7-ios-primary);">square_arrow_up</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="block block-strong inset">
              <h2>Description</h2>
              <p>${item.description}</p>
              <center>
                <div class="screenshot" onclick="openPhotoBrowser(${JSON.stringify(item.screenshots).replace(/"/g, "&quot;")})">
                  ${generateScreenshotElements(item.screenshots)}
                </div>
              </center>
            </div>
            <div class="list list-strong list-dividers simple-list inset">
              <ul>
                <li><span>Type</span><span style="float: right">${item.type}</span></li>
                <li><span>OS</span><span style="float: right">${item.compatible}</span></li>
              </ul>
            </div>
            <div class="list media-list separated inset">
              <ul>
                <li>
                  <a onclick="addToFavorites({
                    id: '${item.id}',
                    icon: '${item.badge}',
                    image: '${item.icon}',
                    title: '${item.title}',
                    subtitle: '${item.category}',
                    color: '${item.badgecolor}'
                  })" class="item-link item-content">
                    <div class="item-media"><i class="icon f7-icons color-red">heart_fill</i></div>
                    <div class="item-inner">
                      <div class="item-title-row">
                        <div class="item-title">Add to favorites</div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <br>
          </div>
        </div>
      </div>
    </div>
  `;
}

function initVirtualList(containerSelector, items) {
  app.virtualList.create({
    el: containerSelector,
    items,
    renderItem: (item, index) => createItemHtml(item),
    searchAll: (query, items) => {
      const results = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].title.toLowerCase().includes(query.toLowerCase()) || query.trim() === "") {
          results.push(i);
        }
      }
      return results;
    },
    height: 90,
  });
  items.forEach(item => {
    const popupHtml = createPopupHtml(item);
    document.body.insertAdjacentHTML("beforeend", popupHtml);
  });
}

async function fetchAndLoadTroll() {
  try {
    const response = await fetch("troll.json");
    const trollstore = (await response.json()).sort((a, b) => a.title.localeCompare(b.title));
    const trollCountElement = document.getElementById("trollcount");
    if (trollCountElement) trollCountElement.textContent = trollstore.length;
    initVirtualList(".virtual-troll-list", trollstore);
  } catch (error) {
    console.error("Could not load trollstore:", error);
  }
}

async function fetchAndLoadApps() {
  try {
    const response = await fetch("apps.json");
    const apps = (await response.json()).sort((a, b) => a.title.localeCompare(b.title));
    const appsCountElement = document.getElementById("tweaksnumber");
    if (appsCountElement) appsCountElement.textContent = apps.length;
    initVirtualList(".virtual-list", apps);
  } catch (error) {
    console.error("Could not load apps:", error);
  }
}

function addToFavorites(item) {
  const favEmptyElement = document.getElementById("favempty");
  if (favEmptyElement) favEmptyElement.style.display = "none";
  app.toast.create({
    icon: '<i class="f7-icons">heart_fill</i>',
    text: "Added to Favorites",
    position: "center",
    closeTimeout: 1500,
  }).open();
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.some(fav => fav.title === item.title)) {
    favorites.push(item);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    displayFavorites();
  }
}

function displayFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const favList = document.getElementById("fav").querySelector("ul");
  favList.innerHTML = "";
  favorites.forEach(fav => {
    const favItemHtml = `
      <li class="swipeout">
        <div class="swipeout-content">
          <a class="item-link popup-open" href="#" data-popup="#${fav.id}">
            <div class="item-content">
              <div class="item-media">
                <img loading="lazy" src="${fav.image}">
              </div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">
                    ${fav.title} <i style="font-size: 17px; color: ${fav.color};" class="f7-icons">${fav.icon}</i>
                  </div>
                </div>
                <div class="item-subtitle">${fav.subtitle}</div>
                <div class="item-footer"></div>
              </div>
            </div>
          </a>
        </div>
        <div class="swipeout-actions-right">
          <a href="#" class="swipeout-delete" onclick="removeFromFavorites('${fav.title}')">Remove</a>
        </div>
      </li>`;
    favList.insertAdjacentHTML("beforeend", favItemHtml);
  });
}

function removeFromFavorites(title) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites = favorites.filter(fav => fav.title !== title);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  displayFavorites();
  if (favorites.length === 0) {
    const favEmptyElement = document.getElementById("favempty");
    if (favEmptyElement) favEmptyElement.style.display = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  fetchAndLoadApps();
  fetchAndLoadTroll();
  displayFavorites();
});

let colorPickerInstance = null;

function updateThemeColor(color) {
  const root = document.documentElement;
  root.style.setProperty("--f7-ios-primary", color);
  root.style.setProperty("--f7-ios-primary-shade", color + "D9");
  root.style.setProperty("--f7-ios-primary-tint", color + "4D");
  localStorage.setItem("ios-primary-color", color);
  localStorage.setItem("ios-primary-shade", color + "D9");
  localStorage.setItem("ios-primary-tint", color + "4D");
}

const debouncedUpdateThemeColor = debounce(updateThemeColor, 250);

function openColorPicker(initialColor) {
  colorPickerInstance = app.colorPicker.create({
    inputEl: "#accent-color",
    openIn: "popover",
    closeOnSelect: true,
    value: { hex: initialColor },
    on: {
      change: (picker, value) => {
        debouncedUpdateThemeColor(value.hex);
      },
      closed: () => {
        colorPickerInstance.destroy();
        colorPickerInstance = null;
      }
    }
  });
  colorPickerInstance.open();
}

document.addEventListener("DOMContentLoaded", () => {
  const initialColor = localStorage.getItem("ios-primary-color") || "#3E84F7";
  updateThemeColor(initialColor);
  document.getElementById("accent-color").addEventListener("click", () => {
    if (colorPickerInstance) {
      colorPickerInstance.setValue({ hex: initialColor });
      colorPickerInstance.open();
    } else {
      openColorPicker(initialColor);
    }
  });
});

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

var swiperFeatured = new Swiper(".featured", {
  slidesPerView: "auto",
  spaceBetween: 10,
  pagination: { el: ".swiper-pagination" },
  autoplay: {
    delay: 4000,
    disableOnInteraction: true
  }
});

function shareURL() {
  if (navigator.share) {
    navigator.share({
      title: "tweakra1n",
      text: "Take your iDevice experience to the next level with our awesome app!",
      url: "https://tweakrain.pages.dev/"
    });
  }
}

function shareSource() {
  if (navigator.share) {
    navigator.share({
      title: "tweakra1n",
      text: "Official AltStore source provided by tweakra1n",
      url: "https://tweakrain.pages.dev/ios/altstore.json"
    });
  }
}

function copySource() {
  navigator.clipboard.writeText('https://tweakrain.pages.dev/ios/altstore.json')
    .then(() => {
      app.toast.create({
        text: 'Source link copied!',
        position: 'center',
        closeTimeout: 2000,
      }).open();
    })
    .catch(err => {
      app.toast.create({
        text: 'Failed to copy!',
        position: 'center',
        closeTimeout: 2000,
      }).open();
      console.error('Copy failed:', err);
    });
}

function reset() {
  app.dialog.create({
    title: 'Reset',
    text: 'Choose an option below to proceed:',
    verticalButtons: true,
    buttons: [
      {
        text: 'Reset Accent Color',
        bold: true,
        onClick: function () {
          updateThemeColor("#3E84F7");
          app.dialog.alert('Accent color has been reset.', 'Done');
        }
      },
      {
        text: 'Erase All Data and Preferences',
        onClick: function () {
          app.dialog.confirm(
            'Please confirm if you want to erase all data and settings. This action cannot be undone.',
            'Confirm Reset',
            () => {
              app.preloader.show();
              setTimeout(() => {
                document.cookie.split(';').forEach(cookie => {
                  const eqPos = cookie.indexOf('=');
                  const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
                });
                localStorage.clear();
                app.preloader.hide();
                window.location.href = 'app.html';
              }, 2000);
            }
          );
        }
      },
      {
        text: 'Cancel',
        color: 'red',
        close: true
      }
    ]
  }).open();
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistration().then(registration => {
    if (!registration) {
      navigator.serviceWorker.register("service-worker.js").catch(() => {});
    }
  });
}
