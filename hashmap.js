//hashmap.js
/*
hash map: a hash map takes in a key value pair, produces a hash code, and stores the pair in a bucket. 
In the context of hash maps, the hash code needs to be a number. This number serves as the index to the bucket that will store the key value pair.
A hash map does not guarantee insertion order when you iterate over it. The translation of hash codes to indexes does not follow a linear progression from the first to the last index. Instead, it is more unpredictable, irrespective of the order in which items are inserted.
A collision occurs when two different keys generate the exact same hash code. Because they have the same hash code, they will land in the same bucket.
Each bucket will be a Linked List. When inserting into a bucket, if it’s empty, we insert the head of Linked List. If a head exists in a bucket, we follow that Linked List to add to the end of it.
A good hashing function eliminates as many collisions as possible.
we know that it’s time to grow our buckets size 
Our hash map class needs to keep track of two new fields, the capacity and the load factor.
The capacity is the total number of buckets we currently have.
The load factor is a number that we assign our hash map to at the start. It’s the factor that will determine when it is a good time to grow our buckets. Hash map implementations across various languages use a load factor between 0.75 and 1.

ensure provision of bucket access restrictions:
if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bound");
}
*/

import {LinkedList} from "../Linked_List/linkedList.js";


class HashMap {

  //class fields
  _capacity = 16;               //number of buckets
  _used = 0;                    //number of capacity used so far      
  _loadFactor = null;           //determines when to grow buckets
  _buckets = [this._capacity]; //the array of buckets
  _bucketsIndexArray = [];       //an array of indices used


  constructor (){
      //cater for incorrect invocation i.e not using 'new' keyword
      if(!(this instanceof HashMap)) {
          //throw error:
          throw Error('Error: Incorrect invocation needs new key word');
          //or
          //return new HashMap:
        // return new HashMap();
      }else{
      console.log('constructing HashMap');
      //initialise capacity to 16 buckets
      this._capacity = 16;                         //initial number of buckets 16
      //grow buckets once 75% of capacity used
      this._loadFactor = 0.75;                        //useful load factor  
      
      //initialise a set of buckets
      this.initialiseBuckets();
    }

  }

  //getters & setters
  


  //class methods

  /*
    hash(key) takes a key and produces a hash code with it.
    Hash maps could accommodate various data types for keys like numbers, strings, objects.
    But for this project, only handle keys of type strings.
  */
  hash (key) {
      let hashCode = 0;
        
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
      }
  
      return hashCode;
    } 

  /*
  get(key) takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
  */
  get key () {
    let value = 0;

    return value;
  }

  /*
    set(key, value) takes two arguments, the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten or we can say that we update the key’s value
    Grow bucket size when needed, by calculating if buckets has reached the load factor.
    Cover at time of set() 
  */ 

  set (key,value) {
    let growBuckets = false;
    console.log('Setting HashMap key: ',key,', value: ',value);
    let hashCode = this.hash (key);
    //console.log('Hash code for ',key,' is hashCode ', hashCode);
    let bucketIndex = hashCode;
    while(bucketIndex >= this._capacity){
      bucketIndex = bucketIndex % this._capacity;   
    }
    //console.log('bucketIndex: ',bucketIndex);
    //ensure provision of bucket access restrictions:
    if (bucketIndex < 0 || bucketIndex >= this._buckets.length) {
      throw new Error("Trying to access index out of bound");
    }else{
      let bucket = this._buckets[bucketIndex];
     // console.log('bucket.at(',bucketIndex,'): ',bucket.at(bucketIndex));
      if(this._bucketsIndexArray.includes(bucketIndex)) {
        console.log('reusing bucket ',bucketIndex );
      }else{
        this._bucketsIndexArray.push(bucketIndex);
        //console.log('incrementing buckets used')
        this._used++;                    //increment number of buckets used only at first entry
      }
      //storing both the original key and the associated vale as a single value array [ the key, the value ]
      bucket.append([key,value]);
     // console.log('total buckets used so far:  ', this._used);
      console.log('bucket[',bucketIndex,'] head is: ',bucket.head );
     // console.log('_buckets.length: ',this._buckets.length);
      if (this._used > this._buckets.length * this._loadFactor){
        this.growBuckets();
      }
      return growBuckets;
    }
  }

  /*
  has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
  */

  has (key) {
    let keyFound = false;
    let count = 0;
    let valArray;
    let bucketList;
    let size;
    while(count < this._capacity){
      bucketList = this._buckets[count];
      size = bucketList.size;
      for(let i =0; i< size; i++){
        //ensure provision of bucket access restrictions:
        if (i < 0 || i >= this._buckets.length) {
          throw new Error("Trying to access index out of bound");
        }else{
          valArray = bucketList.at(i).value;
        // console.log('valArray at ',i,', : ',valArray);
          if(valArray.includes(key)){
            keyFound = true;
           // console.log('True ', key, ' found in bucket: ', count);
          }else{
           // console.log('False ', key, ' not found in bucket: ', count);
          }
        }
      }
      count++;
    }
    return keyFound; 
  }

  /*
  remove(key) takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
  */

  remove (key) {
      let keyRemoved = false;
      if(this.has(key)){
        console.log('key found so removing: ', key);
        //remove key

        keyRemoved = true;
      }else{
        console.log('key Not found - unable to remove ', key);
      }
      return keyRemoved;
  }

  /*
  length() returns the number of stored keys in the hash map.
  */

  length () {
      let keysStored = 0;
      
      return keysStored;
  }

  /*
  clear() removes all entries in the hash map.
  */

  clear () {
      let mapCleared = false;

      return mapCleared;
  }

  /*
  keys() returns an array containing all the keys inside the hash map.
  */

  keys () {
      let keyArray = [];


      return keyArray;
  }

  /*
  values() returns an array containing all the values.
  */

  values () {
      let valArray = [];


      return valArray;
  }

  /*
  entries() returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]  NB hash map does not preserve insertion order!
  */

  entries () {
      let entArray = [];      // array of all k:v pairs  [ [key:value], [k:v], [k:v], ..... ]
      
      let count = 0;
      let valArray;
      let bucketList;
      let size;
      while(count < this._capacity){
        bucketList = this._buckets[count];
        size = bucketList.size;
        for(let i =0; i< size; i++){
          //ensure provision of bucket access restrictions:
          if (i < 0 || i >= this._buckets.length) {
            throw new Error("Trying to access index out of bound");
          }else{
            entArray.push(bucketList.at(i).value);
            //console.log('entArray at ',i,', : ',entArray);
          }
        }
        count++;
      }
      return entArray
  }

  //create container for an initially empty LinkedList
  createBucket () {
    const bucket = new LinkedList();
    return bucket;
  }

  //initialise an array of buckets to initial capacity
  initialiseBuckets () {
      for (let i = 0; i < this._capacity; i++) {
        this._buckets[i] = this.createBucket();
    }
  }

  growBuckets () {
    let newBuckets =0;
    console.log('Growing buckets from current:', this._capacity);
    return newBuckets;
  }

  displayBucket (index){
    console.log('Bucket: ',index, ' : ', this._buckets[index]);
    return;
  } 

  displayBuckets () {
    let count = 0;
    do{
      console.log('index: ',count);
      if(!(this._buckets[count] === null )){
        this._buckets[count].toString();
      }
      count++;
    }while(count < this._buckets.length)
  }


}

export {HashMap};