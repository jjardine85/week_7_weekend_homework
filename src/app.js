const Beers = require('./models/beers.js');
const BeerDetailView = require('./views/beer_detail_view.js');
const SelectView = require('./views/select_view.js')
const BeerListView = require('./views/beer_list_view.js')

document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.querySelector('#beer-list');
  const beerListView = new SelectView(listContainer);
  beerListView.bindEvents();

  const beers = new Beers;
  beers.getData();
})
