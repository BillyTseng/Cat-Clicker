var model = {
  currentCat: null,
  cats:[
    {
      name: 'poplinre',
      clickCount: 0,
      imgSrc: 'img/cat0.jpg'
    },
    {
      name: 'chewie',
      clickCount: 0,
      imgSrc: 'img/cat1.jpg'
    },
    {
      name: 'jetske',
      clickCount: 0,
      imgSrc: 'img/cat2.jpg'
    },
    {
      name: 'xiaozhen',
      clickCount: 0,
      imgSrc: 'img/cat3.jpg'
    },
    {
      name: 'yestema',
      clickCount: 0,
      imgSrc: 'img/cat4.jpg'
    }
  ]
};

var octopus = {
  init: function() {
    model.currentCat = model.cats[0];

    catListView.init();
    catView.init();
  },

  getCurrentCat: function() {
      return model.currentCat;
  },

  setCurrentCat: function(cat) {
      model.currentCat = cat;
  },

  getCats: function() {
      return model.cats;
  },

  clickCounter: function() {
    model.currentCat.clickCount++;
    catView.render();
  }
};

var catView = {
  init: function() {
    var showcat = document.getElementById("showcat");
    this.render();
  },

  render: function() {
    var cat = octopus.getCurrentCat();
    var strHtml = '';
    strHtml += '<p id="catname">' + cat.name + '</p>';
    strHtml += '<img id="cat" class="catimg" src=' + cat.imgSrc +' width="300px" height="200px">';
    strHtml += '<p id="clickResult">Click counter: ' + cat.clickCount + '</p>';
    showcat.innerHTML = strHtml;
    var catImage = showcat.childNodes[1];
    catImage.addEventListener('click', function() {
      octopus.clickCounter();
    }, false);
  }
};

var catListView = {
  init: function() {
    this.render();
  },

  render: function() {
    var elem = document.createElement('div');
    var showcat = document.getElementById("showcat");
    var cats = octopus.getCats();
    var strHtml = '<ul id="namelist">';

    for (var i = 0; i < cats.length; i++) {
      strHtml += '<li>' + cats[i].name + '</li>';
      elem.innerHTML = strHtml;
    };
    strHtml += "</ul>";
    document.body.insertBefore(elem, showcat);
    var namelist = document.getElementById("namelist");
    var c = namelist.childNodes;
    for (var i = 0; i < c.length; i++) {
      var cat = cats[i];
      c[i].addEventListener('click', function(catCopy) {
        return function() {
          octopus.setCurrentCat(catCopy);
          catView.render();
        }
      }(cat), false);
    }
  }
};

octopus.init();
