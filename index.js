console.log('Running app...')

modal = $.modal({
  title: 'Модальное окно',
  closable: true,
  content: `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam
  odit blanditiis reiciendis aliquam vero unde sequi, similique quos
  asperiores soluta ratione animi excepturi, impedit hic recusandae
  reprehenderit nisi eligendi tenetur.</p>`,
  width: '600px',
  footerButton: [
    {
      className: 'primary',
      text: 'Cancel',
      handler: () => {
        modal.close()
      },
    },
    {
      className: 'success',
      text: 'OK',
      handler: () => {
        modal.close()
      },
    },
  ],
})

modal.open()
