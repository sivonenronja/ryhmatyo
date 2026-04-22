// Kesäviikkojen tiedot + linkit viikkosivuille
const weekData = {
  1: { 
    title: "Retki Mustikkamaalle", 
    text: ".", 
    link: "viikko1.html" 
  },

  2: { 
    title: "YLEX Pop festivaali", 
    text: "tekstiä.", 
    link: "viikko2.html" 
  },

  3: { 
    title: "Nuuksion retki", 
    text: "Luontopolku + eväät.", 
    link: "viikko3.html" 
  },

  4: { 
    title: "Helsinki Samba Carneval", 
    text: "-", 
    link: "viikko4.html" 
  },

  5: { 
    title: "Jalkapallo MM-kisat", 
    text: "Kisa katsomo kotona.", 
    link: "viikko5.html" 
  },

  6: { 
    title: "Helsinki PRIDE", 
    text: "Pride kulkue.", 
    link: "viikko6.html" 
  },

  7: { 
    title: "Seinäkiipeilyä", 
    text: "-", 
    link: "viikko7.html" 
  },

  8: { 
    title: "Korkeasaaren eläintarha", 
    text: "-", 
    link: "viikko8.html" 
  },

  9: { 
    title: "Dallapén pihakirppis", 
    text: "Aleksis Kiven kadulla.", 
    link: "viikko9.html" 
  },

  10: { 
    title: "Laguuni Keilis", 
    text: "Vesipuisto aktivitteettejä Keilaniemessä.", 
    link: "viikko10.html" 
  },

  11: { 
    title: "Ranta päivä", 
    text: "-", 
    link: "viikko11.html" 
  },

  12: { 
    title: "Kumpulan maauimailman", 
    text: "-", 
    link: "viikko12.html" 
  },

  13: { 
    title: "Linnanmäki", 
    text: "-", 
    link: "viikko13.html" 
  }
};

// Mikä viikko on menossa (voit muuttaa)
const currentWeek = 3;

// Luo 13 luukkua automaattisesti
const calendar = document.getElementById("calendar");

for (let i = 1; i <= 13; i++) {
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
