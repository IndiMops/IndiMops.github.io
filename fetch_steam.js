const url = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=7205E83E0A3799707AFF8342DDDC15CF&steamid=76561198978332316&format=json';

async function fetch_time() {
    try {
        const response = await fetch(url);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

fetch_time();
