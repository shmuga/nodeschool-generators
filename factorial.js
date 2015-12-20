function *factorial(n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    yield result *= i;
  }
}
for (var r of factorial(5)) {
  console.log( r );
}
