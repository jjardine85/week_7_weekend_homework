const BeerDetailView = function () {

}

BeerDetailView.prototype.createBeerDetail = function (beer) {
  const beerDetail = document.createElement('div');
  beerDetail.classList.add('beer-detail');

  const img = document.createElement('img');
  img.src = beer.image_url;
  beerDetail.appendChild(img);

  const name = document.createElement('h3');
  name.textContent = beer.name + ": " + beer.tagline;
  beerDetail.appendChild(name);

  const detailsList = document.createElement('ul');
  const description = this.createDetailListItem('Meaning', beer.description);
  detailsList.appendChild(description);

  const foodPairings = this.createDetailListItem('Drink me while you eat', beer.food_pairing);
  detailsList.appendChild(foodPairings);

  beerDetail.appendChild(detailsList);
  return beerDetail;
};

BeerDetailView.prototype.createDetailListItem = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
};

module.exports = BeerDetailView;
