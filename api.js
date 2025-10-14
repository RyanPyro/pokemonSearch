const form = document.getElementById("pokemon-search-form");
const searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-button");
const contentBox = document.getElementById("content-box");
const randomButton = document.getElementById("randomizer-button");

searchButton.addEventListener("click", async (e) => {
    e.preventDefault();
    let pokemon = searchBar.value.trim().toLowerCase();

    try {
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (!res.ok) {
            throw new Error("Pokemon not found");
        }

        let data = await res.json();
        let abilities = data.abilities;
        const abilitiesList = abilities.map(a => a.ability.name)   // extract each abilities' name
            .join(', '); // join all of the abilities with commas
        let weight = data.weight;
        contentBox.innerHTML = `
        <h1><strong>${data.name}</strong></h1>
        <p>Abilities: ${abilitiesList}</p>
        <p>Weight: ${weight} </p>
        <img src="${data.sprites.front_default}" />

        `;
        console.log(data);
    } catch (error) {
        contentBox.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
});

randomButton.addEventListener("click" , async (e) =>{
    e.preventDefault();
     try {
        pokemonChosen = Math.ceil(Math.random() * 1010)
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonChosen}`);
        if (!res.ok) {
            throw new Error("Pokemon not found");
        }
        
        let data = await res.json();
        let abilities = data.abilities;
          const abilitiesList = abilities.map(a => a.ability.name)   // extract each abilities' name
            .join(', '); // join all of the abilities with commas
        let weight = data.weight;
        contentBox.innerHTML = `
        <h1><strong>${data.name}</strong></h1>
        <p>Abilities: ${abilitiesList}</p>
        <p>Weight: ${weight} </p>
        <img src="${data.sprites.front_default}" />

        `;
        console.log(data);
    } catch (error) {
        contentBox.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
})

