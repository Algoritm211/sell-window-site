import changeModalState from './modules/changeModalState'
import forms from './modules/forms'
import images from './modules/images'
import modals from './modules/modals'
import tabs from './modules/tabs'
import timer from './modules/timer'
import './slider'

document.addEventListener('DOMContentLoaded', () => {

  const modalState = {
    form: 0,
    windowType: 'tree',
  }

  changeModalState(modalState)
  modals(modalState)
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active')
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click')
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block')
  forms(modalState)
  timer('#timer', '2020-12-31')

  images()
})
