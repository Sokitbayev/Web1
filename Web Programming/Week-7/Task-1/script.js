function f1() {
  var str = document.getElementById("a").innerHTML;
  var result = str.strike();
  document.getElementById("a").innerHTML = result;
}
function f2() {
  var str = document.getElementById("b").innerHTML;
  var result = str.strike();
  document.getElementById("b").innerHTML = result;
}
function f3() {
  var str = document.getElementById("c").innerHTML;
  var result = str.strike();
  document.getElementById("c").innerHTML = result;
}
function f4(){
  location.reload();
}
