export default function (ctx) {
  let width = 800
  let height = 800
  let guess = 0
  let message = 'Guess The Letter From a (lower) to z (higher)'
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ]
  let today = new Date()
  let letterToGuess = ''
  let higherOrLower = ''
  let lettersGuessed = []
  let gameOver = false

  initGame()

  function initGame () {
    let letterIndex = Math.floor(Math.random() * letters.length)
    letterToGuess = letters[letterIndex]
    guess = 0
    lettersGuessed = []
    gameOver = false
    window.addEventListener('keydown', keyDown, true)
    drawScreen()
  }

  function keyDown (e) {
    let letterPressed = String.fromCharCode(e.keyCode)
    console.log('%c e.keyCode:', 'color:#0f0', e.keyCode)
    console.log('%c letterPressed:', 'color:#0f0', letterPressed)
    letterPressed = letterPressed.toLowerCase()
    guess++
    lettersGuessed.push(letterPressed)
    if (letterPressed === letterToGuess) {
      gameOver = true
    } else {
      let letterIndex = letters.indexOf(letterToGuess)
      let guessIndex = letters.indexOf(letterPressed)
      if (guessIndex < 0) {
        higherOrLower = 'That is not a letter'
      } else if (guessIndex > letterIndex) {
        higherOrLower = 'lower'
      } else {
        higherOrLower = 'higher'
      }
    }
    drawScreen()
  }

  function drawScreen () {
    // ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = '#ffa'
    ctx.fillRect(0, 0, width, height)

    ctx.strokeStyle = '#000'
    ctx.strokeRect(5, 5, width - 10, height - 10)

    ctx.textBaseline = 'top'

    ctx.fillStyle = '#000'
    ctx.font = '10px Sans-Serif'
    ctx.fillText(today, 150, 10)

    ctx.fillStyle = '#f00'
    ctx.font = '14px Sans-Serif'
    ctx.fillText(message, 125, 30)

    ctx.fillStyle = '#109910'
    ctx.font = '16px Sans-Serif'
    ctx.fillText(`${guess}guesses`, 215, 50)

    ctx.fillStyle = '#000'
    ctx.font = '16px Sans-Serif'
    ctx.fillText(`Higher Or Lower:${higherOrLower}`, 150, 125)

    ctx.fillStyle = '#f00'
    ctx.font = '16px Sans-Serif'
    ctx.fillText(`letters Guessed:${lettersGuessed.toString()}`, 10, 260)
    console.log(lettersGuessed)
    if (gameOver) {
      ctx.fillStyle = '#F00'
      ctx.font = '40px Sans-Serif'
      ctx.fillText(`You Got It`, 150, 180)
    }
  }
}
