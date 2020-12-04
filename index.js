console.log('Running app...')

let fruits = [
  {
    id: 1,
    title: 'Apple',
    price: '500',
    url:
      'http://downloadtexture.com/assets/images/resources/182/fruit0011-3-l.jpg',
  },
  {
    id: 2,
    title: 'Bananas',
    price: '300',
    url:
      'https://img11.postila.ru/data/d0/a4/e0/b0/d0a4e0b032bba6f4021d6030c7d13a6b07a087cc2d626df6c60d7eecad9fb9df.jpg',
  },
  {
    id: 3,
    title: 'Kiwi',
    price: '400',
    url:
      'https://static.tildacdn.com/tild3866-3239-4261-b161-306437343663/s1200.jpg',
  },
]

const htmlOneCard = (fruit) => {
  return `
  <div class="card">
    <img src="${fruit.url}" class="card-img-top" alt="${fruit.title}">
    <div class="card-body">
      <h5 class="card-title">${fruit.title}</h5>
      <button class="btn btn-info show-more" data-btn="show" data-id="${fruit.id}">Show price</button>
      <button class="btn btn-danger delete" data-btn="delete" data-id="${fruit.id}">Delete</button>
    </div>
  </div>
`
}

function render() {
  const toHTML = fruits.map(htmlOneCard).join('')
  document.querySelector('#render').innerHTML = toHTML
}

modalShow = $.modal({
  title: 'Price',
  closable: true,
  content: '',
  width: '300px',
  footerButton: [
    {
      className: 'success',
      text: 'OK',
      handler: () => {
        modalShow.close()
      },
    },
  ],
})

const clickBtnHandler = (event) => {
  event.preventDefault()
  const id = event.target.dataset.id
  const btn = event.target.dataset.btn
  const fruit = fruits.find((fruit) => fruit.id === +id)

  if (btn === 'show') {
    modalShow.setContent(
      `<span>${fruit.title}  <strong>${fruit.price} Rub</strong></span>`
    )
    modalShow.open()
  } else if (btn === 'delete') {
    $.confirm({
      title: 'Вы уверены?',
      closable: false,
      content: `<span>Удаление: <strong>${fruit.title}</strong></span>`,
      width: '300px',
    })
      .then(() => {
        fruits = fruits.filter((f) => f.id !== fruit.id)
        render()
      })
      .catch(() => console.log('canceled'))
  }
}

document.addEventListener('click', clickBtnHandler)

render()
