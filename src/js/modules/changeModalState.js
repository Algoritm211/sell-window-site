import checkNuminputs from "./checkNuminputs"

const changeModalState = (state) => {

  const windowForm = document.querySelectorAll('.balcon_icons_img')
  const windowWidth = document.querySelectorAll('#width')
  const windowHeight = document.querySelectorAll('#height')
  const windowType = document.querySelectorAll('#view_type')
  const windowProfile = document.querySelectorAll('.checkbox')


  checkNuminputs('#width')
  checkNuminputs('#height')

  function bindActionsToElems(event, elem, prop) {
    elem.forEach((item, index) => {
      item.addEventListener(event, () => {
        switch(item.nodeName) {
          case 'SPAN':
            state[prop] = index
            break
          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              if (index === 0) {
                state[prop] = 'cold'
              } else {
                state[prop] = 'warm'
              }
              elem.forEach((box, boxIndex) => {
                box.checked = false
                if (index === boxIndex) {
                  box.checked = true
                } 
              })

            } else {
              state[prop] = item.value
            }
            break
          case 'SELECT':
            state[prop] = item.value
            break
        }
        console.log(state);
        
      })
    })
  }


  bindActionsToElems('click', windowForm, 'form')
  bindActionsToElems('input', windowWidth, 'width')
  bindActionsToElems('input', windowHeight, 'height')
  bindActionsToElems('change', windowType, 'windowType')
  bindActionsToElems('change', windowProfile, 'windowProfile')

}

export default changeModalState