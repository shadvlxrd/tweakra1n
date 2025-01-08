var app = new Framework7({

      el: "#app",
      theme: "ios",
      name: "tweakra1n",
      id: "com.shadvlxrd.tweakra1n",
      popup: {

         push: !0,
         swipeToClose: !0

      },
      sheet: {

         push: !0,
         swipeToClose: !0

      },
      serviceWorker: {

         path: "./service-worker.js"

      },
      routes: [{

         path: "/miscellaneous/",
         content: '<div class="page"><div class="navbar"><div class="navbar-bg"></div><div class="navbar-inner sliding"><div class="left"><a href="#" class="link back"><i class="icon icon-back"></i></a></div><div class="title">Miscellaneous</div></div></div><div class="page-content"><div class="list media-list separated inset"><ul><li><a href="https://ios.cfw.guide" class="item-link item-content external"><div class="item-media"><i class="f7-icons">lock_open_fill</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Jailbreak guide</div></div></div></a></li><li><li><a href="https://udid.tech/config/udid_tech.signed.mobileconfig" class="item-link item-content external"><div class="item-media"><i class="f7-icons">gear_alt</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Get UDID</div></div></div></a></li><li><a href="https://www.dropbox.com/scl/fi/4khxifa6dmyxtna7e8p9t/blockrevokes.mobileconfig?rlkey=kzc1wlts0u5vfkco1q5pyihb3&dl=1" class="item-link item-content external"><div class="item-media"><i class="f7-icons">shield_lefthalf_fill</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Block revokes</div></div></div></a></li><li><a href="https://cdn.adtidy.org/public/Dns/adguard-dns.mobileconfig" class="item-link item-content external"><div class="item-media"><i class="f7-icons">rectangle_3_offgrid_fill</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Block ADS</div></div></div></a></li><li><a href="https://www.dropbox.com/scl/fi/9mpbzim7x6sogk65e5jai/Block_OTA.mobileconfig?rlkey=86frs6v7zrhwzvrbwrqgo04m6&dl=1" class="item-link item-content external"><div class="item-media"><i class="f7-icons">lock_shield_fill</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Block OTA</div></div></div></a></li></ul></div><div class="block block-title">Supervision required</div><div class="list media-list separated inset"><ul><li><a href="https://www.dropbox.com/scl/fi/sbjxg9q6w6za17s94ommj/Skip_Setup.mobileconfig?rlkey=l4eojv7qyh6gb0jul53h8o08h&dl=1" class="item-link item-content external"><div class="item-media"><i class="icon f7-icons">device_phone_portrait</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Skip Setup</div></div></div></a></li><li><a href="https://www.dropbox.com/scl/fi/xmcduai5mhnyp7pznd0mb/Disable_Screen_Time.mobileconfig?rlkey=7s2vqp4kfccna8etuj57lbr2w&dl=1" class="item-link item-content external"><div class="item-media"><i class="f7-icons">hourglass</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Disable Screen Time</div></div></div></a></li></ul></div><br></div>',
         options: {

            transition: "f7-cover"

         }
      }, {

         path: "/trustcert/",
         content: '<div class="page" data-name="miscellaneous"><div class="navbar"><div class="navbar-bg"></div><div class="navbar-inner sliding"><div class="left"><a href="#" class="link back"><i class="icon icon-back"></i></a></div><div class="title">"Untrusted Enterprise Developer"</div></div></div><div class="page-content"><div class="block block-strong inset"><center><img loading="lazy" src="https://i.imgur.com/YQxY1aO.png" style="width:97%;border-radius:20px;"></center><strong>How to trust a certificate?</strong><br>To establish trust in a certificate, navigate to your device Settings, locate the General tab, and select VPN & Device Management. Once there, identify the specific certificate and proceed by clicking on it. Finally, complete the trust verification process by selecting the "Verify" option. This ensures the authentication and reliability of the certificate on your device.</div><div class="list separated inset"><ul><li><a href="com.apple.Preferences://" class="item-link item-content external"><div class="item-media"><i class="f7-icons">gear</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Open Settings</div></li></a></ul></div><br><br><br></div></div></div></div><div class="popup" id="devmode"><div class="page"><div class="swipe-nav"><div><i class="f7-icons">minus</i></div></div><div class="page-content"><div class="block-title block-title">"Developer Mode required"</div><div class="block block-strong inset"><center><img loading="lazy" src="https://i.imgur.com/qLbsliJ.png" style="width:97%;border-radius:20px;"></center><strong>How to enable Developer Mode?</strong><br>To activate Developer Mode, navigate to your device Settings, specifically within the Privacy & Security section. Once there, locate the option labeled Developer Mode and toggle the switch to enable it.</div><div class="list separated inset"><ul><li><a href="com.apple.Preferences://" class="item-link item-content external"><div class="item-media"><i class="f7-icons">gear</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Open Settings</div></li></a></ul></div>',
         options: {

            transition: "f7-cover"

         }
      }, {

         path: "/verifyintegrity/",
         content: '<div class="page"><div class="navbar"><div class="navbar-bg"></div><div class="navbar-inner sliding"><div class="left"><a href="#" class="link back"><i class="icon icon-back"></i></a></div><div class="title">"Unable to install {app}"</div></div></div><div class="page-content"><div class="block block-strong inset"><center><img loading="lazy" src="https://i.imgur.com/tETxFue.png" style="width:97%;border-radius:20px;"></center><strong>How do I fix this error?</strong><br>If you happen to encounter this error, it may suggest a potential blacklisting from the certificate. To resolve this issue, reset your iDevice to factory settings, ensuring that you back up all your data beforehand.</div><div class="list separated inset"><ul><li><a href="com.apple.Preferences://" class="item-link item-content external"><div class="item-media"><i class="f7-icons">gear</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Open Settings</div></li></a></ul></div>',
         options: {

            transition: "f7-cover"

         }
      },
      {

         path: "/truststore/",
         content: '<div class="page" data-name="miscellaneous"><div class="navbar"><div class="navbar-bg"></div><div class="navbar-inner sliding"><div class="left"><a href="#" class="link back"><i class="icon icon-back"></i></a></div><div class="title">"Allow Marketplace from {name}"</div></div></div><div class="page-content"><div class="block block-strong inset"><center><img loading="lazy" src="https://i.imgur.com/UQTwAyS.jpeg" style="width:97%;border-radius:20px;"></center><strong>How to allow a 3rd Party App Store?</strong><br><br><strong>Click OK <img loading="lazy" src="https://i.imgur.com/6B57i5A.jpeg" style="width:97%;border-radius:20px;"><strong>Just open up Settings and trust the Store, no worries! <img loading="lazy" src="https://i.imgur.com/QAFnPr1.jpeg" style="width:97%;border-radius:20px;"><br><strong>Head back to the website where you’re trying to install the store and hit Install App Marketplace. <img loading="lazy" src="https://i.imgur.com/WclZ4so.jpeg" style="width:97%;border-radius:20px;"></div><div class="list separated inset"><ul><li><a href="com.apple.Preferences://" class="item-link item-content external"><div class="item-media"><i class="f7-icons">gear</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Open Settings</div></li></a></ul></div><br><br><br></div></div></div></div><div class="popup" id="devmode"><div class="page"><div class="swipe-nav"><div><i class="f7-icons">minus</i></div></div><div class="page-content"><div class="block-title block-title">"Developer Mode required"</div><div class="block block-strong inset"><center><img loading="lazy" src="https://i.imgur.com/qLbsliJ.png" style="width:97%;border-radius:20px;"></center><strong>How to enable Developer Mode?</strong><br>To activate Developer mode, navigate to your device Settings, specifically within the "Privacy & Security" section. Once there, locate the option labeled "Developer Mode" and toggle the switch to enable it.</div><div class="list separated inset"><ul><li><a href="com.apple.Preferences://" class="item-link item-content external"><div class="item-media"><i class="f7-icons">gear</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Open Settings</div></li></a></ul></div>',
         options: {

            transition: "f7-cover"

         }
      },
       {

         path: "/devmode/",
         content: '<div class="page"><div class="navbar"><div class="navbar-bg"></div><div class="navbar-inner sliding"><div class="left"><a href="#" class="link back"><i class="icon icon-back"></i></a></div><div class="title">"Developer Mode required"</div></div></div><div class="page-content"><div class="block block-strong inset"><center><img loading="lazy" src="https://i.imgur.com/qLbsliJ.png" style="width:97%;border-radius:20px;"></center><strong>How to enable Developer Mode?</strong><br>To activate Developer mode, navigate to your device settings, specifically within the "Privacy & Security" section. Once there, locate the option labeled "Developer Mode" and toggle the switch to enable it.</div><div class="list separated inset"><ul><li><a href="com.apple.Preferences://" class="item-link item-content external"><div class="item-media"><i class="f7-icons">gear</i></div><div class="item-inner"><div class="item-title-row"><div class="item-title">Open Settings</div></li></a></ul></div>',
         options: {

            transition: "f7-cover"

         }
      }]
   }),
   mainView = app.views.create(".view-main");
document.addEventListener("DOMContentLoaded", () => {

   document.querySelectorAll(".tab-link").forEach(tabLink => {

      tabLink.addEventListener("click", function () {

         var tabTitle = this.getAttribute("data-tab-title");

         var navbarTitle = document.querySelector(".navbar .title");

         var navbarLargeTitle = document.querySelector(".navbar .title-large-text");

         if (navbarTitle) {
            navbarTitle.textContent = tabTitle;
         }
         if (navbarLargeTitle) {
            navbarLargeTitle.textContent = tabTitle;
         }
      });
   });
});
function toggleDarkMode() {   document.querySelector("html").classList.toggle("dark");
}
function applyDarkModeSetting() {
   const htmlElement = document.querySelector("html");
   const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
   const applyDarkMode = (e) => {
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

      const items = (new DOMParser).parseFromString(data, "text/xml").getElementsByTagName("item");

      const newsContainer = document.getElementById("news");


      for (let i = 0; i < items.length; i++) {

         const title = items[i].getElementsByTagName("title")[0].textContent;

         const link = items[i].getElementsByTagName("link")[0].textContent;

         const content = items[i].getElementsByTagName("content:encoded")[0].textContent;

         const imgElement = (new DOMParser).parseFromString(content, "text/html").querySelector("img");

         const imgSrc = imgElement ? imgElement.getAttribute("src") : "#";


         const card = document.createElement("div");

         card.classList.add("card", "card-raised");

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


notificationShown = false;


function checkConnection() {

   setInterval(() => {

      if (navigator.onLine) {

         if (notificationShown) {

            notificationShown = false;

         }

      } else if (!notificationShown) {

         notificationShown = true;

         app.notification.create({

            icon: '<i class="icon f7-icons color-red">wifi_slash</i>',

            title: "No Internet Connection",

            titleRightText: "now",

            subtitle: " Connection to the server could not be established.",

            text: "Please check your internet connection and try again."

         }).open();

      }

   }, 1000);

}


function updateIcon(url) {

   document.querySelectorAll("#favicon").forEach(favicon => {

      favicon.href = url;

   });

   document.querySelectorAll("#faviconimg").forEach(faviconImg => {

      faviconImg.src = url;

   });

   localStorage.setItem("customicon", url);

}


function customicon(e, t) {

   const preloader = app.dialog.preloader("Applying icon");

   preloader.open();

   updateIcon(t);

   setTimeout(() => {

      preloader.close();

      window.location.reload();

   }, 2000);

}


function loadIcon() {

   const customIcon = localStorage.getItem("customicon");

   if (customIcon) {

      updateIcon(customIcon);

   }

}



document.addEventListener("DOMContentLoaded", () => {

   document.querySelectorAll(".ptr-content").forEach(element => {

      element.addEventListener("ptr:refresh", () => {

         window.location.reload();

      });

   });

   checkConnection();

});


if ("serviceWorker" in navigator) {

   navigator.serviceWorker.getRegistration().then(registration => {

      if (!registration) {

         navigator.serviceWorker.register("service-worker.js").then(() => {}).catch(() => {});

      }

   });

}


window.addEventListener("load", loadIcon);


if (window.navigator.standalone) {

   const preloaderDialog = app.dialog.preloader("Reloading data");

   preloaderDialog.open();

   setTimeout(() => {

      preloaderDialog.close();

   }, 2000);

} else {

   app.popup.open("#hs");

}


function initPhotoBrowser(urls) {

   const photos = urls.map(url => ({
      url
   }));

   return app.photoBrowser.create({

      photos,

      type: "standalone",

      navbar: true,

      toolbar: true,

      swiper: {

         zoom: true

      },

      on: {

         closed: function () {

            app.photoBrowserPopup = null;

         }

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

<a href="${item.get_link}" class="button button-fill button-round get inline external">GET↓</a>

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

      items: items,

      renderItem: function (item, index) {

         return createItemHtml(item);

      },

      searchAll: function (query, items) {

         const results = [];

         for (let i = 0; i < items.length; i++) {

            if (items[i].title.toLowerCase().includes(query.toLowerCase()) || query.trim() === "") {

               results.push(i);

            }

         }

         return results;

      },

      height: 90

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

      if (trollCountElement) {

         trollCountElement.textContent = trollstore.length;

      }

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

      if (appsCountElement) {

         appsCountElement.textContent = apps.length;

      }

      initVirtualList(".virtual-list", apps);

   } catch (error) {

      console.error("Could not load apps:", error);

   }

}


function addToFavorites(item) {

   const favEmptyElement = document.getElementById("favempty");

   if (favEmptyElement) {

      favEmptyElement.style.display = "none";

   }


   app.toast.create({

      icon: '<i class="f7-icons">heart_fill</i>',

      text: "Added to Favorites",

      position: "center",

      closeTimeout: 1500

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

      if (favEmptyElement) {

         favEmptyElement.style.display = "";

      }

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

   pagination: {

      el: ".swiper-pagination",

   },

   autoplay: {

      delay: 4000,

      disableOnInteraction: true

   }

});


function shareURL() {

   if (navigator.share) {

      navigator.share({

         title: "tweakra1n",

         text: "Take your iDevice experience to the next level with our awesome store!",

         url: "https://tweakrain.pages.dev/"

      });

   }

}


function reset() {

   app.actions.create({

      buttons: [

         [

            {

               text: "Reset Accent Color",

               onClick: function () {

                  updateThemeColor("#3E84F7");

               }

            },

            {

               text: "Erase All Data and Preferences",

               onClick: function () {

                  app.dialog.confirm(

                     "Please confirm if you want to erase all data and settings. This action cannot be undone. ",

                     "Reset",

                     () => {

                        var preloader = app.dialog.preloader("Resetting");

                        preloader.open();

                        setTimeout(() => {

                           document.cookie.split(";").forEach(cookie => {

                              var eqPos = cookie.indexOf("=");

                              var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

                              document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";

                           });

                           localStorage.clear();

                           preloader.close();

                           window.location.href = "app.html";

                        }, 2000);

                     }

                  );

               }

            }

         ],

         [

            {

               text: "Cancel",

               color: "red",

               onClick: function () {}

            }

         ]

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
