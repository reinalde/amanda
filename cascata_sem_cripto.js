
let loveLevel = 0;
let exploded = false;
let normalRain = true;

function createEmoji() {
    if (!normalRain) return;

    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    document.body.appendChild(emoji);

    const startX = Math.random() * (window.innerWidth - 40);
    emoji.style.left = `${startX}px`;
    emoji.style.top = `-50px`;

    // Calcular a duração da animação com base na altura da tela
    const screenHeight = window.innerHeight; // Altura da tela
    const animationDuration = (screenHeight / 100) + 1 + Math.random() * 2; // A duração será proporcional à altura da tela
    emoji.style.animationDuration = `${animationDuration}s`;

    emoji.style.fontSize = `${window.innerWidth < 600 ? 15 + Math.random() * 10 : 20 + Math.random() * 20}px`;

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
        document.getElementById('loveBarEmoji').style.fontSize = 12 + loveLevel / 10 + 'px';
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
            document.body.appendChild(heart);

            const startX = Math.random() * (window.innerWidth - 40);
            heart.style.left = `${startX}px`;
            heart.style.top = `-50px`;

            // Duração da animação para os corações grandes
            const animationDuration = (window.innerHeight / 250) + 0 + Math.random() * 3;
            heart.style.animationDuration = `${animationDuration}s`;

            heart.style.fontSize = `${window.innerWidth < 600 ? 30 + Math.random() * 15 : 50 + Math.random() * 30}px`;

            // Impedir seleção de texto
            heart.style.userSelect = 'none';
            heart.style.pointerEvents = 'none'; // Impede a interação com o mouse (clicar)

            setTimeout(() => {
                heart.remove();
            }, animationDuration * 1000);
        }, i * 100);
    }
}

setInterval(createEmoji, 300);