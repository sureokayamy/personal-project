function myFunction() {
    // Declare variables
    var input, filter, ul1, ul2, ul3, li1, li2, li3, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul1 = document.getElementById("myUL1");
    ul2 = document.getElementById("myUL2");
    ul3 = document.getElementById("myUL3");
    li1 = ul1.getElementsByTagName('li');
    li2 = ul2.getElementsByTagName('li');
    li3 = ul3.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }