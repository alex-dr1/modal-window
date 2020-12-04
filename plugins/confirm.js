$.confirm = function (options) {
  return new Promise((resolve, reject) => {
    modal = $.modal({
      title: options.title,
      closable: options.closable,
      content: options.content,
      width: options.width,
      footerButton: [
        {
          className: 'secondary',
          text: 'Отмена',
          handler: () => {
            reject()
            modal.close()
          },
        },
        {
          className: 'danger',
          text: 'Удалить',
          handler: () => {
            resolve()
            modal.close()
          },
        },
      ],
      onClose: () => modal.destroy(),
    })

    modal.open()
  })
}
