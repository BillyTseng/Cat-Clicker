var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Kitty');
  this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

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

ko.applyBindings(new ViewModel());
