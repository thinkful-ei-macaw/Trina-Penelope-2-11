'use strict';
function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function(){
      return 'hello;';
    }

  };
} 
console.log(createMyObject());


const oldObj = {
  cats: 'cats',
  dogs: 'dogs',
};
function updateObject(obj){
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
}
let newObj = updateObject(oldObj);
console.log(newObj);