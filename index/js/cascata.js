
let loveLevel = 0;
let exploded = false;
let normalRain = true;

const tamanho_tela = document.querySelector('.cascata');
const divWidth = tamanho_tela.offsetWidth;
const divHeight = tamanho_tela.offsetHeight;

document.documentElement.style.setProperty('--div-height', `${divHeight - 40}px`);

function createEmoji() {
    if (!normalRain) return;

    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    // document.body.appendChild(emoji);
    document.querySelector('.cascata').appendChild(emoji);

    const startX = Math.random() * (divWidth - 20);
    emoji.style.left = `${startX}px`;
    emoji.style.top = `100px`;

    // Calcular a duração da animação com base na altura da tela
    const screenHeight = divHeight // Altura da tela
    const animationDuration = (screenHeight / 100) + 1 + Math.random() * 2; // A duração será proporcional à altura da tela
    emoji.style.animationDuration = `${animationDuration}s`;

    emoji.style.fontSize = `${divWidth < 600 ? 15 + Math.random() * 10 : 20 + Math.random() * 20}px`;

    emoji.addEventListener('click', () => {
        increaseLove();
        emoji.remove();
    });

    setTimeout(() => {
        emoji.remove();
    }, animationDuration * 1000); // Remove o emoji após o tempo de animação
}

function increaseLove() {
    if (exploded) return;

    if (loveLevel < 100) {
        loveLevel += 10;
        if (loveLevel > 100) loveLevel = 100;
        document.getElementById('loveBar').style.height = `${loveLevel}%`;
        document.getElementById('loveBarEmoji').style.height = `${loveLevel}%`;
        document.getElementById('loveBarEmoji').style.fontSize = 12 + loveLevel / 18 + 'px';
    }

    if (loveLevel === 100) {
        removeIcone();
        explodeLove();
    }
}

function removeIcone() {
    document.querySelectorAll('.emoji').forEach(el => el.remove());
}

function explodeLove() {
    exploded = true;
    normalRain = false;
    document.getElementById('loveBar').style.background = '#ff4d6d';
    rainBigHearts();

    setTimeout(() => {
        document.getElementById('loveBar').style.display = 'none';
        loveLevel = 0;
        document.getElementById('loveBar').style.height = '0%';
        document.getElementById('loveBar').style.display = 'block';
        document.getElementById('loveBar').style.background = 'linear-gradient(to top, #ffcc00 , #ff4d6d)';
        document.getElementById('loveBarEmoji').style.height = '20px';
        document.getElementById('loveBarEmoji').style.fontSize = '12px';
        exploded = false;
        normalRain = true;
    }, 6000);
}

function rainBigHearts() {
    for (let i = 0; i < 70; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('emoji');
            heart.innerText = emoji_grande;
            // document.body.appendChild(heart);
            document.getElementsByClassName('cascata')[0].appendChild(heart);

            const startX = Math.random() * (divWidth - 40);
            heart.style.left = `${startX}px`;
            heart.style.top = `100px`;

            // Duração da animação para os corações grandes
            const animationDuration = (divHeight / 250) + 0 + Math.random() * 3;
            heart.style.animationDuration = `${animationDuration}s`;

            heart.style.fontSize = `${divWidth < 600 ? 30 + Math.random() * 15 : 50 + Math.random() * 30}px`;

            // Impedir seleção de texto
            heart.style.userSelect = 'none';
            heart.style.pointerEvents = 'none'; // Impede a interação com o mouse (clicar)

            setTimeout(() => {
                heart.remove();
            }, animationDuration * 1000);
        }, i * 100);
    }
}

// setInterval(createEmoji, 300);