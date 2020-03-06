'use strict';

const zveri = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const logItems = function(array) {

      for(let i=0;  i < zveri.length; i=i+1) {
          console.log(`${i + 1} - ${zveri[i]}`);
      }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);