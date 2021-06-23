function roll(event) {
  const trigger = event.target
  const triggerDirection = () => (trigger.classList.contains("roll-left")? -3: 3)
  const elementToScroll = trigger.parentNode.children[2]

  let interval = setInterval( () => {
      elementToScroll.scrollLeft += triggerDirection()
  },1)
  trigger.addEventListener('mouseout', () => {
      stopRoll(interval)
  })
}

function stopRoll(interval) {
  clearInterval(interval)
}

function addListenersOnTriggers() {
  const triggers = document.getElementsByClassName('trigger')
  for( trigger of triggers ) {
      trigger.addEventListener('mouseenter', roll, false)
  }
}
addListenersOnTriggers()