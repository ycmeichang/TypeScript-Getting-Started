function startGame () {
  const messagesElement = document.getElementById('messages')
  messagesElement!.innerText = 'Starting a new game...'
}

document.getElementById('startGame')!.addEventListener('click', startGame)
