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
  this.currentCat = ko.observable(new cat({
    clickCount: 0,
    name: 'Kitty',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    nickname: [
      { name: 'Bert' },
      { name: 'Charles' },
      { name: 'Denise' }
    ]
  }));
  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
}

ko.applyBindings(new ViewModel());
