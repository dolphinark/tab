let btn = document.querySelectorAll(".tab button");
let imgs = document.querySelectorAll(".imgs img");

for (let i = 0; i < btn.length; i++) {
  btn[i].index = i;
  btn[i].onmouseover = function () {
    this.style.background = "pink";

    //排他思想
    for (let j = 0; j < btn.length; j++) {
      imgs[j].style.display = "none";
    }
    imgs[i].style.display = "block";
  };
  btn[i].onmouseout = () => {
    btn[i].style.backgroundColor = "lightgrey";
  };
}
