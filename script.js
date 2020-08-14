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

// getMySalary ====== min = 1500, max = 2000 =============
function getMySalary(country) {
  mySalary = {}
  setInterval(() => {
  mySalary.salary = Math.round(1499.5 + Math.random() * 501) // min - 0.5 + Math.random() * (max - min + 1)
  mySalary.taxes = +(mySalary.salary * country.tax).toFixed(2)
  mySalary.profit = mySalary.salary - mySalary.taxes
    console.log(mySalary)
  }
  , 10000)
}

getMySalary(litva);
