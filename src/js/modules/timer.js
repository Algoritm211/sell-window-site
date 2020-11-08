const timer = (id, deadline) => {

  const getTimeRemaining = (endtime) => {
    const time = Date.parse(endtime) - Date.parse(new Date())

    const seconds = Math.floor((time / 1000 ) % 60)
    const minutes = Math.floor((time / 1000 / 60) % 60)
    const hours = Math.floor((time / 1000 / 60 / 60) % 24)
    const days = Math.floor((time / 1000 / 60 / 60 / 24))

    return {
      'total': time,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    }
  }

  function addZero(number) {
    if (number <= 9) {
      return '0' + number
    } else {
      return number
    }
  }

  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector)
    const days = timer.querySelector('#days')
    const hours = timer.querySelector('#hours')
    const minutes = timer.querySelector('#minutes')
    const seconds = timer.querySelector('#seconds')
    const timerInterval = setInterval(updateClock, 1000)

    updateClock()
    function updateClock() {
      
      const time = getTimeRemaining(endtime)

      days.innerHTML = addZero(time.days)
      hours.innerHTML = addZero(time.hours)
      minutes.innerHTML = addZero(time.minutes)
      seconds.innerHTML = addZero(time.seconds)
      
      if (time.total <= 0) {
        days.innerHTML = '00'
        hours.innerHTML = '00'
        minutes.innerHTML = '00'
        seconds.innerHTML = '00'

        clearInterval(timerInterval)
      }

    } 
  }

  setClock(id, deadline)
}

export default timer