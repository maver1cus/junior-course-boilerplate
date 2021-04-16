export const getCategoriesFromUrl = () => {
  const url = new URL(window.location.href);

  return url.searchParams.get('category')
    ? url.searchParams.get('category').split(',')
    : null
}
