$.modal = function (options) {
  if (!options) return false

  const _noop = () => {}

  const _createFooterButton = (footerButton) => {
    const wmodalFooter = document.createElement('div')
    wmodalFooter.classList.add('wmodal-footer')
    const idxFocus = footerButton.length - 1
    footerButton.forEach((btn, index) => {
      const button = document.createElement('button')
      button.classList.add('btn')
      button.classList.add(`btn-${btn.className || 'secondary'}`)
      button.classList.add('ml3')
      button.textContent = btn.text || 'none'
      button.onclick = btn.handler || _noop
      if (idxFocus === index) button.autofocus = true
      wmodalFooter.appendChild(button)
    })
    return wmodalFooter
  }

  const clickHandler = (event) => {
    if (event.target.dataset.close !== undefined) {
      _modal.close()
    }
  }

  const _$modal = _createModal(options)

  function _createModal(options) {
    const wmodal = document.createElement('div')
    wmodal.classList.add('wmodal')
    wmodal.insertAdjacentHTML(
      'afterbegin',
      `    
    <div class="wmodal-overlay" data-close>
      <div class="wmodal-window" style="width: ${options.width || '300px'};">
        <div class="wmodal-header">
          <span class="wmodal-title">${options.title || 'Заголовок'}</span>
          ${
            options.closable
              ? '<span class="wmodal-close" data-close>&times;</span>'
              : ''
          }
        </div>
        <div class="wmodal-body">
          ${options.content || ''}
        </div>
      </div>
    </div>
    `
    )

    options.footerButton &&
      wmodal
        .querySelector('.wmodal-window')
        .insertAdjacentElement(
          'beforeend',
          _createFooterButton(options.footerButton)
        )

    wmodal.addEventListener('click', clickHandler)

    document.body.appendChild(wmodal)

    return wmodal
  }

  const _modal = {
    close() {
      _$modal.classList.remove('open')
    },
    open() {
      _$modal.classList.add('open')
    },
  }

  return Object.assign(_modal, {
    destroy() {
      _$modal.removeEventListener('click', clickHandler)
      _$modal.parentElement.removeChild(_$modal)
    },
    setContent(html) {
      _$modal.querySelector('.wmodal-body').innerHTML = html
    },
  })
}
