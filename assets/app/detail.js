let detail;
let obtainParam = (url) => {
    let urlParam = String(url.match(/\?+.+/));
    urlParam = urlParam.replace("?id=", "");
    return urlParam;
}
let param = obtainParam(document.URL);

window.onload = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${param}`)
        .then(res => res.json())
        .then(res => {
            let listDetail = document.querySelector('#poke-detail');
            let name = res.name;
            let sprites = res.sprites;
            let id = res.id;
            let abilities = res.abilities;
            let types = res.types;
            let height = res.height;
            let weight = res.weight;
            let fem1 = sprites.front_female;
            let fem2 = sprites.back_female;
            if (fem1 == null || fem2 == null) {
                fem1 = "../img/pokeball-black-icon.png";
                fem2 = "../img/pokeball-black-icon.png";
            }
            let pokeName = document.querySelector('.poke-name');
            pokeName.innerHTML = `${name} N.º${id}`
            let item = `<h2 class="section">Habilidades</h2>
            <ul class="abilities">
            </ul>
            <h2 class="section">Características</h2>
            <ul>
                <li><span class="no-capit">${height}0 cm</span><img src="../img/pokeball-black-icon.png"></li>
                <li><span class="no-capit">${weight}00 g</span><img src="../img/pokeball-black-icon.png"></li>
            </ul>
            <h2 class="section">Sprites</h2>
            <section class="sprites">
                <div class="minibox"><img src="${sprites.front_default}"/></div>
                <div class="minibox"><img src="${sprites.back_default}"></div>
                <div class="minibox"><img src="${fem1}"></div>
                <div class="minibox"><img src="${fem2}"></div>
            </section>
            <h2 class="section">Tipos</h2>
            <ul class="types">
            </ul>`;
            listDetail.innerHTML += item;
            let abilitiesTotal = document.querySelector('.abilities');
            abilities.forEach((item) => {
                let item2 = `<li><span>${item.ability.name}</span><img src="../img/pokeball-black-icon.png"></li>`;
                abilitiesTotal.innerHTML += item2;
            });
            let typesTotal = document.querySelector('.types');
            types.forEach((item) => {
                let item3 = `<li><span>${item.type.name}</span><img src="../img/pokeball-black-icon.png"></li>`;
                typesTotal.innerHTML += item3;
            })
        })
        .then(() => {
            document.querySelector('.poke-img').src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Number(param)}.png`;
        })
};

let next = document.getElementById('next');
let prev = document.getElementById('prev');

next.addEventListener('click', e => {
    if (param == 386) {
        param = 1;
    } else {
        param++;
    }
    console.log(param);

    fetch(`https://pokeapi.co/api/v2/pokemon/${param}`)
        .then(res => res.json())
        .then(res => {
            let listDetail = document.querySelector('#poke-detail');
            let name = res.name;
            let sprites = res.sprites;
            let id = res.id;
            let abilities = res.abilities;
            let types = res.types;
            let height = res.height;
            let weight = res.weight;
            let fem1 = sprites.front_female;
            let fem2 = sprites.back_female;
            if (fem1 == null || fem2 == null) {
                fem1 = "../img/pokeball-black-icon.png";
                fem2 = "../img/pokeball-black-icon.png";
            }
            let pokeName = document.querySelector('.poke-name');
            pokeName.innerHTML = `${name} N.º${id}`
            let item = `<h2 class="section">Habilidades</h2>
            <ul class="abilities">
            </ul>
            <h2 class="section">Características</h2>
            <ul>
                <li><span class="no-capit">${height}0 cm</span><img src="../img/pokeball-black-icon.png"></li>
                <li><span class="no-capit">${weight}00 g</span><img src="../img/pokeball-black-icon.png"></li>
            </ul>
            <h2 class="section">Sprites</h2>
            <section class="sprites">
                <div class="minibox"><img src="${sprites.front_default}"/></div>
                <div class="minibox"><img src="${sprites.back_default}"></div>
                <div class="minibox"><img src="${fem1}"></div>
                <div class="minibox"><img src="${fem2}"></div>
            </section>
            <h2 class="section">Tipos</h2>
            <ul class="types">
            </ul>`;
            listDetail.innerHTML = '';
            listDetail.innerHTML += item;
            let abilitiesTotal = document.querySelector('.abilities');
            abilities.forEach((item) => {
                let item2 = `<li><span>${item.ability.name}</span><img src="../img/pokeball-black-icon.png"></li>`;
                abilitiesTotal.innerHTML += item2;
            });
            let typesTotal = document.querySelector('.types');
            types.forEach((item) => {
                let item3 = `<li><span>${item.type.name}</span><img src="../img/pokeball-black-icon.png"></li>`;
                typesTotal.innerHTML += item3;
            })
        })
        .then(() => {
            document.querySelector('.poke-img').src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Number(param)}.png`;
        })
});

prev.addEventListener('click', e => {
    if (param == 1) {
        param = 386;
    } else {
        param--;
    }
    console.log(param);

    fetch(`https://pokeapi.co/api/v2/pokemon/${param}`)
        .then(res => res.json())
        .then(res => {
            let listDetail = document.querySelector('#poke-detail');
            let name = res.name;
            let sprites = res.sprites;
            let id = res.id;
            let abilities = res.abilities;
            let types = res.types;
            let height = res.height;
            let weight = res.weight;
            let fem1 = sprites.front_female;
            let fem2 = sprites.back_female;
            if (fem1 == null || fem2 == null) {
                fem1 = "../img/pokeball-black-icon.png";
                fem2 = "../img/pokeball-black-icon.png";
            }
            let pokeName = document.querySelector('.poke-name');
            pokeName.innerHTML = `${name} N.º${id}`
            let item = `<h2 class="section">Habilidades</h2>
            <ul class="abilities">
            </ul>
            <h2 class="section">Características</h2>
            <ul>
                <li><span class="no-capit">${height}0 cm</span><img src="../img/pokeball-black-icon.png"></li>
                <li><span class="no-capit">${weight}00 g</span><img src="../img/pokeball-black-icon.png"></li>
            </ul>
            <h2 class="section">Sprites</h2>
            <section class="sprites">
                <div class="minibox"><img src="${sprites.front_default}"/></div>
                <div class="minibox"><img src="${sprites.back_default}"></div>
                <div class="minibox"><img src="${fem1}"></div>
                <div class="minibox"><img src="${fem2}"></div>
            </section>
            <h2 class="section">Tipos</h2>
            <ul class="types">
            </ul>`;
            listDetail.innerHTML = '';
            listDetail.innerHTML += item;
            let abilitiesTotal = document.querySelector('.abilities');
            abilities.forEach((item) => {
                let item2 = `<li><span>${item.ability.name}</span><img src="../img/pokeball-black-icon.png"></li>`;
                abilitiesTotal.innerHTML += item2;
            });
            let typesTotal = document.querySelector('.types');
            types.forEach((item) => {
                let item3 = `<li><span>${item.type.name}</span><img src="../img/pokeball-black-icon.png"></li>`;
                typesTotal.innerHTML += item3;
            })
        })
        .then(() => {
            document.querySelector('.poke-img').src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Number(param)}.png`;
        })
});

let arrow = document.getElementById('arrow');
arrow.addEventListener('click', e => {
    window.open('../../index.html', '_self');
})