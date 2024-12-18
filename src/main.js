import { getImg } from './js/pixabay-api';
import { createCardsMarkup } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const fetchUsersBtn = document.querySelector('button[type=submit]');
const imgs = document.querySelector('.images-div');
const loaderClass = document.querySelector('.loaderClass');

// Dodanie przycisku Load More
const loadMoreBtn = document.createElement('button');
loadMoreBtn.textContent = 'Load more';
loadMoreBtn.style.display = 'none'; // Ukryty na początku
loadMoreBtn.classList.add('load-more');
imgs.insertAdjacentElement('afterend', loadMoreBtn);

let searchValue = '';
let currentPage = 1;
const perPage = 15; // Ilość obrazków na stronę

fetchUsersBtn.addEventListener('click', handleSearch);
loadMoreBtn.addEventListener('click', handleLoadMore);

function handleSearch(evt) {
  evt.preventDefault();
  const searchInput = document.querySelector('input[name="search"]');
  const notFoundTextEl = document.querySelector('.not-found-img');

  searchValue = searchInput.value.trim();
  currentPage = 1; // Reset paginacji

  if (searchValue === '') {
    iziToast.show({
      title: '❌',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      color: 'ef4040',
    });
    return;
  }

  imgs.innerHTML = ''; // Czyścimy poprzednie wyniki
  notFoundTextEl.innerHTML = '';
  loaderClass.style.display = 'flex';
  loadMoreBtn.style.display = 'none'; // Ukryj Load More przed ładowaniem

  getImg(searchValue, currentPage, perPage)
    .then(data => {
      if (data.totalHits === 0) {
        notFoundTextEl.innerHTML = `Results for query <span>${searchValue}</span> not found!`;
        iziToast.show({
          title: '❌',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: '#ef4040',
          messageColor: 'white',
        });
        return;
      }

      createCardsMarkup(data.hits);
      if (data.totalHits > perPage) {
        loadMoreBtn.style.display = 'block'; // Pokaż Load More
      }
    })
    .catch(console.error)
    .finally(() => {
      loaderClass.style.display = 'none';
    });

  searchInput.value = '';
}

function handleLoadMore() {
  currentPage += 1; // Przejdź do następnej strony
  loaderClass.style.display = 'flex';
  loadMoreBtn.style.display = 'none'; // Ukryj przycisk podczas ładowania

  getImg(searchValue, currentPage, perPage)
    .then(data => {
      createCardsMarkup(data.hits);

      const totalPages = Math.ceil(data.totalHits / perPage);
      if (currentPage >= totalPages) {
        loadMoreBtn.style.display = 'none'; // Ukryj przycisk po osiągnięciu końca
        iziToast.show({
          title: 'ℹ️',
          message: "We're sorry, but you've reached the end of search results.",
          backgroundColor: '#4E75FF',
          messageColor: 'white',
        });
      } else {
        loadMoreBtn.style.display = 'block';
      }
    })
    .catch(console.error)
    .finally(() => {
      loaderClass.style.display = 'none';
    });
}
