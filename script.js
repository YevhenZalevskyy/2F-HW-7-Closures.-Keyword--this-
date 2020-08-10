const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// getMyTaxes ============================================
Object.prototype.getMyTaxes = function(salary) {
  console.log('#1 My taxes is: ' + this.tax * salary);
}

getMyTaxes.call(litva, 1000)
// Or:
litva.getMyTaxes(1000)

// getMiddleTaxes ========================================
Object.prototype.getMiddleTaxes = function() {
  console.log('#2 Middle taxes: ' + this.tax * this.middleSalary);
}

getMiddleTaxes.call(litva)

// getTotalTaxes =========================================
Object.prototype.getTotalTaxes = function() {
  console.log('#3 Total taxes in IT: ' + this.tax * this.middleSalary * this.vacancies);
}

getTotalTaxes.call(litva)

// getMySalary (repeat every 10 seconds) =================
function getMySalary(country) {
  mySalary = {}
  mySalary.salary = Math.round(1499.5 + Math.random() * 501) // min - 0.5 + Math.random() * (max - min + 1)
  mySalary.taxes = +(mySalary.salary * country.tax).toFixed(2)
  mySalary.profit = mySalary.salary - mySalary.taxes
  return mySalary
}

let timer = setInterval(() => console.log(getMySalary(litva)), 10000);
// stop after 1 minute
setTimeout(() => { clearInterval(timer)}, 61000);



// ТУТ НЕ ДИВІТЬСЯ. ЦЕ ДЛЯ МЕНЕ))
////////////////////////////////////////////////////////////////
// const person = new Object({
//   name: 'Ivan',
//   age: 30,
//   greet: function() {
//     console.log('Greet!');
//   },
//   logInfo: function(job, phone) {
//     console.group(`${this.name} info:`)
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`Job is ${job}`);
//     console.log(`Phone is ${phone}`);
//     console.groupEnd
//   }
// })
//
//
// const lena = Object.create(person)
// lena.name = 'Elena'
// lena.age = 28
//
// const str = new String('I am string')
//
// person.logInfo()
// person.logInfo.bind(lena)()
// person.logInfo.bind(lena, 'Frontend', '34-612-21-4548')()
// person.logInfo.call(lena, 'Frontend', '34-612-21-4548')
// person.logInfo.apply(lena, ['Frontend', '34-612-21-4548'])
//
// /////======================
//
// const array = [1, 2, 3, 4, 5]
//
// // function multBy(arr, n) {
// //   return arr.map(function(i) {
// //     return i * n
// //   })
// // }
// // console.log(multBy(array, 5));
//
// Array.prototype.multBy = function(n) {
//   return this.map(function(i) {
//     return i * n
//   })
// }
// console.log(array.multBy(3));
// console.log([1, 2, 3].multBy(2));
