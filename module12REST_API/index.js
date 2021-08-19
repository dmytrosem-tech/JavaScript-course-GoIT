const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

class NewsApiService {
  constructor() {
    this.searchQuery = '';
  }

  fetchArticles() {
    const options = {
      headers: {
        Authorization: 'ae863941357b4c72b8f9092e1fc69ff4',
      },
    };

    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pagesSize=5&page=1`;

    fetch(url, options)
      .then(r => r.json())
      .then(console.log);
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();
  newsApiService.query = e.currentTarget.elements.query.value;
  newsApiService.fetchArticles();
}

function onLoadMore() {
  newsApiService.fetchArticles();
}
