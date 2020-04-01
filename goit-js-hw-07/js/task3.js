'use strict';

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imegeLIst = document.querySelector('#gallery');

function getImege(imegesArr) {
  let imegeItems = '';
  imegesArr.map(({ url, alt }) => {
    imegeItems += `<li><img src="${url}" alt="${alt}"></li>`;
  });
  return imegeItems;
}

imegeLIst.insertAdjacentHTML('beforeend', getImege(images));

function style() {
  imegeLIst.style.display = 'flex';
  imegeLIst.style.listStyle = 'none';

  let iteme = imegeLIst.querySelectorAll('img');
  function size(arr) {
    arr.forEach(el => {
      el.style.width = '300px';
      el.style.height = '200px';
    });
  }

  size(iteme);
}

style();