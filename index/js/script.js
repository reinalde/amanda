
//*********************************************************//
//  ETAPA: Fotos da memória
//*********************************************************//
const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('fotos-memoria-button');
const previewContainer = document.getElementById('fotos-preview');
const fotosCount = document.getElementById('fotosCount');

const smartphonePreview = document.getElementById('smartphone-preview');

let filesArray = [];
var MAX_FILES = 8;

function updateButtonState() {
    uploadBtn.disabled = filesArray.length === 0;
}

function updateFotosCount() {
    // necessário para atualizar a qnt de fotos do slide
    // sempre iniciar com 1 o slide
    totalItems = filesArray.length === 0 ? 1 : filesArray.length;

    if (filesArray.length == MAX_FILES) {
        document.getElementById("file_hidden").classList.add("hidden");
    } else {
        // mostrar novamente o botão para add fotos
        document.getElementById("file_hidden").classList.remove("hidden");
    }

    filesArray.length > 0 ? document.getElementById("slide_show").classList.remove("hidden") : document.getElementById("slide_show").classList.add("hidden");

    fotosCount.innerHTML = filesArray.length > 0 ? `<b>${filesArray.length}</b> imagem(s) selecionada(s)<br>` : '';
}

fileInput.addEventListener('change', (event) => {
    const newFiles = Array.from(event.target.files);

    if (filesArray.length + newFiles.length > MAX_FILES) {
        // alert(`Você pode enviar no máximo ${MAX_FILES} imagens!`);
        return;
    }

    newFiles.forEach((file) => {
        filesArray.push(file);

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            const imageURL = e.target.result;

            const div_principal = document.createElement('div');
            div_principal.classList.add('card-fotos');

            const div_dois = document.createElement('div');
            div_dois.classList.add('image-upload');

            const img = document.createElement('img');
            img.src = imageURL;

            const label = document.createElement('label');

            const label_div = document.createElement('div');
            label_div.classList.add('upload-icon');
            label_div.textContent = "+";

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'X';
            removeBtn.classList.add('remove-btn');

            removeBtn.addEventListener('click', () => {
                filesArray = filesArray.filter(f => f !== file);
                div_principal.remove();
                div_smartphone_preview.remove();
                updateFileInput();
                updateFotosCount();
                updateButtonState();
            });

            var div = div_principal.appendChild(div_dois);

            div.appendChild(removeBtn);
            div.appendChild(label).appendChild(label_div);
            div.appendChild(img);

            previewContainer.appendChild(div_principal);


            const div_smartphone_preview = document.createElement('div');
            div_smartphone_preview.classList.add('card');

            const div_smartphone_img = document.createElement('img');
            div_smartphone_img.classList.add('card__image');
            div_smartphone_img.src = imageURL;

            div_smartphone_preview.appendChild(div_smartphone_img);
            smartphonePreview.appendChild(div_smartphone_preview);

        };
    });

    updateFileInput();
    updateFotosCount();
    updateButtonState();
});
function updateFileInput() {
    const dataTransfer = new DataTransfer();
    filesArray.forEach(file => dataTransfer.items.add(file));
    fileInput.files = dataTransfer.files;
}
//*********************************************************//
//*********************************************************//






//*********************************************************//
//  CONTADOR
//*********************************************************//
var dataInicial = '';

function atualizarContador() {
    // const dataInicial = "2019-04-06 16:30";
    var inicio = new Date(dataInicial);
    const agora = new Date();
    const diferencaMs = agora - inicio;

    if (diferencaMs <= 0) {
        document.getElementById("contador").innerText = "A data inicial é no futuro!";
        return;
    }

    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    if (dias < 0) {
        meses--;
        const ultimoDiaDoMes = new Date(inicio.getFullYear(), inicio.getMonth(), 0).getDate();
        dias += ultimoDiaDoMes;
    }

    const diferencaMsCorrigida = agora - new Date(inicio.getFullYear(), inicio.getMonth(), inicio.getDay(), inicio.getHours(), inicio.getMinutes());
    const horas = Math.floor((diferencaMsCorrigida % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencaMsCorrigida % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencaMsCorrigida % (1000 * 60)) / 1000);

    document.getElementById("contador").innerText =
        `${anos > 0 ? anos + ' anos,' : ''} ${meses > 0 ? meses + ' meses,' : ''} ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

// atualizarContador();
// setInterval(atualizarContador, 1000);
//*********************************************************//
//*********************************************************//






//*********************************************************//
//  ETAPA: Nome da memória
//*********************************************************//
function removerAcentosECaracteresEspeciais(texto) {
    return texto.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-zA-Z0-9 &]/g, "");
}

document.getElementById("nome-memoria").addEventListener("input", function () {
    this.value = removerAcentosECaracteresEspeciais(this.value);
});

const inputField = document.getElementById('nome-memoria');
const submitButton = document.getElementById('nome-memoria-button');

inputField.addEventListener('input', function () {
    const inputLength = inputField.value.trim().length;

    if (inputLength >= 3) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

document.getElementById('nome-memoria').addEventListener('input', function () {
    let barra_url = (document.getElementById('nome-memoria').value.trim().replace(/\s+/g, '-')).replace(/&/g, 'e');
    document.getElementById('barra-url-nome').textContent = barra_url || '';
});
//*********************************************************//
//*********************************************************//







//*********************************************************//
//  ETAPA: Data da memória
//*********************************************************//
const dataInput = document.getElementById('data_memoria');
const horaInput = document.getElementById('hora_memoria');
const submitBtn = document.getElementById('data-memoria-button');

function validateDateTime() {
    const selectedDate = new Date(dataInput.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Define para início do dia

    const isDateValid = selectedDate < today; // Verifica se a data é anterior a hoje
    const isTimeFilled = horaInput.value !== ""; // Verifica se o usuário escolheu uma hora

    submitBtn.disabled = !(isDateValid && isTimeFilled);

    if (isDateValid && isTimeFilled) {
        document.getElementsByClassName("titulo")[0].classList.remove("hidden");

        dataInicial = `${dataInput.value} ${horaInput.value}`;
        atualizarContador();
        var intervalo = setInterval(atualizarContador, 1000);
    } else {
        document.getElementsByClassName("titulo")[0].classList.add("hidden");
        clearInterval(intervalo);
    }
}

dataInput.addEventListener('input', function () { validateDateTime() });
horaInput.addEventListener('input', function () { validateDateTime() });
//*********************************************************//
//*********************************************************//



//*********************************************************//
//  ETAPA: Mensagem da memória
//*********************************************************//
const textarea = document.getElementById('mensagem-memoria');
const ButtonMensagem = document.getElementById('mensagem-memoria-button');

textarea.addEventListener('input', function () {
    const inputLength = textarea.value.trim().length;

    if (inputLength >= 3) {
        document.getElementsByClassName("mensagem")[0].classList.remove("hidden");

        ButtonMensagem.disabled = false;
    } else {

        document.getElementsByClassName("mensagem")[0].classList.add("hidden");

        ButtonMensagem.disabled = true;
    }
});

document.getElementById('mensagem-memoria').addEventListener('input', function () {
    let mensagem = (document.getElementById('mensagem-memoria').value.replace(/</g, '&lt;')).replace(/\n/g, '<br>');
    document.getElementById('mensagem').innerHTML = mensagem || '';
});
//*********************************************************//
//*********************************************************//



//*********************************************************//
//  ETAPA: Emoji da memória
//*********************************************************//
const emojiInput_1 = document.getElementById('emoji1');
const emojiInput_2 = document.getElementById('emoji2');
const emojiInput_3 = document.getElementById('emoji3');
const emojiLoveBat = document.getElementById('loveBarEmoji');
const submitBtnEmoji = document.getElementById('emoji-button');

var intervaloEmoji = null;

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === "childList" || mutation.type === "characterData") {
            var Emoji1Valid = emojiInput_1.innerText !== "";
            var Emoji2Valid = emojiInput_2.innerText !== "";
            var Emoji3Valid = emojiInput_3.innerText !== "";

            submitBtnEmoji.disabled = !(Emoji1Valid && Emoji2Valid && Emoji3Valid);

            if (Emoji1Valid && Emoji2Valid && Emoji3Valid) {
                emojis = [emojiInput_1.innerText, emojiInput_2.innerText, emojiInput_3.innerText];
                emoji_grande = emojiInput_1.innerText;
                emojiLoveBat.innerText = emojiInput_1.innerText;

                clearInterval(intervaloEmoji);

                intervaloEmoji = setInterval(createEmoji, 500);
            } else {
                
            }

            if (Emoji1Valid){
                emojiLoveBat.innerText = emojiInput_1.innerText;
            }

        }
    });
});

const config = { childList: true, subtree: true, characterData: true };
observer.observe(emojiInput_1, config);
observer.observe(emojiInput_2, config);
observer.observe(emojiInput_3, config);
//*********************************************************//
//*********************************************************//


//*********************************************************//
//  APRESENTAR TELAS DAS ETAPAS
//*********************************************************//
document.addEventListener("click", function (event) {

    if (event.target.tagName === "BUTTON") {

        let buttonId = event.target.id;
        let buttonEtapa = event.target.getAttribute("data-etapa");
        let buttonEtapaAtual = event.target.getAttribute("data-etapa-atual");
        let buttonProximaEtapa = event.target.getAttribute("data-proxima-etapa");
        let buttonText = event.target.innerText;

        switch (buttonEtapa) {
            case 'etapa':

                document.getElementsByClassName("etapa-" + buttonEtapaAtual)[0].classList.add("hidden");
                document.getElementsByClassName("etapa-" + buttonEtapaAtual)[0].classList.remove("ativa");

                document.getElementsByClassName("etapa-" + buttonProximaEtapa)[0].classList.remove("hidden");
                document.getElementsByClassName("etapa-" + buttonProximaEtapa)[0].classList.add("ativa");

                break;

            default:
                break;
        }
    }

});
//*********************************************************//
//*********************************************************//
