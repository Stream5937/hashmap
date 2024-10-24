import {HashMap} from "./hashmap.js";

const test = new HashMap();

//TEST SET

test.set('apple', 'red');
console.log('\n');
test.set('banana', 'yellow');
console.log('\n');
console.log('has key apple: ',test.has('apple'));      //expect true
console.log('has key carrot',test.has('carrot'));     //expect false
/*
test.set('carrot', 'orange');
console.log('\n');
test.set('dog', 'brown');
console.log('\n');
test.set('elephant', 'gray');
/** *//*
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

console.log('\n-----------------');
test.displayBucket(11);
console.log('\n-----------------');
test.displayBuckets();
console.log('\n-----------------');

/**/