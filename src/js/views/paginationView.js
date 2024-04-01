import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = Number(btn.dataset.goto);

      handler(goToPage);
    });
  }

  _generateMarkupButton(num) {
    const curPage = this._data.page;
    const pageNum = num === 0 ? curPage - 1 : curPage + num;
    return ` 
      <button data-goto="${pageNum}" class="btn--inline pagination__btn--${
      num > 0 ? 'next' : 'prev'
    }">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-${num > 0 ? 'right' : 'left'}"></use>
        </svg>
        <span>Page ${pageNum}</span>
      </button>`;
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // we are at page 1 & there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButton(1);
    }

    // we are on the last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButton(0);
    }

    // we are on some other page
    if (curPage < numPages) {
      return this._generateMarkupButton(0) + this._generateMarkupButton(1);
    }

    // we are at page 1 & there are NO other pages
    return '';
  }
}

export default new PaginationView();
