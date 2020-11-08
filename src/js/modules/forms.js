import checkNuminputs from "./checkNuminputs"

const forms = (state) => {
  const form = document.querySelectorAll('form')
  const input = document.querySelectorAll('input')
  const phoneInputs = document.querySelectorAll('input[name="user_phone"]')
  const windows = document.querySelectorAll('[data-modal]')

  checkNuminputs('input[name="user_phone"]')

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с Вами свяжемся',
    failure: 'Что-то пошло не так'
  }

  const postData = async (url, data) => {
    document.querySelector('.status').innerHTML = message.loading
    let res = await fetch(url, {
      method: 'POST',
      body: data
    })
    
    return await res.text()
  }

  const clearInputs = () => {
    input.forEach(item => {
      item.value = ''
    })
  }

  form.forEach(item => {
    item.addEventListener('submit', (event) => {
      event.preventDefault()

      let statusMessage = document.createElement('div')
      statusMessage.classList.add('status')
      item.appendChild(statusMessage)

      const formData = new FormData(item)

      if (item.getAttribute('data-calc') === 'end') {
        for(let key in state) {
          formData.append(key, state[key])
        }
      }

      postData('assets/server.php', formData)
        .then(result => {
          console.log(result);
          statusMessage.textContent = message.success
          setTimeout(() => {
            windows.forEach(item => {
              item.style.display = 'none'
            })
          }, 3100)
        })
        .catch(() => {
          statusMessage.textContent = message.failure
        })
        .finally(() => {
          clearInputs()
          setTimeout(() => {
            statusMessage.remove()
          }, 3000)
        })
    })
  })


}

export default forms