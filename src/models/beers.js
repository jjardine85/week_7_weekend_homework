const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Beers = function () {
  this.beerData = null;
}

Beers.prototype.getData = function () {
  const url = 'https://api.punkapi.com/v2/beers?page=1&per_page=80';
  const request = new Request(url);
  request.get()
    .then((activity) => {
      this.beerData = activity;
      PubSub.publish('beers:ready', this.beerData);
  })
    .catch((err) => {
      PubSub.publish('beers:error', err);
    });
};

module.exports = Beers;
