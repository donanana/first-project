function changeNav(index) {
  var p = document.getElementById("section");
  switch (index) {
    case 1:
      p.innerHTML =
        '<iframe width=100% height=100% src="../w01/intro.html"></iframe>';
        // iframe 嵌入網頁
      p.style.backgroundColor = "azure";
      break;

    case 2:
      p.innerHTML =
        '<iframe width=100% height=100% src="../w01/pokemon.html"></iframe>';
      p.style.backgroundColor = "azure";
      break;

    case 3:
      p.innerHTML =
        '<iframe width=100% height=100% src="../w02/imageGallery.html"></iframe>';
      p.style.backgroundColor = "azure";
      break;

    case 4:
      p.innerHTML =
        '<iframe width=100% height=100% src="../w02/blog.html"></iframe>';
      p.style.backgroundColor = "azure";
      break;

    case 5:
      p.innerHTML =
        '<iframe width=100% height=100% src="../w03/div.html"></iframe>';
      p.style.backgroundColor = "azure";
      break;

    case 6:
      p.innerHTML =
        '<iframe width=100% height=100% src="../w04/tku60.html"></iframe>';
      p.style.backgroundColor = "azure";
      break;
  }
}
