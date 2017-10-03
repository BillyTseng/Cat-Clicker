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

    adminView.init();
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
  },

  findIndex: function(name) {
    for(var i = 0; i < model.cats.length; i++){
      if (model.cats[i].name === name)
        return i;
    }
  }
};

var adminView = {
  init: function() {
    var adminBtn = document.getElementById('adminbtn');
    var adminform = document.getElementById('adminform');
    var catnameinput = document.getElementById('catnameinput');
    var imgurl = document.getElementById('imgurl');
    var clickcnt = document.getElementById('clickcnt');
    var save = document.getElementById('save');

    adminBtn.addEventListener('click', function(){
      adminView.render();
    });
    save.addEventListener('click', function() {
      console.log("SAVEE!");
      var currentCat = octopus.getCurrentCat()
      var cats = octopus.getCats();
      var cat = cats[octopus.findIndex(currentCat.name)];
      cat.name = catnameinput.value;
      cat.imgSrc = imgurl.value;
      cat.clickCount = clickcnt.value;
      octopus.setCurrentCat(cat);
      catView.render();
      catListView.render();
    });
  },

  render: function() {
    if (adminform.style.display !== "inline-block") {
      var cat = octopus.getCurrentCat();
      adminform.style.display = "inline-block";
      catnameinput.value = cat.name;
      imgurl.value = cat.imgSrc;
      clickcnt.value = cat.clickCount;
    }
    else
      adminform.style.display = "none";
  },

  hide: function() {
    adminform.style.display = "none";
  }
};

var catView = {
  init: function() {
    var showcat = document.getElementById("showcat");
    this.render();
  },

  render: function() {
    var cat = octopus.getCurrentCat();
    adminView.hide();
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
    var namelist = document.getElementById("namelist");
    namelist.innerHTML = '';

    for (var i = 0; i < cats.length; i++) {
      var li = document.createElement('li');
      li.textContent = cats[i].name;
      namelist.appendChild(li);
    }

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
