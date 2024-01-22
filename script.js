let bundesländer = [
    {
        "name": "Baden-Württemberg",
        "population": 11.1,
        "url": "https://www.baden-wuerttemberg.de/de/startseite/"
    },
    {
        "name": "Bayern",
        "population": 13.1,
        "url": "https://www.bayern.de/"
    },
    {
        "name": "Berlin",
        "population": 3.7,
        "url": "https://www.berlin.de/"
    },
    {
        "name": "Brandenburg",
        "population": 2.5,
        "url": "https://www.brandenburg.de/"
    },
    {
        "name": "Bremen",
        "population": 0.7,
        "url": "https://www.bremen.de/"
    },
    {
        "name": "Hamburg",
        "population": 1.8,
        "url": "https://www.hamburg.de/"
    },
    {
        "name": "Hessen",
        "population": 6.3,
        "url": "https://www.hessen.de/"
    },
    {
        "name": "Mecklenburg-Vorpommern",
        "population": 1.6,
        "url": "https://www.mecklenburg-vorpommern.de/startseite/"
    },
    {
        "name": "Niedersachsen",
        "population": 8,
        "url": "https://www.niedersachsen.de/startseite/"
    },
    {
        "name": "Nordrhein-Westfalen",
        "population": 17.9,
        "url": "https://www.land.nrw/"
    },
    {
        "name": "Rheinland-Pfalz",
        "population": 4.1,
        "url": "https://www.rlp.de/de/startseite/"
    },
    {
        "name": "Saarland",
        "population": 1,
        "url": "https://www.saarland.de/DE/home/home_node.html"
    },
    {
        "name": "Sachsen",
        "population": 4.1,
        "url": "https://www.sachsen.de/"
    },
    {
        "name": "Sachsen-Anhalt",
        "population": 2.2,
        "url": "https://www.sachsen-anhalt.de/startseite/"
    },
    {
        "name": "Schleswig-Holstein",
        "population": 2.9,
        "url": "https://www.schleswig-holstein.de/DE/Home/home_node.html"
    },
    {
        "name": "Thüringen",
        "population": 2.1,
        "url": "https://thueringen.de/"
    }
];

let letters = ['A', 'B', 'D', 'E', 'G', 'L', 'M', 'N', 'R', 'S', 'T', 'V', 'W'];

function loadContent(j) {
    let states = document.getElementById('content');
    states.innerHTML = '';

    for (let i = 0; i < bundesländer.length; i++) {
        const content = bundesländer[i];

        states.innerHTML += contentTemplate(content);
    }
    loadLetters(j)
}

function loadLetters() {
    let searchLetters = document.getElementById('letter-container');
    searchLetters.innerHTML = '';

    for(let j = 0; j < letters.length; j++) {
    searchLetters.innerHTML += `
    <div class="letter">${letters[j]}</div>`;
    }
    searchLetters.innerHTML += `
    <div class="load hidden" id="refresh" onclick="returnToStart()">Neu Laden</div>`;
}

function filterByLetter(selectedLetter) {
    // Filtere Bundesländer, deren Name mit dem ausgewählten Buchstaben beginnt
    const filteredStates = bundesländer.filter(state => state.name.charAt(0).toUpperCase() === selectedLetter);

    // Zeige die gefilterten Bundesländer an
    displayFilteredStates(filteredStates);
}

function displayFilteredStates(filteredStates) {
    let states = document.getElementById('content');
    states.innerHTML = '';

    // Anzeige der gefilterten Bundesländer
    filteredStates.forEach(content => {
        states.innerHTML += `
        <a target="_blank" class="states-link" href="${content.url}">
        <div class="states-container">
            <div class="states-names">${content.name}</div>
            <div class="population-container">${content.population} Millionen</div>
        </div>
        </a>`;
    });
    showButton()
}

// Beispielaufruf für einen Klick auf den Buchstaben 'A'
document.getElementById('letter-container').addEventListener('click', function(event) {
    if (event.target.classList.contains('letter')) {
        const selectedLetter = event.target.innerText;
        filterByLetter(selectedLetter);
    }
});

function showButton() {
    let refreshButton = document.getElementById('refresh');
    refreshButton.classList.remove('hidden');
}

function returnToStart() {
    let newContent = document.getElementById('content');
    newContent.innerHTML = '';
    loadContent()
    loadLetters()
}



// Templates
function contentTemplate(content) {
    return `
    <a target="_blank" class="states-link" href="${content['url']}"S>
    <div class="states-container">
        <div class="states-names">${content['name']}</div>
        <div class="population-container">${content['population']} Millionen</div>
    </div>
    </a>`;
}