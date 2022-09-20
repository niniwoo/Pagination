// assign how many contents will be showing
var showContents = 10; 
var contentsArray = document.getElementsByClassName("contact-item");
var contentsNum = contentsArray.length; // totle number of students

//show the showContents() contents according to currentPage
function showPage (currentPage) {
  //showing or hiding the contents depending on the current page
  for (var i = 0; i < contentsNum; i++) {
    if (i < currentPage * showContents || i >= (currentPage + 1) * showContents) {
      contentsArray[i].style.display = 'none';
    } 
    else {
      contentsArray[i].style.display = 'block';
    }
  }
}
    
function btnShow () {
  var paginationUl = document.getElementById("pagination li");
  //  Calculating the how many pages will be needed
  var pages = Math.ceil(contentsNum / showContents); 
  for (var i = 0; i < pages; i++) {
    var li = document.createElement('li');
    li.onclick = (function (j) { return function () {showPage(j);} }(i)); 

    // show the specific pages
    var textnode = document.createTextNode(i + 1); 
    li.appendChild(textnode);
    paginationUl.appendChild(li);
  }
}

// showing first pages and button
showPage(0);
btnShow();