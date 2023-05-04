class Country {
    constructor(name, lang, greeting, colors, flagUrl) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flagUrl = flagUrl;
    }

    displayColors() {
        document.body.style.backgroundColor = this.colors[0];
        document.getElementById("Color2").style.backgroundColor = this.colors[1];
        document.getElementById("Color3").style.backgroundColor = this.colors[2];
    }

    displayInfo() {
        document.getElementById("CountryName").textContent = this.name;
        document.getElementById("OfficialLanguage").textContent = "Official language: " + this.lang;
        document.getElementById("HelloWorld").textContent = "Hello world: " + this.greeting;
        document.getElementById("FlagImage").src = this.flagUrl;
    }
}

let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"], "https://www.pngmart.com/files/17/USA-Flag-PNG-Transparent-Image.png");
let mexico = new Country("Mexico", "Spanish", "Hola Mundo!", ["red", "white", "green"], "https://www.pngmart.com/files/22/Mexico-Flag-PNG-Isolated-Image.png");
let algeria = new Country("Algeria", "Arabic and Berber", "marhaban bialealam", ["blue", "yellow", "red"], "https://www.pngmart.com/files/22/Algeria-Flag-PNG-Isolated-Photos.png");

function switchCountry() {
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") {
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }

    country.displayColors();
    country.displayInfo();
}
