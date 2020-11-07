const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
  const header = document.querySelector(headerSelector)
  const tabs = document.querySelectorAll(tabSelector)
  const content = document.querySelectorAll(contentSelector)

  function hideTabContent(params) {
    content.forEach(item => {
      item.style.display = 'none'
    })

    tabs.forEach(tab => {
      tab.classList.remove(activeClass)
    })
  }

  function showTabContent(currentItem = 0) {
    content[currentItem].style.display = display
    tabs[currentItem].classList.add(activeClass)

  }

  hideTabContent()
  showTabContent()

  header.addEventListener('click', (event) => {
    const target = event.target

    if (target && target.classList.contains(tabSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
      tabs.forEach((item, index) => {
        if (target === item || target.parentNode === item) {
          hideTabContent()
          showTabContent(index)
        }
      })
    }
  })
}

export default tabs