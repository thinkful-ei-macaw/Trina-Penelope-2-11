'use strict';
//https://courses.thinkful.com/ei-js-v1/checkpoint/10
let loaf = {
  flour:300,
  water:210,
  hydration(){
   return this.water / this.flour * 100
  }
}
console.log(loaf.flour, loaf.water);
let hydrate = loaf.hydration();
console.log(hydrate);

const obj = {
  foo:'bizz',
  bar: 153,
  fum: [1, 'two', 3],
  quux: 'Trina is awesome!',
  spam: function(){
    console.log('hello');
  },
}
for (const property in obj){
  console.log(`${property}: ${obj[property]}`);
};

const anothaObj = {
  meals: ['breakfast','second breakfast','elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};
console.log(anothaObj.meals[3]);

const workingPeeps = [
  {
    name: 'Trina',
    jobTitle: 'Photographer'
  },
  {
    name: 'Joseph',
    jobTitle: 'Acupuncturist',
    boss: 'Laozi'
  },
  {
    name: 'Mr. Whiskers',
    jobTitle: 'Astronaut',
    boss: 'Freddie Mercury'
  },
  {
    name: 'Sponegebob',
    jobTitle: 'Fry cook',
    boss:'Mr. Krabs'
  },
  {
    name: 'Elvis',
    jobTitle: 'King',
  }
];
workingPeeps.forEach(obj => obj.boss ? console.log(`${obj.jobTitle} ${obj.name} reports to ${obj.boss}.`) : console.log(`${obj.jobTitle} ${obj.name} doesn't report to anybody.`));


function decode (sentence) {
  let words = sentence.split(' ');
  console.log(words);
  let result = '';
  for (let element in words){
    const cipher = {
      a: words[i].charAt(2),
      b: words[i].charAt(3),
      c: words[i].charAt(4),
      d: words[i].charAt(5) 
    }
  }
}
decode('craft block argon meter bells brown croon droop');


function createCharacter(){

}
