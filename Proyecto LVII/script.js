function playSound(event) {
    const img = event.target;
    const soundFile = img.getAttribute('data-sound');

    if (soundFile) {
        const audio = new Audio(soundFile);
        audio.play().catch(error => {
            console.error('Error al reproducir el sonido:', error);
        });
    } else {
        console.warn('No se encontró un archivo de sonido para:', img);
    }
}

document.querySelectorAll('.hover-sound').forEach(item => {
    item.addEventListener('mouseover', playSound);
});


