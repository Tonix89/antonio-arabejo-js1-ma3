const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=4390d626db184d72ad15a7e1ce8b6df6" ;

const filterGames = document.querySelector(".results");

async function getGames() {

    const response = await fetch(url);

    const results = await response.json();

    const games = results.results;

    filterGames.innerHTML = "";

   for (let i = 0; i < games.length; i++){

        const gameNames = (games[i].name);

        const gameRatings = (games[i].rating);

        const gameTags = (games[i].tags);

        const countTags = gameTags.length;

        if ( i === 8 ) {
            break;
        }

    filterGames.innerHTML += `<div class="gameContainer"> <div> Name: ${gameNames} </div> <div> Ratings: ${gameRatings} </div> <div> Number of Tags: ${countTags} </div> </div>`;

    }

}

getGames();