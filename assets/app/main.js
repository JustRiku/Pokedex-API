

window.onload = () => {
    renderPoke();
    renderPoke2();
    let i = 1;
    for (i = 1; i <= 151; i++) {
        let fetch1 = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(res => res.json())
            .then(res => {
                let list = document.querySelector('#poke');
                let name = res.name;
                let sprites = res.sprites;

                let id = res.id;
                let item = `<li class="pokemon" id="${id}">
            <img class="sprite" src="${sprites.front_default}" alt="${name}" />
            <span class="number-poke">N.º ${id}</span>
            <span class="name">${name}</span>
            <button class="fav-btn"><img id="${id}" class="fav-icon" src="assets/img/heart-regular-white.png" alt="fav-icon"></button>
            <button class="capt-btn"><img id="${id}" class="capt-icon" src="assets/img/pokeball-black-icon.png" alt="capt-icon"></button>
            </li>`;
                list.innerHTML += item;
            })
            .then(() => {
                document.querySelectorAll('.pokemon').forEach(item => {
                    item.addEventListener('click', changeImage);
                    item.addEventListener('dblclick', openDetail);
                });
            })
            .then(() => {
                let pokeList = new List('poke-list', {
                    valueNames: ['name', 'number-poke']
                });
            })
            .then(() => {
                let btnAdd = document.querySelectorAll('.fav-icon').forEach(item => {
                    item.addEventListener('click', addPoke, false);
                });
                let btnAdd2 = document.querySelectorAll('.capt-icon').forEach(item => {
                    item.addEventListener('click', addPoke2, false);
                });

            })
    };
}

let changeImage = (e) => {
    if (e.target.id >= 1) {
        document.querySelector('.poke-img').src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.target.id}.png`;
    }
};
let openDetail = (e) => {
    if (e.target.id >= 1) {
        window.open(`assets/pages/detail.html?id=${e.currentTarget.id}`, '_self');
    }
}

let loader = document.querySelector('.loader');

let fadeOut = () => {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
}
setInterval(fadeOut, 2000);

let topBtn = document.getElementById('topBtn');

let poke = document.getElementById('poke')

let topFunction = () => {
    poke.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
let botFunction = () => {
    poke.scrollTop = 9999999999;
    document.documentElement.scrollTop = 9999999999;
}

let favBtn = document.querySelector('.count-fav');
let favList = document.querySelector('.fav-list');
let pokeList = document.getElementById('poke');
favBtn.addEventListener('click', e => {
    if (favList.style.display == "none") {
        pokeList.style.display = "none";
        captList.style.display = "none";
        favList.style.display = "block";
        favBtn.style.backgroundColor = "#FB4C4C";
    } else {
        captList.style.display = "none";
        favList.style.display = "none";
        pokeList.style.display = "block";
        favBtn.style.backgroundColor = "#414141";
    }
})

let captList = document.querySelector('.capt-list');
let captBtn = document.querySelector('.count-capt');
captBtn.addEventListener('click', e => {
    if (captList.style.display == "none") {
        pokeList.style.display = "none";
        favList.style.display = "none";
        captList.style.display = "block";
        captBtn.style.backgroundColor = "#FB4C4C";
    } else {
        captList.style.display = "none";
        favList.style.display = "none";
        pokeList.style.display = "block";
        captBtn.style.backgroundColor = "#414141";
    }
})
let db = new PouchDB('pokefav');
let pokesFav;
let addPoke = (e) => {
    e.target.src = "assets/img/heart-solid-white.png"
    let pokeId = e.target.id;
    let nextPoke = pokesFav.length + 1;
    let doc = {
        "_id": `${nextPoke}`,
        "sprite": `<img class="sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e.target.id}.png">`,
        "number": pokeId.value
    };
    db.put(doc);
    pokeId.value = "";
    sprite = "";
    renderPoke();

}
let renderPoke = () => {
    favList.innerHTML = "<h2>Lista de favoritos</h2>"
    db.allDocs({include_docs: true }, function (err, docs) {
        if (err) {
            return console.log(err);
        } else {
            pokesFav = docs.rows;
            pokesFav.forEach(element => {
                let poke = `
                <div>
                <span class="sprite">${element.doc.sprite}</span>
                </div>`
                let numberCount = favList.children.length;
                favList.innerHTML += poke;
                let countFav = document.querySelector('.count-fav-number').innerHTML = numberCount;
            })
        }
    })
}


let db2 = new PouchDB('pokecapt');
let pokesCapt;
let addPoke2 = (e) => {
    e.target.src = "assets/img/pokeball-white-icon.png"
    let pokeId = e.target.id;
    let nextPoke = pokesCapt.length + 1;
    let doc = {
        "_id": `${nextPoke}`,
        "sprite": `<img class="sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e.target.id}.png">`,
        "number": pokeId.value
    };
    db2.put(doc);
    pokeId.value = "";
    sprite = "";
    renderPoke2();
    console.log(e.target.id);
}
let renderPoke2 = () => {
    captList.innerHTML = "<h2>Lista de capturados</h2>"
    db.allDocs({include_docs: true }, function (err, docs) {
        if (err) {
            return console.log(err);
        } else {
            pokesCapt = docs.rows;
            pokesCapt.forEach(element => {
                let poke = `
                <div>
                <span class="sprite">${element.doc.sprite}</span>
                </div>`
                let numberCount = captList.children.length;
                captList.innerHTML += poke;
                let countCapt = document.querySelector('.count-capt-number').innerHTML = numberCount;
            })
        }
    })
}

// let allData = Promise.all([fetch1, fetch2, fetch3]);

// allData.then((res) => console.log(res));
