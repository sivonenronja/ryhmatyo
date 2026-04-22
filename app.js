// Kesäviikkojen tiedot + linkit viikkosivuille
let weekData = {
  21: { 
    title: "Retki Mustikkamaalle", 
    text: ".", 
    link: "viikko1.html" 
  },

  22: { 
    title: "YLEX Pop festivaali", 
    text: "tekstiä.", 
    link: "viikko2.html" 
  },

  23: { 
    title: "Nuuksion retki", 
    text: "Luontopolku + eväät.", 
    link: "viikko3.html" 
  },

  24: { 
    title: "Helsinki Samba Carneval", 
    text: "-", 
    link: "viikko4.html" 
  },

  25: { 
    title: "Jalkapallo MM-kisat", 
    text: "Kisa katsomo kotona.", 
    link: "viikko5.html" 
  },

  26: { 
    title: "Helsinki PRIDE", 
    text: "Pride kulkue.", 
    link: "viikko6.html" 
  },

  27: { 
    title: "Seinäkiipeilyä", 
    text: "-", 
    link: "viikko7.html" 
  },

  28: { 
    title: "Korkeasaaren eläintarha", 
    text: "-", 
    link: "viikko8.html" 
  },

  29: { 
    title: "Dallapén pihakirppis", 
    text: "Aleksis Kiven kadulla.", 
    link: "viikko9.html" 
  },

  30: { 
    title: "Laguuni Keilis", 
    text: "Vesipuisto aktivitteettejä Keilaniemessä.", 
    link: "viikko10.html" 
  },

  31: { 
    title: "Ranta päivä", 
    text: "-", 
    link: "viikko11.html" 
  },

  32: { 
    title: "Kumpulan maauimailman", 
    text: "-", 
    link: "viikko12.html" 
  },

  33: { 
    title: "Linnanmäki", 
    text: "-", 
    link: "viikko13.html" 
  }
};

// Mikä viikko on menossa (voit muuttaa)
let currentWeek = 23; // tämä pitää muokata aktiiviseksi kun kalenteri palautetaan

// Luo 13 luukkua automaattisesti
const calendar = document.getElementById("calendar");

for (let i = 21; i <= 33; i++) {
  const door = document.createElement("div");
  door.classList.add("door");
  door.dataset.week = i;
  door.textContent = `Viikko ${i}`;

  // Lukitse tulevat viikot
  if (i > currentWeek) {
    door.classList.add("locked");
  }

  // Klikkaus
  door.addEventListener("click", () => openDoor(i));
  calendar.appendChild(door);
}

// Ohjaa oikealle viikkosivulle
function openDoor(week) {
  if (week > currentWeek) {
    alert("Tämä viikko ei ole vielä alkanut!");
    return;
  }

  // Siirrytään viikkoX.html -sivulle
  window.location.href = weekData[week].link;
}
