//Implement this code
// const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total);

//to implement this we create the object 
const calc = {
    total: 0,
    add(a) {
        this.total = this.total + a;
        return this;
    },
    multiply(a){
      this.total = this.total * a;
      return this;
    },
    subtract(a){
        this.total = this.total -a;
        return this;
    }
}

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);