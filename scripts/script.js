
const setButtonColor = (id, color) => {
  document.querySelector(`#${id}`).style.backgroundColor = `${color === 'light' ? '#fff' : '#ccc'}`;
};

const playSound = (id, sound) => {
  new Audio(`audio/${sound}`).play();
};

const changeImage = (id, source) => {
  const elem = document.getElementById(id);
  elem.src = `images/${source}`;
};

const getIdentifiers = id => {
    switch (id) {
        case 'KeyA':
        case 'cat1':
            return { id: 1, button: 'aButton' }
        case 'KeyS':
        case 'cat2':
            return { id: 2, button: 'sButton' }
        case 'KeyD':
        case 'cat3':
            return { id: 3, button: 'dButton' }
        case 'KeyF':
        case 'cat4':
            return { id: 4, button: 'fButton' }
        case 'KeyG':
        case 'cat5':
            return { id: 5, button: 'gButton' }
        case 'KeyH':
        case 'cat6':
            return { id: 6, button: 'hButton' }
        case 'KeyZ':
        case 'cat7':
            return { id: 7, button: 'zButton' }
        case 'KeyX':
        case 'cat8':
            return { id: 8, button: 'xButton' }
        case 'KeyC':
        case 'cat9':
            return { id: 9, button: 'cButton' }
        case 'KeyV':
        case 'cat10':
            return { id: 10, button: 'vButton' }
        case 'KeyB':
        case 'cat11':
            return { id: 11, button: 'bButton' }
        default:
            return { id: null, button: null };
    }
};

document.addEventListener('keydown', event => {
    const identifiers = getIdentifiers(event.code);
    const id = identifiers.id;
    const button = identifiers.button;

    if (id && button) {
        changeImage(`cat${id}`, `cat${id}.2.png`);
        setButtonColor(button, 'dark');
        playSound(id, `note${id}.mp3`);
    }
});

document.addEventListener('keyup', event => {
    const identifiers = getIdentifiers(event.code);
    const id = identifiers.id;
    const button = identifiers.button;

    if (id && button) {
        changeImage(`cat${id}`, `catblink${id}.gif`);
        setButtonColor(button, 'light');
    }
});

document.querySelector('#wrapper').onmousedown = event => {
    const catId = event.target.id;

    if (event.button === 0 && catId) {
        const identifiers = getIdentifiers(catId);
        const id = identifiers.id;
        const button = identifiers.button;

        if (id && button) {
            event.target.src = `images/cat${id}.2.png`;
            setButtonColor(button, 'dark');
            playSound(1, `note${id}.mp3`)
        }
    }
}

document.querySelector('#wrapper').onmouseup = event => {
    const catId = event.target.id;

    if (event.button === 0 && catId) {
        const identifiers = getIdentifiers(catId);
        const id = identifiers.id;
        const button = identifiers.button;

        if (id && button) {
            event.target.src = `images/catblink${id}.gif`;
            setButtonColor(button, 'light');
        }
    }
}
