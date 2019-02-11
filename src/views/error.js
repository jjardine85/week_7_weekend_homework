const PubSub = require('../helpers/pub_sub.js');

const Error = function (container) {
  this.container = container;
};

Error.prototype.bindEvents = function () {
  PubSub.subscribe('beers:error', (evt) => {
    const err = evt.detail;
    this.render(err);
  });
};


Error.prototype.render = function (err) {
  console.error(err);

  this.container.innerHTML = '';
  const errorMessage = document.createElement('p');
  errorMessage.textContent = 'Error.';
  this.container.appendChild(errorMessage);
};

module.exports = Error;
