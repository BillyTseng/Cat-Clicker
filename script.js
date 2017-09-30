var cat = document.getElementById('cat');
var clickResult = document.getElementById('clickResult');
var counter = 1;
cat.addEventListener('click', function(){
  console.log(counter);
  clickResult.innerHTML = '<p id="clickResult">Click counter: '+ counter +'</p>'
  counter++;
}, false);
