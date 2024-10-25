import {HashMap} from "./hashmap.js";

const test = new HashMap();

//TEST SET

test.set('apple', 'red');
console.log('\n');
test.set('banana', 'yellow');
/*
console.log('\n');
console.log('has key apple: ',test.has('apple'));      //expect true
console.log('has key carrot',test.has('carrot'));     //expect false

console.log('\n');
console.log('remove key apple: ',test.remove('apple'));      //expect true
console.log('remove key carrot', test.remove('carrot'));     //expect false
*/
console.log('\n----------------------------------------------------------------------------------');
console.log('\n');
console.log('entries: ', test.entries());
console.log('\n----------------------------------------------------------------------------------');
console.log('\n');
test.set('carrot', 'orange');
console.log('\n');
test.set('dog', 'brown');
console.log('\n');
test.set('elephant', 'gray');
console.log('\n');
test.set('frog', 'green');
console.log('\n');
test.set('grape', 'purple');
console.log('\n');
test.set('hat', 'black');
console.log('\n');
test.set('ice cream', 'white');
console.log('\n');
test.set('jacket', 'blue');
console.log('\n');
test.set('kite', 'pink');
console.log('\n');
test.set('lion', 'golden');
/*
console.log('\n-----------------');
test.displayBucket(11);
console.log('\n-----------------');
test.displayBuckets();
console.log('\n-----------------');
*/
console.log('\n----------------------------------------------------------------------------------');
console.log('\n');
console.log('entries: ', test.entries());
console.log('\n----------------------------------------------------------------------------------');
/*
console.log('this_entArray ', test._entArray);
console.log('\n----------------------------------------------------------------------------------');
console.log('\n');
console.log('keys: ', test.keys());
console.log('\n----------------------------------------------------------------------------------');
console.log('values: ', test.values());
console.log('\n----------------------------------------------------------------------------------');
*//*
//async--------------------------------------------------
console.log('\n-------------------------------async clear()--------------------------------------');
test.clear();
console.log('\n-------------------------------async clear()--------------------------------------');
//async--------------------------------------------------
*/
console.log('\n-------------------------------remove (key) --------------------------------------');
test.remove('carrot');
test.remove('carottt');