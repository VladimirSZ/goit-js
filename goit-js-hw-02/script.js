'use strict';

const animals = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const logItems = function(array) {

      for(let i=0;  i < animals.length; i=i+1) {
          console.log(`${i + 1} - ${animals[i]}`);
      }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);