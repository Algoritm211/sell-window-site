const modals = (state) => {

  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay=true) {

    const trigger = document.querySelectorAll(triggerSelector)
    const modal = document.querySelector(modalSelector)
    const close = document.querySelector(closeSelector)
    const windows = document.querySelectorAll('[data-modal]')

    trigger.forEach(item => {
      item.addEventListener('click', (event) => {
        if (event.target) {
          event.preventDefault()
        }

        windows.forEach(item => {
          item.style.display = 'none'
        })
  
        modal.style.display = 'block'
        document.body.style.overflow = 'hidden'
        // document.body.classList.add('modal-open')
      })
    })

    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none'
      })
      modal.style.display = 'none'
      document.body.style.overflow = ''
      // document.body.classList.add('modal-open')
    })

    modal.addEventListener('click', (event) => {
      if (event.target && event.target === modal && closeClickOverlay) {
        modal.style.display = 'none'
        document.body.style.overflow = ''
        // document.body.classList.add('modal-open')
        windows.forEach(item => {
          item.style.display = 'none'
        })
      }
    })
  }

  function checkStateData(buttonWrapperSelector, property) {
    const buttonWrapper = document.querySelectorAll(buttonWrapperSelector)
    const message = {
      height: 'Не указана высота',
      width: 'Не указана длина',
      windowProfile: 'Не указан тип остекления',
    }
    let statusMessage = document.createElement('div')
    statusMessage.classList.add('status')
    console.log('sdf');

    buttonWrapper.forEach(item => {
      item.addEventListener('mouseenter', (event) => {
          if (!state.hasOwnProperty(property)) {
            item.appendChild(statusMessage)
            statusMessage.textContent = message[property]
            item.children[0].setAttribute('disabled', true)
          } else {
            item.children[0].removeAttribute('disabled')
            statusMessage.remove()
          }
      })
    })
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = display
      document.body.style.overflow = ''
    }, time)
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
  bindModal('.phone_link', '.popup', '.popup .popup_close')
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close')
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false, true, '.popup_calc_content')
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false)
  // showModalByTime('.popup', 60000)
  checkStateData('.check-data-form', 'height')
  checkStateData('.check-data-form', 'width')
  checkStateData('.check-window-profile-form', 'windowProfile')

}

export default modals