function *upper (items) {
  for (var k = 0; k < items.length; k++) {
    try{
      yield items[k].toUpperCase();
    }catch(e){
      yield null;
    }
  }
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
  console.log(item);
}
// want to log: A, B, null, C
