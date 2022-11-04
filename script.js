const pianoKeys = document.querySelectorAll('.key')

function playSound(sound) {
  new Audio(sound).play()
}

pianoKeys.forEach((key, i) => {
  const num = i < 9 ? '0' + (i + 1) : (i + 1)
  const keySound = `piano-keys-audio/key${num}.mp3`

  key.addEventListener('click', () => playSound(keySound))
})