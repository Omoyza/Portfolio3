var navListItems = document.getElementsByClassName("navigation_item"); // this returns an array with each item that contains the class name navigation__item.

for(var i = 0; i < navListItems.length; i++){
  // you can only apply condition to individual elements so we need to call each
  //element of the array by using [] and an index so [index].
  //Here we are looping on all the elements of the array and assigning them a condition
    navListItems[i].onclick = function(){
      // for each item of the array execute the following function when it becomes clicked.
        document.getElementById("navi-toggle").checked = false; //close the menu by unchecking the checkbox
    };
}
