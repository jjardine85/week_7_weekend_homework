const PubSub = require('../helpers/pub_sub.js');

const BeerListView = function(element) {
  this.element = element;
};

BeerListView.prototype.bindEvents = function() {
  PubSub.subscribe('Beer:all-beer', (event) => {
    const allBeerData = event.detail;
    this.populate(allBeerData);

  });

  this.element.addEventListener('change', (event) => {
    const selectedABV = event.target.value;
    console.log(selectedABV);
    PubSub.publish('SelectBeer:selected-abv', selectedABV);
  });
};

BeerListView.prototype.populate = function(allBeer) {
  const allABV = allBeer.map((abv) => {
    return beer.abv;
  });
  uniqueAbv = new Set(allABV);
  array = Array.from(uniqueAbv);
  console.log(array);
  const optionall = document.createElement('option');
  optionall.textContent = "All";
  optionall.value = "all";
  this.element.appendChild(optionall);
  array.forEach((region) => {
    const option = document.createElement('option');
    option.textContent = region;
    option.value = region;
    console.log(option);
    this.element.appendChild(option);
  })
};

module.exports = BeerListView;
