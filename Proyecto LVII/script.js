function playSound(event) {
    const img = event.target;
    const soundFile = img.getAttribute('data-sound');

    const audio = new Audio(soundFile);
    audio.play();
}

function stopSound(event) {
    // Optionally, you could stop the sound if needed
}

document.querySelectorAll('.hover-sound').forEach(item => {
    item.addEventListener('mouseover', playSound);
    item.addEventListener('mouseout', stopSound);
});
