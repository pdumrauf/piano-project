const pianoKeys = document.querySelectorAll('.key')

function playSound(sound) {
  const click = 'click al pianito'
  console.log(click)

  new Audio(sound).play()
}

pianoKeys.forEach((key, i) => {
  const num = i < 9 ? i + (i + 1) : (i + 1)
  const keySound = `piano-keys-audio/key${num}.mp3`
  
  key.addEventListener('click', () => playSound(keySound))
})