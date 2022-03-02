//Implement a function inside total to calculate total or average.
const student = {
    marks: [{
    subject: "50"
    },{
    subject: "50"
    },{
    subject: null
    },{
    subject: "50"
    },{
    subject: "50"
    }],
    total: function(){
      let total = 0;
      for(let i=0;i<this.marks.length;i++){
          let tempNumber = this.marks[i].subject;
          if(tempNumber!==null && isNaN(tempNumber)===false){
              console.log(tempNumber);
              total += Number(tempNumber);
          }
      }
      return total;            

    },
    average: function(){
        let noOfStudents = this.marks.length;
        return parseFloat(this.total()/noOfStudents);
    },
    }

//Implement a function inside total to calculate total or average.
console.log(student.total());
console.log(student.average());
//implement same function using reduce
total: function () {
    let total = this.marks.reduce((accm, mark) => {
        let tempNumber = mark.subject;
        if (tempNumber != null && isNaN(tempNumber) === false) {
            return accm + Number(tempNumber);
        }
        return accm;
    }, 0);
    return total;
},