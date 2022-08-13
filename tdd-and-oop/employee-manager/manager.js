const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, salary, title, manager, employees) {
    super(name, salary, title, manager);
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  calculateBonus(multiplier) {
    let sum = 0;
    for (let i = 0; i < this.employees.length; i++) {
      let employee = this.employees[i];
      if (employee instanceof Manager) {
        sum += this._totalSubSalary(employee);
      }
    }
    return sum * multiplier;
  }

  _totalSubSalary(employee) {
    let sum = 0;
    // recursive function to get the total salary of all employees under this manager
    for (let i = 0; i < employee.employees.length; i++) {
      let subEmployee = employee.employees[i];
      if (subEmployee instanceof Employee) {
        sum += subEmployee.salary;
      } else if (subEmployee instanceof Manager) {
        sum += this._totalSubSalary(subEmployee);
      }
    }
    return sum;
  }
}

const splinter = new Manager("Splinter", 100000, "Sensei");
const leo = new Manager("Leonardo", 90000, "Ninja", splinter);
const raph = new Manager("Raphael", 90000, "Ninja", leo);
const mikey = new Employee("Michelangelo", 85000, "Grasshopper", raph);
const donnie = new Employee("Donatello", 85000, "Grasshopper", raph);

console.log(splinter.calculateBonus(0.05)); // => 22500
//console.log(leo.calculateBonus(0.05)); // => 17500
//console.log(raph.calculateBonus(0.05)); // => 13000
module.exports = Manager;
