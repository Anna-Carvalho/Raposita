const raposa = document.querySelector('.raposa');
const spike = document.querySelector('.spike');

const jump = () => {
    raposa.classList.add('jump');

    setTimeout(() => {
        raposa.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const spikePosition = spike.offsetLeft;
    const raposaPosition = +window.getComputedStyle(raposa).bottom.replace('px', '');
    const aviso =  document.getElementById('morreu')

    if(spikePosition <= 135 && raposaPosition < 70){
        spike.style.animation = 'none'
        raposa.style.animation = 'none'
        raposa.src= "img/caveira.png"
        raposa.style.width = "80px"
        spike.style.left = `${spikePosition}px`;
        aviso.innerHTML = "Você morreu, aperte F5 para jogar de novo";
    }
})

document.addEventListener('keydown', jump);
