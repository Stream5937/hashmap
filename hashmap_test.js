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

console.log('\n----------------------------------------------------------------------------------');
console.log('\n');
console.log('entries: ', test.entries());
console.log('\n----------------------------------------------------------------------------------');
*/
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
*//*
console.log('\n--48----------------'); 
test.displayBuckets();
console.log('\n--50----------------');
/*
console.log('\n----------------------------------------------------------------------------------');
console.log('\n');
console.log('54 entries: ', test.entries());
console.log('\n----------------------------------------------------------------------------------');
*//*
console.log('this_entArray ', test._entArray);
console.log('\n----------------------------------------------------------------------------------');
console.log('\n');
console.log('keys: ', test.keys());
console.log('\n----------------------------------------------------------------------------------');
console.log('values: ', test.values());
console.log('\n----------------------------------------------------------------------------------');
/*
//async--------------------------------------------------
console.log('\n-------------------------------async clear()--------------------------------------');
test.clear();
console.log('\n-------------------------------async clear()--------------------------------------');
//async--------------------------------------------------
*/
/*
console.log('\n-------------------------------remove (key) --------------------------------------');
test.remove('carrot');
test.remove('carottt');
*/
/*
console.log('\n----------------------------------------------------------------------------------');
console.log('get("grape"): ', test.get('grape'));
console.log('\n----------------------------------------------------------------------------------');
console.log('get("jacket"): ', test.get('jacket'));
console.log('\n----------------------------------------------------------------------------------');
console.log('get("jokeit"): ', test.get('jokeit'));
console.log('\n----------------------------------------------------------------------------------');
/**/
/*
console.log('\n----------------------------------------------------------------------------------');
console.log('keysStored: ', test.length());

console.log('\n----------------------------------------------------------------------------------');
test.displayBuckets();
console.log('\n----------------------------------------------------------------------------------');
*/
//add more key value pairs to grow buckets
test.set('apple', 'red');
test.set('clouds', 'grey');
//console.log('96 buckets used so far: ',test.used);
test.set('blackberries', 'black');
test.set('raspberries', 'red');
test.set('gooseberries', 'green');
test.set('blueberries', 'blue');
//console.log('101 buckets used so far: ',test.used);
test.set('wrens', 'tiny');
test.set('sparrows', 'small');
test.set('falcons', 'medium');
//console.log('\n----------------------------------------------------------------------------------');
//console.log('106 buckets used so far: ',test.used);
//test.displayBuckets();
test.set('eagles', 'large');
console.log('112 buckets used so far: ',test.used);
console.log('\n');
console.log('109 entries: ', test.entries());
console.log('\n----------------------------------------------------------------------------------');