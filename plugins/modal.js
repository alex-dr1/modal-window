$.modal = function () {
  const close = function () {
    const wm = document.body.classList.contains('wmodal')
    console.log(wm)
  }

  function open() {}

  return {
    close: close,
    open: open,
  }
}
