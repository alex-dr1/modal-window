$.modal = function (options) {
  let _$modal = null

  function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('wmodal')
    modal.innerHTML = `    
    <div class="wmodal-overlay">
      <div class="wmodal-window">
        <div class="wmodal-header">
          <span class="wmodal-title">Title</span>
          <span class="wmodal-close">&times;</span>
        </div>
        <div class="wmodal-body">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="wmodal-footer">
          <button>Cancel</button>
          <button>OK</button>
        </div>
      </div>
    </div>
    `
    document.body.appendChild(modal)
    return modal
  }

  function close() {
    if (_$modal === null) return
    if (!(_$modal instanceof HTMLDivElement)) return
    _$modal.classList.remove('open')
  }

  function open() {
    _$modal = _createModal()
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
  title: string
  closable: boolean
  content: string
  width: string (400px)
  destroy(): void -удалить из дом-дерева
  ---------
  setContent(html: string): void
  onClose():void
  onOpen():void
  beforeClose(): boolean

*/
