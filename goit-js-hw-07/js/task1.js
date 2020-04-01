'use strict';

const categoriesList = document.querySelectorAll('.item');

console.log(`В списке ${categoriesList.length} категории.`);

const showCategories = allCategories => {
  allCategories.forEach(item => {
    const itemsTitle = item.querySelector('h2').textContent;
    const itemsLength = item.querySelectorAll('li').length;
    console.log(
      `Категория: ${itemsTitle}
Количество элементов: ${itemsLength}`,
    );
  });
};
showCategories(categoriesList);