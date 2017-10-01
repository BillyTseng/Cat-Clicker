var catNameArray = ["poplinre", "chewie", "jetske", "xiaozhen", "yestema"];
var showcat = document.getElementById("showcat");
var elem = document.createElement('div');
var strHtml = '<ul id="namelist">';

for (var i = 0; i < catNameArray.length; i++) {
  strHtml += '<li>' + catNameArray[i] + '</li>';
  elem.innerHTML = strHtml;
};
strHtml += "</ul>";
document.body.insertBefore(elem, showcat);

var namelist = document.getElementById("namelist");
var c = namelist.childNodes;
for (var i = 0; i < c.length; i++) {
  c[i].value = 0;
  c[i].id = i;
  c[i].addEventListener('click', showCat, false);
}

function showCat() {
  var strHtml = '';
  strHtml += '<p id="catname">' + catNameArray[this.id] + '</p>';
  strHtml += '<img id="cat" class="catimg" src="img/cat' + this.id +'.jpg" width="300px" height="200px">';
  strHtml += '<p id="clickResult">Click counter: ' + this.value + '</p>';
  showcat.innerHTML = strHtml;

  var catImage = showcat.childNodes[1];
  catImage.nextElementSibling.value = 0;
  catImage.addEventListener('click', clickCounter(this.id), false);
}

function clickCounter(id) {
  return function() {
    var result = c[id];
    result.value++;
    this.nextElementSibling.innerHTML = 'Click counter: '+ result.value;
  }
}
