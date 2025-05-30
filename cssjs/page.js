function showMore(btn,id) {
  var x = document.getElementById(id);
  if (x.tagName.toLowerCase()=="div") {
    if (x.style.display == "none") {
      x.style.display = "block";
      btn.innerHTML = "Show less"; 
    } else if (x.style.display == "block") {
      x.style.display = "none"; 
      btn.innerHTML = "Show more";
    }
  }
  if (x.tagName.toLowerCase()=="span") {
    if (x.style.visibility == "hidden") {
      x.style.visibility = "visible"; 
      btn.innerHTML = "Show less"; 
    } else if (x.style.visibility == "visible") {
      x.style.visibility = "hidden";
      btn.innerHTML = "Show more";
    }
  }
}
