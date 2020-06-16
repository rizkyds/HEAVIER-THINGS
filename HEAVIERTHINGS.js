var slideId = [1,1];
var slideList = ["slider1st", "slider2nd"]
showSlides(1, 0);
showSlides(1, 1);

function forwardSlide(x, y) {
  showSlides(slideId[y] += x, y);
}

function showSlides(x, y) {
  var i;
  var z = document.getElementsByClassName(slideList[y]);
  if (x > z.length) {slideId[y] = 1}    
  if (x < 1) {slideId[y] = z.length}
  for (i = 0; i < z.length; i++) {
     z[i].style.display = "none";  
  }
  z[slideId[y]-1].style.display = "block";  
}