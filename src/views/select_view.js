const PubSub = require('../helpers/pub_sub.js');
const BeerDetailView = require('./beer_detail_view.js');

const SelectView = function (container) {
  this.container = container;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('beers:ready', (evt) => {
    this.renderBeerDetailViews(evt.detail);
  });
};

SelectView.prototype.renderBeerDetailViews = function (rates) {
  rates.forEach((name) => {
    const countryItem = this.createBeerListItem(name);
    this.container.appendChild(countryItem);
  });
};

SelectView.prototype.createBeerListItem = function (country) {
  const rateDetailView = new BeerDetailView();
  const countryDetail = rateDetailView.createBeerDetail(country);
  return countryDetail;
};

module.exports = SelectView;
