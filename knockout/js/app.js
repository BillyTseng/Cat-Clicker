var initialCats = [
  {
    name: 'poplinre',
    clickCount: 0,
    imgSrc: 'img/cat0.jpg',
    nickname: [{ name: 'pop' }, { name: 'poppy' }]
  },
  {
    name: 'chewie',
    clickCount: 0,
    imgSrc: 'img/cat1.jpg',
    nickname: [{ name: 'chew' }]
  },
  {
    name: 'jetske',
    clickCount: 0,
    imgSrc: 'img/cat2.jpg',
    nickname: [{ name: 'cake' }, { name: 'airplane' }]
  },
  {
    name: 'xiaozhen',
    clickCount: 0,
    imgSrc: 'img/cat3.jpg',
    nickname: [{ name: 'zhen' }, { name: 'chen' }]
  },
  {
    name: 'yestema',
    clickCount: 0,
    imgSrc: 'img/cat4.jpg',
    nickname: [{ name: 'yesman' }]
  }
];

function cat(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nickname = ko.observable(data.nickname);

  this.level = ko.computed(function() {
    if (this.clickCount() >= 20) {
      return 'Teen';
    } else if (this.clickCount() >= 10) {
      return 'Infant';
    } else {
      return 'Newborn';
    }
  }, this);
}

var ViewModel = function() {
  var self = this;
  this.catList = ko.observableArray([]);
  initialCats.forEach(function(catItem) {
    self.catList.push(new cat(catItem));
  });
  this.currentCat = ko.observable(this.catList()[0]);
  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  this.catSwitcher = function(clickedCat) {
    self.currentCat(clickedCat);
  };
}

ko.applyBindings(new ViewModel());
