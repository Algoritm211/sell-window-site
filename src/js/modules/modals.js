const modals = () => {

  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true, display = 'block') {

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
  
        modal.style.display = display
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

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = display
      document.body.style.overflow = ''
    }, time)
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
  bindModal('.phone_link', '.popup', '.popup .popup_close')
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close')
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false)
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false)
  // showModalByTime('.popup', 60000)
}

export default modals