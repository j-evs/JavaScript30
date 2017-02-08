const selectElementByKey = (tag, keyCode) => {
    return document.querySelector(`${tag}[data-key="${keyCode}"]`);
}

const playSound = (pressedKeyCode) => {
    let targetAudio = selectElementByKey('audio', pressedKeyCode);
    if (!targetAudio) return;
    targetAudio.currentTime = 0;
    targetAudio.play();
}

const handleClassChange = (eventType, pressedKeyCode) => {
    let targetKey = selectElementByKey('div', pressedKeyCode);
    if (!targetKey) return;
    eventType === 'keydown' ?
        targetKey.classList.add('key_highlight') :
        targetKey.classList.remove('key_highlight');
}

const handleKeyUp = (eventType, pressedKeyCode) => {
    handleClassChange(eventType, pressedKeyCode);
}

const handleKeyDown = (eventType, pressedKeyCode) => {
    playSound(pressedKeyCode);
    handleClassChange(eventType, pressedKeyCode);
}

const handleKeyPress = (event) => {
    let eventType = event.type;
    let pressedKeyCode = event.keyCode;
    eventType === 'keydown' ?
        handleKeyDown(eventType, pressedKeyCode) :
        handleKeyUp(eventType, pressedKeyCode);
}

window.addEventListener('keydown', handleKeyPress);
window.addEventListener('keyup', handleKeyPress);
