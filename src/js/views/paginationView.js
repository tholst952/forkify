import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    // we are at page 1 & there are other pages
    if (this._data.page === 1 && numPages > 1) {
      return 'page 1, and others';
    }

    // we are on the last page
    if (this._data.page === numPages && numPages > 1) {
      return 'last page';
    }

    // we are on another page
    if (this._data.page < numPages) {
      return 'other page';
    }

    // we are at page 1 & there are NO other pages
    return 'only 1 page';
  }
}

export default new PaginationView();
