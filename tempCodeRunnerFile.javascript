function buildFunction() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push((function(j) {})(i));
  }
  return arr;
}

var fs = buildFunction();

fs[0]()
