document.addEventListener('DOMContentLoaded', () => {
  const modalWrapper = document.querySelector('.modalWrapper')
  const modalButtons = document.querySelectorAll('[data-modal-button]')
  const modals = document.querySelectorAll('[data-modal]')


  function hideAllModals() {
    modals.forEach(modal => {
      modal.classList.add('hidden')
    })
  }

  modalButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modalWrapper.classList.remove('wrapperHidden')
      hideAllModals()
      const clickedModalButton = btn.getAttribute('data-modal-button')
      const matchedModal = document.querySelector(`[data-modal=${clickedModalButton}]`)
      matchedModal.classList.remove('hidden')
    })
  })

  /* CLOSE ICON */
  const closeIcons = document.querySelectorAll('.modalWrapper__modal-closeIcon')
  closeIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      modalWrapper.classList.add('wrapperHidden')
      setTimeout(() => {
        hideAllModals()
      }, 200)
    })
  })

  /* CLOSE AT BG CLICK */
  modalWrapper.addEventListener('click', e => {
    if (!e.target.closest('.modalWrapper__modal')) {
      modalWrapper.classList.add('wrapperHidden')
      setTimeout(() => {
        hideAllModals()
      }, 200)
    }
  })
})
