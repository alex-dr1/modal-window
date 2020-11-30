$.modal = function (options) {
  let _$modal = null

  function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('wmodal')
    modal.insertAdjacentHTML(
      'afterbegin',
      `    
    <div class="wmodal-overlay">
      <div class="wmodal-window" style="width: ${options.width || '300px'};">
        <div class="wmodal-header">
          <span class="wmodal-title">${options.title || 'Заголовок'}</span>
          ${options.closable ? '<span class="wmodal-close">&times;</span>' : ''}
        </div>
        <div class="wmodal-body">
          ${options.content || ''}
        </div>
        <div class="wmodal-footer">
          <button>Cancel</button>
          <button>OK</button>
        </div>
      </div>
    </div>
    `
    )
    document.body.appendChild(modal)
    return modal
  }

  function close() {
    if (_$modal === null) return
    _$modal.classList.remove('open')
  }

  function open() {
    _$modal = _createModal(options)
    _$modal.classList.add('open')
  }

  function destroy() {
    document.body.removeChild(_$modal)
  }

  return {
    close,
    open,
    destroy,
  }
}

/*
options
  +title: string
  +closable: boolean
  +content: string
  +width: string (400px)
  footerButtons
  destroy(): void -удалить из дом-дерева
  ---------
  setContent(html: string): void
  onClose():void
  onOpen():void
  beforeClose(): boolean

*/
