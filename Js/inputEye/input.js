const imgs = document.getElementsByTagName("img");
const inputs = document.getElementsByTagName("input");
console.log(imgs);
console.log(inputs);
imgs[0].onclick = eyes(0);
imgs[1].onclick = eyes(1);

function eyes(index) {
  let flag = false;
  function fn() {
    console.log("img1");
    if (flag) {
      console.log(true);
      imgs[index].src = "./public/close.png";
      inputs[index].type = "password";
      flag = !flag;
    } else {
      console.log(false);
      imgs[index].src = "./public/open.png";
      inputs[index].type = "text";
      flag = !flag;
    }
  }
  return fn;
}
console.log(eyes());
