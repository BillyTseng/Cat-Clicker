function cat() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Kitty');
  this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
  this.nickname = ko.observableArray([
    { name: 'Bert' },
    { name: 'Charles' },
    { name: 'Denise' }
  ]);

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
  this.currentCat = ko.observable(new cat());
  this.incrementCounter = function() {
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  };


}

ko.applyBindings(new ViewModel());
