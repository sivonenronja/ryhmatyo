const weekData = {
  21: { title: "Retki Mustikkamaalle", text: "Tule nauttimaan luonnosta ja hyvästä seurasta", icon: "🏕️", link: "https://en.wikipedia.org/wiki/Mustikkamaa" },
  22: { title: "YLEX Pop festivaali", text: "Kesän paras festivaali", icon: "🎵", link: "https://yle.fi/aihe/a/20-10009356" },
  23: { title: "Nuuksion retki", text: "Luontopolku + eväät", icon: "🌲", link: "https://www.luontoon.fi/fi/kohteet/nuuksion-kansallispuisto" },
  24: { title: "Helsinki Samba Carneval", text: "Let's Samba", icon: "🥁", link: "https://www.helsinkisambacarnaval.fi/" },
  25: { title: "Jalkapallo MM-kisat", text: "Kisa katsomo kotona", icon: "⚽", link: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026" },
  26: { title: "Helsinki PRIDE", text: "Pride kulkue", icon: "🌈", link: "https://pride.fi/helsinki-pride-2026/" },
  27: { title: "Seinäkiipeilyä", text: "Haasta itseäsi kiipeilemällä", icon: "🧗", link: "https://kiipeilykeskus.com/" },
  28: { title: "Korkeasaaren eläintarha", text: "Tutustu ainutlaatuisiin eläimiin", icon: "🦒", link: "https://korkeasaari.fi/vieraile/saapuminen/" },
  29: { title: "Dallapén pihakirppis", text: "Uusia löytöjä kesälle", icon: "🛍️", link: "https://www.stadissa.fi/tapahtumat/95853/aleksis-kiven-kadun-kirppis" },
  30: { title: "Laguuni Keilis", text: "Vesipuisto aktivitteettejä Keilaniemessä", icon: "💧", link: "https://laguuniin.fi/keilis/" },
  31: { title: "Ranta päivä", text: "Rentoudu auringon alla", icon: "🏖️", link: "https://www.hel.fi/fi/kulttuuri-ja-vapaa-aika/ulkoilu-puistot-ja-luontokohteet/uimarannat/helsingin-uimarannat/hietarannan-uimaranta" },
  32: { title: "Kumpulan maauimala", text: "Tule nauttimaan kesäpäivästä maauimalassa", icon: "🏊", link: "c:\Users\tatut\OneDrive - Haaga-Helia Oy Ab\Pictures\Screenshots\Näyttökuva 2026-04-28 132802.png" },
  33: { title: "Linnanmäki", text: "Kesän huipennus Lintsillä", icon: "🎢", link: "https://www.linnanmaki.fi/" }
};

// const now = new Date();
// const startOfYear = new Date(now.getFullYear(), 0, 1);
// const weekNumber = Math.ceil(((now - startOfYear) / 86400000 + startOfYear.getDay() + 1) / 7);
// const currentWeek = weekNumber; 
const currentWeek = 25;

const grid = document.getElementById("grid");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");
const okBtn = document.getElementById("okBtn");

for (let i = 21; i <= 33; i++) {
  const door = document.createElement("div");
  door.className = "door" + (i > currentWeek ? " locked" : "");
  const data = weekData[i];
  door.innerHTML = `<span class="door-icon">${i > currentWeek ? "🔒" : data.icon}</span><span>Viikko ${i}</span>`;
  door.addEventListener("click", () => {
    if (i > currentWeek) return;
    document.getElementById("modalWeek").textContent = "Viikko " + i;
    document.getElementById("modalWeek").className = "week-" + i;
    document.getElementById("modalTitle").textContent = data.title;
    document.getElementById("modalTitle").className = "week-" + i;
   document.getElementById("modalText").textContent = data.text === "-" ? "Lisätietoja tulossa!" : data.text;
   document.getElementById("modalText").className = "week-" + i;
      if (data.link) {
  document.getElementById("modalLink").style.display = "inline-block";
  document.getElementById("modalLink").href = data.link;
      } else {
  document.getElementById("modalLink").style.display = "none";
      }
    overlay.classList.add("active");
    document.getElementById("modal").className = "week-" + i;
  });
  grid.appendChild(door);
}

function closeModal() {
  overlay.classList.remove("active");
  document.getElementById("modal").className = "";
  document.getElementById("modalText").className = "";
   document.getElementById("modalTitle").className = "";
   document.getElementById("modalWeek").className = "";
}

closeBtn.addEventListener("click", closeModal);
okBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", e => {
  if (e.target === overlay) closeModal();
});