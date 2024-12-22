class ChristmasSongs {
    constructor() {
        this.songs = [
            {
                title: "All I Want for Christmas Is You",
                artist: "Mariah Carey",
                year: 1994,
                description: "Ikoniczny hit świąteczny, który stał się nieodłączną częścią świątecznych playlist."
            },
            {
                title: "Last Christmas",
                artist: "Wham!",
                year: 1984,
                description: "Klasyk opowiadający o miłości i rozczarowaniu podczas Świąt Bożego Narodzenia."
            },
            {
                title: "Jingle Bells",
                artist: "James Lord Pierpont",
                year: 1857,
                description: "Jedna z najstarszych i najbardziej znanych piosenek świątecznych."
            },
            {
                title: "White Christmas",
                artist: "Bing Crosby",
                year: 1942,
                description: "Nostalgiczna ballada o marzeniu o białych Świętach."
            },
            {
                title: "Santa Claus Is Coming to Town",
                artist: "Various Artists",
                year: 1934,
                description: "Popularna piosenka o odwiedzinach Świętego Mikołaja."
            },
            {
                title: "Feliz Navidad",
                artist: "José Feliciano",
                year: 1970,
                description: "Radosna piosenka łącząca język angielski i hiszpański."
            },
            {
                title: "Let It Snow! Let It Snow! Let It Snow!",
                artist: "Dean Martin",
                year: 1945,
                description: "Świąteczna piosenka o zimowej atmosferze."
            },
            {
                title: "Rockin' Around the Christmas Tree",
                artist: "Brenda Lee",
                year: 1958,
                description: "Wesoły przebój idealny na świąteczne przyjęcia."
            },
            {
                title: "It's the Most Wonderful Time of the Year",
                artist: "Andy Williams",
                year: 1963,
                description: "Optymistyczny hymn o radości Świąt."
            },
            {
                title: "Rudolph the Red-Nosed Reindeer",
                artist: "Gene Autry",
                year: 1949,
                description: "Historia słynnego renifera z czerwonym nosem."
            },
            {
                title: "Happy Xmas (War Is Over)",
                artist: "John Lennon & Yoko Ono",
                year: 1971,
                description: "Świąteczna piosenka o pokoju na świecie."
            },
            {
                title: "Wonderful Christmastime",
                artist: "Paul McCartney",
                year: 1979,
                description: "Lekka i wesoła melodia świąteczna."
            },
            {
                title: "Do They Know It's Christmas?",
                artist: "Band Aid",
                year: 1984,
                description: "Piosenka charytatywna na rzecz głodujących w Etiopii."
            },
            {
                title: "Holly Jolly Christmas",
                artist: "Burl Ives",
                year: 1964,
                description: "Ciepła i klasyczna świąteczna melodia."
            },
            {
                title: "Blue Christmas",
                artist: "Elvis Presley",
                year: 1957,
                description: "Ballada o samotności podczas Świąt."
            },
            {
                title: "The Christmas Song",
                artist: "Nat King Cole",
                year: 1946,
                description: "Romantyczna piosenka o nastroju świątecznym."
            },
            {
                title: "Carol of the Bells",
                artist: "Various Artists",
                year: 1914,
                description: "Tradycyjna piosenka o szybkim rytmie i chórze."
            },
            {
                title: "Little Drummer Boy",
                artist: "Harry Simeone Chorale",
                year: 1958,
                description: "Historia chłopca grającego na bębenku dla Jezusa."
            },
            {
                title: "Baby, It's Cold Outside",
                artist: "Frank Loesser",
                year: 1944,
                description: "Dialog w formie piosenki o zimowym romansie."
            },
            {
                title: "Silver Bells",
                artist: "Bing Crosby & Carol Richards",
                year: 1950,
                description: "Nostalgiczny utwór o świątecznym mieście."
            }
        ];
    }

    getAllSongs() {
        return this.songs;
    }

    getSongsByYear(year) {
        return this.songs.filter(song => song.year === year);
    }

    findSongByTitle(title) {
        return this.songs.find(song => song.title.toLowerCase() === title.toLowerCase());
    }
}

export default ChristmasSongs;
