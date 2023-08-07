/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
class Calculator {
    sum(a, b) {
      return a + b;
    }
  
    subtraction(a, b) {
      return a - b;
    }
  
    multiplication(a, b) {
      return a * b;
    }
  
    division(a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        throw new Error('Division by zero is not allowed.');
      }
    }
}
  
const calculator = new Calculator();
console.log(calculator.sum(5, 3));
console.log(calculator.subtraction(5, 3));
console.log(calculator.multiplication(5, 3));
console.log(calculator.division(6, 2));
  