import { splitEvery } from 'csssr-school-utils/src';

export const getCategoriesFromUrl = () => {
  const categories = getParamFromUrl('category');

  return categories
    ? categories.split(',')
    : null
}

export const getParamFromUrl = (param) => {
  const url = new URL(window.location.href);

  return url.searchParams.get(param);
}

export const getFilteredProducts = (minPrice, maxPrice, discount, selectedCategories, products) => {
  return products.filter((product) => {
    return product.price >= minPrice &&
      product.price <= maxPrice &&
      product.discount >= discount &&
      selectedCategories.some((category) => product.category.indexOf(category) >= 0)
  })
}

export const getPaginationProducts = (minPrice, maxPrice, discount, selectedCategories, products, currentPage, countProductsToPage) => {
  const filteredProducts = splitEvery(
    countProductsToPage,
    getFilteredProducts(minPrice, maxPrice, discount, selectedCategories, products)
  );

  currentPage = currentPage > filteredProducts.length ? filteredProducts.length : currentPage;

  return {
    products: filteredProducts,
    currentPage
  }
}

export const get = (param, value) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(param, value);

  window.history.pushState(
    {...window.history.state, category: value},
    param,
    '?' + searchParams.toString());
}

export const getUniqueArray = (array) => {
  const result = [];

  for (var i = 0; i < array.length; i++) {
    if (result.indexOf(array[i]) === -1) {
      result.push(array[i]);
    }
  }

  return result;
}
