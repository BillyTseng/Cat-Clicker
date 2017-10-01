var elements = document.getElementsByClassName("catimg");
var catNameArray = ["poplinre", "chewie"];

for (var i = 0; i < elements.length; i++) {
  var cat = elements[i];
  var catName = elements[i].previousElementSibling;
  catName.innerHTML = catNameArray[i];
  cat.nextElementSibling.value = 0;
  cat.addEventListener('click', clickCounter, false);
}

function clickCounter(){
  var result = this.nextElementSibling;
  result.value++;
  result.innerHTML = 'Click counter: '+ result.value;
}
