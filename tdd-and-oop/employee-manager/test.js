const Employee = require("./employee");
const Manager = require("./manager");

const hobbes = new Manager("Hobbes", 1000000, "Founder");
const calvin = new Manager("Calvin", 130000, "Director", hobbes);
const susie = new Manager("Susie", 100000, "TA Manager", calvin);
const lily = new Employee("Lily", 90000, "TA", susie);
const clifford = new Employee("Cliffoed", 90000, "TA", susie);

console.log(hobbes.calculateBonus(0.05)); // => 22500
console.log(calvin.calculateBonus(0.05)); // => 31500
console.log(susie.calculateBonus(0.05)); // => 45000
console.log(lily.calculateBonus(0.05)); // => 90000
console.log(clifford.calculateBonus(0.05)); // => 90000
