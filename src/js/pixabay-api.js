const API_KEY = '47705929-ee1ce2532f2b45b66a6f43010';

function getImg(searchValue, page = 1, perPage = 15) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page, // Numer strony do paginacji
    per_page: perPage, // Ilość obrazków na stronę
  });

  return fetch(`https://pixabay.com/api/?${searchParams.toString()}`).then(
    res => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      return res.json();
    }
  );
}

export { getImg };
