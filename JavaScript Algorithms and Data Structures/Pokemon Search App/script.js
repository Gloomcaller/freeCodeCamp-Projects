document.getElementById('search-button').addEventListener('click', function () {
    const searchInput = document.getElementById('search-input').value.trim().toLowerCase();
    if (!searchInput) {
        alert('Please enter a Pokémon name or ID.');
        return;
    }

    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon not found');
            }
            return response.json();
        })
        .then(data => {
            displayPokemonData(data);
        })
        .catch(error => {
            alert(error.message);
            clearPokemonData();
        });
});

function displayPokemonData(data) {
    document.getElementById('pokemon-name').textContent = data.name.toUpperCase();
    document.getElementById('pokemon-id').textContent = `#${data.id}`;
    document.getElementById('weight').textContent = data.weight;
    document.getElementById('height').textContent = data.height;

    const typesContainer = document.getElementById('types');
    typesContainer.innerHTML = '';
    data.types.forEach(type => {
        const typeElement = document.createElement('span');
        typeElement.textContent = type.type.name.toUpperCase();
        typesContainer.appendChild(typeElement);
    });

    document.getElementById('hp').textContent = data.stats[0].base_stat;
    document.getElementById('attack').textContent = data.stats[1].base_stat;
    document.getElementById('defense').textContent = data.stats[2].base_stat;
    document.getElementById('special-attack').textContent = data.stats[3].base_stat;
    document.getElementById('special-defense').textContent = data.stats[4].base_stat;
    document.getElementById('speed').textContent = data.stats[5].base_stat;

    const spriteContainer = document.getElementById('sprite-container');
    spriteContainer.innerHTML = '';
    const spriteImg = document.createElement('img');
    spriteImg.id = 'sprite';
    spriteImg.src = data.sprites.front_default;
    spriteContainer.appendChild(spriteImg);
}

function clearPokemonData() {
    document.getElementById('pokemon-name').textContent = '';
    document.getElementById('pokemon-id').textContent = '';
    document.getElementById('weight').textContent = '';
    document.getElementById('height').textContent = '';
    document.getElementById('types').innerHTML = '';
    document.getElementById('hp').textContent = '';
    document.getElementById('attack').textContent = '';
    document.getElementById('defense').textContent = '';
    document.getElementById('special-attack').textContent = '';
    document.getElementById('special-defense').textContent = '';
    document.getElementById('speed').textContent = '';
    document.getElementById('sprite-container').innerHTML = '';
}